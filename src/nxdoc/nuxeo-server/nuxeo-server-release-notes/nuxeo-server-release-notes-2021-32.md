---
title: LTS 2021.32 / LTS 2021-HF32
description: Discover what's new in LTS 2021.32 / LTS 2021-HF32
review:
   comment: ''
   date: '2023-01-20'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 2010
---

{{! multiexcerpt name='nuxeo-server-updates-2021-32'}}
# What's New in LTS 2021.32 / LTS 2021-HF32

## Fix Fulltext Extraction for Blobs Fetched From a Document Dynamic Facet

BlobExtractor now also extracts a path added with dynamic facets.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31539](https://jira.nuxeo.com/browse/NXP-31539)

## Fix CSV Export for String Values Which Starts With a Dash

CSV injectable values are now escaped.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31466](https://jira.nuxeo.com/browse/NXP-31466)

## Fix Removal of ‘aceinfo’ Directory Entries When a Document Is Deleted


A garbage collector cleans the `aceinfo` directory when a document is deleted.

This is done in transaction, asynchronously.
To do so, an index has been added to the `aceinfo` schema, on the property  on MongoDB for new instances.

On existing nuxeo instances, an index referencing the `docId` in the `aceinfo` collection/table needs to be added to identify garbage `aceinfo` and remove them.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31459](https://jira.nuxeo.com/browse/NXP-31459)

## Fix Parsing of null Dates

Handle null `SavedSearchRequest` params.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31456](https://jira.nuxeo.com/browse/NXP-31456)

## Save Retained Properties in ecm:retainedProperties

Retained properties are stored under `ecm:retainedProperties` system properties on each document instance at the time it becomes a record.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31397](https://jira.nuxeo.com/browse/NXP-31397)

## Evolve Retention Core API to Specify a List of Blob Property to Be Retained

It is now possible to retain other properties than `file:content`.

You can specify other properties to be retained with such contrib:
```
  <require>org.nuxeo.ecm.core.CoreExtensions</require>

  <extension target=org.nuxeo.ecm.core.schema.TypeService point=schema>
    <property schema=files name=files/*/file retainable=true />
  </extension>
```
Note that file:content (aka main content) is always retained.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31396](https://jira.nuxeo.com/browse/NXP-31396)

## Retention on Metadata

### Dispatch Retainable Simple Blob List to the Record Blob Provider

Retaining multivalued blob properties is not supported in this release. This feature is planned for HF34.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31665](https://jira.nuxeo.com/browse/NXP-31665)

# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22017) is available in our bug tracking tool.

{{! /multiexcerpt}}
