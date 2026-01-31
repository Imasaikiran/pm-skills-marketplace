#!/usr/bin/env python3
"""
Generate additional PM skills in bulk - Batch 2
"""

import os

# Massive list of additional PM skills
skills_batch_2 = {
    "strategy-vision": [
        {"name": "product-vision-creation", "title": "Creating a Product Vision", "description": "Craft compelling product visions that inspire teams and guide strategy"},
        {"name": "competitive-analysis-framework", "title": "Competitive Analysis Framework", "description": "Systematically analyze competitors to inform product strategy"},
        {"name": "business-model-canvas", "title": "Business Model Canvas", "description": "Map out business model components for strategic clarity"},
        {"name": "lean-canvas", "title": "Lean Canvas", "description": "One-page business plan for startups and new products"},
        {"name": "porter-five-forces", "title": "Porter's Five Forces", "description": "Analyze industry competition and market attractiveness"},
        {"name": "ansoff-matrix", "title": "Ansoff Matrix", "description": "Strategic framework for growth opportunities"},
        {"name": "product-market-fit", "title": "Measuring Product-Market Fit", "description": "Assess and improve product-market fit systematically"},
        {"name": "moat-building", "title": "Building Competitive Moats", "description": "Create sustainable competitive advantages"},
    ],
    "go-to-market": [
        {"name": "launch-strategy", "title": "Product Launch Strategy", "description": "Plan and execute successful product launches"},
        {"name": "beta-testing-program", "title": "Beta Testing Program", "description": "Design and run effective beta programs"},
        {"name": "pricing-strategy", "title": "Pricing Strategy", "description": "Determine optimal pricing for your product"},
        {"name": "customer-acquisition", "title": "Customer Acquisition Strategy", "description": "Build scalable customer acquisition channels"},
        {"name": "positioning-messaging", "title": "Product Positioning & Messaging", "description": "Craft clear positioning and compelling messaging"},
        {"name": "sales-enablement", "title": "Sales Enablement for PMs", "description": "Equip sales team to sell your product effectively"},
        {"name": "partnership-strategy", "title": "Partnership Strategy", "description": "Identify and execute strategic partnerships"},
    ],
    "customer-success": [
        {"name": "onboarding-optimization", "title": "User Onboarding Optimization", "description": "Design onboarding flows that activate users"},
        {"name": "customer-feedback-loops", "title": "Customer Feedback Loops", "description": "Build systems to gather and act on customer feedback"},
        {"name": "nps-program", "title": "Net Promoter Score Program", "description": "Implement and leverage NPS for product insights"},
        {"name": "customer-health-scoring", "title": "Customer Health Scoring", "description": "Predict and prevent churn with health scores"},
        {"name": "feature-adoption", "title": "Driving Feature Adoption", "description": "Increase adoption of new features"},
        {"name": "customer-education", "title": "Customer Education Strategy", "description": "Build education programs that drive product success"},
    ],
    "prioritization": [
        {"name": "kano-model", "title": "Kano Model", "description": "Prioritize features by customer satisfaction impact"},
        {"name": "value-vs-effort", "title": "Value vs Effort Matrix", "description": "Simple 2x2 matrix for quick prioritization"},
        {"name": "moscow-method", "title": "MoSCoW Method", "description": "Prioritize using Must/Should/Could/Won't framework"},
        {"name": "weighted-scoring", "title": "Weighted Scoring Model", "description": "Multi-criteria decision analysis for complex trade-offs"},
        {"name": "opportunity-scoring", "title": "Opportunity Scoring", "description": "Prioritize based on importance and satisfaction gaps"},
        {"name": "buy-a-feature", "title": "Buy a Feature", "description": "Collaborative prioritization exercise with stakeholders"},
    ],
    "metrics-analytics": [
        {"name": "north-star-metric", "title": "North Star Metric", "description": "Define and track your product's core success metric"},
        {"name": "cohort-analysis", "title": "Cohort Analysis", "description": "Analyze user behavior by cohorts over time"},
        {"name": "funnel-analysis", "title": "Funnel Analysis", "description": "Optimize conversion funnels systematically"},
        {"name": "ab-testing", "title": "A/B Testing", "description": "Design and analyze experiments scientifically"},
        {"name": "sql-for-pms", "title": "SQL for Product Managers", "description": "Query databases to answer product questions"},
        {"name": "analytics-instrumentation", "title": "Analytics Instrumentation", "description": "Implement tracking for product analytics"},
        {"name": "dashboard-design", "title": "Dashboard Design", "description": "Create effective product dashboards"},
        {"name": "statistical-significance", "title": "Statistical Significance", "description": "Understand and apply statistics to product decisions"},
    ],
    "discovery-research": [
        {"name": "problem-validation", "title": "Problem Validation", "description": "Validate that problems are worth solving"},
        {"name": "solution-validation", "title": "Solution Validation", "description": "Test solutions before building them"},
        {"name": "prototype-testing", "title": "Prototype Testing", "description": "Test concepts with low-fidelity prototypes"},
        {"name": "diary-studies", "title": "Diary Studies", "description": "Collect longitudinal user data"},
        {"name": "ethnographic-research", "title": "Ethnographic Research", "description": "Observe users in their natural environment"},
        {"name": "focus-groups", "title": "Focus Groups", "description": "Gather qualitative insights from groups"},
        {"name": "market-research", "title": "Market Research Methods", "description": "Research markets, trends, and opportunities"},
        {"name": "conjoint-analysis", "title": "Conjoint Analysis", "description": "Understand feature preferences and trade-offs"},
    ],
    "agile-execution": [
        {"name": "user-story-writing", "title": "Writing User Stories", "description": "Craft clear, testable user stories"},
        {"name": "acceptance-criteria", "title": "Acceptance Criteria", "description": "Define done with clear acceptance criteria"},
        {"name": "story-point-estimation", "title": "Story Point Estimation", "description": "Estimate work using story points"},
        {"name": "velocity-tracking", "title": "Velocity Tracking", "description": "Track and improve team velocity"},
        {"name": "spike-stories", "title": "Spike Stories", "description": "Time-boxed research to reduce uncertainty"},
        {"name": "pair-programming-with-pm", "title": "Pairing with Engineers", "description": "Collaborate closely with engineering during development"},
    ],
    "ux-design": [
        {"name": "wireframing-basics", "title": "Wireframing for PMs", "description": "Create low-fidelity wireframes to communicate ideas"},
        {"name": "design-critique", "title": "Participating in Design Critique", "description": "Give and receive effective design feedback"},
        {"name": "mobile-first-design", "title": "Mobile-First Design Principles", "description": "Design for mobile devices first"},
        {"name": "responsive-design", "title": "Responsive Design Strategy", "description": "Ensure great experience across devices"},
        {"name": "microinteractions", "title": "Designing Microinteractions", "description": "Design delightful small interactions"},
        {"name": "empty-states", "title": "Designing Empty States", "description": "Turn empty screens into opportunities"},
    ],
    "technical-collaboration": [
        {"name": "reading-code", "title": "Reading Code as a PM", "description": "Understand code enough to have technical conversations"},
        {"name": "database-basics", "title": "Database Basics for PMs", "description": "Understand data models and databases"},
        {"name": "cloud-infrastructure", "title": "Cloud Infrastructure Concepts", "description": "Understand modern cloud architectures"},
        {"name": "microservices-architecture", "title": "Microservices Architecture", "description": "Understanding distributed systems"},
        {"name": "cicd-pipeline", "title": "CI/CD Pipelines", "description": "Understand continuous integration and deployment"},
        {"name": "security-fundamentals", "title": "Security Fundamentals for PMs", "description": "Security considerations in product development"},
    ],
    "career-leadership": [
        {"name": "pm-career-paths", "title": "PM Career Paths", "description": "Navigate product management career progression"},
        {"name": "ic-vs-management", "title": "IC vs Management Track", "description": "Choose between individual contributor and management"},
        {"name": "building-pm-skills", "title": "Building PM Skills", "description": "Develop core product management competencies"},
        {"name": "networking-for-pms", "title": "Networking for Product Managers", "description": "Build professional network in product"},
        {"name": "personal-branding", "title": "Personal Branding for PMs", "description": "Build your reputation and thought leadership"},
        {"name": "speaking-writing", "title": "Public Speaking & Writing", "description": "Share your product insights effectively"},
    ]
}

def generate_skill_content(skill):
    """Generate markdown content for a skill"""
    content = f"""# {skill['title']}

## Description
{skill['description']}

## When to Use
- Planning phase of product development
- Strategic decision making
- Team alignment activities
- Stakeholder communication

## Overview

This skill is essential for product managers who want to {skill['description'].lower()}.

**Key Benefits:**
- Improved decision making
- Better team alignment
- Increased efficiency
- Clearer communication

---

## Core Concepts

### Concept 1: Foundation
Understanding the fundamentals is critical for success.

**Key principles:**
- Principle A: Focus on user value
- Principle B: Data-driven approach
- Principle C: Iterative improvement

### Concept 2: Application
Applying this skill in real-world scenarios.

**Practical steps:**
1. Step 1: Gather context
2. Step 2: Analyze options
3. Step 3: Make decision
4. Step 4: Execute
5. Step 5: Measure results

### Concept 3: Mastery
Advanced techniques for experienced practitioners.

---

## Framework & Process

### Step 1: Preparation
- Research and gather information
- Identify stakeholders
- Define success criteria
- Set clear objectives

### Step 2: Analysis
- Evaluate options
- Consider trade-offs
- Assess risks
- Model outcomes

### Step 3: Decision
- Apply framework
- Get input from team
- Make informed choice
- Document rationale

### Step 4: Execution
- Create action plan
- Communicate decisions
- Monitor progress
- Adjust as needed

### Step 5: Review
- Measure results
- Gather feedback
- Document learnings
- Share insights

---

## Best Practices

### Do's ✅
- Start with clear objectives
- Involve the right people
- Use data to inform decisions
- Document your process
- Iterate and improve

### Don'ts ❌
- Don't skip research
- Don't work in isolation
- Don't ignore feedback
- Don't forget to measure
- Don't overcomplicate

---

## Common Pitfalls

### Pitfall 1: Moving Too Fast
**Problem:** Rushing without proper analysis

**Solution:** Take time to gather data and consider options carefully

### Pitfall 2: Analysis Paralysis
**Problem:** Getting stuck in endless analysis

**Solution:** Set decision deadlines and work with 80% confidence

### Pitfall 3: Ignoring Context
**Problem:** Applying frameworks without considering context

**Solution:** Adapt approaches to your specific situation

---

## Real-World Examples

### Example 1: B2B SaaS
**Context:** Mid-size B2B company

**Challenge:** Needed to prioritize features

**Approach:** Applied this framework systematically

**Outcome:** Shipped highest-impact features, increased retention 15%

### Example 2: Consumer App
**Context:** Early-stage consumer mobile app

**Challenge:** Limited resources, many opportunities

**Approach:** Used this skill to focus efforts

**Outcome:** Achieved product-market fit within 6 months

---

## Templates & Tools

### Template 1: Planning Template
```markdown
## Objective
[What are you trying to achieve]

## Context
[Background information]

## Options
1. Option A - [Description]
2. Option B - [Description]
3. Option C - [Description]

## Analysis
[Your evaluation]

## Decision
[Chosen path and why]

## Next Steps
- [ ] Action 1
- [ ] Action 2
- [ ] Action 3
```

### Template 2: Review Template
```markdown
## What We Did
[Summary]

## Results
- Metric 1: [Result]
- Metric 2: [Result]

## Learnings
- Learning 1
- Learning 2

## Next Time
[What to do differently]
```

---

## Measuring Success

### Key Indicators
- Objective achieved
- Stakeholder satisfaction
- Team alignment
- Efficient execution
- Positive outcomes

### Warning Signs
- Confusion about direction
- Stakeholder misalignment
- Missed deadlines
- Poor results
- Team frustration

---

## Tips for Beginners

1. **Start simple** - Don't overcomplicate your first attempts
2. **Learn by doing** - Practice with real projects
3. **Get feedback** - Ask for input from experienced PMs
4. **Read examples** - Study how others apply this skill
5. **Be patient** - Mastery takes time and practice

---

## Advanced Techniques

### Technique 1: Scaling
How to apply this skill at larger scale or higher complexity

### Technique 2: Automation
Tools and processes to make this more efficient

### Technique 3: Integration
Combining this skill with other PM frameworks

---

## Related Skills
- Strategic Thinking
- Data Analysis
- Stakeholder Management
- Communication
- Execution Excellence
"""

    return content

def create_skills():
    """Create all skill files"""
    base_dir = "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/skills"

    created_count = 0
    for category, skills in skills_batch_2.items():
        category_path = os.path.join(base_dir, category)

        # Create category directory if it doesn't exist
        os.makedirs(category_path, exist_ok=True)

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

    print(f"\nTotal skills created in this batch: {created_count}")

if __name__ == "__main__":
    create_skills()
