---
title: Nuxeo and Kibana
labels:
    - kibana
    - elasticsearch-component
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+and+Kibana
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+and+Kibana'
    page_id: '26317518'
    shortlink: zpKRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/zpKRAQ'
    source_link: /display/NXDOC/Nuxeo+and+Kibana
history:
    - 
        author: Manon Lumeau
        date: '2015-10-13 15:28'
        message: ''
        version: '5'
    - 
        author: Anne Jubert
        date: '2015-10-12 13:56'
        message: ''
        version: '4'
    - 
        author: Anne Jubert
        date: '2015-10-12 10:13'
        message: ''
        version: '3'
    - 
        author: Anne Jubert
        date: '2015-10-12 10:13'
        message: ''
        version: '2'
    - 
        author: Anne Jubert
        date: '2015-10-12 10:01'
        message: ''
        version: '1'

---
Reporting with Kibana is&nbsp;superseded by the [Data Visualization module]({{page page='data-visualization'}}) from LTS 2015.

We have added&nbsp;[support for Elasticsearch to the Nuxeo Platform](http://www.nuxeo.com/blog/updates/2014/04/elasticsearch-collections-improve-nuxeo-platform/)&nbsp;since version LTS 2014 (6.0), bring it greater scalability. We use it to index all the documents in your instance. The results outside of the scalability enhancements is a much better response time when browsing Nuxeo.&nbsp;One of the other benefits of this integration is that we now have an easy to use reporting solution with Kibana.

Documentation will give you examples of how to setup and use it.

## Installing Kibana 4

Kibana 4 requires to access directly the Elasticsearch database used by Nuxeo, and also requests to be protected (so, installed on an AWS instance for example, no hacker can access it).

{{#> callout type='info' }}

Everything is explained in details here:**&nbsp;[https://github.com/nuxeo-sandbox/nuxeo-kibana4-demo](https://github.com/nuxeo-sandbox/nuxeo-kibana4-demo)**

{{/callout}}

Some thoughts:

*   All this protocol is for an installation on a Linux box (tested and checked on AWS instances)
    *   Never done it on Windows, nor on Mac
*   If your are doing your demos on your localhost, maybe you can skip the creation of the "kibana" user, etc.)

{{#> callout type='tip' }}

For development and quick test purposes, you can also install Kibana and Nuxeo on your computer and allow Kibana to access the embedded Elasticsearch. See the last section Settings.

{{/callout}}

## Recommendations

When opening Kibana 4, the "No results found" page is probably displayed by default. This is because the analysis period is set to "Last 15 Minutes" by default (which is probably cool when analyzing the server metrics), so change it (top-right item of the page)

![]({{file name='analysis_period_kibana.png'}} ?w=650,border=true)

Also, Kibana evolves at light speed, so some of the screenshots you'll find here may already be obsolete. For example, it is likely that the search interval will be saved by Kibana in future small releases, because it is something that, practically speaking, annoys everybody.

## Main Principles

There are basically three steps:

1.  Create and save a&nbsp;_Search_
2.  Create and save 1-n&nbsp;_Visualization_s (Pie Chart, Bars, ...) based on this search
3.  Add the visualization(s) to a&nbsp;_Dashboard_&nbsp;(and save it)

Saving a search is useful when you want to display different vizualizations for the same search. For example, you could have:

*   A search that finds all "Picture" documents
*   And several visualizations based on this search: One using the lifecycle state, one using a field ([dc:nature](http://dcnature/), ...), etc.

Still, you can create a new visualization with a search that will be used only by this visualization. In this chapter, we describe the use of a saved search.

### Creating and Saving a Search

Make sure you have the index pattern you want to use (nuxeoand/oraudit):&nbsp;Go to "Settings" (top menu)

![]({{file name='add_new_kibana.png'}} ?w=650,border=true)

If you don't see the index you need, you must add it:

1.  In the Indices sub tab, click the "+ Add New" button
2.  In "Index name or pattern" enter an existing indice: Either `nuxeo` or&nbsp;`audit`
3.  Once the name of the indice is entered, you must select a "Time-field name"
    *   We generally select&nbsp; [`dc:modified`](http://dcmodified/) &nbsp;for&nbsp;`nuxeo`
    *   And&nbsp;`eventDate`&nbsp;for the&nbsp;`audit`

Go to "Discover" in the top menu, and&nbsp;click the "New Search" button

![]({{file name='new_search_kibana.png'}} ?w=250,thumbnail=true)

Then, click on the "Settings" button

![]({{file name='settings_kibana.png'}} ?w=250,border=true,thumbnail=true)

{{#> callout type='tip' }}

Depending on the sub-version of Kibana, you may not have this "Settings" button: The index pattern to select is then just on the left, at the top of the list of fields:

![]({{file name='field_kibana.png'}} ?w=250,border=true,thumbnail=true)

{{/callout}}

&nbsp;

In **Index Pattern**, select your index (`nuxeo`&nbsp;or&nbsp;`audit`). You can now create a search:

1.  Enter the search statement
    1.  WARNING: This is Lucene syntax, so basically:
        *   `:`&nbsp;is the equals sign
        *   Which means&nbsp;`:`&nbsp;in Nuxeo's fields path ( [`schema:field`](http://schemafield/) ) must be escaped
    2.  Example: Search all documents of type "Picture":
        *   `ecm\:primaryType: "Picture"`
    3.  Run (to check you find something)
    4.  Save the search

### Creating and Saving 1-n Visualizations Based on This Search

Select **Visualization** in the top menu.&nbsp;In **Create a new visualization**, select the kind of visualization you want.&nbsp;In the next step ("Select a search source"), select "From a saved search" and select the search you saved previously.

{{#> callout type='note' }}

This is where step #1 is not always required. You could use "From a new search", select an index, then enter a query statement.

{{/callout}}

Now, set up your visualization (See the example(s) below).&nbsp;Click "Save" and give a name to this visualization.

### Adding the Visualization(s) to a Dashboard

Go to **Dashboard**.&nbsp;If you already had a dashboard, you can either:

*   Click the "+" toolbar button (on the right)
*   Or the "New Dashboard" button

In all cases, you can use the "+" button and add the visualization you saved

## Example: Pie Chart On "Top 10 Downloads"

This example is using the "audit" index (not "nuxeo")

### Creating and Saving a Search

Select **Discover**&nbsp;in the top menu, click on the **New Search**&nbsp;button. In the **Index pattern**, select **Audit**

1.  In the search field, enter the following expression:&nbsp;`extended.downloadReason:"download" AND NOT extended.[blobFilename:storyboard-0*](http://blobfilenamestoryboard-0%2A/)`

    {{#> callout type='note' }}

    With current version of Nuxeo (7.3), the audit logs as "download" a lot of things that are actually not a real download. For example, when displaying a video, there is a download entry for each picture of the storyboard. On the other hand, displaying thumbnails is filtered (thumbnail event in the log, displaying the preview of a picture too, ...)

    {{/callout}}
2.  Save this search: "Audit: Downloads"

### Creating and Saving 1-n Visualizations Based on This Search

1.  Select "Visualization" in the top menu
2.  In "Create a new visualization", select "Pie Chart"
3.  In the next step ("Select a search source"), select "From a saved search" and select the search you saved previously ("Audit: Downloads")
4.  Now, set up your visualization
    1.  Click "Split Slices" (below "Select buckets type")
    2.  In "Aggregation", select "Terms"
    3.  Field: extended.blobFilename
    4.  Order: Top
    5.  Size: 10
5.  Click "Apply" to check all is good
6.  Click "Save" and give a name to this visualization: "Audit: Top 10 Downloads"

&nbsp;

Here it is:

![]({{file name='piechart_kibana.png'}} ?w=650,border=true)

### Adding the Visualization(s) to a Dashboard

Go to **Dashboard**, if you already had a dashboard, you can either

*   Click the "+" toolbar button (on the right)
*   Or the "New Dashboard" button

In all cases, you can use the "+" button and add the visualization you saved.&nbsp;Possibly, add other visualizations. Once it's done, save your Dashboard, so you can reuse it for a demo.

Tada!

![]({{file name='piechart2_kibana.png'}} ?w=650)

## Setting up Kibana 4 on Mac

This will explain how to run Kibana 4 with a Nuxeo running on localhost on your Mac.

{{#> callout type='warning' }}

We will allow the embedded Elasticsearch to answer any HTTP request on port 9200\. This is not secure:

*   But it's ok when using it only on your Mac with localhost,
*   Don't do that on a public VM, it is a security problem,&nbsp;
*   (And don't allow your Mac to answer requests from the outside&nbsp;:wink:)

{{/callout}}

### Settings

1.  **Download Kibana 4**
    *   Just the final application (no need to build or do some command line scripts. Just download the binaries)
    *   Go to&nbsp;[https://www.elastic.co/downloads/kibana](https://www.elastic.co/downloads/kibana), find the Mac OS version, download it
    *   At the time of this writing (2015-08-24), we downloaded&nbsp;kibana-4.1.1-darwin-x64.tar-2.gz
2.  **Extract**&nbsp;kibana-4.1.1-darwin-x64.tar-2.gz
    *   You now have the "kibana-4.1.1-darwin-x64" folder
    *   You can leave the default values
    *   Just in case if you are stressed you can check kibana-4.1.1-darwin-x64/config/kibana.yml
        *   It must listen on port 5601, and server "0.0.0.0".
        *   If you change that or if a future version of Kibana changes that, you'll adapt (see below)
3.  Have a nuxeo-tomcat and change its nuxeo.conf file
    *   {path/to/nuxeo}/bin/nuxeo.conf
    *   Uncomment the line&nbsp;elasticsearch.httpEnabled=true
    *   So basically, you now have:

        ```xml
        . . . 
        elasticsearch.httpEnabled=true 
        . . .
        ```

        {{#> callout type='info' heading='Nuxeo FastTrack 7.4'}}

        Since Nuxeo FastTrack 7.4, this option is enabled by default, just check it is there

        {{/callout}}
4.  Start nuxeo&nbsp;
5.  Start Kibana:
    *   Command:

        ```xml
        cd /path/to/kibana-4.1.1-darwin-x64/bin
        ./kibana
        ```

    *   The terminal must ends with a line telling you Kibana is listening ("Listening on 0.0.0.0:5601")
    *   Test it's ok:
        *   In&nbsp;another&nbsp;terminal, curl&nbsp;[localhost:5601](http://localhost:5601/)&nbsp;must return something valid (not a connection error)

It's ok, you are all setup.&nbsp;When done with this, do not forget to quit Nuxeo and Kibana.&nbsp;

{{! Don't put anything here. }}

* * *