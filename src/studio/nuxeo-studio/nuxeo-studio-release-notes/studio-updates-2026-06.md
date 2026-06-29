---
title: 'June 2026'
description: Release notes for Nuxeo Studio release in June 2026.
tree_item_index: 916
review:
  comment: ''
  date: '2026-06-30'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-06'}}

## Improvements

### Trial Flag and Support Level Now Available in Connect
Administrators can now toggle the Trial flag and view the Support Level for projects directly in Connect, without switching to the legacy JSF interface.

**What Changed:**
A new toggle button for the Trial flag has been added to the Connect Administration interface. Additionally, a "Support Level" column now appears in the Services view, letting you see at a glance which projects are currently marked as trials. These capabilities were previously only accessible through the legacy JSF admin pages.

**Impact:**
This eliminates another reason to switch back to JSF for routine administration. You can now manage trial designations and verify support levels from a single, modern interface - saving time and reducing context-switching during account setup and reviews.

### Artifact Details View in Studio Administration
You can now click on any Studio Project Artifact to see its full metadata - including name, type, version, size, checksums, and upload timestamp.

**What Changed:**
A new descriptive details view has been added to the Studio Administration UI for project artifacts. When you select an artifact, you'll see all of its metadata in a clean, organized layout. Download and delete actions are also accessible directly from this view.

**Impact:**
Previously, reviewing artifact details required navigating through multiple screens or using API calls. Now, all the information you need is available in one place, making it faster to verify artifact versions, check integrity via checksums, or clean up outdated artifacts.

### Managing Settings and Permissions for Studio Project Artifacts
A new centralized page gives administrators clear visibility into who can view, download, delete, or configure artifacts.

**What Changed:**
A dedicated Settings and Permissions page has been added under Studio Project Artifacts. It displays all permission mappings by role in a single view, so you can quickly understand and verify access controls without digging through multiple configuration screens.

**Impact:**
Administrators can now audit and understand artifact permissions at a glance, making it easier to ensure that the right people have the right level of access — especially important when onboarding new team members or tightening security policies.

### Faster Loading for the Connect Account Page
The Connect account page now loads consistently in under one second, making everyday administration noticeably faster.

**What Changed:**
We optimized the underlying queries and data loading for the Connect account page. Previously, the page took over 12 seconds to load the first time you visited it, even though subsequent loads were faster. Now, every page load completes in under one second, regardless of whether it is your first visit or a return visit.

**Impact:**
If you manage accounts through Connect, you will notice a dramatically faster experience. The 12x improvement removes a significant daily friction point, especially for administrators who access the account page frequently throughout the day.

### Project Information Now Visible on the Connect Services Screen
You can now see to which project a service belongs directly in the services list, without opening each entry individually.

**What Changed:**
Project information has been added to the Connect services screen. Previously, when multiple services shared the same name, it was difficult to differentiate between them because the project association was only visible in the legacy JSF interface. Now, the project name is displayed alongside each service entry.

**Impact:**
Administrators managing accounts with many services, such as presales or enterprise accounts with hundreds of entries, can now quickly identify and select the correct service without clicking through each one. This saves significant time during routine service and project management.

### Updated Hyland/Nuxeo Logo Across Connect, Marketplace, and Documentation
The logo displayed on Connect, Marketplace, and the Documentation site has been updated to reflect the current Hyland/Nuxeo branding.

**What Changed:**
The existing logo assets on the Connect Dashboard, Marketplace Add-ons page, and the Documentation site header have been replaced with the new approved Hyland/Nuxeo logo. Studio is not affected by this change.

**Impact:**
You will see consistent, up-to-date branding across these properties. No action is needed on your part. All links and navigation continue to work as before.

## Bug fixes

### Connector Version Selection Restored to Expected Behavior
Studio now correctly resolves default connector versions again, ensuring your projects deploy reliably without unexpected failures.

**What Changed:**
A previous update had unintentionally altered how Studio determines the default version for connectors. This could cause projects that were working fine to suddenly fail during deployment - even though you hadn't changed any configuration. This release reverts to the original version-resolution logic.

**Impact:**
If you experienced unexplained deployment failures after a recent Studio update, this fix resolves the issue. Your existing project configurations will now work exactly as they did before, with no action required on your end.

### Faster Loading for the Connect Account Services Page
The services page for accounts with many projects now loads in under 3 seconds, down from 10–20 seconds.

**What Changed:**
We optimized the underlying queries and introduced caching for the Connect account services page. Accounts with a large number of projects (such as presales or enterprise accounts) were previously triggering slow database lookups on every page load.

**Impact:**
Administrators managing large accounts will notice a dramatically faster experience when viewing their services list. Page loads that previously took up to 20 seconds now complete in under 3 seconds, removing a significant daily friction point.

### Docker Build Failure Blocking Deployments Has Been Resolved
A build failure that had been preventing all NOS builds and deployments since early June has been fixed.

**What Changed:**
An external certificate URL referenced during Docker image builds began redirect-looping, causing every build to fail. Since no NOS endpoints depend on that certificate, the obsolete import has been removed entirely.

**Impact:**
Builds and deployments that were blocked since early June are now fully operational again. No action is needed on your part - all pipelines will resume as normal.

## Security Fixes

### Q2 2026 Security Vulnerability Remediation
Critical and high-severity vulnerabilities identified through automated security scans have been fixed as part of our ongoing hardening program.

**What Changed:**
Vulnerabilities flagged by automated code analysis and dependency scanning tools during Q2 2026 have been reviewed, prioritized, and remediated in this release. Fixes cover both direct code issues and third-party dependency updates.

**Impact:**
Your Studio environment benefits from a stronger security posture with each release. These fixes reduce exposure to known vulnerabilities, helping you meet compliance requirements and maintain confidence in the platform's integrity.

{{! /multiexcerpt}}
