---
title: Search & Find
review:
    comment: ''
    date: '2019-09-18'
    status: ok
labels:
    - DAM
tree_item_index: 300
toc: true
---

## Search

The Nuxeo Platform provides different way to search your documents. Searches can be saved, shared and deleted.

### Search with Custom Metadata

The search enables you to search a document using documents metadata. You can for instance select metadata of the searched document or the date of specific events such as publication, creation.

The Search tab leverages [Elasticsearch]({{page version='' space='nxdoc' page='elasticsearch-setup'}}) to provide a quicker and more efficient search. The search form uses Elasticsearch aggregates for most fields: aggregate fields values are filtered so as to display only relevant values and show the count of matching documents for each value.

### Assets Search

Once assets documents created, a new search type is displayed in the left menu, the Assets search. This search will let you search by assets metadata, such as:
- Type
- Format
- Width
- Height
- Etc.

![]({{file name='assets-search.png' version='1010' space='nxdoc' page='digital-asset-management-dam'}} ?w=600,border=true)


### Quick Search

Quick search can be accessed from any site page. At any time, you can search a document by typing keywords in the search box located at the upper right corner of the page.

![]({{file name='quick-search-web-ui.png' version='1010' page='userdoc/search'}} ?w=600,border=true)

When doing a quick search in the suggestion box, Web UI displays the matched terms and metadata so as to understand why the result item is returned.

Read the [Search documentation]({{page version='' space='userdoc' page='search'}}) page for more information.

## Preview

The preview enables you to see an insight of your document. A preview is available for all sort of document types:
- **PDF** and **Office** files: Preview of PDF and Office files is leveraged by [pdf.js by Mozilla](https://mozilla.github.io/pdf.js/).
- **Picture**: Picture document can be viewed from their View tab where additional information are available like, rotation action, dimensions, formats, etc.
- **Video**: Video documents can be viewed from their View tab where a video player and a storyboard are available.
- **Audio**: A player is displayed to listen to it from the application.
- **3D**: The 3D preview allows a complete visualization of the 3D document in real-time, you can rotate, pan and zoom on the 3D model.


For more information about Preview in Nuxeo Platform, read the [related documentation]({{page version='' space='nxdoc' page='preview'}}).
