#!/usr/bin/env python3
"""
Generate PM skills in bulk for the marketplace
"""

import os

# Define skills to create with category and content outline
skills_data = {
    "roadmapping": [
        {
            "name": "now-next-later-roadmap",
            "title": "Now-Next-Later Roadmap",
            "description": "Build flexible, outcome-focused roadmaps that communicate priorities without rigid timelines",
            "sections": ["What is Now-Next-Later", "When to Use", "Structure", "Examples", "Best Practices", "Common Mistakes", "Tips"]
        },
        {
            "name": "okr-based-roadmapping",
            "title": "OKR-Based Roadmapping",
            "description": "Align roadmap initiatives with company objectives and key results for strategic focus",
            "sections": ["OKR Basics", "Linking OKRs to Roadmap", "Tracking Progress", "Examples", "Pitfalls"]
        },
        {
            "name": "theme-based-roadmap",
            "title": "Theme-Based Roadmap",
            "description": "Organize roadmap around strategic themes instead of features for better stakeholder communication",
            "sections": ["What are Themes", "How to Define Themes", "Theme Examples", "Communication", "When to Use"]
        },
        {
            "name": "feature-flagging-strategy",
            "title": "Feature Flagging Strategy",
            "description": "Use feature flags for gradual rollouts, A/B testing, and risk mitigation",
            "sections": ["What are Feature Flags", "Use Cases", "Implementation", "Best Practices", "Cleanup"]
        },
        {
            "name": "release-planning",
            "title": "Release Planning",
            "description": "Plan and coordinate product releases across teams and stakeholders",
            "sections": ["Release Types", "Planning Process", "Communication", "Go/No-Go Decisions", "Post-Release"]
        }
    ],
    "agile-execution": [
        {
            "name": "daily-standup-best-practices",
            "title": "Daily Standup Best Practices",
            "description": "Run effective daily standups that keep team aligned without wasting time",
            "sections": ["Purpose", "Format", "Anti-patterns", "Remote Standups", "PM Role"]
        },
        {
            "name": "sprint-retrospective",
            "title": "Sprint Retrospective",
            "description": "Facilitate productive retros that drive continuous improvement",
            "sections": ["Retro Formats", "Facilitation Tips", "Action Items", "Common Issues", "Examples"]
        },
        {
            "name": "definition-of-done",
            "title": "Definition of Done",
            "description": "Establish clear completion criteria for user stories and features",
            "sections": ["Why It Matters", "Checklist Items", "Examples by Team", "Enforcement", "Evolution"]
        }
    ],
    "ux-design": [
        {
            "name": "usability-testing",
            "title": "Usability Testing",
            "description": "Test designs with real users to identify UX issues before development",
            "sections": ["Test Types", "Planning", "Recruiting", "Facilitation", "Analysis", "Reporting"]
        },
        {
            "name": "information-architecture",
            "title": "Information Architecture",
            "description": "Organize content and features for intuitive navigation and findability",
            "sections": ["IA Basics", "Card Sorting", "Site Maps", "Navigation Patterns", "Best Practices"]
        },
        {
            "name": "accessibility-basics",
            "title": "Accessibility Basics for PMs",
            "description": "Ensure products are usable by people with disabilities",
            "sections": ["WCAG Guidelines", "Common Issues", "Testing Tools", "Inclusive Design", "Requirements"]
        }
    ],
    "technical-collaboration": [
        {
            "name": "working-with-engineers",
            "title": "Working Effectively with Engineers",
            "description": "Build strong PM-Engineering partnerships for successful product delivery",
            "sections": ["Communication Styles", "Earning Trust", "Technical Discussions", "Trade-offs", "Conflicts"]
        },
        {
            "name": "technical-debt-management",
            "title": "Technical Debt Management",
            "description": "Balance technical debt reduction with feature development",
            "sections": ["What is Tech Debt", "Measuring Impact", "Prioritization", "Allocation Strategy", "Advocacy"]
        },
        {
            "name": "architecture-decisions",
            "title": "Participating in Architecture Decisions",
            "description": "Contribute product perspective to technical architecture discussions",
            "sections": ["When to Engage", "Questions to Ask", "Trade-off Analysis", "User Impact", "Examples"]
        }
    ],
    "stakeholder-management": [
        {
            "name": "executive-presentations",
            "title": "Executive Presentations",
            "description": "Present to executives effectively with clarity, brevity, and impact",
            "sections": ["Executive Mindset", "Structure", "Data Presentation", "Q&A Handling", "Follow-up"]
        },
        {
            "name": "managing-up",
            "title": "Managing Up",
            "description": "Build effective working relationship with your manager",
            "sections": ["Understanding Your Manager", "Communication Cadence", "Asking for Help", "Providing Updates", "Career Discussions"]
        },
        {
            "name": "cross-functional-collaboration",
            "title": "Cross-Functional Collaboration",
            "description": "Work effectively across teams to ship products",
            "sections": ["Team Dynamics", "Shared Goals", "Conflict Resolution", "Decision Making", "Building Trust"]
        }
    ]
}

def generate_skill_content(skill):
    """Generate markdown content for a skill"""
    content = f"""# {skill['title']}

## Description
{skill['description']}

## When to Use
- [Context 1]
- [Context 2]
- [Context 3]

## Overview

{skill['title']} helps product managers {skill['description'].lower()}.

**Key Benefits:**
- Benefit 1
- Benefit 2
- Benefit 3

---

"""

    # Add sections
    for section in skill['sections']:
        content += f"""## {section}

### Key Points

**Point 1:**
- Detail A
- Detail B
- Detail C

**Point 2:**
- Detail A
- Detail B

**Point 3:**
- Detail A
- Detail B

---

"""

    # Add standard sections
    content += """## Best Practices

### Do's
✅ Practice 1
✅ Practice 2
✅ Practice 3

### Don'ts
❌ Anti-pattern 1
❌ Anti-pattern 2
❌ Anti-pattern 3

---

## Common Mistakes

### Mistake 1
**Problem:** Description of what goes wrong

**Solution:** How to avoid or fix it

### Mistake 2
**Problem:** Description

**Solution:** How to fix

---

## Tips for Success

1. **Tip 1** - Explanation
2. **Tip 2** - Explanation
3. **Tip 3** - Explanation
4. **Tip 4** - Explanation
5. **Tip 5** - Explanation

---

## Real-World Examples

### Example 1
**Situation:** Context

**Approach:** What was done

**Result:** Outcome

### Example 2
**Situation:** Context

**Approach:** What was done

**Result:** Outcome

---

## Templates & Frameworks

### Template 1
```markdown
[Template content here]
```

### Template 2
```markdown
[Template content here]
```

---

## Measuring Success

### Key Indicators
- Metric 1
- Metric 2
- Metric 3

### Warning Signs
- Red flag 1
- Red flag 2
- Red flag 3

---

## Related Skills
- Related skill 1
- Related skill 2
- Related skill 3
- Related skill 4
"""

    return content

def create_skills():
    """Create all skill files"""
    base_dir = "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/skills"

    created_count = 0
    for category, skills in skills_data.items():
        category_path = os.path.join(base_dir, category)

        for skill in skills:
            file_path = os.path.join(category_path, f"{skill['name']}.md")

            # Skip if exists
            if os.path.exists(file_path):
                print(f"Skipping existing: {file_path}")
                continue

            # Generate content
            content = generate_skill_content(skill)

            # Write file
            with open(file_path, 'w') as f:
                f.write(content)

            created_count += 1
            print(f"Created: {file_path}")

    print(f"\nTotal skills created: {created_count}")

if __name__ == "__main__":
    create_skills()
