---
title: Custom Content View for Documentation Items
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - tuto-content-view
toc: true
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2016-04-27 15:50'
        message: 'ix Studio menu label  '
        version: '42'
    -
        author: Solen Guitter
        date: '2015-11-19 14:41'
        message: ''
        version: '41'
    -
        author: Solen Guitter
        date: '2015-11-19 14:39'
        message: ''
        version: '40'
    -
        author: Solen Guitter
        date: '2015-11-19 14:38'
        message: Screenshot update
        version: '39'
    -
        author: Solen Guitter
        date: '2015-11-12 17:15'
        message: Use custom metatada for Nature
        version: '38'
    -
        author: Solen Guitter
        date: '2015-11-12 16:06'
        message: ''
        version: '37'
    -
        author: Solen Guitter
        date: '2015-11-12 15:32'
        message: Step formatting
        version: '36'
    -
        author: Solen Guitter
        date: '2015-11-10 17:20'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2015-11-10 12:24'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2015-11-06 16:49'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2015-11-06 13:44'
        message: Using 2/3 page layout
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
previous_link: nxdoc/implementing-documentation-items
next_link: nxdoc/document-locking-right-after-its-creation

---
At the first step of this tutorial, we [created a new document type]({{page page='implementing-documentation-items'}}), called `documentationItem`.

Documentation items should be available in specific containers. This will enable us to add specific user actions, listing view and filters on this specific folder.

## Creating a Folderish Document Type

In the Nuxeo Platform everything is a document. Folders or workspaces are documents that are set up with the facet "folderish". This facet enables any document type to have children.

### Creating the Document Type

1.  In Studio, in **Content model** > **Document Types**, click on **New**.
2.  Fill in the creation popup and click on **Next**.

    *   Feature ID: `TechnicalDocumentationContainer`
    *   Extends: Nothing
    *   Label: `Technical Documentation Folder`
        ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='container_doctype.png'}} ?w=400,border=true)

**Note:**

We could extend the Folder document type to inherit its folderish facet. But it would also mean inheriting any other facet and schema the Folder document type has. So we decide not to extend Folder and to manually choose the facets we want.

### Making the Document Type Folderish

1.  On the `TechnicalDocumentationContainer` **Definition** tab, choose the **Collaboratives Spaces** Category.
2.  Choose a nice [icon]({{page space='studio' page='resources'}}).
3.  In **Facets**, select the **Document is folderish** facet.
    It automatically adds an **Accepted children type** section. No children are selected by default.
    The **Show Create Child Action** box is checked.
4.  In this **Accepted children type** section, select `documentationItem`.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='FolderishFacet-3.png'}} ?w=500,h=319,border=true)

**Read more:**

*   [Resources in Studio]({{page space='studio' page='resources'}})
*   [Available Facets]({{page page='available-facets'}})

### Defining the Folder Layouts

The container should just have a title and a description.

1.  Click on the **Creation Layout** tab.
2.  Click on the icon ![]({{file name='delete.gif' space='studio' page='studio-icons-index'}}) of the WARNING row and confirm deletion.
3.  Repeat step 2 on the **View Layout** and **Edit Layout** tabs.
4.  Click on **Save**.

### Restricting Where documentationItem Documents Can Be Created

1.  Go to the `documentationItem` **Definition** tab.
2.  In the **Container Types**, remove Folder and Workspaces and add TechnicalDocumentationContainer.
3.  Click on **Save**.
    Documentation items can now be created in documentation containers only.

### Testing Your Changes

1.  [Redeploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) your changes on your Nuxeo Platform.
2.  Create a technical documentation container in a workspace.
3.  In the container, create a new document.
    You only see a Technical Documentation Item.
    ![]({{file name='tecDocContainer.png'}} ?w=400,border=true)

## Adapting the Listing in a Folder

The Content tab of a documentation container shows very generic information. It should show `documentationItem` metadata instead.

![]({{file name='Columns.png'}} ?w=600,border=true)

In Nuxeo, listings of documents are called Content Views. To show specific information in a documentation container, you need to create a new content view.

### Creating a New Content View

1.  In Studio, go to **Listings & Views** > **Content Views** and click on **New**.
2.  Name it `TechnicalDocListing`.
3.  Click on **Next**.

### Defining the Query

We want the documentation container to display the list of its children. So we will keep the default query filter but add a query parameter to get every document whose parent is the current document.

1.  Edit the query filter to add a parameter `ecm:parentId= ?`. You should get the filter below:

    ```
    ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:currentLifeCycleState != 'deleted' AND ecm:parentId= ?
    ```

2.  In the Query parameter, click on **Add** and type the parameter below. It will define what to use as the value for `ecm:parentId= ?` defined above.

    ```
    #{currentDocument.id}
    ```

### Defining the Filter Search Layout

We also want to be able to filter the documents inside our folder.

1.  In the Search layout part of the form, leave **Display the form as a filter** checked and choose **Unfolded filter**.
2.  In the Search layout, drag and drop the "Full Text" built-in widget.
3.  Drag and drop the Nature metadata from the `quality` schema.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='natureFilter.png'}} ?w=500,border=true)
4.  Edit the Nature widget.
    1.  Select the widget type "Single directory suggestion" and choose the vocabulary `qualNat`.
    2.  Keep the `=` operator.
        ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='natureVoc.png'}} ?w=400,border=true)
5.  Click on **Save**.

### Defining the Results Layout

1.  Click on the **Results** tab.
2.  Add two columns by clicking the **Add column** button.
3.  Drag the following into the results columns:

    *   **Built-in Widgets** > **Icon and document type**
    *   **Built-in Widgets** > **Title with link**

        {{#> callout type='tip' heading='Title with link widget'}}

        You always need that widget if you want to be able to navigate to the documents displayed in the search results.

        {{/callout}}
    *   **Widgets by Property** > `quality` schema > **Nature**: On the Layout Widget Editor popup, select the **Single directory suggestion** widget type and the `qualNat` vocabulary.
    *   **Widgets by Property** > `quality` schema > **Process**: On the Layout Widget Editor popup, select the **Single directory suggestion** widget type and the `procQual` vocabulary.
    *   **Widgets by Property** > `dublincore` schema > **Modified**
    *   **Built-in Widgets** > **Lifecycle state**
    *   **Built-in Widgets** > **Version**
4.  Click on the icon ![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}}) to edit the columns labels. For instance you don't want a label for the Icon and document type column.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items' name='container_content_view.png'}} ?w=600,border=true)
5.  Click on **Save**.
    We now have a new content view available but we need to use it with the `TechnicalDocumentationContainer`.

### Using the New Content View

1.  In the Studio menu, click **Content model** > **Document Types** > **TechnicalDocumentationContainer**.
2.  Click on the **Tabs** tab.
3.  Click on the **Content Views** sub-tab.
4.  In the **Main content** field select the content view `TechnicalDocListing`.
    ![]({{file page='/nxdoc/custom-content-view-for-documentation-items'  name='DefaultContentViewContainer.png'}} ?w=600,border=true)
5.  Click on **Save**.

### Testing Your Changes

1.  [Deploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) your changes on your Nuxeo Platform.
2.  Go to the documentation folder created earlier and enjoy the results: If you deploy the filter, you will see that you can filter documents by Nature.
    ![]({{file name='contentviewDeployed.png'}} ?w=600,border=true)

{{#> callout type='tip' heading='Congratulations'}}

You now have a place to create documentation items. This new container leverages the specific metadata of documentation items.

To sum up what we saw:

*   A container document type is a document type with the Folderish facet.
*   The Container Types and Accepted Children types define containment rules.
*   The listing of a folder is called a content view and is composed of three elements:

    *   A query that can hold dynamic parameters
    *   A filter that can be used in the user interface
    *   A result tab to display the returned documents

It is now time to add custom behaviors, such as the locking policy on which we initially decided.

{{/callout}}
