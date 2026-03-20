# Personal Website — ajaysachdev.com

## What This Is
Single-page portfolio site for Ajay Sachdev. Static HTML + CSS + JS (GSAP, Lenis). No framework, no build step. Deploys anywhere.

## Quick Commands
- Open locally: `start "" "C:\Users\AjaySachdev\PersonalWebsite\index.html"`
- No build step needed — open index.html directly in browser

## Key Files
| File | Purpose |
|------|---------|
| `index.html` | The entire site — HTML, CSS, JS all embedded |
| `BRAND.md` | Visual identity, voice rules, colour palette, typography, animation principles |
| `SITE-PLAN.md` | Detailed upgrade roadmap with current rating and target improvements |
| `CONTEXT.md` | Project decisions, content sources, architectural notes |

## Content Sources (DO NOT MODIFY THESE — read only)
- `C:\Users\AjaySachdev\job_applications\master_cv.md` — canonical CV facts, bullet points, project descriptions
- `C:\Users\AjaySachdev\job_applications\cover_letter_framework.md` — positioning language, inflated verb blacklist
- `C:\Users\AjaySachdev\job_applications\documents\` — job description, self-reviews, CV (sensitive — never publish raw)

## AI Projects (read source code for accurate descriptions)
- `C:\Users\AjaySachdev\ajay_brain\` — Agentic AI system (Teams + SharePoint + Xero + HubSpot)
- `C:\Users\AjaySachdev\trading_bot\` — Algorithmic FTSE 100 trading bot
- `C:\Users\AjaySachdev\job_applications\` — AI-powered job search pipeline
- `https://uni-nation.in` — Family textile business website

## Critical Rules
1. **Employment sensitivity**: Ajay's employer (Krank) does NOT know he's exploring new roles. NEVER use "open to roles", "job seeking", "available for hire", "looking for opportunities". Position as a builder. Let work speak.
2. **Title consistency**: Always "Finance & Operations Manager" -- never "Financial Controller"
4. **Qualification**: CIMA ongoing, expected May 2026 — never ACCA
5. **All claims must be defensible** with facts from master_cv.md
6. **Copy approach**: Start with the PROBLEM, then solution, then result. Origin stories > feature lists.

## Tech Stack
- GSAP 3.13 + ScrollTrigger (CDN)
- Lenis smooth scroll (CDN)
- Google Fonts: Inter, Space Grotesk, JetBrains Mono
- No npm, no build tools, no framework

## Design Tokens (see BRAND.md for full spec)
- BG: `#08080c` | Card: `#0e0e14` | Text: `#f0eff2`
- Accent: `#8b5cf6` (purple) | Accent2: `#6366f1` (indigo) | Green: `#34d399`
- Display font: Space Grotesk | Body: Inter | Mono: JetBrains Mono

## Subagent Strategy

### Mandatory Subagent Triggers
- **Before any visual change**: Explore agent reads `index.html` (it's the entire site), `BRAND.md`, and `SITE-PLAN.md`. Returns: current section structure, design tokens in use, and which SITE-PLAN items are relevant.
- **Before content changes**: General-purpose agent reads `master_cv.md` (from job_applications/) and the current site copy. Returns: which facts to use, checks for inflated verbs, and verifies employment sensitivity rules.
- **Adding GSAP animations**: General-purpose agent reads current GSAP setup in index.html, returns: existing ScrollTrigger registrations, timeline patterns, and performance considerations.
- **AI project descriptions**: Explore agent reads the actual project source code (ajay_brain/, trading_bot/, etc.) and returns accurate, honest descriptions -- not marketing fluff.

### Agent Quality Rules
- Content must pass employment sensitivity filter: no "open to roles", "job seeking", "available for hire"
- All claims must be traceable to master_cv.md -- subagent must cite the source bullet
- Visual changes: subagent confirms colours match BRAND.md tokens (BG #08080c, Accent #8b5cf6, etc.)
- Copy must use honest verbs (built, led, managed) never inflated ones (architected, spearheaded)

### Project-Specific Patterns
- **Single-file architecture**: index.html contains everything -- subagent must return line number ranges for the section being modified
- **No build step**: Changes are immediately visible -- but subagent should check for broken GSAP animations or missing CDN dependencies

## Compaction Instructions
When compacting this conversation, always preserve:
- The current site rating (6.5/10) and the specific upgrade plan in SITE-PLAN.md
- The employment sensitivity rules (Krank doesn't know)
- The list of wow-factor effects already implemented vs planned
- Any decisions about content, copy tone, or visual direction
- The brand guidelines location (BRAND.md)
