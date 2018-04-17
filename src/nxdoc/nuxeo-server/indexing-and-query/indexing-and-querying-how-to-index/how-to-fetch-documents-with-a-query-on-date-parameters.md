---
title: How to Fetch Documents with a Query on Date Parameters
review:
    comment: ''
    date: '2017-01-26'
    status: ok
details:
    howto:
        excerpt: Learn how to make it possible to process documents depending on a date parameter.
        level: Intermediate
        tool: Studio
        topics: 'Automation, Content view'
labels:
    - howto
    - lts2016-ok
    - content-view
    - atchertchian
    - automation
    - studio
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235681'
    ajs-parent-page-title: Transversal How-Tos
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Fetch+Documents+with+a+Query+on+Date+Parameters
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Fetch+Documents+with+a+Query+on+Date+Parameters'
    page_id: '8683535'
    shortlink: D4CE
    shortlink_source: 'https://doc.nuxeo.com/x/D4CE'
    source_link: /display/NXDOC/How+to+Fetch+Documents+with+a+Query+on+Date+Parameters
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2015-01-26 17:15'
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

<br />
Customization done in this how-to relates to the Nuxeo Platform's JSF UI. Before continuing:

*   Make sure to select JSF UI in Nuxeo Studio's [application definition]({{page space='studio' page='application-definition'}}) screen.
*   [Install the nuxeo-jsf-ui package]({{page page='installing-a-new-package-on-your-instance'}}) in your Nuxeo Platform instance.

{{/callout}}

## Creating Dedicated Properties

The first step is to add date-type properties to our document type. We will use these new properties as a landmark for our future queries. Let's say we want to recall the expiring date 3 months before it happens.

To know more about how to define a document type and add properties check out the page [How to Define a Document Type]({{page page='how-to-define-a-document-type'}}).

1.  Create a new document type called "mydocumenttype".
2.  In the **Schema** tab of the document type, add two date-type properties:
    *   "expiring_date",
    *   "recall_expiring_date".![]({{file name='schema-date-medatata.png'}} ?w=600,border=true)
3. In the **Creation Layout** and **Edit Layout** tabs, add the expiring_date property. Make sure that the expiring date is mandatory during creation.

## Filling in the Properties

It would be possible to let users fill the recall date manually. But it is more interesting to update it when the document is created or updated.

### Filling in the Properties When the Document Is Created

Let's create an automation chain that first copies and saves the "expiring_date" to the "recall_expiring_date" property. Then the chain withdraws three months to the "recall_expiring_date".

#### Automation Chain

Create the following automation chain:

```
- Context.FetchDocument
- Document.SetProperty:
    xpath: "mydocumenttype:recall_expiring_date"
    save: "true"
    value: "@{Document[\"mydocumenttype:expiring_date\"].clone()}"
- Context.RunScript:
    script: "Document['mydocumenttype:recall_expiring_date'].add(2,-3);"
- Document.Save
```

{{#> callout type='tip' }}

Save time by pressing the "switch editor" button in your automation chain, paste the YAML definition provided earlier, and switch again to see the result.

For more informations on the `add()` parameter, you can take a look on the [Calendar Java Class documentation](http://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html).

{{/callout}}

#### Event Handler

You can then [bind the automation chain to any event or action]({{page page='how-to-create-an-automation-chain'}}#content-automation-chain-binding) you want. For example, to fill in the "recall_expiring_date" when the document is created, create a new event handler with the following properties:

*   **Events**: Document created
*   **Current document has one of the types**: mydocumenttype

### Updating the Property Automatically When the Document Is Modified

It is also possible to have the "recall_expiring_date" updated when a user modifies the document. The chain will be similar to the one used for the creation of the document, but will not include any "save" step.

{{#> callout type='note' }}

A chain called upon the modification of a document should not include a save-related operation. A save operation calls document modification events and the chain would run into an infinite loop.

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
    script: "Document['mydocumenttype:recall_expiring_date'].add(2,-3);"
```

#### Event Handler

Create a new event handler with the following properties:

*   **Events**: Before document modification
*   **Current document has one of the types**: mydocumenttype

## Using the Property in a Query

The "recall_expiring_date" is most commonly useful in the two following cases:

*   To display all documents expiring soon, using a content view;
*   To launch operations on the documents after a predefined period of time, using automation chains.

### Listing Expiring Documents Using a Content View

In content views the way to fetch all documents for which the "recall date" is outdated is to define the query filter.

1.  On the [ **Query & form** tab of your content view]({{page page='how-to-define-a-new-content-view'}}), define your query filter.

    ```
    ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND mydocumenttype:recall_expiring_date <= DATE ?

    ```

2.  Define the date query parameter:

    ```
    #{currentDate.toString()}

    ```

    {{#> callout type='tip' }}

    You will probably want to add other criteria to you query filter:
    *   Adding `ecm:currentLifeCycleState` will only fetch documents in the appropriate lifecycle state.
    *   Adding `ecm:path` will only fetch documents located at the specified folder.

    You may refer to the [NXQL]({{page page='nxql'}}) documentation for an exhaustive options list.

    {{/callout}}
3.  Click on the **Results** tab and select the relevant information to display on the result table. For instance:

    *   Title with link,
    *   Expiring date,
    *   Recall expiring date,
    *   Lifecycle state.

You can then leverage this [new content view in a tab]({{page space='studio' page='documents'}}#tabs-content-views) on a custom folder document type for instance.
    ![]({{file name='expiring-documents-content-view.png'}} ?w=600,border=true)

### Processing Expiring Documents Using an Automation Chain

If you want to make an operation on all the documents that expire soon, you will use an automation chain. This chain will start with the **Fetch > Document.Query** operation It will produce a list of documents that operations accepting documents can use.

Let's take the example of an automation chain doing the following steps:

1.  Fetching all visible documents whose "expiring date" is outdated;
2.  Deleting these documents ([moving them to the trash]({{page page='how-to-use-trash-feature'}})).

The chain will look like that:

```
- Document.Query:
    query: "SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND mydocumenttype:expiring_date <= DATE '@{CurrentDate.format(\"yyyy-MM-dd\")}'"
    language: NXQL
- Document.SetLifeCycle:
    value: delete
- Seam.Refresh: {}
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Popular How-Tos'}}

- [How to Define a New Content View]({{page page='how-to-define-a-new-content-view'}})
- [Fetch a Document by Its ID or Path]({{page page='how-to-fetch-a-document-by-its-id-or-path'}})
- [How to Create an Automation Chain]({{page page='how-to-create-an-automation-chain'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation screen in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Content views in Nuxeo Studio]({{page space='studio' page='content-view-query-and-form-tab'}})
- [Use of MVEL in Automation Chains]({{page page='use-of-mvel-in-automation-chains'}})

{{/panel}}</div></div>
