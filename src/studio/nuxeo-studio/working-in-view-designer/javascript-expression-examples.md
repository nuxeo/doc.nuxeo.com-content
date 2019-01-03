---
title: Javascript Expression Examples
review:
    comment: ''
    date: '2018-09-15'
    status: ok
labels:
    - howto-javascript-expressions
tree_item_index: 500
---

Javascript expressions are useful in various use cases:

1. To create filters that can be used either from Nuxeo Studio Designer or directly in your code using the [nuxeo-filter](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-filter) element, in the `expression` property.</br>
  They can be used to determine the suitable conditions to display an action, a menu from the left menu bar, any pages, and more globally, any element.

1. To implement specific business logic, you can use [Javascript expression]({{page page='automation-scripting'}}) in your custom automation chains and also in the Polymer section of your element.

1. To map parameters from a page provider NXQL query into the corresponding variables. In this context, Javascript variables need to be provided as a Javascript object, e.g. `{"key1": "value1", "key2": "value2"}`. For a detailed example using them, you may refer to [How to Display a Children Documents Listing]({{page version='' space='nxdoc' page='how-to-display-children-documents-listing'}}).

Here is a list of the main Javascript expressions:

<div class="table-scroll">

<table class="hover">

<tbody>

<tr><th colspan="1">

Criteria

</th><th colspan="1">

Javascript Expression

</th><th colspan="1">

Corresponding Content View Query Parameter

</th></tr><tr><td colspan="1">

Document title

</td><td colspan="1">

`document.title`

</td><td colspan="1">

#{currentDocument.dc.title}

</td></tr><tr><td colspan="1">

Document id

</td><td colspan="1">

`document.uuid`

</td><td colspan="1">

#{currentDocument.id}

</td></tr><tr><td colspan="1">

Document type

</td><td colspan="1">

`document.type`

</td><td colspan="1">

#{currentDocument.type}

</td></tr><tr><td colspan="1">

Document name

</td><td colspan="1">

`document.path.substr(document.path.lastIndexOf('/') + 1)`

</td><td colspan="1">

#{currentDocument.name}

</td></tr><tr><td colspan="1">

Document version

</td><td colspan="1">

`document.properties['uid:major_version']` <br />
`document.properties['uid:minor_version']`

</td><td colspan="1">

#{currentDocument.uid.major_version} <br />
#{currentDocument.uid.minor_version}

</td></tr><tr><td colspan="1">

Document property

</td><td colspan="1">

`document.properties["<prefix>:<property_name>"]`

</td><td colspan="1">

#{currentDocument.< prefix >.< property_name >}

</td></tr><tr><td colspan="1">

Document is a version (not a live document)

</td><td colspan="1">

`document.isVersion()`

</td><td colspan="1">

#{currentDocument.isVersion}

</td></tr><tr><td colspan="1">

Document has facet

</td><td colspan="1">

`document.facets.indexOf('facet')`

</td><td colspan="1">

#{currentDocument.hasFacet('facet')}

</td></tr><tr><td colspan="1">

User ID

</td><td colspan="1">

`user.id`

</td><td colspan="1">

#{currentUser.name}

</td></tr><tr><td colspan="1">

User email

</td><td colspan="1">

`user.email`

</td><td colspan="1">

#{currentUser.email}

</td></tr><tr><td colspan="1">

User has permission on `document`

</td><td colspan="1">

`user.hasPermission(document, '<permission>')`

</td><td colspan="1">

#{nxd:hasPermission(document, '< permission >')}

</td></tr><tr><td colspan="1">

Group membership

</td><td colspan="1">

`user.properties.groups.indexOf('< groupname >')`

</td><td colspan="1">

#{currentUser.isMemberOf('< groupname >')

</td></tr></tbody></table></div>

You can get more attributes from the Expression Editor available in Nuxeo Studio Modeler:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Javascript Expression Examples/Javascript Expression Document
    name: javascript_expressions_document.png
    studio_designer#screenshot#up_to_date
--}}
![Javascript Expression Document](nx_asset://dd577c29-14f4-429a-a9e6-016b0fe0f6dd ?w=450,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Javascript Expression Examples/Javascript Expression User
    name: javascript_expressions_user.png
    studio_designer#screenshot#up_to_date
--}}
![Javascript Expression User](nx_asset://b48eed3f-7868-4c9f-9c54-357fb4f11bab ?w=450,border=true)

{{#> callout type='tip' heading='More options'}}
You can also use [Special NXQL Properties]({{page page='nxql' space='nxdoc' anchor='special-nxql-properties'}}) to build your expressions, and the [Functions object]({{page page='use-of-mvel-in-automation-chains' space='nxdoc' anchor='functions'}}).
{{/callout}}

From this list, you can compose some conditions:

<div class="table-scroll">

<table class="hover">

<tbody>

<tr><th colspan="1">

Condition

</th><th colspan="1">

Javascript Expression

</th></tr><tr><td colspan="1">

Document is a picture and the user has right permission

</td><td colspan="1">

`doc.type !== 'Picture' && user.hasPermission(doc, 'Write')`

</td></tr><tr><td colspan="1">

Document doesn't have the "Retention" facet or its major version is under 1.0

</td><td colspan="1">

`document.facets.indexOf("Retention") < 0 || doc.properties['uid:major_version'] <= 1`

</td></tr><tr><td colspan="1">

User doesn't belong to the `external` group

</td><td colspan="1">

`user.properties.groups.indexOf('external') < 0`

</td></tr></tbody></table></div>
