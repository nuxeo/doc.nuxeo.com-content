---
title: LTS 2023.5 / LTS 2023-HF05
description: Discover what's new in LTS 2023.5 / LTS 2023-HF05
review:
   comment: ''
   date: '2023-12-19'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 800
---

{{! multiexcerpt name='nuxeo-server-updates-2023-5'}}
# What's New in LTS 2023.5 / LTS 2023-HF05

## The Nuxeo-Mail-Amazon-Ses Is Not Released Automatically


The nuxeo-mail-amazon-ses-package is now released automatically.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32177](https://jira.nuxeo.com/browse/NXP-32177)

## Unescaped XML Reserved Characters Need to Be Escaped in Default-SMTP-Sender-Config


Default mail sender contributions values are now escaped.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32176](https://jira.nuxeo.com/browse/NXP-32176)

## Stop Chained Converter if the Previous Sub-Converter Returns an Empty Result


Chain conversions are stopped and return null when one of the subconverters returns empty, null main blob or null result.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32129](https://jira.nuxeo.com/browse/NXP-32129)

## Fix Results Selection Actions Made From Multi-Repository Search Results


The "nuxeo.bulk.download.multi.repositories" nuxeo.conf property alllows to call the "Download All as Zip" action on a list of documents from multiple repositories.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31487](https://jira.nuxeo.com/browse/NXP-31487)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22626) is available in our bug tracking tool.

{{! /multiexcerpt}}
