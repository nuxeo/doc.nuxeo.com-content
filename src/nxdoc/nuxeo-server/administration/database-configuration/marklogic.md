---
title: MarkLogic
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '3342340'
    ajs-parent-page-title: Database Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: MarkLogic
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/MarkLogic'
    page_id: '31687905'
    shortlink: 4YTjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4YTjAQ'
    source_link: /display/NXDOC/MarkLogic
history:
    - 
        author: Solen Guitter
        date: '2016-08-05 09:24'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2016-08-05 09:10'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2016-08-05 09:03'
        message: ''
        version: '5'
    - 
        author: Kevin Leturc
        date: '2016-08-04 12:08'
        message: ''
        version: '4'
    - 
        author: Kevin Leturc
        date: '2016-08-04 10:09'
        message: ''
        version: '3'
    - 
        author: Kevin Leturc
        date: '2016-08-04 08:54'
        message: ''
        version: '2'
    - 
        author: Kevin Leturc
        date: '2016-08-04 08:45'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DBS-definition' page='GLOS:DBS'}}}

The Nuxeo Platform supports the following MarkLogic versions:

{{{multiexcerpt 'MarkLogic-supported' page='Compatibility Matrix'}}}

## Installation

### Nuxeo Package Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

### HTTP Server Installation

By default Nuxeo stores its information in the database `nuxeo`.

You need to create a new HTTP App Server linked to the `nuxeo`&nbsp;database, as described [in the MarkLogic documentation](https://docs.marklogic.com/guide/admin/http). Main installation information is:

*   Set&nbsp;`/` &nbsp;value in root input.
*   Choose a server name and a port (for example 8010).
*   Select the `nuxeo` database in the database input.

*   Although you can use the admin user you created during MarkLogic server installation, it's better to create a new user to use with Nuxeo, as described [here](https://docs.marklogic.com/guide/admin/security).

## Configuration

Once you installed the Nuxeo MarkLogic addon , set up the access to the MarkLogic server in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}). The following properties are available:

*   `nuxeo.marklogic.host`: The MarkLogic server, defaults to&nbsp;`localhost`
*   `nuxeo.marklogic.port`: The MarkLogic HTTP App Server port, defaults to&nbsp;`8000`
*   `nuxeo.marklogic.user`: The MarkLogic user to login to App Server, defaults to&nbsp;`nuxeo`
*   `nuxeo.marklogic.password`: The user password, defaults to `password`

The package installation added the&nbsp;`marklogic`&nbsp;template to your existing list of templates (`nuxeo.templates`) in&nbsp;`nuxeo.conf`.

You&nbsp;**must keep**&nbsp;the template corresponding to your SQL database in&nbsp;`nuxeo.templates`, because the SQL database may still be used for other things (directories, audit, etc.). For instance you could have:

```
nuxeo.templates=postgresql,marklogic
```

or

```
nuxeo.templates=default,marklogic
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

*   [DBS]({{page page='dbs'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>