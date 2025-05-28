---
title: LTS 2025.3 / LTS 2025-HF03
description: Discover what's new in LTS 2025.3 / LTS 2025-HF03
review:
   comment: ''
   date: '2025-05-28'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-3'}}
# What's New in LTS 2025.3 / LTS 2025-HF03

## Hide Installation Information in Webengine Root Page

WebEngine root is only displayed when "org.nuxeo.dev" mode is enabled

## FileManager.Import - Don't Return 500 if Request Body Is Empty

REST Automation now returns HTTP 400 Bad Request if body is not valid

Calling an Operation through REST now returns a HTTP 400 Bad Request status if the given body is not valid.

This is also the case if the Operation requires an input and the REST request doesn’t contain a body.

## Nuxeo Should Not Start if Schemas Can't Load

A new nuxeo.startup.fail.on.missing.schema configuration property is available to prevent the Nuxeo server from starting if a schema is not found

The **nuxeo.startup.fail.on.missing.schema** configuration property (default **false**) can be set to **true** to prevent the Nuxeo server from starting if a document type or facet references a missing schema.

## Fix Endpoint '/Api/V1/Automation/<operation>/@Async/Invalid-executionId-Here/Status' Returning HTTP 200

Fetching an invalid async automation status now returns 404 HTTP status code

## Accept Document Model in Search.Index Automation Operation

Search.Index automation operation can now redindex a given document (along with its descendants)

## Fix Opensearch1-Uidgen Contributions When No Configuration Parameter Is Provided

Opensearch1 UIDGen package can be deployed with default configuration

The `opensearch1-uidgen` package is now configuring correctly its optional parameter such as `nuxeo.uidsequencer.default.opensearch1.client.username` or `nuxeo.uidsequencer.default.opensearch1.client.password`.

## Fix JsonWebengineWriter jsonFactoryManager Initialization

JsonWebengineWriter no longer produces random NullPointerException when serializing exceptions


{{! /multiexcerpt}}
