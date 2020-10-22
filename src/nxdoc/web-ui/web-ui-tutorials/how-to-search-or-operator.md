---
title: 'HOWTO: Create Searches With OR Operator'
description: 'Learn how to implement an `OR` operator within a custom search, using page provider predicates and Elasticsearch hints.'
review:
    comment: ''
    date: '2020-10-21'
    status: ok
toc: true
tree_item_index: 650
---

{{! excerpt}}
This tutorial explains how to implement an `OR` operator within a custom search, using page provider predicates and Elasticsearch hints.
{{! /excerpt}}

The goal of this page is to find all document in which the selected user is either the creator or one of the contributors.

## Prerequisites

You need a document type with at least two properties where you need to check if the value exists in one of the fields.

## Create a Page Provider

1. Create a page provider in **Nuxeo Studio Modeler**.
1. In this page provider, create a new predicate:
  1. In the **field** property, add any value, like `dc:creator`.
  1. Choose any suitable **operator** (`=` in this tutorial).
  1. In **hint index**, put the list of the fields on which the `OR` operator should be executed, separated by a comma.</br>
      In our case, it should be `dc:creator,dc:contributors`
  1. Leave the **hint analyzer** field empty because those fields are not analyzed at index time.
  1. Choose the relevant **hint operator**. For example, you can use the `match` operator, or the `simple_query_string` if you need to use wildcard characters for your searches.

  {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create Searches with OR operator/predicate_editor.png
      name: predicate_editor.png
      studio_modeler#screenshot#up_to_date
  --}}
  ![predicate_editor.png](nx_asset://64e2a367-ee96-4ae2-9f52-be4dc0f3c5b3 ?w=450,border=true)

## Create a Search Form and Result Layout

1. Click on the **Configure layouts in Designer** shortcut.
1. Generate the form and result layouts by clicking on the **Configure** button.
1. Bind a **Drawer Item Search** to the search elements.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create Searches with OR operator/studio_config.png
    name: studio_config.png
    studio_designer#screenshot#up_to_date
--}}
![studio_config.png](nx_asset://a2c42e88-cc9c-48f1-bc19-655391ccbc93 ?w=650,border=true)

## Hot Reload and Results

Here are the documents created by `User1`:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create Searches with OR operator/doc_user1.png
    name: doc_user1.png
    1.1.3#screenshot#up_to_date
--}}
![doc_user1.png](nx_asset://0a8558fb-792f-4ffd-b825-cdc270c261d1 ?w=650,border=true)

Here are the documents created by `User2`. You can note that some of them have `User1` as last contributor:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create Searches with OR operator/doc_user2.png
    name: doc_user2.png
    1.1.3#screenshot#up_to_date
--}}
![doc_user2.png](nx_asset://22bf036b-d656-4c41-9242-8f409fc1003e ?w=650,border=true)

If you execute the search with `User1`, you find all the documents from the first screenshot, and the 2 documents edited in the second screenshot:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Create Searches with OR operator/search_user1.png
    name: search_user1.png
    1.1.3#screenshot#up_to_date
--}}
![search_user1.png](nx_asset://87689532-69bb-425d-b11f-141c6ed6ec16 ?w=650,border=true)
