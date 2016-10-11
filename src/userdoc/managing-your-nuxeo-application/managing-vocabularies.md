---
title: Managing Vocabularies
review:
    comment: ''
    date: ''
    status: ok
labels:
    - metadata
    - admin-center
    - vocabularies
toc: true
confluence:
    ajs-parent-page-id: '16092626'
    ajs-parent-page-title: Managing Your Nuxeo Application
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Managing+Vocabularies
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Managing+Vocabularies'
    page_id: '16092611'
    shortlink: w431
    shortlink_source: 'https://doc.nuxeo.com/x/w431'
    source_link: /display/USERDOC58/Managing+Vocabularies
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:24'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-02-20 22:16'
        message: ''
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
## Consulting Vocabularies

All vocabularies editable from the user interface are listed in the vocabularies management interface.

**To consult a vocabulary or its entries:**

1.  Click on the **Admin Center** main tab.
2.  Click on the **Vocabularies** tab.
    ![]({{file name='AdminCenter-vocabularies-tab.png' space='admindoc58' page='admin-center-overview'}} ?w=650,border=true)
    The vocabularies drop down list is displayed. The first vocabulary's entries are displayed.
3.  Select the vocabulary you want to consult in the drop down list.
    The vocabulary entries are displayed.
    ![]({{file name='DM-vocabulary_selection.png'}} ?w=650,border=true)

{{#> callout type='info' }}

By default, the labels of default vocabularies entries are the IDs of labels in properties files of source code.

{{/callout}}

## Vocabulary Entries Parameters

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

This field is only displayed on hierarchical vocabularies second level. It indicates to which 1st level entry the current value is linked.

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
Order is set at "10,000,000" by default.

</td></tr></tbody></table></div>

## Editing Vocabularies

When you modify a vocabulary, you can add new entries, edit or delete them.

### Adding a New Vocabulary Entry

**To add an entry to a vocabulary:**

1.  [Consult the vocabulary](#consult-vocabularies) to add an entry to.
2.  Click on the **Add a new vocabulary entry** link.
    The entry creation form is displayed under the link.
3.  Fill in the entry creation form.
    ![]({{file name='vocabularies-entry-add-form.png'}} ?w=400,border=true)
4.  Click on the **Add** button.
    The new entry is displayed in the list of the vocabulary entries.

### Editing a Vocabulary Entry

Editing a vocabulary entry can be:

*   change its label,
*   make it obsolete,
*   change its order.

When you make an entry obsolete, it means that it will not be displayed in the available choices when you edit a document. But the value is still displayed on **Summary** tab of documents.

**To modify a vocabulary entry:**

1.  [Consult the vocabulary](#consult-vocabularies) in which you want to edit the entry.
    Click on the **Modify** button corresponding to the entry you want to modify.
    The entry modification form is displayed.
2.  Edit the entries properties.
    ![]({{file name='vocabularies-entry-edit-form.png'}} ?w=400,border=true)
3.  Click on the **Save** button.
    The list of the vocabulary entries is displayed.

### Deleting a Vocabulary Entry

{{#> callout type='warning' }}

Deleting a vocabulary entry is a permanent action.

{{/callout}}

**To delete vocabulary entry:**

1.  [Consult the vocabulary](#consult-vocabulary) to delete an entry from.
2.  Click on the **Delete** button of the entry to erase.
3.  On the window that pops up, click on the **OK** button.
    The entry is permanently erased. The list of the vocabulary entries is displayed.

&nbsp;