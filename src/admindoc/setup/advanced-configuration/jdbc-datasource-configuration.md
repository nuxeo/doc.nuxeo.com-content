---
title: JDBC Datasource Configuration
labels:
    - datasource
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '27604662'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: JDBC+Datasource+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/JDBC+Datasource+Configuration'
    page_id: '27604628'
    shortlink: lDalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/lDalAQ'
    source_link: /display/ADMINDOC710/JDBC+Datasource+Configuration
history:
    - 
        author: Manon Lumeau
        date: '2016-08-19 15:31'
        message: ''
        version: '23'
    - 
        author: Manon Lumeau
        date: '2016-08-02 16:14'
        message: 'remove <span> '
        version: '22'
    - 
        author: Manon Lumeau
        date: '2016-05-06 09:13'
        message: ''
        version: '21'
    - 
        author: Florent Guillaume
        date: '2016-05-04 11:53'
        message: typos
        version: '20'
    - 
        author: Thierry Martins
        date: '2016-05-04 10:03'
        message: ''
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

These datasources are all defined in&nbsp;`nxserver/config/datasources-config.xml` (which is generated from `templates/common-base/nxserver/config/datasources-config.xml.nxftl`). The datasources are defined like this:

```xml
<Link name="jdbc/NuxeoDS" global="jdbc/nuxeo" type="javax.sql.DataSource" />
<Link name="jdbc/nxsqldirectory" global="jdbc/nuxeo" type="javax.sql.DataSource" />

```

So, by default they are actually linked to the common datasource `${nuxeo.db.commonds}`&nbsp;(`jdbc/nuxeo`&nbsp;by default):

```xml
<datasource name="${nuxeo.db.commonds}"
  driverClassName="${nuxeo.db.driver}"
  url="${nuxeo.db.jdbc.url}"
  username="${nuxeo.db.user}"
  password="${nuxeo.db.password}"
  maxPoolSize="${nuxeo.db["max-pool-size"]}"
  minPoolSize="${nuxeo.db["min-pool-size"]}"
  blockingTimeoutMillis="${nuxeo.db["blocking-timeout-millis"]}"
  idleTimeoutMinutes="${nuxeo.db["idle-timeout-minutes"]}"
  sqlExceptionSorter="${nuxeo.db["sql-exception-sorter"]}"
  validationQuery="${nuxeo.db.validationQuery}"
  accessToUnderlyingConnectionAllowed="true" />
```

The properties used in this file come from the ones defined in `bin/nuxeo.conf` and the template chosen for your database.

## Accessing Multiple Databases

You may need to access multiple databases and then require to run the connection in XA mode. In such case, you should enable the XA mode by setting&nbsp;`nuxeo.db.xaMode=true` in `bin/nuxeo.conf`.

## Sharing Connections with Other Applications

When you're deploying Nuxeo as a static WAR, you may want to share the database connections with other applications. You should then configure the datasource server side such as a global resource in Tomcat and instruct Nuxeo to acquire a connection from that pool instead of opening a new JDBC connection.

```xml
<datasource name="${nuxeo.db.commonds}"
  datasource="jdbc/your-global-datasource"
  maxPoolSize="${nuxeo.db["max-pool-size"]}"
  minPoolSize="${nuxeo.db["min-pool-size"]}"
  blockingTimeoutMillis="${nuxeo.db["blocking-timeout-millis"]}"
  idleTimeoutMinutes="${nuxeo.db["idle-timeout-minutes"]}"
  sqlExceptionSorter="${nuxeo.db["sql-exception-sorter"]}"
  validationQuery="${nuxeo.db.validationQuery}"
  accessToUnderlyingConnectionAllowed="true" />>

```

## Managing Idle Connections

By default idle (unused) connections are maintained 5 minutes in the pool. This can be configured by changing the parameter&nbsp;`nuxeo.db.idle-timeout-minutes`&nbsp;in&nbsp;`nuxeo.conf`:

```
nuxeo.db.idle-timeout-minutes=30
```

## Recovering from Connection Errors

Nuxeo is able to recover from lost connections by using an _exception sorter_, whose role is to determine which errors are fatal:

*   if the returned error code is considered FATAL, the connection is destroyed from the pool,
*   otherwise the connection is kept in the pool and will be re-used later.

The datasource parameter to manage the connection error is `sqlExceptionSorter`. Four implementations are available:

*   `org.tranql.connector.AllExceptionsAreFatalSorter`
*   `org.tranql.connector.NoExceptionsAreFatalSorter`
*   `org.tranql.connector.jdbc.KnownSQLStateExceptionSorter`
*   `org.nuxeo.runtime.datasource.DatasourceExceptionSorter`

By the default, the&nbsp;`DatasourceExceptionSorter`&nbsp;is configured. It enables you to contribute fatal SQL codes for&nbsp;a defined database. Each sorter contribution is identified uniquely by its&nbsp;`id`. You could override or extend a&nbsp;`sorter`&nbsp;configuration using the&nbsp;`override`&nbsp;attribute. Once a &nbsp;SQL exception is&nbsp;thrown, a&nbsp;`sorter`&nbsp;configuration is selected by comparing the exception stack trace packages with the&nbsp;`path`&nbsp;attribute.&nbsp;If a package in the stack trace is starting by the&nbsp;`path`&nbsp;value, this&nbsp;`sorter`&nbsp;configuration is selected. If no&nbsp;`sorter`&nbsp;configuration&nbsp;is matching the trace, the default&nbsp;`sorter`&nbsp;configuration identified by the empty string is selected.&nbsp;The contributed SQL codes could be a SQL&nbsp;class code or a complete SQL code. For easier configuration, you could use the enumeration labels&nbsp; for the standard&nbsp;[SQL class code](http://community.nuxeo.com/api/nuxeo/8.3/javadoc/org/nuxeo/runtime/datasource/DatasourceExceptionSorter.Classcode.html)&nbsp;.

```
<extension target="org.nuxeo.runtime.datasource" point="sorter">
  <sorter id="adb" path="org.adb" override="false">
    <code>ConnectionException</code>
    <code>RemoteDatabaseAccess</code>
    <code>SystemError</code>
    <code>90001</code>
  </sorter>
</extension>
```

You can also define your own exception sorter by implementing&nbsp;[`org.tranql.connector.ExceptionSorter`](https://javadocs.com/docs/org.tranql/tranql-connector/1.6/org/tranql/connector/ExceptionSorter.java). In that case, redefine&nbsp;`nuxeo.db.sql-exception-sorter`&nbsp;in&nbsp;`nuxeo.conf`&nbsp;to change this:

```
nuxeo.db.sql-exception-sorter=org.tranql.connector.jdbc.KnownSQLStateExceptionSorter
```

* * *