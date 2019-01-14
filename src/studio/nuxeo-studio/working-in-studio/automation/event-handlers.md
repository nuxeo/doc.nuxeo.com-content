---
title: Event Handlers
review:
    comment: ''
    date: ''
    status: ok
labels:
    - event-handler
toc: true
confluence:
    ajs-parent-page-id: '12911806'
    ajs-parent-page-title: Automation
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Event+Handlers
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Event+Handlers'
    page_id: '12914252'
    shortlink: TA7F
    shortlink_source: 'https://doc.nuxeo.com/x/TA7F'
    source_link: /display/Studio/Event+Handlers
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:26'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2016-04-28 13:26'
        message: Fix related content
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-03-12 09:34'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-02-12 14:46'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-01-26 17:21'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-03-10 17:25'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-07-17 14:44'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-07-15 13:51'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-07-15 13:50'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-07-15 13:50'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-07-15 12:48'
        message: Fixed typos
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2013-07-11 19:39'
        message: Title formatting
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2013-07-01 12:04'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2013-07-01 11:50'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2013-07-01 11:45'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2013-02-24 19:18'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2013-02-24 18:39'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2013-02-24 18:36'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-02-24 18:23'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2013-02-24 18:17'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2013-02-24 18:03'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Watch the related courses on Nuxeo University'}}
[Course on Automation chains, Automation scripting and Events](https://university.nuxeo.com/learn/public/course/view/elearning/46/automation-chains-automation-scripting-and-events)
![]({{file name='university-automation.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Concept

To let you understand what event handlers are we can do a parallel with:

*   Triggers in a database,
*   Events on event-based programming patterns like in VBA, JavaScript, ...

{{{multiexcerpt 'disabling-feature' page='branding'}}}

You'll read more about event handlers in the [developer documentation]({{page space='nxdoc' page='events-and-listeners'}}).

## Creating an Event Handler

<div>

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Event Handlers/Event Handler Creation
    name: EventHandlerCreation.png
    studio_modeler#screenshot#up_to_date
--}}
![Event Handler Creation](nx_asset://a585c4fa-d4b7-4221-8418-45b1ed378eb8 ?w=500,border=true)

</div>

*   **Feature ID**: The id of the document type. Will be used as the technical Id at generation.

## Editing an Event Handler

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Event Handlers/Event Handler Edition
    name: EventHandlerEdition.png
    studio_modeler#screenshot#up_to_date
--}}
![Event Handler Edition](nx_asset://982a88a2-314d-4729-b8fa-1714eb3bb0c7 ?w=400,border=true)

### Event Handler Definition

*   **Events**: Select a list of events for which the automation chain referenced later will be processed. If you don't find the event you are looking for, you can add a new one [using the registries.]({{page page='registries'}})
*   **Is Asynchroneous**: The automation chain bound to the event will be processed asynchroneously, outside the transaction. More details on the [developer documentation]({{page space='nxdoc' page='events-and-listeners'}}).This is an advanced option, most of the time you won't check this option.

### Event Handler Enablement

See the [Filtering Options Reference Page]({{page page='filtering-options-reference-page'}}).

### Event Handler Execution

*   **Selecting an existing operation**: the selected automation chain will be executed for the events selected in the Event Handler definition section

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in other documentation'}}

- [Events and Listeners]({{page space='nxdoc' page='events-and-listeners'}})
- [Common Events]({{page space='nxdoc' page='common-events'}})
- [Scheduling Periodic Events]({{page space='nxdoc' page='scheduling-periodic-events'}})
- [How to Inherit a Metadata from a Parent Document]({{page space='nxdoc' page='how-to-inherit-metadata-from-a-parent-document'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
