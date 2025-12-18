---
title: Version 3.1.25
description: Discover what's new in Web UI 3.1.25.
review:
  comment: ''
  date: '2025-12-15'
  status: ok
toc: true
labels:
tree_item_index: 976
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.25)

**Security Improvements** 

- ***Prototype Pollution Fix:***
Addressed risks in deep-merge logic by blocking unsafe keys (__proto__, constructor) and ensuring only own properties are merged, preventing potential XSS or logic-tampering attacks.

- ***GitHub Actions Permissions:***
Default permissions tightened to read-only, replacing previous read-write defaults. Write access is now restricted to necessary scopes only.

- ***jsondiffpatch Vulnerability:***
Resolved XSS vulnerability in jsondiffpatch (via HtmlFormatter) by upgrading from v0.3.11 → v0.7.3 and hardening HTML formatting to prevent script injection.

- ***Select2 XSS Fix:***
Patched vulnerability in Select2 ≤4.0.5 where HTML templates with Ajax-loaded data could allow script injection. Updated Web UI logic now prevents unsafe HTML rendering.


**Bug Fixes & Upgrades** 

- ***Dashboard Layout Consistency:***
Implemented uniform layout recalculations across dashboard and panels, eliminating extra scrollbars, spacing gaps, and inconsistent component sizing.

- ***Nuxeo Spreadsheet Compatibility:***
Fixed breaking changes after upgrading Select2 from 3.x to 4.x by updating wrapper classes and replacing deprecated APIs for full compatibility.

- ***PDF.js Upgrade:***
Updated to version 5.4, enabling better handling of complex PDFs and introducing new features.

- ***Metadata Enhancement:***
The “Publisher” and “Publish date” fields now accurately reflect the actual publishing of the document, ensuring better clarity and consistency in document lifecycle tracking.

<br/>

{{! /multiexcerpt}}
