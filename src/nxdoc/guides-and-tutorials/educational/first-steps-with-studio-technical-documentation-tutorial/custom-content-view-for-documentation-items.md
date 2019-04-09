---
title: Custom Content View for Documentation Items
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-content-view
toc: true
confluence:
    ajs-parent-page-id: '22380605'
    ajs-parent-page-title: 'First Steps With Studio: Technical Documentation Tutorial'
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Custom+Content+View+for+Documentation+Items
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Custom+Content+View+for+Documentation+Items
    page_id: '22380702'
    shortlink: noBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/noBVAQ'
    source_link: /display/NXDOC60/Custom+Content+View+for+Documentation+Items
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2016-04-27 16:24'
        message: 'ix Studio menu label    '
        version: '32'
    -
        author: Solen Guitter
        date: '2014-10-13 10:26'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-10-10 11:14'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2014-10-09 11:02'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2014-10-09 11:00'
        message: Added read more
        version: '28'
    -
        author: Solen Guitter
        date: '2014-10-08 18:00'
        message: Review steps
        version: '27'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:52'
        message: ''
        version: '26'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:51'
        message: ''
        version: '25'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:27'
        message: ''
        version: '24'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:27'
        message: ''
        version: '23'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:26'
        message: ''
        version: '22'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:25'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:22'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:10'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:09'
        message: ''
        version: '18'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:05'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2014-10-06 16:46'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2014-10-06 16:30'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-10-06 16:29'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-06-12 11:30'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-07-15 11:18'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2013-07-10 23:42'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-07-10 21:24'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-07-08 16:36'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-07-08 16:24'
        message: Reorganized steps
        version: '8'
    -
        author: Frédéric Vadon
        date: '2013-07-05 16:00'
        message: ''
        version: '7'
    -
        author: Frédéric Vadon
        date: '2013-07-05 16:00'
        message: ''
        version: '6'
    -
        author: Frédéric Vadon
        date: '2013-07-05 15:58'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2013-07-05 15:58'
        message: ''
        version: '4'
    -
        author: Frédéric Vadon
        date: '2013-07-05 12:24'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2013-07-03 19:03'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2013-07-03 18:00'
        message: ''
        version: '1'
previous_link: nxdoc/documentation-item-implementation
next_link: nxdoc/document-locking-right-after-its-creation

---
At the first step of this tutorial, we created a new document type, called `documentationItem`.

Now we decide that documentation items should be created in specific containers. This will enable us to add specific user actions, listing view and filters on this specific folder.

## Creating a Folderish Document Type

In the Nuxeo Platform everything is a document. It means that folders or workspaces are just documents. They have metadata, a life cycle, etc. What makes them a folder is the facet "folderish". Any document that has this facet set up becomes a folderish document type and can have children.

**Creating the document type**

1.  In **Studio** > **Content model** > **Document Types**, click on **New**.
2.  Fill in the creation popup and click on **Next**.

    *   Feature ID: `TechnicalDocumentationContainer`
    *   Extends: Nothing
    *   Label: `Technical Documentation Folder`
        ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='container_doctype.png'}} ?w=400,border=true)
    *   Click on **Next**.

{{#> callout type='info' heading='Why not extend Folder?'}}

We could extend the Folder document type to inherit its folderish facet. But it would also mean inheriting any other facet and schema the Folder document type has. So we decide not to extend Folder and to manually choose the facets we want.

{{/callout}}<div class="row"><div class="column medium-8">

**Making the document type folderish**

1.  On the `TechnicalDocumentationContainer` Definition tab, choose the **Collaboratives Spaces** Category.
2.  Choose a nice [icon]({{page space='studio' page='resources'}}).
3.  In **Facets**, select the **Document is folderish** facet.
    It will automatically add an **Accepted children type** section. No children are selected by default.
    The **Show Create Child Action** box is checked.
4.  In this **Accepted children type** section, select `documentationItem`.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='FolderishFacet-3.png'}} ?w=500,h=319,border=true)

</div><div class="column medium-4">{{#> panel type='primary'}}
Read more:
- [Resources in Studio]({{page space='studio' page='resources'}})
- [Available Facets]({{page page='available-facets'}})
{{/panel}}
</div>
</div>
<div class="row">
<div class="column medium-8">

**Defining the folder layouts**

For our container, we need very few metadata, a title and a description are enough.

1.  Click on the Creation Layout tab.
2.  Click on the icon ![]({{file name='delete.gif' space='studio' page='studio-icons-index'}}) of the WARNING rowand confirm deletion.
3.  Repeat step 2 on the View and Edit layout tabs.
4.  Click on **Save**.

**Restricting where documentationItem documents can be created**

1.  Go to the `documentationItem` Definition tab.
2.  In the **Container Types**, remove Folder and Workspace and add `TechnicalDocumentationContainer`.
3.  Click on **Save**.
    Documentation items can now be created in documentation containers only.

**Testing your changes**

1.  [Redeploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) your changes on your Nuxeo Platform.
2.  Create a technical documentation container in a workspace.
3.  In the container, create a new document.
    You only see a documentation item.
    ![]({{file name='tecDocContainer.png'}} ?w=500,h=244,border=true)

</div><div class="column medium-4">{{#> panel type='primary'}}
Read more:
- [Form Layouts in Studio]({{page space='studio' page='form-layouts'}})
{{/panel}}
</div>
</div><div class="row"><div class="column medium-8">

## Adapting the Listing in a Folder

The information displayed in the Content tab of a documentation container are very generic. We want to display the `documentationItem` metadata.

![]({{file name='Columns-2.png'}} ?w=500,border=true)

In Nuxeo, listings of documents are called Content Views. We will now see how to create a new content view and replace the default content view by our own.

**Creating a new content view**

1.  In Studio, go to **Listings & Views** > **Content Views** and click on **New**.
2.  Name it `TechnicalDocListing`.
3.  Click on **Next**.

**Defining the query**

We want the documentation container to display the list of its children. This is a common behavior for a folder. So we will keep the default query filter but add a query parameter to get every documents whose parent is the current document.

1.  Edit the query filter to add a parameter `ecm:parentId= ?`. You should get the filter below:

    ```
    ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:currentLifeCycleState != 'deleted' and ecm:parentId= ?
    ```

2.  In the Query parameter, click on **Add** and type the parameter below. It will define what to use as the value for `ecm:parentId= ?` defined above.

    ```
    #{currentDocument.id}
    ```

**Defining the filter search layout**

We also want to be able to filter the documents inside our folder.

1.  In the Search layout part of the form, check **Display the form as a filter**.
2.  Choose if it should be displayed in a pop-up or a folding form, it is up to you.
3.  In the Search layout, drag and drop the "full text" built-in widget on the search layout so that we can filter by using the full text search.
4.  Drag the Nature metadata from the `dublincore` schema and drop it to the layout.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='natureFilter.png'}} ?w=500,border=true)
5.  Edit the Nature widget
    1.  Select a Vocabulary widget type and choose the vocabulary ``qualNat``.
    2.  Keep the "=" operator.
        ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='natureVoc.png'}} ?w=400,border=true)
6.  Click on **Save**.

**Defining the Results layout**

1.  Click on the **Results** tab.
2.  Drag the following built-in widgets into the results columns:

    *   **Icon and document type**
    *   **Title with link**

        {{#> callout type='tip' heading='Title with link widget'}}

        You always need that widget if you want to be able to navigate to the documents displayed in the search results.

        {{/callout}}
3.  Add the **Nature** metadata:
    1.  Drag and drop it from the schema `dublincore`.
    2.  Edit the widget to select the **Vocabulary** widget type and the `qualNat` vocabulary.
4.  Add the **Process** metadata:
    1.  Drag and drop it from the schema `Quality`.
    2.  Edit the widget to select the **Chained vocabulary** widget type and the `procQual` vocabulary.
5.  Add the **Modified** from the schema `dublincore`.
6.  Add two columns by clicking the **Add column** button.
7.  Drag the following built-in widgets:
    *   **Lifecycle state**
    *   **Version**
8.  Click on the icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) to edit the columns labels. For instance you don't want a label for the Icon and document type column.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='container_content_view.png'}} ?w=600,border=true)
9.  Click on **Save**.
    We now have a new content view available but we need to use it with the `TechnicalDocumentationContainer`.

**Using the new content view on the `TechnicalDocumentationContainer` document type**

1.  In the Studio menu, click **Content model** > **Document Types** > **TechnicalDocumentationContainer**.
2.  Click on the **Tabs** tab.
3.  Click on the **Content Views** sub-tab
4.  In the Main content field select the content view `TechnicalDocListing`.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items'  name='DefaultContentViewContainer.png'}} ?w=600,border=true)
5.  Click on **Save**.

**Testing your changes**

1.  [Deploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) your changes on your Nuxeo Platform.
2.  Go on the documentation folder created sooner and enjoy the result: If you deploy the filter, you will see that you can filter documents by Nature.
    ![]({{file name='contentviewDeployed-4.png'}} ?w=500,border=true)

{{#> callout type='tip' heading='Congratulations'}}

You now have a place to create documentation items. This new container leverages the specific metadata of documentation items.

To sum up what we saw:

*   A container document type is a document type with the folderish facet.
*   The Container Types and Accepted Children types define containment rules.
*   The listing of a folder is called a content view and is composed of three elements:

    *   a query that can hold dynamic parameters,
    *   a filter that can be used in the user interface,
    *   a result tab to display the returned documents.

It is now time to add custom behaviors, such as the locking policy we decided initially.

{{/callout}}</div><div class="column medium-4">{{#> panel type='primary'}}
Read more:
- [Content Views in Studio]({{page space='studio' page='content-views'}})
{{/panel}}
</div>
</div>
