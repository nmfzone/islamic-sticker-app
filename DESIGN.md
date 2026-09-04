---
version: alpha
name: Islamic WA Sticker product design guide
description: A product-wide visual-system guide for Islamic WA Sticker covering the shared shell, browse and collection surfaces, pack details, onboarding, and settings.

colors:
  primary: "#0d0c22"
  on-primary: "#ffffff"
  accent-pink: "#ea4c89"
  canvas: "#ffffff"
  surface-soft: "#f8f8fa"
  text-muted: "#655c7a"
  overlay-dark: "rgba(13, 12, 34, 0.78)"
  overlay-gradient: "linear-gradient(to top, rgba(13, 12, 34, 0.86), rgba(13, 12, 34, 0))"

typography:
  family-sans: Mona Sans, Helvetica Neue, Arial, sans-serif
  display-title:
    fontFamily: "{typography.family-sans}"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    evidence: reference-only
  body:
    fontFamily: "{typography.family-sans}"
    fontWeight: 400
  body-strong:
    fontFamily: "{typography.family-sans}"
    fontWeight: 600
  metadata:
    fontFamily: "{typography.family-sans}"
    fontWeight: 400

rounded:
  media: 8px
  compact-control: 8px
  search-control: 12px
  notice-banner: 16px
  full: 9999px

spacing:
  desktop-gutter:
    value: 72px
    evidence: reference-only
  grid-gap:
    value: 36px
    evidence: reference-only
  compact: 8px
  regular: 16px
  spacious: 24px
  overlay-inset:
    value: 20px
    evidence: reference-only

layout:
  reference-desktop-columns:
    value: 4
    evidence: optional-reference
  reference-pack-width:
    value: 297px
    evidence: optional-reference
  media-aspect-ratio: "4:3"
  reference-media-size:
    value: "297px × 222.75px"
    evidence: optional-reference
  reference-card-height:
    value: "259px (223px media + 36px metadata)"
    evidence: optional-reference
  category-pill-height:
    value: 36px
    evidence: reference-only

components:
  shared-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
  search-control:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.search-control}"
    referenceHeight: 54px
    evidence: optional-reference
  notice-banner:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.notice-banner}"
  compact-control:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.compact-control}"
  category-strip:
    pillRounded: "{rounded.full}"
    pillHeight: "{layout.category-pill-height}"
    pillFontSize: 14px
    pillFontWeight: 600
    pillPadding: "0 16px"
    pillActiveBackground: "{colors.surface-soft}"
    pillDefaultBackground: transparent
    pillTextColor: "{colors.primary}"
    evidence: reference-only
  sticker-media:
    rounded: "{rounded.media}"
    aspectRatio: "{layout.media-aspect-ratio}"
  media-action-overlay:
    background: "{colors.overlay-gradient}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.overlay-inset}"
    defaultVisibility: hidden
    revealTrigger: "hover or keyboard-focus"
    evidence: reference-only
  pack-surface:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    mediaAspectRatio: "{layout.media-aspect-ratio}"
    metadataFontSize: 14px
    metadataFontWeight: 400
    metadataColor: "{colors.primary}"
    metadataHeight:
      value: 36px
      evidence: reference-only
---

## Overview

This guide defines a shared visual language for Islamic WA Sticker across the product. It applies to the Shared Shell, Browse and Collection, Pack and Detail, Onboarding, and Settings page families. The system is bright, restrained, and media-forward: a white canvas, near-black ink, pale controls, selective pink emphasis, and consistent sticker geometry keep content easy to scan without making every screen look like the same page.

The source evidence establishes a small set of reusable visual primitives more confidently than it establishes complete product behavior. Preserve those primitives across page families, but do not turn page-specific observations into universal requirements. Measurements marked **reference** or **optional** record the inspected desktop composition and may be adapted for content, accessibility, and viewport needs.

**Key characteristics:**

- `{colors.canvas}` and `{colors.primary}` form the default product canvas and reading color.
- `{colors.accent-pink}` is reserved for primary actions, active emphasis, and concise brand moments.
- Mona Sans provides one consistent interface voice across navigation, content, controls, and metadata.
- `{colors.surface-soft}` distinguishes interactive or informational regions without heavy borders or shadows.
- Sticker imagery remains the strongest visual signal; supporting labels and metadata stay compact.
- Shared components provide continuity, while each page family uses only the components needed for its task.

## Foundation

### Colors

- **Primary Ink** (`{colors.primary}`, `#0d0c22`): headings, navigation, control labels, and primary iconography.
- **On Primary** (`{colors.on-primary}`, `#ffffff`): text and icons over the dark media overlay or primary ink.
- **Accent Pink** (`{colors.accent-pink}`, `#ea4c89`): primary actions, active emphasis, and recognizable brand moments. Do not use it as a general surface.
- **White Canvas** (`{colors.canvas}`, `#ffffff`): the default page and content background.
- **Soft Surface** (`{colors.surface-soft}`, `#f8f8fa`): quiet separation for search, notices, and compact controls.
- **Muted Text** (`{colors.text-muted}`, `#655c7a`): descriptions, supporting labels, and metadata.
- **Media Overlay** (`{colors.overlay-gradient}`): functional contrast for labels and actions placed over sticker imagery.

The available evidence does not establish validation, success, warning, or error colors. Do not present additional semantic colors as established Islamic WA Sticker tokens. Any future need requires separate product evidence and definition.

### Typography

Use **Mona Sans**, with `Helvetica Neue` and `Arial` as fallbacks. Strong weight creates clear headings; regular weight supports reading; muted metadata reduces competition with sticker imagery.

| Token | Size | Weight | Line height | Product-wide use |
|---|---:|---:|---:|---|
| `{typography.display-title}` | 32px | 700 | 38px | Optional reference for prominent page or section titles. |
| `{typography.body-strong}` | Not measured | 600 | Not measured | Navigation, control labels, pack names, and emphasis. |
| `{typography.body}` | Not measured | 400 | Not measured | Descriptions, instructions, and general interface text. |
| `{typography.metadata}` | Not measured | 400 | Not measured | Pack attribution, sticker counts, and secondary details when available. |

Only the 32px title treatment was measured in the supplied evidence. It is a reference rather than a mandatory title size for every page. Keep unmeasured sizes responsive to content and accessibility needs.

### Spacing, Shape, and Depth

- Use `{spacing.compact}`, `{spacing.regular}`, and `{spacing.spacious}` to create clear local rhythm.
- The observed `{spacing.desktop-gutter.value}` desktop gutter is a reference, not a universal container rule.
- The observed `{spacing.grid-gap.value}` grid gap separates items in the reference desktop grid. It may be scaled proportionally at narrower viewports.
- Use `{rounded.media}` for sticker imagery, `{rounded.compact-control}` for small controls, `{rounded.search-control}` for search, and `{rounded.notice-banner}` for notices.
- `{rounded.full}` is available for pill-shaped category controls and circular icon buttons. The reference evidence shows pill-shaped category labels at `{layout.category-pill-height}` height with full rounding.
- Prefer flat canvas and soft-surface separation. Do not infer card, sticky-header, modal, or floating-panel shadows without additional evidence.
- Keep `{colors.overlay-gradient}` aligned to media bounds and use it only where content needs contrast over imagery.
- The observed `{spacing.overlay-inset.value}` overlay padding is a reference for content placement within `media-action-overlay`.

## Product-wide Layout

### Page Families

1. **Shared Shell** supplies consistent product identity, navigation, optional search, notices, and the surrounding canvas.
2. **Browse and Collection** supports scanning groups of sticker packs and moving between available groupings or views.
3. **Pack and Detail** gives one pack enough room for identity, supporting information, sticker previews, and a clear primary action when the product provides one.
4. **Onboarding** introduces the product through short, ordered guidance and focused progression.
5. **Settings** presents preferences and account-level controls in compact, readable groups.

These families define information hierarchy, not invented capabilities. A page should omit any control, metadata, action, or state the product does not actually support.

### Reference Geometry

The inspected desktop evidence showed four columns, approximately 297px-wide items, 297 × 222.75px media, a 4:3 ratio, approximately 72px outer gutters, and 36px gaps between grid items. All are **optional reference measurements** for matching that composition, not fixed product-wide requirements.

**Reference grid composition (optional, desktop ≥ 1440px):**

| Token | Value | Evidence |
|---|---|---|
| `{layout.reference-desktop-columns}` | 4 | optional-reference |
| `{layout.reference-pack-width}` | 297px | optional-reference |
| `{layout.media-aspect-ratio}` | 4:3 | observed |
| `{layout.reference-media-size}` | 297px × 222.75px | optional-reference |
| `{layout.reference-card-height}` | 259px (223px media + 36px metadata) | optional-reference |
| `{spacing.grid-gap}` | 36px | reference-only |
| `{spacing.desktop-gutter}` | 72px | reference-only |

The reference grid uses CSS Grid with fixed column widths at desktop scale. At 1440px the four 297px columns, three 36px gaps, and two 72px outer gutters fill the viewport exactly (72 + 297×4 + 36×3 + 72 = 1440). This arithmetic is informational, not a sizing mandate.

Preserve the 4:3 media ratio when it suits the available sticker artwork. Adapt column count and item width to the page family, viewport, text expansion, and accessibility needs rather than forcing the reference grid onto onboarding, settings, or narrow layouts.

### Responsive Principles

- Preserve reading order and action clarity as layouts narrow.
- Allow collection grids and pack previews to reduce columns without prescribing unobserved breakpoints.
- Keep controls reachable and labels legible; do not compress all desktop actions into one row when space is insufficient.
- Validate header reflow, media fitting, and compact-control presentation against product behavior before treating them as canonical.

**Reference column-collapse guidance (non-mandatory):**

The reference composition suggests a 4 → 3 → 2 → 1 column progression as the viewport narrows. At 1200px the reference source showed three columns with the same `{spacing.grid-gap.value}` gap and `{spacing.desktop-gutter.value}` outer gutters. Exact breakpoints, scaled gutter values, and single-column behavior were not established. Implementations may choose breakpoints, scale gutters proportionally (e.g. 72px → 48px → 24px → 16px), and let column widths fill available space rather than remain fixed. Do not prescribe fixed mobile geometry or arbitrary breakpoint values.

## Components

### Shared Shell Components

**`shared-header`** provides consistent identity and top-level navigation on product pages. It may include `search-control` on discovery-oriented surfaces, but search is not required on every page and must not define the entire shell. Keep the header on `{colors.canvas}` with `{colors.primary}` text and iconography.

**`search-control`** is a connected search unit using `{colors.surface-soft}` and `{rounded.search-control}`. The observed 54px height is an **optional reference measurement**. It may include an entry field, scope choice, and submit action only when those functions exist. On Browse and Collection it can help locate packs; on other families it may be omitted.

**`notice-banner`** is a concise, dismissible or persistent informational region using `{colors.surface-soft}` and `{rounded.notice-banner}`. It can carry guidance, a product notice, or one relevant action. Do not assume promotional offers, gating, or dismissal behavior unless supplied by the page's requirements.

**Example — shared shell:** A white header carries product identity and primary navigation. A browse page adds a soft 12px-radius search control; a settings page uses the same header without search. A short 16px-radius notice may appear below the header when the product has relevant guidance.

### Browse and Collection Components

**`category-strip`** is a horizontal row of pill-shaped category or scope labels placed between the search area and the results grid. Each pill uses `{rounded.full}` for a capsule shape, `{layout.category-pill-height}` height, 14px/600 type in `{colors.primary}`, and horizontal padding of 16px. The active pill receives `{colors.surface-soft}` as its background; inactive pills are transparent. The strip scrolls horizontally when pills exceed the viewport width. All measurements are **reference-only**. Do not use the category strip to introduce content management, tagging systems, or navigation hierarchies the product does not support.

**`compact-control`** is the reusable treatment for sorting, filtering, grouping, selection, or other small page-supported controls. It uses `{colors.surface-soft}`, `{colors.primary}`, and `{rounded.compact-control}`. Keep control rows compact and avoid turning them into large toolbars. Labels must describe actual product functions rather than inherit observed labels by default.

**`pack-surface`** is the repeating unit for presenting a sticker pack in browse or collection contexts. It follows a media-first rhythm: lead with `sticker-media` at the 4:3 reference ratio, then present a compact metadata row below the media. The reference metadata row is `{pack-surface.metadataHeight}` tall, uses 14px/400 type in `{colors.primary}`, and is laid out as a horizontal flex row with pack name as the leading element and optional secondary detail (e.g. sticker count) trailing in `{colors.text-muted}`. Keep the metadata row visually subordinate to the media above it. The full card reference height is `{layout.reference-card-height}` (media + metadata). It can participate in a responsive grid or list while retaining consistent media geometry and quiet supporting text.

**Example — browse and collection:** A search control and category strip precede a responsive grid of pack surfaces. Each surface shows a 4:3 sticker preview with an 8px radius, followed by a compact metadata row carrying the pack name and available secondary detail in muted text. The reference composition uses four 297px columns with 36px gaps and 72px outer gutters; all grid dimensions are optional references.

### Pack and Detail Components

**`sticker-media`** displays a sticker or representative pack artwork with `{rounded.media}` and the 4:3 reference ratio. Crop versus contain behavior is not established; choose it according to the asset and verify that the sticker remains legible. Repeated previews should share geometry so varied artwork scans as one system.

**`media-action-overlay`** is a bottom-aligned `{colors.overlay-gradient}` placed inside `sticker-media` when actions or a short label must appear over imagery. Use `{colors.on-primary}` for contrast.

**Overlay reveal behavior (reference):** The overlay is hidden by default (`opacity: 0`) and revealed on hover or keyboard focus of the parent `sticker-media` container. The transition should be brief and non-distracting. Keyboard focus must produce the same visual result as pointer hover — any hover-only effect without a `:focus-visible` or `:focus-within` equivalent is not acceptable. On touch devices where hover is unavailable, the overlay may be persistently visible or revealed on tap according to product needs. The overlay uses `{spacing.overlay-inset.value}` padding and aligns content to the bottom of the media area (`align-items: flex-end`). Overlay content is limited to a single-line title or a short supported action; do not fill the overlay with social metrics, download counts, creator statistics, or engagement controls.

**`pack-surface`** expands on detail pages to organize pack identity, description, verified metadata, sticker previews, and a primary action if one exists. Keep the media dominant and supporting information quieter. Do not assume creator statistics, sponsorship, comments, likes, saving, installation, or export capabilities.

**Example — pack and detail:** A pack name and concise description sit beside or above a consistent set of sticker-media previews. One preview may expose a media-action-overlay with a short supported action, while the surrounding pack surface uses white canvas, primary ink, muted supporting text, and no unverified shadow.

### Onboarding Components

Use `shared-header` only when orientation or exit navigation is needed. Use `notice-banner` for concise contextual guidance and `compact-control` for a small supported choice. Keep each step focused, use `{typography.display-title}` only as an optional prominent-title reference, and reserve `{colors.accent-pink}` for the primary progression action.

**Example — onboarding:** A focused white-canvas step presents a clear title, brief body copy, a sticker-media preview, and one primary pink progression action. Optional secondary choice controls use the compact 8px-radius treatment. The screen does not inherit browse grids, metadata rows, or search merely for visual consistency.

### Settings Components

Use clearly titled groups on `{colors.canvas}` with body text and muted supporting copy. `compact-control` supplies supported selectors or toggles, while `notice-banner` can explain a setting with broader consequences. Keep navigation and actions in primary ink, with pink reserved for the page's primary emphasis.

**Example — settings:** A settings title is followed by spaced groups of labels, descriptions, and compact controls. A soft notice banner provides relevant guidance when needed. The layout remains flat and readable rather than borrowing pack-grid geometry, media overlays, or unverified status treatments.

## Composition Guidance

### Shared Shell

- Keep identity and top-level navigation consistent across page families.
- Include search only where finding packs or collections is a primary task.
- Place notices close to the region they explain and keep them concise.
- Use canvas, soft surfaces, and spacing before introducing borders or shadows.

### Browse and Collection

- Let pack imagery lead while keeping controls and metadata visually secondary.
- Use responsive repetition and consistent sticker geometry to support scanning.
- Mark any promoted or special content clearly if such content exists, but do not prescribe placement or capability from incomplete evidence.
- End the content naturally; do not assume sign-up gates, category footers, or continuation prompts.

**Search and category strip composition (reference):** On browse surfaces, the vertical stack flows: shared header → search control → category strip → results grid. The search control sits within the header or directly below it. The category strip follows the search and precedes the grid, separated by `{spacing.spacious}` or the grid gap. This ordering is a reference composition; pages may omit the category strip or search when those functions do not exist.

### Pack and Detail

- Establish one clear pack identity before presenting supporting information and previews.
- Keep actions explicit and limited to verified product behavior.
- Place overlay content inside media bounds; do not duplicate the same dominant title across every preview.
- Do not turn metadata into a competing visual layer.

### Onboarding

- Present one primary decision or progression point at a time.
- Reuse the product palette, typography, spacing, and radii without reproducing browse-page density.
- Keep instructions short and pair them with imagery only when the image improves understanding.

### Settings

- Group related controls under clear labels and descriptions.
- Prefer compact, low-contrast controls over visually heavy panels.
- Preserve enough spacing for scanning and touch access.
- Do not introduce unsupported semantic colors to communicate setting state.

## Do's and Don'ts

### Do

- Do use Mona Sans throughout the interface, with `{typography.display-title}` as an optional prominent-title reference.
- Do keep `{colors.primary}` as the dominant ink on `{colors.canvas}`.
- Do reserve `{colors.accent-pink}` for primary actions, active emphasis, and concise brand moments.
- Do use `{colors.surface-soft}` for search controls, notice banners, compact controls, and active category pills that need separation.
- Do keep sticker imagery dominant and supporting information muted.
- Do reuse `shared-header`, `search-control`, `notice-banner`, `compact-control`, `category-strip`, `sticker-media`, `media-action-overlay`, and `pack-surface` according to each page's task.
- Do label desktop gutters, columns, widths, grid gaps, media dimensions, and the 54px search height as reference or optional measurements.
- Do provide keyboard-focus parity for every hover-revealed effect, including `media-action-overlay`.
- Do use the media-first card rhythm (image above, metadata below) for consistent scanning across pack surfaces.

### Don't

- Don't frame the product as a single search experience or force search onto every page.
- Don't blindly rename page-specific content, controls, metadata, promotions, or engagement actions as product-wide patterns.
- Don't make every pack surface look elevated with a strong shadow.
- Don't place permanent large labels over all sticker media.
- Don't invent exact mobile columns, breakpoints, gaps, image-fit behavior, or shell-collapse rules.
- Don't invent product capabilities, marketing offers, access gates, installation or export flows, sponsorship behavior, or social engagement features.
- Don't add unverified semantic or status colors.
- Don't reveal overlays on hover without an equivalent keyboard-focus trigger.
- Don't fill `media-action-overlay` with social metrics, download counts, creator statistics, or engagement controls.

## Evidence Boundaries

This guide separates observed visual evidence from product-wide application. The palette, type family, radii, soft-surface treatment, media ratio, and overlay treatment are reusable visual primitives. The 32px title, 54px search height, 72px gutters, 36px grid gaps, four columns, 297px item width, 297 × 222.75px media size, 259px card height, 36px category-pill height, and 20px overlay inset are **reference or optional observations**, not universal rules.

No exact mobile behavior, breakpoint system, gap scale beyond the listed spacing tokens, image fitting method, shadow system, semantic status palette, or complete interaction model was established. The 4 → 3 → 2 → 1 column-collapse progression and scaled-gutter suggestion are compositional references, not prescribed breakpoints. Product requirements and accessibility validation must decide those details. Illustrative examples in this guide demonstrate composition only; they do not assert that every named control, action, or piece of metadata exists.
