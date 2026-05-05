---
title: 'May 2026'
description: Release notes for Nuxeo Studio release in May 2026.
tree_item_index: 919
review:
  comment: ''
  date: '2026-05-07'
  status: ok
toc: true
---
{{! multiexcerpt name='studio-updates-2026-05'}}

##  Bug fixes

### LTS 2025 Operation Signatures Now Match Runtime in Studio Registry
Eliminates false automation-chain validation errors and reduces upgrade breakages for LTS 2025 migrations.

**What Changed:**
Corrected Studio registry operation metadata so that declared operation signatures match actual runtime definitions. This includes fixing diverging signature properties across 75 operations, ensuring Studio’s displayed Accepts/Produces information is accurate (for example, operations like `Document.Save`).

**Impact:**
Automation chains that previously appeared invalid (or failed unexpectedly) due to signature mismatches now validate and execute correctly without manual workarounds. This reduces silent chain breakages during LTS 2021 to LTS 2025 upgrades, improves developer/integrator trust in Studio as the source of truth, and lowers escalation/support load tied to post-upgrade automation failures.


{{! /multiexcerpt}}
