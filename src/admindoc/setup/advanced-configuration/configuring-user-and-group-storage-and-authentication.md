---
title: Configuring User & Group Storage and Authentication
review:
    comment: ''
    date: ''
    status: ok
labels:
    - authentication
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: viewpage.action?pageId=21921917
    canonical_source: viewpage.action?pageId=21921917
    page_id: '21921917'
    shortlink: fYBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fYBOAQ'
    source_link: /pages/viewpage.action?pageId=21921917
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2013-10-14 17:13'
        message: ''
        version: '5'
    -
        author: Benjamin Jalon
        date: '2012-03-19 06:00'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Benjamin Jalon
        date: '2012-03-19 06:00'
        message: ''
        version: '3'
    -
        author: Benjamin Jalon
        date: '2012-03-19 05:58'
        message: ''
        version: '2'
    -
        author: Benjamin Jalon
        date: '2012-03-19 05:58'
        message: ''
        version: '1'

---
The Nuxeo Platform provides large possibilities about User and Group storage, you can:

*   Bind the Nuxeo Platform users and group to ones defined into your LDAP,
*   Bind the Nuxeo Platform users and group to ones defined into SQL tables (as default configuration),
*   Bind the Nuxeo Platform users to ones defined into your LDAP and groups to ones locally stored into a SQL table,
*   Bind the Nuxeo Platform users to ones defined into an aggregation of 2 LDAP servers and groups to ones locally stored into a SQL table,
*   Bind the Nuxeo Platform users to ones defined into an aggregation of your LDAP server and a local SQL tableand groups to ones locally stored into a SQL table
*   ...

Many other more complex possibilities are possible, but this is the most usual ones. If you have other exposition than LDAP and SQL, this is also possible to bind to it.

You have all the documentation about the User Management configuration into [the User Management page]({{page space='nxdoc60' page='user-management'}}).

If the authentication against your infrastructure is particular - you have an SSO system, or others - the Nuxeo Platform has extension points that will let you adapt your Nuxeo application to your infrastructure. The documentation about that is [the Authentication section]({{page space='nxdoc60' page='authentication'}}).
