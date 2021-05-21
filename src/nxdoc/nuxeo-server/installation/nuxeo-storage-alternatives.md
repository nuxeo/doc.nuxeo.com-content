---
title: Nuxeo Storage Alternatives
is_overview: true
review:
    comment: ''
    date: '2021-03-10'
    status: ok
toc: false
tree_item_index: 1390
---

Nuxeo is pluggable so that it can be adapted to different deployment environments and use cases.

This means you can define where you want to manage your data, and because the answer may depend on the type of data. Nuxeo provides different types of backends for different types of storage.

## Document Storage

You can configure:

- Where you store the document metadata and hierarchy
    - SQL Database (PostgresSQL, Oracle, MSSQL, MySQL, Amazon RDS)
    - MongoDB
- Where you store the binary streams (the files you attach to documents)
    - Simple FileSystem
    - S3, Azure
    - Leveraging Content Delivery Networks for caching content securely all around the globe.

<div class="table-scroll">
    <table class="hover">
        <tbody>
            <tr>
                <td colspan="1">
                    ![]({{file name='VCS1.png'}} ?w=200,thumbnail=true)
                </td>
                <td colspan="1">
                    ![]({{file name='DBS.png'}} ?w=200,h=317)
                </td>
            </tr>
            <tr>
                <td colspan="1">
                    **_PosgreSQL + FileSystem_**
                </td>
                <td colspan="1">
                    _**MongoDB + S3**_
                </td>
            </tr>
        </tbody>
    </table>
</div>


## Indexes

You can also select where you store the indexes (including the full-text)

- SQL Database
- Elasticsearch

![]({{file name='ES-Single.png'}} ?w=300,h=213,border=true)

Since 6.0, the default configuration uses Elasticsearch.

## Others

In the same logic, you can choose:
- Where you store the caches and transient data
    - In Memory (per instance basis)
    - Redis (shared memory, only for the transient data, not the caches)
- Where you store [Users and Groups]({{page page='data-lists-and-directories'}})
    - SQL Database
    - LDAP or Active Directory
    - Mix of both
    - External system
- Where you store the audit log entries
    - In Elasticsearch
    - In the database