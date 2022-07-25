---
title: Version 3.0.13
description: Discover what's new in Web UI 3.0.14.
review:
    comment: ''
    date: '2022-07-25'
    status: ok
toc: true
labels:
tree_item_index: 990
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.14)

This release improves accessibility.

## Accessibility: nuxeo-date-picker Element Upgrade

The `nuxeo-date-picker` element is based on the [vaadin-date-picker](https://vaadin.com/docs/latest/components/date-picker). We upgraded the underlying element while making sure this remains a transparent upgrade with no impact on your existing application. As the element is widely used throughout Web UI, this reduces significantly accessibility violations.

### Noteworthy Changes

- Fixed a bug that prevented removing documents from easyshare folders.<br/>[[WEBUI-723](https://jira.nuxeo.com/browse/WEBUI-723)]
- Filters are correctly reset when changing to Grid view.<br/>[[ELEMENTS-1495](https://jira.nuxeo.com/browse/ELEMENTS-1495)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.14'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
