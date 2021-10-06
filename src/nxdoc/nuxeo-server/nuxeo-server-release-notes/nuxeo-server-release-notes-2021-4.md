---
title: Nuxeo Server LTS 2021 Release Notes
description: Discover what's new in LTS 2021.4 / LTS 2021 HF04
review:
   comment: ''
   date: '2021-05-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 10000
---

{{! multiexcerpt name='nuxeo-server-updates-2021'}}
# What's New in LTS 2021.4 / LTS 2021 HF 04

## Nuxeo Server

### Core Repository

#### Add an index on the `nuxeo.aceinfo:id` field for MongoDB repository {{> tag 'admin'}} {{> tag 'dev'}}

In order to improve the performances of Nuxeo Platform for large repositories with MongoDB, a MongoDB index has been added by default on the field `aceinfo:id`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28861](https://jira.nuxeo.com/browse/NXP-28861)

## Major bug fixes

### Bulk Zip Download doesn't create Audit entry for each item downloaded

Bulk Zip Download now adds an audit entry for all downloaded files.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30401](https://jira.nuxeo.com/browse/NXP-30401)

### Better handle workflow definition changes in a cluster architecture

Workflow cache now uses cluster invalidations to better manage workflow definition changes.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30200](https://jira.nuxeo.com/browse/NXP-30200)

### Fix user schema override using custom fields

Missing columns are now correctly detected and added to the corresponding tables in the database.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30448](https://jira.nuxeo.com/browse/NXP-30448)

### Fix Elasticsearch indexing of property 'ecm:proxyVersionableId' for proxies

The property 'ecm:proxyVersionableId' is now indexed in Elasticsearch. A reindexing is required for old documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30266](https://jira.nuxeo.com/browse/NXP-30266)

### Fix re-indexing of proxy when parent folder of the target document is moved to the trash

Proxies are now re-indexed when live document is trashed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30219](https://jira.nuxeo.com/browse/NXP-30219)

### Fix converter 'image2pdf'

For the documents without the 'pictures' facet, the conversion to PDF used to fail for images with a format other than JPEG, PNG, or GIF.

All image MIME types can now be converted to PDF.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30402](https://jira.nuxeo.com/browse/NXP-30402)

### Fix the permission check to empty the trash

The permission check to empty the trash has been fixed and it is now done on the immediate document and not the parent.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30417](https://jira.nuxeo.com/browse/NXP-30417)

### Fix matching of subconverter's source MIME type

When a converter is defined as a subconverter (e.g any2pdf in. anyToPdfToThumbnail), Wildcards in MIME types are now allowed in chained converter subconverters.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30332](https://jira.nuxeo.com/browse/NXP-30332)

### Cannot boot when symlinking Nuxeo Server directories

Nuxeo starts when Nuxeo directory uses symbolic link.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30454](https://jira.nuxeo.com/browse/NXP-30454)

### IMAP Connector - Handle mails with attachments without Content-Disposition

Emails with attachments without Content-Disposition are correctly collected.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30062](https://jira.nuxeo.com/browse/NXP-30062)

# Learn more

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21250) is available in our bug tracking tool.

{{#> callout type='info' heading='Upgrade Notes'}}
Refer to the [LTS 2021.1 upgrade notes]({{page page='upgrade-from-lts-2019-to-lts-2021'}}) to transition to this version.
{{/callout}}

{{! /multiexcerpt}}
