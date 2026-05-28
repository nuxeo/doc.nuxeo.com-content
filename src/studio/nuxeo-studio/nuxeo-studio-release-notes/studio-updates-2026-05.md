---
title: 'May 2026'
description: Release notes for Nuxeo Studio release in May 2026.
tree_item_index: 916
review:
  comment: ''
  date: '2026-05-23'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-05'}}

## What's New

### Transfer Studio Projects Between Organizations, Right from Connect
Administrators can now reassign Studio projects to a different organization directly from the Connect interface, without manual API calls or assistance from a specific team member.

**What Changed:**
A new "Change Organization" option is now available on the Studio Project Details page in Connect. If you're an Organization Admin or Hyland Admin, you can choose the required organization and move the project through a simple, guided workflow. Each transfer is validated before completion, with a full audit trail capturing who made the change, when it occurred, and the previous and new organizations.

**Impact:**
Previously, transferring a project between organizations required someone familiar with internal REST endpoints, creating delays when that person was unavailable. Now, any authorized administrator can complete transfers independently, enabling faster turnaround for organization splits, subscription changes, and customer migrations. Each transfer is also recorded in a clear audit trail for compliance and troubleshooting.

## Bug fixes

### LTS 2025 Operation Signatures Now Match Runtime in Studio Registry
Eliminates false automation-chain validation errors and reduces upgrade breakages for LTS 2025 migrations.

**What Changed:**
Corrected Studio registry operation metadata so that declared operation signatures match actual runtime definitions. This includes fixing diverging signature properties across 75 operations, ensuring Studio’s displayed Accepts/Produces information is accurate (for example, operations like `Document.Save`).

**Impact:**
Automation chains that previously appeared invalid (or failed unexpectedly) due to signature mismatches now validate and execute correctly without manual workarounds. This reduces silent chain breakages during LTS 2021 to LTS 2025 upgrades, improves developer/integrator trust in Studio as the source of truth, and lowers escalation/support load related to post-upgrade automation failures.

### User details now load for OrgAdmins in Account Management
Fixes an indefinite loading state so OrgAdmins can view user information and manage permissions as expected.

**What Changed:**
Corrected Connect Account Management behavior where OrgAdmins could open a user page but user details never rendered (only loading icons indefinitely), even though the same pages loaded correctly for other roles (for example, Power User).

**Impact:**
OrgAdmins regain reliable access to user account details, enabling expected self-service administration tasks (including permission assignment) across affected customer organizations.

### Studio Access is Now Properly Enforced After an Organization Change
Access is now revoked when a project that moved to a new organization loses its service link, and remains revoked until a valid service is reassigned.

**What Changed:**
After a project’s organization or client is changed in Connect and its service association is removed, Studio access is blocked as expected. The "Open in Studio" button is disabled when no valid service is linked, and Studio displays "Project expired" message. Access is automatically restored after a valid, non-expired service is linked to the new organization, with the end date of the subscription is displayed.

**Impact:**
Before this fix, users could access Studio projects even after the associated service link was removed, allowing projects to operate outside the intended organizational controls. This issue is now resolved. Access now reflects the project’s current ownership and service status, ensuring organization changes take effect immediately.

## Security Fixes

### Marketplace Security: Package Namespace Protection and Private Package Privacy
Two security issues on the Nuxeo Marketplace have been addressed to protect package integrity and customer confidentiality.

**What Changed:**
First, the Marketplace now enforces namespace ownership during package uploads. Non-Nuxeo accounts can no longer publish packages using Nuxeo-owned identifiers like nuxeo-drive or nuxeo-web-ui. Partners are required to upload under their own namespaced identifiers. Second, packages marked as private are no longer visible in public or unauthenticated search results.

**Impact:**
Before these fixes, it was possible for a partner account to upload a package that overrode an official Nuxeo distribution, which posed a real supply-chain risk for critical platform packages. At the same time, searching the Marketplace could reveal the names of private packages and the identities of the partners or clients they belonged to. Both issues are now resolved. Official packages are protected from unauthorized overrides, and private package information stays private.

## Known Issues and Rollbacks

### Content Validation Fix for Studio Designer Temporarily Rolled Back
The content validation fix for Studio Designer (originally released as part of the previous release) has been pulled back due to an issue discovered during rollout. Some administrators experienced unexpected behavior after the change was applied. We are actively working on a resolution, and the fix will be re-released in a future update once the underlying problem is fully addressed. No action is required from your side in the meantime.

{{! /multiexcerpt}}
