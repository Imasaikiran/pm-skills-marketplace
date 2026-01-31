# PM Skills Marketplace - Research Findings

## Executive Summary

This document outlines comprehensive research on creating a world-class skills marketplace for Product Managers, built on Claude Code's agent skills platform.

---

## 1. Technical Architecture Research

### Claude Skills Framework

**Core Architecture:**
- Skills follow the Agent Skills open standard (SKILL.md format)
- YAML frontmatter + Markdown instructions
- Support for dynamic content via shell commands
- Subagent execution with isolated contexts
- Tool restrictions and permission management

**Key Capabilities:**
- String substitution (`$ARGUMENTS`, `${CLAUDE_SESSION_ID}`)
- Shell command preprocessing (`` !`command` ``)
- Supporting files (templates, examples, reference docs)
- Hooks for lifecycle management
- Extended thinking support ("ultrathink")

**Distribution Methods:**
1. **Personal**: `~/.claude/skills/` (user-level)
2. **Project**: `.claude/skills/` (repo-level)
3. **Plugin**: Package with `.claude-plugin/plugin.json`
4. **Enterprise**: Managed settings (org-wide)

### Best Practices Identified

1. **Keep SKILL.md under 500 lines** - Use supporting files for detailed content
2. **Write discoverable descriptions** - Claude auto-invokes based on keywords
3. **Provide examples** - Show expected output quality
4. **Use specific tool allowlists** - Restrict to necessary tools only
5. **Include extended thinking** - Add "ultrathink" for complex reasoning
6. **Reference supporting files** - Guide Claude to load additional context

---

## 2. Marketplace Platform Analysis

### Existing Platforms

| Platform | Focus | Model | Key Features |
|----------|-------|-------|--------------|
| **SkillsMP** | Coding assistants | Free directory | 71,000+ skills, Claude/Codex compatible |
| **SkillzWave** | AI agents | Package manager | 44,000+ skills, version management |
| **GPT Store** | ChatGPT | User engagement | 3M+ custom GPTs, revenue sharing based on usage |
| **Kore.ai** | Enterprise AI | B2B marketplace | 75+ templates, 100+ agents |
| **MENT.tech** | Custom AI assistants | API marketplace | Build/deploy/monetize agents |

### Key Marketplace Patterns

**Discovery Mechanisms:**
- Search by category, role, domain
- Featured/trending skills
- User ratings and reviews
- Usage statistics ("Downloaded X times")
- Curator recommendations

**Monetization Models:**
1. **Freemium** - Basic skills free, premium features paid
2. **Usage-based** - Pay per execution or API call
3. **Subscription** - Monthly access to premium collections
4. **One-time purchase** - Buy individual premium skills
5. **Revenue share** - Platform takes % of creator earnings

**Distribution Features:**
- One-click install to Claude Code
- Versioning and update notifications
- Dependency management
- Creator profiles and portfolios
- Community forums and support

---

## 3. Product Management Domain Research

### Core PM Frameworks (2026)

**Prioritization:**
- RICE (Reach, Impact, Confidence, Effort)
- MoSCoW (Must/Should/Could/Won't have)
- Kano Model (Customer delight analysis)
- Value vs. Effort matrix
- Weighted Scoring

**Problem-Solving:**
- CIRCLES Method (Comprehend, Identify, Report, Cut, List, Evaluate, Summarize)
- Jobs-to-be-Done (JTBD)
- Design Thinking
- First Principles analysis

**Metrics & Analytics:**
- HEART (Happiness, Engagement, Adoption, Retention, Task Success)
- AARRR (Pirate Metrics: Acquisition, Activation, Retention, Revenue, Referral)
- North Star Metric framework
- OKRs (Objectives & Key Results)

**Strategy & Roadmapping:**
- Product Vision Board
- Story Mapping
- Now-Next-Later roadmap
- Opportunity Solution Trees
- Lean Canvas

### Essential PM Tool Categories

1. **Roadmapping**: Aha!, Productboard, Roadmunk
2. **Project Management**: Jira, Asana, Linear, Monday.com
3. **Analytics**: Mixpanel, Amplitude, Heap, PostHog
4. **User Research**: UserTesting, Dovetail, Maze
5. **Feedback**: Typeform, Hotjar, Productboard
6. **Collaboration**: Miro, Figma, Notion, Confluence
7. **Communication**: Slack, Loom, Intercom

### PM Skill Categories Defined

Based on research, we've identified **12 core categories**:

1. **Discovery & Research**
   - User interviews, surveys, competitive analysis
   - Market research, customer journey mapping
   - Jobs-to-be-Done analysis

2. **Strategy & Vision**
   - Product vision creation, strategy frameworks
   - Market positioning, competitive strategy
   - Business model development

3. **Prioritization & Decision-Making**
   - RICE, MoSCoW, Kano implementation
   - Trade-off analysis, opportunity scoring
   - Stakeholder alignment

4. **Roadmapping & Planning**
   - Roadmap creation (Now-Next-Later, Timeline)
   - Release planning, milestone tracking
   - Dependency management

5. **Metrics & Analytics**
   - KPI definition, dashboard creation
   - A/B test analysis, cohort analysis
   - Funnel optimization, retention analysis

6. **User Experience & Design**
   - UX research collaboration, design reviews
   - Prototyping workflows, usability testing
   - Accessibility audits

7. **Stakeholder Management**
   - Executive communications, board decks
   - Cross-functional alignment, conflict resolution
   - Expectation management

8. **Agile & Execution**
   - Sprint planning, backlog grooming
   - User story writing, acceptance criteria
   - Retrospectives, velocity tracking

9. **Go-to-Market**
   - Launch planning, marketing collaboration
   - Sales enablement, pricing strategy
   - Customer onboarding

10. **Technical Collaboration**
    - API documentation, technical specs
    - Architecture reviews, tech debt management
    - Developer handoffs

11. **Customer Success**
    - Feature adoption tracking, churn analysis
    - Customer feedback loops, support ticket analysis
    - Success metrics definition

12. **Career & Leadership**
    - Team mentorship, interview prep
    - Portfolio building, performance reviews
    - Presentation skills, executive presence

---

## 4. Competitive Advantage Strategy

### What Makes This Different

**For PM-Focused Marketplace:**

1. **Domain Expertise** - Skills built by PMs for PMs using latest frameworks
2. **Daily Updates** - New skills added based on emerging best practices
3. **First Principles Design** - Skills teach "why" not just "how"
4. **Integration Ecosystem** - Connect with PM tools (Jira, Productboard, etc.)
5. **Community-Driven** - Peer reviews, contributions, real-world tested
6. **Omnichannel Access** - Claude Code, API, web interface, mobile app
7. **Analytics Dashboard** - Track skill usage, effectiveness, ROI
8. **Learning Paths** - Structured skill progressions (Junior → Senior → Staff PM)

### Differentiation Matrix

| Feature | Our Platform | SkillsMP | GPT Store | Traditional PM Tools |
|---------|--------------|----------|-----------|----------------------|
| PM-specific | ✅ 100% | ❌ Generic | ❌ Generic | ✅ Limited |
| Daily updates | ✅ Yes | ❌ No | ❌ No | ⚠️ Monthly |
| First principles | ✅ Yes | ❌ No | ❌ No | ❌ No |
| Skill analytics | ✅ Advanced | ⚠️ Basic | ⚠️ Basic | ❌ N/A |
| Tool integration | ✅ Native | ❌ No | ❌ No | ⚠️ Limited |
| Learning paths | ✅ Structured | ❌ No | ❌ No | ⚠️ Scattered |
| Community | ✅ PM-focused | ⚠️ Dev-focused | ⚠️ General | ❌ No |
| Quality bar | ✅ Curated | ⚠️ Variable | ⚠️ Variable | ✅ High |

---

## 5. Monetization Strategy

### Recommended Model: **Freemium + Pro**

**Free Tier:**
- 30 core PM skills (covering basics)
- Community skills (peer-reviewed)
- Basic analytics (downloads, ratings)
- Standard support (documentation)

**Pro Tier** ($29/month or $249/year):
- 120+ premium skills (advanced frameworks)
- Early access to new skills (7-day preview)
- Advanced analytics (usage patterns, effectiveness)
- Priority support (Slack community)
- Custom skill requests (2/month)
- API access (1000 calls/month)

**Team Tier** ($99/month per team):
- Everything in Pro
- Team collaboration features
- Shared skill libraries
- Usage analytics dashboard
- Team training sessions (monthly)
- Custom skill development (4/month)
- Unlimited API access

**Enterprise Tier** (Custom pricing):
- Everything in Team
- Private skill marketplace
- SSO and user management
- Custom integrations
- Dedicated account manager
- On-premise deployment option
- SLA guarantees

### Revenue Projections

**Cost Structure:**
- **Hosting** (AWS/Vercel): ~$200-500/month (starting)
- **Database** (Supabase/PostgreSQL): ~$25-100/month
- **CDN** (Cloudflare): ~$20-50/month
- **Analytics** (PostHog/Mixpanel): ~$0-200/month
- **Email** (SendGrid): ~$20-100/month
- **Domain & SSL**: ~$50/year
- **Development**: Time investment (sweat equity initially)

**Total Monthly Cost (MVP)**: ~$300-1000

**Break-even Analysis:**
- 15 Pro users ($435/month) covers basic costs
- 50 Pro users ($1,450/month) sustains operations
- 200 Pro users ($5,800/month) enables full-time development

### Creator Economy Option

**Phase 2 Feature** - Allow community to create/sell skills:
- Platform takes 20% of sales
- Creators keep 80%
- Quality verification required
- Minimum pricing: $5/skill or $15/collection
- Monthly payouts via Stripe

---

## 6. Technical Stack Recommendations

### Frontend (Marketplace Website)

**Option A: Next.js + React** (Recommended)
- **Pros**: SEO-friendly, fast, great DX, large ecosystem
- **Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Hosting**: Vercel ($0-20/month to start)

**Option B: Astro + React**
- **Pros**: Ultra-fast, islands architecture, flexible
- **Stack**: Astro 5, React islands, TypeScript, Tailwind CSS
- **Hosting**: Vercel/Netlify ($0-20/month)

### Backend & Database

**Option A: Supabase** (Recommended for MVP)
- **Pros**: Fast setup, real-time, auth built-in, PostgreSQL
- **Features**: Database, Auth, Storage, Edge Functions
- **Pricing**: Free tier → $25/month Pro

**Option B: Firebase**
- **Pros**: Google ecosystem, good docs, real-time
- **Pricing**: Pay-as-you-go

**Option C: Custom (Node.js + PostgreSQL)**
- **Pros**: Full control, flexible, scalable
- **Stack**: Node.js, Express/Fastify, PostgreSQL, Redis
- **Hosting**: Railway/Fly.io/AWS

### Analytics & Tracking

**User Analytics:**
- PostHog (open-source, self-hostable)
- Mixpanel (free tier up to 100K events)
- Plausible (privacy-focused)

**Skill Usage Tracking:**
- Custom API with PostgreSQL
- Track: installs, executions, errors, ratings
- Real-time dashboard with Grafana/Metabase

### Search & Discovery

**Option A: Meilisearch** (Recommended)
- Fast, typo-tolerant, faceted search
- Self-hosted or cloud ($0-30/month)

**Option B: Algolia**
- Powerful, hosted, great DX
- Generous free tier

**Option C: PostgreSQL Full-Text Search**
- Free, built-in, good enough for MVP

### Payment Processing

**Stripe** (Industry standard)
- Subscription management
- Webhook support
- International payments
- $0 setup + 2.9% + $0.30 per transaction

### CDN & Asset Delivery

**Cloudflare** (Recommended)
- Free tier excellent
- Global CDN
- DDoS protection
- Web analytics included

---

## 7. Platform Architecture

### System Components

```
┌─────────────────────────────────────────────────────┐
│                   User Interface                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │   Web    │  │  CLI     │  │   API    │          │
│  │Marketplace│  │ Install  │  │ Clients  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│              API Gateway & Auth                      │
│     (Authentication, Rate Limiting, Routing)         │
└─────────────────────────────────────────────────────┘
                        │
         ┌──────────────┼──────────────┐
         ▼              ▼              ▼
┌────────────┐  ┌────────────┐  ┌────────────┐
│   Skills   │  │ Analytics  │  │    User    │
│  Service   │  │  Service   │  │  Service   │
│            │  │            │  │            │
│• Discovery │  │• Tracking  │  │• Auth      │
│• Metadata  │  │• Metrics   │  │• Profiles  │
│• Versions  │  │• Reports   │  │• Billing   │
└────────────┘  └────────────┘  └────────────┘
         │              │              │
         └──────────────┼──────────────┘
                        ▼
┌─────────────────────────────────────────────────────┐
│            Database Layer (PostgreSQL)               │
│  • Skills metadata    • User data    • Analytics    │
│  • Versions          • Subscriptions • Events       │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│        Storage Layer (S3/R2/Supabase Storage)       │
│  • SKILL.md files    • Examples    • Documentation  │
└─────────────────────────────────────────────────────┘
```

### Data Models

**Skills Table:**
```sql
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(64) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  author_id UUID REFERENCES users(id),
  version VARCHAR(20) NOT NULL,
  downloads INT DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  active_users INT DEFAULT 0,
  premium BOOLEAN DEFAULT false,
  price DECIMAL(10,2),
  skill_file_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP,
  tags TEXT[],
  dependencies JSONB,
  metadata JSONB
);
```

**Usage Analytics Table:**
```sql
CREATE TABLE skill_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id UUID REFERENCES skills(id),
  user_id UUID REFERENCES users(id),
  event_type VARCHAR(50), -- install, execute, error, uninstall
  session_id VARCHAR(255),
  execution_time_ms INT,
  error_message TEXT,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API Endpoints

**Public API:**
```
GET    /api/skills                 # List/search skills
GET    /api/skills/:id             # Get skill details
GET    /api/skills/:id/download    # Download SKILL.md
GET    /api/skills/:id/versions    # List versions
GET    /api/categories             # List categories
GET    /api/skills/trending        # Trending skills
GET    /api/skills/featured        # Featured skills
POST   /api/skills/:id/rate        # Rate a skill
```

**Authenticated API:**
```
POST   /api/skills                 # Create skill (creators)
PUT    /api/skills/:id             # Update skill
DELETE /api/skills/:id             # Delete skill
GET    /api/me/skills              # My installed skills
POST   /api/me/skills/:id/install  # Track install
POST   /api/me/skills/:id/usage    # Track usage
GET    /api/me/analytics           # My usage analytics
```

---

## 8. Installation Experience

### One-Click Install Flow

**Web → Claude Code:**
```bash
# User clicks "Install" on website
# Website generates install command:
claude install pm-skill-name

# Or direct download:
curl -o ~/.claude/skills/pm-skill-name/SKILL.md \
  https://pmskills.io/api/skills/pm-skill-name/download

# CLI auto-notifies:
✓ Installed: pm-skill-name v1.2.0
  Try it: /pm-skill-name
```

**Browser Extension (Future):**
- One-click install from website
- Auto-sync with Claude Code
- Update notifications

**CLI Tool (Future):**
```bash
# Package manager for PM skills
pmskills search roadmap
pmskills install roadmap-planner
pmskills update --all
pmskills list
```

---

## 9. Quality Assurance Process

### Skill Submission Requirements

**Technical:**
- [ ] Valid SKILL.md format
- [ ] YAML frontmatter complete
- [ ] Description < 500 chars
- [ ] Examples included
- [ ] Supporting files organized
- [ ] No sensitive data hardcoded
- [ ] Tool allowlist defined

**Content:**
- [ ] First principles explained
- [ ] Framework properly sourced
- [ ] Use cases documented
- [ ] Limitations noted
- [ ] Examples realistic
- [ ] Language clear and concise

**Testing:**
- [ ] Skill executes without errors
- [ ] Examples produce expected output
- [ ] Edge cases handled
- [ ] User feedback incorporated
- [ ] Peer reviewed (2+ reviewers)

### Review Process

1. **Automated Checks** (CI/CD)
   - YAML syntax validation
   - File structure verification
   - Security scanning
   - Link checking

2. **Community Review** (48 hours)
   - Peer feedback
   - Improvement suggestions
   - Real-world testing

3. **Curator Approval** (24 hours)
   - Final quality check
   - Category assignment
   - Tagging and metadata

4. **Publication**
   - Version tagged
   - Changelog generated
   - Announcement posted

---

## 10. Growth & Distribution Strategy

### Launch Strategy

**Phase 1: Closed Beta (Month 1-2)**
- 50 hand-picked PMs
- Core 30 skills
- Feedback loops
- Iterate rapidly

**Phase 2: Public Beta (Month 3-4)**
- Open registration (waitlist)
- 60 skills total
- Community features launch
- Content marketing begins

**Phase 3: General Availability (Month 5+)**
- Remove waitlist
- 100+ skills
- Premium tier launch
- Partnerships (PM School, Reforge, etc.)

### Marketing Channels

**Content Marketing:**
- Weekly blog: "PM Framework Fridays"
- YouTube: Skill demos and tutorials
- Newsletter: "PM Skills Weekly"
- Podcast interviews with PM leaders

**Community:**
- Discord/Slack community
- Monthly webinars
- Skill-building workshops
- User success stories

**Partnerships:**
- Product School
- Reforge
- Mind the Product
- Women in Product
- ProductHunt launch

**SEO:**
- "How to [PM framework]" guides
- Framework comparison articles
- Tool alternative pages
- Skill-specific landing pages

---

## 11. Success Metrics

### Platform KPIs

**Acquisition:**
- Website visitors (goal: 10K/month by Month 6)
- Signups (goal: 1K by Month 6)
- Email subscribers (goal: 5K by Month 6)

**Activation:**
- Users who install ≥1 skill (goal: 70%)
- Users who execute ≥1 skill (goal: 50%)
- Time to first skill execution (goal: <5 min)

**Engagement:**
- Skills installed per user (goal: 5)
- Skills executed per week (goal: 10)
- Return rate (goal: 60% weekly)

**Revenue:**
- Free → Pro conversion (goal: 5%)
- Monthly recurring revenue (goal: $5K by Month 6)
- Customer lifetime value (goal: $500)
- Churn rate (goal: <5% monthly)

**Retention:**
- Day 7 retention (goal: 50%)
- Day 30 retention (goal: 30%)
- Day 90 retention (goal: 20%)

### Skill Quality Metrics

- Average rating (goal: 4.5+/5)
- Execution success rate (goal: 95%+)
- Time saved per execution (tracked via survey)
- User satisfaction score (NPS goal: 50+)

---

## 12. Roadmap

### Q1 2026 (Current)
- ✅ Research and planning
- ⏳ Build core 30 PM skills
- ⏳ Develop MVP marketplace website
- ⏳ Set up analytics infrastructure
- ⏳ Create documentation

### Q2 2026
- Launch closed beta (50 users)
- Build to 60 skills
- Implement feedback system
- Add community features
- Start content marketing

### Q3 2026
- Public beta launch
- 100+ skills available
- Premium tier launch
- CLI tool release
- Partnership outreach

### Q4 2026
- General availability
- Team tier launch
- Browser extension
- Mobile-responsive redesign
- International expansion

### 2027+
- Creator marketplace
- Enterprise tier
- API ecosystem
- White-label options
- Domain/role expansion (Engineering, Design, Marketing)

---

## Next Steps

1. ✅ Complete research documentation
2. Create 12 category-specific PM skills
3. Build marketplace website MVP
4. Set up analytics tracking
5. Launch closed beta with 50 PMs
6. Iterate based on feedback
7. Scale to 100+ skills
8. Launch premium tier

---

## Sources

**Skills Architecture:**
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills.md)
- [Agent Skills Open Standard](https://skillsmp.com/)
- [SkillzWave Platform](https://skillzwave.ai/)

**Product Management:**
- [Product Management Frameworks 2026](https://www.sprintzeal.com/blog/product-management-frameworks)
- [Mind the Product Resources](https://www.mindtheproduct.com/top-books-and-resources-in-2026-for-product-managers/)
- [Product Prioritization Guide](https://monday.com/blog/rnd/product-prioritization-frameworks/)
- [Airtable PM Tools Guide](https://www.airtable.com/articles/product-management-tools)

**Marketplace Models:**
- [GPT Store Launch](https://openai.com/index/introducing-the-gpt-store/)
- [AI Assistant Marketplaces](https://www.ment.tech/ai-assistant-marketplace/)
- [Kore.ai Marketplace](https://www.kore.ai/ai-marketplace)

---

**Document Version:** 1.0
**Last Updated:** January 23, 2026
**Author:** PM Skills Marketplace Team
