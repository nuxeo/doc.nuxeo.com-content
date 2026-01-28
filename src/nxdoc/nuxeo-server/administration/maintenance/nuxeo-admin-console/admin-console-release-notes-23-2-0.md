---
title: Version 23.2.0
description: Discover what's new in Admin Console 23.2.0.
review:
  comment: ''
  date: '2026-01-21'
  status: ok
toc: true
labels:
tree_item_index: 996
hidden: true
---

{{{multiexcerpt 'matching-notes' page='admin-console-release-notes'}}}

{{! multiexcerpt name='admin-console-updates'}}

## What’s New in Admin Console for LTS 2023 (Version 23.2.0)

## Technical Upgrades & Framework Modernization

###  Angular Upgrade: Angular 16 to Angular 21

The Admin Console UI framework has been fully migrated from Angular 16 to Angular 21.
This upgrade includes dependency updates and fixes for all related breaking changes.

Key Improvements:

  - Stronger security posture, addressing 4 High‑Severity vulnerabilities

  - Better performance and build optimization

  - Access to modern Angular tooling and long‑term support

  - Increased maintainability and improved development workflow

### Migration from Karma/Jasmine to Vitest

Unit testing has been migrated from the legacy or old Karma + Jasmine framework to Vitest, a modern and natively supported testing framework for Angular. All existing tests have been updated for compatibility, and CI pipelines have been refreshed to align with the new tooling.

Benefits:

  - Faster test execution

  - More stable and modern testing infrastructure

  - Cleaner developer experience with reduced legacy tooling

  - Removal of outdated Karma/Jasmine configurations

## New Features & Enhancements

### New Configuration Details Section

A dedicated Configuration Details section has been added to the Nuxeo Admin Console.
This enhancement provides administrators with a centralized view of all configuration properties available for the current Nuxeo instance and environment.

Benefits:

  - Improved visibility and transparency across platform-level configuration settings

  - Easier troubleshooting and operational diagnostics

  - Eliminates the need for manual lookups or server-side access

### Improved Tab Navigation for Consumer Positions

The tabs under Streams Management have been reordered to ensure a more intuitive workflow.
The sequence now places Get Consumer Positions first, followed by Change Consumer Positions, aligning with typical user navigation patterns.

### Automatic Clearing of Search Input for Consumer Position Updates

The search field used to filter consumer position records now automatically resets after each `Get Consumer Position` or `Change Consumer Position` action. This enhancement ensures:

  - Search filters don't persist across operations

  - Results always display without stale search criteria

  - Improved user experience when performing multiple consumer position queries

## Bug Fixes

###  Correct Version Numbering for 2025 LTS Builds

Resolved an issue where major releases were incorrectly generating a minor version build for the LTS 2025 version.
Version generation now correctly aligns with the expected release pattern.

## Security & Dependency Management

###  Automated Dependency Monitoring via Dependabot

A new dependabot.yml configuration has been added to automate dependency version checks.
Dependabot now:

  - Monitors for outdated or vulnerable dependencies

  - Automatically opens pull requests for updates

  - Improves security posture and reduces maintenance overhead

{{! /multiexcerpt}}
