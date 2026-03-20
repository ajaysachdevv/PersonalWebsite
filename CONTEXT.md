# Project Context — Personal Website

## Session History & Decisions

### How We Got Here
1. Started with plan for minimal CV-style site (HTML + CSS)
2. Built first version — clean but boring
3. User requested "£500k studio" feel — added animations, dark theme, gradient orbs
4. Explored user's AI projects on disk — discovered Ajay Brain (9k lines), Trading Bot, Job Engine
5. **Major pivot**: Repositioned from CV site → project showcase / builder portfolio
6. Added GSAP, Lenis, custom cursor, 3D tilt, preloader, scroll-scrub, horizontal scroll
7. User requested more wow-factor + humanised copy + employment discretion
8. Added: aurora background, particles, SVG text stroke fill, animated gradient borders, breathing cards, parallax mouse layers, Uni-Nation project
9. **Upgrade round**: Replaced CSS particles with canvas constellation, added SVG pipeline diagrams, CSS project mockups, favicon, deferred scripts, guarded cursor
10. Replaced 3D card tilt with subtle spotlight + lift (translateY -4px)
11. Combined capabilities from 8 → 5, removed numbering, tuned horizontal scroll
12. Rewrote about section with accurate Sindhi background and intern origin story
13. Commented out Recruitment Pipeline Engine (easy to restore)
14. Created comprehensive brand guidelines (BRAND.md v2.0 + brand-guidelines.html for PDF)
15. Current rating: **7.5/10** — strong content, animation, and positioning; needs photo + social proof

### What's Working
- Builder narrative differentiates from every other finance/ops person
- AI projects (especially Ajay Brain) are genuinely impressive
- Copy sounds human — origin stories, honest limitations
- Animation stack is comprehensive and tasteful
- Employment sensitivity handled subtly
- Hero constellation canvas gives visual anchor
- Per-project accent colours add variety
- CSS mockups (Teams card, terminal, DB table, browser) add visual richness
- SVG pipeline diagrams animate on scroll
- About section accurately reflects Sindhi background, intern journey

### What's Not Working (gaps to fix)
- No photo of Ajay
- No social proof / testimonials
- No writing/blog section
- Font loading could be optimised (preload critical weights)

## Content Facts (verified against master_cv.md + old website screenshots)

### Ajay's Profile
- Finance & Operations Manager at Krank Limited (B2B tech scale-up)
- Joined as intern Oct 2021, now sole finance/ops function across UK, US, Pakistan
- Reports to COO
- Previously: Accounting & Sales Manager at P. Ashok Kumar (family textile), Mumbai, 2018-2020
- Education: MSc Finance (Loughborough, 2:1, 2020-21), B.Com (Jai Hind College, Mumbai, 2015-18)
- CIMA ongoing, expected May 2026 (NOT ACCA — dropped)
- Chartered Wealth Management certification
- Languages: English, Hindi, Sindhi, Marathi
- School Governor at 250-pupil primary school
- Sindhi family background

### Key Metrics (all defensible)
- £5M+ in seed and Series A funding supported
- 50+ Power BI dashboards
- 7 multi-currency bank accounts (GBP, USD, PKR)
- 3 entities (UK, US, Pakistan)
- 13+ client data requests and 30+ internal SQL queries in 2024
- 40+ hours/month saved through automation
- WiFi costs reduced 50%, electricity 74%, software 30%+

### AI Projects (verified by reading source code)
| Project | Lines | Key Metric | Status |
|---------|-------|------------|--------|
| Ajay Brain | ~9,000 Python | 100% search accuracy (50 tests), 6,124 docs indexed, 15 API integrations | Production |
| Trading Bot | ~3,000+ Python | 20 FTSE 100 tickers, zero leverage, Claude risk auditor | Development |
| Job Search Engine | ~2,000+ Python | 10+ firms, 6 DB tables, auto CV/letter gen | Active (hidden from site) |
| Uni-Nation | Website | 4 fabric lines, since 1988 | Live at uni-nation.in |

### Uni-Nation Details
- Family business since 1988, Ulhasnagar, Maharashtra
- Uniform fabric manufacturer: school, corporate, industrial
- 4 product lines: Matty, Samray, Trovine, Filafil
- Ajay built and manages web presence, helps passively with digital strategy
- Contact: +91-9730333445, pashokkumar9092@gmail.com

## Effects Currently Implemented
- [x] Preloader (count + panel wipe)
- [x] Aurora background (3 curtains, hue-rotate)
- [x] Canvas constellation (mouse-reactive particles with connecting lines)
- [x] Custom cursor (dot + ring with physics lag, guarded)
- [x] Magnetic buttons (elastic snap-back)
- [x] SVG text stroke fill (hero title)
- [x] Spotlight + lift on project cards (translateY -4px, no rotation)
- [x] Animated gradient card borders (conic-gradient spin)
- [x] Breathing cards (about section)
- [x] Scroll-scrub text (about paragraph word lighting)
- [x] Horizontal scroll pinned section (5 capability cards, 340px, scrub 0.8)
- [x] Scroll-reactive marquee (speeds up on scroll)
- [x] Parallax mouse-reactive layers (hero)
- [x] Nav blur + shrink on scroll
- [x] Progress bar (scroll position)
- [x] Counter animations (GSAP with easing)
- [x] Staggered scroll reveals
- [x] SVG pipeline diagrams with scroll-triggered stroke drawing (Ajay Brain + Trading Bot)
- [x] CSS project mockups (Teams card, terminal, DB table, browser preview)
- [x] Per-project accent colours (purple, green, blue, amber)
- [x] Inline SVG favicon ("AS" monogram, purple-to-green gradient)
- [x] prefers-reduced-motion handling (CSS + JS)
- [x] Keyword-rich meta description (B2B SaaS, CIMA, Power BI, Python, SQL, FAISS, RAG)
- [x] Expanded marquee (16 keyword items: Management Accounts, VAT & Payroll, GA4 & Firebase, Cash Management, Compliance added)
- [x] Capabilities cards: centered text, centered layout (justify-content:center), purple headings
- [x] All copy humanized (no AI patterns, casual-but-sharp voice)

## Effects Removed
- CSS floating particles (replaced by canvas constellation)
- 3D card tilt on hover (replaced by spotlight + lift)

## Effects Planned (not yet implemented)
- [ ] Photo of Ajay
- [ ] Social proof section
- [ ] Writing / essay section
- [ ] Font preloading optimisation

## Capabilities Cards (5, centered, purple headings, no numbers)
1. Finance & Modelling — management accounts, VAT, payroll, multi-entity models, seed/Series A, cash management
2. Data & Dashboards — 50+ Power BI, GA4, Firebase, SQL, sole analyst
3. Systems & Automation — HubSpot, Xero, Factorial, Rydoo, onboarding/offboarding/ESOPs
4. AI & Engineering — GPT-4o, Claude, FAISS, BM25, RAG, PII detection
5. Commercial & Legal — contracts, NDAs, SoWs, cost negotiation

## Hidden/Commented Out
- Recruitment Pipeline Engine: commented out with restore markers (`<!-- ═══ RECRUITMENT PIPELINE ENGINE — UNCOMMENT TO RESTORE ═══ -->`)
