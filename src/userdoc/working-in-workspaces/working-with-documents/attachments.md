---
title: Attachments
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20150223
    - attachment
confluence:
    ajs-parent-page-id: '21299491'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Attachments
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Attachments'
    page_id: '23366454'
    shortlink: NotkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/NotkAQ'
    source_link: /display/USERDOC60/Attachments
tree_item_index: 1200
history:
    -
        author: Solen Guitter
        date: '2015-02-23 13:19'
        message: ''
        version: '1'

---
It is possible to add attachments to&nbsp;[Files]({{page page='files'}}) and [Notes]({{page page='notes'}}) using the **Files** tab. This tab is available to users with at least Write right. There is no limit to the number of attachments.

**To add attachments to your document:**

1.  Click on the **Files** tab.
2.  Click on the **Add** button.
3.  Select one or several files to attach to the document.
    ![]({{file name='attachments_files_tab.png'}} ?w=400,border=true)
4.  Click on **Store uploaded files**.
    The files are attached to the document. The **Store uploaded files** button is not displayed anymore.
    The content of attachments is indexed and you can preview them from the **Summary** tab of the document.
    ![]({{file name='attachments_summary_tab.png'}} ?w=500,border=true)

**To remove attachments:**

1.  Click on the **Files** tab.
2.  Click on the icon ![]({{file name='delete.png' page='icons-index'}}) of the attachment to remove.
    The attachment is immediately deleted.

**Notes:**

*   Attached files are not synchronized with [Nuxeo Drive]({{page page='nuxeo-drive'}}).
*   There is no versioning option from the **Files** tab by default. This means that you need to edit the document and increment its version manually after you updated attachments to make sure they are saved in a new version of the document.

**How to enable the Files tab on custom document types?**

To enable the Files tab on your own document types, make sure it holds the schema&nbsp;`files`.
