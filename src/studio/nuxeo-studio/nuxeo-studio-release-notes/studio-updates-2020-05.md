---
title: 'May 2020'
description: .
tree_item_index: 969
review:
  comment: ''
  date: '2020-05-25'
  status: ok
toc: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2020-05-changes'}}

### Default Role Change

On new Studio projects, developers get `write` access by default to the [underlying Studio Git repository]({{page page='nuxeo-studio-designer-git-access'}}) instead of `read`. It is still possible to switch back to `read` access as an option.

### Widgets Drag and Drop Instead of Mode

When configuring a document type or a workflow task layout, each property in the tree offers a [list of available widgets](https://jira.nuxeo.com/browse/NXS-5775) (e.g. text input, text area), that you can drag and drop instead of a view and edit mode.

### Simplified Layout Blocks Configuration Experience

When configuring a [layout block]({{page page='ui-designer'}}#layout-blocks):
- no need to choose a template anymore
- naming experience is reviewed to make the expected naming pattern more explicit

{{! /multiexcerpt}}

### Other Noteworthy Mentions

{{! multiexcerpt name='studio-updates-2020-05-bugfix'}}
- Layouts loading time have been optimized ([NXS-5811](https://jira.nuxeo.com/browse/NXS-5811))
- Various improvements around the drag and drop experience to make it rock solid ([NXS-5856](https://jira.nuxeo.com/browse/NXS-5856) [NXS-5858](https://jira.nuxeo.com/browse/NXS-5858) [NXS-5859](https://jira.nuxeo.com/browse/NXS-5859) [NXS-5860](https://jira.nuxeo.com/browse/NXS-5860) [NXS-5861](https://jira.nuxeo.com/browse/NXS-5861))

{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
