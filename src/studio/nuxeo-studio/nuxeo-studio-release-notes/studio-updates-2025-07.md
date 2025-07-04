---
title: 'Jul 2025'
description: Release notes for Nuxeo Studio released in July 2025.
tree_item_index: 930
review:
  comment: ''
  date: '2025-07-04'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2025-07'}}
## Bugfixes

### Studio Designer

#### Header Compatibility for Custom Document Types
Resolved an issue affecting custom document types that extend Folder, where default view layouts defined via <nuxeo-page-provider> included HTTP headers with dots (e.g., X-NXfetch.document). These headers were incompatible with certain infrastructure setups, such as Azure Application Gateway, which enforce stricter RFC compliance and block headers containing dots.

**What Changed:**
Replaced dots (.) in HTTP header names with hyphens (-) to ensure compatibility.</br>
Example: `X-NXfetch.document` → `X-NXfetch-document`

**Impact:**
This change ensures that custom document types render correctly in environments with strict header validation, improving reliability and deployment flexibility.

### Studio Modeler

#### Regression Fix: Operation Signature Consistency Restored

**Summary:**
Following the recent update to target platform registries, a regression was introduced where operation signatures no longer followed the expected input → output pattern.

**What Happened:**
Some operations that previously returned documents were incorrectly returning only a single document.</br>
This inconsistency broke expected behavior in workflows relying on multi-document outputs.

**Fix:**
Restored the correct signature pattern for affected operations to ensure consistent input → output behavior.</br>

**Impact:**
This fix ensures that operations behave as expected in automation chains and custom logic, particularly where multiple document outputs are required.

{{! /multiexcerpt}}
