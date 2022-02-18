---
title: Version 3.0.9
description: Discover what's new in Web UI 3.0.9.
review:
    comment: ''
    date: '2022-01-03'
    status: ok
toc: true
labels:
tree_item_index: 995
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.9)

Introduces the ability to bulk edit documents through the UI.

### Noteworthy Changes

### Bulk Edit Documents

As a follow up to our focus on [bulk actions]({{page page='web-ui-bulk-actions'}}), this release introduces the ability to bulk edit large sets of documents. See [how to create your custom bulk edit forms using Nuxeo Studio]({{page page='how-to-create-bulk-edit-form-studio'}}) for a complete tutorial.

### Other

- The number of documents impacted by a bulk action is hidden until the information becomes available.<br/>[[ELEMENTS-1449](https://jira.nuxeo.com/browse/ELEMENTS-1449)]
- The actual number of documents selected is shown when selecting over 10k.<br/>[[WEBUI-622](https://jira.nuxeo.com/browse/WEBUI-622)]
- An error is displayed when a newly created user already exists.<br/>[[ELEMENTS-1426](https://jira.nuxeo.com/browse/ELEMENTS-1426)]
- The message "No results" is shown only when no more data is loading.<br/>[[ELEMENTS-1434](https://jira.nuxeo.com/browse/ELEMENTS-1434)]
- The nuxeo-directory-radio-group widget shows selected values at document creation.<br/>[[ELEMENTS-1440](https://jira.nuxeo.com/browse/ELEMENTS-1440)]
- Audit data is correctly shown when scrolling over the 40 first entries.<br/>[[WEBUI-615](https://jira.nuxeo.com/browse/WEBUI-615)]
- Rendition download icons take into account the theme variables.<br/>[[WEBUI-524](https://jira.nuxeo.com/browse/WEBUI-524)]
- Required inputs works within layout blocks.<br/>[[ELEMENTS-1439](https://jira.nuxeo.com/browse/ELEMENTS-1439)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.9'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
