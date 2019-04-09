const Nuxeo = require('nuxeo');
const nuxeo = new Nuxeo({
  baseURL: 'http://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  }
});

nuxeo.schemas("*");

// Define Workspace properties
const workspaceToCreate = {

};

// Define Folder properties
const folderToCreate = {

};

// Define Document properties
const documentToCreate = {

}

const whereToCreateWorkspace = '/default-domain/workspaces/';


// Create the Workspace, Folder and then Document


