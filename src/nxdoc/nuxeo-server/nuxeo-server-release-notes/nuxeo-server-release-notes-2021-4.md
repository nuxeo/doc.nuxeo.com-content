---
title: LTS 2021.4 / LTS 2021-HF04
description: Discover what's new in LTS 2021.4 / LTS 2021-HF04
review:
   comment: ''
   date: '2021-05-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 8500
---

{{! multiexcerpt name='nuxeo-server-updates-2021-4'}}
# What's New in LTS 2021.4 / LTS 2021-HF04

## Nuxeo Server

### Core Repository

#### Add an Index on the `nuxeo.aceinfo:id` Field for Mongodb Repository {{> tag 'admin'}} {{> tag 'dev'}}

In order to improve the performances of Nuxeo Platform for large repositories with MongoDB, a MongoDB index has been added by default on the field `aceinfo:id`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28861](https://jira.nuxeo.com/browse/NXP-28861)

## Major Bug Fixes

### Bulk Zip Download Doesn’t Create Audit Entry for Each Item Downloaded

Bulk Zip Download now adds an audit entry for all downloaded files.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30401](https://jira.nuxeo.com/browse/NXP-30401)

### Better Handle Workflow Definition Changes in a Cluster Architecture

Workflow cache now uses cluster invalidations to better manage workflow definition changes.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30200](https://jira.nuxeo.com/browse/NXP-30200)

### Fix User Schema Override Using Custom Fields

Missing columns are now correctly detected and added to the corresponding tables in the database.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30448](https://jira.nuxeo.com/browse/NXP-30448)

### Fix Elasticsearch Indexing of Property 'ecm:proxyVersionableId' for Proxies

The property 'ecm:proxyVersionableId' is now indexed in Elasticsearch. A reindexing is required for old documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30266](https://jira.nuxeo.com/browse/NXP-30266)

### Fix Re-Indexing of Proxy When Parent Folder of the Target Document Is Moved to the Trash

Proxies are now re-indexed when a live document is trashed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30219](https://jira.nuxeo.com/browse/NXP-30219)

### Fix Converter 'image2pdf'

For the documents without the 'pictures' facet, the conversion to PDF used to fail for images with a format other than JPEG, PNG, or GIF.

All image MIME types can now be converted to PDF.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30402](https://jira.nuxeo.com/browse/NXP-30402)

### Fix the Permission Check to Empty the Trash

The permission check to empty the trash has been fixed and it is now done on the immediate document and not the parent.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30417](https://jira.nuxeo.com/browse/NXP-30417)

### Fix Matching of Subconverters Source MIME Type

When a converter is defined as a subconverter (e.g any2pdf in. anyToPdfToThumbnail), Wildcards in MIME types are now allowed in chained converter subconverters.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30332](https://jira.nuxeo.com/browse/NXP-30332)

### Cannot Boot When Symlinking Nuxeo Server Directories

Nuxeo starts when Nuxeo directory uses symbolic link.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30454](https://jira.nuxeo.com/browse/NXP-30454)

### IMAP Connector - Handle Mails With Attachments Without Content-Disposition

Emails with attachments without Content-Disposition are correctly collected.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30062](https://jira.nuxeo.com/browse/NXP-30062)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21250) is available in our bug tracking tool.

{{#> callout type='info' heading='Upgrade Notes'}}
Refer to the [LTS 2021.1 upgrade notes]({{page page='upgrade-from-lts-2019-to-lts-2021'}}) to transition to this version.
{{/callout}}

{{! /multiexcerpt}}
