---
title: Using Renditions
review:
    comment: ''
    date: '2016-12-20'
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
    canonical: Using+Renditions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+Renditions'
    page_id: '31687836'
    shortlink: nITjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/nITjAQ'
    source_link: /display/NXDOC/Using+Renditions
tree_item_index: 700
history:
    - 
        author: Solen Guitter
        date: '2016-10-06 09:00'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2016-10-05 11:56'
        message: ''
        version: '24'
    - 
        author: Arnaud Kervern
        date: '2016-09-21 20:32'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2016-09-21 12:55'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2016-09-21 12:38'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2016-09-20 15:29'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2016-09-20 15:12'
        message: ''
        version: '19'
    - 
        author: Bertrand Chauvin
        date: '2016-09-20 14:38'
        message: ''
        version: '18'
    - 
        author: Bertrand Chauvin
        date: '2016-09-20 14:36'
        message: fix excerpt
        version: '17'
    - 
        author: Bertrand Chauvin
        date: '2016-09-20 14:23'
        message: Reverted from v. 14
        version: '16'
    - 
        author: Bertrand Chauvin
        date: '2016-09-20 14:21'
        message: fix code
        version: '15'
    - 
        author: Bertrand Chauvin
        date: '2016-09-20 14:12'
        message: fix rendition doc name
        version: '14'
    - 
        author: Arnaud Kervern
        date: '2016-09-07 09:34'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2016-09-02 15:54'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2016-08-16 10:00'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2016-08-16 09:30'
        message: ''
        version: '10'
    - 
        author: Bertrand Chauvin
        date: '2016-08-10 08:45'
        message: ''
        version: '9'
    - 
        author: Bertrand Chauvin
        date: '2016-08-05 11:53'
        message: ''
        version: '8'
    - 
        author: Bertrand Chauvin
        date: '2016-08-04 08:13'
        message: ''
        version: '7'
    - 
        author: Bertrand Chauvin
        date: '2016-08-04 08:13'
        message: ''
        version: '6'
    - 
        author: Bertrand Chauvin
        date: '2016-08-04 08:12'
        message: ''
        version: '5'
    - 
        author: Bertrand Chauvin
        date: '2016-08-03 17:50'
        message: ''
        version: '4'
    - 
        author: Bertrand Chauvin
        date: '2016-08-03 17:49'
        message: ''
        version: '3'
    - 
        author: Bertrand Chauvin
        date: '2016-08-03 09:56'
        message: ''
        version: '2'
    - 
        author: Bertrand Chauvin
        date: '2016-08-02 15:58'
        message: ''
        version: '1'
previous_link: nxdoc/retrieving-audit-log
next_link: nxdoc/using-workflows

---
{{! excerpt}}

Learn how to convert an office file and an image to other formats and sizes.

{{! /excerpt}}

## Converting an Office File into a PDF File

**Goal**

Convert a file from an office format into PDF format.

**Prerequisites**

*   {{{multiexcerpt 'prerequisite_users' page='Handling Permissions'}}}
*   {{! multiexcerpt name='prerequisite_fileupload'}}

    Create the `AwesomeTech-Contract` contract and its attachments. See [Managing Files]({{page page='managing-files'}}).

    {{! /multiexcerpt}}

**Procedure**

1.  Create a file called `downloadPDFRendition.js` with the following content. Be sure to replace the `filePath` variable with the path to the folder where the PDF rendition should be downloaded.

    ```js
    #!/usr/bin/env node
    // fs and path NodeJS modules are required to handle file download
    let fs = require('fs');
    let path = require('path');
    let Nuxeo = require('nuxeo');
    let nuxeo = new Nuxeo({
        auth: {
            method: 'basic',
            username: 'sconnor',
            password: 'sconnor'
        }
    });
    // Change this value to indicate in which folder the PDF rendition file should be downloaded
    // Don't forget the trailing slash
    let filePath = '/tmp/';
    // Which contract to fetch a rendition for - No need to change if you followed our instructions so far
    let contractToFetch = '/default-domain/workspaces/North America/awesome-tech/awesome-contract';
    // Further calls will return all document properties
    nuxeo.schemas('*');
    // First we'll display the renditions list
    // to give you an idea of what you could fetch out of the box
    nuxeo.repository().fetch(contractToFetch)
        .then(contract => {
            return contract.fetchRenditions();
        })
        .then(renditions => {
            console.log('\nThe following renditions can be called on the contract:\n');
            console.log(renditions);
            console.log('\nWe\'ll ask for a PDF rendition.\n');
        })
        .catch(error => {
            console.log('Apologies, an error occurred while fetching the renditions list.');
            console.log(error);
            return;
        });
    nuxeo.repository().fetch(contractToFetch)
        .then(contract => {
            return contract.fetchRendition('pdf');
        })
        .then(response => {
            // Download the rendition and store it on the disk
            try {
                let stats = fs.statSync(filePath);
                if (!stats.isDirectory()) {
                    console.log(filePath + ' is not a folder.\nPlease check the filePath variable (currently set to: ' + filePath + ')\nand make sure you have the proper rights on that folder.');
                    return;
                }
                const writable = fs.createWriteStream(path.join(filePath, 'contract.pdf'));
                response.body.pipe(writable);
                console.log('The PDF rendition has been downloaded.');
                console.log(`You can take a look at it here: ${path.join(filePath, 'contract.pdf')}`)
            } catch (error) {
                console.log(`The folder where the rendition should be downloaded cannot be accessed.\nPlease check the filePath variable (currently set to: ${filePath})\nand make sure you have write access on that folder.`);
                console.log(error);
                return;
            }
            return nuxeo.repository().fetch(contractToFetch);
        })
        .then(contract => {
            console.log(`Notice that the contract's file remains in its initial format:`);
            console.log(contract.properties['file:content']);
        })
        .catch(error => {
            console.log('Apologies, an error occurred while retrieving the contract.');
            console.log(error);
            return;
        });

    ```

2.  Save and run:

    ```
    $ node downloadPDFRendition.js
    ```

**Note:** The contract's file stored on the Nuxeo server remains in its initial format. The rendition is applied on the fly so that only the downloaded file is converted.

{{#> callout type='info' heading='Learn more'}}

*   [Renditions]({{page page='renditions'}})

{{/callout}}

&nbsp;

## Fetching Resized Pictures

**Goal**

The marketing department wants to use the companies' logos stored in the portfolios for testimonials. They need all these images to have the same dimensions. Use a rendition to cover this need.

**Prerequisites**

*   {{{multiexcerpt 'prerequisite_users' page='Handling Permissions'}}}
*   {{{multiexcerpt 'prerequisite_addon' page='Handling Permissions'}}}

**Procedure**

1.  Create a file called `downloadResizedLogo.js` with the following content. Be sure to replace the `filePath` variable with the path to the folder where the resized logo should be downloaded.

    ```js
    #!/usr/bin/env node
    // fs and path NodeJS modules are required to handle file download
    let fs = require('fs');
    let path = require('path');
    let Nuxeo = require('nuxeo');
    let nuxeo = new Nuxeo({
        auth: {
            method: 'basic',
            username: 'sconnor',
            password: 'sconnor'
        }
    });
    // Change this value to indicate in which folder the image rendition file should be downloaded
    // Don't forget the trailing slash
    let filePath = '/tmp/';
    // Which portfolio to fetch a rendition for - No need to change if you followed our instructions so far
    let portfolioToFetch = '/default-domain/workspaces/North America/Money Bank';
    // Size of the company logo rendition you want to obtain
    // You can change "Medium" to "Thumbnail", "Small" or "OriginalJpeg" to see the difference for yourself
    let renditionSize = 'Medium';
    // Init some variables that will be used for the file name
    let companyName;
    let fileFormat;
    // Further calls will return all document properties
    nuxeo.schemas('*');
    nuxeo.repository().fetch(portfolioToFetch)
        .then(portfolio => {
            // Store the company name to use it in the file name later
            companyName = portfolio.properties['dc:title'];
            // Display the different image sizes
            console.log('\nThe following image sizes can be downloaded:\n');
            portfolio.properties['picture:views'].forEach(currentPictureView => {
                console.log(currentPictureView.title);
                console.log(currentPictureView.info);
                // Store the rendition format to generate the filename later
                if (currentPictureView.title === renditionSize) {
                    fileFormat = currentPictureView.info.format.toLowerCase();
                }
            });
            console.log('\nWe\'ll ask for a ' + renditionSize + '-sized company logo in the ' + fileFormat + ' format.');
            return portfolio.fetchRendition(renditionSize);
        })
        .then(response => {
            // Download the rendition and store it on the disk
            try {
                var stats = fs.statSync(filePath);
                if (!stats.isDirectory()) {
                    console.log(`${filePath} is not a folder.\nPlease check the filePath variable (currently set to: ${filePath})\nand make sure you have the proper rights on that folder.`);
                    return;
                }
                let renditionFilePath = path.join(filePath, `${companyName}-${renditionSize}.${fileFormat}`);
                const writable = fs.createWriteStream(renditionFilePath);
                response.body.pipe(writable);
                console.log(`The ${renditionSize} sized company logo has been downloaded!`);
                console.log(`You can take a look at it here: ${renditionFilePath}`)
            } catch (error) {
                console.log('The folder where the rendition should be downloaded cannot be accessed.\nPlease check the filePath variable (currently set to: ' + filePath + ')\nand make sure you have write access on that folder.');
                console.log(error);
                return;
            }
        })
        .catch(error => {
            console.log('Apologies, an error occurred while fetching the rendition.');
            console.log(error);
            return;
        });

    ```

2.  Save and run:

    ```
    $ node downloadResizedLogo.js
    ```

**Note:** The same principles can be applied on videos as well, to fetch them in various formats and quality options. Pictures and video renditions are stored in the document directly in order to boost performances.

{{#> callout type='info' heading='Learn more'}}

*   [Renditions]({{page page='renditions'}})
*   [Digital Asset Management (DAM)]({{page page='digital-asset-management-dam'}})

{{/callout}}
