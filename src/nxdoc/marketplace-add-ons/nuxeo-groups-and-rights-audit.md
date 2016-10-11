---
title: Nuxeo Groups and Rights Audit
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-groups-rights-audit
toc: true
confluence:
    ajs-parent-page-id: '22380668'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Nuxeo+Groups+and+Rights+Audit
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Nuxeo+Groups+and+Rights+Audit'
    page_id: '21921889'
    shortlink: YYBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/YYBOAQ'
    source_link: /display/NXDOC60/Nuxeo+Groups+and+Rights+Audit
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:41'
        message: ''
        version: '5'
    - 
        author: Manon Lumeau
        date: '2016-03-09 16:23'
        message: ''
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
{{{excerpt 'USERDOC60:Nuxeo Groups and Rights Audit'}}}

## Installation

The Nuxeo Groups and Rights Audit package requires no specific installation steps. It can be installed like any other package [from the Marketplace or from the Admin Center]({{page space='admindoc60' page='installing-a-new-package-on-your-instance'}}).

After it has been installed, administrators have a new export option available, called "Permission audit export".

![]({{file name='groups-rights-audit-export-link.png' space='userdoc60' page='nuxeo-groups-and-rights-audit'}} ?w=200,border=true,thumbnail=true)

## Configuration

### Setting Up e-Mail Sending

The Nuxeo Groups and Rights Audit addon sends email to the administrator who requested the audit. So your Nuxeo server must be able to reach an e-mail server. This is the same configuration that the one required for the email alerts to work. See [how to enable e-mail alerts]({{page space='admindoc60' page='recommended-configurations#setup-mail'}}).

### Setting Up a Higher Timeout

The default timeout to process the export of rights is 1200 seconds (20 minutes). You can change this default timeout by adding the parameter `nuxeo.audit.acl.timeout` to the [nuxeo.conf file]({{page space='admindoc60' page='configuration-parameters-index-nuxeoconf'}}) and defining another value than 1200, like 3600 (1 hour) for instance.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Nuxeo Groups and Rights Audit user doc]({{page space='userdoc60' page='nuxeo-groups-and-rights-audit'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>