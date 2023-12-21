---
title: LTS 2021.47 / LTS 2021-HF47
description: Discover what's new in LTS 2021.47 / LTS 2021-HF47
review:
   comment: ''
   date: '2023-12-18'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1860
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-47'}}
# What's New in LTS 2021.47 / LTS 2021-HF47

## Stop Chained Converter if the Previous Sub-Converter Returns an Empty Result


Chain conversions are stopped and return null when one of the subconverters returns empty, null main blob or null result.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32129](https://jira.nuxeo.com/browse/NXP-32129)

## Fix Results Selection Actions Made From Multi-Repository Search Results


The "nuxeo.bulk.download.multi.repositories" nuxeo.conf property alllows to call the "Download All as Zip" action on a list of documents from multiple repositories.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-31487](https://jira.nuxeo.com/browse/NXP-31487)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22625) is available in our bug tracking tool.

{{! /multiexcerpt}}
