---
title: Version 3.0.19
description: Discover what's new in Web UI 3.0.19.
review:
    comment: ''
    date: '2023-02-10'
    status: ok
toc: true
labels:
tree_item_index: 985
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2021 (Version 3.0.19)

This release helps differentiating views from downloads in the activity and audit.

### Differentiate Views from Downloads (General Availability)

The audit and activity better reflect actions done in Web UI. This feature is now generally available and works with all supported file types.

{{{multiexcerpt 'view-vs-download' page='web-ui-release-notes-3-0-18'}}}


### Other Noteworthy Changes

- Search aggregates are updated after applying a new filter.<br/>[[ELEMENTS-1575](https://jira.nuxeo.com/browse/ELEMENTS-1575)]
- Spreadsheet editor handles Document fields.<br/>[[WEBUI-1031](https://jira.nuxeo.com/browse/WEBUI-1031)]
- The blob update does not trigger a download any more.<br/>[[ELEMENTS-1534](https://jira.nuxeo.com/browse/ELEMENTS-1534)]
- The popup disappears when pushing the Cancel button, even with special configurations.<br/>[[WEBUI-1030](https://jira.nuxeo.com/browse/WEBUI-1030)]
- nuxeo-directory-suggestion for a boolean value works with saved searches.<br/>[[ELEMENTS-1568](https://jira.nuxeo.com/browse/ELEMENTS-1568)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.19%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.



{{! /multiexcerpt}}
