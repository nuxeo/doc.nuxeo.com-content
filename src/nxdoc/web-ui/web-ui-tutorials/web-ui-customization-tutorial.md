---
title: Web UI Customization Tutorial
description: Learn how to customize Web UI and deploy your customization.
review:
    comment: ''
    date: '2019-02-25'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to customize Web UI and deploy your customization.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2019-ok
    - tutorial
    - nuxeo-web-ui
    - nuxeo-elements
    - gbarata
    - nuxeo-ui-elements
    - customization
    - polymer
tree_item_index: 300
---

{{! excerpt}}
In this tutorial we'll guide you through customizing Nuxeo Web UI and deploying your customization. We're going to address to different customization approaches: by **overriding dynamic layouts** and via **slots**. In the former case we'll edit a view layout for a popular document type, whereas in the latter we're going to contribute a new [Document Action]({{page page='web-ui-slots'}}/#document_actions).
{{! /excerpt}}

## Setup

Before we start customizing the Web UI we need to create an empty Nuxeo bundle. Make sure you go through the following
resources to understand how to create and deploy a bundle:
- [Understanding Bundle Deployment]({{page page='understanding-bundles-deployment'}})
- [How to create an empty bundle]({{page page='how-to-create-an-empty-bundle'}})

### Creating an Empty Bundle

To make our life easier, we'll use [Nuxeo CLI]({{page page='nuxeo-cli'}}). Please make sure to follow the respective [guide]({{page page='develop-with-nuxeo-platform'}}) before proceeding.

Let's start by installing Nuxeo CLI and scaffolding a new bundle:

```bash
$ npm install -g nuxeo-cli
$ mkdir -p nuxeo-customization-sample && cd $_
$ nuxeo bootstrap
```

Nuxeo CLI will then ask you a few questions (for which the default values will suffice). We'll assume that the parent ID
is `nuxeo-customization-sample`, the project ID is `nuxeo-customization-sample-core` and the project version is
`1.0-SNAPSHOT`, and that the following folder hierarchy was generated:

```text
nuxeo-customization-sample
├── nuxeo-customization-sample-core
│   ├── pom.xml
│   └── src
│       ├── main
│       │   ├── java
│       │   └── resources
│       └── test
│           ├── java
│           └── resources
└── pom.xml
```

Our customizations will be contributed to the `nuxeo-customization-sample-core/src/main/resources` folder, hereafter referred to as just the **resources** folder.

### Building and Deploying

We must now create the folder in our bundle under which our customized Web UI content will be placed: `resources/web/nuxeo.war/ui/`.
In order to instruct this content to be copied when the server is run, we must add a new `deployment-fragment.xml` file
to `resources/OSGI-INF`:

{{#> panel type='code' heading='resources/OSGI-INF/deployment-fragment.xml'}}
```xml
<?xml version="1.0"?>
<fragment version="1">

  <require>org.nuxeo.web.ui</require>

  <install>
    <unzip from="${bundle.fileName}" to="/" prefix="web">
      <include>web/nuxeo.war/**</include>
    </unzip>
  </install>

</fragment>
```
{{/panel}}

Our bundle can be built simply by running `mvn install`, and it can be deployed by copying the resulting jar file, in this
case `nuxeo-customization-sample-core/target/nuxeo-customization-sample-core-1.0-SNAPSHOT.jar`, to `$NUXEO_HOME/nxserver/bundles`.
For more information about building and deploying bundles, please check the [documentation]({{page page='how-to-create-an-empty-bundle'}}/#install-and-check-the-deployment-of-your-bundle).

## Contributing Dynamic Layouts{{> anchor 'contributing_dynamic_layouts'}}

One of the most common cases of customization of the Web UI is to contribute new or modify already existing dynamic layouts.
For example, one might want to change the layout to create a user or add layouts for a new document type. In this section we are going to change the view layout for the `File` document type, so that it displays the file's blob mime type.

To override or contribute new layouts for a document type, we must add a file with the name of the layout that needs to be created or overridden to the `document/{type}` folder. In this case, we need to create the folder `resources/web/nuxeo.war/ui/document/file` and take the original [nuxeo-file-view-layout.html](https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/document/file/nuxeo-file-view-layout.html) and add a new `div` element to hold some file details, specifically the blob's mime type, which is the piece of information we wanted to add:

{{#> panel type='code' heading='resources/web/nuxeo.war/ui/document/file/nuxeo-file-view-layout.html'}}
```xml
<nuxeo-card heading="Details">
  <div>
    <b>Mime Type: </b>
    <span>[[document.properties.file:content.mime-type]]</span>
  </div>
</nuxeo-card>
```
{{/panel}}

{{#> callout type='note' heading='Extending the Web UI'}}
Please check the [deployment documentation]({{page page='web-ui-deployment'}}/#structure) for more information on how
to extend the Web UI.
{{/callout}}

You can now build your bundle and deploy it. Then, by navigating to a file that contains a blob, you'll see its mime type.

![]({{file name='mime_type.png'}} ?w=600,border=true)

## Contributing to a Nuxeo Slot{{> anchor 'contributing_to_a_nuxeo_slot'}}

Nuxeo Slots are an important mechanism to extend Nuxeo Web UI. Here we're going to contribute a new action to the [DOCUMENT_ACTIONS]({{page page='web-ui-slots'}}/#document_actions) slot, which will be displayed whenever a user browses to a document.

![]({{file name='DOCUMENT_ACTIONS.png' page='web-ui-slots'}} ?w=600,border=true)

{{#> callout type='note' heading='Nuxeo Slots'}}
Please refer to the [Nuxeo Slots documentation]({{page page='web-ui-slots'}}) for information about slots and how to contribute to them.
{{/callout}}

Our action will consist of an element that receives a document and that is composed of a button which, when clicked, displays a popup with the list of facets of the document. So, let's start by creating a folder inside `resources/web/nuxeo.war/ui` (e.g. `resources/web/nuxeo.war/ui/sample/`) and add a new element to it named `my-document-action`, which will hold a button, a tooltip for that button, and a dialog:

{{#> panel type='code' heading='resources/web/nuxeo.war/ui/sample/my-document-action.html'}}
```xml
<dom-module id="my-document-action">
  <template>
    <style>
      :host {
        display: inline-block;
      }
    </style>

    <template is="dom-if" if="[[_isAvailable(document)]]">
      <paper-icon-button icon="icons:extension" on-tap="_toggleDialog" noink></paper-icon-button>
      <paper-tooltip>Display Facets</paper-tooltip>
    </template>

    <paper-dialog id="dialog" with-backdrop>
      <h2>Facets</h2>
      <div>
        <ul>
          <template is="dom-repeat" items="[[document.facets]]" as="facet">
            <li>[[facet]]</li>
          </template>
        </ul>
      </div>
      <div class="buttons">
        <paper-button dialog-dismiss>Close</paper-button>
      </div>
    </paper-dialog>

  </template>

  <script>
    Polymer({
      is: 'my-document-action',
      properties: {
        document: Object
      },

      _isAvailable: function(document) {
        return !!document;
      },

      _toggleDialog: function() {
        this.$.dialog.toggle();
      }

    });
  </script>

</dom-module>
```
{{/panel}}

Our new element must now be added to the `DOCUMENT_ACTIONS` slot. To achieve this, we must create a another file (e.g.
`sample.html`) that will import `my-document-action` and declare it in a template inside a `nuxeo-slot-content`:

{{#> panel type='code' heading='resources/web/nuxeo.war/ui/sample/sample.html'}}
```xml
<link rel="import" href="my-document-action.html">

<nuxeo-slot-content name="mySampleAction" slot="DOCUMENT_ACTIONS">
  <template>
    <my-document-action document="[[document]]"></my-document-action>
  </template>
</nuxeo-slot-content>
```
{{/panel}}

Note that the `document` property of our element is bound to the `document` property provided by the action context. For
more information about what property are available in this slot, please check the [DOCUMENT_ACTIONS documentation]({{page page='web-ui-slots'}}/#document_actions) .

From within a bundle, content for a Nuxeo Slot must be contributed as a `WebResource`. Therefore, we must add a new `xml`
file to the `resources/OSGI-INF` folder, contributing `sample.html` as a web resource:

{{#> panel type='code' heading='resources/OSGI-INF/sample-webresources-contrib.xml'}}
```xml
<?xml version="1.0"?>

<component name="org.nuxeo.ecm.distribution.sample.resources.contrib">

  <require>org.nuxeo.web.ui.resources</require>

  <extension target="org.nuxeo.ecm.platform.WebResources" point="resources">
    <resource name="sample.html" type="import" shrinkable="false">
      <uri>/ui/sample/sample.html</uri>
    </resource>
  </extension>

  <extension target="org.nuxeo.ecm.platform.WebResources" point="bundles">
    <bundle name="web-ui">
      <resources append="true">
        <resource>sample.html</resource>
      </resources>
    </bundle>
  </extension>

</component>
```
{{/panel}}

Finally, we must add the aforementioned contribution file, as a nuxeo component, to the end of the manifest file:

{{#> panel type='code' heading='resources/META-INF/MANIFEST.MF'}}
```
...
Nuxeo-Component: OSGI-INF/sample-webresources-contrib.xml
```
{{/panel}}

And we're good to go! You just need to build and deploy your bundle and we'll now have a new action to display the facets
of any document.

![]({{file name='my_document_action.png'}} ?w=200,border=true)

![]({{file name='my_document_action_popup.png'}} ?w=150,border=true)
