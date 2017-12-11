---
title: Client SDKs
review:
    comment: ''
    date: '2016-12-23'
    status: ok
labels:
    - lts2016-ok
    - home
    - mlumeau
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950332'
    ajs-parent-page-title: Developer Documentation Center
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Client+SDKs
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Client+SDKs'
    page_id: '16091040'
    shortlink: oIf1
    shortlink_source: 'https://doc.nuxeo.com/x/oIf1'
    source_link: /display/NXDOC/Client+SDKs
section_parent: sdks
tree_item_index: 600
version_override:
    LTS 2015: 710/nxdoc/clients
    '6.0': 60/nxdoc/clients
    '5.8': 58/nxdoc/clients
history:
    -
        author: Solen Guitter
        date: '2016-07-29 16:26'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2016-07-20 09:47'
        message: remove children display macro
        version: '5'
    -
        author: Manon Lumeau
        date: '2016-04-15 15:43'
        message: ''
        version: '4'
    -
        author: Solen Guitter
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
The platform already provides multiple clients for accessing the platform remotely.&nbsp;We also provide [a test suite]({{page page='client-api-test-suite-tck'}}) from which you can get inspiration if you want to write a new client for Nuxeo (for example in Ruby, in Golang, ...) and want to assert your level of compliance.

{{! multiexcerpt name='rest-api-clients'}}

*   [JavaScript Client]({{page space='NXDOC' page='JavaScript Client'}})
*   [Java Client]({{page space='NXDOC' page='java-client'}})
*   [Python Client]({{page space='NXDOC' page='Python Client'}})
*   [.NET Client]({{page space='NXDOC' page='.NET Client'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Nuxeo .NET Client is a cross-platform client library developed in C# for the Nuxeo Automation and REST API.</span>
*   [iOS Client]({{page space='NXDOC' page='iOS Client'}})
*   [Android Client]({{page space='NXDOC' page='android-client'}})
*   [PHP Automation Client]({{page space='NXDOC' page='PHP Automation+Client'}})&nbsp;&mdash;&nbsp;<span class="smalltext">A PHP automation client is made available on GitHub. You can use it and ask for commit rights on the project if you want to improve it or fix a bug. The project contains the library and some sample use cases.</span>
*   [Using cURL]({{page space='NXDOC' page='Using cURL'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In this example we are using the UNIX curl command line tool to demonstrate how to invoke remote operations.</span>
{{! /multiexcerpt}}
