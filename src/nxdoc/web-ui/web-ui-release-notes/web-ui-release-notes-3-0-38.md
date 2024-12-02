---
title: Version 3.0.38
description: Discover what's new in Web UI 3.0.38.
review:
  comment: ''
  date: '2024-11-28'
  status: ok
toc: true
labels:
tree_item_index: 967
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2021 (Version 3.0.38)

- The drawer width will be dynamic and will change based on the value of --nuxeo-sidebar-width.<br/>[WEBUI-1094]

- Fixed placeholder width to fully display text in nuxeo-user-suggestion with multiple=true.<br/>[[ELEMENTS-1730]

- Tags will be converted to lowercase to prevent duplication before submission.<br/>[ELEMENTS-1765]

- Added a tooltip to nuxeo-path-suggestion to display the full path on hover.<br/>[ELEMENTS-1768]

### Other Noteworthy Changes

- Resolved functional and accessibility test failures in WebUI pipelines that were caused by the latest Chrome version.<br/>[WEBUI-1602]

- Updated search and cloud test cases to resolve random failures in functional tests pipeline.<br/>[WEBUI-1606]


{{! /multiexcerpt}}
