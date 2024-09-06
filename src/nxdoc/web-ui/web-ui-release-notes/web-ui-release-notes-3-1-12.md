---
title: Version 3.1.12
description: Discover what's new in Web UI 3.1.12.
review:
  comment: ''
  date: '2024-09-06'
  status: ok
toc: true
labels:
tree_item_index: 989
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.12)

- Added trusted domain property in config file, to make redirection only on trusted url.<br/>[[WEBUI-1511](https://jira.nuxeo.com/browse/WEBUI-1511)]

- Moment package updated to latest version(2.30.1) resolving veracode issues due to this library.<br/>[[WEBUI-1521](https://jira.nuxeo.com/browse/WEBUI-1521)]<br/>[[ELEMENTS-1752](https://jira.nuxeo.com/browse/ELEMENTS-1752)]

- Upgraded webpack-dev-server and webpack-cli version.<br/>[[WEBUI-1522](https://jira.nuxeo.com/browse/WEBUI-1522)]

- Permissions table will be displayed quickly even with 50000+ pages without any crash or alert in browser.<br/>[[ELEMENTS-1747](https://jira.nuxeo.com/browse/ELEMENTS-1747)]


### Other Noteworthy Changes

- New property can be configured in nuxeo.conf file to limit the page size for pagination.<br/>[[WEBUI-1567](https://jira.nuxeo.com/browse/WEBUI-1567)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.1.12%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C 'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
