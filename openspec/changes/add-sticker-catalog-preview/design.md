## Context

This is a new public Next.js surface with no existing catalog implementation. See `proposal.md` for motivation and `specs/sticker-catalog-preview/spec.md` for externally observable behavior. `DESIGN.md` is the visual contract: white canvas, near-black ink, muted supporting text, pale soft controls, pink reserved for primary emphasis, 8px rounded 4:3 media, and flat pack surfaces. The Dribbble-inspired composition informs discovery density and responsive grid behavior, but does not introduce social metrics, creator engagement, or unverified product capabilities.

## Goals / Non-Goals

**Goals:**
- Provide one public landing route that acts as the complete interactive catalog, plus a parameterized public pack-detail route.
- Keep the initial data local and curated while exposing one stable catalog-domain shape suitable for a later CMS/backoffice provider.
- Ensure local search and category filtering are deterministic and work over title, category, and keywords.
- Treat the install icon as a future affordance with a real accessible dialog interaction, not as a download or app-install action.
- Build reusable UI primitives that follow `DESIGN.md` and can adapt across desktop and narrow layouts.

**Non-Goals:**
- CMS/backoffice authoring, authentication, persistence, direct file downloads, deep links, Android/iOS applications, WhatsApp/Telegram installation, localization, social features, analytics, or real-time search.
- Duplicating the catalog on a separate browse route.

## Decisions

### shadcn/ui component installation
- Scaffold UI primitives (Button, Dialog, Input, Badge) using the official shadcn CLI — `npx shadcn@latest add button dialog input badge` — against a committed `components.json` configured for the `new-york` style, RSC support, and Lucide icons.
- After CLI generation, apply DESIGN.md-specific overrides directly in each generated file to preserve project visual parity without forking the registry structure: `icon` button size set to `size-10 rounded-full`, dialog overlay changed from `bg-black/50` to `bg-foreground/30 backdrop-blur-[2px]`, dialog panel changed to `rounded-2xl` without shadow, input changed to `h-10 rounded-xl bg-input border-transparent`, and badge `default` variant changed from pink to `bg-secondary`.
- Rationale: the official CLI produces maintainable, registry-tracked components that can be updated with future `npx shadcn@latest add --overwrite` runs; DESIGN.md overrides are intentional deviations from the neutral registry defaults and are documented here so they survive future re-runs.
- Alternative considered: hand-authoring components from scratch. Rejected because it cannot be updated via the CLI and diverges silently from upstream registry improvements.
- shadcn v4 CLI dependency notes: the generated files import `cn` from the `cn` npm package and `Slot`/`Dialog` from `radix-ui` (the new unified Radix package). Both are correct for shadcn v4 and differ from the legacy `@radix-ui/react-*` import style.

### Public route model
- Use `/` for the hybrid landing/catalog and `/packs/[slug]` for a single pack preview.
- Rationale: one discovery surface avoids fragmented public navigation; detail URLs are linkable and map directly to the future data model.
- Alternative considered: a dedicated `/browse` route. Rejected for Phase 1 because it duplicates catalog behavior and delays first-pack discovery.

### Catalog data boundary
- Define a domain model for a pack containing a stable slug, title, concise description, category, sticker count, cover asset, sticker previews, and search keywords. Provide the Phase 1 catalog via a local curated-data provider.
- Rationale: pages and filtering depend on the model rather than on literal in-component fixtures, allowing a future CMS/backoffice provider to replace the source without altering public behavior.
- Alternative considered: directly embed each pack in page components. Rejected because it makes migration and test coverage harder.

### Discovery state
- Keep search text and selected category in client-side landing-page state. Normalize case and whitespace before matching the title, category, and keywords. Combine active search and category as an intersection.
- Rationale: all Phase 1 data is present locally, so there is no network latency or server query requirement; the behavior mirrors a future catalog query contract.
- Alternative considered: URL query parameters. Deferred because shareable filtered states are not required; the UI can later promote the same state into URL parameters if that becomes a product requirement.

### Content composition and visual primitives
- Use a compact hybrid hero, one soft search control, compact category controls, and a responsive grid of flat `pack-surface` entries. Each pack surface contains 4:3 rounded cover media, compact primary identity, and muted secondary metadata.
- Use a detail header with cover, identity, metadata, and an icon-only install control; render the complete sticker set below in a responsive preview grid.
- Rationale: this follows `DESIGN.md` and retains the reference’s image-first scanning rhythm while avoiding its non-product social controls.
- Alternative considered: a brand-heavy hero before discovery. Rejected because sticker seekers need fast catalog access.

### Future-install interaction
- Render an icon-only button with a descriptive `aria-label` that includes the pack name. Use an accessible modal dialog with the title “Coming soon,” a brief mobile-app installation message, and explicit dismissal. Return focus to the triggering icon after close.
- Rationale: preserves the requested compact affordance while avoiding a false functional download/install promise.
- Alternative considered: disabled control or an inline notice. Rejected because the user requested an interactive popup and the detail layout should remain compact.

### Assets and content
- Use intentionally curated local sticker/cover media with text alternatives that identify the pack or preview. Select image fitting per asset while maintaining the 4:3 frame and legibility.
- Rationale: the design guide does not prescribe crop versus contain, so the implementation must select the fit that preserves each sticker asset.

## Risks / Trade-offs

- [Static data can drift from the future CMS schema] → Keep the local provider model minimal and document the required fields; make the later CMS adapter conform to it.
- [Image art may be clipped by a uniform 4:3 frame] → Validate each curated asset and use asset-appropriate fit behavior without changing outer media geometry.
- [Icon-only control may be ambiguous] → Provide an accessible pack-specific name and a visible dialog on activation; retain a conventional install/download icon with clear focus styling.
- [Client-side discovery state is not shareable] → Treat URL state as a later enhancement unless it becomes a stated discovery requirement.
- [Reference-inspired density can compromise narrow-screen usability] → Allow grid columns to collapse naturally and test controls, labels, focus indicators, and dialog interactions at narrow viewports.

## Migration Plan

1. Release the landing catalog and detail previews with the curated local provider and no external installation endpoint.
2. When content operations are ready, implement a CMS/backoffice provider that maps its records to the existing catalog domain model; retain the public route and component contracts.
3. When Android/iOS installation flows are available, replace the dialog-only behavior behind the existing install affordance with supported platform routing while preserving accessible labeling and failure feedback.
4. Roll back by redeploying the prior static build; no data migrations are required in Phase 1.

## Open Questions

- The final catalog branding name, logo, and production sticker artwork are not yet supplied; implementation will use explicitly replaceable placeholders or provided assets without changing the component/data contracts.
