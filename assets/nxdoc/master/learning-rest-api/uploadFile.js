const Nuxeo = require('nuxeo');

// We require 'path' and 'fs' to access the local file system
const path = require('path');
const fs = require('fs');

const nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  }
});

const filePath = '/local/path/to/myFile';

const whereToCreate = '/path/to/myFolder';

nuxeo.schemas("*");

// Access the local file


  // Create a blob from the filePath passed as variable


  // Upload the file, create a Document and attach the file to it
