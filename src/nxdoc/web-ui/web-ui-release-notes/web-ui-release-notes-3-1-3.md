---
title: Version 3.1.3
description: Discover what's new in Web UI 3.1.3.
review:
    comment: ''
    date: '2023-12-05'
    status: ok
toc: true
labels:
tree_item_index: 998
hidden: false
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}
## What’s New in Web UI for LTS 2023 (Version 3.1.3)

Our suite of elements managing files hides or shows actions based on whether the property they are tied to is under retention or not.

### UI Elements Follow the Property Retention Configuration

Nuxeo Server allows you to [define a list of properties to be protected]({{page page='nuxeo-server-release-notes-2021-32' version='2021'}}#evolve-retention-core-api-to-specify-a-list-of-blob-property-to-be-retained) when a [document goes under retention]({{page page='nuxeo-retention-functional-overview'}}#put-a-document-under-retention).

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


### Other Noteworthy Changes

- When using the WOPI addon, the related button is now displayed on first load for a document.<br/>[[WEBUI-270](https://hyland-sync.atlassian.net/browse/WEBUI-270)]
- The nuxeo-document-attachments element works correctly with multivalued properties configured in Nuxeo Studio.<br/>[[WEBUI-256](https://hyland-sync.atlassian.net/browse/WEBUI-256)]
- The `nuxeo-operation-button` element uses the native browser functionality to download blobs instead of using async calls<br/>[[ELEMENTS-86](https://hyland-sync.atlassian.net/browse/ELEMENTS-86)]


## Learn More

[More information about released changes and fixed bugs(https://hyland-sync.atlassian.net/issues?jql=)] is available in our bug tracking tool.


{{! /multiexcerpt}}
