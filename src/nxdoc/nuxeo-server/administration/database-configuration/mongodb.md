---
title: MongoDB
review:
    comment: ''
    date: '2016-12-06'
    status: ok
labels:
    - lts2016-ok
    - dbs
    - mongodb
    - mongodb-component
toc: true
tree_item_index: 600
version_override:
    LTS 2015: 710/admindoc/mongodb
history:
    -
        author: Florent Guillaume
        date: '2016-09-22 14:07'
        message: ongodb-quartz-cluste
        version: '39'
    -
        author: Solen Guitter
        date: '2016-08-05 09:24'
        message: ''
        version: '38'
    -
        author: Solen Guitter
        date: '2016-05-13 14:42'
        message: ''
        version: '37'
    -
        author: Solen Guitter
        date: '2016-03-08 16:44'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2016-03-08 16:38'
        message: ''
        version: '35'
    -
        author: Benoit Delbosc
        date: '2016-03-08 10:50'
        message: ''
        version: '34'
    -
        author: Benoit Delbosc
        date: '2016-03-08 10:44'
        message: ''
        version: '33'
    -
        author: Benoit Delbosc
        date: '2016-03-08 10:16'
        message: ''
        version: '32'
    -
        author: Benoit Delbosc
        date: '2016-03-08 10:14'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2016-03-08 09:51'
        message: Move warning about user creation in Confiiguration section
        version: '30'
    -
        author: Solen Guitter
        date: '2016-03-08 09:35'
        message: Update supported versions
        version: '29'
    -
        author: Benoit Delbosc
        date: '2016-03-07 09:53'
        message: 8.2 support mongo 3.2
        version: '28'
    -
        author: Gildas Lefevre
        date: '2016-03-04 20:59'
        message: ''
        version: '27'
    -
        author: Gildas Lefevre
        date: '2016-03-04 16:36'
        message: ''
        version: '26'
    -
        author: Gildas Lefevre
        date: '2016-03-04 16:27'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2016-01-28 13:46'
        message: ''
        version: '24'
    -
        author: Julien Carsique
        date: '2016-01-19 13:44'
        message: 'NXP-18773: restored MongoDB parameters'
        version: '23'
    -
        author: Julien Carsique
        date: '2016-01-19 13:43'
        message: Reverted from v. 20
        version: '22'
    -
        author: Julien Carsique
        date: '2016-01-19 10:58'
        message: 'NXP-18773: changed MongoDB parameters'
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
{{{multiexcerpt 'DBS-definition' page='GLOS:DBS'}}}

An implementation is available for [MongoDB](http://www.nuxeo.com/mongodb/).

Nuxeo supports the following MongoDB version:

{{{multiexcerpt 'MongoDB-supported' page='Compatibility Matrix'}}}

## Installation

When using MongoDB 3.0 or higher we recommend that you configure the [WiredTiger storage engine](https://docs.mongodb.org/manual/core/wiredtiger/) for better performance of write operations. Please follow [this documentation](https://docs.mongodb.org/manual/tutorial/change-standalone-wiredtiger/) to activate this storage engine.

Nuxeo stores its data in a MongoDB database under the `default` collection. The name of the collection is the Nuxeo repository name. If you have more than one repository configured, other collections with the names of these repositories will be used for storage.

By default MongoDB doesn't require authentication, but you can [enable the client access control](https://docs.mongodb.org/manual/tutorial/enable-authentication/) and create a user with the `dbOwner` role.

{{#> callout type='warning' heading='User Creation with Nuxeo 8.1 and MongoDB 3.x'}}

If you are using a version 3.x of MongoDB on Nuxeo 8.1, you have to change the authentication schema before creating the users in the database. In these MongoDB versions, the default authentication mechanism is SCRAM-SHA-1 which is not supported by Nuxeo 8.1 where the MongoDB driver only supports MONGO-CR.

Note that if you are upgrading from a MongoDB 2.8 databases, you will be fine as the MONGO-CR credentials were previously created.

**For new MongoDB instance** use the following commands:

```js
mongo
use admin
db.system.version.insert({ "_id" : "authSchema", "currentVersion" : 3 })
```

**For existing MongoDB instance with users,** you need to remove the user first (make sure you don't need them before) then change the authentication schema using the following commands:

```js
mongo
use admin
db.system.users.remove({})
db.system.version.remove({})
db.system.version.insert({ "_id" : "authSchema", "currentVersion" : 3 })
```

Then restart the server and recreate users.

{{/callout}}

## Nuxeo Configuration

To activate MongoDB document storage, add the `mongodb` template to your existing list of templates (`nuxeo.templates`) in `nuxeo.conf`.

If you also want to activate audit and directories storage, you need to install the [MongoDB extension addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-mongodb-ext). This addon includes `mongodb-audit` and `mongodb-directory` templates in order to store respectively audit or directories data in MongoDB. For example:

 ```text
 nuxeo.templates=default,mongodb,mongodb-audit,mongodb-directory
 ```

If you are not using the MongoDB extension addon, you **must keep** the template corresponding to your SQL database in `nuxeo.templates`. For instance you could have:

```text
nuxeo.templates=postgresql,mongodb
```

or

```text
nuxeo.templates=default,mongodb
```

The following properties are available in `nuxeo.conf`:

*   `nuxeo.mongodb.server`: The MongoDB server, either a hostname or a hostname with port
    or a full `mongodb://` URI if you have an authentication, the pattern is:
    `mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]`
    (defaults to `localhost:27017`)
*   `nuxeo.mongodb.dbname`: The MongoDB database. (defaults to `nuxeo`)

{{#> callout type='info' }}

Using the full `mongodb://` URI syntax you can configure the connection options, like the pool size, the write concern or the read preference, for instance:

```text
nuxeo.mongodb.server=mongodb://example1.com,example2.com,example3.com/?maxPoolSize=200
```

See the [MongoDB Connection String URI Format](http://docs.mongodb.org/manual/reference/connection-string/) for the list of options.

{{/callout}}

## GridFS

It is possible to use MongoDB's [GridFS](https://docs.mongodb.org/manual/core/gridfs/) mechanism to store binary files inside MongoDB instead of the default filesystem mechanism of Nuxeo. This is activated by adding `gridfsbinaries` to the templates, for instance:

```text
nuxeo.templates=postgresql,mongodb,gridfsbinaries
```

When doing this, binaries will be stored in the `default.fs` GridFS bucket, which means that in native MongoDB the collections `default.fs.files` and `default.fs.chunks` will be used. See the [GridFS Reference](https://docs.mongodb.org/manual/reference/gridfs/) for more details about MongoDB's GridFS implementation.


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

- [DBS - MongoDB developer documentation]({{page page='dbs'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
