---
title: LTS 2023.45 / LTS 2023-HF45
description: Discover what's new in LTS 2023.45 / LTS 2023-HF45
review:
   comment: ''
   date: '2026-03-26'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-45'}}
# What's New in LTS 2023.45 / LTS 2023-HF45

## Introduce New Nuxeo User Preferences Modules

New Rest API endpoints are available to manage user preferences.

New Rest API endpoints

- /me/preferences for global user preferences:
  - Create / Update a preference`PUT http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo -d "bar"`
  ```
{
  "entity-type": "userPreference",
  "key": "foo",
  "value": "bar"
}
```
- Get all user preferences`GET http://NUXEO_SERVER/nuxeo/api/v1/me/preferences`
  ```
{
  "entity-type": "userPreferences",
  "preferences": {
    "foo": "bar",
    "anotherKey": "anotherValue"
  }
}
```
- Get a single preference value`GET http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo`
- Delete a single preference`DELETE http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo`
- @preferences document adapter for document-related user preferences:
  - Create / Update document preferences
  `PUT http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences`
  ```
{
  "entity-type": "userPreferences",
  "preferences": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
- Get all document preferences`GET http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences`
- Get a single document preference`GET http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences/key1`
- Remove a single document preference`DELETE http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences/key1`
- Delete all document preferences`DELETE http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain/@preferences`
- userPreferences Document Content EnricherWhen fetching a document, the `userPreferences` enricher adds the current user preferences to this document:`GET http://NUXEO_SERVER/nuxeo/api/v1/path/default-domain?enrichers.document=userPreferences`
  ```
{
  "entity-type": "document",
  ...
  "contextParameters": {
    ...
    "userPreferences": {
      "entity-type": "userPreferences",
      "preferences": {
        "key1": "value1",
        "key2": "value2"
      }
    }
  }
}
```

Nuxeo configuration properties

- `nuxeo.user.preferences.max` defines the maximum number of preferences per user; the default is `2000`
- `nuxeo.user.preferences.sanitizeValues.enabled` defines whether HTML sanitization is performed on preference values before persisting them; the default is `true`
- `nuxeo.user.preferences.listeners.userDeleted.enabled` defines whether preferences should be deleted after the owner is deleted; the default is `true`
- `nuxeo.bulk.action.userPreferencesGC.enabled` defines whether document-related preferences should be deleted after the related document is deleted; the default is `true`
## Add MAX_CONTENT_LENGTH to FreeMarkerProcessor (2023 and 2025)

Added the `nuxeo.freemarker.processor.mimetype.max.size` configuration parameter to configure the maximum content size read by the FreemarkerProcessor for MIME type detection.

## Fix Blob Dispatch to Provider With Caching Configuration, Key Digest Strategy, and Optimized Copy

Blobs can now be dispatched between heterogeneous blob providers.

Blobs can now be dispatched from LocalBlobProvider to S3BlobProvider.
## Unable to Create User Preferences as a Non-Admin User

Non-admin users can create preferences

## Fix ByteRange Download With an AES Blob Provider

Download with byte range now works with AESBlobProvider


{{! /multiexcerpt}}
