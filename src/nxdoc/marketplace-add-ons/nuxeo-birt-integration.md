---
title: Nuxeo - BIRT Integration
labels:
    - birt
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+-+BIRT+Integration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+-+BIRT+Integration'
    page_id: '21921882'
    shortlink: WoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/WoBOAQ'
    source_link: /display/NXDOC60/Nuxeo+-+BIRT+Integration
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:21'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-11-09 16:28'
        message: ''
        version: '7'
    - 
        author: Michaël Vachette
        date: '2014-07-28 14:24'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-10-16 17:03'
        message: Removed related topics from TOC
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-08-07 15:51'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-08-07 15:50'
        message: Added related pages
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-08-07 15:50'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-08-07 15:48'
        message: ''
        version: '1'

---
{{{excerpt 'USERDOC60:Nuxeo - BIRT Integration'}}}

## Installation

The&nbsp;Nuxeo - BIRT Integration addon requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page space='admindoc60' page='installing-a-new-package-on-your-instance'}}). Note however that it requires the Document Management module.

After you installed the Nuxeo - BIRT Integration package, here are the changes you get in the Nuxeo Platform:

*   the Admin Center has a new vertical tab, called **Reporting**;
    ![]({{file name='birt-reporting-admin-center-tab.png'}} ?w=650,border=true)
*   A new document type is available in workspaces and sections, called **BIRT Report**.
    ![]({{file name='birt-report-doc-type.png'}} ?w=500,h=167,border=true)

## Configuration

The Nuxeo - BIRT Integration addon requires that your Nuxeo application runs with PostgreSQL. See the [Connecting Nuxeo to the Database]({{page space='admindoc60' page='connecting-nuxeo-to-the-database'}}) page.

&nbsp;

&nbsp;