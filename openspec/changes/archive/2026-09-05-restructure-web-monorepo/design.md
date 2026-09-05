## Context

The repository currently has a Bun workspace root and one Next.js application at `web/`. Its application source, public assets, tests, and framework configuration are app-local; `openspec/`, Git metadata, root documentation, ignore policy, and Biome configuration are repository concerns. The revised architecture moves the app to `apps/web/` and makes root-owned developer tooling explicit. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**

- Make `apps/web/` the self-contained execution root for the existing Next.js application.
- Make the repository root a Bun workspace coordinator with one canonical lockfile, `apps/*` workspace discovery, and explicit commands for root quality tooling and web workflows.
- Centralize TypeScript, Bun type declarations, and Biome dependency/configuration ownership at root without moving Next-specific build configuration away from the app.
- Preserve current Next routes, public asset URLs, module aliases, test behavior, and developer workflows after moving paths.
- Keep the root ready for later independent API/mobile applications and shared packages without coupling either to a technology decision now.

**Non-Goals:**

- Creating `apps/api/`, `apps/mobile/`, `packages/`, or application scaffolds.
- Adding API endpoints, shared packages, databases, authentication, or cross-platform business logic.
- Changing UI behavior, catalog data, routes, static asset paths, deployment providers, or runtime dependency versions.
- Introducing an additional monorepo orchestrator such as Turborepo, Nx, or Lerna.

## Decisions

### 1. Use `apps/web/` as the application root
Move the complete Next.js application boundary into `apps/web/`: its manifest, source, `public/` assets, unit and end-to-end tests, and framework-specific configuration. This follows a conventional monorepo layout while retaining an independently runnable app.

**Alternatives considered:**
- Keep `web/`: shallower, but less conventional once applications and shared packages grow.
- Keep the application at root: preserves short paths today but makes root tooling/application concerns inseparable.

### 2. Use Bun workspaces for JavaScript/TypeScript applications
Place `workspaces: ["apps/*"]` in the private root `package.json` and retain the canonical `bun.lock` at root. A future Bun/Node API can be added as `apps/api`; Flutter can live under `apps/mobile` but remains independent because it uses `pubspec.yaml` rather than Bun workspaces.

**Alternatives considered:**
- Keep `bun.lock` in the app directory: works temporarily but creates a later consolidation migration.
- Add Turborepo/Nx now: premature with one JavaScript workspace and no cross-app build/caching need.

### 3. Separate root developer tooling from app-specific tooling
Keep Next.js configuration, the web TypeScript configuration, PostCSS, Vitest, Playwright, shadcn configuration, and generated `next-env.d.ts` in `apps/web/` because their paths and framework discovery are app-relative. Root owns `typescript`, `@types/bun`, and `@biomejs/biome`, a root `tsconfig.json` with `compilerOptions.types: ["bun"]`, and root lint/format/typecheck commands. The web TypeScript config remains the authority for app source and aliases; root typechecking invokes it rather than attempting to include Next source through the root config.

**Alternatives considered:**
- Leave TypeScript and Biome declared in the web app: keeps the current app self-contained, but conflicts with the explicit root-owned developer-tooling decision.
- Move Next/Playwright/Vitest configuration to root: would make app execution and framework discovery cross-directory and fragile.

### 4. Keep repository governance at root and expose namespaced commands
Keep `openspec/`, `.gitignore`, design documentation, and root-wide Biome configuration at root. Root scripts own `typecheck`, `lint`, `check`, `format`, and `format:check`; app workflows are exposed under `web:*` names—`web:dev`, `web:build`, `web:test`, and `web:test:e2e`—and delegate to `apps/web/` using Bun's cwd flag. This establishes a scalable command namespace for later `api:*` commands without making the root application-owned.

**Alternatives considered:**
- Forward every root command to the web app: prevents root-wide tooling from governing future workspaces.
- Duplicate tool configuration in root and app: risks divergent lint/typecheck behavior.

## Risks / Trade-offs

- [Root typecheck accidentally compiles Next application files with root settings] → Keep app source selection and aliases in `apps/web/tsconfig.json`; have root typecheck explicitly target that app configuration.
- [Root-wide Biome scans generated output or future Flutter artifacts] → Use recursive generated-artifact excludes now and extend targeted excludes when Flutter is introduced.
- [Bun lockfile records an obsolete workspace path] → Refresh `bun.lock` from root after the final `apps/web/package.json` layout is in place.
- [Forwarding scripts use incompatible Bun cwd syntax] → Use the installed Bun 1.3.13-compatible `bun --cwd=apps/web run <script>` form and verify every script.
- [A future API needs different package management] → Keep `apps/api` structurally independent; only include it in Bun workspaces when it is actually a Bun/Node project.

## Migration Plan

1. Update the root workspace manifest, root developer-tool dependencies, root TypeScript configuration, Biome commands, and root `web:*` paths.
2. Relocate `web/` to `apps/web/`, retaining internal app-relative paths and framework-specific configuration.
3. Remove root-owned tooling declarations/scripts from the web manifest while keeping its app-specific dependencies and commands.
4. Refresh the root Bun lockfile, regenerate derived Next metadata, and run root tooling plus the relocated app's checks.
5. Roll back by reversing the atomic file moves and restoring the previous manifests/lockfile if validation fails; no data migration or external deployment cutover is involved.

## Open Questions

None. Future API technology and Flutter project structure are deliberately deferred because they do not change this migration's file layout or validation plan.
