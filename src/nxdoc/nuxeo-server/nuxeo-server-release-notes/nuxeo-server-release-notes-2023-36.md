---
title: LTS 2023.36 / LTS 2023-HF36
description: Discover what's new in LTS 2023.36 / LTS 2023-HF36
review:
   comment: ''
   date: '2025-09-17'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-36'}}
# What's New in LTS 2023.36 / LTS 2023-HF36

## Fix NPE When Reading Null Value Stored in the Extended Infos of the Audit

Support of null value in extended infos has been improved.

## "firstAccessibleAncestor" Enricher in Not Returning Correct Parent Details.

The firstAccessibleAncestor enricher now returns the first ancestor that the current user has READ permission on

The firstAccessibleAncestor enricher traverses up the document hierarchy to find the first ancestor that the current user has READ permission on. It returns `null` if there are no readable ancestors.

## Fix Random Unit Test Failure With Google Storage

Clear bucket prefix content only a test tear down

## Fix Email Rendering When a Notification Is Configured With Both "Template" and "subjectTemplate"

Both the mail body and subject templates can now be defined together in mail notifications.

## Enforce Type Restriction With the Document.Move Operation

A new nuxeo.conf property "nuxeo.subtype.restriction.enabled" to enforce subtype restriction platform-side is available. Default value of the property is `false`.

A synchronous listener checks if the type of any created, moved, or copied document is allowed by the destination folderish document; otherwise, it throws an error with 400 HTTP Status Code (Bad request).
This listener is disabled by default and can be enabled with the nuxeo configuration property `nuxeo.subtype.restriction.enabled=true`. <font color="#ffffff">40</font>

## Fix Broken Extraction of Rotation Metadata in Video Files

Correctly extract rotation metadata from Video files with FFmpeg >= 5

## Elastic/Search Reindex Management Endpoint Should Handle queryLimit for Tuning Purpose

The reindex management endpoint now supports a `queryLimit` parameter to ease indexing tuning.

## Fix Remove Legal Hold When Document Is Under Indeterminate Retention

Object in S3 storage keeps its legal hold as long as its referencing document is under indeterminate retention

## Limit Binary Fulltext Length at Indexing Time

Binary fulltext can now be limited at indexing time.

Binary fulltext can now be truncated at indexing time.

On LTS 2023 use the following option 

`elasticsearch.fulltext.size.max=10000`

on LTS 2025:

`nuxeo.search.default.fulltext.size.max=10000`


{{! /multiexcerpt}}
