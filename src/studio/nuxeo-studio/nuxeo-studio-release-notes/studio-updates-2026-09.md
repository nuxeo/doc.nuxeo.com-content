---
title: 'September 2026'
description: Release notes for Nuxeo Studio release in September 2026.
tree_item_index: 916
review:
  comment: ''
  date: '2026-09-23'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-09'}}

## Improvements

### Marketplace Search Results Now Ranked by Relevance
Marketplace search now prioritizes exact package matches, putting official and public packages ahead of private ones, so you find what you need faster.

**What Changed**
Search results were returning metadata matches alongside exact package name matches without clear prioritization. The search algorithm now ranks exact matches first, surfaces public packages more prominently than private ones, and filters out low-value metadata hits that cluttered results.

**Impact:**
You can discover and install the right packages more quickly. Official packages are easier to spot, and search results feel more trustworthy because the most relevant matches appear first.

### History and Audit Tabs Now Available in Connect
History and audit trail tabs have been migrated from the legacy JSF interface to Connect across supported pages, giving you visibility into changes and access logs directly in the modern interface.

**What Changed:**
Pages in Connect that previously lacked history and audit information now display these tabs, matching the same functionality available in JSF. Access controls remain in place, so admins, power users, and super organization admins see what they are authorized to view.

**Impact:**
You no longer need to switch between Connect and JSF to review change history or audit details. Administrative workflows are faster and more cohesive, reducing context switching when investigating account activity or tracking who made changes and when.

### Interactive API Documentation for New NOS Endpoints
New Nuxeo Online Services endpoints now include Swagger/OpenAPI documentation with authentication examples, sample requests, and error-code guidance.

**What Changed:**
New API endpoints are now documented in interactive Swagger/OpenAPI format, replacing static documentation. The interactive interface lets you explore request and response schemas, see required authentication, and test calls directly.

**Impact:**
Developers and administrators can understand and test new APIs more quickly without digging through separate documentation or making exploratory calls. Error codes are better explained, reducing debugging time.

## Bug fixes

### Predicate Editor Link Now Points to Correct Documentation
The documentation link in the Predicate Editor popup now directs you to the proper Search Mapping guidance instead of a generic page.

**What Changed:**
When opening the help link from the Predicate Editor, users were directed to general documentation instead of the specific Search Mapping page. The link target has been corrected.

**Impact:**
You reach the right guidance immediately when you need help with predicate configuration, eliminating frustration from landing on an unhelpful page.

### Offline Registration Page Now Works Correctly
Offline instance registration no longer fails with a content-loading error, allowing environments that depend on non-standard registration paths to function as expected.

**What Changed:**
The offline registration flow was throwing a content-loading error during the registration process. The underlying issue has been fixed so the page loads and completes registration without errors.

**Impact:**
Organizations using offline registration can now complete instance registration without workarounds or manual intervention.

### Studio Designer Code Generation for Collection Selection Actions Fixed
Studio Designer now generates code against selection instead of document for addToCollectionSelectionAction, enabling correct use of selection-based expressions.

**What Changed:**
The code generation for collection selection actions was incorrectly targeting the document object. The generator now correctly targets selection, aligning with the intended API and supporting proper selection-based workflows.

**Impact:**
Collection selection actions work as expected without manual code edits. Studio Designer output is reliable and requires no post-generation fixes.

## Security improvements

### Enhanced Privacy for Pendo Analytics Integration
Client identifiers are now encrypted before being sent to Pendo, and customer name synchronization has been moved to a separate asynchronous integration, reducing the exposure of raw identifiers.

**What Changed:**
The Pendo integration previously sent raw client IDs in each analytics request. Client identifiers are now encrypted before transmission, and customer name data is synchronized separately through a decoupled integration path.

**Impact:**
Your customer and client identity data is better protected during analytics transmission. The integration is more resilient to delays and avoids blocking user interactions while syncing metadata.

{{! /multiexcerpt}}
