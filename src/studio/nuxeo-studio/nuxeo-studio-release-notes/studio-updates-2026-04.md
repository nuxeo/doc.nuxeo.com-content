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

##  New Features

### Studio Project Provisioning Restored in Account Management
Studio project creation from Account Management works end‑to‑end again.

**What Changed:**
Fixed the missing Service dropdown data source in Account Management’s “Create Studio Project” flow, removing a hard UI blocker and aligning behavior with Connect/Studio Admin.

**Impact:**
Users can create Studio projects directly in Account Management with correct service selection—no workarounds or switching to other admin UIs.

### More Reliable Automation Chains with Document.SetProperty
Improves correctness and stability for automation built in Studio.

**What Changed:**
Fixed the Document.SetProperty registry contract so the operation correctly accepts and produces document(s), preventing runtime errors caused by mismatched operation metadata.

**Impact:**
Users can use Document.SetProperty safely with single or multiple documents, avoiding confusing runtime failures.

### OpenSearch Compatibility for LTS 2025 (Generated Mappings)
Generated projects are better aligned with LTS 2025 OpenSearch requirements.

**What Changed:**
Updated generated “append mapping” contributions to support LTS 2025 OpenSearch changes, avoiding broken/legacy Elasticsearch extension points in generated projects.

**Impact:**
Upgrades and new project generation are smoother and less error‑prone for customers moving to or running on LTS 2025.

### Security Hardening: XSS Protections in Studio Designer
Reduces risk of script injection and improves overall Studio security posture.

**What Changed:**
Addressed multiple XSS injection vectors, including:
Preventing the visual editor from executing JavaScript embedded in layouts.
Hardening HTML comment end‑tag filtering in nuxeo-icon-picker.js to prevent bypass patterns like --!> and close CodeQL findings.

**Impact:**
Reduced risk of XSS-driven account compromise (including social-engineering/privilege escalation scenarios), and fewer security-scan findings with safer sanitization behavior in Studio UI components.

### Updated Generated Dashboards (nuxeo-home) for Supported Web UI Versions
Keeps generated Studio output aligned with supported Web UI versions.

**What Changed:**
Updated nuxeo-home generation so customers no longer receive outdated dashboard code (e.g., 10.10-era), reducing drift across 2023/2025 releases.

**Impact:**
Customers get up-to-date generated dashboards that match the intended Web UI version for their release, reducing regressions, UI drift, and rework.

### Accurate, Tenant-Safe Service Retrieval in GraphQL (servicesNew)
Improves correctness of service search and filtering behavior.

**What Changed:**
Fixed incorrect GraphQL filtering in servicesNew to ensure accurate, tenant-safe retrieval using orgId, name, or both.

**Impact:**
Users see only relevant services and can reliably search using combined filters, improving accuracy and usability.

### Studio Release Dialog Reliability with Non-Standard Version Tags
Restores stable release workflows in Studio.

**What Changed:**
Resolved release dialog failures triggered by non-standard version tags (e.g., 7.10).

**Impact:**
Users can create releases reliably without errors or workarounds, ensuring smoother end-to-end release workflows.
 
{{! /multiexcerpt}}
