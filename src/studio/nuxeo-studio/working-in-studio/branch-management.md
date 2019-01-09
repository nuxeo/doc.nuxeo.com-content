---
title: Branch Management
review:
  comment: ''
  date: '2018-03-02'
  status: ok
toc: true
confluence:
  ajs-parent-page-id: '12911781'
  ajs-parent-page-title: Working in Studio
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Branch+Management
  canonical_source: 'https://doc.nuxeo.com/display/Studio/Branch+Management'
  page_id: '25691097'
  shortlink: 2QOIAQ
  shortlink_source: 'https://doc.nuxeo.com/x/2QOIAQ'
  source_link: /display/Studio/Branch+Management
tree_item_index: 1000
history:
  - author: Manon Lumeau
    date: '2016-05-10 08:58'
    message: ''
    version: '34'
  - author: Manon Lumeau
    date: '2016-03-22 11:21'
    message: ''
    version: '33'
  - author: Alain Escaffre
    date: '2016-03-22 10:08'
    message: ''
    version: '32'
  - author: Alain Escaffre
    date: '2016-03-22 09:28'
    message: ''
    version: '31'
  - author: Alain Escaffre
    date: '2016-03-21 23:02'
    message: ''
    version: '30'
  - author: Alain Escaffre
    date: '2016-03-21 22:59'
    message: ''
    version: '29'
  - author: Alain Escaffre
    date: '2016-03-21 22:43'
    message: more details on available actions
    version: '28'
  - author: Alain Escaffre
    date: '2016-03-21 21:53'
    message: ''
    version: '27'
  - author: Alain Escaffre
    date: '2016-03-21 21:51'
    message: ''
    version: '26'
  - author: Manon Lumeau
    date: '2016-03-18 16:00'
    message: ''
    version: '25'
  - author: Manon Lumeau
    date: '2016-03-18 14:58'
    message: ''
    version: '24'
  - author: Manon Lumeau
    date: '2016-03-17 14:43'
    message: ''
    version: '23'
  - author: Manon Lumeau
    date: '2016-03-16 14:09'
    message: ''
    version: '22'
  - author: Manon Lumeau
    date: '2015-08-07 16:16'
    message: ''
    version: '21'
  - author: Manon Lumeau
    date: '2015-08-07 16:11'
    message: ''
    version: '20'
  - author: Manon Lumeau
    date: '2015-08-07 16:10'
    message: ''
    version: '19'
  - author: Manon Lumeau
    date: '2015-08-07 16:10'
    message: ''
    version: '18'
  - author: Manon Lumeau
    date: '2015-08-07 16:10'
    message: ''
    version: '17'
  - author: Solen Guitter
    date: '2015-07-31 09:34'
    message: ''
    version: '16'
  - author: Manon Lumeau
    date: '2015-07-30 10:06'
    message: ''
    version: '15'
  - author: Thierry Martins
    date: '2015-07-30 09:52'
    message: ''
    version: '14'
  - author: Thierry Martins
    date: '2015-07-30 09:46'
    message: ''
    version: '13'
  - author: Manon Lumeau
    date: '2015-07-24 09:56'
    message: ''
    version: '12'
  - author: Manon Lumeau
    date: '2015-07-24 09:55'
    message: ''
    version: '11'
  - author: Manon Lumeau
    date: '2015-07-24 09:18'
    message: ''
    version: '10'
  - author: Manon Lumeau
    date: '2015-07-23 16:03'
    message: ''
    version: '9'
  - author: Manon Lumeau
    date: '2015-07-23 16:01'
    message: ''
    version: '8'
  - author: Manon Lumeau
    date: '2015-07-23 16:00'
    message: ''
    version: '7'
  - author: Manon Lumeau
    date: '2015-07-23 15:47'
    message: ''
    version: '6'
  - author: Manon Lumeau
    date: '2015-07-23 15:46'
    message: ''
    version: '5'
  - author: Manon Lumeau
    date: '2015-07-23 14:37'
    message: ''
    version: '4'
  - author: Manon Lumeau
    date: '2015-07-16 09:21'
    message: ''
    version: '3'
  - author: Manon Lumeau
    date: '2015-06-24 14:26'
    message: ''
    version: '2'
  - author: Manon Lumeau
    date: '2015-06-24 14:24'
    message: ''
    version: '1'
---

{{! excerpt}}
Nuxeo Studio offers the Branch Management, a collaborative feature that is inspired from distributed revision control systems.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University:</br>
[Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).
![]({{file version='' space='nxdoc' page='university' name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

In the Branch Management editor, you can find information related to the branch management of your current project as well as create, manage and delete your branches.

![]({{file name='branch-management.png'}} ?w=650,border=true)

Every Studio project starts in a `master` branch, which is the main branch of your project. It should be used to perform the main release. The `master` branch cannot be removed. On a project, branches shared with all the developers are named common branches.

## Creating a Branch

{{#> callout type='info' }}
Creating a branch requires to have access to the advanced features of Nuxeo Studio, please contact your sales representative to activate them.
{{/callout}}

When creating a new branch, it is always based on an existing one, so that it is never empty.

You can create as many branches as you need.
For example, you should create a branch each time you want to:

- work on a new feature and don't want to display it yet with the rest of your configuration.
- [implement a feature]({{page page='how-to-implement-features-using-branches'}}) without impacting the `master` branch.
- [work with a maintenance branch]({{page page='how-to-work-with-maintenance-branches'}}) to separate maintenance developments from evolution developments.

To work on a given branch, you need to check out the branch which creates a Work In Progress (WIP) branch, based on the existing one, where all your edits will occur. The WIP Branch cannot be seen in your list of branches. It is designed to be used as a local workspace, meaning that you obtain one workspace for each branch you have ever checked out.

**To create a branch**:

1. Go to **Source Control** > **Branch Management**
1. At the top-right, click **New Branch**.
1. Enter the name of your new branch.
1. Save.

The new branch will be created from the content of the last branch you checked out into your workspace.

![]({{file name='create-branch.png'}} ?w=600,border=true)

## Managing Local Changes

You can also access the **Branch Management** screen, by clicking on the name of the branch on the left of the status bar at the bottom of your screen.

![]({{file name='status-bar-studio.png'}} ?w=600,border=true)

Depending on your commit preferences , you can perform different actions from the status bar:

- **Delete**: Enables you to review changes that are saved but not committed and to discard them if needed.

![]({{file name='discard-popup.png'}} ?w=400)

- **Commit**: Enables you to record the set of changes performed on your project since your previous commit. A version of the project is the result of a sequence of commits from the moment you created the project.

  To commit, click on the icon ![]({{file name='commit.png' page='studio-icons-index'}} ?w=32) and type a commit message.

  ![]({{file name='commit_popup.png'}} ?w=400)

- **Push**: Enables you to share local commits with others.

  To push, click on the icon ![]({{file name='push.png' page='studio-icons-index'}} ?w=32) you will push the changes committed in your workspace to the common branch.

  ![]({{file name='push_popup.png'}} ?w=400)
  To push your changes, a pull action has to be performed first, so that your workspace is up to date with the content of the common branch.

- **Pull**: Enables you to update your workspace with changes performed by other users in the common branch. For instance, if someone has also modified a part you are working on, you want to pull those changes to your workspace so that it's up-to-date.

  To pull, click on the icon ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32).

If, while you pull the content of the common branch, a conflict happens, a pop-up window appears to help you resolve it. For more information, see [Handling Conflicts]({{page page='branch-management'}}#handling-conflicts)

## Managing a Branch

Once you have created several branches:

- To work on a given branch, click the **Checkout** button. It creates a personal workspace based on your name and the name of the branch, on which you will save and commit your changes.</br>
  Click on the **Push** button, to merge the content of the checked-out branch with the content of the common branch from which it was created.

- To merge the changes of other branches on your current workspace, click the **Merge into my workspace** button. It includes committed features, the current target platform and version.</br>
  Once you have merged into your workspace, you can test that the merge did not break any existing feature. You can then **Push** the merge to the common branch to share it.

- To remove the corresponding branch, click the **Delete** button.

### Handling Conflicts

A conflict happens when two users work in the same version and made different changes on the same data (feature, file, application dependencies...).

The conflict can happen when you get some changes from the common branch, by performing a Pull.

When a conflict is detected, a pop-up window appears. You can select for each file affected by the conflict to keep your changes or the changes from the common branch. You can go back to your work without resolving conflicts by clicking **Cancel**.

After resolving all the conflicts, a push on the common branch might be necessary (depending on when the conflict occurred).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Commit, Push and Pull/Merge Popup
    name: mergePopup.png
    studio_modeler#screenshot#up_to_date
--}}
![Merge Popup](nx_asset://6eb82721-c84a-49cb-9f91-a110f48743e6 ?w=650,border=true)

## {{> anchor 'review-branch-commit'}}Reviewing Branch Commits History

When you click on the name of one of the branches, the list of commits of this branch is displayed. For each commit entry you can:

### Commit Details

Click on the commit to display added, updated and removed configuration including number of "files" (one file = one feature instance of the Studio project).

### Tag

Creates a tag from that commit. A tag doesn't produce a snapshot package that could be installed on a Nuxeo Platform instance.![]({{file name='create-tag.png'}} ?w=350,border=true)

| **Tag Options** | &nbsp;                                                                              |
| --------------- | ----------------------------------------------------------------------------------- |
| **Tag Name**    | The name of your tag.                                                               |
| **On Commit**   | Read-only and automatically filled, name of the tag where the release will be done. |
| **Description** | The description of the tag. This description is here for information purpose.       |

### Release

Creates a release from that commit. When performing a release, a package is built and sent to the marketplace so as to be able to perform a re-installation of that exact same release of your project later.

![]({{file name='create-release.png'}} ?w=350,h=285,border=true)

| **Release Options**          | &nbsp;                                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Current Branch**           | Branch from which you are creating the release.                                                            |
| **Commit to Release**        | Description of the commit from which the release will be done.                                             |
| **Latest Release in Branch** | Indicates the last release performed from this branch. Studio will suggest a version number on this basis. |
| **Release Version**          | Select or type the version number that you are going to release.                                           |
| **Help: Version Format**     | List of format rules to apply on your releases.                                                            |

Releases can also be created using a [REST API]({{page page='how-to-tag-or-release-your-nuxeo-studio-project'}}#rest-api).

### Revert

Reverts to a specific commit. A previous state of the project is restored which inverts the set of changes made after the commit on which you selected.

The revert command preserves the history and a revert entry unlike a reset command which would remove the set of changes after the commit you may have selected (the reset command is not provided to users).

{{#> callout type='info' }}
When using intermediate or advanced commit modes, you need to commit and push your changes before being able to create a tag or a release on this basis.
{{/callout}}

## Build Automation

[Nuxeo Studio acts as a Maven repository]({{page page='maven-integration'}}) to provide a Studio project artifact for each of your branches and corresponding workspaces.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Commit Preferences]({{page page='commit-preferences'}})
- [Working in Studio Modeler]({{page page='working-in-studio'}})
- [Maven Integration]({{page page='maven-integration'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-to'}}

- [How to Collaborate on a Studio Project]({{page page='how-to-collaborate-on-a-studio-project'}})
- [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})
- [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}})

{{/panel}}</div></div>
