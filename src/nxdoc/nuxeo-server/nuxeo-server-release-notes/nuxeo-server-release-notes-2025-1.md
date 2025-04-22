---
title: LTS 2025.1 / LTS 2025-HF01
description: Discover what's new in LTS 2025.1 / LTS 2025-HF01
review:
   comment: ''
   date: '2025-04-17'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2025-1'}}
# What's New in LTS 2025.1 / LTS 2025-HF01

## Migration Tool to Extract Full Text From Mongo DB to an S3 Blob

In order to reduce the MongoDB collection size, it’s now possible to move in a efficient way the fulltext extracted from binaries (stored in MongoDB) to an S3 bucket on an existing instance. See the 4 step migration process in the upgrade notes.

## Fix Infinite Login Loop When the Anonymous User Is Enabled

Fixed infinite login loop when the anonymous user is enabled

## Add Support of JSON File for the Preview

JSON file preview is now supported.

## Requesting an Unknown Document Id With Easyshare Returns a 500 Error

Improve Exception Handling in WebEngine

Exception happening in WebEngine is now better detected when the requested MediaType is not `application/json`.

An exception writer has been added for `text/html` media type, so Nuxeo Server WebEngine now handles the following media type for NuxeoException handling:

- `text/html`
- `application/json` which is the default fallback for other media types

## Make Creation of User Without Password Using the REST API Configurable

The `nuxeo.user.password.empty.enabled` nuxeo configuration property can be set to `true` to create users without password. Its default value is `false`**.**

## Upgrade Plexus-Archiver

Maven Plugins have been updated

The Maven Plugins used by Nuxeo were updated to not depend on very old libraries. This is the case for:

- maven-clean-plugin
- maven-enforcer-plugin
- maven-install-plugin
- maven-jar-plugin

We had to remove the Maven Eclipse Plugin from our dependency tree as it is not maintained. If you were leverage it, you should add it back to your pom:

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-eclipse-plugin</artifactId>
  <version>2.10</version>
</plugin>
```

## Cleanup  Yum Cache in Docker Images

The YUM cache is now empty in the Nuxeo Docker image.

## OAuth2 Tokens Need to Be GC to Avoid Contention During Auth

Garbage collection task now removes expired OAuth2 tokens

The garbage collection task executes weekly (every Sunday at 2 am) by default, which removes expired OAuth2 tokens. The frequency of this garbage collection execution is defined by a cron expression with the  Nuxeo configuration property:

- `nuxeo.oauth2.garbageCollectExpiredTokens.cronExpression` (default `0 0 2 ? * SUN`)

This garbage collection can be disabled with the Nuxeo configuration property:

- `nuxeo.oauth2.garbageCollectExpiredTokens.enabled`(default `true`)

This garbage collection process uses the Bulk Action Framework, and the following Nuxeo configuration properties are available:

- `nuxeo.bulk.action.garbageCollectExpiredOAuth2Tokens.defaultConcurrency`(default `2`)
- `nuxeo.bulk.action.garbageCollectExpiredOAuth2Tokens.defaultPartitions`(default `4`)

Garbage collection of expired OAuth2 tokens can also be executed on demand through the Management Rest API (see [Rest API documentation](https://doc.nuxeo.com/rest-api/1/oauth2-endpoint/)):

```
curl -X DELETE -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/management/oauth2/expired
```

## Fix Content Disposition for Preview URL With Direct Download

All preview urls are now disposed inline.

## Add the Ability to Scroll Directory Entries

A new "directory" scroll is available to scroll directory entry ids.

The scroll query is expressed in NXQL, for example, `SELECT * FROM continent`, where clauses are ignored and results are ordered by the directory id field ascendant.

## Restrict the Visibility of Administrators' Members

The "nuxeo.group.administrators.members.resticted" nuxeo.conf property allows to restrict the visibility of administrator groups' members.

## Clean Up sequentialScroll Usage When Useless

Remove unnecessary sequentialScroll flag since this "garbageCollectOrphanBlobs" bulk command is always run in exclusive mode.

## Fix WebEngine Resource Path Value

WebEngine Resource path are correctly retrieved

The WebEngine Resource path field had an issue in its computation since the upgrade of Jersey. It is now fixed and path is correct.

This mainly affects the Freemarker templates that use this field, such as `Root.path`.

## Make It Easier to Subclass KeycloakAuthenticationPlugin

The KeycloakAuthenticationPlugin can be subclassed more easily.


{{! /multiexcerpt}}
