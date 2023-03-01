---
title: Nuxeo Aspera 2021.3.8
description: Release notes for Nuxeo Aspera Connector 2021.3.8
tree_item_index: 800
review:
  comment:
  date: '2023-02-15'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-aspera-connector-2021-3-8'}}

## What's New in Aspera for LTS 2021 (version 2021.3.8)
This is a bugfix release.

## Released Changes

* Fix document fetch headers in Aspera web ui LTS 2021
<br/>[NXP-31462](https://jira.nuxeo.com/browse/NXP-31462)

* Fixed a cosmetic issue: Complete Error message is not showing when viewed from inside transfer LTS 2021
<br/>[NXP-31437](https://jira.nuxeo.com/browse/NXP-31437)

* Source contextData for Aspera uploaded documents
  Added contextData.source = "aspera" while completing the AsperaCompletionWork, before saveDocument(). Created custom versioning policy in local and tested it, custom versioning is happening based on the condition if contextData.source = "aspera".
<br/>[NXP-31230](https://jira.nuxeo.com/browse/NXP-31230)

* When same transfer is completed from two end simultaneously we are seeing multiple copy of same file.
When one transfer is in process we don’t allow any other user to start the same user.
<br/>[NXP-31652](https://jira.nuxeo.com/browse/NXP-31652)

{{! /multiexcerpt}}
