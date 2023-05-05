---
title: Version 3.0.21
description: Discover what's new in Web UI 3.0.21.
review:
    comment: ''
    date: '2023-05-08'
    status: ok
toc: true
labels:
tree_item_index: 983
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2021 (Version 3.0.21)

This release includes bugfix and accessibility improvements.

### Accessibility Improvements

This release brings improvements around screen reader support, keyboard usage and focus visibility.

#### Information and Relationships - WCAG 2.1 level A criteria 1.3.1

[[WEBUI-1074](https://jira.nuxeo.com/browse/WEBUI-1074)]

#### Keyboard Usage - WCAG 2.1 level A criteria 2.1.1

[[WEBUI-561](https://jira.nuxeo.com/browse/WEBUI-561)]

#### Focus visible - WCAG 2.1 level A criteria 2.4.7

[[WEBUI-511](https://jira.nuxeo.com/browse/WEBUI-511)]

An updated VPAT can be found in [this page]({{page page='web-ui-accessibility'}}).

### Other Noteworthy Changes

- Accessibility: The labels have been accessible for tags and the comment section.<br/>[[ELEMENTS-1587](https://jira.nuxeo.com/browse/ELEMENTS-1587)]
- Polymer.IronFormElementBehavior is added for compatibility.<br/>[[WEBUI-1059](https://jira.nuxeo.com/browse/WEBUI-1059)]
- The Search Drawer is no longer selected when navigating away from the Search pane.<br/>[[WEBUI-722](https://jira.nuxeo.com/browse/WEBUI-722)]
- The recently viewed items have been updated which were previously not updated with the selected bar.<br/>[[WEBUI-84](https://jira.nuxeo.com/browse/WEBUI-84)]
- A File drag'n drop does not trigger a download.<br/>[[ELEMENTS-1579](https://jira.nuxeo.com/browse/ELEMENTS-1579)]
- The file name will be visible without refreshing the page.<br/>[[WEBUI-1049](https://jira.nuxeo.com/browse/WEBUI-1049)]
- The preview on the Task view uses a standard previewer.<br/>[[WEBUI-1081](https://jira.nuxeo.com/browse/WEBUI-1081)]
- The tooltip disappears when changing screen.<br/>[[ELEMENTS-1580](https://jira.nuxeo.com/browse/ELEMENTS-1580)]
- Nuxeo-tag-suggestion handles single-space tags.<br/>[[ELEMENTS-1583](https://jira.nuxeo.com/browse/ELEMENTS-1583)]
- The double slash entries can be deleted in the vocabulary section.<br/>[[WEBUI-1061](https://jira.nuxeo.com/browse/WEBUI-1061)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.21%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.



{{! /multiexcerpt}}
