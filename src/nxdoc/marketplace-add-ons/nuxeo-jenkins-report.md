---
title: Nuxeo Jenkins Report
labels:
    - nuxeo-jenkins-report
    - content-review-lts2015
toc: true
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+Jenkins+Report
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Nuxeo+Jenkins+Report'
    page_id: '27604641'
    shortlink: oTalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/oTalAQ'
    source_link: /display/NXDOC710/Nuxeo+Jenkins+Report
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 14:44'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2016-08-30 14:40'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-08-31 15:10'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-10-16 17:29'
        message: Removed related topics from TOC
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-08-06 17:44'
        message: ''
        version: '1'

---
{{{excerpt 'USERDOC710:Nuxeo Jenkins Report'}}}

## Installation

The Nuxeo Jenkins Report addons package requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page space='admindoc710' page='installing-a-new-package-on-your-instance'}}).

After you installed the package, a new document type is available for creation in workspaces and reports: the Jenkins Reports Container.

![]({{file name='jenkins-report-available-docs.png' space='userdoc710' page='nuxeo-jenkins-report'}} ?w=500,h=201,border=true)

## Configuration

Since this addon enables users to send the report from the Nuxeo Platform, your Nuxeo server must be able to reach an e-mail server. This is the same configuration that the one required for the email alerts to work. See [how to enable e-mail alerts]({{page space='admindoc710' page='recommended-configurations#setup-mail'}}).

&nbsp;

&nbsp;