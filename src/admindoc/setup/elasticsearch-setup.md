---
title: Elasticsearch Setup
review:
    comment: ''
    date: ''
    status: ok
labels:
    - elasticsearch
    - lts2015-ok
    - elasticsearch-component
toc: true
confluence:
    ajs-parent-page-id: '27604704'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Elasticsearch+Setup
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Elasticsearch+Setup'
    page_id: '27604610'
    shortlink: gjalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/gjalAQ'
    source_link: /display/ADMINDOC710/Elasticsearch+Setup
tree_item_index: 1200
version_override:
    'FT': /nxdoc/elasticsearch-setup
    '6.0': 60/admindoc/elasticsearch-setup
    '5.8': 58/admindoc/elasticsearch-setup
history:
    -
        author: Manon Lumeau
        date: '2016-08-24 09:54'
        message: ''
        version: '82'
    -
        author: Benoit Delbosc
        date: '2016-07-28 09:16'
        message: change title to have direct link on section
        version: '81'
    -
        author: Manon Lumeau
        date: '2016-07-22 15:36'
        message: ''
        version: '80'
    -
        author: Thierry Martins
        date: '2016-05-10 16:57'
        message: Reverted from v. 77
        version: '79'
    -
        author: Thierry Martins
        date: '2016-05-10 16:55'
        message: ''
        version: '78'
    -
        author: Benoit Delbosc
        date: '2016-05-04 15:45'
        message: add an anchor to access reporting pb section
        version: '77'
    -
        author: Benoit Delbosc
        date: '2016-04-25 16:03'
        message: dump more information on ES stats
        version: '76'
    -
        author: Manon Lumeau
        date: '2016-04-25 15:29'
        message: ''
        version: '75'
    -
        author: Antoine Taillefer
        date: '2016-03-18 10:10'
        message: ''
        version: '74'
    -
        author: Manon Lumeau
        date: '2016-03-15 14:35'
        message: ''
        version: '73'
    -
        author: Benoit Delbosc
        date: '2016-03-14 11:02'
        message: document how to change the audit mapping/settings
        version: '72'
    -
        author: Benoit Delbosc
        date: '2016-02-11 10:12'
        message: ''
        version: '71'
    -
        author: Solen Guitter
        date: '2015-11-23 10:03'
        message: ''
        version: '70'
    -
        author: Benoit Delbosc
        date: '2015-11-20 15:36'
        message: ''
        version: '69'
    -
        author: Benoit Delbosc
        date: '2015-11-20 15:35'
        message: ''
        version: '68'
    -
        author: Benoit Delbosc
        date: '2015-11-20 08:54'
        message: ''
        version: '67'
    -
        author: Benoit Delbosc
        date: '2015-11-20 08:47'
        message: >-
            Better explanation on how to create a new template to override the
            ES mapping
        version: '66'
    -
        author: Manon Lumeau
        date: '2015-10-14 10:02'
        message: ''
        version: '65'
    -
        author: Benoit Delbosc
        date: '2015-10-13 11:23'
        message: ''
        version: '64'
    -
        author: Joshua Fletcher
        date: '2015-10-05 18:32'
        message: Grammar.
        version: '63'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:15'
        message: ''
        version: '62'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:12'
        message: ''
        version: '61'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:10'
        message: ''
        version: '60'
    -
        author: Antoine Taillefer
        date: '2015-10-05 08:04'
        message: ''
        version: '59'
    -
        author: Antoine Taillefer
        date: '2015-10-05 07:40'
        message: ''
        version: '58'
    -
        author: Antoine Taillefer
        date: '2015-10-05 07:18'
        message: ''
        version: '57'
    -
        author: Antoine Taillefer
        date: '2015-09-24 12:36'
        message: ''
        version: '56'
    -
        author: Benoit Delbosc
        date: '2015-09-14 07:13'
        message: Use same JVM for Nuxeo and Es
        version: '55'
    -
        author: Solen Guitter
        date: '2015-08-25 07:52'
        message: ''
        version: '54'
    -
        author: Benoit Delbosc
        date: '2015-08-24 10:48'
        message: ''
        version: '53'
    -
        author: Benoit Delbosc
        date: '2015-08-13 14:13'
        message: ''
        version: '52'
    -
        author: Benoit Delbosc
        date: '2015-08-13 14:12'
        message: ''
        version: '51'
    -
        author: Benoit Delbosc
        date: '2015-08-10 07:51'
        message: ''
        version: '50'
    -
        author: Benoit Delbosc
        date: '2015-08-10 07:48'
        message: 'Add some ES tuning '
        version: '49'
    -
        author: Antoine Taillefer
        date: '2015-07-01 13:00'
        message: ''
        version: '48'
    -
        author: Antoine Taillefer
        date: '2015-07-01 11:58'
        message: ''
        version: '47'
    -
        author: Antoine Taillefer
        date: '2015-07-01 11:39'
        message: ''
        version: '46'
    -
        author: Antoine Taillefer
        date: '2015-07-01 11:37'
        message: ''
        version: '45'
    -
        author: Antoine Taillefer
        date: '2015-07-01 09:20'
        message: ''
        version: '44'
    -
        author: Antoine Taillefer
        date: '2015-07-01 09:09'
        message: ''
        version: '43'
    -
        author: Antoine Taillefer
        date: '2015-07-01 08:28'
        message: ''
        version: '42'
    -
        author: Antoine Taillefer
        date: '2015-06-30 12:57'
        message: ''
        version: '41'
    -
        author: Antoine Taillefer
        date: '2015-06-30 10:21'
        message: ''
        version: '40'
    -
        author: Antoine Taillefer
        date: '2015-06-24 12:41'
        message: ''
        version: '39'
    -
        author: Solen Guitter
        date: '2015-06-23 09:19'
        message: Title cap
        version: '38'
    -
        author: Antoine Taillefer
        date: '2015-06-22 16:06'
        message: ''
        version: '37'
    -
        author: Benoit Delbosc
        date: '2015-06-17 15:25'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2015-05-18 08:11'
        message: Move supported versions in a dedicated section
        version: '35'
    -
        author: Benoit Delbosc
        date: '2015-05-12 08:17'
        message: ''
        version: '34'
    -
        author: Benoit Delbosc
        date: '2015-05-12 08:17'
        message: Update on ES version supported
        version: '33'
    -
        author: Benoit Delbosc
        date: '2015-03-26 17:18'
        message: Adding esync ref
        version: '32'
    -
        author: Solen Guitter
        date: '2015-03-25 10:13'
        message: ''
        version: '31'
    -
        author: Benoit Delbosc
        date: '2015-03-24 09:52'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2015-03-18 08:54'
        message: ''
        version: '29'
    -
        author: Benoit Delbosc
        date: '2015-03-17 09:10'
        message: ''
        version: '28'
    -
        author: Benoit Delbosc
        date: '2015-02-20 11:04'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-02-05 14:24'
        message: ''
        version: '26'
    -
        author: Benoit Delbosc
        date: '2015-02-03 08:48'
        message: ''
        version: '25'
    -
        author: Benoit Delbosc
        date: '2015-02-03 08:44'
        message: ''
        version: '24'
    -
        author: Benoit Delbosc
        date: '2014-12-15 13:53'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-12-01 17:22'
        message: ''
        version: '22'
    -
        author: Benoit Delbosc
        date: '2014-12-01 17:12'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-12-01 16:24'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-12-01 15:50'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-12-01 15:28'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-12-01 15:24'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-12-01 14:47'
        message: format
        version: '16'
    -
        author: Solen Guitter
        date: '2014-12-01 14:44'
        message: ''
        version: '15'
    -
        author: Benoit Delbosc
        date: '2014-11-25 14:57'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:34'
        message: ''
        version: '13'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:33'
        message: ''
        version: '12'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:32'
        message: ''
        version: '11'
    -
        author: Benoit Delbosc
        date: '2014-11-25 12:10'
        message: ''
        version: '10'
    -
        author: Benoit Delbosc
        date: '2014-11-25 10:44'
        message: ''
        version: '9'
    -
        author: Benoit Delbosc
        date: '2014-11-12 14:14'
        message: ''
        version: '8'
    -
        author: Benoit Delbosc
        date: '2014-11-10 16:49'
        message: ''
        version: '7'
    -
        author: Benoit Delbosc
        date: '2014-11-10 16:33'
        message: ''
        version: '6'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:39'
        message: ''
        version: '5'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:34'
        message: ''
        version: '4'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:32'
        message: ''
        version: '3'
    -
        author: Benoit Delbosc
        date: '2014-11-10 14:13'
        message: ''
        version: '2'
    -
        author: Benoit Delbosc
        date: '2014-11-10 12:34'
        message: ''
        version: '1'

---
{{! excerpt}}

This page provides several configuration use cases for Elasticsearch.

{{! /excerpt}}

&nbsp;

## {{> anchor 'settingupanelasticsearchcluster'}}Setting up an Elasticsearch Cluster

### Elasticsearch Supported Versions

The Nuxeo Platform communicates with Elasticsearch using the [transport client JAVA API](http://www.elasticsearch.org/guide/en/elasticsearch/client/java-api/current/client.html#transport-client), as stated in the Elasticsearch documentation: "You are encouraged to use the same version on client and cluster sides. You may hit some incompatibility issues when mixing major versions". `

The Nuxeo Platform 7.3 (and above) uses Elasticsearch 1.5.2 library and has been successfully tested against 1.1.2 to 1.7.x cluster.

We recommend to use the same JVM version for all Elasticsearch nodes and Nuxeo.

The default configuration uses an embedded Elasticsearch instance that runs&nbsp;in the same JVM as the Nuxeo Platform's.

{{#> callout type='warning' }}

This embedded mode&nbsp;**is only for testing purpose**&nbsp;and should not be used in production.

{{/callout}}

For production you need to setup an Elasticsearch cluster.

### Installing the Elasticsearch Cluster

Refer to the Elasticsearch documentation to install and [secure](http://www.elasticsearch.org/blog/scripting-security/) your cluster. Basically:

*   Don&rsquo;t run Elasticsearch open to the public.
*   Don&rsquo;t run Elasticsearch as root.
*   Disable dynamic scripting (disabled by default since 1.2.X).

{{#> callout type='tip' }}

Use an explicit cluster name by setting the `cluster.name` in the `/etc/elasticsearch/elasticsearch.yml` file, this will avoid conflicts with other environments.

{{/callout}}

#### Recommended Tuning

If you have a large number of documents or if you use Nuxeo in cluster you may reach the default configuration limitation, here are some recommended tuning:

Consider disabling the OS swapping or using other&nbsp;[Elasticsearch option](https://www.elastic.co/guide/en/elasticsearch/guide/current/heap-sizing.html#_swapping_is_the_death_of_performance)&nbsp;to prevent the heap to be swapped.

In `/etc/default/elasticsearch` file you can increase the JVM heap to half of the available OS memory:

```
# For a dedicated node with 12g of RAM
ES_HEAP_SIZE=6g
```

To prevent indexing errors like:

```
EsRejectedExceptionException[rejected execution (queue capacity 50)
```

Increase the bulk queue size In`/etc/elasticsearch/elasticsearch.yml` configuration file:

```
threadpool.bulk.queue_size: 500
```

## {{> anchor 'configuringnuxeotoaccessthecluster'}}Configuring Nuxeo to Access the Cluster

Nuxeo manages 3 Elasticsearch indexes:

*   The repository index used to index document content, this index can be rebuild from scratch by extracting content from the repository.
*   The audit logs index to store audit entries, this index is a primary storage and can not be rebuild.
*   A sequence index used to serve unique value that can be used as primary keys, this index is also a primary storage.

To make the connection between the Nuxeo Platform instance and the ES cluster check&nbsp;the following options in the&nbsp; [`nuxeo.conf`]({{page space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}) &nbsp;file and edit if you need to change the default value:

```
elasticsearch.addressList=somenode:9300,anothernode:9300
elasticsearch.clusterName=elasticsearch
elasticsearch.indexName=nuxeo
elasticsearch.indexNumberOfReplicas=0
audit.elasticsearch.indexName=${elasticsearch.indexName}-audit
seqgen.elasticsearch.indexName=${elasticsearch.indexName}-uidgen
```

Where:

*   `elasticsearch.addressList`&nbsp;points to one or many Elasticsearch nodes. Note that Nuxeo connects to the API port&nbsp;**9300**&nbsp;and not the HTTP port 9200.
*   `elasticsearch.clusterName`&nbsp;is the cluster name to join,&nbsp;`elasticsearch`&nbsp;being the default cluster name.
*   `elasticsearch.indexName`&nbsp;is the name of the Elasticsearch index for the default document repository.
*   `elasticsearch.indexNumberOfReplicas` is the number of [replicas](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/replica-shards.html). By default you have 5 shards and 1 replicas. If you have a single node in your cluster you should set the `indexNumberOfReplicas`to `0`. Visit the [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/guide/current/scale.html) for more information on shards and replicas.
*   `audit.elasticsearch.indexName`&nbsp;is the name of the Elasticsearch index for audit logs.
*   `seqgen.elasticsearch.indexName`&nbsp;is the name of the Elasticsearch index for the uid sequencer, extensively used for audit logs.

You can find all the available options in the&nbsp;[nuxeo.defaults](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/nuxeo-distribution-resources/src/main/resources/templates-tomcat/common-base/nuxeo.defaults).

## Disabling Elasticsearch

Elasticsearch is enabled by default, if you want to disable Elasticsearch indexing and search you can simply add the following option to the `nuxeo.conf` :

```
elasticsearch.enabled=false
```

### {{> anchor 'disablingelasticsearchforauditlogs'}}Disabling Elasticsearch for Audit Logs

When Elasticsearch is enabled and&nbsp;the&nbsp;`audit.elasticsearch.enabled` property is set to&nbsp;`true` in&nbsp; `nuxeo.conf` &nbsp;which is the case by default, Elasticsearch&nbsp;is used as a backend for audit logs.

<span style="color: rgb(68,68,68);">This improves scalability, especially when using Nuxeo Drive with a large set of users.</span>

{{#> callout type='warning' }}

When Elasticsearch is used as a backend for audit logs it becomes the reference (no more SQL backend as it was the case in Nuxeo versions lower than 7.3).

For this purpose make sure you read the [Backing Up and Restoring the Audit Elasticsearch Index]({{page space='nxdoc' page='backup-and-restore#backingupandrestoringtheauditelasticsearchindex'}}) section.

{{/callout}}

If you want to disable Elasticsearch and use the SQL database&nbsp;as the default backend for audit logs you can simply update this property in&nbsp; `nuxeo.conf` :

```
audit.elasticsearch.enabled=false
```

## {{> anchor 'triggeringsqltoelasticsearchauditlogsmigration'}}Triggering SQL to Elasticsearch Audit Logs Migration

When upgrading a Nuxeo instance from a version lower than 7.3 to 7.3 or higher, if you decide to use Elasticsearch as a backend for audit logs you need to add the following property to&nbsp;`nuxeo.conf` to trigger the migration of existing audit log entries.

```
audit.elasticsearch.migration=true
```

This will launch a background job&nbsp;at server startup to migrate data from the&nbsp;`nxp_logs`,&nbsp;`nxp_logs_extinfo` and&nbsp;`nxp_logs_mapextinfo` tables of the SQL database to the `${<span style="color: rgb(0,0,0);">audit.elasticsearch.indexName</span>}`&nbsp;Elasticsearch index.

Migration uses batch processing. The number of log entries processed per batch can be configured by adding the folllowing property to&nbsp;`nuxeo.conf`:

```
audit.elasticsearch.migration.batchSize=5000
```

Default value is 1000\. As an example, we successfully tested migration of 22.000.000 log entries with an average speed of 1500 entries / second using&nbsp;`audit.elasticsearch.migration.batchSize=10000`&nbsp;on a Linux virtual machine with two cores, 4 GB RAM, a local PostgreSQL instance and an embedded Elasticsearch instance.

Once the migration is done you should remove the&nbsp;`audit.elasticsearch.migration` property from&nbsp;`nuxeo.conf`, else you wil see a warning about it in the logs.

## {{> anchor 'rebuildingtheindex'}}Rebuilding the Repository Index

If you need to reindex the whole repository, you can do this from the **Admin** > **Elasticsearch** > **Admin** tab.

You can fine tune the indexing process using the following options:

*   Sizing the indexing worker thread pool. The default size is 4, using more threads will crawl the repository faster :

    ```
    elasticsearch.indexing.maxThreads=4
    ```

*   Tuning the number of documents per worker and the number of document submitted using the Elasticsearch bulk API:

    ```
    # Reindexing option, number of documents to process per worker
    elasticsearch.reindex.bucketReadSize=500
    # Reindexing option, number of documents to submit to Elasticsearch per bulk command
    elasticsearch.reindex.bucketWriteSize=50
    ```

## {{> anchor 'changingelasticsearchmapping'}}Changing the Mappings and Settings of Indexes

### Updating the Repository Index Configuration

Nuxeo comes with a default mapping that sets the locale for full-text and declares some fields as being date or numeric.

{{#> callout type='note' }}

For fields that are not explicitly defined in the mapping, Elasticsearch will try to guess the type the first time it indexes the field. If the field is empty it will be treated as a String field. This is why most of the time you need to explicitly set the mapping for your custom fields that are of type date, numeric or full-text. Also fields that are used to sort and that could be empty need to be defined to prevent an unmapped field error.

{{/callout}}

The default mapping is located in the `${NUXEO_HOME}/templates/common-base/nxserver/config/elasticsearch-config.xml.nxftl`.

**To override and tune the default mapping:**

1.  [Create a custom template]({{page page='adding-custom-templates'}}) like `myapp` with a `nuxeo.defaults` file that contains:&nbsp;&nbsp;

    ```
    myapp.target=.
    ```

2.  In this custom template create a `nxserver/config/elasticsearch-myapp-config.xml.nxftl` file and override the mapping contribution.

    ```xml
    <component name="org.nuxeo.elasticsearch.myapp">
      <require>org.nuxeo.elasticsearch.defaultConfig</require>
      <extension target="org.nuxeo.elasticsearch.ElasticSearchComponent"
        point="elasticSearchIndex">
        <elasticSearchIndex name="nuxeo" type="doc" repository="default">
         <mapping>
    ... Here copy and adapt the default mapping
         </mapping>
        </elasticSearchIndex>
      </extension>
    </component>
    ```

3.  Update the `nuxeo.conf` to use your custom template.

    ```
    nuxeo.templates=default,/etc/nuxeo/myapp
    ```

4.  Restart and re-index the entire repository from the Admin tab (see previous section)

For mapping customization examples, see the page [Configuring the Elasticsearch Mapping]({{page space='nxdoc' page='configuring-the-elasticsearch-mapping'}}).

### Updating the Audit Logs Index Configuration

Here the index is a primary storage and you can not rebuild it. So we need a tool that will extract the `_source` of documents from one index and submit it to a new index that have been setup with the new configuration.

1.  Update the mappings or settings configuration by overriding the `{NUXEO_HOME}/templates/common-base/nxserver/config/elasticsearch-audit-index-config.xml`(follow the same procedure as the section above for the repository index)
2.  Use a new name for the `audit.elasticsearch.indexName`(like `nuxeo-audit2`)
3.  Start the Nuxeo Platform.
    The new index is created with the new mapping.
4.  Stop the Nuxeo Platform
5.  Copy the audit logs entries in the new index using [stream2es](https://github.com/elasticsearch/stream2es/). Here we copy `nuxeo-audit` to `nuxeo-audit2`.

    ```
    curl -O download.elasticsearch.org/stream2es/stream2es; chmod +x stream2es
    ./stream2es es --source http://localhost:9200/nuxeo-audit --target http://localhost:9200/nuxeo-audit2 --replace
    ```

## Configuration for Multi Repositories

You need to define an index for each repository. This is done by adding an `elasticSearchIndex` contribution.

1.  Create a custom template as described in the above section "Changing the mapping of the index".
2.  Add a second `elasticSearchIndex` contribution:

    ```
    <elasticSearchIndex name="nuxeo-repo2" type="doc" repository="repo2"> ....
    ```

    Where `name` is the Elasticsearch index name and `repository` the repository name.

## Investigating and Reporting Problems

### Activate Traces

To understand why a document is not present in search results or not indexed, you can activate a debug trace.

Open at the `lib/log4j.xml` file and uncomment the ELASTIC section:

```xml
      <appender name="ELASTIC" class="org.apache.log4j.FileAppender">        
        <errorHandler class="org.apache.log4j.helpers.OnlyOnceErrorHandler" />
        <param name="File" value="${nuxeo.log.dir}/elastic.log" />
        <param name="Append" value="false" />
        <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern" value="%d{ISO8601} %-5p [%t][%c] %m%X%n" />
        </layout>
      </appender>
      <category name="org.nuxeo.elasticsearch" additivity="false">
        <priority value="TRACE" />
        <appender-ref ref="ELASTIC" />
      </category>
```

&nbsp;The `elastic.log` file will contain all the requests done by the Nuxeo Platform to Elasticsearch including the `curl` command ready to be copy/past/debug in a term.

### Reporting Settings Mapping and Stats

It is also important to report the current settings and mapping of an Elasticsearch index (here called `nuxeo`)

```
curl localhost:9200/nuxeo/_settings?pretty > /tmp/nuxeo-settings.json
curl localhost:9200/nuxeo/_mapping?pretty > /tmp/nuxeo-mapping.json
# misc info and stats on Elasticsearch
curl localhost:9200 > /tmp/es-info.txt
curl localhost:9200/_cluster/stats?pretty >> /tmp/es-info.txt
curl localhost:9200/_nodes/stats?pretty >> /tmp/es-info.txt
curl localhost:9200/_cat/health?v >> /tmp/es-info.txt
curl localhost:9200/_cat/nodes?v >> /tmp/es-info.txt
curl localhost:9200/_cat/indices?v >> /tmp/es-info.txt
```

### Testing an Analyzer

To test the full-text analyzer:

```
curl -XGET 'localhost:9200/nuxeo/_analyze?analyzer=fulltext&pretty' -d 'This is a text for testing, file_name/1-foos-BAR.jpg'
```

To test an analyzer derived from the mapping:

```
curl -XGET 'localhost:9200/nuxeo/_analyze?field=ecm:path.children&pretty' -d 'workspaces/main folder/folder'
```

### Viewing Indexed Terms for Document Field

This can be done using a customized Luke tool and looking at the Lucene index level, or you can use the aggregates and retrieve the first 1000 tokens:

```bash
# view indexed tokens for dc:title.fulltext of document 3d50118c-7472-4e99-9cc9-321deb4fe053
curl -XGET 'localhost:9200/nuxeo/doc/_search?search_type=count&pretty' -d'{
 "query" : {"ids" : { "values" : ["3d50118c-7472-4e99-9cc9-321deb4fe053"] }},
 "aggs": {"my_aggs": {"terms": {"field": "dc:title.fulltext", "order" : { "_count" : "desc" }, "size": 1000}}}}}}'
```

&nbsp;

### Comparing the Elasticsearch Index with the Database Content

You can use the [esync tool](https://github.com/nuxeo/esync) to compare both content and pinpoint discrepancies.

This tool is a read-only standalone tool, it requires both access to the database and Elasticsearch (using transport client on port 9300).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Elasticsearch Documentation'}}

*   [Configuring the Elasticsearch Mapping]({{page space='nxdoc710' page='configuring-the-elasticsearch-mapping'}})
*   [Elasticsearch Indexing Logic]({{page space='nxdoc710' page='elasticsearch-indexing-logic'}})
*   [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page space='nxdoc710' page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation '}}

*   [Full-Text Queries]({{page space='nxdoc710' page='full-text-queries'}})
*   [Indexing and Query]({{page space='nxdoc710' page='indexing-and-query'}})
*   [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})

{{/panel}}</div></div>
