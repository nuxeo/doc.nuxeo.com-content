---
title: Handling Permissions
review:

    date: '2018-10-31'
    status: ok
toc: true
labels:
    - lts2016-ok
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '29460589'
    ajs-parent-page-title: Getting Started with the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Handling+Permissions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Handling+Permissions'
    page_id: '31687172'
    shortlink: BILjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/BILjAQ'
    source_link: /display/NXDOC/Handling+Permissions
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-10-05 11:51'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2016-09-21 12:24'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2016-09-20 15:26'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2016-09-19 13:27'
        message: Use const instead of var
        version: '18'
    -
        author: Solen Guitter
        date: '2016-08-17 09:08'
        message: ''
        version: '17'
    -
        author: Bertrand Chauvin
        date: '2016-08-17 09:05'
        message: 'occured => occurred'
        version: '16'
    -
        author: Bertrand Chauvin
        date: '2016-08-17 08:55'
        message: 'Grant read write to sales, not managers'
        version: '15'
    -
        author: Solen Guitter
        date: '2016-08-12 15:35'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2016-08-12 14:01'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-08-12 09:56'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-08-12 09:45'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-08-12 09:44'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2016-08-11 15:39'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2016-08-10 07:41'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2016-08-10 07:39'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2016-08-10 07:08'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2016-08-08 13:19'
        message: Added check permissions
        version: '5'
    -
        author: Solen Guitter
        date: '2016-08-02 16:18'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2016-07-29 14:57'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 11:24'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 10:20'
        message: ''
        version: '1'
previous_link: /nxdoc/manipulating-documents
next_link: /nxdoc/managing-files

---
{{! excerpt}}

Learn how to set up permissions on a structure and see the results of a security policy.

{{! /excerpt}}

## Assigning Permissions

**Goal**

The goal is to allow `Read and Write` access to the `sales` group members on the `North America` contract portfolio. Permissions are inherited, which means they will apply to all documents below unless the inheritance is blocked.

**Prerequisites**

- {{! multiexcerpt name='prerequisite_addon'}}Install the addon Getting started with the Nuxeo Platform. See [Setting up Your Nuxeo Environment]({{page page='setting-up-your-nuxeo-environment'}}).{{! /multiexcerpt}}
- {{! multiexcerpt name='prerequisite_users'}}Create users on your Nuxeo instance. See [Setting up Your JavaScript Environment]({{page page='setting-up-your-javascript-environment'}}).{{! /multiexcerpt}}

**Procedure**

1.  Create a file called `grantReadWriteToSales.js` with the following content.

    ```js
    const Nuxeo = require('nuxeo');
    const nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'Administrator',
        password: 'Administrator'
      }
    });

    var whichPermission = {
      'permission': 'ReadWrite',
      'username': 'sales'
    };
    var onWhichDoc = '/default-domain/workspaces/North America';
    nuxeo.repository()
      .fetch(onWhichDoc)
      .then(function(doc) {
        return doc.addPermission(whichPermission);
      })
      .then(function(doc) {
        console.log('Permission has been added on the document!');
      })
      .catch(function(error) {
        console.log('Apologies, an error occurred while adding the permission.');
        console.log(error);
      });
    ```

2.  Save and run:

    ```
    $ node grantReadWriteToSales.js
    ```

## Checking Granted Permissions

**Goal**

Verify the permissions that have been set on the document.

**Prerequisites**

*   Assigning Permissions step (above)

**Procedure**

1.  Create a file called `checkPermissions.js` with the following content.

    ```js
    const Nuxeo = require('nuxeo');
    const nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'Administrator',
        password: 'Administrator'
      }
    });

    var onWhichDoc = '/default-domain/workspaces/North America';

    nuxeo.repository()
      // We add the ACLs enricher to obtain current permissions on the doc
      .enricher('document', 'acls')
      // Then fetch the document
      .fetch(onWhichDoc)
      .then(function(doc) {
        console.log('Permissions defined on ' + doc.title + ':')
        for (var indexAcls = 0; indexAcls < doc.contextParameters.acls.length; indexAcls++) {
          console.log(doc.contextParameters.acls[indexAcls]);
        }
      })
      .catch(function(error) {
        console.log('Apologies, an error occurred while retrieving the permissions.');
        console.log(error);
      });
    ```

2.  Save and run:

    ```
    $ node checkPermissions.js
    ```

{{#> callout type='info' heading='Learn more'}}

*   [Security]({{page page='security'}})

{{/callout}}

&nbsp;

## Restricting File Download Using a Security Policy

**Goal**

A file download security policy has been defined in the addon Getting started with the Nuxeo Platform. It only allows *Administrators* and users that are members of the `managers` group to download files. We will check it by trying to download a contract:

1.  Using Alicia's account. Alicia has Read and Write permissions on the contract but is not a manager.
2.  Using Sarah's account. Sarah has Read and Write permissions and is a manager.

**Procedure**

1.  Create a file called `checkFileDownloadPolicy.js` to check the policy against a contract named `To the Moon and Back` in the `Beyond Space Travel Agency` portfolio.

    ```js
    const Nuxeo = require('nuxeo');
    const nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'afraser',
        password: 'afraser'
      }
    });

    var contractToDownload = '/default-domain/workspaces/North America/Beyond Space Travel Agen/To the Moon and back';

    nuxeo.repository()
      .fetch(contractToDownload)
      .then(function(contract) {
        return contract.fetchBlob();
      })
      .then(function(blob) {
        console.log('Contract\'s file can be downloaded!');
      })
      .catch(function(error) {
        console.log('The contract\'s file can\'t be downloaded, response is:');
        console.log(error.response.status + ' ' + error.response.statusText);
      });
    ```

2.  Save and run:

    ```
    $ node checkFileDownloadPolicy.js
    ```

    You are getting an `error 403: forbidden` because the file download is restricted in that case.

3.  Now, in the same file, change the login information at the beginning to use Sarah's account.

    ```js
    const Nuxeo = require('nuxeo');
    const nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'sconnor', // Change username
        password: 'sconnor'  // and password to use Sarah's account
      }
    });
    ```

4.  Execute the file&nbsp;`checkFileDownloadPolicy.js` again.

    ```
    $ node checkFileDownloadPolicy.js
    ```

    This time the contract can be downloaded.

{{#> callout type='info' heading='Learn more'}}

*   [File Download Security Policies]({{page page='file-download-security-policies'}})

{{/callout}}
