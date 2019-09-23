---
title: Nuxeo Agenda
review:
    comment: ''
    date: '2018-12-02'
    status: ok
labels:
    - nuxeo-agenda
    - excerpt
    - multiexcerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '11043055'
    ajs-parent-page-title: Adding Features
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+Agenda
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+Agenda'
    page_id: '17793895'
    shortlink: Z4MPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Z4MPAQ'
    source_link: /display/USERDOC/Nuxeo+Agenda
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-05-04 13:14'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-11-09 16:48'
        message: Add TOC
        version: '9'
    -
        author: Solen Guitter
        date: '2015-11-09 16:47'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-11-09 16:47'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-11-09 16:47'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-11-09 16:46'
        message: Migrate content from obsolete Social Collaboration doc
        version: '5'
    -
        author: Solen Guitter
        date: '2014-11-14 18:01'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-12-10 16:46'
        message: Added related topics
        version: '3'
    -
        author: Solen Guitter
        date: '2013-12-10 16:38'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-11-22 11:38'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='/nxdoc/generic-multi-excerpts'}}}

{{! multiexcerpt name='nuxeo-agenda-functional-overview'}}{{! excerpt}}

The [Nuxeo Agenda package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-agenda) provides users with a new documents type "Event" that enables them to manage their list of meetings and other events using an Agenda gadget on their dashboard.

{{! /excerpt}}

### Creating Events

Events can be created in workspaces and folders.

**To create an event:**

1.  In the **Content** tab of the workspace, click on the **New** button.
2.  On the window **Available document types**, click on the desired document.
3.  Fill in the document's creation form.
4.  Click on the **Create** button.

**To create an event from the Agenda Gadget:**

In the Agenda gadget, events can be created from the list view only.

1.  On the Agenda gadget, click on the **Add** button.
2.  Fill in the event creation form.
    ![]({{file name='agenda-creation-form-gadget.png'}} ?w=300,border=true)
3.  Click on the **Create** button.</br>
    The event is displayed in the list of the Incoming events.

**Events properties**

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Field</th>
<th colspan="1">Description</th>
</tr>
<tr>
<td colspan="1">Title</td>
<td colspan="1">Name of the event</td>
</tr>
<tr>
<td colspan="1">Description</td>
<td colspan="1">What the event is about</td>
</tr>
<tr>
<td colspan="1">Start date</td>
<td colspan="1">Date and time at which the event starts</td>
</tr>
<tr>
<td colspan="1">End date</td>
<td colspan="1">Date and time at which the event ends</td>
</tr>
<tr>
<td colspan="1">Place</td>
<td colspan="1">Where the event takes place</td>
</tr>
</tbody>
</table>
</div>

### Editing an Event

Events can be modified from the **Edit** tab. Unlike other documents, they don't have additional metadata from this tab, and users cannot choose to create a new version of the event when they edit it. The system automatically creates a new version of the event when it is modified.

**To modify the event:**

1.  Click on the **Edit** tab of the event.
2.  Modify the event's properties you want.
3.  Click on **Save**.</br>
    The modifications are immediately available in the **Agenda** gadget. A new version of the event is automatically created by the system.

### Browsing Events

Events are displayed in the **Agenda** gadget, which shows all the events you have access to.

The gadget offers two views of the events list.

*   The list view shows the events as a list. By default, it displays all the coming events, but you can choose to display on the day's events, all the events planned in the coming week or in the coming month. Click on **Day**, **Month**, **Week** or **Incoming** to change the list filter.

    ![]({{file name='agenda-gadget-list-view.png'}} ?w=300,border=true)
*   The Calendar view shows the events in a calendar. By default, the calendar shows a month calendar by default, but you can display only one week or one day. Click on **Day**, **Month**, **Week** to change the calendar view.

    ![]({{file name='agenda-gadget-calendar-view.png'}} ?w=300,border=true)

To see the details of an event, click on the event's title from the Agenda gadget or from the **Content** tab of the workspace or folder. The event's **Summary** tab is displayed. You can then edit it, link it to other documents, comment it and tag it.

### Actions Available on Events

The features below are available on events:

*   [Relations]({{page page='editing-content'}}#relations)
*   [Comments]({{page page='collaborative-features'}}#comments)
*   [Tags]({{page page='tags-jsf-ui'}})

{{! /multiexcerpt}}
