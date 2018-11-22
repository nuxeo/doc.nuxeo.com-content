---
title: How to Write Reusable Automation Chains
review:
    comment: ''
    date: '2016-12-19'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
details:
    howto:
        excerpt: 'Learn how to factorize similar automation chains. '
        level: Intermediate
        tool: Studio
        topics: Automation
labels:
    - lts2016-ok
    - howto
    - automation
    - fdavid
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235642'
    ajs-parent-page-title: Automation How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Write+Reusable+Automation+Chains
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Write+Reusable+Automation+Chains'
    page_id: '19792322'
    shortlink: wgEuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/wgEuAQ'
    source_link: /display/NXDOC/How+to+Write+Reusable+Automation+Chains
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2014-12-05 15:34'
        message: ix broken excerpt includ
        version: '14'
    -
        author: Solen Guitter
        date: '2014-12-01 21:59'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-09-16 11:26'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-09-09 18:09'
        message: 'Fix formatting in ChangeCaseStatus chain, update links'
        version: '11'
    -
        author: Solen Guitter
        date: '2014-06-12 10:31'
        message: Added related topics
        version: '10'
    -
        author: Thibaud Arguillere
        date: '2014-06-12 00:31'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:10'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:09'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:09'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:08'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-06-12 00:07'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-06-11 23:50'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-06-11 23:46'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-06-04 15:05'
        message: ''
        version: '1'

---
{{! excerpt}}

You might have some automation chains in your project that all have a similar structure, meaning the same operations in the same order, the only difference being that the parameter values sent to the composing operations are different. Usually in this case, you can factorize your implementation using parameterized chains.

{{! /excerpt}}

Let's take an example: You want to change the lifecycle of a document, while logging the company of the user who changed the document lifecycle state in the audit. If you want a chain that validates a document, you would write the following chain:

```
- Context.FetchDocument
- Document.SetLifeCycle:
    value: approve
- Audit.Log:
    event: test
    category: Automation
    comment: "@{CurrentUser.company}"
```

If you want to do it for each lifecycle changes (making it obsolete, or draft, ...), you would have to write several chains calling the `Document.SetLifeCycle` and `Audit.Log` operations.

**Or your can use a parameterized chain:**

1.  Create a chain called "ChangeCaseStatus".

    ```
    params:
    - transitionName:
        type: string
    - userPropertyToLog:
        type: string
    operations:
    - Context.FetchDocument
    - Document.SetLifeCycle:
        value: "@{ChainParameters['transitionName']}"
    - Audit.Log:
        event: test
        category: Automation
        comment: "@{CurrentUser.getProperty(ChainParameters['userPropertyToLog'])}"
    ```

    {{#> callout type='info' }}

    To declare the parameters of a chain, you can use the [Chain Parameters tab]({{page space='studio' page='automation-chains'}}) of the Automation Chain feature in Nuxeo Studio. To reference a parameter's value inside the chain:

    `@{ChainParameters['parameterName']}`

    {{/callout}}
2.  Create a second chain that references the first chain with a `Run Chain` operation, using the `parameters` field. This second chain is used to approve document.

   ```
    - Context.RunOperation:
        id: ChangeCaseStatus
        isolate: 'false'
        parameters:
          userPropertyToLog: company
          transitionName: approve
    ```

    You can then leverage this chain with a user action.

3.  Repeat step 2 to create as many chains as you need to follow the different lifecycle transitions.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{{multiexcerpt 'popular-how-tos' page='How to Create an Automation Chain'}}}

</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Lifecycle in Nuxeo Studio]({{page space='studio' page='life-cycle'}})
- [User Actions in Nuxeo Studio]({{page space='studio' page='user-actions'}})

{{/panel}}</div></div>
