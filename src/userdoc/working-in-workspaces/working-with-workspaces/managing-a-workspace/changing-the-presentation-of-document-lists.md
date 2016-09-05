---
title: Changing the Presentation of Document Lists
labels:
    - last-review-20141126
    - content-view
    - presentation
    - local-configuration
confluence:
    ajs-parent-page-id: '21299509'
    ajs-parent-page-title: Managing a Workspace
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Changing+the+Presentation+of+Document+Lists
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Changing+the+Presentation+of+Document+Lists
    page_id: '21299452'
    shortlink: '-ABFAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-ABFAQ'
    source_link: /display/USERDOC60/Changing+the+Presentation+of+Document+Lists
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:23'
        message: ''
        version: '24'
    - 
        author: Manon Lumeau
        date: '2015-08-28 14:17'
        message: ''
        version: '23'
    - 
        author: Manon Lumeau
        date: '2014-11-26 11:22'
        message: ''
        version: '22'
    - 
        author: Manon Lumeau
        date: '2014-11-26 11:22'
        message: ''
        version: '21'
    - 
        author: Manon Lumeau
        date: '2014-11-26 11:22'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2014-11-26 11:21'
        message: ''
        version: '19'
    - 
        author: Manon Lumeau
        date: '2014-11-26 11:20'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-03-10 18:36'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:44'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-09-30 16:28'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-09-30 16:27'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-08-29 17:23'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:38'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-10-29 21:23'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-06-19 12:13'
        message: Migrated to Confluence 4.0
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-19 12:13'
        message: Added related user guide pages
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-12-11 23:31'
        message: Added related content
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-12-11 23:20'
        message: Updated screenshots
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:09'
        message: Removed 5.4 references
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-05-31 12:38'
        message: updated with 5.4.2 icon
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-05-23 16:45'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-05-23 15:33'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-05-23 12:36'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-05-23 11:45'
        message: ''
        version: '1'

---
&nbsp;

From the "Local configuration" sub-tab of the **Manage** tab, you can set preferences on what content can be created in the current space, how the lists of content should be presented, customized search features...

The Nuxeo Platform uses different presentations for the lists of documents: they can have different layouts, display specific informations on the documents, have a different default number of documents on a page, enable some features on the documents, etc. These predefined presentations of lists of documents are called "Content views".
Here are some examples of content views used in Nuxeo:

*   Document content (used for workspaces and sections for instance):
    ![]({{file name='workspace-content-view.png'}} ?w=650,border=true)
*   trash content view:
    ![]({{file name='trash-content-view.png'}} ?w=650,border=true)
*   Last modified documents:
    ![]({{file name='last-modified-view.png'}} ?w=350,h=283,border=true)

You can define what content view will be used for folderish documents (i.e. documents in which you can create other documents) in the current space. This is inherited in the folderish documents of the space from which you define these preferences.

{{#> callout type='tip' heading='Customized content views'}}

You can leverage this feature when you customize the Nuxeo Platform and create new content views. Your content view will then be available in the drop down list and you can use locally for documents. You can read [How to define a new view]({{page space='nxdoc60' page='how-to-define-a-new-content-view'}}) using [Studio]({{page space='studio'}}).

{{/callout}}

**To associate a document type and a content view:**

1.  Click on the **Manage** tab of the current space.
2.  Click on the **Local configuration** sub-tab.
3.  If needed, click on the **Enable** link of the "Documents content configuration".
    The document content configuration form is displayed.
4.  Click on the **Add** link to define a new document type - content view association.
5.  In the first drop down list, select the document type.
6.  In the second drop down list, select which content view will be used for the selected document type.
    ![]({{file name='document-content-confiugration.png'}} ?w=650,border=true)
7.  Click on the **Save** button.
    The selected document type now has the presentation defined by the selected content view, in the current space and its sub-spaces.

**To remove a document type - Content view association**

1.  Click on the **Manage** tab of the current space.
2.  Click on the **Local configuration** sub-tab.
    The available local configurations are displayed.
3.  In the Document content configuration, click on the icon&nbsp;![]({{file name='delete.png' page='icons-index'}}) of the document type - content view association you want to remove.
4.  Click on the **Save** button.
    The document type has its default content view.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Managing a Workspace]({{page page='managing-a-workspace'}})
*   [Applying a Preset Look to a Space]({{page page='applying-a-preset-look-to-a-space'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related topics in other documentation'}}

*   [How to Define a New Content View]({{page space='nxdoc60' page='how-to-define-a-new-content-view'}})
*   [How to Customize the Default Content and Trash Listings]({{page space='nxdoc60' page='how-to-customize-the-default-content-and-trash-listings'}})

{{/panel}}</div></div>