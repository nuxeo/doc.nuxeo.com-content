---
title: Nuxeo Groups and Rights Audit
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - nuxeo-groups-rights-audit
    - tcardoso
    - excerpt-include
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Groups+and+Rights+Audit
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Groups+and+Rights+Audit'
    page_id: '14257403'
    shortlink: _4zZ
    shortlink_source: 'https://doc.nuxeo.com/x/_4zZ'
    source_link: /display/NXDOC/Nuxeo+Groups+and+Rights+Audit
tree_item_index: 1900
history:
    -
        author: Solen Guitter
        date: '2015-02-26 11:14'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-02-26 11:14'
        message: update related pages and format
        version: '4'
    -
        author: Solen Guitter
        date: '2013-10-16 17:06'
        message: Removed related topics from TOC
        version: '3'
    -
        author: Solen Guitter
        date: '2013-08-07 11:34'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-08-06 12:39'
        message: ''
        version: '1'

---
{{{excerpt 'USERDOC:Nuxeo Groups and Rights Audit'}}}

## Installation

The Nuxeo Groups and Rights Audit package requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page page='installing-a-new-package-on-your-instance'}}).

After it has been installed, administrators have a new document action option available, called "Permission Audit Export".

![]({{file name='groups-rights-audit-export-link.png' space='userdoc' page='nuxeo-groups-and-rights-audit'}} ?w=200,border=true,thumbnail=true)

## Configuration

### Setting Up e-Mail Sending

The Nuxeo Groups and Rights Audit addon sends email to the administrator who requested the audit. So your Nuxeo server must be able to reach an e-mail server. This is the same configuration that the one required for the email alerts to work. See [HOWTO: enable e-mail alerts]({{page page='set-up-email-notification'}}).

### Setting Up a Higher Timeout

The default timeout to process the export of rights is 1200 seconds (20 minutes). You can change this default timeout by adding the parameter `nuxeo.audit.acl.timeout` to the [nuxeo.conf file]({{page page='configuration-parameters-index-nuxeoconf'}}) and defining another value than 1200, like 3600 (1 hour) for instance.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Groups and Rights Audit user documentation]({{page space='userdoc' page='nuxeo-groups-and-rights-audit'}})
- [Setup Best Practices]({{page page='setup-best-practices'}})
- [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
