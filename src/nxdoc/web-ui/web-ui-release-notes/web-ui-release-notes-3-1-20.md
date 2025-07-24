---
title: Version 3.1.20
description: Discover what's new in Web UI 3.1.20.
review:
  comment: ''
  date: '2025-07-23'
  status: ok
toc: true
labels:
tree_item_index: 981
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.20)

**Node.js 22 Upgrade Enhancements for functional tests** - 

- Migrated from CommonJS to ES Modules (ESM): Replaced all require() statements with import syntax to align with the modern JavaScript module system supported in Node.js 22.

- Explicit .js Extensions in Imports: Updated all internal import statements to include the .js file extension, as required in ESM environments for proper module resolution.

- Dual Compatibility with Node.js 18 and 22: Ensured all functional tests remain compatible with both Node.js 18 and Node.js 22 to support teams in transition while preserving stability.

- Please refer to the [upgrade notes]({{page page='web-ui-upgrade-notes'}}) for detailed information.

**Security and vulnerability fixes** –

- Replaced @polymer/marked-element with a custom Markdown rendering wrapper to enhance security and eliminate the vulnerability associated with the marked package.

- Clarified "inflight" vulnerability as a false positive — the affected dependency is only used in development and testing scripts and does not impact the core functionality of Web UI.

- Removed dependency of commons-lang due to a security vulnerability

- Replaced deprecated ::set-output command with the new $GITHUB_OUTPUT method to ensure compatibility and security in Github Actions.

### Other Noteworthy Changes

- Reordered the loading of addons during WebUI initialization for better optimization.

- Fixed Checkbox state now properly clears on deselection in list view to ensure accurate accessibility feedback.

- Local permissions in user profile now refresh automatically when revisiting the page—no more hard refresh needed to get the latest updates.
<br/>

{{! /multiexcerpt}}