---
title: Clients
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334531'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Clients
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Clients'
    page_id: '17334278'
    shortlink: BoAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/BoAIAQ'
    source_link: /display/NXDOC58/Clients
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:46'
        message: 'emove children display macro '
        version: '4'
    - 
        author: Anonymous
        date: '2013-10-17 11:39'
        message: Added list of children pages with excerpts
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-10-16 17:01'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-10-16 01:56'
        message: ''
        version: '1'

---
The platform already provides multiple clients for accessing the platform remotely.&nbsp;We also provide [a test suite]({{page page='client-api-test-suite-tck'}}) from which you can get inspiration if you want to write a new client for Nuxeo (for example in C#, in C, ...) and want to assert your level of compliance.

*   [Java Automation Client]({{page space='NXDOC58' page='Java Automation+Client'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Nuxeo provides a high level client implementation for Java programmers: Nuxeo Automation Client API simplifies your task since it handles all the protocol level details.</span>
*   [PHP Automation Client]({{page space='NXDOC58' page='PHP Automation+Client'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A PHP automation client is made available on GitHub. You can use it and ask for commit rights on the project if you want to improve it or fix a bug. The project contains the library and some sample use cases.</span>
*   [Using a Python Client]({{page space='NXDOC58' page='Using a+Python+Client'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Alternatively you can use the standard library of Python to access a Nuxeo repository using the Content Automation API. Here is a worked example with screencast that demonstrates how to deploy a custom server side operation developed in Java using the Nuxeo IDE and a client Python script that calls it: Exploring Nuxeo APIs: Content Automation.</span>
*   [Client API Test suite (TCK)](https://doc.nuxeo.com/pages/viewpage.action?pageId=17334476)&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter provides a test suite that can be used to test the implementation of an automation client library.</span>
*   [iOS Client]({{page space='NXDOC58' page='iOS Client'}})
*   [Android Client]({{page space='NXDOC58' page='Android Client'}})
*   [Using cURL]({{page space='NXDOC58' page='Using cURL'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In this example we are using the UNIX curl command line tool to demonstrate how to invoke remote operations.</span>