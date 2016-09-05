---
title: Using the Java API Serverside
toc: true
confluence:
    ajs-parent-page-id: '22380900'
    ajs-parent-page-title: Runtime and Component Model
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Using+the+Java+API+Serverside
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Using+the+Java+API+Serverside'
    page_id: '22380644'
    shortlink: ZIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/ZIBVAQ'
    source_link: /display/NXDOC60/Using+the+Java+API+Serverside
history:
    - 
        author: Manon Lumeau
        date: '2014-12-10 17:00'
        message: O
        version: '8'
    - 
        author: Vincent Dutat
        date: '2014-02-21 19:41'
        message: ''
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
{{! excerpt}}

This page explains how to use the Nuxeo Java API.

{{! /excerpt}}

## Java Services

The Nuxeo Platform contains a built-in notion of service. Services are Java interfaces exposed and implemented by a Component.

From within a Nuxeo Runtime aware context, you can access a service locally (in the same JVM) by simply looking up its interface:

```
RelationManager rm = Framework.getService(RelationManager.class)
```

You can find the list of existing services on the [Nuxeo Platform Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/listServices). You will also need to understand main Java classes, using the [javadoc](http://community.nuxeo.com/api/nuxeo/).

## Typical Use Cases

You may want to use this API from:

*   A Seam component when customizing the default webapp,
*   An Event Listener that would do some specific things,
*   A custom operation that would use the built-in services,
*   ...