---
title: Collaborative Features
review:
    comment: ''
    date: '2018-02-26'
    status: ok
labels:
    - alert
    - comment
    - collaboration
    - lock
    - excerpt
    - multiexcerpt-include
    - excerpt-include
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '11043048'
    ajs-parent-page-title: Nuxeo Platform User Documentation
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Collaborative+Features
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Collaborative+Features'
    page_id: '26314875'
    shortlink: e4iRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/e4iRAQ'
    source_link: /display/USERDOC/Collaborative+Features
tree_item_index: 1000
history:
    -
        author: Manon Lumeau
        date: '2015-09-07 09:55'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-08-27 13:36'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-08-27 13:35'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-08-27 13:34'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-08-27 13:29'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-08-27 13:26'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-08-27 13:26'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-08-27 13:25'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-08-27 10:05'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-08-27 08:46'
        message: ''
        version: '1'

---
{{! excerpt}}

The Nuxeo Platform provides you with a set of features that ease collaborative work.

{{! /excerpt}}

## Lock - Unlock

When you need to work on a document for some time, you don't want other users to edit it at the same time and disturb your own work. This is typically the case where you lock the document by clicking the icon ![]({{file name='lock.gif' page='icons-index'}}).

A locked document remains visible to other users but only the locker and users with Manage everything permission can edit it. Other users can see the document locked through the orange icon ![]({{file name='locked.png' page='icons-index'}}). A tooltip indicates who locked the document and when.

Users with Management everything permission can unlock document on other users' behalf so a document does not remains locked during the locker's vacation and blocks other user's work, for instance.

## Versions Management

{{{multiexcerpt 'versioning-intro' page='USERDOC:Browse'}}}

See the [Versioning Overview section]({{page page='editing-content'}}#versioning-overview) for more details.

## Nuxeo Diff

{{{excerpt 'USERDOC:Nuxeo Diff'}}}

{{{multiexcerpt 'comparison-possibilities' page='USERDOC:Nuxeo Diff'}}}

![]({{file name='Diff-compare-screen.png' page='nuxeo-diff'}} ?w=600,border=true)

See the page [Nuxeo Diff]({{page page='nuxeo-diff'}}) for more details.

## {{> anchor 'comments'}}Comments

Comments enable users to discuss about the document and its evolution. You can add comments on the documents, via the **Comments** tab. The last comments added on the document are displayed on the **Summary** tab of the document.

![]({{file name='comments-on-summary.png'}} ?w=650,h=405,border=true)

Comments are attached to the document in the workspace. When the document is published, comments are not published with it.

All users can add and read comments on a document. Adding comments, answering a comment and deleting comments take place in the **Comments** tab of the document. To add or answer a comment, click respectively on the **Add a comment** button or **Reply** link, type your text and save.

![]({{file name='comment-reply-added.png'}} ?w=650,border=true)

Only the author of the comment and users with Manage everything permission can delete the comments of a document, by clicking the **Delete** link.

{{#> callout type='warning' }}

Deleting a comment is a permanent action. You cannot restore deleted comments.

{{/callout}}

## Validation Workflows

The Nuxeo Platform includes a workflow engine that enables you to integrate business processes and review documents.

{{{multiexcerpt 'default-validation-workflows' page='NXDOC:Workflow'}}}

See the page [Workflows]({{page page='workflows'}}) for more details.

## {{> anchor 'alerts'}}Alerts

{{! multiexcerpt name='alert-functional'}}

Alerts are emails automatically sent to users when an event occurs in a space to enable you to follow the activity of a document or a space.


When you follow a document or a space activity, you get an email when the events below happen:

*   Creation: you get an email when some content is created in the space
*   Modification: you receive an email every time the space or its content is edited
*   Workflow changed: you receive an email for each action that happens during a review (start, abandon, document approval, document rejection)
*   Approval workflow started: you receive an email every time an approval workflow is started
*   Comments moderation: you receive an email when a comment is approved on a site
*   Publish: you receive an email when a document is published in the specified section
*   Share: you receive an email when a document has been shared with you by its principal author or by another user. 

    {{#> callout type='info' }}

    The publish event is available in sections only. The other events are available in workspaces only.

    {{/callout}}

{{! /multiexcerpt}}

### Following Documents

The icon ![]({{file name='subscribe.png' page='icons-index'}}) enables you to follow a document or a space by clicking it. The icon becomes ![]({{file name='unsubscribe.png' page='icons-index'}}). Click on it to stop following the document, meaning you won't get any email notification at all from that document.

{{#> callout type='info' }}

You cannot unfollow a document when your group was subscribed to alerts on it.

{{/callout}}

On your Home **Alerts** tab, you can see all the events you will be alerted of and the associated documents. From there you can unsubscribe from a specific event by clicking the corresponding **Unsubscribe** button. You won't receive email alerts regarding this event but you will still be notified about the other events.

![]({{file name='Home-Alerts-tab.png'}} ?w=600,border=true)

### Managing Subscriptions

Users with Manage everything permission can see the documents the users follow. They can also subscribe users or groups to alerts or unsubscribe them from the **Manage** > **Alerts** tab of a space**:**

1.  Type the name of a user or a group in the search box.
    ![]({{file name='manage-subscription-search-user.png'}} ?w=350,border=true)
2.  Click on the user or group you want to subscribe to a notification.
    The user or group is displayed on the right of the search box.
    ![]({{file name='manage-subscriptions-user-selected.png'}} ?w=350,border=true)
3.  Select the action you want to do (**Subscribe** or **Unsubscribe**) and the notification concerned.
4.  Click on the **Register** button.
    The modifications are displayed in the list of subscriptions.
    ![]({{file name='manage-subscriptions-user-subscribed.png'}} ?w=350,border=true)
