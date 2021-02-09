---
title: Nuxeo Elements
description: Nuxeo Elements is a set of libraries of web components leveraging emerging Web standards, built upon the same goals of simplicity and pluggability.
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - lts2016-ok
    - nuxeo-elements
    - nsilva
    - nuxeo-ui-elements
    - nuxeo-dataviz-elements
    - lts2017-ok
confluence:
    ajs-parent-page-id: '26316892'
    ajs-parent-page-title: Web UI
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Elements
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Elements'
    page_id: '31687557'
    shortlink: hYPjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hYPjAQ'
    source_link: /display/NXDOC/Nuxeo+Elements
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-07-25 14:05'
        message: ''
        version: '2'
    -
        author: Manon Lumeau
        date: '2016-07-25 14:03'
        message: ''
        version: '1'

---
**Nuxeo Elements** is a set of libraries of web components leveraging emerging Web standards, built upon the same goals
of simplicity and pluggability. Nuxeo Elements provides the means to build custom content-centric front-end applications, while taking full advantage of the technologies under the Web Components umbrella.
The main advantage of this framework-agnostic approach is that these technologies are part of the browser, thus allowing
DOM to be the "framework" and HTML to define the syntax. Therefore, there's no need for external frameworks for it to work,
although it should integrate with most frameworks with little effort.

{{#> callout type='info'}}
Watch the related courses on Nuxeo University
- [Introduction to Nuxeo Elements](https://university.nuxeo.com/learn/public/course/view/elearning/79/introduction-to-nuxeo-elements)
- [Expert Session on Nuxeo Elements Creation](https://university.nuxeo.com/learn/public/course/view/elearning/148/expert-session-creating-nuxeo-elements-with-studio-designer)
![]({{file name='university-nuxeo-elements.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

Polymer pushes for a very declarative approach to building web applications with the "everything is an element" philosophy.
This includes both visual and non-visual/data elements, so even non-UI elements can take advantage of data binding in a
declarative way, making for very concise and clean code.

Nuxeo Elements was built with this same philosophy in mind and promotes a clear separation between data and UI elements,
thus allowing developers to use any of the existing UI elements while still relying on our data elements to "bind" these to Nuxeo.

Data elements rely on [Nuxeo JavaScript Client]({{page page='javascript-client'}}) to retrieve and manipulate information
from a Nuxeo platform instance via [REST API]({{page page='rest-api'}}), while UI elements are responsible for displaying
data to the users. These data and UI elements can be combined to create more complex elements.

One of the most relevant data elements is `nuxeo-connection`, which sets up a connection to a Nuxeo instance and encapsulates
the access to the [JavaScript Client]({{page page='javascript-client'}}). Usage is as simple as:

```xml
<nuxeo-connection url="http://demo.nuxeo.com/nuxeo" username="Administrator" password="Administrator">
```

This element uses a "conceptual singleton" (MonoState Pattern) so once it's configured on our application with the proper
attributes, all the other elements just need to use `<nuxeo-connection/>` to retrieve this "shared" instance. Since this
is a singleton, we ensure there's only one Nuxeo client shared by all the instances of our element.

There are three libraries covered by the Nuxeo Elements family, which can be explored in the [Nuxeo Elements Catalog](https://www.webcomponents.org/author/nuxeo).
These are:

- [Nuxeo (Core) Elements](https://www.webcomponents.org/element/nuxeo/nuxeo-elements) ([GitHub](https://github.com/nuxeo/nuxeo-elements/tree/maintenance-3.0.x)):
  A library of core data elements that allows connecting to the server and enables CRUD on Nuxeo resources and the execution
  of operations and queries using page providers. You can install it with npm:
  ```
  $ npm i @nuxeo/nuxeo-elements
  ```
- [Nuxeo UI Elements](https://www.webcomponents.org/element/@nuxeo/nuxeo-ui-elements) ([GitHub](https://github.com/nuxeo/nuxeo-elements/tree/maintenance-3.0.x/ui)):
  Provides elements for displaying data and interacting with the user. It can be installed with npm:
  ```
  $ npm i @nuxeo/nuxeo-ui-elements
  ```
  {{#> callout type='info' heading='Nuxeo Elements is now a monorepo'}}
    Since version 3.0.0, Nuxeo Elements was converted into a monorepo. The UI repository was moved into its folder with the same name.
  {{/callout}}
- {{> anchor 'nuxeo-dataviz-elements'}}[Nuxeo Dataviz Elements](https://www.webcomponents.org/element/@nuxeo/nuxeo-dataviz-elements) ([github](https://github.com/nuxeo/nuxeo-elements/tree/maintenance-3.0.x/dataviz)):
  A library of data visualization elements targeted at building rich dashboards. It can be installed with npm:
  ```
  $ npm i @nuxeo/nuxeo-dataviz-elements
  ```
  
When developing using Nuxeo Elements, make sure to set up your development environment according to the requirements described in the [Nuxeo Elements repository](https://github.com/nuxeo/nuxeo-elements/blob/master/README.md#dependencies).

Nuxeo Elements' development is supported by several tools and strategies, to keep quality, performance and security in check.
Please see the [Quality Assurance page]({{page page='quality-assurance'}}) for more information on this subject, and
also our [Custom App Tutorial]({{page page='nuxeo-elements-tutorial'}}) for a quick introduction to development with Nuxeo Elements.
