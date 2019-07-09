---
title: 'HOWTO: Create an Automation Chain'
review:
    comment: ''
    date: '2019-07-09'
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
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create an Automation Chain/NXS-automation-create.png
      name: NXS-automation-create.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![NXS-automation-create.png](nx_asset://5553a6aa-ac63-4da1-8c1d-d44f49281f38 ?w=350,border=true)
    The automation chain editor is displayed.</br>  
    The **Fetch > Context Document(s)** is automatically added as the first operation of the chain.
4.  If needed, remove the **Fetch > Context Document(s)** and replace it with another Fetch operation. The Fetch operation feeds the chain with some document input, whether it is one document or a list of documents. There are various ways to fetch:
    - **Context document** will bring either the UI Current document, or the document attached to the event (depending on what you bound your operation chain, see later).
    - **Fetch Query** will bring back the result of the query as a document list.
    - **Get Document** fetches a document by its path.
5.  Start to drag and drop operations in the flow, respecting their input and output types. Leverage context and scripting capabilities to capture and reuse information all along the flow.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a User Action /validateDocument-chain-studio.png.1562678242765
      name: validateDocument-chain-studio.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![validateDocument-chain-studio.png](nx_asset://e6da24c4-83da-4127-a93e-a93016bf89c9 ?w=650,border=true)

    {{#> callout type='tip' }}
    Click on the **Switch editor** button to write your chain in YAML or paste a chain copied from a how-to for instance.
    {{/callout}}
6.  Save your chain.
    You now need to bind your automation chain by creating a new action or a new event handler.

## Automation Chain Binding

Binding the automation chain to a button, an action or an event handler is done in the Buttons menu in Studio Designer.

### To an Action {{> anchor 'automation-chain-binding-button'}}

**To bind the chain to a button/action:**

1. In Designer, go to **Actions** menu and hover over the `+` button and select **Operation**
1. On the creation form, on the Element Binding section:
    - Give your action a name, a slot type (the schema on the right will help you check where your action will be displayed), choose an icon, a label.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create an Automation Chain/NXS-action-edition-1.png
      name: NXS-action-edition-1.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![NXS-action-edition-1.png](nx_asset://fa7ccf1f-470b-44fb-913a-cc6c649bec00 ?w=400,border=true)
    - On the **Operation** field select the automation chain to which you want the action to be bound.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Insert a User Action /NXS-action-edition-form-2.png
      name: NXS-action-edition-form-2.png
      studio_designer#screenshot#up_to_date
    --}}
    ![NXS-action-edition-form-2.png](nx_asset://554dd8db-3236-4cb2-9edb-ba35fd216c38 ?w=400,border=true)
    - On the **Activation filter** give the necessary filtering information, to target your action to the right context.
1. Click on **Save**.

### To an Event Handler {{> anchor 'automation-chain-binding-event-handler'}}

**To bind the chain to an event handler:**

1.  On Studio Modeler side, go to **Automation** > **Event Handlers** and click on the **New**.</br>
    Give your Event Handler a name and click on **Ok**.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create an Automation Chain/NXS-event-handler-creation.png
      name: NXS-event-handler-creation.png
      studio_modeler#popup#up_to_date
    --}}
    ![NXS-event-handler-creation.png](nx_asset://5b656cec-2655-4bd3-a537-952aa7b7e7f3 ?w=350,border=true)
2.  Choose to which events the event handler should be bound (documentCreated, documentUpdated...) and indicate whether the chain should be run synchronously or asynchronously.
    {{!--      ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create an Automation Chain/NXS-event-handler-edition-form-1.png
      name: NXS-event-handler-edition-form-1.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![NXS-event-handler-edition-form-1.png](nx_asset://e4b325ef-0605-401e-b1e9-459b289c7cc7 ?w=350,border=true)
3.  In the **Event handler Activation** section, fill in the filtering information, to target your event handler to the right context.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create an Automation Chain/NXS-event-handler-edition-form-2.png
      name: NXS-event-handler-edition-form-2.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![NXS-event-handler-edition-form-2.png](nx_asset://57d0e110-a85a-4b5c-81df-adb77c8b3fc8 ?w=350,border=true)
4.  Choose the automation chain to which you want the event handler to be bound.
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create an Automation Chain/NXS-event-handler-edition-form-3.png
      name: NXS-event-handler-edition-form-3.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![NXS-event-handler-edition-form-3.png](nx_asset://3d2006cb-1b3e-4a0f-98f1-f1d8c476c09d ?w=350,border=true)
5.  Click on the **Save** button.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{! multiexcerpt name='popular-how-tos'}}{{#> panel heading='Popular How-Tos'}}

- [HOWTO: Export Data Using Document Template and Automation]({{page page='how-to-export-data-using-document-template-and-automation'}})
- [HOWTO: Fetch a Document by Its ID or Path]({{page page='how-to-fetch-a-document-by-its-id-or-path'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}{{! /multiexcerpt}}</div><div class="column medium-6">{{! multiexcerpt name='related-documentation'}}{{#> panel heading='Related Documentation'}}

- [Automation screen in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Event Handlers screens in Nuxeo Studio]({{page space='studio' page='event-handlers'}})
- [User Actions screens in Nuxeo Studio]({{page space='studio' page='user-actions'}})

{{/panel}}{{! /multiexcerpt}}</div></div>
