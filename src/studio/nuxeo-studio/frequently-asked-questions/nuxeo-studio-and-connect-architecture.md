---
title: Nuxeo Studio and Connect architecture
labels:
    - content-review-6-0
confluence:
    ajs-parent-page-id: '3345622'
    ajs-parent-page-title: Frequently Asked Questions
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Nuxeo+Studio+and+Connect+architecture
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/Nuxeo+Studio+and+Connect+architecture
    page_id: '14254976'
    shortlink: gIPZ
    shortlink_source: 'https://doc.nuxeo.com/x/gIPZ'
    source_link: /display/Studio/Nuxeo+Studio+and+Connect+architecture
history:
    - 
        author: Thierry Delprat
        date: '2013-06-17 16:07'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2013-06-17 16:06'
        message: ''
        version: '12'
    - 
        author: Benoit Delbosc
        date: '2013-06-17 15:49'
        message: ''
        version: '11'
    - 
        author: Benoit Delbosc
        date: '2013-06-17 15:42'
        message: ''
        version: '10'
    - 
        author: Thierry Delprat
        date: '2013-06-17 15:21'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2013-06-17 15:19'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2013-06-17 15:13'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2013-06-17 14:57'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2013-06-17 14:57'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2013-06-17 14:54'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2013-06-17 14:53'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2013-06-17 14:52'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-06-17 14:36'
        message: ''
        version: '1'

---
## Software architecture

Nuxeo Connect is mainly based on Nuxeo Platform (CAP + DM) with a set of additional custom plugins.

*   Nuxeo Studio is used to generate all the Domain model and associated configuration

    *   Client / Project / Support package
    *   Forms, Content Views ...
*   Nuxeo JSF UI (Layouts, Content views, Actions) is used for backoffice

    *   manage client accounts
    *   manage projects
    *   ...
*   WebEngine is used to&nbsp;

    *   generate the web front end&nbsp;
    *   generate the&nbsp;marketplace site
    *   expose the Maven Servlet
*   JAX-RS is used to expose the REST API&nbsp;

    *   used by connect-client to list and download packages
    *   used by JIra
*   nuxeo-gwt is used to integrate the Studio GWT module with Nuxeo

In addition Connect leverages some additional software :

*   CAS for SSO&nbsp;
*   VertX for collaboration inside a Studio Project
*   JGit for Git access
*   JIRA&nbsp;

## About Connect Data&nbsp;

### Principles

Nuxeo Connect manage several kind of data that are technically managed by different services and storage.

*   Nuxeo Repository (PostgreSQL + Binary Manager on NFS)

    *   store client / projects / subscription info (as Documents)
    *   store meta-data about Studio project
*   Git (NFS)

    *   each Studio Project is asssociated with a Git Repository
    *   each Git repository stores complete history about the Studio Project
*   LDAP (replicated local LDAP)

    *   manage user accounts

### Backup and Recovery

All the data is backuped everyday :

*   dump PGSQL database
*   tgz of nuxeo Blob Store
*   tgz of the nuxeo configuration
*   tgz of Git Filesystem for Studio

    *   projects are grouped by first letter&nbsp;
    *   "source" and built of tagged jars are backuped separately

(LDAP Server used by connect is replicated).

Retention policy is:

*   keep the first backup of any month forever
*   keep the first backup of the second half of any month for 1 year
*   keep the last 30 days

The backups are stored on an EBS and on an internal Nuxeo NAS.

### Security

Nuxeo Connect defines ComputedGroups and SecurityPolicies that enforce security logic :

*   a user can have access only to project he is member of
*   Marketplace download is checked against security policies
*   Access to a Studio Project is&nbsp;checked against security policies
*   Download of a Studio project via Maven Servlet is&nbsp;checked against security policies

There is no direct access to the data, all access have to go throught Nuxeo Platform that enforce the secutiry checks.

## Connect Technical Architecture

### Hosting

Nuxeo Connect platform is hosted on AWS :

*   Nuxeo and PostgreSQL nodes run on an Ubuntu image
*   We use ELB for load balancing
*   EBS is used for storage and for backup

### Architecture :

Connect architcture is currently composed of :

*   ELB with https endpoint that manages LoadBalancing with affinity:

    *   affinity on JSessionID
    *   affinity on Studio projectID
*   2 Nuxeo Tomcat VM (Nuxeo 5.7 at this time)
*   1 VM with PGSQL, VertX and the NFS export

### Monitoring

Since Connect was aligned on Nuxeo 5.7, it is now using [Graphite](http://doc.nuxeo.com/x/gBDF) to report Nuxeo and system metrics.

Logs are centralized using Logstash, ElasticSearch and Kibana.