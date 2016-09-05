---
title: Customizing DAM Compat Bulk Import
labels:
    - bulk-import
    - dam
    - 5-9-5
confluence:
    ajs-parent-page-id: '22380763'
    ajs-parent-page-title: Nuxeo DAM Compat
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Customizing+DAM+Compat+Bulk+Import
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Customizing+DAM+Compat+Bulk+Import'
    page_id: '22380707'
    shortlink: o4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/o4BVAQ'
    source_link: /display/NXDOC60/Customizing+DAM+Compat+Bulk+Import
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:54'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-11-21 17:12'
        message: ''
        version: '11'
    - 
        author: Thomas Roger
        date: '2014-10-31 17:42'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-07-29 10:36'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-07-29 10:34'
        message: ''
        version: '8'
    - 
        author: Harlan Brown
        date: '2014-06-30 16:53'
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
You can contribute your own actions to use in the Bulk Import. Actions that you contribute appear in a drop-down list labeled&nbsp;**Import Actions**.

To add an import action, you have to contribute an action in the category `DAM_IMPORT_ASSETS`. Actions in this category must define two properties: an automation chain and&nbsp;a form layout.

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

When an action is selected, the layout defined in the properties is shown, along with an "Import" button.

The bean attached to the "Import" button creates a Map Object ( [`DataModelProperties`](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-automation/nuxeo-automation-core/src/main/java/org/nuxeo/ecm/automation/core/util/DataModelProperties.java) instance). It pushes the metadata from the form in the Map Object (without schema validation) and starts the automation chain id defined in the action. The chain takes the blob list as input, puts the Map Object in the context and names it&nbsp;`docMetaData`.

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

[`DataModelProperties`](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-automation/nuxeo-automation-core/src/main/java/org/nuxeo/ecm/automation/core/util/DataModelProperties.java) is a map object that stores each value set in the form layout with the field name as key and without validation of the [schema manager](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewService/org.nuxeo.ecm.core.schema.SchemaManager) (as we can have in `DocumentModel`). If you bind a widget to a field `foo:bar` that doesn't exist, the `DataModelProperties` object will store it without generating an exception and you can fetch this field as usual (`dataModelProperties.get("foo:bar")`).

{{/callout}}

**Starting with 5.9.5**

It's possible to specify a custom Document Type to use in your import action. This is useful if your application uses custom Document Types and you need to import many rich assets (Pictures, PDFs, Videos, etc.) to store in Nuxeo using a document type you defined.

The definition for the action is the same as outlined above.

The automation chain will be similar - you would add a parameter to the `Dam.Import` operation which specifies the **docType**.

{{#> panel type='code' heading='Example'}}

```
<extension target="org.nuxeo.ecm.core.operation.OperationServiceComponent"
  point="chains">
  <chain id="Dam.ImportFile">
    <operation id="Dam.Import">
      <param type="String" name="docType">File</param>
      <param type="boolean" name="overwrite">true</param>
      <param type="boolean" name="importInCurrentDocument">true</param>
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
</extension>
```

{{/panel}}