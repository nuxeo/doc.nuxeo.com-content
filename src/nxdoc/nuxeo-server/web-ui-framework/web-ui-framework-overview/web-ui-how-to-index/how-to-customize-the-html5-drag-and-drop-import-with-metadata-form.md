---
title: How to Customize the HTML5 Drag and Drop Import with Metadata Form
details:
    howto:
        excerpt: >-
            Learn how to customize the&nbsp;drag and drop HTML5 import with
            metadata form.
        level: Beginner
        tool: Studio
        topics: 'Drag and Drop, Layout'
labels:
    - howto
    - lts2015-ok
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: Web UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+HTML5+Drag+and+Drop+Import+with+Metadata+Form
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+HTML5+Drag+and+Drop+Import+with+Metadata+Form
    page_id: '23366364'
    shortlink: 3IpkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3IpkAQ'
    source_link: >-
        /display/NXDOC/How+to+Customize+the+HTML5+Drag+and+Drop+Import+with+Metadata+Form
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
HTML5 drag and drop enables users to [import documents in a folder]({{page space='userdoc' page='creating-content'}}) and fill their metadata at the same time.

![]({{file name='smartDnD_metadata.png' space='userdoc' page='creating-content'}} ?w=650,h=289,border=true)

Follow the steps to below to customize the import form.

1.  In Nuxeo Studio, [create a new XML Extension]({{page page='how-to-contribute-to-an-extension'}}) with the following content:

    ```

          ContentView
          create

    ```

2.  In the&nbsp;`link=` element, change&nbsp;`yourschemas` for your schema prefixes.

    {{#> callout type='info' }}

    Make sure to mention all the prefixes of the schemas concerned by the fields of the `dndEdit` form.

    {{/callout}}
3.  Go to **Listings & Views** > **Form Layouts** and click on **New**.
4.  Name your layout&nbsp;`dndEdit`.
5.  Drag and drop the widgets you need in the **Creation Layout** tab.
6.  Click on **Save**.
    ![]({{file name='dndEdit_layout.png'}} ?w=600,border=true)
7.  <span class="confluence-link">[Deploy your changes]({{page space='studio' page='deploying-your-project-in-dev-mode'}})</span> and drag and drop documents to display the smart import with metadata form..
    ![]({{file name='dndEdit_result.png'}} ?w=600,border=true)

**Notes about Drag and drop form**

It is currently not possible to use tags, collections and complex types on this form.

* * *

&nbsp;

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related How-Tos"}}

*   [How to Customize the Bulk Import Form]({{page page='how-to-customize-the-bulk-import-form'}})
*   [How to Customize the Bulk Edit Form]({{page page='how-to-customize-the-bulk-edit-form'}})
*   [Web UI How-To Index]({{page page='web-ui-how-to-index'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="Related Documentation"}}

*   [Drag and Drop Service for Content Capture (HTML5-Based)]({{page page='drag-and-drop-service-for-content-capture-html5-based'}})
*   [Creating Content]({{page space='userdoc' page='creating-content'}})

{{/panel}}</div>

</div>