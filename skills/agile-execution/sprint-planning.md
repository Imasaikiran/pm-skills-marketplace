# Sprint Planning

## Description
Collaborative process where the team plans work for the upcoming sprint, defines the sprint goal, and commits to deliverables.

## When to Use
- Starting a new sprint (typically every 1-2 weeks)
- After sprint review and retrospective
- When transitioning between project phases

## Sprint Planning Overview

**Duration:** 2-4 hours for a 2-week sprint
**Participants:** Product Manager, Scrum Master, Development Team
**Outcome:** Sprint backlog with committed stories

## The Two Parts

### Part 1: What (Sprint Goal)
**Duration:** 1-2 hours
**Focus:** WHAT will we build?

**Activities:**
- Review product backlog
- Discuss priorities
- Define sprint goal
- Select user stories

### Part 2: How (Task Breakdown)
**Duration:** 1-2 hours
**Focus:** HOW will we build it?

**Activities:**
- Break stories into tasks
- Estimate effort
- Identify dependencies
- Assign work

---

## Sprint Planning Agenda

### 1. Set the Stage (15 min)
- Review sprint capacity
- Discuss team availability
- Review velocity from last sprint
- Highlight any constraints

**Template:**
```markdown
## Sprint Capacity
- Team members: [5]
- Days in sprint: [10]
- Holidays/PTO: [1 day]
- Total capacity: [45 dev days]
- Expected velocity: [40 story points]
```

### 2. Review Sprint Goal (30 min)
- What's the theme for this sprint?
- What business objective are we achieving?
- How does this align with product strategy?

**Good Sprint Goals:**
✅ "Enable users to share content on social media"
✅ "Improve checkout conversion by reducing friction"
✅ "Launch MVP for small business customers"

**Bad Sprint Goals:**
❌ "Complete 10 tickets"
❌ "Fix bugs"
❌ "Work on various features"

### 3. Select User Stories (1 hour)
- Walk through top backlog items
- Clarify acceptance criteria
- Ask questions and discuss approach
- Team pulls stories they can commit to

**Selection Criteria:**
- Is it refined and ready?
- Does it support the sprint goal?
- Do we have capacity?
- Are dependencies resolved?

### 4. Break Down Tasks (1 hour)
- Decompose each story into technical tasks
- Estimate hours per task
- Identify who might work on what
- Flag blockers or unknowns

**Example Story Breakdown:**
```markdown
User Story: As a user, I want to reset my password via email

Tasks:
- [ ] Design password reset email template (2h)
- [ ] Create password reset API endpoint (4h)
- [ ] Build password reset form UI (3h)
- [ ] Add email sending service integration (3h)
- [ ] Write unit tests (2h)
- [ ] Write integration tests (2h)
- [ ] Update documentation (1h)

Total: 17 hours
```

### 5. Confirm Commitment (15 min)
- Review sprint backlog
- Check if sprint goal is achievable
- Get team agreement
- Document any assumptions

---

## Capacity Planning

### Calculate Team Capacity

```
Capacity = Team Size × Sprint Days × Focus Factor

Example:
- 5 developers
- 10 working days
- 0.8 focus factor (accounting for meetings, support, etc.)

Capacity = 5 × 10 × 0.8 = 40 dev days
```

### Factor In

**Reduce capacity for:**
- Holidays and PTO
- Meetings and ceremonies
- Production support
- Technical debt work
- Learning/training time

**Typical Focus Factors:**
- Mature team: 0.8-0.9
- New team: 0.6-0.7
- High interrupt environment: 0.5-0.6

---

## Story Selection Tips

### Priority Order
1. **Must Have:** Critical for sprint goal
2. **Should Have:** Important but not critical
3. **Could Have:** Nice to have if time permits
4. **Won't Have:** Defer to future sprint

### The Pull System
- Team pulls work (not pushed by PM)
- Developers assess feasibility
- Collective commitment

### Stretch Goals
- Add 1-2 lower priority stories
- Clearly mark as stretch
- Only if main goal is achieved

---

## Definition of Ready

Before pulling into sprint, stories should be:

- [ ] User story format completed
- [ ] Acceptance criteria defined
- [ ] Dependencies identified
- [ ] Estimated (story points)
- [ ] Designs available (if needed)
- [ ] Technical approach discussed
- [ ] APIs/data requirements known

---

## Sprint Planning Template

```markdown
# Sprint [Number] Planning

## Sprint Goal
[One sentence describing sprint objective]

## Sprint Dates
Start: [Date]
End: [Date]
Demo: [Date & Time]
Retro: [Date & Time]

## Team Capacity
- Available developers: [X]
- Total dev days: [Y]
- Expected velocity: [Z points]

## Committed Stories

### Priority 1 (Must Have)
- [ ] [Story ID] - [Story Title] - [Points] - [Owner]
- [ ] [Story ID] - [Story Title] - [Points] - [Owner]

### Priority 2 (Should Have)
- [ ] [Story ID] - [Story Title] - [Points] - [Owner]

### Stretch Goals
- [ ] [Story ID] - [Story Title] - [Points] - [Owner]

## Dependencies
- [Dependency 1] - [Owner] - [Due Date]
- [Dependency 2] - [Owner] - [Due Date]

## Risks & Assumptions
- [Risk/Assumption 1]
- [Risk/Assumption 2]

## Notes
[Any additional context]
```

---

## Common Pitfalls

### 1. Overcommitting
**Problem:** Taking on more than team can handle

**Solution:**
- Use historical velocity as guide
- Leave buffer for unknowns
- Be honest about capacity

### 2. Unclear Sprint Goal
**Problem:** Team doesn't know what success looks like

**Solution:**
- Define concrete, measurable goal
- Ensure everyone understands why
- Link to business objectives

### 3. Stories Not Ready
**Problem:** Pulling in unrefined stories

**Solution:**
- Refine backlog before planning
- Have Definition of Ready checklist
- Defer unclear stories

### 4. No Task Breakdown
**Problem:** Stories stay at high level

**Solution:**
- Break into concrete tasks
- Makes progress visible
- Reveals hidden complexity

### 5. PM Dictates Commitment
**Problem:** Team doesn't have ownership

**Solution:**
- Let team pull stories
- Facilitate, don't mandate
- Trust team's judgment

---

## Sprint Planning Anti-Patterns

❌ **The Never-Ending Meeting**
- Going over 4 hours
- Solution: Better backlog refinement beforehand

❌ **The Rubber Stamp**
- PM already decided everything
- Solution: Make it collaborative

❌ **The Free-For-All**
- No clear goals or priorities
- Solution: Prepare agenda and objectives

❌ **The Capacity Ignorer**
- Overloading the sprint
- Solution: Respect team velocity

❌ **The Detail Obsession**
- Designing solution in planning
- Solution: Save for daily work

---

## PM's Role in Sprint Planning

### Before Planning
- [ ] Groom backlog with team
- [ ] Ensure top stories are refined
- [ ] Prepare sprint goal options
- [ ] Review dependencies
- [ ] Gather any needed stakeholder input

### During Planning
- [ ] Present sprint goal and context
- [ ] Clarify requirements
- [ ] Answer questions
- [ ] Prioritize when needed
- [ ] Remove blockers
- [ ] Facilitate discussion

### After Planning
- [ ] Communicate sprint goal to stakeholders
- [ ] Update roadmap/release plan
- [ ] Follow up on dependencies
- [ ] Schedule design/clarification sessions if needed

---

## Measuring Sprint Planning Success

### Good Indicators
✅ Sprint goal is clear and achievable
✅ Team is confident in commitment
✅ Stories are well-understood
✅ Planning finished on time
✅ Everyone participated

### Red Flags
🚩 Frequent mid-sprint scope changes
🚩 Team consistently over/undercommits
🚩 Stories regularly blocked or unclear
🚩 Planning takes > 4 hours
🚩 Silent team members

---

## Remote Sprint Planning Tips

### Tools
- Video conferencing (Zoom, Teams)
- Digital board (Jira, Linear, Trello)
- Collaborative docs (Notion, Confluence)
- Timer for timeboxing

### Best Practices
- Turn cameras on
- Use breakout rooms for part 2
- Take more frequent breaks
- Use async prep (review stories beforehand)
- Record session for reference

---

## Related Skills
- Backlog Refinement
- User Story Writing
- Story Point Estimation
- Velocity Tracking
- Sprint Review
- Sprint Retrospective
