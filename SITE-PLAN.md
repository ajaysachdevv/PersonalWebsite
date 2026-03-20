# Site Upgrade Plan — ajaysachdev.com

## Current State
**Rating: 7.5/10**
- Strong positioning as a builder (not a CV site)
- 3 projects showcased: Ajay Brain, Trading Bot, Uni-Nation (Recruitment Pipeline commented out)
- 22+ effects implemented, all tasteful
- Human-sounding copy with origin stories
- Employment-sensitive (no "open to roles" language)
- CSS project mockups add visual richness
- SVG pipeline diagrams animate on scroll
- Per-project accent colours implemented
- Brand guidelines v2.0 complete

## Target: 9/10

---

## Completed Phases

### ~~Phase 1.1 — Project screenshots/visuals~~ ✅
CSS-rendered mockups added: Teams Adaptive Card (Ajay Brain), terminal output (Trading Bot), DB table (Recruitment Pipeline, commented out), browser preview (Uni-Nation).

### ~~Phase 1.2 — Hero visual element~~ ✅
Canvas constellation with mouse-reactive particles and connecting lines.

### ~~Phase 1.3 — Visual hierarchy in project cards~~ ✅
Ajay Brain card has featured treatment (larger padding, bigger title). Other cards tighter.

### ~~Phase 1.4 — Colour accent variety~~ ✅
Per-project colours: purple (Ajay Brain), green (Trading Bot), blue (Job Engine), amber (Uni-Nation).

### ~~Phase 2.1 — Pipeline diagram animation~~ ✅
SVG diagrams with stroke-dasharray/dashoffset, scrubbed via ScrollTrigger for Ajay Brain and Trading Bot.

### ~~Phase 2.2 — Mobile SVG hero fix~~ ✅
SVG hidden on small screens, gradient h1 fallback shown instead.

### ~~Phase 4.2 — GSAP/Lenis loading~~ ✅
Scripts moved to end of body (no longer render-blocking).

### ~~Phase 4.3 — Accessibility~~ ✅
`prefers-reduced-motion` respected in both CSS and JS. Cursor guarded.

---

## Remaining Phases

### Phase 3.1 — Photo of Ajay
**Why:** People connect with faces. Every top personal site has one.
**How:** Ajay to provide a photo. Can be casual — doesn't need to be studio.
**Placement:** About section, or hero alongside the text.
**Impact:** High for trust/connection
**Status:** Needs Ajay's input

### Phase 3.2 — Social proof
**Why:** No external validation currently. Even one quote adds credibility.
**Options:**
- A quote from a colleague or manager (paraphrase from performance reviews)
- "School Governor" and "Founder, Infinite Ink" as credibility signals
**Impact:** Medium

### Phase 3.3 — Writing section (future)
**Why:** The best sites have writing as proof of thinking.
**Options:**
- "How I built Ajay Brain" essay
- "What I've learned running finance for a scale-up" piece
- A /now page (what I'm working on this month)
**Impact:** High long-term, requires Ajay to write content

### Phase 4.1 — Font loading optimisation
**Why:** 3 Google Font families load before first paint.
**How:** Preload critical weights only.
**Impact:** Low-medium

---

## Priority Order (remaining)
1. **Phase 3.1** — Photo (needs Ajay's input)
2. **Phase 3.2** — Social proof
3. **Phase 4.1** — Font optimisation
4. **Phase 3.3** — Writing section (long-term)
