---
title: Google Storage
description: The Google Storage is a Nuxeo Binary Manager for Google. It stores Nuxeo's binaries (the attached documents) in a Google bucket.
review:
    comment: ''
    date: '2019-08-06'
    status: ok
labels:
    - lts2018-ok
    - google-storage
    - binary-manager
    - multiexcerpt-include
toc: true
---

The [Google Storage](https://connect.nuxeo.com/nuxeo/site/marketplace/package/google-storage) is a Nuxeo Binary Manager for Google\. It stores Nuxeo's binaries (the attached documents) in a [Google Storage](https://cloud.google.com/storage/) bucket.

## Before You Start

You should be familiar with Google Storage and be in possession of your credentials.

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Nuxeo Configuration

In order to configure the package, you will need to provide values for the configuration parameters that define your Google credentials, bucket and project.

You can do the configuration using the `nuxeo.conf` properties described below.

### Specifying Your Amazon Credentials and Region

In `nuxeo.conf`, add the following lines:

```
nuxeo.gcp.storage.bucket=
nuxeo.gcp.storage.bucket_prefix=
nuxeo.gcp.project=
nuxeo.gcp.credentials=
```

If you installed the bundle JAR manually instead of using the Nuxeo Package you will also need:

```
nuxeo.core.binarymanager=org.nuxeo.ecm.core.storage.gcp.GoogleStorageBinaryManager
```