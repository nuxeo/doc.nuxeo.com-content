---
title: Adding Custom Templates
labels:
    - templates
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Adding+Custom+Templates
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Adding+Custom+Templates'
    page_id: '21921862'
    shortlink: RoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/RoBOAQ'
    source_link: /display/ADMINDOC60/Adding+Custom+Templates
history:
    - 
        author: Solen Guitter
        date: '2014-11-28 11:18'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-11-28 11:18'
        message: update related pages
        version: '7'
    - 
        author: Julien Carsique
        date: '2014-09-05 17:15'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:09'
        message: Added related topics
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:08'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-03-11 18:20'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-03-11 18:20'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-03-11 17:11'
        message: ''
        version: '1'

---
The "custom" template folder allows you to add customization such as using multiple databases, configuring services, etc.

1.  Add your own template files in `templates/custom` directory.
    You can use either existing or new parameters in these new template files.
2.  From the Admin tab or by manually [editing the `nuxeo.conf` file]({{page page='configuration-parameters-index-nuxeoconf'}}), set your parameters' values and set `nuxeo.templates=custom`.
    You can refer to custom templates directory with a relative path or to your own custom templates directory with an absolute path.
3.  Edit `custom/nuxeo.defaults` and set `nuxeo.template.includes` parameter to define the list of existing templates to include (comma separated values); your custom template will be used at last.
    `nuxeo.defaults` files from included templates are also read.

In case you need multiple customizations, create multiple directories and reference them in a dedicated `nuxeo.conf` for each server.

{{#> callout type='info' }}

The following properties cannot be configured from a configuration template (in&nbsp;`nuxeo.defaults`) and must be defined in&nbsp;`nuxeo.conf`:

*   `nuxeo.data.dir`
*   `nuxeo.log.dir`
*   `nuxeo.pid.dir`
*   `nuxeo.tmp.dir`
*   `nuxeo.mp.dir`

{{/callout}}

&nbsp;

* * *