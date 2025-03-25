---
title: PostgreSQL
description: Nuxeo Platform supports PostgreSQL, read more about its configuration.
review:
    comment: ''
    date: '2025-03-18'
    status: ok
labels:
    - postgresql
    - database
    - kleturc
    - multiexcerpt-include
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
tree_item_index: 200
---
Nuxeo supports the following PostgreSQL version:

{{{multiexcerpt 'PostgreSQL-supported' page='Compatibility Matrix'}}}

The database needs to be configured to work properly with Nuxeo. Some settings **must** be changed in order for Nuxeo to work. Other settings _should_ be changed in order for Nuxeo to have good performance.

This FAQ will give you some hints to configure your database, but please refer to your DBA or the [PostgreSQL](http://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server]) documentation for more information.

Most settings have to be changed in the `postgresql.conf` file. Some SQL commands may have to be executed directly at the PostgreSQL console (`psql`).

## Mandatory Changes

### Two-Phase Commit

You shouldn't need to change this, because two-phase commit (XA) isn't used in basic configurations.

However, if you use XA datasources (see the [JDBC Datasource Configuration documentation]({{page page='jdbc-datasource'}}) for more on this), you will need to update the default `max_prepared_transactions` setting. You can use the same value as `max_connections`.

```properties
max_prepared_transactions = 100
```

### Create the Role and Database for Nuxeo

For instance (please change the password and the `nuxeo.conf` file of your instance accordingly):

```shell
sudo -u postgres createuser -P nuxeo
sudo -u postgres createdb -O nuxeo -E UTF8 nuxeo
```

Or from the `psql` command prompt:

```sql
CREATE ROLE nuxeo WITH PASSWORD 'nuxeo' LOGIN;
CREATE DATABASE nuxeo ENCODING 'UTF8' OWNER nuxeo;
```

{{#> callout type='warning' }}

Note that using the `UTF8` encoding for your database is important.

{{/callout}}

### Secure the Authentication Method

Edit the file `pg_hba.conf`, make sure that the `nuxeo` user (or `all` users, if the `nuxeo` user is not individually listed), have an authentication `METHOD` of `peer` and `scram-sha-256`:

```properties
# TYPE  DATABASE    USER        ADDRESS          METHOD

# "local" is for Unix domain socket connections only
local   all         all                          peer
# IPv4 local connections:
host    all         all         127.0.0.1/32     scram-sha-256
```

## TLS/SSL Configuration

If you have chosen to configure your PostgreSQL server to use TLS/SSL connections, then you should use the standard PostgreSQL JDBC connection parameters to specify the configuration parameters.

For a fully secure communication, use the `sslcert`, `sslkey`, and `sslrootcert` JDBC connection parameters with `sslmode=verify-full`.

For instance you could define:

```properties
nuxeo.db.jdbc.url=jdbc:postgresql://${nuxeo.db.host}:${nuxeo.db.port}/${nuxeo.db.name}?ssl=true&sslmode=verify-full&...
```

Please refer to the [PostgreSQL Documentation](https://jdbc.postgresql.org/documentation/head/connect.html) for more about the PostgreSQL JDBC connection parameters and more specifically to [SSL Client](https://jdbc.postgresql.org/documentation/head/ssl-client.html) for the SSL aspects.

## Performance Tuning

### Shared Buffers and System Cache

One of the most important thing for PostgreSQL is to have lots of shared buffers along with free memory that can be used by the system cache.

Refer to the section [Adapt Your Configuration to Your Hardware](#adapt-your-configuration-to-your-hardware) to get the correct value.

If you plan to use 1&nbsp;GB of shared buffers, update the following property in your `postgresql.conf` file:

```properties
shared_buffers = 1GB
```

Then restart PostgreSQL.

If there is no enough shared memory you will have an explicit error message and you should try with a bigger `kernel.shmmax` value.

Once PostgreSQL starts properly with the chosen `kernel.shmmax` value, it should be registered in the `/etc/sysctl.conf` file by adding the following line.

```properties
kernel.shmmax = <SHMMAX_VALUE>
```

Using `effective_cache_size` PostgreSQL is informed of how much memory the system will use for disk caching. This is used as a hint when executing queries, note that this memory _is not allocated_ by PostgreSQL itself.

To set `effective_cache_size` value, you need to run your application once and check how much memory is used by system cache. This can be done using the free command and using the `free` value for `-/+ buffers/cache`. Then you can set this value in the configuration:

```properties
effective_cache_size = 1536MB
```

### Memory for Workers

Increasing the `work_mem` parameter allows PostgreSQL to do larger in-memory sorts which is much faster than disk sorts. Keep in mind that `work_mem` size will be taken up by each connection (a pool of 20 connections will take up to 20 * work_mem).

```properties
work_mem = 12MB
```

Increasing the `maintenance_work_mem` will speed up the vacuum procedure.

```properties
maintenance_work_mem = 512MB
```

### Buffering Writes

The default `wal_buffers` can be increase to improve write access time.

```properties
wal_buffers = 16MB
```

### Index vs Table Scan

The `random_page_cost` parameter influences this query planner's choice. The value to use depends on your disk IO, here are some advices:

```properties
# random_page_cost = 4 # Slow disk AWS EBS
# random_page_cost = 2 # Recent HD
# random_page_cost = 1 # SSD
```

### Updating the Planner Statistics

PostgreSQL computes statistics on table content in order to plan for the best performance when executing queries with joins and complex filters. The default configuration is `default_statistics_target` set to the value 100, which can lead to not accurate enough estimates. We recommend a higher value like 500:

```properties
default_statistics_target = 500
```

If the database is already populated you need to execute `ANALYZE` to update the statistics.

### Vacuuming

The autovacuum is enabled by default in PostgreSQL.

Exceptionally, a full vacuum can be done at downtime to recover disk space, it should be followed with a `reindexdb` command.

### Monitoring

We recommend the following settings to have meaningful logs in production

```properties
log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d '
log_min_duration_statement = 400
log_checkpoints=on
log_lock_waits=on
log_temp_files=0
log_autovacuum_min_duration=0
log_statement = ddl
track_functions=pl
```

Also, to have an effective monitoring, you should install the following extensions: `pg_stat_statements` and `pg_buffercache`.

1. Install `postgresql-contrib` package.

    ```shell
    sudo apt-get install postgresql-contrib
    ```

2. Log in to your database as `postgres` user and create the extensions.

    ```shell
    sudo su postgres -c'psql -U postgres -d nuxeo -c"CREATE EXTENSION pg_buffercache;"'
    sudo su postgres -c'psql -U postgres -d nuxeo -c"CREATE EXTENSION pg_stat_statements;"'
    ```

3. Update the configuration.

    ```shell
    shared_preload_libraries = 'pg_stat_statements, auto_explain'
    pg_stat_statements.max = 10000
    pg_stat_statements.track = top
    auto_explain.log_min_duration = -1
    auto_explain.log_analyze = 'false'
    ```

4. Restart the database.

    ```shell
    sudo /etc/init.d/postgresql restart
    ```

### Adapt Your Configuration to Your Hardware

Here are some values that can be used as a starting point for a dedicated server, depending on the amount of memory.

| Amount of RAM        | 4 GB   | 8 GB | 16 GB | 32 GB |
| -------------------- | ------ | ---- | ----- | ----- |
| shared_buffers       | 1GB    | 2GB  | 4GB   | 8GB   |
| effective_cache_size | 1536MB | 4GB  | 8GB   | 16GB  |
| work_mem             | 12MB   | 12MB | 16MB  | 20MB  |
| maintenance_work_mem | 512MB  | 1GB  | 1GB   | 1GB   |
| max_connections      | 63     | 103  | 153   | 203   |

## Specific Configuration

### Accent-Insensitive Full-Text Search

If you want accent-insensitive full-text search, you'll need to install the _unaccent_ extension, create a new text search configuration, and specify its use in Nuxeo.

_Unaccent_ is described here: [https://www.postgresql.org/docs/current/static/unaccent.html](https://www.postgresql.org/docs/current/static/unaccent.html).

Connect to your database and run the following instructions:

```sql
CREATE EXTENSION IF NOT EXISTS "unaccent";
CREATE TEXT SEARCH CONFIGURATION fr ( COPY = french );
ALTER TEXT SEARCH CONFIGURATION fr ALTER MAPPING FOR asciihword, asciiword, hword_asciipart, hword, hword_part, word WITH unaccent, french_stem;
```

Then, set the [nuxeo.vcs.fulltext.analyzer.language]({{page page='configuration-parameters-index-nuxeoconf/#nuxeovcsfulltextsearchdisabled'}}) configuration parameter in the `nuxeo.conf` file (`fr` in this example).

### Mass Import Specific Tuning

When doing mass import you can disable the full-text trigger and full-text index. They must be dropped after a successful login on a running Nuxeo instance, because DDL SQL commands are executed on the first access.

```sql
ALTER TABLE fulltext DISABLE TRIGGER nx_trig_ft_update;
DROP INDEX IF EXISTS fulltext_fulltext_idx;
DROP INDEX IF EXISTS fulltext_fulltext_description_idx;
DROP INDEX IF EXISTS fulltext_fulltext_title_idx;
```

After the import, you can update the full-text column like this:

```sql
ALTER TABLE fulltext ENABLE TRIGGER nx_trig_ft_update;
-- Let the trigger update the fulltext column
UPDATE fulltext SET fulltext = ''::TSVECTOR WHERE length(fulltext) is NULL;
CREATE INDEX fulltext_fulltext_title_idx ON fulltext USING gin (nx_to_tsvector(fulltext_title::character varying));
CREATE INDEX fulltext_fulltext_description_idx ON fulltext USING gin (nx_to_tsvector(fulltext_description::character varying));
CREATE INDEX fulltext_fulltext_idx ON fulltext USING gin (nx_to_tsvector(fulltext::character varying));
```

Changing _temporarily_ the PostgreSQL configuration during the import provides performance benefits:

```properties
full_page_writes = off
fsync = off
synchronous_commit = off
```

{{#> callout type='warning' }}
**Do not do this if there is already any data you care about in any database on your PostgreSQL cluster**. Please refer to the [PostgreSQL reference manual](https://www.postgresql.org/docs/current/static/runtime-config-wal.html).
{{/callout}}

### Using uuid idType

If you want to use the PostgreSQL `uuid` type instead of the default `varchar(36)` (this is the case when you set `nuxeo.vcs.idtype=uuid` in the `nuxeo.conf` file),
you need to create a new operator to support `GIN` index on `uuid[]` type.

```sql
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

```shell
ERROR: data type uuid[] has no default operator class for access method "gin"
```

## Limitations

PostgreSQL is very good, very fast, and is our reference object-relational database. To be completely honest, it still has some limitations that other databases don't have:

* Its full-text engine doesn't know how to do full-text phrase search, which means we have to use a slower and not completely equivalent workaround when phrase search is required.

## Reporting Problems

If you have a database configuration problem and you want to fill a support case, there are some information to report:

* The PostgreSQL server state: is it dedicated or shared, which OS, how many CPU, RAM, is it a virtual machine...

* How much memory is available on the database server (`free -m` output).

* Amount of Nuxeo documents and PostgreSQL configuration. Using the following commands:
    1. Log in on your database with the postgres user.

        ```shell
        sudo su - postgres
        ```

    2. Get the Nuxeo SQL script to dump your configuration.

        ```shell
        wget --no-check-certificate https://gist.github.com/bdelbosc/5507796/raw/dump-nuxeo-postgres-config.sql
        ```

    3. Execute the SQL script with psql against the Nuxeo database (not the default database named `postgres`).

        ```shell
        psql nuxeo -f dump-nuxeo-postgres-config.sql
        ```

        {{#> callout type='info' }}
        Note that this SQL script can generate some errors logs when optional tables are not present or depending on the PostgreSQL version. The result file is still relevant.
        {{/callout}}

* Attach the output file located in `/tmp/pgconf.txt` into the support case. An example of such a result file is [here]({{file name='pgconf.txt'}}), so that you can check that yours has the correct format.
* If you are monitoring the slowest queries (See monitoring section) you can zip and attach the `postgresql` log file to the support case.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Content'}}

- [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})
- [How to Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
