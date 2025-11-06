---
title: 'September 2025'
description: Release notes for Nuxeo Studio released in September 2025.
tree_item_index: 930
review:
  comment: ''
  date: '2025-09-17'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2025-09'}}
## Bugfixes

### Studio Designer

#### Trial Registration : 500 Error During New Trial Registration
Resolved an issue where the new trial registration process failed with a 500 Internal Server Error, resulting in incomplete account setup and restricted trial functionality.

**What Changed:**
Fixed backend handling during trial registration to ensure proper account creation and complete project setup without triggering server errors.
Additionally, added a validation check to display a clear message when a project with the same name already exists, preventing duplicate project creation.

**Impact:**
New users can now successfully register, access their trial projects, and experience the full product functionality without encountering “account expired” alerts or duplicate project issues.


{{! /multiexcerpt}}
