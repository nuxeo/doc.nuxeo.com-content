---
title: Registries
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '12911781'
    ajs-parent-page-title: Working in Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Registries
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Registries'
    page_id: '8683799'
    shortlink: F4GE
    shortlink_source: 'https://doc.nuxeo.com/x/F4GE'
    source_link: /display/Studio/Registries
tree_item_index: 1500
history:
    -
        author: Manon Lumeau
        date: '2016-03-18 11:14'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-01-12 16:42'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-12-31 11:09'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-12-03 16:40'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-07-15 12:46'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-07-15 12:45'
        message: Fixed typos
        version: '4'
    -
        author: Alain Escaffre
        date: '2013-01-29 00:59'
        message: More info on what registries are really
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-09-06 11:47'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-09-06 11:47'
        message: ''
        version: '1'

---
Nuxeo Studio provides a list of registries that you can complete with JSON instructions.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Registries/Studio Registries
    name: studio-registries.png
    studio_modeler#screenshot#up_to_date
--}}
![Studio Registries](nx_asset://d48e4a41-8dd8-4962-9ace-0edb1ad8f79b ?w=200,border=true)

The goal of this section of Studio is to be able to complete Nuxeo Studio drop down lists and elements of the interface with additional elements that come from another Studio project or an Eclipse-based customization. For example, you can declare a document type in the registries. You can then declare new document types from that type, use it in Structure Templates, etc. You can also use registries to [declare new operations]({{page space='Studio' page='Referencing an+Externally+Defined+Operation'}}) so that they appear in the Operations browser.

Examples are provided for each registry type.

{{! multiexcerpt name='Registries'}}

{{#> callout type='info' }}
  Registries never impact what happens on the runtime when you deploy your plugins. They are only useful for configuring your Studio project screens (what you see in drop down lists and menus) and your Studio project validation rules.  
  For that reason, you can for instance only complete the "id" of a schema without the property detail, and you'll be able to assign this schema to a document type. But in that case you won't have the properties listed when editing some layouts on documents that hold this schema. You'll need to give the complete JSON definition for this.
{{/callout}}

{{! /multiexcerpt}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}
- [Referencing an Externally Defined Type]({{page page='referencing-an-externally-defined-type'}})
- [Referencing an Externally Defined Operation]({{page page='referencing-an-externally-defined-operation'}})
- [How to Contribute a New "User Registration Request" Document Type]({{page space='nxdoc' page='how-to-contribute-a-new-user-registration-request-document-type'}})
- [How to Add a New Action Category on a Document Tab]({{page space='nxdoc' page='how-to-add-a-new-action-category-on-a-document-tab'}})
{{/panel}}
</div>
<div class="column medium-6">
&nbsp;
</div></div>
