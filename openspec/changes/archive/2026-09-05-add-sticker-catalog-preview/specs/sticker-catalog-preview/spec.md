## Purpose

Provide a public, English-language Islamic sticker catalog preview that lets visitors discover curated packs, inspect each pack’s stickers, and understand the future app-based installation path without exposing unavailable download or installation features.

## ADDED Requirements

### Requirement: Hybrid catalog landing page
The system SHALL present the public landing route as a hybrid discovery page containing a compact Islamic Sticker brand introduction, a catalog discovery region, and a mixed showcase of curated sticker packs.

#### Scenario: Visitor opens the landing page
- **WHEN** a visitor opens the public landing route
- **THEN** the system displays the compact brand introduction followed by catalog search, category filtering controls, and pack results

#### Scenario: Mixed catalog showcase is visible
- **WHEN** the landing page is rendered without discovery constraints
- **THEN** the system displays packs spanning greetings, daily duas, Jumuah, Ramadan and Eid, Little Muslims, and gentle reminders

### Requirement: Local catalog discovery
The system SHALL allow visitors to filter the curated preview catalog by category and search it using pack names, categories, and sticker keywords.

#### Scenario: Visitor filters packs by category
- **WHEN** a visitor selects a catalog category
- **THEN** the system displays only packs assigned to that category

#### Scenario: Visitor searches with a sticker keyword
- **WHEN** a visitor enters a word that is present in a pack’s sticker keywords but not its title
- **THEN** the system includes that pack in the displayed results

#### Scenario: No pack matches discovery constraints
- **WHEN** a visitor’s active search and category selection match no packs
- **THEN** the system communicates that no matching packs are available without presenting unrelated results

### Requirement: Public pack-detail preview
The system SHALL provide a public detail page for each available curated pack that presents its cover artwork, title, concise description, category, sticker count, and complete sticker-preview grid.

#### Scenario: Visitor opens a valid pack detail page
- **WHEN** a visitor selects an available pack from the catalog
- **THEN** the system displays that pack’s identity and all of its sticker previews

#### Scenario: Visitor opens an unavailable pack identifier
- **WHEN** a visitor navigates to a pack identifier that does not exist in the curated catalog
- **THEN** the system presents the application’s not-found experience

### Requirement: Future install affordance
The system SHALL show an icon-only install affordance on each public pack-detail page and SHALL identify its target pack through an accessible name.

#### Scenario: Visitor activates the install affordance
- **WHEN** a visitor clicks, taps, or keyboard-activates the install affordance
- **THEN** the system opens a dialog headed “Coming soon” that states WhatsApp and Telegram installation will be available through future Islamic Sticker mobile apps

#### Scenario: Visitor dismisses the future-install dialog
- **WHEN** the future-install dialog is open and the visitor chooses its close control or dismisses it through a supported dialog interaction
- **THEN** the dialog closes and focus returns to the install affordance

### Requirement: Catalog visual-system compliance
The system SHALL render catalog and pack-detail surfaces according to the project’s `DESIGN.md` primitives: white canvas, near-black primary ink, muted supporting text, soft interactive surfaces, selective pink emphasis, 4:3 rounded sticker media, and flat pack presentation.

#### Scenario: Visitor views catalog packs
- **WHEN** catalog pack results are displayed
- **THEN** each pack presents dominant rounded 4:3 artwork with compact identity and muted supporting metadata without an elevated card shadow

#### Scenario: Visitor views a responsive layout
- **WHEN** the viewport narrows
- **THEN** catalog and sticker-preview grids reduce their column count while preserving reading order, legible labels, and usable controls

### Requirement: Replaceable catalog content source
The system SHALL keep the public catalog’s observable data contract independent of the initial curated static source so a later content-management source can supply equivalent pack information.

#### Scenario: Catalog data source is replaced
- **WHEN** an equivalent future content source supplies pack identity, categories, keywords, cover artwork, and sticker previews
- **THEN** the public landing and pack-detail behaviors remain unchanged
