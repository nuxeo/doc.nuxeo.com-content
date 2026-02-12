---
title: Version 3.1.27
description: Discover what's new in Web UI 3.1.27.
review:
  comment: ''
  date: '2026-02-11'
  status: ok
toc: true
labels:
tree_item_index: 974
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.27)


**Bug Fixes & Enhancements** 

- ***Normal reload for i18n Translation Labels:***
  - Internationalization (i18n) resources under /ui/i18n/ now bypass caching, ensuring the latest translations are always displayed on normal reload and doesnt require hard reload.
  - Users no longer need to perform a hard browser reload to see updated labels.

- ***Configurable Confirmation Dialogs for Standard Actions:***
  - All standard Nuxeo WebUI buttons now support configurable confirmation dialogs.
  - Admins can enable/disable dialogs and define custom confirmation messages.
  - Behavior previously limited to “Delete” now extends to lifecycle actions and document actions, improving consistency and user safety.

- ***Automatic Production Catalog Generation:***
  - Releasing new WebUI versions now triggers automated production catalog generation, streamlining release workflows and reducing manual steps.

- ***Correct Handling of JSON Payload for Saved Searches:***
  - Fixed an issue where the JSON payload used during save/rename operations was incorrectly modified as an array of strings.
  - Saved search operations now use the correct payload format and no longer fail silently.

- ***Saved Search Title Truncation:***
  - Long saved search names were previously truncated in the Filters dropdown.
  - The full saved search title is now displayed, improving readability and usability.

- ***Editing Multi‑Valued Numeric Properties:***
  - Editing multi‑valued Number fields through the WebUI Edit layout previously caused save failures due to incorrect type handling.
  - Values are now correctly treated as numeric types, preventing ArrayStoreException errors and ensuring documents save successfully.



**Security Improvements** 

- ***Client‑Side Redirect/Phishing Mitigation:***
  - Strengthened URL validation for file downloads.
  - Only trusted blob: and absolute http(s) URLs are allowed.
  - Redirects built from untrusted DOM input are now blocked to prevent phishing‑style attacks.


  **Other features/Improvements**

- ***Service Worker Caching Reliability:***
  - Updated Service Worker behavior to prevent caching of Polymer HTML imports.
  - Ensures newly added USER_MENU pages and custom slots load correctly after browser reloads.

- ***Accessibility Pipeline Fixes:***
  - Resolved accessibility test pipeline failures by pinning the browser environment to a stable version.



<br/>

{{! /multiexcerpt}}
