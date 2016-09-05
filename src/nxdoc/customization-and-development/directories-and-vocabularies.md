---
title: Directories and Vocabularies
labels:
    - vocabulary
    - directory
    - sql
    - ldap
toc: true
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Directories+and+Vocabularies
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Directories+and+Vocabularies'
    page_id: '17334478'
    shortlink: zoAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/zoAIAQ'
    source_link: /display/NXDOC58/Directories+and+Vocabularies
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 10:02'
        message: ''
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
&nbsp;

The following is used by the UI if the directory is a hierarchical vocabulary:

*   `**parentDirectory**` : The parent directory to use.

The following are used only if the directory is used for authentication:

*   `**password**` : Field from the table which contain the passwords;
*   `**passwordHashAlgorithm**` : The has algorithm to use to store new passwords. Allowed values are `SSHA` and `SMD5`. The default (nothing specified) is to store passwords in clear.
    Example:

    ```
    <?xml version="1.0"?>
    <component name="com.example.project.directories.sql">
      <extension target="org.nuxeo.ecm.directory.sql.SQLDirectoryFactory"
          point="directories">
        <directory name="continent">
          <schema>vocabulary</schema>
          <dataSource>java:/nxsqldirectory</dataSource>
          <cacheTimeout>3600</cacheTimeout>
          <cacheMaxSize>1000</cacheMaxSize>

    <table>continent</table>
          <idField>id</idField>
          <autoincrementIdField>false</autoincrementIdField>
          <dataFile>directories/continent.csv</dataFile>
          <createTablePolicy>on_missing_columns</createTablePolicy>
        </directory>
      </extension>
    </component>

    ```

## LDAP Directories

LDAP directories store information in a LDAP database. They are defined through the [`servers`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory--servers) and [`directories`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory--directories) extension points of the [`org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory) component.

First, one or more servers have to be defined. A **server** defines:

*   `**name**` : The name of the server which will be used in the declaration of the directories;
*   `**ldapUrl**` : The address of the LDAP server, in `ldap://` or `ldaps://` form. There can be several such tags to leverage clustered LDAP configurations;
*   `**bindDn**` : The Distinguished Name used to bind to the LDAP server;
*   `**bindPassword**` : The corresponding password.

The bind credentials are used by the Nuxeo Platform to browse, create and modify all entries (irrespective of the actual Nuxeo user these entries may represent).

Optional parameters are:

*   `**connectionTimeout**` : The connection timeout (in milliseconds), the default is 10000 (10 seconds);
*   `**poolingEnabled**` : Whether to enable internal connection pooling (the default is true).
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

Once you have declared the server, you can define new LDAP **directories**. The sub-elements of the **directory** element are:

*   `**name**` , `**schema**` , `**idField**` and `**passwordField**` : same as for SQL directories;
*   `**searchBaseDn**` : Entry point into the server's LDAP tree structure; searches are only made below this root node;
*   `**searchClass**` : Restricts the type of entries to return as result;
*   `**searchFilter**` : Additional LDAP filter to restrict the search results;
*   `**searchScope**` : The scope of the search. It can take two values:`onelevel` to search only under the current node, or `subtree` to search in the whole subtree;
*   `**substringMatchType**` : Defines how the query is built using wildcard characters. Three different values can be provided:

    *   `subany`: wildcards are added around the string to match (as *foo*);
    *   `subinitial`: wildcard is added before the string (*bar);
    *   `subfinal`: wildcard is added after the string (baz*). This is the default behavior;
*   `**readOnly**` : Boolean value. When set to false, this parameter allows to create new entries or modify existing ones in the LDAP server;
*   `**cacheTimeout**` : Cache timeout in seconds;
*   `**cacheMaxSize**` : Maximum number of cached entries before global invalidation;
*   `**creationBaseDn**` : Entry point in the server's LDAP tree structure where new entries will be created. Useless to provide if the `readOnly` attribute is set to true;
*   `**creationClass**` : Use as many tag as needed to specify which classes are used to define new people entries in the LDAP server.
    Example:

    ```
    <?xml version="1.0"?>
    <component name="com.example.project.directories.ldap.dir">
      <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
          point="directories">
        <directory name="userDirectory">
          <server>default</server>
          <schema>user</schema>
          <idField>username</idField>
          <passwordField>password</passwordField>

          <searchBaseDn>ou=people,dc=example,dc=com</searchBaseDn>
          <searchClass>person</searchClass>
          <searchFilter>(&amp;(sn=foo*)(myCustomAttribute=somevalue))</searchFilter>
          <searchScope>onelevel</searchScope>
          <substringMatchType>subany</substringMatchType>

          <readOnly>false</readOnly>

          <cacheTimeout>3600</cacheTimeout>
          <cacheMaxSize>1000</cacheMaxSize>

          <creationBaseDn>ou=people,dc=example,dc=com</creationBaseDn>
          <creationClass>top</creationClass>
          <creationClass>person</creationClass>
          <creationClass>organizationalPerson</creationClass>
          <creationClass>inetOrgPerson</creationClass>
        </directory>
      </extension>
    </component>

    ```

## Multi-directories

Multi-directories are used to combine values coming from different directories. They are defined through the [`directories`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewExtensionPoint/org.nuxeo.ecm.directory.multi.MultiDirectoryFactory--directories) extension point of the [`org.nuxeo.ecm.directory.multi.MultiDirectoryFactory`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/viewComponent/org.nuxeo.ecm.directory.multi.MultiDirectoryFactory) component.

A multi-directory is made up of one or more **sources**. Each source aggregates one or more **sub-directories**.

A **source** defines:

*   `**name**`: The source name, for identification purposes;
*   `**creation**`: `true` when new entries should be created in this source (default is `false`);
*   `**subDirectory**`: One or more sub-directories.

A **subDirectory** has:

*   `**name**`: The name of a valid directory, from which data will be read and written;
*   `**optional**`: `true` if the sub-directory may have no info about a given entry without this being an error (default is `false`);
*   `**field**`: Zero or more field mapping between the underlying sub-directory and the name it should have in the multi-directory.

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

## References Between Directories

Directory references leverage two common ways of string relationship in LDAP directories.

### Static Reference as a DN-Valued LDAP Attribute

The static reference strategy is to apply when a multi-valued attribute stores the exhaustive list of distinguished names of reference entries, for example the uniqueMember of the `groupOfUniqueNames` object.

```html/xml
<ldapReference field="members" directory="userDirectory"
  staticAttributeId="uniqueMember" />

```

The `staticAttributeId` attribute contains directly the value which can be read and manipulated.

### Dynamic Reference as a ldapUrl-Valued LDAP Attribute

The dynamic attribute strategy is used when a potentially multi-value attribute stores a LDAP URL intensively, for example the `memberURL`'s attribute of the `groupOfURL` object class.

```html/xml
<ldapReference field="members" directory="userDirectory"
  forceDnConsistencyCheck="false"
  dynamicAttributeId="memberURL" />

```

The value contained in `dynamicAttributeId` looks like `ldap:///ou=groups,dc=example,dc=com??subtree?(cn=sub*)` and will be resolved by dynamical queries to get all values. The `forceDnConsistencyCheck` attribute will check that the value got through the dynamic resolution correspond to the attended format. Otherwise, the value will be ignored. Use this check when you are not sure of the validity of the distinguished name.

### LDAP Tree Reference

The LDAP tree reference can be used to resolve children in the LDAP tree hierarchy.

```html/xml
<ldapTreeReference field="children" directory="groupDirectory"
  scope="subtree" />

```

The field has to be a list of strings. It will resolve children of entries in the current directory, and look them up in the directory specified in the reference.The scope attribute. Available scopes are "onelevel" (default), "subtree". Children with same id than parent will be filtered. An inverse reference can be used to retrieve the parent form the children entries. It will be stored in a list, even if there can be only 0 or 1 parent.

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

### References Defined by a Many-to-Many SQL Table

TODO OG