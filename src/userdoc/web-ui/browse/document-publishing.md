---
title: Publishing Documents
description:
review:
    comment: ''
    date: '2018-11-16'
    status: ok
toc: true
labels:
    - permissions
tree_item_index: 1100

---

## Working with Sections

When a document is ready for distribution, you must publish it in a section. Sections are spaces dedicated to the distribution of documents to a wider audience.


Sections are spaces managed like workspaces. No section is created by default, except the sections root. The main difference with workspaces is the fact that documents can't be edited in sections.

You are free to organize your section to fit your project or your needs the best. The section tree is completely independent from workspaces. Their structures are not linked.

As in workspaces, access to sections is determined by permissions.

You can also define any document type as publish space in the Definition of the document type in the Studio Modeler, by checking **Document is a publish space**.
![]({{file name='publish-space-studio.png'}} ?w=500,border=true)

## Publishing Documents

Publishing a document means publishing a version of the document as it is at the time of publication.

After publication, if you modify the document in the workspace, it is not modified in the section.

When you publish a document, the following elements are kept from the workspace document:

- The metadata
- All attachments
- The document history (Event log tab only)
- The tags (if this is a first publication — in case of a republication, tags from the workspace are merged with existing tags on the published document)

However, comments are not kept from the workspace document.

**To publish a document**:
1. From the View of the document in the workspace, click ![]({{file name='more-three-dots.png'}} ?w=30,border=true) and select **Publish Document**.
  ![]({{file name='publication-popup.png'}} ?w=500,border=true)
1. Enter the section you want to publish the document in.
1. Select the rendition that should be published, typically no rendition (same document format as in the workspace) or a PDF version of the document.
1. Optional: Create a version.
1. Click **Publish**.

{{#> callout type='info' }}

Working with Renditions

There are several renditions available for your publications. The list of renditions is configurable. If you select no rendition by selecting None in the list, it implies a publication of the document itself.

Selecting Default rendition implies a format that depends of the document type, schemas and facets at the time of publication.

{{/callout}}

**To unpublish a document**:

From the Publication tab of the document in the workspace, click **Unpublish** on  the publication you want to revert.

To revert all the publication of this document, click **Unpublish All**.



{{! Don't put anything here. }}


<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages'}}

- [Nuxeo Platform Feature Table]({{page space='nxdoc' page='nuxeo-platform-feature-table'}})
- [Nuxeo Media Publishing]({{page space='nxdoc' page='nuxeo-media-publishing'}})

{{/panel}}</div><div class="column medium-6">


</div></div>
