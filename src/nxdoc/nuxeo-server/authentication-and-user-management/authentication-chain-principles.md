---
title: Authentication Chain Principles
description: 'Nuxeo Authentication is based on the JAAS standard. Authentication infrastructure is based on two main components: a JAAS Login Module and a Web filter.'
review:
    comment: ''
    date: '2016-12-14'
    status: ok
toc: true
tree_item_index: 50
labels:
    - content-review-lts2017
    - authentication
    - dmetzler
---
Nuxeo Authentication is based on the JAAS standard. Authentication infrastructure is based on two main components:

- A JAAS Login Module: `NuxeoLoginModule`,
- A Web Filter: `NuxeoAuthenticationFilter`.

Users and groups are managed via the `UserManagerService` that handles the indirection to users and groups directories (SQL or LDAP or else).
The Nuxeo authentication framework is pluggable so that you can contribute new plugins and don't have to rewrite and reconfigure a complete JAAS infrastructure.

![]({{file name='Selection_014.png'}} ?w=600,border=true)

The initial identification can be done at Java level via JAAS or at HTTP level via a dedicated filter. The filter is pluggable so that the way of retrieving credentials can be an adapter to the target system. The JAAS login module is also pluggable so that you can define how the credentials are validated. By default, credentials are validated against directory that use LDAP, SQL or an external application.

![]({{file name='Selection_013.png'}} ?w=600,border=true)

### Pluggable JAAS Login Module - NuxeoLoginModule

`NuxeoLoginModule` is a JAAS Login Module. It is responsible for handling all login calls within Nuxeo's security domains:

*   nuxeo-ecm: for the service stack and the core
*   nuxeo-ecm-web: for the web application on the top of the service stack

`NuxeoLoginModule` mainly handles two tasks:

*   log in user
    This means extracting information from the CallBack stack and validating identity. `NuxeoLoginModule` supports several types of CallBacks (including Nuxeo specific CallBack) and uses a plugin system to be able to validate user identity in a pluggable way.

*   Principal creation
    For that, `NuxeoLoginModule` uses Nuxeo UserManager service that does the indirection to the users/groups directories.

When used in conjunction with `UserIdentificationInfoCallback` (Nuxeo custom CallBack system), the `LoginModule` will choose the right `LoginPlugin` according to the CallBack information.

### NuxeoLoginModule Plugins

Because validating user identity can be more complex that just checking login/password, `NuxeoLoginModule` exposes an extension point to contribute new LoginPlugins. Each LoginPlugin has to implement the [`org.nuxeo.ecm.platform.login.LoginPlugin`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.platform.login.LoginPluginRegistry) interface.

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

Some authentication plugins may choose to trigger or not the `LoginPrompt` depending on the situation. For example: the `BasicAuthentication` plugin generates the login prompt (an HTTP basic authentication which takes the form of a popup) only for specific URLs used by RSS feeds or Restlet calls. This allows the platform to be easily called by Restlets and RSS clients without bothering browser clients who are displayed web forms to authenticate.
