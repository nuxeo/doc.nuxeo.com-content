---
title: Connecting Nuxeo to the Database
description: To connect Nuxeo to your database, you need to tell Nuxeo which database template to use and provide the database connection information.
review:
    comment: ''
    date: '2025-03-18'
    status: ok
labels:
    - templates
    - kleturc
    - database
    - multiexcerpt-include
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
---

To connect Nuxeo to a database, you need to:

1. [Enable](#enabling-database-in-nuxeo) this database in Nuxeo.
2. [Configure](#configuring-database-connection-parameters) the database connection parameters.

## Enabling Database in Nuxeo

First of all, please make sure you've read the documentation about [Configuration Templates]({{page page='configuration-templates'}}).

By default, the `default` template is enabled on your Nuxeo server. This is the default Nuxeo configuration using an embedded H2 database. It is designed for development or test purpose. **Do not** use this in production or for performance evaluations.

Depending on the database you want to enable, you need to either:

- Set the related template in the `nuxeo.conf` file. This is the case for:
  - [MongoDB](#mongodb)
  - [PostgreSQL](#postgresql)
- Install the related package. This is the case for:
  - [MySQL](#mysql)
  - [MariaDB](#mariadb)
  - [Oracle](#oracle)
  - [Microsoft SQL Server](#microsoft-sql-server)

### MongoDB

To enable the MongoDB database, in the `nuxeo.conf` file, uncomment or edit the `nuxeo.templates` parameter and replace `default` with `mongodb`.

When using the `mongodb` template, the MongoDB Java drivers are included in the Nuxeo server. They are located in the `$NUXEO_HOME/lib/` directory. However, if needed, you can use another version from the [MongoDB Java Drivers](https://www.mongodb.com/docs/drivers/java-drivers/) site.

{{#> callout type='tip' }}
You can use a later driver with an earlier database version, see the [MongoDB Compatibility](https://www.mongodb.com/docs/drivers/java/sync/current/compatibility/#compatibility-table-legend) documentation.
{{/callout}}

See the page [MongoDB]({{page page='mongodb'}}) for more information on the database configuration.

### PostgreSQL

To enable the PostgreSQL database, in the `nuxeo.conf` file, uncomment or edit the `nuxeo.templates` parameter and replace `default` with `postgresql`.

When using the `postgresql` template, the PostgreSQL JDBC driver is included in the Nuxeo server. It is located in the `$NUXEO_HOME/lib/` directory. However, if needed, you can use another version from the [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/) site.

{{#> callout type='tip' }}
You can use a later driver with an earlier database version, for instance the 42.7 driver still works with PostgreSQL 8.2 and higher.
{{/callout}}

See the page [PostgreSQL]({{page page='postgresql'}}) for more information on the database configuration.

### MySQL

To enable the MySQL database, install the [nuxeo-mysql-package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mysql-package) package. This adds the `mysql` template to the `nuxeo.templates` parameter in the `nuxeo.conf` file.

When installing the `nuxeo-mysql-package` package, the MySQL JDBC driver is included in the Nuxeo server. It is located in the `$NUXEO_HOME/lib/` directory. However, if needed, you can use another version from the [MySQL Community Downloads](https://dev.mysql.com/downloads/connector/j/) site.

We recommend using a near-infinite [wait_timeout](http://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar_wait_timeout) in the MySQL server configuration. See the page [MySQL]({{page page='mysql'}}) for more information on the database configuration.

### MariaDB

To enable the MariaDB database, install the [nuxeo-mariadb-package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mariadb-package) package. This adds the `mariadb` template to the `nuxeo.templates` parameter in the `nuxeo.conf` file.

When installing the `nuxeo-mariadb-package` package, the MariaDB JDBC driver is included in the Nuxeo server. It is located in the `$NUXEO_HOME/lib/` directory. However, if needed, you can use another version from the [MariaDB Connector/J](https://mariadb.com/kb/en/about-mariadb-connector-j/) site.

See the page [MariaDB]({{page page='mariadb'}}) for more information on the database configuration.

### Oracle

To enable the Oracle database, install the [nuxeo-oracle-package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-oracle-package) package. This adds the `oracle` template to the `nuxeo.templates` parameter in the `nuxeo.conf` file.

When installing the `nuxeo-oracle-package` package, the Oracle JDBC driver is **not** included in the Nuxeo server. This is for legal reasons. To install it, download the appropriate driver from the [Oracle Database JDBC driver and Companion Jars Downloads](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html) site and place it in the `$NUXEO_HOME/lib/` directory.

See the page [Oracle]({{page page='oracle'}}) for more information on the database configuration.

### Microsoft SQL Server

To enable the Microsoft SQL Server database, install the [nuxeo-mssql-package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mssql-package) package. This adds the `mssql` template to the `nuxeo.templates` parameter in the `nuxeo.conf` file.

When installing the `nuxeo-mssql-package` package, the Microsoft SQL Server JDBC Driver is included in the Nuxeo server. It is located in the `$NUXEO_HOME/lib/` directory. However, if needed, you can use another version from the [Microsoft JDBC Driver for SQL Server](https://learn.microsoft.com/en-us/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server) site.

See the page [Microsoft SQL Server]({{page page='microsoft-sql-server'}}) for more information on the database configuration.

## Configuring Database Connection Parameters

In the `nuxeo.conf` file, depending on your Database choice, you have to uncomment or edit the parameters below and provide their values:

### MongoDB Database (Recommended)

- `nuxeo.mongodb.server`
- `nuxeo.mongodb.dbname`

### SQL Database

- `nuxeo.db.name`
- `nuxeo.db.user`
- `nuxeo.db.password`
- `nuxeo.db.host`
- `nuxeo.db.port`

{{#> callout type='tip' heading='For production or load testing environments'}}
These are the minimum required parameters to enable the Nuxeo server to communicate with the database. For a production or load testing environment, you may need to provide the other commented parameters.
{{/callout}}

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
