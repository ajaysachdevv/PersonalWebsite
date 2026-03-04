# Site Upgrade Plan — ajaysachdev.com

## Current State
**Rating: 6.5/10**
- Strong positioning as a builder (not a CV site)
- 4 projects showcased: Ajay Brain, Trading Bot, Job Engine, Uni-Nation
- Comprehensive animation stack (17 effects implemented)
- Human-sounding copy with origin stories
- Employment-sensitive (no "open to roles" language)

## Target: 9/10

## Phase 1 — Visual Richness (biggest impact)

### 1.1 Add project screenshots/visuals
**Why:** The entire site is text + cards. No images anywhere. This is the single biggest gap.
**What to create:**
- Ajay Brain: Mock screenshot of Teams Adaptive Card response
- Trading Bot: Terminal/CLI output screenshot or architecture diagram
- Power BI: Dashboard screenshot (anonymised)
- Uni-Nation: Website screenshot
**How:** Either real screenshots or create stylised mock-ups in HTML/CSS rendered as images
**Impact:** High — transforms the site from "developer portfolio" to "design studio build"

### 1.2 Hero visual element
**Why:** Hero is text-only, left-aligned. Top sites have a visual anchor.
**Options (pick one):**
- Generative art canvas (particles forming a shape)
- 3D rotating geometric object (Three.js, lightweight)
- Abstract SVG illustration
- Stylised code editor mock-up showing a snippet from Ajay Brain
**Impact:** High — first thing visitors see

### 1.3 Visual hierarchy in project cards
**Why:** All 4 cards look identical. Ajay Brain (the star project) should feel bigger.
**How:**
- Make first card (Ajay Brain) full-width with 2-column layout: text left, screenshot right
- Other 3 cards in a tighter layout or different visual treatment
**Impact:** Medium — creates rhythm, draws eye to the best project

### 1.4 Colour accent variety
**Why:** Purple accent everywhere is monotone.
**How:** Give each project its own accent colour:
- Ajay Brain: Purple (primary)
- Trading Bot: Green (finance/money)
- Job Engine: Blue (data/automation)
- Uni-Nation: Amber (warmth/family)
**Impact:** Medium — adds visual variety without breaking cohesion

## Phase 2 — Interactive Polish

### 2.1 Pipeline diagram animation
**Why:** Currently static ASCII text. Should draw line-by-line on scroll.
**How:** Convert to SVG paths with stroke-dasharray, scrub with ScrollTrigger.
**Impact:** Medium — makes the technical content feel alive

### 2.2 Mobile SVG hero fix
**Why:** The SVG text has a fixed 900px viewBox — likely breaks on mobile.
**How:** Add a responsive fallback: hide SVG on small screens, show a regular h1 with CSS clip-path reveal animation instead.
**Impact:** High (for mobile users)

### 2.3 Smooth image reveals
**Why:** When we add images, they should reveal with impact.
**How:** clip-path wipe animations on scroll (inset or circle expand).
**Impact:** Medium — adds premium feel to image sections

## Phase 3 — Content Depth

### 3.1 Photo of Ajay
**Why:** People connect with faces. Every top personal site has one.
**How:** Ajay to provide a photo. Can be casual — doesn't need to be studio.
**Placement:** About section, or hero alongside the text.
**Impact:** High for trust/connection

### 3.2 Social proof
**Why:** No external validation currently. Even one quote adds credibility.
**Options:**
- A quote from a colleague or manager (from performance reviews — paraphrase, don't copy)
- "School Governor" and "Founder, Infinite Ink" as credibility signals (already in master_cv.md)
**Impact:** Medium

### 3.3 Writing section (future)
**Why:** The research is clear — the best sites have writing as proof of thinking.
**Options:**
- A single "How I built Ajay Brain" essay
- A "What I've learned running finance for a scale-up" piece
- Even a /now page (what I'm working on this month)
**Impact:** High long-term, but requires Ajay to write content

## Phase 4 — Performance & Polish

### 4.1 Font loading optimisation
**Why:** 3 Google Font families load before first paint.
**How:** Add `font-display: swap` and preload critical weights only.

### 4.2 GSAP/Lenis loading
**Why:** JS blocks render until loaded from CDN.
**How:** Add `defer` to script tags, or inline critical animation CSS.

### 4.3 Accessibility
**Why:** Custom cursor hides native cursor, reduced motion not respected.
**How:** Add `prefers-reduced-motion` media query to disable all animations.

## Priority Order
1. **Phase 1.2** — Hero visual (biggest "wow" improvement)
2. **Phase 1.1** — Project screenshots
3. **Phase 2.2** — Mobile SVG fix (broken experience for half of visitors)
4. **Phase 1.3** — Visual hierarchy
5. **Phase 1.4** — Colour variety
6. **Phase 2.1** — Pipeline animation
7. **Phase 3.1** — Photo (needs Ajay's input)
8. Everything else
