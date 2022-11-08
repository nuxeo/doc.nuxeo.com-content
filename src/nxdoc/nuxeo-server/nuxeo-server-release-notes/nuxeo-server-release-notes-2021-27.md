---
title: LTS 2021.27 / LTS 2021-HF27
description: Discover what's new in LTS 2021.27 / LTS 2021-HF27
review:
   comment: ''
   date: '2022-10-10'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-27'}}
# What's New in LTS 2021.27 / LTS 2021-HF27

## Fix TestAggregates Random Failure

We now reset es index before each TestAggregates's test execution.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31305](https://jira.nuxeo.com/browse/NXP-31305)

## Indexing Should Support Corrupted Properties

Elasticsearch indexing is more robust by skipping the corrupted documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31282](https://jira.nuxeo.com/browse/NXP-31282)

## Index Bulk Action Should Not Terminate on Corrupted Documents

Bulk computation are now resilient to corrupted documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31268](https://jira.nuxeo.com/browse/NXP-31268)

## Make Sure DocumentNotFound Exception Message Always Includes the Doc id

DocumentNotFound exception message always includes the doc id.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31267](https://jira.nuxeo.com/browse/NXP-31267)

## Fix NPE on SimpleTemplateBasedFactory setACL

Refrain from setting ACL on placeless documents.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31265](https://jira.nuxeo.com/browse/NXP-31265)

## Fix Login Box Width Configuration

Login box width configuration is taken into account by the login.jsp page.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31263](https://jira.nuxeo.com/browse/NXP-31263)

## Add a Default Language Property to the Login Page

A default locale has been added to the login page.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31258](https://jira.nuxeo.com/browse/NXP-31258)

## Improve Accessibility of Login Page: Change Title

i18n Login prefix has been added.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31257](https://jira.nuxeo.com/browse/NXP-31257)

## setProperties Bulk Action Should Report Errors

The setProperties bulk action now reports the number of documents not updated in its status.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31256](https://jira.nuxeo.com/browse/NXP-31256)

## setProperties Bulk Action Should Handle Constraint Violation

setProperties Bulk action handles constraint violations.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31224](https://jira.nuxeo.com/browse/NXP-31224)

## Fix Unescape of Backslash of Variable's Value in nuxeo.conf

Backslash are correctly escaped in nuxeo.conf.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31197](https://jira.nuxeo.com/browse/NXP-31197)

## Parameterised the Benchmark Pipeline

You can now set up the nb of api and worker nodes as job parameters when launching benchmark.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30998](https://jira.nuxeo.com/browse/NXP-30998)

## Picture Conversions Not Computed for Version Even if It Contains Generic Image Preview

Picture views are now recomputed on versions with generic views.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-30670](https://jira.nuxeo.com/browse/NXP-30670)

## Update README.md for `nuxeo-platform-login-keycloak`

A nuxeo-keycloak marketplace is now available, see [README](https://github.com/nuxeo/nuxeo-lts/blob/2021/packages/nuxeo-keycloak-package/README.md) for configuration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-29082](https://jira.nuxeo.com/browse/NXP-29082)

## Add a Marketplace Package for Keycloak

A nuxeo-keycloak marketplace is now available, see [README](https://github.com/nuxeo/nuxeo-lts/blob/2021/packages/nuxeo-keycloak-package/README.md) for configuration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-27365](https://jira.nuxeo.com/browse/NXP-27365)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=21830) is available in our bug tracking tool.

{{! /multiexcerpt}}
