---
title: Applying a Preset Look to a Space
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141125
    - theme
    - flavor
    - presentation
confluence:
    ajs-parent-page-id: '21299509'
    ajs-parent-page-title: Managing a Workspace
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Applying+a+Preset+Look+to+a+Space
    canonical_source: >-
        https://doc.nuxeo.com/display/USERDOC60/Applying+a+Preset+Look+to+a+Space
    page_id: '21299468'
    shortlink: DAFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DAFFAQ'
    source_link: /display/USERDOC60/Applying+a+Preset+Look+to+a+Space
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:17'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2015-08-28 13:54'
        message: ''
        version: '19'
    - 
        author: Manon Lumeau
        date: '2014-11-26 16:28'
        message: ''
        version: '18'
    - 
        author: Manon Lumeau
        date: '2014-07-04 16:01'
        message: ''
        version: '17'
    - 
        author: Manon Lumeau
        date: '2014-07-04 15:59'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2014-07-04 11:54'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2014-02-03 11:57'
        message: Added obsolete perspective paragraph
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-10-22 17:43'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:36'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-10-02 15:05'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-06-19 12:11'
        message: Migrated to Confluence 4.0
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-06-19 12:11'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-06-19 11:58'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-06-19 11:44'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-12-11 22:44'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-12-11 22:38'
        message: Updated screenshot and added related content
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:04'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-06-06 11:23'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-05-20 16:59'
        message: updated steps with new 5.4.2 local configuration
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-04-23 16:31'
        message: ''
        version: '1'

---
&nbsp;

Local administrators, i.e. users with Manage right in the space, can easily apply a preset theme to a workspace, template or section. You can apply a theme to spaces only. For instance, you can change the theme of sections, so that they look different from workspaces, but you cannot change the look of a document.

Two themes, also called flavors, are available by default: the Nuxeo theme and the Rainbow theme. Flavors are sets of colors that determine the look of the space. If you configured other flavors in Nuxeo Studio, they are available here as well.

{{#> callout type='info' heading='Theme inheritance'}}

The new space's theme is not applied to the sub-spaces, but it is applied to the documents it contains.

{{/callout}}

**To change the theme of a workspace:**

1.  Click on **Manage** tab of the space.
2.  Click on the **Local configuration** tab and, if needed, click on the **Enable** link of the "Theme Configuration" section.
    ![]({{file name='theme_configuration.png'}} ?w=650,h=302,border=true)
3.  Select the flavour you want to apply.
4.  Click on the **Save** button.
    The page is displayed with the selected look.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Changing the Presentation of Document Lists]({{page page='changing-the-presentation-of-document-lists'}})
*   [Unicolor Flavors Set]({{page page='unicolor-flavors-set'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related topics in other documentation'}}

*   [Branding in Nuxeo Studio]({{page space='studio' page='branding'}})

{{/panel}}</div></div>