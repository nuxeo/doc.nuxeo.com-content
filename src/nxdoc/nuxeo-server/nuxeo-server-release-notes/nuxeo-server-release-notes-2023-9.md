---
title: LTS 2023.9 / LTS 2023-HF09
description: Discover what's new in LTS 2023.9 / LTS 2023-HF09
review:
   comment: ''
   date: '2024-03-12'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 600
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-9'}}
# What's New in LTS 2023.9 / LTS 2023-HF09

## Update H2database Dep to 2.2.220


The H2 embeddable database was upgraded from 2.1.214 to 2.2.224.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32341](https://jira.nuxeo.com/browse/NXP-32341)

## Usage of URLBlob Leaves the File:content Length Null When Using BlobProvider 


URLBlob now implements getLength() method

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32331](https://jira.nuxeo.com/browse/NXP-32331)

## Deprecate All BinaryManager in Favor of BlobProvider


Use BlobProvider implementation instead of BinaryManager

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32045](https://jira.nuxeo.com/browse/NXP-32045)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22740) is available in our bug tracking tool.

{{! /multiexcerpt}}
