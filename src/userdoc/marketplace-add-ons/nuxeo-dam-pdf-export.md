---
title: Nuxeo DAM PDF Export
labels:
    - dam-pdf-export
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Nuxeo+DAM+PDF+Export
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Nuxeo+DAM+PDF+Export'
    page_id: '21299438'
    shortlink: 7gBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7gBFAQ'
    source_link: /display/USERDOC60/Nuxeo+DAM+PDF+Export
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:28'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-06-30 14:22'
        message: Add note about deprecation
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-08-28 18:05'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-08-05 15:26'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='NXDOC60:Generic Multi-Excerpts'}}}

{{! excerpt}}

The Nuxeo DAM PDF Export package enables users to export a selection of pictures in a PDF document.

{{! /excerpt}}

Only pictures are exported: if you select different types of assets, only the pictures will be in the PDF document.

What is exported:

*   The OriginalJPEG format of the picture,
*   The title of the document (not the file name),
*   Who did the export.

**To export a set of pictures:**

1.  In the DAM main tab, select the assets you want to export using the checkboxes.
    ![]({{file name='dam-pdf-export-selection.png'}} ?w=650,h=297,border=true)
    The **Export to PDF** button at the bottom of the documents list is available as soon as a picture is selected.
2.  Click on the **Export to PDF** button.
    The PDF is generated. Depending on your OS, you can open it directly or save it.
    ![]({{file name='dam-pdf-export.png'}} ?w=650,border=true)

&nbsp;