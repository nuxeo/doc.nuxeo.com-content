---
title: Version 3.1.22
description: Discover what's new in Web UI 3.1.22.
review:
  comment: ''
  date: '2025-09-21'
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

- Datepicker Widget: The overall functionality of the datepicker using keyboard and screen readers is accessible.

- Tab Panel navigation is consistent for keyboard navigation.

- The ‘Search’ button is keyboard accessible, focusable and able to be closed by using ESC key.

- For Grid View: The radio button options using keyboard and screen reader is accessible.

- Viewer Images: Alternative text for stand-alone icon images have been optimized for screen readers.

- Viewer Comments: ‘Reply’ button is keyboard accessible.

- Selection Toolbar: “Display selection”. Once the "Display Selection" modal is available and then closed, the focus goes back to the trigger, making it possible for users to continue navigating with the keyboard.

- Search: 'Reset' color state contrast is sufficient. 

- Search: “No Containers” “Most Recent” “Validated” color contrast is sufficient. 

- Skip to Main Content functionality added to improve keyboard and screen reader navigation.

- Selection Toolbar: Once the toolbar is available and the options “Display Selection” and “Clear” the following shortcut information is visually available: Windows: Ctrl + .. After proceeding with the shortcuts and by pressing the tab the focus goes back to the trigger, making it possible for users to continue navigating with the keyboard.

- Main navigation menu and menu-tree are highly keyboard accessible, the navigation is logical and meaningful. 

- Grid / Table and List Views: Users must be able to navigate between items using the Left/Up Arrow (previous item) and Right/Down Arrow (next item) keys.

- Search Results: For multi-select values, the user needs to press Shift+Tab to move the focus backwards. The browser will then naturally move the focus there. By pressing the Backspace or Delete key, the value will be removed.

- Landmarks available for screen reader navigation.

- Viewer Comments: The following icon (x) / (✓) labels have been optimized for better comprehension screen readers.

- Create: Error messages optimized for mandatory fields.

**Known Accessibility Issues:**

- Tab Panel navigation functionality slightly varies between sections. There is a defect regarding the semantics of the tab panel that is specifically impacting screen reader users. 

- Selection Toolbar: “Display selection”. The color used for the contrast is insufficient. Action item internally addressed for upcoming release.

- Selection Toolbar: The shortcut information is visually available: Windows: Ctrl + . but is not properly announced to screen reader users. Action item internally to be addressed for upcoming release.

- Grid / Table and List Views: Some functionalities are not announced for screen readers.  Action item internally to be addressed for upcoming release.

- Heading structure for screen readers.

**Coming up next** 

- Optimize the autocomplete functionality of the dropdown menus on the Search Filters section.

- Optimize the descriptions of search results for screen reader users.

- Optimize the read results from different views for the Screen readers.

- Viewer - Image and Video Toolbar: Include proper labels on the toolbar buttons to improve comprehension for screen reader users.

- Viewer: Optimize inline frames for screen readers.

- Improve off-screen button texts for screen reader users.

- Provide accessible alternative text for graphs information.

- Optimize pagination for keyboard users.

**Evaluation Methods Used** 

Evaluation of the product involved a combination of automated, manual, and functional testing against the applicable success criteria within the Web Content Accessibility Guidelines (WCAG) 2.2 Conformance Level A and AA, RGAA 4.1.2, and EN 301 549. The Accessibility Specialists are in charge of defining the compliance plan, conducting the accessibility audits and revalidations accordingly. 

Below is a list of the assistive technologies (ATs) and primary browsers used.

- macOS + VoiceOver + Chrome

- Windows + NVDA + Chrome

- Questions? accessibility@hyland.com


**Security and vulnerability fixes** 

- Optimised Veracode scans for the Nuxeo WebUI project



### Other Noteworthy Changes

- A workaround to refresh the page between drag and drop actions has been introduced for the issue involving files being attached multiple times when using drag and drop in Web UI 3.1.19 or above.

- Implemented missing layouts for the PictureBook document type in the WebUI through Studio.

- Defined the display order of document types to enhance usability and selection ease by adding document types in the server nuxeo.conf file.

<br/>

{{! /multiexcerpt}}