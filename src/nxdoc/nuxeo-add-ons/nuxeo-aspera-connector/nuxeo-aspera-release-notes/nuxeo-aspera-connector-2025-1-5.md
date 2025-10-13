---
title: Nuxeo Aspera 2025.1.5
description: Release notes for Nuxeo Aspera Connector 2025.1.5
tree_item_index: 800
review:
  comment:
  date: '2025-10-13'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-aspera-connector-2025-1-5'}}

## What's New in Aspera for LTS 2025 (version 2025.1.5)
This release includes a bug fix, vulnerability fixes and some technical enhancements.

## Released Changes

### Bug fix
#### Make Aspera API max_items parameter optional
An issue was encountered when max_items param was included in '/ops/transfers' request, it throws 400 Bad request with message - "max_items var not applicable to single transfer queries". So a new framework property 'aspera.transfers.max.items' was added which can be configured in nuxeo.conf file. This makes adding the property as optional for single transfer queries. If it is set to zero, the max_items param is omitted from the API call.
<br/>See [NXCON-84](https://hyland.atlassian.net/browse/NXCON-84)
### Vulnerability fixes
* Updated data types from int to long to ensure compound assignments do no cause implicit conversions. This was reported as a vulnerability in codeQL scan.
  <br/>See [NXCON-82](https://hyland.atlassian.net/browse/NXCON-82)

* Included permissions in workflow file. This was reported as a vulnerability in codeQL scan.
  <br/>See [NXCON-83](https://hyland.atlassian.net/browse/NXCON-83)
### Technical enhancements
* Added the maven enforcer steps introduced in nuxeo-opensearch2 addon that checks that the commit to keep the project releasable at any time.
  <br/>See [NXBT-3888](https://hyland.atlassian.net/browse/NXBT-3888)

* Fixed FFmpeg installation since Oracle Linux 9 switch.
  <br/>See [NXBT-3898](https://hyland.atlassian.net/browse/NXBT-3898)

* Optimized Docker Image build with bind mount.
  <br/>See [NXBT-3889](https://hyland.atlassian.net/browse/NXBT-3889)

* Helmfile descriptors have been updated to make possible to use them from external repositories. Now aspera supports nuxeo-lts v2025.7.
  <br/>See [NXBT-3894](https://hyland.atlassian.net/browse/NXBT-3894)

* Updated shared library to use the recent changes done to migrate Jira APIs which are deprecated.
  <br/>See [NXBT-3906](https://hyland.atlassian.net/browse/NXBT-3906)

* Enabled Dependabot daily SCA checks.
  <br/>See [NXBT-3895](https://hyland.atlassian.net/browse/NXBT-3895)

{{! /multiexcerpt}}
