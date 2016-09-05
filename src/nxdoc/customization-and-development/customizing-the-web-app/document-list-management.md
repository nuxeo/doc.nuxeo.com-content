---
title: Document List Management
labels:
    - worklist
    - clipboard
confluence:
    ajs-parent-page-id: '17334377'
    ajs-parent-page-title: Customizing the web app
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Document+List+Management
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Document+List+Management'
    page_id: '18449693'
    shortlink: HYUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/HYUZAQ'
    source_link: /display/NXDOC58/Document+List+Management
history:
    - 
        author: Solen Guitter
        date: '2014-01-22 17:33'
        message: ''
        version: '1'

---
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

Documents lists can be defined like in the following example ([`OSGI-INF/documentslists-contrib.xml`](https://github.com/nuxeo/nuxeo-dm/blob/release-5.8/nuxeo-platform-webapp-core/src/main/resources/OSGI-INF/documentslists-contrib.xml)):

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