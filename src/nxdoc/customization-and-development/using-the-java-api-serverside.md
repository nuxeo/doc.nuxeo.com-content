---
title: Using the Java API Serverside
toc: true
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Using+the+Java+API+Serverside
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Using+the+Java+API+Serverside'
    page_id: '17334311'
    shortlink: J4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/J4AIAQ'
    source_link: /display/NXDOC58/Using+the+Java+API+Serverside
history:
    - 
        author: Solen Guitter
        date: '2014-02-24 10:37'
        message: ixed broken UR
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-09-20 17:51'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:43'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:35'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:31'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:29'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:29'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

This page explains how to use the Nuxeo Java API.

{{! /excerpt}}

## Java Services

The Nuxeo Platform contains a built-in notion of service. Services are Java interfaces exposed and implemented by a Component.

From within a Nuxeo Runtime aware context, you can access a service locally (in the same JVM) by simply looking up its interface:

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

```
RelationManager rm = Framework.getService(RelationManager.class)
```

You can find the list of existing services on the [Nuxeo Platform Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/current/listServices). You will also need to understand main Java classes, using the [javadoc](http://community.nuxeo.com/api/nuxeo/).

## Typical Use Cases

You may want to use this API from:

*   A Seam component when customizing the default webapp,
*   An Event Listener that would do some specific things,
*   A custom operation that would use the built-in services,
*   ...