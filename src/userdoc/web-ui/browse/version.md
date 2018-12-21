---
title: Working with Versions
review:
    comment: ''
    date: '2018-11-15'
    status: ok
description: null
toc: true
labels:
    - creation
    - drag-and-drop
tree_item_index: 600

---

{{! multiexcerpt name='versioning-functional-overview'}}
{{! multiexcerpt name='versioning-intro'}}

Document versions enable you and other users to easily revert to a specific version of the document if needed, without having to edit the document. The Nuxeo Platform offers both automatic and manual versioning of documents.

{{! /multiexcerpt}}

Every document holds a version number, which is a piece of information about the evolution of the document. A version number (V.v) is composed of a major version number (V) and a minor version number (v). When a document is created, its version number can be 0.0, 0.1 or 1.0 depending on automatic versioning rules. Minor version increment are typically used for secondary changes. Major version increment is usually reserved to significant modifications. When a document is edited without a new version being created, the version number is suffixed with a + (0.1+ for instance), to indicate that the version was modified since it was created.

{{#> callout type='info' heading='Version number 0.0'}}
Version number 0.0 is considered as a draft of the document, which will need to be saved into a first version, either minor or major.
Draft version 0.0 is not archived.
{{/callout}}

## Automatic Versioning

Two automatic versioning behaviors are applied by default: one for files (and associated document types) and one for notes.

- Files and other document types with [schema]({{page version='' space='nxdoc' page='repository-concepts'}}#schemas) `file:file`, like pictures, are created in version 0.0. A new minor version is automatically created when you edit a document that was last modified by another user. This minor version holds the modifications of the previous contributor, so that no data is lost. Your changes are applied on top of this version, the version number becoming for instance 0.1+. When you edit a document that was last edited by yourself, no version is automatically saved. You can however decide to manually create a new version of the document.

- For notes, a new version is created for every modification, whether you are the last contributor of the note or not. The created version holds your changes. When they are created, notes have a version number of 0.1.

This automatic versioning applies in case of:
- Modification of the main file or its attachments using drag and drop
- Manual edit of the attachments
- Modification of the document (main file, properties, attachments) via bulk edit

The following actions don’t trigger the automatic versioning of the document:
- Tagging the document
- Adding the document to a collection
- Changing the relations of the document
- Commenting the document

{{#> callout type='info'}}
Automatic versioning is disabled on CMIS connector due to conflict between our specifications and CMIS specifications.
{{/callout}}

## Manual Versioning

You can decide to manually create a new version of the document.

In case of a file document type, the automatic version is done first and then the manual version.

{{! /multiexcerpt}}

**To create a new version of your document**:

{{! multiexcerpt name='web-ui-manual-versioning'}}

1. Go on the **View** tab of the desired document.
2. In the top right section of metadata, click on **Create Version**.
3. Select the version that you want and click on **Create Version** to confirm.
  ![]({{file name='versions-web-ui.png'}} ?w=350,border=true)
{{! /multiexcerpt}}

## Comparing Versions

You can visualize differences between two versions of a document.

1. Go to a versioned document.
2. In the document action toolbar, click **Compare Version** ![]({{file space='userdoc' name='compare-icon-web-ui.png' page='icons-index'}} ?w=20).
3. Select versions you want to compare.</br>
Data that differ from one version to another are displayed.
4. Click **View All Data** to display all data for both versions of a document.</br>
Data that differ from one version to another are highlighted.

## Nuxeo Drive Versioning Policy

{{! multiexcerpt name='drive-versioning-policy'}}
When you edit a document, either from your Nuxeo Drive folder or using the online editing, a new version is automatically created on the Platform and the version number is updated:

- If you are not the last contributor of the document
- Or if your last edit is more than an hour ago

Then, if your document's version was 1.0 before modification for instance, it automatically becomes 1.1+ after you edited it from the Nuxeo Drive folder and the 1.1 is archived as it is created. Otherwise, a simple modification is done on the document and logged in the document's History.

See the page [How to Customize Nuxeo Drive Versioning Policy]({{page version='' space='client-apps' page='how-to-customize-nuxeo-drive-versioning-policy'}}) to change this behavior.
{{! /multiexcerpt}}
