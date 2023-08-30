---
title: LTS 2023.2 / LTS 2023-HF02
description: Discover what's new in LTS 2023.2 / LTS 2023-HF02
review:
   comment: ''
   date: '2023-08-30'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-2'}}
# What's New in LTS 2023.2 / LTS 2023-HF02

## Fix DocumentSecurityException When Turning a Retained Flexible Record to Enforced Record


Retained flexible records documents can be turned into enforced records

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-32040](https://jira.nuxeo.com/browse/NXP-32040)

## Prevent Flexible Record Creation if Server Is Running in Strict (Aka Old Compliance Mode)


Flexible Records are not possible when running retention in strict mode

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-32028](https://jira.nuxeo.com/browse/NXP-32028)

## Escape Dash in the Automation Operation Category


Dashes in Automation operation categories are now escaped.

<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-32011](https://jira.nuxeo.com/browse/NXP-32011)

## Produce addNotNullViolation for '[Null]' for Multivalued String Properties


You can now make the elements of a multi-valued property non nullable by putting {{nxsv:nillable=false}} onto the {{xs:list}} xml element. 

To configure the elements of a multi-valued scalar property non nullable you can do:


<i class=fa fa-long-arrow-right aria-hidden=true></i>&nbsp;More on JIRA ticket [NXP-31918](https://jira.nuxeo.com/browse/NXP-31918)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22429) is available in our bug tracking tool.

{{! /multiexcerpt}}
