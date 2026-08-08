# Velvety Digital Architecture & Engineering Guidelines

> This document is the engineering constitution for the Velvety Digital website.
>
> Every implementation, refactor, enhancement, deployment, and repository change must comply with the principles defined here.

---

# 1. Project Vision

Velvety Digital is a modern marketing and digital solutions platform built with Next.js.

The project is intended to evolve into a scalable business platform while preserving its existing visual identity and architectural quality.

Future work prioritizes:

- Business growth
- Service evolution
- Discoverability (SEO)
- Performance
- Accessibility
- Analytics
- Repository governance

The architecture has already been audited and determined to be stable.

Therefore:

**We enhance rather than rewrite.**

---

# 2. Core Engineering Principles

## Preserve Existing Design

The existing visual identity is considered production quality.

Future work should preserve:

- layout
- spacing
- typography
- color palette
- interaction patterns
- overall user experience

Design consistency takes precedence over novelty.

---

## Enhancement Over Refactoring

Refactoring is only performed when it provides measurable value.

Examples include:

- eliminating duplication
- improving maintainability
- enabling reuse
- reducing technical debt

Avoid cosmetic rewrites.

---

## Small Surface Area

Every change should modify the smallest practical portion of the application.

Large unrelated changes are prohibited.

---

## Simplicity First

Do not introduce abstractions until they become necessary.

Avoid unnecessary:

- hooks
- providers
- dependencies
- configuration
- component layers

---

# 3. Architecture Overview

Framework:

- Next.js App Router

Primary directories:

```
app/
components/
lib/
public/
```

Business content should remain centralized whenever practical.

Reusable data belongs in:

```
lib/constants.js
```

---

# 4. Component Philosophy

A section should only become its own component when at least one condition is true:

- it becomes difficult to maintain
- it will be reused
- it gains significant independent logic

Avoid premature decomposition.

Examples:

Good candidates:

- Newsletter
- FAQ
- Testimonials

Simple presentation sections may remain inside page composition until needed.

---

# 5. Content Management

Business content should have a single source of truth.

Avoid duplicated:

- contact information
- navigation
- services
- social links
- business hours

Whenever practical, render these from:

```
lib/constants.js
```

---

# 6. Business Evolution

The project evolves by extending—not replacing—the existing business.

Current services remain intact while new capabilities are introduced.

Planned additions include:

- AI-powered DM Response Automation
- expanded SEO offerings
- analytics consulting
- growth strategy
- automation services

Messaging should evolve without altering the established brand voice.

---

# 7. Performance Standards

Every implementation should consider:

- minimal JavaScript
- optimized images
- bundle size
- lazy loading where appropriate
- server rendering by default
- client components only when necessary

Performance regressions are unacceptable.

---

# 8. Accessibility Standards

Accessibility is a first-class requirement.

Every feature should strive for:

- semantic HTML
- keyboard accessibility
- descriptive link text
- accessible forms
- sufficient color contrast
- meaningful alt text

Accessibility is reviewed before deployment.

---

# 9. SEO Standards

Every implementation should preserve or improve discoverability.

Standards include:

- metadata
- canonical URLs
- Open Graph
- Twitter Cards
- structured data
- robots.txt
- sitemap.xml
- semantic HTML

SEO is part of every review.

---

# 10. Analytics Standards

Analytics should measure business outcomes rather than page views alone.

Future integrations include:

- Google Analytics 4
- CTA tracking
- newsletter conversions
- contact submissions
- service enquiries

Tracking should remain privacy-conscious.

---

# 11. Repository Governance

The repository should be as maintainable as the application itself.

Long-term branch strategy:

```
main                → Latest stable production (velvety.digital)

develop             → Integration branch

legacy-v1           → Historical snapshot (velvety-website)

legacy-v2           → Historical snapshot (velvety-digital)

feature/*
release/*
```

Production history should be preserved.

Avoid rewriting published history unless absolutely necessary.

---

# 12. Git Workflow

Every implementation follows this sequence:

1. Review objective.
2. Modify the smallest possible surface area.
3. Validate locally.
4. Review accessibility.
5. Review SEO.
6. Review performance.
7. Stage.
8. Commit with a focused message.
9. Push.
10. Verify deployment.

No shortcuts.

No unrelated changes.

No scope creep.

---

# 13. Definition of Done

A task is complete only when:

- objective achieved
- architecture preserved
- visual identity preserved
- no regressions introduced
- local validation successful
- accessibility reviewed
- SEO reviewed
- performance reviewed
- console free of errors
- focused Git commit created
- deployment verified (when applicable)

---

# 14. Technical Debt Policy

Technical debt should be reduced incrementally.

Examples:

- remove orphan components
- eliminate duplication
- improve semantics
- centralize configuration

Avoid large "cleanup" commits.

---

# 15. Long-Term Vision

The architecture is now considered stable.

Future effort should focus on:

- business growth
- automation
- search visibility
- analytics
- content quality
- maintainability
- repository excellence

Every enhancement should strengthen the business while preserving the engineering discipline established during the architecture audit.