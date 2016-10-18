---
title: Defining the Authorized Document Types
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141126
    - local-configuration
toc: true
confluence:
    ajs-parent-page-id: '21299509'
    ajs-parent-page-title: Managing a Workspace
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Defining+the+Authorized+Document+Types
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Defining+the+Authorized+Document+Types
    page_id: '21299449'
    shortlink: _QBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_QBFAQ'
    source_link: /display/USERDOC60/Defining+the+Authorized+Document+Types
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-09-01 13:21'
        message: ''
        version: '32'
    -
        author: Manon Lumeau
        date: '2015-08-28 14:22'
        message: ''
        version: '31'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:28'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:16'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:15'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:15'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:12'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:06'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:04'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-11-26 16:01'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-11-26 15:47'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-11-26 12:12'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-02-03 14:20'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2013-10-22 17:46'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-10-22 17:45'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-09-30 16:37'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-09-30 16:25'
        message: Removed related topics from TOC
        version: '16'
    -
        author: Solen Guitter
        date: '2013-01-15 10:13'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-10-29 11:08'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-10-02 15:10'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-10-02 15:09'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-06-19 12:28'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-06-19 12:28'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-12-11 23:35'
        message: Added related content
        version: '9'
    -
        author: Solen Guitter
        date: '2011-12-11 23:30'
        message: Updated screenshots
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-23 10:11'
        message: Removed 5.4 references
        version: '7'
    -
        author: Solen Guitter
        date: '2011-11-09 10:42'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-05-23 11:53'
        message: added inheritance of document type configuration
        version: '5'
    -
        author: Solen Guitter
        date: '2011-05-20 22:06'
        message: added screenshots
        version: '4'
    -
        author: Solen Guitter
        date: '2011-05-20 21:52'
        message: added introduction and links to sections
        version: '3'
    -
        author: Solen Guitter
        date: '2011-05-20 21:46'
        message: added "default type" and "deny all types" sections
        version: '2'
    -
        author: Solen Guitter
        date: '2011-05-20 18:10'
        message: ''
        version: '1'

---
<div>

&nbsp;

The local configuration enables users to set some document types preferences at the workspace or section level, from Nuxeo's interface. These preferences are inherited in the sub-spaces and all folderish documents (folders, ordered folders, etc).

## Defining What Document Types Can Be Created

Users with Manage right in a space can define what document types can be created in the current space by restricting the list of allowed document types proposed by default.

**To define what document types can be created in a space:**

</div>

1.  On the current space, click on the **Manage** tab.
2.  Click on the **Local configuration** sub-tab.
    The list of the available local configurations are displayed.
3.  If needed, click on the **Enable** link of the "Document types configuration".
    The document types configuration form is displayed. By default, all types are allowed.
4.  Move the document types you don't want users to be able to create to the left column using the icon ![]({{file name='move_left.png' page='icons-index'}}).
    ![]({{file name='doctype_config_remove_doctype.png'}} ?w=600,border=true)
5.  Click on the **Save** button.
    The document types you removed from the default selection cannot be created in the current space anymore: they are not displayed anymore when users clicks on the **New** button.
    ![]({{file name='doctype_config_remove_doctype_result.png'}} ?w=400)

## Denying the Possibility to Create Documents

It is possible to deny the possibility to create documents without changing the access rights applied to the space. This allows to prevent the creation of new documents without forbidding the edition of existing documents.

**To prevent new document creation:**

1.  On the current space, click on the **Manage** tab.
2.  Click on the **Local configuration** sub-tab.
    The list of the available local configurations are displayed.
3.  If needed, click on the **Enable** link of the "Document types configuration".
    The document types configuration form is displayed. By default, all types are allowed.
4.  Check the box **Deny all types**.
5.  Click on the **Save** button.
    The **New** button is not displayed on the **Content** tab anymore.
    ![]({{file name='doctype_config_deny_result.png'}} ?w=600,border=true)

## Selecting the Default Document Type

Workspace managers can set the document type that is created when users import documents using the **Import**&nbsp;button or drag & drop. In a workspace, the default document type is file.

**To define the default document type for import:**

1.  On the current space, click on the **Manage** tab.
2.  Click on the **Local configuration** sub-tab.
    The list of the available local configurations are displayed.
3.  If needed, click on the **Enable** link of the "Document types configuration".
    The document types configuration form is displayed. By default, all types are allowed.
4.  Select the default document type in the drop down list.
5.  Click on the **Save** button.

{{#> callout type='tip' heading='Add your own document types'}}

You can leverage this feature when you customize the Nuxeo Platform and create new document types that extend the File document type. Your document type will then be available in the "Default type" drop down list and you can select it instead of the default File. You can read a [tutorial showing how to create a new document type]({{page space='studio' page='define-your-content-model'}}) using [Studio]({{page space='studio'}}).

{{/callout}}

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Managing a Workspace]({{page page='managing-a-workspace'}})
*   [Changing the Presentation of Document Lists]({{page page='changing-the-presentation-of-document-lists'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related pagess in other documentation'}}

*   [How to Define a Document Type]({{page space='nxdoc60' page='how-to-define-a-document-type'}})
*   [How to Override Existing Document Types]({{page space='nxdoc60' page='how-to-override-existing-document-types'}})

{{/panel}}</div></div>
