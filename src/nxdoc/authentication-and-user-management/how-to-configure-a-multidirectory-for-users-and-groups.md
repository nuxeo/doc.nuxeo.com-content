---
title: How to Configure a Multidirectory for Users and Groups
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            This page provides a turnkey&nbsp;solution to configure a
            multidirectory.
        level: Intermediate
        tool: XML configuration
        topics: 'LDAP, Multidirectory'
labels:
    - lts2015-ok
    - directory-component
    - ldap
    - howto
confluence:
    ajs-parent-page-id: '28475727'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: How+to+Configure+a+Multidirectory+for+Users+and+Groups
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/How+to+Configure+a+Multidirectory+for+Users+and+Groups
    page_id: '28475711'
    shortlink: P4GyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/P4GyAQ'
    source_link: /display/NXDOC710/How+to+Configure+a+Multidirectory+for+Users+and+Groups
history:
    -
        author: Solen Guitter
        date: '2016-02-18 10:02'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2016-02-18 10:00'
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
This page provides a <span class="b2" style="color: rgb(36,36,36);">t</span><span class="b3" style="color: rgb(24,24,24);">urn</span><span class="b4" style="color: rgb(12,12,12);">key</span>&nbsp;solution to configure a multidirectory which responds to the following needs:

*   Local and LDAP users,
*   Local and LDAP groups,
*   Local user creation,
*   Local group creation,
*   Local groups can contain local and LDAP groups as subgroups,
*   Local groups can reference local and LDAP users as members.

This configuration is ready to use, so it is based on a public LDAP server whose main properties are:

*   URL:&nbsp;`ldap://ldap.testathon.net:389/`
*   Bind user and password: stuart / stuart
*   Search base DNs for users and groups are entries of&nbsp;`DC=testathon,DC=net`

Moreover a virtual administrator is added to let you log in even if the LDAP configuration is not perfectly working. It lets you browse the users and groups from **Admin Center** > **Users & Groups**.

**To enable this configuration:**

1.  Copy the XML below in a default-multi-directories-config.xml file.
2.  Put the file in `$NUXEO/nxserver/config`.
3.  Start your server.
4.  Check this multidirectory configuration is working on your Nuxeo Platform instance. For instance:

    *   Log in with stuart / stuart.
    *   Log in with MyAdministrator / secret
    *   With any of these two accounts, go to the **Admin** > **Users & Groups** menu to see new users or groups from the LDAP (use `*` to search all users/groups).
5.  Stop the server and edit the XML file to change the parameters and the field mappings with your specific ones.

{{#> panel type='code' heading='default-multi-directories-config.xml'}}

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.directory.multi.storage.users">
  <implementation class="org.nuxeo.ecm.directory.ldap.LDAPDirectoryDescriptor" />
  <implementation class="org.nuxeo.ecm.directory.ldap.LDAPServerDescriptor" />
  <require>org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory</require>
  <!-- the groups SQL directories are required to make this bundle work -->
  <require>org.nuxeo.ecm.directory.sql.storage</require>
  <require>org.nuxeo.ecm.platform.usermanager.UserManagerImpl</require>

  <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
    point="servers">
    <server name="default">
      <ldapUrl>ldap://ldap.testathon.net:389/</ldapUrl>
      <bindDn>CN=stuart,OU=users,DC=testathon,DC=net</bindDn>
      <bindPassword>stuart</bindPassword>
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
      <searchBaseDn>DC=testathon,DC=net</searchBaseDn>
      <searchClass>person</searchClass>
      <!-- use subtree if the people branch is nested -->
      <searchScope>subtree</searchScope>
      <!-- using 'subany', search will match *toto*. use 'subfinal' to
        match *toto and 'subinitial' to match toto*. subinitial is the
        default  behaviour-->
      <substringMatchType>subany</substringMatchType>
      <readOnly>true</readOnly>
      <!-- comment <cache* /> tags to disable the cache -->
      <!-- cache timeout in seconds -->
      <cacheTimeout>3600</cacheTimeout>
      <!-- maximum number of cached entries before global invalidation -->
      <cacheMaxSize>1000</cacheMaxSize>
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

      <rdnAttribute>cn</rdnAttribute>
      <fieldMapping name="username">cn</fieldMapping>
      <fieldMapping name="password">userPassword</fieldMapping>
      <fieldMapping name="firstName">givenName</fieldMapping>
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
      <searchBaseDn>OU=groups,DC=testathon,DC=net</searchBaseDn>
      <searchFilter>
        (|(objectClass=groupOfNames)(objectClass=groupOfURLs))
      </searchFilter>
      <searchScope>subtree</searchScope>
      <readOnly>true</readOnly>
      <!-- comment <cache* /> tags to disable the cache -->
      <!-- cache timeout in seconds -->
      <cacheTimeout>3600</cacheTimeout>
      <!-- maximum number of cached entries before global invalidation -->
      <cacheMaxSize>1000</cacheMaxSize>

      <!-- Maximum number of entries returned by the search -->
      <querySizeLimit>200</querySizeLimit>
      <!-- Time to wait for a search to finish. 0 to wait indefinitely -->
      <queryTimeLimit>0</queryTimeLimit>
      <rdnAttribute>cn</rdnAttribute>
      <fieldMapping name="groupname">cn</fieldMapping>
      <!-- Add another field to map reel group label -->
      <fieldMapping name="grouplabel">description</fieldMapping>
      <references>
        <ldapReference field="members" directory="ldapUserDirectory"
          forceDnConsistencyCheck="false" staticAttributeId="member"
          dynamicAttributeId="memberURL" />
        <ldapReference field="subGroups" directory="ldapGroupDirectory"
          forceDnConsistencyCheck="false"  staticAttributeId="member"
          dynamicAttributeId="memberURL" />
        <inverseReference field="parentGroups" directory="multiGroupDirectory"
          dualReferenceField="subGroups" />
      </references>
    </directory>
  </extension>

  <implementation class="org.nuxeo.ecm.directory.sql.SQLDirectoryDescriptor" />
  <require>org.nuxeo.ecm.directory.sql.SQLDirectoryFactory</require>
  <extension target="org.nuxeo.ecm.directory.sql.SQLDirectoryFactory"
    point="directories">
    <directory name="sqlUserDirectory">
      <schema>user</schema>
      <dataSource>jdbc/nxsqldirectory</dataSource>

<table>users</table>
      <idField>username</idField>
      <passwordField>password</passwordField>
      <passwordHashAlgorithm>SSHA</passwordHashAlgorithm>
      <autoincrementIdField>false</autoincrementIdField>
      <computeMultiTenantId>false</computeMultiTenantId>
      <dataFile>users.csv</dataFile>
      <createTablePolicy>on_missing_columns</createTablePolicy>
      <querySizeLimit>50</querySizeLimit>
      <references>
        <inverseReference field="groups" directory="sqlGroupDirectory"
          dualReferenceField="members" />
      </references>
    </directory>
    <directory name="sqlGroupDirectory">
      <schema>group</schema>
      <dataSource>jdbc/nxsqldirectory</dataSource>

<table>groups</table>
      <idField>groupname</idField>
      <dataFile>groups.csv</dataFile>
      <createTablePolicy>on_missing_columns</createTablePolicy>
      <autoincrementIdField>false</autoincrementIdField>
      <!-- Add 10 min cache to avoid refetching the groups during login -->
      <cacheTimeout>360</cacheTimeout>
      <cacheMaxSize>1000</cacheMaxSize>
      <references>
        <tableReference field="members" directory="multiUserDirectory"
          table="user2group" sourceColumn="groupId" targetColumn="userId" schema="user2group"
          dataFile="user2group.csv" />
        <tableReference field="subGroups" directory="sqlGroupDirectory"
          table="group2group" sourceColumn="parentGroupId"
          targetColumn="childGroupId" schema="group2group" />
        <inverseReference field="parentGroups" directory="sqlGroupDirectory"
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
      <source name="userSQLsource" creation="true">
        <subDirectory name="sqlUserDirectory" />
      </source>
      <source name="userLDAPsource">
        <subDirectory name="ldapUserDirectory" />
      </source>
    </directory>
    <directory name="multiGroupDirectory">
      <schema>group</schema>
      <idField>groupname</idField>
      <source name="groupSQLsource" creation="true">
        <subDirectory name="sqlGroupDirectory" />
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

&nbsp;

* * *

&nbsp;