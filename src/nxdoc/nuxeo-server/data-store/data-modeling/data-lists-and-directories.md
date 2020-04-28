---
title: Data Lists and Directories
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - ldap
    - sql
    - directory-component
    - vocabulary
    - tmartins
    - multiexcerpt-include
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '31033314'
    ajs-parent-page-title: Nuxeo Server
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Data+Lists+and+Directories
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Data+Lists+and+Directories'
    page_id: '4688939'
    shortlink: K4xH
    shortlink_source: 'https://doc.nuxeo.com/x/K4xH'
    source_link: /display/NXDOC/Data+Lists+and+Directories
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2015-09-03 15:53'
        message: ''
        version: '16'
    -
        author: Julien Carsique
        date: '2015-07-20 09:45'
        message: ''
        version: '15'
    -
        author: Thierry Delprat
        date: '2015-03-19 14:15'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-09-19 15:03'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-09-19 11:11'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-09-19 11:11'
        message: Merging Data Lists and Directories and Directories and Vocabularies pages
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-09-10 14:50'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-07-18 12:35'
        message: formatting
        version: '9'
    -
        author: Solen Guitter
        date: '2013-08-27 17:58'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2013-08-27 17:58'
        message: Added links to the Explorer and some formatting
        version: '7'
    -
        author: Thibaud Arguillere
        date: '2013-08-26 22:56'
        message: ''
        version: '6'
    -
        author: Thibaud Arguillere
        date: '2013-08-26 22:50'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2010-12-29 14:54'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Florent Guillaume
        date: '2010-12-29 14:54'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2010-12-29 12:38'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2010-12-28 19:23'
        message: ''
        version: '1'

---
In the Nuxeo Platform, a **directory** is used to provide an abstraction on all referential data that can be manipulated inside the application. These data are (mostly) table-like data that live outside of the VCS document storage database:

*   Users,
*   Groups of users,
*   Fixed list of values (vocabularies),
*   Roles,
*   ...

A directory is typically a connection to an external data source that is also accessed by other processes than the Nuxeo Platform itself (therefore allowing shared management and usage).

A **vocabulary** is a specialized **directory** with only a few important columns that are used by the Nuxeo Platform to display things like menus and selection lists.

We try to map all data that can be manipulated like record via directories. For that, directories provide a simple CRUD API and an abstraction on the actual implementation. This means that the services of the platform do not have to worry about where and how the data is stored, they just access the API.

![]({{file name='Directory-Principles.png'}} ?w=500)

Directories comes with several implementations:

*   SQL directories that can map SQL tables,
*   noSQL directories with an implementation based on MongoDB (since 8.10)
*   LDAP directories that can map a LDAP server,
*   Repository Directory that can map to Documents inside the Repository (since 6.0)
*   Custom directory relying on Directory Connector to map a remote service
*   Multi-directory that allow to combine several directories into a single one.

One of the ideas behind the Directory concept is to be able to provide standard UI building blocks on top of data coming from various sources.

Typically, as long as your data or services are mapped through a Directory model:

*   you can access it with a standard API
*   you can use standard widgets to reference or search an entry or a list of entries
*   you can use the standard Layout / Widget system to manage entries
    *   list entries
    *   create/edit/view entry

![]({{file name='Directory-UI.png'}} ?w=500)

## Vocabularies Functional Overview

{{{multiexcerpt 'vocabularies-content' page='USERDOC:Managing Vocabularies'}}}

## Generic Directory and Directory Templates

All directories share a common set of properties that can be defined directly inside a specific directory, or through a templating mechanism.

A few directory properties control how the directory is used with respect to other directories. These properties are specified as XML attributes of the main `<directory>` element:

*   `name`: The name of the directory, used for overloading and in application code.
*   `remove`: If `true` then the previous definition for this directory, if any, is forgotten.
*   `template`: If `true` then this directory cannot be used by itself, it is just a template.
*   `extends`: The name of a template directory from which the properties are merged.

The generic properties for all directories are:

*   `schema`: The schema describing the columns in the directory.
*   `idField`: The primary key in the table, used for retrieving entries by id.
*   `autoincrementIdField`: Whether the `idField` is automatically incremented. (Default is `false`.)
*   `readOnly`: If the directory should be read-only. (Default is `false`.)
*   `substringMatchType`: How a non-exact match is done; possible values are `subany`, `subinitial` or `subfinal`; this is used in most UI searches. (Default is `subinitial`.)
*   `table`: The table in which the data are stored. (SQL only, defaults to the directory name.)
*   `reference`: The definition of a reference to another directory.
*   `inverseReference`: The definition of an inverse reference to another directory.

The following control how data are initially loaded into the directory:

*   `dataFile`: CSV file from which data are read to populate the directory, depending on the other following properties.
*   `dataFileCharacterSeparator`: The character used to separate entries in the `dataFile`. (Defaults to `,`)
*   `createTablePolicy`: Indicates how the `dataFile` will be used to populate the directory. Three values are allowed: `never` if the `dataFile` is never used (the default), `on_missing_columns` if the `dataFile` is used to create missing columns (when the directory is created or each time a new column is added, due to a schema change), `always` if the `dataFile` is used to create the directory at each restart of the Nuxeo Platform.

The following control how entries are cached:

*   `cacheTimeout`: The timeout (in seconds) after which an entry is evicted from the cache. The default is 0, which means never time out. (SQL only).
    {{#> callout type='note' }}
    It is deprecated since LTS 2015 and should be replace by the usage of `cacheEntryName` and `cacheEntryWithoutReferencesName` where max size and TTL (equivalent to timeout) can be configured.
    {{/callout}}
*   `cacheMaxSize`: The maximum number of entries in the cache. The default is 0, which means to not use caching. (SQL only)
    {{#> callout type='note' }}
    Also deprecated since LTS 2015.
    {{/callout}}
*   `cacheEntryName`: The name of the cache (from the CacheService) containing full entries. (SQL/LDAP only)
*   `cacheEntryWithoutReferencesName`: The name of the cache (from the CacheService) containing entries without references. (SQL/LDAP only)
*   `negativeCaching`: Whether to cache negative cache hits (the default is `false`). (SQL/LDAP only)

The following are used if the directory is a hierarchical vocabulary:

*   `parentDirectory`: The parent directory to use in the UI.
*   `deleteConstraint`: Adds constraint(s) preventing the deletion of an entry from a parent directory if it is referenced in a child directory. Example (in the `continent` directory):
    ```
    <deleteConstraint class="org.nuxeo.ecm.directory.HierarchicalDirectoryDeleteConstraint">
      <property name="targetDirectory">country</property>
      <property name="targetDirectoryField">parent</property>
    </deleteConstraint>
    ```

The following are used only if the directory is used for authentication:

*   `password`: Field from the table which contain the passwords.
*   `passwordHashAlgorithm`: The hash algorithm to use to store new passwords. Allowed values are `SSHA` and `SMD5`. The default (nothing specified) is to store passwords in clear.

The following control directory visibility and access:

*   `type`: A directory of type `system` will not be listed in the directory REST endpoint. Example:
    ```
    <types>
      <type>system</type>
    </types>
    ```
*   `permission`: Defines, for each of the `Read` and `Write` permissions, which users or groups are allowed access to the directory. Example:
    ```
    <permissions>
      <permission name="Read">
        <group>mygroup</group>
        <group>mygroup2</group>
        <user>Administrator</user>
      </permission>
     </permissions>
     ```
     To disallow any access (except for the system), use the group `__Nobody__`:
    ```
    <permissions>
      <permission name="Read">
        <group>__Nobody__</group>
      </permission>
    </permissions>
    ```

Example template directory (SQL for this example, see below for the SQL-specific properties):

```
<extension target="org.nuxeo.ecm.directory.sql.SQLDirectoryFactory"
    point="directories">
  <directory name="template-directory" template="true">
    <dataSource>java:/nxsqldirectory</dataSource>
    <autoincrementIdField>false</autoincrementIdField>
    <createTablePolicy>on_missing_columns</createTablePolicy>
  </directory>
</extension>
```

Example template extending this base template:

```
<extension target="org.nuxeo.ecm.directory.GenericDirectory"
    point="directories">
  <directory name="template-vocabulary" template="true" extends="template-directory">
    <schema>vocabulary</schema>
    <idField>id</idField>
  </directory>
</extension>
```

Example directory using the above templates:

```
<extension target="org.nuxeo.ecm.directory.GenericDirectory"
    point="directories">
  <directory name="language" extends="template-vocabulary">
    <dataFile>directories/language.csv</dataFile>
  </directory>
</extension>
```

## SQL Directories

SQL directories read and store their information in a SQL database. They are defined through the [`directories`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.directory.sql.SQLDirectoryFactory--directories) extension point of the [`org.nuxeo.ecm.directory.sql.SQLDirectoryFactory`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.directory.sql.SQLDirectoryFactory) component.

The following properties are specific to SQL directories:

*   `dataSource`: The JDBC datasource defining the database in which the data is stored;
*   `querySizeLimit`: The maximum number of results that the queries on this directory should return. If there are more results than this, an exception will be raised;

Example:

```
<?xml version="1.0"?>
<component name="com.example.project.directories.sql">
  <extension target="org.nuxeo.ecm.directory.sql.SQLDirectoryFactory"
      point="directories">
    <directory name="continent">
      <schema>vocabulary</schema>
      <dataSource>java:/nxsqldirectory</dataSource>
      <cacheEntryName>continent-entry-cache</cacheEntryName>
      <cacheEntryWithoutReferencesName>continent-entry-cache-without-references</cacheEntryWithoutReferencesName>
      <table>continent</table>
      <idField>id</idField>
      <autoincrementIdField>false</autoincrementIdField>
      <dataFile>directories/continent.csv</dataFile>
      <createTablePolicy>on_missing_columns</createTablePolicy>
    </directory>
  </extension>
  <extension target="org.nuxeo.ecm.core.cache.CacheService" point="caches">
    <cache name="continent-entry-cache">
      <ttl>20</ttl><!-- minutes -->
      <option name="maxSize">100</option>
      <option name="concurrencyLevel">500</option>
    </cache>
    <cache name="continent-entry-cache-without-references">
      <ttl>20</ttl><!-- minutes -->
      <option name="maxSize">100</option>
      <option name="concurrencyLevel">500</option>
    </cache>
  </extension>
</component>
```

## LDAP Directories

LDAP directories store information in a LDAP database. They are defined through the [`servers`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory--servers) and [`directories`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory--directories) extension points of the [`org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory) component.

First, one or more servers have to be defined. A **server** defines:

*   `name`: The name of the server which will be used in the declaration of the directories;
*   `ldapUrl`: The address of the LDAP server, in `ldap://` or `ldaps://` form. There can be several such tags to leverage clustered LDAP configurations;
*   `bindDn`: The Distinguished Name used to bind to the LDAP server;
*   `bindPassword`: The corresponding password.

The bind credentials are used by the Nuxeo Platform to browse, create and modify all entries (irrespective of the actual Nuxeo user these entries may represent).

Optional parameters are:

*   `connectionTimeout`: The connection timeout (in milliseconds), the default is 10000 (10 seconds);
*   `poolingEnabled`: Whether to enable internal connection pooling (the default is true).
    Example:

    ```
    <?xml version="1.0"?>
    <component name="com.example.project.directories.ldap.srv">
      <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
          point="servers">
        <server name="default">
          <ldapUrl>ldap://localhost:389</ldapUrl>
          <bindDn>cn=nuxeo,ou=applications,dc=example,dc=com</bindDn>
          <bindPassword>secret</bindPassword>
        </server>
      </extension>
    </component>

    ```

Once you have declared the server, you can define new LDAP **directories**. The sub-elements of the **directory** element are, in addition to the generic ones already defined above:

*   `searchBaseDn`: Base DN under which searches are done.
*   `searchClass`: Restricts the type of entries to return as result.
*   `searchFilter`: Additional LDAP filter to restrict the search results. Note that if you wish to include a `&` you'll have to escape it as `&amp;` as this is an XML file.
*   `searchScope`: The scope of the search. Either `onelevel` to search only under the current node, or `subtree` to search in the whole subtree. (Default is `onelevel`.)
*   `creationBaseDn`: Base DN under which new entries are created.
*   `creationClass`: Which classes are used to define new entries in the LDAP server. (Multiple elements can be specified.)

Example:

```
<?xml version="1.0"?>
<component name="com.example.project.directories.ldap.dir">

  <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
      point="servers"
    <server name="default">
      <ldapUrl>ldap://localhost:389</ldapUrl>
      <bindDn>cn=nuxeo5,ou=applications,dc=example,dc=com</bindDn>
      <bindPassword>changeme</bindPassword>
    </server>
  </extension>

  <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
      point="directories">
    <directory name="userDirectory">
      <server>default</server>

      <schema>user</schema>
      <idField>username</idField>
      <passwordField>password</passwordField>
      <substringMatchType>subany</substringMatchType>
      <readOnly>false</readOnly>
      <cacheEntryName>ldap-user-entry-cache</cacheEntryName>
      <cacheEntryWithoutReferencesName>ldap-user-entry-cache-without-references</cacheEntryWithoutReferencesName>

      <searchBaseDn>ou=people,dc=example,dc=com</searchBaseDn>
      <searchClass>person</searchClass>
      <searchFilter>(&amp;(sn=foo*)(myCustomAttribute=somevalue))</searchFilter>
      <searchScope>onelevel</searchScope>

      <creationBaseDn>ou=people,dc=example,dc=com</creationBaseDn>
      <creationClass>top</creationClass>
      <creationClass>person</creationClass>
      <creationClass>organizationalPerson</creationClass>
      <creationClass>inetOrgPerson</creationClass>
    </directory>
  </extension>
  <extension target="org.nuxeo.ecm.core.cache.CacheService" point="caches">
    <cache name="ldap-user-entry-cache">
      <option name="maxSize">${nuxeo.cache.maxsize}</option>
      <ttl>${nuxeo.cache.ttl}</ttl><!-- minutes -->
      <option name="concurrencyLevel">${nuxeo.cache.concurrencylevel}</option>
    </cache>

    <cache name="ldap-user-entry-cache-without-references">
      <option name="maxSize">${nuxeo.cache.maxsize}</option>
      <ttl>${nuxeo.cache.ttl}</ttl><!-- minutes -->
      <option name="concurrencyLevel">${nuxeo.cache.concurrencylevel}</option>
    </cache>
  </extension>
</component>

```

## Multi-directories

Multi-directories are used to combine values coming from different directories. They are defined through the [`directories`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.directory.multi.MultiDirectoryFactory--directories) extension point of the [`org.nuxeo.ecm.directory.multi.MultiDirectoryFactory`](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.directory.multi.MultiDirectoryFactory) component.

A multi-directory is made up of one or more **sources**. Each source aggregates one or more **sub-directories**.

A **source** defines:

*   `name`: The source name, for identification purposes;
*   `creation`: `true` when new entries should be created in this source (default is `false`);
*   `subDirectory`: One or more sub-directories.

A **subDirectory** has:

*   `name`: The name of a valid directory, from which data will be read and written;
*   `optional`: `true` if the sub-directory may have no info about a given entry without this being an error (default is `false`);
*   `field`: Zero or more field mapping between the underlying sub-directory and the name it should have in the multi-directory.

A **field** element is of the form: `<field for="foo">bar</field>`. This means that the field `foo` of the underlying directory will be turned into a field named `bar` in the multi-directory.

When an entry is requested from the multi-directory, each source will be consulted in turn. The first one that has an answer will be used. In a source, the fields of a given entry will come from all the sub-directories, with appropriate field name re-mapping. Each sub-directory has part of the entry, keyed by its main id (which may be remapped).

For the creation of new entries, only the sources marked for _creation_ are considered.
Example:

```
<?xml version="1.0"?>
<component name="com.example.project.directories.multi">
  <extension target="org.nuxeo.ecm.directory.multi.MultiDirectoryFactory"
      point="directories">
    <directory name="mymulti">
      <schema>someschema</schema>
      <idField>uid</idField>
      <passwordField>password</passwordField>
      <source name="sourceA" creation="true">
        <subDirectory name="dir1">
          <field for="thefoo">foo</field>
        </subDirectory>
        <subDirectory name="dir2">
          <field for="uid">id</field>
          <field for="thebar">bar</field>
        </subDirectory>
      </source>
      <source name="sourceB">
        ...
      </source>
    </directory>
  </extension>
</component>

```

## About Directory Connector

The Directory Connector is sample code that can be used to wrap a remote web service as a directory.

This code is part of [nuxeo-directory-addons](https://github.com/nuxeo/nuxeo-directory-addons).

![]({{file name='Directory-Connector.png'}} ?w=500)

&nbsp;

## References Between Directories

### Generic Directory References

References between directories can be defined at the generic directory level so it can be used whatever implementation had been chosen for directories. This definition is an abstraction of the specific `tableReference` for SQL and `ldapReference` for LDAP.

Example:

```html/xml
<extension target="org.nuxeo.ecm.directory.GenericDirectory"
    point="directories">
  <directory name="userDirectory" extends="template-directory">
    <schema>users</schema>
    <idField>username</idField>
    <passwordField>password</passwordField>
    ...
    <references>
      <reference field="groups" directory="groupDirectory"
                 name="user2group" source="userId"
                 target="groupId" dataFile="user2group.csv"/>
    </references>
    ...
  </directory>
</extension>
```


### LDAP Directory References

Directory references leverage two common ways of string relationship in LDAP directories.

#### Static Reference as a DN-Valued LDAP Attribute

The static reference strategy is to apply when a multi-valued attribute stores the exhaustive list of distinguished names of reference entries, for example the uniqueMember of the `groupOfUniqueNames` object.

```html/xml
<ldapReference field="members" directory="userDirectory"
  staticAttributeId="uniqueMember" />

```

The `staticAttributeId` attribute contains directly the value which is read and manipulated.

#### Dynamic Reference as a ldapUrl-Valued LDAP Attribute

The dynamic attribute strategy is used when a potentially multi-valued attribute stores a LDAP URL intensively, for example the `memberURL`'s attribute of the `groupOfURL` object class.

```html/xml
<ldapReference field="members" directory="userDirectory"
  forceDnConsistencyCheck="false"
  dynamicAttributeId="memberURL" />

```

The value contained in `dynamicAttributeId` looks like `ldap:///ou=groups,dc=example,dc=com??subtree?(cn=sub*)` and will be resolved by dynamical queries to get all values.

The `forceDnConsistencyCheck` attribute will check that the value got through the reference belongs to the target directory. Otherwise, the value will be ignored. Use this check when you are not sure of the validity of the distinguished name.

#### LDAP Tree Reference

The LDAP tree reference can be used to resolve children in the LDAP tree hierarchy.

```html/xml
<ldapTreeReference field="children" directory="groupDirectory"
  scope="subtree" />

```

The field has to be a list of strings. It will resolve children of entries in the current directory, and look them up in the directory specified in the reference. The scope attribute sets the scope of the search for entries. Available scopes are "onelevel" (default), "subtree". Children with same id than parent will be filtered. An inverse reference can be used to retrieve the parent from the children entries. It will be stored in a list, even if there can be only 0 or 1 parent.

{{#> callout type='warning' }}

Edit is NOT IMPLEMENTED: modifications to this field will be ignored when saving the entry.

{{/callout}}

### Defining Inverse References

Inverse references are defined with the following declarations:

```html/xml
<references>
  <inverseReference field="groups" directory="groupDirectory"
    dualReferenceField="members" />
</references>

```

This syntax should be understood as "the member groups value is an inverse reference on `groupDirectory` directory using members reference". It is the group directory that stores all members for a given group. So the groups of a member are retrieved by querying in which groups a member belongs to.
