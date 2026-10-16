> **Installation auf einem anderen Claude-Account:** siehe [`ANLEITUNG.md`](ANLEITUNG.md).
> Schnellweg: [`allefarben-design-system-skill.zip`](allefarben-design-system-skill.zip) herunterladen und unter *Einstellungen → Fähigkeiten → Skills* hochladen.
>
> Direkt einbinden (CSS-Tokens): `https://cdn.jsdelivr.net/gh/andreasafa/allefarben-design-system@main/colors_and_type.css`
>
> © AlleFarben Alltagshilfe GmbH, Berlin. Logos, Fotos und Markenelemente sind nicht zur freien Nutzung durch Dritte freigegeben. Schriften: SIL Open Font License (Dosis, Open Sans, Caveat).

# AlleFarben Alltagshilfe — Design System

> **Für alle, die Vielfalt l(i)eben!**
> Berlins erster queerer Alltagshilfedienst.

This design system captures the visual & verbal identity of **AlleFarben Alltagshilfe**, a Berlin-based everyday-help service by and for the queer community (and allies). Founded and led by Andreas, the service offers help with household tasks, companionship, and professional care knowledge — without the sterile, clinical aesthetic of traditional Pflegedienste.

---

## Index

| File / folder | Purpose |
|---|---|
| `README.md` | This file — brand overview, content & visual foundations, iconography |
| `SKILL.md` | Skill-Manifest (Claude Skills / Claude Code) |
| `colors_and_type.css` | CSS custom properties — colors, typography, spacing, shadows, motion |
| `fonts/` | Variable TTFs — Dosis (display), Open Sans (body/italic) |
| `assets/` | Logos, brand photography, real portraits |
| `preview/` | Small HTML cards that render in the Design System tab |
| `ui_kits/website/` | React JSX recreation of the marketing website |
| `tokens.json` | Design-Tokens im Format des Claude-Design-System-Typs |
| `components/` | React-Komponenten (JSX, Typen, Bundle, Vorschaukarten) |
| `slides/` | Beispiel-Präsentation „Queersensible Pflege“ im Markendesign |
| `extras/` | Referenzmaterial (Präsentation PDF, Website-Quellcode) |

## Components

Built and exported on `window.AlleFarbenDesignSystem_c7c21e`:

- **Button** — primary / secondary / ghost / dark, three sizes, pill radius
- **Pill** — pastel category chips across the rainbow palette
- **ServiceCard** — three-pillar offer card with a rainbow accent edge
- **RainbowBar** — the 6-stop pastel gradient bar, central brand motif

---

## Company & product context

AlleFarben Alltagshilfe is **Berlin's first explicitly queer everyday-help service**. Unlike a conventional Pflegedienst (care service), the offer centers on:

- **Haushalt** — household help, cleaning, cooking alongside
- **Begleitung** — companionship: to appointments, to the park, to the café
- **Pflegefachwissen** — professional care knowledge on tap, but light-touch (not medical in-home care)

The audience is queer older adults, queer people with reduced mobility, queer families, and allies — anyone who wants help from someone who *gets it*. The brand's whole point is that service users don't have to explain themselves, tone down their identity, or accept someone uncomfortable in their home.

**Founder / face of the brand:** Andreas. Visible in portraits on the site; the brand voice is his voice — warm, direct, Berlin-tüchtig, a little cheeky.

**Headquarters / feel:** A real space in Berlin — Altbau floors, yellow Muuto-style chairs, pamphlet rack, practice room with plants. The visual identity reflects this: warm, lived-in, not corporate.

### Source materials provided

- **Logos**: `Logo-alleFarbe-ohne-Claim-5.png` (horizontal), `AlleFarben-Logo-Quadart.png` (stacked square)
- **Photography**: kitchen scenes (cleaning, cooking, coffee), paperwork help, family play, founder portraits, office interiors
- **Fonts**: `Dosis-VariableFont_wght.ttf`, `OpenSans-VariableFont_wdth,wght.ttf`, `OpenSans-Italic-VariableFont_wdth,wght.ttf`, `Caveat-VariableFont_wght.ttf`
- **Brand direction note from client**: Warme Pastellpalette, Hauptfarbe Gelb `#ffe28d`, Hintergrund `#fffaf6`, Regenbogengradient als zentrales Markenelement. Headlines Dosis Bold, Fließtext Open Sans. Du-Form, Gender-Doppelpunkt, ermächtigend statt fürsorglich.

### Substitutions / flags

- **IMG_1092.heic** was mentioned but not found in uploads. → Let me know if you want it re-uploaded.

---

## Content Fundamentals

### Voice

**Warm, direct, empowering — never paternalistic.** The brand is explicitly *queerer Alltagshilfedienst*, not *Pflegedienst*. That distinction drives everything: the writing treats readers as capable adults organizing help for themselves, not fragile recipients of care.

### Tone

- **Du-Form, always.** Never Sie. The brand is personal; we're peers.
- **Berlin-warm with a hint of cheek.** Think: a friend who has their shit together and is offering to lend a hand. Not a corporate helpdesk, not a cloying caregiver.
- **Ermächtigend, nicht fürsorglich.** "Du entscheidest, wir unterstützen" — not "wir kümmern uns um dich".
- **Queerness is matter-of-fact, not a marketing angle.** We say "queer" plainly; we don't decorate it.

### Casing & mechanics

- **Headlines**: Regular German sentence case, occasionally ALL-CAPS for the logo wordmark only.
- **Gender-Doppelpunkt**: `Nutzer:innen`, `Kolleg:innen`, `Kund:innen`. Never `NutzerInnen`, never `Nutzer*innen`, never `Nutzer_innen`. The colon form is the house style.
- **English loan words** are fine when they're in normal Berlin speech (Community, Team, Support).
- **No emoji** in body copy. The rainbow motif and actual brand imagery do the colorful work.

### Example copy

| ❌ Avoid | ✅ Do |
|---|---|
| "Wir kümmern uns liebevoll um Sie." | "Du sagst, was du brauchst — wir sind da." |
| "Unser Pflegeteam betreut Senioren in allen Lebenslagen." | "Alltagshilfe für alle, die Vielfalt l(i)eben." |
| "Bitte kontaktieren Sie uns für ein Beratungsgespräch." | "Schreib uns — wir melden uns zurück." |
| "Unsere qualifizierten Mitarbeiterinnen und Mitarbeiter" | "Unser Team aus erfahrenen Kolleg:innen" |
| "Für Senioren und Menschen mit Behinderung" | "Für alle, die sich im Alltag Unterstützung wünschen" |

### Signature phrases

- **"Für alle, die Vielfalt l(i)eben!"** — the claim. Always with the `(i)` wordplay (lieben/leben). Don't reformat.
- **"Queere Alltagshilfe in Berlin"** — the one-liner descriptor.
- **"Haushalt · Begleitung · Pflegefachwissen"** — the three-pillar summary.

---

## Visual Foundations

### Color

- **Primary**: `#ffe28d` (warm pastel yellow). Used for primary buttons, highlight surfaces, the third logo figure.
- **Rainbow palette** (central motif, used as gradient *and* as 6 discrete pastels):
  - `#e39f9a` dusty rose · `#f4b896` peach · `#ffe28d` yellow · `#98d7c2` mint · `#78a5dc` sky blue · `#b89bca` lavender
- **Neutrals — NEVER pure white**:
  - Page BG `#fffaf6` (warm cream)
  - Alt BG `#fef3e8`
  - Sunken BG `#f7ede2`
  - Card surface `#fffdfa`
- **Text**: `#1d1d1d` primary · `#4a4846` muted · `#7a736c` subtle
- **Borders**: warm beige `#ecdfce` default, `#d9c6ad` stronger; a near-black `#1d1d1d` for high-contrast editorial cards.

Semantic colors desaturate slightly toward the pastel palette — success uses the mint family, info uses the blue family, warning uses the peach family, danger uses a softened rose-red. No harsh reds/greens.

### Typography

- **Display — Dosis Bold/SemiBold** for headlines, hero type, H1–H4, buttons, navigation. Rounded geometric sans, matches the logo's ALLE FARBEN wordmark.
- **Body — Open Sans** (wdth/wght variable) for paragraphs, UI chrome, forms. Neutral, legible at German-word lengths.
- **Accent script — Caveat** (self-hosted variable font) for the occasional handwritten word like "Alltagshilfe" or a personal note. Use sparingly — 1–2 words at a time, never paragraphs. Wherever the design calls for the handwritten voice, use Caveat — never a system cursive fallback.
- **No all-caps body text.** All-caps only in the logo wordmark and tiny `.eyebrow` labels (tracking `+0.08em`).

### Spacing

4-px base grid. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96. Generous: the brand reads as roomy and unhurried, not dense.

### Corner radii

Generous and soft — the brand skews toward *rounded-friendly*:
- `6px` micro elements (chips, tiny tags)
- `10–16px` cards and inputs
- `24–32px` large panels and hero frames
- `999px` (pill) buttons and tags

Never zero-radius. Sharp corners read as corporate/clinical, which we explicitly are not.

### Shadows & elevation

All shadows use a **warm brown undertone** — `rgba(77, 54, 30, …)` — so they feel lit by afternoon window light, not office fluorescents:
- `xs` — barely perceptible (1px), for subtle zoning
- `sm` — resting cards
- `md` — hovered cards
- `lg` — floating elements (dialogs, dropdowns)
- `hover` — lifted state
- `inset` — pressed/sunken surfaces

No neon glows, no hard blacks, no colored drop-shadows.

### Backgrounds

- **Primary surface**: warm cream `#fffaf6`, plain — no pure white, no gradient by default.
- **The Rainbow Gradient** is the signature background flourish: a horizontal 6-stop pastel gradient (`#e39f9a → #f4b896 → #ffe28d → #98d7c2 → #78a5dc → #b89bca`). Used as:
  - A thin stripe under the nav
  - A full-bleed hero band (with text on a solid panel overlaying it)
  - A top edge / divider on cards
- **Full-bleed photography** — hero sections, story sections. Real people, real kitchens, real Berlin Altbau. Never stock-feeling.
- **No repeating patterns, no illustration backgrounds.** The people photos are the pattern.

### Imagery direction

- **Warm, slightly desaturated, natural light.** Afternoon kitchen light, not studio flash.
- **Authentic people, authentic spaces.** Queer elders, trans folks, BIPOC seniors, intergenerational, visible disability (wheelchair users), real Berlin apartments.
- **Rainbow accents within scenes** — a rainbow hoodie, a rainbow tote, a pride pin — rather than rainbows painted on as graphics.
- **No stock-photo tropes.** No smiling nurse in scrubs, no "senior getting pills", no isolation-as-fear imagery.

### Animation & motion

- **Gentle, short.** Default `200ms` with `cubic-bezier(0.22, 1, 0.36, 1)` ease-out.
- **Micro-bounce** on important CTAs (`--ease-bounce`) — subtle, not cartoony.
- **Fades & lifts** over slides/swipes. Cards rise 2–4px on hover; buttons translate 1px on press.
- **No scroll-jacking, no aggressive parallax, no flashing rainbows.** Brand is warm, not loud.

### Hover / press states

- **Primary button (yellow)**: hover → slightly deeper yellow (`#fcd66b`) + shadow lifts. Press → deeper still (`#f2c856`) + tiny scale-down to 0.98.
- **Secondary button**: transparent → `bg-alt` fill on hover.
- **Cards**: `box-shadow: sm → hover` on hover + `transform: translateY(-2px)`.
- **Links**: yellow underline grows to peach on hover (no color change on the text itself).
- **Focus ring**: `0 0 0 3px #78a5dc66` — always visible for accessibility, uses the brand blue.

### Borders

Mostly borderless — the brand relies on warm shadows and soft bg tints for zoning. When borders are needed: `1px solid #ecdfce`. High-contrast editorial cards (rare, used for "featured" treatment) use a `1.5px solid #1d1d1d` with an offset shadow, magazine-style.

### Transparency & blur

Used sparingly:
- Sticky nav background: `rgba(255, 250, 246, 0.88)` with `backdrop-filter: blur(8px)` once scrolled.
- Photo overlays for text legibility: warm-cream tint, never pure-black scrim.
- No frosted-glass everywhere — that reads too tech-y for this brand.

### Layout rules

- Max content width **1200px** for marketing pages; text columns cap at **68ch**.
- Hero sections: photo + text side-by-side on desktop, photo-then-text on mobile (never text-over-photo unless there's a clear solid panel).
- Generous section padding: `80–120px` vertical on desktop, `48–64px` on mobile.
- Navbar: fixed, translucent after scroll. Footer: `#1d1d1d` dark surface with cream text — one of the few places the palette inverts.

---

## Iconography

**Approach: minimal, cheerful, stroke-based.** The brand does NOT lean on icons as primary storytelling — photography and type do that work. Icons are functional (wayfinding, UI affordances) and stay in the background.

- **Library**: **Lucide Icons** (CDN, MIT license). Stroke weight `2px`, rounded line caps/joins — matches Dosis's rounded geometric feel. Loaded via `<script src="https://unpkg.com/lucide@latest"></script>` or the React package.
  - *Flag*: No custom icon set was provided in the brand materials. Lucide is our substitute. If the client has a preferred set, swap the CDN link.
- **Color**: icons inherit text color (`currentColor`); default to `--fg-muted` on secondary UI, `--fg` in headlines.
- **Sizing**: 16 / 20 / 24 / 32 — matching the 4px spacing grid.
- **No filled icons**, no duotone, no colored icon chips. Consistency over decoration.

### Logo as icon

The square logo (`assets/logo-square.png`) doubles as a favicon, social avatar, and large visual anchor (like on the sweatshirt in `img-andreas-portrait.png`). The 6 pastel figures are the brand mark; they are not redrawn as individual icons.

### Emoji

**Not used** in product UI, marketing copy, or UI labels. The brand feels warm without needing emoji — the rainbow palette and photography carry the tone. (Exception: plain-text contexts like SMS autoresponders — no strong rule there, but prefer words.)

### Unicode characters

- Middle-dot `·` as a separator in taglines: "Haushalt · Begleitung · Pflegefachwissen".
- Em-dash `—` for pauses in editorial copy.
- No arrows drawn in unicode — use Lucide `ArrowRight` etc.

---

## How to use this system

1. Drop `colors_and_type.css` into any HTML file — all tokens come in as CSS custom properties.
2. Copy the fonts from `fonts/` alongside (relative paths match).
3. Pull logos, photography from `assets/`.
4. For React work, see `ui_kits/website/` — the marketing site is reproduced there as a working prototype.
5. When in doubt about tone or wording, re-read **Content Fundamentals** above. Tone mistakes (going paternalistic, going corporate, dropping Gender-Doppelpunkt) undo the brand faster than any visual mistake.
