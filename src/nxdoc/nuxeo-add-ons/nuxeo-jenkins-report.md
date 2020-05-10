---
title: Nuxeo Jenkins Report
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - nuxeo-jenkins-report
    - atchertchian
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Jenkins+Report
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Jenkins+Report'
    page_id: '14257462'
    shortlink: No3Z
    shortlink_source: 'https://doc.nuxeo.com/x/No3Z'
    source_link: /display/NXDOC/Nuxeo+Jenkins+Report
tree_item_index: 2000
history:
    -
        author: Solen Guitter
        date: '2016-08-30 14:42'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2016-08-30 14:38'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2016-08-30 14:38'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2016-06-09 15:56'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2016-05-04 14:36'
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
{{{excerpt 'USERDOC:Nuxeo Jenkins Report'}}}

## Installation

The Nuxeo Jenkins Report addons package requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page page='installing-a-new-package-on-your-instance'}}).

After you installed the package, a new document type is available for creation in workspaces and reports: the Jenkins Reports Container.

![]({{file name='jenkins-report-available-docs.png' space='userdoc' page='nuxeo-jenkins-report'}} ?w=500,h=201,border=true)

## Configuration

Since this addon enables users to send the report from the Nuxeo Platform, your Nuxeo server must be able to reach an e-mail server. This is the same configuration that the one required for the email alerts to work. See [HOWTO: enable e-mail alerts]({{page page='set-up-email-notification'}}).

&nbsp;

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Jenkins duty]({{page space='corg' page='jenkins-duty'}})
- [Nuxeo Jenkins Report user documentation]({{page space='userdoc' page='nuxeo-jenkins-report'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
