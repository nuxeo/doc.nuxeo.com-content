---
title: Publishing Content
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - section
    - publishing
    - drag-and-drop
    - excerpt
    - excerpt-include
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Publishing+Content
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Publishing+Content'
    page_id: '2392407'
    shortlink: V4Ek
    shortlink_source: 'https://doc.nuxeo.com/x/V4Ek'
    source_link: /display/USERDOC/Publishing+Content
tree_item_index: 1400
history:
    -
        author: Solen Guitter
        date: '2016-05-18 13:21'
        message: pdate required rights in sections to be able to publish (Can ask for publishing instead of Read
        version: '22'
    -
        author: Solen Guitter
        date: '2015-12-07 15:01'
        message: Add publishing process using drag and drop
        version: '21'
    -
        author: Manon Lumeau
        date: '2015-11-24 15:40'
        message: new
        version: '20'
    -
        author: Solen Guitter
        date: '2015-08-31 09:33'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-08-27 13:49'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-08-27 13:49'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-08-27 13:28'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-08-27 13:11'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-08-27 13:11'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-12-03 11:52'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-11-04 00:59'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-10-22 18:22'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-10-18 10:59'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-11-29 12:07'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-29 12:07'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-08 17:55'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-11-03 16:48'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-10-20 10:39'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-10-18 15:59'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-10-18 12:25'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-10-13 17:46'
        message: added links
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-29 14:52'
        message: ''
        version: '1'

---
{{! multiexcerpt name='functional-overview'}}

### Working with Sections

When a document is finished and ready for distribution, you must publish it in a section. Sections are spaces dedicated to the distribution of documents to a wider audience.

Sections are spaces that are managed like workspaces, there is no section that is automatically created by default, except for the sections root. You are free to organize your section the way it fits your needs or your project the best. The section tree is completely independent from workspaces. Their structure is not linked. Still, you can guide users as to where they should publish documents from a specific workspace using the publication targets.

As in workspaces, the access to sections is determined by permissions.

The main difference with workspaces is the fact that documents can't be edited in sections. The only actions available on published documents are:

- [Relations actions]({{page version='' space='nxdoc' page='editing-content'}}#relations)
- [Preview]({{page space='nxdoc' page='Preview'}})
- [Alerts]({{page space='nxdoc' page='Alerts'}})

### Publishing Documents

Publishing a document means publishing the version of the document as it is at the time of publication. If you modify the document in the workspace once published, it is not modified in the section. If you want to modify a published document, you must modify it in the workspace and then publish the modified version of the document. The workspace document can be deleted without the published document to be affected: section readers will still be able to consult the published document, comment it, etc.

When you want to publish a document, you need to submit it to publishing. When the document is submitted to publication, the section's managers can approve the publication submission, that is to say publish the document, or reject it. In that last case, the document is not available in the section. However, it is still available in the workspace. You can modify it and submit it again.

When you publish a document, the following elements are kept from the workspace document:

*   The metadata
*   All attachments
*   The document history (Event log tab only)
*   The tags (if this is a first publication&nbsp;&mdash; in case of a republication, tags from the workspace are merged with existing tags on the published document)

The following elements are not available on the published document:

*   The comments
*   The relations

    {{#> callout type='info' }}

    It is possible to [enable the duplication of relations]({{page space='nxdoc' page='publisher#publication-relations-duplication'}}) when the document is published.

    {{/callout}}
*   The archived versions of the document

**Submitting a Document to Publishing**

To submit a document to publication, you need the following permissions:

*   At least "Edit" on the workspace from which you want to publish
*   At least "Read" and "Can ask for publishing" on the section into which you want to publish the document (Read permission is usually inherited from the user’s group permissions).

You can submit a document in several sections. The publishing workflows in the different sections are independent. The document can be published in a section and rejected in another one. The list of the sections in which you can publish a document is defined by your permissions.

To **submit a document to publishing**, from the **Publish** tab of the document in the workspace, select:

*   The domain you want to publish the document in
*   The rendition that should be published, typically no rendition (same document format as in the workspace) or a PDF version of the document.

Unfold the sections tree and click on the **Publish here** link corresponding to the section you want to publish the document in.

The version number of the submitted document is indicated in the publication form.
![]({{file name='publish-form-submitted.png'}} ?w=650,border=true)

Alternatively you can drag the icon of the document to publish onto the target section in the navigation tree until the section is highlighted, and drop the document icon.

![]({{file name='publish_D&D.png'}} ?w=500,border=true)

The document submitted to publication in the section:

*   Users with Read permission in the section don't see it yet, since its publication has to be approved.

*   Users with Edit or Manage everything permission can see it in the section and in their dashboard as a pending document. They need to approve its publication.

    {{#> callout type='tip' }}

    If you have Edit or Management permissions in the selected section, the document is automatically published and visible to all section users. It doesn't need to be approved.

    {{/callout}}

    In the workspace, the document's minor version is automatically incremented if the published version doesn't correspond to the latest archived version (version number is suffixed with +, 0.1+ for instance).

**Approving Document Publishing**

Users with edit and management permissions in the section can approve the publishing of a document.

When a document is submitted to publication in a section in which you have management permissions, it is displayed in your dashboard. You must then approve or reject the document.

To **publish a document**, click on the **Home** main tab (the **Dashboard** tab is automatically selected. The pending documents are displayed in your tasks). Click on the pending document and go to the **Publishing** part at the bottom of the tab, with has a **Reject** and a **Publish** buttons.

![]({{file name='publish-approval-form.png'}} ?w=650,border=true)

Only users with edit or management permissions can see the pending document in the section. You can type a comment or click on **Publish** directly. The document is now available to all the users who can access the section.

**Rejecting Document Publishing**

Only users with edit and management permissions in the section can reject the publishing of a document.

When a document is submitted to publication in your section, you must decide if it can be published in it. If you think that the document is not ready for publication or that it shouldn't be published in this section, you must reject it.

{{#> callout type='tip' }}

Only users with edit and management permissions can see the pending document in the section.

{{/callout}}

To **reject a document**, click on the **Home** main tab and then on the pending document. The document opens in the section on its **Summary** tab. It has a **Publishing** part at the bottom of the tab, with a **Publishing** part that has a **Reject** and a **Publish** buttons. Type a comment explaining why you reject the document publication. This comment is mandatory to reject the document publishing.

![]({{file name='publish-reject-comment.png'}} ?w=650,border=true)

Once it is done, click on the **Reject** button. The document is not published and is deleted from section content. You are redirected on the **Content** tab of the section.
In the workspace, the fact that publishing was rejected is logged in the History of the document.

**Republishing Documents**

Users with Edit permissions can easily publish a new version of a document that has already been published. Republishing is available after the published document has been edited, with or without version increment.

To **republish a document**, in the workspace, open the document to republish and click on the **Publish** tab. The list of sections in which the document is published is displayed and a Republish button is displayed next to the Unpublish button. Click on the **Republish** button corresponding to the section in which you want to publish a new version of the document. The latest version of the document is immediately available from the section. It replaced the previously published version in the section.

**Unpublishing Documents**

Only users with editing or management permissions can unpublish a document from a section. When a document is obsolete or inaccurate, it shouldn't be available in sections anymore. You have to unpublish it so section readers do not have access to the document.

Unpublishing a document deletes the document from the section, but it does not delete the workspace document.

To **unpublish a document from a section**, in the **Content** tab of the section, check the box in front of the document's name and click on the **Unpublish** button. The document is unpublished and does not appear in the section. The original document in the workspace is not deleted.

### Media Publishing

{{{excerpt 'NXDOC:Nuxeo Media Publishing'}}}

Read the page [Nuxeo Media Publishing]({{page space='nxdoc' page='nuxeo-media-publishing'}}) for more information about this addon.

### Publication Targets

In order to guide users when they publish documents and make sure documents are published in the correct sections, you can define publication targets for the workspace documents. Publishing targets are sections in which the documents from the workspace will be publishable. Users will then be able to publish documents only in the sections you have defined.

By default, workspaces don't have any targets defined.

To define the publication targets of a workspace, click on the **Manage**&nbsp;> **Publication targets**, if no section has been defined yet, users can submit documents to publishing in any section (providing they have the permissions to publish). Unfold the sections tree and click on the **Add** link of the sections to which you want to restrict publishing from this workspace. The selected sections are displayed in a table below the tree. No **Add** link is available anymore for these sections.

When they click on the **Publish** tab of documents to publish a document, only the selected sections are available to publish the document. To **remove a section** from the workspace's targets, click on&nbsp;![]({{file space='userdoc' name='delete.png' page='icons-index'}}) next to it.

![]({{file name='publicationTargets-added.png'}} ?w=500,border=true)

{{! /multiexcerpt}}

{{! Don't put anything here. }}


<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages'}}

- [Nuxeo Platform Feature Table]({{page space='nxdoc' page='nuxeo-platform-feature-table'}})
- [Nuxeo Media Publishing]({{page space='nxdoc' page='nuxeo-media-publishing'}})

{{/panel}}</div><div class="column medium-6">


</div></div>
