---
title: LTS 2021.31 / LTS 2021-HF31
description: Discover what's new in LTS 2021.31 / LTS 2021-HF31
review:
   comment: ''
   date: '2023-01-04'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-31'}}
# What's New in LTS 2021.31 / LTS 2021-HF31

## Improve Tracing Related to Workmanager

Improved tracing related to Work and ShellExecutor.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31537](https://jira.nuxeo.com/browse/NXP-31537)

## Add MongoDB Index on ecm:Isversion

New MongoDB index on `ecm:isVersion`.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31530](https://jira.nuxeo.com/browse/NXP-31530)

## Fire an Event Before a Document Is Being Trashed or Untrashed

`aboutToTrash` and `aboutToUntrash` inline events are now fired before trashing or untrashing a document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31514](https://jira.nuxeo.com/browse/NXP-31514)

## Add isTrashed Method on DocumentWrapper

DocumentWrapper now exposes an `isTrashed()` method.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31513](https://jira.nuxeo.com/browse/NXP-31513)

## Fix Index Creation in MongoDB

MongoDB indexes creation takes correctly into account the schema prefix when not defined.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31422](https://jira.nuxeo.com/browse/NXP-31422)

## Remove Kafka AdminClient Warn When Using SSL

The Kafka clients have been bumped to version 2.8.0.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29597](https://jira.nuxeo.com/browse/NXP-29597)

## Scalable Orphan Version Cleanup

A new bulk action is available to garbage collect orphaned versions.

The former implementation to remove the orphaned versions did not scale for a large repository.

The new BAF implementation will handle large repositories even though invoking such garbage collection involves a heavy long-running process that should be executed on-demand only.

The garbage collection of orphaned versions is exposed in the management API, see the [related documentation](https://doc.nuxeo.com/rest-api/1/management-endpoint/)

A version stays referenced and therefore is not removed if:
 - any proxy points to a version in the version history of any live document
 - or in the case of a tree snapshot if there is a snapshot containing a version in the version history of any live document.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27139](https://jira.nuxeo.com/browse/NXP-27139)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21907) is available in our bug tracking tool.

{{! /multiexcerpt}}
