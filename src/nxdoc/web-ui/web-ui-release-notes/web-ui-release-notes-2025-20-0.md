---
title: Version 2025.20.0
description: Discover what's new in Web UI 2025.20.0.
review:
  comment: ''
  date: '2026-09-18'
  status: ok
toc: true
labels:
tree_item_index: 981
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2025 (Version 2025.20.0)

**User Experience Improvements**
- ***Standards-compliant document permalinks:***
    - Document permalinks and the share action now produce standard query-parameter URLs without the hashbang character, so links are reliable to share, bookmark and follow through a sign-in redirect.
- ***Improved sign-in for links to restricted documents:***
    - On instances configured for anonymous access, opening a link to a document the anonymous user cannot read now takes the user to the sign-in page and returns them to that document after they sign in, instead of showing a permission error that had to be cleared by signing out and navigating again.
- ***Improved selection behaviour in document listings:***
    - Multiple selection in document listings is now correctly enabled or disabled according to the configuration of the listing.

**Document Management Improvements**
- ***Improved reliability of document import:***
    - Importing files with metadata now returns every imported entry rather than an empty or partial result, and when an import of ten or more files partially fails, only the files that actually failed are left in the import queue.
- ***Corrected ordering in document comparison and template listings:***
    - Comparing a document with ten or more values in a multi-valued property now renders the differences in the correct order, and template listings sort correctly when template names contain non-ASCII characters.

**Accessibility Improvements**
- ***Clearer reporting of required fields:***
    - Required fields now report validation failures with a text message rather than colour alone, so a missing value can be identified without relying on colour.
- ***Support for adjustable text spacing:***
    - Tags, form field labels on the Create and Import tabs, Document History filters and the document metadata layout now support adjustable text spacing without truncation or overlap, meeting WCAG 2.1 AA criterion 1.4.12.
- ***Clearer alternative text for functional images:***
    - Functional images now carry alternative text that names the action they perform, so screen readers announce what the control does.
- ***Left navigation state announced to screen readers:***
    - The left navigation panel and browse tree toggles now report whether a section is expanded or collapsed.
- ***Tooltips that can be read without disappearing:***
    - Tooltip content shown on hover or focus can now be dismissed, hovered over and read without disappearing unexpectedly, meeting WCAG 2.1 AA criterion 1.4.13.
- ***Improved keyboard navigation in Search Filters:***
    - Focus behaviour is more consistent and the focus ring is clearly visible when moving through search filters with a keyboard.
- ***Accessible names for viewer toolbar buttons:***
    - Icon-only toolbar buttons in the image, PDF, Word and video viewers now show accessible labels on keyboard focus, so they can be identified without relying on mouse hover.
- ***Labels for tags and comments fields:***
    - The tags and comments input fields now have visible, programmatically associated labels.
- ***Improved screen reader support for data visualisations:***
    - Charts on the Repository Content, Search and Workflow tabs now expose their data to screen readers, which previously announced only the heading and an unlabelled graphic.
- ***Status messages announced to screen readers:***
    - Notification messages, such as confirmation that a CSV export is ready, are now announced so that assistive technology users receive the same feedback.
- ***Improved image handling in the Rich Text Editor:***
    - Images inserted into a Note can now be selected and managed using the keyboard.
- ***Import navigation at high zoom levels:***
    - The Previous and Next controls in the document import dialog now remain visible and correctly positioned when the browser is zoomed in.

**Platform Reliability and Security**
- ***Restored loading of third-party scripts:***
    - Restored the loading of external JavaScript resources referenced by add-ons and customisations, which could previously fail to load.
- ***Security updates:***
    - Security updates have been implemented to address identified vulnerabilities and strengthen platform protection.

<br/>

{{! /multiexcerpt}}
