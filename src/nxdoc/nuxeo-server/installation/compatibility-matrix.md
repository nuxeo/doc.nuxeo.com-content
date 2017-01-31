---
title: Compatibility Matrix
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
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
tree_item_index: 200
version_override:
    'LTS 2015': 710/admindoc/supported-application-servers
    '6.0': 60/admindoc/supported-application-servers
    '5.8': 58/admindoc/supported-application-servers
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

Java Supported versions: {{! multiexcerpt name='java_requirement'}}JDK 1.8.0_112 (Oracle's JDK or OpenJDK) and greater{{! /multiexcerpt}}

As for any software, we very strongly recommend upgrading to the latest bugfix version of the JDK for a given major version, for instance the latest bugfix version of Java 8 was 8u112 (1.8.0_112) at the time of this writing.

Java 7 has been declared EOL (End Of Life) by Oracle and should only be used if there is no other recourse. Java 9 EA (Early Access) is not yet supported.

More information on the page [Installation]({{page page='installation'}}).

## Databases

The Nuxeo Platform supports the following databases.
{{! multiexcerpt name='all-supported-databases'}}
<ul>
<li>{{! multiexcerpt name='MariaDB-supported'}}MariaDB 10.1{{! /multiexcerpt}}</li>
<li>{{! multiexcerpt name='MarkLogic-supported'}} MarkLogic 8.0 {{! /multiexcerpt}}</li>
<li>{{! multiexcerpt name='MongoDB-supported'}}MongoDB 3.2{{! /multiexcerpt}}</li>
<li>{{! multiexcerpt name='MySQL-supported'}}MySQL 5.7{{! /multiexcerpt}}</li>
<li>{{! multiexcerpt name='Oracle-supported'}}Oracle 12c{{! /multiexcerpt}}</li>
<li>{{! multiexcerpt name='PostgreSQL-supported'}}PostgreSQL 9.5{{! /multiexcerpt}}</li>
<li>{{! multiexcerpt name='SQLserver-supported'}}SQL Server 2008{{! /multiexcerpt}}</li>
</ul>
{{! /multiexcerpt}}

**Notes**

{{! multiexcerpt name='supported-databases-notes'}}
The Nuxeo Platform is likely to work with greater versions of related databases. Do not hesitate to inform the Nuxeo support of your attempts with different versions.
More information on the page [Database Configuration]({{page version='' space='nxdoc' page='database-configuration'}}).<br/>
Note that Nuxeo Server is shipped embedding H2 database, for quick evaluation purpose. One of the listed databases is required for a production set up or for more serious evaluation like performance testing.
{{! /multiexcerpt}}

## Application Servers

The Nuxeo Platform can be based on [JBoss](http://www.jboss.org/jbossas/) or [Tomcat](http://tomcat.apache.org/). Supported versions are:

{{! multiexcerpt name='supported-app-servers-versions'}}
<ul>
<li>Tomcat 7.0.69</li>
<li>JBoss WildFly 8.1.0</li>
</ul>
{{! /multiexcerpt}}

{{! multiexcerpt name='supported-app-servers-static-war'}}
Nuxeo is shipped with an embedded Tomcat server but can also be packed as a static WAR that can be deployed additional targets, such as JBoss Wildfly. See [Run as A Static War]({{page page='deploying-as-a-standard-static-war'}}).
{{! /multiexcerpt}}


## Redis

{{! multiexcerpt name='redis_supported_versions'}}
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">&nbsp;</th>
<th colspan="1">Nuxeo Platform LTS 2016</th>
<th colspan="1">Nuxeo Platform LTS 2015</th>
<th colspan="1">Nuxeo Platform 6.0</th>
</tr>
<tr>
<th colspan="1">Redis</th>
<td colspan="1">2.8.x <br />
3.0.x</td>
<td colspan="1">2.8.x<br />
3.0.x</td>
<td colspan="1">2.8</td>
</tr>
</tbody>
</table>
</div>
{{! /multiexcerpt}}

More information on the pages [Nuxeo and Redis]({{page page='nuxeo-and-redis'}}) and [Redis Configuration]({{page page='redis-configuration'}}).

## Elasticsearch

{{! multiexcerpt name='elasticsearch_supported_versions'}}
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">&nbsp;</th>
<th colspan="1">Nuxeo Platform LTS 2016</th>
<th colspan="1">Nuxeo Platform LTS 2015</th>
<th colspan="1">Nuxeo Platform 6.0</th>
</tr>
<tr><th colspan="1">Elasticsearch</th>
<td colspan="1">**From 8.1 to 8.3:**<br/>
Library: 1.5.2<br />
Cluster: 1.5.2 to 1.7.x<br/>
**From 8.10:**<br/>
Library: 2.3.5<br />
Cluster: 2.3.x</td>
<td colspan="1">Library: 1.5.2<br />
Cluster: 1.5.2 to 1.7.x</td>
<td colspan="1">Library: 1.1.2<br />
Cluster: 1.1.2 to 1.7.x</td>
</tr>
</tbody>
</table>
</div>{{! /multiexcerpt}}

More information on the page [Elasticsearch Setup]({{page page='elasticsearch-setup'}}).

## Browsers

{{! multiexcerpt name='supported-browsers'}}
Depending on the user interface addon or applications you use, the browsers requirements can differ. See the relevant pages:
- [Nuxeo JSF UI]({{page version='' space='nxdoc' page='nuxeo-jsf-ui'}})
- [Nuxeo Web UI]({{page version='' space='nxdoc' page='web-ui'}})
{{! /multiexcerpt}}
