---
title: Manipulating Documents
description: 'Learn how to manipulate documents (creation, update, state change, deletion...) and launch queries through the REST API.'
review:
    comment: ''
    date: '2018-11-26'
    status: ok
toc: true
labels:
    - lts2016-ok
    - lts2017-ok
confluence:
    ajs-parent-page-id: '29460589'
    ajs-parent-page-title: Getting Started with the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Manipulating+Documents
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Manipulating+Documents'
    page_id: '31687130'
    shortlink: 2oHjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/2oHjAQ'
    source_link: /display/NXDOC/Manipulating+Documents
tree_item_index: 300
history:
    -
        author: Bertrand Chauvin
        date: '2016-10-05 12:57'
        message: dd headers lin
        version: '37'
    -
        author: Solen Guitter
        date: '2016-10-05 12:02'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2016-10-05 11:49'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2016-10-05 11:49'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2016-09-28 14:15'
        message: ''
        version: '33'
    -
        author: Arnaud Kervern
        date: '2016-09-21 20:14'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2016-09-21 12:19'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2016-09-21 12:18'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2016-09-20 15:25'
        message: ''
        version: '29'
    -
        author: Bertrand Chauvin
        date: '2016-09-20 09:15'
        message: display breadcrumb explicitly
        version: '28'
    -
        author: Bertrand Chauvin
        date: '2016-09-20 08:49'
        message: Show only custom clauses in result when updating
        version: '27'
    -
        author: Solen Guitter
        date: '2016-09-19 12:10'
        message: Fix createContract.js
        version: '26'
    -
        author: Bertrand Chauvin
        date: '2016-09-16 13:42'
        message: "don't put dashes in tel for juridical contact"
        version: '25'
    -
        author: Arnaud Kervern
        date: '2016-09-07 09:05'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2016-08-17 08:06'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2016-08-17 07:44'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2016-08-12 15:32'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2016-08-11 15:02'
        message: ''
        version: '20'
    -
        author: Bertrand Chauvin
        date: '2016-08-09 16:13'
        message: ''
        version: '19'
    -
        author: Bertrand Chauvin
        date: '2016-08-09 09:24'
        message: Remove amount in contract to be able to launch workflow properly later
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2016-08-08 12:56'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2016-08-02 16:17'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2016-08-02 14:50'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-07-29 15:50'
        message: ''
        version: '14'
    -
        author: Bertrand Chauvin
        date: '2016-07-29 14:33'
        message: ''
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2016-07-29 11:10'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-07-28 12:07'
        message: ''
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 13:15'
        message: Use custom clauses (complex multivalued property) instead of updating a simple property
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 10:17'
        message: 'Removed permissions mgt => going to a different page'
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 10:00'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 09:43'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2016-07-18 18:25'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2016-07-18 18:06'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2016-07-18 16:19'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2016-07-18 16:03'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2016-07-18 15:37'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2016-07-18 15:02'
        message: ''
        version: '1'
previous_link: /nxdoc/setting-up-your-javascript-environment
next_link: /nxdoc/handling-permissions
---

{{! excerpt}}
Learn how to manipulate documents (creation, update, state change, deletion...) and launch queries through the REST API.
{{! /excerpt}}

The steps below leverage the document types included in the addon Getting started with the Nuxeo Platform:

{{{multiexcerpt 'studio_configuration_desc' page='Setting up Your Nuxeo Environment'}}}

## Creating a Document

**Goal**

Create a new contract in Nuxeo Platform.

**Prerequisites**

{{{multiexcerpt 'prerequisite_addon' page='Handling Permissions'}}}

**Procedure**

1.  Create a file called `createContract.js` with the following content:

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

    // Define the portfolio properties first
    const portfolioToCreate = {
      'entity-type': 'document',
      'type': 'BCPortfolio',
      'name': 'awesome-tech',
      'properties': {
        'dc:title': 'Awesome Tech Ltd.',
        'bccstm:companyIndustry': 'it',
        'bccstm:companySize': 'medium',
        // Complex properties are sent as objects
        'bccstm:juridicalContact': {
          'firstName': 'John',
          'lastName': 'McLane',
          'tel': '555 123 456',
          'email': 'john.mclane@awesometech.noreply'
        }
     }
    };

    // Then define the contract properties
    const contractToCreate = {
    'entity-type': 'document',
    'type': 'BCContract',
    'name': 'skynet-ai-maintenance',
    'properties': {
      'dc:title': 'Skynet AI Maintenance Contract',
      'bccontract:contractOwner': 'afraser',
      'bccontract:signatureDate': '2050-12-24',
      'bccontract:startDate': '2050-12-25',
      'bccontract:expirationDate': '2055-12-31',
      'bccontract:type': 'maintenance',
      'bcsalescommon:amount': '10000'
    }
    };

    const whereToCreatePortfolio = '/default-domain/workspaces/North America';

    const repository = nuxeo.repository();

    // Then create the portfolio and contract
    repository
      .create(whereToCreatePortfolio, portfolioToCreate)
      .then(portfolio => {
        console.log('Portfolio has been created as follows:');
        console.log(portfolio);
        return repository.create(portfolio.path, contractToCreate);
      })
      .then(contract => {
        console.log('Contract has been created as follows:');
        console.log(contract);
      })
      .catch(error => {
        console.log('Apologies, an error occurred.');
        console.log(error);
        if (error.response) {
          error.response.json().then(json => console.log(json));
        }
      });
    ```

2.  Save and run:

    ```
    $ node createContract.js
    ```

{{#> callout type='info' heading='Learn more'}}

- [Creating Content]({{page space='userdoc' page='content-create'}})
- [REST API Entity Types]({{page page='rest-api-entity-types'}})

{{/callout}}

&nbsp;

## Fetching a Document

Documents can be fetched using their ID or path.

1.  Create a file called `fetchContract.js` with the following content.

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
    // Further calls will return all schemas when fetching a document
    // Note that it can easily be overridden on a per call basis if needed
    nuxeo.schemas('*');
    nuxeo.repository()
        // These headers allow us to retrieve the associated contract owner in the same call
        .header('depth', 'max')
        .header('fetch.document', 'properties')
        // We'll also retrieve the document hierarchy
        .enricher('document', 'breadcrumb')
        .fetch('/default-domain/workspaces/North America/awesome-tech/skynet-ai-maintenance')
        .then(contract => {
            console.log('Contract has been retrieved:');
            console.log(contract);
            console.log(`\nAnd here is the document's hierarchy to build a breadcrumb navigation:`);
            console.log(contract.contextParameters.breadcrumb);
        })
        .catch(error => {
            console.log(error);
        });
    ```

2.  Save and run:

    ```
    $ node fetchContract.js
    ```

**Notes**

- We obtained detailed information about the contract owner because we added some [headers]({{page page='special-http-headers'}}) to retrieve all the document's relations.
- The document hierarchy is provided in context parameters because we used a [content enricher]({{page page='content-enrichers'}}). That's only one out of many.
- The contract inherited the company name and other customer related properties from its portfolio (in the `bccustomer` schema) thanks to some business logic brought by the addon Getting started with the Nuxeo Platform.

{{#> callout type='info' heading='Learn more'}}

- [Document Resources Endpoints]({{page page='document-resources-endpoints'}})
- [Content Enricher]({{page page='content-enrichers'}})

{{/callout}}

&nbsp;

## Updating a Document

We will now update the contract to add some custom clauses.

1.  Create a file called `updateContract.js` with the following content.

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
    // Further calls will return all schemas when fetching a document
    // Note that it can easily be overridden on a per call basis if needed
    nuxeo.schemas('*');
    var contractToFetch = '/default-domain/workspaces/North America/awesome-tech/skynet-ai-maintenance';
    // We're updating a complex and multi-valued property here
    // Multi-valued properties are expressed as arrays, complex properties as objects
    // So we're creating an object array here
    var propertiesToUpdate = {
        'bccontract:customClauses': [{
            'label': 'Automatic Subscription Renewal',
            'content': 'In case the user has not cancelled its subscription one month before the contract\'s expiration date, the contract will automatically be renewed for one more year.'
        }, {
            'label': 'Payment Conditions',
            'content': 'When an automatic subscription renewal is triggered, the user will need to pay the annual amount due. This amount will not be refunded if the contract is stopped before its new expiration date.'
        }]
    };
    // And now we launch the actual update
    nuxeo.repository()
        .fetch(contractToFetch)
        .then(function(contract) {
            contract.set(propertiesToUpdate);
            return contract.save();
        })
        .then(function(contract) {
            console.log('Contract has been updated. Custom clauses are now as follows:');
            console.log(contract.properties['bccontract:customClauses']);
        })
        .catch(function(error) {
            console.log('Apologies, an error occurred while updating the contract.');
            console.log(error);
        });

    ```

2.  Save and run:

    ```
    $ node updateContract.js
    ```

{{#> callout type='info' heading='Learn more'}}

- [Data Modeling]({{page space='nxdoc' page='data-modeling'}})

{{/callout}}

&nbsp;

## Trashing a Document

First we will **trash** the document, then in a second phase restore it from the trash.

**Trashing the document**

1.  Create a file called `trashContract.js` with the following content.

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
    var contractToFetch = '/default-domain/workspaces/North America/awesome-tech/skynet-ai-maintenance';
    nuxeo.repository()
        .fetch(contractToFetch)
        .then(function(contract) {
            return contract.followTransition('delete');
        })
        .then(function(contract) {
            console.log('Contract state has been changed. Contract is now as follows:');
            console.log(contract);
        })
        .catch(function(error) {
            console.log('Apologies, an error occurred while changing the contract state.');
            console.log(error);
        });
    ```

2.  Save and run:

    ```
    $ node trashContract.js
    ```

**Restoring trashed document**

Restore the contract from trash.

1.  Create a file called `restoreContract.js` with the following content.

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
    var contractToFetch = '/default-domain/workspaces/North America/awesome-tech/skynet-ai-maintenance';
    nuxeo.repository()
    // Find the trashed document
        .query({
          query: "SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation' AND ecm:isProxy = 0 AND ecm:isVersion = 0 AND ecm:isTrashed = 1 AND ecm:path STARTSWITH '/default-domain/workspaces/North America/awesome-tech/'"
        })
        .then(function(contract) {
            return contract.entries[0];
        })
        // Restore it
        .then(function(contract) {
          return nuxeo.operation('Document.Untrash')
            .input(contract)
            .execute()
        })
        .then(function() {
          console.log('Success! The contract has been untrashed.');
        })
        .catch(function(error) {
            console.log('Apologies, an error occurred while untrashing the document.');
            console.log(error);
        });

    ```

2.  Save and run:

    ```
    $ node restoreContract.js
    ```

{{#> callout type='info' heading='Learn more'}}

- [How to use Trash Feature]({{page page='how-to-use-trash-feature'}})
- [Data Modeling]({{page page='data-modeling'}})

{{/callout}}

## Searching for Documents

Find a contract that needs to be deleted: it expired before 2016 and has a limitation clause in its content.

1.  Create a file called `query.js` which launches a query for all documents:

    - of the `BCContract` type
    - except archived versions and documents that are in the trash
    - that contain the keyword "limitation"
    - having expired before the end of 2015.

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
    getContractsQuery = "SELECT * FROM BCContract " +
      " WHERE ecm:isVersion = 0 AND ecm:isTrashed = 0 AND ecm:fulltext = 'limitation' AND bccontract:expirationDate <= DATE '2015-12-31' ";
    nuxeo
      .repository()
      .query({
        query: getContractsQuery
      })
      .then(function(contracts) {
        console.log('The following contracts have been retrieved:');
        console.log(contracts);
      })
      .catch(function(error) {
        console.log('Apologies, an error occurred while launching the query.');
        console.log(error);
      });

    ```

2.  Save and run:

    ```
    $ node query.js
    ```

{{#> callout type='info' heading='Learn more'}}

- [Search Resource Endpoints]({{page page='search-endpoints'}})
- [Indexing and Query]({{page page='indexing-and-query'}})

{{/callout}}

## Deleting a Document

The contract to delete has been identified as being the `2015 Annual Conference` belonging to the `Bon Appétit Caterer` portfolio. Delete it.

1.  Create a file called `deleteContract.js` with the following content.

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
    nuxeo.repository()
        .fetch('/default-domain/workspaces/North America/Caterer/2015 Annual Conference')
        .then(function(contract) {
          return nuxeo.operation('Document.Delete')
            .input(contract)
            .execute()
        })
        .then(function(res) {
            console.log('Contract has been deleted permanently. Bye bye contract!')
                // res.status === 204
        })
        .catch(function(error) {
            console.log('Apologies, an error occurred while deleting the contract.');
            console.log(error);
        });

    ```

2.  Save and run:

    ```
    $ node deleteContract.js
    ```

**Note**: This method does not include a "trash" behavior. The document is permanently erased. You should use the delete state and transitions to get documents to be moved to a trash before being permanently deleted.
