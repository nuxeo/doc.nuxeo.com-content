---
title: Version 3.1.22
description: Discover what's new in Web UI 3.1.22.
review:
  comment: ''
  date: '2025-09-29'
  status: ok
toc: true
labels:
tree_item_index: 979
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.22)

**Accessibility enhancements** 

**Keyboard and Screen Reader Navigation:**

- Added a **"Skip to Main Content"** link to facilitate keyboard navigation.

- The main navigation menu and menu-tree are now highly keyboard accessible with a logical and meaningful tab order.

- Users can navigate between items in Grid, Table, and List Views using the Arrow keys.

- The **Datepicker Widget** is now fully keyboard and screen reader accessible.

- **Tab Panel navigation** is consistent for keyboard-only users.

- **'Reply' button** in Viewer Comments is now fully keyboard and screen reader accessible.

- The **'Search' button** is focusable and can be closed using the ESC key.

- In Search Results, **Shift+Tab** moves focus backward, and **Backspace/Delete** removes multi-select values.


**Screen Reader Optimization:**

- **Viewer Comments** icons (x) / (✓) have been optimized with descriptive labels.

- **Viewer Images** have been updated with accessible alternative text for stand-alone icons.

- **Landmarks** have been added to the page structure for easier navigation by screen reader users.

- **Error messages** for mandatory fields in the 'Create' dialog are now optimized for screen readers.


**Visual Enhancements:**

- The color contrast for the **'Reset' button** and text like **"No Containers," "Most Recent," and "Validated"** in the Search functionality has been improved to meet WCAG AA requirements.


**Interaction Enhancements:**

- Keyboard focus now returns to the triggering element after closing modals like "Display Selection," allowing for continuous keyboard navigation.

- Selection Toolbar shortcuts **(Windows: Ctrl + .)** are visually available to users.


**Known Accessibility Issues:**

- **Navigation and Semantics:**

- **Tab Panel navigation functionality** slightly varies between sections, and a semantic defect is specifically impacting screen reader users.

- The shortcut information for the **Selection Toolbar (Windows: Ctrl + .)** is not properly announced to screen reader users.

- **Visual Contrast:**

- The color contrast for the **"Display selection"** button in the **Selection Toolbar** is insufficient. This issue is an action item internally addressed for an upcoming release.

- **Screen Reader Announcements:**

- Some functionalities within the **Grid, Table, and List Views** are not being announced correctly for screen readers.

- **Heading Structure:**

- The heading structure requires optimization for screen readers to improve content comprehension and navigation.




**Coming up next**

- **Improve Autocomplete Functionality:** Optimize autocomplete for dropdown menus in the Search Filters section.

- **Enhance Search Results:** Optimize the descriptions of search results and how different views are read by screen readers.

- **Refine Toolbar Labels:** Include proper labels on Viewer's Image and Video Toolbar buttons.

- **Optimize Off-screen Content:** Improve off-screen button texts and optimize inline frames for screen readers.

- **Provide Accessible Graphs:** Add alternative text for graphs and other visual data.

- **Enhance Pagination:** Optimize the pagination functionality for keyboard users.


**Evaluation Methods Used**

Evaluation of the product involved a combination of automated, manual, and functional testing against the applicable success criteria within the Web Content Accessibility Guidelines (WCAG) 2.2 A/AA. Below is a list of the assistive technologies (ATs) and primary browsers used.Below is a list of the assistive technologies (ATs) and primary browsers used.

- macOS + VoiceOver + Chrome

- Windows + NVDA + Chrome


**Security and vulnerability fixes**

- Optimised Veracode scans for the Nuxeo WebUI project



### Other Noteworthy Changes

- A workaround to refresh the page between drag and drop actions has been introduced for the issue involving files being attached multiple times when using drag and drop in Web UI 3.1.19 or above.

- Implemented missing layouts for the PictureBook document type in the WebUI.

- Defined the display order of document types to enhance usability and selection ease by adding document types in the server nuxeo.conf file.

<br/>


{{! /multiexcerpt}}