---
title: Upgrading Nuxeo Web UI from LTS 2021 to LTS 2023
description: Upgrade notes from Nuxeo Web UI LTS 2021 to LTS 2023
review:
    comment: ''
    date: '2023-03-28'
    status: ok
toc: true
labels:
tree_item_index: 998
hidden: true
---

{{! multiexcerpt name='upgrade-notes'}}

{{! multiexcerpt name='matching-notes'}}
{{#> callout type='info' heading='Release Notes'}}
This page mentions how to do a technical upgrade. Have a look at the [release notes]({{page page='web-ui-release-notes'}}) to see what's new.
{{/callout}}
{{! /multiexcerpt}}

## Upgrading Web UI from LTS 2021 to LTS 2023

#### Studio Projects

Studio configuration is made to be compatible and does not need to be migrated. If you did add customization in your project, see below for further details. Otherwise you can consider your project safe to use.

#### HTML Imports

Nuxeo added a compatibility layer to keep HTML imports working. There is no need to update HTML imports done in your code.

{{! /multiexcerpt}}