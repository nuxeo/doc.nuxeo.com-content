---
title: Data Visualization
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - content-review-lts2016
    - nuxeo-elements
    - grenard
    - link-update
    - data-visualization-component
    - university
    - lts2017-ok
toc: true
tree_item_index: 300
history:
    -
        author: Bertrand Chauvin
        date: '2015-12-03 15:48'
        message: ixed link
        version: '21'
    -
        author: Bertrand Chauvin
        date: '2015-12-03 15:45'
        message: Add link to video course
        version: '20'
    -
        author: Bertrand Chauvin
        date: '2015-12-03 15:42'
        message: Add link to video course
        version: '19'
    -
        author: Bertrand Chauvin
        date: '2015-11-18 11:15'
        message: Added video
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2015-11-18 11:13'
        message: Added videos
        version: '17'
    -
        author: Nelson Silva
        date: '2015-10-21 14:59'
        message: Update prefix of Nuxeo Elements
        version: '16'
    -
        author: Solen Guitter
        date: '2015-10-19 08:49'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-10-19 08:49'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-10-19 08:48'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-10-19 08:46'
        message: 'Title capitalization, step formatting'
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-10-09 14:03'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-10-09 14:02'
        message: Formatting
        version: '10'
    -
        author: Nelson Silva
        date: '2015-10-06 11:46'
        message: ''
        version: '9'
    -
        author: Nelson Silva
        date: '2015-10-06 11:42'
        message: ''
        version: '8'
    -
        author: Nelson Silva
        date: '2015-10-06 11:38'
        message: ''
        version: '7'
    -
        author: Nelson Silva
        date: '2015-10-02 12:00'
        message: ''
        version: '6'
    -
        author: Nelson Silva
        date: '2015-10-01 10:37'
        message: ''
        version: '5'
    -
        author: Nelson Silva
        date: '2015-09-30 17:13'
        message: ''
        version: '4'
    -
        author: Nelson Silva
        date: '2015-09-30 17:08'
        message: ''
        version: '3'
    -
        author: Nelson Silva
        date: '2015-09-30 16:39'
        message: ''
        version: '2'
    -
        author: Nelson Silva
        date: '2015-09-30 09:27'
        message: ''
        version: '1'

---

Data Visualization support in Nuxeo leverages Web Components and the Polymer framework in order to allow users to easily build their own custom dashboards, thus helping them understand how data is distributed in the repository as well as monitoring workflow activity.

A set of custom elements are available for bootstrapping custom graphical dashboards. These elements are built using our Nuxeo Elements, in particular they rely on `nuxeo-connection` to configure the Nuxeo instance to use.

## Technical Overview

### Elasticsearch Passthrough

Since Nuxeo 7.4, the platform provides an [Elasticsearch Passthrough]({{page page='elasticsearch-passthrough'}}) that allows using the HTTP REST API provided by the Elasticsearch back end. This API provides a comprehensive and powerful search DSL based on JSON to define queries which we can leverage to execute advanced aggregated searches.

These aggregations provide analytic information over a set of documents and allow us to build complex search requests which can provide computed metrics over this set of documents through filtering and "bucketing".

{{#> callout type='info' }}

For more information about Elasticsearch's Search DSL you can take a look at its online  [documentation](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/search-search.html).

{{/callout}}

![]({{file name='dataviz.png'}} ?w=600,border=true)

## Data Visualization Elements

Non visual elements are the standard way to expose remote services while sticking to Polymer's "everything is an element" metaphor so we created a set of custom elements to query data from Elasticsearch. The goal is to hide complexity from the user by providing a simple, concise declarative way to build complex queries which cover most use cases.

Like what has been done for our core Nuxeo Elements focus was on a clear separation between data and the graphical elements to allow users to use existing UI elements for building their own custom dashboards.

You will find more information about the Nuxeo Dataviz Elements [on this page]({{page page='nuxeo-elements'}}#nuxeo-dataviz-elements).


### Workflow Data

The Workflow Data element (`nuxeo-workflow-data`) allows querying Nuxeo's [Workflow Audit Log]({{page page='workflow-audit-log'}}) which, since Nuxeo 7.3, is stored by default as an Elasticsearch index.

It allows users to retrieve data from this index by defining a set of attributes in this custom element which provide a simple and fluent syntax to build complex aggregate searches.

Under the hood each query is built as a nested aggregation with a fixed number of aggregation types and levels. The final query structure is fully configurable by the set of optional attributes available in our element:

*   **grouped-by**: Top level term aggregations (comma-separated values)

*   **with-***: Nested multi-bucket aggregation (`with-ranges` | `with-date-intervals`)

*   **metrics**: leaf single-value metrics aggregation (max, min, avg, sum)

For example, by using our `nuxeo-workflow-data` element with the following attributes:

```xml
<nuxeo-workflow-data workflow="worflowModelName"
                     grouped-by="action"
                     with-ranges='{
                      "duration":[
                         {"key":"quick", "to":"1500"},
                         {"key":"slow", "from":"1500"}
                       ]}'
                     metrics="sum(amount)"
                     data="\{{data}}">
</nuxeo-workflow-data>
```

Our element would produce a request like this:

```js
{
  query: { bool: { must: [...] },
  aggs: {
    by: { // aggregated-on
      terms: {
        field: "extended.action"
      },
      aggs: {
        by: {  // with-ranges | with-date-intervals
          range : {
            field : "extended.duration",
            ranges: [...]
          },
          aggs: {
            metric: { // metric
              sum: {
                field : "extended.workflowVariables.amount"
              }
            }
          }
        }
      }
    }
  }
}
```

By building a custom element to help users query the Workflow Audit Log, we not only provide a simpler more fluent declarative syntax, but we can also decouple from Elasticsearch's specificities in most use cases.

Data returned from Elasticsearch is also processed for simplification and consists of either a single scalar value, for non aggregate queries, or a nested list of `{key: key, value: value}` entries where value can itself be a similar list or single scalar value.

**Note:** Before using this data for producing tables or charts it usually must undergo another transformation process which is specific to the charting and table elements used. For sample transformation helpers we recommend looking at existing dashboards which showcase integration with third-party libraries.

## Sample Dashboards

### Web UI Workflow Analytics Dashboards

**Source file on GitHub**: [nuxeo-workflow-analytics.html](https://github.com/nuxeo/nuxeo-web-ui/blob/master/elements/nuxeo-admin/nuxeo-workflow-analytics.html)

![]({{file name='web_ui_workflows_analytics.png'}} ?w=600)

### JSF UI Review Workflows Dashboards

**GitHub project**: [https://github.com/nuxeo/nuxeo-review-workflows-dashboards](https://github.com/nuxeo/nuxeo-review-workflows-dashboards)

**Serial Review Dashboard**: [https://github.com/nuxeo/nuxeo-review-workflows-dashboards/blob/master/src/main/elements/nx-workflow-dashboard/nx-serial-workflow-dashboard.html](https://github.com/nuxeo/nuxeo-review-workflows-dashboards/blob/master/src/main/elements/nx-workflow-dashboard/nx-serial-workflow-dashboard.html)

**Parallel Review Dashboard**: [https://github.com/nuxeo/nuxeo-review-workflows-dashboards/blob/master/src/main/elements/nx-workflow-dashboard/nx-parallel-workflow-dashboard.html](https://github.com/nuxeo/nuxeo-review-workflows-dashboards/blob/master/src/main/elements/nx-workflow-dashboard/nx-parallel-workflow-dashboard.html) [ ](https://github.com/nuxeo/nuxeo-review-workflows-dashboards/blob/master/src/main/elements/nx-workflow-dashboard/nx-parallel-workflow-dashboard.html)

![]({{file name='review_workflows_dashboards.png'}} ?w=600)

### Travel Expenses Sample Dashboard

**GitHub projec**t: [https://github.com/nuxeo/nuxeo-travel-expenses](https://github.com/nuxeo/nuxeo-travel-expenses)

**Dashboard**: [https://github.com/nuxeo/nuxeo-travel-expenses/blob/master/src/main/yo/app/elements/nx-workflow-dashboard/nx-workflow-dashboard.html](https://github.com/nuxeo/nuxeo-travel-expenses/blob/master/src/main/yo/app/elements/nx-workflow-dashboard/nx-workflow-dashboard.html)

![]({{file name='travel_expenses_dashboard.png'}} ?w=600,border=true)
