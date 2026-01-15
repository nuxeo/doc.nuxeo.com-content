---
title: Version 3.1.26
description: Discover what's new in Web UI 3.1.26.
review:
  comment: ''
  date: '2026-01-15'
  status: ok
toc: true
labels:
tree_item_index: 975
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.26)


**Bug Fixes & Enhancements** 

- ***Improved Document Title Handling:***
Resolved an issue where long document titles caused the window to stretch or overflow. Titles now display correctly without impacting layout.

- ***Document Import Notifications***
The system now displays the actual backend error message in notifications instead of showing a generic ERROR: undefined. This provides clearer feedback for troubleshooting.

- ***PDF.js Integration:***
Updated the integrated PDF.js library to the latest version. The accompanying README has been revised to include version details and related updates.

- ***Column Filter Display:***
Fixed a UI issue where column filter value lists appeared too narrow when multiple columns were present, improving usability and readability.

- ***Catalog Generation Reliability:***
  - Corrected missing element bindings in generated catalog JAR due to absent path fields in catalog.json, ensuring proper button functionality for LTS 2023 and 2025.
  - Enabled stable and snapshot catalog generation from any branch, release, or tag, allowing manual generation of stable catalogs without the -SNAPSHOT suffix when required.

- ***Pipeline Stability Improvements:***
Optimized video.feature and csv_import.feature by improving waits and synchronization, reducing intermittent failures and ensuring more stable cross-repo pipeline executions.

- ***CI Process Upgrades:***
  - Upgraded PR check packages (Accessibility, Functional Test, lint, test).
  - Streamlined accessibility pipeline logs for better traceability.
  - Enhanced headless/headful execution configuration with optional video recording.
  - Updated accessibility browser version to the latest for improved reliability in CI runs.



**Security Improvements** 

- ***Download Restrictions:***
Mitigated client-side URL redirect and phishing risks by restricting downloads to trusted blob: and absolute http(s) URLs, blocking redirects constructed from untrusted DOM input.

- ***Workflow Permissions:***
Introduced a permissions key at the workflow level to enforce least-privilege access across all jobs by default.



**Accessibility Updates** 

- ***Improved Screen Reader Experience:***
Removed alt text from decorative icons and thumbnail images to ensure screen readers ignore non-informative visuals, improving accessibility compliance.


<br/>

{{! /multiexcerpt}}
