---
title: Version 3.1.33
description: Discover what's new in Web UI 3.1.33.
review:
  comment: ''
  date: '2026-07-31'
  status: ok
toc: true
labels:
tree_item_index: 968
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.33)

**User Experience Improvements**
- ***Improved navigation after workflow task completion:***
    - After completing a workflow task and refreshing the page, Web UI now displays the associated document instead of the completed task.
- ***Improved comment author display:***
    - Comment authors now show their full name instead of their username, restoring parity with the legacy JSF UI.
- ***Improved avatar initials for multi-part names:***
    - User avatars now show only the first and last name initials, so initials no longer overflow the avatar circle for users with multi-part names.
- ***Improved Recent Documents resilience:***
    - Recent Documents now recovers automatically from a corrupted or empty local-storage value that previously caused an error and blocked navigation.
- ***Restored the Title column width in List View:***
    - Fixed a regression affecting the document Title column width in List View, improving readability when several metadata columns are shown.
- ***Improved Date picker placeholder and validation:***
    - Placeholder visibility for the Date picker can now be controlled through a nuxeo.conf property, and an invalid date format now shows the correct error message.

**Accessibility Improvements**
- ***Removed duplicate screen reader announcements in Grid View:***
    - Adjacent links in Grid View no longer cause screen readers to announce the same item twice during keyboard navigation.
- ***Unique accessible names for repeated buttons:***
    - Repeated buttons now expose unique names to screen readers, making them easier to tell apart.
- ***Added titles to inline frames:***
    - Inline frames (iframes) now include title attributes, improving screen reader support and WCAG compliance.
- ***Improved pagination accessibility:***
    - Pagination controls now provide clearer navigation semantics and context for screen reader users when results span multiple pages.

**Administration & Directory Management**
- ***Improved handling of removed users in group listings:***
    - Group member listings now surface users that no longer exist in the directory, flag them as not found, and allow them to be removed from the group.
- ***Refreshed user details in the Group view:***
    - Editing a user's attributes now immediately refreshes the user details shown in the Group view.

**Workflow & Document Management**
- ***Kept the WOPI action available after refresh:***
    - The WOPI action button no longer disappears after a page refresh; the data it depends on is now loaded during the initial request.
- ***Silenced a spurious AbortError on cancelled listings:***
    - A harmless AbortError no longer appears in the browser console when a document listing is cancelled by rapid navigation, filtering, sorting, or refreshing.

**Platform & Build Improvements**
- ***Migrated the unit test framework:***
    - The Elements unit test framework has moved from Karma to Web Test Runner, providing a more modern and maintainable testing platform.
- ***Improved build reproducibility and security:***
    - JavaScript dependencies are now locked to verified versions with deterministic CI installs, improving supply-chain security and keeping builds consistent across environments.

<br/>

{{! /multiexcerpt}}
