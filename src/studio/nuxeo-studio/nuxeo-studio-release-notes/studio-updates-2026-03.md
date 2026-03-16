---
title: 'March 2026'
description: Release notes for Nuxeo Studio release version 2026.0.1 in March 2026.
tree_item_index: 921
review:
  comment: ''
  date: '2026-03-06'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-03'}}

##  New Features

### Self Service Trial Environment Creation (NOS Connect)
Self service trial creation has been enabled in NOS Connect, supporting faster onboarding for partners and prospects.

**What Changed:**
Authorized users can now directly create time bound trial environments from the Connect portal for partners, prospects, and other external stakeholders, with Studio and Base services provisioned by default, supporting faster demos, onboarding, and enablement. Trials are governed by role based access and automatic expiry, balancing faster adoption with cost and usage governance.

**Impact:**
Partners and other external parties can generate trials instantly for demos, evaluations, and training, reducing delays, operational overhead, and dependency on support teams.

### Real Time UI Updates for Service Assignment Changes
Improved responsiveness and clarity in account and service management workflows.

**What Changed:**
The UI now updates immediately after clicking Confirm when assigning or modifying services, removing the need for manual page refreshes.

**Impact:**
Administrators get instant confirmation that changes are applied, reducing confusion, duplicate actions, and support requests.

### Improved Visibility of Assigned Users for OrgAdmins
Resolved inconsistencies between assigned users and what OrgAdmins see in the UI.

**What Changed:**
OrgAdmins can now view all users assigned to their services, including Hyland and Nuxeo internal users, aligning UI behavior with backend permissions.

**Impact:**
More accurate service management, fewer access mismatches, and increased confidence in account administration.

##  Security & Stability Improvements

### Path Injection Vulnerability Fix
Strengthened platform security by addressing a path injection vulnerability in deserialization logic.

**What Changed:**
Enhanced validation and handling of workspace deserialization to prevent unauthorized path manipulation.

**Impact:**
Improves overall platform security posture and reduces exposure to potential exploitation risks.
 
{{! /multiexcerpt}}
