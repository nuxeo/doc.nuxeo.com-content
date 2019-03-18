---
title: 'HOWTO: Add a New Virtual Navigation Entry'
review:
    comment: ''
    date: '2015-12-01'
    status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
details:
    howto:
        excerpt: Learn how to configure a virtual navigation view with Nuxeo Studio.
        level: Intermediate
        tool: Studio
        topics: 'Content View, Virtual Navigation, Vocabulary'
labels:
    - content-review-lts2016
    - virtual-navigation
    - howto
    - content-view
    - atchertchian
    - studio
    - virtual-navigation-component
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '20517205'
    ajs-parent-page-title: Nuxeo Virtual Navigation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Add+a+New+Virtual+Navigation+Entry
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Add+a+New+Virtual+Navigation+Entry'
    page_id: '3342808'
    shortlink: 2AEz
    shortlink_source: 'https://doc.nuxeo.com/x/2AEz'
    source_link: /display/NXDOC/How+to+Add+a+New+Virtual+Navigation+Entry
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 13:37'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2016-04-14 16:08'
        message: Fix Studio menu label
        version: '31'
    -
        author: Ronan Daniellou
        date: '2015-11-18 14:50'
        message: 'Moved description to "Nuxeo Virtual Navigation" page.'
        version: '30'
    -
        author: Ronan Daniellou
        date: '2015-11-18 14:28'
        message: Fixes layout + adds Nuxeo TOC
        version: '29'
    -
        author: Vincent Dutat
        date: '2015-11-09 22:21'
        message: ''
        version: '28'
    -
        author: Vincent Dutat
        date: '2015-11-09 22:20'
        message: ''
        version: '27'
    -
        author: Manon Lumeau
        date: '2015-10-14 13:20'
        message: ''
        version: '26'
    -
        author: Arnaud Kervern
        date: '2015-10-13 16:30'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-12-01 21:58'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-09-15 17:39'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2014-09-15 17:37'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2014-09-15 14:49'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-06-12 15:18'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-03-10 18:03'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-09-02 15:06'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-08-29 17:23'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2011-09-06 16:48'
        message: Migrated to Confluence 4.0
        version: '16'
    -
        author: Solen Guitter
        date: '2011-09-06 16:48'
        message: Added related tutorials
        version: '15'
    -
        author: Solen Guitter
        date: '2011-09-02 17:54'
        message: ''
        version: '14'
    -
        author: Darcy Carrié
        date: '2011-02-08 15:13'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2011-01-19 10:25'
        message: fixed typoes
        version: '12'
    -
        author: Solen Guitter
        date: '2011-01-19 08:52'
        message: link update
        version: '11'
    -
        author: Solen Guitter
        date: '2011-01-18 17:17'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-01-18 11:11'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2011-01-14 09:20'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2011-01-14 09:18'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2011-01-14 09:18'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2011-01-14 09:17'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-07-05 15:04'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-07-05 15:00'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-07-05 14:52'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-07-05 14:15'
        message: ''
        version: '1'
---

{{! excerpt}}
With Nuxeo Studio, you can configure as many virtual navigation views as you need.
{{! /excerpt}}

Just follow these steps:

1.  [Make sure you have all the required elements](#required-element)
2.  [Configure the link and the query](#configure-virtual-navigation)
3.  [Configure the result layout](#configure-virtual-navigation-result-layout)

## Make Sure You Have All the Required Elements {{> anchor 'required-element'}}

**Required elements**

1. You need a hierarchical vocabulary: you can [configure one using Studio]({{page page='how-to-add-a-new-vocabulary'}});
2. You need to have a [document type]({{page page='how-to-define-a-document-type'}}) that uses the hierarchical vocabulary for filling the value in one of its forms.
3. In the **Settings** > **Application Definition** menu, make sure that the Nuxeo JSF UI addon is in the list of packages to install.

## Configure the Virtual Navigation Query and Link {{> anchor 'configure-virtual-navigation'}}

**To create a new virtual navigation:**

1.  Make sure you have **enabled** Virtual Navigation in your **Application Definition**.
2.  Unfold the **Listings & Views** menu entry and click on **Virtual Navigations**.
    The list of existing custom virtual navigations is displayed.
3.  Click on the **New** button.
4.  Give your new virtual navigation an ID and click on the **Next** button.
5.  Fill in the Virtual Navigation configuration (see parameters below).
6.  Click on the **Save** button.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Label

</td><td colspan="1">

The label is displayed the title of the virtual navigation tree, when you click on the corresponding tab.

</td></tr><tr><td colspan="1">

Property

</td><td colspan="1">

It is the filtering property, that must exist in your document typology. First select the schema, then the vocabulary, and so the metadata, that will be used for the match. It can be a single or multi-valued vocabulary.

</td></tr><tr><td colspan="1">

Additional query filter

</td><td colspan="1">

You can use it to add more criteria to the search that will be run when the user clicks on a value in the virtual navigation. You can specify a given type (`ecm:primaryType=...`) or leverage modification date, or whatever that respects [NXQL]({{page space='glos' page='nxql'}}) syntax. See [here]({{page page='nxql'}}) for more information on the NXQL query syntax.

</td></tr><tr><td colspan="1">

Vocabularies

</td><td colspan="1">

Add here as many entries as you want levels in the virtual navigation tree. Even when all the values are in the same vocabulary, whatever the level, you need to reference this vocabulary at each level of the tree.

</td></tr><tr><td colspan="1">

Icon

</td><td colspan="1">

Select the icon that will be displayed on the new virtual navigation tab. You can use icons uploaded in "Resources".

</td></tr><tr><td colspan="1">

Enabled

</td><td colspan="1">

This property should always be clicked when you contribute a new virtual navigation view. Actually, it is useful when you want to disable an existing one.

</td></tr></tbody></table></div>

## Configure the Result Layout of Your Virtual Navigation {{> anchor 'configure-virtual-navigation-result-layout'}}

**To configure the virtual navigation**

1.  On **Virtual navigation**s, click on **Results** tab.
2.  Follow the steps described on the [Customize search layout how to]({{page page='how-to-define-a-new-content-view'}}).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-tos'}}

- [How to Customize the Default Content and Trash Listings]({{page page='how-to-customize-the-default-content-and-trash-listings'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Content Views ]({{page page='content-views'}})
- [Content Views in Studio Documentation]({{page space='studio' page='content-views'}})
- [Custom Page Providers]({{page page='custom-page-providers'}})
- [Documents Display Configuration]({{page page='documents-display-configuration'}})
- [Default Search]({{page space='userdoc' page='default-search'}})

{{/panel}}</div></div>
