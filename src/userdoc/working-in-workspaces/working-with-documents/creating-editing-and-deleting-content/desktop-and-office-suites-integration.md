---
title: Desktop & Office Suites Integration
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '21299520'
    ajs-parent-page-title: 'Creating, Editing and Deleting Content'
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: viewpage.action?pageId=21299487
    canonical_source: viewpage.action?pageId=21299487
    page_id: '21299487'
    shortlink: HwFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/HwFFAQ'
    source_link: /pages/viewpage.action?pageId=21299487
history:
    - 
        author: Anonymous
        date: '2014-11-24 15:44'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-02-24 14:54'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-10-18 12:15'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-06-27 16:23'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-06-27 16:23'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-04-04 10:31'
        message: ''
        version: '2'
    - 
        author: Eric Barroca
        date: '2010-04-28 11:50'
        message: ''
        version: '1'

---
{{! excerpt}}

To ease office documents integration, Nuxeo proposes an integration between the <span style="color: rgb(34,34,34);">Web UI</span> and your desktop using Nuxeo Drive. Clicking on the "Open in editor directly (with Nuxeo Drive)" link will allow you to seamlessly edit the document as if it had always been on your desktop. See more details on the [Nuxeo Drive documentation]({{page space='nxdoc60' page='nuxeo-drive'}}), in the section "Online Editing".

{{! /excerpt}}

Previous versions offered other ways for integrating with Desktop. Those ways are now deprecated, you should think of migrating to the use of Nuxeo Drive if you are migrating your Nuxeo Platform instance to 6.0:

*   **Nuxeo Live Edit** enables you to create and edit office documents in their native application from the Nuxeo Platform. Nuxeo Live Edit is available as an extension to be installed on the user's computer. It is available from Microsoft Office and OpenOffice.org. Nuxeo Drive replaces Nuxeo Live Edit so as to simplify the installation and the dependencies with the environment that were encountered with Live Edit: version of the OS, version of the Office Suite, version of the browser...
*   **Nuxeo WSS and WebDAV** enable you to work on Nuxeo's documents from your desktop directly. They don't require the installation of any extension. You may encounter several problems depending on the version of Windows you are using.

&nbsp;