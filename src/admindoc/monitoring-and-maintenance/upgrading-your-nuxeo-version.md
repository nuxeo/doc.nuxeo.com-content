---
title: Upgrading your Nuxeo Version
labels:
    - upgrade
confluence:
    ajs-parent-page-id: '16810080'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Upgrading+your+Nuxeo+Version
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Upgrading+your+Nuxeo+Version'
    page_id: '16810051'
    shortlink: Q4AAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Q4AAAQ'
    source_link: /display/ADMINDOC58/Upgrading+your+Nuxeo+Version
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 16:05'
        message: 'emove children display macro  '
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-11-07 14:29'
        message: ''
        version: '11'
    - 
        author: Anonymous
        date: '2013-07-02 13:39'
        message: ''
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2012-08-13 11:22'
        message: Migrated to Confluence 4.0
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2012-08-13 11:22'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2011-06-15 11:19'
        message: typo
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-03-16 15:28'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-03-16 15:28'
        message: added link to KB upgrade section
        version: '5'
    - 
        author: Florent Guillaume
        date: '2010-12-28 15:21'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-12-27 10:25'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-10-14 10:47'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2010-10-14 10:47'
        message: ''
        version: '1'

---
Each version of Nuxeo comes with bug fixes, new features and improvements.

This means upgrading to the latest public release is a smart move. In order to make upgrade easy, we are very careful not to break anything.

Remember that we provide support and use the Nuxeo Platform in a lot of projects, so if we break something, we have to fix it :)

So basically:

*   We don't break the APIs between two versions: we add new APIs and deprecate old ones.
*   There are several minor versions between the deprecation and the removal so you have time to adapt your code.
*   If we completely replace a service (that was the case for `SearchService` and `EventService` for example), we provide compatibility packages so you can continue using the old API (even if migrating to the new API is highly recommended).

In terms of Data Migration we are also very careful not to break anything. Once again, we run the Nuxeo Platform for a lot of our internal needs and we upgrade them very frequently and don't want to have data migration issue.

Anyway, when some changes or optimizations impact the storage layer we either:

*   make the upgrade automatically,
*   or provide guidelines for the upgrade.

Upgrading is usually a simple and painless process.

Using the template system also allows to easily transpose your configuration from one version to an other.

In the worse cases, in case of problem, Nuxeo Support is there to help you :smile:

For upgrade steps, check the following documentation where you will find upgrade procedures per Nuxeo version:

*   [How to Upgrade Nuxeo]({{page space='ADMINDOC58' page='How to+Upgrade+Nuxeo'}})
*   [How to Replicate the Nuxeo Repository]({{page space='ADMINDOC58' page='How to+Replicate+the+Nuxeo+Repository'}})
*   [Nuxeo Security Hotfixes]({{page space='ADMINDOC58' page='Nuxeo Security+Hotfixes'}})