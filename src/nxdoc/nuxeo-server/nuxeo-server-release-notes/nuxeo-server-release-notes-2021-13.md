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
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-13'}}
# What's New in LTS 2021.13 / LTS 2021-HF13

## Upgrade Apache log4j to 2.16.0

Upgrade Apache log4j to 2.16.0

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30764](https://jira.nuxeo.com/browse/NXP-30764)

## Upgrade Apache log4j to 2.15.0

Upgrade Apache log4j to 2.15.0

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30756](https://jira.nuxeo.com/browse/NXP-30756)

## Add support of SHA512 to PasswordHelper

Passwords can be encrypted by SHA-512 algorithm.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30744](https://jira.nuxeo.com/browse/NXP-30744)

## Make GC work correctly when bucket versioning is enabled

The binary GC works correctly when bucket versioning is enabled.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30743](https://jira.nuxeo.com/browse/NXP-30743)

## Errors when querying for Users and Groups

Page Providers on users and groups correctly serialize the response.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30719](https://jira.nuxeo.com/browse/NXP-30719)

## Make the New S3 binary Manager fully compliant with the retention addon

The new S3 binary Manager is fully compliant with the retention addon

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30716](https://jira.nuxeo.com/browse/NXP-30716)

## Remove the assignment to the ZIP extra field to produce correct ZIP

The extra field setting can now be disabled when doing Nuxeo IO ZIP export.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30713](https://jira.nuxeo.com/browse/NXP-30713)

## Bulk SetPropertiesAction - VersioningOption parameter does not take effect when Versioning Service is extended via XML Extension

The versioning policy order lower than 10 is enforced.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30700](https://jira.nuxeo.com/browse/NXP-30700)

## Make MailMessageBlobHolder depend on MailMessage inheritance

MailMessageBlobHolder depends on MailMessage facet.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30637](https://jira.nuxeo.com/browse/NXP-30637)

## Provide options at nuxeo.conf level to tune Bulk recompute thumbnails

New options are configurable in nuxeo.conf for bulk action concurrency.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30607](https://jira.nuxeo.com/browse/NXP-30607)

## Improve robustness of DBSSession.remove(String rootId) wrt reference of non-existent proxies

A document can be removed when it's a target of a deleted proxy.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-30545](https://jira.nuxeo.com/browse/NXP-30545)

## Offer a configuration option to remove the mobile app banner notification

A configuration parameter is added to remove the mobile app banner notification.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-28535](https://jira.nuxeo.com/browse/NXP-28535)

## Rework async binary metadata process

The binary metadata synchronization can now work asynchronously.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-24760](https://jira.nuxeo.com/browse/NXP-24760)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21552) is available in our bug tracking tool.

{{! /multiexcerpt}}
