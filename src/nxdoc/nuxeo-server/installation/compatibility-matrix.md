---
title: Compatibility Matrix
description: This page presents the compatibility matrix for the Nuxeo Platform.
review:
    comment: ''
    date: '2021-01-11'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
    - lts2017-ok
    - fguillaume
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
    LTS 2015: 710/admindoc/supported-application-servers
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

Supported Java version: {{! multiexcerpt name='java_requirement'}}**JDK 21** (Azul's Zulu OpenJDK or Oracle's JDK){{! /multiexcerpt}}.

## Databases

The Nuxeo Platform supports the following databases.
{{! multiexcerpt name='all-supported-databases'}}
<ul>
  <li>
    Recommended, validated by continuous integration:
    <ul>
      <li>{{! multiexcerpt name='MongoDB-supported'}}MongoDB 8{{! /multiexcerpt}}</li>
      <li>{{! multiexcerpt name='PostgreSQL-supported'}}PostgreSQL 16{{! /multiexcerpt}}</li>
    </ul>
  </li>
  <li>
    Supported, not validated by continuous integration:
    <ul>
      <li>MongoDB greater than 4.2</li>
      <li>PostgreSQL greater than 11</li>
      <li>{{! multiexcerpt name='MariaDB-supported'}}MariaDB 10.3{{! /multiexcerpt}}</li>
      <li>{{! multiexcerpt name='MySQL-supported'}}MySQL 8.0{{! /multiexcerpt}}</li>
      <li>{{! multiexcerpt name='Oracle-supported'}}Oracle 18c{{! /multiexcerpt}}</li>
      <li>{{! multiexcerpt name='SQLserver-supported'}}SQL Server 2017{{! /multiexcerpt}}</li>
    </ul>
  </li>
</ul>
{{! /multiexcerpt}}

**Notes**

{{! multiexcerpt name='supported-databases-notes'}}
Nuxeo Platform will likely work with greater versions of the aforementioned databases. Do not hesitate to inform Nuxeo support of your attempts with different versions.
More information can be found on the [Database Configuration]({{page page='database-configuration'}}) page.<br/>
Note that Nuxeo Server is shipped with an embedded H2 database, for quick evaluation purposes. One of the listed databases is required for a production set up or for a more thorough evaluation, like performance testing.
{{! /multiexcerpt}}

## Application Servers

Nuxeo Platform can be based on [Tomcat](http://tomcat.apache.org/). The supported version is:

{{! multiexcerpt name='supported-app-servers-versions'}}
<ul>
  <li>Tomcat 10.1.x</li>
</ul>
{{! /multiexcerpt}}

{{! multiexcerpt name='supported-app-servers-static-war'}}
Nuxeo is shipped with an embedded Tomcat server.
{{! /multiexcerpt}}

## OpenSearch

Nuxeo Platform supports OpenSearch1, Opensearch2 and OpenSearch3 clusters.

Nuxeo Platform is fully tested against an OpenSearch1 cluster, using OpenSearch Java libraries 1.3.

Nuxeo Platform is partially tested against OpenSearch1, OpenSearch2 and OpenSearch3 clusters using OpenSearch Java libraries 2.x.

Here are the packages compatibility matrix: 

```
nuxeo-search-client-opensearch1: OS1 ✅, OS2 🚫, OS3 🚫, ES7 ✅, ES8 ✅, ES9 🚫, embed ✅
nuxeo-audit-opensearch1:         OS1 ✅, OS2 🚫, OS3 🚫, ES7 ✅, ES8 ✅, ES9 🚫, embed ✅
nuxeo-search-client-opensearch2: OS1 ✅, OS2 ✅, OS3 ✅, ES7 ✅, ES8 🚫, ES9 🚫, embed ✅
nuxeo-audit-opensearch2:         OS1 ✅, OS2 ✅, OS3 ✅, ES7 ✅, ES8 🚫, ES9 🚫, embed ✅
```

More information can be found on the [OpenSearch Setup]({{page page='search-setup'}}) page.

## Elasticsearch

Nuxeo Platform supports Elastisearch7, Elasticsearch8 and Elasticsearch9 clusters.

Nuxeo Platform is fully tested against Elasticsearch7 and Elasticsearch8 clusters using OpenSearch Java libraries 1.3.

Nuxeo Platform is partially tested against Elasticsearch9 cluster using Elasticsearch Java libraries 9.x.

Here are the packages compatibility matrix:

```
nuxeo-search-client-opensearch1:    OS1 ✅, OS2 🚫, OS3 🚫, ES7 ✅, ES8 ✅, ES9 🚫, embed ✅
nuxeo-audit-opensearch1:            OS1 ✅, OS2 🚫, OS3 🚫, ES7 ✅, ES8 ✅, ES9 🚫, embed ✅
nuxeo-search-client-elasticsearch9: OS1 🚫, OS2 🚫, OS3 🚫, ES7 🚫, ES8 🚫, ES9 ✅, embed 🚫
nuxeo-audit-elasticsearch9:         OS1 🚫, OS2 🚫, OS3 🚫, ES7 🚫, ES8 🚫, ES9 ✅, embed 🚫
```

More information can be found on the [Elasticsearch Setup]({{page page='search-setup'}}) page.

## Kafka

Nuxeo Platform is tested against a Kafka cluster {{! multiexcerpt name='kafka_supported_version'}}3.9.x{{! /multiexcerpt}} deployed in KRaft mode. Nuxeo uses Kafka Java libraries {{! multiexcerpt name='kafka_libraries_supported_version'}}3.9.x{{! /multiexcerpt}}.

Kafka supports backward and forward compatibility, though we advise to use the latest available stable version.

{{#> callout type='warning' }}
Since Kafka 3.6, it’s possible to deploy Kafka without Zookeeper using KRaft mode. This requires at least Nuxeo LTS 2025.5.
{{/callout}}

## Browsers

{{! multiexcerpt name='supported-browsers'}}
Depending on the user interface addon or applications you use, the browser requirements can differ. See the relevant pages:

- [Nuxeo Web UI]({{page page='web-ui-overview'}}#requirements)
{{! /multiexcerpt}}
