---
title: Version 3.0.18
description: Discover what's new in Web UI 3.0.18.
review:
    comment: ''
    date: '2023-01-10'
    status: ok
toc: true
labels:
tree_item_index: 986
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.18)

This release helps differentiating views from downloads in the activity and audit.

### Differentiate Views from Downloads (beta)

The audit and activity better reflect actions done in Web UI.

When visiting a document, the activity tab shows this action as a view. Activities are registered as a download only when clicking on a download button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI Release Notes/view-vs-download-activity.png
    name: view-vs-download-activity.png
    web_ui#screenshot#up_to_date
--}}
![view-vs-download-activity.png](nx_asset://ce1d325b-1e37-4351-ac5c-3f04990ee0ad ?border=true)

In the history tab and in the audit, views are distinguished by a specific comment. The action performed is still shown as a download because a download technically happens at the server level.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI Release Notes/view-vs-download-history.png
    name: view-vs-download-history.png
    web_ui#screenshot#up_to_date
--}}
![view-vs-download-history.png](nx_asset://2bfc18e1-8869-4ac3-b177-b681c280ac9b ?border=true)

{{#> callout type='info' heading='Beta feature'}}
This feature is in beta state and works on a limited scope at this stage. Images and videos are supported (independently from the document type being used). Support for other file types will come in a future update.
{{/callout}}


### Other Noteworthy Changes

- Accessibility: drawer buttons can be accessed and used with a keyboard.<br/>[[WEBUI-559](https://jira.nuxeo.com/browse/WEBUI-559)]
- The group id is displayed in the column "identifier" in the table "Nested groups".<br/>[[ELEMENTS-1559](https://jira.nuxeo.com/browse/ELEMENTS-1559)]
- The Edit popup keeps the same width when many entries are added to a suggestion field.<br/>[[WEBUI-430](https://jira.nuxeo.com/browse/WEBUI-430)]
- The Search form is responsive after (un)trashing documents from results.<br/>[[WEBUI-983](https://jira.nuxeo.com/browse/WEBUI-983)]
- When adding a long description while adding documents to a collection, the "Cancel" and "Add" buttons remain accessible on screen.<br/>[[WEBUI-438](https://jira.nuxeo.com/browse/WEBUI-438)]
- In tables, dropdown width is wide enough to fit long values.<br/>[[ELEMENTS-1530](https://jira.nuxeo.com/browse/ELEMENTS-1530)]
- Dropdown list does not overlap when sorting results in the search screen.<br/>[[ELEMENTS-1558](https://jira.nuxeo.com/browse/ELEMENTS-1558)]
- The loaded document remains on page without re-fetching when the Queue View scrolls up.<br/>[[WEBUI-1021](https://jira.nuxeo.com/browse/WEBUI-1021)]
- The "Saved searches" dropdown opens under the Search Filters input field even when it contains searches with long names.<br/>[[ELEMENTS-1560](https://jira.nuxeo.com/browse/ELEMENTS-1560)]
- When adding a value in a custom multivalued field, the add entry popup disappears after the value is added.<br/>[[ELEMENTS-1565](https://jira.nuxeo.com/browse/ELEMENTS-1565)]
- nuxeo-tag elements are fully displayed in table-cells.<br/>[[ELEMENTS-1555](https://jira.nuxeo.com/browse/ELEMENTS-1555)]

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.18'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
