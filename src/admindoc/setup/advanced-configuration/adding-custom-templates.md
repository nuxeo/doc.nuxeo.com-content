---
title: Adding Custom Templates
review:
    comment: ''
    date: ''
    status: ok
labels:
    - templates
    - lts2015-ok
confluence:
    ajs-parent-page-id: '27604662'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Adding+Custom+Templates
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Adding+Custom+Templates'
    page_id: '27604663'
    shortlink: tzalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/tzalAQ'
    source_link: /display/ADMINDOC710/Adding+Custom+Templates
history:
    - 
        author: Julien Carsique
        date: '2015-11-16 15:57'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-11-16 14:04'
        message: ''
        version: '12'
    - 
        author: Julien Carsique
        date: '2015-11-13 10:56'
        message: ''
        version: '11'
    - 
        author: Julien Carsique
        date: '2015-11-13 10:46'
        message: ''
        version: '10'
    - 
        author: Julien Carsique
        date: '2015-11-13 10:43'
        message: ''
        version: '9'
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
## Use a Custom Configuration Template to Store Your Customized Configuration Files

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

## Move Your Configuration out of the Server Directory Structure

The "custom" template folder is a sample configuration template that you can use as is but it is recommended to create your own configuration template named as you want and located outside of the Nuxeo server structure, along with your customized `nuxeo.conf`.

For instance, under Linux, you could setup:

*   Configuration files (custom templates and nuxeo.conf) under `/etc/`

    <pre>/etc/nuxeo/
    ├── nuxeo.conf
    └── some-custom-template</pre>

*   Data under `/var/lib/`.
    It is common to also place the server itself under `/var/lib/`. Other common locations for the server are `/opt/nuxeo/`, `~nuxeo/nuxeo-cap-x.y-tomcat/` ...

    <pre>/var/lib/nuxeo/
    ├── data
    └── server (NUXEO_HOME)
    &nbsp;&nbsp;&nbsp; ├── conf
    &nbsp;&nbsp;&nbsp; ├── lib
    &nbsp;&nbsp;&nbsp; ├── nxserver
    &nbsp;&nbsp;&nbsp; ├── packages
    &nbsp;&nbsp;&nbsp; ├── templates
    &nbsp;&nbsp;&nbsp; ├── webapps
    &nbsp;&nbsp;&nbsp; └── work</pre>

*   Log files under `/var/log/`
*   PID files under `/var/run/`
*   Temporary files under `/tmp/`

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Documentation About Templates'}}

*   [Configuration Templates]({{page page='configuration-templates'}})
*   [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>