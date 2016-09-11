---
title: Configuring MS SQL Server
review:
    comment: ''
    date: ''
    status: ok
labels:
    - database
    - sqlserver
toc: true
confluence:
    ajs-parent-page-id: '16810053'
    ajs-parent-page-title: Database
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Configuring+MS+SQL+Server
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Configuring+MS+SQL+Server'
    page_id: '16810039'
    shortlink: N4AAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/N4AAAQ'
    source_link: /display/ADMINDOC58/Configuring+MS+SQL+Server
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 12:46'
        message: ''
        version: '38'
    - 
        author: Solen Guitter
        date: '2013-11-22 19:44'
        message: Using same BD name in all examples
        version: '37'
    - 
        author: Solen Guitter
        date: '2013-09-25 11:26'
        message: Fixed formatting
        version: '36'
    - 
        author: Benoit Delbosc
        date: '2013-09-24 18:11'
        message: ''
        version: '35'
    - 
        author: Benoit Delbosc
        date: '2013-09-11 18:27'
        message: ''
        version: '34'
    - 
        author: Benoit Delbosc
        date: '2013-09-11 17:55'
        message: Add isolation information and lock escalation
        version: '33'
    - 
        author: Solen Guitter
        date: '2013-07-23 14:09'
        message: ''
        version: '32'
    - 
        author: Florent Guillaume
        date: '2013-07-18 16:00'
        message: format
        version: '31'
    - 
        author: Florent Guillaume
        date: '2013-07-18 15:59'
        message: supported versions
        version: '30'
    - 
        author: Florent Guillaume
        date: '2013-07-18 15:55'
        message: collation stuff
        version: '29'
    - 
        author: Florent Guillaume
        date: '2013-07-17 16:50'
        message: added analyzer config
        version: '28'
    - 
        author: Florent Guillaume
        date: '2013-04-11 15:37'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '27'
    - 
        author: Florent Guillaume
        date: '2013-04-11 15:37'
        message: ''
        version: '26'
    - 
        author: Vladimir Pasquier
        date: '2012-11-09 12:19'
        message: ''
        version: '25'
    - 
        author: Vladimir Pasquier
        date: '2012-11-09 12:13'
        message: ''
        version: '24'
    - 
        author: Vladimir Pasquier
        date: '2012-11-09 12:09'
        message: ''
        version: '23'
    - 
        author: Florent Guillaume
        date: '2012-06-04 14:05'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '22'
    - 
        author: Florent Guillaume
        date: '2012-06-04 14:05'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '21'
    - 
        author: Florent Guillaume
        date: '2012-06-04 14:05'
        message: Migrated to Confluence 4.0
        version: '20'
    - 
        author: Florent Guillaume
        date: '2012-06-04 14:05'
        message: added WITH ROLLBACK IMMEDIATE
        version: '19'
    - 
        author: Solen Guitter
        date: '2012-05-10 12:14'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2012-05-10 11:19'
        message: Added related pages
        version: '17'
    - 
        author: Solen Guitter
        date: '2012-03-28 18:28'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2011-12-10 09:50'
        message: ''
        version: '15'
    - 
        author: Benoit Delbosc
        date: '2011-09-01 11:21'
        message: ''
        version: '14'
    - 
        author: Benoit Delbosc
        date: '2011-07-29 18:42'
        message: require a CS collation
        version: '13'
    - 
        author: Florent Guillaume
        date: '2011-07-28 17:07'
        message: ''
        version: '12'
    - 
        author: Benoit Delbosc
        date: '2011-07-28 17:02'
        message: update on db collation
        version: '11'
    - 
        author: Benoit Delbosc
        date: '2011-07-28 16:46'
        message: Update for read acls optimization
        version: '10'
    - 
        author: Wojciech Sulejman
        date: '2011-03-08 20:42'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-03-04 17:22'
        message: ''
        version: '8'
    - 
        author: Florent Guillaume
        date: '2010-12-29 11:34'
        message: ''
        version: '7'
    - 
        author: Julien Carsique
        date: '2010-10-29 18:18'
        message: 'moved driver information to [NXDOC58:Configuring Nuxeo EP]'
        version: '6'
    - 
        author: Julien Carsique
        date: '2010-10-29 12:23'
        message: Add jdbc driver information
        version: '5'
    - 
        author: Florent Guillaume
        date: '2010-08-20 12:45'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2010-08-20 12:40'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2010-08-20 12:34'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2010-08-20 12:29'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! multiexcerpt name='supported-MSSQLServer'}}

&nbsp;Nuxeo supports&nbsp;Microsoft SQL Server 2005, 2008, 2008 R2 and 2012 (including Azure).

{{! /multiexcerpt}} {{#> callout type='note' }}

Note that currently SQL Server 2008 may crash when working with full-text queries, see [NXP-6143](https://jira.nuxeo.com/browse/NXP-6143) for details. (This is a bug due to Microsoft, not Nuxeo.)

{{/callout}}

## System Database Collation

We've observed incorrect behavior (in particular with full-text search) if the SQL Server `master` database is not configured with a case-insensitive collation (a collation name with "`CI`").

To make sure this is the case, use:

```sql
SELECT collation_name FROM sys.databases WHERE name = 'master'
```

For instance the following collations have been checked to work correctly:

*   `<span style="color: rgb(0,0,0);">SQL_Latin1_General_CP1_CI_AS</span>`
*   `<span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">French_CI_AS</span></span>`

</div><div class="column medium-4">{{#> panel heading='On this page'}} {{/panel}}</div></div>

## Database Collation

To work properly Nuxeo need to have some columns with a case-sensitive collation.

To make sure this is the case, use:

```sql
SELECT collation_name FROM sys.databases WHERE name = 'nuxeo' -- or your custom database name
```

You need a case-sensitive collation (a collation name with "`CS`"), like&nbsp;`French_CS_AS`.

If this is not the case for your existing database you can change it like this:

```
ALTER DATABASE nuxeo COLLATE French_CS_AS

```

If you get database error related to rights issue, you can set it as a single user owner:

```
ALTER DATABASE nuxeo SET SINGLE_USER
WITH ROLLBACK IMMEDIATE
GO
ALTER DATABASE nuxeo COLLATE French_CS_AS
GO
ALTER DATABASE nuxeo SET MULTI_USER
```

## Row Versioning-Based Transaction Isolation

To prevent locking and deadlocking problems you need to [enable the row versioning-based isolation levels](http://technet.microsoft.com/en-us/library/ms175095.aspx). With row versioning readers do not block other readers or writers accessing the same data. Similarly, the writers do not block readers. However, writers will block each other. Before each statement Nuxeo add a ``SET TRANSACTION ISOLATION LEVEL READ COMMITTED;`` so statement sees only data committed before the query began.

To enable the row versioning submit the following SQL commands:

```
ALTER DATABASE nuxeo SET ALLOW_SNAPSHOT_ISOLATION ON;
ALTER DATABASE nuxeo SET READ_COMMITTED_SNAPSHOT ON;

```

Note that there must be no other open connection in the database until `ALTER DATABASE` is complete, otherwise the last command will hang. You can work around this (when executing the command from SQL Server Management Studio for instance) by adding `WITH ROLLBACK IMMEDIATE`:

```
ALTER DATABASE nuxeo SET READ_COMMITTED_SNAPSHOT ON WITH ROLLBACK IMMEDIATE;

```

If you don't execute the above commands, you will get the following error at Nuxeo startup:

```
Snapshot isolation transaction failed accessing database 'nuxeo' because snapshot isolation is not allowed in this database. Use ALTER DATABASE to allow snapshot isolation.

```

## Recovery Model

<span style="color: rgb(0,0,0);">A&nbsp;</span><span class="parameter" style="color: rgb(0,0,0);">recovery model</span><span style="color: rgb(0,0,0);">&nbsp;is a database property that controls how transactions are logged, whether the transaction log requires (and allows) backing up, and what kinds of restore operations are available. Three recovery models exist: simple, full, and bulk-logged.
(see more details here: [http://msdn.microsoft.com/en-us/library/ms189275.aspx](http://msdn.microsoft.com/en-us/library/ms189275.aspx))&nbsp;</span>

<span style="color: rgb(0,0,0);">By default, recovery mode is full, so you can get performance issues when enabling this mode</span>

<span style="color: rgb(0,0,0);">**Mode View:**
</span>

```
SELECT name, recovery_model_desc
   FROM sys.databases
      WHERE name = 'model' ;
GO
```

<span style="color: rgb(0,0,0);">**Mode Update (if FULL):**
</span>

```
USE master ;
ALTER DATABASE model SET RECOVERY SIMPLE ;
```

## Full-text

If you configure a full-text index in Nuxeo (which is the default), you will need to make sure that your SQL Server instance has full-text search configured (it's an optional component during installation). See [http://msdn.microsoft.com/en-us/library/ms142571.aspx](http://msdn.microsoft.com/en-us/library/ms142571.aspx) for details.

Failing to do this will provoke errors like:

{{#> panel type='code' heading='SQL Server Msg 7601'}}

```
Cannot use a CONTAINS or FREETEXT predicate on table or indexed view 'fulltext' because it is not full-text indexed.

```

{{/panel}}{{#> panel type='code' heading='SQL Server Msg 7616'}}

```
Full-Text Search is not enabled for the current database. Use sp_fulltext_database to enable full-text search for the database. The functionality to disable and enable full-text search for a database is deprecated. Please change your application.

```

{{/panel}}

The French version of these messages, for reference:

{{#> panel type='code' heading='SQL Server Msg 7601'}}

```
Impossible d'utiliser le prédicat CONTAINS ou FREETEXT sur table ou vue indexée 'fulltext', car il n'y a pas d'index de texte intégral.

```

{{/panel}}{{#> panel type='code' heading='SQL Server Msg 7616'}}

```
La recherche en texte intégral n'est pas activée dans la base de données en cours. Utilisez sp_fulltext_database pour l'activer sur cette base de données. La fonctionnalité de désactivation et d'activation d'une recherche en texte intégral pour une base de données est désapprouvée. Modifiez votre application.

```

{{/panel}}

You can verify if your MSSQL instance has its full-text feature installed before creating your database:

```sql
SELECT SERVERPROPERTY('IsFullTextInstalled');
```

### Full-Text Catalog

Nuxeo uses a full-text catalog named `nuxeo` by default, this can be changed in the Nuxeo configuration files (see [configuration details]({{page space='kb' page='configure-nuxeo-53-with-vcs-and-sql-server'}})).

### Full-Text Analyzer

The language used to analyze full-text (called a LANGUAGE in SQL Server parlance) can be specified in the configuration for the database, instead of "english" in the section `<fulltext analyzer="english">`. The available languages in your database can be listed by using:

```sql
SELECT alias FROM sys.syslanguages
```

## Additional Maintenance Operation

Since 5.4.2 HF05 the SQL Server back end comes with ACL (Access Control List) optimization. This optimization works with cache tables to store rights for each users and keep tracking of documents and rights changes. Theses data are reset when the server is started.

For long running instance or if you want to perform a hot backup without these unnecessary data, you can invoke the following stored procedure:

```
USE nuxeo;
EXEC dbo.nx_vacuum_read_acls;

```

Or you can exclude the following tables from your backup:

*   `aclr`
*   `aclr_modified`
*   `aclr_permissions`
*   `aclr_user_map`
*   `aclr_user`

### Deadlock and Lock Escalation

SQL Server is doing lock escalation: converting many row level locks to page lock or table lock. When doing concurrent write operations this can creates deadlock even when working on distinct data.

You can have more information on deadlock by enabling the following traces:

```
 DBCC TRACEON(1222,-1);
 DBCC TRACEON(1204,-1);
```

Then you can try to disable the lock escalation on the table impacted by deadlocks:

```
ALTER TABLE mytable SET (LOCK_ESCALATION=DISABLE)
```

### Clustered Index

SQL Server uses a clustered index to defined how the data is organized physically on disk. Before Nuxeo 5.7 we didn't define a clustered index, so the primary key is used, however this primary key is a random UUID which means that data keeps getting reorganized on disk on practically every insert or delete.

This has been fixed for new instance since Nuxeo 5.7\. For instance created before there are migration script to apply to add these index, see [NXP-10934]({{page space='USERDOC56' page='Drag and+drop+compatibility+table'}}) attachments to get the script.

### Indexes Maintenance

If the indexes are fragmented then the query response will be slow and the data storage will require more disk space. Microsoft recommends reorganizing an index with a fragmentation between 5% and 30%, and rebuilding an index with a fragmentation of more than 30%. Database administrators should always make sure that fragmentation of indexes is handled on time.

&nbsp;