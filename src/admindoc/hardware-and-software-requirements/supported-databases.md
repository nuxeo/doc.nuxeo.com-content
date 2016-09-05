---
title: Supported Databases
confluence:
    ajs-parent-page-id: '16810061'
    ajs-parent-page-title: Hardware and Software Requirements
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Supported+Databases
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Supported+Databases'
    page_id: '16810085'
    shortlink: ZYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/ZYAAAQ'
    source_link: /display/ADMINDOC58/Supported+Databases
history:
    - 
        author: Florent Guillaume
        date: '2013-11-05 14:27'
        message: upport PostgreSQL 9.
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

<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Jackrabbit</th><th colspan="1">H2</th><th colspan="1">PostgreSQL</th><th colspan="1">MySQL</th><th colspan="1">Oracle</th><th colspan="1">SQL Server</th><th colspan="1">DB2</th></tr><tr><th colspan="1">Nuxeo EP 5.1.x</th><td colspan="1">1.3.3</td><td colspan="1">

<span style="color: rgb(0,0,0);">-</span>

</td><td colspan="1">

-

</td><td colspan="1">

-

</td><td colspan="1">

-

</td><td colspan="1">

-

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo EP 5.2.x</th><td colspan="1">1.5.0</td><td colspan="1">

1.1.111

</td><td colspan="1">

8.3
8.4&nbsp;

</td><td colspan="1">

5.1

</td><td colspan="1">

10

</td><td colspan="1">

2005

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo EP 5.3.x</th><td colspan="1">1.5.0</td><td colspan="1">

<span style="color: rgb(0,0,0);">1.1.114</span>

</td><td colspan="1">

8.3
8.4&nbsp;

</td><td colspan="1">

5.1

</td><td colspan="1">

10

</td><td colspan="1">

2005
2008&nbsp;

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo EP 5.4.0</th><td colspan="1">-</td><td colspan="1">

<span style="color: rgb(0,0,0);">1.1.114</span>

</td><td colspan="1">

8.3
8.4
9.0&nbsp;

</td><td colspan="1">

5.1

</td><td colspan="1">

10

</td><td colspan="1">

2005
2008&nbsp;

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo EP 5.4.1</th><td colspan="1">-</td><td colspan="1">

<span style="color: rgb(0,0,0);">1.1.114</span>

</td><td colspan="1">

8.3
8.4
9.0&nbsp;

</td><td colspan="1">

5.1

</td><td colspan="1">

10

</td><td colspan="1">

2005
2008&nbsp;

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo EP 5.4.2</th><td colspan="1">-</td><td colspan="1">

<span style="color: rgb(0,0,0);">1.1.114</span>

</td><td colspan="1">

8.3
8.4
9.0
9.1&nbsp;

</td><td colspan="1">

5.1

</td><td colspan="1">

10

</td><td colspan="1">

2005
2008&nbsp;

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo Platform 5.5.x</th><td colspan="1">-</td><td colspan="1">

<span style="color: rgb(0,0,0);">1.1.114</span>

</td><td colspan="1">

8.4
9.0
9.1

</td><td colspan="1">

5.1

</td><td colspan="1">

10
11&nbsp;

</td><td colspan="1">

2005
2008&nbsp;

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo Platform 5.6.x</th><td colspan="1">-</td><td colspan="1">

<span style="color: rgb(0,0,0);">1.1.114</span>

</td><td colspan="1">

8.4
9.0
9.1
9.2&nbsp;

</td><td colspan="1">

5.1
5.5
5.5 (Amazon RDS)&nbsp;

</td><td colspan="1">

10
11
11 (Amazon RDS)&nbsp;

</td><td colspan="1">

2005
2008
2008r2
2012&nbsp;

</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo Platform 5.8</th><td colspan="1">-</td><td colspan="1"><span style="color: rgb(0,0,0);">1.1.114
</span></td><td colspan="1">

8.4
9.0
9.1
9.2
9.3&nbsp;

</td><td colspan="1">5.1
5.5
5.5 (Amazon RDS)</td><td colspan="1">10
11
11 (Amazon RDS)</td><td colspan="1">

2008
2008r2
2012
2012 (Azure)

</td><td colspan="1">&nbsp;</td></tr></tbody></table>

Note that only the latest service pack is supported for a given version. For the open source databases this means upgrading to the latest minor version (ex: MySQL 5.5.28 or PostgreSQL 9.2.1 at the time of this writing).&nbsp;For For Oracle this means the latest patchset (ex: 11.2.0.3 at the time of this writing). For SQL Server this means the latest service pack (ex:&nbsp;Service Pack 2,&nbsp;10.50.4000&nbsp;&nbsp;at the time of this writing).

Note that the exact version numbers for versions before 5.6 may be slightly off, we're in the process of reviewing past data.

{{! /multiexcerpt}}