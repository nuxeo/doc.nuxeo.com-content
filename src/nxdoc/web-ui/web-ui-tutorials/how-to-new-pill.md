---
title: "HOWTO: Insert a New Pill"
review:
    comment: ''
    date: '2017-01-16'
    status: ok
toc: true
details:
     howto:
         excerpt: Learn how to customize your workflow tasks
         level: Advanced
         tool: code
         topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - workflow
    - task
tree_item_index: 1400
---
{{#> callout type='note' }}
The View Designer is not available for everyone yet, but if you can't wait any longer to try it, do not hesitate to contact your sales representative to enable it on your project.
{{/callout}}

In this tutorial you will learn how to add a new pill to your custom document type. We'll be using a custom element linked to the Contract document type.

## Prerequisites
- A [Contract document type]({{page version='810' space='nxdoc' page='getting-started-with-nuxeo-studio'}}#step-3-create-a-contract-document-type) created in Nuxeo Studio
- Web UI addon installed on your instance
- View Designer enabled on your Studio project

## Create an Element
Go to the View Designer on the **Resources** tab.
1. Create a folder called `elements`.
1. In it, create an element called `contract-pill`.
1. Edit the element by adding the following line:
```
```
1. Save your changes

## Create a Document page
Go to the View Designer on the **UI** tab.
1. Click on **Document** and then on the Create button ![]({{file space='nxdoc' version='' page='nuxeo-web-ui' name='create_button.png'}}).
1. Name it ` `.
1. On the **Element to bind** field, choose your element `contract-pill` in the drop-down list.
1.



1. Save your changes.  

You can now deploy your project on your instance and see what it looks like!
