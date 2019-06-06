---
title: Duplicated documents name in a same path
description: This SKB describes what might arise with duplicated documents name in a same path
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - runtime-drive
    - constraint
    - drive
    - duplicate
    - how-to
    - path

---
# Duplicated documents name in a same path
## Problem
One can observe that creating 2 documents with the same name and path is possible in Nuxeo.  
Can this cause a problem?
## Solution
Nuxeo handles documents based on their UUID, which must thus be unique to identify a document.  

There is thus no constraint on the number of same path+name documents in Nuxeo.  
The path+name is a reference for users, and some trouble might appear at this level when it comes to identifying a document, but Nuxeo has no concern about this fact.  

Having 2 files with same name can however become more problematic when used in conjunction with Drive client: See Jira ticket [NXDRIVE-1420](https://jira.nuxeo.com/browse/NXDRIVE-1420).

Since LTS 2017 (9.10) however, it is possible and supported for some databases for customer to add a database unicity constraint to enforce a user-friendly behavior. This is made the default on some databases. See [NXP-22421](https://jira.nuxeo.com/browse/NXP-22421) .


2019-06-01T17:37:20.989Z
## (c) Nuxeo Support Knowledge Base Outline 2019
