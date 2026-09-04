## Why

Sticker seekers need a focused, visual way to discover Islamic sticker packs before direct downloads and companion mobile applications are available. A polished public preview establishes the catalog experience now while defining a stable path to future CMS-managed content and app-based installation.

## What Changes

- Add an English-only public landing page that combines a compact brand introduction with an interactive sticker-pack catalog.
- Add local search across pack names, categories, and sticker keywords, plus working category filters for curated static preview data.
- Add public pack-detail pages with pack identity, metadata, an icon-only future-install affordance, and a complete sticker preview grid.
- Show a "Coming soon" dialog when the install icon is selected; it explains that WhatsApp and Telegram installation will arrive through future Islamic Sticker mobile apps.
- Establish a catalog data boundary so static preview data can later be replaced by a Next.js backoffice/CMS without changing public-page behavior.
- Apply the existing `DESIGN.md` visual system: white canvas, near-black ink, soft controls, selective pink emphasis, 4:3 rounded media, and flat pack surfaces.

## Capabilities

### New Capabilities
- `sticker-catalog-preview`: Public landing catalog, local discovery controls, pack-detail previews, and the non-functional future-install dialog.

### Modified Capabilities
- None.

## Impact

- Affects the new Next.js public routes, reusable catalog UI components, local preview data, and client-side search/filter/dialog behavior.
- Does not add a CMS, backoffice, direct download, Android/iOS deep link, or WhatsApp/Telegram installation integration in this phase.
- Requires visual and responsive validation against `DESIGN.md`.
