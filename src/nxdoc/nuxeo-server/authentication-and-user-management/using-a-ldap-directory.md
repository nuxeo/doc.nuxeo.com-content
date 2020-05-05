---
title: LDAP and Active Directory
description: Discover how to set up your Nuxeo Instance to use a LDAP directory.
review:
    comment: ''
    date: '2019-04-23'
    status: ok
labels:
    - lts2016-ok
    - ldap
    - authentication
    - dmetzler
    - active-directory
    - link-update
    - directory-component
    - migration-sample
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089115'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Using+a+LDAP+Directory
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+a+LDAP+Directory'
    page_id: '5570895'
    shortlink: TwFV
    shortlink_source: 'https://doc.nuxeo.com/x/TwFV'
    source_link: /display/NXDOC/Using+a+LDAP+Directory
tree_item_index: 130
history:
    -
        author: Damien Metzler
        date: '2015-12-08 11:18'
        message: ''
        version: '38'
    -
        author: Solen Guitter
        date: '2015-01-21 09:47'
        message: ''
        version: '37'
    -
        author: Solen Guitter
        date: '2015-01-21 09:43'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2015-01-21 09:43'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2015-01-21 09:42'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2014-11-27 12:03'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2014-09-22 10:40'
        message: Formatting
        version: '32'
    -
        author: Thierry Martins
        date: '2014-09-19 16:48'
        message: ''
        version: '31'
    -
        author: Manon Lumeau
        date: '2014-07-17 10:29'
        message: ''
        version: '30'
    -
        author: Manon Lumeau
        date: '2014-07-17 10:29'
        message: ''
        version: '29'
    -
        author: Manon Lumeau
        date: '2014-07-17 10:26'
        message: ''
        version: '28'
    -
        author: Thierry Martins
        date: '2014-07-16 11:03'
        message: add links to attachments
        version: '27'
    -
        author: Solen Guitter
        date: '2013-11-13 11:12'
        message: Updated link
        version: '26'
    -
        author: Solen Guitter
        date: '2013-10-10 16:59'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2013-05-22 13:00'
        message: Formatted steps and added related pages
        version: '24'
    -
        author: Alain Escaffre
        date: '2013-05-20 10:40'
        message: ''
        version: '23'
    -
        author: Julien Carsique
        date: '2012-12-18 16:57'
        message: Add a link to NXDOC/Directories+and+Vocabularies
        version: '22'
    -
        author: Olivier Grisel
        date: '2012-12-12 11:57'
        message: ''
        version: '21'
    -
        author: Olivier Grisel
        date: '2012-12-12 11:57'
        message: ''
        version: '20'
    -
        author: Olivier Grisel
        date: '2012-12-12 11:56'
        message: ''
        version: '19'
    -
        author: Anahide Tchertchian
        date: '2012-10-11 14:37'
        message: mark LDAP issue as fixed on 5.6
        version: '18'
    -
        author: Florent Guillaume
        date: '2012-02-09 14:46'
        message: Migrated to Confluence 4.0
        version: '17'
    -
        author: Florent Guillaume
        date: '2012-02-09 14:46'
        message: ''
        version: '16'
    -
        author: Florent Guillaume
        date: '2012-02-09 14:45'
        message: ''
        version: '15'
    -
        author: Julien Carsique
        date: '2012-01-13 14:53'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2012-01-13 14:52'
        message: ''
        version: '13'
    -
        author: Thierry Martins
        date: '2011-10-07 10:11'
        message: ''
        version: '12'
    -
        author: Thierry Martins
        date: '2011-10-07 10:10'
        message: ''
        version: '11'
    -
        author: Thierry Martins
        date: '2011-09-08 17:49'
        message: ''
        version: '10'
    -
        author: Thierry Martins
        date: '2011-09-08 17:45'
        message: ''
        version: '9'
    -
        author: Thierry Martins
        date: '2011-09-08 17:42'
        message: 'add config for DM >= 5.4.2'
        version: '8'
    -
        author: Julien Carsique
        date: '2011-06-20 12:07'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2011-06-20 12:05'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2011-06-15 16:19'
        message: workaround for NXP-6574
        version: '5'
    -
        author: Julien Carsique
        date: '2011-06-14 19:53'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2011-02-08 15:15'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2011-02-07 19:08'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2011-02-07 18:51'
        message: ''
        version: '1'
---

In the Nuxeo Platform, users and groups are managed by directories. If you want your Nuxeo instance to use a LDAP directory you will need to:

- configure a user directory pointing to your LDAP server(s),
- configure a group directory pointing to your LDAP server(s) (if you need LDAP groups).

Of course you can have a specific custom config where:

- you use a custom user / group schema,
- you use several LDAP directories, or a mix of SQL and LDAP directories.

But for the most common use case, all you want to do is map the default `userDirectory` to your LDAP Server. Since groups are used in Nuxeo to associate permissions with content, fetching groups from LDAP is usually not very efficient: LDAP groups are usually not designed for that.

## Configuration

The Users & Groups step of the [startup wizard]({{page page='configuration-wizard'}}) enables you to set up your LDAP, SQL or multidirectory configuration: Select the kind of "directory" you want (SQL, LDAP, Multi-directory), and fill in the required information.

![]({{file name='nuxeo-wizard-user-and-groups.png'}} ?w=400,border=true)

![]({{file name='wizard-users-groups.png'}} ?w=600,border=true)

The wizard will actually generate a contribution to the `userManager` extension point and some contributions for declaring users and groups directories, and it will copy them in the `nxserver/config` folder (ex: `default-ldap-users-directory-bundle.xml`).

You can find a [full example of contribution to the userManager](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.usermanager.UserService--userManager) extension point on the explorer. Here is a review of the specific useful parts.

Users are defined on the `users` element:

```xml
<userManager>
    <users>
        <directory>somedirectory</directory> ...
```

The value `somedirectory` is the name of a contributed directory (see [LDAP]({{page page='data-lists-and-directories'}}#ldap-directories) and [ SQL users]({{page page='data-lists-and-directories'}}#sql-directories) contributions, as well as [multidirectory]({{page page='data-lists-and-directories'}}#multi-directories)).

Groups are defined on the `groups` element (also referencing already contributed directory).

```xml
 <groups>
    <directory>somegroupdir</directory>
    <membersField>members</membersField>
    <subGroupsField>subgroups</subGroupsField>
    <parentGroupsField>parentgroup</parentGroupsField>
    <listingMode>search_only</listingMode>
</groups>
```

## Default Users and Groups Configuration

By default, the platform's administrator is the principal "Administrator". On the same [contribution to the UserManager extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.usermanager.UserService--userManager) you can define which principal from the remote identity provider will be the administrator of the application, instead of Administrator. That way you can assign a "real" user. This is done using the `defaultAdministratorId` element.

You can also choose a group from your company's directory instead of using the default "administrators" group, to determine the users who will benefit from all the rights in the platform. This is done using the `administratorsGroup` element.

There are 2 ways to define your LDAP configuration:

- Set all out-of-the-box LDAP variables in `nuxeo.conf`
- Providing an XML contribution for your LDAP configuration

The first approach allows you to simply reuse the default LDAP configuration template [here](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/nuxeo-nxr-server/src/main/resources/templates/common/config/default-ldap-users-directory-bundle.xml.nxftl) by providing values for each variable defined in this template. The advantage of that solution is you don't have to deal with future upgrades config changes as you simply define variables in `nuxeo.conf`. If changes are required then the template will be automatically updated at the future upgrades.

If you need to add other custom setting where the template doesn't define any variable for that config then the second option would be better. You will have to maintain this contribution for future Nuxeo upgrades.

## LDAP Configuration Variables (nuxeo.conf)

{{#> callout type='info'}}
LDAP settings vary widely across vendors and organizations. Please check with your LDAP administrator to properly configure LDAP authentication.
{{/callout}}

To enable LDAP authentication, add the following properties to your `nuxeo.conf` file.  Default settings are shown with _**bold italics**_, while example settings are shown with `monotype`.

### Connection Parameters

| Property | Values | Description |
|----------------------------|:--------------------------------:|--------------------------------------------------------------------------------------------------------|
| nuxeo.directory.type | _**default**_, multi, ldap | Select where Users and Groups are managed<ul><li>`default`: Nuxeo Database</li><li>`ldap`: LDAP</li><li>`multi`: Nuxeo Database or LDAP</li> |
| nuxeo.ldap.url | `ldaps://ldap.example.com` | [LDAP URL](https://ldap.com/ldap-urls/) |
| nuxeo.ldap.binddn | `cn=nuxeoldap,dc=example,dc=com` | Bind DN provided by your LDAP administrator |
| nuxeo.ldap.bindpassword | `secret value` | Bind Password provided by your LDAP administrator |
| nuxeo.ldap.retries | _**5**_ | Number of times to retry query |
| nuxeo.ldap.query.sizeLimit | _**200**_ | Maximum number of entries to return per query |
| nuxeo.ldap.query.timeLimit | _**0**_ | Query timeout in milliseconds (0 means no timeout) |

### Default Mapping

| Property | Values | Description |
|----------------------------|:--------------------------------:|--------------------------------------------------------------------------------------------------------|
| nuxeo.ldap.defaultAdministratorId | `johndoe` | Trusted user that is assigned Administrative privileges |
| nuxeo.ldap.defaultMembersGroup | _**members**_ | Nuxeo Group assigned to properly authenticated LDAP users |

### User Search Parameter

| Property | Values | Description |
|----------------------------|:--------------------------------:|--------------------------------------------------------------------------------------------------------|
| nuxeo.ldap.user.searchBaseDn | `o=users,dc=example,dc=com` | Base User DN provided by your LDAP administrator |
| nuxeo.ldap.user.searchClass | _**person**_ | Search class used to locate Users within the directory |
| nuxeo.ldap.user.searchScope | _**onelevel**_, subtree, object | Search scope used to locate Users within the directory<ul><li> `onelevel`: search children of base DN</li><li> `subtree`: search whole subtree of base DN</li><li>`object`: search only base DN</li> |
| nuxeo.ldap.user.searchBehavior | _**subany**_, subinitial, subfinal | Specify how partial user identifiers are matched against directory entries <ul><li>`subany`: Matches any substring</li><li> `subinitial`: Matches start of string</li><li>`subfinal`: Matches end of string</li> |
| nuxeo.ldap.user.readonly | _**true**_, false | Enable or disable modification of User details from Nuxeo - requires authorized bind DN |

### User Mapping Parameters

| Property | Values | Description |
|----------------------------|:--------------------------------:|--------------------------------------------------------------------------------------------------------|
| nuxeo.ldap.user.mapping.rdn | `cn` OR `uid` | Relative distinguished name for the LDAP user |
| nuxeo.ldap.user.mapping.username | `cn` OR `uid` | Base User DN provided by your LDAP administrator |
| nuxeo.ldap.user.mapping.password | `userPassword` | LDAP attribute containing the user's credentials |
| nuxeo.ldap.user.mapping.firstname | `givenName` | LDAP attribute containing the user's first name |
| nuxeo.ldap.user.mapping.lastname | `sn` | LDAP attribute containing the user's last name |
| nuxeo.ldap.user.mapping.company | `ou` | LDAP attribute containing the user's company (optional) |
| nuxeo.ldap.user.mapping.email | `mail` | LDAP attribute containing the user's email address |

### Group Search Parameters

| Property | Values | Description |
|----------------------------|:--------------------------------:|--------------------------------------------------------------------------------------------------------|
| nuxeo.user.group.storage | _**default**_, userLdapOnly, multiUserGroup, multiUserSqlGroup, ldapUserMultiGroup | Select how Groups are added to a User within Nuxeo<ul><li>`default`: Users and Groups from LDAP</li><li>`userLdapOnly`: Only Users from LDAP</li><li> `multiUserGroup`: Users and Groups from multiple directories (LDAP or Nuxeo database)</li><li> `multiUserSqlGroup`: Users from multiple directories (LDAP or Nuxeo database) and Groups from Nuxeo database</li><li>`ldapUserMultiGroup`: Users from LDAP and Groups from multiple directories (LDAP or Nuxeo database)</li> |
| nuxeo.ldap.group.searchBaseDn | `o=groups,dc=example,dc=com` | Base Group DN provided by your LDAP administrator |
| nuxeo.ldap.group.searchFilter | _**(&#124;(objectClass=groupOfUniqueNames)(objectClass=groupOfURLs))**_ | Search filter used to return Group entries from the LDAP server |
| nuxeo.ldap.group.searchScope | _**onelevel**_, subtree, object | Search scope used to locate Groups within the directory<ul><li>`onelevel`: search children of base DN</li><li> `subtree`: search whole subtree of base DN</li><li> `object`: search only base DN</li> |
| nuxeo.ldap.group.readonly | _**true**_, false | Enable or disable modification of Group details from Nuxeo - requires authorized bind DN |

### Group Mapping Parameters

| Property | Values | Description |
|----------------------------|:--------------------------------:|--------------------------------------------------------------------------------------------------------|
| nuxeo.ldap.group.mapping.rdn | `cn` | Relative distinguished name for LDAP groups |
| nuxeo.ldap.group.mapping.name | `cn` | LDAP attribute containing the group name |
| nuxeo.ldap.group.mapping.label | `description` | LDAP attribute continaing the group display label |
| nuxeo.ldap.group.mapping.members.staticAttributeId | _**uniqueMember**_ | LDAP attribute containing the static group members |
| nuxeo.ldap.group.mapping.members.dynamicAttributeId | _**memberURL**_ | LDAP attribute containing the query for the dynamic group members |

### Emergency User

The Emergency Administrator may be selectively enabled to provide access to the Nuxeo Server when other forms of authentication are not available.

| Property | Values | Description |
|----------------------------|:--------------------------------:|--------------------------------------------------------------------------------------------------------|
| nuxeo.user.emergency.enable | _**false**_, true | Enable or disable the emergency user |
| nuxeo.user.emergency.username | _**MyAdministrator**_ | Emergency administrator username |
| nuxeo.user.emergency.password | `secret value` | Password for emergency administrator |
| nuxeo.user.emergency.firstname | `Emergency` | Emergency administrator first name |
| nuxeo.user.emergency.lastname | `Administrator` | Emergency administrator last name |

## Default `nuxeo.conf` Configuration Example

{{#> callout type='info' }}
All the parameters presented above are not listed here.
{{/callout}}

```properties
nuxeo.directory.type=ldap
nuxeo.ldap.url=
nuxeo.ldap.binddn=
nuxeo.ldap.bindpassword=
nuxeo.ldap.retries=5
nuxeo.ldap.query.sizeLimit=200
nuxeo.ldap.query.timeLimit=0

nuxeo.ldap.user.searchBaseDn=
nuxeo.ldap.user.searchClass=person
nuxeo.ldap.user.searchScope=onelevel
nuxeo.ldap.user.searchBehavior=subany
nuxeo.ldap.user.readonly=true

nuxeo.ldap.user.mapping.rdn=
nuxeo.ldap.user.mapping.username=
nuxeo.ldap.user.mapping.password=
nuxeo.ldap.user.mapping.firstname=
nuxeo.ldap.user.mapping.lastname=
nuxeo.ldap.user.mapping.company=
nuxeo.ldap.user.mapping.email=

nuxeo.user.group.storage=default
nuxeo.ldap.group.searchBaseDn=
nuxeo.ldap.group.searchFilter=(|(objectClass=groupOfUniqueNames)(objectClass=groupOfURLs))
nuxeo.ldap.group.searchScope=subtree
nuxeo.ldap.group.readonly=true

nuxeo.ldap.group.mapping.rdn=
nuxeo.ldap.group.mapping.name=
nuxeo.ldap.group.mapping.label=
nuxeo.ldap.group.mapping.members.staticAttributeId=uniqueMember
nuxeo.ldap.group.mapping.members.dynamicAttributeId=memberURL

nuxeo.ldap.defaultAdministratorId=
nuxeo.ldap.defaultMembersGroup=members

nuxeo.user.emergency.enable=false
nuxeo.user.emergency.username=MyAdministrator
nuxeo.user.emergency.password=
nuxeo.user.emergency.firstname=
nuxeo.user.emergency.lastname=
```

## Simple Configuration Example Using XML config

1. Create a file called `default-ldap-users-directory-config.xml` in your config directory:
    - `nxserver/config/`

2. Then copy this content (make sure it's valid XML, sometimes what you think is a space character is actually a non-breaking space (`U+00A0`) which is invalid in XML):

    ```xml
    <?xml version="1.0"?>
    <component name="org.nuxeo.ecm.directory.ldap.users">

      <require>org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory</require>

      <!-- the groups SQL directories are required to make this bundle work -->
      <require>org.nuxeo.ecm.directory.sql.storage</require>

      <extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory"
        point="servers">

        <!-- Configuration of a server connection
          A single server declaration can point to a cluster of replicated
          servers (using OpenLDAP's slapd + sluprd for instance). To leverage
          such a cluster and improve availability, please provide one
          <ldapUrl/> tag for each replica of the cluster.
        -->
        <server name="default">
          <ldapUrl>ldap://localhost:389</ldapUrl>
          <!-- Optional servers from the same cluster for failover
            and load balancing:

            <ldapUrl>ldap://server2:389</ldapUrl>
            <ldapUrl>ldaps://server3:389</ldapUrl>

            "ldaps" means TLS/SSL connection.
          -->

          <!-- Credentials used by Nuxeo5 to browse the directory, create
            and modify entries.

            Only the authentication of users (bind) use the credentials entered
            through the login form if any.
          -->
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

          <searchBaseDn>ou=people,dc=example,dc=com</searchBaseDn>
          <searchClass>person</searchClass>
          <!-- To additionally restricte entries you can add an
            arbitrary search filter such as the following:

            <searchFilter>(&amp;(sn=toto*)(myCustomAttribute=somevalue))</searchFilter>

            Beware that "&" writes "&amp;" in XML.
          -->

          <!-- use subtree if the people branch is nested -->
          <searchScope>onelevel</searchScope>

          <!-- using 'subany', search will match *toto*. use 'subfinal' to
            match *toto and 'subinitial' to match toto*. subinitial is the
            default  behaviour-->
          <substringMatchType>subany</substringMatchType>

          <readOnly>false</readOnly>

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

          <creationBaseDn>ou=people,dc=example,dc=com</creationBaseDn>
          <creationClass>top</creationClass>
          <creationClass>person</creationClass>
          <creationClass>organizationalPerson</creationClass>
          <creationClass>inetOrgPerson</creationClass>

          <rdnAttribute>uid</rdnAttribute>
          <fieldMapping name="username">uid</fieldMapping>
          <fieldMapping name="password">userPassword</fieldMapping>
          <fieldMapping name="firstName">givenName</fieldMapping>
          <fieldMapping name="lastName">sn</fieldMapping>
          <fieldMapping name="company">o</fieldMapping>
          <fieldMapping name="email">mail</fieldMapping>

          <references>
            <inverseReference field="groups" directory="groupDirectory"
              dualReferenceField="members" />
          </references>
        </directory>
      </extension>

      <extension target="org.nuxeo.ecm.core.cache.CacheService" point="caches">

        <cache name="ldap-user-entry-cache" class="org.nuxeo.ecm.core.cache.InMemoryCacheImpl">
          <option name="maxSize">1000</option>
          <ttl>20</ttl><!-- minutes -->
          <option name="concurrencyLevel">500</option>
        </cache>
        <cache name="ldap-user-entry-cache-without-references" class="org.nuxeo.ecm.core.cache.InMemoryCacheImpl">
          <option name="maxSize">1000</option>
          <ttl>20</ttl><!-- minutes -->
          <option name="concurrencyLevel">500</option>
        </cache>

      </extension>

      <extension target="org.nuxeo.ecm.platform.usermanager.UserService" point="userManager">
        <userManager>
          <defaultAdministratorId>johndoe</defaultAdministratorId>
          <defaultGroup>members</defaultGroup>
        </userManager>
      </extension>
    </component>

    ```

    Then you should edit this file:

3. Set the correct server:
    - `<ldapUrl>`
    - `<bindDn>` and `<bindPassword>`  
    &nbsp;  

4. Set the correct LDAP config:
    - `<searchBaseDN>`
    - `<searchClass>`
    - `<fieldMapping>`  
    &nbsp;  

5. If you want Nuxeo to be able to create users in the LDAP directory:
    - Make sure the user you use to access LDAP has write access
    - Define the `<creationBaseDn>` and associated parameters  
    &nbsp;

6. Define the default mapping:
    - Since the _Administrator_ user won't exists anymore, you should assign at least one user to be administrator using `<defaultAdministratorId>`
    - You can also choose to make all users members of the default "members" group using `<defaultGroup>`
    &nbsp;

7. Restart the Nuxeo server, and you should now be able to authenticate against LDAP.
    &nbsp;
{{#> callout type='note' }}
If you want to roll back the changes, simply delete the `default-ldap-users-directory-config.xml` file and restart the server.
{{/callout}}

For a more detailed view about possible configuration, see:

- [LDAPDirectory and associated extension points](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewComponent/org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory),
- [UserManager extension point](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.usermanager.UserService--userManager).

The [ldaptools/](https://github.com/nuxeo/nuxeo/tree/master/modules/platform/nuxeo-platform-directory/nuxeo-platform-directory-ldap/ldaptools) folder in source code of the `nuxeo-platform-directory-ldap` module further provides sample LDIF files and OpenLDAP configuration file to help you setup a sample OpenLDAP server you can use as a base setup to build your corporate directory.

## Using Active Directory

If you use Active Directory and want to use it with Nuxeo, you need to:

1. Be sure that LDAP mode is enabled on the Active Directory server,
2. Get the schema info (because Active Directory schema changes depending on a lot of external factors).

Once you have this information, you can connect Nuxeo to Active Directory as it was a real LDAP server.

Active Directory users are advised to use the aggregated global catalog port number (3268 by default) instead of the default LDAP port (389) in order to avoid getting referrals request to sub-directories blocked by corporate firewalls.

Usually with AD you will have to map the field "username" to "sAMAccountName".

Also, it happens that for the bindDN, it expects only an email address, ex:

<pre class="p1"><bindDn>[applicative-account-nuxeo@toto.local](mailto:svc-nuxeo@ch2.pilz.local)</bindDn></pre>

## Advanced Configuration

For more details on directories, such as configuring "multi-directories", see [Data Lists and Directories]({{page page='data-lists-and-directories'}}).

## Known Issues

### LDAP Contribution Not Activated

Nuxeo Studio also generates a contribution that declares directories called `userDirectory` and `groupDirectory`. Those definitions could override yours and therefore disable your LDAP definition.

The solution is to disable the definition from Studio: In Studio go to **Roles & Permissions** > **Users & Groups** and active the checkbox **Disable users and groups definition**.

### Deployment Order Issue

In the case you manipulate several directory definitions (SQL directory, LDAP directory, multi-directory), you may not have the expected behavior because you don't control the deployment order of all contributions.

A cleaner way to proceed is to define directories whose name are different from the default ones (`userDirectory` for users, `groupDirectory` for groups). Then you need to use the userManager to specify the name of the directories which will be used for authentication, searching, etc.
Therefore you should apply the changes described below to your existing LDAP contributions:

```xml
<!-- directory for users -->
<directory name="userLdapDirectory">
  (...)
  <inverseReference field="groups" directory="groupLdapDirectory"
          dualReferenceField="members" />
</directory>

<!-- directory for groups -->
<directory name="groupLdapDirectory">
    (...)
    <ldapReference field="members" directory="userLdapDirectory" forceDnConsistencyCheck="false" staticAttributeId="uniqueMember" dynamicAttributeId="memberURL"/>

    <ldapReference field="subGroups" directory="groupLdapDirectory" forceDnConsistencyCheck="false" staticAttributeId="uniqueMember" dynamicAttributeId="memberURL"/>
    (...)
</directory>

<!-- definition in the user manager -->
<extension target="org.nuxeo.ecm.platform.usermanager.UserService" point="userManager">
  <userManager>
    (...)
    <users>
      <directory>userLdapDirectory</directory>
    </users>
    (...)
    <groups>
      <directory>groupLdapDirectory</directory>
    </groups>
    (...)
  </userManager>
</extension>

```

See attached files for templates of LDAP configuration:

- [LDAP users configuration]({{file name='default-ldap-users-directory-config.xml'}})
- [LDAP groups configuration]({{file name='default-ldap-groups-directory-config.xml'}})
- [User manager configuration]({{file name='default-virtual-groups-config.xml'}})

This method applies to multi-directories too.

## Debug Information

If you encounter some difficulties configuring LDAP, the first step is to get more details about what happens.

In the [Log4J]({{page space='glos' page='log4j'}}) configuration, increase the log level for `org.nuxeo.ecm.directory` and `org.nuxeo.runtime.model.impl`:

```xml
<category name="org.nuxeo.ecm.directory">
  <priority value="DEBUG" />
</category>
<category name="org.nuxeo.runtime.model.impl">
  <priority value="INFO" />
</category>

```

This will give you more informations such as:

- Is your XML contribution properly loaded?
    Search for the component name of your contribution in the log file (for instance `org.nuxeo.ecm.directory.ldap.users`).
- Did the LDAP directory initialized?
    If so, your "servers" extension point is working.
- What is the LDAP request sending when you try to log in Nuxeo?
    You must be run the same request outside Nuxeo, using your preferred LDAP tool.

[Apache Directory Studio](http://directory.apache.org/studio/) can be used to replicate the LDAP requests sent by Nuxeo to the LDAP server and check their responses. If you seek help on [answers.nuxeo.com](http://answers.nuxeo.com) or [connect.nuxeo.com](http://connect.nuxeo.com) please include the LDIF export of a sample user entry and a sample group entry (if you want to use the LDAP server to resolve the groups).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [How to Configure a Multidirectory for Users and Groups]({{page page='how-to-configure-a-multidirectory-for-users-and-groups'}})
- [How to Add Custom LDAP Fields to the UI]({{page page='how-to-add-custom-ldap-fields-to-the-ui'}})
- [Data Lists and Directories]({{page page='data-lists-and-directories'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
