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

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).
![]({{file version='' space='nxdoc' page='university' name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

## Concept

Branch Management editor contains the information related to the branch management of the current project. This is where you can create, manage and delete your branches.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Branch Management/Branch Management
    name: branch-management.png
    studio_modeler#screenshot#up_to_date
--}}
![Branch Management](nx_asset://7fb1a28d-945f-4994-a1db-6634a30525cb ?w=650,border=true)

## Creating a Branch

Create a branch enables you to [work with a maintenance branch]({{page page='how-to-work-with-maintenance-branches'}}) or to [implement a feature]({{page page='how-to-implement-features-using-branches'}}) without impacting the `master` branch. The **New Branch** button lets you create a branch. Fill in the creation form with a new name for your branch and save. The new branch will be created from the content of the last branch you checked out into your workspace. Creating a branch requires to have access to the advanced features of Nuxeo Studio, please contact your sales representative to activate them.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Branch Management/Create Branch
    name: create-branch.png
    studio_modeler#screenshot#up_to_date
--}}
![Create Branch](nx_asset://974fec6a-4065-4373-a4a1-d76b1a99a76b ?w=600,border=true)

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

When using intermediate or advanced commit modes, you need to commit and push your changes before being able to create a tag or a release on this basis.

{{/callout}}

**Tag**:

- **Tag Name**: The name of your tag.
- **On Commit**: Read-only and automatically filled, name of the tag where the release will be done.
- **Description**: The description of the tag. This description is here for information purpose.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Branch Management/Create Tag
    name: create-tag.png
    studio_modeler#screenshot#up_to_date
--}}
![Create Tag](nx_asset://be02b38a-fbc4-4b4e-ab02-e021271d8642 ?w=350,border=true)

**Release**:

*   **Current Branch:** Branch from which you are creating the release.
*   **Commit to Release:** Description of the commit from which the release will be done.
*   **Latest Release in Branch:** Indicates the last release performed from this branch. Studio will suggest a version number on this basis.
*   **Release Version:** Select or type the version number that you are going to release.
*   **Help Version Format:** List of format rules to apply on your releases.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Branch Management/Create Release
    name: create-release.png
    studio_modeler#screenshot#up_to_date
--}}
![Create Release](nx_asset://175f2be5-0e16-4cc3-85b2-daa17866ff65 ?w=350,border=true)

Releases can also be created using a [REST API]({{page page='how-to-tag-or-release-your-nuxeo-studio-project'}}#rest-api).

## Build Automation

[Nuxeo Studio acts as a Maven repository ]({{page page='maven-integration'}})to provide a Studio project artifact for each of your branches.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Commit Preferences]({{page page='commit-preferences'}})
- [Working in Studio Modeler]({{page page='working-in-studio'}})
- [Maven Integration]({{page page='maven-integration'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-to'}}

- [How to Collaborate on a Studio Project]({{page page='how-to-collaborate-on-a-studio-project'}})
- [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})
- [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}})

{{/panel}}</div></div>
