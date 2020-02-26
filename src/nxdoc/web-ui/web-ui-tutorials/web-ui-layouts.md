---
title: Web UI Layout Elements
review:
    comment: ''
    date: '2017-12-15'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - nuxeo-elements
    - nsilva
    - nuxeo-ui-elements
    - extension
    - layouts
    - lts2017-ok
tree_item_index: 100

---

With Web Components, application builders can leverage the browser as a platform for building truly componentized applications with a standard, familiar and well understood component model. Developers can break their applications into reusable custom elements that interoperate seamlessly with the browser’s built-in elements, making their applications cleaner and less expensive to maintain.

Polymer, as a library, truly embraces this componentization. When building Polymer-based applications, everything is an element; from routing to application layout, everything is declarative and built with custom elements.

When building Nuxeo Web UI it was our goal to follow the same principles and leverage the declarative nature of HTML and the possibility of extending its vocabulary to replace our XML-based UI metamodel with HTML, thus effectively shifting from layout definitions to custom layout elements.

Nuxeo Web UI was designed with composition in mind, built with some application-specific custom elements alongside Nuxeo UI Elements. It was built not only to showcase how easy it is to build a fully customized UI but also to provide a highly customizable default UI right out of the box by allowing developers to override and/or introduce their own custom elements.

## Dynamic Imports

The ability to load custom elements dynamically provides a simple customization mechanism where elements are loaded from known conventional paths on demand. While this approach isn't appropriate for producing incremental layouts, it is simple and effective for use cases such as document layouts, where the underlying HTML can be managed by tools like our **Studio Designer**, or where we expect a high degree of customization like in the home [dashboard]({{page page='dashboard'}}).

Since Nuxeo Web UI is basically a web client of our APIs and built as a single-page web application it consists mostly of static resources hosted by our container and loaded from `/nuxeo.war/ui`. This means that developers should be able to simply override these resources in order to customize the application. To override an existing element we just need to override its HTML file, causing this new declaration to be loaded instead, similar to overriding XHTML templates in our JSF UI - for further information on deploying custom resources please refer to our [deployment]({{page page='web-ui-deployment'}}) page.

{{#> callout type='info' }}

During the build process, our Web UI goes through a vulcanization step, which is basically a concatenation of multiple HTML, JS and CSS resources to minimize network requests. Therefore, not all elements are available to be overridden.

{{/callout}}

On-demand imports are a pattern usually adopted by Polymer applications to lazily load fragments of an application - parts that are not required for first paint, thus reducing its size and time to render, and Polymer provides a helper function out of the box to dynamically load elements called `importHref`.

In the case of Nuxeo Web UI, we leverage on-demand dynamic imports not only to lazily load fragments of our application but also as a simple convention-based customization solution for:

- [Document Layouts]({{page page='web-ui-document-layouts'}}).
- [Search Forms]({{page page='web-ui-search'}}).
- [Workflow Tasks Layouts]({{page page='web-ui-workflow-tasks'}}).
- [Dashboard]({{page page='web-ui-dashboard'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Display a Field With Currency Format](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/currency)
- [Barcode Widget](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/barcode-widget)
- [QR Code](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/qr-code)
- [Progress Bar](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/progress-bar)
- [Custom Nuxeo Suggestion Display](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/document-suggestion-result-formatters)
- [Collapsible Element](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/collapse)
- [Inline Card Property Edition](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/toggleable-form)
- [Show/Hide the Value of a Secret Field](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/ssn)
- [Display Document Relations](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/related-documents)

{{/panel}}</div><div class="column medium-6">
</div></div>
