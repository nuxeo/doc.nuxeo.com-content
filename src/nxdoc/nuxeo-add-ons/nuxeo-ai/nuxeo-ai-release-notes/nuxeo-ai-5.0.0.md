---
title: Nuxeo AI 5.0.0
description: Release notes for Nuxeo AI 5.0.0
tree_item_index: 200
review:
  comment: ''
  date: '2026-02-27'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-ai-5.0.0'}}

## What's New in Nuxeo AI for LTS 2025 (version 5.0.0)

Nuxeo AI 5.0.0 brings faster and more reliable AI-powered content enrichment, broader content safety detection, and richer image analysis — all built on modernized cloud infrastructure designed for long-term stability. This release requires Nuxeo Server LTS 2025.

## Released Changes

### New Features

#### Faster, Future-Proof AWS Integration

AWS-powered AI services — including text translation, document analysis, and image recognition — now run on the latest AWS SDK (v2), delivering faster response times and improved error handling. A new abstraction layer also makes future cloud infrastructure upgrades seamless, so your AI workflows remain uninterrupted. <br/>

#### Flexible Search Backend Support

AI-powered search and asset counting are no longer tied to a specific search engine. You can now swap or upgrade your search backend without disrupting AI features, giving you greater flexibility in how you architect your content platform. <br/>

### Bug Fixes

#### Image Quality Analysis Now Works Reliably With Sightengine

Previously, image quality checks via Sightengine could fail with errors, preventing image analysis results from being returned. This has been resolved — image quality and safety analysis now completes successfully. <br/>

#### AI Enrichment No Longer Fails Unexpectedly During Retries

In rare cases, AI enrichment processes could crash during automatic retries, leaving documents un-enriched. Retry handling is now more robust, ensuring enrichment completes reliably even when transient errors occur. <br/>

#### Accurate Document Counts in Search and Asset Reports

Search results and asset count reports could sometimes show incorrect totals. Document counts are now accurate across all search and reporting operations. <br/>

#### Reliable Face and Celebrity Detection for All Images

Face and celebrity detection could fail on images that lacked orientation metadata (for example, screenshots or programmatically generated images). These images are now processed successfully. <br/>

#### Improved Memory Management During Image Processing

Image resizing operations could consume excess memory over time. Resource handling has been improved to ensure stable performance during bulk image processing. <br/>

### Improvements

#### More Reliable and Efficient Content Enrichment

AI enrichment pipelines are now more resilient to unexpected responses from cloud providers, reducing the chance of enrichment failures. PDF text extraction uses less memory, improving performance for large documents. Image resizing now preserves the requested output format (for examplem PNG, GIF) instead of saving the changes in JPEG format by default, ensuring your assets maintain the quality you expect. <br/>

#### Richer Image Analysis From Google Cloud Vision

You now get more detailed results from GCP Vision-powered analysis:
- **Face detection** returns full emotion likelihoods (joy, anger, sorrow, surprise, and so on), bounding boxes, and confidence scores.
- **Logo and landmark detection** includes bounding box geometry and proper classification tags.
- **Label detection** output is now compatible with downstream classification workflows.

These enhancements give you deeper insight into your visual content for automated tagging and moderation. <br/>

#### Broader Offensive Content Detection

Content safety analysis now detects a wider range of offensive imagery, including hate symbols and offensive gestures. This helps you enforce content policies more comprehensively. <br/>

#### Richer Color Metadata for Images

Image quality analysis now returns HSV (Hue, Saturation, Value) color data, giving you more detailed color information for use in visual search, asset categorization, and design workflows. <br/>

#### Easier Troubleshooting

When AWS permissions are misconfigured, log messages now clearly indicate what's wrong and how to fix it. Search and asset counting issues that previously failed silently now produce visible warnings, making it faster to diagnose and resolve problems. <br/>

#### More Accurate AI Model Training Data

Dataset statistics now correctly reflect multi-class configurations across all fields, ensuring that your custom AI model training starts from accurate data — preventing unexpected behavior caused by stale settings. <br/>

{{! /multiexcerpt}}
