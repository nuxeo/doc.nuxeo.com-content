---
title: Page Provider Aggregates
labels:
    - elasticsearch
    - aggregate
    - page-provider
    - query-pageprovider-component
    - lts2015-ok
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Page+Provider+Aggregates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Page+Provider+Aggregates'
    page_id: '20518126'
    shortlink: 7hQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/7hQ5AQ'
    source_link: /display/NXDOC/Page+Provider+Aggregates
history:
    - 
        author: Solen Guitter
        date: '2016-03-04 11:03'
        message: dd note about terms aggregate size propert
        version: '22'
    - 
        author: Anahide Tchertchian
        date: '2015-12-08 13:26'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2015-10-12 09:29'
        message: Add exclude and include properties on terms aggregate definition
        version: '20'
    - 
        author: Joshua Fletcher
        date: '2015-05-04 23:31'
        message: ''
        version: '19'
    - 
        author: Anahide Tchertchian
        date: '2014-12-17 14:17'
        message: format samples
        version: '18'
    - 
        author: Anahide Tchertchian
        date: '2014-12-02 09:19'
        message: add page-provider label to related content
        version: '17'
    - 
        author: Benoit Delbosc
        date: '2014-11-25 11:51'
        message: ''
        version: '16'
    - 
        author: Guillaume Renard
        date: '2014-11-14 17:41'
        message: ''
        version: '15'
    - 
        author: Alain Escaffre
        date: '2014-11-10 00:14'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-11-07 15:44'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-11-07 15:30'
        message: ''
        version: '12'
    - 
        author: Guillaume Renard
        date: '2014-11-06 17:58'
        message: ''
        version: '11'
    - 
        author: Guillaume Renard
        date: '2014-11-06 17:57'
        message: ''
        version: '10'
    - 
        author: Guillaume Renard
        date: '2014-11-06 17:03'
        message: ''
        version: '9'
    - 
        author: Guillaume Renard
        date: '2014-11-06 15:56'
        message: ''
        version: '8'
    - 
        author: Guillaume Renard
        date: '2014-11-06 15:54'
        message: ''
        version: '7'
    - 
        author: Guillaume Renard
        date: '2014-11-06 15:51'
        message: ''
        version: '6'
    - 
        author: Guillaume Renard
        date: '2014-11-06 15:50'
        message: ''
        version: '5'
    - 
        author: Guillaume Renard
        date: '2014-11-06 15:50'
        message: ''
        version: '4'
    - 
        author: Guillaume Renard
        date: '2014-11-06 15:47'
        message: ''
        version: '3'
    - 
        author: Guillaume Renard
        date: '2014-11-06 13:03'
        message: ''
        version: '2'
    - 
        author: Guillaume Renard
        date: '2014-11-06 11:35'
        message: ''
        version: '1'

---
{{! excerpt}}

When using the Elasticsearch Page Provider, you can define aggregates that will be returned along with the query result.

{{! /excerpt}}

&nbsp;

You can define a page provider that will query documents from Elasticsearch. The Nuxeo Platform takes advantage of the Elasticsearch aggregate module and you can define your own aggregates within a page provider definition. Please refer to [Elasticsearch documentation about aggregates](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations.html) for more information.

As for now, the Nuxeo Platform focuses on bucket aggregation. In addition to accessing the documents returned by a page provider, you will be able to get and expose each bucket of the aggregates you have defined in this page provider. Quoting Elasticsearch documentation:

> Each bucket is associated with a criterion (depending on the aggregation type) which determines whether or not a document in the current context "falls" into it. In other words, the buckets effectively define document sets. In addition to the buckets themselves, the `bucket` aggregations also compute and return the number of documents that "fell in" to each bucket.

Nuxeo Platform&nbsp;[default search](https://github.com/nuxeo/nuxeo-features/blob/6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L7) leverages Elasticsearch aggregates on some default document properties.

![Nuxeo 6.0 default search]({{file name='aggregates.png'}} ?w=600 "Nuxeo 6.0 default search")

The picture above shows the [default search](https://github.com/nuxeo/nuxeo-features/blob/6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L7) of Nuxeo Platform. On the left-hand side panel, you can see the search layout with search criteria for the current search (such as full text) and also some aggregates results (Creation date, Modification date, Author, Nature, Subjects, Coverage, Size). For example, according to the screen shot, for the current document result set, there are 58 documents whose the size is less than 100KB.

The aggregate navigation allows multiple selections and is adaptive. For instance if you select a Size aggregate "less than 100KB", this filter will be applied to the search result and to other aggregates. But the filter is not applied to the Size aggregate itself, so you are still able to see other Size repartitions and you can extend the selection by checking another values.

Even with multiple aggregates, all of this is done with a single Elasticsearch query including the search results. The technical principle is similar to the one described in the [blog post "Build Zappos like faceted navigation with ElasticSearch"](http://distinctplace.com/2014/07/29/build-zappos-like-products-facets-with-elasticsearch/).

Note that aggregate results are either displayed with a checkbox-based widget or a select2-based widget. For further documentation on widgets displaying aggregate results, please refer to the page [Aggregate Widget Types]({{page page='aggregate-widget-types'}}).

An aggregate is defined inside the page provider definition according to the following syntax:

```

    ...

```

where:

*   `aggregate_id` is the id of the aggregate. It is used when defining a widget for a given aggregate, see [Aggregate Widget Types]({{page page='aggregate-widget-types'}}).
*   `aggregate_type` is the type of the aggregates. See below for possible value.

*   `aggregate_parameter` is the field on which the aggregate will be calculated

*   `agg_field_schema` and `agg_field_name` point to the search document model field which will handle the current selection of the aggregate.

Here are the type of aggregates currently supported by the Nuxeo Platform.

## Terms Aggregate

In the search layout on the above picture, you can see Author, Nature, Subjects, Coverage aggregate results. These are Terms aggregates respectively on `dc:creator`, `dc:nature`, `dc:subjects`, `dc:coverage` document properties defined as follow:

```

    10

    10

    10

    10

```

The type of such aggregate is `terms`. The parameter must be of type `string`.

It has the following properties:

*   `size` property is set to define how many term buckets should be returned out of the overall terms
    **Note**: Set `size` to&nbsp;`0` to get all the buckets (mandatory when the terms aggregate is rendered as a select widget).
*   `minDocCount` property is set to only return buckets having more document than the defined value (default is 1)
*   `order` property to order the buckets. Possible values are `count desc`, `count asc`, `term desc`, `term asc`.

Other properties can be:

*   `exclude`: used to filter out values. Use the following syntax to exclude several values: `(value1)|(value2)`.
*   `include`: used to filter values and show only defined values. Use the following syntax to define the values to show: `(value1)|(value2)`.

Read more on the [terms aggregate Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html).

## Significant Terms Aggregate

This aggregate does the same as Terms but returns significant terms buckets. Properties are also the same. Please refer to [significant terms Elasticsearch documentation](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations-bucket-significantterms-aggregation.html).

The type of such aggregate is `significant_terms`. The parameter must be of type `string`.

## Range Aggregate

Here is an example of Range aggregate on the `common:size` document property.

```

```

The type of such aggregate is `range`. The parameter must be a numeric of type `integer`, `double` or `long`.

It has no specific properties but at least one `range` must be defined. A range must have a `key` and at least a `from` or a `to`. The `from` values are included and the `to` values are excluded for each `range` defined. Note that there always will be a returned bucket for each defined range even if the document count is 0.

## Date Range Aggregate

Here is an example of Date Range aggregate on the `dc:modified` document property.

```

    "dd-MM-yyyy"

```

The type of such aggregate is `date_range`. The parameter must be a numeric of type `date`.

At least one `dateRange` must be defined. A range must have a `key` and at least a `fromDate` or a `toDate`. The `fromDate` values are included and the `toDate` values are excluded for each `dateRange` defined. Note that there always will be a returned bucket for each defined range even if the document count is 0.

The `fromDate` or a `toDate` accept value which can be:

*   relative. For instance `now`, `now-24H`, `now-1y`, etc.
*   absolute: For instance `2014-11-06`, `14/02/2014 04:00:45`, etc. But you must define the `format` property accordingly e.g. `yyyy-MM-dd`, `dd/MM/yyyy HH:mm:ss`, etc.

## Histogram Aggregate

The type of such aggregate is `histogram`. The parameter must be a numeric of type `integer`, `double` or `long`.

It has the following properties:

*   `interval`: Defines the interval covered by each returned bucket. It is **required**.
*   `minDocCount`: Only returns buckets having more document than the defined value (default is 1).
*   `order`: Orders the buckets. Possible values are `count desc`, `count asc`, `key desc`, `key asc`. Note that the key of the histogram bucket is the `to` value.
*   `extendedBoundsMin` : Forces the histogram aggregate to return buckets (even if empty) starting from this value.
*   `extendedBoundsMax`: Forces the histogram aggregate to return buckets (even if empty) up to this value.

{{#> callout type='warning' }}

The use of <span>`extendedBoundsMin` and `<span>extendedBoundsMax</span>` <span>is strongly recommended. It prevents elasticsearch from scanning the range of all</span> <span>possible values which may affect performance.</span></span>

{{/callout}}

## 
Date Histogram Aggregate

Here is an example of Date Range aggregate on the `dc:created` document property.

```

    year
    yyyy
    key desc

```

The type of such aggregate is `date_histogram`. The parameter must be of type `date`.

It has the same properties as the `histogram` aggregate except:

*   `interval`: Accepts values such as `year`, `quarter`, `month`, `week`, `day`, `hour`, `minute` or `second`. It also accepts: `1M`, `1.5h`, etc.
*   `extendedBoundsMin` and `extendedBoundsMax` accept value formatted according to the `format` property.

{{#> callout type='warning' }}

The use of `extendedBoundsMin` and `extendedBoundsMax` is strongly recommended. It prevents elasticsearch from scanning the range of all possible values which may affect performance.

{{/callout}}

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading="Related Documentation"}}

{{/panel}}

</div>

<div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div>

</div>