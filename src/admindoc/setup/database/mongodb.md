---
title: MongoDB
review:
    comment: ''
    date: ''
    status: ok
labels:
    - mongodb
    - dbs
    - lts2015-ok
    - mongodb-component
toc: true
confluence:
    ajs-parent-page-id: '27604695'
    ajs-parent-page-title: Database
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: MongoDB
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC710/MongoDB'
    page_id: '27604712'
    shortlink: 6DalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6DalAQ'
    source_link: /display/ADMINDOC710/MongoDB
tree_item_index: 500
version_override:
    'FT': '/nxdoc/mongodb'
    'LTS 2016': 810/nxdoc/mongodb
history:
    -
        author: Solen Guitter
        date: '2016-03-08 16:43'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2016-03-08 09:56'
        message: ''
        version: '28'
    -
        author: Benoit Delbosc
        date: '2016-03-07 09:54'
        message: ''
        version: '27'
    -
        author: Benoit Delbosc
        date: '2016-03-07 09:48'
        message: HF07 can work with mongodb 3.2
        version: '26'
    -
        author: Gildas Lefevre
        date: '2016-03-04 20:59'
        message: ''
        version: '25'
    -
        author: Gildas Lefevre
        date: '2016-03-04 20:58'
        message: ''
        version: '24'
    -
        author: Gildas Lefevre
        date: '2016-03-04 17:12'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2016-01-20 16:11'
        message: 'Formatting '
        version: '22'
    -
        author: Manon Lumeau
        date: '2016-01-20 16:08'
        message: 'NXP-18773: restored MongoDB parameters'
        version: '21'
    -
        author: Florent Guillaume
        date: '2015-12-09 13:44'
        message: added gridfs
        version: '20'
    -
        author: Alain Escaffre
        date: '2015-12-04 13:44'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2015-12-04 13:41'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-11-12 08:48'
        message: 'Update link, cleanup page format, update related pages'
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-10-14 09:10'
        message: ''
        version: '16'
    -
        author: Florent Guillaume
        date: '2015-10-13 15:42'
        message: ''
        version: '15'
    -
        author: Benoit Delbosc
        date: '2015-10-09 14:50'
        message: ''
        version: '14'
    -
        author: Benoit Delbosc
        date: '2015-10-09 14:48'
        message: Emphasis on the URI connection options
        version: '13'
    -
        author: Florent Guillaume
        date: '2015-08-11 13:41'
        message: ''
        version: '12'
    -
        author: Florent Guillaume
        date: '2015-07-01 14:39'
        message: Added nuxeo.mongodb.dbname and detailed server syntax
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
DBS (Document-Based Storage) is an infrastructure in the Nuxeo Platform allowing storage of documents inside a document-oriented store, like NoSQL.

The first implementation is available for [MongoDB](http://www.nuxeo.com/mongodb/).

Nuxeo supports the following MongoDB versions:

{{{multiexcerpt '7.10-mongodb-supported' page='Supported Databases'}}}

## Installation

When using MongoDB 3.0 we recommand that you configure the [WiredTiger storage engine](https://docs.mongodb.org/v3.0/core/wiredtiger/) for better performance of write operations. Please follow [this documentation](https://docs.mongodb.org/manual/tutorial/change-standalone-wiredtiger/) to activate this storage engine.

Nuxeo stores its information in the configured&nbsp;database, under the&nbsp;`default`&nbsp;collection. The name of the collection is the Nuxeo repository name.

By default MongoDB doesn't require authentication, you can [enable the client access control](https://docs.mongodb.org/manual/tutorial/enable-authentication/) and create a user with the `dbAdmin` role.

{{#> callout type='warning' heading='Users creation in versions 3.x and Nuxeo < LTS2015-HF07'}}

If you are using a version 3.x of MongoDB, you have to change the authentication schema before creating the users in the database. In those versions, the default authentication mechanism is SCRAM-SHA-1 which is not supported by Nuxeo < LTS 2015 HF07 where the MongoDB driver only supports MONGO-CR.

Note that if you are upgrading from a 2.6 or 2.8 databases, you will be fine as the MONGO-CR credentials were previously created.

**For a new MongoDB instance**, use the following commands:

```
mongo
use admin
db.system.version.insert({ "_id" : "authSchema", "currentVersion" : 3 })
```

**For existing MongoDB instance with users,** you need to remove the user first (make sure you don't need them before) then change the authentication schema using the following commands:

```
mongo
use admin
db.system.users.remove({})
db.system.version.remove({})
db.system.version.insert({ "_id" : "authSchema", "currentVersion" : 3 })
```

Then restart the server and recreate users.

{{/callout}}

&nbsp;

## Configuration

To activate MongoDB document storage, add the&nbsp;`mongodb`&nbsp;template to your existing list of templates (`nuxeo.templates`) in&nbsp;`nuxeo.conf`.

You&nbsp;**must keep**&nbsp;the template corresponding to your SQL database in&nbsp;`nuxeo.templates`, because the SQL database may still be used for other things (directories, audit, etc.). For instance you could have:

```
nuxeo.templates=postgresql,mongodb
```

or

```
nuxeo.templates=default,mongodb
```

The following properties are available in `nuxeo.conf`:

*   `nuxeo.mongodb.server`: the MongoDB server, either a hostname or a hostname with port, or a full `mongodb://` URI (defaults to&nbsp;`localhost:27017`).

    The MongoDB URI pattern is:&nbsp; `mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]`

*   `nuxeo.mongodb.dbname`: the MongoDB database (defaults to `nuxeo`).

{{#> callout type='info' }}

Using the full `mongodb://` URI syntax you can configure the connection options, like the pool size, the write concern or the read preference, for instance:

```
nuxeo.mongodb.server=mongodb://example1.com,example2.com,example3.com/?readPreference=secondary
```

See the [Connection String URI Format](http://docs.mongodb.org/manual/reference/connection-string/) for the list of options.

{{/callout}}

## GridFS

In recent Nuxeo versions or when using the appropriate Nuxeo Package, it's possible to use MongoDB's [GridFS](https://docs.mongodb.org/v3.0/core/gridfs/) mechanism to store binary files inside MongoDB instead of the default filesystem mechanism of Nuxeo. This is activated by adding `gridfsbinaries` to the templates, for instance:

```
nuxeo.templates=postgresql,mongodb,gridfsbinaries
```

When doing this, binaries will be stored in the `default.fs`&nbsp;GridFS bucket, which means that in native MongoDB the collections `default.fs.files` and&nbsp;`default.fs.chunks`&nbsp;will be used.&nbsp;See the&nbsp;[GridFS Reference](https://docs.mongodb.org/v3.0/reference/gridfs/)&nbsp;for more details about MongoDB's GridFS implementation.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

*   [DBS - MongoDB developer documentation]({{page space='nxdoc710' page='dbs-mongodb'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
