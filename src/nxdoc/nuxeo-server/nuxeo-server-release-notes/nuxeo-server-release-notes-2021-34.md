---
title: LTS 2021.34 / LTS 2021-HF34
description: Discover what's new in LTS 2021.34 / LTS 2021-HF34
review:
   comment: ''
   date: '2023-02-28'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
---

{{! multiexcerpt name='nuxeo-server-updates-2021-34'}}
# What's New in LTS 2021.34 / LTS 2021-HF34

## Print a Log Message When Nuxeo Is Shutting Down


A log message is printed when Nuxeo is shutting down

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31674](https://jira.nuxeo.com/browse/NXP-31674)

## Fix Retainable Simple Blob List Not Properly Dispatched to the Record Blob Provider


Retainable simple blob list are now properly dispatched to the record blob provider

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31665](https://jira.nuxeo.com/browse/NXP-31665)

## Add a Page Provider Management Endpoint


There is a new Management endpoint to list registered page providers

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31643](https://jira.nuxeo.com/browse/NXP-31643)

## Fix Keycloack Typo


The Keycloak package has a correct name for deployment and configuration.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31642](https://jira.nuxeo.com/browse/NXP-31642)

## Make Kafka Replication Factor Param Optional


It is now possible to rely on Kafka broker configuration for topic replication factor

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31621](https://jira.nuxeo.com/browse/NXP-31621)

## Make Workflow Escalation Check Scalable


Workflow Escalation Rules execution on Bulk Action Framework

To improve resilience and scaling, the Workflow Escalation Rules are now performed with the Bulk Action Framework.

You can enable back the WorkManager implementation by setting this _nuxeo.conf_ property:
```Java
nuxeo.document.routing.escalation.legacy=true
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31616](https://jira.nuxeo.com/browse/NXP-31616)

## Document Modification Event Fired Even if Document Is Not Updated


The "Document updated" (documentModified) event is no longer audited if document was not dirty

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31531](https://jira.nuxeo.com/browse/NXP-31531)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22115) is available in our bug tracking tool.

{{! /multiexcerpt}}
