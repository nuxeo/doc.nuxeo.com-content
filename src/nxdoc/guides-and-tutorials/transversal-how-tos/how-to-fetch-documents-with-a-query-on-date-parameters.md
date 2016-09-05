---
title: How to Fetch Documents with a Query on Date Parameters
details:
    howto:
        excerpt: >-
            Learn how to make it possible to process documents depending on a
            date parameter. 
        level: Intermediate
        tool: Studio
        topics: 'Automation, Content view'
labels:
    - howto
    - automation
    - studio
    - content-view
toc: true
confluence:
    ajs-parent-page-id: '22380616'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Fetch+Documents+with+a+Query+on+Date+Parameters
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Fetch+Documents+with+a+Query+on+Date+Parameters
    page_id: '22380716'
    shortlink: rIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/rIBVAQ'
    source_link: /display/NXDOC60/How+to+Fetch+Documents+with+a+Query+on+Date+Parameters
history:
    - 
        author: Solen Guitter
        date: '2015-01-26 16:42'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2014-09-12 17:40'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2014-09-12 17:26'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2014-09-12 17:19'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2014-09-12 17:17'
        message: Add screen shots
        version: '26'
    - 
        author: Solen Guitter
        date: '2014-09-12 17:07'
        message: More detailed steps and link update
        version: '25'
    - 
        author: Solen Guitter
        date: '2014-08-29 15:42'
        message: fix formatting
        version: '24'
    - 
        author: Solen Guitter
        date: '2014-08-29 15:40'
        message: ''
        version: '23'
    - 
        author: Manon Lumeau
        date: '2014-07-31 17:48'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-06-12 15:23'
        message: ''
        version: '21'
    - 
        author: Alain Escaffre
        date: '2014-03-31 22:00'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-03-10 18:02'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-03-10 18:02'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-08-29 17:23'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-07-17 18:40'
        message: Added excerpt
        version: '16'
    - 
        author: Frédéric Vadon
        date: '2011-12-22 16:14'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Frédéric Vadon
        date: '2011-12-22 16:14'
        message: typo
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-09-06 15:52'
        message: Added related tutorials
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-09-02 16:17'
        message: added related howtos
        version: '12'
    - 
        author: Frédéric Vadon
        date: '2011-08-24 18:10'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2011-08-23 12:02'
        message: ''
        version: '10'
    - 
        author: Frédéric Vadon
        date: '2011-08-23 11:30'
        message: ''
        version: '9'
    - 
        author: Frédéric Vadon
        date: '2011-08-23 11:30'
        message: ''
        version: '8'
    - 
        author: Frédéric Vadon
        date: '2011-08-23 11:28'
        message: ''
        version: '7'
    - 
        author: Frédéric Vadon
        date: '2011-08-23 11:25'
        message: ''
        version: '6'
    - 
        author: Frédéric Vadon
        date: '2011-08-22 19:43'
        message: ''
        version: '5'
    - 
        author: Frédéric Vadon
        date: '2011-08-22 18:45'
        message: ''
        version: '4'
    - 
        author: Frédéric Vadon
        date: '2011-08-22 18:44'
        message: ''
        version: '3'
    - 
        author: Frédéric Vadon
        date: '2011-08-22 15:48'
        message: ''
        version: '2'
    - 
        author: Frédéric Vadon
        date: '2011-08-22 11:56'
        message: ''
        version: '1'

---
{{! excerpt}}

In this how-to we will see how to make it possible to process a list of document depending on a date parameter. An example would be how to display or do an operation on all documents expiring in less than 3 months.

{{! /excerpt}} {{#> callout type='info' }}

This how-to requires knowledge about:

*   [Document Types Definition]({{page page='how-to-define-a-document-type'}}),
*   [Automation chains]({{page page='content-automation-concepts'}}),
*   [Event handlers]({{page space='studio' page='event-handlers'}}),
*   [Content views]({{page page='how-to-define-a-new-content-view'}}).

{{/callout}}

## Creating a Dedicated Metadata

The first step is to add a date-type metadata to our document type. We will use this new metadata as a landmark for our future queries. Let's say we want to recall the expiring date 3 months before it happens.

To know more about how to define a&nbsp; document type and add metadata check out the page [How to Define a Document Type]({{page page='how-to-define-a-document-type'}}).

1.  Create a new document type called "mydocumenttype".
2.  In the **Schema** tab of the document type, add two date-type metadata:
    *   "expiring_date",
    *   "recall_expiring_date".![]({{file name='schema-date-medatata.png'}} ?w=600,border=true)

## Filling in the Metadata

It would be possible to let users fill the recall date manually. But it is more interesting to update it when the document is created or updated.

### Filling in the Metadata When the Document Is Created

Let's create an automation chain that first copies and saves the "expiring_date" to the "recall_expiring_date" metadata. Then the chain withdraws three months to the "recall_expiring_date".

#### Automation Chain

Create the following automation chain:

```
- Context.FetchDocument
- Document.SetProperty:
    xpath: "mydocumenttype:recall_expiring_date"
    save: "true"
    value: "@{Document[\"mydocumenttype:expiring_date\"].clone()}"
- Context.RunScript:
    script: "Document[ 'mydocumenttype:recall_expiring_date'].add(2,-3);"
- Document.Save
```

{{#> callout type='tip' }}

For more informations on the `add()` parameter, you can take a look on the [Calendar Java Class documentation](http://download.oracle.com/javase/1.5.0/docs/api/java/util/Calendar.html).

{{/callout}}

#### Event Handler

You can then [bind the automation chain to any event or action]({{page page='how-to-create-an-automation-chain#content-automation-chain-binding'}}) you want. For example, to fill in the "recall_expiring_date" when the document is created,&nbsp; create a new event handler with the following properties:

*   **Events**: Document created
    Make sure that the expiring date is mandatory at the creation.
*   **Current document has one of the types**: mydocumenttype

### Updating the Metadata Automatically When the Document Is Modified

It is also possible to have the "recall_expiring_date" updated when a user modifies the document. The chain will be similar to the one used for creation of the document, but doesn't include any "save" step.

{{#> callout type='note' }}

A chain called upon the modification of a document should not include a save-related operation. A save operation calls document modification events and the chain would get into an infinite loop.

{{/callout}}

#### Automation Chain

Create the following automation chain:

```
- Context.FetchDocument
- Document.SetProperty:
    xpath: "mydocumenttype:recall_expiring_date"
    save: "false"
    value: "@{Document[\"mydocumenttype:expiring_date\"].clone()}"
- Context.RunScript:
    script: "Document[ 'mydocumenttype:recall_expiring_date'].add(2,-3);"
```

#### Event Handler

Create a new event handler with the following properties:

*   **Events**: Before document modification
*   **Current document has one of the types**: mydocumenttype

## Using the Metadata in a Query

The "recall_expiring_date" is most commonly useful in the two following cases:

*   To display all documents expiring soon, using a content view;
*   To make operations on the documents after a predefined period of time, using automation chains.

### Listing Expiring Documents Using a Content View

In content views the way to fetch all documents for which the "recall date" is outdated is to define the query filter.

1.  On the [ **Query & form** tab of your content view]({{page page='how-to-define-a-new-content-view'}}), define your query filter.

    ```
    ecm:mixinType != 'HiddenInNavigation' AND ecm:isCheckedInVersion = 0 AND mydocumenttype:recall_expiring_date <= DATE ?

    ```

2.  Define the date query parameter:

    ```
    #{currentDate.toString()}

    ```

    {{#> callout type='tip' }}

    You will probably want to add other criteria to you query filter. Adding `ecm:currentLifeCycleState` will only fetch documents in the appropriate life cycle state. Adding `ecm:path` will only fetch documents located at the specified folder.

    {{/callout}}
3.  Click on the **Results** tab and select the relevant information to display on the result table. For instance:

    *   Title with link,
    *   Expiring date,
    *   Recall expiring date,
    *   Life cycle state.You can then leverage this [new content view in a tab]({{page space='studio' page='documents#tabs-content-view'}}) on a custom folder document type for instance.
    ![]({{file name='expiring-documents-content-view.png'}} ?w=600,border=true)

### Processing Expiring Documents Using an Automation Chain

If you want to make an operation on all the documents that expire soon, you will use an automation chain. This chain will start with the **Fetch > Query** operation It will produce a list of documents that operations accepting documents can use.

Let's take the example of an automation chain does the following step:

1.  It fetches all visible and deleted documents whose "recall expiring date" is outdated;
2.  It deletes these documents ([moves them to trash]({{page page='how-to-enable-the-trash-feature'}})).

The chain will look like that:

```
- Document.Query:
    query: "SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation' AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != 'deleted' AND mydocumenttype:recall_expiring_date<= DATE '@{CurrentDate.format(\"yyyy-MM-dd\")}'"
    language: NXQL
- Document.SetLifeCycle:
    value: delete
- Seam.Refresh: {}
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

*   [How to Define a New Content View]({{page page='how-to-define-a-new-content-view'}})
*   [Fetch a Document by Its ID or Path]({{page space='NXDOC' page='Fetch a+Document+by+Its+ID+or+Path'}})
*   [How to Create an Automation Chain]({{page page='how-to-create-an-automation-chain'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Automation screen in Nuxeo Studio]({{page space='studio' page='automation'}})
*   [Content Automation Concepts]({{page page='content-automation-concepts'}})
*   [Content views in Nuxeo Studio]({{page space='studio' page='content-view-query-and-form-tab'}})
*   [Use of MVEL in Automation Chains]({{page page='use-of-mvel-in-automation-chains'}})

{{/panel}}</div></div>