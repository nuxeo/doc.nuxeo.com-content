---
title: Version 3.0.30
description: Discover what's new in Web UI 3.0.30.
review:
    comment: ''
    date: '2024-01-30'
    status: ok
toc: true
labels:
tree_item_index: 975
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2021 (Version 3.0.30)

This release includes on accessibility issues related to keyboard usage and visible focus.

#### Keyboard Usage - WCAG 2.1 level A criteria 2.1.1

- Grid views can be fully navigated using only the keyboard.<br/>[[WEBUI-1318](https://jira.nuxeo.com/browse/WEBUI-1318)]
- Make comments edit and cancel edit button usable with keyboard only.<br/>[[ELEMENTS-1699](https://jira.nuxeo.com/browse/ELEMENTS-1699)]
- Add focus to radio buttons in the first column of a table.<br/>[[ELEMENTS-1705](https://jira.nuxeo.com/browse/ELEMENTS-1705)]

#### Focus visible - WCAG 2.1 level A criteria 2.4.7

- Visible focus is added to the comment menu.<br/>[[ELEMENTS-1680](https://jira.nuxeo.com/browse/ELEMENTS-1680)]
- Visible focus is added to the comment options.<br/>[[ELEMENTS-1698](https://jira.nuxeo.com/browse/ELEMENTS-1698)]

#### Other Accessibility Improvements

The following items have improved contrast:

- Nuxeo tree browse icons.<br/>[[ELEMENTS-1712](https://jira.nuxeo.com/browse/ELEMENTS-1712)]

### Other Noteworthy Changes

- Polymer is upgraded to version 3.5.1. This is a transparent change.<br/>[[WEBUI-1382](https://jira.nuxeo.com/browse/WEBUI-1382)]
- Images can be dragged / moved in the nuxeo-image-viewer element.<br/>[[ELEMENTS-1679](https://jira.nuxeo.com/browse/ELEMENTS-1679)]
- Radio group widgets display the default value correctly when used in the context of multivalued complex subproperties.<br/>[[ELEMENTS-1683](https://jira.nuxeo.com/browse/ELEMENTS-1683)]
- Columns in a Table view are correctly selected when the columns have changed.<br/>[[ELEMENTS-1707](https://jira.nuxeo.com/browse/ELEMENTS-1707)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.30%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.


{{! /multiexcerpt}}
