---
title: Nuxeo Elements
review:
    comment: ''
    date: '2017-01-03'
    status: ok
toc: true
labels:
    - lts2016-ok
    - nuxeo-elements
    - nuxeo-ui-elements
    - nuxeo-dataviz-elements
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
tree_item_index: 200
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
of simplicity and pluggability. Although still work in progress, Nuxeo Elements already provide the means to build custom
content-centric front-end applications, while taking full advantage of the technologies under the Web Components umbrella.
The main advantage of this framework-agnostic approach is that these technologies are part of the browser, thus allowing
DOM to be the "framework" and HTML to define the syntax. Therefore, there's no need for external frameworks for it to work,
although it should integrate with most frameworks without major problems. Sure, not all browsers fully support the Web Components
spec **yet**, but there are polyfills to help in the meantime.

Polymer pushes for a very declarative approach to building web applications with a "Everything is an element" philosophy.
This includes both visual and non-visual/data elements, so even non UI elements can take advantage of data binding in a
declarative way, making for a very concise and clean code.

Nuxeo Elements was built with this same philosophy in mind and promotes a clear separation between data and UI elements,
thus allowing users to use any of the existing UI elements while still relying on our data elements to "bind" these to Nuxeo.

Data elements rely on [Nuxeo JavaScript Client]({{page page='javascript-client'}}) to retrieve and manipulate information
from a Nuxeo platform instance via [REST API]({{page page='rest-api'}}), while UI elements are responsible for displaying
data to the users. These data and UI elements can be combined to create more complex elements.

One of the most relevant data elements is `nuxeo-connection`, which setups a connection to a Nuxeo instance and encapsulates
the access to the [JavaScript Client]({{page page='javascript-client'}}). Usage is as simple as:

```xml
<nuxeo-connection url="http://demo.nuxeo.com/nuxeo" username="Administrator" password="Administrator">
```

This element uses a "conceptual singleton" (MonoState Pattern) so once it's configured on our application with the proper
attributes, all the other elements just need to use `<nuxeo-connection/>` to retrieve this "shared" instance. Since this
is a singleton, we ensure there's only one Nuxeo client shared by all the instances of our element.

There are three libraries covered by the Nuxeo Elements family, which can be explored in the [Nuxeo Elements Catalog](https://elements.nuxeo.com/).
These are:

- [Nuxeo (Core) Elements](https://elements.nuxeo.com/browse?package=nuxeo-elements) ([github](https://github.com/nuxeo/nuxeo-elements)):
  a library of core data elements that allows connecting to the server and enables CRUD on Nuxeo resources and the execution
  of operations and queries using page providers. You can install it with bower:

  `bower install --save nuxeo/nuxeo-elements`

- [Nuxeo UI Elements](https://elements.nuxeo.com/browse?package=nuxeo-ui-elements) ([github](https://github.com/nuxeo/nuxeo-ui-elements)):
  provides elements for displaying data and interacting with the user. It can be installed with bower:

  `bower install --save nuxeo/nuxeo-ui-elements`

- [Nuxeo Dataviz Elements](https://elements.nuxeo.com/browse?package=nuxeo-dataviz-elements) ([github](https://github.com/nuxeo/nuxeo-dataviz-elements)):
  a library of data visualization elements targeted at building rich dashboards. It can be installed with bower:

  `bower install --save nuxeo/nuxeo-dataviz-elements`

Nuxeo Elements' development is supported by several tools and strategies, to keep quality, performance and security in check.
Please see the [Quality Assurance page]({{page page='quality-assurance'}}) for more information on this subject, and
also our [Custom App Tutorial]({{page page='tutorial-custom-app'}}) for a quick introduction to development with Nuxeo Elements.
