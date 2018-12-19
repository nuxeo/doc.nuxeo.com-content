---
title: 'Workflow Task Layout'
review:
    comment: ''
    date: '2018-12-17'
    status: ok
labels:
    - nuxeo-mobile
toc: true
tree_item_index: 100
---

## Layout Format

The format of the layout is simply a `JSON` object with the list of widgets for a given task.

A widget consists of:
- a label;
- a field;
- a type;
- a set of properties.

```json
{
   "name": "layout-name",
   "layout": [
       {
           "metadata": [
               {
                   "label": "A label", // the label to be displayed for the field
                   "field": "field", // the variable name of the task
                   "type": "text", // the widget type
                   "properties": { // a set of properties configuring the widget
                       "prop1": "value1",
                       "prop2": "value2",
                       ...
                   }
               }
           ]
       },
       ...
   ]
}
```

The important part is the `layout` object, `name` is not used yet.

{{#> callout type='info' }}

To discover how this task layout can be used, follow the [HOWTO: Customize Nuxeo Mobile Workflow Tasks Layout]({{page page='how-to-customize-nuxeo-mobile-workflow-tasks-layout'}})
{{/callout}}

## Widget Types

### Text

The `text` widget displays a single-line text input.

**Type**

`text`

**Properties**

| Name            | Type      | Description                               | Default |
|:----------------|:----------|:------------------------------------------|:--------|
| **placeholder** | `string`  | The placeholder text of the text input    | N/A     |
| **readonly**    | `boolean` | Whether the text input is read-only or not | `false` |
| **required**    | `boolean` | Whether the text input is required or not  | `false` |

**Sample**

```json
{
    "label": "Text field",
    "field": "var_text",
    "type": "text",
    "properties": {
        "placeholder": "a default placeholder",
        "readonly": false,
        "required": true
    }
}
```

### Textarea

The `textarea` widget displays a multiline text input.

**Type**

`textarea`

**Properties**

| Name            | Type      | Description                               | Default |
|:----------------|:----------|:------------------------------------------|:--------|
| **placeholder** | `string`  | The placeholder text of the text input    | N/A     |
| **readonly**    | `boolean` | Whether the text input is read-only or not | `false` |
| **required**    | `boolean` | Whether the text input is required or not  | `false` |

**Sample**

```json
{
    "label": "Textarea field",
    "field": "var_textarea",
    "type": "textarea",
    "properties": {
        "placeholder": "a textarea placeholder",
        "readonly": false,
        "required": false
    }
}
```

### HTML Text

The `htmltext` widget displays text rendered as HTML. This widget does not support editing.

**Type**

`htmltext`

**Properties**

| Name          | Type      | Description                      | Default |
|:--------------|:----------|:---------------------------------|:--------|
| **minHeight** | `integer` | The minimum height of the widget | 16      |

**Sample**

```json
{
    "label": "HTML text field",
    "field": "var_htmltext",
    "type": "htmltext",
    "properties": {
        "minHeight": 32
    }
}
```

### Integer

The `integer` widget displays a single-line text input supporting only integer values.

**Type**

`integer`

**Properties**

| Name            | Type      | Description                               | Default |
|:----------------|:----------|:------------------------------------------|:--------|
| **placeholder** | `string`  | The placeholder text of the text input    | N/A     |
| **readonly**    | `boolean` | Whether the text input is read-only or not | `false` |
| **required**    | `boolean` | Whether the text input is required or not  | `false` |

**Sample**

```json
{
    "label": "Integer field",
    "field": "var_integer",
    "type": "integer",
    "properties": {
        "readonly": true
    }
}
```

### Double

The `double` widget displays a single-line text input supporting number values.

**Type**

`double`

**Properties**

| Name            | Type      | Description                               | Default |
|:----------------|:----------|:------------------------------------------|:--------|
| **placeholder** | `string`  | The placeholder text of the text input    | N/A     |
| **readonly**    | `boolean` | Whether the text input is read-only or not | `false` |
| **required**    | `boolean` | Whether the text input is required or not  | `false` |

**Sample**

```json
{
    "label": "Double field",
    "field": "var_double",
    "type": "double",
    "properties": {
        "placeholder": "a double placeholder",
        "readonly": false,
        "required": true
    }
}
```

### Boolean

The `boolean` widget displays a switch.

**Type**

`boolean`

**Properties**

| Name            | Type      | Description                          | Default |
|:----------------|:----------|:-------------------------------------|:--------|
| **readonly**    | `boolean` | Whether the switch is disabled or not | `false` |
| **required**    | `boolean` | Whether the switch is required or not | `false` |

**Sample**

```json
{
    "label": "Boolean field",
    "field": "var_boolean",
    "type": "boolean",
    "properties": {
        "readonly": false,
        "required": true
    }
}
```

### Date

The `date` widget allows to select a date. Selected date, or the placeholder, is displayed. Tapping on it displays a date picker.

**Type**

`date`

**Properties**

| Name            | Type      | Description                                   | Default |
|:----------------|:----------|:----------------------------------------------|:--------|
| **placeholder** | `string`  | The placeholder text of the text input        | N/A     |
| **readonly**    | `boolean` | Whether the date selection is available or not | `false` |
| **required**    | `boolean` | Whether the date selection is required or not  | `false` |

**Sample**

```json
{
    "label": "Date field",
    "field": "var_date",
    "type": "date",
    "properties": {
        "placeholder": "Select a date...",
        "readonly": false,
        "required": true
    }
}
```

### User

The `user` widget allows to select one or more users. Selected users, or the placeholder, are displayed. Tapping on it displays a modal to search and select users.

**Type**

`user`

**Properties**

| Name                      | Type      | Description                                                       | Default |
|:--------------------------|:----------|:------------------------------------------------------------------|:--------|
| **multivalued**           | `boolean` | Whether multiple users can be selected or not                      | `false` |
| **placeholder**           | `string`  | The placeholder text of the text input                            | N/A     |
| **readonly**              | `boolean` | Whether the users selection is available or not                    | `false` |
| **required**              | `boolean` | Whether the users selection is required or not                     | `false` |
| **selectedTitle**         | `string`  | Title displayed in the modal before the selected users            | N/A     |
| **suggestionPlaceholder** | `string`  | The placeholder text of the search input when searching for users | N/A     |
| **type**                  | `string`  | The type of suggestion: <br />`suggest`: suggest users based on user input<br />`suggestAll`: suggest users based on user input but initially display all users<br />`select`: all users displayed, no suggestion available | `suggest` |


**Sample**

```json
{
    "label": "Users field",
    "field": "var_users",
    "type": "user",
    "properties": {
        "multivalued": true,
        "placeholder": "Select users",
        "required": true,
        "type": "suggest"
    }
}
```

### Group

The `group` widget allows to select one or more groups. Selected groups, or the placeholder, are displayed. Tapping on it displays a modal to search and select groups.

**Type**

`group`

**Properties**

| Name                      | Type      | Description                                                        | Default |
|:--------------------------|:----------|:-------------------------------------------------------------------|:--------|
| **multivalued**           | `boolean` | Whether multiple groups can be selected or not                      | `false` |
| **placeholder**           | `string`  | The placeholder text of the text input                             | N/A     |
| **readonly**              | `boolean` | Whether the groups selection is available or not                    | `false` |
| **required**              | `boolean` | Whether the groups selection is required or not                     | `false` |
| **selectedTitle**         | `string`  | Title displayed in the modal before the selected groups            | N/A     |
| **suggestionPlaceholder** | `string`  | The placeholder text of the search input when searching for groups | N/A     |
| **type**                  | `string`  | The type of suggestion: <br />`suggest`: suggest groups based on user input<br />`suggestAll`: suggest groups based on user input but initially display all groups<br />`select`: all groups displayed, no suggestion available | `suggest` |

**Sample**

```json
{
    "label": "Group field",
    "field": "var_group",
    "type": "user",
    "properties": {
        "multivalued": false,
        "placeholder": "Select a group",
        "required": true,
        "selectedTitle": "Selected group:",
        "suggestionPlaceholder": "Search for a group...",
        "type": "suggestAll"
    }
}
```

### User and Group

The `usergroup` widget allows to select one or more users and groups. Selected users and groups, or the placeholder, are displayed. Tapping on it displays a modal to search and select users and groups.

**Type**

`usergroup`

**Properties**

| Name                      | Type      | Description                                                                  | Default |
|:--------------------------|:----------|:-----------------------------------------------------------------------------|:--------|
| **multivalued**           | `boolean` | Whether multiple users and groups can be selected or not                      | `false` |
| **placeholder**           | `string`  | The placeholder text of the text input                                       | N/A     |
| **readonly**              | `boolean` | Whether the users and groups selection is available or not                    | `false` |
| **required**              | `boolean` | Whether the users and groups selection is required or not                     | `false` |
| **selectedTitle**         | `string`  | Title displayed in the modal before the selected users and groups            | N/A     |
| **suggestionPlaceholder** | `string`  | The placeholder text of the search input when searching for users and groups | N/A     |
| **type**                  | `string`  | The type of suggestion: <br />`suggest`: suggest users and groups based on user input<br />`suggestAll`: suggest users and groups based on user input but initially display all users and groups<br />`select`: all users and groups displayed, no suggestion available | `suggest` |

**Sample**

```json
{
    "label": "Users and Groups field",
    "field": "var_usersandgroups",
    "type": "user",
    "properties": {
        "multivalued": true,
        "placeholder": "Select users and groups",
        "required": false,
        "selectedTitle": "You have selected the following users and groups:",
        "suggestionPlaceholder": "Search for some users and groups...",
        "type": "suggest"
    }
}
```

### Directory

The `directory` widget allows to select one or more entries from a directory. Selected entries, or the placeholder, are displayed. Tapping on it displays a modal to search and select directory entries.

**Type**

`directory`

**Properties**

| Name                      | Type      | Description                                                                   | Default |
|:--------------------------|:----------|:------------------------------------------------------------------------------|:-------------------|
| **dbl10n**                | `boolean` | Whether translations are stored in the directory or not                        | `false`            |
| **directoryName**         | `string`  | The directory name                                                            | N/A                |
| **hierarchical**          | `boolean` | Whether the directory is hierarchical or not                                   | `false`            |
| **lang**                  | `string`  | The language used for translations                                            | The phone language |
| **localize**              | `boolean` | Whether the translations are stored in `messages*.properties` or not           | `true`             |
| **multivalued**           | `boolean` | Whether multiple directory entries can be selected or not                      | `false`            |
| **placeholder**           | `string`  | The placeholder text of the text input                                        | N/A                |
| **readonly**              | `boolean` | Whether the directory entries selection is available or not                    | `false`            |
| **required**              | `boolean` | Whether the directory entries selection is required or not                     | `false`            |
| **selectedTitle**         | `string`  | Title displayed in the modal before the selected directory entries            | N/A                |
| **suggestionPlaceholder** | `string`  | The placeholder text of the search input when searching for directory entries | N/A                |
| **type**                  | `string`  | The type of suggestion: <br />`suggest`: suggest directory entries based on user input<br />`suggestAll`: suggest directory entries based on user input but initially display all directory entries<br />`select`: all directory entries displayed, no suggestion available | `suggest` |

**Sample**

```json
{
    "label": "Users and Groups field",
    "field": "var_nature",
    "type": "user",
    "properties": {
        "dbl10n": false,
        "directoryName": "nature",
        "placeholder": "The nature",
        "multivalued": false,
        "required": true,
        "suggestionPlaceholder": "Select a nature...",
        "type": "suggest"
    }
}
```

### Document

The `document` widget allows to select one or more documents. Selected documents, or the placeholder, are displayed. Tapping on it displays a modal to search and select documents.

**Type**

`document`

**Properties**

| Name                      | Type      | Description                                                                  | Default                       |
|:--------------------------|:----------|:-----------------------------------------------------------------------------|:------------------------------|
| **multivalued**           | `boolean` | Whether multiple documents can be selected or not                             | `false`                       |
| **pageProviderName**      | `string`  | The page provider name used to query documents                               | `DEFAULT_DOCUMENT_SUGGESTION` |
| **placeholder**           | `string`  | The placeholder text of the text input                                       | N/A                           |
| **readonly**              | `boolean` | Whether documents selection is available or not                               | `false`                       |
| **required**              | `boolean` | Whether the documents selection is required or not                            | `false`                       |
| **selectedTitle**         | `string`  | Title displayed in the modal before the selected documents                   | N/A                           |
| **suggestionPlaceholder** | `string`  | The placeholder text of the search input when searching for documents        | N/A                           |
| **type**                  | `string`  | The type of suggestion: <br />`suggest`: suggest documents based on user input<br />`suggestAll`: suggest documents based on user input but initially display all documents<br />`select`: all documents displayed, no suggestion available | `suggest` |

**Sample**

```json
{
    "label": "Documents field",
    "field": "var_documents",
    "type": "document",
    "properties": {
        "multivalued": true,
        "pageProviderName": "myCustomProvider",
        "placeholder": "Add documents...",
        "required": true,
        "suggestionPlaceholder": "Add one or more documents",
        "type": "suggest"
    }
}
```
