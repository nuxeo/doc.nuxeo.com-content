---
title: Local Configuration
review:
    comment: ''
    date: '2018-03-08'
    status: ok
labels:
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Local+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Local+Configuration'
    page_id: '26314969'
    shortlink: 2YiRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/2YiRAQ'
    source_link: /display/USERDOC/Local+Configuration
tree_item_index: 1600
history:
    -
        author: Solen Guitter
        date: '2016-01-25 15:13'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-12-08 14:59'
        message: link update
        version: '13'
    -
        author: Manon Lumeau
        date: '2015-11-25 17:10'
        message: 'replace "access rights" by "permissions"'
        version: '12'
    -
        author: Solen Guitter
        date: '2015-08-31 08:56'
        message: 'Add related pages, fix links, capitalize titles, add introduction'
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-08-28 13:26'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-08-28 13:25'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-08-28 12:57'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-08-28 12:14'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-08-28 09:55'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-08-28 09:53'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-08-28 09:36'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-08-28 09:36'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2015-08-28 09:31'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2015-08-27 15:41'
        message: ''
        version: '1'

---
{{! excerpt}}

Users with Manage everything permission can configure workspaces from the Nuxeo Platform user interface so they meet users specific needs. From the tab **Manage** > **Local Configuration**, they can set up the workspace colors, which document types are available in the workspace, how lists of documents are presented, if specific search forms re available from the workspace and where documents can be published.

{{! /excerpt}}

The **Local Configuration** tab is available for domains, workspaces and sections.

## Local Theme Configuration

Local administrators, i.e. users with Manage permission in the space, can easily apply a preset theme to a workspace, template or section. You can apply a theme to spaces only. For instance, you can change the theme of sections, so that they look different from workspaces, but you cannot change the look of a document.

Two themes, also called flavors, are available by default: the Nuxeo theme and the Rainbow theme. Flavors are sets of colors that determine the look of the space. If you configured other flavors in Nuxeo Studio, they are available here as well.

{{#> callout type='info' }}

The new space's theme is not applied to the sub-spaces, but it is applied to the documents it contains.

{{/callout}}

To **change the theme of a workspace**, click on **Manage**&nbsp;> **Local configuration** and, if needed, click on the **Enable** link of the "Theme Configuration" section. Select the flavor you want to apply and click on the **Save** button. ![]({{file name='theme_configuration.png'}} ?w=600,border=true)

## Document Types Configuration

The local configuration enables users to set some document types preferences at the workspace or section level, from Nuxeo's interface. These preferences are inherited in the sub-spaces and all folderish documents (folders, ordered folders, etc).

### Defining What Document Types Can Be Created

Users with Manage permission in a space can define what document types can be created in the current space by restricting the list of allowed document types proposed by default.

To **define what document types can be created in a space,** click on **Manage**&nbsp;> **Local configuration**. The list of the available local configurations are displayed. If needed, click on the **Enable** link of the "Document types configuration". The document types configuration form is displayed. By default, all types are allowed. **Move** the document types you don't want users to be able to create to the left column using the icon ![]({{file space='userdoc' name='move_left.png' page='icons-index'}}) and **Save**. ![]({{file name='doctype_config_remove_doctype.png'}} ?w=600,border=true)

The document types you removed from the default selection cannot be created in the current space anymore: they are not displayed anymore when users clicks on the **New** button.

### Denying the Possibility to Create Documents

It is possible to deny the possibility to create documents without changing the permissions applied to the space. This allows to prevent the creation of new documents without forbidding the edition of existing documents.

To **prevent new document creation**, on the current space, click on **Manage** > **Local configuration** and**,** if needed, click on the **Enable** link of the "Document types configuration". The document types configuration form is displayed. By default, all types are allowed. Check the box **Deny all types** and click on the **Save** button. The **New** button is not displayed on the  **Content** tab anymore.

![]({{file name='doctype_config_deny_result.png'}} ?w=650,border=true)

### Selecting the Default Document Type

Workspace managers can set the document type that is created when users import documents using the **Import** button or drag and drop. In a workspace, the default document type is file.

To **define the default document type for import**, click on **Manage**&nbsp;> **Local configuration** and, if needed, click on the **Enable** link of the "Document types configuration". The document types configuration form is displayed. By default, all types are allowed. Select the default document type in the drop down list and click on the **Save** button.

{{#> callout type='tip' heading='Add your own document types'}}

You can leverage this feature when you customize the Nuxeo Platform and create new document types that extend the File document type. Your document type will then be available in the "Default type" drop down list and you can select it instead of the default File. You can read a tutorial showing [how to create a new document type]({{page space='nxdoc' page='how-to-define-a-document-type'}}) using [Nuxeo Studio]({{page space='studio'}}).

{{/callout}}

## Document Content Configuration

From the "Local configuration" sub-tab of the **Manage** tab, you can set preferences on what content can be created in the current space, how the lists of content should be presented, customized search features...

The Nuxeo Platform uses different presentations for the lists of documents: they can have different layouts, display specific informations on the documents, have a different default number of documents on a page, enable some features on the documents, etc. These predefined presentations of lists of documents are called "Content views".
Here are some examples of content views used in Nuxeo:

*   Document content (used for workspaces and sections for instance):
    ![]({{file name='workspace-content-view.png'}} ?w=600,h=289,border=true)
*   trash content view:
    ![]({{file name='trash-content-view.png'}} ?w=600,border=true)
*   Last modified documents:
    ![]({{file name='last-modified-view.png'}} ?w=350,h=283,border=true)

You can define what content view will be used for folderish documents (i.e. documents in which you can create other documents) in the current space. This is inherited in the folderish documents of the space from which you define these preferences.

{{#> callout type='tip' heading='Customized content views'}}

You can leverage this feature when you customize the Nuxeo Platform and create new content views. Your content view will then be available in the drop down list and you can use locally for documents. You can read [How to define a new view]({{page space='nxdoc' page='how-to-define-a-new-content-view'}}) using [Studio]({{page space='studio'}}).

{{/callout}}

To **associate a document type and a content view**, click on **Manage**&nbsp;> **Local configuration** and, if needed, click on the **Enable** link of the "Documents content configuration". Click on the **Add** link to define a new document type - content view association. In the first drop down list, select the document type and in the second drop down list, select which content view will be used for the selected document type and **Save.**

![]({{file name='document-content-confiugration.png'}} ?w=650,border=true)

The selected document type now has the presentation defined by the selected content view, in the current space and its sub-spaces.

To **remove a document type - Content view association,** click on **Manage**&nbsp;> **Local configuration**. In the Document content configuration, click on the icon ![]({{file space='userdoc' name='delete.png' page='icons-index'}}) of the document type - content view association you want to remove and **Save**. The document type has its default content view.

## Search Configuration

If customized search forms have been contributed, it is possible to define which one to display from a space. This enables users to have search forms adapted to the documents and processes used in the space.

It is possible to enable several search forms on a space. This allows users to have several forms and possibly predefined searches that they can edit.

To **enable contributed searches**, click on the **Manage**&nbsp;> **Local configuration**. If needed, click on the **Enable** link of the search configuration. The default search forms provided in the Nuxeo Platform and the list of contributed searches are displayed. **Move** the searches you want to enable from the space to the "Enabled content view" list. Once it is done click on the **Save** button.

![]({{file name='local-search-configuration.png'}} ?w=650,border=true)

Users that have access to the space now have the selected searches available when they click on the Search tab from this space.

![]({{file name='local-search-configuration-result.png'}} ?w=300,h=246,border=true)

{{#> callout type='tip' heading='Disabling a search'}}

To remove a search, move it back to the "Existing content view" list on the left and click **Save**.

{{/callout}}

## Publication Targets

In order to guide users when they publish documents and make sure documents are published in the correct sections, you can define publication targets for the workspace's documents. Publishing targets are sections in which the documents from the workspace will be publishable. Users will then be able to publish documents only in the sections you have defined.

For more information about Publication Targets, read the page [Publishing Content]({{page page='publishing-content'}}).

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related User Documentation'}}

- [Document Types]({{page page='document-types'}})
- [Publishing Content]({{page page='publishing-content'}})
- [Searching the Nuxeo Platform]({{page page='searching-the-nuxeo-platform'}})

{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}

- [How to Define a Document Type]({{page space='nxdoc' page='how-to-define-a-document-type'}})
- [How to Define a New Content View]({{page space='nxdoc' page='how-to-define-a-new-content-view'}})
- [How to Brand Your Application]({{page space='nxdoc' page='how-to-brand-your-application'}})
- [How to Configure a Search Filter With Facets and Other Aggregates]({{page space='nxdoc' page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}})

{{/panel}}
</div>
</div>
