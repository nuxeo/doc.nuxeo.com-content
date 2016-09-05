---
title: Authentication Overview
labels:
    - authentication
    - identity
toc: true
confluence:
    ajs-parent-page-id: '22380691'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Authentication+Overview
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Authentication+Overview'
    page_id: '22380669'
    shortlink: fYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/fYBVAQ'
    source_link: /display/NXDOC60/Authentication+Overview
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 14:03'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-09-19 15:11'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-09-19 11:49'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-09-19 11:48'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-12-04 12:09'
        message: Removed related topics from TOC
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-12-04 12:08'
        message: 'Added related topics, TOC, formatting'
        version: '14'
    - 
        author: Thierry Delprat
        date: '2013-11-27 16:55'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2013-11-27 16:39'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-09-19 15:03'
        message: Formatting
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-09-17 17:54'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:42'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:23'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:23'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:20'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:19'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:16'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:14'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:11'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-09-16 14:10'
        message: ''
        version: '1'

---
{{! excerpt}}

This page gives a general idea on how authentication is plugged into the platform.

{{! /excerpt}}

Authentication and user management is very pluggable so that the Nuxeo Platform can:

*   Integrate with a Single Sign On system,
*   Integrate with an external source of users and groups,
*   Integrate easily any specific business logic tied to user management.

For that the Authentication and Identity services are separated in several components that can all be configured.

## Actors in Authentication and Identity management

The different authentication and identity management actors are:

*   **Nuxeo Authentication Filter**
    It protects HTTP access to Nuxeo resources.
    It will select and use Authenticator to retrieve credentials (login/password, certificate ...).
    It pushes identity in JAAS Stack.
*   **Nuxeo Authenticators**
    These are pluggable modules that encapsulate the logic for getting user's creadentials.

    *   They use HTTP Basic Auth.
    *   They display a Login/Password form.
    *   They redirect to a SSL server and then retrieve a token.
*   **JAAS and Login Module**
    This is the standard Java Security framework.
    The default LoginModule uses a LoginModulePlugins to do the credential validation.
    The default LoginModule Plugin will delegate credential validation to the UserManager.

*   **UserManager**
    This is the service responsible for managing Users and Groups. The underlying storage are accessed via the Directory API indirection.
*   **Directories**
    Directories provide access to users and groups via LDAP, SQL or any custom implementation. They also provide a validated API to validate the credential against the user source.

![]({{file name='loginStack.png'}} ?w=600,h=394,border=true)

The initial identification can be done at Java level via JAAS or at HTTP level via a dedicated filter. The filter is pluggable so that the way of retrieving credentials can be an adapter to the target system. The JAAS login module is also pluggable so that you can define how the credentials are validated. By default, credentials are validated against directory that use LDAP, SQL or an external application.

![]({{file name='authentication_activity_diagram1.png'}} ?w=600,h=293,border=true)

## About the Directory Abstraction

The default LoginModule will delegate Authentication the UserManager that, by default, will delegate this to Directories.

Directories will be used to:

*   validate user credentials,
*   retrieve user information,
*   retrieve groups.

The actual directory implementation can be:

*   SQL,
*   LDAP (use a LDAP bind for authentication),
*   Multi-Directory (wrap several directories in once),
*   Custom (ex: wrap a WebService ).

![]({{file name='DirectoryAbstraction.png'}} ?w=660,h=294,border=true)

## SSO Integration Strategies

In the case of SSO integration, the user will be authenticated by a third party service and Nuxeo should only:

*   verify that the user has indeed been authenticated,
*   retrieve information.

It means that at UserManager level, the validateUserPassword won't be called: UserManager will just check that the user exists so that a Principal can be created for the JAAS stack.

This explains why in most SSO plugin configuration, the target LoginModulePlugin is TrustedLM: Trusted = no need to validate credential, the SSO server already did it.

### Integrating a Ticket Based SSO Server

The Authenticator plugin will be in charge of:

*   redirecting the user to the SSO server if needed;
*   intercept the ticket:

    *   validate it against the SSO server,
    *   retrieve information about the user;

The resulting identify will be pushed to JAAS Stack.

[CAS is a typical example of such an integration](https://github.com/nuxeo/nuxeo-platform-login/blob/release-6.0/nuxeo-platform-login-cas2/Sample/Sample-CAS2-descriptor-bundle.xml).

### Integrating a Proxy SSO Server

In this case the Authenticator plugin will:

*   check for a given header in the HTTP request;
*   decrypt and validate the header token against the SSO server;

The resulting identify will be pushed to JAAS Stack.

[Portal SSO is a typical example of such an integration.](https://github.com/nuxeo/nuxeo-platform-login/blob/release-6.0/nuxeo-platform-login-portal-sso/Sample/Sample-Portal-SSO-descriptor-bundle.xml)

### Creating Users on the Fly

For some use cases, you may need to create users on the fly on the Nuxeo Platform side.

You can do this from the Authenticator which, after getting user information from the external server, can create the corresponding entry using the UserManager.

[Shibboleth is a typical example of such an implementation.](https://github.com/nuxeo/nuxeo-platform-login/blob/release-6.0/nuxeo-platform-login-shibboleth/src/main/java/org/nuxeo/ecm/platform/shibboleth/auth/ShibbolethAuthenticationPlugin.java)

### Integrating SAML

CAS Server can work with SAML using additional module so this is one option.

The other option is to simply build a SAML Authenticator for Nuxeo: currently there is none available by default because no one asked for it and no one contributed one (even if we now that some projects have done this work).

### Integrating with a Webservice Based Identify Provider

You can build a custom directory that will wrap your webservice.

You can use [this sample](https://github.com/tiry/nuxeo-directory-connector) as a starting point.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related topics in this documentation'}}

*   [User Management]({{page page='user-management'}})
*   [Authentication]({{page page='authentication'}})
*   [Using CAS2 Authentication]({{page page='using-cas2-authentication'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related topics in other documentation'}}

*   [Authentication, users and groups]({{page space='admindoc60' page='authentication-users-and-groups'}})
*   [Using Shibboleth]({{page space='admindoc60' page='using-shibboleth'}})
*   [Configuring User & Group Storage and Authentication]({{page space='admindoc60' page='configuring-user-and-group-storage-and-authentication'}})

{{/panel}}</div></div>