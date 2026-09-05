## 1. Revise the workspace and tooling boundary

- [x] 1.1 Update the root workspace manifest to discover `apps/*`, own TypeScript, `@types/bun`, and Biome, define root quality-tooling commands, and forward `web:*` app workflows to `apps/web/`.
- [x] 1.2 Add a root TypeScript configuration with `compilerOptions.types` including `bun`, and make the root typecheck command validate the root configuration plus the web app configuration without changing app alias behavior.
- [x] 1.3 Keep the canonical `bun.lock` at root, refresh it with the configured Bun version for `apps/web`, and ensure no workspace-local lockfile is created.
- [x] 1.4 Review root `.gitignore` and `biome.json` scopes so generated build, coverage, Playwright, and future non-JavaScript workspace artifacts remain intentionally handled.

## 2. Relocate the web application

- [x] 2.1 Move `web/` to `apps/web/`, preserving the Next.js manifest, source tree, public assets, unit-test setup, and end-to-end tests without product behavior changes.
- [x] 2.2 Keep Next.js, web TypeScript, PostCSS, Vitest, Playwright, shadcn, and generated Next type configuration app-local under `apps/web/`, preserving their relative paths and `@/*` alias behavior.
- [x] 2.3 Remove root-owned TypeScript and Biome dependency/script ownership from `apps/web/package.json` while retaining Next.js, React, Tailwind, Vitest, Playwright, shadcn, and other app-specific dependencies and commands.
- [x] 2.4 Confirm that repository-level artifacts (`openspec/`, Git metadata, repository documentation, root workspace manifest, root TypeScript/Biome configuration, lockfile, and ignore policy) remain at root, and do not create `apps/api/`, `apps/mobile/`, or `packages/` placeholders.

## 3. Verify root tooling and application behavior

- [x] 3.1 Run root typecheck, lint, check, and format-check commands and confirm root-owned tooling validates the intended repository/app scope.
- [x] 3.2 Run the relocated web workspace's unit tests and production build, and confirm existing catalog routes and public `/stickers/...` asset URLs remain reachable.
- [x] 3.3 Run root `web:*` forwarding commands, including `bun run web:test:e2e`, and verify they delegate to `apps/web/` without relying on the prior `web/` layout.
- [x] 3.4 Inspect final repository status to ensure no root application files, obsolete `web/` directory, workspace-local lockfiles, or generated artifacts remain unintentionally; document any pre-existing unrelated validation failures.
