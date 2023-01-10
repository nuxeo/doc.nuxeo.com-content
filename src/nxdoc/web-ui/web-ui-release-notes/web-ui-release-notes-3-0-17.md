---
title: Version 3.0.17
description: Discover what's new in Web UI 3.0.17.
review:
    comment: ''
    date: '2022-12-09'
    status: ok
toc: true
labels:
tree_item_index: 987
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.17)

This release improves accessibility.

### Accessibility Related Changes

Focus was put on the:
- `WCAG 2.1 4.1.3: status messages (level AA)`
- `WCAG 2.1 1.4.3 minimum contrast (level AA) and 1.4.11 non-text contrast (level AA)`

accessibility criteria in order to improve Nuxeo Web UI general readability for users with limited vision and / or using a screen reader.

#### Other Noteworthy Accessibility Improvements

The following items have improved contrast:

- Nuxeo tree browse icons.<br/>[[WEBUI-951](https://jira.nuxeo.com/browse/WEBUI-951)]
- Saved searches dropdown.<br/>[[WEBUI-967](https://jira.nuxeo.com/browse/WEBUI-967)]
- File size indication when viewing a document.<br/>[[WEBUI-914](https://jira.nuxeo.com/browse/WEBUI-914)]
- Breadcrumb items<br/>[[WEBUI-912](https://jira.nuxeo.com/browse/WEBUI-912)]
- Input labels<br/>[[WEBUI-526](https://jira.nuxeo.com/browse/WEBUI-526)]
- Unselected tabs<br/>[[WEBUI-527](https://jira.nuxeo.com/browse/WEBUI-527)]
- View mode selection when icon is active<br/>[[WEBUI-963](https://jira.nuxeo.com/browse/WEBUI-963)]
- Activity time when viewing a document<br/>[[WEBUI-957](https://jira.nuxeo.com/browse/WEBUI-957)]
- File size indication during import<br/>[[WEBUI-952](https://jira.nuxeo.com/browse/WEBUI-952)]
- Collections view<br/>[[WEBUI-960](https://jira.nuxeo.com/browse/WEBUI-960)]
- Number of search results<br/>[[WEBUI-966](https://jira.nuxeo.com/browse/WEBUI-966)]

The following items are properly announced by a screen reader:

- Number of selected results.<br/>[[WEBUI-517](https://jira.nuxeo.com/browse/WEBUI-517)] [[WEBUI-514](https://jira.nuxeo.com/browse/WEBUI-514)]
- Collapse / expand metadata layout icon name and state.<br/>[[WEBUI-910](https://jira.nuxeo.com/browse/WEBUI-910)]
- Select all status.<br/>[[WEBUI-893](https://jira.nuxeo.com/browse/WEBUI-893)]
- Suggestion loading / no results found information.<br/>[[ELEMENTS-1538](https://jira.nuxeo.com/browse/ELEMENTS-1538)]
- Quick search button state.<br/>[[WEBUI-904](https://jira.nuxeo.com/browse/WEBUI-904)]
- Drawer buttons expanded status.<br/>[[WEBUI-902](https://jira.nuxeo.com/browse/WEBUI-902)]
- Search results loading in queue view and listing.<br/>[[ELEMENTS-1539](https://jira.nuxeo.com/browse/ELEMENTS-1539)]
- Nuxeo-document-tree loading state.<br/>[[WEBUI-892](https://jira.nuxeo.com/browse/WEBUI-892)]
- Selected item in queue view during search.<br/>[[WEBUI-906](https://jira.nuxeo.com/browse/WEBUI-906)]
- File upload progress.<br/>[[WEBUI-519](https://jira.nuxeo.com/browse/WEBUI-519)]


### Other Noteworthy Changes

- The access to user profile is denied to non admins.<br/>[[WEBUI-935](https://jira.nuxeo.com/browse/WEBUI-935)]
- Web UI works correctly with strict CSP headers.<br/>[[ELEMENTS-1545](https://jira.nuxeo.com/browse/ELEMENTS-1545)]
- When selecting many items from a dropdown in the spreadsheet editor, all of them are visible easily.<br/>[[WEBUI-863](https://jira.nuxeo.com/browse/WEBUI-863)]
- Select all checkbox is unselected when using the "clear" link in the status bar.<br/>[[WEBUI-984](https://jira.nuxeo.com/browse/WEBUI-984)]
- Save Search dialog is correctly displayed on mobile phones.<br/>[[ELEMENTS-1541](https://jira.nuxeo.com/browse/ELEMENTS-1541)]
- The content of the grid view takes correctly into account the sort.<br/>[[WEBUI-780](https://jira.nuxeo.com/browse/WEBUI-780)]
- Tags are displayed without stretching the text.<br/>[[ELEMENTS-1531](https://jira.nuxeo.com/browse/ELEMENTS-1531)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.17'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
