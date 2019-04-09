---
title: Retrieving Audit Log
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '29460589'
    ajs-parent-page-title: Getting Started with the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Retrieving+Audit+Log
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Retrieving+Audit+Log'
    page_id: '31687180'
    shortlink: DILjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/DILjAQ'
    source_link: /display/NXDOC/Retrieving+Audit+Log
tree_item_index: 600
history:
    - 
        author: Solen Guitter
        date: '2016-10-05 11:54'
        message: ''
        version: '17'
    - 
        author: Arnaud Kervern
        date: '2016-09-21 20:24'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2016-09-21 12:29'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2016-09-20 15:28'
        message: ''
        version: '14'
    - 
        author: Arnaud Kervern
        date: '2016-09-07 09:19'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2016-08-17 09:29'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2016-08-17 09:29'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2016-08-17 09:04'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2016-08-16 08:40'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2016-08-12 15:36'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2016-08-12 13:27'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2016-08-12 13:27'
        message: ''
        version: '6'
    - 
        author: Bertrand Chauvin
        date: '2016-08-10 07:52'
        message: use contract created previously
        version: '5'
    - 
        author: Bertrand Chauvin
        date: '2016-08-08 16:56'
        message: ''
        version: '4'
    - 
        author: Bertrand Chauvin
        date: '2016-08-08 16:56'
        message: Replace portfolio with workspace to get more audit traces
        version: '3'
    - 
        author: Bertrand Chauvin
        date: '2016-07-29 15:00'
        message: ''
        version: '2'
    - 
        author: Bertrand Chauvin
        date: '2016-07-19 12:24'
        message: ''
        version: '1'
previous_link: nxdoc/managing-files
next_link: nxdoc/using-renditions

---
**Goal**

{{! excerpt}}

Retrieve a document's audit log to gather its history. All actions made on a document are stored in this audit log for security review purpose.

{{! /excerpt}}

**Prerequisites**

*   {{! multiexcerpt name='prerequisite_contract_skynet'}}Create the `skynet-ai-maintenance` contract. See [Manipulating Documents]({{page page='manipulating-documents'}}){{! /multiexcerpt}}

**Procedure**

1.  Create a file called `getDocumentAudit.js` with the following content.

    ```js
    #!/usr/bin/env node
    const Nuxeo = require('nuxeo');
    const nuxeo = new Nuxeo({
        auth: {
            method: 'basic',
            username: 'Administrator',
            password: 'Administrator'
        }
    });
    let docToFetch = '/default-domain/workspaces/North America/awesome-tech/skynet-ai-maintenance';
    nuxeo.repository()
        .fetch(docToFetch)
        .then(doc => {
            return doc.fetchAudit();
        })
        .then(audit => {
            console.log(`Document's audit log is as follows:`);
            console.log(audit);
        })
        .catch(error => {
            console.log(`Apologies, an error occurred while retrieving the document's audit log.`);
            console.log(error);
        });
    ```

2.  Save and run:

    ```bash
    $ node getDocumentAudit.js
    ```

{{#> callout type='info' heading='Learn more'}}

*   [Audit]({{page page='audit'}})

{{/callout}}
