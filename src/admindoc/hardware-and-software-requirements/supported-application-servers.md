---
title: Supported Application Servers
labels:
    - lts2015-ok
confluence:
    ajs-parent-page-id: '27604706'
    ajs-parent-page-title: Hardware and Software Requirements
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Supported+Application+Servers
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/Supported+Application+Servers'
    page_id: '27604605'
    shortlink: fTalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fTalAQ'
    source_link: /display/ADMINDOC710/Supported+Application+Servers
history:
    - 
        author: Alain Escaffre
        date: '2015-12-15 17:40'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2015-12-04 16:01'
        message: Add link to static WAR how-to
        version: '22'
    - 
        author: Alain Escaffre
        date: '2015-12-04 13:20'
        message: ''
        version: '21'
    - 
        author: Alain Escaffre
        date: '2015-12-04 13:20'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2015-10-19 09:36'
        message: ''
        version: '19'
    - 
        author: Manon Lumeau
        date: '2015-10-19 08:39'
        message: ''
        version: '18'
    - 
        author: Florent Guillaume
        date: '2015-10-16 12:04'
        message: ''
        version: '17'
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

The Nuxeo Platform can be based on [JBoss](http://www.jboss.org/jbossas/) or [Tomcat](http://tomcat.apache.org/). Here are tables showing which versions of these application servers are known to work with the Nuxeo Platform.

## Apache Tomcat

*   Nuxeo Platform LTS 2015: Tomcat 7.0.64
*   Nuxeo Platform 6.0: Tomcat 7.0.56
*   Nuxeo Platform 5.8: Tomcat 7.0.42

## JBoss / WildFly

*   Nuxeo Platform LTS 2015: WildFly 8.1.0
*   Nuxeo Platform 6.0: WildFly 8.1.0
*   Nuxeo Platform 5.8: N/A

## Other Application Servers

The Nuxeo Platform can be delivered [via a standard static WAR]({{page page='how-to-create-a-nuxeo-static-war'}}) (as opposed to the dynamic building of the WAR at startup that happens in the usual distribution). This implies some work to adapt and validate the deployment of the Nuxeo Platform on an additional application/web server. If you have such a requirement, you can ask your usual Nuxeo contact.

{{! /multiexcerpt}}