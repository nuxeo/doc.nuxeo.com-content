---
title: Elasticsearch Setup
review:
    comment: ''
    date: ''
    status: ok
labels:
    - elasticsearch
    - last-review-20141201
toc: true
confluence:
    ajs-parent-page-id: '21921866'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Elasticsearch+Setup
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Elasticsearch+Setup'
    page_id: '21921802'
    shortlink: CoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/CoBOAQ'
    source_link: /display/ADMINDOC60/Elasticsearch+Setup
tree_item_index: 1100
version_override:
    'FT': '/nxdoc/elasticsearch-setup'
history:
    -
        author: Alain Escaffre
        date: '2016-03-23 15:53'
        message: ''
        version: '39'
    -
        author: Solen Guitter
        date: '2015-11-23 10:06'
        message: ''
        version: '38'
    -
        author: Benoit Delbosc
        date: '2015-11-20 08:57'
        message: >-
            Better explanation on how to create a new template to override the
            ES mapping
        version: '37'
    -
        author: Benoit Delbosc
        date: '2015-10-13 11:24'
        message: ''
        version: '36'
    -
        author: Benoit Delbosc
        date: '2015-09-14 07:14'
        message: Use same JVM for Nuxeo and Es
        version: '35'
    -
        author: Benoit Delbosc
        date: '2015-09-07 07:46'
        message: remove deprecated info about reindexing
        version: '34'
    -
        author: Benoit Delbosc
        date: '2015-08-24 10:48'
        message: ''
        version: '33'
    -
        author: Benoit Delbosc
        date: '2015-08-13 14:09'
        message: ''
        version: '32'
    -
        author: Benoit Delbosc
        date: '2015-08-10 07:53'
        message: Add some basic ES tuning
        version: '31'
    -
        author: Solen Guitter
        date: '2015-06-18 07:56'
        message: Add tip about Installing the Elasticsearch Cluster
        version: '30'
    -
        author: Solen Guitter
        date: '2015-05-18 08:12'
        message: Move supported versions in a dedicated section
        version: '29'
    -
        author: Benoit Delbosc
        date: '2015-03-26 17:20'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2015-03-25 10:46'
        message: ''
        version: '27'
    -
        author: Benoit Delbosc
        date: '2015-03-24 09:53'
        message: ''
        version: '26'
    -
        author: Benoit Delbosc
        date: '2015-02-20 11:05'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2015-02-05 14:25'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-02-05 14:23'
        message: Add multi repository configuration
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

## Elasticsearch Supported Versions

The Nuxeo Platform communicates with Elasticsearch using the [transport client JAVA API](http://www.elasticsearch.org/guide/en/elasticsearch/client/java-api/current/client.html#transport-client), as stated in the Elasticsearch documentation: "You are encouraged to use the same version on client and cluster sides. You may hit some incompatibility issues when mixing major versions". `

Nuxeo Platform 6.0 uses Elasticsearch 1.1.2 library and has been successfully tested against 1.7.x cluster.

We recommend to use the same JVM version for Elasticsearch and Nuxeo.

## Setting up an Elasticsearch Cluster

The default configuration uses an embedded Elasticsearch instance that runs&nbsp;in the same JVM as the Nuxeo Platform's.

{{#> callout type='warning' }}

This embedded mode&nbsp;**is only for testing purpose**&nbsp;and should not be used in production.

{{/callout}}

For production you need setup an Elasticsearch cluster.

### Installing the Elasticsearch Cluster

Refer to the Elasticsearch documentation to install and [secure](http://www.elasticsearch.org/blog/scripting-security/) your cluster. Basically:

*   Don&rsquo;t run Elasticsearch open to the public.
*   Don&rsquo;t run Elasticsearch as root.
*   Disable dynamic scripting (disabled by default since 1.2.X).

{{#> callout type='tip' }}

Use an explicit cluster name by setting the `cluster.name` in the `/etc/elasticsearch/elasticsearch.yml` file. This will avoid conflicts with other environments.

{{/callout}}

### Tuning Elasticsearch

If you have a large number of documents or if you use Nuxeo in cluster you may reach the default configuration limitation, here are some recommended tuning:

In `/etc/default/elasticsearch` file you can increase the JVM heap:

```
ES_HEAP_SIZE=6g
```

To prevent indexing errors like:

```
EsRejectedExceptionException[rejected execution (queue capacity 50)
```

Increase the bulk queue size In`/etc/elasticsearch/elasticsearch.yml` configuration file:

```
threadpool.bulk.queue_size: 1000
```

### Configuring Nuxeo to Access the Cluster

To make the connexion between the Nuxeo Platform instance and the ES cluster edit the&nbsp; [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}) an set the following options:

```
elasticsearch.addressList=somenode:9300,anothernode:9300
elasticsearch.clusterName=elasticsearch
elasticsearch.indexName=nuxeo
elasticsearch.indexNumberOfReplicas=0
```

Where:

*   `addressList`&nbsp;points to one or many Elasticsearch nodes. Note that we connect to the API port&nbsp;**9300**&nbsp;and not the HTTP port 9200.
*   `clusterName`&nbsp;is the cluster name to join,&nbsp;`elasticsearch`&nbsp;being the default cluster name.
*   `indexName`&nbsp;is the name of the Elasticsearch index.
*   `indexNumberOfReplicas` is the number of [replicas](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/replica-shards.html). By default you have 5 shards and 1 replicas. If you have a single node in your cluster you should set the `indexNumberOfReplicas`to `0`, visit the [Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/guide/current/scale.html) for more information on shards and replicas.

You can find all the available options in the&nbsp;[nuxeo.defaults](https://github.com/nuxeo/nuxeo-distribution/blob/release-6.0/nuxeo-distribution-resources/src/main/resources/templates-tomcat/common-base/nuxeo.defaults).

## Disabling Elasticsearch

Elasticsearch is enabled by default, if you want to disable Elasticsearch indexing and search you can simply add the following option to the `nuxeo.conf` :

```
elasticsearch.enabled=false
```

## Rebuilding the Index

If you need to re-index the whole repository, you can do this from the **Admin** > **Elasticsearch** > **Administration** tab.

## {{> anchor 'changingelasticsearchmapping'}}Changing the Mapping of the Index

Nuxeo comes with a default mapping that sets the locale for full-text and declares some fields as being date or numeric.

{{#> callout type='note' }}

For fields that are not explicitly defined in the mapping, Elasticsearch will try to guess the type the first time it indexes the field. If the field is empty it will be treated as a String field. This is why most of the time you need to explicitly set the mapping for your custom fields that are of type date, numeric or full-text. Also fields that are used to sort and that could be empty need to be defined to prevent an unmapped field error.

{{/callout}}

The default mapping is located in the `${NUXEO_HOME}/templates/common-base/nxserver/config/elasticsearch-config.xml.nxftl`.

**To override and tune the default mapping:**

1.  [Create a custom template]({{page space='nxdoc' page='configuration-templates'}}) like `myapp` with a `nuxeo.defaults` file that contains:&nbsp;&nbsp;

    ```
    myapp.target=.
    ```

2.  In this custom template create a `nxserver/config/elasticsearch-myapp-config.xml.nxftl`file and override the mapping contribution.

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

3.  Update the `nuxeo.conf` to use your custom template

    ```
    nuxeo.templates=default,/etc/nuxeo/myapp
    ```

4.  Restart and re-index the entire repository from the Admin tab (see previous section).

For mapping customization examples, see the page [Configuring the Elasticsearch Mapping]({{page space='nxdoc' page='configuring-the-elasticsearch-mapping'}}).

## Fast Rebuild of the Index to Update a Mapping

You may want to change the mapping but keep the existing indexed data. You can do it quickly by using a tool that will extract the `_source` of documents from one index and submit it to a new index that have another mapping. This is fast because the Nuxeo Platform doesn't have to read all documents and submit them to Elasticsearch.

1.  After you changed the mapping (see previous section), in your `nuxeo.conf`, point to a new index by setting `elasticsearch.indexName=nuxeo_v2`.
2.  Start the Nuxeo Platform.
    The new index is created with the new mapping.

3.  Copy from the index content using [stream2es](https://github.com/elasticsearch/stream2es/). Here we copy `nuxeo_v1` to `nuxeo_v2`.

    ```
    curl -O download.elasticsearch.org/stream2es/stream2es; chmod +x stream2es
    ./stream2es es --source http://localhost:9200/nuxeo_v1 --target http://localhost:9200/nuxeo_v2
    ```

## Using an Index Alias

You can even change a mapping without restarting Nuxeo if you use an [alias](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/indices-aliases.html) as the index name.

For instance the Nuxeo Platform will only know the&nbsp;`nuxeo`&nbsp;alias and once your mapping is ready on&nbsp;`nuxeo_v2`&nbsp;you can atomically switch:

```
curl -XPOST 'localhost:9200/_aliases' -d '{ "actions" : [
    { "remove" : { "index" : "nuxeo_v1", "alias" : "nuxeo" } },
    { "add" : { "index" : "nuxeo_v2", "alias" : "nuxeo" } } ] }'
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

### Reporting Settings and Mapping

It is also important to report the current settings and mapping of an Elasticsearch index (here called `nuxeo`)

```
curl localhost:9200/nuxeo/_settings?pretty > /tmp/nuxeo-settings.json
curl localhost:9200/nuxeo/_mapping?pretty > /tmp/nuxeo-mapping.json
```

### Testing an Analyzer

To test the full-text analyzer:

```
curl -XGET 'localhost:9200/nuxeo/_analyze?analyzer=fulltext&pretty=true' -d 'This is a text for testing, file_name/1-foos-BAR.jpg'
```

### Viewing Indexed Terms for Document Field

This can be done using a customized Luke tool and looking at the Lucene index level, or you can use the aggregates and retrieve the first 1000 tokens:

```bash
# view indexed tokens for dc:title.fulltext of document 3d50118c-7472-4e99-9cc9-321deb4fe053
curl -XGET 'localhost:9200/nuxeo/doc/_search?search_type=count&pretty' -d'{
 "query" : {"ids" : { "values" : ["3d50118c-7472-4e99-9cc9-321deb4fe053"] }},
 "aggs": {"my_aggs": {"terms": {"field": "dc:title.fulltext", "order" : { "_count" : "desc" }, "size": 1000}}}}}}'
```

### Comparing the Elasticsearch Index with the Database Content

You can use the [esync tool](https://github.com/nuxeo/esync) to compare both content and pinpoint discrepancies.

This tool is a read-only standalone tool, it requires both access to the database and Elasticsearch (using transport client on port 9300).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Other Elasticsearch Documentation'}}

- [Configuring the Elasticsearch Mapping]({{page space='nxdoc60' page='configuring-the-elasticsearch-mapping'}})
- [Elasticsearch Indexing Logic]({{page space='nxdoc60' page='elasticsearch-indexing-logic'}})
- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page space='nxdoc60' page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Other Related Documentation '}}

- [Full-Text Queries]({{page space='nxdoc60' page='full-text-queries'}})
- [Indexing and Query]({{page space='nxdoc60' page='indexing-and-query'}})
- [Nuxeo Clustering Configuration]({{page page='nuxeo-clustering-configuration'}})

{{/panel}}
</div>
</div>
