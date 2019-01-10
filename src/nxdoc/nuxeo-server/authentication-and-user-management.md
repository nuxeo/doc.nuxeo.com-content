---
title: Authentication and User Management
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - authentication
    - directory-component
    - oauth-component
    - saml-component
    - user-profile-component
    - cas-authentication-component
    - token-based-authentication-component
    - kerberos-authentication-component
    - authentication-component
    - migration-sample
toc: true
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2016-08-30 09:44'
        message: dd details on section SSO with Portal
        version: '23'
    -
        author: Manon Lumeau
        date: '2016-06-09 16:30'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2016-03-30 09:44'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2016-02-11 16:30'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
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
        message: 'Fix TOC style in Install & Config tab'
        version: '14'
    -
        author: Solen Guitter
        date: '2015-10-02 13:05'
        message: 'Shorter titles in install&config tab'
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
## Functional Overview

### Default Authentication Mode - Login Page

By default user gets authenticated on the Nuxeo Platform by filling username / password on the login page. That information is checked against the one stored in database, or transmitted to the configured identity provider. If the username or the password is invalid, a message is sent to the user. Default password of user Administrator is Administrator, if you didn't change anything. Password of each user can be changed either by the user himself, or by the administrators in the Admin Center. The password complexity is checked against a regexp that can be changed.

![]({{file name='Screen Shot 2015-09-21 at 13.53.42.png'}} ?w=600,border=true)

### Other Authentication Protocols

The login page is not the only way to authenticate a user against the Nuxeo Platform. Some other protocols can be used, sometimes requiring to install an additional module (See related pages):

*   [Basic authentication]({{page page='using-basic-http-authentication'}}) (built-in)
*   Token (Nuxeo Platform proprietary) (built-in)
*   [oAuth2]({{page page='using-oauth2'}}) (built-in)
*   [SAML2]({{page page='saml-20-authentication'}}) (Addon)
*   [2 Steps]({{page page='nuxeo-duoweb-two-factor-authentication'}}), with SMS for instance (Addon)
*   Trusted (for instance requests coming from that particular IP address do not need to validate authentication) (built-in)
*   [Open ID]({{page page='using-openid-oauth2-in-login-screen'}}) (Addon)
*   [Kerberos]({{page version='' space='nxdoc' page='kerberos-authentication'}}) (built-in)
*   [CAS / CAS2]({{page page='using-cas2-authentication'}}) (built-in)
*   [NTLM]({{page version='' space='nxdoc' page='NTLM-and-IE-Challenge-Response'}}) (built-in)
*   Redirecting to a [remote identity management solution](#compatible-idm-solutions) then having the user fall back authenticated to the Nuxeo Platform (SSO servers, Open Id, Portals, ...) (built-in or addon, depending on the case).

Thanks to the pluggability of the authentication layer (see the Implementation section), it is easy to write a custom authentication protocol when necessary.

### Compatible IdM Solutions

Default configuration checks identity against a Java implementation inside the Nuxeo Platform. By configuration and addition of some modules, and following the above list of supported protocols, the Nuxeo Platform can be integrated with various identity providers:

*   [LDAP server]({{page version='' space='nxdoc' page='using-a-ldap-directory'}})
*   [Active Directory server]({{page version='' space='nxdoc' page='using-a-ldap-directory'}})
*   [OpenID compatible web platforms]({{page version='' space='nxdoc' page='using-openid-oauth2-in-login-screen'}}): Google, Twitter, Facebook, GitHub, ...
*   [SAML compatible identity Management solutions]({{page version='' space='nxdoc' page='saml-20-authentication'}}), on premise or SAAS, such as One Login, ClearTrust, ...
*   [Kerberos compatible identity providers]({{page version='' space='nxdoc' page='kerberos-authentication'}})
*   [Shibboleth Servers]({{page page='shibboleth-authentication'}}) (Federated identity management)
*   [SSO Servers]({{page page='using-sso-portals'}}) (ex: CAS Server, Site Minder)

### Unauthenticated Access

#### Anonymous User

A configuration allows to have the user automatically logged in as a user called "anonymous", for which some specific permissions have been set. The name of that user is configurable, and allows to simulate an "unauthenticated" access to the Nuxeo Platform. The users having the Manage permission on a repository can reference that anonymous user as any other user and declare some folders and documents accessible to everybody.

See the page [Anonymous Authentication]({{page page='using-anonymous-authentication'}}).

#### Unauthenticated URLs

It is also possible to [define a list of URL patterns](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--openUrl) for which no authentication is required (so not using the anonymous user either). That way you can say that a specific website generated by the platform is available without authentication while the other pages served by the platform sends the user to the login page. When browsing those URLs, no principal is created, which means no access to the repository can be done.

### User and Groups Provisioning

#### Storage Options for Users and Groups

The UserManager is the component in charge of managing users and groups. The default implementation stores them in the Nuxeo Platform via the "directory" abstraction: one directory for users and one for groups.

{{! multiexcerpt name='directories_implementations'}}

Directories can use either:

*   An SQL implementation (thus storing users and groups on the underlying RDBMS)
*   An LDAP implementation
*   A Nuxeo Platform repository implementation (Users and Groups are then "documents") (not production-ready).
*   A custom implementation for calling remote webservice is also sometimes used.

{{! /multiexcerpt}}

It is possible to reference a meta-directory that would be the result of the merge of several directories, a mix of different implementations (LDAP, SQL...) and different hosts. For instance part of the users can be handled in the corporate LDAP server, and part in the Nuxeo Platform database. This situation is referenced as [multidirectory]({{page page='how-to-configure-a-multidirectory-for-users-and-groups'}}) in the documentation.

#### Features Available around Users and Groups Management

When users are dealt through directory abstraction (so 90% of the cases), the Nuxeo Platform provides user interfaces (and REST APIs) for handling:

*   User CRUD by administrators
*   User password management by administrator
*   Groups CRUD and assignment by administrator (including management of sub-groups)
*   User profile management by the user
*   Password management by the user
*   User and groups search (for filling a metadata, assigning an ACL, selecting a specific user in a search filter,...)
*   User invitation: A Nuxeo addon adds to default Nuxeo Platform UI and services for inviting by email a future user that would not have yet an account in the platform

For more information, please see [Managing users and groups]({{page space='userdoc' page='managing-users-and-groups'}}).

#### Virtual Users

It is also possible to declare a set of "virtual" users, that are defined in the application although they don't exist on the user directory the instance is plugged to.

### User Profile

A set of properties is stored by default for any user in the Nuxeo Platform:

*   username
*   first name
*   last name
*   company
*   email

Those properties can come from the IdM the Nuxeo Platform is integrated to. To extend the list of available fields for a user, see the page [How to add New Fields to The User Profile or Group Profile]({{page page='how-to-add-new-fields-to-the-user-profile-or-group-profile'}}).

## Authentication Schemes Use

{{! multiexcerpt name='authentication-install-configuration'}}

You may want to use other authentication protocols and / or identity providers than LDAP/Active Directory. Most of the time, an "authentication plugin" has to be configured. The Nuxeo Platform provides some by default, but you sometimes have to install a specific addon.

**In any case**, you have to configure the "authentication chain".

{{! multiexcerpt name='authentication_chain_contribution'}}
[Contribute an XML extension]({{page page='how-to-contribute-to-an-extension'}}) from the following content. Adapt the `authenticationChain` element content with the list of plugins you want to use.
  ```xml
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
  ```
{{! /multiexcerpt}}

The Nuxeo Platform will use the plugins in the order they are chained. First attempt for each plugin will be to retrieve credentials (see implementation for a better understanding). If no credential is found, it will try to call the `showLoginPrompt` method for each of the plugin up until one is successful.

All the available authentication plugins and instructions for installation or links to their documentation are listed in below dedicated pages.
{{! /multiexcerpt}}

## Customization

### Customizing the Login Page

You can customize the login page using[ Nuxeo Studio ]({{page space='studio' page='branding'}}#login-page-tab)(background picture, colors, logo).

### Integrating with a Webservice Based Identify Provider

You can build a custom directory that will wrap your webservice.

You can use [the Nuxeo directory connector sample](https://github.com/tiry/nuxeo-directory-connector) as a starting point.

<div class="row" data-equalizer data-equalize-on="medium">

<div class="column medium-6">

{{#> panel heading='Related Documentation'}}
- [Form-Based Authentication]({{page page='using-form-based-authentication'}})
- [Basic HTTP Authentication]({{page page='using-basic-http-authentication'}})
- [LDAP and Active Directory]({{page page='using-a-ldap-directory'}})
{{/panel}}

</div>

</div>
