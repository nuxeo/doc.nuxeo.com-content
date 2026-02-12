---
title: Version 2025.11.0
description: Discover what's new in Web UI 2025.12.0.
review:
  comment: ''
  date: '2026-02-11'
  status: ok
toc: true
labels:
tree_item_index: 989
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2025 (Version 2025.12.0)


**Bug Fixes & Enhancements** 

- ***Normal reload for custom messages and templates:***
  - Internationalization (i18n) resources under /ui/i18n/ now bypass caching, ensuring the latest translations are always displayed on normal reload and doesnt require hard reload.
  - Updated Service Worker behavior to prevent caching of Polymer HTML imports which ensures newly added pages and custom slots to load correctly after browser reloads.

- ***Configurable Confirmation Dialogs for Standard Actions:***
  - Delete blob functionality now supports configurable confirmation messages, which can be enabled/disabled by admins.

- ***Automatic Production Catalog Generation:***
  - Releasing new WebUI versions now triggers automated production catalog generation, streamlining release workflows and reducing manual steps.

- ***Saved Search Optimization:***
  - Fixed an issue where the JSON payload used during save/rename operations was incorrectly modified as an array of strings.
  - Saved search operations now use the correct payload format and no longer fail silently.
  - Long saved search names were previously truncated in the Filters dropdown.
  - The full saved search title is now displayed, improving readability and usability.

- ***Editing Multi‑Valued Numeric Properties:***
  - Editing multi‑valued Number fields through the WebUI Edit layout previously caused save failures due to incorrect type handling.
  - Values are now correctly treated as numeric types, preventing ArrayStoreException errors and ensuring documents save successfully.



**Security Improvements** 

- ***Client‑Side Redirect/Phishing Mitigation:***
  - An issue causing unintended client‑side redirects in the embedded PDF.js component has been identified and fixed within the application.


**Other features/Improvements**

- ***Accessibility Pipeline Fixes:***
  - Resolved accessibility test pipeline failures by pinning the browser environment to a stable version.



<br/>

{{! /multiexcerpt}}
