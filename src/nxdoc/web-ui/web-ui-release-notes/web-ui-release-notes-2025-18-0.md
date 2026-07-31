---
title: Version 2025.18.0
description: Discover what's new in Web UI 2025.18.0.
review:
  comment: ''
  date: '2026-07-31'
  status: ok
toc: true
labels:
tree_item_index: 983
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2025 (Version 2025.18.0)

**User Experience Improvements**
- ***Improved document display after workflow completion:***
    - After completing a workflow task and refreshing the page, Web UI now correctly displays the associated document instead of the completed workflow task.
- ***Improved comment author display:***
    - Comments now display the author's full name instead of their username, providing a more user-friendly experience and aligning with the behaviour found in the legacy JSF UI.
- ***Improved avatar rendering:***
    - User avatars now display only the first and last name initials, preventing initials from overflowing the avatar circle for users with multi-part names.
- ***Improved Recent Documents reliability:***
    - Fixed an issue where corrupted local storage data could prevent navigation from the Recent Documents list. The application now automatically recovers from invalid stored values.
- ***Improved document list readability:***
    - Restored the expected width of the Document Title column in List View, improving readability when multiple metadata columns are displayed.
- ***Improved placeholder configuration for the Date picker:***
    - Administrators can now control the visibility of placeholders through a configurable nuxeo.conf property. The application also provides the correct validation message when an invalid format is used.

**Accessibility Improvements**
- ***Enhanced Grid View accessibility:***
    - Improved Grid View accessibility by eliminating redundant adjacent links that could cause duplicate announcements by screen readers during keyboard navigation.
- ***Improved screen reader support in the Permissions screen:***
    - Repeated buttons now expose unique accessible names, making them easier to identify and use with screen readers.
- ***Improved iframe accessibility in the Document Viewer:***
    - Added missing title attributes to inline frames (iframes) to improve screen reader compatibility and support WCAG compliance requirements.
- ***Improved pagination accessibility:***
    - Pagination controls now provide clearer context and navigation semantics for screen reader users, improving accessibility when navigating large result sets.

**Administration & Directory Management**
- ***Improved group membership management:***
    - Group member listings now identify users that no longer exist in the directory. These entries are clearly marked as not found and can be removed directly from the group.
- ***Improved user detail synchronization:***
    - When a user's attributes are updated, the Group view now immediately reflects the latest user information without requiring additional actions.

**Workflow & Document Management**
- ***Improved WOPI action availability:***
    - Fixed an issue that could cause the WOPI action button to disappear after a page refresh. The required metadata is now loaded correctly during the initial request, ensuring the action remains available when applicable.
- ***Improved collection and document navigation reliability:***
    - Resolved a spurious AbortError that could appear in browser consoles when document listings were cancelled due to rapid navigation, filtering, sorting, or refresh operations.

**Platform & Build Improvements**
- ***Migrated unit testing framework:***
    - Migrated the Elements Repository unit test framework from Karma to Web Test Runner, providing a more modern and maintainable testing platform.
- ***Improved build reproducibility and security:***
    - Locked JavaScript dependencies to verified versions and adopted deterministic dependency installation processes to improve supply-chain security and ensure consistent builds across environments.

<br/>

{{! /multiexcerpt}}
