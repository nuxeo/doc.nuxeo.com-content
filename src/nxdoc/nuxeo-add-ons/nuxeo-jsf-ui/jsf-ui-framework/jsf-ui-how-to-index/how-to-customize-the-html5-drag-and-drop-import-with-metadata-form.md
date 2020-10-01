---
title: 'HOWTO: Customize the HTML5 Drag and Drop Import with Metadata Form'
review:
    comment: ''
    date: '2020-09-30'
    status: ok
details:
    howto:
        excerpt: 'Learn how to customize the&nbsp;drag and drop HTML5 import with metadata form.'
        level: Beginner
        tool: Studio
        topics: 'Drag and Drop, Layout'
labels:
    - lts2016-ok
    - howto
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+HTML5+Drag+and+Drop+Import+with+Metadata+Form
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+HTML5+Drag+and+Drop+Import+with+Metadata+Form'
    page_id: '23366364'
    shortlink: 3IpkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3IpkAQ'
    source_link: /display/NXDOC/How+to+Customize+the+HTML5+Drag+and+Drop+Import+with+Metadata+Form
tree_item_index: 1400
history:
    -
        author: Manon Lumeau
        date: '2016-03-21 09:55'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-12-08 11:11'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-12-08 11:07'
        message: link update
        version: '7'
    -
        author: Solen Guitter
        date: '2015-12-07 15:08'
        message: Update link
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-11-27 15:28'
        message: ''
        version: '5'
    -
        author: Thierry Martins
        date: '2015-11-12 08:49'
        message: update action according to NXP-18128
        version: '4'
    -
        author: Solen Guitter
        date: '2015-02-20 16:52'
        message: link update
        version: '3'
    -
        author: Solen Guitter
        date: '2015-02-20 16:44'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-02-20 16:43'
        message: ''
        version: '1'

---
{{#> callout type='info' }}
{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}
{{/callout}}

HTML5 Drag and Drop enables users to [import documents in a folder]({{page space='userdoc' page='creating-content#content-creation-dandd'}}) and fill in their metadata at the same time.

![]({{file name='smartDnD_metadata.png' space='userdoc' page='creating-content'}} ?w=650,h=289,border=true)

Follow the steps to below to customize the import form.

1.  In Nuxeo Studio, [create a new XML Extension]({{page page='how-to-contribute-to-an-extension'}}) with the following content:

    ```xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
      point="actions">
     <action id="Chain.FileManager.ImportWithMetaDataInSeam"
          link="/nuxeo/dndFormCollector.faces?schemas=yourschemas&#038;layouts=dndEdit%40create"
          order="30" label="label.smart.import.with.md"
          help="desc.smart.import.with.md">
          <category>ContentView</category>
          <filter-id>create</filter-id>
     </action>
    </extension>

    ```

2.  In the& `link=` element, change `yourschemas` for your schema prefixes.

    {{#> callout type='info' }}

    Make sure to mention all the prefixes of the schemas concerned by the fields of the `dndEdit` form.

    {{/callout}}
3.  Go to **Listings & Views** > **Form Layouts** and click on **New**.
4.  Name your layout `dndEdit`.
5.  Drag and drop the widgets you need in the **Creation Layout** tab.
6.  Click on **Save**.
    ![]({{file name='dndEdit_layout.png'}} ?w=600,border=true)
7.  [Deploy your changes]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) and drag and drop documents to display the smart import with metadata form.
    ![]({{file name='dndEdit_result.png'}} ?w=600,border=true)

**Notes about the Drag and Drop form**

It is currently not possible to use tags, collections or complex types on this form.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [HOWTO: Customize the Bulk Import Form]({{page page='how-to-customize-the-bulk-import-form'}})
- [HOWTO: Customize the Bulk Edit Form]({{page page='how-to-customize-the-bulk-edit-form'}})
- [JSF UI How-To Index]({{page page='jsf-ui-how-to-index'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Drag and Drop Service for Content Capture (HTML5-Based)]({{page page='drag-and-drop-service-for-content-capture-html5-based'}})
- [Creating Content]({{page space='userdoc' page='creating-content'}})

{{/panel}}</div></div>
