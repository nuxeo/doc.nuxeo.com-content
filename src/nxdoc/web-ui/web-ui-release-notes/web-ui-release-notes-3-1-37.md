---
title: Version 3.1.37
description: Discover what's new in Web UI 3.1.37.
review:
  comment: ''
  date: '2026-10-27'
  status: ok
toc: true
labels:
tree_item_index: 964
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.37)

This release introduces instance-wide announcements, improves browsing, search, document handling, accessibility, and integration reliability, and strengthens platform security.

### User Experience Improvements

#### Improved Browsing and Display

- Document and search result lists no longer briefly display stale thumbnails or row content while scrolling.
- When no product name is configured, the browser tab title no longer ends with an extra hyphen.
- Labels and placeholders are now translated before they are first displayed, eliminating transient translation keys across the interface.
- Right-clicking a document title in **List View** now offers **Open Link in New Tab** and **Open Link in New Window** options.
- External links in PDF documents now open in a new tab instead of navigating away from the document view.
- Excess blank space and unnecessary scroll bars at the bottom of standard and custom tabs have been removed.

### Administration and Directory Management

#### Instance-Wide Announcements

- Administrators can now configure an optional header banner in the **Administration** panel to broadcast a message and, optionally, a link to all signed-in users.

### Search and Export Improvements

#### Improved Search Queue Navigation

- The Search queue now preserves the selected document when switching between **Filters** and **Queue**, opens an already selected item on the first click, and keeps the highlight synchronised with browser navigation, breadcrumbs, deep links, and child-document navigation. The main content area now consistently displays the highlighted item.

#### Improved Saved Searches and Results

- Showing or hiding columns is now saved correctly for folders whose names contain spaces or special characters.
- Reloaded saved searches now display selected vocabulary values as labels instead of internal IDs, for both single-valued and multi-valued directory fields.
- The unnecessary vertical scroll bar has been removed from the saved-search area.

### Document Management Improvements

- Dropping multiple files into a field configured to accept one file is now rejected with a clear message asking the user to drop a single file.

### Accessibility Improvements

This release improves keyboard operation and the information announced to screen reader users.

#### Improved Keyboard and Screen Reader Support

- The left navigation tree now announces whether its items are expanded or collapsed.
- On user details and profile pages, screen readers now announce the **Email** and **Company** values together with their field names.
- The Rich Text Editor link dialog is now fully operable with the keyboard, including its link editing controls and focus handling.
- The **Copy Link** button in the **Share Document** dialog box is now keyboard accessible, has a clear screen reader label, and announces when the link has been copied.
- Empty tables now announce one header row to screen readers instead of incorrectly reporting a second row.
- Text and background colour controls in the Rich Text Editor are now labelled and announced correctly to screen readers.
- Built-in layouts no longer expose an invalid widget role to assistive technologies. Existing custom layouts remain compatible and should adopt the supported widget markup.

### Storage and Integration Improvements

- When browser security prevents automatic copying in EasyShare, the interface now explains the limitation and selects the link so that it can be copied manually.

### Platform Reliability and Security

- Security updates have been implemented to address identified vulnerabilities and strengthen platform protection.

<br/>

{{! /multiexcerpt}}
