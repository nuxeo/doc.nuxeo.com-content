---
title: Document Templates and Automation Rendering Service
review:
    comment: ''
    date: '2016-12-19'
    status: ok
labels:
    - lts2016-ok
    - freemarker
    - mvel
    - template
    - operation
    - automation
    - fdavid
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Document+Templates+and+Automation+Rendering+Service
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Document+Templates+and+Automation+Rendering+Service'
    page_id: '14256377'
    shortlink: _YjZ
    shortlink_source: 'https://doc.nuxeo.com/x/_YjZ'
    source_link: /display/NXDOC/Document+Templates+and+Automation+Rendering+Service
tree_item_index: 1300
history:
    -
        author: Solen Guitter
        date: '2015-10-12 10:10'
        message: ix formatting issue
        version: '6'
    -
        author: Solen Guitter
        date: '2015-08-31 13:47'
        message: Update table of contents look
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-05-06 00:38'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2013-07-11 10:58'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2013-07-11 10:57'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2013-07-11 10:57'
        message: ''
        version: '1'

---
Nuxeo Automation includes a service designed to perform renditions based on Freemarker or MVEL templating.

Two operations are provided for leveraging this rendition engine: [Conversion > Render Document](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Render.Document) and [Conversion > Render Document Feed](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Render.DocumentFeed)

We list here the variables accessible in this rendition context and as a consequence in the templates.

{{#> callout type='info' }}

For a broader look about variables available in different contexts, have a look at the [Understand Expression and Scripting Languages Used in Nuxeo]({{page page='understand-expression-and-scripting-languages-used-in-nuxeo'}}) page.

For a more advanced rendition service, you may be interested in having a look at the [Nuxeo Platform Template Rendering module]({{page page='template-rendering-addon'}}).

{{/callout}}

## FreeMarker Templating Language (ftl)

*   **`${Document}`** - the context document. This is the document on which the rendering is done in the case the rendering is done on a single document. When the input is a list of document then this variable is undefined.
*   **`${This}`** - the rendering input. Will be a document in the case of a single document or a list of documents in th case of multiple documents.
*   **`${Session}`** - the current core session.
*   **`${Context}`** - the context.
*   **`${CurrentDate}`** - the current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
*   **`${Fn}`** - a collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
*   **`${Env}`** - a hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.
*   **`${CurrentUser}`** - the current user.
    Note that **`${CurrentUser}`** is not correctly working for now in FTL templates - but only in MVEL templates.

By using the FreeMarker templating engine, you also gain access to its whole functionalities. For example, using a document list could be done as following:

```
<#list This as doc>
  ${doc.title}
</#list>
```

Have a look at the [FreeMarker manual](http://freemarker.org/docs) for more information about it.

## MVEL

* **`${Document}`** - the context document. This is the document on which the rendering is done in the case the rendering is done on a single document. When the input is a list of document then this variable is undefined.
* **`${This}`** - the rendering input. Will be a document in the case of a single document or a list of documents in th case of multiple documents.
* **`${Session}`** - the current core session.
* **`${Context}`** - the context.
* **`${CurrentDate}`** - the current date. See [Use of MVEL in Automation chains (date wrapper)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
* **`${Fn}`** - a collection of useful functions. See [Use of MVEL in Automation chains (fn object)]({{page page='use-of-mvel-in-automation-chains'}}) for details.
* **`${Env}`** - a hashmap containing Nuxeo environment variables. Example: `Env["org.nuxeo.ecm.product.name"]`.
* **`${CurrentUser}`** - the current user.

By using MVEL, you also gain access to its whole functionalities. For example, using a document list could be done as following:

```
@foreach{doc : This}
  @{doc.title}
@end{}
```

Have a look at the [MVEL manual](http://mvel.codehaus.org/Getting+Started+for+2.0) for more information about it.
