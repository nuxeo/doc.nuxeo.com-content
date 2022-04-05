---
title: LTS 2021.17 / LTS 2021-HF17
description: Discover what's new in LTS 2021.17 / LTS 2021-HF17
review:
   comment: ''
   date: '2022-03-14'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 4000
---

{{! multiexcerpt name='nuxeo-server-updates-2021-17'}}
# What's New in LTS 2021.17 / LTS 2021-HF17

## Nuxeo Server

### Tomcat 9.0.59

The Nuxeo Platform now relies on Tomcat 9.0.59.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30906](https://jira.nuxeo.com/browse/NXP-30906)

### PostgreSQL JDBC driver 42.3.3

PostgreSQL JDBC driver is upgraded to version 42.3.3.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30887](https://jira.nuxeo.com/browse/NXP-30887)

## Core Storage

### Remove WARN on MongoDBIndexCreator Because Index is not in Background

The WARN message on MongoDBIndexCreator because index is not in background has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30900](https://jira.nuxeo.com/browse/NXP-30900)

### Possible Contention on OAuth When Account Has Many Tokens

MongoDB directory entries are now ordered efficiently by date with the `DocumentModelComparator` performing efficient sorting on date time properties.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30891](https://jira.nuxeo.com/browse/NXP-30891)

### Fix NPE in `updateRealACL`

`UpdateReadAcl` action no longer produces error on deleted document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30890](https://jira.nuxeo.com/browse/NXP-30890)

### Add Property to Set `max_expansion` on `match_phrase_prefix operator`

`max_expansion` on `match_phrase_prefix` is set with the property `elastic.max_expansions`.

Max expansions can be configured through the Configuration service with a contribution like

```
    <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
        <property name="elasticsearch.max_expansions">200</property>
    </extension>
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30878](https://jira.nuxeo.com/browse/NXP-30878)

### Fix Null Pointer Exception on Async Automation Scripting

Automation scripting can now be run in an async way.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30876](https://jira.nuxeo.com/browse/NXP-30876)

### Allow Automation Contributions to be Disabled

Allow Chains and Scripts to be disabled by contributions.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30761](https://jira.nuxeo.com/browse/NXP-30761)

### GC (Orphan Binary Cleanup) - Add Logging

Traces have been added to follow the binary garbage collector execution.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30614](https://jira.nuxeo.com/browse/NXP-30614)

## Major Bug Fixes

### Fix ACLS Enricher on Document Property

ACLs are now accessible on fully loaded detached documents

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30846](https://jira.nuxeo.com/browse/NXP-30846)

### Improve KV TransientStore GC Resiliency

The garbage collection for transient stores is more resilient.

Transient GC was not working in environments with segregated front and worker nodes.
As the result, transient stores in S3 might have accumulated lots of data and the current transient GC implementation might not be able to clean them efficiently.

In this case, it is recommended to purge manually all objects older than 3 days on transient stores before applying this hotfix.  

This can be done using scripts or by creating an Object Lifecycle Management rule with a correct prefix `/transient_*/`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30851](https://jira.nuxeo.com/browse/NXP-30851)

### Fix Marshalling of DocumentModel with Unauthenticated Requests

DocumentModel marshalling works with unauthenticated requests.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30854](https://jira.nuxeo.com/browse/NXP-30854)

### Make Type Mapping in Template Rendering Addon Cluster Aware

Type mapping in Template Rendering addon is shared across all cluster nodes.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30868](https://jira.nuxeo.com/browse/NXP-30868)

### Fix `DocumentModel#isVersion` Value When Document Is Fetched From Elasticsearch

The property isVersion is set on a `DocumentModel` fetch from Elasticsearch.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30888](https://jira.nuxeo.com/browse/NXP-30888)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21614) is available in our bug tracking tool.

{{! /multiexcerpt}}
