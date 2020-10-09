---
title: 'HOWTO: Use the Runtime Java API'
review:
  comment: ''
  date: '2020-10-22'
  status: ok
details:
    howto:
        excerpt: Learn how to use the Runtime Java API.
        level: Advanced
        tool: Code
        topics: Runtime
labels:
    - lts2016-ok
    - runtimecomponent
    - kleturc
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '950284'
    ajs-parent-page-title: Runtime and Component Model
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Using+the+Java+API+Server-Side
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+the+Java+API+Server-Side'
    page_id: '16089809'
    shortlink: 0YL1
    shortlink_source: 'https://doc.nuxeo.com/x/0YL1'
    source_link: /display/NXDOC/Using+the+Java+API+Server-Side
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 13:45'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2016-03-29 12:15'
        message: ''
        version: '10'
    -
        author: Florent Guillaume
        date: '2015-12-17 12:32'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-12-10 17:00'
        message: TOC
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

The Nuxeo Platform contains a built-in notion of service. Services are Java interfaces exposed and implemented by a
Component.

From within a Nuxeo Runtime aware context, you can access a service locally (in the same JVM) by simply looking up its
interface with `Framework#getService(T)`:

```
import org.nuxeo.runtime.api.Framework;

[...]

RelationManager rm = Framework.getService(RelationManager.class)
```

This service will be a singleton in the application. Once retrieved, you can use its own API.

You can find the list of existing services on the [Nuxeo Platform Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/listServices).
You will also need to understand main Java classes, using the [javadoc](http://community.nuxeo.com/api/nuxeo/latest/javadoc/).

{{#> callout type='warning' }}

You should not cache the service instance, as it is efficient to retrieve it from the runtime, and as it would prevent
proper hot-reloading. If you still chose to do so, you will need to reset this cache on hot reload, see
[Suppporting Hot Reload]({{page page='supporting-hot-reload'}}).

{{/callout}}

## Typical Use Cases

You may want to use this API from:
*   An Event Listener that would do some specific things,
*   A custom operation that would use the built-in services,
*   ...
