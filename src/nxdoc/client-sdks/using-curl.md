---
title: Using cURL
description: On this page we are using the UNIX `curl` command line tool to demonstrate how to invoke remote operations.
review:
    comment: ''
    date: '2018-01-16'
    status: ok
labels:
    - content-review-lts2016
    - curl
    - client
    - rest-api
    - troger
    - excerpt
    - multiexcerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '16091040'
    ajs-parent-page-title: Client SDKs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Using+cURL
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+cURL'
    page_id: '3343035'
    shortlink: uwIz
    shortlink_source: 'https://doc.nuxeo.com/x/uwIz'
    source_link: /display/NXDOC/Using+cURL
tree_item_index: 800
history:
    -
        author: Benoit Delbosc
        date: '2016-10-07 12:55'
        message: 'ix the Lock url by adding a missing "/'
        version: '17'
    -
        author: Laurent Doguin
        date: '2013-12-18 15:24'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-11-14 15:03'
        message: ''
        version: '15'
    -
        author: Vladimir Pasquier
        date: '2013-10-23 14:30'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-08-30 15:08'
        message: ''
        version: '13'
    -
        author: Arnaud Kervern
        date: '2012-09-03 16:55'
        message: Migrated to Confluence 4.0
        version: '12'
    -
        author: Arnaud Kervern
        date: '2012-09-03 16:55'
        message: ''
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2011-06-23 18:31'
        message: "example is not working when using '*' - server side exception"
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 15:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 15:10'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 14:11'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 14:11'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-08-03 14:10'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-07-19 12:16'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-19 12:15'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-19 12:08'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-19 11:55'
        message: ''
        version: '1'

---
{{! excerpt}}

In this example we are using the UNIX `curl` command line tool to demonstrate how to invoke remote operations.

{{! /excerpt}} {{#> callout type='warning' }}

In a Windows environment, Nuxeo recommends to use cygwin shell to avoid all formatting request issue using default shell like Powershell

{{/callout}}{{! multiexcerpt name='curl-examples'}}

1.  Here is how to create a new File document type on the&nbsp;[Nuxeo demo instance](https://nightly.nuxeo.com/), right under the default domain (you can copy, paste and test):

    ```
    curl -X POST -H "Content-Type: application/json" -u Administrator:Administrator -d '{ "entity-type": "document", "name":"newDoc", "type": "File","properties": { "dc:title": "Specifications", "dc:description": "Created via a so cool and simple REST API", "common:icon": "/icons/file.gif", "common:icon-expanded": null, "common:size": null}}' https://nightly.nuxeo.com/nuxeo/api/v1/path/default-domain
    ```

2.  You can get the new resource doing a standard GET (actually the JSON object was already returned in previous response):

    ```
    curl -X GET -u Administrator:Administrator  http://nightly.nuxeo.com/nuxeo/api/v1/path/default-domain/newDoc
    ```

3.  Now, "lock" this document we have just created by calling an Automation operation from command API on the document resource.

    ```
    curl -X POST -H "Content-Type: application/json+nxrequest"   -u Administrator:Administrator -d '{"params":{}}'  https://nightly.nuxeo.com/nuxeo/api/v1/path/default-domain/newDoc/@op/Document.Lock
    ```

    Pay attention to the Content-Type that is specific when using the&nbsp;`@op` adapter.

    You can check the result of your request on the web app ([https://nightly.nuxeo.com/nuxeo/nxpath/default@view_domains](https://nightly.nuxeo.com/nuxeo/nxpath/default@view_domains), credentials:&nbsp; Administrator/Administrator).

4.  You can also directly call an automation operation or chain, from the "Command endpoint". Here we return all the worskpaces of the demo.nuxeo.com instance:

    ```
    curl -H 'Content-Type:application/json+nxrequest' -X POST -d '{"params":{"query":"SELECT * FROM Document WHERE ecm:primaryType=\"Workspace\""},"context":{}}'   -u Administrator:Administrator https://nightly.nuxeo.com/nuxeo/api/v1/automation/Document.Query
    ```

{{! /multiexcerpt}}
