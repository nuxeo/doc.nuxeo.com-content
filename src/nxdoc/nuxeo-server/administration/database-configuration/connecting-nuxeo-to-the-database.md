---
title: Connecting Nuxeo to the Database
description: To connect Nuxeo to your database, you need to tell Nuxeo which database template to use and provide the database connection information.
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - templates
    - kleturc
    - database
    - multiexcerpt-include
    - lts2017-ok
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '3342340'
    ajs-parent-page-title: Database Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Connecting+Nuxeo+to+the+Database
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Connecting+Nuxeo+to+the+Database'
    page_id: '4688897'
    shortlink: AYxH
    shortlink_source: 'https://doc.nuxeo.com/x/AYxH'
    source_link: /display/NXDOC/Connecting+Nuxeo+to+the+Database
tree_item_index: 800
version_override:
    LTS 2015: 710/admindoc/connecting-nuxeo-to-the-database
    '6.0': 60/admindoc/connecting-nuxeo-to-the-database
    '5.8': 58/admindoc/connecting-nuxeo-to-the-database
history:
    -
        author: Manon Lumeau
        date: '2016-07-06 08:36'
        message: ''
        version: '47'
    -
        author: Manon Lumeau
        date: '2016-07-06 08:33'
        message: ''
        version: '46'
    -
        author: Manon Lumeau
        date: '2016-03-25 16:28'
        message: ''
        version: '45'
    -
        author: Manon Lumeau
        date: '2016-03-25 16:28'
        message: ''
        version: '44'
    -
        author: Manon Lumeau
        date: '2016-03-23 11:02'
        message: Fix links
        version: '43'
    -
        author: Manon Lumeau
        date: '2016-03-23 10:59'
        message: ''
        version: '42'
    -
        author: Florent Guillaume
        date: '2015-12-09 13:33'
        message: ''
        version: '41'
    -
        author: Solen Guitter
        date: '2014-11-26 17:43'
        message: ''
        version: '40'
    -
        author: Solen Guitter
        date: '2014-11-26 17:41'
        message: 'Screenshot and link update '
        version: '39'
    -
        author: Solen Guitter
        date: '2014-04-09 17:34'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '38'
    -
        author: Solen Guitter
        date: '2014-04-09 17:34'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '37'
    -
        author: Solen Guitter
        date: '2014-04-09 17:34'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2014-03-25 11:11'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2014-03-25 11:10'
        message: ''
        version: '34'
    -
        author: Thierry Martins
        date: '2014-03-21 22:58'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2013-12-19 15:05'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '32'
    -
        author: Solen Guitter
        date: '2013-12-19 15:05'
        message: Updated screenshot
        version: '31'
    -
        author: Alain Escaffre
        date: '2013-12-18 15:40'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2013-10-10 16:57'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2012-05-10 11:14'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '28'
    -
        author: Solen Guitter
        date: '2012-05-10 11:14'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '27'
    -
        author: Solen Guitter
        date: '2012-05-10 11:14'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '26'
    -
        author: Solen Guitter
        date: '2012-05-10 11:14'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '25'
    -
        author: Solen Guitter
        date: '2012-05-10 11:14'
        message: Migrated to Confluence 4.0
        version: '24'
    -
        author: Solen Guitter
        date: '2012-05-10 11:14'
        message: Added related pages in other documentation
        version: '23'
    -
        author: Florent Guillaume
        date: '2012-04-03 15:28'
        message: Added related content
        version: '22'
    -
        author: Solen Guitter
        date: '2011-12-10 10:05'
        message: Added related content
        version: '21'
    -
        author: Solen Guitter
        date: '2011-07-27 12:22'
        message: added instructions for nuxeo.conf edition and Startup wizard
        version: '20'
    -
        author: Solen Guitter
        date: '2011-03-11 12:20'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2011-03-11 11:22'
        message: ''
        version: '18'
    -
        author: Julien Carsique
        date: '2011-03-09 11:45'
        message: ''
        version: '17'
    -
        author: Julien Carsique
        date: '2011-03-09 11:43'
        message: ''
        version: '16'
    -
        author: Julien Carsique
        date: '2011-03-09 11:43'
        message: ''
        version: '15'
    -
        author: Julien Carsique
        date: '2011-03-09 11:41'
        message: ''
        version: '14'
    -
        author: Wojciech Sulejman
        date: '2011-03-08 21:10'
        message: cleanup
        version: '13'
    -
        author: Wojciech Sulejman
        date: '2011-03-08 21:09'
        message: Provided database connection information using templates. Added examples.
        version: '12'
    -
        author: Wojciech Sulejman
        date: '2011-03-08 20:42'
        message: ''
        version: '11'
    -
        author: Wojciech Sulejman
        date: '2011-03-08 20:42'
        message: ''
        version: '10'
    -
        author: Wojciech Sulejman
        date: '2011-03-08 20:41'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-03-04 17:23'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-03-04 17:22'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-03-04 17:22'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-03-04 17:22'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-03-04 17:21'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2010-12-29 11:27'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2010-12-28 15:02'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-12-28 14:51'
        message: ''
        version: '1'

---
To connect Nuxeo to your database, you need to tell Nuxeo which database template to use and provide the database connection information.

## Connecting Nuxeo to the Database From the Startup Wizard

The first time you start your Nuxeo server, a wizard is displayed to help you setup your application. One of the steps is about the database: select the database you want to use in the drop down list and provide the connection information to the database.

![]({{file name='Startup_wizard.png' page='configuration-wizard'}} ?w=650,border=true)

## Connecting Nuxeo to the Database From the nuxeo.conf File

By default, the "default" template is enabled on your Nuxeo server (see the [Database templates](#database-templates) section for more information on this template). You need to edit it to change the template to be used.

1.  Open your `nuxeo.conf` file with a text editor.

    {{#> callout type='warning' heading='For Windows users'}}

    &nbsp;Do not use Office writers, nor Notepad.

    Wordpad is fine, Notepad+\+ and SciTE are good text editors, there are a lot of [other text editors](http://en.wikipedia.org/wiki/List_of_text_editors).

    {{/callout}}
2.  If needed, uncomment or edit the `nuxeo.templates` parameter and replace `default` with the wanted database template's name (see [Database Templates section](#database-templates)).
3.  Depending on your Database choice, you have to uncomment or edit the parameters below and provide their values:
    1. SQL Database:
        *   `nuxeo.db.name`
        *   `nuxeo.db.user`
        *   `nuxeo.db.password`
        *   `nuxeo.db.host`
        *   `nuxeo.db.port`
    2. MongoDB Database:
        *   `nuxeo.mongodb.server`
        *   `nuxeo.mongodb.name`
4.  Save your modifications.
5.  Restart the server.

{{#> callout type='tip' heading='For production or load testing environments'}}

These are the minimum required parameters to enable the Nuxeo server to communicate with the database. For a production or load testing environment, you may need to provide the other commented parameters.

{{/callout}}

## {{> anchor 'database-templates'}}Database Templates

The default available database templates are:

{{{multiexcerpt 'default-configuration-templates' page='configuration-templates'}}}

The most commonly used templates are described below. For more information read the page [Configuration Templates]({{page version='' space='nxdoc' page='configuration-templates'}}).

### {{> anchor 'default'}}Default

This is the default Nuxeo configuration using an embedded H2 database. It is designed for development or test purpose. **Do not** use this in production or for performance evaluations.

*   Repository backend: H2
*   Services backend: H2

### {{> anchor 'postgresql'}}PostgreSQL (Recommended)

This is the recommended configuration for production, based on PostgreSQL.

*   Repository backend: PostgreSQL XA
*   Services backend: PostgreSQL XA

The PostgreSQL driver is included in the Nuxeo applications by default. However, if needed you can download a more recent version from [http://jdbc.postgresql.org/download.html#current](http://jdbc.postgresql.org/download.html#current).

The JAR (for instance `postgresql-9.4-1212.jar`) is located in `$NUXEO/lib/`.

{{#> callout type='tip' }}

You can use a later driver with an earlier database version, for instance the 9.4 driver still works with PostgreSQL 9.2 or 9.3.

{{/callout}}

See the page [PostgreSQL]({{page page='postgresql'}}) for more information on the database configuration.

### {{> anchor 'oracle'}}Oracle

*   Repository backend: Oracle XA
*   Services backend: Oracle XA

The driver is not included in Nuxeo applications for legal reasons. To install it:

1.  Download the appropriate JDBC driver from [http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html](http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html).
2.  The JAR (`ojdbc7.jar`) must be placed in `$NUXEO/lib/`.

See the page [Oracle]({{page page='oracle'}}) for more information on the database configuration.

### {{> anchor 'mssql'}}Microsoft SQL Server

*   Repository backend: Microsoft SQL Server XA
*   Services backend: Microsoft SQL Server XA

The Microsoft JDBC driver is already shipped with Nuxeo.

The JAR (for instance `sqljdbc-4.2.6420.jar`) is located in `$NUXEO/lib/`.

See the page [Microsoft SQL Server]({{page page='microsoft-sql-server'}}) for more information on the database configuration.

### {{> anchor 'mysql'}}MySQL

*   Repository backend: MySQL XA
*   Services backend: MySQL XA

The JDBC driver (dowloadable from [http://www.mysql.com/downloads/connector/j/](http://www.mysql.com/downloads/connector/j/)) is included in Nuxeo applications and is located in&nbsp;`$NUXEO/lib/`.

We recommend using a near-infinite [wait_timeout](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_wait_timeout) in the MySQL server configuration. See the page&nbsp;[MySQL]({{page page='mysql'}}) for more information on the database configuration.

## Connecting Nuxeo to the Database From the JSF Admin Center

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

1.  In the Admin Center, click on the **Setup** tab of system information section.
2.  In the **Main information** section, select the target database in the drop down menu.
    A new **Database Information** section is displayed on the page.
    ![]({{file name='AdminCenter-database.png'}} ?w=500,border=true)
3.  Fill in the database connection information.
4.  Click on the **Save** button displayed below the Email information section.
5.  Restart your server.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Admin Documentation'}}

- [How to Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})
- [MySQL]({{page page='mysql'}})
- [Microsoft SQL Server]({{page page='microsoft-sql-server'}})
- [Oracle]({{page page='oracle'}})
- [PostgreSQL]({{page page='postgresql'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
