---
title: LTS 2021.44 / LTS 2021-HF44
description: Discover what's new in LTS 2021.44 / LTS 2021-HF44
review:
   comment: ''
   date: '2023-09-27'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-44'}}
# What's New in LTS 2021.44 / LTS 2021-HF44

## Fix TestOperationRegistration#testMixingOperationTypes Random Test Faillure on Log Capture Assertions


TestOperationRegistration now tests mixing OperationTypes more reliably.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32077](https://jira.nuxeo.com/browse/NXP-32077)

## Don't Depend on Private YUM Repository to Install Perl-Image-ExifTool in Docker Images


The perl-Image-ExifTool package was upgraded to the latest version, currently 12.60-1.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32074](https://jira.nuxeo.com/browse/NXP-32074)

## BulkMigrator Must Check the Bulk Command Completion Ends Without Error


Failing buk migration remains in its initial state and reports error message and code. 

In case of failing bulk migration, the status queried with:
```Java
curl -u <username>:<password> https://<hostname>/nuxeo/api/v1/management/migration/blob-keys-migration
```
will now return
```Java
{
 entity-type: migration,
 id: blob-keys-migration,
 description: Populate ecm:blobKeys property,
 descriptionLabel: migration.dbs.blob.keys,
 status: {
 state: empty,
 step: null,
 startTime: 0,
 pingTime: 0,
 progressMessage: null,
 progressNum: 0,
 progressTotal: 0,
 errorMessage: Invalid command produces an empty document set: ...,
 errorCode: 400,
 running: false
 },
 steps: []
}
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32071](https://jira.nuxeo.com/browse/NXP-32071)

## Add Libreoffice Command to 2021/2023 Docker Image


Add the libreoffice command to the Nuxeo Docker image

The `libreoffice` command has been added to the Nuxeo Docker image as an alias to the `soffice` command.

This allows to use conversion leveraging ImageMagick on Office documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32068](https://jira.nuxeo.com/browse/NXP-32068)

## Reindex Document in Es When Unsetting Retention


Document is reindexed in elastic/opensearch backend whenever its ecm:isFlexibleRecord field changes

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32066](https://jira.nuxeo.com/browse/NXP-32066)

## Provide Request Attribute to Hold Username


The http request now contains the "user_name" attribute

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32063](https://jira.nuxeo.com/browse/NXP-32063)

## Make WOPI Work With HTTP Proxy


The proxy environment variables (nuxeo.http.proxy.*) are now used if defined to retrieve the WOPI discovery.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32057](https://jira.nuxeo.com/browse/NXP-32057)

## Fix Invalid CEN Header When Importing Nuxeo Zip Files


The extra field setting when doing a Nuxeo IO ZIP export has been completely removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32023](https://jira.nuxeo.com/browse/NXP-32023)

## Create Management API for Scheduler Tasks (Crontab)


A new scheduler management endpoint is available to list schedules, stop and start the scheduler service

See https://doc.nuxeo.com/rest-api/1/scheduler-endpoint/ for further details

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32004](https://jira.nuxeo.com/browse/NXP-32004)

## Nuxeo Must Invalidate All Other Sessions


HTTP session can now be invalidated by calling NuxeoHttpSessionMonitor.java.removeEntry(sessionId, true)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31980](https://jira.nuxeo.com/browse/NXP-31980)

## Able to Create Directory Entry With BLANK Id Property Using Add Directly API


It is no longer possible to create a directory entry with a blank id

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31933](https://jira.nuxeo.com/browse/NXP-31933)

## Set a Multi Platform Docker Images Build in CI


Docker Images are now built with Buildkit

Nuxeo Docker images are now built with Buildkit instead of Kaniko.

Buildkit allows us to handle the cross-platform aspect of Docker Images.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31273](https://jira.nuxeo.com/browse/NXP-31273)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22473) is available in our bug tracking tool.

{{! /multiexcerpt}}
