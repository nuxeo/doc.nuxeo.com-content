---
title: Settings Eclipse Development Templates
review:
    comment: ''
    date: ''
    status: ok
labels:
    - link-update
    - howto
    - nuxeo-ide
confluence:
    ajs-parent-page-id: '8684219'
    ajs-parent-page-title: Working with Studio Projects
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Settings+Eclipse+Development+Templates
    canonical_source: >-
        https://doc.nuxeo.com/display/IDEDOC/Settings+Eclipse+Development+Templates
    page_id: '17794183'
    shortlink: h4QPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/h4QPAQ'
    source_link: /display/IDEDOC/Settings+Eclipse+Development+Templates
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2014-09-01 12:06'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2013-12-03 15:38'
        message: 'Formatted steps, updated link, fixed typos'
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2013-11-28 15:40'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

In general of if you want to contribute to the Nuxeo Platform as a contributor, Nuxeo IDE provides the ability to set up all code templates inside your Eclipse.

1.  Go to the Eclipse Preferences.
2.  Select **Nuxeo** > **Contributors** option and click on **Settings Nuxeo Contributors settings**.
    ![]({{file name='Preferences _011.png'}} ?w=500,h=449,border=true)

    The Following files are installed to override your current Eclipse configuration:

    *   `nuxeo_cleanups.xml`
    *   `nuxeo_codetemplates.xml`
    *   `nuxeo_formatter.xml`
    *   `nuxeo.importorder`

    These files are also provided in the [Nuxeo GitHub repository](https://github.com/nuxeo/nuxeo/tree/release-5.8/tools).
