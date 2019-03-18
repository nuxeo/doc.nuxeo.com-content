---
title: Collections
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - collection
    - excerpt
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '2392400'
    ajs-parent-page-title: Browsing Content
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Collections
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Collections'
    page_id: '18451619'
    shortlink: o4wZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/o4wZAQ'
    source_link: /display/USERDOC/Collections
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2015-11-23 14:07'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2015-09-07 12:07'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2015-07-07 14:11'
        message: Add screenshots for favorites
        version: '32'
    -
        author: Solen Guitter
        date: '2015-07-07 14:02'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2015-07-07 13:10'
        message: 'NXDOC-614: merge Collections and Favorites page, update'
        version: '30'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:50'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:47'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:47'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:28'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:26'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:22'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:14'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:11'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:10'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:06'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:06'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:04'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-11-28 11:04'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-11-28 10:56'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-11-28 10:55'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-11-27 18:26'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-11-12 13:50'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-07-04 17:06'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-06-11 14:05'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-06-10 11:26'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-04-17 15:25'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-04-17 12:15'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-04-16 17:00'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-04-10 16:01'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-04-09 15:37'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-04-08 17:39'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-03-27 17:37'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-03-27 15:44'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-03-27 15:43'
        message: ''
        version: '1'

---
{{! multiexcerpt name='functional-overview'}}
{{multiexcerpt 'definition-collection' page='collections-web-ui'}}
{{! multiexcerpt name='functional-introduction-jsf-ui'}}

The list of collections available to you is available from your Home, in the **Collections** tab.![]({{file name='collection-home-tab.png'}} ?w=650,border=true)

Click on the collection title to go on the collection and see the list of the documents that are classified in it.
![]({{file name='collection-content-tab.png'}} ?w=650,h=254,border=true)

Click on a document to consult it. You are moved out of the collection to be displayed the document inside its original location.

![]({{file name='collections-summary-widget.png'}} ?w=650,border=true)
{{! /multiexcerpt}}

## Collecting Documents
{{multiexcerpt 'collecting-rights' page='collections-web-ui'}}

{{! multiexcerpt name='collecting-jsf-ui'}}
Documents can be collected:

- Individually by clicking on the icon ![]({{file name='add_to_collection.png' page='icons-index'}}) of the document
    ![]({{file name='collection-creation-from-form-1.png'}} ?w=350,border=true)
- By batch by selecting documents from their parent and clicking on the **Add to collection** button
    ![]({{file name='collection_form_batch.png'}} ?w=350,border=true)
- From the collection itself by clicking the icon ![]({{file name='add_to_collection.png' page='icons-index'}}) and searching the documents to collect
    ![]({{file name='add-to-collection-suggested-documents.png'}} ?w=350,border=true)

In the first two cases you can select the collection by:

- Browsing the collections in the list
- Starting to type the collection name and select it
- Typing a new collection name to create it.

{{#> callout type='tip' }}

The Collection list shows all the collection you have access to, even collection in which you cannot collect documents. Collections you only have read access to are grayed.

{{/callout}}

The list of collections the document is available from is displayed on its **Summary** tab.![]({{file name='collections-summary-widget.png'}} ?w=650,border=true)
{{! /multiexcerpt}}

## Creating Collections
{{multiexcerpt 'collections-containment-rule' page='collections-web-ui'}}

{{! multiexcerpt name='creating-jsf-ui'}}
There are two ways to create a collection:

- Like any other document, using the **New** button: Just fill in the creation form and the collection is created in the current workspace / folder.
    ![]({{file name='available-documents-workspace.png' page='creating-content'}} ?w=500,border=true)
- Directly from the "Add to collection" popup: collections about to be created are displayed with the icon ![]({{file name='add_document.gif' page='icons-index'}}), while existing collections have the icon ![]({{file name='add_to_collection.png' page='icons-index'}}). The collection is created in your personal workspaces, in a **My Collections** folder.
    ![]({{file name='collection-creation-from-form-1.png'}} ?w=350,border=true)
{{! /multiexcerpt}}

## Sharing a Collection
{{! multiexcerpt name='sharing'}}
Sharing a collection means [giving permissions]({{page page='managing-permissions'}}) to users on the collection. Collections created in the default domain in a shared workspace or folder are automatically shared to all the workspace or folder's users, following the [rights inheritance principle]({{page page='managing-permissions'}}#rights-inheritance).

Collections created in your personal workspace are private by default. You must grant the needed permissions on the collection if you want to share it. Granting permissions to a collection makes the collection available to users from their Home. The list of documents displayed inside the collection depends on the permissions of the user on each of the documents.

Beside the generic permissions, collection have a specific right, called "can collect". When you share a collection, you can choose to:

- **Give read access**: By giving them Read permission, you enable users to see the collection in their Home and the documents inside it depending on their permissions on each document;
- **Enable users to add documents to the collection**: By giving the permission "Can collect", you enable users to add documents to the collection and remove them;
- **Give edit access**: By giving the Edit permission, you enable users to add documents to the collection, remove them and to edit the collection (i.e. title, description, etc.);
- **Make them manager for the collection**: By giving them Manage everything permission, you enable users to manage the content of the collection and who can access it.
{{! /multiexcerpt}}

## Removing Documents from a Collection
{{! multiexcerpt name='removing-jsf-ui'}}
To remove a document from a collection, either click on the <span class="s1">icon ![]({{file name='delete.png' page='icons-index'}}) of the collection</span> from the **Summary** tab of the document, or select the document in the collection the checkboxes and click on the **Remove from collection** button.

In both ways the document is immediately removed from the collection.
{{! /multiexcerpt}}

## Favorites
{{multiexcerpt 'definition-favorites' page='favorites'}}

The list of documents bookmarked as favorites is available:
{{! multiexcerpt name='favorites-location-jsf-ui'}}
- From your personal workspace in the **Favorites** collection
    ![]({{file name='Favorites-personal-workspace.png'}} ?w=600,border=true)
- From your dashboard in a **My Favorites** widget
    ![]({{file name='favorite_widget_dashboard.png'}} ?w=600,border=true)
{{! /multiexcerpt}}

{{! multiexcerpt name='bookmarking-favorites-jsf-ui'}}
Bookmarking documents in your favorites can be done like when you add documents to a collection (see previous sections) and selecting the Favorites collection, or using the icon ![]({{file name='pin.png' page='icons-index'}}) from the document itself.
{{! /multiexcerpt}}

{{! /multiexcerpt}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Collections developer documentation]({{page space='nxdoc' page='collections'}})
- [Collections in Web UI]({{page version='' space='userdoc' page='collections-web-ui'}})
- [Favorites in Web UI]({{page version='' space='userdoc' page='favorites'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
