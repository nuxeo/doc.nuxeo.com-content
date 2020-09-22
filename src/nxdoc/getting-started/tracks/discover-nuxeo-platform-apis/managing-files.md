---
title: Managing Files
review:
    comment: ''
    date: '2020-09-15'
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
    canonical: Managing+Files
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Managing+Files'
    page_id: '31687183'
    shortlink: D4LjAQ
    shortlink_source: 'https://doc.nuxeo.com/x/D4LjAQ'
    source_link: /display/NXDOC/Managing+Files
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-10-05 11:53'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2016-09-21 12:39'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2016-09-21 10:09'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2016-09-21 10:05'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2016-09-20 15:27'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2016-09-20 15:09'
        message: Fix contract to attach files to
        version: '20'
    -
        author: Solen Guitter
        date: '2016-09-20 13:07'
        message: remove uploadedFiles.forEach section
        version: '19'
    -
        author: Solen Guitter
        date: '2016-09-20 07:40'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-09-19 15:43'
        message: ''
        version: '17'
    -
        author: Arnaud Kervern
        date: '2016-09-07 09:15'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2016-09-02 15:50'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-08-17 09:03'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2016-08-17 09:03'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-08-12 15:28'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-08-12 15:27'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-08-12 15:24'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2016-08-12 14:25'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2016-08-12 14:24'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2016-08-10 07:55'
        message: ''
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2016-08-02 14:46'
        message: add attachment
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2016-08-02 12:51'
        message: ''
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2016-08-01 17:15'
        message: ''
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2016-08-01 09:59'
        message: ''
        version: '3'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 17:11'
        message: ''
        version: '2'
    -
        author: Bertrand Chauvin
        date: '2016-07-19 12:41'
        message: ''
        version: '1'
previous_link: nxdoc/handling-permissions
next_link: nxdoc/retrieving-audit-log
---

{{! excerpt}}
Learn how to upload files on your Nuxeo server and attach them to a document.
{{! /excerpt}}

## Create a Document from an Existing File

**Goal**

Upload a file to your Nuxeo Platform instance, create a contract and attach the file to the contract.

**Prerequisites**

*   {{{multiexcerpt 'prerequisite_addon' page='Handling Permissions'}}}
*   {{{multiexcerpt 'prerequisite_users' page='Handling Permissions'}}}

**Procedure**

1.  Download the file [AwesomeTech-Contract.docx]({{file name='AwesomeTech-Contract.docx'}}). You will upload it in the next few steps.
2.  Create a file called `uploadContract.js` with the following content. Be sure to replace the `filePath` variable with the path to the contract you want to upload.

    ```js
    // We need to require path and fs to browse the filesystem
    let Nuxeo = require('nuxeo');
    let path = require('path');
    let fs = require('fs');
    let nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'sconnor',
        password: 'sconnor'
      }
    });

    // Full path to the file that should be uploaded
    // ** Be sure to modify the path **
    let filePath = '/path/to/file/filename.something';

    // Path where the document should be created in Nuxeo Platform
    let whereToCreate = '/default-domain/workspaces/North America/awesome-tech';

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.log(`File cannot be found.\nPlease check the filePath variable (currently set to ${filePath}).`);
        return;
      }
      if (!stats.isFile()) {
        console.log(`${filePath} is not a file.\nPlease check the filePath variable.`);
        return;
      }

      // We create a blob from the filePath passed as variable
      let blob = new Nuxeo.Blob({
        'content': fs.createReadStream(filePath),
        'name': path.basename(filePath),
        'size': stats.size
      });
      let fileName = path.basename(filePath);

      // Then upload the file
      nuxeo.batchUpload()
        .upload(blob)
        .then(uploadedFile => {
          console.log('File is uploaded, we will now create a document to attach it.');

          // We create a contract and attach the file to it
          // We could also attach the file to an existing contract
          let contractToCreate = {
            'entity-type': 'document',
            'type': 'BCContract',
            'name': 'awesome-contract',
            'properties': {
              'dc:title': fileName,
              'file:content': uploadedFile.blob,
              'bcsalescommon:amount': '15000'
            }
          };

          return nuxeo.repository().create(whereToCreate, contractToCreate, { schemas: ['*'] });
        })
        .then(contract => {
          console.log('Contract has been created as follows:');
          console.log(contract);
          console.log(`Blob can be downloaded here: ${contract.get('file:content').data}.\nNote that a file security policy restricts downloads to Administrators and members of the managers group.\nYou can log in as sconnor / sconnor to download it.`);
        })
        .catch(error => {
           console.log(error);
         });
    });
    ```

3.  Save and run:

    ```
    $ node uploadContract.js
    ```

**Note:** You can download the file if you log in as an Administrator or a member of the `managers` group (e.g. by using sconnor / sconnor), otherwise download is forbidden.

{{#> callout type='info' heading='Learn more'}}

*   [File Download Security Policies]({{page page='file-download-security-policies'}})
*   [HOWTO: Upload a File in Nuxeo Using REST API]({{page page='howto-upload-file-nuxeo-using-rest-api'}})

{{/callout}}

&nbsp;

## Attaching Files to an Existing Document

**Goal**

The contract for Skynet AI maintenance you just created should contain other files that have been signed: a non-disclosure agreement, rates and specific conditions. Attach them to the contract on top of the existing file.

**Prerequisites**

*   Section "Create a Document from an Existing File" above.

**Procedure**

1.  Download the file [contract-attachments.zip]({{file name='contract-attachments.zip'}}) and unzip it. You will attach the files it contains to the contract in the next few steps.
2.  Create a file called `attachFilesToContract.js` with the following content. Be sure to replace the `filePath` variable with the path to the unzipped attachment folder.

    ```js
    // We need to require path and fs to browse the filesystem
    let Nuxeo = require('nuxeo');
    let path = require('path');
    let fs = require('fs');
    let nuxeo = new Nuxeo({
      auth: {
        method: 'basic',
        username: 'sconnor',
        password: 'sconnor'
      }
    }); 

    // Further calls will return all document properties
    nuxeo.schemas('*');

    // Phase 0
    // Defining the variables that will be needed to attach files to the document:
    // Where attachments are located on the disk
    // ** Be sure to modify the path, keeping the trailing slash **
    let filesPath = '/path/to/contract-attachments/';
    // Which contract to update - No need to change if you followed our instructions so far
    let contractToUpdatePath = '/default-domain/workspaces/North America/awesome-tech/awesome-contract';
    // In which document property we'll store the attachments
    // Please DO NOT change or you would need to adapt the code in phase 2
    let propertiesToUpdate = {
      'files:files': []
    };

    // Phase 1
    // Look for attachments and upload them in an upload batch
    // The upload batch's content can be attached to a document afterward
    fs.readdir(filesPath, (err, files) => {
        if (err) {
            console.log(`Attachments folder cannot be found.\nPlease check the filesPath variable (currently set to ${filesPath}).`);
            return;
        }

        // Create an empty batch into which we will upload files
        let attachmentsBatch = nuxeo.batchUpload();
        files.forEach(file => {
                try {
                    // Be sure to use statSync
                    // By using a synchronous method we won't have to deal with the callback
                    // and will prevent attaching the batch's content to the document too soon
                    let stats = fs.statSync(`${filesPath}/${file}`);
                    if (!stats.isFile()) {
                        console.log(`${file} is not a file. Aborting.`);
                        attachmentsBatch.cancel();
                        return;
                    }

                    // We create a blob that can be uploaded from the file
                    let nxBlob = new Nuxeo.Blob({
                        'content': fs.createReadStream(`${filesPath}/${file}`),
                        'name': path.basename(`${filesPath}/${file}`),
                        'size': stats.size
                    });

                    // And upload it into the batch
                    attachmentsBatch.upload(nxBlob)
                        .then(uploadedFile => {
                            console.log(`File ${file} has been uploaded.`);
                        })
                        .catch(error => {
                            console.log(`File ${file} could not be uploaded. Aborting.`);
                            console.log(error);
                            attachmentsBatch.cancel();
                            return;
                        });

                } catch(error) {
                    console.log('Apologies, an error occurred while looking for attachments to upload. Aborting.');
                    console.log(error);
                    attachmentsBatch.cancel();
                    return;
                }
            });

        // Phase 2
        // We attach the batch's content into a document once upload is finished
        attachmentsBatch.done()
            .then(uploadedFiles => {
                // Parsing the batch files
                // so that they can be added to the files:files property
    			for (var uploadedFilesIndex = 0; uploadedFilesIndex < uploadedFiles.blobs.length; uploadedFilesIndex++) {
                    var currentFile = uploadedFiles.blobs[uploadedFilesIndex];
                    propertiesToUpdate['files:files'].push({
                        'file': {
                            'upload-batch': currentFile['upload-batch'],
                            'upload-fileId': currentFile['fileIdx']
                        }
                    });
                }
                // Retrieving the contract to update it
                return nuxeo.repository().fetch(contractToUpdatePath);
            })
            .then(contract => {
                // Contract has been retrieved
                // Let's update it with its new properties
                contract.set(propertiesToUpdate);
                return contract.save();
            })
            .then(contract => {
                console.log('Contract has been updated. It contains the following attachments:');
                console.log(contract.properties['files:files']);
            })
            .catch(error => {
                console.log('Apologies, an error occurred while updating the contract. Aborting.');
                attachmentsBatch.cancel();
                console.log(error);
                return;
            });
    });
    ```

3.  Save and run:

    ```
    $ node attachFilesToContract.js
    ```

**Note:** You can download the attachments if you log in as an Administrator or a member of the managers group (e.g. by using sconnor / sconnor), otherwise download is forbidden.

{{#> callout type='info' heading='Learn more'}}

- [File Download Security Policies]({{page page='file-download-security-policies'}})
- [HOWTO: Upload a File in Nuxeo Using REST API]({{page page='howto-upload-file-nuxeo-using-rest-api'}})

{{/callout}}
