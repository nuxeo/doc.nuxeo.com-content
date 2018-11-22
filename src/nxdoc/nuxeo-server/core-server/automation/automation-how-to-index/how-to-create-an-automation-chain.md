---
title: How to Create an Automation Chain
review:
    comment: ''
    date: '2017-12-14'
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
details:
    howto:
        excerpt: This how-to explains the different steps to create and configure an automation chain using Nuxeo Studio.
        level: Beginner
        tool: Studio
        topics: 'Automation, Event handler, User action'
labels:
    - lts2016-ok
    - howto
    - automation
    - fdavid
    - user-action
    - event-handler
    - studio
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '19235642'
    ajs-parent-page-title: Automation How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Create+an+Automation+Chain
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Create+an+Automation+Chain'
    page_id: '1409188'
    shortlink: pIAV
    shortlink_source: 'https://doc.nuxeo.com/x/pIAV'
    source_link: /display/NXDOC/How+to+Create+an+Automation+Chain
tree_item_index: 100
history:
    -
        author: Manon Lumeau
        date: '2016-07-21 09:31'
        message: ''
        version: '36'
    -
        author: Manon Lumeau
        date: '2016-06-09 15:46'
        message: ''
        version: '35'
    -
        author: Manon Lumeau
        date: '2016-04-28 14:42'
        message: ''
        version: '34'
    -
        author: Manon Lumeau
        date: '2016-04-28 14:21'
        message: 'Fix Studio menu label       '
        version: '33'
    -
        author: Solen Guitter
        date: '2015-01-26 17:04'
        message: link update
        version: '32'
    -
        author: Solen Guitter
        date: '2014-12-03 11:50'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-12-01 22:00'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2014-09-17 15:36'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2014-09-15 17:53'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2014-09-09 14:17'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-09-09 14:13'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-09-09 11:54'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-09-09 11:48'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-09-09 11:38'
        message: Update links and screenshots
        version: '23'
    -
        author: Solen Guitter
        date: '2014-08-25 10:40'
        message: Remove reference to 5.3 and formatting
        version: '22'
    -
        author: Solen Guitter
        date: '2013-07-17 17:18'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2011-09-06 15:11'
        message: Migrated to Confluence 4.0
        version: '20'
    -
        author: Solen Guitter
        date: '2011-09-06 15:11'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2011-09-02 15:08'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2011-09-01 18:46'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2011-09-01 18:45'
        message: updated screenshots and steps with latest UI
        version: '16'
    -
        author: Solen Guitter
        date: '2011-08-06 01:12'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2011-08-06 00:56'
        message: ''
        version: '14'
    -
        author: Roland Benedetti
        date: '2011-06-19 23:36'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2010-05-18 11:46'
        message: added screenshots and reorganized instructions
        version: '12'
    -
        author: Solen Guitter
        date: '2010-05-18 10:16'
        message: updated links
        version: '11'
    -
        author: Solen Guitter
        date: '2010-05-18 10:08'
        message: added anchors and links
        version: '10'
    -
        author: Solen Guitter
        date: '2010-04-30 18:15'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2010-04-27 02:29'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2010-04-27 00:57'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2010-04-27 00:48'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2010-04-27 00:47'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-04-27 00:44'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-04-27 00:44'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-04-27 00:38'
        message: ''
        version: '2'
    -
        author: Eric Barroca
        date: '2010-04-23 01:56'
        message: ''
        version: '1'

---
{{! excerpt}}

This guide explains how to create and configure an automation chain using Nuxeo Studio.

{{! /excerpt}}

This is done in two steps:

1.  [Create the chain](#automation-chain-creation).
2.  [Bind it](#automation-chain-binding-event-handler) to a button, an [action]({{page space='studio' page='user-actions'}}), or an [event handler]({{page space='studio' page='event-handlers'}}).

## Create an Automation Chain {{> anchor 'automation-chain-creation'}}

**To create an automation chain:**

1.  In the left menu, click on **Automation** and then on **Automation Chains**.
2.  Click on the **New** button.
3.  Give your automation chain an ID and click on the **Next** button.
    ![]({{file name='NXS-automation-create.png'}} ?w=350,border=true)
    The automation chain editor is displayed.
    The **Fetch > Context Document(s)** is automatically added as the first operation of the chain.
4.  If needed, remove the **Fetch > Context Document(s)** and replace it with another Fetch operation. The Fetch operation feeds the chain with some document input, whether it is one document or a list of documents. There are various ways to fetch:
    *   **Context document** will bring either the UI Current document, or the document attached to the event (depending on what you bound your operation chain, see later).
    *   **Fetch Query** will bring back the result of the query as a document list.
    *   **Get Document** fetches a document by its path.
5.  Start to drag and drop operations in the flow, respecting their input and output types. Leverage context and scripting capabilities to capture and reuse information all along the flow.
    ![]({{file name='NXS_automation_add_operation.png'}} ?w=600,border=true)

    {{#> callout type='tip' }}

    Click on the **Switch editor** button to write your chain in YAML or paste a chain copied from a how-to for instance.

    {{/callout}}
6.  Save your chain.
    You now need to bind your automation chain by creating a new action or a new event handler.

## Automation Chain Binding

Binding the automation chain to a button, an action or an event handler is done in the User action and event handler edition forms.

### Binding to an Action {{> anchor 'automation-chain-binding-button'}}

**To bind the chain to a button/action:**

1.  Create a new user action from the Studio tree:
    1.  In the **Automation** menu entry, click on **User Actions**.
    2.  Click on the **New** button.
    3.  On the pop up window displayed, give the action an ID, a name and select to which [category of actions]({{page page='actions-display'}}) it should be tied (contextual icons, folder bar buttons, clipboard actions, user links...) then click on **Next**.
        ![]({{file name='NXS-action-creation-form.png'}} ?w=350,border=true)
        The action edition form is displayed.
2.  Fill in all the required information : Label, icon, ...
3.  In the **Action Activation** section, give the necessary filtering information, to target your action to the right context.
    ![]({{file name='NXS-action-edition-1.png'}} ?w=450,border=true)
4.  In the **Action Execution** section, select the automation chain to which you want the action to be bound.
    ![]({{file name='NXS-action-edition-form-2.png'}} ?w=350,border=true)
5.  Click on the **Save** button.

### Binding to an Event Handler {{> anchor 'automation-chain-binding-event-handler'}}

**To bind the chain to an event handler:**

1.  Create a new event handler from the Studio tree:
    1.  In the **Automation** menu entry, click on **Event Handlers**.
    2.  Click on the **New** button.
    3.  On the pop up window displayed,, give the event handler an ID and click **Next**.
        ![]({{file name='NXS-event-handler-creation.png'}} ?w=350,border=true)
2.  Choose to which events the event handler should be bound (documentCreated, documentUpdated...) and indicate whether the chain should be run synchronously or asynchronously.
    ![]({{file name='NXS-event-handler-edition-form-1.png'}} ?w=350,border=true)
3.  In the **Event handler Activation** section, fill in the filtering information, to target your event handler to the right context.
    ![]({{file name='NXS-event-handler-edition-form-2.png'}} ?w=450,border=true)
4.  Choose the automation chain to which you want the event handler to be bound.
    ![]({{file name='NXS-event-handler-edition-form-3.png'}} ?w=350,border=true)
5.  Click on the **Save** button.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{! multiexcerpt name='popular-how-tos'}}{{#> panel heading='Popular How-Tos'}}

- [How to Export Data Using Document Template and Automation]({{page page='how-to-export-data-using-document-template-and-automation'}})
- [How to Fetch a Document by Its ID or Path]({{page page='how-to-fetch-a-document-by-its-id-or-path'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}{{! /multiexcerpt}}</div><div class="column medium-6">{{! multiexcerpt name='related-documentation'}}{{#> panel heading='Related Documentation'}}

- [Automation screen in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Event Handlers screens in Nuxeo Studio]({{page space='studio' page='event-handlers'}})
- [User Actions screens in Nuxeo Studio]({{page space='studio' page='user-actions'}})

{{/panel}}{{! /multiexcerpt}}</div></div>
