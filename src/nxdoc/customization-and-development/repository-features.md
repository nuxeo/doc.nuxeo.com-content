---
title: Repository features
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Repository+features
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Repository+features'
    page_id: '17334376'
    shortlink: aIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/aIAIAQ'
    source_link: /display/NXDOC58/Repository+features
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:20'
        message: 'emove children display macro '
        version: '4'
    - 
        author: Anonymous
        date: '2013-09-06 15:39'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-09-05 15:34'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-09-05 15:32'
        message: ''
        version: '1'

---
{{! excerpt}}

This chapter encompasses features related to the repository: the concepts used for documents types, how to retrieve documents, how to version them, how to add security policies to access documents, how tags work.

{{! /excerpt}}

&nbsp;

*   [Document types]({{page space='NXDOC58' page='Document types'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter presents the concepts of schemas, facets and document types, which are used to define documents.</span>
*   [Versioning]({{page space='NXDOC58' page='Versioning'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This section describes the versioning model of Nuxeo 5.4 and later releases.</span>
*   [Querying and Searching]({{page space='NXDOC58' page='Querying and+Searching'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In Nuxeo the main way to do searches is through NXQL, the Nuxeo Query Language, a SQL-like query language.</span>
*   [Tagging]({{page space='NXDOC58' page='Tagging'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The tag service uses two important concepts: a tag object, and a tagging action. Both are represented as Nuxeo documents.</span>
*   [Security Policy Service]({{page space='NXDOC58' page='Security Policy+Service'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The Security Policy Service provides an extension point to plug custom security policies that do not rely on the standard ACLs for security. For instance, it can be used to define permissions according to the document metadata, or information about the logged in user.</span>
*   [Events and Listeners]({{page space='NXDOC58' page='Events and+Listeners'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Events and event listeners have been introduced at the Nuxeo core level to allow pluggable behaviors when managing documents (or any kinds of objects of the site).</span>
*   [Bulk Edit]({{page space='NXDOC58' page='Bulk Edit'}})&nbsp;&mdash;&nbsp;<span class="smalltext">The bulk edit feature allows to edit several documents at the same time. This is implemented using the BulkEditService component.</span>