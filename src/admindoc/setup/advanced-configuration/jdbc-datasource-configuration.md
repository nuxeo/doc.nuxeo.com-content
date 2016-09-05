---
title: JDBC Datasource Configuration
labels:
    - datasource
toc: true
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: JDBC+Datasource+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/JDBC+Datasource+Configuration'
    page_id: '21921897'
    shortlink: aYBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/aYBOAQ'
    source_link: /display/ADMINDOC60/JDBC+Datasource+Configuration
history:
    - 
        author: Solen Guitter
        date: '2014-11-28 14:18'
        message: ormattin
        version: '8'
    - 
        author: Thierry Martins
        date: '2014-04-30 15:46'
        message: example on single datasource exclusion
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-10-14 13:38'
        message: Added TOC
        version: '6'
    - 
        author: Florent Guillaume
        date: '2013-10-10 16:21'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2013-10-10 16:20'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2010-06-17 17:05'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Florent Guillaume
        date: '2010-06-17 17:05'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:57'
        message: ''
        version: '1'

---
## Datasource Definition

Nuxeo code and Nuxeo configuration uses JDBC connections for a number of purposes, and therefore defines different datasource names for them. Examples are:

*   `jdbc/nxsqldirectory`
*   `jdbc/nxaudit-logs`
*   `jdbc/NuxeoDS`

Additional datasources can be used, for instance when defining a Directory you have to specify which datasource it uses, and you may want to use something else than the standard&nbsp; `jdbc/nxsqldirectory` if you want to store data elsewhere.

These datasources are all defined in Tomcat `conf/Catalina/localhost/nuxeo.xml` (which is generated from `templates/common-base/conf/Catalina/localhost/nuxeo.xml.nxftl` &mdash; to defined new datasource names you should copy this template and override it). The `nuxeo.xml` datasources are defined like this:

```xml
<ResourceLink name="jdbc/NuxeoDS" global="jdbc/nuxeo" type="javax.sql.DataSource" />
<ResourceLink name="jdbc/nxsqldirectory" global="jdbc/nuxeo" type="javax.sql.DataSource" />
...
```

So by default they are actually links to a global resource defined in Tomcat's `conf/server.xml` (generated from `templates/common-base/conf/server.xml.nxftl`):

```xml
<Resource name="jdbc/nuxeo" auth="Container" type="javax.sql.DataSource"
    maxActive="${nuxeo.db["max-pool-size"]}" maxIdle="30" maxWait="10000" driverClassName="${nuxeo.db.driver}"
    url="${nuxeo.db.jdbc.url}" validationQuery="${nuxeo.db.validationQuery}"
    username="${nuxeo.db.user}" password="${nuxeo.db.password}"
    accessToUnderlyingConnectionAllowed="true" />
```

The properties used in this file come from the ones defined in `bin/nuxeo.conf` and the template chosen for your database.

## Single-Datasource Mode (non-XA)

By default a mode called _single-datasource_ is activated (see [NXP-10308](https://jira.nuxeo.com/browse/NXP-10308) for technical details).

In this mode, every database connection made by the Nuxeo Platform is funneled through a single physical datasource, including:

*   Directory connections
*   VCS connections
*   Hibernate connections

Even if you defined a different datasource name for a directory, with this mode activated a single shared datasource will actually be used instead. This allows the use of a regular datasource for everything, and avoids the use of XA, which is a big performance boost for some databases (like Oracle in RAC mode).

{{#> callout type='note' }}

Single-datasource mode applies even to VCS, which means that in this mode the `<xa-datasource>` configuration and the various database `<property>` defined by `nxserver/config/default-repository-config.xml` will not be used.

{{/callout}}

To activate single-datasource mode, the following is defined in `templates/common-base/nuxeo.defaults`:

```
nuxeo.db.singleDataSource=jdbc/NuxeoDS
```

The datasource name can of course be different than `jdbc/NuxeoDS`, but it must be a valid datasource already defined elsewhere.

In addition, the maximum pool size for the datasource must be enough for all the VCS connections, which means that you must have `nuxeo.db.max-pool-size` &ge; `nuxeo.vcs.max-pool-size` + 2\. (The + 2 comes from two reserved connections for the VCS lock manager and the cluster node handler.)

As an advanced feature, if you want single-datasource mode except for some specific datasources (that need to hit a separate database for instance), then you can use:

```
nuxeo.db.singleDataSource.exclude=jdbc/myExcludedDatasource, jdbc/anotherExcludedDatasource
```

This feature can be interesting if you want to define a vocabulary whose values should be retrieved from a database, which is not the one where Nuxeo will store the documents.

{{#> callout type='warning' }}

The excluded datasources will not participate in any global XA transaction so there will be no two-phase commit for them, and on error and rollback (which admittedly should not happen) they may become inconsistent.

{{/callout}}

### Disabling Single-Datasource Mode

You will have to disable single-datasource mode in these situations:

*   You have more than one SQL repository
*   You want to go back to the old XA mechanism for multiple datasource

If either of this is the case, then you will have to disable single-datasource mode, by redefining the property in `bin/nuxeo.conf` with an empty value:

```
nuxeo.db.singleDataSource=
```

### Using Single-Datasource Mode in Java Code

If you code a new Java component that needs to access JDBC directly and wish to use single-datasource mode, then you should get your connections through:

```
        // try single-datasource mode first
        Connection connection = ConnectionHelper.getConnection(dataSourceName);
        try {
            if (connection == null) {
                // standard mode, get the connection through regular JDBC lookup
                connection = DataSourceHelper.getDataSource(dataSourceName).getConnection();
            }
            ... use the connection ...
        } finally {
            if (connection != null) {
                connection.close();
            }
        }
```

* * *