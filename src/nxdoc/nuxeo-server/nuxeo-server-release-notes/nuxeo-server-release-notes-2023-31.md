---
title: LTS 2023.31 / LTS 2023-HF31
description: Discover what's new in LTS 2023.31 / LTS 2023-HF31
review:
   comment: ''
   date: '2025-06-17'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-31'}}
# What's New in LTS 2023.31 / LTS 2023-HF31

## Hide Installation Information in Webengine Root Page

WebEngine root is only displayed when "org.nuxeo.dev" mode is enabled

## FileManager.Import - Don't Return 500 if Request Body Is Empty

REST Automation now returns HTTP 400 Bad Request if body is not valid

Calling an Operation through REST now returns a HTTP 400 Bad Request status if the given body is not valid.

This is also the case if the Operation requires an input and the REST request doesn’t contain a body.

## Allow Having FFMpeg Installed in the LTS 2023/2025 Docker Image

FFMpeg can now be installed in the Nuxeo Docker image from the RPM Fusion repository.

## Nuxeo Should Not Start if Schemas Can't Load

A new nuxeo.startup.fail.on.missing.schema configuration property is available to prevent the Nuxeo server from starting if a schema is not found

The **nuxeo.startup.fail.on.missing.schema** configuration property (default **false**) can be set to **true** to prevent the Nuxeo server from starting if a document type or facet references a missing schema.

## Fix Endpoint '/Api/V1/Automation/<operation>/@Async/Invalid-executionId-Here/Status' Returning HTTP 200

Fetching an invalid async automation status now returns 404 HTTP status code

## Implement OAuth 2.0 Client Credentials Flow

The Client Credentials flow is now available in the OAuth 2.0 implementation.

## Fix JsonWebengineWriter jsonFactoryManager Initialization

JsonWebengineWriter no longer produces random NullPointerException when serializing exceptions

## Fix Commons-Beanutils CVE in 2023

Upgraded commons-beanutils:commons-beanutils to 1.11.0.

## Return 410 HTTP Status Code (GONE) When Batch Upload Has Been Canceled While Reading Uploaded Blob

BatchManager now returns a 410 HTTP Status Code (Gone) when trying to add blob to a batch that has been canceled

## Fix Postgresql CVE in 2023/2025

Upgraded org.postgresql:postgresql to 42.7.7.


{{! /multiexcerpt}}
