---
title: Agenda Overview
review:
    comment: ''
    date: ''
    status: ok
labels:
    - social-collaboration-document
    - event
    - agenda
toc: true
confluence:
    ajs-parent-page-id: '21299521'
    ajs-parent-page-title: Nuxeo Social Collaboration
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Agenda+Overview
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Agenda+Overview'
    page_id: '21299470'
    shortlink: DgFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DgFFAQ'
    source_link: /display/USERDOC60/Agenda+Overview
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:45'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2016-01-18 13:35'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:24'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:23'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-11-27 15:43'
        message: Updated button label
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:34'
        message: Removed related topics from TOC
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:33'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:33'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-10-12 17:53'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-06-11 17:28'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-06-11 17:28'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-06-11 17:28'
        message: Added related content
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-06-11 17:25'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='NXDOC60:Generic Multi-Excerpts'}}}

Coming by default with the Social Collaboration module is an agenda feature. This feature enables users to create events that will be displayed to users in a dedicated agenda gadget on the different dashboards. As soon as a user can access the workspace or folder in which the event has been created, he can see the event in the agenda gadget.

## Creating Events

Events can be created in workspaces, social workspaces and folders.

In social workspace, events can be created from the **Content** tab of the social workspace in the Document Management view, or from the Collaboration view of the social workspace.

&nbsp;

**To create an event from the Content tab of the workspace:**

1.  In the **Content** tab of the workspace, click on the **New** button.
2.  On the window **Available document types**, click on the desired document.
3.  Fill in the document's creation form.
4.  Click on the **Create** button.

**To create an event from the Collaboration view of the workspace:**

1.  Click on the **Actions** button in the top right corner.
2.  Click on **Create an event**.
3.  Fill in the creation form.
    ![]({{file name='agenda-creation-form-collaboration-view.png'}} ?w=650,border=true)
4.  Click on **Create**.
    The **Summary** tab of the event is displayed, in the Document Management view of the social workspace.
    The event is now available in the **Agenda** gadget.

**To create an event from the Agenda Gadget:**

{{#> callout type='info' heading='Pre-requisite'}}

The Agenda gadget must be displayed on the dashboard.

{{/callout}}

In the Agenda gadget, events can be created from the list view only.

1.  On the Agenda gadget, click on the **Add** button.
2.  Fill in the event creation form.
    ![]({{file name='agenda-creation-form-gadget.png'}} ?w=300,border=true)
3.  Click on the **Create** button.
    The event is displayed in the list of the Incoming events.

**Events properties**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Field</th><th colspan="1">Description</th></tr><tr><td colspan="1">Title</td><td colspan="1">Name of the event</td></tr><tr><td colspan="1">Description</td><td colspan="1">What the event is about</td></tr><tr><td colspan="1">Start date</td><td colspan="1">

Date and time at which the event starts

</td></tr><tr><td colspan="1">End date</td><td colspan="1">Date and time at which the event ends</td></tr><tr><td colspan="1">Place</td><td colspan="1">Where the event takes place</td></tr></tbody></table></div>

## Editing an Event

Events can be modified from the **Edit** tab. Unlike other documents, they don't have additional metadata from this tab, and users cannot choose to create a new version of the event when they edit it. The system automatically creates a new version of the event when it is modified.

**To modify the event:**

1.  Click on the **Edit** tab of the event.
2.  Modify the event's properties you want.
3.  Click on **Save**.
    The modifications are immediately available in the **Agenda** gadget. A new version of the event is automatically created by the system.

## Browsing Events

Events are displayed in the **Agenda** gadget. The gadget displays only the events relevant in the dashboard on which it is displayed:

*   on the Home dashboard, you can see all the events you have access to;
*   on a social workspace dashboard, you can see only the events in the social workspace.
    Events are also displayed in the **Content** tab of workspaces and folders, like any other document.

The gadget offers two views of the events list.

*   The list view shows the events as a list. By default, it displays all the coming events, but you can choose to display on the day's events, all the events planned in the coming week or in the coming month. Click on **Day**, **Month**, **Week** or **Incoming** to change the list filter.

    ![]({{file name='agenda-gadget-list-view.png'}} ?w=300,border=true)
*   The Calendar view shows the events in a calendar. By default, the calendar shows a month calendar by default, but you can display only one week or one day. Click on **Day**, **Month**, **Week** to change the calendar view.

    ![]({{file name='agenda-gadget-calendar-view.png'}} ?w=300,border=true)

    &nbsp;

To see the details of an event, click on the event's title from the Agenda gadget or from the **Content** tab of the workspace or folder. The event's **Summary** tab is displayed. You can then edit it, link it to other documents, comment it and tag it.

## Actions Available on Events

The features below are available on events:

*   [Relations]({{page page='relations'}})
*   [Comments]({{page page='comments'}})
*   [Tags]({{page page='tags'}})

&nbsp;