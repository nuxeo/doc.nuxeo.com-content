---
title: Nuxeo Forum
review:
    comment: ''
    date: '2017-01-30'
    status: ok
labels:
    - forum
    - excerpt
    - multiexcerpt-include
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '2392395'
    ajs-parent-page-title: Document Types
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Forums
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Forums'
    page_id: '2392376'
    shortlink: OIEk
    shortlink_source: 'https://doc.nuxeo.com/x/OIEk'
    source_link: /display/USERDOC/Forums
tree_item_index: 650
history:
    -
        author: Solen Guitter
        date: '2015-12-08 14:28'
        message: ink updat
        version: '26'
    -
        author: Manon Lumeau
        date: '2015-11-25 16:54'
        message: new Edit permission
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-11-23 11:11'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-08-27 13:39'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-11-26 17:37'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-11-26 17:29'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2014-11-26 17:26'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-03-26 12:28'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-02-24 14:20'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-12-02 15:33'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-10-22 18:16'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Fixed broken link
        version: '14'
    -
        author: Solen Guitter
        date: '2012-07-24 11:38'
        message: Fixed broken link
        version: '13'
    -
        author: Solen Guitter
        date: '2012-07-03 14:52'
        message: Fixed broken link
        version: '12'
    -
        author: Solen Guitter
        date: '2012-01-20 14:54'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-11-25 15:12'
        message: Fixed broken link
        version: '10'
    -
        author: Solen Guitter
        date: '2011-11-24 10:32'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-11-24 10:30'
        message: Added related content
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-24 10:27'
        message: Added related content
        version: '7'
    -
        author: Solen Guitter
        date: '2011-11-09 09:48'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-11-08 17:09'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-06-06 14:42'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2010-12-01 11:23'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2010-05-10 18:41'
        message: fixed broken links
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-27 15:31'
        message: ''
        version: '1'

---
{{multiexcerpt 'DeprecatedAddon' space='nxdoc' page='generic-multi-excerpts'}}

{{{multiexcerpt 'DeprecatedJSF' page='/nxdoc/generic-multi-excerpts'}}}


{{! excerpt}}
[Nuxeo Forum](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-forum) brings forums into the Nuxeo Platform. A forum is a discussion space in which users can talk together. A forum is organized around different topics, in which users can add comments. Topics and comments are displayed in threads.
{{! /excerpt}}

## Installation

{{{multiexcerpt 'MP-installation-easy' space='nxdoc' page='Generic Multi-Excerpts'}}}

## Functional Overview

As for workspaces and sections, the access to a forum is defined by permissions. Forum permissions are the same as workspace permissions. However, in the case of a [moderated topic]({{page page='managing-topics'}}#topic-moderation), some users are declared "moderators" and are in charge of the approval of the topic content.

Forum creation and edition are available for users with "Edit" and "Manage" permissions.
Users with "Manage" permissions can also manage the forum like a workspace, i.e. [give users permissions]({{page page='managing-permissions'}}), set [alerts]({{page page='collaborative-features'}}#alerts) and manage the forum's [trash]({{page page='deleting-content'}}).

### Creating a Forum

You need "Edit" or "Manage" permissions to be able to create a forum.

You can create forums only in workspaces.

**To create a forum:**

{{{multiexcerpt 'create-document' page='Creating Content'}}}

The forum is created. You can now create topics to start discussing.
![]({{file name='forum-saved.png'}} ?w=650,border=true)

### Editing a Forum

You need "Edit" or "Manage" permissions to edit a forum.

When you edit a forum, you modify its title and its description.

**To edit a forum:**

1.  On the forum, click on the **Edit** tab.
2.  Modify the title or the description of the forum. You can also add a comment explaining what you edited on the forum.
3.  Click on the **Save** button.
    The modifications are saved and the **Forum** tab is displayed.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Managing Permissions]({{page page='managing-permissions'}})
- [Participating to a Topic]({{page page='participating-to-a-topic'}})
- [Managing Topics]({{page page='managing-topics'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
