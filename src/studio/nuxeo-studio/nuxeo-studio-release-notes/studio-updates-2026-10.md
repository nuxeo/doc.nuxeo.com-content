---
title: 'October 2026'
description: Release notes for Nuxeo Studio release in October 2026.
tree_item_index: 916
review:
  comment: ''
  date: '2026-10-28'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-10'}}

## Bug fixes

### Studio Designer Layout Parsing Now Handles Modern JavaScript Syntax
Studio Designer now parses and processes layout contributions that use modern ECMAScript features like optional chaining syntax without throwing parser errors.

**What Changed:**
Layout contributions using modern JavaScript syntax like optional chaining (?.) were causing the Studio Designer parser to fail, generating errors and preventing code from being saved. The parser has been updated to recognize and handle these modern language features correctly.

**Impact:**
You can confidently use modern JavaScript syntax in custom layouts and automation code. Design-time validation works reliably, and there are no longer false error messages blocking legitimate code patterns that work perfectly at runtime.

### Connect Group Details Now Displays Sub-Groups
The Connect Group Details page now shows nested sub-groups when present, matching the same behavior available in the legacy JSF interface.

**What Changed:**
Previously, the Connect Group Details page only displayed direct members and did not show associated sub-groups. The page now displays the full group hierarchy, including any sub-groups, providing the same level of visibility as the JSF view.

**Impact:**
Administrators can see the complete group structure directly within Connect without needing to switch to JSF to view nested sub-group relationships. This removes another friction point in the JSF-to-Connect migration and provides accurate visibility into group organization.

### Studio Designer Icon Picker Previews Now Match Web UI Artwork
The Studio Designer icon picker now displays icon previews that match the exact artwork rendered in the Web UI after deployment.

**What Changed:**
The icon picker previews were showing outdated icon artwork that did not match what actually renders in production Web UI. The preview images have been refreshed to show the current icon designs.

**Impact:**
What you see in the Studio Designer icon picker is now what you will see in the deployed Web UI. There are no surprises where an icon choice looks different after deployment, ensuring design-time and runtime experiences are aligned.

{{! /multiexcerpt}}
