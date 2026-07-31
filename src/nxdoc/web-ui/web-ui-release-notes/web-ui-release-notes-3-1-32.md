---
title: Version 3.1.32
description: Discover what's new in Web UI 3.1.32.
review:
  comment: ''
  date: '2026-07-03'
  status: ok
toc: true
labels:
tree_item_index: 969
hidden: false
---


{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.32)

**Enhancements**
- ***Resizable Navigation Panels:***
    - Users can now drag and resize the secondary navigation panel across Browse, Collections, Favorites, and other navigation areas, as well as the document Information panel. This provides greater flexibility to adjust screen space and work more comfortably with content.
- ***Saved View Preferences:***
    - Filters and sort settings in content views are now automatically remembered. Your preferred view configuration is preserved across sessions, helping you work more efficiently.
- ***Improved Vocabulary Management:***
    - Vocabulary management tables now include dropdown filters, making it easier to find and manage vocabulary entries.
- ***Easier Dialog Navigation:***
    - Create and Edit dialogs can now be closed using the Esc key, providing a quicker and more intuitive user experience.
- ***Better Collections Experience:***
    - Collection names and content lists now make full use of the available space when the navigation panel is expanded. Longer names are displayed more effectively and will show an ellipsis when necessary.

**Bug Fixes**
- ***Read-Only Vocabulary Protection:***
    - Action buttons are now correctly disabled for read-only vocabulary types, preventing unintended changes.
- ***Saved Search Improvements:***
    - Fixed an issue where saved searches did not properly clear Boolean values in certain filter fields. Search filters now reset correctly, ensuring more accurate search results.
- ***Favorites Empty-State Message:***
    - Fixed an issue where the Favorites list did not display an empty-state message when no favourites were available. Users now receive clear feedback when the list is empty.
- ***Activity Feed Display Fix:***
    - Resolved a layout issue in Folder Details where long usernames could cause text alignment problems. Activity entries now display consistently and are easier to read.
- ***Workflow Diagram Display:***
    - Fixed an issue where workflow transition lines could appear in the incorrect position when viewing workflow graphs. Workflow diagrams now render correctly.
- ***Data Accuracy Improvement:***
    - Resolved an issue where text values containing only numbers could be automatically converted to numeric values, removing leading zeros. Values are now preserved exactly as entered.
- ***Date and Modal Accessibility Fixes:***
    - Improved keyboard navigation within modal dialogs to ensure focus remains inside the active dialog. This provides a more accessible and consistent user experience.
- ***Direct Application Stability:***
    - Resolved compatibility issues with newer Node.js versions, ensuring more stable application behaviour and preventing runtime errors.

**Accessibility Improvements**
- Improved keyboard accessibility in modal dialogs by keeping focus within the active window.
- Fixed an issue that could allow navigation to background content while a modal was open.
- Enhanced overall accessibility and usability for keyboard users.
- Date picker dropdowns can now be dismissed using the Esc key.
- Modal dialogs can now be closed using the Esc key, including Edit Layout dialogs.

**Performance, Reliability & Quality Improvements**
- Improved application quality and maintainability by moving to a modern unit testing framework that provides faster and more reliable test execution.
- Enhanced overall testing coverage to help ensure application stability and reliability.
- Updated application packaging to ensure browsers automatically load the latest application code after upgrades, reducing issues caused by outdated cached files.

<br/>

{{! /multiexcerpt}}
