---
title: Collections
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-drive
    - collection
toc: true
confluence:
    ajs-parent-page-id: '22380662'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Collections
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Collections'
    page_id: '22380729'
    shortlink: uYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/uYBVAQ'
    source_link: /display/NXDOC60/Collections
history:
    - 
        author: Solen Guitter
        date: '2016-06-24 08:06'
        message: >-
            dd missing <require> in Synchronizing a Collection with Nuxeo Drive
            contributio
        version: '16'
    - 
        author: Solen Guitter
        date: '2015-02-19 10:44'
        message: ''
        version: '15'
    - 
        author: Antoine Taillefer
        date: '2014-11-19 14:42'
        message: ''
        version: '14'
    - 
        author: Manon Lumeau
        date: '2014-11-12 11:54'
        message: ''
        version: '13'
    - 
        author: Manon Lumeau
        date: '2014-11-12 11:53'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-11-10 22:48'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-11-10 22:47'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-11-10 22:40'
        message: Add links
        version: '9'
    - 
        author: Antoine Taillefer
        date: '2014-11-07 18:09'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-04-10 16:43'
        message: ''
        version: '7'
    - 
        author: Guillaume Renard
        date: '2014-04-09 18:03'
        message: ''
        version: '6'
    - 
        author: Guillaume Renard
        date: '2014-04-09 18:01'
        message: ''
        version: '5'
    - 
        author: Guillaume Renard
        date: '2014-04-09 17:58'
        message: ''
        version: '4'
    - 
        author: Guillaume Renard
        date: '2014-04-04 16:49'
        message: ''
        version: '3'
    - 
        author: Guillaume Renard
        date: '2014-04-04 16:31'
        message: ''
        version: '2'
    - 
        author: Guillaume Renard
        date: '2014-04-04 16:30'
        message: ''
        version: '1'

---
{{! excerpt}}

This page explains how collections are implemented and how to define the document types that be added or not to a collection.

{{! /excerpt}}

&nbsp;

## How to Use It on Your Own Project

### Which Documents Can Be Added to a Collection

All documents can be added to a collection except:

*   Documents with the facet `SystemDocument`
*   Documents with the facet `NotCollectionMember`

By default, documents of type `Collection`, `WorkspaceRoot`, `TemplateRoot`, `SectionRoot`, `Domain` and `Root` have the facet `NotCollectionMember`. Please see [collection-core-types-contrib.xml](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-platform-collections/nuxeo-platform-collections-core/src/main/resources/OSGI-INF/collection-core-types-contrib.xml) for more details.

### How to Customize Your Own Collection

If you'd like to customize your own collection (for instance to enrich the schemas) you can simply add the `Collection` facet to your specific document type. You'll therefore be able to use it as a regular collection.

{{#> panel type='code' heading='Create your own Collection type'}}

```xml
<?xml version="1.0"?>
<component name="yourBundleName">

  <require>org.nuxeo.ecm.collections.schemas</require>

  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
    <schema name="yourSchema" src="schemas/xxx.xsd" prefix="xxx" />
  </extension>
  <extension target="org.nuxeo.ecm.core.schema.TypeService" point="doctype">
    <facet name="YourFacet" >
      <schema name="yourSchema" />
    </facet>

    <doctype name="YourDocumentType" extends="Document">
      <facet name="YourFacet" />
      <facet name="Collection" />
    </doctype>

  </extension>
</component>

```

{{/panel}}

## Implementation

A collection holds the list of references of the documents it contains. Conversely, a document holds the list of references of the collections it belongs to.

Collection operation are offered by the [CollectionManager.java](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-platform-collections/nuxeo-platform-collections-core/src/main/java/org/nuxeo/ecm/collections/api/CollectionManager.java) service.

Because a collection can potentially contain a large number of documents and, to a lesser extent, a document can belong to&nbsp;many collections, some tasks are performed asynchronously.

For instance, when deleting a collection, an asynchronous work will update the documents it contains to remove the reference of the deleted collection. In the same way, when a document is removed, an asynchronous work will update the collection it belonged to in order to remove the reference of the deleted document.

Finally, when copying a collection, an asynchronous work will also duplicate its content.*

## Synchronizing a Collection with Nuxeo Drive

To do so you need to add the following XML contribution with[either Nuxeo Studio or a custom bundle]({{page page='how-to-contribute-to-an-extension'}}):

```xml
<component name="org.nuxeo.drive.actions.collections">
  <require>org.nuxeo.drive.actions</require>
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
      point="filters">
      <filter id="can_sync_current_doc" append="true">
        <rule grant="true">
          <type>Collection</type>
        </rule>
      </filter>
    </extension>
</component>
```

&nbsp;

{{#> callout type='warning' heading='Limitation'}}

With this configuration you won't be able to unsynchronize a collection as usual using the ![]({{file name='drive_synced.png' space='userdoc60' page='nuxeo-drive'}}) icon as this icon will stay grey: ![]({{file name='drive_unsynced.png' space='userdoc60' page='nuxeo-drive'}}).

Yet you can always unsynchronize the collection from the Nuxeo Drive tab in the user Home.

{{/callout}}

&nbsp;

**Notes:**

*   Files or folders created in the locally synchronized collection folder will not be added to the collection server-side. For now we have no mechanism to choose their path in the hierarchy.
*   Please be aware that all the limitations applied to [online editing with Nuxeo Drive]({{page space='USERDOC' page='Nuxeo Drive#NuxeoDrive-OnlineEditing'}}) apply to synchronized collections.

## Events

Several [events]({{page page='events-and-listeners'}}) related to collections are available:

*   `beforeAddedToCollection`
*   `addedToCollection`
*   `beforeRemovedFromCollection`
*   `removedFromCollection`

The collection reference is available in the event context map. For example, within an event listener which starts an automation chain, you can fetch the collection as described below:

```
- Document.Fetch:
    value: "@{Event.context.getProperty(\"collectionRef\").reference()}"
```

&nbsp;

* * *