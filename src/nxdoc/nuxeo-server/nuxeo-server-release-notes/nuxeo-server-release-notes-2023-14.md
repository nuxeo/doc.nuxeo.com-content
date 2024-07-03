---
title: LTS 2023.14 / LTS 2023-HF14
description: Discover what's new in LTS 2023.14 / LTS 2023-HF14
review:
   comment: ''
   date: '2024-07-03'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-14'}}
# What's New in LTS 2023.14 / LTS 2023-HF14

## Fix Restricted Access in Maintenance Mode


Authentication can again be restricted to administrators only. This is not cluster wild.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32672](https://jira.nuxeo.com/browse/NXP-32672)

## Return the Content-Disposition Multipart Header in UTF8 Encoding


Nuxeo can now return filename attribute in UTF-8 encoding

Following the RFC6532, Nuxeo is now able to send the filename attribute in UTF-8 encoding in multipart responses.

This could be enabled by setting the following nuxeo.conf property:
```Java
nuxeo.multipart.filename.utf8.encoding=true
```

Note that it would be the default and only behavior for LTS 2025.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32651](https://jira.nuxeo.com/browse/NXP-32651)

## Nuxeo Log4j MaskSensitiveData Should Mask Secret Value


Nuxeo masks secret values in logs.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32536](https://jira.nuxeo.com/browse/NXP-32536)

## Fix Blob Download When the Filename Is "Data"


Nuxeo can resolve and download blobs whose filename collide with an XPath.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32335](https://jira.nuxeo.com/browse/NXP-32335)

## Implement the SCIM 2.0 Search Endpoint


It is now possible to retrieve Scim v2 Users and Groups resources through Search endpoints

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32312](https://jira.nuxeo.com/browse/NXP-32312)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22913) is available in our bug tracking tool.

{{! /multiexcerpt}}
