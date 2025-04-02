---
title: Upgrading Nuxeo Web UI from LTS 2023 to LTS 2025
description: Upgrade notes from Nuxeo Web UI LTS 2023 to LTS 2025
review:
    comment: ''
    date: '2025-04-02'
    status: ok
toc: true
labels:
tree_item_index: 999
hidden: true
---

{{! multiexcerpt name='upgrade-notes'}}

## Upgrading Web UI from LTS 2023 to LTS 2025

Upgrading Web UI from LTS 2023 to LTS 2025 is a transparent process. It uses the same codebase as its LTS 2023 counterpart and requires no specific upgrade process.

#### Studio Projects

Studio configuration for Web UI is made to be compatible and does not need to be migrated. You simply need to update your dependencies in the [application definition]({{{page space='studio' page='application-definition'}}}) screen to their LTS 2025 counterpart in order to generate a package that will be compatible with LTS 2025.

{{! /multiexcerpt}}
