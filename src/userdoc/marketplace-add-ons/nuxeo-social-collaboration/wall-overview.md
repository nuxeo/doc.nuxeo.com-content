---
title: Wall Overview
labels:
    - mini-messages
    - like
    - wall
toc: true
confluence:
    ajs-parent-page-id: '21299521'
    ajs-parent-page-title: Nuxeo Social Collaboration
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Wall+Overview
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Wall+Overview'
    page_id: '21299481'
    shortlink: GQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GQFFAQ'
    source_link: /display/USERDOC60/Wall+Overview
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:47'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2016-01-18 13:57'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:25'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-10-27 18:24'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-10-27 18:23'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-11-04 19:39'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:36'
        message: Removed related topics from TOC
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:35'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-10-12 18:18'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-06-12 16:34'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-06-12 16:34'
        message: Added like from wall description
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-06-12 12:21'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-06-11 18:57'
        message: ''
        version: '1'

---
{{{multiexcerpt 'nuxeo_social_collaboration_deprecated' page='Nuxeo Social Collaboration'}}}

Social workspaces have a special view that enables users to directly see what is happening in the workspace: what documents are created or modified and by who, who joins the social workspace, who added a mini message, etc.

The Wall is available on social workspaces only and only members of the workspace can access it.

## Browsing a Workspace Wall

The wall is available from:

*   The Document Management view of the social workspace, in the **Wall** tab,
    ![]({{file name='wall-dm-view.png'}} ?w=650,border=true)
*   The workspace's private dashboard, in the **Wall** gadget.
    ![]({{file name='wall-gadget.png'}} ?w=500,border=true)

Both display the same pieces of information: the events that take place in the social workspace and the messages that are posted in the workspace. By default, the Wall displays all these information, grouped under the **All** item.
To make it easier to see the activities, click on **Events**. Only the activities are displayed.
To see only the mini-messages posted in the workspace, click on **Messages**. Only the mini-messages posted either from the Wall or [from the **Mini messages** gadget]({{page page='mini-messages-overview'}}) are displayed.

## Writing a Message

Users can post [mini messages]({{page page='mini-messages-overview'}}) from the wall directly.

**To post a mini message from the wall:**

1.  On the wall, click on the **Write a message** button.
    A text area is displayed on top of the Wall content, just below the wall tabs.
2.  Type your text and click on the **Write** button.
    The message is now displayed in the **All** and **Messages** tabs of the Wall.
    The message is also displayed in the Mini messages gadget of the social workspace.

## Commenting Activities

Users can comment the activities displayed on the wall. These comments are only displayed on the wall.

**To comment an activity:**

1.  On the wall tab or gadget, click on the **Reply** link under the activity you want to comment.
    A text area is displayed under the activity.
2.  Type your comment and click on the **Reply** button.
    The comment is now displayed under the activity and the activity is now on top of the wall timeline.
    You can delete your comment if needed.

## Liking

Users can like the items on the wall feed, both activities and messages. The total number of users who like the message or activity is displayed under the item. Liking an event that occured on a document doesn't add this vote to the document itself, only to the event.

To like a message or an event, click on the icon ![]({{file name='like.png' page='icons-index'}}). The icon is now colored, indicated that you liked the document, and your vote is added to the total number of likes. Click on the icon again to unlike the item.
![]({{file name='like-wall-itemed-liked.png'}} ?w=300,border=true,thumbnail=true)

&nbsp;