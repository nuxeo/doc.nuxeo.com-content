---
title: 'March 2026'
description: Release notes for Nuxeo Studio release in March 2026.
tree_item_index: 921
review:
  comment: ''
  date: '2026-03-06'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-03'}}

# March Major Release – v2026.0.1

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

# March Minor Release – v2026.1.0

### More Reliable NOS Studio Builds
Improved consistency and predictability of Studio builds when multiple artifacts share the same version.

**What Changed:**
NOS Studio now reliably selects the correct build artifact even when multiple files exist with the same version number. This prevents outdated components from being picked up accidentally in development or deployment pipelines.

**Impact:**
Developers and release engineers see fewer build discrepancies and “works on my machine” issues, with more stable, repeatable builds across environments.

### Better Lifecycle Control for Clients, Users, Groups, and Services
Easier management and cleanup of obsolete directory and service data.

**What Changed:**
Administrators can now delete clients, groups, users, services, and registration requests directly within NOS. This removes the need for manual interventions or custom scripts to clean up old or unused entries.

**Impact:**
Day‑to‑day account and service hygiene becomes simpler. Test accounts, unused groups, decommissioned clients, and stale registration requests can be removed cleanly, reducing clutter, confusion, and operational overhead.

### Stronger Alignment with Okta Password Policies
Reduced risk of inconsistent user states caused by password policy rejections.

**What Changed:**
User passwords are only saved in NOS after they successfully pass Okta’s password validation. If Okta rejects a password because it does not meet policy requirements, NOS will not store it.

**Impact:**
User accounts stay consistent between NOS and Okta, improving security, reducing edge‑case login or reset issues, and supporting cleaner audit trails around password handling.
 
{{! /multiexcerpt}}
