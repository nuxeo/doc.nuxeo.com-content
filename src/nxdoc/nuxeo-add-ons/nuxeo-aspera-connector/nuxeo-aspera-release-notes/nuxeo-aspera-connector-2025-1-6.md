---
title: Nuxeo Aspera 2025.1.6
description: Release notes for Nuxeo Aspera Connector 2025.1.6
tree_item_index: 800
review:
  comment:
  date: '2025-10-13'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-aspera-connector-2025-1-6'}}

## What's New in Aspera for LTS 2025 (version 2025.1.6)
This release includes a bug fix, vulnerability fixes and some technical enhancements.

## Released Changes

### Bug fix
#### Make Aspera API max_items parameter optional
An issue was encountered when max_items param was included in '/ops/transfers' request, which displayed "400 Bad request" with message - "max_items var not applicable to single transfer queries". To resolve this issue, a new framework property 'aspera.transfers.max.items' was added which can be configured in nuxeo.conf file. This makes adding the property as optional for single transfer queries. If it is set to zero, the max_items param is omitted from the API call.
### Vulnerability fixes
* Updated data types from `int` to `long` to ensure compound assignments do not cause implicit conversions. This was reported as a vulnerability in codeQL scan.

* Included permissions in workflow file. This was reported as a vulnerability in codeQL scan.
### Technical enhancements
* Added the maven enforcer steps introduced in nuxeo-opensearch2 addon that checks the commit to keep the project ready for release any time.

* Fixed the FFmpeg installation in Oracle Linux 9.

* Optimized Docker Image build with bind mount.

* Helmfile descriptors have been updated so that external repositories can use them. Now nuxeo-aspera-connector supports nuxeo-lts v2025.7.

* Updated shared library to use the migrated Jira APIs. These APIs were migrated as they were deprecated.

* Enabled Dependabot daily SCA checks.

{{! /multiexcerpt}}
