---
title: 'May 2026'
description: Release notes for Nuxeo Studio release in May 2026.
tree_item_index: 916
review:
  comment: ''
  date: '2026-05-14'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-05'}}

## Bug fixes

### LTS 2025 Operation Signatures Now Match Runtime in Studio Registry
Eliminates false automation-chain validation errors and reduces upgrade breakages for LTS 2025 migrations.

**What Changed:**
Corrected Studio registry operation metadata so that declared operation signatures match actual runtime definitions. This includes fixing diverging signature properties across 75 operations, ensuring Studio’s displayed Accepts/Produces information is accurate (for example, operations like `Document.Save`).

**Impact:**
Automation chains that previously appeared invalid (or failed unexpectedly) due to signature mismatches now validate and execute correctly without manual workarounds. This reduces silent chain breakages during LTS 2021 to LTS 2025 upgrades, improves developer/integrator trust in Studio as the source of truth, and lowers escalation/support load related to post-upgrade automation failures.

### Fix content validation error preventing changes to Studio projects
Restores the ability to save Studio changes for projects with HTML layouts that include JavaScript, removing a blocking validation regression.

**What Changed:**
Updated Studio Designer’s content validation behavior to prevent valid projects from failing save operations with a generic Content Validation Error when HTML layouts contain JavaScript (issue introduced in March 2026 release).

**Impact:**
Customers who were previously blocked from making any Studio Designer updates (and forced to switch to direct Git workflows) can now edit and save their projects normally again, reducing upgrade disruption and support escalations tied to unclear/overly-blocking validation failures.

### User details now load for OrgAdmins in Account Management
Fixes an indefinite loading state so OrgAdmins can view user information and manage permissions as expected.

**What Changed:**
Corrected Connect Account Management behavior where OrgAdmins could open a user page but user details never rendered (only loading icons indefinitely), even though the same pages loaded correctly for other roles (for example, Power User).

**Impact:**
OrgAdmins regain reliable access to user account details, enabling expected self-service administration tasks (including permission assignment) across affected customer organizations.

{{! /multiexcerpt}}
