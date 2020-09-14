---
title: 'HOWTO: Translation Label Conventions'
description: Learn the naming conventions for internationalized labels in Nuxeo Web UI.
review:
    comment: ''
    date: '30-03-2020'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn the naming conventions for internationalized labels in Nuxeo Web UI.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - nuxeo-web-ui
    - customization
    - i18n
    - labels
    - localization
tree_item_index: 1510
---

{{#> callout type='tip' }}
Adding translation can be done easily using [Nuxeo Studio Designer]({{page space='nxdoc' page='web-ui-managing-translations'}}).
{{/callout}}

{{#> callout type='note' }}
Web UI uses the same language as the web browser. After adding a translation and having hot-reloaded your project, you may need to force refresh the page to force the translation files to be reloaded.
{{/callout}}

## Label Conventions

Within the following examples, the `${...}` notation indicates the part of the translation key that should be replaced with the name, type, or other value indicated.

For example, `exportButton.${name}` for the `pdfRendition` export would be:

{{#> panel type='code' }}
```json
{
  "exportButton.pdfRendition": "PDF Rendition"
}
```
{{/panel}}

### Documents / Workflow

| Property                                | Description                                                                                    |
|-----------------------------------------|------------------------------------------------------------------------------------------------|
| `label.document.type.${name}`           | Friendly name for a Document type. `name` must be lower case.                                  |
| `label.ui.state.${name}`                | Friendly name for Document state. Defaults to the state `name`.                                |
| `diffObject.property.label.${property}` | Label for diff `property`, defaults to document property name.*,Events                         |
| `activity.${event}`                     | Label for document activity with `event` name, also applies to audit history listing.          |
| `mimetype.${value}`                     | Friendly label for system MIME types (`value` is the raw MIME type - e.g., `application/pdf`). |
| `tasks.${action}`                       | The task `action` button label.                                                                |

### Search / Export

| Property                                | Description                            |
|-----------------------------------------|----------------------------------------|
| `app.title.search.${name}`              | Page title for search `name`.          |
| `label.ui.quickFilter.${name}`         | Search quick filter `name`.            |
| `label.ui.aggregate.${key}`             | Search page provider aggregate `key`.  |
| `searchResults.highlight.field.${name}` | Label for search results field `name`. |
| `displayModeButton.display.${name}`     | The `name` of the search display mode. |

### Template Rendering

| Property                                          | Description                       |
|---------------------------------------------------|-----------------------------------|
| `templateRenderingPage.processor.${name}`         | Label for the processor's `name`. |
| `templateRenderingPage.outputFormat.${format}`    | Label for the output `format`.    |
| `templateRenderingPage.paramType.${type}`         | Label for the parameter's `type`. |
| `templateRenderingPage.paramType.content.${type}` | Label for the content `type`.     |

### Miscellaneous

| Property                  | Description                                        |
|---------------------------|----------------------------------------------------|
| `admin.ai.export.${name}` | Export for AI field `name`.                        |
| `app.title.${page}`       | The title of the page, based on the page `name`.   |
| `error.${code}`           | HTTP error or status `code` (e.g., 200, 404, 500). |
| `exportButton.${name}`    | Export rendition `name`.                           |
| `themes.${name}`          | The `name` of the theme.                           |

### Vocabularies

As opposed to other UI translations, Vocabularies are translated on the server side and need to be stored in a different place. When using Nuxeo Studio, entries can be added directly into your Studio Designer json files as usual, and Nuxeo Studio will handle the rest. This allows you to centralize all your translations.

If you are adding them in your Java project however, remember that entry values must be added to the `messages_${lang}_${country}.properties` file in order to be translated on the client side. This allows the vocabulary REST endpoints to provide the appropriate translation for headless clients.

- `label.directories.${vocabularyName}.${entryLabel}`: Specify the translation for a vocabulary entry with vocabularyName and entryLabel.
