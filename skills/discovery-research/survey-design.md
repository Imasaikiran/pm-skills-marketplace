# Survey Design

## Description
Survey design is the systematic process of creating questionnaires that collect reliable, valid, and actionable data from users. Well-designed surveys minimize bias, maximize response rates, and provide insights that drive product decisions.

## When to Use
- Measuring customer satisfaction (NPS, CSAT, CES)
- Validating qualitative research findings at scale
- Prioritizing features or problems
- Understanding user demographics and segments
- Tracking metrics over time
- Gathering quantitative evidence for decisions
- Testing messaging or positioning
- Collecting feedback after launches

---

## Survey Design Principles

### 1. Clarity
**Every question should be easy to understand**

Good: "How often do you use the mobile app?"
Bad: "What's your utilization frequency for the mobile application product?"

### 2. Brevity
**Respect respondent's time**

- 5-10 minutes maximum
- 10-15 questions ideal
- Essential questions only
- Cut ruthlessly

### 3. Relevance
**Every question should have a purpose**

Ask yourself:
- What will I do with this data?
- How will it inform decisions?
- Is this necessary?

### 4. Neutrality
**Avoid leading or biased questions**

Leading: "How much do you love our new feature?"
Neutral: "How would you rate our new feature?"

### 5. Specificity
**Make questions concrete, not abstract**

Vague: "Do you use our product a lot?"
Specific: "How many times per week do you use our product?"

---

## Question Types

### 1. Multiple Choice (Single Selection)

**When to use:**
- Mutually exclusive options
- Clear categories
- Easy to analyze

**Example:**
```
How often do you use [Product]?

○ Daily
○ 2-3 times per week
○ Once a week
○ 2-3 times per month
○ Once a month or less
```

**Best practices:**
- Include all possible options
- Add "Other" or "None of the above"
- Order logically (frequency, intensity, etc.)
- Keep options balanced

### 2. Multiple Choice (Multi-Select)

**When to use:**
- Multiple answers possible
- Identifying combinations
- Feature usage

**Example:**
```
Which features do you use regularly? (Select all that apply)

☐ Reports
☐ Exports
☐ Integrations
☐ Team collaboration
☐ Mobile app
☐ API
```

**Best practices:**
- Clarify "select all that apply"
- Limit to 5-10 options
- Consider priority ranking instead

### 3. Rating Scales (Likert)

**When to use:**
- Measuring agreement
- Satisfaction levels
- Intensity of feelings

**5-point scale (recommended):**
```
How satisfied are you with [Feature]?

○ Very satisfied
○ Somewhat satisfied
○ Neither satisfied nor dissatisfied
○ Somewhat dissatisfied
○ Very dissatisfied
```

**7-point scale (more granularity):**
```
1 - Strongly disagree
2 - Disagree
3 - Somewhat disagree
4 - Neither agree nor disagree
5 - Somewhat agree
6 - Agree
7 - Strongly agree
```

**Best practices:**
- Use consistent scales throughout
- Keep odd number for neutral middle
- Label all points or just endpoints
- 5 or 7 points ideal

### 4. Numeric Scales

**When to use:**
- NPS (Net Promoter Score)
- Intensity measurement
- Comparison needed

**Example:**
```
How likely are you to recommend [Product] to a colleague?

0 - Not at all likely
1 2 3 4 5 6 7 8 9
10 - Extremely likely
```

**Best practices:**
- Use industry standards (NPS = 0-10)
- Label endpoints clearly
- Consider what "middle" means

### 5. Ranking Questions

**When to use:**
- Prioritizing options
- Understanding preferences
- Resource allocation

**Example:**
```
Rank these features by importance (1 = most important)

___ Mobile app
___ Offline access
___ Real-time collaboration
___ Advanced reporting
___ API access
```

**Best practices:**
- Limit to 5-7 items
- Clear ranking instructions
- Consider pairwise comparison for many items

### 6. Open-Ended Questions

**When to use:**
- Understanding "why"
- Discovering unexpected insights
- Following up on ratings

**Example:**
```
What's the main reason for your rating?

[Text box]
```

**Best practices:**
- Use sparingly (hard to analyze)
- Place after quantitative questions
- Make optional when possible
- Provide clear prompts

### 7. Matrix/Grid Questions

**When to use:**
- Rating multiple items on same scale
- Saving space and time
- Comparing items

**Example:**
```
How important are these features?

                    Very    Somewhat    Not
                    Important Important Important
Reports             ○       ○           ○
Exports             ○       ○           ○
Integrations        ○       ○           ○
Collaboration       ○       ○           ○
```

**Best practices:**
- Limit to 5-7 items
- Keep questions similar
- Avoid on mobile (hard to use)

---

## Survey Structure

### 1. Introduction
**Set context and expectations**

Template:
```
[Survey Title]

Thank you for taking [X minutes] to share your feedback.
Your responses will help us [specific goal].

This survey is anonymous and should take about [X] minutes.

[Start Survey Button]
```

Key elements:
- Estimated time
- Purpose
- Privacy/anonymity
- Incentive if applicable

### 2. Screener Questions (if needed)
**Qualify respondents early**

Example:
```
Do you currently use [Product]?

○ Yes, regularly
○ Yes, occasionally
○ No, I stopped using it
○ No, I never used it
```

### 3. Main Questions
**Organize logically**

Flow:
1. Easy, engaging questions first
2. Core questions in middle
3. Demographics at end

### 4. Closing
**Thank and inform next steps**

Template:
```
Thank you for completing this survey!

Your feedback helps us improve [Product] for everyone.

[Optional: Share results date]
[Optional: Include incentive info]
[Optional: Contact for follow-up checkbox]
```

---

## Survey Templates

### Template 1: Feature Prioritization

```
[Introduction]

1. Which of these features would be most valuable to you?
   (Rank 1-5, 1 = most valuable)

   ___ Feature A
   ___ Feature B
   ___ Feature C
   ___ Feature D
   ___ Feature E

2. Why is your top choice most important?
   [Open text]

3. How often would you use [top choice]?
   ○ Daily
   ○ Weekly
   ○ Monthly
   ○ Rarely

4. What outcome do you hope to achieve with this feature?
   [Open text]

[Demographics if needed]
[Thank you]
```

### Template 2: Customer Satisfaction (CSAT)

```
[Introduction]

1. Overall, how satisfied are you with [Product]?
   ○ Very satisfied
   ○ Satisfied
   ○ Neutral
   ○ Dissatisfied
   ○ Very dissatisfied

2. What's the primary reason for your rating?
   [Open text]

3. How well does [Product] meet your needs?
   ○ Exceeds my needs
   ○ Meets my needs
   ○ Somewhat meets my needs
   ○ Doesn't meet my needs

4. Which feature do you find most valuable?
   ○ [Feature A]
   ○ [Feature B]
   ○ [Feature C]
   ○ [Feature D]

5. What could we improve?
   [Open text]

[Thank you]
```

### Template 3: Net Promoter Score (NPS)

```
[Introduction]

1. How likely are you to recommend [Product] to a friend
   or colleague?

   0 (Not at all likely) to 10 (Extremely likely)
   [0][1][2][3][4][5][6][7][8][9][10]

2. What's the primary reason for your score?
   [Open text]

3. [If detractor 0-6]:
   What would increase your likelihood to recommend?
   [Open text]

3. [If promoter 9-10]:
   What do you value most about [Product]?
   [Open text]

[Thank you]
```

### Template 4: Post-Launch Feedback

```
[Introduction]

1. Have you tried the new [Feature Name]?
   ○ Yes
   ○ No → [Skip to Q5]

2. How easy was [Feature] to use?
   1 (Very difficult) to 5 (Very easy)
   [1][2][3][4][5]

3. Did [Feature] meet your expectations?
   ○ Exceeded expectations
   ○ Met expectations
   ○ Somewhat met expectations
   ○ Did not meet expectations

4. What did you like most about [Feature]?
   [Open text]

5. What could be improved?
   [Open text]

6. [If haven't tried]:
   Why haven't you tried [Feature] yet?
   ○ Didn't know about it
   ○ Don't need it
   ○ Haven't had time
   ○ Unclear how it works
   ○ Other: [text]

[Thank you]
```

---

## Common Question Mistakes

### ❌ Mistake 1: Double-Barreled Questions
**Problem:** Asking two things in one question

Bad: "How satisfied are you with our speed and reliability?"
Good:
- "How satisfied are you with our speed?"
- "How satisfied are you with our reliability?"

### ❌ Mistake 2: Leading Questions
**Problem:** Suggesting desired answer

Bad: "How much do you love our amazing new feature?"
Good: "How would you rate our new feature?"

### ❌ Mistake 3: Overlapping Options
**Problem:** Unclear which to choose

Bad:
- 0-10 uses per month
- 10-20 uses per month (Where does 10 go?)

Good:
- 0-9 uses per month
- 10-19 uses per month
- 20+ uses per month

### ❌ Mistake 4: Using Jargon
**Problem:** Confusing respondents

Bad: "How often do you leverage our B2B SaaS platform's API endpoints?"
Good: "How often do you connect [Product] to other tools?"

### ❌ Mistake 5: Too Many Options
**Problem:** Overwhelming respondents

Bad: 20 checkbox options
Good: 5-7 options + "Other"

### ❌ Mistake 6: Assuming Knowledge
**Problem:** Questions about things users may not know

Bad: "How satisfied are you with our OAuth implementation?"
Good: "How easy is it to log in with Google/Facebook?"

### ❌ Mistake 7: Vague Time Periods
**Problem:** Everyone interprets differently

Bad: "Do you use this feature regularly?"
Good: "How often do you use this feature?"
- Daily
- Weekly
- Monthly
- Rarely

---

## Distribution Strategy

### Timing

**In-app Surveys:**
- After completing key action
- After X uses/days
- On specific page/feature
- Before downgrade/cancel

**Email Surveys:**
- After support interaction
- Monthly/quarterly for relationship
- Post-purchase
- After trial period

**Best practices:**
- Don't over-survey (max quarterly per user)
- Time appropriately (not during trials)
- Consider user timezone
- Allow skip/postpone option

### Sampling

**Who to Survey:**

**Random sample:**
- Representative of whole user base
- Good for general satisfaction
- Need large enough sample (100+ responses)

**Targeted sample:**
- Specific segment (e.g., power users, churned users)
- Good for specific questions
- Smaller sample OK

**Census:**
- All users
- For critical decisions
- Expect low response rate

**Sample size calculator:**
```
For 95% confidence, ±5% margin of error:

User Base    Sample Needed
1,000        278
5,000        357
10,000       370
50,000       381
100,000+     384
```

### Response Rates

**Typical rates:**
- In-app: 10-30%
- Email: 5-15%
- NPS: 15-25%
- Long surveys: Lower

**Improve response rates:**
- Keep it short (5-10 min)
- Explain value clearly
- Offer incentive
- Show progress bar
- Make mobile-friendly
- Send reminder (once)
- Perfect timing

---

## Incentives

### Should You Offer Incentives?

**Yes, if:**
- Long survey (>10 min)
- Low engagement expected
- Targeting specific segment
- High-value insights needed

**No, if:**
- Very short survey
- In-app at natural moment
- Highly engaged users
- Would bias results

### Incentive Types

**Cash/Gift cards:**
- Pros: Universal appeal, high response
- Cons: Costly, may attract non-target

**Product credits:**
- Pros: Cost-effective, targets users
- Cons: Only for paying customers

**Charity donation:**
- Pros: Feel-good, cost-effective
- Cons: Lower motivation

**Entry into drawing:**
- Pros: Lower cost, still motivating
- Cons: Lower response than guaranteed

**Access to results:**
- Pros: Free, appeals to curious
- Cons: Lower motivation

---

## Analysis & Reporting

### Quantitative Analysis

**Calculate:**
- Response rate
- Completion rate
- Average ratings
- Distribution of responses
- Segment differences

**Example:**
```
NPS Survey Results:

Total sent: 1,000
Responses: 250 (25% response rate)
Completed: 235 (94% completion rate)

Score distribution:
Promoters (9-10): 100 (42.5%)
Passives (7-8): 85 (36.2%)
Detractors (0-6): 50 (21.3%)

NPS Score: 42.5% - 21.3% = 21
(Above 0 is good, above 50 is excellent)

Segment analysis:
Enterprise: NPS 35
SMB: NPS 15
Free: NPS 8
```

### Qualitative Analysis

**Process open-ended responses:**

1. **Read all responses**
2. **Code themes:**
   - Missing features: 45 mentions
   - Performance issues: 32 mentions
   - UI confusion: 28 mentions
   - Pricing concerns: 15 mentions

3. **Extract quotes:**
   - Select representative examples
   - Anonymize if needed
   - Use in presentation

4. **Prioritize themes:**
   - By frequency
   - By segment
   - By impact

### Reporting Template

```
[Survey Name] Results

Executive Summary
- Survey purpose
- Response rate
- Key findings (3-5 bullets)
- Top recommendations

Methodology
- Who surveyed
- When conducted
- Response rate
- Sample size

Key Findings

Finding 1: [Title]
- Chart/visualization
- Key stat
- Supporting data
- Quote if relevant

Finding 2: [Title]
...

Detailed Results
- All questions with results
- Segment breakdowns
- Trends over time

Recommendations
1. [Action based on finding]
2. [Action based on finding]
3. [Action based on finding]

Next Steps
- Timeline for actions
- Owner for each
- Follow-up plan
```

---

## Tools

### Survey Platforms

**Typeform**
- Beautiful UI
- High completion rates
- Logic and branching
- Good for customer-facing

**Google Forms**
- Free
- Simple
- Good for internal
- Limited features

**Qualtrics**
- Enterprise-grade
- Advanced logic
- Complex surveys
- Expensive

**SurveyMonkey**
- Popular, established
- Good templates
- Analysis tools
- Mid-priced

**Delighted**
- Specialized for NPS
- Automated sending
- Trend tracking
- Simple and focused

**In-app tools:**
- Pendo
- Appcues
- Intercom
- Hotjar

---

## Best Practices Checklist

### Before Launch
- [ ] Clear research goal defined
- [ ] Target audience specified
- [ ] Questions reviewed by teammate
- [ ] Survey tested on mobile
- [ ] Estimated time is accurate
- [ ] Logic/branching tested
- [ ] Thank you message written
- [ ] Distribution plan ready

### During Survey
- [ ] Monitor response rate
- [ ] Check for issues in responses
- [ ] Send reminder (once)
- [ ] Track completion rate

### After Survey
- [ ] Clean data (remove test responses)
- [ ] Calculate key metrics
- [ ] Analyze open-ended responses
- [ ] Create visualizations
- [ ] Write summary report
- [ ] Share findings with team
- [ ] Define action items
- [ ] Follow up with respondents

---

## Advanced Techniques

### Skip Logic
**Show different questions based on answers**

Example:
```
Q1: Have you used Feature X?
- Yes → Go to Q2
- No → Skip to Q5

Q2: How often do you use Feature X?
[Only shown if answered "Yes" to Q1]
```

### Piping
**Use previous answers in later questions**

Example:
```
Q1: Which feature do you use most?
Answer: Reports

Q2: What improvements would you like to see in [Reports]?
```

### Randomization
**Show options in random order**

Why:
- Reduces order bias
- More reliable priority data
- Fairer for all options

### A/B Testing
**Test different question wording**

Example:
- Version A: "How satisfied are you?"
- Version B: "How would you rate your experience?"

Compare response patterns

---

## Common Pitfalls

1. **Survey too long**
   - Keep under 10 minutes
   - Cut non-essential questions
   - Use logic to show relevant only

2. **Surveying too often**
   - Max quarterly per user
   - Track survey fatigue
   - Respect opt-outs

3. **Not acting on results**
   - Share findings widely
   - Define clear actions
   - Close the loop with respondents

4. **Ignoring non-responses**
   - Low response rate = biased sample
   - Non-respondents may be different
   - Try different approaches

5. **Poor question order**
   - Start easy and engaging
   - Put demographics last
   - Group related questions

---

## Related Skills
- User Interviews
- Quantitative vs Qualitative Research
- Data Analysis
- Customer Satisfaction Metrics
- Net Promoter Score (NPS)
- Statistical Significance
- User Research Methods
- A/B Testing
- Product Analytics
