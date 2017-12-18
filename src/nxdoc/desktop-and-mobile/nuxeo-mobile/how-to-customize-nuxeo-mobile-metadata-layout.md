---
title: 'HOWTO: Customize Nuxeo Mobile Metadata Layout'
review:
    comment: ''
    date: '2017-12-15'
    status: ok
details:
    howto:
        excerpt: This how-to explains how to customize Nuxeo Mobile metadata layout.
        level: Intermediate
        tool: JSON Extention
        topics: Nuxeo Mobile
labels:
    - nuxeo-mobile
    - yachour
    - howto
    - lts2017-ok
toc: true

---

Since the version 1.8.0 on iOS and 1.5.0 on Android, the Nuxeo Mobile application metadata layout can be customized from the server itself.


## Layout Format

The format of the layout is simply a JSON object with the list of metadata to display: a label and a field.

The default layout looks like:

```json
{
  "name": "metadata",
  "elements": [
    {
      "label": "created",
      "field": "dc:created",
    },
    {
      "label": "By",
      "field": "dc:creator",
    },
    {
      "label": "version",
      "field": "versionLabel",
    },
    {
      "label": "state",
      "field": "state",
    },
    {
      "label": "contributors",
      "field": "dc:contributors",
    }
  ]
}
```

The important part is the `elements` object, `name` is not used yet.

The mobile application tries to retrieve the "metadata" layout for a given document type. You need one layout per document type. If there is no custom layout, the default one is used.

## How to Configure the Layout

The customization can be done in the Studio Designer, but "manually" for now.

Assuming you have a custom document type `SuperFile`, in the **Resources** tab of the Designer, add a new file named `nuxeo-superfile-metadata-layout.json`.

Fill it with a JSON object defining what metadata you want to display, such as:

```json
{
  "name": "metadata",
  "elements": [
    {
      "label": "label.mobile.superfile.created",
      "field": "dc:created"
    },
    {
      "label": "By",
      "field": "dc:creator"
    },
    {
      "label": "version",
      "field": "versionLabel"
    },
    {
      "label": "state",
      "field": "state"
    },
    {
      "label": "contributors",
      "field": "dc:contributors"
    },
    {
      "label": "label.mobile.superfile.nature",
      "field": "dc:nature"
    },
    {
      "label": "label.mobile.superfile.subjects",
      "field": "dc:subjects"
    },
    {
      "label": "label.mobile.superfile.modified",
      "field": "dc:modified"
    },
    {
      "label": "label.mobile.superfile.coverage",
      "field": "dc:coverage"
    }
  ]
}
```

![]({{file name='ViewDesignerLayout.png'}} ?w=350,border=true)

The field can either reference a property of the document, given its xpath, or a top level property of the JSON representation of a Document (from the REST API), such as `versionLabel` or `state`.

Labels are internationalized, so you can fill `messages.json` files within the Designer, in the **UI**&nbsp;> **Translations** tab. It fallbacks on displaying the label key if no label is found.
The Mobile application will load the `messages.json` files from the Nuxeo Server after a successful login.

![]({{file name='ViewDesignerResources.png'}} ?w=650,border=true)

This gives us the following result in the app:

![]({{file name='Result.png'}} ?w=200,border=true)

For development purposes, you can directly edit the JSON files on your Nuxeo Server. The "metadata" layout is retrieved each time you view a document.


## Handled Types

The following types can be displayed in the app. Note that we also handle "List of" those types.

- String
- Date
- Number
- User
- Group
- Directory


## Limitations

This is still a work in progress, and the JSON format of the layout may change in the future, especially when the Studio Designer will generate it.

Field types not handled right now (won't display anything):
- content type
- list of complex types

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Mobile documentation]({{page page='nuxeo-mobile'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
