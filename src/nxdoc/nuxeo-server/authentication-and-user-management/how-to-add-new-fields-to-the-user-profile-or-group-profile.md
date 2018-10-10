---
title: How to Add New Fields to the User Profile or Group Profile
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: This page provides a turnkey solution to add new fields to the user profile or group.
        level: Intermediate
        tool: XML configuration
        topics: 'LDAP, Multidirectory'
tree_item_index: 400
labels:
    - content-review-lts2017
    - authentication
    - dmetzler

---

Users and groups are defined using schemas and as an *Extensible Platform*, Nuxeo gives you the ability to modify or add schemas.

The default **user** schema definition:
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

If you want to contribute to the default user profile, you can override the `user` definition:

```xml
<extension point="schema" target="org.nuxeo.ecm.core.schema.TypeService">
  <!-- override default user schema -->
  <schema name="user" override="true" src="schemas/my_custom_user_schema.xsd"/>
</extension>
```

In the Nuxeo Platform **user** infos are displayed as follow:

![]({{file name='user_profile.png' space='userdoc' page='nuxeo-platform-concepts'}} ?w=600,border=true)

{{#> callout type='note' heading='Note'}}
Whenever you contribute to a schema, do not forget the inverse reference field, `groups` in the `user` profile for example.
{{/callout}}

{{#> callout type='note' heading='Note'}}
Following to your custom updates, you might want to [update the user profile interface](https://nuxeo.quandora.com/frontend/q/e701dcb9459f48479d8923295ed16ab1/How-to-override-nuxeo-user-profile-and-nuxeo-user-management-elements)
{{/callout}}

The customisation of the groups is similar to the users.

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

The `group` schema can be extended aswell using an extension.

```xml
<extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
  <schema name="group" src="schemas/my_custom_group_schema.xsd"/>
</extension>
```

{{#> callout type='warning' heading='Warning'}}
Make sure you have the mandatory fields available for **references** and **inverse references** for the group hierarchy.
{{/callout}}

{{#> callout type='tip' heading='Tip'}}
In a more friendly way, you can add your own schemas using [Nuxeo Studio]({{page space='studio' page='schemas'}}).
{{/callout}}

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">

{{#> panel heading='Related How-tos'}}

- [How to Add Custom LDAP Fields to the UI]({{page version='' space='nxdoc' page='how-to-add-custom-ldap-fields-to-the-ui'}})
- [How to Configure a Multidirectory for Users and Groups]({{page version='' space='nxdoc' page='how-to-configure-a-multidirectory-for-users-and-groups'}})
- [How-to Index]({{page version='' space='nxdoc' page='how-to-index'}})

{{/panel}}
</div>

<div class="column medium-6">

{{#> panel heading='Related Documentation'}}
- [Authentication and User Management]({{page version='' space='nxdoc' page='authentication-and-user-management'}})
- [Managing Users and Groups]({{page version='' space='userdoc' page='managing-users-and-groups'}})
{{/panel}}

</div>
</div>
