---
title: 'Authentication, users and groups'
labels:
    - authentication
toc: true
confluence:
    ajs-parent-page-id: '16810056'
    ajs-parent-page-title: Setup
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Authentication%2C+users+and+groups
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC58/Authentication%2C+users+and+groups
    page_id: '16810077'
    shortlink: XYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XYAAAQ'
    source_link: /display/ADMINDOC58/Authentication%2C+users+and+groups
history:
    - 
        author: Anonymous
        date: '2013-07-08 17:39'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-07-08 17:33'
        message: Fixed formatting
        version: '20'
    - 
        author: Laurent Doguin
        date: '2013-07-04 11:11'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-03-11 12:21'
        message: Migrated to Confluence 4.0
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-03-11 12:21'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2011-03-04 17:32'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2011-03-03 15:38'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-02-23 14:53'
        message: formatting
        version: '11'
    - 
        author: Florent Guillaume
        date: '2011-02-07 17:00'
        message: ''
        version: '10'
    - 
        author: Thierry Delprat
        date: '2011-02-07 16:54'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-12-27 10:19'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2010-12-22 11:52'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2010-12-22 11:36'
        message: ''
        version: '6'
    - 
        author: Stéphane Lacoin
        date: '2010-12-16 16:35'
        message: ''
        version: '5'
    - 
        author: Stéphane Lacoin
        date: '2010-12-16 16:31'
        message: ''
        version: '4'
    - 
        author: Quentin Lamerand
        date: '2010-10-19 15:23'
        message: ''
        version: '3'
    - 
        author: Admin name placeholder
        date: '2010-03-01 13:34'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 13:34'
        message: ''
        version: '1'

---
The blue blocks represents the pluggability points:

*   retrieving user related information (getting login/password, getting a SSO ticket ...),
*   validating user credentials against a backend (SQL DB, LDAP directory, external application ...).

You can see below the flow chart for an authentication.
![]({{file name='S&eacute;lection_013.png'}} ?w=650,h=292,border=true)

## Built-in Login Plugins

Login plugins are responsible for retrieving the user informations. It's usually a negotiation between the Nuxeo server and the client browser, but a SSO server may also be part of the process.

By default Nuxeo includes three login plugins:

*   HTTP Basic authentication,
*   Form based authentication,
*   Anonymous authentication.

Additional login plugins are available as addons.

When needed, the security filter will determine the right login plugin to use according to:

*   what the client browser can provide,
*   the server configuration (that can be server wide or specific for some URLs).

## Built-in `LoginModule` Plugins

The Nuxeo Platform uses extension points to define `LoginModule` plugins in order to avoid having to define several `LoginModules`.

By default there are two implementations of the `LoginModule` plugins:

*   one that checks Login/Password against the declared directories (SQL oer LDAP),
*   one that does not check the password and only checks that user exists and fetch user properties.
    This one is useful when Nuxeo is behind a portal or a SSO server and Nuxeo can not check any password.

## OAuth support

Since version 5.4.1, the Nuxeo Platform provides a built-in support for [OAuth](http://oauth.net/).
Please see the dedicated [OAuth Page]({{page page='using-oauth'}}) for more info.

## Available authentication modules

### {{> anchor 'modules'}} nuxeo-platform-login-cas2

> The [Central Authentication Service](http://en.wikipedia.org/wiki/Central_Authentication_Service) (CAS) is a [single sign-on](http://en.wikipedia.org/wiki/Single_sign-on) protocol for the [web](http://en.wikipedia.org/wiki/World_Wide_Web). Its purpose is to permit a user to access multiple applications while providing their credentials (such as user ID and password) only once. It also allows web applications to authenticate users without gaining access to a user's security credentials, such as a password. The name CAS also refers to a software package that implements this protocol.
> 
> _(extracted from Wikipedia)_

The `nuxeo-platform-login-cas2` defines an authentication plugin to validate the identity using the CAS server.
For further information, see [Using CAS2 Authentication]({{page space='nxdoc58' page='using-cas2-authentication'}}).

### `nuxeo-platform-login-mod_sso`

This plugin is used when Nuxeo is behind a reverse proxy that manages the authentication and simply transmits user information as a set of HTTP headers to Nuxeo.

This is typically the case when:

*   Client Certificate authentication is used (Apache does the certificate validation and only transmit a DN to Nuxeo),
*   a custom proxy-SSO is used.

### `nuxeo-platform-login-kerberos`

[This plugin](https://github.com/nuxeo/nuxeo-platform-login/tree/release-5.8/nuxeo-platform-login-kerberos) provides SPNEGO/Kerberos authentication for Nuxeo. Please read [this documentation]({{page page='using-kerberos'}}) to get started with this plugin.

### `nuxeo-platform-login-ntlm`

This plugin allows NTLM V1 challenge/response over HTTP.

This plugin does not support NTLM V2 over HTTP and for recent MS Windows auth integration, you should probably use `nuxeo-platform-login-kerberos`.

### `nuxeo-platform-login-portal-sso`

This plugin is used when the Nuxeo Platform is accessed via an external app (like a portal) that wants to access Nuxeo data in the name of a given user.

Because in most cases the external app does not know the password of the user, this plugin allow to define a shared secret between the app and the Nuxeo Platform so that the app can access Nuxeo as if it was a given user.

### `nuxeo-platform-login-shibboleth`

The Shibboleth&reg; System is a standards based, open source software package for web single sign-on across or within organizational boundaries. It allows sites to make informed authorization decisions for individual access of protected online resources in a privacy-preserving manner.

The `nuxeo-platform-login-shibboleth` bundle defines:

*   an authentication plugin to map the user metadata from HTTP headers,
*   a `NuxeoExceptionHandler` to force the login of an anonymous user trying to access a restricted resource,
*   ShibbGroups, virtual groups based on Shibboleth attributes manageable from the UI,
*   a hierarchical group suggestion widget for the access rights management tab.

For further information, see [Using Shibboleth]({{page page='using-shibboleth'}}).