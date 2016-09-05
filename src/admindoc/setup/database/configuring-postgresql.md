---
title: Configuring PostgreSQL
labels:
    - postgresql
    - database
toc: true
confluence:
    ajs-parent-page-id: '16810053'
    ajs-parent-page-title: Database
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Configuring+PostgreSQL
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Configuring+PostgreSQL'
    page_id: '16810011'
    shortlink: G4AAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/G4AAAQ'
    source_link: /display/ADMINDOC58/Configuring+PostgreSQL
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 12:44'
        message: ''
        version: '81'
    - 
        author: Benoit Delbosc
        date: '2015-10-01 16:04'
        message: ''
        version: '80'
    - 
        author: Solen Guitter
        date: '2015-02-19 10:35'
        message: max_prepared_transactions clarification
        version: '79'
    - 
        author: Florent Guillaume
        date: '2014-04-11 20:14'
        message: ''
        version: '78'
    - 
        author: Florent Guillaume
        date: '2014-04-11 20:13'
        message: ''
        version: '77'
    - 
        author: Solen Guitter
        date: '2014-03-26 11:11'
        message: fixed typos
        version: '76'
    - 
        author: Solen Guitter
        date: '2014-03-18 11:13'
        message: ''
        version: '75'
    - 
        author: Benoit Delbosc
        date: '2013-11-25 16:58'
        message: ''
        version: '74'
    - 
        author: Solen Guitter
        date: '2013-11-22 10:44'
        message: ''
        version: '73'
    - 
        author: Solen Guitter
        date: '2013-11-22 10:44'
        message: ''
        version: '72'
    - 
        author: Florent Guillaume
        date: '2013-10-22 12:36'
        message: ''
        version: '71'
    - 
        author: Solen Guitter
        date: '2013-10-21 16:42'
        message: Added PostgreSQL version 9.3.
        version: '70'
    - 
        author: Solen Guitter
        date: '2013-10-10 16:49'
        message: ''
        version: '69'
    - 
        author: Benoit Delbosc
        date: '2013-09-27 17:32'
        message: ''
        version: '68'
    - 
        author: Florent Guillaume
        date: '2013-06-06 18:49'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '67'
    - 
        author: Florent Guillaume
        date: '2013-06-06 18:49'
        message: ''
        version: '66'
    - 
        author: Florent Guillaume
        date: '2013-06-06 18:40'
        message: ''
        version: '65'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:36'
        message: ''
        version: '64'
    - 
        author: Benoit Delbosc
        date: '2013-05-03 10:42'
        message: ''
        version: '63'
    - 
        author: Benoit Delbosc
        date: '2013-05-03 10:26'
        message: Update the reporting problems procedure
        version: '62'
    - 
        author: Benoit Delbosc
        date: '2013-05-03 10:22'
        message: ''
        version: '61'
    - 
        author: Benoit Delbosc
        date: '2013-05-03 09:38'
        message: ''
        version: '60'
    - 
        author: Florent Guillaume
        date: '2013-01-26 18:03'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '59'
    - 
        author: Florent Guillaume
        date: '2013-01-26 18:03'
        message: ''
        version: '58'
    - 
        author: Benoit Delbosc
        date: '2012-10-02 18:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '57'
    - 
        author: Benoit Delbosc
        date: '2012-10-02 18:08'
        message: more reporting stats
        version: '56'
    - 
        author: Benoit Delbosc
        date: '2012-09-24 14:51'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '55'
    - 
        author: Benoit Delbosc
        date: '2012-09-24 14:51'
        message: Migrated to Confluence 4.0
        version: '54'
    - 
        author: Benoit Delbosc
        date: '2012-09-24 14:51'
        message: ''
        version: '53'
    - 
        author: Benoit Delbosc
        date: '2012-08-30 14:05'
        message: ''
        version: '52'
    - 
        author: Benoit Delbosc
        date: '2012-07-04 12:02'
        message: update mass import index creation for 5.5
        version: '51'
    - 
        author: Benoit Delbosc
        date: '2012-07-02 15:01'
        message: ''
        version: '50'
    - 
        author: Solen Guitter
        date: '2012-05-10 12:10'
        message: ''
        version: '49'
    - 
        author: Solen Guitter
        date: '2012-05-10 11:16'
        message: Added related pages
        version: '48'
    - 
        author: Mariana Cedica
        date: '2012-03-15 12:59'
        message: ''
        version: '47'
    - 
        author: Mariana Cedica
        date: '2012-03-15 12:57'
        message: ''
        version: '46'
    - 
        author: stan
        date: '2012-02-22 18:24'
        message: ''
        version: '45'
    - 
        author: Benoit Delbosc
        date: '2012-01-27 11:51'
        message: Adding postgresql 8.4 unaccent contrib compilation
        version: '44'
    - 
        author: Benoit Delbosc
        date: '2012-01-12 10:44'
        message: adding more sql for reporting pb
        version: '43'
    - 
        author: Florent Guillaume
        date: '2011-12-13 18:31'
        message: ''
        version: '42'
    - 
        author: Solen Guitter
        date: '2011-12-10 09:42'
        message: ''
        version: '41'
    - 
        author: Solen Guitter
        date: '2011-10-28 10:59'
        message: ''
        version: '40'
    - 
        author: Benoit Delbosc
        date: '2011-10-27 10:48'
        message: explain how to log slow queries
        version: '39'
    - 
        author: Benoit Delbosc
        date: '2011-10-12 10:31'
        message: Adding index information when reporting problem.
        version: '38'
    - 
        author: Benoit Delbosc
        date: '2011-10-12 10:27'
        message: ''
        version: '37'
    - 
        author: Julien Carsique
        date: '2011-08-11 18:20'
        message: ''
        version: '36'
    - 
        author: Florent Guillaume
        date: '2011-08-03 12:11'
        message: ''
        version: '35'
    - 
        author: Laurent Doguin
        date: '2011-08-02 14:44'
        message: add accent unsensitive search configuration details
        version: '34'
    - 
        author: Solen Guitter
        date: '2011-04-01 09:53'
        message: ''
        version: '33'
    - 
        author: Wojciech Sulejman
        date: '2011-03-08 20:41'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2011-03-04 17:22'
        message: ''
        version: '31'
    - 
        author: Benoit Delbosc
        date: '2011-02-11 11:27'
        message: 'Add SQL queries to get user count, index ratio and cpu speed'
        version: '30'
    - 
        author: Florent Guillaume
        date: '2010-11-16 16:05'
        message: ''
        version: '29'
    - 
        author: Olivier Grisel
        date: '2010-11-16 15:51'
        message: ''
        version: '28'
    - 
        author: Julien Carsique
        date: '2010-10-29 18:13'
        message: moved driver information to NXDOC/Configuring+Nuxeo+EP
        version: '27'
    - 
        author: Julien Carsique
        date: '2010-10-29 12:14'
        message: Add jdbc driver information
        version: '26'
    - 
        author: Florent Guillaume
        date: '2010-09-26 18:49'
        message: ''
        version: '25'
    - 
        author: Florent Guillaume
        date: '2010-08-25 15:07'
        message: ''
        version: '24'
    - 
        author: Florent Guillaume
        date: '2010-08-25 15:04'
        message: put Two-phase commit first as it's the most common error
        version: '23'
    - 
        author: Florent Guillaume
        date: '2010-08-13 15:32'
        message: ''
        version: '22'
    - 
        author: Florent Guillaume
        date: '2010-08-13 15:28'
        message: ''
        version: '21'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 15:28'
        message: ''
        version: '20'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 15:25'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:42'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:23'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:13'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:13'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:08'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:50'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:10'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:04'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:20'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:38'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:22'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:17'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:11'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:09'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

Nuxeo supports the following PostgreSQL versions:

{{! multiexcerpt name='supported-PostgreSQL'}}

PostgreSQL 8.4, 9.0, 9.1, 9.2 and 9.3.

{{! /multiexcerpt}}

We always recommend that you use the latest stable version, which is PostgreSQL 9.3 at the time of this writing.

PostgreSQL 8.4 is extremely old and really should not be used.&nbsp;PostgreSQL 9.0 and 9.1 are already dated and should be upgraded for better performance.

The database needs to be configured to work properly with Nuxeo. Some settings **must** be changed in order for Nuxeo to work. Other settings _should_ be changed in order for Nuxeo to have good performance.

This FAQ will give you some hints to configure your database, but please refer to your DBA or the PostgreSQL documentation for more information ([http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server](http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server)).

Most settings have to be changed in the `postgresql.conf` file. Some SQL commands may have to be executed directly at the PostgreSQL console (`psql`).

## Mandatory Changes

### Two-Phase Commit

You shouldn't need to change this starting with Nuxeo 5.8 because two-phase commit isn't used in basic configurations. However, if you've disabled single datasource ( `nuxeo.db.singleDataSource=`) to use XA (see the [JDBC Datasource Configuration]({{page page='jdbc-datasource-configuration'}}) documentation for more on this), you will need to update the default by default and needs to have the `max_prepared_transactions`. You can use the same value as `max_connections`.

```
max_prepared_transactions = 100

```

</div><div class="column medium-4">{{#> panel heading='On this page'}} {{/panel}}</div></div>

### Implicit Casts

Jena (used for relations and comments) and jBPM (used for workflows) assume some implicit value casting in the SQL they generate. However since PostgreSQL 8.3 the database is much stricter than PostgreSQL 8.2 with respect to value casting.

To make Nuxeo work with PostgreSQL >= 8.3, you must therefore execute the following commands in your PostgreSQL console when connected to the `template1` database, so that any database created afterward will come with the required CASTs (if your database is already created, execute the commands in your database as well):

```
CREATE FUNCTION pg_catalog.text(integer) RETURNS text STRICT IMMUTABLE LANGUAGE SQL AS 'SELECT textin(int4out($1));';
CREATE CAST (integer AS text) WITH FUNCTION pg_catalog.text(integer) AS IMPLICIT;
COMMENT ON FUNCTION pg_catalog.text(integer) IS 'convert integer to text';

CREATE FUNCTION pg_catalog.text(bigint) RETURNS text STRICT IMMUTABLE LANGUAGE SQL AS 'SELECT textin(int8out($1));';
CREATE CAST (bigint AS text) WITH FUNCTION pg_catalog.text(bigint) AS IMPLICIT;
COMMENT ON FUNCTION pg_catalog.text(bigint) IS 'convert bigint to text';

```

{{#> callout type='warning' }}

This change is mandatory for PostgreSQL >= 8.3 since casts have been simplified. If you don't change this option you will have `operator does not exist` exceptions.

{{/callout}}

Possible errors if you don't update the casts as described above are:

```
org.postgresql.util.PSQLException: ERROR: operator does not exist: integer = character varying

org.postgresql.util.PSQLException: ERROR: operator does not exist: bigint = character varying

com.hp.hpl.jena.db.RDFRDBException: Exception while checking db format - com.hp.hpl.jena.db.RDFRDBException: Internal SQL error in driver - org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block

com.hp.hpl.jena.db.RDFRDBException: Internal SQL error in driver - org.postgresql.util.PSQLException: ERROR: current transaction is aborted, commands ignored until end of transaction block

```

For further details, please see [this url](http://petereisentraut.blogspot.com/2008/03/readding-implicit-casts-in-postgresql.html). You might also be interested in [this migration helper](http://okbob.blogspot.com/2009/02/83-migration-helper.html).

### Language plpgsql (PostgreSQL < 9.0)

If not already done, if you have PostgreSQL < 9.0 you must enable the `plpgsql` language:

```
CREATE LANGUAGE 'plpgsql';

```

Execute this on the `template1` database, so that any database created afterward will get the required language. If your database is already created, execute the command in your database as well.

If you get the following error then it just means that the language is already created (which is the case since PostgreSQL 9.0) and there is nothing further to do:

```
ERROR:  language "plpgsql" already exists

```

### Create the Role and Database for Nuxeo

For instance (please change the password and the `nuxeo.conf` file of your instance accordingly):

```
$ createuser -U postgres -W -P nuxeo
$ createdb -U postgres -W -O nuxeo -E UTF8 nuxeo

```

Or from the psql command prompt:

```
CREATE ROLE nuxeo WITH PASSWORD 'nuxeo' LOGIN;
CREATE DATABASE nuxeo ENCODING 'UTF8' OWNER nuxeo;

```

{{#> callout type='warning' }}

Note that using the `UTF8` encoding for your database is important.

{{/callout}}

## Performance Tuning

### Shared Buffers and System Cache

One of the most important thing for PostgreSQL is to have lots of shared buffers along with free memory that can be used by the system cache.

Refer to the section "Adapt your configuration to your hardware" to get the correct value.

If you plan to use 1&nbsp;GB of shared buffers, update the following property in your `postgresql.conf` file:

```
shared_buffers = 1GB

```

<span style="color: rgb(51,51,51);">If you use PostgreSQL < 9.3 the</span> shared memory must be available on the system side using sysctl, you need to enable a little bit more at the OS level, for instance try 1&nbsp;GB + 128&nbsp;MB:

```
sysctl kernel.shmmax=1207959552

```

Then restart the PostgreSQL.
If there is no enough shared memory you will have an explicit error message and you should try with a bigger kernel.shmmax value.

Once PostgreSQL is started the retained shmmax value, should be registered in the `/etc/sysctl.conf` file by adding the following line.

```
kernel.shmmax = <SHMMAX_VALUE>

```

PostgreSQL needs to know how much memory the system will use for disk caching. This is used as a hint when executing queries, this memory *is not allocated* by PostgreSQL.

To set `effective_cache_size` value, you need to run your application once and check how much memory is used by system cache. This can be done using the free command and using the&nbsp;`free`&nbsp;value for&nbsp;`-/+ buffers/cache`.

```
effective_cache_size = 1536MB

```

### Memory for Workers

Increasing the `work_mem` parameter allows PostgreSQL to do larger in-memory sorts which is much faster than disk sorts. Have in mind that `work_mem` size will be taken by each connection (a pool of 20 connections will take up to 20 * work_mem).

```
work_mem = 12MB

```

Increasing the `maintenance_work_mem` will speed up the vacuum procedure.

```
maintenance_work_mem = 512MB

```

### Buffering Writes

The default `wal_buffers` can be increase to improve write access time. <span style="color: rgb(51,51,51);">Increasing the checkpoint segments and completion target helps to spread out the writes.</span>

```
wal_buffers = 16MB
checkpoint_segments = 32
checkpoint_completion_target=0.8 
```

### Index vs Table Scan

The&nbsp;`random_page_cost`&nbsp;parameter influences this query planner's choice. The value to use depends on your disk IO, here are some advices:

```
# random_page_cost = 4 # Slow disk AWS EBS
# random_page_cost = 2 # Recent HD
# random_page_cost = 1 # SSD
```

### Updating the Planner Statistics

PostgreSQL computes statistics on table content in order to plan for the best performance when executing queries with joins and complex filters. The default configuration in PostgreSQL <= 8.3 is&nbsp;`default_statistics_target`&nbsp;set to the value 10 which can lead to not accurate enough estimates. In 8.4 this value is now set to 100 by default. We recommend a higher value like 500:

```
default_statistics_target = 500
```

If the database is already populated you need to execute&nbsp;`ANALYZE`&nbsp;to update the statistics.

### Vacuuming

The autovacuum is enabled by default since PostgreSQL 8.3.

Exceptionally, a full vacuum can be done at downtime to recover disk space, it should be followed with a&nbsp;`reindexdb`&nbsp;command.

### Monitoring

We recommend the following setting to have a meaningful log in production

```
log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d '
log_min_duration_statement = 400
log_checkpoints=on
log_lock_waits=on
log_temp_files=0
log_autovacuum_min_duration=0
log_statement = ddl
track_functions=pl
```

&nbsp;

Also to have an effective monitoring you should install the following extensions : pg_stat_statements, pg_buffercache

1.  Install postgresql-contrib package.

    ```
    sudo apt-get install postgresql-contrib
    ```

2.  Login to you database as postgres user and create the extensions (require PostgreSQL >= 9.1).

    ```
    sudo su postgres -c'psql -U postgres -d nuxeo -c"CREATE EXTENSION pg_buffercache;"'
    sudo su postgres -c'psql -U postgres -d nuxeo -c"CREATE EXTENSION pg_stat_statements;"'
    ```

3.  <pre>Update the configuration.</pre>

    ```
    shared_preload_libraries = 'pg_stat_statements, auto_explain'
    # custom_variable_classes = 'pg_stat_statements, auto_explain' # uncomment if you are on PostgreSQL 9.1
    pg_stat_statements.max = 10000
    pg_stat_statements.track = top
    auto_explain.log_min_duration = -1
    auto_explain.log_analyze = 'false'
    ```

4.  Restart the database.

    ```
    sudo /etc/init.d/postgres restart
    ```

See the PostgreSQL section of the&nbsp; [Monitoring and Maintenance]({{page page='monitoring-and-maintenance'}}) &nbsp;page.

### Adapt Your Configuration to Your Hardware

Here are some values that can be used as a starting point for a dedicated server depending on the amount of memory.

<table><tbody><tr><th colspan="1">Amount of RAM</th><th colspan="1">4g</th><th colspan="1">8g</th><th colspan="1">16g</th><th colspan="1">32g</th></tr><tr><td colspan="1">shared_buffers</td><td colspan="1">1g</td><td colspan="1">2g</td><td colspan="1">4g</td><td colspan="1">8g</td></tr><tr><td colspan="1">effective_cache_size</td><td colspan="1">1536m</td><td colspan="1">4g</td><td colspan="1">8g</td><td colspan="1">16g</td></tr><tr><td colspan="1">work_mem</td><td colspan="1">12m</td><td colspan="1">12m</td><td colspan="1">16m</td><td colspan="1">20m</td></tr><tr><td colspan="1">maintenance_work_mem</td><td colspan="1">512m</td><td colspan="1">1g</td><td colspan="1">1g</td><td colspan="1">1g</td></tr><tr><td colspan="1">max_connections</td><td colspan="1">63</td><td colspan="1">103</td><td colspan="1">153</td><td colspan="1">203</td></tr></tbody></table>

## Specific Configuration

### Accent-Insensitive Full-Text Search

If you want accent-insensitive fulltext search, you'll need to install the&nbsp;_unaccent_&nbsp;contribution, create a new text search configuration, and specify its use in Nuxeo.

_Unaccent_&nbsp;is described here&nbsp;[http://www.postgresql.org/docs/9.0/static/unaccent.html](http://www.postgresql.org/docs/9.0/static/unaccent.html).

Install it by running&nbsp;`unaccent.sql`&nbsp;script. For Ubuntu users, this file is located at&nbsp;`/usr/share/postgresql/9.0/contrib/unaccent.sql`

Connect to your database and run the following instructions:

```
CREATE TEXT SEARCH CONFIGURATION fr ( COPY = french );
ALTER TEXT SEARCH CONFIGURATION fr ALTER MAPPING FOR asciihword, asciiword, hword_asciipart, hword, hword_part, word WITH unaccent, french_stem;
```

Then replace in your&nbsp;`default-repository-config.xml`&nbsp;file the&nbsp;`french`&nbsp;analyzer by the one you just defined (`fr`&nbsp;in this example).

### Mass Import Specific Tuning

When doing mass import you can disable the fulltext trigger and fulltext index. They must be dropped after a successful login on a running Nuxeo DM because DDL SQL commands are executed on the first access.

```
ALTER TABLE fulltext DISABLE TRIGGER nx_trig_ft_update;
DROP INDEX IF EXISTS fulltext_fulltext_idx;
DROP INDEX IF EXISTS fulltext_fulltext_description_idx;
DROP INDEX IF EXISTS fulltext_fulltext_title_idx;

```

After the import you can update the fulltext column like this:

```
ALTER TABLE fulltext ENABLE TRIGGER nx_trig_ft_update;
-- Let the trigger update the fulltext column
UPDATE fulltext SET fulltext = ''::TSVECTOR WHERE length(fulltext) is NULL;
-- For Nuxeo up to 5.4
CREATE INDEX fulltext_fulltext_idx ON fulltext USING gin (fulltext);
-- For Nuxeo >= 5.5
CREATE INDEX fulltext_fulltext_title_idx ON fulltext USING gin (nx_to_tsvector(fulltext_title::character varying));
CREATE INDEX fulltext_fulltext_description_idx ON fulltext USING gin (nx_to_tsvector(fulltext_description::character varying));
CREATE INDEX fulltext_fulltext_idx ON fulltext USING gin (nx_to_tsvector(fulltext::character varying));

```

Changing *temporary* the PostgreSQL configuration during the import provides performance benefits:

```
full_page_writes = off
fsync = off
synchronous_commit = off

```

{{#> callout type='warning' }}

**Do not do this if there is already any data you care about in any database on your PostgreSQL cluster,** Please refer to the [PostgreSQL reference manual](http://www.postgresql.org/docs/8.3/interactive/runtime-config-wal.html).

{{/callout}}

### Using uuid idType

If you want to use the PostgreSQL&nbsp;`uuid`&nbsp;type instead of the default&nbsp;`varchar(36)`&nbsp;(this is the case when you set&nbsp;`nuxeo.vcs.idtype=uuid`&nbsp;in the`nuxeo.conf`&nbsp;file) you need to create a new operator to support&nbsp;`GIN`&nbsp;index on&nbsp;`uuid[]`&nbsp;type.

```
CREATE OPERATOR CLASS _uuid_ops DEFAULT 
   FOR TYPE _uuid USING gin AS 
   OPERATOR 1  &&(anyarray, anyarray), 
   OPERATOR 2  @>(anyarray, anyarray), 
   OPERATOR 3  <@(anyarray, anyarray), 
   OPERATOR 4  =(anyarray, anyarray), 
   FUNCTION 1  uuid_cmp(uuid, uuid), 
   FUNCTION 2  ginarrayextract(anyarray, internal, internal), 
   FUNCTION 3  ginqueryarrayextract(anyarray, internal, smallint, internal, internal, internal, internal), 
   FUNCTION 4  ginarrayconsistent(internal, smallint, anyarray, integer, internal, internal, internal, internal), 
   STORAGE uuid;
```

Possible error if you don't create the operator described above is:

```
ERROR: data type uuid[] has no default operator class for access method "gin"
```

### Reporting Problems

If you have a database configuration problem and you want to fill a JIRA ticket, there are some information to report:

*   The PostgreSQL server state: is it dedicated or shared, which OS, how many CPU, RAM, is it a virtual machine...

*   How much memory is available on the database server (`free -m` output).

*   Amount of Nuxeo documents and PostgreSQL configuration. Using the following&nbsp; commands:
    1.  Login on your database with the postgres user.

        ```
        sudo su - postgres
        ```

    2.  Get the Nuxeo SQL script to dump your configuration.

        ```
        wget --no-check-certificate https://gist.github.com/bdelbosc/5507796/raw/dump-nuxeo-postgres-config.sql
        ```

    3.  Execute the SQL script with psql against the Nuxeo DB (not the default database named postgres).

        ```
        psql nuxeo -f dump-nuxeo-postgres-config.sql
        ```

*   Attach the output file located in `/tmp/pgconf.txt` into the JIRA ticket.&nbsp;An example of such a result file is [here]({{file name='pgconf.txt'}}), so that you can check that yours has the correct format.
*   If you are monitoring the slowest queries (See monitoring section) you can zip and attach the `postgresql` log file to the JIRA ticket.

&nbsp;

* * *