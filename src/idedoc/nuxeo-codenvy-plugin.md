---
title: Nuxeo Codenvy Plugin
review:
    comment: ''
    date: ''
    status: ok
labels:
    - codenvy
toc: true
confluence:
    ajs-parent-page-id: '8684133'
    ajs-parent-page-title: Documentation Center for Nuxeo Platform IDEs
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Nuxeo+Codenvy+Plugin
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Nuxeo+Codenvy+Plugin'
    page_id: '20519396'
    shortlink: 5Bk5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/5Bk5AQ'
    source_link: /display/IDEDOC/Nuxeo+Codenvy+Plugin
tree_item_index: 200
history:
    -
        author: Bertrand Chauvin
        date: '2016-01-06 11:20'
        message: emoved non working lin
        version: '16'
    -
        author: Vladimir Pasquier
        date: '2015-01-26 16:33'
        message: ''
        version: '15'
    -
        author: Vladimir Pasquier
        date: '2015-01-22 16:04'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2014-12-22 15:07'
        message: update factory
        version: '13'
    -
        author: Vladimir Pasquier
        date: '2014-12-15 12:14'
        message: ''
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 15:12'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 15:12'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 15:07'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 15:02'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 14:52'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 14:44'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 14:38'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 14:35'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 14:35'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 14:35'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2014-11-25 14:01'
        message: ''
        version: '1'

---
## Generic Factory

Codenvy generic factory is a way to generate a custom Codenvy IDE instance for specific project with:

*   A custom project template for Nuxeo bundle
*   A custom Codenvy Runner (a specific server to run your application within)

The link of this specific IDE instance is generated thanks to Codenvy API and Codenvy specific file to send: "factory.json".

The workspace provided by the factory is temporary.

![]({{file name='Codenvy1.png'}})

![]({{file name='Screenshot 2014-11-25 13.49.10.png'}})

## Nuxeo Project Wizard

Nuxeo Codenvy project wizard is in progress. It will provide:

*   A permanent Codenvy workspace
*   A panel to register/connect to Nuxeo Connect
*   A client app boostrap to consume Nuxeo IO instance API
*   A server Nuxeo bundle to deploy on Nuxeo IO instance
