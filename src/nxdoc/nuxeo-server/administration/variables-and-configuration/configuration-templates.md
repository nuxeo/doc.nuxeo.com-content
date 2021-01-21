---
title: Configuration Templates
description: Nuxeo applications integrate a configuration templates system to ease configuration and maintenance of configuration files.
review:
    comment: ''
    date: '2019-08-16'
    status: ok
labels:
    - templates
    - configuration
    - fdavid
    - lts2017-ok
    - lts2019-ok
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Configuration+Templates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Configuration+Templates'
    page_id: '8192208'
    shortlink: 0AB9
    shortlink_source: 'https://doc.nuxeo.com/x/0AB9'
    source_link: /display/NXDOC/Configuration+Templates
tree_item_index: 200
toc: true
version_override:
    LTS 2015: 710/admindoc/configuration-templates
    '6.0': 60/admindoc/configuration-templates
    '5.8': 58/admindoc/configuration-templates
history:
    -
        author: Florent Guillaume
        date: '2016-05-24 14:35'
        message: emove mention of obsolete jboss template
        version: '19'
    -
        author: Manon Lumeau
        date: '2016-03-25 10:48'
        message: ''
        version: '18'
    -
        author: Alain Escaffre
        date: '2016-03-23 15:51'
        message: ''
        version: '17'
    -
        author: Julien Carsique
        date: '2015-11-13 10:24'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-03-23 09:10'
        message: Update related topics and fix typo
        version: '15'
    -
        author: Stéphane Lacoin
        date: '2015-03-20 13:24'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-12-01 15:47'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-10-10 16:43'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-09-05 00:58'
        message: Migrated to Confluence 4.0
        version: '11'
    -
        author: Solen Guitter
        date: '2012-09-05 00:58'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2012-01-10 12:45'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2012-01-10 12:43'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-12-10 09:37'
        message: Added related content
        version: '7'
    -
        author: Julien Carsique
        date: '2011-07-27 16:35'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2011-07-27 16:27'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2011-07-27 16:25'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-07-27 11:09'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-07-27 10:34'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-07-27 10:30'
        message: ''
        version: '1'
---

Nuxeo applications integrate a configuration templates system to ease configuration and maintenance of configuration files.
Nuxeo comes with default templates which mainly provide database configurations, but the templates can be used for any configuration purpose.

## Principles

Nuxeo templates should be used to deploy specific configurations on your Nuxeo environments. Typically, it deals with configurations not exposed in Nuxeo Studio or through the Nuxeo extension system like an Elasticsearch mapping.

- Default Nuxeo templates values shouldn't be directly edited: custom templates should be created if you need to update default values.
- For production deployment, the user customizations should be stored outside the server filesystem hierarchy.
- The common template file should be used if the configuration applies for all environments. Consequently, additional specific templates should be created for specific environment configuration.

Properly using that template system ensures your customization of Nuxeo exclusively resides in your `nuxeo.conf`, custom templates and plug-in modules.

## Use Cases

Nuxeo templates allow you to provide a specific configuration layer to any Nuxeo environment in `nuxeo.conf`:

- `nuxeo.templates=default,env-one`
- `nuxeo.templates=default,env-two`
- `nuxeo.templates=default,env-one,env-two`

It is possible to enable one layer on a specific Nuxeo instance easily. In theory, all environments can share the configuration files and then update only the value of templates setting in the local `nuxeo.conf`.

For instance, users can create templates for development, pre-production, and production environments; each template will include a different set of XML contributions:

- **Users and Group**: To manage user and group authentication against different authentication systems.
- **Database**: To store connection properties for a specific database environment.
- **Specific needs**: To add any custom configuration, as you can add custom properties to the `nuxeo.conf` file.
- ...

Templates are located in the "templates" directory (`$NUXEO_HOME/templates`). To enable a configuration, such as database configuration, you need to indicate which template to use in the [`nuxeo.conf` configuration file]({{page page='configuration-parameters-index-nuxeoconf'}}).

## Default Nuxeo Templates

Here are the templates provided by default:

{{! multiexcerpt name='default-configuration-templates'}}

- `common`: Common template used by other templates
- `custom`: Sample custom templates. Of course, this template is empty by default. One should copy it outside `$NUXEO_HOME` and adapt to their needs. See related section below.
- [`default`]({{page page='connecting-nuxeo-to-the-database'}}): default Nuxeo configuration template for test purpose
- [`https`]({{page page='http-and-https-reverse-proxy-configuration'}}): (not recommended) Template to make the server listen to port 443 (HTTPS)
- [`mariadb`]({{page page='mariadb'}}): MariaDB configuration template (since Nuxeo FT 9.1; for older versions of Nuxeo the `mysql` template should be used)
- `mariadb-quartz-cluster`
- [`mongodb`]({{page page='mongodb'}}): MongoDB configuration template
- [`mssql`]({{page page='microsoft-sql-server'}}): MS SQL Server configuration template
- `mssql-quartz-cluster`
- [`mysql`]({{page page='mysql'}}): MySQL configuration template
- `mysql-quartz-cluster`
- [`oracle`]({{page page='oracle'}}): Oracle configuration template
- `oracle-quartz-cluster`;
- [`postgresql`]({{page page='postgresql'}}): PostgreSQL configuration template
- `postgresql-quartz-cluster`
{{! /multiexcerpt}}

{{#> callout type='tip' }}
For production environment, it is recommended to define your own custom template outside `$NUXEO_HOME`, as for `nuxeo.conf`. It must then be referenced in `nuxeo.conf` with its absolute path.
{{/callout}}

## Technical Overview

A server is considered as already configured when it has a "config" directory.
When the "config" directory doesn't exist, templates will be used to generate all configuration files (config and datasources).

The template files contain defined parameters such as `${sample.parameter}`.

Values for parameters replacement are calculated this way:

- If nuxeo.conf does not define `nuxeo.templates`, then `nuxeo.templates` equals "default" (the deprecated parameter `nuxeo.template` is still read for backward compatibility).
- The `${nuxeo.templates}` value is used for determining the chosen template(s).
- For each value "nuxeo.template" of `${nuxeo.templates}` (comma separated values, relative to "templates/" directory or absolute path), the corresponding file `templates/${nuxeo.template}/nuxeo.defaults` is read for defining new default values and maybe including other templates which are recursively parsed.
- The file `templates/nuxeo.defaults` is read for default values not already defined.
- The file `nuxeo.conf` is read for custom values (overwriting default values).

Configuration files are then generated by this way:

- For each comma separated value of `nuxeo.templates` and `nuxeo.template.includes`, the files in the referenced templates are copied using the previously calculated values for replacing parameters.
- Every included template will potentially overwrite its precedents.

You may want the variable to be resolved at runtime instead. In that case you can escape the variable in the configuration file this way: `$${variable}` instead of `${variable}`.

## Use a Custom Configuration Template to Store Your Customized Configuration Files

The "custom" template folder allows you to add customization such as using multiple databases, configuring services, etc.

1. Add your own template files in `templates/custom` directory.
    You can use either existing or new parameters in these new template files.
2. From the Admin tab or by manually [editing the `nuxeo.conf` file]({{page page='configuration-parameters-index-nuxeoconf'}}), set your parameters' values and set `nuxeo.templates=custom`.
    You can refer to custom templates directory with a relative path or to your own custom templates directory with an absolute path.
3. Edit `custom/nuxeo.defaults` and set `nuxeo.template.includes` parameter to define the list of existing templates to include (comma separated values); your custom template will be used at last.
    `nuxeo.defaults` files from included templates are also read.

In case you need multiple customizations, create multiple directories and reference them in a dedicated `nuxeo.conf` for each server.

{{#> callout type='info' }}

The following properties cannot be configured from a configuration template (in `nuxeo.defaults`) and must be defined in `nuxeo.conf`:

- `nuxeo.data.dir`
- `nuxeo.log.dir`
- `nuxeo.pid.dir`
- `nuxeo.tmp.dir`
- `nuxeo.mp.dir`

{{/callout}}

## Move Your Configuration out of the Server Directory Structure

The "custom" template folder is a sample configuration template that you can use as is but it is recommended to create your own configuration template named as you want and located outside of the Nuxeo server structure, along with your customized `nuxeo.conf`.

For instance, under Linux, you could setup:

- Configuration files (custom templates and nuxeo.conf) under `/etc/`

  <pre>/etc/nuxeo/
  ├── nuxeo.conf
  └── some-custom-template</pre>

- Data under `/var/lib/`.
  It is common to also place the server itself under `/var/lib/`. Other common locations for the server are `/opt/nuxeo/`, `~nuxeo/nuxeo-cap-x.y-tomcat/`...

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

- Log files under&nbsp;`/var/log/`
- PID files under&nbsp;`/var/run/`
- Temporary files under&nbsp;`/tmp/`

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})</span>
- [Configuration Parameters Index (nuxeo.conf) ]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
