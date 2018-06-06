---
title: How to Configure a Search Filter With Facets and Other Aggregates
review:
    comment: ''
    date: '2017-01-17'
    status: ok
details:
    howto:
        excerpt: Learn how to use the Elasticsearch aggregate widgets.
        level: Intermediate
        tool: Studio
        topics: 'Content View, Elasticsearch, Query, Widget'
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
labels:
    - lts2016-ok
    - elasticsearch
    - content-view
    - atchertchian
    - howto
    - aggregate
    - query-pageprovider-component
    - aggregate-search-widget-component
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Configure+a+Search+Filter+With+Facets+and+Other+Aggregates
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Configure+a+Search+Filter+With+Facets+and+Other+Aggregates'
    page_id: '20517647'
    shortlink: DxM5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/DxM5AQ'
    source_link: /display/NXDOC/How+to+Configure+a+Search+Filter+With+Facets+and+Other+Aggregates
tree_item_index: 1600
history:
    -
        author: Solen Guitter
        date: '2016-08-31 12:53'
        message: ''
        version: '38'
    -
        author: Solen Guitter
        date: '2016-04-15 08:22'
        message: ''
        version: '37'
    -
        author: Solen Guitter
        date: '2015-10-14 15:47'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2015-01-06 14:31'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2014-12-01 22:24'
        message: ''
        version: '34'
    -
        author: Alain Escaffre
        date: '2014-11-25 14:25'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2014-11-19 16:41'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2014-11-19 11:15'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-11-19 11:07'
        message: Reduced max width of screenshots
        version: '30'
    -
        author: Manon Lumeau
        date: '2014-11-18 15:37'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2014-11-10 10:43'
        message: ''
        version: '28'
    -
        author: Alain Escaffre
        date: '2014-11-04 00:08'
        message: ''
        version: '27'
    -
        author: Alain Escaffre
        date: '2014-11-04 00:08'
        message: ''
        version: '26'
    -
        author: Guillaume Renard
        date: '2014-11-03 17:25'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:10'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:09'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:08'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:08'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:08'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:08'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:07'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:07'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:07'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:07'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:06'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-11-03 16:00'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:58'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:53'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:53'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:50'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:50'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:50'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:50'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:49'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-11-03 15:49'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-11-03 11:55'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-11-03 11:54'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2014-11-03 11:47'
        message: ''
        version: '1'

---
{{#> callout type='info' }}
This tutorial requires to have the JSF UI addon installed on your server. If you prefer to work with Web UI follow [this tutorial]({{page version='' space='nxdoc' page='web-ui-search'}}).
{{/callout}}

Aggregation is a function where the data are grouped together according to certain criteria to form a single value of more significant meaning or measurement. Aggregates work as a data analytics tools by building analytic information over a set of documents. One of the most known aggregate is the Term Aggregate as known as facet.

Before you start using aggregates you may want to take a look to the document about the [different type of aggregates supported]({{page page='aggregate-widget-types'}}) and the [Page Provider]({{page page='page-provider-aggregates'}}).

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Configuring Searches in Nuxeo Studio Modeler & Designer](https://university.nuxeo.com/learn/public/course/view/elearning/134/configuring-searches-in-nuxeo-studio-modeler-designer).
![]({{file name='university-search.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

Nuxeo Platform supports six different types of aggregates: Terms, Significant Terms, Range, Date Range, Histogram and Date Histogram. This how-to will help you to understand how to use them.

{{#> callout type='info' }}

For more information about aggregates, see the [Elasticsearch Documentation about Aggregation](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations.html)

{{/callout}}

This how-to aims at showing you how to use the different types of aggregates available in Nuxeo Platform with a Contract document type. This how-to will guide you through the different steps of this process:

*   Create a contract document type
*   Create a new search content view

![]({{file name='search_content_view.png'}} ?w=600,border=true)

## Prerequisites

**Studio Project Dependencies**<br/>
{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}

**Required Studio Elements**

Before starting this how-to you will need to create the following elements in Studio:

*   A Contract document type with 4 metadata: ContractNumber, OperationalHealthRating, RPMNumbers and SCDRelationshipHealthRating. ![]({{file name='schema_contract.png'}} ?w=600,h=115,border=true)

    {{#> callout type='info' }}

    See the how-to [How to Define a Document Type]({{page page='how-to-define-a-document-type'}}) for more detailed steps.

    {{/callout}}
*   A simple vocabulary **Rating** assigned to the OperationalHealthRating and SCDRelationshipHealthRating elements**:** ![]({{file name='vocabulary_rating.png'}} ?w=450,border=true)

    {{#> callout type='info' }}

    For more details on vocabularies, see the [Directory and Vocabulary How-tos]({{page page='directory-and-vocabulary-how-to-index'}}).

    {{/callout}}

You should end up with something like this:

![]({{file name='query_form.png'}} ?w=600,border=true)

## Creating a New Search Content View with Aggregates

1.  Go to **Listing and Views** > **Content Views**.
2.  Create a new content view called **Contracts**.
3.  Fill in the Query & form page like this:
    ![]({{file name='content_view.png'}} ?w=600,border=true)

Now that you have created your content view, you can customize it by adding different types of widgets and aggregates depending on your needs in the Search Layout part of the page.

### Full Text Widget

![]({{file name='full_text_widget.png'}} ?w=258,h=64,border=true)

This widget allows you to do a full-text search on a particular field of a document.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Contract Number</td></tr><tr><th colspan="1">Label</th><td colspan="1">Contract Number</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table></div>
3.  Click on ![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Contract Number widget from the right to the grid and edit it:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Contract Number</td></tr><tr><th colspan="1">Label</th><td colspan="1">Contract Number</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr></tbody></table></div>
4.  Click on **Save**.

5.  Click on **Go back to previous page**.

### Terms Aggregate

![]({{file name='terms_aggregate.png'}} ?w=255,h=74,border=true)

The Terms aggregate works with text properties like vocabularies, here we work with the vocabulary Rating created at the beginning.

1.  Drag and drop a Container widget from the right to the grid.

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Operational Health Rating</td></tr><tr><th colspan="1">Label</th><td colspan="1">Operational Health Rating</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table></div>
2.  Click on ![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Terms aggregate from the right to the grid.

3.  Select **Contract** > **OperationalHealthRating** > **Ok**.

4.  Fill the Layout widget Editor:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Terms</td></tr><tr><th colspan="1">Label</th><td colspan="1">Operational Health Rating</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Directory Checkbox</td></tr><tr><th colspan="1">Vocabulary</th><td colspan="1">Rating</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table></div>
5.  Click on **Save**.

6.  Click on **Go back to previous page**.

### Significant Terms Aggregate

![]({{file name='significant_terms_aggregate.png'}} ?w=245,h=49,border=true)

This aggregate returns significant occurrences of terms in a set, not just the most used ones. A term is judged "significant" if there is a noticeable difference in the frequency in which a term appears in the subset and in the background.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Significant Terms</td></tr><tr><th colspan="1">Label</th><td colspan="1">Significant Terms</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table></div>
3.  Click on ![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Significant Terms aggregate from the right to the grid.

4.  Select **dublincore** > **Source** and click on **OK**.

5.  Fill the Layout widget Editor:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Significant Terms</td></tr><tr><th colspan="1">Label</th><td colspan="1">Significant Terms</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Checkbox</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table></div>
6.  Click on **Save.**

7.  Click on **Go back to previous page**.

### Date Range Aggregate

![]({{file name='date_range_aggregate.png'}} ?w=251,h=84,border=true)

This aggregate is dedicated to date values. It allows you to see the documents created over a certain period of time. Note that the "From" values are included and the "To" values are excluded for each range defined.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Creation Date</td></tr><tr><th colspan="1">Label</th><td colspan="1">Creation Date</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table></div>
3.  Click on ![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Date Range aggregate from the right to the grid.

4.  Select **dublincore** > **Created** and click on **OK**.

5.  Fill the Layout widget Editor:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Creation Date</td></tr><tr><th colspan="1">Label</th><td colspan="1">Creation Date</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Date Ranges</th><td colspan="1">
    <ul>
        <li>Label: `Last year` From: `now-1y` To: `now-1M`</li>
        <li>Label: `Last month` From: `now-1M` To: `now-7d`</li>
        <li>Label: `Last week` From: `now-7d` To: `now-24H`</li>
        <li>Label: `Last 24h` From: `now-24H` To: `now`</li>
    </ul>
    </td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Date Range Checkbox</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table></div>
6.  Click on **Save.**

7.  Click on **Go back to previous page**.

### Range Aggregate

![]({{file name='range_aggregate.png'}} ?w=249,h=72,border=true)

This aggregate allows you to define a set of ranges and works as the date range aggregate. You can, for example, create range with price, ages etc. Here we will range by RPM Numbers.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container RPM Numbers</td></tr><tr><th colspan="1">Label</th><td colspan="1">RPM Numbers</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table></div>
3.  Click on ![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Range aggregate from the right to the grid.

4.  Select **Contract** > **RPMNumbers** and click on **OK**.

5.  Fill the Layout widget Editor:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">RPM Numbers</td></tr><tr><th colspan="1">Label</th><td colspan="1">RPM Numbers</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Ranges</th><td colspan="1"><ul><li>Label: `Less than 10` From: `0` To: `10`</li>
    <li>Label: `Between 11 and 100` From: `11` To: `100`</li>
    <li>Label: `More than 100` From: `101` To: `100,000`</li></ul></td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Range Checkbox</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table></div>
6.  Click on **Save**.

7.  Click on **Go back to previous page**.

### Deploying Changes on Your Nuxeo Platform Instance

1.  Go to your Nuxeo Platform instance,
2.  Connect as Administrator with Administrator password,
3.  Click on **Admin Center** > **Update Center** > **Nuxeo Studio,**
4.  Click on the **Update** button,
5.  Go in a workspace and create a new Contract.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
- [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})
- [Aggregate Widget Types]({{page page='aggregate-widget-types'}})
- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
