# Backlog Refinement (Grooming)

## Description
Ongoing process of reviewing, clarifying, estimating, and prioritizing product backlog items to ensure they're ready for sprint planning.

## When to Use
- Weekly refinement sessions (recommended)
- Before sprint planning
- When new requirements emerge
- When existing stories need clarification

## What is Backlog Refinement?

**Goal:** Ensure the top backlog items are clear, estimated, and ready to be worked on.

**Time Investment:** 5-10% of sprint capacity
**Frequency:** Weekly or bi-weekly
**Duration:** 1-2 hours per session
**Participants:** PM, 2-3 developers, designer (as needed)

---

## The Refinement Process

### 1. Review & Discuss (40%)
- Read user story together
- Discuss user need and context
- Clarify acceptance criteria
- Ask questions

### 2. Break Down (30%)
- Split large stories
- Identify sub-tasks
- Define technical approach
- Spot dependencies

### 3. Estimate (20%)
- Assign story points
- Use planning poker
- Reach consensus
- Flag unknowns

### 4. Prioritize (10%)
- Confirm ordering
- Adjust based on new info
- Mark as "Ready"

---

## Refinement Agenda Template

```markdown
# Backlog Refinement - [Date]

## Attendees
- [Names]

## Goals for This Session
- Refine top 10 backlog items
- Clarify stories for next 2 sprints
- Break down [specific epic]

## Stories to Review

### Story 1: [Title]
**Status:** Draft → Ready
**Discussion:**
- [Key points discussed]
**Estimate:** [X points]
**Dependencies:** [None/List]
**Ready:** ✅/❌

### Story 2: [Title]
...

## Action Items
- [ ] [Person] - [Action]
- [ ] [Person] - [Action]

## Next Session
- [Date & Time]
- Focus: [Topic]
```

---

## Definition of Ready

A story is ready when it has:

### Must Have
- [ ] Clear user story format
- [ ] Defined acceptance criteria
- [ ] Estimated (story points)
- [ ] Priority assigned
- [ ] No blockers

### Should Have
- [ ] Mockups/designs (if UI work)
- [ ] Technical approach discussed
- [ ] Dependencies identified
- [ ] Test scenarios outlined
- [ ] API contracts defined (if applicable)

### Nice to Have
- [ ] Data requirements specified
- [ ] Analytics events defined
- [ ] Performance criteria
- [ ] Security requirements

---

## Story Breakdown Techniques

### The INVEST Criteria

Stories should be:
- **I**ndependent: Can be built separately
- **N**egotiable: Open to discussion
- **V**aluable: Delivers user value
- **E**stimable: Can be sized
- **S**mall: Fits in a sprint
- **T**estable: Can verify completion

### When to Split Stories

**Too Large:**
- Estimated > 13 points
- Can't fit in one sprint
- Multiple acceptance criteria

**Too Complex:**
- Multiple teams needed
- Many dependencies
- High uncertainty

**How to Split:**

**By Workflow Steps:**
```
Original: "User can manage their profile"

Split into:
- User can view their profile
- User can edit their profile
- User can upload profile picture
- User can change password
```

**By Business Rules:**
```
Original: "Calculate shipping cost"

Split into:
- Calculate shipping for domestic orders
- Calculate shipping for international orders
```

**By Data Types:**
```
Original: "Import data from file"

Split into:
- Import CSV files
- Import Excel files
- Import JSON files
```

**By Operations (CRUD):**
- Create
- Read/View
- Update
- Delete

---

## Estimation Techniques

### Story Points
Relative sizing of effort/complexity:
- **1-2:** Simple, clear, quick
- **3-5:** Moderate effort, some unknowns
- **8:** Complex, multiple parts
- **13:** Very large, should split
- **21+:** Epic, must break down

### Planning Poker

**Process:**
1. PM reads story
2. Team asks questions
3. Everyone selects card (1, 2, 3, 5, 8, 13)
4. Reveal simultaneously
5. Highest and lowest explain
6. Discuss and re-vote if needed
7. Reach consensus

**Benefits:**
- Engages whole team
- Surfaces different perspectives
- Builds shared understanding

### T-Shirt Sizing (Alternative)
- XS, S, M, L, XL
- Faster for early estimation
- Less precise
- Good for roadmap planning

---

## Prioritization During Refinement

### Stack Ranking Factors

**Business Value:**
- Revenue impact
- Customer satisfaction
- Strategic alignment

**Urgency:**
- Time sensitivity
- Market opportunity
- Contractual obligations

**Risk:**
- Technical complexity
- Dependencies
- Learning required

**Effort:**
- Development time
- Resources needed
- Opportunity cost

### The Priority Formula
```
Priority = (Value + Urgency + Risk Reduction) / Effort
```

---

## Types of Backlog Items

### 1. User Stories
New features or enhancements from user perspective

**Example:**
"As a user, I want to filter search results by date, so I can find recent content quickly"

### 2. Technical Stories
Infrastructure, refactoring, technical debt

**Example:**
"Upgrade React to v18 for better performance and security"

### 3. Bugs
Defects that need fixing

**Prioritize by:**
- Severity (critical, major, minor)
- Frequency (how many users affected)
- Workaround (is there one?)

### 4. Spikes
Time-boxed research to reduce uncertainty

**Example:**
"Investigate GraphQL vs REST for new API layer (8 hours)"

**Output:** Document findings and recommendation

---

## Common Refinement Questions

### For Every Story

**Scope:**
- What's in scope? What's out?
- What's the minimum viable version?
- Can we simplify?

**User Value:**
- Who is this for?
- What problem does it solve?
- How will they use it?

**Acceptance:**
- How do we know it's done?
- What should we test?
- What can break?

**Technical:**
- What's the approach?
- What are the risks?
- What do we need to learn?

**Dependencies:**
- What needs to happen first?
- Who else is involved?
- Are there external blockers?

---

## Refinement Anti-Patterns

### ❌ Skipping Refinement
**Problem:** Stories arrive in sprint planning unclear

**Solution:** Dedicate regular time to refinement

### ❌ PM Monologue
**Problem:** PM talks, team listens passively

**Solution:** Make it collaborative, ask questions

### ❌ Design in Real-Time
**Problem:** Trying to design solution during refinement

**Solution:** Come prepared with options, not final answers

### ❌ Over-Refining
**Problem:** Planning every detail weeks in advance

**Solution:** Just-in-time refinement for near-term work

### ❌ No Estimates
**Problem:** Can't plan capacity or prioritize

**Solution:** Quick estimates, even if rough

---

## PM's Refinement Checklist

### Before Session
- [ ] Identify stories to refine (next 2-3 sprints)
- [ ] Draft user stories with context
- [ ] Add initial acceptance criteria
- [ ] Gather any mockups or requirements
- [ ] Review dependencies
- [ ] Send agenda to team

### During Session
- [ ] Provide context and user insight
- [ ] Answer questions clearly
- [ ] Listen to technical concerns
- [ ] Note action items
- [ ] Help with prioritization
- [ ] Mark stories as ready/not ready

### After Session
- [ ] Update stories based on discussion
- [ ] Follow up on action items
- [ ] Schedule design reviews if needed
- [ ] Communicate changes to stakeholders
- [ ] Prepare for next refinement

---

## Measuring Refinement Success

### Good Signs ✅
- Sprint planning is fast (<2 hours)
- Stories are well understood
- Accurate estimation
- Minimal mid-sprint clarifications
- Team confident in commitments

### Warning Signs 🚩
- Sprint planning takes >4 hours
- Frequent scope changes mid-sprint
- Stories often blocked
- Wildly inaccurate estimates
- Lots of "I don't understand" questions

---

## Refinement Best Practices

### 1. Timeboxing
- Set time limit for each story
- Move on if consensus can't be reached
- Mark for follow-up

### 2. Right People
- Don't need whole team
- Rotate participation
- Include domain experts when needed

### 3. Visual Aids
- Use mockups/wireframes
- Draw diagrams
- Show examples

### 4. Ask "Why"
- Understand underlying need
- Challenge assumptions
- Find simpler solutions

### 5. Document Decisions
- Capture key points
- Note open questions
- Record estimates and reasoning

### 6. Continuous Process
- Not just one-time event
- Stories evolve
- Re-refine as needed

---

## Remote Refinement Tips

### Tools
- Video conferencing
- Digital whiteboard (Miro, FigJam)
- Planning poker apps
- Shared document for notes

### Practices
- Share screen with story
- Use reactions/emojis for quick feedback
- Take more breaks
- Send materials beforehand
- Record key decisions in writing

---

## Sample Refinement Cadence

**Week 1:**
- Refine stories for Sprint N+1

**Week 2:**
- Re-refine Sprint N+1 stories
- Start refining Sprint N+2 stories

**Before Sprint Planning:**
- Final check on top priority stories
- Ensure at least 1.5 sprints worth of ready stories

**Goal:** Always have 2 sprints worth of refined backlog

---

## Related Skills
- User Story Writing
- Acceptance Criteria Definition
- Story Point Estimation
- Sprint Planning
- Dependency Mapping
