---
title: Version 3.1.7
description: Discover what's new in Web UI 3.1.7.
review:
  comment: ''
  date: '2024-03-22'
  status: ok
toc: true
labels:
tree_item_index: 994
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2023 (Version 3.1.7)

[[WEBUI-1446](https://jira.nuxeo.com/browse/WEBUI-1446)] was introduced by accident in version `3.1.6`. This change brings a stricter CSP header policy configuration which makes the application more secure by default, but could break existing Web UI applications.

Customers running into this problem may see errors when the expression of the `nuxeo-filter` element is evaluated, such as:

```
TypeError: Cannot read property 'UI' of undefined in <nuxeo-filter> expression "user && user.properties && user.properties.groups && (user.isAdministrator || user.properties.groups.includes(window.Nuxeo.UI.config.props.exceptionmanagers))"

TypeError: Cannot read property 'href' of undefined in <nuxeo-filter> expression "window.location.href.includes('search')"
```

As part of our policy, breaking changes should not be introduced without sufficient notice and this change was reverted.

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.1.7%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C 'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}