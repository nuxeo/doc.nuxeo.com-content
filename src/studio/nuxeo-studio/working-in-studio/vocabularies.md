---
title: Vocabularies
review:
  comment: ''
  date: ''
  status: ok
labels:
  - vocabulary
toc: true
confluence:
  ajs-parent-page-id: '12911781'
  ajs-parent-page-title: Working in Studio
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Vocabularies
  canonical_source: 'https://doc.nuxeo.com/display/Studio/Vocabularies'
  page_id: '18450541'
  shortlink: bYgZAQ
  shortlink_source: 'https://doc.nuxeo.com/x/bYgZAQ'
  source_link: /display/Studio/Vocabularies
tree_item_index: 800
history:
  - author: Solen Guitter
    date: '2016-08-30 14:34'
    message: ''
    version: '21'
  - author: Manon Lumeau
    date: '2016-03-17 13:49'
    message: ''
    version: '20'
  - author: Solen Guitter
    date: '2015-12-03 09:51'
    message: ' on missing columns becomes Don’t override existing values'
    version: '19'
  - author: Solen Guitter
    date: '2015-10-30 13:38'
    message: ''
    version: '18'
  - author: Solen Guitter
    date: '2014-10-10 18:34'
    message: ''
    version: '17'
  - author: Solen Guitter
    date: '2014-10-10 18:34'
    message: ''
    version: '16'
  - author: Solen Guitter
    date: '2014-10-10 18:33'
    message: Add example csv files and note about 1st line in csv
    version: '15'
  - author: Manon Lumeau
    date: '2014-06-30 11:32'
    message: ''
    version: '14'
  - author: Manon Lumeau
    date: '2014-06-27 17:27'
    message: ''
    version: '13'
  - author: Manon Lumeau
    date: '2014-06-27 17:04'
    message: ''
    version: '12'
  - author: Manon Lumeau
    date: '2014-06-27 17:04'
    message: ''
    version: '11'
  - author: Manon Lumeau
    date: '2014-06-27 15:53'
    message: ''
    version: '10'
  - author: Manon Lumeau
    date: '2014-06-27 15:22'
    message: ''
    version: '9'
  - author: Manon Lumeau
    date: '2014-06-27 15:05'
    message: ''
    version: '8'
  - author: Solen Guitter
    date: '2014-03-10 18:15'
    message: ''
    version: '7'
  - author: Solen Guitter
    date: '2014-02-17 10:10'
    message: ''
    version: '6'
  - author: Solen Guitter
    date: '2014-02-17 10:10'
    message: Updated related topics
    version: '5'
  - author: Alain Escaffre
    date: '2014-02-14 19:21'
    message: ''
    version: '4'
  - author: Alain Escaffre
    date: '2014-02-14 19:17'
    message: ''
    version: '3'
  - author: Alain Escaffre
    date: '2014-02-14 19:08'
    message: ''
    version: '2'
  - author: Alain Escaffre
    date: '2014-02-14 19:03'
    message: ''
    version: '1'
---

{{! excerpt}}
All the elements of the main Vocabulary feature screen are reviewed on this page.
{{! /excerpt}}

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University

- [Course on Content Model Design](https://university.nuxeo.com/learn/public/course/view/elearning/12/content-model-design-in-nuxeo-studio)
- [Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
  ![]({{file version='' space='nxdoc' page='university' name='university-content-model.png'}} ?w=450,border=true)
  {{/callout}}

{{{multiexcerpt '3-types-vocabulary' page='NXDOC:How to add a New Vocabulary'}}}

{{{multiexcerpt 'disabling-feature' page='branding'}}}

In each of these three types of vocabulary you will find identical parameters like:

- **Creation Policy**: The Creation Policy defines whether the values are created when the configuration is deployed on a Nuxeo Platform instance.
  - **Don't override existing values** means that it will be deployed only if it has never been deployed before on the instance. If it is already here, it will let the existing values as is.
  - **Always** means it will override the existing values with the ones that are on Studio. It should be used with a lot of attention, as there is no way to revert, if data has been deleted at deployment.
  - **Never** would be used so as to disable the data loading logic temporarily, but would still declare the directory.
- **Delete** and **Delete all**: Used to delete the values.
- **Import CSV:** Opens a pop-up with inline documentation. You can either import data in Studio from a CSV file **or** references a file that is never "parsed" from Studio (only by your Nuxeo Platform at deployment time). Choose the second option if you have many lines, for a better user experience with your Studio project. The first line of the CSV file is the header that defines the vocabulary fields: id, label, obsolete, ordering, and parent for hierarchical vocabularies. See examples [Simple Vocabulary]({{file name='simple-vocabulary.csv'}}) and [Hierarchical Vocabulary]({{file name='hierarchical-vocabulary.csv'}}).

## The Simple Vocabulary

![]({{file name='STUDIO-simple-vocabulary.png'}} ?w=650,border=true)

This type enables you to create a simple one-level vocabulary. Make sure to fill in the fields Id and Label correctly, with no special characters in the Id's name.

These fields are the same as those on the [vocabularies management interface]({{page space='userdoc58' page='managing-vocabularies'}}).

## The Child Vocabulary

![]({{file name='STUDIO-child-vocabulary.png'}} ?w=650,border=true)

This type allows you to link vocabularies between them in order to have parent and child vocabularies.

You can't create a Child Vocabulary if you don't have a Parent Vocabulary already created to select. Once your Child Vocabulary is created, you can add vocabulary entries and select a Parent for each of them by clicking on **Select** button and choose a Parent in the drop down list.

## The Hierarchical Vocabulary

![]({{file name='NuxeoStudioHierarchicalVocabularyMainView.png'}} ?w=650,border=true)

This types has more parameters than the others:

- **Add Root**: Adds a root value. Adding a value means giving an id, a label and an obsolete field, the same values you would find in the Nuxeo Platform [vocabulary screen edition]({{page space='userdoc' page='managing-vocabularies'}}) interface.
- **Add child**: When already on a node, adds a child element. Note that you have to click on the "Set tree depth" button if you want to add more children than the currently set limit.
- **Move up** and **Move down**: Used to move the values (that are ordered).
- **Set tree depth:** Allows to set more than two degrees of values on a hierarchical vocabulary. Select2 widgets are directly compatible with any levels. If you want to have more than two levels with chain selects, you can read the [Create a n-level select widget how-to]({{page space='nxdoc' page='how-to-create-a-n-level-select-widget'}}).

## Default Vocabularies

All vocabularies editable from the user interface are listed in the vocabularies menu entry.

To manage a vocabulary or its entries, go to **Administration > Vocabularies** and select the vocabulary you want to consult in the drop down list.

| Vocabulary         | Description                                                                             |
| ------------------ | --------------------------------------------------------------------------------------- |
| Continent          | Lists continents.                                                                       |
| Country            | Lists countries and parent continents.                                                  |
| Inverse_predicates | Lists inverse predicates that define relations between documents. (Available on JSF UI) |
| L10ncoverage       | Lists countries and their parent continent in English and in French.                    |
| L10nsubjects       | Lists subjects and their parent subject in English and in French.                       |
| Language           | Lists languages.                                                                        |
| Nature             | Lists several types of documents.                                                       |
| Predicates         | Lists predicates that define relations between documents. (Available on JSF UI)         |
| Subtopic           | Lists subtopic and their parent topic.                                                  |
| Topic              | Lists topic.                                                                            |
| WorkflowType       | Lists types of workflow tasks.                                                          |

{{{multiexcerpt 'DeprecatedJSF' page='nxdoc/generic-multi-excerpts'}}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}
- [Managing Vocabularies]({{page space='userdoc' page='managing-vocabularies'}})
- [How to Add New Relation Types]({{page space='userdoc' page='how-to-add-new-relation-types'}})
- [How to Add a New Vocabulary]({{page space='nxdoc' page='how-to-add-a-new-vocabulary'}})
- [How to Translate a Vocabulary]({{page space='nxdoc' page='how-to-translate-a-vocabulary'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
