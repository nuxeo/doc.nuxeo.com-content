---
title: Nuxeo Server
description:
labels:
    - deployment
    - bchauvin
    - architecture
    - cluster
    - content-review-lts2017
    - lts2019-ok
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: true
tree_item_index: 300
---

## Concept

Nuxeo Server can be installed either with the [Nuxeo Docker Image]({{page version='' space='nxdoc' page='docker-image'}}) or a [simple cross-platform zip file]({{page version='' space='nxdoc' page='tomcat-server-zip'}}).

Nuxeo Server can be deployed anywhere:
- On physical server
- Inside virtual machines
- In a containerized environment

Having a lightweight embedded Nuxeo server is a solution commonly used for unit testing or offline access. For the latter, the Nuxeo server would be embedded client-side (for example, on a tablet) to allow offline access, and would synchronize with a central Nuxeo server when going back online.

## Recommendation

At least **two Nuxeo server nodes**. You can add any number of nodes to scale out performances.

## Configuration

To set up clustering, please update the following parameters in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}):

- **`nuxeo.cluster.enabled`**: must be set to `true` to enable clustering.
- **`nuxeo.cluster.nodeid`**: must be set to a cluster node id. The id should be a string specific to this instance (and therefore all instances must have different cluster node ids).
