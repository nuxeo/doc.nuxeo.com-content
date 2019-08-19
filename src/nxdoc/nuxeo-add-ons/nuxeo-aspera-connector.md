---
title: Nuxeo Aspera Connector
description: 'Nuxeo Aspera Connector enables users to download/upload binaries with Aspera.'
review:
    comment: ''
    date: '2019-07-30'
    status: ok
labels:
    - lts2019-ok
    - vpasquier
toc: true
tree_item_index: 1100
---

{{! excerpt}}
The [Nuxeo Aspera](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-aspera) connector
enables users to download/upload binaries with Aspera.
{{! /excerpt}}

## Requirements

- Aspera Desktop Client - [latest version](https://downloads.asperasoft.com/en/downloads/2).
- Nuxeo Server LTS 2019 (10.10) with access to AWS S3 Storage

## Installation

Installation is made of two steps:

1.  Install the [Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-aspera) available from the marketplace.
1.  Install the [Aspera desktop client](http://d3gcli72yxqn2z.cloudfront.net/connect/v4/bin/IBMAsperaConnectInstaller-3.8.1.161274.dmg).

## Configuration

### Aspera Configuration

We need to configure 2 Aspera nodes; one for upload and one for download.

Each node will be attached to one S3 bucket in Nuxeo:
- The main Nuxeo S3 bucket in Nuxeo for download purpose
- The S3 transient store bucket for upload purpose

Follow this [Aspera documentation](https://aspera.ibmaspera.com/help/admin/nodes/adding_aws_s3_bucket) to attach S3 buckets to Aspera.

Please note that, in the documentation above, for **Download** the IAM role used by Aspera only needs `READ` permissions on the bucket.

The policy attached to this role can be added as shown in this sample:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name",
        "arn:aws:s3:::bucket-name/\*"
      ]
    }
  ]
}
```

The policy for **Upload** must be able to put and get objects from the S3 bucket:

```
{
  "Version": "2012-10-17",
  "Statement": [
  {
    "Sid": "VisualEditor0",
    "Effect": "Allow",
    "Action": [
    "s3:PutObject",
    "s3:GetObject",
        "s3:AbortMultipartUpload",
        "s3:DeleteObject",
        "s3:ListMultipartUploadParts"
      ],
      "Resource": "arn:aws:s3:::bucket-name/*"
    },
    {
      "Sid": "VisualEditor1",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucketMultipartUploads",
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": "arn:aws:s3:::bucket-name"
    }
  ]
}
```

### Nuxeo Configuration

#### Transient Store on AWS

To use S3 direct upload with Nuxeo, you will need to add another policy to a new role:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets"
            ],
            "Resource": "arn:aws:s3:::*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:ListBucketMultipartUploads"
            ],
            "Resource": "arn:aws:s3:::yourbucketname"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:ListBucketMultipartUploads"
            ],
            "Resource": "arn:aws:s3:::yourbucketname/*"
        }
    ]
}
```

Make sure that all configuration values are set in the `nuxeo.conf`:

```
nuxeo.s3storage.useDirectUpload=true
nuxeo.s3storage.transient.bucket=
nuxeo.s3storage.transient.roleArn=
nuxeo.aws.accessKeyId=
nuxeo.aws.secretKey=
nuxeo.aws.region=
nuxeo.s3storage.bucket=
```

#### Aspera Nuxeo Configuration

Add the aspera access keys in `nuxeo.conf`:

Example:

```
## is the same for the 2 nodes
aspera.node.url=https://ats-aws-us-east-1.aspera.io
aspera.node.port=443

### ACCESS KEY ON UPLOAD NODE LINKED TO TS S3 BUCKET
aspera.acess.key.id=
### SECRET KEY ON UPLOAD NODE LINKED TO TS S3 BUCKET
aspera.acess.key.secret=

### ACCESS KEY ON DOWNLOAD NODE LINKED TO TMAIN S3 BUCKET
aspera.download.acess.key.id=
### SECRET KEY ON DOWNLOAD NODE LINKED TO MAIN S3 BUCKET
aspera.download.acess.key.secret=
```

## Functional Overview

The Nuxeo Aspera Connector uses "Transfers" to add content to the system.

The process is divided into 2 steps: Upload and Create.

In the first step, the user **uploads** content to the transfer bucket. While in this step, he can add files to the bucket and add properties that will apply to the content. Properties can be added to all files at once (common metadata), to multiple files at once (bulk edit of metadata) and one at a time.

Once the metadata has been edited to fit the user's needs, the transfer can be completed and the content is then **created** in the system.

Transfers have 3 states: **Draft** (no content added yet), **In Progress** (content added) and **Completed** (the transfer has been completed and the content has been created in the system).

### Aspera Upload

Once in your instance, Nuxeo Aspera Upload can be accessed from two different ways:

- From the **User Settings** menu located on the left side:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/1-aspera.png
    name: 1-aspera.png
    addons#screenshot#up_to_date
--}}
![1-aspera.png](nx_asset://9a876bf6-3d88-4877-8205-9359d95e1cc4 ?w=250,border=true)

- By clicking on the Aspera upload button displayed on every folderish document (workspace, folder, etc.)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/2-aspera.png
    name: 2-aspera.png
    addons#screenshot#up_to_date
--}}
![2-aspera.png](nx_asset://baeef2eb-ddbc-41e1-b036-46ee567027bf ?w=450,border=true)

> The files uploaded by Aspera will be accessible in this folderish document (by default the target location is the user personal workspace)

Once on the Aspera Upload screen, you will be able to download the Aspera Desktop client via the following banner at the top:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-setup.png
    name: setup.png
    addons#screenshot#up_to_date
--}}
![aspera-setup.png](nx_asset://f72d1a6e-546b-4333-8898-33a6c4d2275e ?w=450,border=true)

Once on the Aspera menu, 2 tabs are available:
- [Transfers](#transfers)
- [Upload to Nuxeo](#upload-to-nuxeo)

#### Transfers

This screen shows the status of all current transfers in your Nuxeo application.</br>

You can:
- Access the transfer metadata and files properties
- Complete transfers
- Share transfers
- Delete transfers (as long as they have not been completed)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/4-aspera.png
    name: 4-aspera.png
    addons#screenshot#up_to_date
--}}
![4-aspera.png](nx_asset://d6df353e-f79a-4041-bf26-23b66ab6253b ?w=450,border=true)

#### Upload To Nuxeo

On this screen, different actions are available; you can:

- Drag and drop (or click to select) file(s) to upload with Aspera and follow the status of the uploads (whether you have the Aspera desktop client or not).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/0-aspera.png
    name: 0-aspera.png
    addons#screenshot#up_to_date
--}}
![0-aspera.png](nx_asset://be725a89-3066-425a-8a66-e5cb41b3a440 ?w=450,border=true)

- Define/edit the common metadata of the current transfer (set of uploaded files) by clicking on the **Edit** button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/5-aspera.png
    name: 5-aspera.png
    addons#screenshot#up_to_date
--}}
![5-aspera.png](nx_asset://fe42d949-072f-4420-8ff7-4682aa516a96 ?w=450,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/6-aspera.png
    name: 6-aspera.png
    addons#screenshot#up_to_date
--}}
![6-aspera.png](nx_asset://dc156eb6-dfa7-4ebe-980a-aff7a5a076bd ?w=450,border=true)

- Modify the permissions to share the transfer with other user(s) (i.e. another user is responsible for modifying the metadata).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/7-aspera.png
    name: 7-aspera.png
    addons#screenshot#up_to_date
--}}
![7-aspera.png](nx_asset://899fe8a4-5e13-4e32-a722-fa0bdc57b73e ?w=450,border=true)

- Edit/Delete each file.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/8-aspera.png
    name: 8-aspera.png
    addons#screenshot#up_to_date
--}}
![8-aspera.png](nx_asset://4924c339-5ec4-44cb-9298-c911b0c3a567 ?w=450,border=true)

- Bulk edit selected files metadata in once.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/9-aspera.png
    name: 9-aspera.png
    addons#screenshot#up_to_date
--}}
![9-aspera.png](nx_asset://c96521a7-a32d-4c28-ae5e-cf623cdd2905 ?w=450,border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/10-aspera.png
    name: 10-aspera.png
    addons#screenshot#up_to_date
--}}
![10-aspera.png](nx_asset://462aa78e-525d-4b97-a8b2-27791a999a60 ?w=450,border=true)

- **Complete transfer** means to create the related documents in the Nuxeo application (once all files have been uploaded).

{{#> callout type='note' }}
When completing a transfer, the "common metadata" is propagated to all Nuxeo documents (except all single/bulk metadata edits override them).
{{/callout}}

### Aspera Download

The Nuxeo Aspera Download action is accessible via a button displayed when selecting one or several documents:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/3-aspera.png
    name: 3-aspera.png
    addons#screenshot#up_to_date
--}}
![3-aspera.png](nx_asset://7fb3e281-3edc-46f9-bb4d-f13615876a1a ?w=450,border=true)

### How it Works

**Aspera Upload**

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-upload.png
    name: upload.png
    addons#schema#up_to_date
--}}
![aspera-upload.png](nx_asset://2b3d8f3e-2d6c-4357-8599-b6325158c578 ?w=450,border=true)

**Aspera download**

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-download.png
    name: download.png
    addons#schema#up_to_date
--}}
![aspera-download.png](nx_asset://0127fdfb-455f-4f79-aaa5-df414f77cc07 ?w=450,border=true)

## Customization

### Model

The `Transfer` document type can be overridden to edit custom metadata needed for your Nuxeo documents created after Aspera uploads.

To do so:

1. In Nuxeo Studio, go to **Settings** > **Registries** and add [those schemas](https://github.com/nuxeo/nuxeo-aspera-connector/blob/master/schemas-aspera.json) and [this lifecycle](https://github.com/nuxeo/nuxeo-aspera-connector/blob/master/lifecycle-aspera.json).
1. Create a new document type, name it `Transfer` (id and label) that extends **File** document type.
1. Check the **Hidden in navigation** facet for this new document type and add the schemas `transfer-dc` and `common-aspera`.
1. Select the life cycle `transfer_lifecyle`.
1. Save and commit: you will be able now to add different schemas to your new `Transfer` document.

### UI Layouts

After having overridden the `Transfer` document type, you can now override the different UI layouts in the Nuxeo View Designer to be able to edit those metadata:

  - The metadata layout `nuxeo-transfer-metadata-layout.html`

  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/12-aspera.png
    name: 12-aspera.png
    addons#screenshot#up_to_date
  --}}
  ![12-aspera.png](nx_asset://e6eebaab-e3d8-4b58-b385-53e14bdd1d82 ?w=450,border=true)

  - The edit layout `nuxeo-transfer-edit-layout.html`

  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/6-aspera.png
    name: 6-aspera.png
    addons#screenshot#up_to_date
  --}}
  ![6-aspera.png](nx_asset://dc156eb6-dfa7-4ebe-980a-aff7a5a076bd ?w=450,border=true)

  - The import layout (for single/bulk metadata edition) `nuxeo-transfer-import-layout.html`

  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/10-aspera.png
    name: 10-aspera.png
    addons#screenshot#up_to_date
  --}}
  ![10-aspera.png](nx_asset://462aa78e-525d-4b97-a8b2-27791a999a60 ?w=450,border=true)

  - The view layout `nuxeo-transfer-view-layout.html`

  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/13-aspera.png
    name: 13-aspera.png
    addons#screenshot#up_to_date
  --}}
  ![13-aspera.png](nx_asset://cda4f360-497c-4dfe-b0f6-e4a446d56c26 ?w=450,border=true)

All those layouts can be found [on GitHub](https://github.com/nuxeo/nuxeo-aspera-connector/tree/master/nuxeo-aspera-web/src/main/resources/web/nuxeo.war/ui/document/transfer).

Just copy/paste those layouts and you will be able to add or remove (custom) metadata.

{{#> callout type='info' }}
The metadata inside the single/bulk edit layout is related to the `ca:files/*/properties` metadata of the `Transfer` document (the value is a JSON containing the properties you want to set).</br>
It means that you can add any metadata that you want (without creating any additional schemas inside Nuxeo Studio). It will propagate those properties to the different created files (except if those metadata doesn't exist in the schemas of those newly created files).
{{/callout}}

{{#> callout type='info' }}
When overriding, be careful to put back the actions and other HTML elements that are not related to metadata
{{/callout}}

## Polymer UI Custom Example

If you want to develop your custom UI rather than using the Nuxeo addon, you can build and deploy [this maven project](https://github.com/nuxeo/nuxeo-aspera-connector/tree/master/nuxeo-aspera-custom-web).

When running your instance, go to `NUXEO_URL/nuxeo/app/` to get a simple UI example on how to use the Aspera connector:
- To upload a file in a given location via the connector
- To upload and add a file to a given document via the connector
- To list all documents with binaries and download them via the connector

Details:
- `my-app` is the main page containing all `pages` folder pages.
- In each page, `aspera-connector` is called to set Aspera authentication in place.
- `aspera-connector.html` is wrapping the Aspera API to be used for upload/download via the connector.
- All Nuxeo operations used in this sample are used in the [Addon itself](https://github.com/nuxeo/nuxeo-aspera-connector)
