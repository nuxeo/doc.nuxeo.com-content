---
title: Nuxeo Tree Snapshot
review:
    comment: ''
    date: '2019-09-18'
    status: ok
labels:

toc: true
tree_item_index: 2750
---

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
[Nuxeo Tree Snapshot](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-tree-snapshot) enables to snapshot and version a whole folder and its content in a single step. You can then recover the state of a folder for a given version.
{{! /excerpt}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Using Nuxeo Tree Snapshot

The addons adds a new document type, Versionable folder, which can be created in Workspaces.

Versionable folders can be published, using the regular **Publish** tab. When it is published a new version of the folder is automatically created and available in archived versions. The content of the versionable folder is published at the same time, and if needed versioned.

In the versionable folder **History**&nbsp;> **Archived versions** tab you can use the regular archived versions actions (**View archived version** and **Restore**).

## Customization and Configuration

Although the addon by default adds a versionable folder, most of the time you will want to integrate the feature with your own data model.

1. Add the `Document.CreateTreeSnapshot` to your Studio project:
  1.  Copy the JSON definition of the operation `Document.CreateTreeSnapshot` from your server's automation doc at http://NUXEO_SERVER/nuxeo/site/automation/Document.CreateTreeSnapshot.
  1. In Studio, paste the operation definition in **Settings**&nbsp;> **Registries**&nbsp;> **Automation Operations** and save.
1. Add the `Snapshotable` facet to your Studio project: In **Settings**&nbsp;> **Registries**&nbsp;> **Document Facets**, paste the following facet definition and save.
  ```
  {
    "facets": [
      {
        "id": "Snapshotable",
        "description": "Facet Snapshotable to publish and snapshot folders"
      }
    ]
  }
  ```
1. Add the `Snapshotable` facet to your document type and leverage the `Document.CreateTreeSnapshot` operation in your business logic.
