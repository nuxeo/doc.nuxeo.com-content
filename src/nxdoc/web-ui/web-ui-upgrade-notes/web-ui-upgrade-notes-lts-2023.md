---
title: Upgrading Nuxeo Web UI from LTS 2021 to LTS 2023
description: Upgrade notes from Nuxeo Web UI LTS 2021 to LTS 2023
review:
    comment: ''
    date: '2023-03-28'
    status: ok
toc: true
labels:
tree_item_index: 999
hidden: true
---

{{! multiexcerpt name='upgrade-notes'}}

{{! multiexcerpt name='matching-notes'}}
{{#> callout type='info' heading='Release Notes'}}
This page mentions how to do a technical upgrade. Have a look at the [release notes]({{page page='web-ui-release-notes'}}) to see what's new.
{{/callout}}
{{! /multiexcerpt}}

## Upgrading Web UI from LTS 2021 to LTS 2023

Upgrading Web UI from LTS 2021 to LTS 2023 is a transparent process. It uses the same codebase as its LTS 2021 counterpart and requires no specific upgrade process.

#### Studio Projects

Studio configuration for Web UI is made to be compatible and does not need to be migrated. You simply need to update your dependencies in the [application definition]({{{page space='studio' page='application-definition'}}}) screen to their LTS 2023 counterpart in order to generate a package that will be compatible with LTS 2023.

{{! /multiexcerpt}}
