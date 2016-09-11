---
title: Nuxeo Social Collaboration
review:
    comment: ''
    date: ''
    status: ok
labels:
    - social-collaboration
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Nuxeo+Social+Collaboration
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Nuxeo+Social+Collaboration'
    page_id: '21299521'
    shortlink: QQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/QQFFAQ'
    source_link: /display/USERDOC60/Nuxeo+Social+Collaboration
history:
    - 
        author: Solen Guitter
        date: '2016-01-18 13:50'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2015-06-29 13:44'
        message: Fix link to migration script
        version: '26'
    - 
        author: Solen Guitter
        date: '2015-01-22 14:42'
        message: Add link to Social Collaboration migration script and readme
        version: '25'
    - 
        author: Anonymous
        date: '2014-12-02 14:44'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2014-10-24 11:08'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-10-24 11:06'
        message: ''
        version: '22'
    - 
        author: Manon Lumeau
        date: '2014-08-14 14:36'
        message: ''
        version: '21'
    - 
        author: Manon Lumeau
        date: '2014-08-14 14:11'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-02-14 15:08'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-12-02 15:50'
        message: Fixed broken link
        version: '18'
    - 
        author: Solen Guitter
        date: '2012-10-08 17:51'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:41'
        message: Migrated to Confluence 4.0
        version: '16'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:41'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-06-13 11:44'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-06-13 11:44'
        message: Updated link to PDF to download 5.6-SNAPSHOT version
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-05-21 16:45'
        message: Updated link to PDF to download 5.6-SNAPSHOT version
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-12-20 15:59'
        message: Added toc
        version: '11'
    - 
        author: Solen Guitter
        date: '2011-12-15 15:14'
        message: Added PDF documentation
        version: '10'
    - 
        author: Solen Guitter
        date: '2011-12-13 18:57'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-12-13 17:54'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-22 10:01'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-21 16:57'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-21 14:36'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-18 10:58'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-11-16 12:30'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-11-15 11:07'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-11-15 11:02'
        message: ''
        version: '1'

---
{{! multiexcerpt name='nuxeo_social_collaboration_deprecated'}} {{#> callout type='note' }}

<div class="message-content">

This add-on is deprecated since Nuxeo Platform 6.0.

A SQL script is available to migrate your Social Collaboration data to non-deprecated document types. The script and its readme are available [from GitHub](https://github.com/nuxeo/nuxeo-social-collaboration/tree/release-7.2/migration).

</div>

{{/callout}}{{! /multiexcerpt}}

&nbsp;

The Nuxeo Social Collaboration add-on is a user centric and subject centric view of your Nuxeo application, with extended collaboration and social features such as relations, activity stream, mini-messages, rich user profile, etc.

The Social Collaboration module adds the following features to a document management application:

*   [social workspaces]({{page page='social-workspaces-overview'}}), with [articles]({{page page='adding-content-to-a-social-workspace'}}) and [news]({{page page='working-with-news'}}) documents, a dedicated tab and new dashboards with social collaboration dedicated gadgets,
    ![]({{file name='collaboration-tab-root.png'}} ?w=600,border=true)
*   [rich user profile]({{page page='rich-user-profile-overview'}}), with a summary of the user's activities,
    ![]({{file name='Profile.png'}} ?w=600,border=true)
*   [user's network]({{page page='network-overview'}}), i.e. all the relationships of the user,
    ![]({{file name='network.png'}} ?w=600,border=true)
*   [mini-messages]({{page page='mini-messages-overview'}}) for micro-blogging, and
    ![]({{file name='mini-messages.png'}} ?w=600,border=true)
*   [activity streams]({{page page='activity-stream-overview'}}), to follow what happens in the user's relationships and social workspaces.
    ![]({{file name='activity-stream.png'}} ?w=600,border=true)

Nuxeo Social Collaboration adds a new tab to the Nuxeo Platform, called **Collaboration**, and a new domain, called Collaboration as well.

![]({{file name='domains-root.png'}} ?w=650,border=true)