---
title: Using Automation
review:
    comment: ''
    date: '2017-01-17'
    status: ok
labels:
    - lts2016-ok
tree_item_index: 900
history:
    -
        author: Solen Guitter
        date: '2016-10-05 15:19'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-10-05 12:14'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2016-10-05 11:59'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2016-09-21 12:55'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-09-21 12:37'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2016-09-20 15:31'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-09-20 15:13'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-09-20 15:11'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-09-20 15:10'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2016-09-09 08:33'
        message: ''
        version: '9'
    -
        author: Arnaud Kervern
        date: '2016-09-07 09:49'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2016-09-02 15:56'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2016-08-16 15:51'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2016-08-09 07:04'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2016-08-09 07:04'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2016-08-09 07:03'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2016-08-05 16:23'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2016-08-05 13:48'
        message: ''
        version: '1'
previous_link: nxdoc/using-workflows

---
**Goal**

{{! excerpt}}

Leverage Automation and trigger business logic to obtain the contract and all of its attachments as a single PDF file.

{{! /excerpt}}

**Prerequisites**

*   {{{multiexcerpt 'prerequisite_addon' page='Handling Permissions'}}}
*   {{{multiexcerpt 'prerequisite_users' page='Handling Permissions'}}}
*   {{{multiexcerpt 'prerequisite_fileupload' page='Using Renditions'}}}

**Procedure**

1.  Create a file called `generateContractWithAttachments.js`&nbsp; with the following content. Be sure to replace the `filePath` variable with the path to the folder where the PDF file should be downloaded.

    ```js
    let Nuxeo = require('nuxeo');
    let fs = require('fs');
    let nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'sconnor',
        password: 'sconnor'
      }
    });

    // Change this value to indicate in which folder the full PDF contract should be downloaded
    // Don't forget the trailing slash
    let filePath = '/tmp/';
    // Which contract to fetch a rendition for
    let contractToFetch = '/default-domain/workspaces/North America/awesome-tech/awesome-contract';
    // Launch the automation chain to generate the final PDF file
    console.log('We\'ll launch an automation chain.');
    console.log('This chain will:');
    console.log('- Gather the contract and all of its attachments');
    console.log('- Convert them to PDF');
    console.log('- And concatenate them all in a single file.');
    nuxeo.operation('BCGenerateCompletePDFContract_ac')
      .input(contractToFetch)
      .execute()
      .then(response => {
        // Download file
        console.log('The file has been generated, we\'ll download it now.');
        try {
          var stats = fs.statSync(filePath);
          if (!stats.isDirectory()) {
            console.log(`${filePath} is is not a folder.\nPlease check the filePath variable (currently set to: ${filepath} )\nand make sure you have the proper rights on that folder.`);
            return;
          }
          const writable = fs.createWriteStream(`${filePath}contract-with-attachments.pdf`);
          response.body.pipe(writable);
          console.log('The complete PDF contract has been downloaded!');
          console.log(`You can take a look at it here: ${filePath}contract-with-attachments.pdf`)
        } catch (error) {
          console.log(`The folder where the rendition should be downloaded cannot be accessed.\nPlease check the filePath variable (currently set to: ${filePath})\nand make sure you have write access on that folder.`);
          console.log(error);
          return;
        }
      })
      .catch(error => {
        console.log('Apologies, an error occurred while generating the final PDF file.');
        console.log(error);
        return;
      });

    ```

2.  Save and run:

    ```
    $ node generateContractWithAttachments.js
    ```

Automation chains allow you to optimize the number of calls needed to execute business logic while maintaining data integrity. All automation chains are executed in a transaction: if the chain fails at some point, it will be rolled back to keep your data safe.

{{#> callout type='info' heading='Learn more'}}

*   [Applying Business Logic](https://university.nuxeo.com/store/161508-applying-business-logic) course on Nuxeo University
*   [Content Automation Documentation]({{page page='automation'}})

{{/callout}}

You have now completed this tutorial. To start discovering how to customize the Nuxeo Platform, check our [Quick Start Dev Guide]({{page page='start-customizing-the-nuxeo-platform'}}).
