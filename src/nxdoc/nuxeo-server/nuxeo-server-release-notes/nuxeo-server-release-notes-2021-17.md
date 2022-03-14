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
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-17'}}
# What's New in LTS 2021.17 / LTS 2021-HF17

## Optionaly restrict createProxy API to administrators

The createProxy Java API is restricted to Write access on target document.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30914](https://jira.nuxeo.com/browse/NXP-30914)

## Restrict Document.CreateLiveProxy operation to administrators

null

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30913](https://jira.nuxeo.com/browse/NXP-30913)

## Remove WARN on MongoDBIndexCreator because index is not in background

The WARN message on MongoDBIndexCreator because index is not in background has been removed.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30900](https://jira.nuxeo.com/browse/NXP-30900)

## Possible contention on OAuth when account has many tokens

Mongodb directory entries are now ordered efficiently by date with the DocumentModelComparator performing efficient sorting on date time properties

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30891](https://jira.nuxeo.com/browse/NXP-30891)

## Fix NPE in updateRealACL

UpdateReadAcl action no longer produces error on deleted document

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30890](https://jira.nuxeo.com/browse/NXP-30890)

## Fix DocumentModel#isVersion value when document is fetched from Elasticsearch

The property isVersion is set on a DocumentModel fetch from Elasticsearch.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30888](https://jira.nuxeo.com/browse/NXP-30888)

## Upgrade PostgreSQL JDBC driver to version 42.3.3

PostgreSQL JDBC driver is upgraded to version 42.3.3

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30887](https://jira.nuxeo.com/browse/NXP-30887)

## Add property to set max_expansion on match_phrase_prefix operator

max_expansion on match_phrase_prefix is set with the property elastic.max_expansions.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30878](https://jira.nuxeo.com/browse/NXP-30878)

## Fix null pointer exception on async automation scripting

Automation scripting can now be run in an async way

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30876](https://jira.nuxeo.com/browse/NXP-30876)

## Make type mapping in Template Rendering addon cluster aware

Type mapping in Template Rendering addon is shared accross all cluster nodes.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30868](https://jira.nuxeo.com/browse/NXP-30868)

## Fix marshalling of DocumentModel with unauthenticated requests

DocumentModel marshalling works with unauthenticated requests

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30854](https://jira.nuxeo.com/browse/NXP-30854)

## Improve KV TransientStore GC resiliency

The garbage collection for transient stores is more resilient

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30851](https://jira.nuxeo.com/browse/NXP-30851)

## Fix ACLS enricher on document property

ACLs are now accessible on fully loaded detached documents

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30846](https://jira.nuxeo.com/browse/NXP-30846)

## Allow automation contributions to be disabled

Allow Chains and Scripts to be disabled by contributions

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30761](https://jira.nuxeo.com/browse/NXP-30761)

## GC (Orphan Binary Cleanup) - Add logging

Traces have been added to follow the binary garbage collector execution.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30614](https://jira.nuxeo.com/browse/NXP-30614)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21614) is available in our bug tracking tool.

{{! /multiexcerpt}}
