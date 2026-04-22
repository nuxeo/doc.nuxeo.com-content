---
title: 'April 2026'
description: Release notes for Nuxeo Studio release in April 2026.
tree_item_index: 921
review:
  comment: ''
  date: '2026-04-14'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-04'}}

##  Enhancements / compatibility updates

### OpenSearch Compatibility for LTS 2025 (Generated Mappings)
Generated projects are better aligned with LTS 2025 OpenSearch requirements.

**What Changed:**
Updated generated “append mapping” contributions to support LTS 2025 OpenSearch changes, avoiding broken/legacy Elasticsearch extension points in generated projects.

**Impact:**
Upgrades and new project generation are smoother and less error‑prone for customers moving to or operating on LTS 2025.

### Updated Generated Dashboards (nuxeo-home) for Supported Web UI Versions
Keeps generated Studio output aligned with supported Web UI versions.

**What Changed:**
Updated nuxeo-home generation so customers no longer receive outdated dashboard code (for example, 10.10-era), reducing drift across 2023/2025 releases.

**Impact:**
Customers get up-to-date generated dashboards that match the intended Web UI version for their release, reducing regressions, UI drift, and rework.

## Bug fixes

### Studio Project Provisioning Restored in Account Management
Studio project creation from Account Management works end‑to‑end again.

**What Changed:**
Fixed the missing Service dropdown data source in Account Management’s “Create Studio Project” flow, removing a hard UI blocker and aligning behavior with Connect/Studio Admin.

**Impact:**
Users can create Studio projects directly in Account Management with correct service selection—no workarounds or switching to other admin UIs.

### More Reliable Automation Chains with Document.SetProperty
Improves correctness and stability for automation built in Studio.

**What Changed:**
Fixed the Document.SetProperty registry contract that enables the operation to correctly accepts and produces document(s), preventing runtime errors caused by mismatched operation metadata.

**Impact:**
Users can use Document.SetProperty safely with single or multiple documents, avoiding confusing runtime failures.

### Accurate, Tenant-Safe Service Retrieval in GraphQL (servicesNew)
Improves correctness of service search and filtering behavior.

**What Changed:**
Fixed incorrect GraphQL filtering in servicesNew to ensure accurate, tenant-safe retrieval using orgId, name, or both.

**Impact:**
Users see only relevant services and can reliably search using combined filters, improving accuracy and usability.

### Studio Release Dialog Reliability with Non-Standard Version Tags
Restores stable release workflows in Studio.

**What Changed:**
Resolved release dialog failures triggered by non-standard version tags (for example, 7.10).

**Impact:**
Users can create releases reliably without errors or workarounds, ensuring smoother end-to-end release workflows.

### Studio Button “Show Label” Now Behaves Correctly with Custom Elements
Prevents button labels from appearing when Studio designers explicitly choose to hide them.

**What Changed:**
Fixed how the show-label boolean attribute is generated when a button uses a custom bound element. When “show label” is turned off, Studio now omits the attribute instead of emitting show-label="false" or an empty value, aligning with Polymer/Web Components boolean semantics.

**Impact:**
Designers get predictable, standards-compliant behavior for custom buttons: toggling “show label” in Studio reliably hides or shows labels at runtime, reducing UI confusion and eliminating the need for HTML workarounds in deployed applications.

### Multi‑User Okta Email Mappings No Longer Block Connect User Assignment
Keeps Connect user onboarding and client assignment flowing even in complex Okta setups.

**What Changed:**
Updated Connect’s handling of scenarios where a single Okta account is mapped to multiple Connect users with the same email. Instead of failing with an error about duplicate email mappings, the system now safely updates all relevant Connect user records for that Okta identity during client assignment.

**Impact:**
Admins can complete email updates and assign users to clients without hard-stop errors, lowering operational friction and support escalations. Complex Okta/Connect configurations remain manageable, ensuring smoother onboarding and maintenance workflows for tenant and user management.

{{! /multiexcerpt}}
