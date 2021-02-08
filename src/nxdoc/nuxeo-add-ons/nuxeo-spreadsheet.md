---
title: Nuxeo Spreadsheet
review:
    comment: ''
    date: '2019-11-29'
    status: ok
labels:
    - lts2016-ok
    - nuxeo-spreadsheet
    - aaraujo
    - spreadsheet-component
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Spreadsheet
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Spreadsheet'
    page_id: '20518099'
    shortlink: 0xQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/0xQ5AQ'
    source_link: /display/NXDOC/Nuxeo+Spreadsheet
tree_item_index: 2700
history:
    -
        author: Solen Guitter
        date: '2016-09-09 09:29'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-09-29 14:18'
        message: ''
        version: '16'
    -
        author: Nelson Silva
        date: '2014-12-16 10:35'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-16 10:33'
        message: format
        version: '14'
    -
        author: Nelson Silva
        date: '2014-12-15 12:13'
        message: Add vocabulary enrichers info
        version: '13'
    -
        author: Solen Guitter
        date: '2014-11-28 00:24'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-11-10 11:00'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-11-07 10:27'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-11-07 10:04'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-11-06 22:06'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-11-06 18:57'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2014-11-06 15:35'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-11-06 10:27'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-11-06 10:26'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-11-06 10:25'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-11-06 10:24'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2014-11-06 10:23'
        message: ''
        version: '1'
---

{{{multiexcerpt 'addon-default-distribution' version='cloud' page='generic-multi-excerpts'}}}

{{! excerpt}}
The Nuxeo Spreadsheet addon allows to bulk edit documents starting from a content view result set, providing a spreadsheet-like user experience.
{{! /excerpt}}

This addon allows you to edit data in your repository as if you were in a spreadsheet-like grid, like copy and paste by dragging the cell's value.

![]({{file name='spreadsheet-view.png'}} ?w=650,border=true)

Nuxeo Spreadsheet can be used in three different use cases:

## Web UI

To visualise in a spreadsheet the content of a folder or of the result of a search, click on the icon (1) at the top right of your content view.

![]({{file name='spreadsheet-webui.png'}} ?w=650,border=true)

The spreadsheet editor opens and displays as many line as there are items in the result of the query. The columns that are displayed corresponds to the columns that were displayed on the content view. If you modify the list of columns in the content view clicking on the columns icon (2) from the content view, this will be reflected on the spreadsheet when re-opening it.

The columns displayed on the spreadsheet reflects the columns contributed as search results layout on Web UI. For example:

```xml
<nuxeo-data-table class="results">

  <nuxeo-data-table-column name="Title" field="dc:title">
    <template>
      ...
    </template>
  </nuxeo-data-table-column>

  <nuxeo-data-table-column name="Modified" field="dc:modified">
    <template>
      ...
    </template>
  </nuxeo-data-table-column>

  <nuxeo-data-table-column name="Last Contributor" field="dc:lastContributor">
    <template>
      ...
    </template>
  </nuxeo-data-table-column>

</nuxeo-data-table>
```
{{{multiexcerpt 'modify-undo-value-spreadsheet' page='nuxeo-spreadsheet'}}}

## JSF UI

To visualise in a spreadsheet the content of a folder or of the result of a search, click on ![]({{file name='spreadsheet.png'}}).

The spreadsheet editor opens and displays as many line as there are items in the result of the query. The columns that are displayed corresponds to the columns that were displayed on the content view. If you modify the list of columns in the content view clicking on the ![]({{file name='edit_columns.png' space='userdoc' page='icons-index'}}) icon from the content view, this will be reflected on the spreadsheet when re-opening it. The spreadsheet module uses the layout introspection API to be able to list the columns displayed in the content view. A mapping is done for each Layout Widget so as to display an adapted cell editor, among Simple text, DirectoryValue suggest and calendar.

See the [limitations section](#limitations) for details of the mapping.

Results are fetched page per page using the following page provider:

```xml
<extension target="org.nuxeo.ecm.platform.query.api.PageProviderService"
  point="providers">
    <coreQueryPageProvider name="spreadsheet_query">
      <property name="maxResults">1000</property>
      <pattern quoteParameters="false" escapeParameters="false">?</pattern>
      <pageSize>1000</pageSize>
    </coreQueryPageProvider>
</extension>
```
{{! multiexcerpt name='modify-undo-value-spreadsheet'}}
**To modify a value**

Click on the cell so as to make the editor appears. Once a cell is modified it becomes blue.

You can modify has many cells you want without saving, and click on **Save** when you want to save.

The **Autosave** button allows you to automatically save all the changes done on the spreadsheet.

**To revert a modification**

If you want to reverse a change on a cell, click right on the cell concerned and select **Undo**.
{{! /multiexcerpt}}

## Standalone Mode

A standalone mode is accessible through this URL: https:/nuxeo-platform-url/nuxeo/spreadsheet/, where you have to enter a NXQL query to fetch your documents. From this URL you can do all the same actions than on your Nuxeo Platform instance.  

![]({{file name='standalone_spreadsheet.png'}} ?w=650,border=true)

**Note:** When opening the spreadsheet to edit a list of documents it relies on the content view definition to determine the layout and page provider to use. In standalone mode it relies on a custom `spreadsheet_listing` layout and on a `spreadsheet_query` page provider.

## Vocabularies

To display translated labels for vocabularies the spreadsheet relies on content enrichers, thus optimizing the number of requests sent to the server.

By using a set of vocabulary [content enrichers]({{page page='content-enrichers'}}) with a shared _vocabularies_ category the spreadsheet is able to retrieve all the current labels for vocabulary backed properties by specifying `X-NXContext-Category = &ldquo;vocabularies&rdquo;`

To enable loading labels for a custom directory a new vocabulary content enricher must be configured, ex:

```xml
<enricher name="myvocabulary" class="org.nuxeo.ecm.automation.io.services.enricher.VocabularyEnricher">
    <category>vocabularies</category>
    <parameter name="field">prefix:field</parameter>
    <parameter name="directoryName">myvocabulary</parameter>
</enricher> 
```

Note that the spreadsheet expects the enricher's name to match the directory name.

## Limitations

- The system information in read-only like Modified, Version and State are in grey to disable users to modify them.
- For more information about the Mapping between listing layouts widgets and the displayed cell types, see [https://github.com/nuxeo/nuxeo-platform-spreadsheet/blob/9.10/nuxeo-platform-spreadsheet-web/src/main/js/app/ui/widgets.js#L64](https://github.com/nuxeo/nuxeo-platform-spreadsheet/blob/9.10/nuxeo-platform-spreadsheet-web/src/main/js/app/ui/widgets.js#L64)

The Nuxeo Spreadsheet addon is done integrating [Handsontable](http://handsontable.com/).

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Content View - Results]({{page space='studio' page='content-view-results'}})
- [Adding Features]({{page space='userdoc' page='adding-features'}})

{{/panel}}</div><div class="column medium-6">


</div></div>
