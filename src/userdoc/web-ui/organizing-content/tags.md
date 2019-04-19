---
title: Tags
review:
    comment: ''
    date: '2019-04-19'
    status: ok
labels:
    - tags
    - web-ui
tree_item_index: 700
---

{{! multiexcerpt name='functional-overview'}}

Unlike subjects in the metadata of the document, you don't have to choose tags in a closed list. You are free to apply the tags that describe the document best. However, tags are proposed as you type them, to enable you to use the same tags as the other users and have a consistent tagging of documents. You can add as many tags on a document as you want.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Tags/Web UI view tags
    name: web-ui-view-tags.png
    1.1.3#screenshot#up_to_date
--}}
![Web UI view tags](nx_asset://ac43c336-4077-43d3-8406-ba8e57a23246 ?w=650)

Users can add a tag on a document as soon as they can access the document, i.e. as soon as they have reading permissions.

**To tag a document**, go to the **View** tab of the document and type the label you want to add in the Tags field.
Click on the suggested label to add an existing tag or on the tag with a `+` to create and add a new one.

The tag is immediately added on the document and available in the Search tab to let you [search by tags]({{page page='search'}}).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/USERDOC/Tags/Web UI add Tags
    name: web-ui-tags.png
    1.1.3#screenshot#up_to_date
--}}
![Web UI add Tags](nx_asset://f5138fe2-0de5-4dcc-9836-2820724b871f ?w=350)

**To remove a tag**, you need to be the user who added the tag on the document or have at least Edit permission on the document. Click on the icon ![]({{file space='userdoc' name='delete.png' page='icons-index'}}), the tag is immediately removed.

### Tags, Versions and Publication

When you [save a document as a new version]({{page page='version'}}), the tags that user have put on the document are saved with the version. This means that the archived versions of a document and the document in its current version can have different tags. If you restore a previous version of the document, tags are restored with it and replace the tags from the replaced version.

When you [publish a document]({{page page='share'}}#publishing), the tags are copied from the work document to the published document. You can then remove useless tags from either version of the document (work version or published version) without affecting the other one. In case of republication of the document, the tags from the last and previous version are merged so you don't loose any previous or preparatory categorization.

{{! /multiexcerpt}}
