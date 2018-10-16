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

---

Since the version 1.13.0 on iOS and 1.11.0 on Android, workflows defined in studio can be processed by users from the mobile application. 

To enable the processing of tasks from mobile, there is an additional step to this configuration, to define the layout of these tasks on mobile devices : 

## Prerequesites

A task layout is defined Studio/Designer. For this how to, we assume that the workflow described through this tutorial [webui workflow tasks tutorial]({{page space='STUDIO' page='web-ui-workflow-tasks'}}) is created :

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Mobile/mobile_workflows_WebUI_start
    name: mobile_WF_webui_layout.png
    1.13#screenshot#up_to_date
--}}
![mobile_workflows_WebUI_start](nx_asset://bf4f6004-b61e-4e48-9042-21451f163579 ?w=400)

## Layout Format

The format of the layout is simply a JSON object with the list of task fields to display and properties.

The default layout looks like:

```json
{
  "name": "task id",
  "layout": [
    {
      "metadata": [
        {
          "label": "label name",
          "field": "studio configured field",
          "type": "cf available fields...",
          "properties": {
            "property1": "value",
            "etc."
          }
        }
      ]
    }
  ]
}
```
The list of types is detailed below with an example. 
 

## Steps

### Add a JSON resource
In the **Resources** tab of the Designer, tab, click on the workflow and click on “create” to add an empty file with the name of the related task and the json format :

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Mobile/HOW_TO_workflows_studio_create_json
    name: HOW_TO_workflows_studio_create_json.png
    1.13#screenshot#up_to_date
--}}
![HOW_TO_workflows_studio_create_json](nx_asset://ae86da20-cd15-4327-b2b6-a89b4c081f48 ?w=400)



Note that the name of this file should match the task .html file name.

Add the following content to this file to enable the task to display the directory selector : 
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

Save then deploy the package.

### Test your configuration on mobile
Open Nuxeo Mobile app and set your local url. (can be found on ip tools according to your OS. ex : 172.16.32.75:8080)

Login as administrator ; Assuming you created a document of type “contract” (again, the previous tutorial should be completed), go to this document on mobile and click on the overflow button > start process.

A task is affected to the Administrator user. When opening this task, it should look likes this :

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/CLIENT-APPS/Mobile/HOW_TO_workflows_task_result
    name: HOW_TO_workflows_task_result.png
    1.13#screenshot#up_to_date
--}}
![HOW_TO_workflows_task_result](nx_asset://5c41d39e-45bd-4272-aa46-58113d4dd1f6 ?w=500)

## Properties list 

Properties can be added depending on the task type :

#### For every tasks type
```json
“readonly”:[true/false]
```
Used to display informations without letting the user change its value.

```json
“required” : [true, false] 
```
the “required” properties makes the task label appended with an asterisk (*) and requires this field to be filled for the task to be completed.

#### For any of tasks user, group, usergroup, directory, document

```json
“multivalued” : [true, false] 
```
If set to true, the user can choose more than one document, user or value


```json
“selectedTitle”: string
```
Allows to define the selection screen title


```json
“type” : [suggest, suggestAll, select]
```
- For a simple selection (without search capabilities) the “select” type will make this component a selection switch.
- suggest :  Alllows to search a user, group, etc.
- suggestAll : Same as suggest but initially displays the whole set of entries.

```json
“suggestionPlaceholder”: string
```
Enable to customize the placeholder visible in the search bar


#### For directory type
```json
"directoryName" : string
```

```json
“type” : [suggest, suggestAll]
```


## Exhaustive task layout example

The following json :

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
                       "type": "suggestAll"
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
                       "type": "suggestAll"
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
                       "type": "suggestAll"
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



For development purposes, you can directly edit the JSON files on your Nuxeo Server. The "task" layout is retrieved each time you view a document.


## Limitations

To be completed

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Mobile documentation]({{page page='nuxeo-mobile'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
