---
title: Alerts
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last
    - last-review-20141201
    - alert
toc: true
confluence:
    ajs-parent-page-id: '21299491'
    ajs-parent-page-title: Working with Documents
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Alerts
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Alerts'
    page_id: '21299486'
    shortlink: HgFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/HgFFAQ'
    source_link: /display/USERDOC60/Alerts
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2016-09-01 14:38'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-08-27 13:51'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-08-27 13:50'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-12-01 17:34'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-11-25 11:35'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-03-10 18:21'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-11-25 14:58'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-10-22 18:14'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-09-30 16:01'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2013-09-30 16:00'
        message: Updated icons
        version: '12'
    -
        author: Solen Guitter
        date: '2013-07-02 12:13'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-10-30 11:06'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2012-10-01 17:44'
        message: Added Home Alerts tab screenshot
        version: '9'
    -
        author: Solen Guitter
        date: '2012-07-03 16:14'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2012-07-03 16:14'
        message: Added related customization pages
        version: '7'
    -
        author: Solen Guitter
        date: '2012-07-03 14:06'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2012-06-28 17:10'
        message: Updated content to the new 5.6 follow system
        version: '5'
    -
        author: Solen Guitter
        date: '2011-11-24 10:09'
        message: Added toc
        version: '4'
    -
        author: Solen Guitter
        date: '2011-06-01 11:50'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-12-01 11:21'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-28 11:05'
        message: ''
        version: '1'

---
&nbsp;

Alerts are emails automatically sent to users when an event occurs in a space. Users can follow the activity of a document or a space, which means that they will receive an alert when an event occurs on the document or space. Spaces' managers can subscribe users to alerts.

When users follow a document or a space activity, they get an email when the events below happen:

*   Creation: users get an email when some content is created in the space;
*   Modification: users receive an email every time the space or its content is edited;
*   Workflow changed: users receive an email for each action that happens during a review (start, abandon, document approval, document rejection);
*   Approval workflow started: users receive an email every time an approval workflow is started;
*   Comments moderation: users receive an email when a comment is approved on a site.
*   Publish: users receive an email when a document is published in the specified section.

    {{#> callout type='info' }}

    The publish event is available in sections only. The other events are available in workspaces only.

    {{/callout}}

## Following a Document or the Activity of a Space

You need to have at least reading rights to follow a document or a space.

**To follow a document or a space activity:**
From the document or space, click on the icon ![]({{file name='subscribe.png' page='icons-index'}}).
The icon becomes green to indicate that you follow the document and, from now on, you will receive an email every time an event occurs on the document.
On the Home **Alerts** tab, the user can see all the events he will be alerted of and the associated documents.

![]({{file name='Home-Alerts-tab.png'}} ?w=650,border=true)

## Unfollowing a Document or the Activity of a Space

You need to have at least reading rights to unfollow a document or a space. You can either unfollow the document and don't receive any email anymore, or you can unsubscribe from some events only.

{{#> callout type='info' }}

You cannot unfollow a document when your group was subscribed to alerts on it.

{{/callout}}

**To unfollow a document or a space activity:**
From the document or space, click on the icon ![]({{file name='unsubscribe.png' page='icons-index'}}).
The icon becomes grey to indicate that you don't follow the document and you won't receive emails anymore when events occur on the document.
On the Home **Alerts** tab, no event is associated to the document anymore.

**To unsubscribe from an event:**

1.  Go on the **Alerts** tab in your Home.
    ![]({{file name='Home-Alerts-tab.png'}} ?w=650,border=true)
2.  Click on the **Unsubscribe** button corresponding to the event you want to unsubscribe from.
    The event is removed from the list. You won't receive emails when this event occurs on the document or space.

## Managing Subscriptions

Only users with management rights can manage the users' alerts.

Users with management rights can see the documents the users follow. They can also subscribe users or groups to alerts or unsubscribe them.

**To manage subscriptions:**

1.  In the space, click on the **Manage** tab.
2.  Click on the **Alerts** sub-tab.
    The lists of users subscribed to each notification type is displayed above a subscription form.
3.  Type the name of a user or a group in the search box.
    ![]({{file name='manage-subscription-search-user.png'}} ?w=350,border=true)
4.  Click on the user or group you want to subscribe to a notification.
    The user or group is displayed on the right of the search box.
    ![]({{file name='manage-subscriptions-user-selected.png'}} ?w=350,border=true)
5.  Select the action you want to do (**Subscribe** or **Unsubscribe**) and the notification concerned.
6.  Click on the **Register** button.
    The modifications are displayed in the list of subscriptions.
    ![]({{file name='manage-subscriptions-user-subscribed.png'}} ?w=350,border=true)

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

&nbsp;

&nbsp;

{{#> panel heading='Customization'}}

*   [How to Customize Email Templates]({{page space='nxdoc60' page='how-to-customize-email-templates'}})

{{/panel}}

&nbsp;

&nbsp;

</div><div class="column medium-6">

&nbsp;

</div></div>
