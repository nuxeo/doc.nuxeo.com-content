---
title: Multiple Repositories Configuration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
toc: true
confluence:
    ajs-parent-page-id: '27604662'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Multiple+Repositories+Configuration
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/Multiple+Repositories+Configuration
    page_id: '27604708'
    shortlink: 5DalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/5DalAQ'
    source_link: /display/ADMINDOC710/Multiple+Repositories+Configuration
tree_item_index: 800
history:
    -
        author: Ronan Daniellou
        date: '2016-08-22 13:13'
        message: ixes "blockTimeoutMillis" -> "blockingTimeoutMillis
        version: '10'
    -
        author: Antoine Taillefer
        date: '2016-03-18 09:40'
        message: ''
        version: '9'
    -
        author: Michaël Vachette
        date: '2015-09-03 12:40'
        message: ''
        version: '8'
    -
        author: Michaël Vachette
        date: '2015-09-03 12:36'
        message: ''
        version: '7'
    -
        author: Florent Guillaume
        date: '2015-05-05 12:56'
        message: typo
        version: '6'
    -
        author: Solen Guitter
        date: '2015-05-05 10:12'
        message: 'Format steps, add related documentation'
        version: '5'
    -
        author: Benoit Delbosc
        date: '2015-05-04 15:59'
        message: Add a note about Elasticsearch multi repo conf
        version: '4'
    -
        author: Florent Guillaume
        date: '2015-05-04 15:38'
        message: clearer paths
        version: '3'
    -
        author: Florent Guillaume
        date: '2015-05-04 15:35'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2015-05-04 15:34'
        message: ''
        version: '1'

---
A default Nuxeo Platform installation is configured to use one repository. A repository:

*   Encompasses the database storage for all the documents stored under one root. In the user interface it's visible as a server above the domains.
*   Defines how is done the storage for the document attachments, called the binary store.

The default configuration for the repositories comes from XML files, which contain various configuration values themselves described as variables. The variables are set through `nuxeo.conf` configuration parameters (`nuxeo.db.host`,&nbsp;`nuxeo.db.user`,&nbsp;`nuxeo.db.password`, etc.).

When multiple repositories are used, we want to use different configuration parameters for each, but the default Nuxeo templates are designed for a single repository. This means that to add a second repository, some templates will have to be copied and modified to use a second set of configuration parameters.

In addition, when more than one repository is configured, certain optimizations that are valid when only one database is accessed cannot be used anymore.

## Datasources Configuration

1.  Deactivate the default single-datasource mode in `nuxeo.conf`:

    ```
    nuxeo.db.singleDataSource=
    ```

    This will allow the use of separate datasources for each type of database connection that Nuxeo does.

    See [JDBC Datasource Configuration]({{page page='jdbc-datasource-configuration'}}) for information about the single-datasource mode in effect in a default Nuxeo Platform installation.

2.  Configure your datasources using XA mode so as to keep a single transactional context for all database access:

    ```
    nuxeo.db.xaMode=true
    ```

    The templates configuring the default datasources in Nuxeo will use XA parameters for them.

3.  For each additional repository, add a new file, either through custom templates, or directly in `$NUXEO/nxserver/config`, that defines your new datasource, like the example below.

    {{#> panel type='code' heading='datasources-secondrepo-config.xml'}}

    ```xml
    <?xml version="1.0"?>
    <component name="datasources-secondrepo-config">
      <extension target="org.nuxeo.runtime.datasource" point="datasources">
        <datasource name="jdbc/repository_secondrepo" xaDataSource="org.postgresql.xa.PGXADataSource"
          maxPoolSize="100" minPoolSize="5" blockingTimeoutMillis="10000">
            <property name="ServerName">localhost</property>
            <property name="PortNumber">5432</property>
            <property name="DatabaseName">secondrepo</property>
            <property name="User">nuxeo</property>
            <property name="Password">password</property>
        </datasource>
      </extension>
    </component>
    ```

    {{/panel}}
    *   The name&nbsp;`jdbc/repository_secondrepo` is important, as this name is actually &nbsp;`jdbc/repository_` followed by the name of the repository (`secondrepo`) that we will define below.
    *   Of course the `xaDataSource`&nbsp;and the various `property` values should be filled in according to your database parameters.{{#> callout type='note' heading='JAR Dependencies'}}

    If you want to connect to a database that's not already in a template configured in `nuxeo.conf`, don't forget to put the necessary JDBC JARs in the `lib/` directory of Nuxeo.

    {{/callout}}

## <span style="color: rgb(0,0,0);">Repository Configuration
</span>

The standard repository definition in Nuxeo Platform is done through a template in `$NUXEO/templates/common-base/nxserver/config/default-repository-config.xml.nxftl`&nbsp;which generates `$NUXEO/nxserver/config/default-repository-config.xml`.

Add a new file, either through custom templates, or directly in `$NUXEO/nxserver/config`, that defines your new repository.

{{#> callout type='tip' }}

It's probably easier to do this by copying an existing working version of a&nbsp;`default-repository-config.xml` and changing what you need to define a second repository.

{{/callout}}

For instance you will get something like:

{{#> panel type='code' heading='repository-secondrepo-config.xml'}}

```xml
<?xml version="1.0"?>
<component name="repository-secondrepo-config">
  <extension target="org.nuxeo.ecm.core.storage.sql.RepositoryService" point="repository">
    <repository name="secondrepo" label="My Second Repository"
      factory="org.nuxeo.ecm.core.storage.sql.ra.PoolingRepositoryFactory">
      <pool minPoolSize="0" maxPoolSize="20" blockingTimeoutMillis="100" idleTimeoutMinutes="10" />
      <clustering enabled="false" delay="1000" />
      <!-- ... other options for your repository ... -->
    </repository>
  </extension>

  <extension target="org.nuxeo.ecm.core.blob.BlobManager" point="configuration">
      <blobprovider name="secondrepo">
        <class>org.nuxeo.ecm.core.blob.binary.DefaultBinaryManager</class>
        <property name="path">binaries2</property>
      </blobprovider>
  </extension>

 </component>
```

{{/panel}}

The part about&nbsp;`<repository name="secondrepo"`&nbsp;is important as it's where you define the name of your repository, which needs to be in sync with what you defined for the datasource.&nbsp;

## Binary Store Configuration

Each repository must have its own different binary store path.

{{#> callout type='warning' heading='Separating Binaries'}}

It is CRITICAL to keep the binaries separated between each repository if you want to properly delete orphaned binaries from the Admin tab. If you don't do this, things will seem to work correctly but you will lose data the next time you delete orphaned binaries.

{{/callout}}

In the above repository configuration, we defined `<property name="path">binaries2</property>` which means that the binaries for your second repository will be stored under `$NUXEO/nxserver/data/binaries2` instead of the default `$NUXEO/nxserver/data/binaries`.

## Elasticsearch Configuration

There must be an Elasticsearch index associated for each repository. See the [Elasticsearch multi repository configuration documentation]({{page space='ADMINDOC' page='Elasticsearch setup#ElasticsearchSetup-ConfigurationforMultiRepositories'}}) for more information.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [JDBC Datasource Configuration]({{page page='jdbc-datasource-configuration'}})
*   [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})
*   [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
*   [File Storage]({{page space='nxdoc710' page='file-storage'}})

{{/panel}}</div><div class="column medium-6">null</div></div>
