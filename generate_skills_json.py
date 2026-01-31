#!/usr/bin/env python3
"""
Generate JSON file with all 150 skills from markdown files
"""

import os
import json
import random

def get_all_skills():
    """Read all markdown files and extract skill data"""
    skills_dir = "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/skills"

    skills = []

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
                        if desc_idx >= 0:
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

    return skills

if __name__ == "__main__":
    print("🔍 Reading all skill markdown files...\n")

    skills = get_all_skills()

    print(f"\n📊 Found {len(skills)} skills across categories:\n")

    # Show category breakdown
    from collections import Counter
    category_counts = Counter(s['category'] for s in skills)
    for category, count in sorted(category_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"  {category}: {count} skills")

    # Save to JSON
    output_file = "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/skills_data.json"

    with open(output_file, 'w') as f:
        json.dump(skills, f, indent=2)

    print(f"\n✅ Saved {len(skills)} skills to skills_data.json")
    print("\nYou can import this JSON to Supabase:")
    print("1. Go to Supabase Dashboard → Table Editor → skills")
    print("2. Click 'Insert' → 'Insert rows via spreadsheet'")
    print("3. Paste the JSON content")
