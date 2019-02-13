---
title: Document List Management
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - content-review-lts2016
    - worklist
    - clipboard
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '16089312'
    ajs-parent-page-title: JSF UI Framework
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Document+List+Management
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Document+List+Management'
    page_id: '17795144'
    shortlink: SIgPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/SIgPAQ'
    source_link: /display/NXDOC/Document+List+Management
tree_item_index: 1100
history:
    -
        author: Anahide Tchertchian
        date: '2014-12-01 18:32'
        message: orma
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-20 16:21'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-20 19:03'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

{{! excerpt}}
Management of a lost of documents is useful for clipboard and generally document selection features.
{{! /excerpt}}

The Document List Manager provides a service to manage lists of Nuxeo documents.

These lists of documents can have properties such as:

<div class="itemizedlist">

*   A name, defined by `name` attribute.
*   A scope (session or conversation), defined by `<isSession/>` tag - it defines if the memory storage occurs in the Seam session context or in the Seam conversation context.
*   A persistence (SQL directory or not present), defined by `<persistent/>` tag - the service persists only the list of the document references, not the real documents; the lists of document references is persisted in a SQL directory, which is generic and does not need any configuration.

</div>

The lists of documents can be invalidated when Seam events are raised. This is useful, for example, for resetting `CURRENT_SELECTION` lists when the user change the current folder or when a new search is performed.

Documents lists can be defined like in the following example ( [`OSGI-INF/documentslists-contrib.xml`](https://github.com/nuxeo/nuxeo-dm/blob/master/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/documentslists-contrib.xml) ):

```xml
<extension target="org.nuxeo.ecm.webapp.documentsLists.DocumentsListsService" point="list">

  <documentsList name="CLIPBOARD">
    <category>CLIPBOARD</category>
    <imageURL>/img/clipboard.gif</imageURL>
    <title>workingList.clipboard</title>
    <defaultInCategory>false</defaultInCategory>
    <supportAppends>false</supportAppends>
  </documentsList>

  <documentsList name="CURRENT_SELECTION">
    <events>
      <event>folderishDocumentSelectionChanged</event>
      <event>searchPerformed</event>
    </events>
    <isSession>false</isSession>
  </documentsList>

</extension>
```

Here is a sample code to get the list of selected documents within a Seam Component:

```java
@In(create = true)
protected transient DocumentsListsManager documentsListsManager;

public boolean getCanCopy() {
    if (navigationContext.getCurrentDocument() == null) {
        return false;
    }
    return !documentsListsManager.isWorkingListEmpty(DocumentsListsManager.CURRENT_DOCUMENT_SELECTION);
}
```
