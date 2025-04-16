---
title: LTS 2023.29 / LTS 2023-HF29
description: Discover what's new in LTS 2023.29 / LTS 2023-HF29
review:
   comment: ''
   date: '2025-04-16'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-29'}}
# What's New in LTS 2023.29 / LTS 2023-HF29

## Add Support of JSON File for the Preview

JSON file preview is now supported.

## Cleanup  Yum Cache in Docker Images

The YUM cache is now empty in the Nuxeo Docker image.

## OAuth2 Tokens Need to Be GC to Avoid Contention During Auth

Expired OAuth2 tokens are now garbage collected

Expired OAuth2 tokens are garbage collected weekly (every Sunday at 2 am) by default. The frequency of this garbage collection execution is defined by a cron expression with the  Nuxeo configuration property:

- `nuxeo.oauth2.garbageCollectExpiredTokens.cronExpression` (default `0 0 2 ? * SUN`)

This garbage collection can be disabled with the Nuxeo configuration property:

- `nuxeo.oauth2.garbageCollectExpiredTokens.enabled`(default `true`)

This garbage collection process uses the Bulk Action Framework, and the following Nuxeo configuration properties are available:

- `nuxeo.bulk.action.garbageCollectExpiredOAuth2Tokens.defaultConcurrency`(default `2`)
- `nuxeo.bulk.action.garbageCollectExpiredOAuth2Tokens.defaultPartitions`(default `4`)

Expired OAuth2 tokens garbage collection can also be executed on demand through the Management Rest API (see [Rest API documentation](https://doc.nuxeo.com/rest-api/1/oauth2-endpoint/)):

```
curl -X DELETE -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/management/oauth2/expired
```

## Fix Content Disposition for Preview URL With Direct Download

All preview urls are now disposed inline

## Add the Ability to Scroll Directory Entries

A new "directory" scroll is available to scroll directory entry ids.

The scroll query is expressed in NXQL e.g. `SELECT * FROM continent`. Where clauses are ignored and results are ordered by the directory id field ascendant.

## Restrict the Visibility of Administrators' Members

The "nuxeo.group.administrators.members.resticted" nuxeo.conf property allows to restrict the visibility of administrator groups' members.


{{! /multiexcerpt}}
