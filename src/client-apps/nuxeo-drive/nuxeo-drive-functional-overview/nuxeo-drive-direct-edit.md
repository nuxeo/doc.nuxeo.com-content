---
title: Direct Edit
description: 'Direct Edit enables you to edit any of your document content from their Summary tab even if they are not synchronized.'
review:
    comment: ''
    date: '2021-05-06'
    status: ok
labels:
    - nuxeo-drive
    - direct-edit
tree_item_index: 300
toc: true
---

## Online Editing with Direct Edit {{> anchor 'online-editing'}}

Direct Edit enables you to edit any of your document's content from their Summary tab even if they are not synchronized. To be able to use correctly Direct Edit you need the Drive addon on your server and you must turn on Drive on your computer. This saves you the fastidious steps of opening your document, modify it and reimport it on your platform.

The icon looks like ![]({{file name='drive-webui-direct-edit.png' page='nuxeo-drive'}} ?w=20) on Web-UI and ![]({{file name='drive-jsf-direct-edit.png' page='nuxeo-drive'}}) on JSF-UI.

{{#> callout type='note' }}
In Web UI 10.10, Direct Edit has a new icon:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Nuxeo Drive/Nuxeo Drive /Direct Edit
    name: directEdit.jpg
    1.7.2#icon#up_to_date
--}}
![Direct Edit](nx_asset://3179306b-0a11-48a6-afbf-f695f9ae3645 ?w=20)
{{/callout}}

**To edit a document locally from the web interface:**

1. On the document in the Nuxeo Platform, click on the **Direct Edit icon** on the document **View** on Web UI and on the **Summary** tab on JSF UI.</br>
    The document opens in its native application (OpenOffice.org for an .odt file for instance).
    {{#> callout type='note' }}
    If you plan to work on the document for some time, you can easily lock it from the Metadata edit popup (see the section [Metadata Edit](#metadata-edit)).</br>
    Note that depending on your OS and the file format, the document can be automatically locked. This is still a beta feature of Direct Edit, known to currently work on macOS and Windows.
    {{/callout}}

2. Edit the document and save the modifications.
    Modifications are saved in the Nuxeo Platform directly.
3. Close the document.

## Limitations

- Prior to Nuxeo Platform 6.0, online editing is available only in synchronized folders.
- Under Windows, nothing happens if you click on the **Direct Edit icon** without having Drive installed and running on your computer.
