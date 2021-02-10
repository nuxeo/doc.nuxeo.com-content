---
title: 'HOWTO: Add New Fields to the User Profile or Group Profile'
review:
    comment: ''
    date: '2020-09-01'
    status: ok
details:
    howto:
        excerpt: This page provides a turnkey solution to add new fields to the user profile or group.
        level: Intermediate
        tool: XML configuration
        topics: 'LDAP, Multidirectory, authentication'
tree_item_index: 400
toc: true
labels:
    - lts2017-ok
    - authentication
    - dmetzler
---

Users and groups are defined using schemas and, as an *Extensible Platform*, Nuxeo gives you the ability to modify or add schemas.

## Prerequisite

This page gives the step by step instructions to deploy new user information in Nuxeo Platform. For the UI configuration, it assumes you have the **Nuxeo Web UI** addon deployed.

## Extending User Properties

Let's add a new user property called **manager**, corresponding to the current user's manager. This information would be helpful in the workflow context (for reassignment, escalation rules etc.)

### Create the New User Property

Create a `manager_user_field.xsd` file with the following content from the default user schema definition:

```xml
<?xml version="1.0"?>

<xs:schema targetNamespace="http://www.nuxeo.org/ecm/schemas/user"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:nxs="http://www.nuxeo.org/ecm/schemas/user">

  <xs:include schemaLocation="base.xsd" />

  <xs:element name="username" type="xs:string" />
  <xs:element name="password" type="xs:string" />
  <xs:element name="firstName" type="xs:string" />
  <xs:element name="lastName" type="xs:string" />
  <xs:element name="company" type="xs:string" />
  <!-- here is my new user field -->
  <xs:element name="manager" type="xs:string" />
  <xs:element name="email">
    <xs:simpleType>
      <xs:restriction base="xs:string">
        <!-- the same pattern is used in userinfo.xsd -->
        <xs:pattern value="[^@]+@[^\.]+\..+" />
      </xs:restriction>
    </xs:simpleType>
  </xs:element>

  <!-- inverse reference -->
  <xs:element name="groups" type="nxs:stringList" />

  <!-- tenant id for the user -->
  <xs:element name="tenantId" type="xs:string" />

</xs:schema>
```

### Deploy the New Field in Studio Modeler

1. Open your Nuxeo Studio Project and Navigate to **Studio Modeler** > **CONFIGURATION** > **Resources** > **Schemas**.
1. Upload the `manager_user_field.xsd` file.
1. Go to **CONFIGURATION** > **Content Model** > **Schemas** and click on **New**. </br>
    Fill in the popup window like this:
    {{!--     ### nx_asset ###
      path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/How to Add New Fields to the User Profile or Group Profile/schema_user.png
      name: schema_user.png
      studio_modeler#screenshot#up_to_date
    --}}
    ![schema_user.png](nx_asset://5b06a0c7-1b0c-4afe-b3cb-74f50dbcb62c ?w=350,border=true)

1. Click on **Ok**.
1. Go to **CONFIGURATION** > **Advanced Settings** > **XML Extensions** and create a new XML extension (called for example `USER_SCHEMA_EXTENSION`) with the following content:
```xml
<component name="org.nuxeo.ecm.core.management.typesContrib.override">
	<require>org.nuxeo.ecm.core.management.typesContrib</require>
	<extension point="schema" target="org.nuxeo.ecm.core.schema.TypeService">
		<schema name="user" override="true" src="data/schemas/manager_user_field.xsd"/>
	</extension>
</component>
```
1. To check that those steps were effective, check into your database that the fields are present in the users table after synching your project server-side and restarting Nuxeo.

### Display the New Field in Web UI

This new field has to be displayed in all the pages related to the user information.

It includes:
- The user edition form _to create_ and update the new property:
    - [nuxeo-edit-user.html](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management/nuxeo-edit-user.html)
    - [nuxeo-create-user.html](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management/nuxeo-create-user.html)
- The user information page _to view_ the new property:
    - [nuxeo-view-user.html](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management/nuxeo-view-user.html)
    - [nuxeo-user-group-management.html](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management.html)
    - [nuxeo-user-group-management-page.html](https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/nuxeo-admin/nuxeo-user-group-management-page.html)

#### Edit Layout

1. In Designer, go to **Resources** and create a folder under **UI** called `custom-user-fields`. We will create all the next elements in this folder.
1. Create a new element `nuxeo-edit-user`.
1. Replace the existing content by the element [`nuxeo-edit-user.html`](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management/nuxeo-edit-user.html).
1. Add:
```html
<nuxeo-user-suggestion value="\{{user.manager}}" label="[[i18n('editUser.manager')]]" search-type="USER_TYPE" name="manager"></nuxeo-user-suggestion>
```

#### Create Layout

1. Create a new element `nuxeo-create-user`.
1. Replace the existing content by the element [create-user.html](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management/nuxeo-create-user.html).
1. Add the line:
  ```
  <link rel="import" href="nuxeo-edit-user.html">
  ```

1. Replace:
```html
<nuxeo-layout id="layout" href="[[_layoutHref('nuxeo-edit-user.html')]]"
                      model="[[_layoutModel(user, new)]]"
                      on-element-changed="_layoutElementChanged"></nuxeo-layout>
```

by:

```html
<nuxeo-layout id="layout" href="nuxeo-edit-user.html"
                      model="[[_layoutModel(user, new)]]"
                      on-element-changed="_layoutElementChanged"></nuxeo-layout>
```

#### User Management Layout

1. Create a new element `nuxeo-user-group-management`.
1. Replace the existing content by the element</br> [`nuxeo-user-group-management.html`](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management.html).
1. Add the following line:
  ```
  <link rel="import" href="nuxeo-create-user.html">
  ```
1. Comment the line:
  ```
  <link rel="import" href="nuxeo-user-group-management/nuxeo-create-user.html">
  ```

#### User Management Page Layout

1. Create a new element `nuxeo-user-group-management-page`.
1. Replace the existing content by the element</br> [`nuxeo-user-group-management-page.html`](https://github.com/nuxeo/nuxeo-web-ui/blob/10.10/elements/nuxeo-admin/nuxeo-user-group-management-page.html).
1. Add the following line:
  ```
  <link rel="import" href="nuxeo-user-group-management.html">
  ```

1. Comment the line:
  ```
  <link rel="import" href="../../bower_components/nuxeo-ui-elements/nuxeo-user-group-management.html">
  ```

#### View Layout

1. Create a folder called `nuxeo-user-group-management` under **UI**.
1. In this folder, create a new element `nuxeo-view-user`.
1. Replace the existing content by the element [`nuxeo-view-user.html`](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.4.x/nuxeo-user-group-management/nuxeo-view-user.html).
1. Add the following lines:

```html
<div class="layout vertical flex">
<label>[[i18n('user.manager')]]</label>
<nuxeo-user-tag user="[[user.properties.manager]]"></nuxeo-user-tag>
</div>
```

#### Update your Custom Bundle File

You need to reference these new elements in your `*-custom.bundle.html` file. To do so, add the following lines:

```html
<link rel="import" href="custom-user-fields/nuxeo-edit-user.html">
<link rel="import" href="custom-user-fields/nuxeo-create-user.html">
<link rel="import" href="custom-user-fields/nuxeo-user-group-management.html">
<link rel="import" href="custom-user-fields/nuxeo-user-group-management-page.html">
<link rel="import" href="nuxeo-user-group-management/nuxeo-view-user.html">
```

#### Translate the New Field

Add a new entry in your translation file (`messages.json` by default) with:

```
{
...
"user.manager":"Manager"
...
}
```

### Deploy Your Changes

- User Creation and Edition Layout

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/How to Add New Fields to the User Profile or Group Profile/user-edit.png
    name: user-edit.png
    server#screenshot#up_to_date
--}}
![user-edit.png](nx_asset://3b4d2aaa-785c-4675-add9-ed8e2cca0e61 ?w=350,border=true)

- User View Layout

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/How to Add New Fields to the User Profile or Group Profile/user-view.png
    name: user-view.png
    server#screenshot#up_to_date
--}}
![user-view.png](nx_asset://cd390952-de66-44d1-a0dc-7759e54aef6d ?w=650,border=true)

## User and Group References

Whenever you contribute to a schema referencing another schema or document, you **must** define the references and inverse references.

On that particular case, you also have to define **directories** to specify the way schemas are linked to each other.

The relation between `user` and `groups` uses a directory called **groupDirectory** is defined as follow:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.directory.storage">
  <require>org.nuxeo.ecm.platform.digestauth.config</require>
  <extension target="org.nuxeo.ecm.directory.GenericDirectory" point="directories">

    <directory name="groupDirectory" extends="template-group">

      <schema>group</schema>
      <types>
        <type>system</type>
      </types>
      <idField>groupname</idField>
      <dataFile>groups.csv</dataFile>
      <createTablePolicy>on_missing_columns</createTablePolicy>
      <autoincrementIdField>false</autoincrementIdField>

      <cacheEntryName>group-entry-cache</cacheEntryName>
      <cacheEntryWithoutReferencesName>group-entry-cache-without-references</cacheEntryWithoutReferencesName>

      <references>
        <reference field="members" directory="userDirectory"
                   name="user2group" source="groupId" target="userId"
                   dataFile="user2group.csv"/>

        <reference field="subGroups" directory="groupDirectory"
                   name="group2group" source="parentGroupId"
                   target="childGroupId"/>
        <inverseReference field="parentGroups" directory="groupDirectory"
                          dualReferenceField="subGroups"/>
      </references>

    </directory>
  </extension>
</component>
```
<!--
{{#> callout type='note'}}
Following to your custom updates, you might want to [update the user profile interface](https://nuxeo.quandora.com/frontend/q/e701dcb9459f48479d8923295ed16ab1/How-to-override-nuxeo-user-profile-and-nuxeo-user-management-elements)
{{/callout}}
-->

The customization of the groups is similar to the users.

The default **group** schema definition:

```xml
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

  <!-- multi tenant -->
  <xs:element name="tenantId" type="xs:string" />

</xs:schema>
```

The `group` schema can be extended as well using an extension:

```xml
<extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
  <schema name="group" src="schemas/my_custom_group_schema.xsd"/>
</extension>
```

{{#> callout type='warning'}}
Make sure you have the mandatory fields configured for **references** and **inverse references** for the group hierarchy.
{{/callout}}

{{#> callout type='tip'}}
In a more friendly way, you can add your own schemas using [Nuxeo Studio]({{page space='studio' page='schemas'}}).
{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related How-tos'}}
- [HOWTO: Add Custom LDAP Fields to the UI]({{page version='' space='nxdoc' page='how-to-add-custom-ldap-fields-to-the-ui'}})
- [HOWTO: Configure a Multidirectory for Users and Groups]({{page version='' space='nxdoc' page='how-to-configure-a-multidirectory-for-users-and-groups'}})
- [How-to Index]({{page version='' space='nxdoc' page='how-to-index'}})
{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}
- [Define Directories]({{page page='data-lists-and-directories'}}#generic-directory-and-directory-templates)
- [Define Reference and Inverse References]({{page page='data-lists-and-directories'}}#defining-inverse-references)
- [Generic References]({{page page='data-lists-and-directories'}}#generic-directory-references)
- [Authentication and User Management]({{page version='' space='nxdoc' page='authentication-and-user-management'}})
- [Managing Users and Groups]({{page version='' space='userdoc' page='administration'}})
{{/panel}}
</div>
</div>
