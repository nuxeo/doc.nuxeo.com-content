---
title: LTS 2021.13 / LTS 2021-HF13
description: Discover what's new in LTS 2021.13 / LTS 2021-HF13
review:
   comment: ''
   date: '2022-01-05'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 5100
---

{{! multiexcerpt name='nuxeo-server-updates-2021-13'}}
# What's New in LTS 2021.13 / LTS 2021-HF13

## Nuxeo Server

### Core Storage

#### Bulk SetPropertiesAction - VersioningOption Parameter Does Not Take Effect When Versioning Service Is Extended via XML Extension

The versioning policy order lower than 10 is enforced.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30700](https://jira.nuxeo.com/browse/NXP-30700)

#### Provide Options at `nuxeo.conf` Level to Tune Bulk Recompute Thumbnails

New options are configurable in nuxeo.conf for bulk action concurrency.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30607](https://jira.nuxeo.com/browse/NXP-30607)

#### Remove the Assignment to the ZIP Extra Field to Produce Correct ZIP

The extra field setting can now be disabled when doing Nuxeo IO ZIP export.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30713](https://jira.nuxeo.com/browse/NXP-30713)

#### Make MailMessageBlobHolder Depend on MailMessage Inheritance

MailMessageBlobHolder depends on MailMessage facet.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30637](https://jira.nuxeo.com/browse/NXP-30637)

#### Offer a Configuration Option to Remove the Mobile App Banner Notification

A configuration parameter is added to remove the mobile app banner notification.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-28535](https://jira.nuxeo.com/browse/NXP-28535)

### Packaging / Distribution / Installation

#### Upgrade Apache log4j to 2.16.0

Upgrade Apache log4j to 2.16.0

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30764](https://jira.nuxeo.com/browse/NXP-30764)

#### Upgrade Apache log4j to 2.15.0

Upgrade Apache log4j to 2.15.0

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30756](https://jira.nuxeo.com/browse/NXP-30756)

#### Add Support of SHA512 to PasswordHelper

Passwords can be encrypted by SHA-512 algorithm.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30744](https://jira.nuxeo.com/browse/NXP-30744)

## Addons

### Retention - Make the New S3 binary Manager Fully Compliant

The new S3 binary Manager is fully compliant with the retention addon

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30716](https://jira.nuxeo.com/browse/NXP-30716)

## Major Bug Fixes

### Make GC Work Correctly When Bucket Versioning Is Enabled

The binary GC works correctly when bucket versioning is enabled.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30743](https://jira.nuxeo.com/browse/NXP-30743)

### Errors When Querying for Users and Groups

Page Providers on users and groups correctly serialize the response.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30719](https://jira.nuxeo.com/browse/NXP-30719)

### Improve Robustness of DBSSession.remove(String rootId) wrt Reference of Non-existent Proxies

A document can be removed when it's a target of a deleted proxy.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30545](https://jira.nuxeo.com/browse/NXP-30545)

### Rework Async Binary Metadata Process

The binary metadata synchronization can now work asynchronously.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24760](https://jira.nuxeo.com/browse/NXP-24760)

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21552) is available in our bug tracking tool.

{{! /multiexcerpt}}
