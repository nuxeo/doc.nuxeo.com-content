---
title: How to Configure a Multidirectory for Users and Groups
review:
    comment: ''
    date: '2017-12-15'
    status: ok
details:
    howto:
        excerpt: This page provides a turnkey solution to configure a multidirectory.
        level: Intermediate
        tool: XML configuration
        topics: 'LDAP, Multidirectory'
labels:
    - lts2016-ok
    - ldap
    - fdavid
    - howto
    - directory-component
    - migration-sample
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '16089115'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Configure+a+Multidirectory+for+Users+and+Groups
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Configure+a+Multidirectory+for+Users+and+Groups'
    page_id: '19793819'
    shortlink: mwcuAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mwcuAQ'
    source_link: /display/NXDOC/How+to+Configure+a+Multidirectory+for+Users+and+Groups
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-02-18 10:03'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-02-16 14:31'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-12-01 22:25'
        message: ''
        version: '9'
    -
        author: Thierry Martins
        date: '2014-11-27 18:11'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-27 18:01'
        message: fix xml and add details in steps
        version: '7'
    -
        author: Solen Guitter
        date: '2014-11-27 17:38'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2014-07-17 10:15'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-07-17 10:14'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-07-17 10:06'
        message: ''
        version: '3'
    -
        author: Thierry Martins
        date: '2014-07-16 12:22'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2014-07-16 12:05'
        message: ''
        version: '1'

---
This page provides a turnkey solution to configure a multidirectory which responds to the following needs:

*   Local and LDAP users,
*   Local and LDAP groups,
*   Local user creation,
*   Local group creation,
*   Local groups can contain local and LDAP groups as subgroups,
*   Local groups can reference local and LDAP users as members.

This configuration is ready to use, so it is based on a public LDAP server whose main properties are:

*   URL: `ldap://ldap.forumsys.com:389/`
*   Bind user and password: read-only-admin / password
*   Search base DNs for users and groups are entries of `dc=example,dc=com`

Moreover a virtual administrator is added to let you log in even if the LDAP configuration is not perfectly working. It lets you browse the users and groups from **Admin Center** > **Users & Groups**.

**To enable this configuration:**

1.  Copy the XML below in a default-multi-directories-config.xml file.
2.  Put the file in `$NUXEO/nxserver/config`.
3.  Start your server.
4.  Check this multidirectory configuration is working on your Nuxeo Platform instance. For instance:

    *   Log in with newton / password.
    *   Log in with MyAdministrator / secret
    *   With any of these two accounts, go to the **Admin** > **Users & Groups** menu to see new users or groups from the LDAP (use `*` to search all users/groups).
5.  Stop the server and edit the XML file to change the parameters and the field mappings with your specific ones.

{{#> panel type='code' heading='default-multi-directories-config.xml'}}
```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.directory.multi.storage.users">

  <!-- the groups directories are required to make this bundle work -->
  <require>org.nuxeo.ecm.directory.storage</require>
  <require>org.nuxeo.ecm.platform.usermanager.UserManagerImpl</require>

  <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
    point="servers">
    <server name="default">
      <ldapUrl>ldap://ldap.forumsys.com:389/</ldapUrl>
      <bindDn>cn=read-only-admin,dc=example,dc=com</bindDn>
      <bindPassword>password</bindPassword>
      <!-- Attempts to get a result when LDAP is temporary unavailable -->
      <retries>5</retries>
    </server>
  </extension>

  <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
    point="directories">
    <directory name="ldapUserDirectory">
      <server>default</server>
      <schema>user</schema>
      <idField>username</idField>
      <passwordField>password</passwordField>
      <searchBaseDn>dc=example,dc=com</searchBaseDn>
      <searchClass>person</searchClass>
      <!-- use subtree if the people branch is nested -->
      <searchScope>subtree</searchScope>
      <!-- using 'subany', search will match *toto*. use 'subfinal' to
        match *toto and 'subinitial' to match toto*. subinitial is the
        default  behaviour-->
      <substringMatchType>subany</substringMatchType>
      <readOnly>true</readOnly>
      <!-- comment <cache* /> tags to disable the cache -->
      <cacheEntryName>ldap-user-entry-cache</cacheEntryName>
      <cacheEntryWithoutReferencesName>ldap-user-entry-cache-without-references</cacheEntryWithoutReferencesName>
      <!--
           If the id field is not returned by the search, we set it with the searched entry, probably the login.
           Before setting it, you can change its case. Accepted values are 'lower' and 'upper',
           anything else will not change the case.
      -->
      <missingIdFieldCase>lower</missingIdFieldCase>
      <!-- Maximum number of entries returned by the search -->
      <querySizeLimit>200</querySizeLimit>
      <!-- Time to wait for a search to finish. 0 to wait indefinitely -->
      <queryTimeLimit>0</queryTimeLimit>

      <rdnAttribute>uid</rdnAttribute>
      <fieldMapping name="username">uid</fieldMapping>
      <fieldMapping name="password">userPassword</fieldMapping>
      <fieldMapping name="firstName">cn</fieldMapping>
      <fieldMapping name="lastName">sn</fieldMapping>
      <fieldMapping name="company">telephoneNumber</fieldMapping>
      <fieldMapping name="email">mail</fieldMapping>
      <references>
        <inverseReference field="groups" directory="multiGroupDirectory"
          dualReferenceField="members" />
      </references>
    </directory>
    <directory name="ldapGroupDirectory">
      <!-- Reuse the default server configuration defined for ldapUserDirectory -->
      <server>default</server>
      <schema>group</schema>
      <idField>groupname</idField>
      <searchBaseDn>dc=example,dc=com</searchBaseDn>
      <searchFilter>
        (|(objectClass=groupOfUniqueNames)(objectClass=groupOfURLs))
      </searchFilter>
      <searchScope>subtree</searchScope>
      <readOnly>true</readOnly>
      <!-- comment <cache* /> tags to disable the cache -->
      <cacheEntryName>ldap-group-entry-cache</cacheEntryName>
      <cacheEntryWithoutReferencesName>ldap-group-entry-cache-without-references</cacheEntryWithoutReferencesName>

      <!-- Maximum number of entries returned by the search -->
      <querySizeLimit>200</querySizeLimit>
      <!-- Time to wait for a search to finish. 0 to wait indefinitely -->
      <queryTimeLimit>0</queryTimeLimit>
      <rdnAttribute>ou</rdnAttribute>
      <fieldMapping name="groupname">cn</fieldMapping>
      <!-- Add another field to map reel group label -->
      <fieldMapping name="grouplabel">cn</fieldMapping>
      <references>
        <ldapReference field="members" directory="ldapUserDirectory"
          forceDnConsistencyCheck="false" staticAttributeId="uniqueMember"
          dynamicAttributeId="memberURL" />
        <ldapReference field="subGroups" directory="ldapGroupDirectory"
          forceDnConsistencyCheck="false"  staticAttributeId="uniqueMember"
          dynamicAttributeId="memberURL" />
        <inverseReference field="parentGroups" directory="multiGroupDirectory"
          dualReferenceField="subGroups" />
      </references>
    </directory>
  </extension>

  <extension target="org.nuxeo.ecm.directory.GenericDirectory"
    point="directories">
    <directory name="genericUserDirectory" extends="template-user">
      <schema>user</schema>
      <idField>username</idField>
      <passwordField>password</passwordField>
      <passwordHashAlgorithm>SSHA</passwordHashAlgorithm>
      <autoincrementIdField>false</autoincrementIdField>
      <computeMultiTenantId>false</computeMultiTenantId>
      <dataFile>users.csv</dataFile>
      <createTablePolicy>on_missing_columns</createTablePolicy>
      <querySizeLimit>50</querySizeLimit>
      <references>
        <inverseReference field="groups" directory="genericGroupDirectory"
          dualReferenceField="members" />
      </references>
    </directory>
    <directory name="genericGroupDirectory" extends="template-group">
      <schema>group</schema>
      <idField>groupname</idField>
      <dataFile>groups.csv</dataFile>
      <createTablePolicy>on_missing_columns</createTablePolicy>
      <autoincrementIdField>false</autoincrementIdField>
      <references>
        <reference field="members" directory="multiUserDirectory"
          name="user2group" source="groupId" target="userId" schema="user2group"
          dataFile="user2group.csv" />
        <reference field="subGroups" directory="genericGroupDirectory"
          name="group2group" source="parentGroupId"
          target="childGroupId" schema="group2group" />
        <inverseReference field="parentGroups" directory="genericGroupDirectory"
          dualReferenceField="subGroups" />
      </references>
    </directory>
  </extension>

  <extension
    target="org.nuxeo.ecm.directory.multi.MultiDirectoryFactory"
    point="directories">
    <directory name="multiUserDirectory">
      <schema>user</schema>
      <idField>username</idField>
      <passwordField>password</passwordField>
      <source name="userSource" creation="true">
        <subDirectory name="genericUserDirectory" />
      </source>
      <source name="userLDAPsource">
        <subDirectory name="ldapUserDirectory" />
      </source>
    </directory>
    <directory name="multiGroupDirectory">
      <schema>group</schema>
      <idField>groupname</idField>
      <source name="groupSource" creation="true">
        <subDirectory name="genericGroupDirectory" />
      </source>
      <source name="groupLDAPsource">
        <subDirectory name="ldapGroupDirectory" />
      </source>
    </directory>
  </extension>

  <extension target="org.nuxeo.ecm.platform.usermanager.UserService" point="userManager">
    <userManager>
      <defaultAdministratorId>stuart</defaultAdministratorId>
      <defaultGroup>members</defaultGroup>
      <users>
        <directory>multiUserDirectory</directory>
        <virtualUser id="MyAdministrator" searchable="false">
          <password>secret</password>
          <property name="firstName">Super</property>
          <property name="lastName">Admin</property>
          <group>administrators</group>
        </virtualUser>
      </users>
      <groups>
        <directory>multiGroupDirectory</directory>
      </groups>
    </userManager>
  </extension>
</component>
```
{{/panel}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other LDAP related pages'}}

- [Using a LDAP Directory]({{page page='using-a-ldap-directory'}})
- [How to Add Custom LDAP Fields to the UI]({{page page='how-to-add-custom-ldap-fields-to-the-ui'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
