---
title: Repository Configuration
description: This page lists the options available to configure VCS repository in Nuxeo Platform. They usually go in a file named default-repository-config.xml.
review:
    comment: ''
    date: '2019-03-12'
    status: ok
labels:
    - lts2016-ok
    - binary-manager
    - vcs
    - fguillaume
    - fulltext
    - vcs-component
    - lts2017-ok
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Repository+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Repository+Configuration'
    page_id: '3343495'
    shortlink: hwQz
    shortlink_source: 'https://doc.nuxeo.com/x/hwQz'
    source_link: /display/NXDOC/Repository+Configuration
tree_item_index: 1500
version_override:
    LTS 2015: 710/admindoc/vcs-configuration
    '6.0': 60/admindoc/vcs-configuration
    '5.8': 58/admindoc/vcs-configuration
history:
    -
        author: Alain Escaffre
        date: '2016-03-23 23:09'
        message: ''
        version: '54'
    -
        author: Florent Guillaume
        date: '2015-12-09 16:04'
        message: ''
        version: '53'
    -
        author: Manon Lumeau
        date: '2015-12-03 10:06'
        message: ''
        version: '52'
    -
        author: Florent Guillaume
        date: '2015-12-02 12:41'
        message: ddlMode and improved SQL statements
        version: '51'
    -
        author: Benoit Delbosc
        date: '2015-05-22 07:02'
        message: Link to ES doc for searchDisabled
        version: '50'
    -
        author: Benoit Delbosc
        date: '2015-04-07 08:58'
        message: Update for searchDisabled option
        version: '49'
    -
        author: Manon Lumeau
        date: '2014-12-10 15:55'
        message: ''
        version: '48'
    -
        author: Solen Guitter
        date: '2014-07-24 16:39'
        message: formatting
        version: '47'
    -
        author: Solen Guitter
        date: '2014-07-24 16:31'
        message: Removed 5.4 and 5.5 references
        version: '46'
    -
        author: Solen Guitter
        date: '2014-06-18 14:25'
        message: ''
        version: '45'
    -
        author: Florent Guillaume
        date: '2014-03-13 16:02'
        message: better real-life example
        version: '44'
    -
        author: Florent Guillaume
        date: '2014-03-13 16:01'
        message: NXP-11551
        version: '43'
    -
        author: Solen Guitter
        date: '2013-10-14 17:19'
        message: ''
        version: '42'
    -
        author: Florent Guillaume
        date: '2013-09-05 16:01'
        message: ''
        version: '41'
    -
        author: Florent Guillaume
        date: '2013-09-05 15:56'
        message: ''
        version: '40'
    -
        author: Solen Guitter
        date: '2013-08-06 11:25'
        message: ''
        version: '39'
    -
        author: Florent Guillaume
        date: '2013-05-15 19:11'
        message: ''
        version: '38'
    -
        author: Florent Guillaume
        date: '2013-05-15 18:06'
        message: ''
        version: '37'
    -
        author: Thierry Martins
        date: '2012-09-25 16:14'
        message: Migrated to Confluence 4.0
        version: '36'
    -
        author: Thierry Martins
        date: '2012-09-25 16:14'
        message: 'add sample to exclude a blob from file:content in fulltext conf'
        version: '35'
    -
        author: Florent Guillaume
        date: '2012-09-11 17:13'
        message: ''
        version: '34'
    -
        author: Thierry Martins
        date: '2012-04-13 16:57'
        message: presentation of usersSeparator attribute
        version: '33'
    -
        author: Antoine Taillefer
        date: '2012-04-02 13:25'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2011-11-14 15:28'
        message: replaced 5.4.3 with 5.5
        version: '31'
    -
        author: Thierry Martins
        date: '2011-09-13 16:18'
        message: ''
        version: '30'
    -
        author: Thierry Martins
        date: '2011-08-22 18:38'
        message: documentation about fulltext types exclusion/inclusion
        version: '29'
    -
        author: Thierry Martins
        date: '2011-08-22 18:32'
        message: ''
        version: '28'
    -
        author: Thierry Martins
        date: '2011-05-16 14:44'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2011-03-04 17:24'
        message: ''
        version: '26'
    -
        author: Florent Guillaume
        date: '2011-01-04 15:40'
        message: ''
        version: '25'
    -
        author: Thierry Martins
        date: '2011-01-03 14:34'
        message: add the attribute readAclMaxSize
        version: '24'
    -
        author: Florent Guillaume
        date: '2010-12-28 14:46'
        message: ''
        version: '23'
    -
        author: Florent Guillaume
        date: '2010-12-28 14:38'
        message: ''
        version: '22'
    -
        author: Florent Guillaume
        date: '2010-12-16 12:00'
        message: ''
        version: '21'
    -
        author: Thierry Martins
        date: '2010-11-05 11:26'
        message: ''
        version: '20'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:56'
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
        date: '2010-07-22 09:09'
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

## VCS Configuration

VCS (Visible Content Store) is the default storage engine for Nuxeo documents.

The following are the options available to configure VCS repository in Nuxeo Platform. They usually go in a file named `default-repository-config.xml`.

{{#> callout type='note' }}
In a standard Nuxeo this file is generated from a template, and many elements or attributes actually take their values from parameters in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}).
{{/callout}}

### Example File

This file is for illustration and contains many more options than are necessary by default.

```xml
<?xml version="1.0"?>
<component name="default-repository-config">
  <extension target="org.nuxeo.ecm.core.storage.sql.RepositoryService" point="repository">
    <repository name="default" label="label.default.repository">
      <pool minPoolSize="0" maxPoolSize="20"
        blockingTimeoutMillis="100"
        idleTimeoutMinutes="10"
        activeTimeoutMinutes="5" />
      <clustering id="12345" delay="1000" enabled="true" />
      <idType>varchar</idType>
      <childNameUniqueConstraintEnabled>true</childNameUniqueConstraintEnabled>
      <schema>
        <field type="largetext">note</field>
      </schema>
      <indexing>
        <includedTypes>
          <type>File</type>
          <type>Note</type>
        </includedTypes>
        <!-- sample for excluded types -->
        <!--
        <excludedTypes>
          <type>Root</type>
          <type>Workspace</type>
        </excludedTypes>
        -->
        <fulltext analyzer="english"> <!-- PostgreSQL -->
          <index name="default">
            <!-- all props implied -->
          </index>
          <index name="title">
            <field>dc:title</field>
          </index>
          <index name="description">
            <field>dc:description</field>
            <excludeField>content/data</excludeField>
          </index>
        </fulltext>
        <queryMaker class="org.nuxeo.ecm.core.storage.sql.NXQLQueryMaker" />
        <queryMaker class="org.nuxeo.ecm.core.chemistry.impl.CMISQLQueryMaker" />
      </indexing>
      <usersSeparator key="," />
      <aclOptimizations enabled="true" readAclMaxSize="4096"/>
      <pathOptimizations enabled="true"/>
      <ddlMode>execute</ddlMode>
      <noDDL>false</noDDL> <!-- deprecated -->
      <sqlInitFile>myconf.sql.txt</sqlInitFile>
    </repository>
  </extension>
</component>
```

### Pooling Options

```xml
<pool minPoolSize="0" maxPoolSize="20"
  blockingTimeoutMillis="100"
  idleTimeoutMinutes="10"
  activeTimeoutMinutes="5" />
```

- **minPoolSize**: the minimum pool size (default is **0**) (see `nuxeo.vcs.min-pool-size` in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}})).
- **maxPoolSize**: the maximum pool size, above which connections will be refused (default is **20**) (see `nuxeo.vcs.max-pool-size` in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}})).
- **blockingTimeoutMillis**: the maximum time (in milliseconds) the pool will wait for a new connection to be available before deciding that it cannot answer a connection request (pool saturated).
- **idleTimeoutMinutes**: the time (in minutes) after which an unused pool connection will be destroyed.
- **activeTimeoutMinutes**: the time (in minutes) after which a connection is killed even if it is still active. This is used to avoid connection leaks. This should always be set higher than the Nuxeo transaction timeout.

### Clustering Options

```xml
<clustering id="12345" enabled="true" delay="1000" />
```

- **id**: the cluster node id, which must be unique among all cluster nodes connected to the same database.
- **enabled**: use **true** to activate Nuxeo clustering (default is **false**, i.e., no clustering) (see `repository.clustering.enabled` in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}})).
- **delay**: a configurable delay in milliseconds between two checks at the start of each transaction, to know if there are any remote invalidations (see `repository.clustering.delay` in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}})).

### Column Types

#### Large Text / CLOB Columns

If you need to specify a length on a Nuxeo field and cannot change the XSD of the document type, you should use the following code in the repository configuration:

```xml
<schema>
  <field type="largetext">note</field>
  <field type="largetext">my:field</field>
  ...
</schema>
```

`field type="largetext"`: a field that should be stored as a CLOB column inside the database instead of a standard VARCHAR column.

**However** note that for your own schemas, you should specify length constraints on text fields using restrictions in the XSD of your document type.

If you want the text field to a specific length limit:

```xml
  <xs:simpleType name="longString">
    <xs:restriction base="xs:string">
      <xs:maxLength value="65536" />
    </xs:restriction>
  </xs:simpleType>

  <xs:element name="text" type="mail:longString"/>
```

If you want the text field to have no length limit:

```xml
  <xs:simpleType name="clob">
    <xs:restriction base="xs:string">
      <xs:maxLength value="999999999" />
    </xs:restriction>
  </xs:simpleType>

  <xs:element name="note" type="nxs:clob"/>
```

This is important for your large text fields, especially for MySQL, Oracle and SQL Server which have very small defaults for standard text fields.

Using Oracle, if you attempt to save a string too big for the standard NVARCHAR2(2000) field, you will get the error:

```text
java.sql.SQLException: ORA-01461: can bind a LONG value only for insert into a LONG column
```

#### Id Column Type

In standard Nuxeo the document id is a UUID stored as a string, for instance `9ea9a461-e131-4127-9a57-08b5b9b80ecb`.

It's possible on select databases to use a more efficient id representation:

```xml
 <idType>varchar</idType>
```

The following values for idType are possible:

- **varchar**: a varchar-based UUID (the default),
- **uuid**: a native uuid (only on PostgreSQL ([NXP-4803](https://jira.nuxeo.com/browse/NXP-4803))),
- **sequence**: a sequence-based integer on:
    - PostgreSQL [NXP-10894](https://jira.nuxeo.com/browse/NXP-10894)
    - Oracle [NXP-13800](https://jira.nuxeo.com/browse/NXP-13800)
    - SQL Server 2012 (not Azure) [NXP-10912](https://jira.nuxeo.com/browse/NXP-10912).</br>
    Instead of just `sequence` you can also use `sequence:your_sequence_name` if you want to use another sequence than the default one (`hierarchy_seq`).

When using a sequence, the document ids will be simple incremental small integers instead of randomly-generated UUIDs.

Note that switching this option to a new value will require a full dump, manual conversion and restore of your database, so it should be specified before starting Nuxeo for the first time.

## Child Name Unique Constraint

Low-level database constraints that disallow multiple children with the same name can be enabled:

```xml
<childNameUniqueConstraintEnabled>true</childNameUniqueConstraintEnabled>
```

This is available and enabled by default on PostgreSQL since Nuxeo 9.2 ([NXP-22421](https://jira.nuxeo.com/browse/NXP-22421)).

### Indexing Options

#### Configuring Which Types Will Be Indexed

It's possible to configure the document types you want to index or you want to exclude from full-text indexing. This is possible using the sub-elements `includedTypes` and `excludedTypes` of the `indexing` element:

```xml
<includedTypes>
  <type>File</type>
  <type>Note</type>
</includedTypes>
```

or

```xml
<excludedTypes>
  <type>Root</type>
  <type>Workspace</type>
</excludedTypes>
```

If you set both included and excluded types, only the included types configuration will be taken into account.

#### {{> anchor 'vcs-full-text-configuration'}}Full-Text

```xml
<fulltext disabled="false" searchDisabled="true" fieldSizeLimit="1000" analyzer="english" catalog="...">
  ...
</fulltext>
```

- **disabled**:
  * The default is `false`, _i.e._, fulltext enabled.
  * Use `true` to disable full-text support.


- **searchDisabled**:
  - The default is `false`.
  - Use `true` to disable VCS full-text search (based on database backend), the full-text extraction is done and [searchable using Elasticsearch]({{page version='' space='nxdoc' page='moving-load-from-database-to-elasticsearch'}}#deactivating-database-full-text-search).


- **fieldSizeLimit**: used to specify the maximum size of the full-text that is extracted and indexed.
  - The default is `131072`, _i.e._, 128 KB.
  - Use 0 to remove any limit (but this will penalize Elasticsearch indexing).


- **analyzer**: a full-text analyzer, the content of this attribute depends on the backend used:
  - H2: a Lucene analyzer, for instance `org.apache.lucene.analysis.fr.FrenchAnalyzer`. The default is an English analyzer.
  - PostgreSQL: a Text Search configuration, for instance `french`. The default is **english**. See [the PostgreSQL documentation](http://www.postgresql.org/docs/8.3/static/textsearch-configuration.html)
  - Oracle: an Oracle PARAMETERS for full-text, as defined by the [Oracle Text Indexing Elements](http://download.oracle.com/docs/cd/B19306_01/text.102/b14218/cdatadic.htm) (see [NXP-4035](https://jira.nuxeo.com/browse/NXP-4035) for details).
  - Microsoft SQL Server: a full-text LANGUAGE, for instance `english`, as defined in the [Microsoft Documentation](https://docs.microsoft.com/en-us/sql/t-sql/queries/contains-transact-sql). The default is `english`.
  - other backends don't have configurable full-text analyzers.


- **catalog**: a full-text catalog, the content of this attribute depends on the backend used:
  - Microsoft SQL Server: a full-text CATALOG. The default is `nuxeo`.
  - other backends don't need a catalog.
Full-text indexes are queried in NXQL through the `ecm:fulltext` pseudo-field. A non-default index "foo" can be queried using `ecm:fulltext_foo`.

If no `<index>` elements are present, then a **default** index with all string and blob fields is used.

```xml
<fulltext ...>
  <index name="title" analyzer="..." catalog="...">
    <field>dc:title</field>
    <field>dc:description</field>
  </index>
  <index name="blobs">
    <fieldType>blob</fieldType>
  </index>
  <index name="other">
    <fieldType>string</fieldType>
    <excludeField>dc:title</excludeField >
  </index>
</fulltext>
```

- index **name**: the name of the index. The default is **default**.
- index **analyzer**: a full-text analyzer just for this index. See full-text options above for details.
- index **catalog**: a full-text catalog just for this index. See full-text options above for details.
- **fieldType**: **string** or **blob**, the default being both. This selects all these fields for indexing.
- **field**: the name of a field that should be selected for indexing.
- **excludeField**: the name of a field that should not be in the index.

If no `<fieldType>`, `<field>` or `<excludeField>` are present, then all string and blob fields are used.

### Optimizations

- **pathOptimizations enabled**: for PostgreSQL, Oracle and MS SQL Server (and H2), it is possible to disable the path-based optimizations by using **false**. The default is **true**, _i.e._ path optimizations enabled.
    ```xml
    <pathOptimizations enabled="false"/>
    ```

- **aclOptimization enabled**: for PostgreSQL, Oracle and MS SQL Server (and H2), you can disable the read ACL optimizations by using **false**. The default is **true**, _i.e._ ACL optimizations enabled.
    ```xml
    <aclOptimizations enabled="false"/>
    ```

- **aclOptimizations readAclMaxSize**: can be set to define the size of the largest ACL for a document; this may be useful if you have mostly assigned permissions to a lot of users instead of using groups (do not set this attribute if you disable ACL optimizations).

- In case the user/group names in your directories contains the separator character used in the Read ACL cache, you can change this value using the attribute `usersSeparator`. The default depends on the database, it may be `,` (for H2 and PostgreSQL) or `|` (for Oracle and SQL Server).
    ```xml
    <usersSeparator key="," />
    ```

- If you change this value on an existing database, you will need to rebuild the ACL cache with the SQL command:
    ```sql
    SELECT nx_rebuild_read_acls();
    ```

### Database Creation Option

```xml
<ddlMode>execute</ddlMode>
```

The `<ddlMode>` specifies how the DDL (Data Definition Language) for repository initialization should be executed at startup. DDL includes:

- `CREATE TABLE`, `CREATE INDEX`, `ALTER TABLE ADD CONSTRAINT` for a new schema or complex property,
- `ALTER TABLE ADD column` for a new property in a schema,
- `CREATE FUNCTION`, `CREATE PROCEDURE`, `CREATE TRIGGER` for VCS internal stored procedures and migration steps.

Depending on the chosen mode, the DDL to be executed may not be executed at all and instead dumped to the file `log/ddl-vcs-default.sql`. The possible values are:

- **ignore**: no DDL detected or executed.
- **compat**: compatibility mode with previous version, always executes DDL that recreates stored procedures (and does not attempt to detect existing ones).
- **execute**: executes the DDL and starts Nuxeo normally.
- **dump**: dump the DDL (if any) to the file but still executes it and starts Nuxeo normally.
- **dump,ignore**: dump the DDL (if any) to the file but does not execute it and starts Nuxeo normally (will likely result in errors).
- **dump,abort**: dumps the DDL (if any) to the file, and if not empty aborts startup.

For Nuxeo 6.0-HF24+ and Nuxeo 7.10-HF01+ the default is **compat**. For Nuxeo 8.1 and above the default is **execute**.

See [NXP-17396](https://jira.nuxeo.com/browse/NXP-17396) for details about `<ddlMode>` implementation.

```xml
<noDDL>true</noDDL> <!-- deprecated -->
```

For compatibility with previous Nuxeo versions, if no `<ddlMode>` element is specified, then `<noDDL>` is checked. The value **true** is mapped to a ddlMode of **ignore**, and the value **false** mapped to the default ddlMode.

```xml
<sqlInitFile>myconf.sql.txt</sqlInitFile>
```

If you need to execute additional SQL when the database is initialized (at every Nuxeo startup), you can use this to specify an additional SQL file to read and execute (unless noDDL is true). The format of an SQL init file is described below. Examples can be found in the standard SQL init files used by Nuxeo, which are available at [https://github.com/nuxeo/nuxeo/tree/master/nuxeo-core/nuxeo-core-storage-sql/nuxeo-core-storage-sql/src/main/resources/nuxeovcs](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-core/nuxeo-core-storage-sql/nuxeo-core-storage-sql/src/main/resources/nuxeovcs) (in the appropriate branch for your version).

A SQL init file is a series of SQL statements.

A `#` starting a line (as the first character) makes the line a comment (ignored), except for a few special `#`-starting tags (see below).

SQL statements have to be separated from every other by a **blank line**.

A statement may be preceded by one or more **tag** lines, which are lines starting with **`#SOMETAG:`** (including the final colon), and may be:

- `#CATEGORY:` defines the category for all future statements, until a new category is defined. See below for the use of categories.
- `#TEST:` specifies that the following statement returns a certain number of rows, and if that number of rows is 0 then the variable `emptyResult` will be set to true, otherwise it will be set to false.
- `#SET_IF_EMPTY: variable` or `#SET_IF_NOT_EMPTY: variable` will set the specified variable to true if the following statement returns an empty (or not empty) set of rows. If the condition is not met, the variable is not changed.
- `#IF: condition` conditions execution of the single following statement on the value of the condition. A condition can be `variable` or `! variable` for negation. Several `#IF:` tags may be used in a row (in different lines), and they are effectively ANDed together.
- `#IF: condition OR: othercondition OR: anothercondition` allows to OR several conditions.
- `#PROC: somename` specifies that the following SQL is a `CREATE FUNCTION`, `CREATE PROCEDURE` or `CREATE TRIGGER` for the given name, and that an attempt to detect whether it is already present to avoid re-creation should be done. This is used when DDL is dumped through `<ddlMode>`.

The following boolean variables are predefined by Nuxeo and the various database dialects, and may be used in `#IF:` tags:

- `emptyResult`: true if the previous `#TEST:` statement returned no row,
- `fulltextEnabled`: true if full-text is enabled,
- `fulltextSearchEnabled`: true if full-text search is enabled,
- `clusteringEnabled`: true if clustering is enabled,
- `aclOptimizationsEnabled`: true if ACL optimizations are enabled,
- `pathOptimizationsEnabled`: true if path optimizations are enabled,
- `proxiesEnabled`: true if proxies are enabled,
- `softDeleteEnabled`: true if soft delete is enabled,
- `sequenceEnabled`: true if sequence-based ids are enabled.

Note that not all dialects define all variables, consult the specific dialect code or the standard Nuxeo SQL init file to know more.

SQL statements are regular SQL statements and will be executed as-is by the database, with variable substitution (see below). Depending on the dialect, it may or may not be necessary of forbidden to end some kinds of statement with a semicolon, please consult the standard Nuxeo SQL init file for the dialect to be sure. Note also that when writing multi-line stored procedures, you must not include a blank line for readability, as this blank line would be interpreted as the end of the whole multi-line SQL statement.

The following variables provide additional dialect-specific values that may be used in SQL statements using the variable substitution syntax `${variablename}`:

- `idType`: the SQL type used for ids,
- `idTypeParam`: the SQL type used for ids in stored procedures (not all dialects use this),
- `idSequenceName`: when sequence-based ids are enabled, the name of the sequence to use,
- `idNotPresent`: a representation of a "marker" id to use in stored procedures to represent a non-existent id,
- `fulltextAnalyzer`: the full-text analyzer defined in the repository configuration.

A few pseudo-SQL statements can be used to provide addition logging actions:

- `LOG.DEBUG message`: logs the message at DEBUG level in the standard logger,
- `LOG.INFO message`: logs the message at INFO level in the standard logger,
- `LOG.ERROR message`: logs the message at ERROR level in the standard logger,
- `LOG.FATAL message`: logs the message at FATAL level in the standard logger and throws an exception that will stop database initialization and make it unusable by Nuxeo.

To initialize the database, the statements of the following categories are executed in this order:

- `first`
- `beforeTableCreation`
    (at this point Nuxeo does a CREATE or ALTER on the tables based on the Nuxeo Schema definitions)
- `afterTableCreation`
- `last`

The following categories are executed in special circumstances:

- `addClusterNode`: when creating a cluster node,
- `removeClusterNode`: when shutting down a cluster node.

## DBS Configuration

For a [DBS]({{page page='dbs'}}) (Document-Based Storage) configuration, you need to contribute to the extension point `repository` of the component `org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryService`:

```xml
<?xml version="1.0"?>
<component name="default-repository-config">
  <require>org.nuxeo.runtime.mongodb.MongoDBComponent</require>
  <extension target="org.nuxeo.ecm.core.storage.mongodb.MongoDBRepositoryService"
      point="repository">
    <repository name="default" label="label.default.repository">
      <cache enabled="true" maxSize="1000"
             concurrencyLevel="10" ttl="10" />
      ...
    </repository>
  </extension>
</component>
```

This repository can be configured with the same [clustering](#clustering-options) and [indexing](#indexing-options) options as for VCS.

For the DBS implementation based on MongoDB, the repository definition relies on [MongoDBConnectionService]({{page page='mongodb'}}#connection-pool-configuration) to instantiate a database connection.
