---
title: Content federation with Simflofy
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

[Simflofy](https://www.simflofy.com/) is a Federation and Integration platform for content management. It provides ways to search or migrate data across multiple content repositories.

The Nuxeo Simflofy connector leverages content federation provided by Simflofy by enabling
users to access data available in Simflofy.

## Synchronization process

The synchronization is done according to the following scenario:


1. Simflofy periodically queries 3rd party repositories to fetch some content based on some rules that can be specified (New documents, modified documents, ...).

2. Simflofy creates documents in Nuxeo with references to these contents.

3. Nuxeo is then able to access the documents that are stored in those 3rd party repositories.


Simflofy documents are now stored in Nuxeo like any other document.


## Installation

- If you need to install your own Simflofy instance, you can follow the [Simflofy installation steps](http://simflofy.helpdocsonline.com/install-and-configuration) from their documentation.

{{#> callout type='warning' heading='Simflofy requirements'}}
Note that Simflofy requires **MongoDB** 3.4.x as a database.
{{/callout}}


- Install the [Nuxeo Simflofy connector](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-simflofy) available in the marketplace in your Nuxeo instance.

## Configuration

The addon comes with a [Blob Provider]({{page page='file-storage'}}#blob-manager-and-blob-providers) that enables access from Nuxeo to any content that Simflofy knows how to federate. This blob provider is configurable with the following parameters:

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
