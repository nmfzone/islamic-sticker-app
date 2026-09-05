## Why

The Next.js application needs a conventional application boundary under `apps/web/` so the repository can grow into multiple deployable applications and shared JavaScript/TypeScript packages. Centralizing repository-wide Bun, TypeScript, Bun type declarations, and Biome tooling at the root creates one consistent quality-tooling entry point while keeping framework runtime dependencies with the web app.

## What Changes

- **BREAKING** Move the existing Next.js/Bun application, its source, assets, tests, and app-local framework tooling from the repository root to `apps/web/`.
- Establish the repository root as a Bun workspace coordinator with `workspaces: ["apps/*"]`, one JavaScript dependency lockfile, and explicit `web:*` forwarding commands targeting `apps/web/`.
- Move repository-wide developer tooling ownership—TypeScript, `@types/bun`, and Biome—to the root package; add a root TypeScript configuration that includes Bun types and supports root-level tooling checks.
- Keep Next.js, React, Tailwind, Vitest, Playwright, shadcn, and their runtime or app-specific configuration owned by `apps/web/`.
- Retain repository governance and shared documentation at the root, including OpenSpec artifacts, Git metadata, and repository-wide ignore rules.
- Preserve the current web application’s routes, static asset URLs, test coverage, and development/build/test behavior after relocation.
- Reserve the root layout for future `apps/api/`, `apps/mobile/`, and optionally `packages/*` without creating placeholder projects or choosing their implementation stacks.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

None.

## Impact

Affected files include the root workspace manifest, lockfile, TypeScript and Biome configuration; the web application manifest and tooling configuration; all application source, public assets, and end-to-end tests. No product-facing catalog behavior, public routes, APIs, or application dependency versions are intended to change.
