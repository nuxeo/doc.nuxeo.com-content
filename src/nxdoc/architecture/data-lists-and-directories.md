---
title: Data Lists and Directories
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334300'
    ajs-parent-page-title: Architecture
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Data+Lists+and+Directories
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Data+Lists+and+Directories'
    page_id: '17334428'
    shortlink: nIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/nIAIAQ'
    source_link: /display/NXDOC58/Data+Lists+and+Directories
history:
    - 
        author: Solen Guitter
        date: '2013-11-06 18:00'
        message: dded link to the connector sampl
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-09-19 16:03'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-09-17 18:25'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-09-17 18:21'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:22'
        message: ''
        version: '1'

---
{{! excerpt}}

&nbsp;We explain here the philosophy of the directories: A mean to expose to your app some external data.

{{! /excerpt}}

Inside the Nuxeo Platform, directories are used to provide a abstraction on all referential data that can be manipulated inside the application.

These data can be:

*   Users,
*   Groups of users,
*   Fixed list of values (vocabularies),
*   Roles,
*   ...

Basically we try to map all data that can be manipulated like record via directories. For that, directories provide a simple CRUD API and an abstraction on the actual implementation. This means that the services of the platform do not have to worry about where and how the data is stored, they just access the API.

![]({{file name='Selection_026.png' page='platform-apis'}} ?w=650,h=290,border=true)

Directories comes with several implementations:

*   SQL directories that can map SQL tables,
*   LDAP directories that can map a LDAP server,
*   Multi-directory that allow to combine several directories into a single one.

A frequent use case is also to use the directory abstraction to map a given webservice or application that manages centralized data.
(We provide a [connector sample](https://github.com/tiry/nuxeo-directory-connector) for that.)