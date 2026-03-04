---
title: Nuxeo Aspera 2023.7.16
description: Release notes for Nuxeo Aspera Connector 2023.7.16
tree_item_index: 790
review:
  comment: ''
  date: '2026-03-02'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-aspera-connector-2023-7-16'}}

## What's New in Aspera for LTS 2023 (Version 2023.7.16)

This release includes a bug fix, vulnerability fixes and some technical enhancements.

## Released Changes

### Bug Fixes

#### Edit Screen Link Behavior

Improved the link behavior for the **Location** field in the Aspera Transfer Document Edit view. Clicking the suggested document now opens it cleanly in a new browser tab without interrupting the edit session.

#### Modal Dialog Behavior in Upload Page

Enhanced user feedback when the IBM Aspera Client selection window is already open. Instead of failing silently, users now see a clear message: **"Modal dialog already opened."**

### Security Improvements

#### Code Scanning and Dependency Security

* Addressed multiple security vulnerabilities reported by GitHub Code Scanning in the `nuxeo-aspera-connector`, including a fix for an implicit narrowing conversion vulnerability.

* Resolved a critical Prototype Pollution vulnerability in the `handlebars` dependency for `nuxeo-aspera-web` by upgrading to a secure version.

### Functional Enhancements

#### Transfer Action Synchronization

The Aspera connector now fully supports **pause, resume, and remove** actions initiated from IBM Aspera Client Connect.
* Dashboard statuses in Nuxeo remain in sync.
* Delete is automatically disabled for in‑progress transfers to prevent inconsistent states.

### Quality and Maintainability Improvements

#### Automated Code Coverage and SonarCloud

* Added automated code coverage reporting and SonarCloud integration for both backend and frontend of the Aspera connector on the `lts‑2025` branch, improving test visibility and code quality.

* Extended code coverage support to the `lts‑2023` branch for consistent quality metrics across supported versions.

{{! /multiexcerpt}}
