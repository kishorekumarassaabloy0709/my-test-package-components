# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial component library setup

## [0.1.0] - 2024-01-01

### Added
- Button component with variants (primary, secondary, danger) and sizes (sm, md, lg)
- Card component for content containers
- TypeScript support with full type definitions
- CSS Modules for component styling
- Rollup bundling configuration
- ESM and CommonJS exports

### Fixed
- Fixed button hover states

---

## [0.2.0] - TBD

### Added
- Badge component
- Tooltip component
- Form inputs (Text, Checkbox, Radio)

### Changed
- Updated Button API (breaking change example)

### Deprecated
- Old Button API (use new variant names instead)

### Removed
- Deprecated prop from previous version

### Fixed
- Memory leak in Dialog component

---

## Guidelines for Changelog Entries

### Categories:
- **Added** - New features or components
- **Changed** - Changes in existing functionality (non-breaking preferred)
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security fixes

### Example Entry:
```
## [1.0.0] - 2024-02-01

### Added
- New Badge component (#123)
- Support for custom color schemes

### Changed
- Button component refactored for better performance
- Updated minimum React version to 18.0.0

### Fixed
- Fixed CSS Module import issues (#456)
```

### Linking Issues:
Use GitHub issue/PR numbers: (#123)

---

## Updating Changelog

Add entry at the top under `[Unreleased]` as you develop.

Before publishing a new version:
1. Update version number
2. Move `[Unreleased]` section to new version with date
3. Commit with message: "chore: release v0.2.0"

Example:
```bash
npm version minor
git push origin main
npm publish
```

---

**Keep your changelog up-to-date for happy users! 📝**
