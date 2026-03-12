---
title: Version 3.1.28
description: Discover what's new in Web UI 3.1.28.
review:
  comment: ''
  date: '2026-03-12'
  status: ok
toc: true
labels:
tree_item_index: 973
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.28)


**Enhancements** 

- ***Resizable and reorderable data table columns:***
  - Users can now resize and rearrange table columns by dragging the column headers, making tables easier to personalize and work with.Support for saving table preferences is planned for a future release.



**Accessibility Improvements** 

- ***Better keyboard navigation and screen reader support on Global Search:***
  - Tabbing and arrow key navigation is now consistent on global search results, the close (cross) button is keyboard accessible, and screen readers announce only relevant information such as result titles and indexes.
    -***Improved focus handling:***
        Unnecessary keyboard focus on headings has been removed to better align with accessibility standards.


**Bug Fixes**

- ***Clearer feedback for unsupported file uploads:***
  - The dropzone now shows a proper error message when users try to upload files that are not accepted.

- ***PDF preview works with special characters in filenames:***
  - PDF files containing special characters (such as square brackets) now preview correctly in the Web UI.

- ***Directory fields reset correctly:***
  - Clearing directory-based fields now properly removes the displayed selection when reset.

- ***Improved file uploads in create, edit, and import screens:***
  - Multiple files uploaded via the dropzone are now correctly appended and displayed together before document creation.


**Performance, Security, and Reliability**

- ***Faster and more efficient CI builds:***
  - Build pipelines now use dependency caching and shared configurations to reduce build times and duplication.

- ***Improved CI security:***
  - GitHub workflows have been updated to use more secure dependency handling and safer pull request execution.

- ***Up-to-date dependencies and tooling:***
  - CI and security scanning workflows have been updated to the latest supported versions, ensuring continued reliability and compliance with long-term support requirements.

- ***More reliable Studio catalog generation:***
  - Catalog generation has been improved to consistently detect all required elements, reducing configuration errors in Studio Designer.



<br/>

{{! /multiexcerpt}}
