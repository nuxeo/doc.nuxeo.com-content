---
title: Supported Databases
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
confluence:
    ajs-parent-page-id: '27604706'
    ajs-parent-page-title: Hardware and Software Requirements
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Supported+Databases
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Supported+Databases'
    page_id: '27604635'
    shortlink: mzalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mzalAQ'
    source_link: /display/ADMINDOC710/Supported+Databases
tree_item_index: 300
version_override:
    'FT': '/nxdoc/compatibility-matrix'
    '6.0': 60/admindoc/supported-databases
    '5.8': 58/admindoc/supported-databases
history:
    -
        author: Benoit Delbosc
        date: '2016-04-25 07:22'
        message: everted from v. 2
        version: '23'
    -
        author: Benoit Delbosc
        date: '2016-04-25 07:19'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2016-03-08 09:57'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2016-03-08 09:53'
        message: Update MongoDB supported versions
        version: '20'
    -
        author: Solen Guitter
        date: '2015-12-29 12:40'
        message: 'Update MongoDB supported version for LTS 2015 '
        version: '19'
    -
        author: Solen Guitter
        date: '2015-12-01 15:54'
        message: Remove versions not supported anymore
        version: '18'
    -
        author: Solen Guitter
        date: '2015-11-12 09:31'
        message: Update last Nuxeo Platform version for LTS release
        version: '17'
    -
        author: Solen Guitter
        date: '2015-05-07 08:21'
        message: fix typo
        version: '16'
    -
        author: Solen Guitter
        date: '2015-03-25 10:04'
        message: Add 7.x series supported databases
        version: '15'
    -
        author: Julien Carsique
        date: '2015-03-24 11:09'
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

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">PostgreSQL</th><th colspan="1">MySQL</th><th colspan="1">Oracle</th><th colspan="1">SQL Server</th><th colspan="1">MongoDB</th></tr><tr><th colspan="1">Nuxeo Platform LTS 2015</th><td colspan="1">{{! multiexcerpt name='7.10-postgreSQL-supported'}}9.3
9.4{{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='7.10-mySQL-supported'}}5.6
5.7 (upcoming){{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='7.10-oracle-supported'}}11g
12c{{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='7.10-SQLserver-supported'}}2012
2012 (Azure){{! /multiexcerpt}}</td><td colspan="1">{{! multiexcerpt name='7.10-mongoDB-supported'}}2.8
3.0
3.2 (Since 7.10-HF07){{! /multiexcerpt}}</td></tr><tr><th colspan="1">Nuxeo Platform 6.0</th><td colspan="1">9.3
9.4</td><td colspan="1">5.6
5.7 (upcoming)</td><td colspan="1">11g
12c</td><td colspan="1">2012
2012 (Azure)</td><td colspan="1">2.6</td></tr><tr><th colspan="1">Nuxeo Platform 5.8</th><td colspan="1">8.4
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
2012 (Azure)</td><td colspan="1">-</td></tr></tbody></table></div>

**Notes**

*   Only the latest service pack is supported for a given version. For the open source databases this means upgrading to the latest minor version.&nbsp;For Oracle this means the latest patchset. For SQL Server this means the latest service pack.
*   Older versions of the different databases may work but are not supported.

{{! /multiexcerpt}}
