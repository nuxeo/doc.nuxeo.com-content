---
title: Manipulating Documents
description: Learn how to manipulate documents (creation, update, state change, deletion...) and launch queries through the REST API.
review:
    date: '2016-09-14'
    status: ok
    comment: ''

draft: true
toc: true

---

{{! excerpt}}
Learn how to manipulate documents (creation, update, state change, deletion...) and launch queries through the REST API.
{{! /excerpt}}

{{{multiexcerpt 'addon_desc' page='Setting up Environment'}}}

## Creating a Document

**Goal**

Create a new contract in Nuxeo Platform.

**Prerequisites**

* Having installed the addon Nuxeo xxx. See [Setting up Environment]({{page page='setting-up-environment'}}).

**Procedure**

1. Using your favorite text editor or IDE, create a file called `createContract.js`.
2. Start the content of this file by creating a Nuxeo client.
    ```javascript
    let Nuxeo = require('nuxeo');
    let nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'Administrator',
        password: 'Administrator'
      }
    });
    ```
3. Create a portfolio first. Complete the `createContract.js` with the following.
    ```javascript
    // We'll define the portfolio properties first
    let portfolioToCreate = {
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
          'tel': '555-123-456',
          'email': 'john.mclane@awesometech.noreply'
        }
     }
    };

    let whereToCreatePortfolio = '/default-domain/workspaces/North America';

    // Then create it
    nuxeo.repository()
      .create(whereToCreatePortfolio, portfolioToCreate)
      .then(portfolio => {
        console.log('Portfolio has been created as following:');
        console.log(portfolio);
      })
      .catch(error => {
        console.log('Apologies, an error occurred while creating the portfolio.');
        console.log(error);
      });
    ```
4. Create a contract (`BCContract` type) located under the portfolio created above and initialize it with a few properties.
    ```javascript
    // Again, we will define the contract properties first
    let contractToCreate = {
      'entity-type': 'document',
      'type': 'BCContract',
      'name': 'skynet-ai-maintenance',
      'properties': {
        'dc:title': 'Skynet AI Maintenance Contract',
        'bccontract:contractOwner': 'afraser',
        'bccontract:signatureDate': '2050-12-24',
        'bccontract:startDate': '2050-12-25',
        'bccontract:expirationDate': '2055-12-31',
        'bccontract:type': 'maintenance'
      }
    };

    let whereToCreateContract = '/default-domain/workspaces/North America/awesome-tech';

    // Then launch the creation
    nuxeo.repository()
      .create(whereToCreateContract, contractToCreate)
      .then(contract => {
        console.log('Contract has been created as following:');
        console.log(contract);
      })
      .catch(error => {
        console.log('Apologies, an error occurred while creating the contract.');
        console.log(error);
      });
    ```
5. Save and execute the file `createContract.js`.
    ```
    $ node createContract.js
    ```
