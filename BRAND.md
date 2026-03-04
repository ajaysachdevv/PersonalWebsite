# Ajay Sachdev — Brand Guidelines

## Voice & Tone
- **First person, casual but sharp.** Not LinkedIn-corporate, not try-hard casual. Think: smart friend explaining what they do over coffee.
- **Never use**: "leverage", "synergy", "spearheaded", "architected", "orchestrated", "cutting-edge", "passionate about", "driven individual"
- **Never sound like AI wrote it.** Read every sentence aloud. If it sounds like a ChatGPT cover letter, rewrite it.
- **Show, don't tell.** Don't say "impressive" — describe the thing and let the reader decide.
- **Honest about limitations.** "No law degree — learned on the job" is better than "legal expertise."
- **Origin stories > feature lists.** "I kept making emotional trades, so I built a system that can't" beats "Multi-agent algorithmic trading system."

## Employment Sensitivity
- Ajay's current employer (Krank) does NOT know he is exploring new roles.
- **Never use:** "open to new roles", "looking for opportunities", "job seeking", "available for hire"
- **Instead:** Position as someone who builds interesting things and is worth knowing. Let the work speak. The site should make recruiters reach out — not broadcast availability.
- The hero badge should signal expertise/building, NOT availability.
- Footer CTA should be "Let's talk" or "Get in touch" — not "Hire me."

## Visual Identity

### Colours
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#08080c` | Page background |
| Card BG | `#0e0e14` | Elevated surfaces |
| Text Primary | `#f0eff2` | Headings, body |
| Text Muted | `#76768a` | Descriptions, secondary |
| Text Dim | `#3e3e50` | Tertiary, labels |
| Border | `rgba(255,255,255,0.05)` | Card/section borders |
| Accent Primary | `#8b5cf6` | Purple — CTAs, highlights |
| Accent Secondary | `#6366f1` | Indigo — gradients |
| Green | `#34d399` | Live/active status |
| Amber | `#fbbf24` | In-development status |

### Typography
| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / Headings | Space Grotesk | 600-700 | Negative letter-spacing (-2px to -3px) |
| Body | Inter | 300-500 | Line height 1.65-1.8 |
| Mono / Labels | JetBrains Mono | 400-500 | Uppercase, letter-spacing 2-3px |

### Spacing
- Section padding: 140px vertical
- Container max-width: 1200px
- Card padding: 48px desktop, 28px mobile
- Card border-radius: 20px
- Button border-radius: 60px (pill shape)

### Animation Principles
- **Easing:** Always `cubic-bezier(0.16, 1, 0.3, 1)` or GSAP `power3.out` / `power4.out`. Never linear for UI elements.
- **Duration:** 0.6-0.9s for reveals, 0.3-0.4s for hovers, 1.5-2s for counters
- **Stagger:** 0.06-0.1s between sibling elements
- **Scroll-scrub:** scrub value 1-2 for smooth tracking
- **Philosophy:** Every animation should feel intentional and physics-based. No bouncing, no spinning, no gratuitous motion. Things slide, tilt, glow, and breathe.

### Effects Stack
- GSAP 3.13+ with ScrollTrigger (CDN)
- Lenis smooth scroll (CDN)
- Custom cursor (dot + ring with lag)
- Magnetic buttons (elastic snap-back)
- 3D card tilt on hover
- Scroll-scrubbed text lighting
- Horizontal scroll pinned sections
- Preloader with panel wipe
- Aurora/gradient mesh ambient background
- Animated gradient card borders
- Particle field
- Scroll progress bar

## Content Rules
- All claims must be defensible. Use real numbers from master_cv.md.
- Title is always "Finance & Operations Manager" — never "Financial Controller"
- CIMA ongoing, expected May 2026 — never ACCA
- Project descriptions: start with the PROBLEM, then the solution, then the result
- Tech tags use exact tool names (not "machine learning" when you mean "FAISS + BM25")

## Projects to Feature
1. **Ajay Brain** — AI agent in Teams (star project, lead with this)
2. **Trading Bot** — Algorithmic FTSE 100 system
3. **Job Search Engine** — Consulting firm pipeline automation
4. **Uni-Nation** — Family textile business website (uni-nation.in) — shows entrepreneurial side + family roots
