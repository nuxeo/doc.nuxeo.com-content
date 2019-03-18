---
title: Managing Vocabularies
description: Vocabularies are the lists of labels used in the application, for instance in drop down lists. A vocabulary is composed of several entries, that are the options in the drop down lists.
review:
    comment: ''
    date: '2018-03-08'
    status: ok
labels:
    - metadata
    - admin-center
    - vocabulary
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '2392402'
    ajs-parent-page-title: Managing Your Nuxeo Application
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Managing+Vocabularies
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Managing+Vocabularies'
    page_id: '2392405'
    shortlink: VYEk
    shortlink_source: 'https://doc.nuxeo.com/x/VYEk'
    source_link: /display/USERDOC/Managing+Vocabularies
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2015-09-03 15:51'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-09-10 16:40'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-03-10 18:16'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-02-20 22:18'
        message: fixed typo
        version: '16'
    -
        author: Solen Guitter
        date: '2013-11-04 23:14'
        message: Updated screenshot for 5.8
        version: '15'
    -
        author: Solen Guitter
        date: '2013-11-04 23:13'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-10-22 18:52'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-12-03 18:12'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-10-16 14:42'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-06-15 16:31'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Solen Guitter
        date: '2012-06-15 16:31'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2012-01-26 12:19'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-11-24 11:19'
        message: Removed 5.4 references
        version: '7'
    -
        author: Solen Guitter
        date: '2011-11-08 18:55'
        message: Added related content
        version: '6'
    -
        author: Solen Guitter
        date: '2011-11-08 18:51'
        message: Added toc
        version: '5'
    -
        author: Solen Guitter
        date: '2011-06-06 15:05'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-05-24 17:01'
        message: updated with new 5.4.2 main tabs
        version: '3'
    -
        author: Solen Guitter
        date: '2010-12-01 11:27'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2010-04-23 15:50'
        message: ''
        version: '1'
---
{{! multiexcerpt name='vocabularies-content'}}
{{multiexcerpt 'vocabularies-intro' page='administration'}}
![]({{file name='hierarchical-vocabulary.png'}} ?w=250,border=true)

{{#> callout type='tip' }}
Although the `I10nsubjects` vocabulary is used in most places to populate the Subject list (on edit forms and search forms for instance), the [virtual navigations]({{page version='' space='nxdoc' page='nuxeo-virtual-navigation'}}) used the older "topic" and "subtopic" vocabularies. You need to use the same ID in all vocabularies to make the virtual navigations work.
{{/callout}}

{{multiexcerpt 'vocabularies-management-restrictions' page='administration'}}

## Consulting Vocabularies

All vocabularies editable from the user interface are listed in the vocabularies management interface.

To consult a vocabulary or its entries click on the **Admin >** **Vocabularies** tab and select the vocabulary you want to consult in the drop down list.
![]({{file name='DM-vocabulary_selection.png'}} ?w=650,border=true)

{{#> callout type='info' }}

By default, the labels of default vocabularies entries are the IDs of labels in .properties files of source code.

{{/callout}}

## Vocabulary Entries Parameters

{{! multiexcerpt name='vocabulary-entries-parameter'}}

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

ID

</td><td colspan="1">

Unique identifier for the vocabulary entry. The ID is not displayed to users.

</td></tr><tr><td colspan="1">

Parent

</td><td colspan="1">

This field is only displayed on hierarchical vocabularies second level. It indicates to which first level entry the current value is linked.

</td></tr><tr><td colspan="1">

Label

</td><td colspan="1">

Value of the entry that will be displayed to users on the application.

</td></tr><tr><td colspan="1">

Obsolescence

</td><td colspan="1">

Indicates if the entry should be displayed in the available values on edition.

</td></tr><tr><td colspan="1">

Order

</td><td colspan="1">

Indicates the rank of the entry in the vocabulary.
Order is set at `10,000,000` by default.

</td></tr></tbody></table></div>

{{! /multiexcerpt}}

## Editing Vocabularies

When you modify a vocabulary, you can add new entries, edit or delete them.

### Adding a Vocabulary Entry

To add an entry to a vocabulary,click on the **Add a new vocabulary entry** link of the vocabulary, fill in the entry creation form and click on the **Create** button.

![]({{file name='vocabularies-entry-add-form.png'}} ?w=400,border=true)

The new entry is displayed in the list of the vocabulary entries. It is immediately available in the corresponding drop down list in the user interface.

### Editing a Vocabulary Entry

Editing a vocabulary entry can be changing its label, making it obsolete or changing its order. When you make an entry obsolete, it means that it will not be displayed in the available choices when you edit a document. But the value is still displayed on **Summary** tab of documents.

To modify a vocabulary entry, click on the **Modify** button corresponding to the entry you want to modify. Edit the entries properties and save. Modifications are immediately taken into account.

![]({{file name='vocabularies-entry-edit-form.png'}} ?w=400,border=true)

### Deleting a Vocabulary Entry

{{#> callout type='warning' }}

Deleting a vocabulary entry is a permanent action.

{{/callout}}

To delete vocabulary entry, click on the **Delete** button of the entry to erase and confirm.The entry is permanently erased. The list of the vocabulary entries is displayed.

{{! /multiexcerpt}}


<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Admin Tab Overview]({{page space='nxdoc' page='admin-tab-overview'}})
- [How to Add a New Vocabulary]({{page space='nxdoc' page='how-to-add-a-new-vocabulary'}})
- [How to Translate a Vocabulary]({{page space='nxdoc' page='how-to-translate-a-vocabulary'}})
- [How to Add New Relation Types]({{page space='nxdoc' page='how-to-add-new-relation-types'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
