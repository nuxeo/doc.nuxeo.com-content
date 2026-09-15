---
title: Version 25.2.1
description: Discover what's new in Admin Console 25.2.1.
review:
  comment: ''
  date: '2026-09-15'
  status: ok
toc: true
labels:
tree_item_index: 995'

hidden: true
---

{{{multiexcerpt 'matching-notes' page='admin-console-release-notes'}}}

{{! multiexcerpt name='admin-console-updates'}}

## What’s New in Admin Console for LTS 2025 (Version 25.2.1)

This release adds a new Bundles management page and support for custom context paths, along with security and quality improvements.

### Enhancements

#### Bundles Management Page

A new Bundles page is now available in the Admin Console. This page lets administrators view the runtime distribution and all deployed bundles in one place, including bundle names, versions, and revisions. It also provides search and pagination capabilities to make navigation easier.

Startup warnings and errors are displayed directly within the page, helping administrators identify and troubleshoot issues more quickly.

This feature restores bundle visibility that was previously available in the legacy JSF-based administration interface.

#### Support for Custom Context Paths

The Admin Console now supports deployments configured with a custom context path. This enhancement allows administrators to access and use the Admin Console in environments where the Nuxeo application is deployed under a non-default URL path, providing greater flexibility for customer-specific deployment configurations.

### Maintenance

#### Security and Quality Improvements

- Addressed known dependency vulnerabilities to improve application security.
- Added automated code quality validation to help identify issues earlier in the development process.
- Strengthened quality controls and security reviews to support a more reliable and maintainable platform.

{{! /multiexcerpt}}
