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

Users and groups profile are defined by schemas. The default user schema is:

```xml
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

It is displayed in the Nuxeo Platform like this:

![]({{file name='user_profile.png' space='userdoc' page='nuxeo-platform-concepts'}} ?w=600,border=true)

If you want to add more fields than the default ones on the user profile, you can simply override the definition of the schema `user` (in a Studio project or in an XML component in `nxserver/config`).

```xml
<extension point="schema" target="org.nuxeo.ecm.core.schema.TypeService">
    <<!-- override default user schema -->
    <schema name="user" override="true" src="schemas/my_custom_user_schema.xsd"/>
</extension>
```

Note that you can contribute a new [schema with Nuxeo Studio]({{page space='studio' page='schemas'}}). The default one is:

As you see, you should not forget the inverse reference field.

You then have to update the forms used for editing the user profile (to be documented).

It works the same for the `group` schema, and you have to make sure to have some mandatory fields available for references and inverse references for the group hierarchy. See default one:

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

</xs:schema>

```

That can be contributed with the following extension:

```
 <extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
  <schema name="group" src="directoryschema/group.xsd"/>
</extension>
```

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
