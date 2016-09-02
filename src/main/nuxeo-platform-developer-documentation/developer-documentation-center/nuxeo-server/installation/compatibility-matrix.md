---
title: Compatibility Matrix
labels:
    - multiexcerpt
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Compatibility+Matrix
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Compatibility+Matrix'
    page_id: '31034423'
    shortlink: N4zZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/N4zZAQ'
    source_link: /display/NXDOC/Compatibility+Matrix
history:
    - 
        author: Solen Guitter
        date: '2016-08-05 09:10'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2016-08-05 09:08'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2016-08-05 09:05'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2016-08-05 09:05'
        message: Add MarkLogic
        version: '5'
    - 
        author: Solen Guitter
        date: '2016-05-16 11:57'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2016-05-16 10:27'
        message: Details about Java versions supported.
        version: '3'
    - 
        author: Solen Guitter
        date: '2016-05-13 15:17'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2016-05-13 14:21'
        message: ''
        version: '1'

---
## Java

{{! multiexcerpt name='java_requirement'}}<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Nuxeo Platform
FT 8.x</th><th colspan="1">Nuxeo Platform
LTS 2015</th><th colspan="1">Nuxeo Platform
6.0</th><th colspan="1">Nuxeo Platform
5.8</th></tr><tr><td colspan="1">JDK</td><td colspan="1">1.8.0_91</td><td colspan="1">1.8.0_91</td><td colspan="1">1.7.0_80
1.8.0_91</td><td colspan="1">1.7.0_80
1.8.0_91 (since 5.8-HF06)</td></tr></tbody></table>

As for any software, we very strongly recommend upgrading to the latest bugfix version of the JDK for a given major version, for instance the latest bugfix version of Java 8 was 8u91 (1.8.0_91) at the time of this writing.

Java 7 has been declared EOL (End Of Life) by Oracle and should only be used if there is no other recourse. Java 9 EA (Early Access) is not yet supported.

{{! /multiexcerpt}}

More information on the page [Installation]({{page page='installation'}}).

## Databases

{{! multiexcerpt name='supported-databases-details'}}

The Nuxeo Platform supports the following databases.

<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Nuxeo Platform
FT 8.x</th><th colspan="1">Nuxeo Platform
LTS 2015</th><th colspan="1">Nuxeo Platform
6.0</th><th colspan="1">Nuxeo Platform
5.8</th></tr><tr><th colspan="1">MarkLogic</th><td colspan="1">{{! multiexcerpt name='MarkLogic-supported'}}

8.0

{{! /multiexcerpt}}</td><td colspan="1">-</td><td colspan="1">-</td><td colspan="1">-</td></tr><tr><th colspan="1">MongoDB</th><td colspan="1">{{! multiexcerpt name='FT-mongoDB-supported'}}

2.8
3.0
3.2 (Since 8.2)

{{! /multiexcerpt}}</td><td colspan="1">2.8
3.0
3.2 (Since 7.10-HF07)</td><td colspan="1">2.6</td><td colspan="1">-</td></tr><tr><th colspan="1">MySQL</th><td colspan="1">{{! multiexcerpt name='FT-mySQL-supported'}}5.6
5.7{{! /multiexcerpt}}</td><td colspan="1">5.6
5.7</td><td colspan="1">5.6
5.7</td><td colspan="1">5.1
5.5
5.5 (Amazon RDS)</td></tr><tr><th colspan="1">Oracle</th><td colspan="1">{{! multiexcerpt name='7.x-oracle-supported'}}11g
12c{{! /multiexcerpt}}</td><td colspan="1">11g
12c</td><td colspan="1">11g
12c</td><td colspan="1">10
11
11 (Amazon RDS)</td></tr><tr><th colspan="1">PostgreSQL</th><td colspan="1">{{! multiexcerpt name='7.x-postgreSQL-supported'}}

9.3
9.4
9.5 (Since 8.3)

{{! /multiexcerpt}}</td><td colspan="1">9.3
9.4</td><td colspan="1">9.3
9.4</td><td colspan="1">8.4
9.0
9.1
9.2
9.3</td></tr><tr><th colspan="1">SQL Server</th><td colspan="1">{{! multiexcerpt name='7.x-SQLserver-supported'}}2012
2012 (Azure){{! /multiexcerpt}}</td><td colspan="1">2012
2012 (Azure)</td><td colspan="1">2012
2012 (Azure)</td><td colspan="1">2008
2008r2
2012
2012 (Azure)</td></tr></tbody></table>

**Notes**

*   Only the latest service pack is supported for a given version. For the open source databases this means upgrading to the latest minor version. For Oracle this means the latest patchset. For SQL Server this means the latest service pack.
*   Older versions of the different databases may work but are not supported.

{{! /multiexcerpt}}

More information about database configuration in the&nbsp;[Database Configuration]({{page page='database-configuration'}}) section.

## Application Servers

{{! multiexcerpt name='supported-app-servers-details'}}

The Nuxeo Platform can be based on [JBoss](http://www.jboss.org/jbossas/) or [Tomcat](http://tomcat.apache.org/). Here is a table showing which versions of these application servers are known to work with the Nuxeo Platform.

<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Nuxeo Platform
FT 8.x</th><th colspan="1">Nuxeo Platform
LTS 2015</th><th colspan="1">Nuxeo Platform
6.0</th><th colspan="1">Nuxeo Platform
5.8</th></tr><tr><th colspan="1">Apache Tomcat</th><td colspan="1">7.0.64</td><td colspan="1">7.0.64</td><td colspan="1">7.0.56</td><td colspan="1">7.0.42</td></tr><tr><th colspan="1">JBoss / WildFly</th><td colspan="1">WildFly 8.1.0</td><td colspan="1">WildFly 8.1.0</td><td colspan="1">WildFly 8.1.0</td><td colspan="1">-</td></tr></tbody></table>

**Other Application Servers**

The Nuxeo Platform can be delivered [via a standard static WAR ]({{page page='deploying-as-a-standard-static-war'}}) (as opposed to the dynamic building of the WAR at startup that happens in the usual distribution). This implies some work to adapt and validate the deployment of the Nuxeo Platform on an additional application/web server. If you have such a requirement, you can ask your usual Nuxeo contact.

{{! /multiexcerpt}}

## Redis

{{! multiexcerpt name='redis_supported_versions'}}<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Nuxeo Platform
FT 8.x</th><th colspan="1">Nuxeo Platform
LTS 2015</th><th colspan="1">Nuxeo Platform
6.0</th><th colspan="1">Nuxeo Platform
5.8</th></tr><tr><th colspan="1">Redis</th><td colspan="1">2.8.x
3.0.x</td><td colspan="1">2.8.x
3.0.x</td><td colspan="1">2.8</td><td colspan="1">2.6</td></tr></tbody></table>{{! /multiexcerpt}}

More information on the pages [Nuxeo and Redis]({{page page='nuxeo-and-redis'}}) and [Redis Configuration]({{page page='redis-configuration'}}).

## Elasticsearch

{{! multiexcerpt name='elasticsearch_supported_versions'}}<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Nuxeo Platform
FT 8.x</th><th colspan="1">Nuxeo Platform
LTS 2015</th><th colspan="1">Nuxeo Platform
6.0</th><th colspan="1">Nuxeo Platform
5.8</th></tr><tr><th colspan="1">Elasticsearch</th><td colspan="1">Library: 1.5.2
Cluster: 1.1.2 to 1.7.x</td><td colspan="1">Library: 1.5.2
Cluster: 1.1.2 to 1.7.x</td><td colspan="1">Library: 1.1.2
Cluster: 1.1.2 to 1.7.x</td><td colspan="1">Available as a Nuxeo Package starting from 5.8-HF16</td></tr></tbody></table>{{! /multiexcerpt}}

More information on the page [Elasticsearch Setup]({{page page='elasticsearch-setup'}}).

## Browsers

{{! multiexcerpt name='supported-browsers'}}<table><tbody><tr><th colspan="1">&nbsp;</th><th colspan="1">Nuxeo Platform
FT 8.x</th><th colspan="1">Nuxeo Platform
LTS 2015</th><th colspan="1">Nuxeo Platform
6.0</th><th colspan="1">Nuxeo Platform
5.8</th></tr><tr><th colspan="1">Chrome</th><td colspan="1">46 and greater</td><td colspan="1">46 and greater</td><td colspan="1">37 and greater</td><td colspan="1">8 and greater</td></tr><tr><th colspan="1">Edge</th><td colspan="1">Subject to the browser's limitations such as [Drag and Drop support](https://connect.microsoft.com/IE/feedback/details/1544800/ms-edge-drop-files-from-explorer-to-browser-does-not-work-as-expected)</td><td colspan="1">Subject to the browser's limitations such as [Drag and Drop support](https://connect.microsoft.com/IE/feedback/details/1544800/ms-edge-drop-files-from-explorer-to-browser-does-not-work-as-expected)</td><td colspan="1">-</td><td colspan="1">-</td></tr><tr><th colspan="1">Firefox</th><td colspan="1">38 ESR and greater</td><td colspan="1">38 ESR and greater</td><td colspan="1">31 ESR and greater</td><td colspan="1">10 and greater</td></tr><tr><th colspan="1">Internet Explorer</th><td colspan="1">11</td><td colspan="1">11</td><td colspan="1">10 and greater</td><td colspan="1">8 and greater with activeX enabled</td></tr><tr><th colspan="1">Safari</th><td colspan="1">9 and greater</td><td colspan="1">9 and greater</td><td colspan="1">6.2 and greater</td><td colspan="1">4 and greater</td></tr></tbody></table>{{! /multiexcerpt}}