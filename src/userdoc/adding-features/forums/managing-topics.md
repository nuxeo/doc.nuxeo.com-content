---
title: Managing Topics
review:
    comment: ''
    date: '2020-06-08'
    status: ok
labels:
    - topic
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '2392376'
    ajs-parent-page-title: Forums
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Managing+Topics
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Managing+Topics'
    page_id: '2392378'
    shortlink: OoEk
    shortlink_source: 'https://doc.nuxeo.com/x/OoEk'
    source_link: /display/USERDOC/Managing+Topics
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-12-08 14:31'
        message: ink updat
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:42'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:40'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:32'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:31'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:24'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:23'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:23'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:22'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:21'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-11-27 14:20'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-11-26 18:03'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-11-04 00:52'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-10-22 18:17'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2013-09-30 17:11'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-01-18 17:01'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-24 10:33'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-24 10:33'
        message: Added related content
        version: '7'
    -
        author: Solen Guitter
        date: '2011-11-24 10:30'
        message: Added toc
        version: '6'
    -
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-06-06 14:47'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-12-01 11:24'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-10 18:43'
        message: fixed broken links
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-27 15:26'
        message: ''
        version: '1'
---

{{multiexcerpt 'DeprecatedAddon' space='nxdoc' page='generic-multi-excerpts'}}

A topic can be moderated, that is to say that the content needs to be approved in order to be available to forum readers.

*   In a topic without moderation, the content is available without preliminary approval.
*   In a moderated topic, the content needs to be approved by a moderator to be visible for users.

{{#> callout type='tip' }}

You are automatically added as a moderator if you create a moderated topic.

{{/callout}}

## Adding a Topic

**To add a new topic in a forum:**

1.  In the **Forum** tab of the forum, click on the **New Topic** button.
2.  Type the topic's title and optionally add a description.
3.  Select if the topic is moderated or not. If yes, search and select the moderators.
4.  Click on the **Create** button.
    The **Topic** tab of the topic is displayed, with the form to add a first comment on the topic.
    ![]({{file name='topic-created.png'}} ?w=650,border=true)

The list of the topics available in a forum is displayed in a table in the **Forum** tab.

![]({{file name='forum-topics-list.png'}} ?w=650,border=true)

## Moderating a Topic{{> anchor 'topic-moderation'}}

When a user creates a topic, he or she decides if the topic is moderated or not. Moderation is a process that makes comments available to moderators only when they are created, until they approve or reject the pending comments. Approval is thus mandatory to make comments available for other forum users.

When a user creates a moderated topic, he appoints users to manage comments on the topic. Only these moderators can approve or reject pending comments.

Moderators can see if there are comments pending in the forum tab. The number of comments waiting for approval is indicated for each topic of the forum. They also have a moderation task displayed in their [dashboard]({{page page='browsing-content'}}#dashboard), in their My tasks gadget.

![]({{file name='forum-content-table.png'}} ?w=650,border=true)

### Approving a Comment

Approving a comment means to publish it in the thread and make it available for all forum users.

**To approve a comment:**

1.  Open the topic that has pending comments.
    The pending comments have the status "Waiting for approval".
    ![]({{file name='forum-moderation-comment-waiting.png'}} ?w=650,border=true)
2.  Click on the **Approve** link in the top right corner of the pending comment.
    The comment's status is "Published". It is now available to all forum readers.
    ![]({{file name='forum-moderation-comment-approved.png'}} ?w=650,border=true)

### Rejecting a Comment

Rejecting a comment means that you make the comment permanently unavailable for forum users.

**To reject a comment:**

1.  Open the topic that has pending comments.
    The pending comments have the status "Waiting for approval".
    ![]({{file name='forum-moderation-comment-waiting2.png'}} ?w=650,border=true)
2.  Click on the **Reject** link in the top right corner of the pending comment.
    The comment's status is "Rejected". It is now permanently unavailable.
    ![]({{file name='forum-moderation-comment-rejected.png'}} ?w=650,border=true)

## Deleting a Comment

Only the comment's author and the topic moderators can delete comments.

**To delete a comment in a topic:**

1.  Open the topic.
2.  Click on the **Delete** link located in the top right corner of the comment to delete.
    The comment is immediately and permanently deleted.

## Deleting a Topic

Deleting a topic means deleting its content as well.

When you delete a topic, it is definitively erased from the application.

**To delete a topic:**

1.  In the **Forum** tab of the forum, select the topic you want to delete by checking the corresponding box.
2.  Click on the **Delete** button.
    A confirmation window pops up.
3.  Click on the **OK** button.
    The topic is moved to the forum's trash. Users can then restore the topic into the forum or erase it the same way as a document in a workspace.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Participating to a Topic]({{page page='participating-to-a-topic'}})
- [Nuxeo Forum]({{page page='forums'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
