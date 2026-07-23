# Velvety Digital Roadmap

> This document is the project's execution roadmap.
>
> It translates the architectural principles defined in `docs/ARCHITECTURE.md`
> into an actionable implementation plan.
>
> Every completed task should be checked off only after it satisfies the
> project's Definition of Done.

---

# Project Status

**Project:** Velvety Digital Website

**Framework:** Next.js App Router

**Primary Branch (Current):** `nextjs-migration`

**Architecture Status:** Stable

**Implementation Status:** In Progress

---

# Guiding Principle

The architecture has already been audited and approved.

The objective is no longer to redesign the application.

The objective is to evolve the business while preserving:

- architecture
- visual identity
- maintainability
- accessibility
- SEO
- performance
- repository quality

Every implementation should deliver measurable business value.

---

# Phase 1 — Architecture Audit

Status: ✅ Completed

## Objectives

- Audit repository structure
- Audit deployment strategy
- Audit components
- Audit hooks
- Audit constants
- Audit configuration
- Identify architectural improvements
- Establish implementation strategy

## Outcome

Architecture confirmed to be stable.

No major refactoring required.

---

# Phase 2 — Engineering Governance

Status: ✅ Completed

## Objectives

- Create engineering constitution
- Define workflow
- Define architectural principles
- Define Definition of Done

## Completed

- [x] Create `docs/ARCHITECTURE.md`

---

# Phase 3 — Foundation Improvements

Status: 🟡 In Progress

## Objective

Strengthen the existing foundation without altering the visual identity.

### Constants

- [x] Centralize business constants
- [x] Centralize WhatsApp configuration

### Footer

- [x] Render Services from `lib/constants.js`
- [x] Render Platforms from `lib/constants.js`
- [x] Render Social Links from `lib/constants.js`

### Contact Information

- [x] Introduce semantic contact markup where contact information is rendered
- [x] Use `mailto:`
- [x] Use `tel:`
- [x] Use `<address>`

### Components

- [x] Verify `components/Services.jsx`
- [x] Determine readiness for extraction (the homepage section remains the appropriate composition boundary)
- [ ] Preserve current homepage composition until extraction is justified

---

# Phase 4 — Business Evolution

Status: ⏳ Planned

## Objective

Expand the business while preserving the existing design language.

### Services

- [ ] Introduce AI-powered DM Response Automation
- [ ] Expand service catalogue
- [ ] Refresh service descriptions
- [ ] Preserve existing design

### Components

- [ ] Extract Services section into `components/Services.jsx`
- [ ] Extract Newsletter section when API integration begins

### Messaging

- [ ] Refresh homepage messaging
- [ ] Improve CTAs
- [ ] Improve conversion copy

---

# Phase 5 — SEO

Status: ⏳ Planned

## Metadata

- [ ] Expand metadata
- [ ] Open Graph
- [ ] Twitter Cards

## Structured Data

- [ ] Organization JSON-LD
- [ ] Website JSON-LD
- [ ] Service JSON-LD
- [ ] FAQ JSON-LD

## Technical SEO

- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Canonical URLs
- [ ] Google Search Console readiness

---

# Phase 6 — Analytics

Status: ⏳ Planned

## Google Analytics

- [ ] GA4
- [ ] CTA tracking
- [ ] Newsletter tracking
- [ ] Contact conversion tracking

---

# Phase 7 — Dependency Maintenance

Status: ⏳ Planned

## Maintenance

- [ ] Upgrade Next.js
- [ ] Upgrade dependencies
- [ ] Resolve audit warnings
- [ ] Resolve security advisories

---

# Phase 8 — Repository Governance

Status: ⏳ Planned

## Repository

- [ ] Promote production-ready branch to `main`
- [ ] Create `develop`
- [ ] Preserve historical branches
- [ ] Create release tags
- [ ] Organize repository structure

### Target Branch Strategy

```
main
│
├── develop
│
├── legacy-v1
├── legacy-v2
│
├── feature/seo
├── feature/analytics
├── feature/ai-automation
├── feature/content
├── feature/performance
│
└── release/*
```

---

# Definition of Done

A task is complete only when:

- [ ] Objective achieved
- [ ] Architecture preserved
- [ ] Visual identity preserved
- [ ] No regressions introduced
- [ ] Local validation successful
- [ ] Accessibility reviewed
- [ ] SEO reviewed
- [ ] Performance reviewed
- [ ] No console errors
- [ ] Focused Git commit created
- [ ] Deployment verified (when applicable)

---

# Current Focus

**Current Phase**

➡️ Phase 3 — Foundation Improvements

**Current Task**

Render the footer entirely from centralized constants without changing the site's appearance.

No other implementation work should begin until this task is complete.
