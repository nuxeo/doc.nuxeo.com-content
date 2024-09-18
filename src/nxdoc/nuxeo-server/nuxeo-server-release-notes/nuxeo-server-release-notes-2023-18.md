---
title: LTS 2023.18 / LTS 2023-HF18
description: Discover what's new in LTS 2023.18 / LTS 2023-HF18
review:
   comment: ''
   date: '2024-09-09'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 350
---

{{! multiexcerpt name='nuxeo-server-updates-2023-18'}}
# What's New in LTS 2023.18 / LTS 2023-HF18

## Upgrade Nuxeo 2023 Docker Image to Latest RockyLinux (9.4)


The Nuxeo Docker image was upgraded to latest Rocky Linux, currently 9.4.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32864](https://jira.nuxeo.com/browse/NXP-32864)

## Add Spotless Maven Plugin to CI Build


The Nuxeo code formatting is now checked as part of our validation tests

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32847](https://jira.nuxeo.com/browse/NXP-32847)

## Allow to Use S3 StrictAuthenticatedEncryption With a Local Keystore


 A nuxeo.s3storage.crypt.keystore.legacymode configuration property default to true for lts-2023, and false for lts-2025 is available to decrypt objects encrypted client-side with a local keystore in v1 AWS encryption API.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32842](https://jira.nuxeo.com/browse/NXP-32842)

## Move Swagger Rest API Doc to an Optional Marketplace


Rest Swagger doc available under /nuxeo/api/v1/doc endpoint is no longer part of the default distribution

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32841](https://jira.nuxeo.com/browse/NXP-32841)

## Page Provider Does Not Include Aggregate Selection in Search


Fixed bulk action on search results with aggregate selection.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32825](https://jira.nuxeo.com/browse/NXP-32825)

## Fallback to Application/Octet-Stream if ??? Is the Detected MIME Type


The MIME type of a document file is set to "application/octet-stream" if undefined.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32673](https://jira.nuxeo.com/browse/NXP-32673)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=23039) is available in our bug tracking tool.

{{! /multiexcerpt}}
