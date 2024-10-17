---
title: Version 3.1.13
description: Discover what's new in Web UI 3.1.13.
review:
  comment: ''
  date: '2024-10-16'
  status: ok
toc: true
labels:
tree_item_index: 988
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.13)

- Integrated Github action to schedule Veracode scan.<br/>[[WEBUI-1572](https://jira.nuxeo.com/browse/WEBUI-1572)]

- Updated upload artifact package version from v2 to v3.<br/>[[WEBUI-1578](https://jira.nuxeo.com/browse/WEBUI-1578)]

- Null check added in _dataChanged function so that it does not throw error in console for nuxeo-selectivity.<br/>[[ELEMENTS-1657](https://jira.nuxeo.com/browse/ELEMENTS-1657)]


### Other Noteworthy Changes

- Fixed failing ci/cd pipeline for functional test cases in Web UI.<br/>[[WEBUI-1583](https://jira.nuxeo.com/browse/WEBUI-1583)]

- Bumped pdf.js to v4.2.67.<br/>[[WEBUI-1755](https://jira.nuxeo.com/browse/WEBUI-1755)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.1.13%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C 'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}