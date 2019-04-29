---
title: Content Federation with Simflofy
description: 'Nuxeo Simflofy connector allows to leverage content federation from Simflofy in Nuxeo.'
review:
    comment: ''
    date: '2019-12-19'
    status: ok
labels:
    - simflofy
toc: true
tree_item_index: 350
---

{{! excerpt}}
The Nuxeo Simflofy addon allows users to search, find and view documents stored in an external system, thanks to Nuxeo federation capabilities. Binary files can either be copied in Nuxeo repository or remain "in-place".
{{! /excerpt}}

{{#> callout type='info'}}
Watch the related video on Nuxeo University:</br>
[Product News - Nuxeo Federation Services](https://university.nuxeo.com/learn/course/external/view/elearning/184/NuxeoFederationServices).
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Content Federation with Simflofy/nuxeo-federation-university.png
    name: nuxeo-federation-university.png
    addins#screenshot#up_to_date
--}}
![nuxeo-federation-university.png](nx_asset://70e0644b-87e4-4bf3-94bc-be3f82b9f35e ?w=450,border=true)
{{/callout}}

[Simflofy](https://www.simflofy.com/) is a Federation and Integration platform for content management. It provides ways to search or migrate data across multiple content repositories.

## Synchronization Process

The synchronization is done according to the following scenario:

1. Simflofy periodically queries 3rd party repositories to fetch content based on rules that can be specified (New documents, modified documents, ...).

1. Simflofy creates documents in Nuxeo with references to these contents.

1. Nuxeo is then able to access the documents that are stored in those 3rd party repositories.

Simflofy documents are now stored in Nuxeo like any other document.

## Installation

- If you need to install your own Simflofy instance, you can follow the [Simflofy installation steps](http://simflofy.helpdocsonline.com/install-and-configuration) from their documentation.

{{#> callout type='warning' heading='Simflofy requirements'}}
Note that Simflofy requires **MongoDB 3.4.x** as a database.
{{/callout}}

- Install the [Nuxeo Simflofy connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-simflofy) available in the marketplace in your Nuxeo instance.

## Configuration

This addon comes with a [Blob Provider]({{page page='file-storage'}}#blob-manager-and-blob-providers) that enables access from Nuxeo to any content that Simflofy knows how to federate. This blob provider is configurable with the following parameters:

- `nuxeo.simflofy.url`: the Simflofy URL.
- `nuxeo.simflofy.username`: the username that Nuxeo will use to access Simflofy.
- `nuxeo.simflofy.password`: the password that Nuxeo will use to access Simflofy.
- `nuxeo.simflofy.createFromKey.users`: the list of users that can create blobs in this blob provider (separated by commas).

{{#> callout type='info' heading='Full access'}}
`nuxeo.simflofy.createFromKey.users=*` allows all users to be able to create blobs.
{{/callout}}

Example:
```
nuxeo.simflofy.url=http://localhost:8080/simflofy-admin
nuxeo.simflofy.username=admin
nuxeo.simflofy.password=admin
nuxeo.simflofy.createFromKey.users=user1,user2...
```

These configuration parameters should be provided in the configuration file `nuxeo.conf`.
