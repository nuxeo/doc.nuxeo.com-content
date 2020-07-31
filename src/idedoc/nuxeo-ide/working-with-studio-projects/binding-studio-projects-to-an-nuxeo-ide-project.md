---
title: Binding Studio Projects to an Nuxeo IDE Project
review:
    comment: ''
    date: ''
    status: ok
labels:
    - studio-project
    - howto
toc: true
confluence:
    ajs-parent-page-id: '8684219'
    ajs-parent-page-title: Working with Studio Projects
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Binding+Studio+Projects+to+an+Nuxeo+IDE+Project
    canonical_source: >-
        https://doc.nuxeo.com/display/IDEDOC/Binding+Studio+Projects+to+an+Nuxeo+IDE+Project
    page_id: '8684228'
    shortlink: xIKE
    shortlink_source: 'https://doc.nuxeo.com/x/xIKE'
    source_link: /display/IDEDOC/Binding+Studio+Projects+to+an+Nuxeo+IDE+Project
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-09-01 16:21'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-09-01 11:59'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-11-27 15:24'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2012-07-06 16:06'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2012-07-06 16:06'
        message: Fixed typo
        version: '16'
    -
        author: Solen Guitter
        date: '2011-10-06 15:19'
        message: added screenshot
        version: '15'
    -
        author: Solen Guitter
        date: '2011-10-06 14:10'
        message: added screenshot
        version: '14'
    -
        author: Solen Guitter
        date: '2011-10-06 12:18'
        message: ''
        version: '13'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:48'
        message: ''
        version: '12'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:47'
        message: ''
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:47'
        message: ''
        version: '10'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:46'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:45'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:37'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-10-04 18:03'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-10-04 18:02'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-10-04 17:19'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-10-04 17:08'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-10-04 15:51'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-28 17:02'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

{{! excerpt}}

The whole purpose of enabling to work with Nuxeo Studio is to be able to use elements configured in Studio from Nuxeo IDE, and to benefit from Eclipse key features such as code completion. As you may have several projects (both in Nuxeo Studio and in Nuxeo IDE), you need to indicate which Studio project the Nuxeo IDE project should be bound to.

{{! /excerpt}}

## Binding Nuxeo IDE and Studio Projects

**To bind a Studio project and a Nuxeo IDE project:**

1.  In the Project explorer view, right-click on the project name and click on **Properties**.
2.  Click on **Nuxeo** > **Nuxeo Studio**.
3.  Check the project you want to use.
    ![]({{file name='NxIDE_studio_binding.png'}} ?w=450,border=true)
4.  Click on the **Apply** or **OK** button.

A new **Studio Projects** item is available in the project tree. This item contains an item for each of the Studio project you bound to your project. This way, you can browse the content of each individual Studio project dependency by opening it in the editor area (i.e. double-click on the Studio project item). Double-clicking on the Studio items will redirect you to Nuxeo Studio in your browser.

![]({{file name='NxIDE_studio_in_project_view.png'}} ?w=650,border=true)

Also, you can export to one of the studio projects you bound the operations that are present in your current project: right-click on the Studio project and then click on **Export Operations**.
To export operations from multiple projects use the global export operation feature as explained in [Uploading Custom Operations in Nuxeo Studio]({{page page='uploading-custom-operations-in-nuxeo-studio'}}).

## XPath Autocompletion

The code autocompletion now takes your content model configuration into account.
So, anywhere you want to use a document property XPath in your code you can use the Eclipse autocompletion feature to cycle through possible completion - one of them being provided by the Studio projects you bound to the project.

![]({{file name='NxIDE_code_autocompletion.png'}} ?w=650,border=true)

## Document Adapters

You can also create Document adapters for your Studio document types.

![]({{file name='NxIDE_document_adapter_wizard.png'}} ?w=450,border=true)
