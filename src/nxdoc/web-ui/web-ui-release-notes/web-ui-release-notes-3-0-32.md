---
title: Version 3.0.32
description: Discover what's new in Web UI 3.0.32.
review:
  comment: ''
  date: '2024-04-24'
  status: ok
toc: true
labels:
tree_item_index: 973
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2021 (Version 3.0.32)

This release includes the upgrade of Web UI internal functional tests to NodeJS version 18. This means that functional tests written using the technological stack provided by Web UI for your projects will require to use NodeJS 18 to keep passing. Please refer to the [upgrade notes]({{page page='web-ui-upgrade-notes'}}) for detailed information. This release also includes fixes for accessibility issues related to keyboard usage and visible focus.

#### Visible Focus A11Y Improvements - WCAG Level AA Criteria 2.4.7: focus visible

- Missing focus state on drawer and document tabs.<br/>[[WEBUI-269](https://jira.nuxeo.com/browse/WEBUI-269)]

### Other Noteworthy Changes

- Activity tab will gather and show correct entries.<br/>[[WEBUI-1097](https://jira.nuxeo.com/browse/WEBUI-1097)]
- Comparing Versions handles data with special characters.<br/>[[WEBUI-1112](https://jira.nuxeo.com/browse/WEBUI-1112)]
- Reopening the update permission dialog, the right input field displays the permission previously selected, allowing for seamless editing.<br/>[[ELEMENTS-1732](https://jira.nuxeo.com/browse/ELEMENTS-1732)]
- Document properties are correctly saved when the Edit form contains a nuxeo-directory-radio-group element.<br/>[[ELEMENTS-1713](https://jira.nuxeo.com/browse/ELEMENTS-1713)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.32%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C 'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
