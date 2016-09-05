---
title: DBS - MongoDB Configuration
labels:
    - dbs
    - mongodb
toc: true
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: DBS+-+MongoDB+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/DBS+-+MongoDB+Configuration'
    page_id: '21921828'
    shortlink: JIBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JIBOAQ'
    source_link: /display/ADMINDOC60/DBS+-+MongoDB+Configuration
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 12:23'
        message: ''
        version: '12'
    - 
        author: Florent Guillaume
        date: '2015-08-11 14:00'
        message: ''
        version: '11'
    - 
        author: Manon Lumeau
        date: '2014-10-08 10:58'
        message: ''
        version: '10'
    - 
        author: Rémi Cattiau
        date: '2014-10-07 02:22'
        message: As requested by Brendan
        version: '9'
    - 
        author: Florent Guillaume
        date: '2014-08-05 12:47'
        message: ''
        version: '8'
    - 
        author: Florent Guillaume
        date: '2014-07-30 17:31'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-06-30 14:35'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2014-06-23 19:47'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2014-06-23 19:46'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2014-06-12 15:04'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2014-06-04 17:29'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2014-06-04 17:25'
        message: ''
        version: '1'

---
DBS (Document-Based Storage) is an infrastructure in the Nuxeo Platform 5.9.5 (Fast Track) allowing storage of documents inside a document-oriented store, like NoSQL.

The first implementation is available for [MongoDB](http://www.mongodb.org/).

## Installation

Starting with Nuxeo Platform 5.9.5, all the MongoDB code is part of the default platform.

To activate MongoDB document storage, add the&nbsp;`mongodb`&nbsp;template to your existing list of templates (`nuxeo.templates`) in&nbsp;`nuxeo.conf`.

You&nbsp;**must keep**&nbsp;the template corresponding to your SQL database in&nbsp;`nuxeo.templates`, because the SQL database is still used for other things (directories, audit, etc.). For instance you could have:

```
nuxeo.templates=postgresql,mongodb
```

or

```
nuxeo.templates=default,mongodb
```

## Configuration

The&nbsp;property `nuxeo.mongodb.server`&nbsp;in `nuxeo.conf` can be set if your MongoDB server doesn't run on the default `localhost:27017`.

Nuxeo stores its information in the `nuxeo` database of MongoDB, under the&nbsp;`default`&nbsp;collection&nbsp;(the name of the collection is the Nuxeo repository name).

For MongoDB beginners, note that if you want to clear your MongoDB instance of Nuxeo data (for instance to start afresh), you should do:

```
$ mongo nuxeo
> db.default.remove({})
```