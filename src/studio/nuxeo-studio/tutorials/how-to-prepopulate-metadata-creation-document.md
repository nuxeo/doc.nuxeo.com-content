---
title: 'HOWTO: Pre-populate metadata in the document creation layout'
review:
  comment: ''
  date: '2019-12-17'
  status: ok
details:
  howto:
    excerpt: Learn how to pre-populate metadata in the document creation layout
    tool: Nuxeo Studio
    topics: Nuxeo Studio
    level: Beginner
labels:
  - howto
tree_item_index: 1350
toc: true
---

This tutorial provides steps to set property values automatically when a user opens the document creation layout.

In many cases, it can be convenient to initialize a document with a title, or another metadata:
- A document title can hold a counter  which is automatically calculated
- A document property can be filled according to the document location
- Another property can be filled from the current date or the user information

## Useful functions

To achieve this, we can use several useful functions. Here is a _non exhaustive_ list of the recurrent functions:

<table>
<tr>
  <th>Function</th>
  <th>Use Case</th>
  <th>Example</th>
</tr>
<tr>
  <td>`CurrentDate.*`</td>
  <td>Set information related to the current date. It can calculates dates before or after the current date</td>
  <td>`@{CurrentDate.format("ddMMyyyy")}`, `@{CurrentDate.days(7)}`, `@{org.nuxeo.ecm.core.schema.utils.DateParser.formatW3CDateTime(CurrentDate.date)}`</td>
</tr>
<tr>
  <td>`CurrentUser.*`</td>
  <td>Set information related to the current user. It can include the user firstname, lastname or any custom properties</td>
  <td>`@{CurrentUser.email}`</td>
</tr>
<tr>
  <td>`Fn.getNextId(String)`</td>
  <td>Obtain a unique value for the given key. Each time this function is called using the same key, a different string will be returned</td>
  <td>`Fn.getNextId("myCustomCounter")`</td>
</tr>
<tr>
  <td>`@{Fn.getVocabularyLabel("voc", "key")}`</td>
  <td>Get the the label associated to the given key from the given vocabulary, instead of its ID.</td>
  <td>`@{Fn.getVocabularyLabel("status", "in_progress")}`</td>
</tr>
</table>

## Configuration Steps

To initialize metadata we must:

- Define an **Automation Chain or Automation Scripting** that assigns a value to the metadata.
- Define an **Event Handler** that executes our automation chain / scripting when an **empty document is created**.

In this example, we will work with a type of document called Tender (Tender being the document type label, `TEND` as document type id), which has an associated schema called `tend`, which contains only one metadata called `ref` (String).

We want to initialize the reference at the moment of showing the user the creation form. The refinance must follow the following pattern: `TEND-XXXXXX`, where:
- `TEND`: Document type
- `-`: Fixed string
- `XXXXXX`: Unique reference number

### Definition of an Automation Chain

First of all, we will access the **Nuxeo Studio Modeler** > **Automation** > **Automation Chains** menu and create a new automation chain called `AC_Tender_InitTenderAttributes`, which will include the following operations:

```
Fetch> Context.FetchDocument
Document> Document.SetProperty
  XPath: tend:ref
  save: false
  value: @{Document.type}-@{Fn.getNextId ("TEND")}
```

### Definition of an Event Handler

Next, we will create an Event Handler from the **Nuxeo Studio Modeler** > **Automation** > **Event Handlers**  menu that is responsible for executing the automation chain when the document is created as an "Empty Document". We have to establish the following values in the configuration screen:

- Events: Empty document created
- Event handler activation:
- Current document has one of the types: Tender
- Current document has facet: Any
- Current document is: Regular Document
- Event handler execution: `AC_Tender_InitTenderAttributes`

### Document type layouts

Generate the Tender layouts in **Nuxeo Studio Designer** > **Layouts** > **Local Document Types**

### Deploy your Studio Project

Once the previous steps are completed, we must only deploy our changes in our environment. When we create a new document we will see how the reference field has a default value that varies each time.

### Going  further

Our reference uses a correlative number (1, 2, 3...), so the references generated are `TEND-1`, `TEND-2`, `TEND-3`... But, what happens if we want our reference to always have the same length?

We just have to add a couple of calls to Java objects to format our correlative number with zeros to the left. Thus our references will have this aspect: `TEND-0000004`, `TEND-0000005`, `TEND-0000006`...

```
Fetch> Context.FetchDocument
Document> Document.SetProperty
XPath: tend: ref
save: false
value: TEND-@{java.lang.String.format("% 07d", java.lang.Integer.parseInt (Fn.getNextId ("TEND")))}
```

`Integer.parseInt` converts the identifier to integer, since `Fn.getNextId` returns a string. On the other hand the call to `java.lang.String.format` filled with zeros to the left to a maximum of 7 positions. When we use a java object in MVEL expressions we must use the name of the object including the name of the package in which it is contained to avoid possible conflicts.



* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Get value from the parent document before creation](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/modeler-tips-tricks#get-value-from-the-parent-document-before-creation)

{{/panel}}</div><div class="column medium-6">
</div></div>
