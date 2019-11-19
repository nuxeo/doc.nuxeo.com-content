---
title: 'HOWTO: Manage Relations on a Document'
review:
    comment: ''
    date: '2019-09-18'
    status: ok
details:
    howto:
        excerpt: 'Learn how to display relations on a document.'
        level: Intermediate
        tool: Studio
        topics: Automation
labels:
    - presales-wiki
    - howto
toc: true
tree_item_index: 90
---

Nuxeo REST API provides 3 methods to query, create and delete relationships between documents, the description of each of these operations can be found in [Nuxeo Platform Explorer](http://explorer.nuxeo.com/nuxeo/site/distribution/current/listOperations).

On this page, we are going to create an element to retrieve relations on a document and to add/delete them.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Manage Relations on a Document/relations-final-result.png
    name: relations-final-result.png
    1.1.3#screenshot#up_to_date
--}}
![relations-final-result.png](nx_asset://cbda708f-2056-4045-a46d-e5174675470c ?w=650,border=true)

## Create an Automation Scripting

The `Document.GetLinkedDocuments` operation provides the relationships of a document based on the address and type of relationship. However, we need to recover all the relationships in the document in order to show them.

That's why we're going to create an Automation Scripting called `getAllRelations` from the **Configuration** > **Automation** > **Automation Scripting** menu in Studio Modeler.

{{#> callout type='info' }}
`Document.GetLinkedDocuments`</br>
Get the relations for the input document. The ‘outgoing’ parameter can be used to specify whether outgoing or incoming relations should be returned. Returns a document list.
{{/callout}}

1. On Modeler, go to **Automation Scripting**.
1. Click on **New** and name it `getAllRelations`.
1. Copy the [content from our Nuxeo cookbook](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/related-documents/modeler/getAllRelations.js).
1. Save your changes.

## Create Element to Retrieve Relation

Let's create an element `nuxeo-se-document-relations` that uses the `javascript.getAllRelations` operation that we created above to retrieve all the document's relationships.

This element refers to two auxiliary elements that are responsible for the [creation](#add-relation) and [deletion](#delete-relation) of new relationships, we will create them right after.

1. On Designer, go to **Resources**.
1. Create a new folder under **UI** and name it **Relations**.</br>
1. In it, create a new element and name it `nuxeo-se-document-relations`.
1. Choose the type **Sample layout template**.
1. Copy the [content from our cookbook](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/related-documents/designer/nuxeo-se-document-relations.html).
1. Save your changes.

### Add Relation

The web element `nuxeo-se-add-relation-dialog` shows a popup to add a new relationship specifying the direction and the type of relation. To create the relationship use the operation `Document.AddRelation`. At the end of the creation of the relationship, we will launch a custom event called `relation-added` to notify that the relationship has been created.

{{#> callout type='info' }}
The `Document.AddRelation` operation uses negative logic in the outgoing parameter, which makes it more difficult to follow the logic.
{{/callout}}

1. In your **Relations** folder, create a new element.
1. Name it `nuxeo-se-add-relation-dialog`.
1. Choose the type **Sample layout template**.
1. Copy the [content from our cookbook](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/related-documents/designer/nuxeo-se-add-relation-dialog.html).
1. Save your changes.

### Delete Relation

Finally, we need to create a web element in charge of deleting relationships, `nuxeo-se-remove-relation-button`. For the deletion, we will use the operation `Relations.DeleteRelation`. At the end of the relationship deletion, we will launch a custom event called relation-removed to notify that the relationship has been removed.

1. In your **Relations** folder, create a new element.
1. Name it `nuxeo-se-remove-relation-button`.
1. Choose the type **Sample layout template**.
1. Copy the [content from our cookbook](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/related-documents/designer/nuxeo-se-remove-relation-button.html).
1. Save your changes.

## Use the Element

Now that you have your element you need to add it to a document type. You can add it to a custom document type or override an existing one. Here we'll add it to the File document type.

{{#> callout type='info' }}
The types of relationships are defined in the **predicate** and **inverse_predicates** vocabularies. The definition of both vocabularies can be consulted in the Web UI **Administration** > **Vocabularies** menu.
{{/callout}}

Here is our File document type view layout final result:
```
<!--
(C) Copyright 2015 Nuxeo SA (http://nuxeo.com/) and others.

Licensed under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an 'AS IS' BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<!--
`nuxeo-file-view-layout`
@group Nuxeo UI
@element nuxeo-file-view-layout
-->
<link rel="import" href="../../elements/nuxeo-relations/nuxeo-se-document-relations.html">

<dom-module id="nuxeo-file-view-layout">

  <template>
    <nuxeo-document-viewer role="widget" document="[[document]]"></nuxeo-document-viewer>
    <nuxeo-document-attachments role="widget" document="[[document]]"></nuxeo-document-attachments>

    <nuxeo-se-document-relations document="[[document]]"></nuxeo-se-document-relations>

  </template>

  <script>
  Polymer({
    is: 'nuxeo-file-view-layout',
    behaviors: [Nuxeo.LayoutBehavior],
    properties: {
      /**
         * @doctype File
         */
      document: Object
    }
  });
  </script>

</dom-module>
```

The result is a list with the related documents, which include the direction of the relationship (incoming/outgoing) and the type of relationship (Based on, Reference ...). We can eliminate existing relationships or add a new one. It should look like this:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Manage Relations on a Document/relations-final-result.png
    name: relations-final-result.png
    1.1.3#screenshot#up_to_date
--}}
![relations-final-result.png](nx_asset://cbda708f-2056-4045-a46d-e5174675470c ?w=650,border=true)

**To add a new relation**, click on the ![relations-add-relation-icon.png](nx_asset://d623074e-6f67-4ff7-833c-d9b216764c26 ?w=20) icon, a popup window appears to let you define your relation:
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Manage Relations on a Document/relations-add-relation.png
    name: relations-add-relation.png
    1.1.3#popup#up_to_date
--}}
![relations-add-relation.png](nx_asset://51dcb178-f2dc-42d2-b475-b84134e4f39d ?w=350,border=true)

**To remove a relation**, click on the ![relations-remove-relation-icon.png](nx_asset://ad56dacb-2748-487e-bc0b-7eb3da3920f3 ?w=20) icon on the relation that you want to delete.
