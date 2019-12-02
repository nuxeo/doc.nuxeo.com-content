---
title: 'How to Contribute a New "User Registration Request" Document Type'
review:
    comment: ''
    date: '2017-12-15'
    status: ok
details:
    howto:
        excerpt: Learn how to contribute new request types to the addon.
        level: Intermediate
        tool: Studio
        topics: User registration
labels:
    - lts2016-ok
    - howto
    - user-registration
    - fdavid
    - user-registration-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '18450090'
    ajs-parent-page-title: Nuxeo Platform User Registration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=22905593
    canonical_source: viewpage.action?pageId=22905593
    page_id: '22905593'
    shortlink: _YJdAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_YJdAQ'
    source_link: /pages/viewpage.action?pageId=22905593
history:
    -
        author: Solen Guitter
        date: '2016-04-14 15:18'
        message: ix Studio menu labe
        version: '3'
    -
        author: Gildas Lefevre
        date: '2015-12-08 22:38'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-12-12 15:34'
        message: ''
        version: '1'

---
If you want to define other request metadata that should be filled in when inviting users to a workspace, you need to contribute a new user registration document type to the [Nuxeo Platform User Registration]({{page page='nuxeo-platform-user-registration'}}) addon. This can be done [using an XML contribution]({{page page='how-to-contribute-to-an-extension'}}).

## Pre requisites

You have already defined a new user registration document type as described in&nbsp;[How to Define a Document Type]({{page page='how-to-define-a-document-type'}})&nbsp;with the following items and values:

*   A new schema `custom-userinfo` that must have at least the following attributes:

  <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Attribute Name</th><th colspan="1">Type</th></tr><tr><td colspan="1">
  `login`
  </td><td colspan="1">
  `string`
  </td></tr><tr><td colspan="1">
  `firstName`
  </td><td colspan="1">
  `string`
  </td></tr><tr><td colspan="1">
  `lastName`
  </td><td colspan="1">
  `string`
  </td></tr><tr><td colspan="1">
  `company`
  </td><td colspan="1">
  `string`
  </td></tr><tr><td colspan="1">
  `email`
  </td><td colspan="1">
  `string`
  </td></tr><tr><td colspan="1">
  `groups`  
  </td><td colspan="1">
  `string, Multi-Valued`
  </td>
  </tr>
  </tbody>
  </table>
  </div>

*   The schema `registration`, added in **Settings** > **Registries** > **Document Schemas**:

    ```
    {
      schemas: {
        registration: {
          @prefix: "registration",
          validationMethod: "string",
          copyTo: "string",
          comment: "string",
          accepted: "boolean"
        }
      }
    }
    ```

    The `registration` schema is required to add other fields used by the user registration feature.

*   A Document type name `MyCustomUserRegistration`, with both schemas `custom-userinfo` and `registration`.

## Step 1: Adding a Reference to Your Component Which Defines Your Document Type

Nested the `component` tag of your XML contribution file, &nbsp;add first a&nbsp;`require` tag to reference your document type definition

```xml
 <require>studio.extensions.my-studio-project</require>
```

## Step 2: Contributing Your Document Type to the User Registration Configuration

Use the extension point `configuration` to register your new document type, schema and fields in the user registration service.

```xml
<extension target="org.nuxeo.ecm.user.registration.UserRegistrationService"
    point="configuration">
	<configuration merge="true">
		<requestDocType>MyCustomUserRegistration</requestDocType>
		<userInfo>
          <schemaName>custom-userinfo</schemaName>
          <usernameField>custom-userinfo:login</usernameField>
          <emailField>custom-userinfo:email</emailField>
          <firstnameField>custom-userinfo:firstName</firstnameField>
          <lastnameField>custom-userinfo:lastName</lastnameField>
          <groupsField>custom-userinfo:groups</groupsField>
          <companyField>custom-userinfo:company</companyField>
        </userInfo>
	</configuration>
</extension>
```

You're done. All default FreeMarker templates will use dynamically your fields, so you don't have to contribute new templates.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}})
- [How to Define a Document Type]({{page page='how-to-define-a-document-type'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Platform User Registration]({{page page='nuxeo-platform-user-registration'}})
- [Documents]({{page space='studio' page='documents'}}) (Nuxeo Studio)
- [Schemas]({{page space='studio' page='schemas'}}) (Nuxeo Studio)

{{/panel}}</div></div>
