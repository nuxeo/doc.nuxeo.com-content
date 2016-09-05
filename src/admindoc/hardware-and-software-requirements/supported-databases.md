---
title: Supported Databases
labels:
    - last-review-20141126
confluence:
    ajs-parent-page-id: '21921868'
    ajs-parent-page-title: Hardware and Software Requirements
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Supported+Databases
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Supported+Databases'
    page_id: '21921895'
    shortlink: Z4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/Z4BOAQ'
    source_link: /display/ADMINDOC60/Supported+Databases
history:
    - 
        author: Solen Guitter
        date: '2015-03-25 10:00'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-10-13 17:31'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-10-13 17:26'
        message: Added 6.0 supported databases
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-10-08 14:36'
        message: ''
        version: '11'
    - 
        author: Florent Guillaume
        date: '2013-11-05 14:27'
        message: Support PostgreSQL 9.3
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-11-05 14:15'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-10-14 15:58'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-11-12 12:17'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-11-12 12:13'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2012-11-12 11:29'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2012-11-12 11:23'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2012-11-09 18:45'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2012-11-09 18:43'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2012-11-09 17:59'
        message: ''
        version: '1'

---
{{! multiexcerpt name='supported-databases-details'}}

&nbsp;The Nuxeo Platform supports the following databases.

<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">PostgreSQL</th><th colspan="1">MySQL</th><th colspan="1">Oracle</th><th colspan="1">SQL Server</th><th colspan="1">MongoDB</th></tr><tr><th colspan="1">Nuxeo Platform 6.0</th><td colspan="1">{{! multiexcerpt name='6.0-postgreSQL-supported'}}9.3
9.4{{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='6.0-mySQL-supported'}}5.6
5.7 (upcoming){{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='6.0-oracle-supported'}}11g
12c{{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='6.0-SQLserver-supported'}}2012
2012 (Azure){{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='6.0-mongoDB-supported'}}2.6{{! /multiexcerpt}}</td></tr><tr><th colspan="1">Nuxeo Platform 5.8</th><td colspan="1">8.4
9.0
9.1
9.2
9.3</td><td colspan="1">5.1
5.5
5.5 (Amazon RDS)</td><td colspan="1">10
11
11 (Amazon RDS)</td><td colspan="1">2008
2008r2
2012
2012 (Azure)</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo Platform 5.6.x</th><td colspan="1">8.4
9.0
9.1
9.2</td><td colspan="1">5.1
5.5
5.5 (Amazon RDS)</td><td colspan="1">10
11
11 (Amazon RDS)</td><td colspan="1">2005
2008
2008r2
2012</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo Platform 5.5.x</th><td colspan="1">8.4
9.0
9.1</td><td colspan="1">5.1</td><td colspan="1">10
11</td><td colspan="1">2005
2008</td><td colspan="1">-</td></tr></tbody></table>

**Notes**

*   Only the latest service pack is supported for a given version. For the open source databases this means upgrading to the latest minor version.&nbsp;For For Oracle this means the latest patchset. For SQL Server this means the latest service pack.
*   Older versions of the different databases may work but are not supported.
*   The exact version numbers for versions before 5.6 may be slightly off.

{{! /multiexcerpt}}