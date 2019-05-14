---
title: 'HOWTO: Work with Maintenance Branches'
description: 'Learn how to use the advanced branch management feature of Nuxeo
Studio to get a production and a maintenance branch.'
review:
    comment: ''
    date: '2015-08-07'
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to use the advanced branch management feature of Nuxeo
            Studio to get a production and a maintenance branch.
        level: Intermediate
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
    canonical: How+to+Work+with+Maintenance+Branches
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/How+to+Work+with+Maintenance+Branches
    page_id: '26313608'
    shortlink: iIORAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iIORAQ'
    source_link: /display/Studio/How+to+Work+with+Maintenance+Branches
tree_item_index: 800
history:
    -
        author: Manon Lumeau
        date: '2016-03-18 10:49'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2015-11-30 10:07'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-08-10 09:19'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2015-08-07 15:35'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-08-07 15:34'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-08-05 09:44'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2015-08-04 15:38'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-08-04 13:44'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-08-04 13:05'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-08-03 14:43'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-08-03 14:12'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-08-03 08:01'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-07-31 15:58'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-07-31 15:11'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-07-31 14:55'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-07-30 11:51'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-07-29 14:40'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-07-29 14:32'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-07-29 14:32'
        message: ''
        version: '1'
---

After you have completed a first version of your project and it goes live, you can leverage the [advanced branch management features]({{page page='branch-management'}}) of Nuxeo Studio to separate maintenance developments from evolution development.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).
![]({{file version='' space='nxdoc' page='university' name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

## Scenario

The scenario for this how-to is the following:

*   A first version of the Studio project (1.0.0) has been approved and deployed in production.
*   A first set of bug fixes will be developed in a maintenance branch.
*   After the corrections are tested and approved, they are deployed in production (1.0.1). Bug fixes are reported on the `master` branch.
*   A second set of bug fixes is developed in the maintenance branch.
*   After the second set is tested and approved, it is deployed in production (1.0.2). Bug fixes are reported on the `master` branch.
*   A second version of the Studio project (1.1.0) is ready that includes both correction sets and some improvements is ready for test and deployment.
*   After version 1.1.0 of the project is deployed a new maintenance branch is created for bug fixes on that version.

### Requirements

This how-to requires to have access to the advanced features of Nuxeo. Please contact your sales representative to activate them.

To help following this how-to we provide you with some correction examples based on the a Contract document type as described in [this tutorial]({{page version='' space='nxdoc' page='web-ui-document-layouts'}}#create-a-contract-document-type). Of course you can do whatever modification on your project, the goal here is to give you guidelines to work with branches for the maintenance of your application. The required properties to complete this how-to using the Contract example are:

- In the Contract schema, a field `owner` that is a `string`
- Create, Edit and View layouts with at least the fields below:
    - **Title**: leave as default
    - **Description**: leave as default
- "Owner" text widget on the Create layout, using the `contract:owner` schema field

## Creating the Maintenance Branch

1.  In Branch Management, click on **New Branch**.
2.  Name your branch `maintenance_1.0` and save.
3.  Click on the **Checkout** button to work on that new branch.

## Preparing and Testing Corrections

1.  On the Creation layout of the Contract document type, click on the icon ![]({{file name='editor_area.gif' page='studio-icons-index'}})of the widget Owner.
2.  Select the Widget type **Single user/group suggestion** and save.
3.  Save your modifications on the document type.
4.  Deploy the branch `maintenance_1.0` on your Nuxeo instance and validate the behavior of your correction.
5.  If needed do some additional changes on the same principle as described in previous step.

## Releasing and Deploying Corrections

When you are ready to deploy bug fixes, release your corrections set:

1.  In **Branch Management**, click on the `maintenance_1.0` branch.
    The commit history of the branch is displayed.
2.  Click on the **Release** button of the last approved commit.
3.  Name the release `1.0.1` and click on the **OK** button.
    ![]({{file name='release_1.0.1.png'}} ?w=400,border=true)

Now deploy the release of the `maintenance_1.0` branch on your production instance:

1.  In your Nuxeo instance, go to **Update Center** > **Nuxeo Studio**.
    The released set of corrections is displayed in the **Production mode** section.
    ![]({{file name='production_mode_1.0.1.png' page='how-to-implement-features-using-branches'}} ?w=600,border=true)
2.  Install the release [like you would install a Nuxeo Package]({{page space='nxdoc' page='installing-a-new-package-on-your-instance'}}) and restart.

## Reporting Corrections on master Branch

The `master` branch is the main branch of the project. It will hold both evolutions and corrections. So you need to report the bug fixes done on the `maintenance_1.0` branch on `master`. Because the `master` branch is evolving with new features and improvements, the corrections done on `maintenance_1.0` may need to be adapted to be aligned on the latest developments. This is why you need to report manually bug fixes on the `master` branch.

## Preparing and Deploying a Second Set of Bug Fixes

Follow the same big steps as above to prepare and deploy a second set of corrections on the `maintenance_1.0` branch. For instance:

1.  On the Edit layout of the Contract document type, add the Owner field: use a **Single user/group suggestion** widget instead of a text widget and check the Read-only box.
2.  On the View layout click on **Import Layout** > **Edit layout** to get the same layout as the Edit one.
3.  Test your modifications.
4.  Release and deploy a version 1.0.2 of the `maintenance_1.0` branch.
5.  Report your modifications on the `master` branch.

## Preparing New Features on the master Branch

In parallel to the corrections, you can develop new features on the `master` branch. This branch will hold both evolutions and corrections. For instance:

1.  Complete your developments on `master`.
2.  Make sure you reported the latest bug fixes from `maintenance_1.0`.
3.  Test the developments of `master`.
4.  Once you have approved your developments, release a version 1.1.0 of `master`.

## Working on Corrections for Version 1.1.0

After you have released a new version of your project (here 1.1.0), you need to create a new maintenance branch to work on bug fixes for that version.

1.  Create a new maintenance branch from `master`, called `maintenance_1.1`.
2.  Proceed for corrections on the new maintenance branch the same way as for the first maintenance branch.
3.  Depending on your maintenance policy you need to keep the branch `maintenance_1.0` or you can delete it.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Studio Documentation'}}

- [Commit Preferences]({{page page='commit-preferences'}})
- [Branch Management]({{page page='branch-management'}})
- [Working in Studio Modeler]({{page page='working-in-studio'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Collaborate on a Studio Project]({{page page='how-to-collaborate-on-a-studio-project'}})
- [How to Implement Features Using Branches]({{page page='how-to-implement-features-using-branches'}})

{{/panel}}</div></div>
