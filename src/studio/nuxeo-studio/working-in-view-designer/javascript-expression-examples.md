---
title: Javascript Expression Examples
review:
    comment: ''
    date: '2018-09-15'
    status: ok
labels:
    - howto-javascript-expressions
tree_item_index: 400
---

Javascript expressions are useful in two main use cases:
1. If you need to create filter. Filters can be used either from Nuxeo Studio Designer or directly in your code using the [nuxeo-filter](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-filter) element, in the `expression` property. They can be used to determine the suitable conditions to display an action, a menu from the left menu bar, any pages, and more globally, any element.
2. If you need to implement specific business logic You can use [Javascript expression]({{page page='automation-scripting'}}) in your custom automation chains and also in the Polymer section of you element



Here is a list of the main Javascript expressions

<div class="table-scroll">

<table class="hover">

<tbody>

<tr><th colspan="1">

Criteria

</th><th colspan="1">

Javascript Expression

</th></tr><tr><td colspan="1">

Document title

</td><td colspan="1">

`document.title`

</td></tr><tr><td colspan="1">

Document type

</td><td colspan="1">

`document.type`

</td></tr><tr><td colspan="1">

Document name

</td><td colspan="1">

`document.path.substr(document.path.lastIndexOf('/') + 1)`

</td></tr><tr><td colspan="1">

Document version

</td><td colspan="1">

`document.properties['uid:major_version']`

</td></tr><tr><td colspan="1">

Document property

</td><td colspan="1">

`document.properties["<prefix>:<property_name>"]`

</td></tr><tr><td colspan="1">

Document is a version (not a live document)

</td><td colspan="1">

`document.isVersion()`

</td></tr><tr><td colspan="1">

Document facet

</td><td colspan="1">

`document.facets.indexOf(facet)`

</td></tr><tr><td colspan="1">

User ID

</td><td colspan="1">

`user.id`

</td></tr><tr><td colspan="1">

User email

</td><td colspan="1">

`user.email`

</td></tr><tr><td colspan="1">

User has permission on `document`

</td><td colspan="1">

`user.hasPermission(document, '<permission>')`

</td></tr><tr><td colspan="1">

Group membership

</td><td colspan="1">

`user.properties.groups.indexOf('<groupname>')`

</td></tr></tbody></table></div>

You can get more attributes from the Expression Editor available in Nuxeo Studio Modeler

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Javascript Expression Examples/Javascript Expression Document
    name: javascript_expressions_document.png
    studio_designer#screenshot#up_to_date
--}}
![Javascript Expression Document](nx_asset://dd577c29-14f4-429a-a9e6-016b0fe0f6dd ?w=650,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Javascript Expression Examples/Javascript Expression User
    name: javascript_expressions_user.png
    studio_designer#screenshot#up_to_date
--}}
![Javascript Expression User](nx_asset://b48eed3f-7868-4c9f-9c54-357fb4f11bab ?w=650,border=true)



{{#> callout type='tip' heading='More options'}}
You can also use [Special NXQL Properties]({{page page='nxql' space='nxdoc' anchor='special-nxql-properties'}}) to build your expressions, and the  [Functions object]({{page page='use-of-mvel-in-automation-chains' space='nxdoc' anchor='functions'}})
{{/callout}}

From this list, you can compose some conditions

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
