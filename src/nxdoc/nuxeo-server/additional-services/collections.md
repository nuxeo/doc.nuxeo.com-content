---
title: Collections
description: Collections are a folder-like document in which you can classify existing documents. Documents are not actually copied or moved into the collection, which only holds a link to the document in its original location.
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - collection
    - grenard
    - collection-component
    - multiexcerpt-include
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '16089319'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Collections
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Collections'
    page_id: '19234842'
    shortlink: GoAlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GoAlAQ'
    source_link: /display/NXDOC/Collections
tree_item_index: 400
history:
    -
        author: Anne Jubert
        date: '2016-06-23 14:45'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2016-04-20 13:52'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2015-11-03 15:53'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-11-03 15:47'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2015-11-03 15:41'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2015-11-03 15:33'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-09-07 10:09'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-09-07 10:08'
        message: 'NXDOC-647 : use tabs to show Collections related docs'
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-08-11 11:51'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-07-07 14:09'
        message: 'NXDOC-614: Add functional overview'
        version: '17'
    -
        author: Solen Guitter
        date: '2015-02-19 10:45'
        message: format
        version: '16'
    -
        author: Michaël Vachette
        date: '2015-02-18 16:43'
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

## Functional Overview

{{multiexcerpt 'definition-collection' space='userdoc' page='collections-web-ui'}}

Depending on your user interface you can access collections by different means.

{{{multiexcerpt 'functional-introduction-web-ui' space='userdoc' page='collections-web-ui'}}}

<!--JSF Instructions
**JSF UI**
{{{multiexcerpt 'functional-introduction-jsf-ui' page='USERDOC:Collections'}}}
-->

### Collecting Documents

{{multiexcerpt 'collecting-rights' page='USERDOC:collections-web-ui'}}

{{{multiexcerpt 'collecting-web-ui' page='USERDOC:collections-web-ui'}}}

<!--JSF Instructions
**Collecting documents in JSF UI**
{{{multiexcerpt 'collecting-jsf-ui' page='USERDOC:Collections'}}}
-->

### Creating Collections

{{multiexcerpt 'collections-containment-rule' page='collections-web-ui'}}

{{{multiexcerpt 'creating-web-ui' space='userdoc' page='collections-web-ui'}}}

<!--JSF Instructions
**Creating collections in JSF UI**
{{{multiexcerpt 'creating-jsf-ui' page='USERDOC:Collections'}}}
-->

### Sharing a Collection

{{{multiexcerpt 'sharing' space='userdoc' page='collections-web-ui'}}}

### Removing Documents from a Collection

{{{multiexcerpt 'removing-web-ui' page='USERDOC:collections-web-ui'}}}

<!--JSF Instructions
**JSF UI**
{{{multiexcerpt 'removing-jsf-ui' page='USERDOC:Collections'}}}
-->

### Favorites

{{{multiexcerpt 'definition-favorites' page='USERDOC:Favorites'}}}

The list of documents bookmarked as favorites is available:
{{{multiexcerpt 'favorites-location-web-ui' page='USERDOC:Favorites'}}}
{{{multiexcerpt 'bookmarking-favorites-web-ui' page='USERDOC:Favorites'}}}

<!--JSF Instructions
**On JSF UI**

The list of documents bookmarked as favorites is available:
{{{multiexcerpt 'favorites-location-jsf-ui' page='USERDOC:Collections'}}}
{{{multiexcerpt 'bookmarking-favorites-jsf-ui' page='USERDOC:Collections'}}}
-->

## Installation and Configuration

The collection module has no specific installation step as it is already included in the default Nuxeo Platform distribution.

## Customization

### {{> anchor 'customization-tab'}}How to Implement a New Type of Collection

If you'd like to implement a new collection (for instance to have new metadata) you can simply add the `Collection` facet to your specific document type. You'll therefore be able to use it as a regular collection.

```
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

```

### NotCollectionMember Facet

All documents can be added to a collection except:

- Documents with the facet `SystemDocument`
- Documents with the facet `NotCollectionMember`

By default, documents of type `Collection`, `WorkspaceRoot`, `TemplateRoot`, `SectionRoot`, `Domain` and `Root` have the facet `NotCollectionMember`. Please see [collection-core-types-contrib.xml](https://github.com/nuxeo/nuxeo-features/blob/master/nuxeo-platform-collections/nuxeo-platform-collections-core/src/main/resources/OSGI-INF/collection-core-types-contrib.xml) for more details.

### Plugging Business Rules to Collection Specific Events

Several [events]({{page page='events-and-listeners'}}) related to collections are available:

- `beforeAddedToCollection`
- `addedToCollection`
- `beforeRemovedFromCollection`
- `removedFromCollection`

The collection reference is available in the event context map. For example, within an event listener which starts an automation chain, you can fetch the collection as described below:

```
- Document.Fetch:
    value: "@{Event.context.getProperty(\"collectionRef\").reference()}"
```

### Synchronizing a Collection with Nuxeo Drive

To do so you need to add the following XML contribution with [either Nuxeo Studio or a custom bundle]({{page page='how-to-contribute-to-an-extension'}}):

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

{{#> callout type='warning' heading='Limitation'}}
With this configuration you won't be able to unsynchronize a collection as usual using the ![]({{file name='drive_synced.png' space='client-apps' page='nuxeo-drive'}}) icon as this icon will stay grey: ![]({{file name='drive_unsynced.png' space='client-apps' page='nuxeo-drive'}}).</br>
Yet you can always unsynchronize the collection from the Nuxeo Drive tab in the user Home.
{{/callout}}

**Notes:**

- Files or folders created in the locally synchronized collection folder will not be added to the collection server-side. For now we have no mechanism to choose their path in the hierarchy.
- Please be aware that all the limitations applied to [online editing with Nuxeo Drive]({{page space='client-apps' page='nuxeo-drive'}}#online-editing) apply to synchronized collections.

## Core Implementation

A collection holds the list of references of the documents it contains. Conversely, a document holds the list of references of the collections it belongs to.

Collection operation are offered by the [CollectionManager.java](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-platform-collections/nuxeo-platform-collections-core/src/main/java/org/nuxeo/ecm/collections/api/CollectionManager.java) service.

Because a collection can potentially contain a large number of documents and, to a lesser extent, a document can belong to many collections, some tasks are performed asynchronously.

For instance, when deleting a collection, an asynchronous work will update the documents it contains to remove the reference of the deleted collection. In the same way, when a document is removed, an asynchronous work will update the collection it belonged to in order to remove the reference of the deleted document.

Finally, when copying a collection, an asynchronous work will also duplicate its content.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation '}}

- [Collections user documentation]({{page version='' space='userdoc' page='collections-web-ui'}})
- [Nuxeo Drive documentation]({{page page='nuxeo-drive'}})
- [How to Manually Initialize or Deploy a Nuxeo Drive Instance]({{page version='' space='client-apps' page='index' page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})

{{/panel}}</div><div class="column medium-6"></div></div>
