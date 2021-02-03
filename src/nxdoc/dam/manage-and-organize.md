---
title: Manage & Organize
review:
    comment: ''
    date: '2019-09-18'
    status: ok
labels:
    - DAM
tree_item_index: 200
toc: true
---

{{! excerpt}}
Once your assets are uploaded and/or created on your instance you will probably need to manage them, add some properties, tags, move them from one folder to another, archive them, validate them with your team, etc. Discover all the features available to help you manage and organize your media assets.
{{! /excerpt}}

## Bulk Edit

The Nuxeo Spreadsheet addon allows to bulk edit documents starting from a content view result set, providing a spreadsheet-like user experience.

This addon allows you to edit data in your repository as if you were in a spreadsheet-like grid, like copy and paste by dragging the cell's value.

![]({{file name='spreadsheet-view.png' page='nuxeo-spreadsheet'}} ?w=450,border=true)

Read the [Nuxeo Spreadsheet documentation]({{page space='nxdoc' page='nuxeo-spreadsheet'}}) for more information.

## Versioning

The Nuxeo Repository includes a versioning system. At any time, you can ask the repository to create and archive a version of a document. Versioning can be done automatically, according to some versioning policies, or on-demand, through the UI.

Document versions enable you and other users to easily revert to a specific version of the document if needed, without having to edit the document. The Nuxeo Platform offers both automatic and manual versioning of documents.

Each version has:
- A label
- A major version number
- A minor version number

The versioning service is configurable so you can define the numbering policy.

For more information about the versioning system of Nuxeo Platform, read the [Versioning documentation]({{page space='nxdoc' page='versioning'}}).

## Archive Assets

At any time you can decide to archive a version of your document. The History tab on Nuxeo Platform displays the previous versions of the document that were archived when the document was edited and its version increased. All previous versions can be consulted, restored or deleted.

All users can consult the previous versions of a document.

Read the [Versioning documentation]({{page space='nxdoc' page='versioning'}}) for more information.

## Workflows


Workflow integration is a key element of any DAM project. Nuxeo Platform allows you to build simple and complex workflows, integrated to the systems that manage the content as well as external asset providers. DAM workflows includes the following features:

- Comment and annotate a media file
- Enrich digital assets with automatic label, text or picture detection
- Collaborate either with external or internal users
- Create digital assets from a photo editing application
- Send notification at each step of the workflow
- Review, validate and reject assets
- Publish content on public portals
- Structure digital projects

Let's take a fictive creative review and approval process:

![Rainier creative review approval](nx_asset://20b0dc36-d5d0-4cb3-8ad8-75292af0162a ?border=true)

1. Josh is a photographer, and is an external user engaged for a photoshoot to get images for the campaign. He uploads his pictures into Dropbox. Then, Nuxeo Platform automatically indexes them – without moving the images themselves – and adds tags automatically using [Nuxeo Vision]({{page space='nxdoc' page='nuxeo-vision'}}).

1. For the Nuxeo Web UI search, Alice finds the assets she's looking for in the system, picks the shots she likes best, and shares them with the creative team to turn into ads.

1. Bob's been assigned to work on the project, and he gets to work in his favorite tool, Photoshop. He can access the Nuxeo Platform from right within his Adobe Creative applications to create the ads with the [Nuxeo Adobe CC Conector]({{page space='nxdoc' page='nuxeo-for-adobe-cc'}}), and even send them for review without ever leaving his desktop.

1. His Art Director, Lisa, reviews and annotates content and can send it back to Bob, but once she's satisfied, she can mark it as creative approved.

1. Alice gets a final look and publishes the ads to the brand portal for Rainier's retail customers to pick up.

1. Julie, the Sporting Goods retail marketing manager, logs into the Rainier brand portal, picks the brand she wants and can download the assets she needs right away.
