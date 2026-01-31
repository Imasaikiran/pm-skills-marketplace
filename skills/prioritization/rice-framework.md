# RICE Prioritization Framework

## Description
RICE is a scoring model to prioritize features and initiatives based on four factors: Reach, Impact, Confidence, and Effort.

## When to Use
- Prioritizing product roadmap items
- Deciding between multiple feature requests
- Aligning team on priorities
- Justifying decisions with data

## RICE Formula

```
RICE Score = (Reach × Impact × Confidence) / Effort
```

Higher score = Higher priority

## The Four Factors

### 1. Reach
**How many people will this affect in a given time period?**

Examples:
- Users per month
- Customers per quarter
- Transactions per week

**How to Estimate:**
- Use analytics data
- Check feature usage stats
- Survey target segment size
- Review sales pipeline

**Scale:** Absolute numbers (e.g., 1000 users/month)

---

### 2. Impact
**How much will this move the needle for each person affected?**

**Scale (use decimal values):**
- **3** = Massive impact
- **2** = High impact
- **1** = Medium impact
- **0.5** = Low impact
- **0.25** = Minimal impact

**Questions to Ask:**
- Will this solve a major pain point?
- How much time/money will users save?
- Will this drive revenue/retention?

---

### 3. Confidence
**How confident are you in your estimates?**

**Scale (percentage):**
- **100%** = High confidence (strong data)
- **80%** = Medium confidence (some data)
- **50%** = Low confidence (assumptions)

**Data Sources:**
- User research
- A/B test results
- Analytics
- Customer feedback
- Expert judgment

---

### 4. Effort
**How much work will this require from your team?**

**Scale:** Person-months

Examples:
- 0.5 = One person for 2 weeks
- 1 = One person for 1 month
- 3 = Three people for 1 month or 1 person for 3 months

**Include:**
- Design time
- Development time
- Testing time
- Documentation time

---

## Step-by-Step Process

### Step 1: List All Ideas
Create a table with all features/projects to evaluate

### Step 2: Score Each Factor
For each item, estimate:
- Reach: Number of users affected per time period
- Impact: 0.25 to 3
- Confidence: 50% to 100%
- Effort: Person-months

### Step 3: Calculate RICE Scores
```
RICE = (Reach × Impact × Confidence) / Effort
```

### Step 4: Rank by Score
Sort from highest to lowest RICE score

### Step 5: Review and Adjust
- Do scores make sense relative to each other?
- Are there strategic reasons to adjust?
- Get team input on estimates

---

## Example Calculation

**Feature: Add dark mode**

- **Reach:** 5,000 users/month will use it
- **Impact:** 1 (medium impact on UX)
- **Confidence:** 80% (survey data shows demand)
- **Effort:** 2 person-months

**RICE Score:**
```
(5,000 × 1 × 0.8) / 2 = 2,000
```

---

## RICE Scoring Template

| Feature | Reach | Impact | Confidence | Effort | RICE Score | Priority |
|---------|-------|--------|------------|--------|------------|----------|
| Dark mode | 5000/mo | 1 | 80% | 2 | 2000 | #1 |
| Export to CSV | 500/mo | 2 | 100% | 0.5 | 2000 | #2 |
| Mobile app | 8000/mo | 3 | 50% | 12 | 1000 | #3 |
| Email notifications | 3000/mo | 0.5 | 100% | 1 | 1500 | #4 |

---

## Best Practices

### Do's
✅ Use consistent time periods for Reach (e.g., always per quarter)
✅ Include the full team in scoring discussions
✅ Update scores as you learn more
✅ Document your assumptions
✅ Consider both quantitative and qualitative data
✅ Re-evaluate periodically (quarterly)

### Don'ts
❌ Don't score in isolation - get team input
❌ Don't treat scores as absolute truth
❌ Don't ignore strategic initiatives just because of low RICE
❌ Don't forget to factor in dependencies
❌ Don't use it for every decision - some things are just obvious

---

## Common Pitfalls

1. **Overestimating Impact**
   - Be realistic about behavior change
   - Consider current alternatives

2. **Sandbagging Effort**
   - Get engineering input
   - Include all phases (design, dev, test, launch)

3. **False Confidence**
   - Lower confidence when guessing
   - Acknowledge uncertainty

4. **Ignoring Context**
   - RICE is a tool, not a rulebook
   - Strategic fit matters too

---

## When RICE Isn't Enough

RICE doesn't account for:
- Strategic importance
- Dependencies between features
- Team learning opportunities
- Technical debt
- Competitive pressure
- Platform risks

**Solution:** Use RICE + qualitative factors

---

## Variations

### ICE (Simplified)
```
ICE Score = Impact × Confidence × Ease
```
- All factors scored 1-10
- Easier to estimate
- Less precise

### WSJF (SAFe Framework)
```
WSJF = (User Value + Time Criticality + Risk Reduction) / Job Size
```

---

## Tips for Success

1. **Start simple** - Don't overthink the first pass
2. **Iterate** - Refine estimates as you learn
3. **Be consistent** - Use the same scale across all items
4. **Get buy-in** - Involve stakeholders in scoring
5. **Document** - Keep a record of assumptions
6. **Review regularly** - Priorities change

---

## Related Skills
- Story Mapping
- Opportunity Solution Tree
- Kano Model
- Value vs. Effort Matrix
- OKRs
