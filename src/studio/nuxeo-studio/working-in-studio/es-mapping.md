---
title: Elasticsearch Mapping
review:
    comment: 'Page creation describing the Elasticsearch Mapping feature in Studio. Only available for Nuxeo users.'
    date: '2021-10-15'
    status: ok
toc: true
hidden: true
private: true
---

{{#> callout type='info' heading='Availability'}}
This feature is available for Nuxeo users and target platforms Nuxeo Platform LTS 2019 and above.
{{/callout}}

Elasticsearch Mapping is a feature that helps you configure the search experience, it provides the user a JSON configuration file that can be added to the Elasticsearch configuration.

## Elasticsearch Mapping

As described in the [configuring the Elasticsearch mapping documentation page]({{page space='nxdoc' page='configuring-the-elasticsearch-mapping'}}), it is possible to change the Elasticsearch configuration to redefine the Elasticsearch mapping. The Elasticsearch Mapping feature allows the user to easily define a custom mapping for any simple and non-multivalued field and generate the appropriate JSON configuration file. This JSON content can then be added to the Elasticsearch configuration as described [in the changing Elasticsearch mapping documentation page]({{page space='nxdoc' page='elasticsearch-setup'}}#changingelasticsearchmapping).

There are two kinds of mapping available per field:
- auto-mapping
- manual entry

### Define the Elasticsearch Mapping

It is possible to define the Elasticsearch mapping for a field either from the page **Search**&nbsp;> **Elasticsearch Mapping** or directly from the Page Provider editor in the **Predicates** section (only available if the checkbox 'Use Elasticsearch index' is selected).

#### Define Mapping from Page Provider editor

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Create From PP
    name: Create From PP.png
    studio_modeler#screenshot#up_to_date
--}}
![Create From PP](nx_asset://5aef8639-628d-4b3a-931c-9d81139a9ec8)

If there is already an existing mapping for the selected field as a predicate, a link is displayed to access the existing definition in the **Elasticsearch Mapping** editor.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Existing Mapping
    name: ExistingMapping.png
    studio_modeler#screenshot#up_to_date
--}}
![Existing Mapping](nx_asset://2d52c010-8866-4a3f-934c-ed3b2f38a1b6)

If there is not an existing mapping, a button to directly create a new configuration is displayed next to the predicate.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/No Existing Mapping
    name: No Existing Mapping.png
    studio_modeler#screenshot#up_to_date
--}}
![No Existing Mapping](nx_asset://384be8a6-cf91-4cd4-b941-b598da8d8514)

A dialog opens to define the name of the mapping and the selected field is displayed as a reminder.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Create New Mapping
    name: Create New Mapping.png
    studio_modeler#screenshot#up_to_date
--}}
![Create New Mapping](nx_asset://c7ff38e3-be04-43a8-9c16-24dc79945b42)

#### Create a New Mapping

A new Elasticsearch Mapping can be created directly from the page listing the existing mappings in **Search**&nbsp;>**Elasticsearch Mapping**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Create Search Mapping
    name: Create Search New Mapping.png
    studio_modeler#screenshot#up_to_date
--}}
![Create Search Mapping](nx_asset://3dd3a5d4-225b-4ded-9b9c-4bdd9b8c3051)

### Auto-mapping

Based on the type of the selected field for the mapping, a list of available mapping types is displayed with their properties.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Creating Automapping
    name: Create Automapping.png
    studio_modeler#screenshot#up_to_date
--}}
![Creating Automapping](nx_asset://08baf3b0-cbea-422c-a53a-a7ac75cb6713)

Available properties:
- **Fulltext**: include/exclude the field from the [Full-Text search]({{page space='nxdoc' page='configuring-the-elasticsearch-mapping'}}#includeexcluding-a-field-from-the-full-text-search). The property is only available for fields of type String.
- **ILike**: make the [case insensitive search]({{page space='nxdoc' page='configuring-the-elasticsearch-mapping'}}#making-ilike-work-case-insensitive-search) using ILIKE operator works on the field. The property is only available for fields of type String.
- **Like**: enable the use of the [LIKE operator]({{page space='nxdoc' page='configuring-the-elasticsearch-mapping'}}#making-like-work) on the field. The property is only available for fields of type String.
    - **Fielddata**: when the **Like** property is selected, it is possible to enable the Fielddata property to make the field content available for aggregations.
- **Non Searchable**: select for disabling the searchability of the field. The property is available for any fields.

### Manual Entry

It is also possible to define manually the configuration of the mapping of a field. The JSON editor only allows to define the JSON that will be append to the selected field and not any Elasticsearch configuration.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Create Manual Mapping
    name: CreateManualMapping.png
    studio_modeler#screenshot#up_to_date
--}}
![Create Manual Mapping](nx_asset://bd635670-d8d8-48c1-89fc-2e57410a4b4c)
