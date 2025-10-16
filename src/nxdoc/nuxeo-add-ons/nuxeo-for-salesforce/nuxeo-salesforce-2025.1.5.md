---
title: Nuxeo Salesforce 2025.1.5
description: Release notes for Nuxeo Salesforce Connector 2025.1.5
tree_item_index: 800
review:
  comment:
  date: '2025-10-15'
  status: ok
toc: true
hidden: true
---


{{! multiexcerpt name='nuxeo-salesforce-connector-2025-1-5'}}

## What's New in Salesforce for LTS 2025 (version 2025.1.5)
This release contain technical enhancements and some vulnerability fixes.

## Released Changes

### Technical enhancements
* Optimized Docker Image build with bind mount.

* Used nuxeo-lts base helm file as descriptors were updated so that they can be used from external repositories.

* Supports nuxeo-lts v2025.7.

* Added the maven enforcer steps to ensure that the project can be released any time.

### Vulnerability fixes
* Updated repository URLs to use HTTPS instead of HTTP to improve security. This was reported as a vulnerability in codeQL scans.

* Fixed double escaping and unescaping issue. This was reported as a vulnerability in codeQL scans.


{{! /multiexcerpt}}
