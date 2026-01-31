# AARRR Metrics (Pirate Metrics)

## Description
AARRR is a framework for tracking key metrics across the customer lifecycle: Acquisition, Activation, Retention, Revenue, and Referral.

## When to Use
- Setting up analytics dashboards
- Identifying growth bottlenecks
- Prioritizing product improvements
- Reporting on product health
- Diagnosing conversion funnel issues

## The Five Stages

### 1. Acquisition
**How do users find you?**

**Key Metrics:**
- Website visitors
- App downloads
- Sign-up page views
- Traffic sources (organic, paid, social, referral)
- Cost per acquisition (CPA)
- Click-through rate (CTR)

**Questions to Ask:**
- Which channels drive the most traffic?
- What's the cost per visitor by channel?
- Which sources have the best conversion rates?

**Optimization Focus:**
- SEO and content marketing
- Paid advertising efficiency
- Partnership channels
- Social media presence

---

### 2. Activation
**Do users have a great first experience?**

**Key Metrics:**
- Sign-up completion rate
- Time to first value
- Onboarding completion rate
- Feature adoption in first session
- Aha moment reached

**Questions to Ask:**
- What percentage complete sign-up?
- How long until users see value?
- Where do users drop off in onboarding?
- What do successful users do in their first session?

**Optimization Focus:**
- Streamline onboarding
- Reduce time-to-value
- Improve first-run experience
- Progressive disclosure

---

### 3. Retention
**Do users come back?**

**Key Metrics:**
- Daily/Weekly/Monthly Active Users (DAU/WAU/MAU)
- Retention curves (Day 1, Day 7, Day 30)
- Churn rate
- Session frequency
- Engagement rate

**Questions to Ask:**
- What % of users return after Day 1? Week 1? Month 1?
- Which features drive retention?
- Why do users churn?
- What do power users do differently?

**Optimization Focus:**
- Build habit-forming features
- Email and push notifications
- Product improvements
- Re-engagement campaigns

---

### 4. Revenue
**How do you monetize?**

**Key Metrics:**
- Average Revenue Per User (ARPU)
- Customer Lifetime Value (LTV)
- Conversion to paid
- Monthly Recurring Revenue (MRR)
- Average order value
- Payment success rate

**Questions to Ask:**
- What's the conversion rate to paid?
- How much does each user generate over time?
- Which pricing tier is most popular?
- What drives upgrade decisions?

**Optimization Focus:**
- Pricing optimization
- Upsell and cross-sell
- Payment flow improvements
- Value demonstration

---

### 5. Referral
**Do users tell others?**

**Key Metrics:**
- Viral coefficient (K-factor)
- Net Promoter Score (NPS)
- Referral rate
- Share/invite actions
- Word-of-mouth attribution

**Questions to Ask:**
- How many users invite others?
- What % of new users come from referrals?
- What motivates users to share?
- Which sharing mechanisms work best?

**Optimization Focus:**
- Built-in sharing features
- Referral programs
- Social proof
- Incentive systems

---

## AARRR Dashboard Template

```markdown
### Acquisition (Last 30 Days)
- Total visitors: [10,000]
- Sign-ups: [500]
- Conversion rate: [5%]
- Top channel: [Organic - 40%]
- CPA: [$25]

### Activation
- Sign-up completion: [75%]
- Onboarded users: [350]
- Time to first value: [5 minutes]
- Aha moment reached: [60%]

### Retention
- Day 1: [40%]
- Day 7: [25%]
- Day 30: [15%]
- DAU/MAU: [0.3]
- Monthly churn: [10%]

### Revenue
- Paying users: [50]
- Conversion to paid: [10%]
- MRR: [$5,000]
- ARPU: [$100]
- LTV: [$1,200]

### Referral
- NPS: [45]
- Referral rate: [8%]
- Viral coefficient: [0.3]
- Users with referrals: [40]
```

---

## How to Implement AARRR

### Step 1: Define Your Metrics
For each stage, identify 2-3 key metrics that matter most

### Step 2: Set Up Tracking
Implement analytics to measure these metrics:
- Google Analytics / Mixpanel / Amplitude
- Custom event tracking
- Funnel analysis
- Cohort analysis

### Step 3: Establish Baselines
Measure current performance for each metric

### Step 4: Set Goals
Define target metrics for each stage:
- What's good performance in your industry?
- What's needed to hit business goals?

### Step 5: Identify Bottlenecks
Find the stage with the biggest drop-off or opportunity

### Step 6: Experiment and Optimize
Run experiments to improve your weakest metrics

---

## Analysis Framework

### Finding Your Bottleneck

Ask these questions in order:

1. **Acquisition sufficient?**
   - Are you getting enough traffic?
   - If not, focus here first

2. **Activation working?**
   - Are visitors converting to users?
   - Are new users experiencing value?

3. **Retention strong?**
   - Are users coming back?
   - This is often the most important metric

4. **Revenue flowing?**
   - Are users willing to pay?
   - Is monetization effective?

5. **Referral happening?**
   - Are users spreading the word?
   - Can you grow organically?

---

## Common Benchmarks

### SaaS Products
- Activation: 25-40% sign-up to active
- Retention (Day 30): 15-25%
- Conversion to paid: 2-5% (freemium)
- Viral coefficient: 0.15-0.25
- NPS: 30-50

### Consumer Apps
- Activation: 30-50% install to active
- Retention (Day 30): 10-20%
- DAU/MAU: 0.2-0.4
- Viral coefficient: 0.4-0.6+

*Note: Benchmarks vary significantly by industry*

---

## AARRR vs. Other Frameworks

### AARRR vs. North Star Metric
- AARRR: Comprehensive lifecycle view
- North Star: Single focus metric
- **Use both:** AARRR to diagnose, North Star to align

### AARRR vs. OKRs
- AARRR: Framework for metric categories
- OKRs: Goal-setting methodology
- **Use both:** AARRR metrics feed into OKRs

---

## Tips for Success

1. **Focus on one stage at a time**
   - Don't try to optimize everything
   - Find your biggest bottleneck

2. **Cohort analysis is critical**
   - Don't just look at overall averages
   - Compare cohorts over time

3. **Retention > Acquisition**
   - Fix leaky bucket before pouring more in
   - Retained users are more valuable

4. **Measure what matters**
   - Vanity metrics look good but don't help
   - Focus on actionable metrics

5. **Context is everything**
   - Compare to your own past performance
   - Industry benchmarks are guidelines only

---

## Related Skills
- North Star Metric
- Cohort Analysis
- Funnel Analysis
- Product-Market Fit Measurement
- Growth Loops
