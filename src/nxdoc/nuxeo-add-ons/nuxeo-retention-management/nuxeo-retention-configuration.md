---
title: Configuration
description: Learn how to configure the Nuxeo Retention addon.
review:
    comment: ''
    date: '2020-05-22'
    status: 'ok'
labels:
    - jaubenque
    - retention-management
toc: true
tree_item_index: 400
---

This section explains  how to tailor the Nuxeo Retention addon to fit custom needs.

## Add New Retention End Actions

By default, there are two retention end actions:

- `Document.Trash`
- `Document.Delete`

To add a custom end action, a new entry in the `RetentionEnd` vocabulary must be created.

The vocabulary entry ID corresponds to the automation chain or automation scripting you have created in Nuxeo Studio Modeler. 

{{#> callout type='note' heading='Automate vocabulary entry creation'}}
It is not possible to automate the vocabulary entry creation from automation chain or automation scripting as the vocabulary is structured to be internationalized.
{{/callout}}

## Add New Retention Events

As for the retention end actions, retention events are also referenced in a vocabulary called `RetentionEvents`. Custom events will be displayed in event-based retention rules.

## Retention Automation Operations

If you need to implement custom logic with the retention addon, a set of automation operations are available:

- Apply Legal Hold
- Attach Retention Rule
- Fire Retention Event
- Remove Legal Hold
- Set as Record and Retain Until

The operation definition is available in the Automation documentation (Use the **Nuxeo Dev Tool Extension** with the "Automation Documentation" quick link).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Retention Management/Configuration/retention-automation-operation.png
    name: retention-automation-operation.png
    addins#screenshot#up_to_date
--}}
![retention-automation-operation.png](nx_asset://6c7c4d1a-5383-4dc7-a7cf-79cd177a3c24 ?w=350,border=true)

To use it in Nuxeo Studio:

- Click on the automation operation
- Click on the "JSON definition" link
- Copy paste the JSON code into **Nuxeo Studio Modeler > SETTINGS > Registries > Automation operations**

## Create Custom Retention Rules

You can automate the retention rules creations in Studio. Retention rules are standard Nuxeo documents, of type `RetentionRule`. It can therefore be reused and customized. 

Here is an example to create a retention rule with automation scripting:

```
var hr_contracts_properties = {
        "dc:title": "HRE-5000 - Employment Contracts",
        "dc:description": "Retention Rule for employee employment contracts",
        "retention_def:durationDays": 0,
        "retention_def:beginActions": [],
        "retention_def:durationMillis": 0,
        "retention_def:durationMonths": 0,
        "retention_def:startingPointPolicy": "event_based",
        "retention_def:startingPointEvent": "Retention.EmployeeDeparture",
        "retention_def:startingPointExpression": "employee:number",
        "retention_def:metadataXPath": null,
        "retention_def:durationYears": 6,
        "retention_def:endActions": [
            "Document.Delete"
        ],
        "retention_def:expression": null,
        "common:icon-expanded": null,
        "common:icon": "/icons/retention_rule.png",
        "retention_rule:applicationPolicy": "manual",
        "retention_rule:enabled": true,
        "retention_rule:docTypes": [
            "HR_Employment_Contract"
        ],
    };
    
    var hr_contract_retention_rule = Document.Create(
      RetentionRules_location, {
	    'type': "RetentionRule",
	    'name': "RetentionRule_Contract",
	    'properties': hr_contracts_properties
      }
  );
  ```
  
{{#> callout type='note' heading='Retention Rules Location'}}
You have to create the retention rules under the document of type `RetentionRules`. So ensure you have fetched it previously.
{{/callout}}

If you need to import the retention rule document type, then adopt the same strategy as extending the user schema:

- Import the necessary [XSD schemas](https://github.com/nuxeo/nuxeo/tree/10.10/addons/nuxeo-retention/nuxeo-retention-core/src/main/resources/schemas)  
  - `retention_definition.xsd`
  - `retention_rule.xsd`
- Generate the schemas (and doctype) in the **Content Model** section

 