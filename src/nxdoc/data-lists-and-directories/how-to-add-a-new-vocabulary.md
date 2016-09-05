---
title: How to Add a New Vocabulary
details:
    howto:
        excerpt: Learn how to create a vocabulary using Nuxeo Studio.
        level: Beginner
        tool: Studio
        topics: Vocabulary
labels:
    - vocabulary
    - howto-vocabulary
    - howto
    - studio
    - howto-1
confluence:
    ajs-parent-page-id: '22380646'
    ajs-parent-page-title: Data Lists and Directories
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Add+a+New+Vocabulary
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/How+to+Add+a+New+Vocabulary'
    page_id: '22380785'
    shortlink: 8YBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/8YBVAQ'
    source_link: /display/NXDOC60/How+to+Add+a+New+Vocabulary
history:
    - 
        author: Solen Guitter
        date: '2016-08-08 12:57'
        message: ''
        version: '40'
    - 
        author: Frantz Fischer
        date: '2016-08-08 09:13'
        message: ''
        version: '39'
    - 
        author: Solen Guitter
        date: '2014-12-01 22:19'
        message: ''
        version: '38'
    - 
        author: Solen Guitter
        date: '2014-10-10 18:34'
        message: ''
        version: '37'
    - 
        author: Solen Guitter
        date: '2014-10-10 18:34'
        message: ''
        version: '36'
    - 
        author: Solen Guitter
        date: '2014-10-10 18:34'
        message: ''
        version: '35'
    - 
        author: Solen Guitter
        date: '2014-10-10 18:20'
        message: Add .csv examples
        version: '34'
    - 
        author: Manon Lumeau
        date: '2014-09-10 15:41'
        message: ''
        version: '33'
    - 
        author: Manon Lumeau
        date: '2014-09-10 14:26'
        message: ''
        version: '32'
    - 
        author: Manon Lumeau
        date: '2014-09-10 14:04'
        message: ''
        version: '31'
    - 
        author: Manon Lumeau
        date: '2014-09-10 12:17'
        message: ''
        version: '30'
    - 
        author: Manon Lumeau
        date: '2014-06-30 11:46'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2014-06-30 10:54'
        message: Added links
        version: '28'
    - 
        author: Manon Lumeau
        date: '2014-06-27 11:49'
        message: ''
        version: '27'
    - 
        author: Manon Lumeau
        date: '2014-06-27 11:47'
        message: ''
        version: '26'
    - 
        author: Manon Lumeau
        date: '2014-06-26 17:41'
        message: ''
        version: '25'
    - 
        author: Manon Lumeau
        date: '2014-06-26 17:40'
        message: ''
        version: '24'
    - 
        author: Manon Lumeau
        date: '2014-06-26 17:38'
        message: ''
        version: '23'
    - 
        author: Manon Lumeau
        date: '2014-06-26 17:37'
        message: ''
        version: '22'
    - 
        author: Manon Lumeau
        date: '2014-06-26 17:31'
        message: ''
        version: '21'
    - 
        author: Manon Lumeau
        date: '2014-06-26 17:19'
        message: ''
        version: '20'
    - 
        author: Manon Lumeau
        date: '2014-06-26 17:08'
        message: ''
        version: '19'
    - 
        author: Manon Lumeau
        date: '2014-06-26 16:53'
        message: ''
        version: '18'
    - 
        author: Manon Lumeau
        date: '2014-06-26 14:50'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-06-12 14:59'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-12-02 16:59'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-09-06 15:08'
        message: Migrated to Confluence 4.0
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-09-06 15:08'
        message: Added related tutorials
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-09-05 16:18'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-07-19 18:11'
        message: updated instructions with new menu labels
        version: '11'
    - 
        author: Arthur Gallouin
        date: '2011-07-18 10:36'
        message: ''
        version: '10'
    - 
        author: Arthur Gallouin
        date: '2011-07-18 10:35'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-01-13 15:30'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-01-13 15:26'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-01-13 14:33'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-01-13 14:27'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-09-23 18:24'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-09-23 18:24'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-09-23 18:20'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-09-23 18:04'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='No cache for Studio created vocabularies'}}

Please be aware there is no cache enabled by default when creating a new vocabulary in Studio (see [NXS-2504](https://jira.nuxeo.com/browse/NXS-2504)).

In order to set up a cache, follow the steps described in [How to Configure a New Directory Cache]({{page page='how-to-configure-a-new-directory-cache'}}).

{{/callout}}{{! excerpt}}

Studio enables you to declare new vocabularies that will be used in the different document layouts to fill in metadata or in virtual navigations.

{{! /excerpt}}

A vocabulary is a list of labels that are used in the application to populate the various selection lists (drop-down, select or multi-select lists). A vocabulary can be used independently or it can be associated with other vocabularies to compose a multi-level list.

{{! multiexcerpt name='3-types-vocabulary'}}

There are 3 types of vocabulary:

*   Simple vocabulary: one-level vocabulary,
*   Hierarchical vocabulary: multi-level vocabulary.
*   Child vocabulary: one-level vocabulary used as the sub-level of simple vocabulary to compose a multi-level selection. To make parent selection easier, available vocabularies values are proposed in a drop down list.

    {{#> callout type='tip' }}

    The association of simple and child vocabularies to compose a multi-level list has been replaced by the hierarchical vocabulary, which we recommend for multi-level lists.

    {{/callout}}

{{! /multiexcerpt}}

<span style="color: rgb(0,0,0);font-size: 20.0px;line-height: 1.5;">Creating a New Vocabulary</span>

1.  Click on the&nbsp;**Vocabularies**&nbsp;item of the Studio menu.

    {{#> callout type='info' }}

    For an exhaustive presentation of the vocabulary configuration, see the [Vocabularies]({{page space='studio' page='vocabularies'}}) page.

    {{/callout}}
2.  Click on the&nbsp;**New**&nbsp;button.
3.  Fill in the ID and vocabulary type and click on the **Next** button.
    ![]({{file name='STUDIO-vocabulary-type-selection.png'}} ?w=350,border=true)
4.  Fill in the values like you want.
    ![]({{file name='STUDIO-vocabulary-form.png'}} ?w=450,h=114,border=true)

    {{#> callout type='tip' }}

    Click on **Import CSV** to import content from a .csv file instead of typing each entry manually. See example files:[ simple-vocabulary.csv]({{file name='simple-vocabulary.csv' space='studio' page='vocabularies'}}) and []({{file name='hierarchical-vocabulary.csv' space='studio' page='vocabularies'}}).

    {{/callout}}
5.  Click on the **Save&nbsp;**button.
    You can now use the vocabulary on [layouts]({{page page='layout-and-widget-how-to-index'}}) to populate drop-down lists. After you deploy your customization on your Nuxeo Platform, the vocabulary is [available in the Admin Center]({{page space='userdoc60' page='managing-vocabularies'}}) so power users and administrators can easily add new entries to the vocabulary.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Howtos'}}

*   <div class="details">[Add a New Virtual Navigation Entry]({{page space='NXDOC' page='Add a+New+Virtual+Navigation+Entry'}})</div>

*   <div>[Adding a New Vocabulary]({{page space='NXDOC' page='Adding a+New+Vocabulary'}})</div>

*   <div>[Translating a Vocabulary]({{page space='NXDOC' page='Translating a+Vocabulary'}})</div>

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Tutorials'}}

*   [Data Lists and Directories]({{page page='data-lists-and-directories'}})
*   [Declaring Vocabularies]({{page space='studio' page='declaring-vocabularies'}})
*   [Managing Vocabularies]({{page space='userdoc60' page='managing-vocabularies'}})

{{/panel}}</div></div>