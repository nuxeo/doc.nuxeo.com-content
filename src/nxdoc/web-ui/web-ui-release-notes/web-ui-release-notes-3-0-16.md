---
title: Version 3.0.16
description: Discover what's new in Web UI 3.0.16.
review:
    comment: ''
    date: '2022-11-24'
    status: ok
toc: true
labels:
tree_item_index: 988
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.16)

This release improves accessibility.

### Accessibility Related Changes

Focus was put on the `WCAG 2.1 level A 4.1.2: name, role, value` accessibility criteria in order to improve how Nuxeo Web UI interacts with screen readers.

#### Other Noteworthy Accessibility Improvements

The following items are now correctly announced by a screen reader:

- The remove from collection button.<br/>[[WEBUI-908](https://jira.nuxeo.com/browse/WEBUI-908)]
- The remove from favorites button.<br/>[[WEBUI-905](https://jira.nuxeo.com/browse/WEBUI-905)]
- The view changing button.<br/>[[WEBUI-903](https://jira.nuxeo.com/browse/WEBUI-903)]
- The selection status in grid view.<br/>[[WEBUI-901](https://jira.nuxeo.com/browse/WEBUI-901)]
- All comment actions.<br/>[[ELEMENTS-1537](https://jira.nuxeo.com/browse/ELEMENTS-1537)]
- The remove selection button in selection widgets.<br/>[[ELEMENTS-1536](https://jira.nuxeo.com/browse/ELEMENTS-1536)]


### Other Noteworthy Changes

- Fulltext input is submitted when pressing the submit button in searches.<br/>[[WEBUI-424](https://jira.nuxeo.com/browse/WEBUI-424)]
- A comment containing non-alpha-numeric characters can be edited properly.<br/>[[ELEMENTS-1520](https://jira.nuxeo.com/browse/ELEMENTS-1520)]
- The dropdown arrows of nuxeo-selectivity elements in the table header are rendered next to the text.<br/>[[ELEMENTS-1513](https://jira.nuxeo.com/browse/ELEMENTS-1513)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.16'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
