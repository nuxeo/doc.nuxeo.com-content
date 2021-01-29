---
title: Nuxeo Aspera Connector
description: 'Nuxeo Aspera Connector enables users to download/upload binaries with Aspera.'
review:
    comment: ''
    date: '2020-11-17'
    status: ok
labels:
    - lts2019-ok
    - vpasquier
toc: true
tree_item_index: 1100
---

{{! excerpt}}
The [Nuxeo Aspera](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-aspera) connector
enables users to upload/download binaries with the Aspera Connect client. It is designed to be used with [**Aspera On Cloud**](https://www.ibm.com/cloud/aspera) instances, however, if you use a **self-hosted Aspera** instance, you will still be able to use the Nuxeo Aspera Connector.
Contact your IBM Aspera team for more information and assistance.
{{! /excerpt}}

{{#> callout type='info'  heading='Nuxeo University'}}
Watch the related courses on Nuxeo University:</br>
[Product News on Nuxeo Aspera Connector](https://university.nuxeo.com/learn/course/external/view/elearning/223/aspera-connector)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_aspera.png
    name: Screenshot 2021-01-20 at 09.39.38.png
    addins#screenshot#up_to_date
--}}
![university_aspera.png](nx_asset://8f01d909-55e5-4fdd-99b7-a496ea20ddd2 ?w=450,border=true)
{{/callout}}

## Version 3.0.0

### Requirements

- Aspera Desktop Client - you will be prompted to install the necessary version when using the Connector.
- Nuxeo Server LTS 2019 (**10.10, HF 31, at least**) with access to AWS S3 Storage along with the [Amazon S3 Online Storage plugin](https://connect.nuxeo.com/nuxeo/site/marketplace/package/amazon-s3-online-storage?version=1.9.12)
- IBM Aspera on Cloud Subscription (see the note above about Aspera self-hosted)

{{#> callout type='warning'}}
If you are **upgrading from a previous version** of the Nuxeo Aspera connector, please see the [upgrade notes]({{page page='nuxeo-aspera-upgrade-notes'}}) for **critical** information related to potential **breaking code**.
{{/callout}}

**Version 3.0.0** of the Nuxeo Aspera Connector is aligned with **IBM Aspera Connect 3.9.9 SDK** and, by default, points to the IBM Aspera Connect SDK 3.9.9 CDN URL. If you would like to host the SDK on your own servers or point to another version, please see our entry on [configuring the SDK url](#sdk-url). If you are using a version newer than this, functionality might be affected.

### Installation

Installation is comprised of two steps:

1. Install the [Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-aspera) available from the marketplace.
1. Install the Aspera Connect desktop client (you will be prompted to install the necessary Aspera software when you try to use the Connector, if you do not already have it).

### Configuration

#### Aspera Configuration

We need to configure 2 Aspera nodes; one for upload and one for download.

Each node will be attached to one S3 bucket in Nuxeo:
- The main Nuxeo S3 bucket in Nuxeo for download purpose
- The S3 transient store bucket for upload purpose

Follow this [Aspera documentation](https://aspera.ibmaspera.com/help/admin/nodes/adding_aws_s3_bucket) to attach S3 buckets to Aspera.

Please note that, in the documentation above, for **Download** the IAM role used by Aspera only needs `READ` permissions on the bucket.

The policy attached to this role can be added as shown in this **sample**:

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

The policy for **Upload** must be able to `put` and `get` objects from the S3 bucket, **for example**:

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

#### Nuxeo Configuration

##### Transient Store on AWS

To use S3 direct upload with Nuxeo, you will need to add another policy to a new role **for example**:

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
nuxeo.s3storage.transient.bucket=
nuxeo.aws.accessKeyId=
nuxeo.aws.secretKey=
nuxeo.aws.region=
nuxeo.s3storage.bucket=
```

{{#> callout type='note'}}
New in this release, `nuxeo.s3storage.useDirectUpload=true` and `nuxeo.s3storage.transient.roleArn=` (documented as part of the previous version configuration) are no longer necessary **for the Nuxeo Aspera Connector** and can be removed, **if you only use these values for the Nuxeo Aspera Connector, and not for any other reason**. See [upgrade notes]({{page page='nuxeo-aspera-upgrade-notes'}}).
{{/callout}}

#### Aspera Nuxeo Configuration

Add the Aspera access keys in `nuxeo.conf`:

**Example**:

```
## is the same for the 2 nodes
aspera.node.url=
aspera.node.port=

### ACCESS KEY ON UPLOAD NODE LINKED TO TS S3 BUCKET
aspera.access.key.id=
### SECRET KEY ON UPLOAD NODE LINKED TO TS S3 BUCKET
aspera.access.key.secret=

### ACCESS KEY ON DOWNLOAD NODE LINKED TO MAIN S3 BUCKET
aspera.download.access.key.id=
### SECRET KEY ON DOWNLOAD NODE LINKED TO MAIN S3 BUCKET
aspera.download.access.key.secret=
```

#### SDK URL

The Aspera Connect SDK version used with this version of the Nuxeo Aspera Connector defaults to Aspera Connect SDK 3.9.9. If you would like to use a different SDK, you can modify this in one of two ways:
- In the `nuxeo.conf` file
- As a contribution

<!--
(November 2020: We will update this documentation with samples)
-->

### Functional Overview

The **Nuxeo Aspera Connector** uses **Transfers** to add content to the Nuxeo system. Transfers are “wrappers” or “buckets” for the files/folders you add to the Nuxeo system.

#### Transfer Steps

The process of adding files and folders using the Nuxeo Aspera Connector is divided into 2 steps: **Upload** and **Create**.

In the first step, the user **uploads** files and folders to the transfer bucket. While in this step, it may be possible, depending on the chosen “transition type”, for a user to add items to the bucket and add properties that will apply (as needed/desired).

Once content and any metadata have been added, the transfer can be completed and the content is then **created** in the system.

#### Transfer Transition Types

Transitioning between the “upload” and “create” steps can be achieved in 2 ways: **automatically (auto-create)** or **manually**.

Users can choose which option to use when creating the transfer from the transfer dashboard/transfer view. When creating a transfer from a "folderish" document in the browsing tree, the transition type defaults to **manual**. You can toggle it to auto-create **before adding content**. It is not possible to change from manual to auto-create (or vice versa) after you start adding content to the transfer. **Once you set the auto-create, some limitations around modifying the transfer will apply**. As long as the transfer is empty, you can change the transition type, but once you start adding content, the transition type is "locked".

When auto-create is toggled/selected to be “on”, the user needs only to start the upload of the content to the transfer. Once the upload is completed, the system will automatically start the process to create the content in the system; no need to wait around simply to push a button.

**Before adding content** to the transfer, you can edit the **“common metadata”** which would apply to all items in the transfer. Users can, of course, decide not to include any metadata at all, and simply add content, too.

{{#> callout type='note' }}
There are some caveats when using auto-create (auto-create is set to “on”). Because of some asynchronous behavior, the ability to modify the transfer/file metadata or to add/remove content once your initial "add to transfer" has begun, is not allowed. If you discover that you have erred in the content/information, you will need to let the transfer process complete before addressing within the system; where the content was added (not the transfer).
{{/callout}}

If a user has content that needs to be “tagged” or “catalogued” with metadata before creation in the system, the “manual” transition option might be a better choice.

To use the **manual option**, choose “no” for auto-create or toggle the auto-create to “off” when creating a new transfer (you can only turn off auto-create if there is **no content in the transfer)**. This will require someone **manually start** the creation process by clicking the **Complete transfer** button once the upload is finished (the button is only visible once there is no longer an upload in progress).

When using the manual transition, the user uploads content to the transfer bucket. While in this step, a user can add content to the transfer and add properties that apply to the items. Properties can be added that "apply to all" using the “common metadata” panel; more file-specific properties can be added either to multiple files at once (bulk edit of metadata) and/or individually, using a single-file action.

Once the metadata has been edited to fit the user's needs, the transfer can be **completed** and the content is then created in the system.

Transfers have 3 functional states:
- `Started`: content is being "uploaded"
- `Pending`: content is being "created"  
- `Completed`: transfer has been completed and the content has been created in the system

#### Using Aspera with Nuxeo

Once in your instance, Nuxeo Aspera Upload can be accessed two different ways:

- From the **User Settings** menu located on the left side:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image3
    name: aspera-image3.png
    addins#screenshot#up_to_date
--}}
![aspera-image3](nx_asset://2a6ee847-e886-4047-8e82-f4cafda627eb ?w=250, border=true)

- By clicking on the Aspera upload button displayed on every folderish document (workspace, folder, etc.)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image19
    name: aspera-image19.png
    addins#screenshot#up_to_date
--}}
![aspera-image19](nx_asset://da4443e9-0ddb-4908-9ce8-5fcce2e108ce ?border=true)

> The content uploaded by Aspera will be accessible in this folderish document. If the transfer is "started" from the Aspera Dashboard or from the Transfer View using the "+ New Upload" button, the target location is the user's personal workspace.

Once on the Transfer View (as you begin to add content), you will be able to download the Aspera Desktop client via the following banner at the top (if not already installed or if a new version is needed):

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image14
    name: aspera-image14.png
    addins#screenshot#up_to_date
--}}
![aspera-image14](nx_asset://304c7c51-ec27-4a37-9b02-439879412d6a)

Once on the Aspera menu, there are 2 main views available:

- [Aspera Dashboard](#aspera-dashboard)
- [Transfer View](#transfer-view)

#### Aspera Dashboard

This screen shows the status of all current transfers in your Nuxeo application.

You can:
- Create new uploads/transfers
- Access the transfers’ metadata and content properties
- Complete transfers
- Share transfers
- Delete transfers

All of these actions are available via the “transfer” view, as well. You can find information on the actions in the [“transfer view”](#transfer-view) section below.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image20
    name: aspera-image20.png
    addins#screenshot#up_to_date
--}}
![aspera-image20](nx_asset://0a9c8974-1796-47c6-99b9-68aff556583e ?border=true)

{{#> callout type='note'}}
“Delete” does remove the content from the Aspera Node in most cases, however, we have seen some inconsistencies. It is advised that you **regularly clean** your Aspera Transfer Node. Deleting the transfer does not remove the content from the repository if the transfer has already been completed. This ONLY deletes the transfer “bucket” or “wrapper”)
{{/callout}}

#### Transfer View

To create a transfer from the dashboard, simply click **+ New Upload** in the upper right-hand corner. By default, this will set the “target document” (or destination) as the user’s personal workspace. This can be edited using the “common metadata” edit; "target location" value.

On this screen, different actions are available:

- Drag and drop (or click to select) file(s) or folder(s) to upload with Aspera and follow the status of the uploads (you can follow the status whether you have the Aspera desktop client or not).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image1
    name: aspera-image1.png
    addins#screenshot#up_to_date
--}}
![aspera-image1](nx_asset://43f35a20-386f-4600-a94f-aa7749e1df2a ?border=true)

- Define/Edit the common metadata, including the “target document” or the destination of the current transfer (set of uploaded files) by clicking on the **Edit** button.

{{#> callout type='info'}}
By default, when clicking **+ New Upload** from the Aspera Dashboard or the transfer view, the "target location" for the upload is the **user's personal workspace**. If you use the **Upload with Aspera** action from a folderish document, the "target location" will be set to **that folderish document**, by default.
{{/callout}}

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image7
    name: aspera-image7.png
    addins#screenshot#up_to_date
--}}
![aspera-image7](nx_asset://6f83fbc6-7402-4552-9bd7-54919ff9db0b ?border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image15
    name: aspera-image15.png
    addins#screenshot#up_to_date
--}}
![aspera-image15](nx_asset://97069cfe-16c9-4d54-bd8f-a578d88aa6aa ?w=350, border=true)

- Modify the permissions to share the transfer with other user(s) (e.g. another user is responsible for modifying the metadata).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image4
    name: aspera-image4.png
    addins#screenshot#up_to_date
--}}
![aspera-image4](nx_asset://c593d1b6-c8d5-4438-a18e-efaa0b7a75ba ?border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image6
    name: aspera-image6.png
    addins#screenshot#up_to_date
--}}
![aspera-image6](nx_asset://7d40c3b2-afa4-4c10-a424-18c1e4f9cfb6 ?w=350, border=true)

- Edit/Delete individual files.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image24
    name: aspera-image24.png
    addins#screenshot#up_to_date
--}}
![aspera-image24](nx_asset://23bc5d1a-0037-450c-ba58-b724bd07caa7 ?border=true)

- Bulk edit selected files metadata.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image25
    name: aspera-image25.png
    addins#screenshot#up_to_date
--}}
![aspera-image25](nx_asset://01f331b0-fce4-4dac-a645-f8bfae0e214a ?border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/10-aspera.png
    name: 10-aspera.png
    addins#screenshot#up_to_date
--}}
![10-aspera.png](nx_asset://462aa78e-525d-4b97-a8b2-27791a999a60 ?w=350, border=true)


- **Complete transfer** means to create the related documents in the Nuxeo application (once all content has been uploaded).</br>
 When completing a transfer, the "common metadata" is propagated to all Nuxeo documents (except where single/bulk metadata edits override them).

#### Aspera Download

The Nuxeo Aspera Download action is accessible via a button displayed when selecting one or several documents in a "folderish" document view:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/3-aspera.png
    name: 3-aspera.png
    addins#screenshot#up_to_date
--}}
![3-aspera.png](nx_asset://7fb3e281-3edc-46f9-bb4d-f13615876a1a ?border=true)

{{#> callout type='note'}}
While we distinguish between transfers used for “upload” purposes from “download” purposes, we currently only show the “upload” transfers on the transfer dashboard. We have improvements planned for displaying both.
{{/callout}}

### How It Works

#### File and Folder Type Definition

The Connector relies on the [`CreateFolder`](https://github.com/nuxeo/nuxeo/blob/master/modules/platform/nuxeo-automation/nuxeo-automation-features/src/main/java/org/nuxeo/ecm/automation/core/operations/services/FileManagerCreateFolder.java) operation to create content in the Nuxeo repository. By default the `Folder` doctype is created for "folders" and `File` for "files".

If these types are acceptable, be sure that you have defined your content model to allow for appropriate parent/children document types as shown in our [Nuxeo Studio documentation]({{page version='' space='studio' page='documents'}}). However, if you have written a contribution to apply logic to assign types, then that will be used when using the Nuxeo Aspera Connector.

If your content model needs are more advanced, you may also contribute a custom `FolderImporter` class for your custom Folder and File doctypes. See [FileManagerService](https://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202019-10.10/viewExtensionPoint/org.nuxeo.ecm.platform.filemanager.service.FileManagerService--plugins) on Nuxeo Explorer.

#### Aspera Upload

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image27
    name: aspera-image27.png
    addins#screenshot#up_to_date
--}}
![aspera-image27](nx_asset://246e2c62-44ca-490c-ae96-783d3510c828 ?border=true)

#### Aspera Download

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-image26
    name: aspera-image26.png
    addins#screenshot#up_to_date
--}}
![aspera-image26](nx_asset://55784608-f624-48aa-a670-b4aca341d828 ?border=true)

## Version 2.0.8

### Requirements

- Aspera Desktop Client - [latest version](https://downloads.asperasoft.com/en/downloads/2).
- Nuxeo Server LTS 2019 (10.10) with access to AWS S3 Storage.

### Installation

Installation is made of two steps:

1. Install the [Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-aspera) available from the marketplace.
1. Install the [Aspera desktop client](http://d3gcli72yxqn2z.cloudfront.net/connect/v4/bin/IBMAsperaConnectInstaller-3.8.1.161274.dmg).

### Configuration

#### Aspera Configuration

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

#### Nuxeo Configuration

##### Transient Store on AWS

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

##### Aspera Nuxeo Configuration

Add the Aspera access keys in `nuxeo.conf`:

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

### Functional Overview

The Nuxeo Aspera Connector uses "Transfers" to add files to the system.

The process is divided into 2 steps: **Upload** and **Create**.

In the first step, the user **uploads** files to the transfer bucket. While in this step, a user can add files to the bucket and add properties that will apply to them. Properties can be added to all files at once (common metadata), to multiple files at once (bulk edit of metadata) and one at a time.

Once the metadata has been edited to fit the user's needs, the transfer can be completed and the content is then **created** in the system.

Transfers have 3 states:
- **Draft**: no content added yet
- **In Progress**: content added
- **Completed**: transfer has been completed and the content has been created in the system

#### Aspera Upload

Once in your instance, Nuxeo Aspera Upload can be accessed from two different ways:

- From the **User Settings** menu located on the left side:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/1-aspera.png
    name: 1-aspera.png
    addons#screenshot#up_to_date
--}}
![1-aspera.png](nx_asset://9a876bf6-3d88-4877-8205-9359d95e1cc4 ?w=250, border=true)

- By clicking on the Aspera upload button displayed on every folderish document (workspace, folder, etc.)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/2-aspera.png
    name: 2-aspera.png
    addons#screenshot#up_to_date
--}}
![2-aspera.png](nx_asset://baeef2eb-ddbc-41e1-b036-46ee567027bf ?border=true)

> The content uploaded by Aspera will be accessible in this folderish document (by default the target location is the user personal workspace)

Once on the Aspera Upload screen, you will be able to download the Aspera Desktop client via the following banner at the top:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/aspera-setup.png
    name: setup.png
    addons#screenshot#up_to_date
--}}
![aspera-setup.png](nx_asset://f72d1a6e-546b-4333-8898-33a6c4d2275e ?border=true)

Once on the Aspera menu, 2 tabs are available:
- [Transfers](#transfers)
- [Upload to Nuxeo](#upload-to-nuxeo)

##### Transfers

This screen shows the status of all current transfers in your Nuxeo application.

You can:
- Access the transfer metadata and content's properties
- Complete transfers
- Share transfers
- Delete transfers (as long as they have not been completed)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/4-aspera.png
    name: 4-aspera.png
    addons#screenshot#up_to_date
--}}
![4-aspera.png](nx_asset://d6df353e-f79a-4041-bf26-23b66ab6253b ?w=450,border=true)

##### Upload To Nuxeo

On this screen, different actions are available; you can:

- Drag and drop (or click to select) file(s) to upload with Aspera and follow the status of the uploads (whether you have the Aspera desktop client or not).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/0-aspera.png
    name: 0-aspera.png
    addons#screenshot#up_to_date
--}}
![0-aspera.png](nx_asset://be725a89-3066-425a-8a66-e5cb41b3a440 ?w=450,border=true)

- Define/Edit the common metadata of the current transfer (set of uploaded content) by clicking on the **Edit** button.

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

- Bulk edit selected files.

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

#### Aspera Download

The Nuxeo Aspera Download action is accessible via a button displayed when selecting one or several documents:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Aspera Connector/3-aspera.png
    name: 3-aspera.png
    addons#screenshot#up_to_date
--}}
![3-aspera.png](nx_asset://7fb3e281-3edc-46f9-bb4d-f13615876a1a ?w=450,border=true)

#### How It Works

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

### Customization

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
