---
title: Polymer Guide
description: Polymer is as a simple JavaScript library that enables using and creating Web Components in modern browsers.
review:
    comment: ''
    date: '2021-01-07'
    status: ok
toc: true
labels:
    - lts2016-ok
    - lts2017-ok
    - lts2019-ok
tree_item_index: 200

---

## Why Polymer?

Polymer presents itself as a simple JavaScript library that enables using and creating Web Components in modern browsers. It leverages the browser as the platform, and offers polyfills to enable features not yet available in all browsers.

We recommend reading our blog posts [Web Components - a Great Standard for a Platform Approach](https://www.nuxeo.com/blog/web-components-a-great-standard-for-a-platform-approach/) and [Web Components - Getting started](https://www.nuxeo.com/blog/web-components-started/) which provides a good overview about Web Components and why we've decided to use Polymer.

If you're new to Polymer the best place to start is at [www.polymer-project.org](https://www.polymer-project.org/). The Polymer documentation provides some simple guides and tutorials to help you [build an element](https://polymer-library.polymer-project.org/3.0/docs/first-element/intro).

## Best Practices

"Everything is an element" being Polymer's mantra, we should think of elements as our building blocks when creating an application (and even custom elements themselves). The challenging part is to decide how to break down our application into meaningful elements.

Generally an element should be:

- Simple
- Reusable
- Composable
- Self-contained and ready to use out of the box
- Stylable and responsive

The overall idea is to spend less time writing complex JavaScript, and rely on composition to create our applications and elements in a more declarative way. The communication between those elements is generally accomplished using data binding and events.

Fortunately Polymer already provides a solid [Elements Catalog](https://www.webcomponents.org/collection/Polymer/elements) that follows these general rules and also addresses the most common patterns used in web development with Web Components. The source code of these elements is available on [GitHub](https://github.com/PolymerElements) and is well documented, making this one of the best resources to learn how to use Polymer.

When developing applications with lots of elements and/or involving complex data flows, data binding can become a nightmare very quickly (especially when using two-way binding). There's a nice pattern that we recommend which is well described in this [book sample](http://patternsinpolymer.com/patterns_in_polymer_child_parent_sample_js.pdf).

> "Data rains down from parent to child via attribute binding. Data then evaporates back up in the form of events. And just as in real life, something is very wrong if this cycle is reversed."

In summary, as a rule of thumb, an element should communicate (pass data) to children elements using one-way binding through properties, and the other way around child elements should fire events that parent elements can listen to.

Once you become more familiar with Polymer we strongly recommend reading our [blog](https://www.nuxeo.com/blog/). It provides useful information, code samples, and insights through the journey of migrating our UI from server side to client side. Some examples that might be useful:

 - [Making Friendly Polymer Apps](https://www.nuxeo.com/blog/making-friendly-polymer-apps/)
 - [Build a Workflow Based Application with Polymer](https://www.nuxeo.com/blog/build-a-workflow-based-application-with-polymer/)
 - [Nuxeo UX Labs: From UI Design to Web App Development](https://www.nuxeo.com/blog/nuxeo-ux-labs-from-design-to-web-app-development/)
 - [Polymer Questions: To Bind, or Not to Bind](https://www.nuxeo.com/blog/polymer-questions-to-bind-or-not-to-bind/)
 - [Decoupled Global Localization with Polymer](https://www.nuxeo.com/blog/decoupled-global-localization-with-polymer/)
 - [Reverse Routing in Polymer Apps](https://www.nuxeo.com/blog/reverse-routing-in-polymer-apps/)
 - [Pluggable Polymer Applications](https://www.nuxeo.com/blog/pluggable-polymer-applications/)

## Other Useful Resources

 - [Polycasts](https://www.youtube.com/playlist?list=PLOU2XLYxmsII5c3Mgw6fNYCzaWrsM3sMN)
  "Learn about the basic building blocks that make up a Polymer application, and see how to compose those elements into buttery smooth mobile experiences. The future of front end development is all here, on the Polycasts playlist!"
 - [Web Component Tester](https://github.com/Polymer/web-component-tester)
 "Makes testing your web components a breeze!"
 - [Polymer Projects](https://github.com/abdonrd/PolymerProjects)
 "List of projects made with Polymer"
