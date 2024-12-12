---
title: Nuxeo Compound Documents
description: 'Nuxeo Compound Documents documentation'
review:
    comment: ''
    date: '2024-07-03'
    status: ok
labels:
    - lts2023-ok
    - compound
    - dam
toc: true
tree_item_index: 1120
---

Introducing the beta version of Compound Documents in Nuxeo.

The goal of the new Compound document facet is to help you better deal with complex documents such as complex layouts (InDesign), 3D documents and complex video (Premiere projects). 

We can define Compound Documents as files that only make sense as a group of interrelated children, at several levels, each of these is modifiable.  

## Installation

We are bringing Compound Document for LTS 2021.</br> 
The compound Document Feature and Facet are available as a separate addon available on the marketplace.

## Using Compound Documents

Compound documents are defined as folder objects representing the parent asset. Upon upload, children documents will be created for each included file, even if that same binary has been uploaded and used for another compound asset all already in the system somewhere (i.e., there may be multiple "duplicate" child assets among compounds).  

To upload your compound document in Nuxeo, files are pre-formatted and made into a `.zip` which is loaded into the instance. A script in the instance recognises the file and creates the appropriate folder's structure. 

You can use our compound document addon with any type of compound document that you would like, but here are a few use cases we identified that are commonly used: 

  1.	**Material files:** `xtex`, `u3m` are the main material format to structure the compound. 
  1.	**Complex Layouts:** Page Layouts: native layouts (`.indd` or `.ai`), pdf for preview (if needed), n-ancillary files (`.txt`, `.pdf`, `.json`), subfolder with n-linked component files (images, illustrator, pdfs,etc.).
  1.	**Product Designs:** main 3D design file (`obj`, `clo`, `zproj, `lxo`, `xtex`, etc.), glb for preview, image for thumb (`jpg`, `png`), n-ancillary files (any formats), subfolder with n-texture files (image formats).
  1.	**Complex Video:** Video Projects: native Premiere project (`.proj`) or Avid project (`.avp`, `.avs`), preview (`mp4` or similar), n-ancillary files, subfolder with n-components (video, audio, images, or graphics formats). 

For compound document we have enabled a tree browsing for users to easily navigate files inside the compound documents and have access to their preview and make actions on them: 

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Compound Documents/Compound documents previ
    name: compound-documents.png
    addins#screenshot#up_to_date
--}}
![Compound documents preview ](/nx_assets/d783b71b-afef-46b3-bfdd-a5a57b7d8c01.png ?w=650,border=true)

## Extend Compound Documents

### Customization Doctype

In this tutorial, we’ll learn how to customize the compound document type using Nuxeo Studio, so that depending on the format of files into the `.zip` file, a specific compound will be created. For this example, if the `.zip` contains a document “.u3m”, a material compound document will be created.

#### Requirements 

•	The Nuxeo Compound document addon installed on your instance  
•	Nuxeo Platform > LTS 2021  

#### Create the Compound Facet

1.	In Nuxeo Studio, go to **Settings** > **Registries** > **Document Facets**
1.	Add the following code to it:
    ```
    { 
    "facets": [ 
      { 
        "id": "CompoundDocument", 
        "description": "null" 
      } 
    ] 
    } 
    ```   
 1.  Save your modifications. 

#### Create the Document Types

Here we need 2 document types, one for the folder and one for the Material compound itself.

**Folder:**
1.	In Nuxeo Studio, go to **Document Types** > **New**.  
1.	Feature ID `MaterialFolderCompound`.
1.	Extends: nothing 
1.	Label: `Material Folder` 
1.	Click **Ok**.  
1.	On **Accepted Children Type**, select **MaterialFolderCompound**, **Audio**, **File**, **Note**, **Video** and **Picture**.
1.	On **Document Facet**, select **Folderish**.  
1.	Save your document.

**Material Document:**
1.	In Nuxeo Studio, go to **Document Types** > **New**.
  a.	Feature ID `MaterialCompound`.
  b.	Extends: nothing
  c.	Label: `Material`
1.	Click **Ok**.
1.	On **Container type**, select **Workspace** and **Folder**.
1.	On **Accepted Children Type**, select **MaterialFolderCompound**, **Audio**, **File**, **Note**, **Video** and **Picture**.
1.	On **Document Facet**, select **CompoundDocument** and **Folderish**.   
1.	Save your document.   

#### Create the Scripts

First step:

1.	In Nuxeo Studio, go to “Automation” > “Automation Scripting”.  
1.	Click on New.  
1.	Fill the popup as below:  
  a.	Feature ID: “GetCompoundDocumentFolderType”  
  b.	Input type: Document 
  c.	Output type: Blob 
1.	Click Ok.  
1.	Copy the following script into the editor: 
    ```
    function run(input) {
if (input.type === "MaterialCompound") {
return "MaterialFolderCompound";
} else if (input.type === "Design3DCompound") { //Optional
return "Design3DFolderCompound";
} else if (input.type === "InDesignCompound") { //Optional
return "InDesignFolderCompound";
} else if (input.type === "PremiereProjectCompound") { //Optional
return "PremiereProjectFolderCompound";
}
return "CompoundDocumentFolder";
}
    ```
1. Save your modifications.

Second Step:
1.	In Nuxeo Studio, go to “Automation” > “Automation Scripting”.  
1.	Click on New.  
1.	Fill the popup as below:  
  a.	Feature ID: “GetCompoundDocumentType”  
  b.	Input type: Document 
  c.	Output type: Blob 
1.	Click Ok.  
1.	Go to “Parameters”, click “Add parameter” and add:
  a. Name: entries
  b. Type: String
6. Copy the following script into the editor:


function run(input, params) {

for (var i = 0; i < params.entries.length; i++) {

if (params.entries[i].endsWith(".u3m")) {

return "MaterialCompound";

} else if (params.entries[i].endsWith(".glb") || params.entries[i].endsWith(".obj")) { //Optional

return "Design3DFolderCompound";

} else if (params.entries[i].endsWith(".indd") || params.entries[i].endsWith(".idml")) { //Optional

return "InDesignCompound";

} else if (params.entries[i].endsWith(".prproj")) { //Optional

return "MaterialCompound";

}

}

return "CompoundDocument";

}
     ```   
1. Save your modifications.

#### Deploy Your Customization


Once you have your facet, your document types and your 2 scripts, you are ready to deploy your Studio project into your instance. Once it’s done, upload a .zip file of specified document types and see the results.


OPTIONAL: Preview Selection of Compound Document

1. In Nuxeo Studio, go to “Automation” > “Automation Scripting”.
2. Click on New.
3. Fill the popup as below:
  a. Feature ID: “GetCompoundDocumentPreview”
  b. Input type: void
  c. Output type: void
4. Click Ok.
5. Copy the following script into the editor:


function run(input, params) {


var isINDD = false;

var isPremiere = false;


var pdfDocuments = [];

var imageDocuments = [];

var videoDocuments = [];

var glbDocuments = [];

var objDocuments = [];


// cannot use the query operation

var query = "Select * FROM Document Where ecm:isVersion = 0 AND ecm:isProxy = 0 AND ecm:isTrashed = 0 AND ecm:ancestorId = '" + input.id + "'";

var children = Repository.Query(input, {

'query': query

});


//var children = Document.GetChildren(input, {});


children.forEach(function(item) {

var blob = item['file:content'];

if (!blob) {

return;

}


switch (blob.mimeType) {

case 'application/x-indesign':

isINDD = true;

break;

case 'image/vnd.adobe.premiere':

isPremiere = true;

break;

case 'application/pdf':

pdfDocuments.push(item);

break;

case 'model/gltf-binary':

glbDocuments.push(item);

break;

case 'model/obj':

objDocuments.push(item);

break;

default:

break;

}


if (item.hasFacet('Picture')) {

imageDocuments.push(item);

} else if (item.hasFacet('Video')) {

videoDocuments.push(item);

}

});


pdfDocuments.sort(sortByPath);

videoDocuments.sort(sortByPath);

imageDocuments.sort(sortByPath);

glbDocuments.sort(sortByPath);

objDocuments.sort(sortByPath);


if (glbDocuments.length > 0) {

input['cp:preview'] = glbDocuments[0].id;

} else if (objDocuments.length > 0) {

input['cp:preview'] = objDocuments[0].id;

} else if (isINDD && pdfDocuments.length > 0) {

input['cp:preview'] = pdfDocuments[0].id;

} else if (isPremiere && videoDocuments.length > 0) {

input['cp:preview'] = videoDocuments[0].id;

} else if (imageDocuments.length > 0) {

input['cp:preview'] = imageDocuments[0].id;

}


input = Document.Save(input, {});


return input;

}


function sortByPath(a, b) {

return a.path > b.path;

}


#### Compound Document Versioning Policy:

1. By default, when a compound document is uploaded, the parent compound document will get MAJOR version bump (i.e., parent document’s version will be 1.0 initially) and children documents will get MINOR version bump (i.e., all children’s version will be 0.1 initially).
2. If you make any changes in a child document, a "+" is displayed after the version number to make this apparent (e.g., 0.1+). Once a version has been created on a child document (for example, child document’s new version will be 0.2 or 1.1 depending on minor or major version creation, respectively), the parent document’s version will be shown with “+” which indicates some changes were made.
  a. You can use compare version button to check the details of the changed child document.
  b. In such case, you can create a major/minor version on parent document based on the changes in the child document.
3. Creating a version in parent compound document will not affect the children documents’ versions.
4. Upon restoring the parent version to any previous version, all children documents will get restored back to their versions associated with parent document’s changed version. The restoration of children documents will happen as:
  a. If the setting `nuxeo.compound.document.strict.version.restore.enabled=true`, then all out of scoped versions of child document will get deleted and the current version will be set to the version associated with parent’s changed version.
  b. If the setting `nuxeo.compound.document.strict.version.restore.enabled=false`, then all out of scoped versions of child document will not get deleted, but the current version will be set to the version associated with parent’s changed version.
