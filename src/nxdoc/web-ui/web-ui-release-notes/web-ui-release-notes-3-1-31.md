---
title: Version 3.1.31
description: Discover what's new in Web UI 3.1.31.
review:
  comment: ''
  date: '2026-06-05'
  status: ok
toc: true
labels:
tree_item_index: 970
hidden: true
---


{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.31)

**Enhancements**

- ***Improved vocabulary visibility:***
    - Vocabulary labels are now fully visible and no longer truncated, making it easier to read and manage entries.
- ***Smoother filtering experience:***
    - Quick filters now respond correctly to a single click, improving usability and reducing friction when refining results.
- ***Improved Drive integration experience:***
    - When Nuxeo Drive is not installed, attempting actions such as Open, Edit, Upload, or Download now displays a helpful installation prompt with direct download links.
- ***Improved localisation for French users on Date picker:***
    - Date placeholders now correctly display in the jj/mm/aaaa format, ensuring a more consistent and localised experience.

**Bug Fixes**
- ***Vocabulary Management reliability fix:***
    - Fixed an issue where vocabulary entries with keys starting with @ could not be handled correctly. These entries can now be created and managed without errors.
- ***Task visibility issue resolved:***
    - Fixed an issue where tasks from other users could appear under slow network conditions. Tasks are now correctly filtered and displayed per user.
- ***Direct Transfer reliability fix:***
    - * Resolved an issue where the Direct Transfer Web UI icon did not work for targets containing spaces by using an encoded and compressed URL. This fix only works with Nuxeo Drive 7.0.0 and above and is not supported on older versions.
- ***Date picker stability improvement:***
    - Fixed an issue where the calendar could close unexpectedly when selecting dates with a minimum date set.

**Security & Quality Improvements**
- Strengthened protection against potential cross-site scripting (XSS) vulnerabilities by improving DOM handling.
- Improved protection against potential request forgery vulnerabilities in client-side requests.
- Resolved known dependency vulnerabilities to enhance overall application security.
- Improved CI/CD security by addressing potential script injection risks and enforcing least-privilege permissions.
- Strengthened package installation security to reduce supply chain risks.
- Updated APIs to use server-generated UUIDs instead of exposing names in endpoints, improving data protection.

**Engineering & Reliability Improvements**
- Increased unit test coverage across core components, improving reliability and stability.
- Enhanced testing using AI-assisted approaches for broader validation.
- Integrated SonarQube Cloud for automated code quality and test coverage monitoring.
- Improved dependency management to ensure consistent and secure builds.
- Updated development dependencies (including ESLint) for better maintainability.



<br/>


{{! /multiexcerpt}}
