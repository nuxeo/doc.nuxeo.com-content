---
title: Publishing Documents
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141203
    - publication
toc: true
confluence:
    ajs-parent-page-id: '21299496'
    ajs-parent-page-title: Working in Sections
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Publishing+Documents
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Publishing+Documents'
    page_id: '21299505'
    shortlink: MQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MQFFAQ'
    source_link: /display/USERDOC60/Publishing+Documents
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:19'
        message: ''
        version: '28'
    -
        author: Bertrand Chauvin
        date: '2015-08-31 09:06'
        message: Removed reference to 5.7.1
        version: '27'
    -
        author: Bertrand Chauvin
        date: '2015-08-31 09:04'
        message: Fixed necessary right for publishing
        version: '26'
    -
        author: Solen Guitter
        date: '2015-08-28 09:04'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-12-03 16:14'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-12-03 16:03'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-02-14 15:09'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-02-14 15:04'
        message: Added details on version increment upon publication
        version: '21'
    -
        author: Solen Guitter
        date: '2014-01-29 17:47'
        message: >-
            Made pending document visibility to different section users more
            explicit
        version: '20'
    -
        author: Solen Guitter
        date: '2014-01-29 15:52'
        message: >-
            Made minimul required rights to submit a document to publication
            more explicit
        version: '19'
    -
        author: Solen Guitter
        date: '2013-10-22 18:23'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-10-18 18:35'
        message: Added info about enabling relations duplication
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-18 18:09'
        message: >-
            Added description of the elements kept and not when a document is
            published
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-04 15:58'
        message: Added new republishing feature
        version: '15'
    -
        author: Solen Guitter
        date: '2013-09-30 17:24'
        message: Removed related topics from TOC
        version: '14'
    -
        author: Solen Guitter
        date: '2013-01-23 11:15'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-10-04 12:27'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-01-23 17:33'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-01-23 17:33'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-11-24 10:57'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-08 17:59'
        message: added related content
        version: '8'
    -
        author: Solen Guitter
        date: '2011-06-06 14:59'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-10-18 18:43'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-10-18 18:35'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2010-10-18 11:09'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-10-18 11:09'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-10-18 11:06'
        message: added screenshots
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-29 18:03'
        message: ''
        version: '1'

---
When you want to publish a document, you need to submit it to publishing. When the document is submitted to publication, the section's managers can approve the publication submission, that is to say publish the document, or reject it. In that last case, the document is not available in the section. However, it is still available in the workspace. You can modify it and submit it again.

When you publish a document, the following elements are kept from the workspace document:

*   The metadata,
*   All attachments,
*   The document history (Event log tab only),
*   The tags (if this is a first publication &mdash; in case of a republication, tags from the workspace are merged with existing tags on the published document),

The following elements are not available on the published document:

*   The comments,
*   The relations,

    {{#> callout type='info' }}

    It is possible to [enable the duplication of relations]({{page space='nxdoc60' page='publisher#publication-relations-duplication'}}) when the document is published.

    {{/callout}}
*   The archived versions of the document.

## Submitting a Document to Publishing

To submit a document to publication, you need the following rights:

*   at least _write_ on the workspace from which you want to publish,
*   at least _can ask for publishing_ on the section into which you want to publish the document.

You can submit a document in several sections. The publishing workflows in the different sections are independent. The document can be published in a section and rejected in another one. The list of the sections in which you can publish a document is defined by your access rights.

**To submit a document to publishing:**

1.  In the workspace, open the document to publish.
2.  Click on the **Publish** tab.
3.  Use the drop down list to select the domain you want to publish the document in.

    {{#> callout type='tip' }}

    If you use only the default domain, the domain is selected by default.

    {{/callout}}
4.  Unfold the sections tree and click on the **Publish here** link corresponding to the section you want to publish the document in.
    ![]({{file name='publish-form.png'}} ?w=650,h=238,border=true)
    The version number of the submitted document is indicated in the publication form.
    ![]({{file name='publish-form-submitted.png'}} ?w=650,border=true)
    The document submitted to publication in the section:

    *   Users with read right in the section don't see it yet, since its publication has to be approved.

    *   Users with Write or Manage everything right can see it in the section and in their dashboard as a pending document. They need to approve its publication.

        {{#> callout type='tip' }}

        If you have write or management rights in the selected section, the document is automatically published and visible to all section users. It doesn't need to be approved.

        {{/callout}}

        In the workspace, the document's minor version is automatically incremented if the published version doesn't correspond to the latest archived version (version number is suffixed with +, 0.1+ for instance).

## Approving Document Publishing

Users with write and management rights in the section can approve the publishing of a document.

When a document is submitted to publication in a section in which you have management rights, it is displayed in your dashboard. You must then approve or reject the document.

**To publish a document:**

1.  Click on the **Home** main tab.
    The **Dashboard** tab is automatically selected. The pending documents are displayed in your tasks.
    ![]({{file name='publish-dashboard.png'}} ?w=350,h=90,border=true)
2.  Click on the pending document.
    The document opens in the section on its **Summary** tab. It has a **Publishing** part at the bottom of the tab, with has a **Reject** and a **Publish** buttons.
    ![]({{file name='publish-approval-form.png'}} ?w=650,border=true)
    Only users with write or management rights can see the pending document in the section.
3.  Type a comment (optional).
4.  Click on the **Publish** button.
    The document is now available to all the users who can access the section.
    ![]({{file name='publish-ok.png'}} ?w=650,border=true)

## Rejecting Document Publishing

Only users with write and management rights in the section can reject the publishing of a document.

When a document is submitted to publication in your section, you must decide if it can be published in it. If you think that the document is not ready for publication or that it shouldn't be published in this section, you must reject it.

{{#> callout type='tip' }}

Only users with write and management rights can see the pending document in the section.

{{/callout}}

**To reject a document:**

1.  Click on the **Home** main tab.
    The **Dashboard** tab is automatically selected. The pending documents are displayed in your tasks.
    ![]({{file name='publish-dashboard.png'}} ?w=350,border=true)
2.  Click on the pending document.
    The document opens in the section on its **Summary** tab. It has a **Publishing** part at the bottom of the tab, with a **Publishing** part that has a **Reject** and a **Publish** buttons.
3.  Type a comment explaining why you reject the document publication. This comment is mandatory to reject the document publishing.
    ![]({{file name='publish-reject-comment.png'}} ?w=650,border=true)
4.  Click on the **Reject** button.
    The document is not published and is deleted from section content. You are redirected on the **Content** tab of the section.
    In the workspace, the fact that publishing was rejected is logged in the History of the document.
    ![]({{file name='publish-reject-history.png'}} ?w=650,border=true)

## Republishing Documents

Users with Write rights can easily publish a new version of a document that has already been published. Republishing is available after the published document has been edited, with or without version increment.

**To republish a document:**

1.  In the workspace, open the document to republish.
2.  Click on the **Publish** tab.
    The list of sections in which the document is published is displayed.
    A Republish button is displayed next to the Unpublish button.
3.  Click on the **Republish** button corresponding to the section in which you want to publish a new version of the document.
    The latest version of the document is immediately available from the section. It replaced the previously published version in the section.

## Unpublishing Documents

Only users with writing or management rights can unpublish a document from a section.

When a document is obsolete or inaccurate, it shouldn't be available in sections anymore. You have to unpublish it so section readers do not have access to the document.

Unpublishing a document deletes the document from the section, but it does not delete the workspace document.

**To unpublish a document from a section:**

1.  In the **Content** tab of the section, check the box in front of the document's name.
    ![]({{file name='unpublish.png'}} ?w=650,border=true)
2.  Click on the **Unpublish** button.
    The document is unpublished and does not appear in the section. The original document in the workspace is not deleted.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages'}}

- [Setting Publication Targets]({{page page='setting-publication-targets'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
