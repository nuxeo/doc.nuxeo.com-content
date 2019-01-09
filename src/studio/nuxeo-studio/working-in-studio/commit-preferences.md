---
title: Commit Preferences
review:
  comment: ''
  date: ''
  status: ok
toc: true
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
  - author: Alain Escaffre
    date: '2016-03-21 22:26'
    message: emoved wrong lin
    version: '21'
  - author: Manon Lumeau
    date: '2016-03-18 16:02'
    message: ''
    version: '20'
  - author: Manon Lumeau
    date: '2016-03-17 14:49'
    message: ''
    version: '19'
  - author: Manon Lumeau
    date: '2015-08-07 16:16'
    message: ''
    version: '18'
  - author: Solen Guitter
    date: '2015-08-07 14:12'
    message: Add link
    version: '17'
  - author: Solen Guitter
    date: '2015-08-07 14:10'
    message: ''
    version: '16'
  - author: Solen Guitter
    date: '2015-07-30 10:12'
    message: ''
    version: '15'
  - author: Thierry Martins
    date: '2015-07-30 10:00'
    message: ''
    version: '14'
  - author: Solen Guitter
    date: '2015-07-27 15:55'
    message: ''
    version: '13'
  - author: Solen Guitter
    date: '2015-07-23 15:22'
    message: ''
    version: '12'
  - author: Solen Guitter
    date: '2015-07-23 15:21'
    message: ''
    version: '11'
  - author: Solen Guitter
    date: '2015-07-23 15:15'
    message: ''
    version: '10'
  - author: Solen Guitter
    date: '2015-07-23 15:09'
    message: ''
    version: '9'
  - author: Solen Guitter
    date: '2015-07-23 15:08'
    message: ''
    version: '8'
  - author: Solen Guitter
    date: '2015-07-23 15:04'
    message: ''
    version: '7'
  - author: Solen Guitter
    date: '2015-07-23 14:56'
    message: ''
    version: '6'
  - author: Solen Guitter
    date: '2015-07-23 14:54'
    message: ''
    version: '5'
  - author: Solen Guitter
    date: '2015-07-23 14:54'
    message: ''
    version: '4'
  - author: Manon Lumeau
    date: '2015-07-16 09:29'
    message: ''
    version: '3'
  - author: Manon Lumeau
    date: '2015-06-24 14:29'
    message: ''
    version: '2'
  - author: Manon Lumeau
    date: '2015-06-24 14:27'
    message: ''
    version: '1'
---

{{#> callout type='info' heading='Watch the related courses on Nuxeo University'}}
[Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).
![]({{file version='' space='nxdoc' page='university' name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

Commit Preferences enable you to define the way you want to work with your co-workers. Some screens and behaviors are conditioned by the save mode that you select. Depending on your save mode, you can perform different actions from the status bar at the bottom of Studio's screen.

![]({{file name='sources-management.png'}} ?w=650,border=true)

{{! multiexcerpt name='save-modes'}}

| Mode         | Save   | ![]({{file name='commit.png' page='studio-icons-index'}} ?w=32) | ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32) | ![]({{file name='push.png' page='studio-icons-index'}} ?w=32) | Recommended for                                    |
| ------------ | ------ | --------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| Simple       | Manual | Automatic                                                       | Automatic if no conflict                                      | Automatic                                                     | Testing or single development                      |
| Intermediate | Manual | Manual                                                          | Automatic if no conflict                                      | Automatic                                                     | Developers                                         |
| Advanced     | Manual | Manual                                                          | Manual                                                        | Manual                                                        | Developers familiar with revision control concepts |

{{! /multiexcerpt}}

Define the commit policy that is applied when saving changes by selecting your save mode:

- **Simple**: When you click on the **Save** button, your local changes are immediately committed, with the following default commit message, `Update <Feature type>/<Feature name>` and pushed to the common branch. You don't have any control on commits history. A **Pull** action is automatically performed each time you refresh the project. However you are only notified by the **Pull** ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32) icon if a conflict appears when you save.

- **Intermediate**: Your local changes are saved as a work in progress and you need to manually make them available on the common branch. You have to manually commit your local changes. They are then automatically pushed to the common branch. When you have no Work In Progress an automatic Pull is performed each time you refresh your project.

- **Advanced**: Your local changes are saved as a work in progress. You have to manually commit your local changes by clicking on the **Commit** icon ![]({{file name='commit.png' page='studio-icons-index'}} ?w=32) .Then, you have to manually push them to the common branch by clicking the **Push** icon ![]({{file name='push.png' page='studio-icons-index'}} ?w=32).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Working in Studio Modeler]({{page page='working-in-studio'}})
- [Branch Management]({{page page='branch-management'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-to'}}

- [How to Collaborate on a Studio Project]({{page page='how-to-collaborate-on-a-studio-project'}})
- [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})
- [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}})

{{/panel}}</div></div>
