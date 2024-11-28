---
title: Version 3.1.14
description: Discover what's new in Web UI 3.1.14.
review:
  comment: ''
  date: '2024-11-28'
  status: ok
toc: true
labels:
tree_item_index: 987
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.14)

- The drawer width will be dynamic and will change based on the value of --nuxeo-sidebar-width.<br/>[[WEBUI-1094](https://hyland.atlassian.net/browse/WEBUI-1094)]

- Fixed placeholder width to fully display text in nuxeo-user-suggestion with multiple=true.<br/>[[ELEMENTS-1730](https://hyland.atlassian.net/browse/ELEMENTS-1730)]

- Tags will be converted to lowercase to prevent duplication before submission.<br/>[[ELEMENTS-1765](https://hyland.atlassian.net/browse/ELEMENTS-1765)]

- Added a tooltip to nuxeo-path-suggestion to display the full path on hover.<br/>[[ELEMENTS-1768](https://hyland.atlassian.net/browse/ELEMENTS-1768)]

### Other Noteworthy Changes

- Resolved functional and accessibility test failures in WebUI pipelines that were caused by the latest Chrome version.<br/>[[WEBUI-1602](https://hyland.atlassian.net/browse/WEBUI-1602)]

- Updated search and cloud test cases to resolve random failures in functional tests pipeline.<br/>[[WEBUI-1606](https://hyland.atlassian.net/browse/WEBUI-1606)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.1.14%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C 'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
