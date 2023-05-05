---
title: LTS 2021.36 / LTS 2021-HF36
description: Discover what's new in LTS 2021.36 / LTS 2021-HF36
review:
   comment: ''
   date: '2023-04-13'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-36'}}
# What's New in LTS 2021.36 / LTS 2021-HF36

## Fix Directory Invalidation Propagation in Cluster Mode


PubSub now uses the stream implementation by default.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31817](https://jira.nuxeo.com/browse/NXP-31817)

## Avoid NPE on Stream Scaling Metric


Scaling metric stream doesn't lead to NullPointerException.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31813](https://jira.nuxeo.com/browse/NXP-31813)

## Enable Elastic Compatibilty Mode to Access Elastic 8 Cluster


Enable compatibility mode to access Elastic 8 Cluster

It is now possible to connect Nuxeo to an Elasticsearch 8.x cluster using the compatibility mode.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31809](https://jira.nuxeo.com/browse/NXP-31809)

## Add an nuxeo.conf Property to Disable Immediate Blob Garbage Collection


Immediate Document's blobs Garbage Collection can be disabled with a nuxeo.conf property

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31794](https://jira.nuxeo.com/browse/NXP-31794)

## Backport H2 Version 2.x Upgrade to LTS 2021


H2 is upgraded to latest 2.x version

The H2 2.x upgrade comes with several breaking changes from H2 itself.

In case of upgrade, you have to delete the `nxserver/data/h2` folder before starting Nuxeo.
WARNING: In development environments you will lose data.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31785](https://jira.nuxeo.com/browse/NXP-31785)

## Use BouncyCastle Instead of the JDK API to Decrypt Files


Encrypted files are now decrypted with the BouncyCastle library.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31780](https://jira.nuxeo.com/browse/NXP-31780)

## Migration Endpoint Fails Silently When Getting an Unexisting Migration Id


Migration Object returns 404 NOT FOUND on unknown migration ids

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31766](https://jira.nuxeo.com/browse/NXP-31766)

## Able to Create Directory Entry Without Id Property Using Add Directly API


It is no longer possible to create a MongoDB directory entry without an id

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31734](https://jira.nuxeo.com/browse/NXP-31734)

## Improve CoreFeature to Wait for the End of Document's Blob GC


CoreFeature now waits for document's blobs GC

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31714](https://jira.nuxeo.com/browse/NXP-31714)

## Prevent Base64-Encoded Images From Being Sent to Elasticsearch


Only text is indexed on HTML Note document

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31698](https://jira.nuxeo.com/browse/NXP-31698)

## Picture Metadata Remains After Removing Blob


Picture info is reset whenever views are recomputed

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31342](https://jira.nuxeo.com/browse/NXP-31342)

## WOPI Button Doesn't Appear for Files With Uppercase Office Extensions (DOCX, XLSX, Etc)


WOPI handles uppercase file extensions.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30982](https://jira.nuxeo.com/browse/NXP-30982)

## Keep Original Aspect Ratio for the Storyboard Pictures


Storyboard pictures now preserve the video original ratio

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29615](https://jira.nuxeo.com/browse/NXP-29615)

## Create an Abstract Implementation of Migrator That Leverages BAF


The AbstractBulkMigrator was added to Nuxeo for migration leveraging the Bulk Action Framework

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-26918](https://jira.nuxeo.com/browse/NXP-26918)

## Review and Fix ElasticSearch Document Version Indexing


ecm:versionDescription and ecm:versionCreated are now indexed in elasticsearch

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24524](https://jira.nuxeo.com/browse/NXP-24524)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22239) is available in our bug tracking tool.

{{! /multiexcerpt}}
