---
title: Customize Your App with Nuxeo Elements
description: 'This tutorial shows you how to build a simple application base on the Polymer Starter Kit, which will be able to read documents from a Nuxeo instance.'
review:
    date: '2019-01-30'
    status: ok
toc: true
labels:
    - lts2019-ok
    - lts2016-ok
    - tutorial
    - nuxeo-elements
    - gbarata
    - nuxeo-ui-elements
    - polymer
    - polymer-starter-kit
    - content-review-lts2017
tree_item_index: 200
---
This tutorial shows you how to build a simple application base on the Polymer Starter Kit, which
will be able to read documents from a Nuxeo instance. You'll learn how to create a new element and gradually
improve it using both `nuxeo-elements` and `nuxeo-ui-elements`.

{{#> callout type='info'}}
Watch the related courses on Nuxeo University:</br>
[Introduction to Nuxeo Elements](https://university.nuxeo.com/learn/public/course/view/elearning/79/introduction-to-nuxeo-elements)
![]({{file name='university-nuxeo-elements.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Requirements

- **[Node.js](https://nodejs.org/)** is a JavaScript runtime built on Chrome's V8 JavaScript engine. Almost every tool out there for client-side development is built with Node.js and distributed with npm, the package manager for Node.js. Make sure you download and install your OS-specific version first, according to the requirements described in the [Nuxeo Elements repository](https://github.com/nuxeo/nuxeo-elements/blob/master/README.md#dependencies).
- **[Nuxeo CLI]({{page page='nuxeo-cli'}})** to scaffold your application **as a Nuxeo Bundle** and deploy it on a Nuxeo Server. Your application is **hosted inside** the Nuxeo Server as a bundle and uses it as a backend (last verified version for this tutorial is 1.9.0).
- **[Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli)** to scaffold your standalone application. Your application is **hosted outside** the Nuxeo Server and uses it as a service (last verified version for this tutorial is 1.9.5).

## Scaffolding

{{#> callout type='note'}}
We recommend you to use [Nuxeo CLI]({{page page='nuxeo-cli'}}) for scaffolding. Using this setup, you'll not have to take care about packaging and deploying your application in Nuxeo. Use [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli) only if you know that your application will live outside the Nuxeo Server.
{{/callout}}

### As a Nuxeo Bundle

1.  Install Nuxeo CLI and scaffold the project:
    ```bash
    $ npm install -g nuxeo-cli
    $ mkdir -p nuxeo-elements-sample && cd $_
    $ nuxeo bootstrap polymer package
    ```

    Nuxeo CLI will ask you several questions about the artifact name, etc.

1. Change current directory to `nuxeo-elements-sample-web`:

    ```bash
     $ cd nuxeo-elements-sample-web
     ```

1.  Start the application and see what has been generated:

    ```bash
    $ npm run serve
    # or, if polymer-cli is installed globally
    $ polymer serve
    ```

    The produced application based on [Polymer Starter Kit](https://developers.google.com/web/tools/polymer-starter-kit/) can also be extended using the [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli). And it helps you as a starting point for building web applications with Polymer and can be deployed like all [Nuxeo Bundles]({{page page='understanding-bundles-deployment'}}).

1.  Build the Nuxeo Bundle containing the Polymer Application:

    ```bash
    $ mvn package
    $ cp target/nuxeo-elements-sample-web-<VERSION>.jar <NUXEO_SERVER>/nxserver/bundles/
    ```

    {{#> callout type='info' }}
    Do not hesitate to take a look at the others templates available with [Nuxeo CLI]({{page page='nuxeo-cli'}}), especially the `Package Generator` that helps you package your bundles as a [Nuxeo Package]({{page page='creating-nuxeo-packages'}}).
    {{/callout}}

### As a Standalone Polymer Application

1.  After creating a folder to hold the application's code, scaffold it using Polymer CLI, base on Polymer Starter Kit (**PSK** for short):

    ```bash
    $ npm install -g polymer-cli
    $ mkdir -p nuxeo-elements-sample && cd $_
    $ polymer init polymer-3-starter-kit
    ```

    The produced application based on [Polymer Starter Kit](https://github.com/Polymer/polymer-starter-kit) using [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli) can help you as a starting point for building web applications with Polymer.

2.  Serve your application and check out what has been generated.

    ```bash
    $ polymer serve
    ```

    **Note:** the README.md includes detailed information about the generated application so it's a good starting point to understand its structure.

    ![]({{file name='polymer-starter-kit.png'}} ?w=600,border=true)

    The produced application includes some sample elements and showcases Google's Material Design through the use of Paper Elements.

Let's plug this application into the Nuxeo instance and change the hardcoded users list with some actual data.

## Create a New Element

1.  Create a new element named `my-doc-reader` to hold our logic, under the `src` directory. For simplicity, we can create a new file called `my-doc-reader.js` in the folder `src` of the scaffolded structure provided by PSK.

    {{#> panel type='code' heading='src/my-doc-reader.js'}}
    ```js
      import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
      import './shared-styles.js';

      /**
      * `my-doc-reader`
      *
      *
      * @customElement
      * @polymer
      * @demo demo/index.html
      */
      class MyDocReader extends PolymerElement {
        static get template() {
          return html`
            <style>
              :host {
                display: block;
                padding: 10px;
              }
            </style>
            <div class="card">
              <h1>Doc Reader</h1>
            </div>
          `;
        }
      }

      window.customElements.define('my-doc-reader', MyDocReader);

    ```
    {{/panel}}

2.  Plug our new element into `my-app.html`, so that it is available from PSK's sidebar.

    Add a new entry to *Drawer content*:

    {{#> callout type='note'}}
    Depending on your setup, links differ if you generated with [Polymer CLI](https://github.com/Polymer/tools/tree/master/packages/cli).
    {{/callout}}

    {{#> panel type='code' heading='src/my-app.js'}}
    ```xml
      <a name="doc-reader" href="[[rootPath]]my-doc-reader">Document Reader</a>
    ```
    {{/panel}}

    And to *Main content* as well:

    {{#> panel type='code' heading='src/my-app.js'}}
    ```xml
      <my-doc-reader name="my-doc-reader"></my-doc-reader>
    ```
    {{/panel}}

3.  Change your routing methods to navigate to the new element:

    {{#> panel type='code' heading='src/my-app.js'}}
    ```js
      _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
        if (!page) {
          this.page = 'view1';
        } else if (['view1', 'view2', 'view3', 'my-doc-reader'].indexOf(page) !== -1) {
          this.page = page;
        } else {
          this.page = 'view404';
        }

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
          this.$.drawer.close();
        }
      }
    ```
    {{/panel}}

    And add the new route to the `_pageChanged` method:

    {{#> panel type='code' heading='src/my-app.js'}}
    ```js
      _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {
          case 'view1':
            import('./my-view1.js');
            break;
          case 'view2':
            import('./my-view2.js');
            break;
          case 'view3':
            import('./my-view3.js');
            break;
          case 'my-doc-reader':
            import('./my-doc-reader.js');
            break;
          case 'view404':
            import('./my-view404.js');
            break;
        }
      }
    ```
    {{/panel}}

## Plug in Nuxeo Elements

1.  Install Nuxeo elements through npm:

    ```bash
    # Add nuxeo-elements as a npm dependency
    $ npm i @nuxeo/nuxeo-elements
    ```

    This adds `nuxeo-elements` as a dependency in `package.json` and downloads the latest release from our GitHub [repository](https://github.com/nuxeo/nuxeo-elements/tree/maintenance-3.0.x) into `node_modules`.

2.  Import the Nuxeo elements we need, in this case [nuxeo-connection](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-connection)
    and [nuxeo-document](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-document), into `my-doc-reader`:

    {{#> panel type='code' heading='src/my-doc-reader.js'}}
    ```js
    import '@nuxeo/nuxeo-elements/nuxeo-connection.js';
    import '@nuxeo/nuxeo-elements/nuxeo-document.js';
    ```
    {{/panel}}

## Retrieve a Document

With Nuxeo Elements imports in place and a brand new element at our disposal, we must add the logic to connect to Nuxeo and
retrieve a document.

Let's start by declaring a connection to Nuxeo. This connection will be shared by all Nuxeo data-driven
elements so it should be one of the first elements you declare in your application, i.e. right at the start of the template:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
<nuxeo-connection id="nxcon" url="http://localhost:8080/nuxeo" username="Administrator" password="Administrator"></nuxeo-connection>
```
{{/panel}}

There is now a connection to the Nuxeo instance. Note that you will need to define a [Cross-Origin Resource Sharing (CORS)
configuration]({{page page='cross-origin-resource-sharing-cors'}}) before going any further. Here's a sample configuration
file, that you should copy to `NUXEO_HOME/nxserver/config/cors-config.xml`:

```xml
<component name="org.nuxeo.corsi.demo">
  <extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
    <corsConfig name="foobar" supportedMethods="GET,POST,HEAD,OPTIONS,DELETE,PUT"exposedHeaders="Accept-Ranges,Content-Range,Content-Encoding,Content-Length,Content-Disposition">
      <pattern>/nuxeo/.*</pattern>
    </corsConfig>
  </extension>
</component>

```

We can then add a `nuxeo-document` to our template, which is a data element responsible for retrieving documents from a
Nuxeo instance, either by `path` or `id`. This document relies on [two REST API endpoints]({{page page='rest-api'}}/#resources-endpoints):
`/api/v1/path` and `/api/v1/id`. For now, let's just retrieve `/default-domain`:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
<nuxeo-document id="doc" auto doc-path="/default-domain/" response="\{{document}}"></nuxeo-document>
```
{{/panel}}

The property `document` is now bound to the response of our `nuxeo-document`. Because the `auto` property is set, `/default-domain/`
will be retrieved automatically. We can now add some other elements to our template to display any information we find
relevant from our document. For example:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
<h2>Title: [[document.title]]</h2>
<p>ID: [[document.uid]]</p>
<p>Repository: [[document.repository]]</p>
<p>State: [[document.state]]</p>
<h3>Contributors:</h3>
<ul>
  <template is="dom-repeat" items="[[document.properties.dc:contributors]]" as="contributor">
    <li>[[contributor]]</li>
  </template>
</ul>
```
{{/panel}}

Your application should now look something like this:

![]({{file name='my-doc-reader1.png'}} ?w=600,border=true)

## Retrieve Children

We now want to display the children of our current document. The most efficient way of doing it is by using a `Page Provider`,
which enables paginated queries. **Nuxeo Elements** provide one such data element which mediates the usage of page providers.

Let's import the [nuxeo-page-provider](https://www.webcomponents.org/element/nuxeo/nuxeo-elements/elements/nuxeo-page-provider) in our element:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
import '@nuxeo/nuxeo-elements/nuxeo-page-provider.js';
```
{{/panel}}

We then declare in our template a `nuxeo-page-provider` element:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
<nuxeo-page-provider auto
                     provider="advanced_document_content"
                     params="[[_computeParams(document)]]"
                     current-page="\{{children}}">
</nuxeo-page-provider>
```
{{/panel}}

Notice that the `params` attribute needs to be computed based on our `document`. Add the
following method:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
  _computeParams(document) {
    return document ? { ecm_parentId: this.document.uid } : {};
  }
```
{{/panel}}

Now, every time our `document` is fetched, our page provider will automatically fetch the document's children, with the
result being bound to the `children` property, which is an array of documents. We can then improve our element's template
to display the children, as follows:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
<h3>Children:</h3>
<ul>
  <template is="dom-repeat" items="[[children]]" as="child">
    <li>[[child.title]]</li>
  </template>
</ul>
```
{{/panel}}

Which will make your app look like this:

![]({{file name='my-doc-reader2.png'}} ?w=600,border=true)

## Add UI Elements

Our element is now able to read document properties and children, but with a static document path, it's not very useful.

Let's install Nuxeo UI Elements through npm:

```bash
$ npm i @nuxeo/nuxeo-ui-elements
```


We must import the [nuxeo-path-suggestion](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-path-suggestion) element,
which is a UI element that allows the user to pick a valid document path and also features auto-completion:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
import '@nuxeo/nuxeo-ui-elements/nuxeo-path-suggestion/nuxeo-path-suggestion.js';
```
{{/panel}}

We must now change the `doc-path` property of our `nuxeo-document` element so that it is bound to a new property
named `targetPath`:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```xml
<nuxeo-document id="doc" auto doc-path="[[targetPath]]" response="\{{document}}"></nuxeo-document>
```
{{/panel}}

We have to update the element's prototype to declare this new property, which will hold `/default-domain/` as the default
path:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
static get properties() {
  return {
    targetPath: {
      type: String,
      value: "/default-domain/",
    },
  };
}
```
{{/panel}}

And finally, we must update the template to declare `nuxeo-path-suggestion` two-way bound to `targetPath`:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```xml
<nuxeo-path-suggestion label="document path" value="\{{targetPath}}"></nuxeo-path-suggestion>
```
{{/panel}}

From now on, as the user changes the path on the `nuxeo-path-suggestion` widget, the respective document will automatically be retrieved along with its children, which will update the interface.

Our element is now interactive and much more useful:

![]({{file name='my-doc-reader3.png'}} ?w=600,border=true)

## Revamp Children Listing

There are two elements that are perfect for listing documents: `nuxeo-data-list` and `nuxeo-data-table`. We will now use `nuxeo-data-table` to display our document's children along with their respective icons and last modified date.

Let's start by importing [nuxeo-data-table](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-data-table) into our element:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
import '@nuxeo/nuxeo-ui-elements/nuxeo-data-table/iron-data-table.js';
```
{{/panel}}

The `nuxeo-data-table` accepts templates for each of its columns as content. We can add a `nuxeo-data-table` to our
element bound to the `children` property, and define templates for three columns, one for the child's icon, another for
the title and another one for the last modified date:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```xml
<h3>Children:</h3>
<nuxeo-data-table items=[[children]]>
  <nuxeo-data-table-column name="Icon">
    <template>
      <iron-icon src="[[_thumbnail(item)]]">
    </template>
  </nuxeo-data-table-column>
  <nuxeo-data-table-column name="Title">
    <template>[[item.title]]</template>
  </nuxeo-data-table-column>
  <nuxeo-data-table-column name="Last Modified">
    <template>[[item.lastModified]]</template>
  </nuxeo-data-table-column>
</nuxeo-data-table>
```
{{/panel}}

Let's install PolymerElements Iron-Icons through npm:

```bash
$ npm i @polymer/iron-icons
```

Finally, we must add a method to our element's class to retrieve a document's thumbnail, which will be used by the
table that we've just added to the template:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
_thumbnail(doc) {
  if (doc && doc.uid) {
    var baseUrl = this.$.nxcon.url;
    return `${baseUrl}/api/v1/id/${doc.uid}/@rendition/thumbnail`;
  }
}
```
{{/panel}}

Your app should look like this now:

![]({{file name='my-doc-reader4.png'}} ?w=600,border=true)

## Upload Files

Our awesome app is now able to browse any folder and list its children. What would make it even more awesome would be
to be able to upload files to the current folder. Thanks to our UI elements, this is easy to achieve.

Let's start by importing [nuxeo-file](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-file) into our element, which is a widget
for uploading files:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
import '@nuxeo/nuxeo-ui-elements/widgets/nuxeo-file.js';
```
{{/panel}}

We can now add it to our element's template, double-bound to a property named `blob`:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
<h3>Upload files:</h3>
<nuxeo-file id="file" value="\{{blob}}"></nuxeo-file>
```
{{/panel}}

By clicking the widget and selecting a file or dropping a file into it, the respective blob will automatically be uploaded into a batch in the server, and an object representing this file will be held by the `blob` property. For the sake of simplicity, we want to automatically import this file into the server as soon as it is uploaded. Therefore, we must declare `blob` in our elements class with an observer that will take care of importing the file:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
properties: {
  ...,
  blob: {
    type: Object,
    value: null,
    observer: '_blobChanged'
  }
},
```
{{/panel}}

The `_blobChanged` method will be called whenever the `blob` changes. We want it to execute the `FileManager.Import` operation on the batch in order to import the file as a document, using the Nuxeo Platform's File Manager. As this happens, we must fetch the current document again, which triggers the page-provider to fetch the children again as well, thus updating the interface. We must define the following observer in the element's prototype:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
_blobChanged() {
  if (this.blob) {
    this.$.file.batchExecute('FileManager.Import', {
      context: {
        currentDocument: this.targetPath
      }
    }, { nx_es_sync: 'true' }).then(function () {
      this.$.doc.get();
      this.set('blob', null);
    }.bind(this));
  }
}
```
{{/panel}}

The final app should look like this:

![]({{file name='my-doc-reader5.png'}} ?w=600,border=true)

For reference, here is the final code of the `doc-reader` element:

{{#> panel type='code' heading='src/my-doc-reader.js'}}
```js
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import './shared-styles.js';
import '@nuxeo/nuxeo-elements/nuxeo-connection.js';
import '@nuxeo/nuxeo-elements/nuxeo-document.js';
import '@nuxeo/nuxeo-elements/nuxeo-page-provider.js';
import '@nuxeo/nuxeo-ui-elements/nuxeo-path-suggestion/nuxeo-path-suggestion.js';
import '@nuxeo/nuxeo-ui-elements/nuxeo-data-table/iron-data-table.js';
import '@nuxeo/nuxeo-ui-elements/widgets/nuxeo-file.js';

/**
 * `my-doc-reader`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyDocReader extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        nuxeo-data-table {
          height: 220px;
        }
      </style>

      <nuxeo-connection
        id="nxcon"
        url="http://localhost:8080/nuxeo"
        username="Administrator"
        password="Administrator"
      ></nuxeo-connection>

      <nuxeo-document
        id="doc"
        auto
        doc-path="[[targetPath]]"
        response="{{document}}"
      ></nuxeo-document>

      <nuxeo-page-provider
        auto
        provider="advanced_document_content"
        params="[[_computeParams(document)]]"
        current-page="{{children}}"
        enrichers="thumbnail, permissions"
      ></nuxeo-page-provider>

      <div class="card">
        <div class="circle">4</div>
        <h1>Doc Reader</h1>
        <h2>Title: [[document.title]]</h2>
        <p>ID: [[document.uid]]</p>
        <p>Repository: [[document.repository]]</p>
        <p>State: [[document.state]]</p>
        <h3>Contributors:</h3>
        <ul>
          <template
            is="dom-repeat"
            items="[[document.properties.dc:contributors]]"
            as="contributor"
          >
            <li>[[contributor]]</li>
          </template>
        </ul>
        <h3>Children:</h3>
        <ul>
          <template is="dom-repeat" items="[[children]]" as="child">
            <li>[[child.title]]</li>
          </template>
        </ul>
        <nuxeo-path-suggestion label="document path" value="{{targetPath}}"></nuxeo-path-suggestion>
        <h3>Children:</h3>
        <nuxeo-data-table items=[[children]]>
        <nuxeo-data-table-column name="Icon">
          <template>
          <iron-icon src="[[_thumbnail(item)]]">
          </template>
        </nuxeo-data-table-column>
        <nuxeo-data-table-column name="Title">
          <template>[[item.title]]</template>
        </nuxeo-data-table-column>
        <nuxeo-data-table-column name="Last Modified">
          <template>[[item.lastModified]]</template>
        </nuxeo-data-table-column>
        </nuxeo-data-table>
        <h3>Upload files:</h3>
        <nuxeo-file id="file" value="\{{blob}}"></nuxeo-file>
      </div>
    `;
  }
  static get properties() {
    return {
      targetPath: {
        type: String,
        value: "/default-domain/",
      },
      blob: {
        type: Object,
        value: null,
        observer: '_blobChanged'
      }
    };
  }

  _computeParams(document) {
    return document ? { ecm_parentId: this.document.uid } : {};
  }

  _thumbnail(doc) {
    if (doc && doc.uid) {
      if (doc.contextParameters && doc.contextParameters.thumbnail.url) {
        return doc.contextParameters.thumbnail.url;
      }
      const baseUrl = this.$.nxcon.url;
      return `${baseUrl}/api/v1/id/${doc.uid}/@rendition/thumbnail`;
    }
  }

  _blobChanged() {
    if (this.blob) {
      this.$.file.batchExecute('FileManager.Import', {
        context: {
          currentDocument: this.targetPath
        }
      }, { nx_es_sync: 'true' }).then(function () {
        this.$.doc.get();
        this.set('blob', null);
      }.bind(this));
    }
  }
}

window.customElements.define("my-doc-reader", MyDocReader);
```
{{/panel}}

{{#> callout type='note' heading='Building and serving'}}
For more information about how to build and serve your application, please check the [Polymer Documentation](https://polymer-library.polymer-project.org/3.0/docs/apps/prpl#build-output).
{{/callout}}
