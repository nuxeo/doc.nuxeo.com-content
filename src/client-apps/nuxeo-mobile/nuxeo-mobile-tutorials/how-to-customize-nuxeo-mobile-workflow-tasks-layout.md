---
title: 'HOWTO: Customize Nuxeo Mobile Workflow Tasks Layout'
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: This how-to explains how to customize Nuxeo Mobile workflows task layouts.
        level: Intermediate
        tool: JSON Extention
        topics: Nuxeo Mobile
labels:
    - nuxeo-mobile
    - yachour
    - howto
toc: true
tree_item_index: 100
---
{{! excerpt}}
Since the version 1.13.0 on iOS and 1.11.0 on Android, workflows defined in Nuxeo Studio can be processed by users from the mobile application.
{{! /excerpt}}

To enable the processing of tasks on mobile devices, the [tasks mobile layout]({{page page='workflow-task-layout'}}) need to be defined.

## Prerequisites

Before you start, please follow this [how-to]({{page version='' space='nxdoc' page='web-ui-workflow-tasks'}}) to create a complete workflow.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Mobile/mobile_workflows_WebUI_start
    name: mobile_WF_webui_layout.png
    1.13#screenshot#up_to_date
--}}
![mobile_workflows_WebUI_start](nx_asset://bf4f6004-b61e-4e48-9042-21451f163579 ?w=400)

## Define the Task Layout

The format of the layout is a JSON object with the list of task fields and properties to display.
For more information on the format of the layout, read the [Workflow Task Layout]({{page page='workflow-task-layout'}}) documentation.

On the Studio Designer side:
1. Go to **Resources** tab
1. Under **Workflow** section, go to `contractvalidation`
1. click on **CREATE**</br>
    A pop-up window appears, select an **Empty File** with the name of the related task and the JSON format.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Mobile/HOW_TO_workflows_studio_create_json
    name: HOW_TO_workflows_studio_create_json.png
    1.13#screenshot#up_to_date
--}}
![HOW_TO_workflows_studio_create_json](nx_asset://ae86da20-cd15-4327-b2b6-a89b4c081f48 ?w=400)


{{#> callout type='note' }}
The name of this file should match the filename of the `.html` task file.
{{/callout}}

Add the following content to this file to allow selecting the contract type in the task:

```json
{
  "name": "nuxeo-task879",
  "layout": [
    {
      "metadata": [
        {
          "label": "Type of contract",
          "field": "type",
          "type": "directory",
          "properties": {
            "multivalued": false,
            "required": true,
            "placeholder": "Select the contract type...",
            "directoryName": "type",
            "type":"select"
          }
        }
      ]
    }
  ]
}
```

Save and deploy your package.

## Test Your Configuration

Open your Nuxeo Mobile application and set your local URL.</br>
It can be found on IP tools according to your OS, ex: `http://172.16.32.75:8080`.

{{#> callout type='warning' }}
it will work only on Android as iOS will block any http connection except localhost. For iOS, there are third party tools such as https://serveo.net/ and https://ngrok.com/ to easily have a https server.
{{/callout}}

On your Nuxeo Platform instance:
1. Create a document type Contract
1. Start a workflow contractValidation
1. Assign the review to Administrator.

Once it's done, on your mobile application:
1. Log in as `Administrator`</br>
    On the first page you can see your pending tasks.
1. Go to your task on the contract document   and click on the overflow button > **Start Process**.

A task is assigned to the Administrator. When opening this task, it should look like this:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Mobile/HOW_TO_workflows_task_result
    name: HOW_TO_workflows_task_result.png
    1.13#screenshot#up_to_date
--}}
![HOW_TO_workflows_task_result](nx_asset://5c41d39e-45bd-4272-aa46-58113d4dd1f6 ?w=500)

## Task Layout Example

Here is an example of an exhaustive task layout.

```json
{
   "name": "nuxeo-task879",
   "layout": [
       {
           "metadata": [
               {
                   "label": "Text field",
                   "field": "contract_name",
                   "type": "text"
               },
               {
                   "label": "Text area",
                   "field": "contract_comment",
                   "type": "textarea"
               },
               {
                   "label": "Integer input",
                   "field": "contract_priority",
                   "type": "integer"
               },
               {
                   "label": "Double input",
                   "field": "contract_rating",
                   "type": "double"
               },
               {
                   "label": "Boolean (switch)",
                   "field": "contract_confidential",
                   "type": "boolean"
               },
               {
                   "label": "Html text",
                   "field": "type",
                   "type": "htmltext"
               },
               {
                   "label": "Date",
                   "field": "contract_expiration_date",
                   "type": "date",
                   "properties":{
                       "required":true
                   }
               },
               {
                   "label": "User picker",
                   "field": "contract_reviewers",
                   "type": "user",
                   "properties": {
                       "multivalued": true,
                       "required": true,
                       "placeholder": "Select reviewers",
                       "type": "suggest"
                   }
               },
               {
                   "label": "Group picker",
                   "field": "contract_reviewGroups",
                   "type": "group",
                   "properties": {
                       "multivalued": true,
                       "required": true,
                       "placeholder": "Select reviewers groups",
                       "type": "suggest"
                   }
               },
               {
                   "label": "User/Group picker",
                   "field": "contract_reviewUserGroups",
                   "type": "usergroup",
                   "properties": {
                       "multivalued": true,
                       "required": true,
                       "placeholder": "Select reviewers groups",
                       "type": "suggest"
                   }
               },
               {
                   "label": "Directory with selectable vocabulary",
                   "field": "contract_type",
                   "type": "directory",
                   "properties": {
                       "multivalued": false,
                       "required": true,
                       "placeholder": "Select the contract type...",
                       "directoryName": "type",
                       "type": "select"
                   }
               },
               {
                   "label": "Directory with search & suggestion",
                   "field": "contract_type",
                   "type": "directory",
                   "properties": {
                       "multivalued": false,
                       "type": "suggest",
                       "suggestionPlaceholder": "this is a suggestion",
                       "required": true,
                       "placeholder": "Select the contract type...",
                       "directoryName": "type"
                   }
               },
               {
                   "label": "Document suggestion (add 1 or more)",
                   "field": "contract_type",
                   "type": "directory",
                   "properties": {
                       "multivalued": true,
                       "type": "suggestAll",
                       "suggestionPlaceholder": "Add 1 or more documents",
                       "required": true,
                       "placeholder": "Add a document to the task"
                   }
               }
           ]
       }
   ]
}

```

For development purposes, you can directly edit the JSON files on your Nuxeo Server. The _task_ layout is retrieved each time you view a document.

<!--
## Limitations

To be completed
-->

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Mobile documentation]({{page page='nuxeo-mobile'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
