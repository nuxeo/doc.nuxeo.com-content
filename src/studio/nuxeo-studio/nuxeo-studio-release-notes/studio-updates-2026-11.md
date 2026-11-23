---
title: 'November 2026'
description: Release notes for Nuxeo Studio release in November 2026.
tree_item_index: 916
review:
  comment: ''
  date: '2026-11-17'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-11'}}

## Improvements

### No Support Option Now Available for Service Support Levels
Studio now includes a "No support" option when setting service support levels, providing the flexibility to distinguish between trial accounts and customer accounts without assigning a specific support tier.

**What Changed:**
The service support level dropdown previously only offered "Trial" and customer support tiers (Gold, Silver, etc.), leaving no option for accounts that do not require support. The "No support" option has been restored to match the JSF interface, giving organizations more granular control over how they categorize and manage their customer relationships.

**Impact:**
Account teams can now accurately reflect the support status of customers and presales environments. Organizations no longer have to misclassify accounts or use workarounds to track deals and trials that fall outside the standard support tier structure.

### Date Range Aggregation Labels Are Now Customizable
Custom label keys used in date range aggregations are now properly respected during generation and rendering, allowing you to control how date ranges appear in your search results.

**What Changed:**
Previously, custom label keys defined in date range aggregations (for example, my.custom.key) were ignored, and the system would instead concatenate the from and to date values, resulting in labels like "from_now-24h_to_now." Now, custom label keys are properly processed and displayed as configured.

**Impact:**
Search interfaces can display date ranges with meaningful, localized labels instead of showing technical date range syntax. This improves the user experience when browsing search results and makes it easier to build search experiences in multiple languages.

## Bug fixes

### Studio Designer Now Supports LTS 2023 and LTS 2025 Search Pages
Saving new or copied search drawer pages in Studio Designer now works correctly for LTS 2023 and LTS 2025 projects, eliminating a blocking validation error.

**What Changed:**
When working on LTS 2023 or LTS 2025 projects, Studio Designer would fail to save search drawer pages (for example, the default defaultSearchMenuPage or new copies) with the error "The element 'nuxeo-search-form' does not exist." The validation logic has been updated to properly recognize the search form component in these LTS versions, allowing pages to be saved without errors.

**Impact:**
Developers using LTS 2023 or LTS 2025 can now customize search drawer pages and create new search interfaces without encountering blocking validation errors. The previously broken workflow is now fully operational, unblocking design-time customization for these LTS versions.

{{! /multiexcerpt}}
