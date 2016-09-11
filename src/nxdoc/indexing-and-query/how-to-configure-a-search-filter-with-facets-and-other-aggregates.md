---
title: How to Configure a Search Filter With Facets and Other Aggregates
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: Learn how to use the Elasticsearch aggregate widgets.
        level: Intermediate
        tool: Studio
        topics: 'Elasticsearch, Query, Widget'
labels:
    - howto
    - elasticsearch
    - content-view
toc: true
confluence:
    ajs-parent-page-id: '22380787'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Configure+a+Search+Filter+With+Facets+and+Other+Aggregates
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Configure+a+Search+Filter+With+Facets+and+Other+Aggregates
    page_id: '22380892'
    shortlink: XIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XIFVAQ'
    source_link: >-
        /display/NXDOC60/How+to+Configure+a+Search+Filter+With+Facets+and+Other+Aggregates
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:52'
        message: ''
        version: '36'
    - 
        author: Solen Guitter
        date: '2016-04-15 08:23'
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
Aggregation is a function where the data are grouped together according to certain criteria to form a single value of more significant meaning or measurement.&nbsp;Aggregates work as a data analytics tools by building analytic information over a set of documents. One of the most known aggregate is the Term Aggregate as known as facet.

Before you start using aggregates you may want to take a look to the document about the [different type of aggregates supported]({{page page='aggregate-widget-types'}}) and the [Page Provider]({{page page='page-provider-aggregates'}}).&nbsp;

Nuxeo Platform supports six different types of aggregates: Terms, Significant Terms, Range, Date Range, Histogram and Date Histogram. This how-to will help you to understand how to use them.&nbsp;

{{#> callout type='info' }}

For more information about aggregates, see the [Elasticsearch Documentation about Aggregation](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations.html)

{{/callout}}

This how-to aims at showing you how to use the different types of aggregates available in Nuxeo Platform with a Contract document type. This how-to will guide you through the different steps of this process:

*   Create a contract document type&nbsp;
*   Create a new search content view&nbsp;

![]({{file name='search_content_view.png'}} ?w=600,border=true)

## Prerequisites

Before starting this how-to you will need to create the following elements in Studio:

*   A Contract document type with 4 metadata: ContractNumber, OperationalHealthRating, RPMNumbers and SCDRelationshipHealthRating.&nbsp;![]({{file name='schema_contract.png'}} ?w=600,h=115,border=true)

    {{#> callout type='info' }}

    See the how-to [How to Define a Document Type]({{page page='how-to-define-a-document-type'}}) for more detailed steps.

    {{/callout}}
*   A simple vocabulary&nbsp;**Rating** assigned to the OperationalHealthRating and SCDRelationshipHealthRating elements**:** ![]({{file name='vocabulary_rating.png'}} ?w=450,border=true)

    {{#> callout type='info' }}

    For more details on vocabularies, see the&nbsp;[Directory and Vocabulary How-tos]({{page page='directory-and-vocabulary-how-to-index'}}).

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

This widget allows you to do a full-text search on a particular&nbsp;field of a document.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Contract Number</td></tr><tr><th colspan="1">Label</th><td colspan="1">Contract Number</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table>
3.  Click on&nbsp;![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Contract Number widget from the right to the grid and edit it:

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Contract Number</td></tr><tr><th colspan="1">Label</th><td colspan="1">Contract Number</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr></tbody></table>
4.  Click on **Save**.&nbsp;

### Terms Aggregate

![]({{file name='terms_aggregate.png'}} ?w=255,h=74,border=true)

The Terms aggregate works with text properties like vocabularies, here we work with the vocabulary Rating created at the beginning.&nbsp;

1.  Drag and drop a Container widget from the right to the grid.

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Operational Health Rating</td></tr><tr><th colspan="1">Label</th><td colspan="1">Operational Health Rating</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table>
2.  Click on&nbsp;![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Terms aggregate from the right to the grid.

3.  Select **Contract** > **OperationalHealthRating** > **Ok**.

4.  Fill the Layout widget Editor:

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Terms</td></tr><tr><th colspan="1">Label</th><td colspan="1">Operational Health Rating</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Directory Checkbox</td></tr><tr><th colspan="1">Vocabulary</th><td colspan="1">Rating</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table>
5.  Click on **Save**.

### Significant Terms Aggregate

![]({{file name='significant_terms_aggregate.png'}} ?w=245,h=49,border=true)

This aggregate returns significant occurrences of terms in a set, not just the most used ones. A term is judged "significant"&nbsp;if there is a noticeable difference in the frequency in which a term appears in the subset and in the background.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Significant Terms</td></tr><tr><th colspan="1">Label</th><td colspan="1">Significant Terms</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table>
3.  Click on&nbsp;![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Significant Terms aggregate from the right to the grid.

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Significant Terms</td></tr><tr><th colspan="1">Label</th><td colspan="1">Significant Terms</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Field</th><td colspan="1">dc:source</td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Checkbox</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table>
4.  Click on **Save.**&nbsp;

### Date Range Aggregate&nbsp;

![]({{file name='date_range_aggregate.png'}} ?w=251,h=84,border=true)

This aggregate is dedicated to date values. It allows you to see the documents created over a certain period of time. Note that the "From" values are included and the "To" values are excluded for each range defined.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container Creation Date</td></tr><tr><th colspan="1">Label</th><td colspan="1">Creation Date</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table>
3.  Click on&nbsp;![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Range aggregate from the right to the grid.

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Creation Date</td></tr><tr><th colspan="1">Label</th><td colspan="1">Creation Date</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Field</th><td colspan="1">dc:created</td></tr><tr><th colspan="1">Date Ranges</th><td colspan="1">

    *   Label: Last year From: now-1y To: now-1M
    *   Label: Last month From: now-1M To: now-7d&nbsp;
    *   Label: Last week From: now-7d To: now-24H
    *   Label: Last 24h From: now-24H To: now

    </td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Date Range Checkbox</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table>
4.  Click on **Save.**

### Range Aggregate

![]({{file name='range_aggregate.png'}} ?w=249,h=72,border=true)

This aggregate allows you to define a set of ranges and works as the date range aggregate. You can, for example, create range with price, ages etc. Here we will range by RPM Numbers.

1.  Drag and drop a Container widget from the right to the grid.
2.  Edit the container:

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">Container RPM Numbers</td></tr><tr><th colspan="1">Label</th><td colspan="1">RPM Numbers</td></tr><tr><th colspan="1">Handle Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Display</th><td colspan="1">Block (Label on top)</td></tr></tbody></table>
3.  Click on&nbsp;![]({{file name='edit_subwidgets.png' space='studio' page='studio-icons-index'}}), drag and drop the Range aggregate from the right to the grid.

    <table><tbody><tr><th colspan="1">Studio Label</th><td colspan="1">RPM Numbers</td></tr><tr><th colspan="1">Label</th><td colspan="1">RPM Numbers</td></tr><tr><th colspan="1">Hide Label</th><td colspan="1">Yes</td></tr><tr><th colspan="1">Ranges</th><td colspan="1">Label: Less than 10 From: 0 To: 10 Label: Between 11 and 100 From: 11 To: 100 Label: More than 100 From: 101 To: 100,000</td></tr><tr><th colspan="1">Widget Type</th><td colspan="1">Range Checkbox</td></tr><tr><th colspan="1">Layout</th><td colspan="1">Page direction</td></tr></tbody></table>
4.  Click on **Save**.

### **Deploying Changes on Your Nuxeo Platform Instance
**

1.  Go to your Nuxeo Platform instance,
2.  Connect as Administrator with Administrator password,
3.  Click on&nbsp;**Admin Center**&nbsp;>&nbsp;**Update Center**&nbsp;>&nbsp;**Nuxeo Studio,**
4.  Click on the&nbsp;**Update**&nbsp;button,
5.  Go in a workspace and create a new Contract.

&nbsp;

* * *