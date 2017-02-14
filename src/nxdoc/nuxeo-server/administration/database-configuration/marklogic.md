---
title: MarkLogic
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - link-update
toc: true
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-09-15 08:06'
        message: ''
        version: '9'
    -
        author: Kevin Leturc
        date: '2016-09-14 08:33'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2016-08-05 09:24'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2016-08-05 09:10'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2016-08-05 09:03'
        message: ''
        version: '5'
    -
        author: Kevin Leturc
        date: '2016-08-04 12:08'
        message: ''
        version: '4'
    -
        author: Kevin Leturc
        date: '2016-08-04 10:09'
        message: ''
        version: '3'
    -
        author: Kevin Leturc
        date: '2016-08-04 08:54'
        message: ''
        version: '2'
    -
        author: Kevin Leturc
        date: '2016-08-04 08:45'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DBS-definition' page='GLOS:DBS'}}}

The Nuxeo Platform supports the following MarkLogic version:

{{{multiexcerpt 'MarkLogic-supported' page='Compatibility Matrix'}}}

## Installation

### Nuxeo Package Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

### Databases

In order to run Nuxeo on MarkLogic, you need to have two databases. One for documents and another one for modules.
You can achieve that with MarkLogic administration GUI under `Databases`.

By default Nuxeo stores its information in the database `nuxeo`. By convention we use `nuxeo-modules` as modules database.

### XDBC Server Installation

You need to create a new XDBC App Server linked to the `nuxeo` database and `nuxeo-modules` modules, as described [in the MarkLogic documentation](https://docs.marklogic.com/guide/admin/http). Main installation information is:

*   Set `/` value in root input.
*   Choose a server name and a port (for example 8010).
*   Select the `nuxeo` database in the database input.
*   Select the `nuxeo-modules` database in the modules input.

### User permissions

#### Roles

In order to secure your database access, you can create new roles to protect it.
Under Security/Roles, create:

A new role named `nuxeo-reader`, with:
* Roles: rest-reader
* Execute Privileges: xdbc:eval, xdbc:eval-in, xdbc:invoke, xdbc:invoke-in, xdbc:spawn, xdbc:spawn-in, xdmp:value, xdmp:with-namespaces

A new role named `nuxeo-writer`, with:
* Roles: rest-writer, nuxeo-reader
* Execute Privileges: any-collection, any-uri, xdbc:insert, xdbc:insert-in
* Default permissions: add nuxeo-reader with read capability, nuxeo-writer with update capability and nuxeo-writer with insert capability

#### Users

Under Security/Users, create a new user to use in MarkLogic connector to access to your database through XDBC app server.
Choose a username and password, and add `nuxeo-reader` and `nuxeo-writer` in Roles section.

### Modules

The MarkLogic connector needs some modules in order to properly work. These modules are used to update documents, lock/unlock them or search them (NXQL search).

A module is basically a regular document stored in the module database, here `nuxeo-modules`.

You can use the qconsole to insert properly modules in the modules database, you can access it here: `http://[IP]:8000/qconsole/`

Below the steps to insert modules:
- Create a new Query in qconsole
- Declare a variable containing the content of `xqy` file, like: `let $module := '...'`.
- Declare a variable containing right permissions to execute module, like: `let $permissions := ( xdmp:permission("[PERMISSION]", "execute") )`.
- Finally, insert the module in database, like: `return xdmp:document-insert("[PATH]", text { $module }, $permissions)`.

You should have for each modules something like this:
```
let $module :=
'
[MODULE_CONTENT]
'
let $permissions := (
  xdmp:permission("[PERMISSION]", "execute")
)

return xdmp:document-insert("[PATH]", text { $module }, $permissions)
```

See the matrix above for variables:

| Module | Content | Permission | Path |
| ------ | ------- | ---------- | ---- |
| patch.xqy | [Here](https://github.com/nuxeo/nuxeo-core-storage-marklogic/blob/8.10/src/main/resources/patch.xqy) | `nuxeo-writer` | /ext/nuxeo/patch.xqy |
| set-lock.xqy | [Here](https://github.com/nuxeo/nuxeo-core-storage-marklogic/blob/8.10/src/main/resources/set-lock.xqy) | `nuxeo-writer` | /ext/nuxeo/set-lock.xqy |
| remove-lock.xqy | [Here](https://github.com/nuxeo/nuxeo-core-storage-marklogic/blob/8.10/src/main/resources/remove-lock.xqy) | `nuxeo-writer` | /ext/nuxeo/remove-lock.xqy |
| extract.xqy | [Here](https://github.com/nuxeo/nuxeo-core-storage-marklogic/blob/8.10/src/main/resources/extract.xqy) | `nuxeo-reader` | /ext/nuxeo/extract.xqy |

## Configuration

Once you installed the Nuxeo MarkLogic addon, set up the access to the MarkLogic server in [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}). The following properties are available:

*   `nuxeo.marklogic.host`: The MarkLogic server, defaults to `localhost`
*   `nuxeo.marklogic.port`: The MarkLogic XDBC App Server port, defaults to `8010`
*   `nuxeo.marklogic.user`: The MarkLogic user to login to App Server, defaults to `nuxeo`
*   `nuxeo.marklogic.password`: The user password, defaults to `password`

The package installation added the `marklogic` template to your existing list of templates (`nuxeo.templates`) in `nuxeo.conf`.

You **must keep** the template corresponding to your SQL database in `nuxeo.templates`, because the SQL database may still be used for other things (directories, audit, etc.). For instance you could have:

```
nuxeo.templates=postgresql,marklogic
```

or

```
nuxeo.templates=default,marklogic
```

### Range Index Configuration

In order to properly work, MarkLogic needs a range element index for each elements you want to compare using `<`, `<=`, `>=` or `>` in a NXQL query.

We also use range index in order to query some elements. To leverage on range indexes, we need to use a different kind of MarkLogic function during NXQL -> MarkLogic query conversion.
In order to enable this behavior, you need to add the Nuxeo element in repository configuration.
You need to use `range-element-index` to declare a Nuxeo element to be queried with the range index behavior. The element name in repository configuration are the Nuxeo ones, for example we declare `ecm:uuid` in the repository configuration and we create `ecm__id` in MarkLogic. Below the default configuration of repository:

```xml
<extension target="org.nuxeo.ecm.core.storage.marklogic.MarkLogicRepositoryService" point="repository">
  <repository name="test" label="MarkLogic Repository">
    ...
    <range-element-indexes>
      <range-element-index type="string">ecm:uuid</range-element-index>
      <range-element-index type="string">ecm:parentId</range-element-index>
      <range-element-index type="string">ecm:ancestorId</range-element-index>
      <range-element-index type="string">ecm:versionVersionableId</range-element-index>
      <range-element-index type="string">ecm:proxyTargetId</range-element-index>
      <range-element-index type="string">ecm:proxyVersionableId</range-element-index>
      <range-element-index type="string">ecm:__read_acl</range-element-index> <!-- Technical element -->
      <range-element-index type="string">ecm:name</range-element-index>
      <range-element-index type="string">ecm:primaryType</range-element-index>
      <range-element-index type="string">ecm:currentLifeCycleState</range-element-index>
      <range-element-index type="dateTime">dc:modified</range-element-index>
      <range-element-index type="string">rend:renditionName</range-element-index>
      <range-element-index type="string">collectionMember:collectionIds</range-element-index>
    </range-element-indexes>
    ...
  </repository>
</extension>
```

Here's a list of basic Nuxeo elements needing a range element index:

| Nuxeo Element | MarkLogic Element | Scalar Type |
| ------------- | ----------------- | ----------- |
| ecm:uuid | ecm\_\_id | string |
| ecm:parentId | ecm\_\_parentId | string |
| ecm:ancestorId | ecm\_\_ancestorIds\_\_item | string |
| ecm:versionVersionableId | ecm\_\_versionSeriesId | string |
| ecm:proxyTargetId | ecm\_\_proxyTargetId | string |
| ecm:proxyVersionableId | ecm\_\_proxyVersionSeriesId | string |
| ecm:__read_acl | ecm\_\_racl | string |
| ecm:name | ecm\_\_name | string |
| ecm:primaryType | ecm\_\_primaryType | string |
| ecm:currentLifeCycleState | ecm\_\_lifeCycleState | string |
| rend:renditionName | rend\_\_renditionName | string |
| collectionMember:collectionIds | collectionMember\_\_collectionIds\_\_item | string |
| created | created | dateTime |
| replaced | replaced | dateTime |
| version-id | version-id | long |
| begin | begin | dateTime |
| end | end | dateTime |
| dc:created | dc\_\_created | dateTime |
| dc:modified | dc\_\_modified | dateTime |
| length | length | long |
| rend:modificationDate | rend\_\_modificationDate | dateTime |
| rend:sourceModificationDate | rend\_\_sourceModificationDate | dateTime |

In order to create these indexes, go to your MarkLogic server configuration, under your database you'll find `Element Range Indexes`. In this section you can create a range element index for each elements with the correct scalar type. Leave `namespace uri` empty, set `range value positions` to false, and `invalid values` to ignore.

## Storage Restrictions

Due to the nature of DBS, we use a transaction model equivalent to READ UNCOMMITTED, which means that a transaction may read data written but not yet committed by another transaction.

Full-text configuration is disabled, you should use Elasticsearch with a suitable full-text configuration.

### Not Yet Implemented

The following features are planned for a later Nuxeo version but are not implemented currently:

- tags aren't supported ([NXP-17670](https://jira.nuxeo.com/browse/NXP-17670))
- querying n-th element of a list is not supported ([NXP-21187](https://jira.nuxeo.com/browse/NXP-21187))
- NOT NXQL constraints such as `item/*` can return false positive ([NXP-21184](https://jira.nuxeo.com/browse/NXP-21184))
- Range index querying is not supported on a date element

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in current documentation'}}

- [DBS]({{page page='dbs'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
