---
title: Version 3.0.15
description: Discover what's new in Web UI 3.0.15.
review:
    comment: ''
    date: '2022-09-05'
    status: ok
toc: true
labels:
tree_item_index: 989
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What's New in Web UI for LTS 2021 (version 3.0.15)

This release improves the experience when dealing with bulk actions on smaller sets of documents and improves accessibility.

### Bulk Actions - Unselect Some

Our previous releases made it easy to execute [bulk actions]({{page space='nxdoc' page='web-ui-bulk-actions'}}) on large sets of documents, including [bulk editing]({{page version='' space='nxdoc' page='how-to-create-bulk-edit-form-studio'}}) them.

This latest release puts focus on dealing with smaller sets of documents: it is now possible to unselect individual documents after having used the select all.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI Release Notes/unselect-some
    name: Screenshot from 2022-09-07 16-43-58.png
    web_ui#screenshot#up_to_date
--}}
![unselect-some](nx_asset://0ad82bfb-6969-48a7-8c61-c0a2365f1e2a ?w=393,border=true)

Bulk actions are still available as usual for the documents that remain selected.

### Accessibility Related Changes

#### Date-picker Element Upgrade

In the latest independent report we received, the `nuxeo-date-picker` element accounted for ~25% of the identified violations. Since it is based on an element provided by the Vaadin library, we upgraded the underlying element to its latest release in order to benefit from accessibility improvements, while keeping the existing API intact.

This upgrade dramatically improves the accessibility of the product, while being transparent. See [[WEBUI-799](https://jira.nuxeo.com/browse/WEBUI-799)] for details.

#### Other Noteworthy Accessibility Improvements

- Create version button is usable using keyboard only.<br/>[[WEBUI-557](https://jira.nuxeo.com/browse/WEBUI-557)]
- When an import fails, the error message is announced by the screen reader.<br/>[[WEBUI-521](https://jira.nuxeo.com/browse/WEBUI-521)]
- User initials are ignored by the screen reader as it is a decorative indication.<br/>[[ELEMENTS-1364](https://jira.nuxeo.com/browse/ELEMENTS-1364)]

### Other Noteworthy Changes

- Folders are ignored when included in an upload instead of making the upload fail entirely, and an indication is given.<br/>[[ELEMENTS-1514](https://jira.nuxeo.com/browse/ELEMENTS-1514)]
- Default layouts are provided for user workspaces.<br/>[[WEBUI-841](https://jira.nuxeo.com/browse/WEBUI-841)]
- The `order` field limits what can be typed to reflect the maximum possible value accepted by the server.<br/>[[WEBUI-740](https://jira.nuxeo.com/browse/WEBUI-740)]
- The breadcrumb shows a label instead of an id for the Root document.<br/>[[WEBUI-794](https://jira.nuxeo.com/browse/WEBUI-794)]
- The placeholder in nuxeo-tag-suggestion is resized to display the entire text.<br/>[[ELEMENTS-1399](https://jira.nuxeo.com/browse/ELEMENTS-1399)]
- Default translations are added for events related to collections.<br/>[[WEBUI-835](https://jira.nuxeo.com/browse/WEBUI-835)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'WEBUI', 'ELEMENTS'%29 AND fixVersion IN %28'3.0.15'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.
{{! /multiexcerpt}}
