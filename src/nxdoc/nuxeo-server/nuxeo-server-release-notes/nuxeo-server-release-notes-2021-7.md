---
title: Nuxeo Server LTS 2021 Release Notes
description: Discover what's new in LTS 2021.7 / LTS 2021 HF07
review:
   comment: ''
   date: '2021-08-16'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 10000
---

{{! multiexcerpt name='nuxeo-server-updates-2021'}}
# What's New in LTS 2021.7 / LTS 2021 HF 07

## Nuxeo Server

### Nuxeo Streams

#### Improve Audit writing performances by allowing parellization

The concurrency on the `AuditLogWriter` is now enabled.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29078](https://jira.nuxeo.com/browse/NXP-29078)

### Rendition

#### New endpoint to recompute video rendition {{> tag 'dev'}}

A new endpoint has been added to recompute video renditions, similarly to what is already available for the [pictures views]({{page page='nuxeo-management-rest-api/#recompute-picture-views'}}).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29815](https://jira.nuxeo.com/browse/NXP-29815)

#### Nuxeo Docker image upgraded to LibreOffice 7.1.3.2

LibreOffice has been upgraded to version 7.1.3.2 in the Nuxeo Docker image.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30481](https://jira.nuxeo.com/browse/NXP-30481)

### Miscellaneous

#### Make maximum http header size configurable {{> tag 'dev'}}

The current maximum size for all the http headers is 8192 bytes which is too small to handle some redirects with very long urls (ex: a very long oauth token).

It is now possible to configure the maximum in `nuxeo.conf`:
```
nuxeo.server.http.maxHttpHeaderSize=8192
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30396](https://jira.nuxeo.com/browse/NXP-30396)

## Major bug fixes

### Fix picture views generation with auto versioning

With auto versioning enabled on documents with the Picture facet, the whole picture views generation process was previously triggered when creating the new version, even if the picture views are already computed on the document.

We fixed this behavior to trigger picture views generation only when needed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30483](https://jira.nuxeo.com/browse/NXP-30483)

### Fix wildcard behavior in sourceMimeType

The option to export an image as a PDF file has been fixed and works again in WebUI.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30526](https://jira.nuxeo.com/browse/NXP-30526)

### Nuxeo Docker image needs Chinese and Korean fonts

CJK fonts have been added to the Nuxeo Docker image in order to handle rendition of Office documents with Chinese and Korean.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30514](https://jira.nuxeo.com/browse/NXP-30514)

### Nuxeo Docker image with UTF-8 locale

The default locale in the Nuxeo Docker image is now UTF-8.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30480](https://jira.nuxeo.com/browse/NXP-30480)

### Fix visual bug in WebUI while importing more than 1 document file

All documents are visible after importing several documents at the same time.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28642](https://jira.nuxeo.com/browse/NXP-28642)

### Fix NPE when retrieving tasks for User

The task List was not appearing for users in some cases.

ACE without granted element do not crash anymore, allowing to get the task list in all cases.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30515](https://jira.nuxeo.com/browse/NXP-30515)

### Prevent Stream failure when invoking `setProperties` bulk action with invalid values

Stream failure is now avoided when invoking `setProperties` bulk action with invalid values (like setting a date field to `abc`).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30484](https://jira.nuxeo.com/browse/NXP-30484)

### Search results reporting invalid total number of documents above 10 000

Total hits is correctly computed when over 10 000 documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30468](https://jira.nuxeo.com/browse/NXP-30468)


# Learn more

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21443) is available in our bug tracking tool.

{{#> callout type='info' heading='Upgrade Notes'}}
Refer to the [LTS 2021.1 upgrade notes]({{page page='upgrade-from-lts-2019-to-lts-2021'}}) to transition to this version.
{{/callout}}

{{! /multiexcerpt}}
