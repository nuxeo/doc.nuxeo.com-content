---
title: Configuring Oracle
review:
    comment: ''
    date: ''
    status: ok
labels:
    - oracle
    - database
toc: true
confluence:
    ajs-parent-page-id: '16810053'
    ajs-parent-page-title: Database
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Configuring+Oracle
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Configuring+Oracle'
    page_id: '16810044'
    shortlink: PIAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/PIAAAQ'
    source_link: /display/ADMINDOC58/Configuring+Oracle
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:12'
        message: ''
        version: '40'
    - 
        author: Solen Guitter
        date: '2014-02-17 10:18'
        message: DB with no GRANT
        version: '39'
    - 
        author: Solen Guitter
        date: '2013-12-10 16:04'
        message: Added repository.clustering.enabled=true
        version: '38'
    - 
        author: Benoit Delbosc
        date: '2013-12-03 16:48'
        message: 'updating reporting procedure, storing the sql commands to a gist'
        version: '37'
    - 
        author: Solen Guitter
        date: '2013-10-10 16:52'
        message: Removed related topics from TOC
        version: '36'
    - 
        author: Benoit Delbosc
        date: '2013-06-04 12:09'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '35'
    - 
        author: Benoit Delbosc
        date: '2013-06-04 12:09'
        message: ''
        version: '34'
    - 
        author: Benoit Delbosc
        date: '2013-04-19 12:28'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '33'
    - 
        author: Benoit Delbosc
        date: '2013-04-19 12:28'
        message: ''
        version: '32'
    - 
        author: Thierry Martins
        date: '2013-03-08 17:09'
        message: add hibernate sequence paragraph
        version: '31'
    - 
        author: Benoit Delbosc
        date: '2013-01-23 11:41'
        message: ''
        version: '30'
    - 
        author: Benoit Delbosc
        date: '2012-12-03 16:41'
        message: ''
        version: '29'
    - 
        author: Florent Guillaume
        date: '2012-09-26 12:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '28'
    - 
        author: Florent Guillaume
        date: '2012-09-26 12:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '27'
    - 
        author: Florent Guillaume
        date: '2012-09-26 12:02'
        message: Migrated to Confluence 4.0
        version: '26'
    - 
        author: Florent Guillaume
        date: '2012-09-26 12:02'
        message: no GRANT ALTER TABLE exists
        version: '25'
    - 
        author: Benoit Delbosc
        date: '2012-09-24 16:24'
        message: ''
        version: '24'
    - 
        author: Benoit Delbosc
        date: '2012-09-24 16:21'
        message: Adding a reporting problems section
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-05-10 12:13'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-05-10 11:17'
        message: Added related pages
        version: '21'
    - 
        author: Solen Guitter
        date: '2012-03-28 18:27'
        message: Added TOC
        version: '20'
    - 
        author: Stéphane Lacoin
        date: '2012-03-28 17:53'
        message: ''
        version: '19'
    - 
        author: Florent Guillaume
        date: '2012-02-17 14:28'
        message: Amazon RDS
        version: '18'
    - 
        author: Florent Guillaume
        date: '2012-01-26 14:13'
        message: ''
        version: '17'
    - 
        author: Florent Guillaume
        date: '2012-01-26 13:59'
        message: ''
        version: '16'
    - 
        author: Antoine Taillefer
        date: '2011-12-23 19:02'
        message: ''
        version: '15'
    - 
        author: Stéphane Lacoin
        date: '2011-11-23 14:08'
        message: ''
        version: '14'
    - 
        author: Stéphane Lacoin
        date: '2011-11-23 14:05'
        message: ''
        version: '13'
    - 
        author: Wojciech Sulejman
        date: '2011-03-08 20:42'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-03-04 17:22'
        message: ''
        version: '11'
    - 
        author: Florent Guillaume
        date: '2011-01-18 15:34'
        message: ''
        version: '10'
    - 
        author: Florent Guillaume
        date: '2011-01-18 15:06'
        message: ''
        version: '9'
    - 
        author: Florent Guillaume
        date: '2010-12-23 15:45'
        message: ''
        version: '8'
    - 
        author: Florent Guillaume
        date: '2010-12-23 15:41'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2010-11-25 12:52'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2010-10-29 18:16'
        message: 'moved driver information to [NXDOC58:Configuring Nuxeo EP]'
        version: '5'
    - 
        author: Julien Carsique
        date: '2010-10-29 12:22'
        message: Add jdbc driver information
        version: '4'
    - 
        author: Florent Guillaume
        date: '2010-10-07 18:49'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2010-09-08 18:06'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2010-08-13 16:07'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

Nuxeo supports the following versions of Oracle:

{{! multiexcerpt name='supported-Oracle'}}

Oracle 10g R2 (10.2.0.5) and Oracle 11g R2 (11.2.0.1)

{{! /multiexcerpt}}

## Oracle Text (fulltext)

Oracle Text needs to be enabled in your database for fulltext indexing, please consult your Oracle documentation.

If you fail to install Oracle Text, you will get on startup the following error:

```
java.sql.SQLException: ORA-29833: indextype does not exist

```

In addition, if you want to configure specific lexers or word lists then check [http://download.oracle.com/docs/cd/B19306_01/text.102/b14218/cdatadic.htm](http://download.oracle.com/docs/cd/B19306_01/text.102/b14218/cdatadic.htm) for configuration parameters and syntax. Lexers and word lists are used by Nuxeo when configured in its `default-repository-config.xml` file.

## Grant on `DBMS_CRYPTO`

Since Nuxeo 5.3.2, you need to grant `DBMS_CRYPTO` execution (replace `nuxeo` with the database user):

</div><div class="column medium-4">{{#> panel heading='On this page'}} {{/panel}}</div></div>

```
GRANT EXECUTE ON SYS.DBMS_CRYPTO TO nuxeo;

```

Note that for Oracle running on Amazon RDS, `DBMS_CRYPTO` is now directly accessible and you should simply do:

```
GRANT EXECUTE ON DBMS_CRYPTO TO nuxeo;

```

This is due to optimizations now enabled on Oracle that need hashing functions (MD5), available in this package.

Possible errors if you don't do this grant are:

```
java.sql.SQLException: ORA-06550: line 1, column 7: PLS-00905: object NUXEO.NX_REBUILD_READ_ACLS is invalid

```

## Create Hibernate Sequence

If the first startup fails with the following error in your logs,

<pre>ERROR [org.hibernate.util.JDBCExceptionReporter] ORA-02289: sequence does not exist
</pre>

you need to run this statement as your Oracle user

```
CREATE SEQUENCE HIBERNATE_SEQUENCE;
```

## Grant on `V$SESSION` and `GV$SESSION`

If you use Nuxeo Clustering (`repository.clustering.enabled=true`), then you must make sure that your database user has access to the system views `V$SESSION` and `GV$SESSION` (replace `nuxeo` with the database user):

```
GRANT SELECT ON SYS.V_$SESSION TO nuxeo;
GRANT SELECT ON SYS.GV_$SESSION TO nuxeo;

```

You can check that this works as intended by doing, as the database user:

```
SELECT SID FROM V$SESSION WHERE SID = SYS_CONTEXT('USERENV', 'SID');
SELECT SID FROM GV$SESSION WHERE SID = SYS_CONTEXT('USERENV', 'SID');

```

(`V$SESSION` is a public synonym for `SYS.V_$SESSION`.)

Note: the view `GV$SESSION` is used in recent Nuxeo version instead of `V$SESSION` to allow working with Oracle RAC.

Possible errors if you don't do this grant are:

```
java.sql.SQLException: ORA-00942: table or view does not exist

```

## Grant for `CREATE TABLE`

As Nuxeo creates tables in the database at first startup, you need to grant `CREATE TABLE` to your database user.

```
GRANT CREATE TABLE TO nuxeo;

```

## Other Grants

The following more standard grants must also be executed :

```
GRANT CONNECT TO nuxeo;
GRANT RESOURCE TO nuxeo;

```

The following is sometimes needed, if you have several schemas:

```
GRANT SELECT ANY TABLE TO nuxeo;

```

## Restricted Environment with No GRANT

Some DBA will provide a restricted schema where there is no GRANT on your database.

In that case, you'll have to run this command, whereas usually DBMS_LOB is granted to public.

```
GRANT EXECUTE ON DBMS_LOB ON nuxeo;
```

To resume, here are the list of all GRANTs needed:

```
- CONNECT
- RESOURCE
- SELECT ANY TABLE
- CREATE TABLE
- CREATE PROCEDURE
- CREATE SEQUENCE
- CREATE TRIGGER
- CREATE TYPE
- CREATE VIEW
- EXECUTE ON DBMS_LOB
- EXECUTE ON DBMS_CRYPTO
```

## Character Set

Your database must be configured with `NLS_CHARACTERSET` set to `AL32UTF8`. If your database character set is not `AL32UTF8`, you may observe incorrect behavior including:

*   error while trying to insert null values into `acl_user` table ( `ORA-01400: cannot insert NULL into ("HUDSON"."ACLR_USER"."USER_ID")` )
*   incorrect storage of accented or special characters,
*   no tree structure visible on the left of Nuxeo DM,
*   queries returning no document.

To check the character set on your server, execute:

```
SELECT value FROM NLS_DATABASE_PARAMETERS WHERE parameter = 'NLS_CHARACTERSET';

```

If you need to change the character set of you database, please check [http://download.oracle.com/docs/cd/B19306_01/server.102/b14225/ch11charsetmig.htm](http://download.oracle.com/docs/cd/B19306_01/server.102/b14225/ch11charsetmig.htm).

If for some reason you must use an unsupported character set that is not in the list: `AL32UTF8`, `UTF8`, `US7ASCII`, `WE8DEC`, `WE8ISO8859P1`, `WE8MSWIN1252`, then you will need an additional `orai18n.jar` JAR in your Java class path. Download `orai18n.jar` at [http://www.oracle.com/technology/software/tech/java/sqlj_jdbc/htdocs/jdbc_10201.html](http://www.oracle.com/technology/software/tech/java/sqlj_jdbc/htdocs/jdbc_10201.html).
Then add it in the class path for your Nuxeo server. For instance, in JBoss, you just put the jar in `$JBOSS/server/default/lib`. (The file `orai18n.jar` replaces the `nls_charset*.*` files in the Oracle 9i and older releases.)

{{#> callout type='info' heading='Technical explanation'}}

Internally, for security checks, Nuxeo executes SQL statements that need to be passed ARRAY objects (for the list of principals and permissions), but if the correct character set is not installed then the Oracle JDBC driver behaves incorrectly and Oracle actually receives empty strings. This in turn results in empty results for the queries as none of the documents will match due to incorrect security checks. The orai18n.jar fixes this.

{{/callout}}

## Import/Export

Starting 11gR2, Oracle does not allocate space for a table until the first row gets inserted into the table. What happens is if you take an export of the schema/database, the dump would not include any of the tables that hasn't got any space allocations yet. A configuration change needs to be done to allocate space even more tables with no records.

<pre>alter system set deferred_segment_creation=false;
</pre>

## JDBC Driver

Nuxeo needs the Oracle JDBC driver to establish a connection to the database.

The driver can be downloaded from the [Oracle JDBC driver downloads site](http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html).
We recommand the latest version for 11.2.0.* : `ojdbc6.jar` for JDK 1.6\. It is compliant with Oracle 10g.

The driver must be in the `$NUXEO_HOME/lib` directory.
If you are using the `oracle` template (`nuxeo.templates=oracle` in `nuxeo.conf`), just put the driver in the `$NUXEO_HOME/templates/oracle/lib` directory.

## Reporting Problems

If you have a database configuration problem and you want to fill a JIRA ticket, there are some information to report:

*   The Oracle server state: is it dedicated or shared, which OS, how many CPU, RAM, is it a virtual machine...

*   How much memory is available on the database server (free -m output).

*   Amount of Nuxeo documents and Oracle configuration. Using the "sqlplus" command line tool connect to your Nuxeo database and execute the following commands:

<pre># Get the Nuxeo SQL script to dump your configuration
wget --no-check-certificate https://gist.github.com/bdelbosc/7766893/raw/dump-nuxeo-oracle-conf.sql
# Run the script against your database
sqlplus nuxeo/nuxeo@NUXEO @dump-nuxeo-oracle-conf.sql
</pre>

and attach the output file located in `/tmp/oraconf.txt` into the JIRA ticket.

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

*   [Connecting Nuxeo to the Database]({{page page='connecting-nuxeo-to-the-database'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>