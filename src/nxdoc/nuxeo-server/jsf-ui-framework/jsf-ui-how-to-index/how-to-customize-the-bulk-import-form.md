---
title: How to Customize the Bulk Import Form
review:
    comment: ''
    date: '2016-12-19'
    status: ok
details:
    howto:
        excerpt: Learn how to customize the bulk import form using Nuxeo Studio.
        level: Intermediate
        tool: Studio
        topics: 'Bulk import, JSF UI'
labels:
    - lts2016-ok
    - howto
    - layout
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+Bulk+Import+Form
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+Bulk+Import+Form'
    page_id: '20517980'
    shortlink: XBQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/XBQ5AQ'
    source_link: /display/NXDOC/How+to+Customize+the+Bulk+Import+Form
tree_item_index: 1200
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:07'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2016-09-05 10:05'
        message: Update how-to topics
        version: '32'
    -
        author: Joshua Fletcher
        date: '2015-04-17 23:56'
        message: Typo.
        version: '31'
    -
        author: Solen Guitter
        date: '2015-02-20 15:19'
        message: Add note about Where and Files fields
        version: '30'
    -
        author: Manon Lumeau
        date: '2015-02-11 11:00'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2015-02-11 10:44'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2015-02-10 14:22'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-02-10 10:24'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:30'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:11'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-11-21 17:36'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-11-19 18:11'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-11-19 18:10'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-11-14 17:21'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:45'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:43'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:40'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:32'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:32'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:31'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:29'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-11-14 16:28'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-11-14 15:46'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-11-14 15:45'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-11-14 11:00'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-11-13 18:15'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-11-13 18:13'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-11-07 17:35'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-11-07 17:29'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-11-07 17:20'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-11-07 17:17'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-11-07 17:09'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2014-11-05 15:49'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

The bulk import screen has a form that allows you to edit several documents at the same time. You can customize it with Studio by creating a form layout named `bulkImport`. The "Create" layout will be used on the bulk import popup.

![]({{file name='default_bulk_import.png' space='nxdoc' page='creating-content'}} ?w=500,border=true)

Note that the Where and Files fields are obviously not customizable and will always be displayed on this form. The layout is actually below these two fields.

## Creating a Form Layout in Studio

1.  In Studio, go to **Listings & Views** > **Form Layouts** and click on **New,**
2.  Fill in the Feature ID: `bulkImport` and click on **Next,**

    {{#> callout type='info' }}

    Make sure that your form layout is named `bulkImport` to override the default one.

    {{/callout}}
3.  Go to the **Creation Layout** tab,
4.  Drag and drop the widgets you need,
5.  Click on **Save**.
    ![]({{file name='creation_layout.png'}} ?w=600,border=true)

### Deploying Changes on Your Nuxeo Platform Instance

1.  Go to your Nuxeo Platform instance.
2.  Connect as Administrator with Administrator password.
3.  Click on **Admin Center** > **Update Center** > **Nuxeo Studio**.
4.  Click on the **Update** button.
5.  Go in a workspace and import your documents.

![]({{file name='contract_bulk_import.png'}} ?w=450)

{{{multiexcerpt 'bulk-edit-form-specific-cases' page='how-to-customize-the-bulk-edit-form'}}}
    ![]({{file name='form_layout.png'}} ?w=450)

## Adding New Import Options

The bulk import popup can display more than one import layout. When more than one is contributed, you can select which one you want to use to import the uploaded documents through the "Import Options" field.

An import option is contributed through an action in the `IMPORT_DOCUMENTS` category.
The action must reference the `chainId` and the `layout` to use for this import option.
The action label is used in the "Import Options" select.

The contribution of the default bulk import is:

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService"
  point="actions">

  <action id="dndBulkImportDocuments" link=""
    order="10" label="label.smart.import"
    help="desc.smart.import.file">
    <category>IMPORT_DOCUMENTS</category>
    <properties>
      <property name="chainId">FileManager.ImportWithMetaDataInSeam</property>
      <property name="layout">bulkImport@create</property>
    </properties>
  </action>
</extension>
```

The layout displayed will be `bulkImport@create` and documents will be imported through the `FileManager.ImportWithMetaDataInSeam` chain.

To add a new one, you can just add a new action referencing your own layout (or the default one) and your own chain id (or the default one).

In this example we create an import option that changes the status of your document to "obsolete" if you type in the term "legacy" in the source metadata.

1.  In Studio, create this automation chain.

    ```xml
    - FileManager.Import:
        overwite: "true"
    - Document.Update:
        properties: {}
        save: "true"
    - Document.SetLifeCycle:
        value: "@{Document[\"dc:source\"] == \"legacy\" ? \"obsolete\" : \"approve\"}"
    - Seam.Refresh
    ```

2.  You can now create an xml extension to add an import option that calls our chain.

    ```xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
      point="actions">

      <action id="customBulkImportDocuments"
        order="20" label="My Custom Import">
        <category>IMPORT_DOCUMENTS</category>
        <properties>
          <property name="chainId">ImportChain</property>
          <property name="layout">ImportLayout@create</property>
        </properties>
      </action>
    </extension>
    ```

3.  Click on **Save**. You can now deploy the changes on your platform.
    ![]({{file name='my_custom_import.png'}} ?w=450,border=true)

## Disabling the Default Import Option

If you want to disable the default import option (after having contributed a new one, for example), you can do it with the following contribution:

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService"
  point="actions">

  <action id="dndBulkImportDocuments" enabled="false" />
</extension>
```

![]({{file name='custom_import.png'}} ?w=450,h=303,border=true)

After deploying your changes, you can only see your custom import option when you click on **Import**.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [JSF and Ajax Tips and How-To Index]({{page page='jsf-and-ajax-tips-and-how-to-index'}})
- [Layout and Widgets (Forms, Listings, Grids)]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
