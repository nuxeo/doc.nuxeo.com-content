---
title: Nuxeo Salesforce 2023.1.16
description: Release notes for Nuxeo Salesforce Connector 2023.1.16
tree_item_index: 800
review:
  comment:
  date: '2025-10-15'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-salesforce-connector-2023-1-16'}}

## What's New in Salesforce for LTS 2023 (version 2023.1.16)
This release contains bug fix, technical enhancement and some vulnerability fixes.

## Released Changes

### Bug fix
* Fixed application clocking issue while sorting in ascending/descending order and scrolling page down to bottom.

### Technical enhancements
* Updated labels on Kubernetes resources for monitoring pods deployed by the Platform CI.

* Optimized Jenkins CI process by removing calls from `jx-upgrade-platform` and automatically retrieve the team in `nxK8s.setPodLabels`.

* Upgraded nuxeo Helm chart to 3.1.0. 

* Fixed FFmpeg installation since Oracle Linux 9 switch.

* Optimized Docker Image build with bind mount.

* Used nuxeo-lts base helm file as descriptors were updated so that they can be used from external repositories.

* Supports nuxeo-lts v2023.36.

### Vulnerability fixes
* Updated repository URLs to use HTTPS instead of HTTP to improve security. This was reported as a vulnerability in codeQL scans.

* Fixed double escaping in `String` and filename processing. This was reported as a vulnerability in codeQL scans.
{{! /multiexcerpt}}
