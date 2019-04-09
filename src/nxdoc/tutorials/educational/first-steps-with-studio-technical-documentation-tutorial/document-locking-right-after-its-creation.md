---
title: Document Locking Right After its Creation
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
    - lock
    - multiexcerpt
toc: true
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-04-28 13:47'
        message: 'ix Studio menu label     '
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-11-19 17:05'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2015-11-18 13:33'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-10-09 17:18'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-10-09 17:17'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-10-09 17:17'
        message: Review steps and add read more
        version: '19'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:35'
        message: ''
        version: '18'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:31'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:23'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:23'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2014-10-06 17:23'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-10-06 16:48'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2014-10-06 16:31'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-06-12 11:41'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2014-03-31 22:04'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2014-03-31 21:57'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-07-15 14:36'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-07-15 14:35'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-07-15 13:50'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-07-10 23:39'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2013-07-10 19:55'
        message: ''
        version: '4'
    -
        author: Frédéric Vadon
        date: '2013-07-10 19:52'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2013-07-10 19:50'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2013-07-10 15:13'
        message: ''
        version: '1'
previous_link: nxdoc/custom-content-view-for-documentation-items
next_link: nxdoc/validation-workflow-choosing-the-assignee-based-on-a-metadata

---
{{! multiexcerpt name='partOfTechDocTuto'}}

In this step, we will see how we can trigger an automated action when a document is created. The goal is to prevent users other than the creator to edit the document until he decides it is ok to release it.

{{! /multiexcerpt}}

Although there are several options, we choose the locking one. We will create an automation chain to lock the document for every users but its creator. An event handler will trigger this automation chain whenever a new documentation item is created.

## Creating the Event Handler

1.  In Studio, go to **Automation** > **Event Handlers**.
2.  Click on **New** to create a new event handler.
3.  Give it the ID `AutoLockOnItemCreation` and click on **Next**.
    Ignore the validation error for now: it is here because we have not yet defined what our event handler will trigger.
4.  In the **Event Handler Definition** section, select the event "Document Created".
5.  In the **Event Handler Activation** section, select the `DocumentationItem` document type.
    Hold the "ctrl" key to select several document types.
6.  In **Current Document is**, choose "Regular Document", to make sure it is only fired for usual documents. You do not want it when creating a proxy (used by the publishing system) for instance.
    ![]({{file name='EvenHandler.png'}} ?w=600,border=true)
7.  In the Event Handler Execution section, click on **Create**.
8.  Call the automation chain `AutoLockOnItemChain`.
    You are now displayed the automation chain definition screen, in **Automation** > **Automation Chains**.

## Defining the Automation Chain

The automation chain will leverage the operation that is called Document > Lock. This operation needs a "document" in input and returns a document. In the mean time the operation locked the input document for the current user.

The newly created document is put in the context as well as the user who triggered the automation chain. Because the the chain is triggered at the creation of the document, this user is obviously the creator.

Since we have everything required by the chain provided by default, our automation chain will be very simple.

1.  Leave the default **Fetch** > **Context.FetchDocument**.
    It will create an input document (the newly created document) from the context for the next operation.
2.  Add the operation **Document** > **Document.Lock**.
3.  Leave the owner parameter empty
    ![]({{file name='SimpleChain-3.png'}} ?w=500,h=260,border=true)
4.  Click on **Save**.

## Testing Your Changes

We now want to test what we did.

1.  [Update your Nuxeo Platform instance]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) with the latest changes from Studio.
2.  Create a new Technical Documentation Item document.
    It is locked and you see that it is locked by the creator of the document (Administrator is the example below).
    ![]({{file name='AutoLock.png'}} ?w=500,h=295,border=true)

{{#> callout type='tip' heading='Congratulations'}}

You now have documents that cannot be modified by someone else than the creator of the document. You have added you first business logic thanks to Studio.

To sum up what we saw:

*   Any automated action is done through automation chains.
*   Automation chains are an aggregation of atomic operations.
*   Automation chains can be triggered by several means. We did it through an event captured by a Event Handler.

{{/callout}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Locking vs Permission to Restrict Edit Access to a Document]({{page page='locking-vs-permission-to-restrict-edit-access-to-a-document'}})
- [Automation Chains in Studio]({{page space='studio' page='automation-chains'}})
- [Content automation chain reference]({{page page='content-automation-concepts'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
