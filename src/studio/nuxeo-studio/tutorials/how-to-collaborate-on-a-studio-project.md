---
title: How to Collaborate on a Studio Project
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to use the advanced branch management feature of Nuxeo
            Studio to collaborate on a Studio project.
        level: Beginner
        tool: Studio
        topics: 'Branch Management, Studio Tags'
labels:
    - howto
    - branch-management
    - last-review-20150807
toc: true
confluence:
    ajs-parent-page-id: '12912677'
    ajs-parent-page-title: Tutorials
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: How+to+Collaborate+on+a+Studio+Project
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/How+to+Collaborate+on+a+Studio+Project
    page_id: '26313774'
    shortlink: LoSRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LoSRAQ'
    source_link: /display/Studio/How+to+Collaborate+on+a+Studio+Project
tree_item_index: 600
history:
    -
        author: Manon Lumeau
        date: '2016-04-27 15:48'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2016-03-16 17:09'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2016-03-16 16:11'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-08-11 11:46'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-08-10 09:11'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-08-10 08:40'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-08-07 15:54'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-08-07 15:53'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-08-07 14:41'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-08-07 14:41'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-08-07 14:39'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-08-07 14:33'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-08-07 14:32'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-08-07 14:31'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-08-05 13:31'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-08-05 13:30'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-08-05 13:29'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-08-05 13:13'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-08-05 13:13'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-08-05 12:24'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2015-07-31 14:55'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2015-07-31 14:53'
        message: ''
        version: '1'

---
This how-to explains how two users can work at the same time on a Studio Project. The two users will work on the&nbsp;`master`&nbsp;branch and in [Simple save mode]({{page page='commit-preferences'}}).&nbsp;

![]({{file name='simple_save_mode.png'}} ?w=250,border=true,thumbnail=true)

{{#> callout type='tip' }}

If you are not familiar with the revision control concept, you may want to have a look to the [branch management]({{page page='branch-management'}}) documentation before you start.

{{/callout}}

## Working Collaboratively

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

### First User

The first user wants to change the branding on the&nbsp;`master`&nbsp;branch.&nbsp;

1.  Go to&nbsp;**Branding&nbsp;**>&nbsp;**Login Screen**,
2.  Modify the background image of your login screen and click on&nbsp;**Save**.
    A message will appear at the top right and corner of your page saying that your changes are commited and pushed.&nbsp;

</div><div class="column medium-6">

### Second User

Lets say that the second user wants to create a new document type on the&nbsp;`master`&nbsp;branch.

1.  Go to&nbsp;**Content Model&nbsp;**>&nbsp;**Document Types**,
2.  [Create a new document type]({{page space='nxdoc' page='how-to-define-a-document-type'}}) and click on **Save.**&nbsp;&nbsp;

While you are doing your modifications, at the top right and corner of your application, the pull icon&nbsp;![]({{file name='pull.png' page='studio-icons-index'}} ?w=32,thumbnail=true)&nbsp;is displayed to let you get the modifications of the User1\. You don't have to pull directly, you can wait until you have done all the modifications that you want.&nbsp;

![]({{file name='pull_popup.png'}} ?w=400,border=true)

</div></div>

## Conflicts

It may happens that the two users modify the same file, this generates a conflict. When it happens a pop-up window is displayed where you can select the version that you want to keep and complete the merge.&nbsp;

![]({{file name='mergePopup.png' page='commit-push-and-pull'}} ?w=650,border=true)

## Discover More&nbsp;

If you are familiar with the revision control concept, other save modes are available in the&nbsp;[Commit Preferences]({{page page='commit-preferences'}})&nbsp;page in Studio: Intermediate and Advanced. If you want to try them, don't hesitate to contact your sales representative to activate them.

![]({{file name='sources-management.png'}} ?w=650,h=324,border=true)

{{#> callout type='tip' }}

Want to go further? Have a look at [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}}).

{{/callout}}

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Studio Documentation'}}

*   [Commit Preferences]({{page page='commit-preferences'}})
*   [Branch Management]({{page page='branch-management'}})
*   [Working in Studio]({{page page='working-in-studio'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})
*   [How to Work with Maintenance Branches]({{page space='Studio' page='How to+Work+with+Maintenance+Branches'}})

{{/panel}}</div></div>
