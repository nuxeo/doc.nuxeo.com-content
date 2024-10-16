---
title: Version 3.0.36
description: Discover what's new in Web UI 3.0.36.
review:
  comment: ''
  date: '2024-09-06'
  status: ok
toc: true
labels:
tree_item_index: 969
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2021 (Version 3.0.36)

### Security Updates

- Added a trusted domain property in the nuxeo.conf file. Allows you to specify a list of domains to which navigation is allowed when using a multi repository configuration. Takes a list of domains separated by a comma (for example, hyland.com, hyland.net).<br/>[[WEBUI-1511](https://jira.nuxeo.com/browse/WEBUI-1511)]

- Third-party library updated to benefit from security fixes:
- Moment<br/>[[WEBUI-1521](https://jira.nuxeo.com/browse/WEBUI-1521)]<br/>[[ELEMENTS-1752](https://jira.nuxeo.com/browse/ELEMENTS-1752)]
- webpack-dev-server and webpack-cli.<br/>[[WEBUI-1522](https://jira.nuxeo.com/browse/WEBUI-1522)]


### Other Noteworthy Changes

- New property can be configured in nuxeo.conf file to limit the page size for pagination.<br/>[[WEBUI-1567](https://jira.nuxeo.com/browse/WEBUI-1567)]

- Permissions table will be displayed quickly even with 50000+ pages without any crash or alert in browser.<br/>[[ELEMENTS-1747](https://jira.nuxeo.com/browse/ELEMENTS-1747)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.36%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C 'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
