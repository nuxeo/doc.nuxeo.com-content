---
title: Nuxeo Compound Documents
description: 'Nuxeo Compound Documents documentation'
review:
    comment: ''
    date: '2023-05-23'
    status: ok
labels:
    - lts2021-ok
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
1.	Copy the following script into the editor: 
    ```
    function run(input, params) { 
          for (var i = 0; i < params.entries.length; i++) { 
            if (params.entries[i].endsWith(".u3m")) { 
              return "MaterialCompound"; 
            } 
          } 
          return "CompoundDocument"; 
        }
     ```   
1. Save your modifications.

#### Deploy Your Customization

Once you have your facet, your 2 document types and your 2 scripts, you are ready to deploy your Studio project into your instance. Once it’s done, upload a .zip containing a `.u3m` file format and see the magic!

## Next Milestones

This release of Compound Documents is the first milestone on our scope. 
Other milestones will come later during the year including: 
•	The possibility to custom search compound documents
•	Version compound documents and apply validation workflows
•	Make relations of parent compound documents/children with existing documents in your system to limit duplicates

