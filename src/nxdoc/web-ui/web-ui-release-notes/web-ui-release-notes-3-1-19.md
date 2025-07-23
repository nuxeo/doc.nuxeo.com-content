---
title: Version 3.1.19
description: Discover what's new in Web UI 3.1.19.
review:
  comment: ''
  date: '2025-06-09'
  status: ok
toc: true
labels:
tree_item_index: 982
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.19)
**Accessibility enhancements** -

- The main navigation drawer list and its items are now highly accessible via keyboard navigation.

- Color contrast improvements on WebUI elements as per WCAG standards have been applied to headers, instructions, and actionable components by modifying opacity and color. Minor updates are planned for the next release.
  - Regular text: Contrast ratio of 4.5:1
  - Large-Scale Text: Contrast ratio of 3:1
  -  User Interface Components: Contrast ratio of 3:1

- Tables are now identified for screen readers. All tables in the Nuxeo Web UI now have single indicators to identify each table, improving intermediate and advanced screen reader proficiency. This means that screen readers will be able to identify tables every time they access them.

- The “Details" accordion under "View" tab, is now accessible via keyboard navigation and screen readers.

- Fixed A11y test failures in GitHub Actions to ensure ongoing compliance with accessibility standards.

  **Open Issues**
    - The date picker overlay presents accessibility issues for tab navigation and screen readers, which  are currently being addressed.
    - Keyboard navigation has been improved for certain sections of the Recently Viewed menu. However, the logical sequence is still unclear. This issue is being addressed.
    - The Create button's keyboard navigation is not logical and will be improved.
    - Currently, the keyboard navigation to reach the "Create" button is neither logical nor intuitive and will be improved.
    - The color contrast of the sort arrow icons in certain tables is incorrect and will be corrected.
    - There is still work to be done to standardize all the tables available in the application.

- Three official accessibility audits were conducted to determine the level of accessibility of WebUI for 2025. More updates regarding accessibility will be available in future releases.
- The audits were conducted in Windows and macOS.
- Primary browsers supported:
    - VoiceOver + Chrome
    - NVDA + Chrome
- Questions? accessibility@hyland.com


**Security and vulnerability fixes** –

- Fixed Lodash vulnerability flagged by Veracode by upgrading Lodash, Workbox CLI, and Service Worker to secure, compatible versions.

- Fixed tar-fs vulnerability flagged by Veracode by overriding ws and tar-fs to secure versions.

- Fixed Braces vulnerability flagged by Veracode by Bumping gulp to version 5.0.0

- Upgraded path-to-regexp in @nuxeo/page.js, made required code adjustments, published the new version, and integrated it into WebUI to mitigate the vulnerability.

### Other Noteworthy Changes

- Fixed nuxeo-dropzone to support multiple file uploads without overwriting previous files.<br/>

{{! /multiexcerpt}}