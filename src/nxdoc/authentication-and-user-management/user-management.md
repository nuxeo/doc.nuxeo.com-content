---
title: User Management
review:
    comment: ''
    date: ''
    status: ok
labels:
    - link-update
    - user-manager
toc: true
confluence:
    ajs-parent-page-id: '22380691'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: User+Management
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/User+Management'
    page_id: '22380904'
    shortlink: aIFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/aIFVAQ'
    source_link: /display/NXDOC60/User+Management
history:
    - 
        author: Solen Guitter
        date: '2014-11-28 12:10'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-11-28 12:10'
        message: formatting
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-11-13 14:04'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-09-04 17:42'
        message: ''
        version: '8'
    - 
        author: Bertrand Chauvin
        date: '2013-09-03 19:36'
        message: ''
        version: '7'
    - 
        author: Julien Carsique
        date: '2012-10-08 15:26'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2012-10-08 15:22'
        message: add info about multi-directories
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-03-21 15:06'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-03-21 15:06'
        message: Added toc and related pages and fixed typos and format
        version: '3'
    - 
        author: Benjamin Jalon
        date: '2012-03-15 15:25'
        message: ''
        version: '2'
    - 
        author: Benjamin Jalon
        date: '2012-03-15 15:16'
        message: ''
        version: '1'

---
In the Nuxeo Platform, the concept of a user is needed for two main reasons:

*   Users are needed for authentication and authorization to work.
*   Users have associated information that can be displayed, for instance to display someone's full name or email address.

{{! excerpt}}

An abstraction, the `UserManager`, centralizes the way a Nuxeo Platform application deals with users (and groups of users). The UserManager is queried by the platform `LoginModule` when someone attempts to authenticate against the framework. It is also queried whenever someone wants the last name or email of a user for instance, or to get all users having "Bob" as their first name.

{{! /excerpt}}

## Users and Groups Configuration

The data about users (login, password, name, personal information, etc.) and the groups they belong to (simple members, or any application-related group) are managed through the Directory abstraction.
This means that:

*   LDAP can store users and groups,
*   SQL can store users and groups,
*   LDAP can store user and SQL can store groups,
*   Nuxeo can aggregate two LDAP servers for user storage and SQL can store groups,
*   a part of user can be stored into an LDAP server and into SQL, and SQL can store groups,
*   ...

You understood almost of any configuration is possible. The application doesn't see the difference as long as the connectors are configured properly.

**To configure your user management, you basically need to follow these steps:**

1.  Define the schema that describes fields stored into a user. This is exactly the same extension point you will use for document type.
2.  Define a user manager. The default one will manage user stored into a directory. But you can implement your specific user manager, if you need.
3.  If you use the default user manager:
    1.  Directory definition: As you describe a vocabulary, you will describe the user directory. Instead of using the vocabulary schema, you will use one that defines a username, a first name, etc.
    2.  Configure the Default User Manager to bind it to the directory described above and some search configuration.
4.  Define how to display the User Profile. Most of the time you do not have to do that.

{{#> callout type='tip' }}

If you want to declare fields that are not stored into your directory, but that must be locally stored in the Nuxeo Platform, this is possible.
The Nuxeo Platform defines a User Profile Service that will manage these type of field. These fields will be stored into a hidden Nuxeo Document into the personal workspace of each user.
You will benefit from all the UI infrastructure for these specific fields (Layout Service, Widget Service, ...).

{{/callout}}

## Example of User Manager Configuration

### Schema Definition

Here, will be defined a typical example of configuration.

The Nuxeo Platform defines a default schema. Most of the time, this schema works for our users:

```
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:nxs="http://www.nuxeo.org/ecm/schemas/user"
    targetNamespace="http://www.nuxeo.org/ecm/schemas/user">

  <xs:include schemaLocation="base.xsd" />

  <xs:element name="username" type="xs:string" />
  <xs:element name="password" type="xs:string" />
  <xs:element name="email" type="xs:string" />
  <xs:element name="firstName" type="xs:string" />
  <xs:element name="lastName" type="xs:string" />
  <xs:element name="company" type="xs:string" />

  <xs:element name="petName" type="xs:string" />

  <!-- inverse reference -->
  <xs:element name="groups" type="nxs:stringList" />

</xs:schema>

```

This schema is registered in an extension point:

```
<extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
  <schema name="myuser" src="myuser.xsd" />
</extension>

```

You can choose to define your own schema by adding some field ore remove ones, if you need.

The schema for groups works the same way:

```
<?xml version="1.0"?>

<xs:schema targetNamespace="http://www.nuxeo.org/ecm/schemas/group"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:nxs="http://www.nuxeo.org/ecm/schemas/group">

  <xs:include schemaLocation="base.xsd" />

  <xs:element name="groupname" type="xs:string" />
  <xs:element name="grouplabel" type="xs:string" />
  <xs:element name="description" type="xs:string" />

  <!-- references -->
  <xs:element name="members" type="nxs:stringList" />
  <xs:element name="subGroups" type="nxs:stringList" />

  <!-- inverse reference -->
  <xs:element name="parentGroups" type="nxs:stringList" />

</xs:schema>

```

And the contribution to register this schema is:

```
<extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
  <schema name="group" src="directoryschema/group.xsd"/>
</extension>

```

{{#> callout type='tip' }}

If you want to override these schema, don't forget the require item in your contribution and the override parameter in your schema definition (see the schema documentation warn).

{{/callout}}

### User Manager Definition

You can override the Nuxeo default User Manager. You can look [the UserManager definition into explorer.nuxeo.com](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewService/org.nuxeo.ecm.platform.usermanager.UserManager). But most of the time the default User Manager binded to a directory is enough for our users.

### Directory Definition

#### SQL Case

So the user and group schema can now be used when we define a new directory, called "MyUserDirectory".

{{#> panel type='code' heading='SQL directory sample definition'}}

```html/xml
<extension target="org.nuxeo.ecm.directory.sql.SQLDirectoryFactory" point="directories">
  <directory name="MyUserDirectory">

    <schema>myuser</schema>
    <idField>username</idField>
    <passwordField>password</passwordField>

    <dataSource>java:/nxsqldirectory</dataSource>

<table>myusers</table>
    <dataFile>myusers.csv</dataFile>
    <createTablePolicy>on_missing_columns</createTablePolicy>

    <references>
      <inverseReference field="groups" directory="groupDirectory"
        dualReferenceField="members" />
    </references>

  </directory>
</extension>

```

{{/panel}}

And we can provide a file, "myusers.csv", which will be used to populate the table if it is missing:

```
username, password, firstName, lastName, company, email, petName
bob,bobSecret,Bob,Doe,ACME,bob@example.com,Lassie
If instead we had used an LDAP directory, the configuration would look like:

```

#### LDAP Case

In the case of your server is a LDAP server, here is an example of directory definition.

First, define the LDAP Server that will be used as reference into the LDAP directory definition.

{{#> panel type='code' heading='LDAP server sample definition'}}

```html/xml
<extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory" point="servers">
  <server name="default">
    <ldapUrl>ldap://localhost:389</ldapUrl>
    <bindDn>cn=manager,dc=example,dc=com</bindDn>
    <bindPassword>secret</bindPassword>
  </server>
</extension>

```

{{/panel}}{{#> panel type='code' heading='LDAP directory sample definition'}}

```html/xml
<extension target="org.nuxeo.ecm.directory.ldap.LDAPDirectoryFactory" point="directories">
  <directory name="MyUserDirectory">

    <schema>myuser</schema>
    <idField>username</idField>
    <passwordField>password</passwordField>

    <server>default</server>
    <searchBaseDn>ou=people,dc=example,dc=com</searchBaseDn>
    <searchClass>inetOrgPerson</searchClass>
    <searchScope>subtree</searchScope>

    <fieldMapping name="username">uid</fieldMapping>
    <fieldMapping name="password">userPassword</fieldMapping>
    <fieldMapping name="email">mail</fieldMapping>
    <fieldMapping name="firstName">givenName</fieldMapping>
    <fieldMapping name="lastName">sn</fieldMapping>
    <fieldMapping name="company">o</fieldMapping>

    <references>
      <inverseReference field="groups" directory="groupDirectory"
        dualReferenceField="members" />
    </references>

  </directory>
</extension>

```

{{/panel}}

#### Multi-Directories

If you need to mix multiple directories, see [the MultiDirectoryFactory](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.directory.multi.MultiDirectoryFactory--directories).

{{#> panel type='code' heading='Multi-directories sample definition'}}

```html/xml
<extension point="directories" target="org.nuxeo.ecm.directory.multi.MultiDirectoryFactory">
  <directory name="userDirectory">
    <schema>user</schema>
    <idField>username</idField>
    <passwordField>password</passwordField>
    <source name="userLDAPSource">
      <subDirectory name="userLDAPDirectory"/>
      <optional>true</optional>
    </source>
    <source creation="true" name="userSQLSource">
      <subDirectory name="userSQLDirectory"/>
    </source>
  </directory>
</extension>
```

{{/panel}}

### UserManager

#### Simple Case

We can now tell the UserManager that this directory should be the one to use when dealing with users:

```
<extension target="org.nuxeo.ecm.platform.usermanager.UserService" point="userManager">
  <userManager>
    <users>
      <directory>MyUserDirectory</directory>
      <emailField>email</emailField>
      <searchFields append="true">
        <searchField>username</searchField>
        <searchField>firstName</searchField>
        <searchField>lastName</searchField>
        <searchField>myfield</searchField>
      </searchFields>
    </users>
  </userManager>
</extension>

```

This configuration also sets the email field and search fields that have to be queried when searching for users. It can be completed to set the anonymous user, add virtual users, or set the group directory properties.

#### Configuring the User Manager with Anonymous User and Other Virtual Users

Virtual users can be added for authentication. Properties are used to create the appropriate model as if user was retrieved from the user directory. This is a convenient way to add custom users to the application when the user directory (using LDAP for instance) cannot be modified. Virtual users with the "administrators" group will have the same rights as the default administrator.

The anonymous user represents a special kind of virtual user, used to represent users that do not need to log in the application. This feature is used in conjunction with the anonymous plug-in.

```
<extension target="org.nuxeo.ecm.platform.usermanager.UserService" point="userManager">
  <userManager>
    <users>
      <directory>MyUserDirectory</directory>
      <emailField>email</emailField>
      <searchFields append="true">
        <searchField>username</searchField>
        <searchField>firstName</searchField>
        <searchField>lastName</searchField>
        <searchField>myfield</searchField>
      </searchFields>
      <listingMode>tabbed</listingMode>

      <anonymousUser id="Anonymous">
        <property name="firstName">Anonymous</property>
        <property name="lastName">User</property>
      </anonymousUser>
      <virtualUser id="MyCustomAdministrator" searchable="false">
        <password>secret</password>
        <property name="firstName">My Custom</property>
        <property name="lastName">Administrator</property>
        <group>administrators</group>
      </virtualUser>
      <virtualUser id="MyCustomMember" searchable="false">
        <password>secret</password>
        <property name="firstName">My Custom</property>
        <property name="lastName">Member</property>
        <group>members</group>
        <group>othergroup</group>
        <propertyList name="listprop">
          <value>item1</value>
          <value>item2</value>
        </propertyList>
      </virtualUser>
      <virtualUser id="ExistingVirtualUser" remove="true" />

    </users>

    <defaultAdministratorId>Administrator</defaultAdministratorId>
    <!-- available tags since 5.3.1 -->
    <administratorsGroup>myAdmins</administratorsGroup>
    <administratorsGroup>myOtherAdmins</administratorsGroup>
    <disableDefaultAdministratorsGroup>
      false
    </disableDefaultAdministratorsGroup>
    <!-- end of available tags since 5.3.1 -->

    <userSortField>lastName</userSortField>
    <userPasswordPattern>^[a-zA-Z0-9]{5,}$</userPasswordPattern>

    <groups>
      <directory>somegroupdir</directory>
      <membersField>members</membersField>
      <subGroupsField>subgroups</subGroupsField>
      <parentGroupsField>parentgroup</parentGroupsField>
      <listingMode>search_only</listingMode>
    </groups>
    <defaultGroup>members</defaultGroup>
    <groupSortField>groupname</groupSortField>

  </userManager>
</extension>

```

The default administrator ID can be set either to an existing or virtual user. This user will be virtually member of all the groups declared as administrators (by default, the group named "administrators" is used).

New administrators groups can be added using the "administratorsGroup" tag. Several groups can be defined, adding as many tags as needed. The default group named "administrators" can be disabled by setting the `disableDefaultAdministratorsGroup` to "true" (default is to false): only new defined administrators groups will then be taken into account.

{{#> callout type='note' }}

Disabling the default "administrators" group should be done after setting up custom rights in the repository, as this group is usually defined as the group of users who have all permissions at the root of the repository. Administrators groups will have access to vocabulary management, theme editor,... They are also added local rights when blocking permissions to avoid lockups.

{{/callout}}

The group directory can also be configured to define the groups hierarchy and the contained users. This configuration has to match the user directory inverse references.

Every authenticated user will be placed in the configured default group. This group does not need to exist in the backing group directory, nor does any other group listed in virtual users configuration.

### User and Group Display

The default users and groups management pages use some [layouts]({{page page='layout-definitions'}}) for display. If you're using custom schema and would like to display your new fields, or would like to change the default display, you can redefine the layouts named "user" and "group" by contributing new layouts with these names.

Do not forget to put `<require>org.nuxeo.ecm.platform.forms.layouts.webapp</require>` on your layout contribution to ensure default layouts are overridden.

#### User Layout Definition

```
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.forms.layouts.usersAndGroups">
  <extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager" point="layouts">
    <layout name="user">
      <templates>
        <template mode="any">/layouts/layout_default_template.xhtml</template>
      </templates>
      <rows>
        <row>
          <widget>username</widget>
        </row>
        <row>
          <widget>firstname</widget>
        </row>
        <row>
          <widget>lastname</widget>
        </row>
        <row>
          <widget>company</widget>
        </row>
        <row>
          <widget>email</widget>
        </row>
        <row>
          <widget>firstPassword</widget>
        </row>
        <row>
          <widget>secondPassword</widget>
        </row>
        <row>
          <widget>passwordMatcher</widget>
        </row>
        <row>
          <widget>groups</widget>
        </row>
      </rows>
      <widget name="username" type="text">
        <labels>
          <label mode="any">username</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="user">username</field>
        </fields>
        <widgetModes>
          <mode value="create">edit</mode>
          <mode value="editPassword">hidden</mode>
          <mode value="any">view</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <property name="required">true</property>
          <property name="styleClass">dataInputText</property>
          <property name="validator">
            #{userManagementActions.validateUserName}
          </property>
        </properties>
      </widget>
      <widget name="firstname" type="text">
        <labels>
          <label mode="any">firstName</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="user">firstName</field>
        </fields>
        <widgetModes>
          <mode value="editPassword">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <property name="styleClass">dataInputText</property>
        </properties>
      </widget>
      <widget name="lastname" type="text">
        <labels>
          <label mode="any">lastName</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="user">lastName</field>
        </fields>
        <widgetModes>
          <mode value="editPassword">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <property name="styleClass">dataInputText</property>
        </properties>
      </widget>
      <widget name="company" type="text">
        <labels>
          <label mode="any">company</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="user">company</field>
        </fields>
        <widgetModes>
          <mode value="editPassword">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <property name="styleClass">dataInputText</property>
        </properties>
      </widget>
      <widget name="email" type="text">
        <labels>
          <label mode="any">email</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="user">email</field>
        </fields>
        <widgetModes>
          <mode value="editPassword">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <property name="required">true</property>
          <property name="styleClass">dataInputText</property>
        </properties>
      </widget>
      <widget name="firstPassword" type="secret">
        <labels>
          <label mode="any">password</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="user">password</field>
        </fields>
        <widgetModes>
          <mode value="create">edit</mode>
          <mode value="editPassword">edit</mode>
          <mode value="any">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <property name="required">true</property>
          <property name="styleClass">dataInputText</property>
        </properties>
      </widget>
      <widget name="secondPassword" type="secret">
        <labels>
          <label mode="any">password.verify</label>
        </labels>
        <translated>true</translated>
        <widgetModes>
          <mode value="create">edit</mode>
          <mode value="editPassword">edit</mode>
          <mode value="any">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <property name="required">true</property>
          <property name="styleClass">dataInputText</property>
        </properties>
      </widget>
      <widget name="passwordMatcher" type="template">
        <labels>
          <label mode="any"></label>
        </labels>
        <translated>true</translated>
        <widgetModes>
          <mode value="create">edit</mode>
          <mode value="editPassword">edit</mode>
          <mode value="any">hidden</mode>
        </widgetModes>
        <properties widgetMode="edit">
          <!-- XXX: depends on firstPassword and secondPassword widget names -->
          <property name="template">
            /widgets/user_password_validation_widget_template.xhtml
          </property>
        </properties>
      </widget>
      <widget name="groups" type="template">
        <labels>
          <label mode="any">label.userManager.userGroups</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="user">groups</field>
        </fields>
        <widgetModes>
          <mode value="edit">
            \#{nxu:test(currentUser.administrator, 'edit', 'view')}
          </mode>
          <mode value="editPassword">hidden</mode>
        </widgetModes>
        <properties widgetMode="any">
          <property name="template">
            /widgets/user_suggestion_widget_template.xhtml
          </property>
          <property name="userSuggestionSearchType">GROUP_TYPE</property>
        </properties>
      </widget>
    </layout>
    <layout name="group">
      <templates>
        <template mode="any">/layouts/layout_default_template.xhtml</template>
      </templates>
      <rows>
        <row>
          <widget>groupname</widget>
        </row>
        <row>
          <widget>members</widget>
        </row>
        <row>
          <widget>subgroups</widget>
        </row>
      </rows>
      <widget name="groupname" type="text">
        <labels>
          <label mode="any">label.groupManager.groupName</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="group">groupname</field>
        </fields>
        <widgetModes>
          <mode value="create">edit</mode>
          <mode value="any">hidden</mode>
        </widgetModes>
        <properties widgetMode="any">
          <property name="required">true</property>
          <property name="styleClass">dataInputText</property>
        </properties>
      </widget>
      <widget name="members" type="template">
        <labels>
          <label mode="any">label.groupManager.userMembers</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="group">members</field>
        </fields>
        <properties widgetMode="any">
          <property name="template">
            /widgets/user_suggestion_widget_template.xhtml
          </property>
          <property name="userSuggestionSearchType">USER_TYPE</property>
        </properties>
      </widget>
      <widget name="subgroups" type="template">
        <labels>
          <label mode="any">label.groupManager.groupMembers</label>
        </labels>
        <translated>true</translated>
        <fields>
          <field schema="group">subGroups</field>
        </fields>
        <properties widgetMode="any">
          <property name="template">
            /widgets/user_suggestion_widget_template.xhtml
          </property>
          <property name="userSuggestionSearchType">GROUP_TYPE</property>
        </properties>
      </widget>
    </layout>
  </extension>
</component>

```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Authentication, users and groups]({{page space='admindoc60' page='authentication-users-and-groups'}})
*   [Authentication Overview]({{page page='authentication-overview'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>