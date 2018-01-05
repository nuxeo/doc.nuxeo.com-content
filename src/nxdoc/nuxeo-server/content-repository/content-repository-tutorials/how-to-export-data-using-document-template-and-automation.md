---
title: How to Export Data Using Document Template and Automation
review:
    comment: ''
    date: '2016-12-19'
    status: ok
details:
    howto:
        excerpt: Learn how to generate a CSV file listing all the documents of your Nuxeo Platform repository.
        level: Beginner
        tool: Studio
        topics: 'Automation, Document template'
labels:
    - lts2016-ok
    - mvel
    - freemarker
    - scripting
    - howto
    - automation
    - fdavid
    - studio
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235681'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Export+Data+Using+Document+Template+and+Automation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Export+Data+Using+Document+Template+and+Automation'
    page_id: '5570841'
    shortlink: GQFV
    shortlink_source: 'https://doc.nuxeo.com/x/GQFV'
    source_link: /display/NXDOC/How+to+Export+Data+Using+Document+Template+and+Automation
tree_item_index: 600
history:
    -
        author: Manon Lumeau
        date: '2015-12-16 17:03'
        message: ormattin
        version: '28'
    -
        author: Manon Lumeau
        date: '2015-12-16 17:00'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-12-01 21:55'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-09-15 15:44'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-07-21 12:37'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-07-21 12:33'
        message: ''
        version: '23'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:20'
        message: ''
        version: '22'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:18'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:16'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-03-31 22:02'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2014-03-31 22:01'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-03-10 18:07'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-09-02 16:00'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-06-27 11:28'
        message: Added related topics
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2012-06-28 14:48'
        message: Migrated to Confluence 4.0
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2012-06-28 14:48'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2011-09-05 15:51'
        message: Updated instructions and added related howtos
        version: '12'
    -
        author: Arthur Gallouin
        date: '2011-07-13 11:24'
        message: ''
        version: '11'
    -
        author: Arthur Gallouin
        date: '2011-07-13 11:23'
        message: ''
        version: '10'
    -
        author: Arthur Gallouin
        date: '2011-07-13 11:19'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-07-12 12:43'
        message: fixed typos and formatting
        version: '8'
    -
        author: Arthur Gallouin
        date: '2011-07-11 11:02'
        message: ''
        version: '7'
    -
        author: whajeri
        date: '2011-02-15 16:45'
        message: ''
        version: '6'
    -
        author: whajeri
        date: '2011-02-08 17:26'
        message: ''
        version: '5'
    -
        author: whajeri
        date: '2011-02-08 17:00'
        message: ''
        version: '4'
    -
        author: whajeri
        date: '2011-02-08 16:34'
        message: ''
        version: '3'
    -
        author: whajeri
        date: '2011-02-04 19:33'
        message: ''
        version: '2'
    -
        author: whajeri
        date: '2011-02-04 18:15'
        message: ''
        version: '1'

---
{{#> panel type='primary'}}
[Check out the blog post Export Data with Content Automation.](http://blogs.nuxeo.com/development/2014/03/export-data-content-automation/)
{{/panel}}

Document Templates are pattern files used to produce any type of text-based document with dynamic content. Used in combination with [automation chains]({{page page='content-automation-concepts'}}), document templates can be used to generate files such as CSV files, MS Word or OpenOffice file, PDF files, XML files, HTML, etc.

{{! excerpt}}

In a few steps, we will show how to generate a CSV file that lists all the documents of your Nuxeo Platform repository and some metadata.

{{! /excerpt}}

## Step 1: Creating the Document Template

You can choose between two languages to create a document template: [MVEL](http://mvel.codehaus.org/) and [FreeMarker](http://freemarker.sourceforge.net/). Here we will use FreeMarker. If you are not familiar with this language, you can check out [their documentation](http://freemarker.sourceforge.net/docs/index.html).

In this example we want to create a CSV file that displays a list of documents with some metadata. CSV is a quite simple format that is often used to present tabular data.

```
column_name1, column_name2, column_name3
data_A1, data_B1, data_C1
data_A2, data_B2, data_C2
..., ..., ...
```

This will produce a table like this:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">column_name1</th>
        <th colspan="1">column_name2</th>
        <th colspan="1">column_name3</th>
      </tr>
      <tr>
        <td colspan="1">data_A1</td>
        <td colspan="1">data_B1</td>
        <td colspan="1">data_C1</td>
      </tr>
      <tr>
        <td colspan="1">data_A2</td>
        <td colspan="1">data_B2</td>
        <td colspan="1">data_C2</td>
      </tr>
    </tbody>
  </table>
</div>

**To create the template:**

1.  Go to **Templates** -> **Document Templates**.
2.  Click on the **New** button to create a new document template.
3.  Give your new template the ID "CSVExport" and click on the **Next** button.
    Now we are ready to fill in the template.
4.  The first line of the template will represent the column of the generated CSV file. Since those column names never change, type them as we want them to appear in the final document:

    ```
    Title, Description, Creator, Creation Date

    ```

5.  The template will enable to handle a list of documents. For each of these documents, we will need to retrieve some of its metadata and display them.

    ```
    <#list This as doc>
    "${doc["dc:title"]}","${doc["dc:description"]}","${doc["dc:creator"]}","${doc["dc:created"]}"
    </#list>

    ```

    The template now looks like that:

    ```
    Title, Description, Creator, Creation Date
    <#list This as doc>
    "${doc["dc:title"]}","${doc["dc:description"]}","${doc["dc:creator"]}","${doc["dc:created"]}"
    </#list>
    ```

6.  Click on **Save** to save your template.

**Notes**

*   Double quotes between elements are optional (CSV format).
*   If you are going to use the template in order to create an HTML file, you can put HTML tags in the template.
*   The only thing that differs from Nuxeo usual syntax is FreeMarker's `<list>` element.
*   Within a document template, whether you use FreeMarker or MVEL, you can use the same variables, functions and XPath expressions that are used in [automation chains]({{page page='content-automation-concepts'}}). As document templates and automation chains frequently work together, each context variable set in the automation chain can be used in the template.

**Other FreeMarker Examples**

*   A common use case is retrieving values from a vocabulary list. Vocabularies are composed of IDs and labels, and we want to get the Label of vocabulary elements. To do that we will use this function:

    ```
    "${Fn.getVocabularyLabel("mymetadata",doc["myschemaprefix:mymetadata"])}"

    ```

*   The element `dc:subjects` is a list, so it has to be listed as one using the script.

    ```
    <#list doc["dc:subjects"] as subject>
    ${subject}
    </#list>

    ```

## Step 2: Using the Document Template

We are going to [create an automation chain]({{page page='how-to-create-an-automation-chain#create-a-content-automation-chain'}}) to query the Nuxeo repository and render the query result as a template-based CSV file.

The chain should look like this:

```
- Context.FetchDocument
- Document.Query:
    query: "SELECT * FROM Document"
    language: NXQL
- Render.DocumentFeed:
    template: "template:CSVExport"
    filename: mygeneratedfile.csv
    mimetype: text/csv
    type: ftl
- Seam.DownloadFile
```

**Notes**

*   In this example, we query all the documents in the repository. You can define the query to filter the content repository and display only the documents that meet the query conditions. See the page [NXQL]({{page page='nxql'}}) for more information about Nuxeo SQL-like query language.
*   To download a file in an HTML format instead of CSV, use the `.html` extension in the filename and choose `text/xml` as the mimetype.

## Step 3: Creating the Button to Generate the CSV File

The only step left is to [create a button]({{page page='how-to-create-an-automation-chain#binding-to-a-buttonaction'}}) (**User Action** -> **New Action Feature**) that will trigger this operation chain.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

- [How to Create an Automation Chain]({{page page='how-to-create-an-automation-chain'}})
- [How to Fetch a Document by Its ID or Path]({{page page='how-to-fetch-a-document-by-its-id-or-path'}})
- [How to Quickly Generate a PDF Using Document Template]({{page page='how-to-quickly-generate-a-pdf-using-document-template'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Document Templates and Automation Rendering Service]({{page page='document-templates-and-automation-rendering-service'}})
- [NXQL]({{page page='nxql'}})
- [How to Create an Automation Chain]({{page page='how-to-create-an-automation-chain'}})

{{/panel}}</div></div>
