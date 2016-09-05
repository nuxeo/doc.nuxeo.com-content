---
title: Customizing the new Bulk Import UI
labels:
    - dam
    - bulk-import
    - 5-7-1
confluence:
    ajs-parent-page-id: '17334423'
    ajs-parent-page-title: Customizing Nuxeo DAM
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Customizing+the+new+Bulk+Import+UI
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Customizing+the+new+Bulk+Import+UI'
    page_id: '17334443'
    shortlink: q4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/q4AIAQ'
    source_link: /display/NXDOC58/Customizing+the+new+Bulk+Import+UI
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:21'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-07-11 15:57'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-07-11 15:53'
        message: Added screenshot and reorganized steps
        version: '5'
    - 
        author: Alain Escaffre
        date: '2013-07-11 00:04'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-07-11 00:04'
        message: ''
        version: '3'
    - 
        author: Benjamin Jalon
        date: '2013-07-09 19:03'
        message: ''
        version: '2'
    - 
        author: Benjamin Jalon
        date: '2013-07-09 18:29'
        message: ''
        version: '1'

---
The DAM bulk import UI was rewritten in Nuxeo Platform 5.7.1\. It is inspired from the bulk import UI that was added in the Document Management module in 5.5, but with some more finishing work, and more configuration possibilities. The bulk import UI in DM will be aligned to this new interface in one of the next Fast Track versions too.

![]({{file name='dam-bulk-import-popup.png' space='userdoc58' page='importing-assets-in-dam'}} ?w=650,border=true)

Here is how the new bulk import works:

The import popup lists all the import actions that have been contributed in a drop down list. In 5.7.1, this drop down list is only displayed if there are at least two import actions.
To add an element in the list, you have to contribute an action in the category `DAM_IMPORT_ASSETS`. Actions in this category must define as properties a form layout and an automation chain.

{{#> panel type='code' heading='Action contribution'}}

```html/xml
<action id="dndDamBulkImportAssets" link=""
      order="10" label="label.smart.import"
      help="desc.smart.import.file">
      <category>DAM_IMPORT_ASSETS</category>
      <properties>
        <property name="chainId">Dam.ImportWithMetaDataInSeam</property>
        <property name="layout">damBulkImport@create</property>
      </properties>
    </action>
```

{{/panel}}

The selected action displays the form expressed in the contribution and an "Import" button.

The bean attached to the "Import" button creates a Map Object ([`DataModelProperties`](https://github.com/nuxeo/nuxeo-features/blob/release-5.8/nuxeo-automation/nuxeo-automation-core/src/main/java/org/nuxeo/ecm/automation/core/util/DataModelProperties.java) instance). It pushes the metadata from the form in the Map Object (without schema validation) and starts the automation chain id expressed into the action. The chain takes the blob list as input and puts the Map Object in the context and names it "`docMetaData`".

{{#> panel type='code' heading='Operation chain contribution'}}

```html/xml
    <chain id="Dam.ImportWithMetaDataInSeam">
      <operation id="Dam.Import">
        <param type="boolean" name="overwrite">true</param>
      </operation>
      <operation id="Document.Update">
        <param type="properties" name="properties">expr:Context.get("docMetaData")
        </param>
      </operation>
      <operation id="Seam.AddMessage">
        <param type="string" name="severity">INFO</param>
        <param type="string" name="message">label.dam.assets.imported</param>
      </operation>
      <operation id="Seam.Refresh" />
    </chain>
```

{{/panel}} {{#> callout type='note' }}

[`DataModelProperties`](https://github.com/nuxeo/nuxeo-features/blob/release-5.8/nuxeo-automation/nuxeo-automation-core/src/main/java/org/nuxeo/ecm/automation/core/util/DataModelProperties.java) is a map object that stores each value set in the form layout with the field name as key and without validation of the [schema manager](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo Platform-5.8/viewService/org.nuxeo.ecm.core.schema.SchemaManager) (as we can have in `DocumentModel`). If you bind a widget to a field `foo:bar` that doesn't exist, the `DataModelProperties` object will store it without generating an exception and you can fetch this field as usual (`dataModelProperties.get("foo:bar")`).

{{/callout}}