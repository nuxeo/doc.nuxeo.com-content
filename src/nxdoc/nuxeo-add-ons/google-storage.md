---
title: Google Storage
description: The Google Storage addon is a Nuxeo Binary Manager for Google. It stores Nuxeo's binaries (the attached documents) in a Google bucket.
review:
    comment: ''
    date: '2019-08-06'
    status: ok
labels:
    - lts2019-ok
    - google-storage
    - binary-manager
    - multiexcerpt-include
toc: true
tree_item_index: 650
---

{{! excerpt}}
The [Google Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/google-storage) addon is a Nuxeo Binary Manager for Google. It stores Nuxeo's binaries (the attached documents) in a [Google Storage](https://cloud.google.com/storage/) bucket.
{{! /excerpt}}

{{#> callout type='info' heading='University'}}
Watch the related courses on Hyland University:</br>
[Nuxeo Google Storage - Product News](https://university.hyland.com/courses/e4052)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Google Storage/university-google-storage.png
    name: university-google-storage.png
    addins#screenshot#up_to_date
--}}
![university-google-storage.png](/nx_assets/e57ee96f-c11e-4a5a-abda-3532ed36bded.png ?w=450,border=true)
{{/callout}}

## Before You Start

You should be familiar with Google Storage and in possession of your credentials.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Nuxeo Configuration

To configure the package, you will need to provide values for the configuration parameters that define your Google credentials, bucket and project.

You can do the configuration using the `nuxeo.conf` properties described below.

### Specifying Your Google Credentials and Region

In `nuxeo.conf`, add the following lines:

```
# GCP Bucket ID
nuxeo.gcp.storage.bucket=

# GCP Bucket prefix
nuxeo.gcp.storage.bucket_prefix=

# GCP Project ID
nuxeo.gcp.project=

# JSON GCP Credentials
nuxeo.gcp.credentials=
    - absolute JSON GCP credentials file path
    - file name of credentials in `nxserver/config`
    - if not set Nuxeo will look into 'gcp-credentials.json' file by default (located in `nxserver/config`)
```

If you installed the bundle JAR manually instead of using the Nuxeo Package you will also need:

```
nuxeo.core.binarymanager=org.nuxeo.ecm.core.storage.gcp.GoogleStorageBinaryManager
```
