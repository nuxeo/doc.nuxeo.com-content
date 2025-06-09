---
title: Version 3.0.43
description: Discover what's new in Web UI 3.0.43.
review:
  comment: ''
  date: '2025-06-09'
  status: ok
toc: true
labels:
tree_item_index: 962
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2021 (Version 3.0.43)

Accessibility enhancements -

- The main navigation drawer list and its items are now fully accessible via keyboard navigation.


- Fixed A11y test failures in GitHub Actions to ensure ongoing compliance with accessibility standards.


- Improved color contrast of WebUI elements as per WCGA standards by modifying opacity and color.


- Details accordion is now accessible via keyboard navigation.


Security and vulnerability fixes –


- Fixed Lodash vulnerability flagged by Veracode by upgrading Lodash, Workbox CLI, and Service Worker to secure, compatible versions.


- Fixed tar-fs vulnerability flagged by Veracode by overriding ws and tar-fs to secure versions.

- Fixed Braces vulnerability flagged by Veracode by Bumping gulp to version 5.0.0


- Upgraded path-to-regexp in @nuxeo/page.js, made required code adjustments, published the new version, and integrated it into WebUI to mitigate the vulnerability.



### Other Noteworthy Changes

- Grant the necessary permissions to the Promote Release pipeline to enable automated pushes.<br/>


{{! /multiexcerpt}}