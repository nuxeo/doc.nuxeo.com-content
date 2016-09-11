---
title: Supported Application Servers
review:
    comment: ''
    date: ''
    status: ok
labels:
    - last-review-20141126
confluence:
    ajs-parent-page-id: '21921868'
    ajs-parent-page-title: Hardware and Software Requirements
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Supported+Application+Servers
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Supported+Application+Servers'
    page_id: '21921915'
    shortlink: e4BOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/e4BOAQ'
    source_link: /display/ADMINDOC60/Supported+Application+Servers
history:
    - 
        author: Julien Carsique
        date: '2014-11-20 10:44'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2014-11-20 10:36'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2014-11-20 10:33'
        message: Add Wildfly 8.1.0
        version: '14'
    - 
        author: Solen Guitter
        date: '2014-10-13 17:44'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-10-08 14:09'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-10-08 14:02'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-11-05 14:16'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-10-14 15:17'
        message: ''
        version: '9'
    - 
        author: Julien Carsique
        date: '2013-09-09 15:50'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-11-12 16:39'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-11-12 16:36'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2012-03-22 18:26'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Thierry Delprat
        date: '2012-03-22 18:26'
        message: ''
        version: '4'
    - 
        author: Julien Carsique
        date: '2012-03-22 02:26'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-03-21 18:08'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-03-21 17:50'
        message: ''
        version: '1'

---
{{! multiexcerpt name='supported-app-servers-details'}}

&nbsp;The Nuxeo Platform can be based on [JBoss](http://www.jboss.org/jbossas/) or [Tomcat](http://tomcat.apache.org/). Here are tables showing which versions of these application servers are known to work with the Nuxeo Platform.

## Apache Tomcat

<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Tomcat 6.0.20</th><th colspan="1">Tomcat 7.0.42</th></tr><tr><th colspan="1">Nuxeo Platform 6.0</th><td colspan="1">&nbsp;</td><td colspan="1">x</td></tr><tr><th colspan="1">Nuxeo Platform 5.8</th><td colspan="1">&nbsp;</td><td colspan="1">x (since Nuxeo 5.7.2)</td></tr><tr><th colspan="1">Nuxeo Platform 5.6</th><td colspan="1">x</td><td colspan="1">&nbsp;</td></tr></tbody></table>

## JBoss / WildFly

<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">JBoss AS 5.1.0 GA</th><th colspan="1">JBoss EAP 5.1.0</th><th colspan="1">JBoss EAP 5.1.1</th><th colspan="1">JBoss EAP 5.1.2</th><th colspan="1">WildFly 8.1.0</th></tr><tr><th colspan="1">Nuxeo Platform 6.0</th><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">x</td></tr><tr><th colspan="1">Nuxeo Platform 5.8</th><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td></tr><tr><th colspan="1">Nuxeo Platform 5.6</th><td colspan="1">x</td><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td></tr></tbody></table>{{! /multiexcerpt}}