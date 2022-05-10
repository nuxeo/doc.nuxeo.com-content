---
title: Version 3.0.11
description: Discover what's new in Web UI 3.0.11.
review:
    comment: ''
    date: '2022-03-29'
    status: ok
toc: true
labels:
tree_item_index: 993
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.11)

Adds the option to append values to multivalued properties in the context of a bulk edit form.

### Noteworthy Changes

### Append Values Option in Bulk Edit

When bulk editing a multivalued field, users could only replace all values with their new selection, not add more values to the existing ones. In this iteration, we are providing a new option to add additional values into a multivalued field in the context of a bulk edit form.

The following options are now available:
- Don't change value(s)
- Replace with
- Add value(s) (new, multivalued fields only)
- Empty value(s) (non-required fields only)

This new option is available transparently as soon as you install this new version of Web UI.

### Rich Text Editor Height Management

The rich text editor had a fixed height, which made it difficult to write long pieces of content using it. We updated the element and are now allowing to configure the height of the `nuxeo-html-editor` inside the `nuxeo-note-editor` element using a new css variable: `--nuxeo-note-editor-html-height`

### Other

- Web UI prevents from creating a vocabulary entry with whitespaces only in the id field.<br/>[[WEBUI-706](https://jira.nuxeo.com/browse/WEBUI-706)]
- The links to users and groups in the Task box correctly redirects to the user/group page.<br/>[[WEBUI-308](https://jira.nuxeo.com/browse/WEBUI-308)]
- In the Administration > Vocabularies screen, vocabulary entries will take the full width of the page to make long entries readable and to provide consistency with other screens.<br/>[[WEBUI-155](https://jira.nuxeo.com/browse/WEBUI-155)]
- When managing users, vocabulary properties display the vocabulary entry label when possible.<br/>[[ELEMENTS-1466](https://jira.nuxeo.com/browse/ELEMENTS-1466)]
- The fulltext field is cleared when switching between saved searches.<br/>[[WEBUI-436](https://jira.nuxeo.com/browse/WEBUI-436)]
- Document lists are correctly managed in Nuxeo Spreadsheet Editor.<br/>[[WEBUI-653](https://jira.nuxeo.com/browse/WEBUI-653)]
- Columns in a nuxeo-data-table are displayed without conflicting with the Parameters icon in lower resolution screens.<br/>[[ELEMENTS-1458](https://jira.nuxeo.com/browse/ELEMENTS-1458)]
- Column settings stick when opening a new tab.<br/>[[WEBUI-581](https://jira.nuxeo.com/browse/WEBUI-581)]
- A proper message is displayed when the title validation fails when saving a new search.<br/>[[WEBUI-665](https://jira.nuxeo.com/browse/WEBUI-665)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.11'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
