---
title: Read ACLs
review:
    comment: ''
    date: ''
    status: ok
labels:
    - acl
toc: true
confluence:
    ajs-parent-page-id: '21921866'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Read+ACLs
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Read+ACLs'
    page_id: '21921890'
    shortlink: YoBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/YoBOAQ'
    source_link: /display/ADMINDOC60/Read+ACLs
tree_item_index: 900
version_override:
    'FT': '/nxdoc/read-acls'
    'LTS 2016': 810/nxdoc/read-acls
history:
    -
        author: Benoit Delbosc
        date: '2015-05-06 08:58'
        message: dd note about vacuum procedure and Elasticsearch alternativ
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-12-10 15:58'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-11-25 10:44'
        message: ''
        version: '3'
    -
        author: Thierry Martins
        date: '2013-11-22 16:56'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2013-11-22 16:49'
        message: ''
        version: '1'

---
## ACL Management Modes

Two modes are available to configure the management of ACLs in the Nuxeo Platform. They are activated using the [`aclOptimization`]({{page page='vcs-configuration'}}) parameter in the repository configuration.

*   ReadACL OFF (`aclOptimization` to false) only writes the permissions in the ACL table: this mode is costless at the write time (document creation, permissions changes) but has an important cost at read time, when filtering the results of a search.
*   ReadACL ON (`aclOptimization` to true) is the default one in the Nuxeo Platform. It computes the READ ACLs for every document at document creation or permission settings: not only permissions are written in the ACL table, but other tables are updated to provide an efficient cache when launching queries. So this mode is fast at read time, but may be expensive at write time.

ReadACL ON is the default choice because in most cases people would prefer to promote better search performances rather that document update performances. Quick search results are usually considered as more critical.

## Potential Issues

*   A technical consequence of this trade-off is a case where the Nuxeo Platform may encounter problems: setting new permission on a big folder (like a domain) may result in a timeout when saving the changes in the **Access rights** tab.
*   There is an ACL cache at the database level for each user that logins, this cache is flushed when Nuxeo starts. For long running instance with lots of different users the size of the cache can impact the write operations.

## Possible solutions

*   The main solution is to:

1.  1.  Use groups dedicated to these big folders.
    2.  Add users and subgroups to these groups instead of changing the permissions on these big folders.

*   For long running instance with lots of users, you can call periodically a vacuum procedure at the database level, this should be done preferably when the application load is low:

    ```sql
    -- For PostgreSQL
    SELECT nx_vacuum_read_acls();
    -- For Oracle
    CALL nx_vacuum_read_acls();
    -- For MsSQL
    EXEC dbo.nx_vacuum_read_acls
    GO
    ```

Another solution if you need both write and read high performance is to disable the ReadACL and [move slow queries from the database to Elasticsearch](/x/F4tkAQ).
