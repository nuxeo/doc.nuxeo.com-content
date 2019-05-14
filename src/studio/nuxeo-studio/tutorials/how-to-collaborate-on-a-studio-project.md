---
title: 'HOWTO: Collaborate on a Studio Project'
description: This how-to explains how two users can work at the same time on a Studio Project.
review:
  comment: ''
  date: '2015-08-07'
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

{{! excerpt}}
This tutorial explains how two users can work at the same time on a Studio Project. The two users will work on the `master` branch and in [Simple save mode]({{page page='commit-preferences'}}).
{{! /excerpt}}

![]({{file name='simple_save_mode.png'}} ?w=200,border=true,thumbnail=true)

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University<br>[Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).<br>![]({{file version='' space='nxdoc' page='university' name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

{{#> callout type='tip'}}
If you are not familiar with the revision control concept, you may want to have a look at the [branch management]({{page page='branch-management'}}) documentation before you start.
{{/callout}}

## Working Collaboratively

### First User

The first user wants to change the branding on the `master` branch.

1.  Go to **Branding**&nbsp;> **Login Page**,
1.  Modify the background image of your login page and click on **Save**.
    A message will appear at the top-right corner of your page, indicating that your changes are committed and pushed.

### Second User

Let's say that the second user wants to create a new document type on the `master` branch.

1.  Go to **Content Model**&nbsp;> **Document Types**,
1.  [Create a new document type]({{page space='nxdoc' page='how-to-define-a-document-type'}}) and click on **Save**.

In the simple save mode, a pull action is automatically performed each time you refresh your project to let you get the modifications of the other users.

## Conflicts

Two users may modify the same file, which generates a conflict. When it happens, a window pops up where users can select the version that they want to keep and complete the merge.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Commit, Push and Pull/Merge Popup
    name: mergePopup.png
    studio_modeler#screenshot#up_to_date
--}}
![Merge Popup](nx_asset://6eb82721-c84a-49cb-9f91-a110f48743e6 ?w=650,border=true)

## Discover More

If you are familiar with the revision control concept, other save modes are available in the [Commit Preferences]({{page page='commit-preferences'}}) page in Studio:

- **Intermediate** mode allows you to stack several changes before sharing them, and define a custom message for the set of changes made.

- **Advanced** mode is the ideal mode for a configuration review.

If you are interested in trying other save modes, please contact your sales representative to activate them.

![]({{file name='sources-management.png' page='commit-preferences'}} ?w=650,h=324,border=true)

{{#> callout type='tip' }}
Want to go further? Have a look at [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}}).
{{/callout}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Studio Documentation'}}
- [Commit Preferences]({{page page='commit-preferences'}})
- [Branch Management]({{page page='branch-management'}})
- [Working in Studio Modeler]({{page page='working-in-studio'}})
{{/panel}}

</div>

<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}
- [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})
- [How to Work with Maintenance Branches]({{page space='Studio' page='How to+Work+with+Maintenance+Branches'}})
{{/panel}}

</div>
</div>
