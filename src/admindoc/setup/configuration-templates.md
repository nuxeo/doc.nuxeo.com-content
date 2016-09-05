---
title: Configuration Templates
labels:
    - templates
    - configuration
confluence:
    ajs-parent-page-id: '16810056'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Configuration+Templates
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Configuration+Templates'
    page_id: '16810030'
    shortlink: LoAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LoAAAQ'
    source_link: /display/ADMINDOC58/Configuration+Templates
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 12:20'
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

Properly using that template system ensures your customization of Nuxeo exclusively resides in your nuxeo.conf, custom templates and plugin modules.
For instance, users can create templates for development, pre-production, and production environments; each template will include a different set of xml contributions (users, ldap integration, database used, ...).

Templates are located in the "templates" directory (`$NUXEO_HOME/templates`). To enable a configuration, such as database configuration, you just need to indicate which template to use in the Admin Center's Setup tab or in the nuxeo.conf configuration file.

Here are the templates provided by default:

*   common: common template used by other templates;
*   common-binding: (JBoss only), template used by other templates;
*   common-deploydir: (JBoss only), template used by other templates;
*   [default]({{page page='connecting-nuxeo-to-the-database#default'}}): default Nuxeo configuration template for test purpose;
*   [https]({{page page='http-and-https-reverse-proxy-configuration#template'}}): (Tomcat only), not recommended template for making the server listen to port 443 (HTTPS);
*   monitor: (JBoss only), activate the JBoss LogginMonitor service to log miscellaneous MBean informations;
*   [postgresql]({{page page='connecting-nuxeo-to-the-database#postgresql-recommended'}}): PostgreSQL configuration template;
*   postgresql-quartz-cluster
*   [mssql]({{page page='connecting-nuxeo-to-the-database#mssql'}}): MS SQL Server configuration template;
*   mssql-quartz-cluster
*   [mysql]({{page page='connecting-nuxeo-to-the-database#mysql'}}): MySQL configuration template;
*   [oracle]({{page page='connecting-nuxeo-to-the-database#oracle'}}): Oracle configuration template;
*   oracle-quartz-cluster
*   [custom]({{page page='adding-custom-templates'}}): sample custom templates. Of course, this template is empty by default. One should copy it outside `$NUXEO_HOME` and adapt to his needs.

    {{#> callout type='tip' }}

    For production environment, it is recommended to define your own custom template outside `$NUXEO_HOME`, as for `nuxeo.conf`. It must then be referenced in `nuxeo.conf` with its absolute path.

    {{/callout}}

### Technical Overview

A server is considered as already configured when it has a "config" directory.
When the "config" directory doesn't exist, templates will be used to generate all configuration files (config and datasources).

The template files contain defined parameters such as ${sample.parameter}.

Values for parameters replacement are calculated this way:

*   If nuxeo.conf does not define `nuxeo.templates`, then `nuxeo.templates` equals "default" (the deprecated parameter `nuxeo.template` is still read for backward compatibility).
*   The ${nuxeo.templates} value is used for determining the chosen template(s).
*   For each value "nuxeo.template" of ${nuxeo.templates} (comma separated values, relative to "templates/" directory or absolute path), the corresponding file templates/${nuxeo.template}/nuxeo.defaults is read for defining new default values and maybe including other templates which are recursively parsed.
*   The file templates/nuxeo.defaults is read for default values not already defined.
*   The file nuxeo.conf is read for custom values (overwriting default values).

Configuration files are then generated by this way:

*   For each comma separated value of nuxeo.templates and nuxeo.template.includes (let say sample.template), files in templates ${sample.template} are copied using the previously calculated values for replacing parameters.
*   Every included template will potentially overwrite its precedents.