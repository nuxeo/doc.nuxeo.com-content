---
title: Version 3.1.24
description: Discover what's new in Web UI 3.1.24.
review:
  comment: ''
  date: '2025-11-25'
  status: ok
toc: true
labels:
tree_item_index: 977
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.24)

**Enhancements** 

 - ***Filterable Saved searches drop-down list***
Users can type in the search box to quickly narrow down the list and find the desired entry more efficiently.


**Security Enhancements** 

- ***Temporarily Disabled SauceLabs***
SauceLabs integration has been disabled to prevent unit test pipeline failures and ensure build stability.

- ***Resolved GitHub Code Scan Alert***
Fixed incomplete string escaping and improved input validation to enhance security and prevent injection risks.

- ***Updated Maven Repository URLs to HTTPS***
All Maven repository URLs now use HTTPS instead of HTTP, securing artifact downloads/uploads and mitigating potential MITM (Man-in-the-Middle) attacks.


**Bug Fixes & Improvements** 

- ***Comments & CSV Import Stability***
Addressed defects in comments and CSV import functional tests, improving reliability and accuracy.

- ***Crowdin Version Upgrade***
Updated Crowdin to v2.12.0 to resolve translation synchronization issues.

- ***Datepicker Widget Translations***
Fixed missing translations for the newly introduced Datepicker widget, including “Today” and “Cancel” buttons. Future improvements for date format placeholders are planned.

- ***Readonly Date Picker Behavior***
Corrected the readonly nuxeo-date-picker so its value cannot be changed and removed the clear (cross) icon for better UX consistency.

<br/>

{{! /multiexcerpt}}
