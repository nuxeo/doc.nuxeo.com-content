---
title: The Nuxeo IDE perspective
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nuxeo-perspective
confluence:
    ajs-parent-page-id: '22905665'
    ajs-parent-page-title: Nuxeo IDE
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: The+Nuxeo+IDE+perspective
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/The+Nuxeo+IDE+perspective'
    page_id: '8684141'
    shortlink: bYKE
    shortlink_source: 'https://doc.nuxeo.com/x/bYKE'
    source_link: /display/IDEDOC/The+Nuxeo+IDE+perspective
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-09-01 16:14'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-07-10 12:02'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2012-09-05 12:40'
        message: Migrated to Confluence 4.0
        version: '10'
    -
        author: Solen Guitter
        date: '2012-09-05 12:40'
        message: ''
        version: '9'
    -
        author: Florent Guillaume
        date: '2012-08-13 12:43'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2011-10-06 16:09'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-10-04 15:20'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-09-27 16:19'
        message: added screenshots
        version: '5'
    -
        author: Solen Guitter
        date: '2011-09-27 10:21'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2011-09-26 20:42'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2011-09-26 20:38'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-26 16:56'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

The Nuxeo perspective is the proposed layout to work on Nuxeo projects. It extends the default Java perspective by adding some specific Nuxeo IDE views like:

## Nuxeo Server

{{! multiexcerpt name='IDE-nuxeo-server-tab'}}

Let's start by looking at the Nuxeo Server tab ![]({{file name='server.gif'}}). It gives you the ability to start ![]({{file name='start.gif'}}), stop ![]({{file name='stop.gif'}}), start in debug mode ![]({{file name='debug.gif'}}). As you can see when starting Nuxeo, the tab starts displaying the server log. There are two associated buttons to Lock ![]({{file name='lock_co.gif'}}) the scrolling and to Clear ![]({{file name='clear.gif'}}) the console. Once you see the "Server started" line in the logs, you can click on the Open Nuxeo In Web Browser ![]({{file name='oprest.gif'}}) button. We'll talk about the other two (hot reload ![]({{file name='refresh.gif'}}) and deployment profile ![]({{file name='deploy.gif'}})) later.

{{! /multiexcerpt}}

## Nuxeo components

{{! multiexcerpt name='IDE-nuxeo-components-tab'}}

The Components tab ![]({{file name='nx.gif'}}) gives you an overview of the different Components available in the SDK. What's a component you might ask? It's an XML file declaring a Service, an Extension Point (XP) or a contribution to an XP. This is what makes Nuxeo easily extensible. Basically a Service will provide some business logic that can be modified or extend using XPs. The service knows how to handle and register contribution to XP. Here's an example. In Nuxeo there is a service that handles Document Type. It knows how to handle several XPs. One of them is used to register new Document Type for Nuxeo. You can find out more on our component model in our [documentation]({{page space='nxdoc' page='runtime-and-component-model'}}).

{{! /multiexcerpt}}

## Nuxeo Studio

{{! multiexcerpt name='IDE-nuxeo-studio-tab'}}

The Studio tab ![]({{file name='studio_project.gif'}}) lists the different Studio project you have access to. You can browse their content to see what configuration has been added to the project. Click on a feature and you'll be sent directly to the corresponding Studio tab. Notice the two icons on the upper right corner. One is used to refresh the list ![]({{file name='refresh.gif'}}) and the other ![]({{file name='export.gif'}}) is used to export the operations you develop in the IDE into your Studio project.

{{! /multiexcerpt}}

## Nuxeo Shell

{{! multiexcerpt name='IDE-nuxeo-shell-tab'}}

Nuxeo Shell is, as its name suggest, a shell. You can use it to log in to Nuxeo and realize different actions. You can use it to connect and do maintenance work on any remote Nuxeo server.

{{! /multiexcerpt}} {{#> callout type='tip' }}

To switch to the Nuxeo perspective, click on **Window** > **Open Perspective** and choose **Nuxeo**.
Of course, you can always use the default Java perspective and add the Nuxeo IDE views you want.

{{/callout}}
