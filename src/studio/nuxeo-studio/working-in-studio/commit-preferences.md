---
title: Commit Preferences
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '12911781'
    ajs-parent-page-title: Working in Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Commit+Preferences
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Commit+Preferences'
    page_id: '25691101'
    shortlink: 3QOIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3QOIAQ'
    source_link: /display/Studio/Commit+Preferences
tree_item_index: 1200
history:
    -
        author: Alain Escaffre
        date: '2016-03-21 22:26'
        message: emoved wrong lin
        version: '21'
    -
        author: Manon Lumeau
        date: '2016-03-18 16:02'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2016-03-17 14:49'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-08-07 16:16'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-08-07 14:12'
        message: Add link
        version: '17'
    -
        author: Solen Guitter
        date: '2015-08-07 14:10'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-07-30 10:12'
        message: ''
        version: '15'
    -
        author: Thierry Martins
        date: '2015-07-30 10:00'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-07-27 15:55'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-07-23 15:22'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-07-23 15:21'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-07-23 15:15'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-07-23 15:09'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-07-23 15:08'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-07-23 15:04'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-07-23 14:56'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-07-23 14:54'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-07-23 14:54'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-07-16 09:29'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2015-06-24 14:29'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2015-06-24 14:27'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Watch the related courses on Nuxeo University'}}
[Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).
![]({{file version='' space='nxdoc' page='university' name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

The commit preferences page lets you define the way you want to work with your co-workers. Some screens and behaviors are conditionned by the save mode that you choose.

![]({{file name='sources-management.png' page='how-to-collaborate-on-a-studio-project'}} ?w=650,border=true)

This page allows the user to define the commit policy that is applied when the user saves his changes:

*   **Simple**: Your local changes are immediately committed and pushed to the common branch when you click on the **Save** button. You don't have any control on commits history. If other users have worked on the project, you are displayed the icon ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32,thumbnail=true) so you can get their modifications.
    This mode is recommended for testing or single dev mode.
*   **Intermediate**: Your local changes are saved as a work in progress and you need to manually make them available on the common branch by clicking the icon ![]({{file name='commit.png' page='studio-icons-index'}}) and typing a commit message.
    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Commit Preferences/Commit and Push popup
        name: commit-and-push-popup.png
        studio_modeler#popup#up_to_date
    --}}
    ![Commit and Push popup](nx_asset://8895bb88-f274-44b2-ba07-0c0308ca5701 ?w=400,border=true)
    If no commit message is explicitly defined by the user, the default message is `Update <Feature type>/<Feature name>`.
    This mode is recommended for developers.
*   **Advanced**: Your local changes are saved as a work in progress and you need to manually commit them by clicking the icon ![]({{file name='commit.png' page='studio-icons-index'}}). You can then push them to the common branch using the icon ![]({{file name='push.png' page='studio-icons-index'}} ?w=32,thumbnail=true).

    {{!--     ### nx_asset ###
        path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Commit Preferences/Advanced Commit Mode popup
        name: advanced_commit-mode-popup.png
        studio_modeler#popup#up_to_date
    --}}
    ![Advanced Commit Mode popup](nx_asset://83870daf-d0d8-4e78-b28a-b542d25cac45 ?w=400,border=true)

    If no commit message is explicitly defined by the user, the default message is `Update <Feature type>/<Feature name>`.
    This mode is recommended for developers already familiar with revision control concepts.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Working in Studio Modeler]({{page page='working-in-studio'}})
- [Branch Management]({{page page='branch-management'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-to'}}

- [How to Collaborate on a Studio Project]({{page page='how-to-collaborate-on-a-studio-project'}})
- [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})
- [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}})

{{/panel}}</div></div>
