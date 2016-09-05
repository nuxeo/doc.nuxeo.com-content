---
title: Other services
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Other+services
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Other+services'
    page_id: '17334368'
    shortlink: YIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/YIAIAQ'
    source_link: /display/NXDOC58/Other+services
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 12:15'
        message: emove children display macr
        version: '4'
    - 
        author: Anonymous
        date: '2013-09-23 11:05'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:53'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-09-05 15:49'
        message: ''
        version: '1'

---
This section lists additional services and modules that are part of the default distribution of the Nuxeo Platform. You can also refer to the [additional packages section]({{page page='additional-modules'}}) for understanding how to integrate features offered by additional plugins.

*   [Publisher service]({{page space='NXDOC58' page='Publisher service'}})&nbsp;&mdash;&nbsp;<span class="smalltext">There are three ways to publish a document:</span>
*   [Thumbnail service]({{page space='NXDOC58' page='Thumbnail service'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Since Nuxeo Platform 5.7.1, documents can have a thumbnail. A thumbnail is a reduced-size version of a picture used to help in recognizing and organizing documents. It will stand for any kind of document according to the type and/or facet.</span>
*   [Nuxeo Core Import / Export API](https://doc.nuxeo.com/pages/viewpage.action?pageId=17334296)&nbsp;&mdash;&nbsp;<span class="smalltext">The import / export service is providing an API to export a set of documents from the repository in an XML format and then re-importing them back. The service can also be used to create in batch document trees from valid import archives or to provide a simple solution of creating and retrieving repository data. This could be used for example to expose repository data through REST or raw HTTP requests.</span>
*   [Work and WorkManager]({{page space='NXDOC58' page='Work and+WorkManager'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The WorkManager service allows you to run code later, asynchronously, in a separate thread and transaction.</span>