---
title: Nuxeo AI 5.0.2
description: Release notes for Nuxeo AI 5.0.2
tree_item_index: 300
review:
  comment: ''
  date: '2026-06-15'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-ai-5-0-2'}}

## What's New in Nuxeo AI (version 5.0.2)

Nuxeo AI 5.0.2 introduces the `nuxeo-ai-content-intelligence` addon — bringing automatic AI-powered descriptions, summaries, and entity tagging to your images and documents using Hyland's Content Intelligence cloud service.

## New Features

### Automatic Image and Document Enrichment

Install the new `nuxeo-ai-content-intelligence` package to enable out-of-the-box AI enrichment:

- **Images** — Automatically generates a natural-language description and tags detected entities such as people, places, and organizations.
- **Documents** (PDF, Word, Excel, PowerPoint, plain text) — Automatically summarizes the content and tags named entities found in the text.

Enrichment typically completes in seconds for standard files. Larger files (around 100 MB or more) may take a few minutes. <br/>

### Broad Image Format Support

All common image formats — including BMP, GIF, and WebP — are automatically handled. The addon transcodes unsupported formats behind the scenes so enrichment works end-to-end without any manual conversion. <br/>

### Works Alongside Existing AI Providers

If you already use AWS, GCP, or Sightengine enrichment, the new addon coexists cleanly — duplicate tags are prevented automatically, and the AI-generated description is always written independent of your tag configuration. <br/>

## Improvements

### Configurable Enrichment Timeout

A new `nuxeo.ai.enrichment.call.timeout.seconds` property lets you control how long the system waits for an enrichment provider to respond (default: 60s). This is raised automatically by the Content Intelligence addon to accommodate longer-running document analysis. <br/>

### Reduced Log Noise for Deduplication Configuration

Missing deduplication configuration warnings now appear only once with a clear diagnostic message, instead of repeating on every event. <br/>

## Installation

```
nuxeoctl mp-install nuxeo-ai-content-intelligence
```

Add the following to your `nuxeo.conf`:

```
nuxeo.ai.images.enabled=true
nuxeo.ai.contentintelligence.enabled=true
nuxeo.ai.contentintelligence.documents.enabled=true
nuxeo.enrichment.raiseEvent=true
nuxeo.enrichment.save.facets=true
nuxeo.hyland.cic.auth.baseUrl=<your CIC auth URL>
nuxeo.hyland.cic.contextEnrichment.baseUrl=<your CIC enrichment URL>
nuxeo.hyland.cic.enrichment.clientId=<your client ID>
nuxeo.hyland.cic.enrichment.clientSecret=<your client secret>
```

## Requirements

- Nuxeo Server LTS 2025
- Valid Hyland Content Innovation Cloud credentials

{{! /multiexcerpt}}

