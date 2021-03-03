---
title: From JSF to AngularJS - a UI Rewrite Story
description: Blog posts to discover how to go from JSF to AngularJS
review:
    comment: ''
    date: ''
    status: ok
tree_item_index: 300
toc: true
---
Recently, I had the opportunity to be involved in a project with one of Nuxeo’s Fortune 500 customers. They had customized the JSF-based UI to create a simple file browser for the Nuxeo Platform, but they weren’t completely happy with it.

They wanted the application to be less reliant on the server and wanted to integrate some modern HTML5/JS widgets. A team was put together that included both the client and Nuxeo to redevelop the File Browser application to use an HTML5 framework.

This is the story of how and why we chose AngularJS and how the application turned out.

## UI Frameworks in the Nuxeo Platform

To give you some background, the Nuxeo Platform currently uses two UI Frameworks. The back office UI is currently built on a JSF and RichFaces UI framework. The configuration tool UI is based on the Google Web Toolkit (GWT).

These are not the only UI frameworks you can use with the Nuxeo Platform. Connectors have been created for Flex, Open Social and Eclipse RCP. In addition, some customer projects are also based on JavaScript frameworks such as Ext.js, Vaadin and AngularJS.

## From Server Side to Client Side, an Alternative to JSF

![]({{file space='main' page='blog' name='angular-logo.png'}})

JSF is not inherently a bad framework, it’s very configurable, stable and well structured. But it is an older UI framework and it does have its limitations. The biggest issue with the JSF framework is that it’s a server-side framework.

This means that everything to build the UI is done on the server and streamed back to the application, which create a much higher network load. It also means that the state is managed on the server as well, which uses a lot of server memory and make it more challenging to scale the application.

In addition to these server-side challenges, mixing stateless and stateful approaches to integrate newer UI technologies, such as HTML5 and JS components, is a bit complex.

## New UI Framework Requirements

The client wanted to move away from JSF and the server-side issues that came with it. They wanted a UI framework that was modern and leveraged some of the new technologies available today.

Specifically, they were looking for a UI framework that was a single page application - similar to Facebook and other modern web apps. They also wanted to perform the logic and processing on the client-side, delivering only the model data from the server. They wanted a stateless REST-based architecture, something that would be able to easily integrate new HTML5 and JS widgets into their application.

The process for selecting the new UI framework saw our team look at two options:
1. **Google Web ToolKit** - We knew it already, so it made sense to consider using it going forward. However, GWT is not REST oriented, it’s RPC-oriented. It’s also harder to integrate because it hides the document object model (DOM). Finally, integrating the newer HTML5/JS widgets was not going to be easy.
2. **A pure HTML5/Javascript Framework** - Our next option was a pure HTML5/Javascript framework, of which there are many available - Backbone.js, Ember.js, React.js, Angular.js, maybe Polymer.

The options were wide open, but the decision seemed easy to make - it would be AngularJS.

## For the Love of AngularJS
So why did we select AngularJS for its new UI framework?

AngularJS is an open source application framework also created by Google. It’s based on the single page application model using HTML, CSS and JavaScript on the client-side.

First, it’s a very stable framework - the ecosystem is strong and the tools that help you create an application from scratch are great. AngularJS uses the MVC (model-view-controller) model offering good separation between presentation, data and processing. In addition, the Angular directive is a great encapsulation pattern, and it’s stable, but it’s growing at the same time.

The original JSF-based presentation of the File browser was pretty plain. To rebuild it using AngularJS, we used the following components:

- Nuxeo module (REST API &amp; JS client)
- angular-touch: The mechanics for responsive design for mobile devices.
- angular-ya-treeview: This replaced the existing treeview component with a dynamic one. A few modifications were done to this one, but it was mostly used as is.
- angular-ui: This included the integration of bootstrap inside angular to make it easier to build the presentation interface.

## The Change to AngularJS Wasn’t All Sunshine and Roses

While the decision to move to AngularJS was the right one, it didn’t come without some complications.

Most of our team came from the Java world, so the switch to JavaScript development, took some adjustment. One of the challenges was that continuous integration isn’t done the same way in Javascript as it is in Java (in Java we use Maven and Jenkins, but in JavaScript it is Bower and Grunt). Continuous integration, which is one of the big selling points for the Nuxeo Platform, is the practice of merging developer working copies into a main line (or trunk) several times a day. This practice is done to help find integration issues as quickly as possible. In this case, we wanted a system for both Java and AngularJS that could be called from Java.

The modularity management was also a bit complicated, as was the maintainability of the JavaScript. With our Java background, we are used to having a compiler and other tools (like checkstyle) to enforce rules, but Javascript has more freedom. The modularity management challenge is also due to our use of Maven in Java and Bower in JavaScript.

With AngularJS, we could have made a number of calls to the server to get the right data. To simplify development for this project, we minimized the number of REST calls (based on the “page”).

## The Benefits of AngularJS

The team made it through the complications and came out with a great modern, responsive UI. It’s much more responsive to user actions and it adapts to different devices automatically, making development for different devices and channels much simpler.

With a much lighter CPU footprint and the REST binding, the application is much more flexible and scalable, allowing new nodes to be quickly added to handle increased loads.

That’s the story of how one customer moved from a JSF UI framework to an AngularJS one. You can use AngularJS to build your own custom apps today too, so [download the platform and try it out](https://www.nuxeo.com/downloads/)

* * *

**About Nuxeo**

Nuxeo, developer of the leading Content Services Platform, is reinventing [enterprise content management](https://www.nuxeo.com/products/enterprise-content-management/?utm_source&#61;2019%20Forrester%20ECM%20CP%20Wave&amp;utm_medium&#61;press%20release&amp;utm_campaign&#61;2019%20Forrester%20ECM%20CP%20Wave) (ECM) and [digital asset management](https://www.nuxeo.com/solutions/dam-digital-asset-management/?utm_source=2019%20Forrester%20ECM%20CP%20Wave&utm_medium=press%20release&utm_campaign=2019%20Forrester%20ECM%20CP%20Wave) (DAM). Nuxeo makes it easy to build smart content applications that enhance customer experiences, improve decision making, and accelerate products to market.

Its cloud-native, low-code platform has been deployed by large enterprises worldwide. Customers like Electronic Arts, TBWA, ABN AMRO, and CVS have used Nuxeo's technology to transform the way they do business. Founded in 2000, the company is based in New York with offices across the United States, Europe, and Asia. Learn more at [www.nuxeo.com](https://www.nuxeo.com/?utm_source&#61;2019%20Forrester%20ECM%20CP%20Wave&amp;utm_medium&#61;press%20release&amp;utm_campaign&#61;2019%20Forrester%20ECM%20CP%20Wave).
