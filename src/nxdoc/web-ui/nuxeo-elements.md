---
title: Nuxeo Elements
toc: true
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
The Nuxeo Web UI Framework allows users to build&nbsp;business applications while keeping the UI simple and pluggable. It relies on Java Server Faces (JSF) and Facelets to provide a [declarative component based UI Framework]({{page page='web-ui-framework'}}).

**Nuxeo Elements** is an ongoing work to build upon the same goals of simplicity and pluggability and leverage emerging Web standards to take our component-based UI framework to the client&nbsp;with DOM as the &ldquo;framework&rdquo; and HTML as its familiar declarative syntax.

## Technology

As a platform provider, we strive to build&nbsp;isolated and&nbsp;reusable components&nbsp;that are&nbsp;simple to use and can serve as building blocks for custom business application. Thankfully we are not alone and this need has driven the W3C Web Applications Working Group to work on a specification for a component model for the Web: **Web Components**.

### Web Components

[Web Components](http://www.w3.org/TR/components-intro/) are a collection of standards which ultimately allow developers to create their own custom HTML elements. Among those standards are:

*   **Custom Elements**: These custom elements can use custom tag names, attributes and events and can also expose a custom script API. Developers can even extend native HTML elements as well as other custom elements. Custom elements allow you to bring new semantics to the Web, extending the existing HTML vocabulary and promoting more meaningful structured markup and content.

*   **Templates**: The content of the custom elements can be defined by templates &ndash; chunks of markup that can be attached and activated on demand. If you have used Mustache or Handlebars you should be pretty familiar with the concept of templates.

*   **Shadow DOM**: Proper isolation is also a cornerstone of Web Components thanks to a new specification called Shadow DOM. It allows encapsulation and well defined boundaries within the DOM. Any HTML, CSS or JavaScript inside your custom element can be protected from the parent document allowing for more reliable composition of your user interface components.
*   **Imports**: Web Components specify the packaging and loading of your custom elements as well, thanks to Imports which provide a convention for bundling your HTML, CSS and JS into a single deliverable: Polymer.

### Polymer

[Polymer](https://www.polymer-project.org/) presents itself as a new type of library for the web built on top of Web Components and&nbsp;designed to make it easier and faster for developers to create great, reusable components for the modern web.&nbsp;Its goal is to help you build your own custom elements:

![]({{file name='webcomponents_stack.png' space='nxdoc710' page='nuxeo-elements'}} ?w=350,h=226,border=true)

The **Polymer library** provides a simple declarative syntax to define **custom elements** and help you build powerful, reusable elements with less code while also including special&nbsp;features like:

*   Element registration

*   Life cycle callbacks

*   Property observation

*   Local DOM template
*   Data binding

There are a number of elements built with Polymer that you can use to build your own applications and while these elements depend on the Polymer library, you are free to use them without using Polymer directly.

## Nuxeo Elements

GitHub project:&nbsp;[https://github.com/nuxeo/nuxeo-elements](https://github.com/nuxeo/nuxeo-elements)

Online reference documentation:&nbsp;[http://nuxeo.github.io/nuxeo-elements](http://nuxeo.github.io/nuxeo-elements)

### Data Elements

Polymer pushes for a very declarative approach to building web applications with a&nbsp;&ldquo;Everything is an element&rdquo; philosophy. This includes both visual and non-visual/data elements, so even non UI elements&nbsp;can take advantage of data binding in a declarative way making for a very concise and clean code.

Our set of Nuxeo elements was built with this same philosophy in mind and promotes a clear separation between data and UI elements thus allowing users to use any of the existing UI elements while still relying on our data elements to "bind" these to Nuxeo.

In order to connect these elements to data in a Nuxeo instance we need to setup a connection, which, like everything else in Polymer, is an element called **nuxeo-connection**. Usage is as simple as:

```xml
<nuxeo-connection url=”http://demo.nuxeo.com/nuxeo” username=”Administrator” password=”Administrator”>
```

This elements uses a &ldquo;conceptual singleton&rdquo; (MonoState Pattern) so&nbsp;once it's configured on our application with the proper attributes all the other elements just need to use `<nuxeo-connection/>` to retrieve this "shared" instance. Since this is a singleton we ensure there&rsquo;s only one Nuxeo client shared by all the instances of our element.

As mentioned before, in Polymer, non visual elements are the standard way to expose remote services. So we built a set of custom Nuxeo data elements to interact with Nuxeo&rsquo;s APIs:

<table><tbody><tr><th colspan="1">Tag</th><th colspan="1">Description</th><th colspan="1">Example</th></tr><tr><td colspan="1">

nuxeo-connection

</td><td colspan="1">

Allows configuring the connection to a Nuxeo server.

</td><td colspan="1">

```xml
<nuxeo-connection
  url=”http://demo.nuxeo.com/nuxeo”
  username=”Administrator”
  password=”Administrator”>
</nuxeo-connection>
```

</td></tr><tr><td colspan="1">

nuxeo-resource

</td><td colspan="1">

Exposes methods (get, post, put, delete) of a Nuxeo REST API resource at a given path.

</td><td colspan="1">

```xml
<nuxeo-resource
  path=”/path/default-domain”>
</nuxeo-resource>
```

</td></tr><tr><td colspan="1">

nuxeo-document

</td><td colspan="1">

Extends `nuxeo-resource` to target Document resources by path or by uid.

</td><td colspan="1">

```xml
<nuxeo-document
  doc-path="/default-domain">
</nuxeo-document>
```

</td></tr><tr><td colspan="1">

nuxeo-operation

</td><td colspan="1">

Allows calling an operation on a Nuxeo server.

</td><td colspan="1">

```xml
<nuxeo-operation
  op="Document.Query"
  params="{'query': 'select from Document'}">
</nuxeo-operation>
```

</td></tr><tr><td colspan="1">

nuxeo-page-provider

</td><td colspan="1">

Wraps a `Repository.PageProvider` operation to provide paginated results for a given query.

</td><td colspan="1">

```xml
<nuxeo-page-provider
  query="select from Document" 
  page-size="5"
  sort="dc:modified">
</nuxeo-page-provider>
```

</td></tr></tbody></table>

**Note:**&nbsp;Most data elements support an `auto` attribute which, when set, automatically calls the GET method whenever the element properties change.

### Web Components vs JSF

**Similarities&nbsp;**

*   **Reusability**: Custom elements are like JSF components: they hold their logic, their model, they can be based on custom templates and they provide data-binding. They authorize you to build advanced components with reusability in mind, which is a key point when you are building a platform.
*   **Modularity**:&nbsp;Close to native HTML chunks, Custom Elements are compatible with templating and composition design, which is absolutely necessary for building an extensible and modular application
*   **Decoupling**:&nbsp;Another aspect of Seam/JSF&nbsp;that helped us a lot with was the decoupling supported by the event/observer pattern, which allowed us to deploy new SEAM components without having to strictly reference them in other components. We can use custom events to have a similar approach with Custom Elements.

*   **Databinding**: Web Components frameworks such as Polymer have added a notion very similar to the JSF EL for having advanced data-binding in attribute values, with easy references to scripts variables and methods, a bit like the way Seam component methods can be referenced from the JSF EL. This makes it very easy to wire Web Components together and provide an easy to understand pattern for implementing what you need.

**Web Components Advantages**

*   **Client-Side versus Server-Side**: Web Components is a client side technology, while JSF happens server side. Aside from all the stateless/stateful design comparison that clearly goes in favor of stateless design, the necessity of having a complete tree representation of your page server-side added a lot of complexity in the JSF cycle and its framework apprehension.
*   **Agnosticism**: JSF is a standard limited to the Java World while Web Components are a W3C specification.

&nbsp;