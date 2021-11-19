---
title: Version 3.0.8
description: Discover what's new in Web UI 3.0.8.
review:
    comment: ''
    date: '2021-11-18'
    status: ok
toc: true
labels:
tree_item_index: 996
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.8)

This is a bugfix release.

### Noteworthy Changes

- Accessibility: links to download picture renditions are now mentioned when using a screen reader.<br/>[[WEBUI-353](https://jira.nuxeo.com/browse/WEBUI-353)]
- Fixed a regression introduced in version `3.0.7` where selection in a `nuxeo-data-table` element would not work anymore.<br/>[[ELEMENTS-1423](https://jira.nuxeo.com/browse/ELEMENTS-1423)]
- Column headers and the data below are correctly aligned.<br/>[[ELEMENTS-1430](https://jira.nuxeo.com/browse/ELEMENTS-1430)]
- The Clear button in the search form triggers and updates the results.<br/>[[ELEMENTS-1416](https://jira.nuxeo.com/browse/ELEMENTS-1416)]
- The username is aligned with the other text in the collections drawer.<br/>[[WEBUI-242](https://jira.nuxeo.com/browse/WEBUI-242)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.8'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
