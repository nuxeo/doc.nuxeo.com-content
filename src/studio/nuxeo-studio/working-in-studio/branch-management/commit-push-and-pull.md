---
title: 'Commit, Push and Pull'
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '25691097'
    ajs-parent-page-title: Branch Management
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Commit%2C+Push+and+Pull
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Commit%2C+Push+and+Pull'
    page_id: '25691105'
    shortlink: 4QOIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4QOIAQ'
    source_link: /display/Studio/Commit%2C+Push+and+Pull
history:
    -
        author: Alain Escaffre
        date: '2016-03-21 22:04'
        message: ''
        version: '19'
    -
        author: Thibaud Arguillere
        date: '2016-03-21 19:16'
        message: ''
        version: '18'
    -
        author: Thibaud Arguillere
        date: '2016-03-21 19:01'
        message: ''
        version: '17'
    -
        author: Thibaud Arguillere
        date: '2016-03-21 18:47'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2016-03-18 17:08'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-03-17 15:00'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-09-07 09:24'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-09-07 09:23'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-07-30 10:12'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-07-24 15:46'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-07-24 15:27'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-07-24 14:22'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-07-24 14:18'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-07-23 15:22'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-07-23 15:15'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-07-23 15:15'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-07-16 09:33'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2015-06-24 14:31'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2015-06-24 14:30'
        message: ''
        version: '1'

---
Our branch management system is inspired from distributed revision control systems. Here are the principles:

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).
![]({{file version='' space='nxdoc' page='university' name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

## Branches Principles

Every Studio project is initialized with a `master` branch which is the main branch of your project. It should be used to perform the main release. The `master` branch cannot be removed. You can create as many branches as you need. Typically if you want to start working on a new feature that will take some time and don't want that work to be displayed with the rest of your customization in Studio (and the Platfform) until it is finished, you should create a branch for it. You can also create a maintenance branch to separate maintenance developments from evolution development. A new branch is always based on existing one, so a new branch is not an empty one.

Users can [merge and delete branches]({{page page='branch-management'}}).

## Common Branch and User's Workspace

On a project, branches are shared by all the developers. They are named common branches. To work on a given branch, user needs to "check out" that branch. Behind the scene, it creates an other branch from the checked out branch and all edits of the user will happen on that branch. The user's workspace is the list of all the branches that have been checked out. This workspace is strictly personal and those checked out branches are never display anywhere else, neither shared to anybody. The user needs to **push** the changes to the common branch to make them available for others. Depending on the [save mode]({{page page='commit-preferences'}}), this can be automatic when the user saves (Simple save mode) or manual (Intermediate and Advanced save modes).

If other users have modified the common branch _before_ the changes were pushed, a _pull_ icon ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32) is displayed. The user can then **pull** these changes to their local branch so it now holds the latest state of the common branch and their own modifications. Sometimes a conflict can happen, see the "Handling Conflict" section later in this page.

## Commit, Pull, Push

*   **Commit**: A set of changes performed on one or multiple files. It's an evolution of your project between the state after the previous commit and the new state. A version of the project is the result of a sequence of commits from the moment you created the project.

    In simple mode, you have one commit per change: One change on a single feature, a resource added, the application changed, etc.

    In advanced mode, the changes are stacked until the user decides to commit them by clicking on the ![]({{file name='commit.png' page='studio-icons-index'}}) icon. The user will then add a commit message to describe the set of changes and will commit the changes on their workspace.

*   **Pull**: Refers to when the user wants to update their workspace with the changes performed by other users in the common branch. For instance, if someone has also modified a part you are working on, you'll want to pull those changes to your workspace so that it's up-to-date.

    By clicking the icon ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32) the user will update their workspace with changes from the common branch.

    In simple mode, a pull is performed each time the user refreshes the project. The user is notified by the ![]({{file name='pull.png' page='studio-icons-index'}} ?w=32) icon when another user commits some changes on the branch they are working on.

*   **Push**: Happens when the user wants to share local commits with others.

    By clicking on the icon ![]({{file name='push.png' page='studio-icons-index'}} ?w=32) the user will push the changes committed in the local branch to the common branch.

    In simple mode, the push is performed automatically for each save.

## Handling Conflicts

A conflict happens when two users work in the same version and made different changes on the same data (feature, file, application dependencies, ...).

The conflict can happen:

- When the user shares some changes: Push (or a "Save" in simple mode)
- When the user gets some changes: Pull

When a conflict is detected, a dialog window is displayed. It contains, for each file in conflict, the sections affected. User selects the file to keep (the local one, or the version coming from the common branch).

The conflict management is currently a binary choice per file. The user cannot decide to keep a part of a given feature and get another part of the same feature from the common branch.

After resolving all the conflicts, a push on the common branch might be necessary (depending on when the conflict occurred).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Commit, Push and Pull/Merge Popup
    name: mergePopup.png
    studio_modeler#screenshot#up_to_date
--}}
![Merge Popup](nx_asset://6eb82721-c84a-49cb-9f91-a110f48743e6 ?w=650,border=true)
