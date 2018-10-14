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

WORK IN PROGRESS

Since the version 1.13.0 on iOS and 1.11.0 on Android, workflows defined from studio can be processed by users from the mobile application. 

To enable the processing of tasks from mobile, there is an additional step to this configuration, to define the layout of these tasks on mobile devices : 

## Prerequesites

A task layout is defined Studio/Designer. For this how to, we assume that the workflow described through this tutorial [webui workflow tasks tutorial]({{page space='USERDOC' page='workflows'}}) is created.

TODO : Add image of task layout

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
In the in the **Resources** tab of the Designer, tab, click on the workflow and click on “create” to add an empty file with the name of the related task and the json format :

TODO : screenshot 2

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
Open Nuxeo Mobile app and set your local url. Note : to get this url you can use this command :

```shell
ifconfig | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p'
``` 

and append the port (ex : 172.16.32.75:8080)

Login as administrator ; Assuming you created a document of type “contract” (again, the previous tutorial should be completed), go to this document on mobile and click on the overflow button > start process.

A task is affected to the Administrator user. Display this task layout : it should look likes this :

TODO : screenshot 3 et 4

## Exhaustive task layout example

## Properties list 

Properties can be added depending on the task type :


### For every tasks type : 
```json
“readonly”:[true/false]
```

Used to display informations without letting the user change its value.

### For any of the following tasks : [ user, group, usergroup, directory, document] 

```json
“required” : [true, false] 
```

the “required” properties makes the task label appended with an asterisk (*) and requires this field to be filled for the task to be completed.

```json
“multivalued” : [true, false] 
```

If set to true, the user can choose more than one document, user or value

```json
“selectedTitle”: string
```

Allows to define the selection screen title

```json
“Type” : [suggest, suggestAll, select]
```
- For a simple selection (without search capabilities) the “select” type will make this component a selection switch.
- suggestAll : ?
- suggest :  ?

```json
“suggestionPlaceholder”: string
```
Enable to customize the placeholder visible in the search bar


### For type “directory” :
directoryName
Type (suggest, suggestAll)


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
                   "field": "type",
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
                   "field": "Type",
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
                   "field": "Type",
                   "type": "directory",
                   "properties": {
                       "multivalued": false,
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


This gives us the following result in the app:

TODO : add screenshot

For development purposes, you can directly edit the JSON files on your Nuxeo Server. The "task" layout is retrieved each time you view a document.


## Limitations

To be completed

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Mobile documentation]({{page page='nuxeo-mobile'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
