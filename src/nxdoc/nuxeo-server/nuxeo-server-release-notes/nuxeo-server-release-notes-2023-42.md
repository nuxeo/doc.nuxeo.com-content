---
title: LTS 2023.42 / LTS 2023-HF42
description: Discover what's new in LTS 2023.42 / LTS 2023-HF42
review:
   comment: ''
   date: '2026-01-30'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2023-42'}}
# What's New in LTS 2023.42 / LTS 2023-HF42

## Cannot Empty a Multi-Value Property on a User in a Multi-Directory Configuration

Multi-directory entries can now be nullified. Note that nullifying a String field that has a default value will result in persisting an empty string. The default value would be used otherwise. 

## Fix Version Reindexing When the Working Copy Is Moved

A new nuxeo configuration property is available to reindex versions when a document is moved.

The elasticsearch.reindexVersionsListener.enabled Nuxeo configuration property is available for lts-2023. It enables a listener on the documentMoved event to reindex the affected versions, updating their path in the search backend.

This property is named nuxeo.search.reindexVersionsListener.enabled for lts-2025.

## List Installed Packages Within Management API

You can now retrieve the list of installed packages to your Nuxeo Server with the endpoint `/nuxeo/api/v1/management/distribution/packages`. For example:

```
curl -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/management/distribution/packages
{
  "entity-type": "packages",
  "entries": [
    {
      "entity-type": "package",
      "id": "nuxeo-web-ui-2025.10.0",
      "name": "nuxeo-web-ui",
      "title": "Nuxeo Web UI",
      "description": "Web UI is the primary UI for the Nuxeo Platform. It is an ideal starting point for any Digital Asset Management, Case Management or Document Management project.",
      "version": "2025.10.0",
      "type": "ADDON",
      "state": "STARTED",
      "targetPlatforms": [],
      "vendor": "Nuxeo",
      "supportsHotReload": false,
      "provides": [],
      "dependencies": [],
      "conflicts": [],
      "licenseType": "Apache License, Version 2.0",
      "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  ]
}

```
## Possible NPE in NuxeoOAuth2Token

OAuth2 tokens without expiration date are not garbage collected.

## Retrieve WebEngine Resource by Java Type

You can now instantiate your WebEngine WebObject by giving their Java Type to the new `newObject` API.

## Fix IllegalArgumentException With Message "Child Name [/Context] Is Not Unique" When Running CMIS Test Suites

Deploy web app before servlet in tests.


{{! /multiexcerpt}}
