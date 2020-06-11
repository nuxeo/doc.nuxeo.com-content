---
title: Database Configuration
description: Nuxeo applications store most of their data in a SQL database. Several databases are supported, but they must be configured to work correctly.
review:
    comment: ''
    date: '2017-07-12'
    status: ok
labels:
    - lts2016-ok
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Database+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Database+Configuration'
    page_id: '3342340'
    shortlink: BAAz
    shortlink_source: 'https://doc.nuxeo.com/x/BAAz'
    source_link: /display/NXDOC/Database+Configuration
tree_item_index: 900
version_override:
    LTS 2015: 710/admindoc/database
    '6.0': 60/admindoc/database
    '5.8': 58/admindoc/database
history:
    -
        author: Solen Guitter
        date: '2016-08-30 14:21'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2016-05-16 08:17'
        message: Add MongoDB
        version: '24'
    -
        author: Manon Lumeau
        date: '2016-03-29 09:56'
        message: ''
        version: '23'
    -
        author: Alain Escaffre
        date: '2016-03-23 10:26'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-11-20 11:29'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-11-18 14:10'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-10-08 14:52'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-07-24 15:52'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-07-24 12:25'
        message: Add MySQL
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-05-27 15:29'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-10-21 16:43'
        message: Updated PostgreSQL version
        version: '15'
    -
        author: Solen Guitter
        date: '2012-03-28 18:29'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-03-28 18:29'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-03-28 18:29'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2011-03-11 11:19'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-03-11 10:55'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-03-04 17:32'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-03-04 17:23'
        message: Reverted from v. 6
        version: '8'
    -
        author: Solen Guitter
        date: '2011-03-04 17:23'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-03-02 18:11'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-03-02 15:01'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2010-12-28 14:59'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-12-27 10:24'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2010-06-17 16:52'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-06-17 16:47'
        message: ''
        version: '1'

---
Nuxeo applications store most of their data in a SQL database. Several databases are supported, but they must be configured to work correctly.

This takes two steps:

1.  Configure the database:
    *   [PostgreSQL ]({{page page='postgresql'}})
    *   [Oracle ]({{page page='oracle'}})
    *   [Microsoft SQL Server ]({{page page='microsoft-sql-server'}})
    *   [MySQL]({{page page='mysql'}})
    *   [MariaDB]({{page page='mariadb'}})
    *   [MongoDB]({{page page='mongodb'}})
2.  [Connect Nuxeo to the database]({{page page='connecting-nuxeo-to-the-database'}}).

&nbsp;
