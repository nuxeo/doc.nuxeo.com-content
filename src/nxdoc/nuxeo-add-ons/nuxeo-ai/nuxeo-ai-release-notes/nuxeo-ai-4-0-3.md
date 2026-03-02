---
title: Nuxeo AI 4.0.3
description: Release notes for Nuxeo AI 4.0.3
tree_item_index: 400
review:
  comment: ''
  date: '2026-02-27'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-ai-4-0-3'}}

## What's New in Nuxeo AI (version 4.0.3)

This is a bugfix and improvement release focused on enhancements and fixes related to the Sightengine integration.

## Released Changes

### Image Quality Analysis Now Works Reliably With Sightengine

Previously, image quality and safety checks via Sightengine could fail with errors, preventing analysis results from being returned. This has been resolved — image analysis now completes successfully, so you can rely on automated quality and safety assessments for your content. <br/>

### Broader Offensive Content Detection

Content safety analysis now detects a wider range of offensive imagery, including hate symbols and offensive gestures. This helps you enforce content policies more comprehensively. <br/>

### Richer Color Metadata for Images

Image quality analysis now returns HSV (Hue, Saturation, Value) color data, giving you more detailed color information for use in visual search, asset categorization, and design workflows. <br/>

{{! /multiexcerpt}}
