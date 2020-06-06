# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Refer to the [CONTRIBUTING guide](https://github.com/lightspeed/flame/blob/master/.github/CONTRIBUTING.md) for more info.

## [Unreleased]

### Fixed

- Tooltip background will now render properly
- Select will now have a small border radius applied to it

## 0.6.0

### Breaking

- Removed `lightTheme` from exports

### Added

- Button now supports disabled state colors

## 0.5.1

### Fixed

- InputWithAddon is now properly exported

## 0.5.0

### Breaking/Deprecated

- darkTheme been removed
- lightTheme will be deprecated. Please use `getTheme('light')` instead to retrieve the theme object.
- Theme `bg` key has been renamed to `background`

## 0.4.0

### Added

- Add NavigationElement to export

## 0.3.0

### Added

- Basic Tooltip component
- Modal: New aside prop and animations
- Ultra basic TextLink component
- FormField Component
- InputWithAddon Component (use at own risk and peril)
- MainNav component

### Breaking

- Input will now always take full-width
- All components will now use border-box

## 0.2.0 - 2020-02-15

### Added

- Basic Modal Component
- Better Typings

## 0.1.0 - 2020-02-09

### Added

The following components have been added:

- Alert
- Button
- Card
- Input
- Label
- Select
- Switch
- Table
- Text
- TextArea
