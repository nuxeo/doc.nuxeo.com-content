---
title: Version 3.0.27
description: Discover what's new in Web UI 3.0.27.
review:
    comment: ''
    date: '2023-09-11'
    status: ok
toc: true
labels:
tree_item_index: 978
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2021 (Version 3.0.27)

Our suite of elements managing files hides or shows actions based on whether the property they are tied to is under retention or not.

### UI Elements Follow the Property Retention Configuration

Nuxeo Server allows you to [define a list of properties to be protected]({{page page='nuxeo-server-release-notes-2021-32'}}#evolve-retention-core-api-to-specify-a-list-of-blob-property-to-be-retained) when a [document goes under retention]({{page page='nuxeo-retention-functional-overview'}}#put-a-document-under-retention).

With this update, our suite of UI elements that are used to manage files will reflect the configured behavior: when a property is protected, actions to upload, replace or remove a file will be hidden. This applies to the following elements:

- `nuxeo-document-attachments`
- `nuxeo-document-blob`
- `nuxeo-document-preview`
- `nuxeo-document-viewer`
- `nuxeo-dropzone`
- `nuxeo-file`

This change will be applied automatically and transparently, except for the `nuxeo-file` element that may require new parameters for this behavior to apply. 

If you currently leverage the `nuxeo-file` element in your Nuxeo Studio configuration, note that you may need to provide the following additional parameters:
- `document`: the input document (will default to `{` `{document}` `}`)
- `xpath`: the document property to check against, expressed as a xpath (will default to `file:content`)

### Accessibility Updates

- Navigation through drawer menu entries can be achieved using the arrow keys.<br/>[[WEBUI-1215](https://jira.nuxeo.com/browse/WEBUI-1215)]

### Other Noteworthy Changes

- When uploading a file during a workflow task, users stay on the current task and can do additional actions.<br/>[[WEBUI-1052](https://jira.nuxeo.com/browse/WEBUI-1052)]
- When using the WOPI addon, the related button is now displayed on first load for a document.<br/>[[WEBUI-1202](https://jira.nuxeo.com/browse/WEBUI-1202)]
- The nuxeo-document-attachments element works correctly with multivalued properties configured in Nuxeo Studio.<br/>[[WEBUI-1224](https://jira.nuxeo.com/browse/WEBUI-1224)]
- Feedback is provided when adding a permission without providing a user or group.<br/>[[ELEMENTS-1665](https://jira.nuxeo.com/browse/ELEMENTS-1665)] 
- The `nuxeo-operation-button` element uses the native browser functionality to download blobs instead of using async calls<br/>[[ELEMENTS-1658](https://jira.nuxeo.com/browse/ELEMENTS-1658)] 
- The image in nuxeo-image-viewer is well centered after closing the sidebar.<br/>[[ELEMENTS-1584](https://jira.nuxeo.com/browse/ELEMENTS-1584)] 
- The browser tab name is correctly displayed after a refresh.<br/>[[WEBUI-1066](https://jira.nuxeo.com/browse/WEBUI-1066)]


## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28%27WEBUI%27%2C %27ELEMENTS%27%29 AND fixVersion IN %28%273.0.26%27,%273.0.27%27%29 ORDER BY 'Epic Link' ASC%2C type DESC%2C  'Backlog priority' DESC%2C component DESC%2C priority DESC) is available in our bug tracking tool.


{{! /multiexcerpt}}
