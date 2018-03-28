---
title: How to Customize the Drive Metadata Edit Layouts
review:
    comment: ''
    date: '2017-12-15'
    status: ok
details:
    howto:
        excerpt: Learn how to use a customized layout on the Metadata edit of Nuxeo Drive.
        level: Intermediate
        tool: Studio
        topics: 'Layout, Nuxeo Drive'
labels:
    - lts2016-ok
    - howto
    - nuxeo-drive
    - yachour
    - layout
    - lts2017-ok
confluence:
    ajs-parent-page-id: '14257229'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+Drive+Metadata+Edit+Layouts
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+Drive+Metadata+Edit+Layouts'
    page_id: '26317380'
    shortlink: RJKRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/RJKRAQ'
    source_link: /display/NXDOC/How+to+Customize+the+Drive+Metadata+Edit+Layouts
tree_item_index: 700
history:
    -
        author: Manon Lumeau
        date: '2016-03-21 15:31'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-03-21 10:16'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-10-13 12:06'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-10-08 09:26'
        message: Add screenshot of how-to result
        version: '5'
    -
        author: Solen Guitter
        date: '2015-10-08 09:16'
        message: Add link
        version: '4'
    -
        author: Solen Guitter
        date: '2015-10-08 08:59'
        message: fix typo
        version: '3'
    -
        author: Solen Guitter
        date: '2015-10-08 08:50'
        message: Add related pages
        version: '2'
    -
        author: Solen Guitter
        date: '2015-10-08 08:43'
        message: ''
        version: '1'

---
You have created your own document types and defined forms and view that show properties specific to your business and users. Your users leverage Nuxeo Drive to work on Nuxeo documents from their desktop and you want them to be able to enjoy the [metadata edit feature of Nuxeo Drive]({{page space='userdoc' page='nuxeo-drive#metadata-edit'}}).

![]({{file name='Drive_metadata_edit.png' page='nuxeo-drive'}} ?w=400, border=true)

{{#> callout type='info' }}
{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}
{{/callout}}

Obviously you want them to be displayed the same properties as in the Nuxeo Platform web UI.

To do so:

1.  In Nuxeo Studio, [create a new Form layout]({{page space='studio' page='form-layouts'}}) called `myDriveLayout` for instance.
2.  Fill in the View Layout and Edit Layout with relevant widgets.
    You will probably end up with similar information as on your custom document type layouts.
3.  [Create a new XML Extension]({{page page='how-to-contribute-to-an-extension#xml-extension-studio'}}) called `DriveMetadataEdit` for instance.
4.  Use the following content and adapt it to your needs:

    ```xml
    <extension target="org.nuxeo.ecm.platform.types.TypeService"
      point="types">
      <type id="mydocumenttype">
        <layouts mode="drive">
          <layout>#{layoutMode == 'edit'? 'myDriveLayout@edit' : 'myDriveLayout@view'}</layout>
        </layouts>
      </type>
    </extension>
    ```

    *   Replace `<type id="mydocumenttype">` with your document type id.
5.  If you want to enable a custom metadata edit view for additional document types:
    1.  Repeat steps 1 and 2 to create additional layouts.
    2.  Edit the `DriveMetadataEdit` extension and add new `<type> ... </type>` sections filled in with the appropriate document types ids and layouts names.
6.  Save and [deploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}).
    ![]({{file name='drive_metadata_edit_custom_layout.png'}} ?w=400,border=true)

**Notes**

*   **Why not use the default View and Edit layouts of your custom document types?**
    There are chances that the View and Edit layouts defined for your document types use the `file:content` widget, that enables to view and upload a file to the document. It wouldn't make much sense to display this field to users from the file itself. That's why you need to create a new layout for this Metadata edit view.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Customize Nuxeo Drive Versioning Policy]({{page page='how-to-customize-nuxeo-drive-versioning-policy'}})
- [How to Manually Initialize or Deploy a Nuxeo Drive Instance]({{page page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Nuxeo Drive Documentation'}}

- [Nuxeo Drive developer documentation]({{page page='nuxeo-drive'}})

{{/panel}}</div></div>
