---
title: 'August 2026'
description: Release notes for Nuxeo Studio release in August 2026.
tree_item_index: 916
review:
  comment: ''
  date: '2026-08-10'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-08'}}

## Improvements

### More precise package search in Application Definition
Package search in Application Definition now returns only the packages that match what you type, so you spend less time scrolling through results that are not relevant.

**What Changed:**
Search in Application Definition was returning too many packages that did not match the search term. Searching for something like csv or nuxeo-csv brought back a long list of unrelated packages. Search now narrows the results to packages that actually match your query.

**Impact:**
You can find the package you need, such as nuxeo-csv, much faster and with far less noise. This resolves a regression that had made package discovery slower than it should have been.

## Bug fixes

### Accurate conflict status during manual branch merges
Conflicted files are no longer marked as resolved by mistake during a manual merge, so you always know what still needs your attention.

**What Changed:**
During a manual merge, files that still had conflicts could be shown as resolved. Conflicted files now keep their correct status until you actually resolve them, and Resolve All behaves as expected.

**Impact:**
You get reliable feedback while merging, and you are stopped from moving forward while conflicts remain. This prevents unresolved conflicts from causing server errors or blocking project creation later on.

### Full client list and search restored on the Studio Projects page
The client filter on the Studio Projects page now shows every client and lets you search, instead of stopping at 21 entries.

**What Changed:**
The client filter on the Studio Projects page was limited to 21 visible entries and had no search option, which made it hard to locate a specific client. The filter now exposes the complete client list and includes search.

**Impact:**
Administrators can reach any client in the list and search by name to find the right one quickly, rather than working from a partial list.

### Comprehensive Connect search aligned with JSF results
Search in Connect now returns the same comprehensive results you were used to in the JSF interface.

**What Changed:**
Search results in Connect were less complete than the equivalent search in JSF. Connect search now behaves consistently with JSF and returns the full set of matching results.

**Impact:**
If you are moving from JSF workflows to Connect, search now works the way you expect. This removes a point of confusion and makes the transition smoother.

{{! /multiexcerpt}}
