---
title: Version 3.1.30
description: Discover what's new in Web UI 3.1.30.
review:
  comment: ''
  date: '2026-05-08'
  status: ok
toc: true
labels:
tree_item_index: 971
hidden: false
---


{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.30)


**Accessibility Enhancements**

We continue to improve accessibility across Nuxeo Web UI to ensure an inclusive experience for all users.

- ***Improved screen reader support across the application:***
  - The Add to Collections dropdown is now fully accessible with screen readers.
  - Dropdown Items and Date Picker fields are now read correctly by assistive technologies.
  - The Image and Video toolbar is now fully screen‑reader accessible.
  - The default search form now uses both labels and placeholders to clearly communicate information to screen reader users.
  - Search and form dropdowns now announce labels and context correctly for better navigation.
- ***Improved date picker experience:***
  - Fixed issues where date pickers displayed incorrect translations or date formats.
  - Improved calendar behavior when using the Date Picker inside data tables, ensuring consistent and reliable date selection.

**New Capabilities**

- ***Direct download to Nuxeo Drive:***
  - Added a new Web UI action that lets users download selected documents or folders directly into Nuxeo Drive.
  - Supports multi‑selection (up to 25 items).
  - Downloads are initiated seamlessly using Drive‑specific links for a smoother workflow.

**Bug Fixes and Usability Improvements**

- Fixed an issue where the selection actions toolbar did not appear after refreshing search results.
- Fixed saved searches for hierarchical vocabularies, ensuring full hierarchy paths are preserved and searches return expected results.
- Fixed an issue where Workflow Analytics was not refreshing when the date range was changed.
- Removed a hardcoded sort order on the Collections page, allowing server‑side sort configuration to be respected.
- Improved handling of search suggestions containing double quotes, ensuring special characters are escaped correctly.
- Reduced functional test flakiness, minimizing random test failures and improving overall stability.

**Platform and Reliability Improvements**

- To keep Nuxeo Web UI stable, secure, and future‑ready, we’ve updated several internal dependencies and build tools. These changes do not impact end-user workflows directly but improve performance, maintainability, and CI/CD reliability.
- Highlights include:
  - Dependency updates across build, test, and UI frameworks.
  - Improved test coverage reporting.
  - Updated CI/CD tooling and GitHub Actions.
  - Updated 3D rendering, workflow diagramming, and visualization libraries.
  - Improved browser compatibility and build stability.

<br/>


{{! /multiexcerpt}}
