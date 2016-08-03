---
title: JDBC Datasource
labels:
    - datasource
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: JDBC+Datasource
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/JDBC+Datasource'
    page_id: '950325'
    shortlink: NYAO
    shortlink_source: 'https://doc.nuxeo.com/x/NYAO'
    source_link: /display/NXDOC/JDBC+Datasource
history:
    - 
        author: Manon Lumeau
        date: '2016-08-02 16:23'
        message: ''
        version: '29'
    - 
        author: Alain Escaffre
        date: '2016-07-22 13:37'
        message: ''
        version: '28'
    - 
        author: Florent Guillaume
        date: '2016-05-18 12:18'
        message: ''
        version: '27'
    - 
        author: Stéphane Lacoin
        date: '2016-05-18 09:04'
        message: ''
        version: '26'
    - 
        author: Stéphane Lacoin
        date: '2016-05-17 14:35'
        message: ''
        version: '25'
    - 
        author: Stéphane Lacoin
        date: '2016-05-17 13:36'
        message: ''
        version: '24'
    - 
        author: Stéphane Lacoin
        date: '2016-05-17 13:22'
        message: ''
        version: '23'
    - 
        author: Stéphane Lacoin
        date: '2016-05-17 13:20'
        message: ''
        version: '22'
    - 
        author: Stéphane Lacoin
        date: '2016-05-17 12:52'
        message: ''
        version: '21'
    - 
        author: Manon Lumeau
        date: '2016-05-06 09:14'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2016-05-06 09:05'
        message: typos
        version: '19'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:30'
        message: ''
        version: '18'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:28'
        message: ''
        version: '17'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:25'
        message: ''
        version: '16'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:24'
        message: ''
        version: '15'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:23'
        message: ''
        version: '14'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:23'
        message: ''
        version: '13'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:21'
        message: ''
        version: '12'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:20'
        message: ''
        version: '11'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 13:20'
        message: ''
        version: '10'
    - 
        author: Stéphane Lacoin
        date: '2015-10-13 12:59'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-11-28 14:18'
        message: formatting
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
## Accessing a Single Database (Default)

Nuxeo uses JDBC connections for a number of purposes, and therefore defines different datasource names for them. Examples are:

*   `jdbc/nxsqldirectory`
*   `jdbc/nxaudit-logs`
*   `jdbc/repository-default`

Additional datasources can be used, for instance when defining a Directory you have to specify which datasource it uses, and you may want to use something else than the standard `jdbc/nxsqldirectory` if you want to store data elsewhere.

These datasources are all defined in Tomcat `nxserver/config/datasources-config.xml` (which is generated from `templates/common-base/nxserver/config/datasources-config.xml.nxftl`). The datasources are defined like this:

So, by default they are actually linked to the common datasource `${nuxeo.db.commonds}`:

```

```

The properties used in this file come from the ones defined in `bin/nuxeo.conf` and the template chosen for your database.

## Accessing Multiple Databases

You may need to access to multiple databases and then require to run the connection in XA mode. In such case, you should enable the XA mode by setting&nbsp;`nuxeo.db.xaMode=true` in `bin/nuxeo.conf`.

## Sharing Connections with Other Applications

When you're deploying Nuxeo as a static WAR, you may want to share the database connections with other applications. You should then configure the datasource server side such as a global resource in Tomcat and instruct Nuxeo to acquire a connection from that pool instead of opening a new JDBC connection.

```

```

## Managing Idle Connections

By default the idle connections are indefinitely maintained in the pool, which could cause issues if the database (or a middleware) drops idle connections. To limit the time during which the connections are maintained in the pool, use the parameter&nbsp;`idleTimeoutMinutes` .

Copy the template&nbsp;`templates/common-base/nxserver/config/datasources-config.xml.nxftl`&nbsp;to the&nbsp;`custom`&nbsp;template folder and change the datasource definition to add this line:

```

```

## Recovering from Connection Errors

Nuxeo is able to recover from lost connections by using an "exception sorter", whose role is to determine which errors are fatal:

*   if the connection is detected as not valid by the driver with a 10 seconds timeout,

*   if the returned error code is considered FATAL, the connection is destroyed from the pool,
*   otherwise the connection is kept in the pool and will be re-used later.

The parameter to manage the connection error is&nbsp; `sqlExceptionSorter`. Four implementations are available:

*   `org.tranql.connector.AllExceptionsAreFatalSorter`
*   `org.tranql.connector.NoExceptionsAreFatalSorter`
*   `org.tranql.connector.jdbc.KnownSQLStateExceptionSorter`
*   `org.nuxeo.runtime.datasource.DatasourceExceptionSorter`

By the default, the&nbsp;`DatasourceExceptionSorter` is configured. It enables you to contribute fatal SQL codes for&nbsp;a defined database. Each sorter contribution is identified uniquely by its&nbsp;`id`. You could override or extend a `sorter`&nbsp;configuration using the `override`&nbsp;attribute. Once a &nbsp;SQL exception is&nbsp;thrown, a `sorter`&nbsp;configuration is selected by comparing the exception stack trace packages with the&nbsp;`path`&nbsp;attribute.&nbsp;If a package in the stack trace is starting by the `path`&nbsp;value, this `sorter`&nbsp;configuration is selected. If no `sorter`&nbsp;configuration&nbsp;is matching the trace, the default `sorter`&nbsp;configuration identified by the empty string is selected.&nbsp;The contributed SQL codes could be a SQL&nbsp;class code or a complete SQL code. For easier configuration, you could use the enumeration labels&nbsp; for the standard [SQL class code](http://community.nuxeo.com/api/nuxeo/8.3/javadoc/org/nuxeo/runtime/datasource/DatasourceExceptionSorter.Classcode.html) .

```

      ConnectionException
      RemoteDatabaseAccess
      SystemError
      90001

```

&nbsp;

You can also define your own exception sorter by implementing `[org.tranql.connector.ExceptionSorter](https://javadocs.com/docs/org.tranql/tranql-connector/1.6/org/tranql/connector/ExceptionSorter.java) `.&nbsp; Copy the template&nbsp;`templates/common-base/nxserver/config/datasources-config.xml.nxftl`&nbsp;to the&nbsp;`custom`&nbsp;template folder and change the datasource definition to add this line:

```

```

* * *