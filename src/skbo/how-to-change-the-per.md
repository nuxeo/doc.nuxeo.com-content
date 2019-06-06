---
title: How to change the permissions on a large number of documents
description: How to change the permissions on a large number of documents
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - administration
    - readacls

---
# How to change the permissions on a large number of documents?
## Problem
You are attempting to change the permissions on a huge number of documents and it fails (due to a transaction timeout). How to perform a change of permissions on a large number of documents?
## Solution
This is documented at <https://doc.nuxeo.com/nxdoc/read-acls/>

When speaking about the ReadACLs, the following comment is available
> A technical consequence of this trade-off is a case where the Nuxeo Platform may encounter problems: setting new permission on a big folder (like a domain) may result in a timeout when saving the changes in the Permissions tab.

Different options to perform this operation are explained including increasing temporarily the transaction timeout or setting off the ReadACLs)

If this operation is to be performed often, the following is also explained:
>Another solution if you need both write and read high performance is to disable the ReadACL and move slow queries from the database to Elasticsearch.

There is no need to reindex the documents as part of this procedure.

When setting ReadACLs to ON again, it is advised to run the **nx_rebuild_read_acls** script before rebooting the server, so that the boot process remains fast and does not itself timeout.


2019-06-01T17:38:04.866Z
## (c) Nuxeo Support Knowledge Base Outline 2019
