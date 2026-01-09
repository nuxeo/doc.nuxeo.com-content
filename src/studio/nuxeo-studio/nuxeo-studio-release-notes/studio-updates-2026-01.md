---
title: 'January 2026'
description: Release notes for Nuxeo Studio released in January 2026.
tree_item_index: 924
review:
  comment: ''
  date: '2026-01-08'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-01'}}

##  New Features

### Add Manual File Editing During Branch Merge Conflicts

Added the capability to manually edit files when conflicts occur during a branch merge in Studio. This matches native Git behavior and enables seamless merge resolution workflows.
**What Changed:**
Developers can now directly edit conflicting files within the Studio interface during merge operations, rather than being blocked by unresolved conflicts.
**Impact:**
Development teams can resolve merge conflicts more efficiently without leaving their workflow, reducing debugging time and enabling smoother collaboration across branches.


## Expose Deployed Studio Project Git SHA via REST API

Introduced a new REST endpoint that exposes the Git SHA of the currently deployed Studio project at runtime.
**What Changed:**
Added API endpoint that returns the exact Git commit hash of the deployed Studio project version.
**Impact:**
CI/CD pipelines can now track deployments accurately and verify which version is running in each environment, improving traceability and deployment confidence.

## Enable Version Selection for Application Definitions

Added the capability for customers to select specific versions of Application Definitions, with Marketplace packages now displayed in descending version order (latest first).
**What Changed:**
Application Definition loading now supports version selection, allowing users to choose from available versions rather than being limited to the most recent release. Additionally, fixed the Marketplace package listing to sort versions correctly with the newest versions appearing at the top.
**Impact:**
Customers gain flexibility to work with specific Application Definition versions that meet their requirements, while being able to quickly identify and access the latest package versions. This supports better version control, testing workflows, and reduces confusion during package selection.

## Bugfixes

## Fixed Release Process Across Different Branches

Resolved versioning issues that occurred when creating releases while working in different branches.
**What Changed:**
Fixed the release mechanism to properly handle version numbering across multiple branches, preventing duplicate version errors.
**Impact:**
Teams can now release from any branch reliably without encountering version conflicts, enabling more flexible development workflows and reducing deployment delays.

## Restored Manual Validation Button in Connect Dashboard

Fixed the missing validation button for registration requests in the Connect Dashboard interface.
**What Changed:**
Re-enabled the manual validation button that allows administrators to approve or process registration requests directly from the dashboard.
**Impact:**
Admins can now handle stuck or pending registration requests easily, eliminating workflow interruptions and improving user onboarding efficiency.


{{! /multiexcerpt}}
