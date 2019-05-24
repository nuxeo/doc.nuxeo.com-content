---
title: PostgreSQL
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - lts2016-ok
    - postgresql
    - database
    - kleturc
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3342340'
    ajs-parent-page-title: Database Configuration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: PostgreSQL
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/PostgreSQL'
    page_id: '3343487'
    shortlink: fwQz
    shortlink_source: 'https://doc.nuxeo.com/x/fwQz'
    source_link: /display/NXDOC/PostgreSQL
tree_item_index: 100
version_override:
    LTS 2015: 710/admindoc/postgresql
    '6.0': 60/admindoc/configuring-postgresql
    '5.8': 58/admindoc/configuring-postgresql
history:
    -
        author: Solen Guitter
        date: '2016-09-02 09:11'
        message: ''
        version: '109'
    -
        author: Florent Guillaume
        date: '2016-08-16 14:50'
        message: remove mention of single datasource
        version: '108'
    -
        author: Solen Guitter
        date: '2016-05-13 14:40'
        message: ''
        version: '107'
    -
        author: Manon Lumeau
        date: '2016-03-25 16:07'
        message: ''
        version: '106'
    -
        author: Solen Guitter
        date: '2016-01-04 09:51'
        message: ''
        version: '105'
    -
        author: Solen Guitter
        date: '2015-12-14 10:17'
        message: ''
        version: '104'
    -
        author: Solen Guitter
        date: '2015-12-14 10:16'
        message: ''
        version: '103'
    -
        author: Solen Guitter
        date: '2015-12-14 10:15'
        message: ''
        version: '102'
    -
        author: Solen Guitter
        date: '2015-12-14 10:14'
        message: ''
        version: '101'
    -
        author: Florent Guillaume
        date: '2015-12-09 14:22'
        message: details
        version: '100'
    -
        author: Alain Escaffre
        date: '2015-12-04 13:42'
        message: ''
        version: '99'
    -
        author: Solen Guitter
        date: '2015-10-14 14:36'
        message: ''
        version: '98'
    -
        author: Benoit Delbosc
        date: '2015-10-01 16:00'
        message: ''
        version: '97'
    -
        author: Thibaud Arguillere
        date: '2015-07-22 17:36'
        message: ''
        version: '96'
    -
        author: Solen Guitter
        date: '2015-03-25 10:04'
        message: ''
        version: '95'
    -
        author: Julien Carsique
        date: '2015-03-24 11:05'
        message: ''
        version: '94'
    -
        author: Maxime Hilaire
        date: '2015-03-23 22:30'
        message: ''
        version: '93'
    -
        author: Florent Guillaume
        date: '2015-02-18 14:05'
        message: max_prepared_transactions clarification
        version: '92'
    -
        author: Solen Guitter
        date: '2015-02-05 15:49'
        message: ''
        version: '91'
    -
        author: Solen Guitter
        date: '2014-12-12 18:00'
        message: ''
        version: '90'
    -
        author: Solen Guitter
        date: '2014-12-12 09:54'
        message: ''
        version: '89'
    -
        author: Joshua Fletcher
        date: '2014-12-11 02:09'
        message: "PG doesn't support \"m\" or \"g\" for these values, you need to use \"MB\" or \"GB\". This part of the doc was a little confusing as a new user."
        version: '88'
    -
        author: Solen Guitter
        date: '2014-10-13 17:34'
        message: Updated supported versions for 6.0
        version: '87'
    -
        author: Solen Guitter
        date: '2014-07-24 15:26'
        message: Moved limitations from independent page into postgreSQL page
        version: '86'
    -
        author: Solen Guitter
        date: '2014-04-17 10:04'
        message: ''
        version: '85'
    -
        author: Florent Guillaume
        date: '2014-04-11 20:16'
        message: ''
        version: '84'
    -
        author: Julien Carsique
        date: '2014-03-25 14:11'
        message: ''
        version: '83'
    -
        author: Julien Carsique
        date: '2014-03-25 14:09'
        message: ''
        version: '82'
    -
        author: Solen Guitter
        date: '2014-03-18 11:08'
        message: ''
        version: '81'
    -
        author: Benoit Delbosc
        date: '2013-11-25 16:57'
        message: ''
        version: '80'
    -
        author: Benoit Delbosc
        date: '2013-11-21 11:10'
        message: ''
        version: '79'
    -
        author: Benoit Delbosc
        date: '2013-11-20 15:33'
        message: ''
        version: '78'
    -
        author: Benoit Delbosc
        date: '2013-11-20 15:01'
        message: ''
        version: '77'
    -
        author: Benoit Delbosc
        date: '2013-11-20 14:41'
        message: ''
        version: '76'
    -
        author: Benoit Delbosc
        date: '2013-11-20 14:28'
        message: ''
        version: '75'
    -
        author: Benoit Delbosc
        date: '2013-11-20 14:26'
        message: update recommendations
        version: '74'
    -
        author: Benoit Delbosc
        date: '2013-11-20 12:53'
        message: Update recommendation
        version: '73'
    -
        author: Benoit Delbosc
        date: '2013-11-20 11:24'
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
        message: "put Two-phase commit first as it's the most common error"
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
Nuxeo supports the following PostgreSQL version:

{{{multiexcerpt 'PostgreSQL-supported' page='Compatibility Matrix'}}}


The database needs to be configured to work properly with Nuxeo. Some settings **must** be changed in order for Nuxeo to work. Other settings _should_ be changed in order for Nuxeo to have good performance.

This FAQ will give you some hints to configure your database, but please refer to your DBA or the PostgreSQL documentation for more information ([http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server](http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server)).

Most settings have to be changed in the `postgresql.conf` file. Some SQL commands may have to be executed directly at the PostgreSQL console (`psql`).

## Mandatory Changes

### Two-Phase Commit

You shouldn't need to change this, because two-phase commit (XA) isn't used in basic configurations.

However, if you use XA datasources (see the [JDBC Datasource Configuration documentation]({{page page='jdbc-datasource'}}) for more on this), you will need to update the default `max_prepared_transactions` settings. You can use the same value as `max_connections`.

```
max_prepared_transactions = 100
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

### Secure the Authentication Method

Edit the file `pg_hba.conf`, make sure that the `nuxeo` user (or `all` users, if the `nuxeo` user is not individually listed), have an authentication `METHOD` of `md5`, rather than `ident`. Otherwise you will have some `FATAL: Ident authentication failed for user "nuxeo"` errors in the logs.

```
# TYPE  DATABASE    USER        CIDR-ADDRESS          METHOD

# "local" is for Unix domain socket connections only
local   all         all                               md5
# IPv4 local connections:
host    all         all         127.0.0.1/32          md5
```

## Performance Tuning

### Shared Buffers and System Cache

One of the most important thing for PostgreSQL is to have lots of shared buffers along with free memory that can be used by the system cache.

Refer to the section [Adapt Your Configuration to Your Hardware](#adapt-your-configuration-to-your-hardware) to get the correct value.

If you plan to use 1&nbsp;GB of shared buffers, update the following property in your `postgresql.conf` file:

```
shared_buffers = 1GB

```

Then restart PostgreSQL.

If there is no enough shared memory you will have an explicit error message and you should try with a bigger `kernel.shmmax` value.

Once PostgreSQL starts properly with the chosen `kernel.shmmax` value, it should be registered in the `/etc/sysctl.conf` file by adding the following line.

```
kernel.shmmax = <SHMMAX_VALUE>

```

Using `effective_cache_size` PostgreSQL is informed of how much memory the system will use for disk caching. This is used as a hint when executing queries, note that this memory _is not allocated_ by PostgreSQL itself.

To set `effective_cache_size` value, you need to run your application once and check how much memory is used by system cache. This can be done using the free command and using the `free` value for `-/+ buffers/cache`. Then you can set this value in the configuration:

```
effective_cache_size = 1536MB

```

### Memory for Workers

Increasing the `work_mem` parameter allows PostgreSQL to do larger in-memory sorts which is much faster than disk sorts. Keep in mind that `work_mem` size will be taken up by each connection (a pool of 20 connections will take up to 20 * work_mem).

```
work_mem = 12MB

```

Increasing the `maintenance_work_mem` will speed up the vacuum procedure.

```
maintenance_work_mem = 512MB

```

### Buffering Writes

The default `wal_buffers` can be increase to improve write access time. Increasing the checkpoint segments and completion target helps to spread out the writes.

```
wal_buffers = 16MB
checkpoint_segments = 32
checkpoint_completion_target=0.8
```

### Index vs Table Scan

The `random_page_cost` parameter influences this query planner's choice. The value to use depends on your disk IO, here are some advices:

```
# random_page_cost = 4 # Slow disk AWS EBS
# random_page_cost = 2 # Recent HD
# random_page_cost = 1 # SSD
```

### Updating the Planner Statistics

PostgreSQL computes statistics on table content in order to plan for the best performance when executing queries with joins and complex filters. The default configuration is `default_statistics_target` set to the value 100 which can lead to not accurate enough estimates. We recommend a higher value like 500:

```
default_statistics_target = 500

```

If the database is already populated you need to execute `ANALYZE` to update the statistics.

### Vacuuming

The autovacuum is enabled by default in PostgreSQL.

Exceptionally, a full vacuum can be done at downtime to recover disk space, it should be followed with a `reindexdb` command.

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

Also to have an effective monitoring you should install the following extensions: pg_stat_statements, pg_buffercache

1.  Install postgresql-contrib package.

    ```
    sudo apt-get install postgresql-contrib
    ```

2.  Login to your database as postgres user and create the extensions.

    ```
    sudo su postgres -c'psql -U postgres -d nuxeo -c"CREATE EXTENSION pg_buffercache;"'
    sudo su postgres -c'psql -U postgres -d nuxeo -c"CREATE EXTENSION pg_stat_statements;"'
    ```

3.  <pre>Update the configuration.</pre>

    ```
    shared_preload_libraries = 'pg_stat_statements, auto_explain'
    pg_stat_statements.max = 10000
    pg_stat_statements.track = top
    auto_explain.log_min_duration = -1
    auto_explain.log_analyze = 'false'
    ```

4.  Restart the database.

    ```
    sudo /etc/init.d/postgresql restart
    ```

See the PostgreSQL section of the [Monitoring and Maintenance]({{page page='monitoring-and-maintenance'}}) page.

### Adapt Your Configuration to Your Hardware

Here are some values that can be used as a starting point for a dedicated server depending on the amount of memory.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Amount of RAM</th><th colspan="1">4&nbsp;GB</th><th colspan="1">8&nbsp;GB</th><th colspan="1">16&nbsp;GB</th><th colspan="1">32&nbsp;GB</th></tr><tr><td colspan="1">shared_buffers</td><td colspan="1">1GB</td><td colspan="1">2GB</td><td colspan="1">4GB</td><td colspan="1">8GB</td></tr><tr><td colspan="1">effective_cache_size</td><td colspan="1">1536MB</td><td colspan="1">4GB</td><td colspan="1">8GB</td><td colspan="1">16GB</td></tr><tr><td colspan="1">work_mem</td><td colspan="1">12MB</td><td colspan="1">12MB</td><td colspan="1">16MB</td><td colspan="1">20MB</td></tr><tr><td colspan="1">maintenance_work_mem</td><td colspan="1">512MB</td><td colspan="1">1GB</td><td colspan="1">1GB</td><td colspan="1">1GB</td></tr><tr><td colspan="1">max_connections</td><td colspan="1">63</td><td colspan="1">103</td><td colspan="1">153</td><td colspan="1">203</td></tr></tbody></table></div>

## Specific Configuration

### Accent-Insensitive Full-Text Search

If you want accent-insensitive full-text search, you'll need to install the _unaccent_ contribution, create a new text search configuration, and specify its use in Nuxeo.

_Unaccent_ is described here [https://www.postgresql.org/docs/current/static/unaccent.html](https://www.postgresql.org/docs/current/static/unaccent.html).

Install it by running `unaccent.sql` script. For Ubuntu users, this file is located at `/usr/share/postgresql/9.6/contrib/unaccent.sql`.

Connect to your database and run the following instructions:

```
CREATE TEXT SEARCH CONFIGURATION fr ( COPY = french );
ALTER TEXT SEARCH CONFIGURATION fr ALTER MAPPING FOR asciihword, asciiword, hword_asciipart, hword, hword_part, word WITH unaccent, french_stem;

```

Then replace in your `default-repository-config.xml` file the `french` analyzer by the one you just defined (`fr` in this example).

### Mass Import Specific Tuning

When doing mass import you can disable the full-text trigger and full-text index. They must be dropped after a successful login on a running Nuxeo DM because DDL SQL commands are executed on the first access.

```
ALTER TABLE fulltext DISABLE TRIGGER nx_trig_ft_update;
DROP INDEX IF EXISTS fulltext_fulltext_idx;
DROP INDEX IF EXISTS fulltext_fulltext_description_idx;
DROP INDEX IF EXISTS fulltext_fulltext_title_idx;

```

After the import you can update the full-text column like this:

```
ALTER TABLE fulltext ENABLE TRIGGER nx_trig_ft_update;
-- Let the trigger update the fulltext column
UPDATE fulltext SET fulltext = ''::TSVECTOR WHERE length(fulltext) is NULL;
CREATE INDEX fulltext_fulltext_title_idx ON fulltext USING gin (nx_to_tsvector(fulltext_title::character varying));
CREATE INDEX fulltext_fulltext_description_idx ON fulltext USING gin (nx_to_tsvector(fulltext_description::character varying));
CREATE INDEX fulltext_fulltext_idx ON fulltext USING gin (nx_to_tsvector(fulltext::character varying));

```

Changing _temporarily_ the PostgreSQL configuration during the import provides performance benefits:

```
full_page_writes = off
fsync = off
synchronous_commit = off

```

{{#> callout type='warning' }}

**Do not do this if there is already any data you care about in any database on your PostgreSQL cluster,** Please refer to the [PostgreSQL reference manual](https://www.postgresql.org/docs/current/static/runtime-config-wal.html).

{{/callout}}

### Using uuid idType

If you want to use the PostgreSQL `uuid` type instead of the default `varchar(36)` (this is the case when you set `nuxeo.vcs.idtype=uuid` in the `nuxeo.conf` file)
you need to create a new operator to support `GIN` index on `uuid[]` type.

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

## Limitations

PostgreSQL is very good, very fast, and is our reference database. To be completely honest it still has some limitations that other databases don't have:

*   Its full-text engine doesn't know how to do full-text phrase search, which means we have to use a slower and not completely equivalent workaround when phrase search is required ([NXP-6720](https://jira.nuxeo.com/browse/NXP-6720)).

## Reporting Problems

If you have a database configuration problem and you want to fill a JIRA ticket, there are some information to report:

*   The PostgreSQL server state: is it dedicated or shared, which OS, how many CPU, RAM, is it a virtual machine...

*   How much memory is available on the database server (`free -m` output).

*   Amount of Nuxeo documents and PostgreSQL configuration. Using the following commands:
    1.  Log in on your database with the postgres user.

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

        {{#> callout type='info' }}

        Note that this SQL script can generate some errors logs when optional tables are not present or depending on the PostgreSQL version. The result file is still relevant.

        {{/callout}}

*   Attach the output file located in `/tmp/pgconf.txt` into the JIRA ticket. An example of such a result file is [here]({{file name='pgconf.txt'}}), so that you can check that yours has the correct format.
*   If you are monitoring the slowest queries (See monitoring section) you can zip and attach the `postgresql` log file to the JIRA ticket.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Content'}}

- [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})
- [How to Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
