---
title: knowledge enrichment for nuxeo 2025.1
description: Release notes for knowledge enrichment for nuxeo 2025.1
tree_item_index: 200
review:
  comment: ''
  date: '2026-06-25'
  status: ok
toc: true
---

{{! multiexcerpt name='knowledge-enrichment-for-nuxeo-2025-1'}}

## What's New in Nuxeo Content Intelligence Connector(Version 2025.1)

## Your Documents Now Get Smarter — Automatically

We've made it easier than ever to enrich your documents. When you upload or import files, the system now automatically classifies, summarizes, extracts key identities, and describes them — no extra steps needed from you.


### Automatic Enrichment When You Upload
Every time you bring a document into the system — whether it's one file or hundreds — enrichment kicks in automatically in the background.

  - You won't be interrupted. Upload continues as normal while enrichment runs behind the scenes. 
  - You'll be notified. A message lets you know enrichment has started and when it's done.
  - Unsupported files are skipped gracefully. No confusing errors for file types that don't apply.
  - If something fails, you'll know why. Clear error messages appear in the UI.


### Enrich Manually in case of Auto Enrichment failure
Users can trigger enrichment from a dedicated enrichment action/button for docs and images in which auto enrichment fails(Classify/Summarize/Extract Identities/Describe)

  - The button only shows up for file types that support enrichment — no guesswork.
  - The system picks the right enrichment actions based on your document type.
  - No Studio configuration needed — it works out of the box.

### See Enrichment Status at a Glance
Each document now shows a clear status so you always know where things stand:

  - Processing — Enrichment is running
  - Success — Enrichment completed
  - Failure — Something went wrong (with fallback behaviour where applicable)

No need to dig into logs or ask an admin.


### Helpful Notifications
Whether you're importing one document or a batch, you'll get timely notifications in the UI so you're never left wondering what's happening.

###  No Studio Setup Required
The connector now includes a built-in web module for Nuxeo Web UI. This means your team doesn't need to configure enrichment actions in Studio anymore — less setup, fewer moving parts, faster rollouts.

{{! /multiexcerpt}}

