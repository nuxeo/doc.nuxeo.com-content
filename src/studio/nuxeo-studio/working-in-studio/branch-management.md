---
title: Branch Management
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
    canonical: Branch+Management
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Branch+Management'
    page_id: '25691097'
    shortlink: 2QOIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/2QOIAQ'
    source_link: /display/Studio/Branch+Management
tree_item_index: 1000
history:
    -
        author: Manon Lumeau
        date: '2016-05-10 08:58'
        message: ''
        version: '34'
    -
        author: Manon Lumeau
        date: '2016-03-22 11:21'
        message: ''
        version: '33'
    -
        author: Alain Escaffre
        date: '2016-03-22 10:08'
        message: ''
        version: '32'
    -
        author: Alain Escaffre
        date: '2016-03-22 09:28'
        message: ''
        version: '31'
    -
        author: Alain Escaffre
        date: '2016-03-21 23:02'
        message: ''
        version: '30'
    -
        author: Alain Escaffre
        date: '2016-03-21 22:59'
        message: ''
        version: '29'
    -
        author: Alain Escaffre
        date: '2016-03-21 22:43'
        message: more details on available actions
        version: '28'
    -
        author: Alain Escaffre
        date: '2016-03-21 21:53'
        message: ''
        version: '27'
    -
        author: Alain Escaffre
        date: '2016-03-21 21:51'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2016-03-18 16:00'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2016-03-18 14:58'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2016-03-17 14:43'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2016-03-16 14:09'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2015-08-07 16:16'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2015-08-07 16:11'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-08-07 16:10'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-08-07 16:10'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-08-07 16:10'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2015-07-31 09:34'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-07-30 10:06'
        message: ''
        version: '15'
    -
        author: Thierry Martins
        date: '2015-07-30 09:52'
        message: ''
        version: '14'
    -
        author: Thierry Martins
        date: '2015-07-30 09:46'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2015-07-24 09:56'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-07-24 09:55'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-07-24 09:18'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-07-23 16:03'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-07-23 16:01'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-07-23 16:00'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-07-23 15:47'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-07-23 15:46'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-07-23 14:37'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-07-16 09:21'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2015-06-24 14:26'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2015-06-24 14:24'
        message: ''
        version: '1'

---
## Concept

Branch Management editor contains the information related to the branch management of the current project. This is where you can create, manage and delete your branches.

![]({{file name='branch-management.png'}} ?w=650,border=true)

## Creating a Branch

Create a branch enables you to [work with a maintenance branch]({{page page='how-to-work-with-maintenance-branches'}}) or to [implement a feature]({{page page='how-to-implement-features-using-branches'}}) without impacting the `master` branch. The **New Branch** button lets you create a branch. Fill in the creation form with a new name for your branch and save. The new branch will be created from the content of the last branch you checked out into your workspace. Creating a branch requires to have access to the advanced features of Nuxeo Studio, please contact your sales representative to activate them.

![]({{file name='create-branch.png'}} ?w=600,border=true)

## Managing a Branch

Once you have created several branches, different options are available to manage them:

*   The **Checkout** button lets you work on the given branch. What happen concretely is that it creates a branch based on your user name and the name of this branch, in which you will save your changes and do some commits. Then, when you click on "push", it will merge the content of the branch in your workspace with the content of the "common branch" from which it was created. If you are in simple mode, each time you save it commits to the branch on your workspace and then merges with the "common branch" from which it was created.

*   The **Merge into my workspace** button enables to merge on your current local branch the changes of the other branch, which includes not only the commited features, but also the current target platform and version values. Once you have merged into your workspace, you can test that the merge didn't break any existing feature. You can then "push" the merge to the common branch to share it to others.
*   The **Delete** button lets you remove the corresponding branch.

## {{> anchor 'review-branch-commit'}}Reviewing Branch Commits History

When you click on the name of one of the branches, the list of the commits of this branch is displayed. For each commit entry you can:

*   **Unfold the commit details:** It displays added, updated and removed configuration including number of "files" (one file = one feature instance of the Studio project).
*   **Tag**: Create a tag from that commit. See tag section here-after. A tag doesn't produce a snapshotted package that could be installed on a Nuxeo Platform instance.
*   **Release**: Create a release from that commit. See release section here-after. When performing a release, a package is snapshotted and archived so as to be able to perform a re-installation of that exact same release of your project later.
*   **Revert:** Revert to this commit. This command allows you to restore a previous state of the project by adding a set of changes which invert the set of changes made after the commit on which you selected.

    <div>The revert command preserves the history and a revert entry unlike a reset command which would remove the set of changes after the commit you may have selected (the reset command is not provided to users).</div>

{{#> callout type='info' }}

The history does not display pending changes that you haven't pushed (this situation can happen when you are in intermediate or advanced mode).

{{/callout}}

**Tag**:

*   **Tag Name**: The name of your tag.
*   **On Commit**: Read-only and automatically filled, name of the tag where the release will be done.
*   **Description**: The description of the tag. This description is here for information purpose.

![]({{file name='create-tag.png'}} ?w=350,border=true)

**Release**:

*   **Help Version Format:** List of format rules to apply on your releases.
*   **Help Last releases performed:** List of the last releases you have created.
*   **Branch:** Name of the branch where you are actually working.
*   **Commit Released:** Read-only and automatically filled, name of the commit where the release will be done.
*   **Current Version:** Read-only and automatically filled version number of your branch.
*   **Released Version:** Type the version that you are going to release.
*   **Next Version:** The version after the release.

![]({{file name='create-release.png'}} ?w=350,h=285,border=true)

When a release is performed, the next version can be updated. If you are in advanced mode and your releasing the current branch, a commit to increase the version is staged and you will have to pull it.

## Build Automation

[Nuxeo Studio acts as a Maven repository ]({{page page='maven-integration'}})to provide a Studio project artifact for each of your branches.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Commit Preferences]({{page page='commit-preferences'}})
- [Working in Studio]({{page page='working-in-studio'}})
- [Maven Integration]({{page page='maven-integration'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-to'}}

- [How to Collaborate on a Studio Project]({{page page='how-to-collaborate-on-a-studio-project'}})
- [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})
- [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}})

{{/panel}}</div></div>
