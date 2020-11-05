---
title: Persistence Architecture
description: The persistence layer of the Nuxeo Platform repository is configurable. Several options can be chosen depending on your scalability, integration, and performance constraints.
review:
    comment: ''
    date: '2020-11-04'
    status: ok
labels:
    - content-review-lts2016
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '950287'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Persistence+Architecture
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Persistence+Architecture'
    page_id: '20515468'
    shortlink: jAo5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/jAo5AQ'
    source_link: /display/NXDOC/Persistence+Architecture
tree_item_index: 200
history:
    -
        author: Florent Guillaume
        date: '2014-11-04 16:00'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-09-19 16:09'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-09-19 16:02'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-09-19 15:26'
        message: ''
        version: '1'

---
The persistence layer of the Nuxeo Platform repository is configurable. Several options can be chosen depending on your scalability, integration, and performance constraints.

The repository stores:

- **Documents**
  For the documents, you can either choose the&nbsp;[VCS repository implementation]({{page page='vcs'}})&nbsp;that stores the data on an RDBMS, or the&nbsp;[DBS - MongoDB implementation]({{page page='dbs'}}), that stores the data on a MongoDB document-based system.

- **Binaries**
  The[ binary store documentation page]({{page page='file-storage'}}) describes the options available for storing binaries: file system, cloud-based, encrypted.</span>
