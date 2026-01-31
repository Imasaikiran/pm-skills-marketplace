# Product Documentation Skill

## Description
Create comprehensive, user-friendly product documentation that enables users to understand, adopt, and maximize value from your product. Effective documentation reduces support burden, accelerates onboarding, and improves user satisfaction.

## When to Use
- Launching new features or products
- Reducing repetitive support tickets
- Improving user onboarding success rates
- Enabling self-service adoption
- Supporting enterprise customer requirements
- Facilitating API and developer integrations

## Documentation Types

### User Guides
**Purpose:** Step-by-step instructions for completing tasks
**Best For:** New users, complex workflows, feature adoption

### Reference Documentation
**Purpose:** Comprehensive feature specifications
**Best For:** Power users, troubleshooting, edge cases

### API Documentation
**Purpose:** Technical integration guides
**Best For:** Developers, technical partners, integrations

### Quick Start Guides
**Purpose:** Fast path to first value
**Best For:** New users, trial conversions, demos

### Release Notes
**Purpose:** Communicate product changes
**Best For:** Existing users, change management, updates

### Troubleshooting Guides
**Purpose:** Self-service problem resolution
**Best For:** Support deflection, common issues, errors

## Documentation Framework

### 1. Plan Documentation
```markdown
## Documentation Planning Template

### Audience Analysis
- **Primary Users:** [Role, technical level, goals]
- **Secondary Users:** [Additional audiences]
- **User Journey Stage:** [Awareness/Evaluation/Onboarding/Active Use]

### Content Requirements
- [ ] Feature overview and benefits
- [ ] Prerequisites and setup
- [ ] Step-by-step instructions
- [ ] Visuals and screenshots
- [ ] Code samples (if applicable)
- [ ] Troubleshooting tips
- [ ] Related resources

### Success Metrics
- Time to first value
- Documentation page views
- Search success rate
- Support ticket reduction
- User satisfaction scores
```

### 2. Structure Content
```markdown
## Standard Documentation Structure

# [Feature/Topic Name]

## Overview
- What it is
- Why it matters
- Key benefits

## Prerequisites
- Required permissions
- Setup requirements
- Dependencies

## Getting Started
- Basic setup (5 min)
- First successful action
- Quick win

## Step-by-Step Guide
### Task 1: [Common Task]
1. [Step with screenshot]
2. [Step with expected outcome]
3. [Validation step]

### Task 2: [Advanced Task]
[Detailed instructions]

## Common Use Cases
- [Use case 1]
- [Use case 2]
- [Use case 3]

## Troubleshooting
### Issue: [Common Problem]
**Symptoms:** [What user sees]
**Solution:** [How to fix]

## FAQs
**Q:** [Common question]
**A:** [Clear answer]

## Additional Resources
- [Related guides]
- [Video tutorials]
- [Support contact]
```

### 3. Write Effective Content

**Clarity Principles:**
- Use active voice
- Write in second person ("you")
- Use present tense
- Keep sentences short (15-20 words)
- Avoid jargon and acronyms
- Define technical terms

**Structure Guidelines:**
- One idea per paragraph
- Use bullet points for lists
- Add white space for scanning
- Use headings and subheadings
- Include table of contents for long docs

## Writing Templates

### Feature Documentation Template
```markdown
# [Feature Name]

## What is [Feature Name]?
[Feature Name] helps you [primary benefit]. With this feature, you can [key capability 1], [key capability 2], and [key capability 3].

**Key Benefits:**
- ✅ [Benefit 1]
- ✅ [Benefit 2]
- ✅ [Benefit 3]

## Who should use this?
This feature is ideal for [user type] who need to [job-to-be-done].

## How to use [Feature Name]

### Step 1: [Action]
1. Navigate to [location]
2. Click [button/link]
3. [Expected result]

![Screenshot showing [specific action]](image-url)

### Step 2: [Configuration]
[Detailed instructions with visuals]

### Step 3: [Verification]
To verify it's working correctly:
- [ ] [Check 1]
- [ ] [Check 2]

## Advanced Options

### Option 1: [Advanced Feature]
**When to use:** [Use case]
**How to enable:** [Instructions]

### Option 2: [Customization]
**When to use:** [Use case]
**How to configure:** [Instructions]

## Best Practices
- ✅ **Do:** [Recommendation]
- ❌ **Don't:** [What to avoid]

## Limitations
- [Limitation 1]: [Workaround]
- [Limitation 2]: [Alternative approach]

## Troubleshooting

### Problem: [Common Issue]
**Cause:** [Why it happens]
**Solution:**
1. [Step 1]
2. [Step 2]
3. [Expected outcome]

## Related Resources
- [Related feature guide]
- [Video tutorial]
- [API reference]
- [Need help? Contact support](link)
```

### API Documentation Template
```markdown
# [API Endpoint Name]

## Overview
[Brief description of what this API does and its purpose]

**Endpoint:** `[METHOD] /api/v1/resource`
**Authentication:** [Type - API Key, OAuth, etc.]

## Request

### Headers
```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier |
| `name` | string | Yes | Resource name |
| `status` | string | No | Status filter (active, inactive) |

### Request Example
```json
{
  "id": "12345",
  "name": "Example Resource",
  "status": "active"
}
```

## Response

### Success Response (200 OK)
```json
{
  "success": true,
  "data": {
    "id": "12345",
    "name": "Example Resource",
    "created_at": "2025-01-26T10:00:00Z"
  }
}
```

### Error Responses

**400 Bad Request**
```json
{
  "error": "Invalid parameter",
  "message": "The 'id' parameter is required"
}
```

**401 Unauthorized**
```json
{
  "error": "Authentication failed",
  "message": "Invalid API key"
}
```

## Code Examples

### JavaScript
```javascript
const response = await fetch('https://api.example.com/v1/resource', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: '12345',
    name: 'Example Resource'
  })
});
```

### Python
```python
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {
    'id': '12345',
    'name': 'Example Resource'
}

response = requests.post('https://api.example.com/v1/resource',
                        headers=headers, json=data)
```

## Rate Limits
- **Limit:** 1000 requests per hour
- **Header:** `X-RateLimit-Remaining`
- **Reset:** `X-RateLimit-Reset`

## Changelog
- **v1.1** (2025-01): Added status parameter
- **v1.0** (2024-12): Initial release
```

### Troubleshooting Guide Template
```markdown
# Troubleshooting [Feature/Area]

## Quick Diagnostics
Before diving into specific issues, try these steps:
1. [ ] [Basic check 1]
2. [ ] [Basic check 2]
3. [ ] [Basic check 3]

## Common Issues

### Issue 1: [Descriptive Problem Name]

**Symptoms:**
- [What the user sees/experiences]
- [Error message or behavior]

**Causes:**
- [Most common cause]
- [Alternative cause]

**Solution:**
1. [Step 1 with expected outcome]
2. [Step 2 with screenshot if helpful]
3. [Verification step]

**Still not working?** [Escalation path or alternative solution]

---

### Issue 2: [Performance Problems]

**Symptoms:**
- Slow loading times
- Timeout errors
- [Specific behavior]

**Quick Fixes:**
- ✅ [Quick fix 1]
- ✅ [Quick fix 2]

**Detailed Solution:**
[Step-by-step resolution]

---

### Issue 3: [Configuration Errors]

**Check Your Settings:**
1. Go to [Settings location]
2. Verify [specific setting]
3. Ensure [requirement is met]

**Correct Configuration:**
```
[Code or configuration example]
```

## Error Messages Explained

### Error: "[Specific Error Message]"
**What it means:** [Plain language explanation]
**How to fix:** [Solution]

### Error: "[Another Error]"
**What it means:** [Explanation]
**How to fix:** [Solution]

## Getting Additional Help

**Before contacting support:**
- [ ] Check this troubleshooting guide
- [ ] Review recent changes
- [ ] Collect error messages/screenshots
- [ ] Note when the issue started

**Contact Support:**
- Email: support@example.com
- Chat: [Link to live chat]
- Include: [List of helpful information to provide]
```

## Visual Documentation Best Practices

### Screenshot Guidelines
1. **Annotate effectively**
   - Use arrows to highlight actions
   - Number sequential steps
   - Circle important elements
   - Add brief callout text

2. **Keep current**
   - Update with UI changes
   - Review quarterly
   - Version control images
   - Mark outdated docs

3. **Optimize images**
   - Compress for fast loading
   - Use appropriate resolution
   - Consistent sizing
   - Alt text for accessibility

### Video Documentation
```markdown
## When to Use Video vs. Text

**Use Video For:**
- Complex workflows (5+ steps)
- Visual/interactive features
- Onboarding sequences
- Demos and overviews

**Use Text For:**
- Quick reference
- Specific steps
- Searchable content
- API/technical docs

**Video Best Practices:**
- Keep under 3 minutes
- Add captions/subtitles
- Provide written summary
- Include timestamps
- Embed transcripts
```

## Documentation Maintenance

### Review Schedule
```markdown
## Documentation Audit Checklist

### Monthly Review
- [ ] Check top 10 most-viewed pages
- [ ] Review recent support tickets for gaps
- [ ] Update screenshots if UI changed
- [ ] Verify links aren't broken

### Quarterly Review
- [ ] Survey users on documentation quality
- [ ] Analyze search terms with no results
- [ ] Archive deprecated features
- [ ] Update version numbers and compatibility

### Release-Based Updates
- [ ] Document new features before launch
- [ ] Update existing docs with changes
- [ ] Add release notes
- [ ] Notify users of major changes

### Metrics to Track
- Page views and unique visitors
- Time on page (engagement)
- Search success rate
- Feedback ratings
- Support ticket mentions
```

### Version Control
```markdown
## Documentation Versioning Strategy

### Version Format
[Product Version] - [Doc Update Date]
Example: "v2.5 - Updated Jan 2025"

### Change Tracking
| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2025-01-26 | 2.5.1 | Added API examples | PM Team |
| 2025-01-15 | 2.5.0 | New feature section | PM Team |

### Deprecated Content
**Mark clearly:** "⚠️ This feature was deprecated in v2.0"
**Provide alternative:** "Use [new feature] instead"
**Archive date:** Remove after 6 months
```

## Accessibility Standards

### WCAG 2.1 Compliance
```markdown
## Accessibility Checklist

### Content
- [ ] Use headings in hierarchical order (H1, H2, H3)
- [ ] Provide alt text for all images
- [ ] Ensure 4.5:1 color contrast ratio
- [ ] Use descriptive link text (not "click here")
- [ ] Include table headers
- [ ] Provide video captions

### Structure
- [ ] Proper HTML semantic elements
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Responsive mobile design
- [ ] Skip navigation links

### Testing
- [ ] Test with screen reader
- [ ] Verify keyboard-only navigation
- [ ] Check color contrast
- [ ] Validate HTML
- [ ] Test on mobile devices
```

## Localization Strategy

### Planning International Documentation
```markdown
## Localization Checklist

### Pre-Translation
- [ ] Use simple, clear language
- [ ] Avoid idioms and colloquialisms
- [ ] Use consistent terminology
- [ ] Create glossary of key terms
- [ ] Design for text expansion (30-40%)

### During Translation
- [ ] Work with native speakers
- [ ] Translate images with text
- [ ] Localize examples and use cases
- [ ] Adapt currency, dates, formats
- [ ] Cultural sensitivity review

### Post-Translation
- [ ] Technical review by local PM
- [ ] User testing in target language
- [ ] Maintain language parity
- [ ] Update all languages together
```

## Documentation Tools Comparison

### Documentation Platforms
```markdown
## Tool Selection Matrix

### Static Site Generators
**Best For:** Developer docs, open source
**Examples:** Docusaurus, Jekyll, MkDocs
**Pros:** Version control, flexible, free
**Cons:** Requires technical setup

### SaaS Documentation Platforms
**Best For:** Product docs, collaboration
**Examples:** GitBook, Readme.io, Document360
**Pros:** Easy to use, search, analytics
**Cons:** Monthly cost, less customization

### Knowledge Base Software
**Best For:** Help centers, support
**Examples:** Zendesk Guide, Intercom Articles
**Pros:** Integrated with support, AI search
**Cons:** Limited to support context

### Wiki Solutions
**Best For:** Internal docs, collaboration
**Examples:** Confluence, Notion, Coda
**Pros:** Great collaboration, flexible
**Cons:** Can become disorganized
```

## Metrics & Analytics

### Key Documentation Metrics
```markdown
## Documentation Health Dashboard

### Usage Metrics
- **Page Views:** Track most/least viewed pages
- **Time on Page:** Engagement indicator (2-3 min ideal)
- **Bounce Rate:** Below 40% is good
- **Search Usage:** What users look for

### Quality Metrics
- **Feedback Score:** Target 4+ stars (out of 5)
- **"Was this helpful?" Yes rate:** Target 70%+
- **Support Ticket Reduction:** Track tickets/topic
- **Time to Resolution:** Faster with good docs

### User Journey Metrics
- **Documentation to Action:** Do users complete tasks?
- **Return Rate:** Do users come back?
- **Search Success:** Find what they need?
- **External Links Clicked:** Helpful resources?

### Improvement Tracking
```sql
-- Example: Track documentation impact on support
SELECT
  doc_page,
  views_before_ticket,
  ticket_volume_change,
  avg_resolution_time
FROM documentation_impact
WHERE date > '2025-01-01'
ORDER BY ticket_volume_change DESC
```

## Common Pitfalls

1. **Writing for yourself, not users**
   - Problem: Using internal jargon
   - Solution: User test with real customers

2. **Too much detail, too soon**
   - Problem: Overwhelming new users
   - Solution: Progressive disclosure, clear hierarchy

3. **Outdated screenshots**
   - Problem: Users get confused by UI mismatch
   - Solution: Automated screenshot tools, review cadence

4. **No search optimization**
   - Problem: Users can't find content
   - Solution: SEO basics, clear titles, tags

5. **Ignoring mobile users**
   - Problem: 40%+ users on mobile
   - Solution: Responsive design, mobile testing

6. **Documentation as afterthought**
   - Problem: Launch without docs
   - Solution: Include in definition of done

## Tips for Success

### Content Quality
- **Start with user questions** - Review support tickets
- **Use real examples** - Actual use cases resonate
- **Show, don't just tell** - Screenshots and videos
- **Test with users** - Watch them try to follow your docs
- **Iterate continuously** - Never "done"

### Organization
- **Make it searchable** - Good titles, keywords, tags
- **Cross-link related content** - Help discovery
- **Use consistent structure** - Predictable patterns
- **Provide multiple paths** - Browse, search, navigate

### Engagement
- **Collect feedback** - "Was this helpful?" buttons
- **Track analytics** - Learn what works
- **Measure impact** - Tie to business metrics
- **Celebrate wins** - Share documentation success stories

## Documentation Style Guide

```markdown
## Company Documentation Standards

### Voice and Tone
- **Voice:** Friendly, professional, helpful
- **Tone:** Varies by context (onboarding = encouraging, errors = empathetic)
- **Perspective:** Second person ("you/your")

### Formatting Standards
- **Headings:** Title case for H1, sentence case for H2-H6
- **Lists:** Parallel structure, complete sentences or fragments
- **Code:** Inline `code` or fenced ```code blocks```
- **Emphasis:** Bold for **UI elements**, italic for *terms*

### Word Choice
- Use: "click" (not "click on")
- Use: "choose" (for selecting from options)
- Use: "enter" (for typing text)
- Avoid: "simply," "just," "easy" (assumes competence)
- Avoid: "please," "thank you" (be direct)

### Numbers and Dates
- Numbers: Spell out one through nine, use numerals for 10+
- Dates: January 26, 2025 (Month Day, Year)
- Time: Use 12-hour format with AM/PM

### Punctuation
- Use Oxford comma
- One space after periods
- Contractions are okay (you're, we'll)
```

## Related Skills
- Help Center Creation
- In-App Messaging Strategy
- User Onboarding Design
- Customer Education Programs
- Technical Writing
- Information Architecture
