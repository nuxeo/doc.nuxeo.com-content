---
title: Nuxeo Webcomponents
review:
    comment: ''
    date: '2016-12-13'
    status: ok
toc: true
labels:
    - content-review-lts2016
    - nuxeo-elements-component
    - nuxeo-elements
confluence:
    ajs-parent-page-id: '26316892'
    ajs-parent-page-title: Web UI
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Webcomponents
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Webcomponents'
    page_id: '316875510'
    shortlink: hYPjACo
    shortlink_source: 'https://doc.nuxeo.com/x/hYPjACo'
    source_link: /display/NXDOC/Nuxeo+Webcomponents
tree_item_index: 300
history:
    -
        author: Tiago Cardoso
        date: '2016-12-13 14:05'
        message: ''
        version: '1'
    -
        author: Vladimir Pasquier
        date: '2016-12-13 14:03'
        message: ''
        version: '1'

---
## Technology

As a platform provider, we strive to build isolated and reusable components that are simple to use and can serve as building blocks for custom business application. Thankfully we are not alone and this need has driven the W3C Web Applications Working Group to work on a specification for a component model for the Web: **Web Components**.

### Web Components

[Web Components](http://www.w3.org/TR/components-intro/) are a collection of standards which ultimately allow developers to create their own custom HTML elements. Among those standards are:

* **Custom Elements**: These custom elements can use custom tag names, attributes and events and can also expose a custom script API. Developers can even extend native HTML elements as well as other custom elements. Custom elements allow you to bring new semantics to the Web, extending the existing HTML vocabulary and promoting more meaningful structured markup and content.
* **Templates**: The content of the custom elements can be defined by templates &ndash; chunks of markup that can be attached and activated on demand. If you have used Mustache or Handlebars you should be pretty familiar with the concept of templates.
* **Shadow DOM**: Proper isolation is also a cornerstone of Web Components thanks to a new specification called Shadow DOM. It allows encapsulation and well defined boundaries within the DOM. Any HTML, CSS or JavaScript inside your custom element can be protected from the parent document allowing for more reliable composition of your user interface components.
* **Imports**: Web Components specify the packaging and loading of your custom elements as well, thanks to Imports which provide a convention for bundling your HTML, CSS and JS into a single deliverable: Polymer.

### Polymer

[Polymer](https://www.polymer-project.org/) presents itself as a new type of library for the web built on top of Web Components and designed to make it easier and faster for developers to create great, reusable components for the modern web. Its goal is to help you build your own custom elements:

![]({{file name='webcomponents_stack.png' space='nxdoc710' page='nuxeo-elements'}} ?w=350,h=226,border=true)

The **Polymer library** provides a simple declarative syntax to define **custom elements** and help you build powerful, reusable elements with less code while also including special features like:

*   Element registration
*   Lifecycle callbacks
*   Property observation
*   Local DOM template
*   Data binding

There are a number of elements built with Polymer that you can use to build your own applications and while these elements depend on the Polymer library, you are free to use them without using Polymer directly.

### Web Components vs JSF

**Similarities**

* **Reusability**: Custom elements are like JSF components: they hold their logic, their model, they can be based on custom templates and they provide data-binding. They authorize you to build advanced components with reusability in mind, which is a key point when you are building a platform.
* **Modularity**: Close to native HTML chunks, Custom Elements are compatible with templating and composition design, which is absolutely necessary for building an extensible and modular application
* **Decoupling**: Another aspect of Seam/JSF that helped us a lot with was the decoupling supported by the event/observer pattern, which allowed us to deploy new SEAM components without having to strictly reference them in other components. We can use custom events to have a similar approach with Custom Elements.
* **Databinding**: Web Components frameworks such as Polymer have added a notion very similar to the JSF EL for having advanced data-binding in attribute values, with easy references to scripts variables and methods, a bit like the way Seam component methods can be referenced from the JSF EL. This makes it very easy to wire Web Components together and provide an easy to understand pattern for implementing what you need.

**Web Components Advantages**

* **Client-Side versus Server-Side**: Web Components is a client side technology, while JSF happens server side. Aside from all the stateless/stateful design comparison that clearly goes in favor of stateless design, the necessity of having a complete tree representation of your page server-side added a lot of complexity in the JSF cycle and its framework apprehension.
* **Agnosticism**: JSF is a standard limited to the Java World while Web Components are a W3C specification.
