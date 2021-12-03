---
title: LTS 2021.11 / LTS 2021-HF11
description: Discover what's new in LTS 2021.11 / LTS 2021-HF11
review:
   comment: ''
   date: '2021-11-08'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 5200
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-12'}}
# What's New in LTS 2021.12 / LTS 2021-HF12

## Nuxeo Server


### Packaging / Distribution / Installation

#### Tomcat 9.0.55 {{> tag 'dev'}} {{> tag 'admin'}}

The Nuxeo Platform now relies on Tomcat 9.0.55.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30706](https://jira.nuxeo.com/browse/NXP-30706)

## Major Bug Fixes

### Read ACL for all versions of children are recomputed after a permission change

During an ACL update of a folder, Read ACL are materialized on children documents for search optimization, this is done on different backends (Mongo, PostgreSQL).
The current fix is also recomputing Read ACL for all versions of children, this means more queries and database updates, which certainly impacts the performance during massive ACL updates.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30578](https://jira.nuxeo.com/browse/NXP-30578)

### Retention Addon - Extend Retention Period Button Behavior {{> tag 'dev'}} {{> tag 'admin'}}

A regression introduced in LTS 2021.7 was preventing the admin user to be able to extend the retention period of a retention rule on a document.
The behavior has been fixed and the button is now available.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30678](https://jira.nuxeo.com/browse/NXP-30678)

### Better management of the blob ProviderId when moving blob from a S3 blob provider to another S3 blob provider

We identified a regression in the nuxeo-coldstorage unit tests, the addon isn't able to retrieve/restore the blobs from the S3 cold storage. The root cause is that the former blobProviderId is still present in the key when moving the blob to the new S3 blob storage.

### Cannot launch Nuxeo LTS 2021 with MongoDB enabled on Windows

The MongoDB check at startup is fixed with a better path parsing.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30279](https://jira.nuxeo.com/browse/NXP-30279)

### The bulk action to recompute picture views doesn't update dublincore metadata

When bulk action `recomputeViews` is performed, `dc:modified` and `dc:lastModied` properties of the document(s) are updated, it shouldn't happen. We disabled the call to listener `dclistener` to fix that.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30705](https://jira.nuxeo.com/browse/NXP-30705)


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21528) is available in our bug tracking tool.

{{! /multiexcerpt}}
