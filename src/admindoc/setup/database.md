---
title: Database
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '16810056'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Database
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Database'
    page_id: '16810053'
    shortlink: RYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/RYAAAQ'
    source_link: /display/ADMINDOC58/Database
history:
    - 
        author: Anonymous
        date: '2013-10-21 16:43'
        message: pdated PostgreSQL versio
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
    *   [PostgreSQL (8.4 to 9.3)]({{page page='configuring-postgresql'}}),
    *   [Oracle (10g R2 (10.2.0.5) and 11g)]({{page page='configuring-oracle'}}),
    *   [MS SQL Server (2005 or 2008)]({{page page='configuring-ms-sql-server'}}).
2.  [Connect Nuxeo to the database]({{page page='connecting-nuxeo-to-the-database'}}).