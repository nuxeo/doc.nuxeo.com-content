---
title: 'HOWTO: Manage Translations'
description: Learn how to manage translations in Nuxeo Web UI.
review:
    comment: ''
    date: '2020-09-14'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to manage translations in Nuxeo Web UI.
        level: Beginner
        tool: Studio
        topics: Web UI
labels:
    - nuxeo-web-ui
    - i18n
    - labels
    - localization
tree_item_index: 200
---

{{! excerpt}}
This how-to will teach you how to manage translations on your application using **Nuxeo Studio**.
{{! /excerpt}}

## Adding a New Language

Adding translations can easily be done using [Nuxeo Studio Designer]({{page space='studio' page='ui-designer'}}):

1. Navigate to the UI / Translations menu.
1. Create a new translation file. It should follow the pattern `messages-{language}.json`, where `language` is a code from Crowdin's list of [supported language codes](https://support.crowdin.com/api/language-codes/).
1. New translation keys can be added inside the file using the following pattern:

```
{
  "label.ui.myApp.myKey1": "my label 1",
  "label.ui.myApp.myKey2": "my label 2"
}
```

Translations keys usually follow a [convention]({{page space='nxdoc' page='web-ui-automated-translation-labels'}}).

{{#> callout type='note' }}
Web UI uses the same language as the web browser. After adding a translation and having hot-reloaded your project, you may need to force refresh the page to force the translation files to be reloaded.
{{/callout}}

Whenever possible, Nuxeo Studio helps managing translations by generating translation keys and their label on your behalf. Some labels are generated explicitly when you save your configuration (e.g. schema properties), some are generated only if you do not add a translation key by yourself (e.g. document type names), and others have to be handled manually. Below is a breakdown of how they work together.

## Explicit Translation Generation

When saving configuration in the following screens, Nuxeo Studio will generate an entry for these items in every translation file existing in Nuxeo Studio Designer.

| Screen | Item | Translation Key | Value |
|--------|------|-----------------|-------------|
| Schemas | Schema properties | `label.ui.schema.${schema_prefix}.${property_name}` | Property name in human readable format |
| Schemas | Schema properties (complex) | `label.ui.schema.${schema_prefix}.${complex_property_name}.${sub_property_name}` | Property name in human readable format |
| Page Providers | Predicates | `label.ui.predicate.${predicateKey}` | Predicate id in human readable format
| Page Providers | Aggregates | `label.ui.aggregate.${key}` | Aggregate id in human readable format
| Page Providers | Quick Filters | `label.ui.quickFilter.${key}` | Quick filter name in human readable format
| Workflow | Workflow Variables | `label.ui.workflow.${schema_prefix}.${property_name}` | Property name in human readable format
| Workflow | Node Variables | `label.ui.workflow.${schema_prefix}.${property_name}` | Property name in human readable format

If you rename or delete these configuration items, Studio will keep the existing translation keys. Make sure to clean them up if needed!

## Implicit Translation Generation

Some Web UI components expect a key with a specific convention to translate labels. For example, the translation key for your document types has to be `label.document.type.${name}`.

In this particular case, you can provide the `"label.document.type.mydoctype": "My Document Type"` entry in your translation files to define a specific label for the end user. Otherwise, Nuxeo Studio will generate a default one when you download your package (i.e. when using hot reload, retrieving the Studio configuration as a dependency, or manually downloading it), using the document type label configured as a label.

## No Translation Generation

In other cases, Nuxeo Studio cannot generate a translation automatically. You can usually define a translation key in the dedicated label field, and add the corresponding entry in your translation files. We recommend following our [naming convention]({{page space='nxdoc' page='web-ui-automated-translation-labels'}}) as a good practice whenever possible.
