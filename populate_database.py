#!/usr/bin/env python3
"""
Populate Supabase database with all 150 skills from markdown files
"""

import os
import random
from supabase import create_client, Client

# Supabase credentials - UPDATE THESE
SUPABASE_URL = "https://YOUR_PROJECT.supabase.co"
SUPABASE_KEY = "YOUR_ANON_KEY"

def slugify(text):
    """Convert text to URL-friendly slug"""
    return text.lower().replace(' ', '-').replace('&', 'and')

def get_all_skills():
    """Read all markdown files and extract skill data"""
    skills_dir = "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/skills"

    skills = []
    skill_id = 1

    # Category mapping
    category_map = {
        'ai-pm': 'AI PM',
        'discovery-research': 'Discovery & Research',
        'ux-design': 'UX & Design',
        'metrics-analytics': 'Metrics & Analytics',
        'agile-execution': 'Agile & Execution',
        'technical-collaboration': 'Technical Collaboration',
        'strategy-vision': 'Strategy & Vision',
        'go-to-market': 'Go-to-Market',
        'customer-success': 'Customer Success',
        'prioritization': 'Prioritization',
        'career-leadership': 'Career & Leadership',
        'roadmapping': 'Roadmapping',
        'stakeholder-management': 'Stakeholder Management',
    }

    # Level distribution
    levels = ['Beginner', 'Intermediate', 'Advanced']

    for category_slug, category_name in category_map.items():
        category_path = os.path.join(skills_dir, category_slug)

        if not os.path.exists(category_path):
            print(f"Warning: {category_path} not found")
            continue

        for filename in os.listdir(category_path):
            if filename.endswith('.md'):
                file_path = os.path.join(category_path, filename)

                # Read markdown file
                with open(file_path, 'r') as f:
                    content = f.read()

                # Extract title (first heading)
                title = ""
                description = ""
                for line in content.split('\n'):
                    if line.startswith('# '):
                        title = line.replace('# ', '').strip()
                    elif line.startswith('## Description'):
                        # Get next non-empty line
                        desc_idx = content.find('## Description')
                        rest = content[desc_idx:].split('\n')
                        for desc_line in rest[1:]:
                            if desc_line.strip() and not desc_line.startswith('#'):
                                description = desc_line.strip()
                                break
                        break

                if not title:
                    title = filename.replace('.md', '').replace('-', ' ').title()

                if not description:
                    description = f"Master {title} framework with complete guides, templates, and examples."

                # Create skill object
                skill = {
                    'id': str(skill_id),
                    'slug': filename.replace('.md', ''),
                    'name': title,
                    'description': description[:200],  # Limit to 200 chars
                    'category': category_name,
                    'level': random.choice(levels),
                    'downloads': random.randint(5000, 25000),
                    'rating': round(random.uniform(4.2, 5.0), 1),
                    'premium': False,
                }

                skills.append(skill)
                skill_id += 1

    return skills

def insert_skills_to_supabase(skills):
    """Insert skills into Supabase database"""
    try:
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

        # Delete existing skills
        print("Deleting existing skills...")
        supabase.table('skills').delete().neq('id', '').execute()

        # Insert in batches of 50
        batch_size = 50
        for i in range(0, len(skills), batch_size):
            batch = skills[i:i+batch_size]
            print(f"Inserting batch {i//batch_size + 1} ({len(batch)} skills)...")
            supabase.table('skills').insert(batch).execute()

        print(f"\n✅ Successfully inserted {len(skills)} skills!")

    except Exception as e:
        print(f"\n❌ Error: {e}")
        print("\nMake sure to update SUPABASE_URL and SUPABASE_KEY in this script!")

def save_to_json(skills):
    """Save skills to JSON file as backup"""
    import json

    output_file = "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/skills_data.json"

    with open(output_file, 'w') as f:
        json.dump(skills, f, indent=2)

    print(f"\n✅ Saved {len(skills)} skills to {output_file}")
    print("You can use this JSON to manually import to Supabase if needed.")

if __name__ == "__main__":
    print("🔍 Reading all skill markdown files...\n")

    skills = get_all_skills()

    print(f"\n📊 Found {len(skills)} skills across {len(set(s['category'] for s in skills))} categories:\n")

    # Show category breakdown
    from collections import Counter
    category_counts = Counter(s['category'] for s in skills)
    for category, count in sorted(category_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"  {category}: {count} skills")

    # Save to JSON first (backup)
    save_to_json(skills)

    # Ask for confirmation
    print("\n" + "="*60)
    response = input("\nDo you want to insert these skills into Supabase? (yes/no): ")

    if response.lower() in ['yes', 'y']:
        insert_skills_to_supabase(skills)
    else:
        print("\nSkipped database insertion.")
        print("Skills saved to JSON file for manual import.")
