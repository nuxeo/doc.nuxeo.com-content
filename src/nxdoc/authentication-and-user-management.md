---
title: Authentication and User Management
labels:
    - lts2015-ok
    - oauth-component
    - saml-component
    - user-profile-component
    - directory-component
    - authentication-component
    - kerberos-authentication-component
    - token-based-authentication-component
    - cas-authentication-component
    - authentication
tabbed_page: true
confluence:
    ajs-parent-page-id: '28475536'
    ajs-parent-page-title: Developer Documentation Center
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Authentication+and+User+Management
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/Authentication+and+User+Management
    page_id: '28475727'
    shortlink: T4GyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/T4GyAQ'
    source_link: /display/NXDOC710/Authentication+and+User+Management
history:
    - 
        author: Manon Lumeau
        date: '2016-08-17 10:10'
        message: emove deleted page
        version: '20'
    - 
        author: Anonymous
        date: '2015-12-04 13:55'
        message: ''
        version: '19'
    - 
        author: Alain Escaffre
        date: '2015-12-04 13:54'
        message: ''
        version: '18'
    - 
        author: Alain Escaffre
        date: '2015-12-04 13:51'
        message: ''
        version: '17'
    - 
        author: Alain Escaffre
        date: '2015-12-04 13:49'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2015-12-01 17:04'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2015-10-02 13:36'
        message: Fix TOC style in Install & Config tab
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-10-02 13:05'
        message: Shorter titles in install&config tab
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-10-02 13:01'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-10-02 12:57'
        message: Fix some anchor links
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-10-02 12:48'
        message: Fix some fomat issues
        version: '10'
    - 
        author: Solen Guitter
        date: '2015-10-02 12:40'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2015-09-22 00:56'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2015-09-22 00:55'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2015-09-22 00:54'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2015-09-22 00:11'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2015-09-22 00:02'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2015-09-21 23:48'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2015-07-13 12:59'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-09-04 10:20'
        message: ''
        version: '1'

---
# Functional Overview

## Default Authentication Mode - Login Page

By default on Nuxeo Platform, user gets authenticated by filling username / password on the login page. That information is checked against the one stored in database, or transmitted to the configured identity provider. If username or password is invalid, a message is sent to the user. Default password of user Administrator is Administrator, if you didn't change anything. Password of each users can be changed either by the user himself, or by the administrators in the Admin Center. Complexity of the password is checked against a regexp that can be changed.

![]({{file name='Screen Shot 2015-09-21 at 13.53.42.png'}} ?w=600,border=true)

## Other Authentication Protocols

The login page is not the only way to authenticate a user against Nuxeo Platform, some other protocols can be used, sometimes requiring to install an additional module (See Installation and Configuration tab)

*   basic authentication (built-in)
*   token (Nuxeo Platform proprietary) (built-in)
*   oAuth (built-in)
*   SAML (addon)
*   2 Steps (with SMS for instance) (Addon)
*   trusted (for instance requests coming from that particular IP adress do not need to validate authentication) (built-in)
*   Open ID (addon)
*   Kerberos (built-in)
*   CAS (built-in)
*   NTLM (built-in)
*   redirecting to a remote identity management solution then having the user fall back authenticated to Nuxeo Platform (SSO servers, Open Id, Portals, ...) (built-in or plugin, depending on the case)

Thanks to the plugability of the authentication layer (see implementation section), it is easy to write a custom authentication protocol when necessary.

## Compatible IdM Solutions

Default configuration checks identity against a Java implementation inside the Nuxeo Platform. By configuration and addition of some modules, and following the above list of supported protocols, Nuxeo Platform can be integrated with various identity providers:

*   LDAP server
*   Active Directory server
*   Open ID compatible web platforms: Google, Twitter, Facebook, GitHub, ...
*   SAML compatible identitiy Management solutions, on premise or SAAS, such as One Login, ClearTrust, ..
*   Kerberos compatible identitity providers
*   Shibboleth Servers (Federated identity management)
*   SSO Servers (ex: CAS Server, Site Minder)

## Unauthenticated Access

### Anonymous user

A configuration allows to have the user automatically logged in as a user called "anonymous", for which some specific permissions have been set. The name of that user is configurable, and allows to simulate an "unauthenticated" access to the Nuxeo Platform. The users having the Manage permission on a repository can reference that anonymous user as any other user and declare some folders and documents accessible to everybody.

### Unauthenticated URLs

It is also possible to [define a list of URL patterns](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--openUrl) for which no authentication is required (so not using the anonymous user either). That way you can say that a specific website generated by the platform is available without authentication while the other pages served by the platform sends the user to the login page. When browsing those URLs, no principal is created, which means no access to the repository can be done.

## User and Groups Provisioning

### Storage Options for Users and Groups

The UserManager is the component in charge of managing users and groups. Default implementation stores them in Nuxeo Platform via the "directory" abstraction, one directory for users, and one for groups, using for each either

*   an SQL implementation (thus storing users and groups on the underlying RDBMS).
*   an LDAP implementation
*   a Nuxeo Platform repository implementation (Users and Groups are then "documents")
*   Custom implementation for calling remote webservice is also sometimes used.

It is possible to reference a meta-directory that would be the result of the merge of several directories, that would be a mix of different implementations (LDAP, SQL...) and different hosts. For instance part of the users can be handled in the corporate LDAP server, and part in the Nuxeo Platform database. This situation is referenced as multi-directory in the documentation.

### Features Available Around Users and Groups Management

When users are dealt through directory abstraction (so 90% of the cases), Nuxeo Platform provides user interfaces (and REST APIs) for handling:

*   User CRUD by administrators
*   User password management by administrator
*   Groups CRUD and assignment by administrator (including management of sub-groups)
*   User profile management by user itself
*   Password management by user itself
*   User and groups Search (for filling a metadata, assigning an ACL, selecting a specific user in a search filter,...)
*   User Invitation: A Nuxeo Addon adds to default Nuxeo Platform UI and services for inviting by email a future user that would not have yet an account in the platform

{{{multiexcerpt 'functional-overview' page='USERDOC:Managing Users and Groups'}}}

### Virtual Users

It is also possible to declare a set of "virtual" users, that are defined in the application although they don't exist on the user directory the instance is plugged to.

## User Profile

A set of properties are stored by default for any user in the Nuxeo Platform:

*   username
*   first name
*   last name
*   company
*   email.

Those properties can come from the IdM Nuxeo Platform is integrated to. To extend the list of available fields for a user, see the customisation section.

# Installation & Configuration

{{! multiexcerpt name='authentication-install-configuration'}}

## LDAP and Active Directory Server

The configuration starts the "userManager" extension point. For the most frequent use cases (Integrating with LDAP or Active directory), a wizard at first startup time will generate the required XML contributions and deploy them. You just need to select the kind of "directory" you want (SQL, LDAP, Multi-directory), and then fill the required information. The wizard will actually generate a contribution to the userManager extension point and some contributions for declaring users and groups directories, and will copy them in nxserver/config folder (ex: default-ldap-users-directory-bundle.xml).

![]({{file name='nuxeo-wizard-user-and-groups.png'}} ?w=400,border=true)

![]({{file name='wizard-users-groups.png'}} ?w=600,border=true)

You can find a [full example of contribution to the userManager](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.usermanager.UserService--userManager) extension point on the explorer. We review on this page some of the specific useful parts.

Users are defined on the "users" element:

&nbsp;

```xml
<userManager>
        <users>
            <directory>somedirectory</directory> ...
```

for which _somedirectory_ has also been contributed. (see [ldap]({{page page='data-lists-and-directories#ldapdirectories'}}) and[sql users ]({{page page='data-lists-and-directories#sqldirectories'}}) contributions, as well as [multi-directory]({{page page='data-lists-and-directories#multi-directories'}})).

Groups are defined on the "groups" element (also referencing already contributed directory).

&nbsp;

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

<span style="color: rgb(51,51,51);">You can define on the same</span> [contribution to UserManager](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.usermanager.UserService--userManager) <span style="color: rgb(51,51,51);">which principal from the remote IdP will be the Administrator of the application. By default, it is the principal "Administrator". That way you can assign a "real" user.</span>

<span style="color: rgb(51,51,51);">The same way, you can choose a group from your company's directory, instead of using "administrators", for determining all the users that will benefit from all the rights in the platform. Especially, pay attention to the "</span>**defaultAdministratorId**<span style="color: rgb(51,51,51);">", "</span>**administratorsGroup**<span style="color: rgb(51,51,51);">" and "</span>**defaultGroups**<span style="color: rgb(51,51,51);">" elements.</span>

## Advanced Authentication Schemes

You may want to use other authentication protocols and / or identity providers.

Most of the time, an "authentication plugin" has to be configured. Nuxeo Platform provides some by default, and you sometime have to install a specific addon.

**In any case**, you have to configure the "authentication chain" with the following extension file that you can deploy with Nuxeo Studio or by putting an XML file inside the folder `nxserver/config` . You have to adapt the authenticationChain element content with the list of plugins you want to use (the plugins documented below on this page).

```xml
<component name="org.nuxeo.ecm.anonymous.activation">
   <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
    <extension
      target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
      point="chain">
    <authenticationChain>
      <plugins>
        <plugin>BASIC_AUTH</plugin>
        <plugin>ANONYMOUS_AUTH</plugin>
        <plugin>THE_PLUGIN_I_WANT_TO_USE</plugin>
      </plugins>
    </authenticationChain>
  </extension>
</component>

```

Nuxeo Platform will use the plugins in the order they are chained. First attempt for each plugin will be to retrieve credentials (see implementation for better understanding). If no credential is found, it will try to call the showLoginPrompt method for each of the plugin up until one is successful.

Below we list all the available authentication plugins and instructions for installation or links to their documentation.

### Form Based

This is a standard form-based authentication. The current implementation lets you configure the name of the Login and Password fields and the name of the page used to display the login page

### Basic HTTP

This plugin supports standard HTTP Basic Authentication. By default, this plugin only generates the authentication prompt on configured URLs.

### Anonymous

This plugin provides anonymous authentication. Users are automatically logged as a configurable Anonymous user. This module also includes additional actions (to be able to login when already logged as Anonymous) and a dedicated Exception handling (to automatically redirect Anonymous users to login screen after a security error). To activate this authentication plugin:

1.  Add the plugin to the authentication chain (use "ANONYMOUS_AUTH"), as illustrated at the beginning of the section.
2.  Configure the plugin via an XML descriptor (define who the anonymous user will be). In order to configure this plugin, you need to contribute an XML extension either with Nuxeo Studio, or by adding the following content in an XML file `nxserver/config/anonymous-auth-config.xml`.

    ```
    <?xml version="1.0"?>
    <component name="org.nuxeo.ecm.platform.login.anonymous.config">

      <!-- Add an Anonymous user -->
      <extension target="org.nuxeo.ecm.platform.usermanager.UserService" point="userManager">
        <userManager>
          <users>
            <anonymousUser id="Guest">
              <property name="firstName">Guest</property>
              <property name="lastName">User</property>
            </anonymousUser>
          </users>
        </userManager>
      </extension>

    </component>

    ```

### OAuth

OAuth 1 and OAuth 2 are natively supported by the Nuxeo Platform, which means there is no bundle to install and no XML extensions for enabling it. There is an HTTP filter for each, that handles authentication in priority compared to the filter that handles the contributed authentication chain illustrated at the beginning of this section. To configure a key for your client, go to Nuxeo Platform web application, then browse **Admin Center > Cloud Services > Consumer** tab. You must give a name, a ClientId, and a ClientSecret.

OAuth end points are ready to be used.

![]({{file name='OAuth2-ConsumerToken.png'}} ?w=500,h=266,border=true)

You can find more details on the implementation of the endpoints and expected parameters for [OAuth 2]({{page page='using-oauth2'}}).

### SAML2

{{{excerpt 'SAML 2.0 Authentication'}}}

### Open ID / OAuth2

If you want to offer ability to get authenticated by a third party provider Open Id/ oAuth2 compatible (like "Login with Google", or "Login with Facebook"), please [follow instructions on this page]({{page space='admindoc710' page='using-openid-oauth2-in-login-screen'}}).

### Generic SSO

This plugin assumes Nuxeo is behind a authenticating reverse proxy that transmit user identity using HTTP headers. For instance, you will configure this plugin if an Apache reverse proxy using client certificates does the authentication or for SSO system - example Central Authentication System V2\. To install and configure this plugin this plugin:

1.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick%7Enuxeo-platform-login-mod_sso) the nuxeo-platform-login-mod_sso addon.
2.  Put it in $TOMCAT_HOME/nxserver/bundles/ or $JBOSS_HOME/server/default/deploy/[nuxeo.ear/bundles](http://nuxeo.ear/bundles) and restart the server.
3.  Add the plugin into the authentication chain, as illustrated at the beginning of this section (use PROXY_AUTH)
4.  Configure the plugin via the following XML descriptor that should be contributed in your Studio project, or copied into nxserver/config ( XML file must be suffixed by -config.xml).

&nbsp;

```
 <component name="org.nuxeo.ecm.platform.authenticator.mod.sso.config">

  <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
  <require>org.nuxeo.ecm.platform.login.Proxy</require>

  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
    <authenticationPlugin name="PROXY_AUTH">
      <loginModulePlugin>Trusting_LM</loginModulePlugin>
      <parameters>
        <\!-\- configure here the name of the http header that is used to retrieve user identity -->
        <parameter name="ssoHeaderName">remote_user</parameter>
        <parameter name="ssoNeverRedirect">false</parameter>
      </parameters>
    </authenticationPlugin>
  </extension>
</component>
```

The ssoNeverRedirect parameter should be set to true if the PROXY_AUTH is used with REST calls, where you don't want to redirect the response.

### Kerberos

It is possible to integrate Nuxeo Platform with a Kerberos server installing the [Kerberos Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/kerberos-authentication) and by adding KRB5_AUTH plugin to the authentication chain. Since some additional configuration must be done serverside, [a dedicated documentation page is provided]({{page page='kerberos-authentication'}}).

### CAS2 - CAS

This plugin implements a client for CAS SSO system (Central Authentication System). It can be configured to use a CAS proxy. It has been tested and reported to work with CAS V2\. It's easy to test this plugin by installing the JA-SIG Central Authentication Service Open Source CAS server. To install the CAS2 authentication plugin:

1.  Make sure there is a CAS server already setup and running.
2.  Install the [CAS2 Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/cas2-authentication)
3.  Put CAS2 plugin into the authentication chain as illustrated at the beginning of this section.
4.  Configure the CAS2 descriptor by contributing the following XML extension in Studio or copying the content in an XML file: `nxserver/config/CAS2-config.xml`

&nbsp;

```
<component name="org.nuxeo.ecm.platform.authenticator.cas2.sso.config">

  <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
  <require>org.nuxeo.ecm.platform.login.Cas2SSO</require>

  <!-- Configure you CAS server parameters -->
  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
    <authenticationPlugin name="CAS2_AUTH">
      <loginModulePlugin>Trusting_LM</loginModulePlugin>
      <parameters>
        <parameter name="ticketKey">ticket</parameter>
        <parameter name="appURL">http://127.0.0.1:8080/nuxeo/nxstartup.faces</parameter>
        <parameter name="serviceLoginURL">http://127.0.0.1:8080/cas/login</parameter>
        <parameter name="serviceValidateURL">http://127.0.0.1:8080/cas/serviceValidate</parameter>
        <parameter name="serviceKey">service</parameter>
        <parameter name="logoutURL">http://127.0.0.1:8080/cas/logout</parameter>
      </parameters>
    </authenticationPlugin>
  </extension>
</component>

```

### SSO with Portals

This plugin provides a way to handle identity propagation between an external application and Nuxeo. It was coded to propagate user identify between a JSR168 portal and a Nuxeo server. The goal is to let the external application (ex: the portal) call Nuxeo API _"on behalf"_ of the interactive users. This ensures:

*   that the app/portal will never display data that should not be visible to the user;
*   that all actions done via the app/portal will still be logged in the Nuxeo Audit log with the correct information.

Portal_SSO is integrated in [Nuxeo Java Automation client](https://github.com/nuxeo/nuxeo-features/tree/release-7.10/nuxeo-automation/nuxeo-automation-client) and well as in [Nuxeo-HTTP-Client](https://github.com/nuxeo/nuxeo-http-client/) sample lib.

**To install this authentication plugin:**

1.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick%7Enuxeo-platform-login-portal-sso) the `nuxeo-platform-login-portal-sso` plugin.
2.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/[nuxeo.ear/bundles](http://nuxeo.ear/bundles)` and restart the server.
3.  Put the plugin into the authentication chain, as illustrated at the beginning of this section (use "PORTAL_AUTH")
    Configure the plugin via an XML descriptor. In order to configure this plugin, you need to contribute the following XML extension in your studio project or add the XML file into `nxserver/config` ( XML file must be suffixed by -config.xml).

&nbsp;

```
<component name="org.nuxeo.ecm.platform.authenticator.portal.sso.config">

  <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
  <require>org.nuxeo.ecm.platform.login.Portal</require>

  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
    <authenticationPlugin name="PORTAL_AUTH">
      <loginModulePlugin>Trusting_LM</loginModulePlugin>
      <parameters>
        <\!-\- define here shared secret between the portal and Nuxeo server -->
        <parameter name="secret">nuxeo5secretkey</parameter>
        <parameter name="maxAge">3600</parameter>
      </parameters>
    </authenticationPlugin>
  </extension>
</component>

```

### Shibboleth

Nuxeo Platform can be made compatible with Shibboleth IdP for authentication by installing the [Shibboleth Nuxeo package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/shibboleth-authentication), and by adding "SHIB_AUTH" in the authentication chain, as illustrated at the beginning of this section. You should carefully read [detailed instructions]({{page page='shibboleth-authentication'}}).

### Two Factors Authentication

You can make your Nuxeo Platform instance use services of [DuoWeb](https://www.duosecurity.com/) for benefiting from a two factors authentication (like receiging a code by SMS additionnaly to putting the login/ password). See the [dedicated addon page]({{page page='nuxeo-duoweb-two-factor-authentication'}}) for usage and installation instructions.

### NTLM and IE Challenge/Response

This plugin uses JCIFS to handle NTLM authentication. If you have troubles with latest version of IE on POST requests, please see JCIFS instructions on that:

```
http://jcifs.samba.org/src/docs/ntlmhttpauth.html#post

```

To install this authentication plugin:

1.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick%7Enuxeo-platform-login-ntlm) the `nuxeo-platform-login-ntlm` plugin.
2.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/[nuxeo.ear/bundles](http://nuxeo.ear/bundles)` and restart the server.
3.  Put the plugin into the authentication chain as illustrated at the beginning of the section (use NTLM_AUTH)
4.  Configure the plugin via the following XML descriptor (either adding the extension with Nuxeo Studio or coppying the file in `nxserver/config/`ntlm-auth-config.xml`` .

```xml
<component name="org.nuxeo.ecm.platform.authenticator.ntlm.config">

  <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
  <require>org.nuxeo.ecm.platform.login.NTLM</require>

  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
    <authenticationPlugin name="NTLM_AUTH">
      <loginModulePlugin>Trusting_LM</loginModulePlugin>
      <parameters>
        <\!-\- Add here parameters for you domain, please ee [http://jcifs.samba.org/src/docs/ntlmhttpauth.html&nbsp];
        <parameter name="jcifs.http.domainController">MyControler</parameter>
        \-->
      </parameters>
    </authenticationPlugin>
  </extension>
</component>

```

&nbsp;

&nbsp;

{{! /multiexcerpt}}

# Customization

## Customizing the Login Page

You can customize the login page using [ Nuxeo Studio ]({{page space='studio' page='branding#brandingconfiguration-loginpagetab'}}) (background picture, colors, logo).

## Adding New Fields to The User Profile or Group Profile

If you want to add more fields than the default ones on the user profile, you can simply override the definition of the schema "user" (in a Studio project or in an XML component in nxserver/config)

```
<extension point="schema" target="org.nuxeo.ecm.core.schema.TypeService"> <<!-- override default user schema --> <schema name="user" override="true" src="schemas/my_custom_user_schema.xsd"/>
</extension>
```

Note that you can contribute a new [schema with Nuxeo Studio]({{page space='studio' page='schemas'}}). The default one used is:

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

As you see, you should not forget the inverse reference field.

You then have to update the forms used for editing the user profile (to be documented).

It works the same for the group schema, and you have to make sure to have some mandatory fields available for references and inverse references for the group hierarchy. See default one:

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

That can be contributed with the following extension:
<extension target="org.nuxeo.ecm.core.schema.TypeService" point="schema">
  <schema name="group" src="directoryschema/group.xsd"/>
</extension>
```

## Integrating with a Webservice Based Identify Provider

You can build a custom directory that will wrap your webservice.

You can use [this sample](https://github.com/tiry/nuxeo-directory-connector) as a starting point.

# Core Implementation

Nuxeo Authentication is based on the JAAS standard. Authentication infrastructure is based on two main components:

*   a JAAS Login Module: `NuxeoLoginModule`,
*   a Web Filter: `NuxeoAuthenticationFilter`.

Users and groups are managed via the `UserManagerService` that handles the indirection to users and groups directories (SQL or LDAP or else).
The Nuxeo authentication framework is pluggable so that you can contribute new plugins and don't have to rewrite and reconfigure a complete JAAS infrastructure.

![]({{file name='Sélection_014.png'}} ?w=600,border=true)

&nbsp;

The initial identification can be done at Java level via JAAS or at HTTP level via a dedicated filter. The filter is pluggable so that the way of retrieving credentials can be an adapter to the target system. The JAAS login module is also pluggable so that you can define how the credentials are validated. By default, credentials are validated against directory that use LDAP, SQL or an external application.

![]({{file name='Sélection_013.png'}} ?w=600,border=true)

### Pluggable JAAS Login Module - NuxeoLoginModule

`NuxeoLoginModule` is a JAAS Login Module. It is responsible for handling all login calls within Nuxeo's security domains:

*   nuxeo-ecm: for the service stack and the core,
*   nuxeo-ecm-web: for the web application on the top of the service stack

`NuxeoLoginModule` mainly handles two tasks:

*   login user
    This means extracting information from the CallBack stack and validating identity. `NuxeoLoginModule` supports several types of CallBacks (including Nuxeo specific CallBack) and uses a plugin system to be able to validate user identity in a pluggable way.

*   Principal creation
    For that, `NuxeoLoginModule` uses Nuxeo UserManager service that does the indirection to the users/groups directories.

When used in conjunction with `UserIdentificationInfoCallback` (Nuxeo custom CallBack system), the `LoginModule` will choose the right `LoginPlugin` according to the CallBack information.

### NuxeoLoginModule Plugins

Because validating user identity can be more complex that just checking login/password, `NuxeoLoginModule` exposes an extension point to contribute new LoginPlugins. Each LoginPlugin has to implement the [`org.nuxeo.ecm.platform.login.LoginPlugin`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-7.10/viewComponent/org.nuxeo.ecm.platform.login.LoginPluginRegistry) interface.

This interface exposes the User Identity validation logic from the `UserIdentificationInfo` object populated by the Authenticator (see the [Pluggable Web Authentication Filter](#pluggable-web-authentication-filter) section):

```
String validatedUserIdentity(UserIdentificationInfo userIdent)
```

For instance, the default implementation will extract the Login/Password from `UserIdentificationInfo` and call the `checkUsernamePassword` against the `UserManager` that will validate this information against the users directory.

Other plugins can use other information carried by UserIdentificationInfo (token, ticket, ...) to validate the identity against an external SSO system. The `UserIdentificationInfo` also carries the `LoginModule` plugin name that must be used to validate identity. Even if technically, a lot of SSO systems could be implemented using this plugin system, most SSO implementations have been moved to the Authentication Plugin at the Web Filter level, because they need a HTTP dialog.

For now, the `NuxeoLoginModule` has only two ways to handle `validateUserIdentity`:

*   default that uses `UserManager` to validate the couple login/password,
*   Trusted_LM: this plugin assumes the user identity has already been validated by the authentication filter, so `validatedUserIdentity` will always return true.

Using Trusted_LM, a user will be logged if the user exists in the UserManager. This plugin is used for most SSO systems in conjunction with an Authentication plugin that will actually do the work of validating password or token.

### <a name="pluggable-web-authentication-filter"></a>"Pluggable Web Authentication Filter

The Web Authentication filter is responsible for:

*   Guarding access to web resources. The filter can be parameterized to guard URLs with a given pattern.
*   Finding the right plugin to get user identification information. This can be getting a userName/Password, getting a token in a cookie or a header, redirecting user to another authentication server.
*   Creating the `LoginContext`. This means creating the needed callBacks and call the JAAS Login.
*   Storing and reestablishing login context. In order to avoid recreating a login context for each request, the `LoginContext` is cached.

### NuxeoAuthenticationFilter

The `NuxeoAuthenticationFilter` is one of the top level filters in Nuxeo Web Filters stack. For each request, it will try to find a existing `LoginContext` and create a `RequestWrapper` that will carry the `NuxeoPrincipal`.

If no existing `LoginContext` is found, it will try to prompt the client for authentication information and will establish the login context. In order to execute the task of prompting the client and retrieving `UserIndetificationInfo`, the filter will rely on a set of configured plugins.

Each plugin must:

*   Implement `org.nuxeo.ecm.platform.ui.web.auth.interfaces.NuxeoAuthenticationPlugin`. The two main methods are:

    ```
    Boolean handleLoginPrompt(HttpServletRequest httpRequest,HttpServletResponse httpResponse, String baseURL);
    UserIdentificationInfo handleRetrieveIdentity(HttpServletRequest httpRequest, HttpServletResponse httpResponse);

    ```

*   Define the `LoginModule` plugin to use if needed.
    Typically, SSO `AuthenticationPlugin` will do all the work and will use the Trusted_LM LoginModule Plugin.

*   Define if stating URL must be saved.
    `AuthenticationPlugins`, that uses HTTP redirect in order to do the login prompt, will let the Filter store the first accessed URL in order to cleanly redirect the user to the page he asked after the authentication is successful.
    Additionally, `AuthenticationPlugin` can also implement the `org.nuxeo.ecm.platform.ui.web.auth.interfaces.NuxeoAuthenticationPluginLogoutExtension` interface if a specific processing must be done when logging out.

Here is a sample XML descriptor for registering an `AuthenticationPlugin`:

```
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.ui.web.auth.defaultConfig">
  <extension
    target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
    point="authenticators">
    <authenticationPlugin name="FORM_AUTH" enabled="true"
      class="org.nuxeo.ecm.platform.ui.web.auth.plugins.FormAuthenticator">
      <needStartingURLSaving>true</needStartingURLSaving>
      <parameters>
        <parameter name="LoginPage">login.jsp</parameter>
        <parameter name="UsernameKey">user_name</parameter>
        <parameter name="PasswordKey">user_password</parameter>
      </parameters>
    </authenticationPlugin>
   </extension>
</component>

```

As you can see in the above example, the descriptor contains the parameters tag that can be used to embed arbitrary additional configuration that will be specific to a given `AuthenticationPlugin`. In the above example, it is used to define the field names and the JSP file used for form based authentication.

`NuxeoAuthenticationFilter` supports several authentication system. For example, this is useful to have users using form-based authentication and having RSS clients using Basic Authentication. Because of that, `AuthenticationPlugin` must be ordered. For that purpose, `NuxeoAuthenticationFilter` uses a dedicated extension point that lets you define the `AuthenticationChain`.

```
<component name="org.nuxeo.ecm.anonymous.activation">
   <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
    <extension
      target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
      point="chain">
    <authenticationChain>
      <plugins>
        <plugin>BASIC_AUTH</plugin>
        <plugin>ANONYMOUS_AUTH</plugin>
        <plugin>FORM_AUTH</plugin>
      </plugins>
    </authenticationChain>
  </extension>
</component>

```

The `NuxeoAuthenticationFilter` will use this chain to trigger the login prompt. When authentication is needed, the Filter will first call the `handleRetrieveIdentity` method on all the plugins in the order of the authentication chain. Then, if the authentication could not be achieved, the filter will call the `handleLoginPrompt` method in the same order on all the plugins. The aim is to have as much automatic authentications as possible. That's why all the manual authentications (those needing a prompt) are done in a second round.

Some authentication plugins may choose to trigger or not the `LoginPrompt` depending on the situation. For example: the `BasicAuthentication` plugin generates the login prompt (an HTTP basic authentication which takes the form of a popup) only for specific URLs used by RSS feeds or Restlet calls. This allows the platform to be easily called by Restlets and RSS clients without bothering browser clients who are displayed web forms to authenticate

&nbsp;

{{! end_of_tabs }}

&nbsp;

* * *