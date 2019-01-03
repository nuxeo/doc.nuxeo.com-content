---
title: Schemas
review:
    comment: ''
    date: ''
    status: ok
labels:
    - schema
toc: true
confluence:
    ajs-parent-page-id: '12911801'
    ajs-parent-page-title: Content Model
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Schemas
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Schemas'
    page_id: '12911977'
    shortlink: aQXF
    shortlink_source: 'https://doc.nuxeo.com/x/aQXF'
    source_link: /display/Studio/Schemas
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-03-02 08:46'
        message: pdate content with contraints (Studio 31
        version: '22'
    -
        author: Solen Guitter
        date: '2016-02-09 17:34'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2015-10-29 15:36'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-01-26 15:53'
        message: link update
        version: '19'
    -
        author: Manon Lumeau
        date: '2014-07-23 16:31'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-07-02 15:49'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-07-02 15:42'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-07-02 12:28'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-07-02 11:52'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-07-02 11:34'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-07-01 12:42'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-07-01 12:41'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-07-01 12:22'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-07-01 12:21'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-07-04 11:16'
        message: Fixed typos and resized screenshots
        version: '8'
    -
        author: Benjamin Jalon
        date: '2013-01-14 11:48'
        message: ''
        version: '7'
    -
        author: Benjamin Jalon
        date: '2013-01-14 11:46'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:35'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:32'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2012-12-31 02:20'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2012-12-31 01:55'
        message: ''
        version: '2'
    -
        author: Benjamin Jalon
        date: '2012-12-04 08:41'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Nuxeo University'}}
Watch the [related course]((https://university.nuxeo.com/learn/public/course/view/elearning/12/content-model-design-in-nuxeo-studio) on Nuxeo University
![]({{file version='' space='nxdoc' page='university' name='university-content-model.png'}} ?w=450,border=true)
{{/callout}}
## Concept

A schema in Nuxeo Studio is dedicated to define a list of metadata. If you are not comfortable with this typical ECM notion, please read more about documents, properties and schemas in the [Essential Nuxeo Platform Terminology]({{page space='nxdoc' page='essential-nuxeo-platform-terminology'}}).

Note that schemas can be defined directly from the **Documents** menu. One would configure a schema here when sharing of the definition among multiple document types is known from the beginning.

## Creating a Schema

To create a schema, click on **New**.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Schemas/Create schema
    name: create_doc_schema.png
    studio_modeler#popup#up_to_date
--}}
![Create schema](nx_asset://3224beb7-68b7-4428-8c1c-ae8abea90b04 ?w=350,border=true)

- **Feature ID**: The id of the schema. Will be used as the technical id of the schema. It should not contain spaces or special characters.
- **Schema Prefix**: Prefix of the schema. Prefix is used when referencing a document property (ex: `dc:title` for the Title property in the Dublin Core schema), for instance in an [NXQL]({{page space='nxdoc' page='nxql'}}) query.

{{#> callout type='note' heading='Schema names and prefixes'}}
  You should carefully choose your schema names and prefixes. There will be many references to them in your project (layouts, automation, NXQL queries). Nuxeo Studio doesn't yet handle completely schema refactoring. Furthermore, once you deployed, if you change a schema name or prefix, you will have to operate a data migration.
  We suggest you to use name like **my_schema_name** (lowercase, word separated by an underscore) for the feature id and something shorter for the prefix like **msn**. See the [Naming Conventions]({{page page='naming-conventions'}}) page for more tips on ids and names recommendation in Nuxeo Studio.  
{{/callout}}

**Advanced configuration**

- **Mode:**

    - **Default**: The schema is editable in Nuxeo Studio from scratch, with Studio capabilities
    - **Initialize**: The schema is editable in Nuxeo Studio with Studio capabilities, and is pre-initialized from an external resource (see the [Resources]({{page page='resources'}}) section)
    - **Import**: The schema is not editable in Nuxeo Studio, it is initialized from an external resource (see the [Resources]({{page page='resources'}}) section) and is deployed with your Nuxeo plugin
    - **Reference**: The schema is not editable in Nuxeo Studio, it is initialized from an external resource (see the [Resources]({{page page='resources'}}) section) and is not deployed with Nuxeo plugin. This is useful if the schema is deployed from another Nuxeo plugin but you need to refer it in your project.
- **Allow nested complex types:** By default, you can only choose one level of Complex type. If you select this parameter you will have the possibility to have a Complex type at each level of your schema. Make sure that this is useful for your application before choosing it.

## Editing a Schema

### Nuxeo Platform LTS 2015 and Later

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Schemas/Custom Doc Schema
    name: custom_doc_schema.png
    studio_modeler#screenshot#up_to_date
--}}
![Custom Doc Schema](nx_asset://5a6b549f-f0ce-40f5-8793-ee7337c0f38a ?w=650,border=true)

1.  Click on the **Add field** button.
2.  Fill in the field properties:
    - **Field Name**: The name of the field.
        {{#> callout type='note' }}
        You should carefully choose the field/property names, as changing them after going live requires a data migration. Furthermore, Nuxeo Studio doesn't handle property refactoring completely yet.
        {{/callout}}
    - **Type**: The type of the field. Possible types are:
        - **String**: A string of characters
        - **Boolean**: True or false field type
        - **Integer**: An integer number
        - **Floating point**: A fractional number
        - **Date**: A date and time value
        - **Blob**: The property will be a binary
        - **Complex**: A complex type will let you define a complex field like an address storing street, zip code, etc... for instance.
        - **Directory**: The values for this field will be taken from a directory.
        - **User/Group**: The field values will be users and / or groups.
        - **Document**: The field value will the be id of a document.
    - **Multi-valued**: Check this box if you want the property to be a list (a list of blobs, a list of booleans, a list of dates, ...).
    - **Default Value**: Sets a default value on the property at document creation time.
3.  Click on the **Edit** button to configure validation rules directly from the schema.
    This prevents you from setting them up later from layout definition screens or automation chains for instance, possibly several times. Setting up validation rules on the schema assures you consistency.
    ![]({{file name='custom_doc_schema_validation_rules.png'}} ?w=500,border=true)
    Depending on the type of the field, you can have different constraints available.
    - **Mandatory**: This field will be be required to create or update the document.
    - **Text format** : Indicate if the value for this field should respect a pattern. You can select a predefined pattern in the drop down list (not empty, email address pattern, etc.).
    - **Text length**: Indicate the minimum and maximum numbers of characters the value must have for this field.
    - **Numeric range**: Indicate the minimum and maximum numeric value for this field.To know more about validation rules, take a look at the page [Field Constraints and Validation]({{page space='nxdoc' page='field-constraints-and-validation'}}).
4.  Click on **Schema** to go back to the schema definition.
    ![]({{file name='back_to_schema.png'}} ?w=450,border=true)
5.  Add as many fields as needed.
6.  Save.

### Nuxeo Platform 6.0 and Older

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Schemas/Custom Doc Schema 6.0
    name: custom_doc_schema_6.0.png
    studio_modeler#screenshot#up_to_date
--}}
![Custom Doc Schema 6.0 ](nx_asset://f222e360-bb5b-4c36-9b40-8216857fa723 ?w=650,border=true)

1.  Click on the **Add field** button.
2.  Fill in the field properties:
    - **Field Name**: The name of the field.

        {{#> callout type='note' }}
        You should carefully choose the field/property names, as changing them after going live requires a data migration. Furthermore, Nuxeo Studio doesn't handle property refactoring completely yet.
        {{/callout}}
    - **Type**: The type of the field. Possible types are:
        - **String**: A string of characters
        - **Boolean**: True or false field type
        - **Integer**: An integer number
        - **Floating point**: A fractional number
        - **Date**: A date and time value
        - **Blob**: The property will be a binary
        - **Complex**: A complex type will let you define a complex field like an address storing street, zip code, etc... for instance.
    - **Multi-valued**: Check this box if you want the property to be a list (a list of blobs, a list of booleans, a list of dates, ...).
    - **Default Value**: Sets a default value on the property at document creation time.
3.  Add as many fields as needed.
4.  Save.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Studio Documentation'}}

- [Documents]({{page page='documents'}})
- [Resources]({{page page='resources'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Add Complex Fields on Your Document Type]({{page space='nxdoc' page='how-to-add-complex-fields-on-your-document-type'}})
- [How to Define a Document Type]({{page space='nxdoc' page='how-to-define-a-document-type'}})

{{/panel}}</div></div>
