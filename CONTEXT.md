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
9. Current rating: **6.5/10** — strong content and positioning, lacking visual richness

### What's Working
- Builder narrative differentiates from every other finance/ops person
- AI projects (especially Ajay Brain) are genuinely impressive
- Copy sounds human — origin stories, honest limitations
- Animation stack is comprehensive
- Employment sensitivity handled subtly

### What's Not Working (gaps to fix)
- No images/screenshots — entire site is text + cards
- No hero visual — just text stacked left-aligned
- All project cards look identical — no visual hierarchy
- Colour palette one-note (purple everywhere)
- SVG hero text probably breaks on mobile
- Pipeline diagrams are static (should animate)
- No photo of Ajay
- No social proof / testimonials
- No writing/blog section

## Content Facts (verified against master_cv.md)

### Ajay's Profile
- Finance & Operations Manager at Krank Limited (B2B tech scale-up)
- Oct 2021 – Present, Loughborough UK
- Reports to COO, sole finance/ops function across UK, US, Pakistan
- Previously: Accounting & Sales Manager at P. Ashok Kumar (family textile), Mumbai, 2018-2020
- Education: MSc Finance (Loughborough, 2:1), B.Com (Jai Hind College, Mumbai)
- CIMA ongoing, expected May 2026
- Languages: English, Hindi, Sindhi, Marathi
- School Governor at 250-pupil primary school

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
| Job Search Engine | ~2,000+ Python | 10+ firms, 6 DB tables, auto CV/letter gen | Active |
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
- [x] Floating particles (35, CSS-only animation)
- [x] Custom cursor (dot + ring with physics lag)
- [x] Magnetic buttons (elastic snap-back)
- [x] SVG text stroke fill (hero title)
- [x] 3D card tilt on hover
- [x] Animated gradient card borders (conic-gradient spin)
- [x] Breathing cards (about section)
- [x] Scroll-scrub text (about paragraph word lighting)
- [x] Horizontal scroll pinned section (capabilities)
- [x] Scroll-reactive marquee (speeds up on scroll)
- [x] Parallax mouse-reactive layers (hero)
- [x] Nav blur + shrink on scroll
- [x] Progress bar (scroll position)
- [x] Counter animations (GSAP with easing)
- [x] Staggered scroll reveals

## Effects Planned (not yet implemented)
- [ ] Pipeline diagram line-by-line animation on scroll
- [ ] Screenshots / visual assets for projects
- [ ] Hero visual element (3D, generative art, or illustration)
- [ ] Visual hierarchy variation (first project card larger/different)
- [ ] Mobile-responsive SVG hero text fallback
- [ ] Photo of Ajay
- [ ] Social proof section
- [ ] Writing / essay section
