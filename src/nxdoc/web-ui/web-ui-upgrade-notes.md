---
title: Web UI Upgrade Notes
description: Detailed upgrade notes to transition to the latest Web UI version.
review:
    comment: ''
    date: '2023-04-13'
    status: ok
toc: true
labels:
tree_item_index: 550
---

## Upgrading to NodeJS 18

Starting from the Web UI release planned on March 18, 2024, Nuxeo Web UI will upgrade its requirements for its functional tests stacks and accessibility tests stack. Any UI functional tests written in your project using NodeJS 14 or lower will need to be migrated to NodeJS 18.

### Why are you Doing This?

This change is necessary to keep our stack up to date and secure.

### Does it Impact My Projects?

This change is transparent for a vast majority of projects. It only impacts your projects if ALL of these conditions apply:
* Your project includes one or more UI functional tests.
* These tests leverage the [functional test stack provided by Nuxeo Web UI](https://github.com/nuxeo/nuxeo-web-ui/tree/maintenance-3.1.x/ftest).
* These tests are written using a version of NodeJS < 18.

Otherwise, you can safely ignore this notice.

### How can I Test?

https://nos-preprod-connect.nuxeocloud.com/nuxeo/site/marketplace/package/nuxeo-web-ui?version=3.0.30-rc.007
https://nos-preprod-connect.nuxeocloud.com/nuxeo/site/marketplace/package/nuxeo-web-ui?version=3.1.5-rc.003 

### Can I Upgrade to LTS 2023 Without Doing This First?

This change is separate from a technical upgrade to LTS 2023.

//TODO latest release web-ui-release-notes-3-1-3 3-0-29

{{{multiexcerpt 'upgrade-notes' page='web-ui-upgrade-notes-lts-2023'}}}
