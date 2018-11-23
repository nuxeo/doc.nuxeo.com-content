---
title: Uploading Custom Operations in Nuxeo Studio
review:
    comment: ''
    date: ''
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
labels:
    - studio-project
    - howto
    - nuxeo-ide
confluence:
    ajs-parent-page-id: '8684219'
    ajs-parent-page-title: Working with Studio Projects
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Uploading+Custom+Operations+in+Nuxeo+Studio
    canonical_source: >-
        https://doc.nuxeo.com/display/IDEDOC/Uploading+Custom+Operations+in+Nuxeo+Studio
    page_id: '8684232'
    shortlink: yIKE
    shortlink_source: 'https://doc.nuxeo.com/x/yIKE'
    source_link: /display/IDEDOC/Uploading+Custom+Operations+in+Nuxeo+Studio
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-09-01 16:23'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-09-01 12:01'
        message: Formatiing
        version: '8'
    -
        author: Solen Guitter
        date: '2013-11-27 15:23'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-10-04 17:19'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Solen Guitter
        date: '2011-10-04 17:19'
        message: added related pages
        version: '5'
    -
        author: Solen Guitter
        date: '2011-10-04 16:45'
        message: added screenshots
        version: '4'
    -
        author: Solen Guitter
        date: '2011-10-04 16:25'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-10-03 15:06'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-28 17:03'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

{{! excerpt}}

Nuxeo IDE enables you to code new features, that can be complementary to your Studio customizations. Typically, you can use Nuxeo IDE to develop new Automation operations, that want to leverage in the Nuxeo Studio automation chain builder. Just like you can [browse your Nuxeo Studio project]({{page page='browsing-a-studio-project-content'}}) from Nuxeo IDE, you can also use your operation in Nuxeo Studio.

{{! /excerpt}}

**To upload your operations in Nuxeo Studio:**

1.  If you haven't yet, configure a Nuxeo Connect account.
2.  From the Studio view, click on the icon ![]({{file name='NxIDE_export_operations_button.png'}} ?w=16,h=17) (Export operations).
    A window called **Select projects to scan** opens.
3.  Select the Studio project to which you want to upload the operation.
    ![]({{file name='NxIDE_operation_export_1.png'}} ?w=450,border=true)
4.  Select the Nuxeo IDE project that holds the operations to export.
5.  Click on the **Next** button.
6.  Select the operations you want to export to Nuxeo Studio and click on the **Finish** button.
    ![]({{file name='NxIDE_operation_export_2.png'}} ?w=450,border=true)
    You can now log in to Nuxeo Studio and use your operations in automation chains.
    ![]({{file name='NxIDE_operation_export_result.png'}} ?w=650,border=true)
