---
title: Nuxeo Spreadsheet
labels:
    - nuxeo-spreadsheet
    - spreadsheet-component
    - excerpt
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Spreadsheet
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Spreadsheet'
    page_id: '20518099'
    shortlink: 0xQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/0xQ5AQ'
    source_link: /display/NXDOC/Nuxeo+Spreadsheet
history:
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
{{! excerpt}}

The Nuxeo Spreadsheet add-on allows to bulk edit documents starting from a content view result set, providing a spreadsheet-like user experience.

{{! /excerpt}}

This add-on allows you to edit data in your repository as if you were in a spreadsheet-like grid, like copy and paste by dragging the cell's value.

![]({{file name='spreadsheet-view.png'}} ?w=650,border=true)

## Opening the Spreadsheet to Edit the List of Documents

To visualise in a spreadsheet the content of a folder or of the result of a search, click on ![]({{file name='spreadsheet.png'}}).&nbsp;The spreadsheet editor opens and displays as many line as there are items in the result of the query. The columns that are displayed corresponds to the columns that were displayed on the content view. If you modify the list of columns in the content view&nbsp;clicking on the&nbsp; ![]({{file name='edit_columns.png' space='userdoc' page='icons-index'}})&nbsp;icon from the content view, this will be reflected on the spreadsheet when re-opening it. The spreadsheet module uses the layout introspection API&nbsp;to be able to list the columns displayed in the content view. A mapping is done for each Layout Widget so as to display an adapted cell editor, among Simple text, DirectoryValue suggest and calendar. See the limitations section for details of the mapping. Results are&nbsp;fetched page per page using the following page provider:

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

To modify a value just click on the cell so as to make the editor appears.&nbsp;Once a cell is modified it becomes blue.

You can modify has many cells you want without saving, and click on **Save**&nbsp;when you want to save.

The **Autosave** button allows you to automatically save all the changes done on the spreadsheet.&nbsp;

**Undo a Modification**

If you want to reverse a change on a cell, click right on the cell concerned and select **Undo**.

## Standalone Mode

A standalone mode is accessible through this URL:&nbsp;https:/nuxeo-platform-url/nuxeo/spreadsheet/, where you have to enter a NXQL query to fetch your documents. From this URL you can do all the same actions than on your Nuxeo Platform instance. &nbsp;

![]({{file name='standalone_spreadsheet.png'}} ?w=650,border=true)

**Note:** When opening the spreadsheet to edit a list of documents it relies on the content view definition to determine the layout and page provider to use. In standalone mode it relies on a custom&nbsp;`spreadsheet_listing_&nbsp;_`layout and on a `spreadsheet_query_&nbsp;_`page provider.

## Vocabularies

To display translated labels for vocabularies the spreadsheet relies on content enrichers, thus&nbsp;optimizing the number of requests sent to the server.

By using a set of vocabulary [content enrichers]({{page page='content-enricher'}}) with a shared _vocabularies&nbsp;_category the spreadsheet is able to retrieve all the current labels for&nbsp;vocabulary&nbsp;backed properties&nbsp;by specifying&nbsp;`X-NXContext-Category = &ldquo;vocabularies&rdquo;`

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

*   <span style="line-height: 21.58px;">The system information in read-only like Modified, Version and State are in grey to disable users to modify them.&nbsp;</span>
*   For more information about the Mapping between listing layouts widgets and the displayed cell types, see&nbsp;[https://github.com/nuxeo/nuxeo-platform-spreadsheet/blob/master/src/main/js/app/ui/widgets.js#L57](https://github.com/nuxeo/nuxeo-platform-spreadsheet/blob/master/src/main/js/app/ui/widgets.js#L57)

The Nuxeo Spreadsheet add-on is done integrating&nbsp;[Handsontable](http://handsontable.com/).&nbsp;