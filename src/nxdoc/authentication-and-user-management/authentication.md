---
title: Authentication
review:
    comment: ''
    date: ''
    status: ok
labels:
    - authentication
    - authentication-filter
    - login-module
toc: true
confluence:
    ajs-parent-page-id: '22380691'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Authentication
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Authentication'
    page_id: '22380918'
    shortlink: doFVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/doFVAQ'
    source_link: /display/NXDOC60/Authentication
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 14:43'
        message: ''
        version: '28'
    -
        author: Thierry Martins
        date: '2014-12-03 10:26'
        message: ssoNeverRedirect parameter
        version: '27'
    -
        author: Solen Guitter
        date: '2014-09-19 11:51'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-01-10 17:14'
        message: Added section about services specific authentication
        version: '25'
    -
        author: Solen Guitter
        date: '2013-11-13 17:27'
        message: ''
        version: '24'
    -
        author: Thierry Delprat
        date: '2013-11-13 12:13'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2013-11-07 10:07'
        message: Removed related topics from TOC
        version: '22'
    -
        author: Solen Guitter
        date: '2013-09-04 17:40'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2013-05-29 12:00'
        message: ''
        version: '20'
    -
        author: Antoine Taillefer
        date: '2013-05-28 12:09'
        message: ''
        version: '19'
    -
        author: Mathieu Guillaume
        date: '2013-05-28 11:46'
        message: CAS2 block formatting
        version: '18'
    -
        author: Olivier Grisel
        date: '2012-04-28 03:10'
        message: Migrated to Confluence 4.0
        version: '17'
    -
        author: Olivier Grisel
        date: '2012-04-28 03:10'
        message: ''
        version: '16'
    -
        author: Stéphane Lacoin
        date: '2012-03-20 11:42'
        message: updated configuration according to current distribution
        version: '15'
    -
        author: Solen Guitter
        date: '2012-03-16 18:41'
        message: 'Added links to plugins, fixed typos and added related pages'
        version: '14'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:44'
        message: ''
        version: '13'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:31'
        message: ''
        version: '12'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:18'
        message: ''
        version: '11'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:14'
        message: ''
        version: '10'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:09'
        message: ''
        version: '9'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:06'
        message: ''
        version: '8'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:06'
        message: ''
        version: '7'
    -
        author: Benjamin Jalon
        date: '2012-03-15 12:02'
        message: ''
        version: '6'
    -
        author: Benjamin Jalon
        date: '2012-03-15 11:46'
        message: ''
        version: '5'
    -
        author: Benjamin Jalon
        date: '2012-03-15 11:45'
        message: ''
        version: '4'
    -
        author: Benjamin Jalon
        date: '2012-03-15 11:44'
        message: ''
        version: '3'
    -
        author: Benjamin Jalon
        date: '2012-03-15 11:36'
        message: ''
        version: '2'
    -
        author: Benjamin Jalon
        date: '2012-03-15 11:33'
        message: ''
        version: '1'

---
{{! excerpt}}

Nuxeo Authentication is based on the JAAS standard. Authentication infrastructure is based on two main components:

*   a JAAS Login Module: `NuxeoLoginModule`,
*   a Web Filter: `NuxeoAuthenticationFilter`.

{{! /excerpt}}

Users and groups are managed via the `UserManagerService` that handles the indirection to users and groups directories (SQL or LDAP or else).
The Nuxeo authentication framework is pluggable so that you can contribute new plugins and don't have to rewrite and reconfigure a complete JAAS infrastructure.

### Pluggable JAAS Login Module

`NuxeoLoginModule`&nbsp;is a JAAS Login Module. It is responsible for handling all login calls within Nuxeo's security domains:

*   nuxeo-ecm: for the service stack and the core,
*   nuxeo-ecm-web: for the web application on the top of the service stack.

On JBoss application server, the JBoss Client Login module is used to propagate security between the web part and the service stack.

### NuxeoLoginModule

`NuxeoLoginModule` mainly handles two tasks:

*   login user
    This means extracting information from the CallBack stack and validating identity. `NuxeoLoginModule`&nbsp;supports several types of CallBacks (including Nuxeo specific CallBack) and uses a plugin system to be able to validate user identity in a pluggable way.

*   Principal creation
    For that,&nbsp;`NuxeoLoginModule`&nbsp;uses Nuxeo UserManager service that does the indirection to the users/groups directories.

When used in conjunction with&nbsp;`UserIdentificationInfoCallback`&nbsp;(Nuxeo custom CallBack system), the&nbsp;`LoginModule`&nbsp;will choose the right&nbsp;`LoginPlugin`&nbsp;according to the CallBack information.

### NuxeoLoginModule Plugins

Because validating user identity can be more complex that just checking login/password, `NuxeoLoginModule` exposes an extension point to contribute new LoginPlugins. Each LoginPlugin has to implement the [`org.nuxeo.ecm.platform.login.LoginPlugin`](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewComponent/org.nuxeo.ecm.platform.login.LoginPluginRegistry) interface.

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

### {{> anchor 'pluggable-web-authentication-filter'}}Pluggable Web Authentication Filter

The Web Authentication filter is responsible for:

*   Guarding access to web resources. The filter can be parameterized to guard URLs with a given pattern.
*   Finding the right plugin to get user identification information. This can be getting a userName/Password, getting a token in a cookie or a header, redirecting user to another authentication server.
*   Creating the `LoginContext`. This means creating the needed callBacks and call the JAAS Login.
*   Storing and reestablishing login context. In order to avoid recreating a login context for each request, the `LoginContext` is cached.

#### NuxeoAuthenticationFilter

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

Some authentication plugins may choose to trigger or not the `LoginPrompt` depending on the situation. For example: the `BasicAuthentication` plugin generates the login prompt (an HTTP basic authentication which takes the form of a popup) only for specific URLs used by RSS feeds or Restlet calls. This allows the platform to be easily called by Restlets and RSS clients without bothering browser clients who are displayed web forms to authenticate.

#### Built-in Authentication Plugins

`NuxeoAuthenticationFilter` comes with two built-in authentication plugins:

*   `FORM_AUTH`: Form based Authentication
    This is a standard form-based authentication. The current implementation lets you configure the name of the Login and Password fields and the name of the page used to display the login page.
*   `BASIC_AUTH`: Basic HTTP Authentication
    This plugin supports standard HTTP Basic Authentication. By default, this plugin only generates the authentication prompt on configured URLs. There are also additional components that provide other Authentication plugins (see below).

#### Additional Authentication Plugins

Nuxeo provides a set of other authentication plugins that are not installed by default with the standard Nuxeo Platform setup. These plugins can be downloaded and installed separately.

##### Authentication Plugins and Nuxeo Services Specific Authentication

Some Nuxeo services, Drive and Automation for instance, may use a specific authentication. If you want to make them use another authentication mechanism than their default one, you need to overwrite specificChains of the corresponding service, such as the [Automation specificChains](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewContribution/org.nuxeo.ecm.automation.server.auth.config--specificChains).

##### CAS2 Authentication

This plugin implements a client for CAS SSO system (Central Authentication System). It can be configured to use a CAS proxy. It has been tested and reported to work with CAS V2\. It's easy to test this plugin by installing the JA-SIG Central Authentication Service Open Source CAS server.

**To install the CAS2 authentication plugin:**

1.  Make sure there is a CAS server already setup and running.
2.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-platform-login-cas2) the `nuxeo-platform-login-cas2` plugin.
3.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
4.  Configure the CAS2 descriptor.
5.  Put CAS2 plugin into the authentication chain.

In order to configure CAS2 Auth, you need to create an XML configuration file into `nxserver/config`.
Here is a sample file named `CAS2-config.xml`.

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

  <!-- Include CAS2 into authentication chain -->
  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="chain">
    <authenticationChain>
      <plugins>
        <plugin>BASIC_AUTH</plugin>
        <plugin>CAS2_AUTH</plugin>
      </plugins>
    </authenticationChain>
  </extension>
</component>

```

{{#> callout type='tip' }}

If while authenticating on the CAS server, you get the following exception in the logs, it simply means that the user JOEUSER does not exist in the Nuxeo directory and does not mean that the CAS process is not working.

{{/callout}}

```
ERROR \[org.nuxeo.ecm.platform.login.NuxeoLoginModule\] createIdentity failed
  javax.security.auth.login.LoginException: principal JOEUSER does not exist
    at org.nuxeo.ecm.platform.login.NuxeoLoginModule.createIdentity(NuxeoLoginModule.java:304)
    at org.nuxeo.ecm.platform.login.NuxeoLoginModule.validateUserIdentity(NuxeoLoginModule.java:362)
    at org.nuxeo.ecm.platform.login.NuxeoLoginModule.getPrincipal(NuxeoLoginModule.java:216)
    at org.nuxeo.ecm.platform.login.NuxeoLoginModule.login(NuxeoLoginModule.java:271)
    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)
    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
    at java.lang.reflect.Method.invoke(Method.java:585)
    at javax.security.auth.login.LoginContext.invoke(LoginContext.java:769)
    at javax.security.auth.login.LoginContext.access$000(LoginContext.java:186)
    at javax.security.auth.login.LoginContext$4.run(LoginContext.java:683)
    at java.security.AccessController.doPrivileged(Native Method)
    at javax.security.auth.login.LoginContext.invokePriv(LoginContext.java:680)
    at javax.security.auth.login.LoginContext.login(LoginContext.java:579)
    at org.nuxeo.ecm.platform.ui.web.auth.NuxeoAuthenticationFilter.doAuthenticate(NuxeoAuthenticationFilter.java:205)

```

##### PROXY_AUTH: Proxy Based Authentication

This plugin assumes Nuxeo is behind a authenticating reverse proxy that transmit user identity using HTTP headers. For instance, you will configure this plugin if an Apache reverse proxy using client certificates does the authentication or for SSO system - example Central Authentication System V2.

**To install this authentication plugin:**

1.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-platform-login-mod_sso) the `nuxeo-platform-login-mod_sso` plugin.
2.  Put it in `$TOMCAT_HOME/nxserver/bundles/` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
3.  Configure the plugin via an XML descriptor.
4.  Put the plugin into the authentication chain.

In order to configure this plugin, you need to create an XML configuration file into `nxserver/config`.
Here is a sample file named `proxy-auth-config.xml`:

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

  <\!-\- Include Proxy Auth into authentication chain -->
  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="chain">
    <authenticationChain>
      <plugins>
        <\!-\-  Keep basic Auth at top of Auth chain to support RSS access via BasicAuth -->
        <plugin>BASIC_AUTH</plugin>
        <plugin>PROXY_AUTH</plugin>
      </plugins>
    </authenticationChain>
  </extension>
</component>

```

The `ssoNeverRedirect` parameter should be set to `true` if the PROXY_AUTH is used with REST calls, where you don't want to redirect the response.

##### NTLM_AUTH: NTLM and IE Challenge/Response Authentication

This plugin uses JCIFS to handle NTLM authentication.

{{#> callout type='info' }}

This plugin was partially contributed by Nuxeo Platform users and has been reported to work by several users.

{{/callout}}

If you have troubles with latest version of IE on POST requests, please see JCIFS instructions on that:

```
http://jcifs.samba.org/src/docs/ntlmhttpauth.html#post

```

**To install this authentication plugin:**

1.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-platform-login-ntlm) the `nuxeo-platform-login-ntlm` plugin.
2.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
3.  Configure the plugin via an XML descriptor.
4.  Put the plugin into the authentication chain.

In order to configure this plugin, you need to create an XML configuration file into `nxserver/config`.
Here is a sample file named `ntlm-auth-config.xml`.

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

  <\!-\- Include NTLM Auth into authentication chain -->
  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="chain">
    <authenticationChain>
      <plugins>
        <plugin>BASIC_AUTH</plugin>
        <plugin>NTLM_AUTH</plugin>
        <plugin>FORM_AUTH</plugin>
      </plugins>
    </authenticationChain>
  </extension>
</component>

```

##### PORTAL_AUTH: SSO Implementation for Portal Clients

This plugin provides a way to handle identity propagation between an external application and Nuxeo. It was coded to propagate user identify between a JSR168 portal and a Nuxeo server.

The goal is to let the external application (ex: the portal) call Nuxeo API _"on behalf"_ of the interactive users. This ensures:

*   that the app/portal will never display data that should not be visible to the user;
*   that all actions done via the app/portal will still be logged in the Nuxeo Audit log with the correct information.

Portal_SSO is integrated in [Nuxeo Java Automation client](https://github.com/nuxeo/nuxeo-features/tree/release-6.0/nuxeo-automation/nuxeo-automation-client) and well as in [Nuxeo-HTTP-Client](https://github.com/nuxeo/nuxeo-http-client/) sample lib.

**To install this authentication plugin:**

1.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-platform-login-portal-sso) the `nuxeo-platform-login-portal-sso` plugin.
2.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
3.  Configure the plugin via an XML descriptor.
4.  Put the plugin into the authentication chain.

In order to configure this plugin, you need to create an XML configuration file into `nxserver/config`.
Here is a sample file named `portal-auth-config.xml`.

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

  <\!-\- Include Portal Auth into authentication chain -->
  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="chain">
    <authenticationChain>
      <plugins>
        <\!-\-  Keep basic Auth at top of Auth chain to support RSS access via BasicAuth -->
        <plugin>BASIC_AUTH</plugin>
        <plugin>PORTAL_AUTH</plugin>
        <plugin>FORM_AUTH</plugin>
      </plugins>
    </authenticationChain>
  </extension>
</component>

```

##### ANONYMOUS_AUTH: Anonymous Authentication Plugin

This plugin provides anonymous authentication. Users are automatically logged as a configurable Anonymous user. This module also includes additional actions (to be able to login when already logged as Anonymous) and a dedicated Exception handling (to automatically redirect Anonymous users to login screen after a security error).

**To activate this authentication plugin:**

1.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
2.  Configure the plugin via an XML descriptor (define who the anonymous user will be).

In order to configure this plugin, you need to create an XML configuration file into `nxserver/config`.
Here is a sample file named `anonymous-auth-config.xml`.

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

&nbsp;

&nbsp;
