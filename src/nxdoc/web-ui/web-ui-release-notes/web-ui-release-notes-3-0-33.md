---
title: Version 3.0.33
description: Discover what's new in Web UI 3.0.33.
review:
  comment: ''
  date: '2024-06-05'
  status: ok
toc: true
labels:
tree_item_index: 972
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2021 (Version 3.0.33)

This release includes the upgrade of Web UI internal functional tests to NodeJS version 18. This means that functional tests written using the technological stack provided by Web UI for your projects will require to use NodeJS 18 to keep passing. Please refer to the [upgrade notes]({{page page='web-ui-upgrade-notes'}}) for detailed information. This release also includes fixes for accessibility issues related to keyboard usage and visible focus.

#### Security Fixes

- Fixed a XSS security issue.<br/>[[WEBUI-1510](https://jira.nuxeo.com/browse/WEBUI-1510)]

#### Fallback for Two-letter Locales

- Added fallback to two-letter locale for Swedish.<br/>[[WEBUI-1494](https://jira.nuxeo.com/browse/WEBUI-1494)]
- Added fallback to French (fr) from fr-CA locale.<br/>[[WEBUI-697](https://jira.nuxeo.com/browse/WEBUI-697)]

### Other Noteworthy Changes

- Office files will now be previewed in attachments using pdf.js.<br/>[[ELEMENTS-1722](https://jira.nuxeo.com/browse/ELEMENTS-1722)]
- User name in document comment section, having long text will have ellipsis & on mouse over, a tooltip consisting of the full text will be shown.<br/>[[ELEMENTS-1691](https://jira.nuxeo.com/browse/ELEMENTS-1691)]
- User name in activity section in the header, having long text will have ellipsis & on mouse over, a tooltip consisting of the full text will be shown.<br/>[[ELEMENTS-1731](https://jira.nuxeo.com/browse/ELEMENTS-1731)]
- Added HTML Escape to Collection label to prevent security issues.<br/>[[ELEMENTS-1740](https://jira.nuxeo.com/browse/ELEMENTS-1740)]
- Collection label will show correct collection name in right panel as eneterd by user.<br/>[[ELEMENTS-1744](https://jira.nuxeo.com/browse/ELEMENTS-1744)]
- WebUI data table & justified grid thumbnail interaction will show a view instead of a download in history tab.<br/>[[ELEMENTS-1738](https://jira.nuxeo.com/browse/ELEMENTS-1738)]
- WebUI search results grid view & list view thumbnail interaction will show a view instead of a download in history tab.<br/>[[WEBUI-1501](https://jira.nuxeo.com/browse/WEBUI-1501)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.33%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C 'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
