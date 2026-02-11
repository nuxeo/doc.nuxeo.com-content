---
title: 'February 2026'
description: Release notes for Nuxeo Studio released in February 2026.
tree_item_index: 950
review:
  comment: ''
  date: '2026-02-10'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-02'}}

##  New Features

### Comprehensive Document Browser for JSF Deprecation
Implemented full document browsing, NXQL search, and edit capabilities in Web UI to enable complete JSF deprecation.

**What Changed:**
Added document browser with pagination, NXQL query builder, advanced filtering (CLID/client/region/type), and view/edit layouts for all critical document types.

**Impact:**
Administrators can perform all troubleshooting workflows without JSF while power users execute complex NXQL searches.

### Secure User Password Encryption Implementation
Centralized AES-GCM encryption for all password handling with zero plain-text storage, logging, or transmission.

**What Changed:**
Implemented client-side AES-GCM encryption for transmission, secure key management, and centralized encryption/decryption logic across registration/reset/validation flows.

**Impact:**
Achieves compliance-grade security without custom workarounds, protecting user credentials and reducing security audit risks across the platform.
 
{{! /multiexcerpt}}
