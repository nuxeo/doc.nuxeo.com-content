---
title: Layout elements
review:
    comment: ''
    date: '2016-12-26'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - extension
    - layouts
tree_item_index: 100

---

With Web components application builders can leverage the browser as a platform for building truly componentized applications with a standard, familiar and well understood component model.
Developers can break their applications into reusable custom elements that interoperate seamlessly with the browser’s built-in elements, making their applications cleaner and less expensive to maintain.

Polymer as a library truly embraces this componentization and when building Polymer based applications everything is an element, from routing to application layout, everything is declarative and built with custom elements.

When building Nuxeo Web UI it was our goal to follow the same principles and leverage the declarative nature of HTML and the possibility of extending its vocabulary to replace our XML based UI metamodel with HTML, thus effectively shifting from layout definitions to custom layout elements.

## Layout elements

Nuxeo Web UI was designed with composition in mind, built with some application specific custom elements alongside Nuxeo UI Elements. It was built not only to showcase how easy it is to build a full custom UI but also to provide a highly customizable default UI right out of the box by allowing developers to override and/or introduce their own custom elements.

The ability to load custom elements dynamically provides a simple customization mechanism where elements are loaded from known conventional paths on demand. While this approach isn't appropriate for producing incremental layouts it is simple and effective for use cases such as document layouts, where the underlying HTML can be managed by tools like our `View Designer`, or where we expect a high degree of customization like in the home [dashboard]({{page page='dashboard'}}).

Since Nuxeo Web UI is basically a web client of our APIs and built as single page web application it consists mostly of static resources hosted by our container and loaded from `/nuxeo.war/ui`. This means that developers should be able to simply override these resources in order to customize the application. To override an existing element we just need to override its HTML file thus causing this new declaration to be loaded instead, similar to overriding XHTML templates in our JSF UI - for further information on deploying custom resources please refer to our [deployment]({{page page='web-ui-deployment'}}) page.

{{#> callout type='info' }}

Since during the build process our Web UI goes through a vulcanization step, which is basically a concatenation of multiple HTML, JS and CSS resources to minimize network requests, not all elements are available to be overridden.

{{/callout}}

On demand imports are a pattern usually adopted by Polymer applications to lazily load fragments of an application - parts that are not required for first paint, thus reducing its size and time to render, and Polymer provides a helper function out of the box to dynamically load elements called `importHref`.

In the case of Nuxeo Web UI we leverage on demand dynamic imports not only to lazy load fragments of our application but also as a simple convention based customization solution.

### Document layouts

Layouts are used to display a document's metadata in different use cases, it is basically a group of widgets and specifies how these widgets are assembled and displayed.
A given document type can have multiple layouts: a `create` and `edit` layout to set its schema fields when creating or editing the document, a `view` layout to simply display field values and any other layouts according to the application(s) where these are used. In our previous metamodel driven UI these were known as `modes` and a single layout definition could be rendered in different modes. In Nuxeo Web UI these different layout / mode combinations have been materialized into individual elements meaning each layout element is bound to a given document type and built for a specific use case. This enables developers to leverage any custom elements they see fit when building their layouts with explicit binding between fields and elements properties - thus doing without the mode handling widget abstraction.

By simply following a convention that maps a document type to a set of pre defined element names, according to the different use cases (modes), our application can dynamically load and instantiate the appropriate element for a given document.

Regions of the UI which require customizable document layouts rely on custom container elements to handle the loading and instantiation of the appropriate layout elements for the given use case, for instance the default document page has two customizable regions by default:

![]({{file name='document_page_1.png'}} ?w=400,border=true)

1. the `view`layout which usually displays an inline preview of the document and
2. the `metadata` layout which displays the document's metadata


Each of these regions is defined by a generic layout container element which will import and render the specific layout element for the given document type, in this case `nuxeo-document-view` will rely on `nuxeo-<doctype>-view-layout`and `nuxeo-document-metadata` will use `nuxeo-<doctype>-metadata-layout`, where `<doctype>` is the lower cased document type (i.e. *folder*, *note*, *picture*, etc.).

These specific document layout elements are loaded by convention from a `/nuxeo.war/ui/document/<doctype>` folder and the element naming convention adopted is `nuxeo-<doctype>-<mode>-layout.html` where `mode` describes the use case and matches the layout name (i.e. *create*, *view* , *edit*, *import*, etc):

```
$NUXEO_SERVER/nxserver/nuxeo.war/ui% tree
.
└──── document
  ├─── <doctype>
  |  ├── nuxeo-<doctype>-<layout>-layout.html
  │  └── ...
  └── ...
```
The following table lists layout elements used by Nuxeo Web UI:

| Element                      | Layout                             |                                                                  |
|:-----------------------------|:-----------------------------------|:-----------------------------------------------------------------|
| 1. nuxeo-document-view       | nuxeo-<doctype>-view-layout        | ![]({{file name='document_page_1.png'}} ?w=100,border=true)      |
| 2. nuxeo-document-metadata   | nuxeo-<doctype>-metadata-layout    | ![]({{file name='document_page_1.png'}} ?w=100,border=true)      |
| 3. nuxeo-document-edit       | nuxeo-<doctype>-edit-layout        | ![]({{file name='document_page_2.png'}} ?w=100,border=true)      |
| 4. nuxeo-document-create     | nuxeo-<doctype>-create-layout      | ![]({{file name='document_create.png'}} ?w=100,border=true)      |
| 5. nuxeo-document-import     | nuxeo-<doctype>-import-layout      | ![]({{file name='document_import.png'}} ?w=100,border=true)      |

{{#> callout type='warning' }}

Nuxeo Web UI relies on the existence of these document layout elements so, for each registered document type, the application will attempt to load its specific layouts. Since there is no layout registry there is no fallback.

{{/callout}}

When instantiating and stamping these layout elements a `document` property will be set to the current document and the layout is expected to update accordingly. The importing and stamping of these elements, executed by container, is simply:

```
this.importHref(this.resolveUrl(layout + '.html'), function() {
  // create the element
  var el = document.createElement(layout);
  // append it to the parent
  this.appendChild(el);
  // setup data binding
  el.document = this.document;
},
```
By building these elements with Polymer developers can simply declare this `document` property and rely on native data binding support to bind document fields to the the template.

Since these document layouts are regular custom elements developers have no limitations whatsoever in terms of HTML template, CSS styling or JS logics and are free to leverage any third party libraries or elements when building their own.

{{#> callout type='warning' }}

Nuxeo Web UI is vulcanized for production meaning that shared dependencies are already bundled and loaded in the application and should not be imported again in dynamically loaded elements.
If your elements have other unshared static dependencies then these should be deployed as well.

{{/callout}}

Layouts created and managed by Nuxeo Studio however will rely on introspection of the HTML and JS in order to provide validation and tooling support and will include some extra metadata, in the form of HTML attributes and/or JSDoc annotations.

The following is a sample definition of what an `edit` layout element for a `MyDoc` document type would look like, including Nuxeo Studio generated metadata:

```
<dom-module id="nuxeo-mydoc-edit-layout">
  <template>
    <!-- Custom CSS -->
    <style>
      *[role=widget] {
        padding: 5px;
      }
    </style>

    <!-- A paper-input widget bound to 'dc:title' -->
    <paper-input role="widget" value="\{{document.properties.dc:title}}" label="Title"></paper-input>

    <!-- An input of type date bound to 'my:date' -->
    <div role="widget" class="item">
      <label>My date</label>
      <input type="date" value="[[document.properties.my:date]]">
    </div>

    <!-- Any HTML -->
    <img src="assets/imgs/logo.png">

  </template>

  <script>
    Polymer({
      is: 'nuxeo-mydoc-edit-layout',
      properties: {
        /**
         * You can use either @schema or @doctype annotation in your model
         * Used to provide validation and auto completion of document properties.
         * @doctype MyDoc
         */
        document: {
          type: Object
        }
      }
    });
  </script>
</dom-module>
```
