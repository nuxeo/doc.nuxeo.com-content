---
title: Persistence Architecture
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '22380905'
    ajs-parent-page-title: Content Repository
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Persistence+Architecture
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Persistence+Architecture'
    page_id: '22380769'
    shortlink: 4YBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4YBVAQ'
    source_link: /display/NXDOC60/Persistence+Architecture
tree_item_index: 200
history:
    -
        author: Anonymous
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

*   **Documents**
    For the documents, you can either choose the&nbsp;[VCS repository implementation]({{page page='vcs'}})&nbsp;that stores the data on an RDBMS, or the&nbsp;[DBS - MongoDB implementation]({{page page='dbs-mongodb'}}), that stores the data on a MongoDB document-based system.

*   **Binaries**
    T<span style="line-height: 21.58px;">he[ binary store documentation page]({{page page='binary-store'}}) describes the options available for storing binaries: file system, cloud-based, encrypted.</span>
