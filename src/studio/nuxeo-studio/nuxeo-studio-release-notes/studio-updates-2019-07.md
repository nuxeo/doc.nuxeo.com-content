---
title: 'July 2019'
description: .
tree_item_index: 976
review:
  comment: ''
  date: '2019-08-14'
  status: ok
toc: true
hidden: true
---

## Released Changes

{{! multiexcerpt name='studio-updates-2019-07-changes'}}
### Actions Renamed As Buttons

Actions menu in Designer are renamed as `Buttons`, and the related options as follows:
- `Operation Action` is now `Button`: Choose this option to create a button using configuration only.
- `Action` is now `Custom Button`: Choose it to create your own button element using code for extensive capabilities.

Icons reflect the options more clearly.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2019-07/button-creation-plus-button
    name: button-creation-plus-button.png
    studio_designer#screenshot#up_to_date
--}}
![button-creation-plus-button](nx_asset://62c8b710-4e68-4849-aa41-3ff0cfab5d82 ?w=152,border=true)

The `+` button in Designer is refreshed to be more explicit:
- Tooltips are shown on the option you choose,
- When only two options are available, clicking the `+` button directly leads you to the one that is the simplest to use.

### Better Contextual Help

Studio Designer shows contextual help on click so that you can copy/paste code samples and click on documentation links.

### Help In Page Provider Configuration

- Contextual help is added to guide you on:
  - choosing an aggregate type between ranges, histogram and terms options
  - defining ranges
  - adding a quick filter
- Date format and interval provide a default value and guidance to let you tweak it, quick filter clause has a placeholder to guide you on the query format
- Format field for range aggregates and interval field for histogram aggregates are properly marked as required, and regrouped with other required fields for faster configuration
- Quick filter name is shown in the user interface when no translation has been defined for it

### Search on File Type or Size

It is possible to define aggregates on the sub-fields for a blob property. It can be used to provide search options to find files of a specific type, or based on the file size for example.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2019-07/aggregates-blob-sub-properties
    name: aggregates-blob-sub-properties.png
    studio_modeler#screenshot#up_to_date
--}}
![aggregates-blob-sub-properties](nx_asset://1f8f789f-809b-43d8-8c22-c2d74c0d6b1c ?w=450,border=true)

Use the `histogram` or `range` aggregate types in combination with the `length` property for the file size, the `terms` aggregate with the `mime-type` property for the file type.

These options work with any blob property, multivalued ones as well.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/studio-updates-2019-07/aggregates-blob-sub-properties-search-form
    name: Screenshot from 2019-07-08 16-38-53.png
    1.1.3#screenshot#up_to_date
--}}
![aggregates-blob-sub-properties-search-form](nx_asset://ba6d5300-6056-40bc-9d59-4d326befd8b6 ?w=250)

### Polymer 3 Migration

Compatibility for Nuxeo Studio with Polymer 3 to keep our technical stack up to date.
{{! /multiexcerpt}}


### Other Noteworthy Mentions

{{! multiexcerpt name='studio-updates-2019-07-bugfix'}}
- Workflow graph looks consistent between Studio and Web UI when using a fork node ([NXS-5292](https://jira.nuxeo.com/browse/NXS-5292)).
- Studio prevents you from using the same name for a content view and a page provider as it could lead to conflicts ([NXS-4590](https://jira.nuxeo.com/browse/NXS-4590)).
- Page providers that are named similarly as a document type are correctly handled when generating a search form ([NXS-4736](https://jira.nuxeo.com/browse/NXS-4736)).
{{! /multiexcerpt}}

{{{multiexcerpt 'studio-feedback' page='nuxeo-studio-release-notes'}}}
