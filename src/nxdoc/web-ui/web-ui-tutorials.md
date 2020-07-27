---
title: Web UI Tutorials
review:
    comment: ''
    date: '2020-07-27'
    status: ok
toc: true
labels:
    - lts2017-ok
    - web-ui-customization
    - nsilva
    - tcardoso
tree_item_index: 400

---
## Introduction

Nuxeo Web UI was built with simplicity in mind. The goal was to make it easy and familiar for web developers to understand so they could learn and/or adjust it and make it their own.

In our JSF UI everything was already customizable and pluggable but it leveraged both the JSF component model and our own layout meta model server-side to allow you to override and/or make contributions to the UI.

When building our Web UI we wanted to remove the dependency on this server-side runtime metamodel and make the UI *just* a rich web client of the growing number of available Nuxeo APIs. We really wanted to keep it as simple and familiar to web developers as possible and leverage DOM as the framework and component model.

With Web Components we finally had a way to write interoperable components, so the focus during development of the Web UI was also on *composition* instead of just *pluggability*. This led to the development of [Nuxeo UI Elements]({{page page='nuxeo-elements'}}) , a set of custom visual elements that we use to build our new Web UI and which developers can leverage to build their own custom UIs. This is a new approach to UI customization where, according to each use case and the specificities of each application, developers can either build upon our default UI or opt to develop a full custom UI to better address their needs.

The goal however was still to make our default Web UI pluggable and to also allow developers to make their own UIs pluggable. This pluggability not only ensures that developers can easily customize our UI with code or with Studio but it is also essential for addons to add their contributions to the UI.

### Layout Elements

The simplest customization mechanism is based on the ability to override and/or introduce custom elements which are then dynamically loaded from a known conventional path: [layout elements]({{page page='web-ui-layouts'}}).

To override an existing element we just need to override its HTML file thus causing this new declaration to be loaded instead, similar to overriding XHTML templates in our JSF UI.
Since our UI's resources are loaded from `/nuxeo.war/ui`, developers can simply package their own version of the resources to override in their custom bundle and rely on our deployment fragment processing to unpack them.

This simple customization mechanism is however normally reserved to either layout elements like [document layouts]({{page page='web-ui-document-layouts'}}) (view, edit, create, import and metadata), which are not incremental and meant to be produced and managed through Studio to ensure maintainability, or to known application areas with an expected high degree of customization like the home [dashboard]({{page page='web-ui-dashboard'}}).

### Slots

While layout elements give us a simple customization mechanism it is not effective for finer grained pluggable layouts. Given the highly modular nature of the Nuxeo Platform we need to ensure incremental UI contributions are possible. If each addon was to override an existing element then it would be impossible to merge UI contributions from multiple addons.

In our current JSF UI, this is possible, thanks to action categories which are essentially predefined placeholders on the page where you can add new content. Contributions are done through XML and thanks to our metamodel they are all taken into account when rendering.

For the Web UI we introduced a similar placeholder concept but leveraging HTML contributions, these placeholders are known as [Nuxeo slots]({{page page='web-ui-slots'}}) and the HTML contributions are slot content. Similar concepts were introduced with the Shadow DOM v1 specification part of Web Components set of standards, insertion points and content selectors from V0 of the specifications were replaced with slots in V1. Both of these Shadow DOM revisions allow you to define placeholders in your custom elements which users can fill with their own custom markup, thus very similar in concept to what we want to achieve. The main difference relies on the fact that with standard Web Components APIs you can only contribute content to an element when you declare it, whereas in our case we’d like to be able to do so anywhere, even in a separate import which could be provided by an addon.

## Nuxeo Studio

Customization of the Web UI is possible though simple HTML and JS code but it was also built to rely on Nuxeo Studio for a seamless and fully supported development process.

Given the declarative nature of HTML, Studio is able to parse and use it as a model thus effectively merging both the meta and runtime layout model used in our JSF UI.

Studio will provide graphical tooling to help developers customize their applications while still allowing more experienced developers to take full control of the underlying HTML when needed.

Since this HTML is the single reference and definition of the UI contributions, even some handmade modifications to the code are possible without breaking the implicit layout model required by the tools.
