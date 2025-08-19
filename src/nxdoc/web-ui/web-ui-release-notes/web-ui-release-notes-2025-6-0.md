---
title: Version 2025.6.0
description: Discover what's new in Web UI 2025.6.0.
review:
  comment: ''
  date: '2025-08-18'
  status: ok
toc: true
labels:
tree_item_index: 995
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2025 (Version 2025.6.0)

**Accessibility enhancements** 

- Color contrast improvements on WebUI elements as per WCAG standards have been applied to headers, instructions, and actionable components by modifying opacity and color. Minor updates are planned for the next release.
  - Regular text: Contrast ratio of 4.5:1
  - Large-Scale Text: Contrast ratio of 3:1
  - User Interface Components: Contrast ratio of 3:1

- Primary browsers supported:
    - VoiceOver + Chrome
    - NVDA + Chrome
- Questions? accessibility@hyland.com

**Nuxeo Drive Direct Transfer Upload from Web UI**

- Added support for launching Nuxeo Drive Direct Transfer directly from Web UI to upload multiple documents without reopening Drive or reselecting the location.

**Security and vulnerability fixes** 

- Upgraded form-data transitive dependency to 4.0.4 to resolve security vulnerability.

### Other Noteworthy Changes

- Added a new column to display the user’s email address in `nuxeo-group-management` and `nuxeo-user-group-latest` elements. <br/>

- Fixed flicker issue that occurred while editing documents from the document actions bar.

<br/>

{{! /multiexcerpt}}