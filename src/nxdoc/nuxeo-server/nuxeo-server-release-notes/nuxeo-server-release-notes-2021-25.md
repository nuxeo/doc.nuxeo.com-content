---
title: LTS 2021.25 / LTS 2021-HF25
description: Discover what's new in LTS 2021.25 / LTS 2021-HF25
review:
   comment: ''
   date: '2022-08-29'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-25'}}
# What's New in LTS 2021.25 / LTS 2021-HF25

## NXQL Complex Property Correlations not working with MongoDB

Query with complex correlation for schemas with no prefix now works on mongodb

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31174](https://jira.nuxeo.com/browse/NXP-31174)

## Fix download context for renditions

Added a new DownloadContextBlobHolder and its writer for download permissions checking.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31166](https://jira.nuxeo.com/browse/NXP-31166)

## Fix NPE in 'subtypes' enricher when appending a disabled document type to an existing folderish document type

Disabled types are exluded from sub types listings. Type extending a disabled super type produces an ERROR log.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31155](https://jira.nuxeo.com/browse/NXP-31155)

## Fix Cannot deep copy java.lang.Integer

The error Cannot deep copy: java.lang.Integer is handled at Core level.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31148](https://jira.nuxeo.com/browse/NXP-31148)

## Unable to detect mimetype when uploading multipart form data

Send a clear message about multipart/form-data not being supported on nuxeo 2021

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31123](https://jira.nuxeo.com/browse/NXP-31123)

## Stream Management: Position endpoint to change consumer position

It is now possible to change computation positions without downtime

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31086](https://jira.nuxeo.com/browse/NXP-31086)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21753) is available in our bug tracking tool.

{{! /multiexcerpt}}
