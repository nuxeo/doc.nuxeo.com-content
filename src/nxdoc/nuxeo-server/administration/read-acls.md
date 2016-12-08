---
title: Read ACLs
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - acl
    - security-component
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Read+ACLs
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Read+ACLs'
    page_id: '17793928'
    shortlink: iIMPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iIMPAQ'
    source_link: /display/NXDOC/Read+ACLs
tree_item_index: 1800
version_override:
    'LTS 2015': 710/admindoc/read-acls
    '6.0': 60/admindoc/read-acls
    '5.8': 58/admindoc/read-acls
history:
    -
        author: Solen Guitter
        date: '2016-05-27 08:12'
        message: ix typ
        version: '9'
    -
        author: Manon Lumeau
        date: '2016-03-29 10:03'
        message: 'Fix link '
        version: '8'
    -
        author: Solen Guitter
        date: '2016-01-08 09:37'
        message: ''
        version: '7'
    -
        author: Benoit Delbosc
        date: '2016-01-06 14:13'
        message: add a note on how to rebuild the read acls
        version: '6'
    -
        author: Benoit Delbosc
        date: '2015-05-06 08:55'
        message: Add note about vacuum procedure and Elasticsearch alternative
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

Two modes are available to configure the management of ACLs in the Nuxeo Platform. They are activated using the [`aclOptimization`]({{page page='repository-configuration'}}) parameter in the repository configuration.

*   ReadACL OFF (`aclOptimization` to false) only writes the permissions in the ACL table. This mode is costless at the write time (document creation, permissions changes) but has an important cost at read time, when filtering the results of a search.
*   ReadACL ON (`aclOptimization` to true) is the default one in the Nuxeo Platform. It computes the READ ACLs for every document at document creation or permission settings: not only permissions are written in the ACL table, but other tables are updated to provide an efficient cache when launching queries. So this mode is fast at read time, but may be expensive at write time.

ReadACL ON is the default choice because in most cases people would prefer to promote better search performances rather that document update performances. Quick search results are usually considered as more critical.

{{#> callout type='warning' heading='Rebuilding READ ACLs'}}

When disabling then re-enabling ReadACL the computed READ ACLs might be not up to date because the ACL changes done while the option was disabled are missing.
You can re build the READ ACLs cache using a stored procedure when Nuxeo is down:

```
-- For PostgreSQL
SELECT nx_rebuild_read_acls();
-- For Oracle
CALL nx_rebuild_read_acls();
-- For MsSQL
EXEC dbo.nx_rebuild_read_acls
GO
```

{{/callout}}

## Potential Issues

*   A technical consequence of this trade-off is a case where the Nuxeo Platform may encounter problems: setting new permission on a big folder (like a domain) may result in a timeout when saving the changes in the **Permissions** tab.
*   There is an ACL cache at the database level for each user that logins, this cache is flushed when Nuxeo starts. For long running instance with lots of different users the size of the cache can impact the write operations.

## Possible solutions

*   The main solution is to:
    1.  Use groups dedicated to these big folders.
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

*   Another solution if you need both write and read high performance is to disable the ReadACL and [move slow queries from the database to Elasticsearch](/x/F4tkAQ).

&nbsp;
