---
title: Version 3.0.24
description: Discover what's new in Web UI 3.0.24.
review:
    comment: ''
    date: '2023-07-05'
    status: ok
toc: true
labels:
tree_item_index: 980
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2021 (Version 3.0.24)

This is a bugfix release.

### Noteworthy Changes

- Quick search reduces queries sent to the server to improve performance.<br/>[[WEBUI-1120](https://jira.nuxeo.com/browse/WEBUI-1120)]
- Preview is correctly displayed for custom properties when using the nuxeo-document-preview element.<br/>[[ELEMENTS-1617](https://jira.nuxeo.com/browse/ELEMENTS-1617)]
- Entries made in a nuxeo-data-table element during an edit are correctly updated.<br/>[[WEBUI-831](https://jira.nuxeo.com/browse/WEBUI-831)]
- Files added in a nuxeo-data-table element can be removed as well during the edit.<br/>[[ELEMENTS-1629](https://jira.nuxeo.com/browse/ELEMENTS-1629)]
- The "Clear" button resets the nuxeo-checkbox-aggregation elements in a search form.<br/>[[WEBUI-1047](https://jira.nuxeo.com/browse/WEBUI-1047)]
- Search actions are still displayed after using the browser refresh function.<br/>[[WEBUI-1140](https://jira.nuxeo.com/browse/WEBUI-1140)]
- Searches can still be saved after using the browser refresh function and while the drawer is closed.<br/>[[WEBUI-1169](https://jira.nuxeo.com/browse/WEBUI-1169)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.24%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.


{{! /multiexcerpt}}
