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
    ajs-parent-page-id: '16810056'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Read+ACLs
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Read+ACLs'
    page_id: '17793964'
    shortlink: rIMPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/rIMPAQ'
    source_link: /display/ADMINDOC58/Read+ACLs
history:
    - 
        author: Benoit Delbosc
        date: '2015-05-06 09:00'
        message: dd note about vacuum procedur
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-11-25 10:45'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

## ACL Management Modes

Two modes are available to configure the management of ACLs in the Nuxeo Platform. They are activated using the [`aclOptimization`]({{page page='vcs-configuration'}}) parameter in the repository configuration.

*   ReadACL OFF (`aclOptimization` to false) only writes the permissions in the ACL table: this mode is costless at the write time (document creation, permissions changes) but has an important cost at read time, when filtering the results of a search.
*   ReadACL ON (`aclOptimization` to true) is the default one in the Nuxeo Platform. It computes the READ ACLs for every document at document creation or permission settings: not only permissions are written in the ACL table, but other tables are updated to provide an efficient cache when launching queries. So this mode is fast at read time, but may be expensive at write time.

ReadACL ON is the default choice because in most cases people would prefer to promote better search performances rather that document update performances. Quick search results are usually considered as more critical.

</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>

## Potential Issues

*   A technical consequence of this trade-off is a case where the Nuxeo Platform may encounter problems: setting new permission on a big folder (like a domain) may result in a timeout when saving the changes in the **Access rights** tab.
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

Another solution would be to save the permissions asynchonously: A persisted job needs to be scheduled for this task, to provide the opportunity to resume the work if the Nuxeo Platform is stopped (shutdown or unexpected failure).

Nuxeo will work on this solution for the next release, now that persisted jobs are available in the framework. However, this will not prevent to have an important activity on the database side, that would impact the overall performance of the application, during this update.