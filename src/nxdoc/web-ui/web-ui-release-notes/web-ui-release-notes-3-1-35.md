---
title: Version 3.1.35
description: Discover what's new in Web UI 3.1.35.
review:
  comment: ''
  date: '2026-09-21'
  status: ok
toc: true
labels:
tree_item_index: 966
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.35)

This release improves document sharing and sign-in, makes document import and comparison more reliable, delivers a broad set of accessibility improvements, and strengthens platform security.

### User Experience Improvements

#### Improved Document Sharing and Sign-In

- Document permalinks now use a standards-compliant query-parameter URL without the hashbang prefix, so a shared link survives single sign-on redirects and opens the document directly.
- Where anonymous authentication is configured, a user, who opens a permalink to a document with restricted read permission, is now taken to the sign-in page with the original link preserved instead of seeing a permission error and having to sign out and navigate again.

#### Improved Listings and Selection

- Multi-value directory suggestion dropdowns now indent hierarchical entries so that the child values line up under their parent.
- Data table listings can now be configured for single selection — setting multiple selection to off now takes effect as expected.
- Restored the alignment of the **Sort by** control in the **Search Results** header with the sort-order toggle.

### Document Management Improvements

- Note documents now correctly render complex HTML content, including tables, in the Rich Text Editor.
- Importing documents with metadata now includes every entry in the result.
- When an import of ten or more files partially fails, only the files that actually failed remain in the import list.
- Comparing two documents now produces the correct result for properties holding ten or more values.
- Template listings are sorted correctly when template names contain non-ASCII characters.

### Accessibility Improvements

This release continues the accessibility programme with improvements for keyboard, screen reader, and low-vision users.

#### Improved Labelling and Error Reporting

- Tags and comments input fields now have visible labels that are programmatically associated with their controls, meeting WCAG 2.0 criterion 3.3.2 (Labels or Instructions).
- Required fields that are left empty are now reported with inline text messages and a form-level error summary rather than colour alone, and the controls report their required and invalid state to assistive technologies, meeting WCAG 2.0 criteria 1.4.1 (Use of Color) and 3.3.3 (Error Suggestion).

#### Improved Text Spacing

- Tags, form field labels on the **Create** and **Import** tabs, **Document History** filters, and the document metadata layout now support adjustable text spacing without truncation or overlap, meeting WCAG 2.1 AA criterion 1.4.12 (Text Spacing).

#### Improved Keyboard Navigation and Focus

- Keyboard navigation and focus ring visibility in **Search Filters** are now consistent, giving keyboard users a clearer indication of where they are.
- Images inserted in the Rich Text Editor can now be selected and managed with the keyboard.
- Tooltips now meet WCAG 2.1 AA criterion 1.4.13 (Content on Hover or Focus), so content triggered by hover or focus can be dismissed and hovered over without disappearing unexpectedly.
- The image viewer toolbar now includes pan controls, so the image can be moved without a click-and-drag gesture, meeting WCAG 2.2 AA criterion 2.5.7 (Dragging Movements).
- The **Previous** and **Next** controls in the document import dialog remain visible and correctly positioned when the browser is zoomed in.

#### Improved Screen Reader Support

- The left navigation menu now announces whether its sections are expanded or collapsed, covering the navigation drawer, the collapsed navigation bar, and the browse tree.
- Toast messages, such as the notification that a CSV export is ready, are now announced to screen readers.
- Alternative text for functional images has been refined so that the screen readers describe the action each image performs.
- Charts and other data visualisations are now labelled for assistive technologies, so that the screen reader users are no longer given only a heading and an unlabelled graphic.

### Platform Reliability and Security

- Third-party JavaScript files loaded by add-ons or customisations are no longer blocked by a cross-origin (CORS) error and load normally again.
- Web UI no longer floods the server log with repeated "user does not exist" warnings for internal accounts, keeping the log readable.
- Every change to Web UI is now checked automatically by dependency review and static code analysis before it is merged.
- Security updates have been implemented to address identified vulnerabilities and strengthen platform protection.

<br/>

{{! /multiexcerpt}}
