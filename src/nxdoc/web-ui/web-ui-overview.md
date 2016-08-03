---
title: Web UI Overview
toc: true
confluence:
    ajs-parent-page-id: '26316892'
    ajs-parent-page-title: Web UI
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Web+UI+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Web+UI+Overview'
    page_id: '31687534'
    shortlink: boPjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/boPjAQ'
    source_link: /display/NXDOC/Web+UI+Overview
history:
    - 
        author: Solen Guitter
        date: '2016-08-01 08:31'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2016-08-01 08:31'
        message: ''
        version: '20'
    - 
        author: Nelson Silva
        date: '2016-07-29 12:00'
        message: ''
        version: '19'
    - 
        author: Nelson Silva
        date: '2016-07-29 11:32'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2016-07-28 15:17'
        message: Add screenshot of UI with side panel
        version: '17'
    - 
        author: Solen Guitter
        date: '2016-07-28 14:57'
        message: ''
        version: '16'
    - 
        author: Manon Lumeau
        date: '2016-07-27 14:34'
        message: ''
        version: '15'
    - 
        author: Manon Lumeau
        date: '2016-07-27 09:52'
        message: ''
        version: '14'
    - 
        author: Manon Lumeau
        date: '2016-07-27 09:49'
        message: ''
        version: '13'
    - 
        author: Manon Lumeau
        date: '2016-07-26 16:10'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2016-07-26 15:56'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2016-07-26 15:18'
        message: ''
        version: '10'
    - 
        author: Manon Lumeau
        date: '2016-07-26 15:12'
        message: ''
        version: '9'
    - 
        author: Manon Lumeau
        date: '2016-07-26 14:52'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2016-07-26 14:26'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2016-07-26 14:12'
        message: ''
        version: '6'
    - 
        author: Manon Lumeau
        date: '2016-07-26 10:10'
        message: ''
        version: '5'
    - 
        author: Manon Lumeau
        date: '2016-07-26 09:36'
        message: ''
        version: '4'
    - 
        author: Manon Lumeau
        date: '2016-07-26 09:21'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2016-07-25 15:51'
        message: ''
        version: '2'
    - 
        author: Manon Lumeau
        date: '2016-07-25 09:52'
        message: ''
        version: '1'

---
The Nuxeo Web UI is a user interface designed in&nbsp;Web Component (HTML) / Polymer framework.&nbsp;It allows enhanced productivity with direct access to last visited documents, collections, easy browsing between previous/next document, full screen suggester. [Nuxeo Web UI](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-web-ui) is a first class choice for projects where visual and workflows are important requirements. Let's discover what are the functional evolutions present on this new interface.

## Functional Overview

Three important parts are visible on every single pages:

![]({{file name='web_ui.png'}} ?w=650,border=true)

### Header Toolbar&nbsp;

![]({{file name='header_toolbar.png'}} ?w=650,border=true)

1.  **Default Domain**: The title of the selected view
2.  **Sub-Views**: The sub-views available on the selected view
3.  **Actions**: The possible actions according to the selected view
4.  **Quick search:**&nbsp;Search by keywords or users**&nbsp;**

### Side Menu

The menu displays different tabs. Clicking on one of them will open a side panel with the content of the tab selected: b<span>rowsing options are on the first left column, content to browse on the second and content to view on the main area. We will see the description of the main area on the last part of this documentation.</span>

<span>![]({{file name='web_ui_with_side_panel.png'}} ?w=650,border=true)
</span>

<span><span>This new pattern allows to&nbsp;</span>start browsing without changing the context of work.</span>

<table><tbody><tr><td colspan="1">![]({{file name='dashboard_home.png'}} ?w=48,thumbnail=true)</td><td colspan="1">

**Dashboard:** Displays the dashboard

</td></tr><tr><td colspan="1">![]({{file name='browse.png'}} ?w=48,thumbnail=true)</td><td colspan="1">

**Browse:** Shows the navigation tree to let you browse your content

</td></tr><tr><td colspan="1">![]({{file name='recently_viewed.png'}})</td><td colspan="1">

**Recently Viewed:** Shows the 10 last documents viewed

</td></tr><tr><td colspan="1">![]({{file name='searches.png'}})</td><td colspan="1">

**Search Filters:** Search content using full text and metadata

</td></tr><tr><td colspan="1">![]({{file name='assets.png'}})</td><td colspan="1">

**Assets Search:** Search for multimedia documents using <span>full text and metadata</span>

</td></tr><tr><td colspan="1">![]({{file name='tasks.png'}})</td><td colspan="1">

**Tasks:** Shows the list of pending workflow tasks

</td></tr><tr><td colspan="1">![]({{file name='favorites.png'}})</td><td colspan="1">

**Favorites:** The list of documents added to Favorites

</td></tr><tr><td colspan="1">![]({{file name='collections.png'}})</td><td colspan="1">

**Collections:** The list of collections you can access

</td></tr><tr><td colspan="1">![]({{file name='personal_space.png'}})</td><td colspan="1">

**Personal Space:** Access to your personal workspace, which is the default location for your Favorites and Collections folders

</td></tr><tr><td colspan="1">![]({{file name='clipboard.png'}})</td><td colspan="1">

**Clipboard:** Clipboard to copy and move documents

</td></tr><tr><td colspan="1">![]({{file name='user_menu.png'}})</td><td colspan="1">

**User Settings:** Displays a **Drive** tab to manage the synchronization roots and a **Themes** tab to manage branding.

</td></tr></tbody></table>

### **Main View**

The last part of the UI is the main view that depends of what has been selected on the side menu. The main view will usually show lists of documents or a document and its details.&nbsp; Lists of documents are presented in a table that proposes different functionalities like the infinite scroll instead of pagination, faceted filters in the header, easy columns selection with persistence of user's choice and a great visibility of selected elements.

A create button ![]({{file name='create_button.png'}} ?w=25,thumbnail=true)&nbsp;is also displayed on the main view to let you create or import documents in your application.

## Technical Overview

<span>Nuxeo Web UI has been built with simplicity and composability in mind. Nuxeo is a content application platform and our goal is to provide tools and components for you to build your own application hence the shift from a highly configurable and pluggable UI to a more modular and composable one.</span>

<span>With the introduction of Web Components browsers now offer a well defined component model that is performant, provided out of the box and has a familiar API. By leveraging DOM as the framework and extending HTML with our own custom tags we can empower web developers to use the tools and frameworks they are already familiar with to build rich web applications. This led to the creation of&nbsp;[Nuxeo Elements]({{page page='nuxeo-elements'}}), a set of custom elements provided by us that not only allowed us to build our UI but are also made available to developers so they too can build their own custom UIs.&nbsp;</span>

Nuxeo Elements are built with Polymer which is a library for creating custom elements. Although it wasn't initially envisioned as an application framework its simplicity and familiarity resulted in developers adopting it to build full applications. These applications are modular by nature since everything is an element and these elements themselves are reusable and interoperable since they rely on the native&nbsp;<span>component model. Concepts and features provided by other application frameworks are generally provided by the DOM and Polymer adds some "sugar" where things are lacking.</span>

Our Web UI is built itself with Polymer too. Goals were to not only ensure the simplicity and composability we aimed for but also to be as framework independent as possible so developers can use our elements to build their own UIs with whatever framework they see fit.

### Components

Everything in the web UI is built as a custom element with `<nuxeo-app>` as top level component. This application element acts as application data store / mediator storing context data as properties which are then forwarded through the hierarchy thanks to data binding. To learn more about data binding and its relation to the mediator pattern you can read the&nbsp;[article](http://www.nuxeo.com/blog/polymer-questions-to-bind-or-not-to-bind/) on our "[Polymer](http://www.nuxeo.com/blog/tag/polymer/)" series.

`<nuxeo-app>` relies on our data elements (`<nuxeo-document>`, `<nuxeo-resource>`, etc..) to fetch application wide data and it is in charge of refreshing this data when changes are made. We are not relying on two way binding in order to keep the data flux manageable thus parent elements act as data stores and children fire events to notify of changes causing data to be refreshed and then propagated down through the DOM tree. Alternative would be to rely on a custom event / action system like many framework do but, although this would avoid the cost inherent to event bubbling, it would make our elements dependent on the the existence of such as bus and introducing framework lock-in.

![]({{file name='Web UI document page.png'}} ?w=959,h=614,border=true)

The drawer's content is managed by `<iron-pages>` which toggles between its children depending on current selection in the left icon menu of the UI.

The main area is reserved for displaying the current page's content. Our router relies on [page.js](https://visionmedia.github.io/page.js/) and is in charge of parsing the URL and setting the current page and context data in `<nuxeo-app>` accordingly.

![]({{file name='Web UI search page.png'}} ?w=959,h=614,border=true)

&nbsp;

* * *