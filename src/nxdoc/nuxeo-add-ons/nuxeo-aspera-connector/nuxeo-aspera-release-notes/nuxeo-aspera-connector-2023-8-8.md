---
title: Nuxeo Aspera 2023.8.8
description: Release notes for Nuxeo Aspera Connector 2023.8.8
tree_item_index: 800
review:
  comment:
  date: '2025-10-13'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-aspera-connector-2023-8-8'}}

## What's New in Aspera for LTS 2023 (version 2023.8.8)
This is a bugfix release.

## Released Changes

* Updated data types from int to long to ensure compound assignments do no cause implicit conversions. This was reported as a vulnerability in codeQL scan.
  <br/>[NXCON-82](https://hyland.atlassian.net/browse/NXCON-82)

* Included permissions in workflow file. This was reported as a vulnerability in codeQL scan.
  <br/>[NXCON-83](https://hyland.atlassian.net/browse/NXCON-83)

* Fixed FFmpeg installation since Oracle Linux 9 switch.
  <br/>[NXBT-3898](https://hyland.atlassian.net/browse/NXBT-3898)

* Optimized Docker Image build with bind mount.
  <br/>[NXBT-3889](https://hyland.atlassian.net/browse/NXBT-3889)

* Helmfile descriptors have been updated to make possible to use them from external repositories. Now aspera supports nuxeo-lts v2023.36.
  <br/>[NXBT-3894](https://hyland.atlassian.net/browse/NXBT-3894)

* Updated shared library to use the recent changes done to migrate Jira APIs which are deprecated.
  <br/>[NXBT-3906](https://hyland.atlassian.net/browse/NXBT-3906)

* Added new framework property 'aspera.transfers.max.items' which can be configured in nuxeo.conf file. This makes adding the property as optional for single transfer queries. If it is set to zero, the max_items param is omitted from the API call.
  <br/>[NXCON-84](https://hyland.atlassian.net/browse/NXCON-84)

* Enabled Dependabot daily SCA checks.
  <br/>[NXBT-3895](https://hyland.atlassian.net/browse/NXBT-3895)

{{! /multiexcerpt}}
