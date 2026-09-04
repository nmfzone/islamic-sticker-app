## 1. Project and catalog foundation

- [x] 1.1 Inspect the existing Next.js project setup and add only the route, style, asset, and test scaffolding required for the public catalog preview.
- [x] 1.2 Define the replaceable catalog domain model and curated local preview provider with mixed showcase packs, cover artwork, sticker previews, categories, and search keywords.
- [x] 1.3 Add focused tests for catalog lookup and normalized intersection filtering across pack titles, categories, and sticker keywords.

## 2. Shared visual primitives

- [x] 2.1 Implement the public shell and shared catalog primitives using `DESIGN.md` tokens: header, soft search control, compact category control, 4:3 rounded sticker media, and flat pack surface.
- [x] 2.2 Add responsive grid behavior and accessible focus states that preserve content order, legibility, and usable controls at narrow and desktop viewports.
- [x] 2.3 Add accessible media text alternatives and validate cover/sticker image fitting so artwork remains legible within the required 4:3 frames.

## 3. Landing catalog

- [x] 3.1 Implement the `/` hybrid landing composition with compact brand introduction, English discovery copy, local search, category filtering, and mixed curated pack results.
- [x] 3.2 Implement empty-result feedback and ensure local search returns packs matched through title, category, or sticker keyword metadata.
- [x] 3.3 Link every catalog pack surface to its public pack-detail route and test the search/filter/result behavior.

## 4. Pack-detail preview and future-install dialog

- [x] 4.1 Implement `/packs/[slug]` with pack cover, identity, concise description, category, sticker count, and the complete responsive sticker-preview grid.
- [x] 4.2 Implement the application not-found behavior for unknown pack slugs.
- [x] 4.3 Add the icon-only, pack-named install affordance and accessible “Coming soon” dialog; verify mouse, touch, keyboard activation, dismissal, and focus restoration.

## 5. Validation

- [x] 5.1 Run type checking, linting, and automated catalog interaction tests; resolve regressions introduced by the preview.
- [x] 5.2 Perform browser-based visual and accessibility QA at narrow, tablet, and desktop widths against `DESIGN.md`, including search/filter states, empty results, pack detail, dialog open/close, and focus visibility.
- [x] 5.3 Verify the public UI consumes the catalog domain model rather than page-embedded data, documenting the future CMS/backoffice and mobile-install integration seam.
