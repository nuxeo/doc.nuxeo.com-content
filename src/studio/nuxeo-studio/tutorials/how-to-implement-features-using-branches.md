---
title: 'HOWTO: Implement Features Using Branches'
description: Learn how to use the advanced branch management features of Nuxeo Studio to get a production and a feature branch.
review:
    comment: ''
    date: '2015-08-07'
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to use the advanced branch management features of Nuxeo
            Studio to get a production and a feature branch.
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
    canonical: How+to+Implement+Features+Using+Branches
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/How+to+Implement+Features+Using+Branches
    page_id: '26313780'
    shortlink: NISRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/NISRAQ'
    source_link: /display/Studio/How+to+Implement+Features+Using+Branches
tree_item_index: 700
history:
    -
        author: Manon Lumeau
        date: '2016-03-17 17:17'
        message: ''
        version: '40'
    -
        author: Manon Lumeau
        date: '2016-03-17 15:31'
        message: ''
        version: '39'
    -
        author: Solen Guitter
        date: '2015-11-30 10:07'
        message: ''
        version: '38'
    -
        author: Alain Escaffre
        date: '2015-08-11 11:50'
        message: ''
        version: '37'
    -
        author: Manon Lumeau
        date: '2015-08-10 09:15'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2015-08-07 15:02'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2015-08-07 14:50'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2015-08-06 15:33'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2015-08-06 15:29'
        message: ''
        version: '32'
    -
        author: Manon Lumeau
        date: '2015-08-05 13:11'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2015-08-05 12:48'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2015-08-05 12:33'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2015-08-05 10:01'
        message: ''
        version: '28'
    -
        author: Manon Lumeau
        date: '2015-08-05 09:58'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-08-05 09:44'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2015-08-05 09:41'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2015-08-04 16:19'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2015-08-04 15:54'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2015-08-04 14:56'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2015-08-04 14:54'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2015-08-04 14:53'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-08-04 14:29'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-08-04 09:50'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-08-04 08:52'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-08-04 08:41'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-08-04 08:40'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-08-03 16:19'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2015-08-03 16:15'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2015-08-03 16:15'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-08-03 16:15'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-08-03 15:46'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-08-03 13:25'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2015-08-03 13:21'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2015-08-03 12:38'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-08-03 12:38'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-07-31 16:02'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-07-31 16:02'
        message: ''
        version: '4'
    -
        author: Manon Lumeau
        date: '2015-07-31 16:01'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2015-07-31 14:57'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2015-07-31 14:57'
        message: ''
        version: '1'
---
{{! excerpt}}
The principal goal is to create feature branches that will enable developers to work on the same branch without impacting the `master` branch. They can work together or on their respective sides and merge their work when the features are done.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on Branch Management](https://university.nuxeo.com/learn/public/course/view/elearning/62/understanding-nuxeo-studios-source-control-mechanism).
![]({{file version='' space='nxdoc' page='university 'name='university-source-control.png'}} ?w=450,border=true)
{{/callout}}

## Before You Start

### Scenario

A team of developers needs to put in production two new features for their application:

1.  Evolution of the Search screen
2.  A connector to fetch data from an ERP system and add them automatically on the contract document types inside the Nuxeo Platform

These two features will be developed at the same time but the second one will take more time than the first one. They need to go on production at the end of the first feature without waiting for the second one.

The scenario for this how-to is the following:

*   A first version of the Studio project has been approved and deployed in production.
*   Two features are developed in two different features branches.
*   Once the search screen is tested and approved, it is deployed in production.
*   The connector is developed on the other feature branch.
*   After the connector is tested and approved, it is deployed in production.
*   A second version of the Studio project is ready that includes the two brand new features.

### Requirements

This how-to requires to have access to the [advanced features of Nuxeo]({{page page='branch-management'}}). Please contact your sales representative to activate them.

## Creating Branches

We need to create two branches, one for each feature:

1.  In the **Branch Management** menu, click on the **New Branch** button.
2.  Name your branch `searchScreen` and save.
    Your new branch is displayed on the list.
3.  Repeat the step 1 and name the second branch `ERPConnector` and save.
    ![]({{file name='branches.png'}} ?w=600,border=true)

## Preparing and Merging the Search Screen

1.  In the **Branch Management** menu, click on the **Checkout** button of branch `searchScreen`
    You are now working on the `searchScreen` branch.
2.  Follow [this how-to]({{page space='nxdoc' page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}}) to improve the search screen.
3.  Test your developments: [Deploy the branch]({{page space='admindoc56' page='updating-your-instance-with-studio-configuration'}}) `searchScreen` on your Nuxeo instance and validate the behavior of your feature.

Once your feature is validated, you can now merge it to your `master` branch:

1.  In **Branch Management**, go on the `master` branch by clicking its **Checkout** button.
2.  Click on the button ****Merge into my workspace**** of the branch `searchScreen`.
3.  Deploy the `master` branch to test that the merge didn't break any existing feature.

## Releasing and Deploying the Search Screen

After you have approved the behavior of the `master` branch, you can release and deploy your feature:

1.  In **Branch Management**, click on the `master` branch.
    The history of the branch commits is displayed.
2.  Click on the **Release** button of the last approved commit.
3.  Name the release `1.0.1` and click on the **OK** button.

Now deploy the release of the `master` branch on your production instance:

1.  In your Nuxeo instance, go to **Update Center**&nbsp;> **Nuxeo Studio**.
    The release is displayed in the **Production mode** section.
    ![]({{file name='production_mode_1.0.1.png'}} ?w=600,border=true)
2.  Install the release [like you would install a Nuxeo Package]({{page space='ADMINDOC' page='Installing a+New+Package+on+Your+Instance'}}) and restart.

## Developing the ERP Connector

In our scenario, the search screen is put in production while the development of the connector is still in progress in its dedicated branch. The development of the connector follows the same steps as the search screen evolution.

1.  Develop and configure all the features required by the connector in the `ERPConnector` branch.
2.  Deploy the branch `ERPConnector` on your Nuxeo instance and validate the behavior of your feature.
3.  Once it is validated merge it to the `master` branch.
4.  Test the integration of the connector developments on `master`.
5.  When the status of `master` is approved, release a version `1.0.2` of the branch and deploy it.
    Your project is now updated with two new features.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Studio Documentation'}}

- [Commit Preferences]({{page page='commit-preferences'}})
- [Branch Management]({{page page='branch-management'}})
- [Working in Studio Modeler]({{page page='working-in-studio'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Collaborate on a Studio Project]({{page page='how-to-collaborate-on-a-studio-project'}})
- [How to Work with Maintenance Branches]({{page page='how-to-work-with-maintenance-branches'}})

{{/panel}}</div></div>
