---
title: Collections
review:
    comment: ''
    date: '2017-01-26'
    status: ok
toc: true
tree_item_index: 500
description: Web UI user documentation about Collections
---
{{! excerpt}}

Collections are a folder-like document in which you can classify existing documents. Documents are not actually copied or moved into the collection, which only holds a link to the document in its original location.

{{! /excerpt}}

It enables you to create your own organization of the content without duplicating content and having the size of the content growing uncontrollably.

The list of collections available to you is available from your Home, in the **Collections** tab.

![]({{file name='collections-tab-web-ui.png'}} ?w=250,border=true)

Click on the collection title to go on the collection and see the list of the documents that are classified in it.

![]({{file name='collections-tab-opened-web-ui.png'}} ?w=600,border=true)

Click on a document to consult it. You are moved out of the collection to be displayed the document inside its original location.

![]({{file name='collections-content-expanded-web-ui.png'}} ?w=600,border=true)

## Collecting Documents

You can classify any type of document in a collection. You just need to have Read access to the document to be able to collect it. Collecting a document doesn't give you more permissions on the document: your permissions are the one defined on the original parent of the document.

Documents can be collected:

- Individually by clicking on the icon ![]({{file name='add-to-collection-web-ui.png' page='icons-index' space='userdoc'}} ?w=16) of the document
  ![]({{file name='add-to-collection-web-ui.png'}} ?w=250,border=true)
- By batch by selecting documents from their parent and clicking on the Add to collection button.

In the two cases you can select the collection by:
- Browsing the collections in the list
- Starting to type the collection name and select it
- Typing a new collection name to create it.

The list of collections the document is available from is displayed on its **View** tab


## Creating Collections
Collections can be created in workspaces and folders.

There are two ways to create a collection:
- Like any other document, using the **New** button: Just fill in the creation form and the collection is created in the current workspace / folder.
  ![]({{file name='new-collection-web-ui.png'}} ?w=250,border=true)

- Directly from the **Add to collection** popup: collections about to be created are displayed with the icon ![]({{file name='add-new-collection-web-ui.png'}} ?w=20), while existing collections are displayed in the drop down list. The collection is created in your personal workspaces, in a **My Collections** folder.


## Sharing Collections
{{{multiexcerpt 'sharing' page='userdoc/collections'}}}

## Removing Documents from Collections

To remove a document from a collection, the first option is to click on the icon ![]({{file name='delete.png' page='icons-index'}}) of the collection from the **Summary** tab of the document

The second option is to:
1. Go to the **Collections** tab in your&nbsp;side menu
2. Click on the collection name that you want to manage
3. In the view, click on the document that you want to remove
4. In the second panel of the&nbsp;side menu,click on the icon ![]({{file name='delete.png' page='icons-index'}}) to remove it from the collection.

![]({{file name='remove-from-collection-web-ui.png'}} ?w=250,border=true)

In both ways the document is immediately removed from the collection.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Collections developer documentation]({{page space='nxdoc' page='collections'}})
- [Collections in JSF UI]({{page version='' space='userdoc' page='collections'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
