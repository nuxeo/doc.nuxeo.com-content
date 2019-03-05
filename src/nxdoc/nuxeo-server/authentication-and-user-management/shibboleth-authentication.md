---
title: Shibboleth Authentication
review:
    comment: ''
    date: '2017-12-15'
    status: ok
labels:
    - lts2016-ok
    - shibboleth
    - authentication
    - link-update
    - shibboleth-component
    - fdavid
    - lts2017-ok
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Shibboleth+Authentication
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Shibboleth+Authentication'
    page_id: '3868827'
    shortlink: mwg7
    shortlink_source: 'https://doc.nuxeo.com/x/mwg7'
    source_link: /display/NXDOC/Shibboleth+Authentication
tree_item_index: 190
version_override:
    '6.0': 60/admindoc/using-shibboleth/
history:
    -
        author: Solen Guitter
        date: '2015-11-27 13:37'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2015-09-15 13:01'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-11-27 16:01'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-11-27 16:01'
        message: reorganize page and add screenshot
        version: '14'
    -
        author: Solen Guitter
        date: '2014-11-27 14:12'
        message: formatting
        version: '13'
    -
        author: Solen Guitter
        date: '2013-11-13 11:27'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2013-10-14 16:44'
        message: ''
        version: '11'
    -
        author: Arnaud Kervern
        date: '2013-09-13 14:34'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2013-08-02 21:08'
        message: Updated link to version 5.6 jar
        version: '9'
    -
        author: Solen Guitter
        date: '2013-06-20 15:10'
        message: Updated links to source code and fixed formatting
        version: '8'
    -
        author: Solen Guitter
        date: '2012-09-05 23:06'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Solen Guitter
        date: '2012-09-05 23:06'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: ''
        version: '5'
    -
        author: Thomas Roger
        date: '2010-12-24 11:39'
        message: ''
        version: '4'
    -
        author: Quentin Lamerand
        date: '2010-10-21 19:05'
        message: ''
        version: '3'
    -
        author: Quentin Lamerand
        date: '2010-10-21 16:54'
        message: ''
        version: '2'
    -
        author: Quentin Lamerand
        date: '2010-10-19 19:28'
        message: ''
        version: '1'

---
Shibboleth has two major halves: an identity provider (IdP), which authenticates users and releases selected information about them, and a service provider (SP) that accepts and processes the user data before making access control decisions or passing the information to protected applications. These entities trust each other to properly safeguard user data and sensitive resources.

Here is the process of authentication:

1.  The user accesses a protected resource.
2.  The SP determines an IdP and issues the authentication request.
3.  The user authenticates to the IdP.
4.  The IdP issues a response to the SP.
5.  The SP decodes the message and extracts the attributes.
6.  The browser is redirected to the protected resource.

For details, see [https://wiki.shibboleth.net/confluence/display/CONCEPT/FlowsAndConfig](https://wiki.shibboleth.net/confluence/display/CONCEPT/FlowsAndConfig).

## Overview

The SHIB_AUTH plug-in is implemented by the class [ShibbolethAuthenticationPlugin](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/platform/shibboleth/auth/ShibbolethAuthenticationPlugin.html). It authenticates the user based on HTTP headers received from the SP. It also creates (or updates) an entry in the userDirectory for this user.

As the Shibboleth attributes values are passed by HTTP headers, the service [ShibbolethAuthenticationService](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/platform/shibboleth/service/ShibbolethAuthenticationService.html) has been added to configure the mapping between the user metadata and the headers names.

### Shibboleth groups

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

ShibbGroups are virtual groups based on an EL expression with Shibboleth attributes. A new user management tab is added to create and edit them. The definitions are stored in the `shibbGroup` directory.

The class [ShibbolethGroupComputer](http://community.nuxeo.com/api/nuxeo/9.10/javadoc//org/nuxeo/ecm/platform/shibboleth/computedgroups/ShibbolethGroupComputer.html) computes at login time the ShibbGroups that the current user is member of.


## Installation

### Nuxeo Package Installation

The Shibboleth authentication module is available [as a packaged Nuxeo Addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/shibboleth-authentication) on the Nuxeo marketplace. It can be installed with [nuxeoctl command line]({{page page='installing-a-new-package-on-your-instance'}}#installing-a-package-using-the-nuxeoctl-script) or [from the Update Center]({{page page='installing-a-new-package-on-your-instance'}}#installing-a-package-from-the-admin-tab).

#### Shibboleth groups tab

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

After you installed the package, a new **Shib Goups** tab is available in the **Admin** > **Users & Groups** tab.

![]({{file name='shib-groups-tab.png'}} ?w=600,border=true)

### Manual Installation

1.  [Download the built nuxeo-platform-login-shibboleth.jar](https://maven.nuxeo.org/nexus/service/local/artifact/maven/redirect?r=public-releases&g=org.nuxeo.ecm.platform&a=nuxeo-platform-login-shibboleth&v=9.10&e=jar).
2.  Deploy it into your Tomcat or JBoss instance, in the `bundles` directory.
3.  Add a new file named `shibboleth-config.xml` in the `config/` directory of your server. This file defines the login and logout URLs, the mapping between the user metadata and the headers names.
    *   `$NUXEO/nxserver/config` for a Tomcat distribution
    *   `$NUXEO/server/default/deploy/nuxeo.ear/config` for a JBoss distribution

{{#> panel type='code' heading='shibboleth-config.xml'}}
```xml
<?xml version="1.0"?>
    <component name="org.nuxeo.ecm.platform.login.shibboleth.config">
    <extension
        target="org.nuxeo.ecm.platform.shibboleth.service.ShibbolethAuthenticationService"
        point="config">
        <config>
          <uidHeaders>
            <default>uid</default>
          </uidHeaders>

          <loginURL>https://host/Shibboleth.sso/WAYF</loginURL>
          <logoutURL>https://host/Shibboleth.sso/Logout</logoutURL>

          <fieldMapping header="uid">username</fieldMapping>
          <fieldMapping header="mail">email</fieldMapping>
        </config>
    </extension>
</component>
```
{{/panel}}

## Configuration

### Overriding the Default Authentication Chain

To enable the Shibboleth authentication, you need to add the Shibboleth plug-in to the authentication chain.

To override the default authentication chain in the Nuxeo Platform, add a new file named `authentication-chain-config.xml` in the `config/` directory of your server.

{{#> panel type='code' heading='authentication-chain-config.xml'}}
```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.your.authentication.chain.config">
  <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
  <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
    point="chain">
    <authenticationChain>
      <plugins>
        <plugin>BASIC_AUTH</plugin>
        <plugin>SHIB_AUTH</plugin>
        <plugin>FORM_AUTH</plugin>
        <plugin>WEBENGINE_FORM_AUTH</plugin>        
        <plugin>ANONYMOUS_AUTH</plugin>
        <plugin>WEBSERVICES_AUTH</plugin>
      </plugins>
    </authenticationChain>
  </extension>
</component>
```
{{/panel}}

**Note**: If you already defined your own authentication chain in any of your config or contrib files, you just need to add the `SHIB_AUTH` plug-in into your own chain.

### Anonymous Authentication Compatibility

As it is not possible to write access rules based on resource URLs with the Nuxeo Platform, Shibboleth [LazySession](https://wiki.shibboleth.net/confluence/display/SHIB2/NativeSPProtectContent) has to be enabled. By adding the ANONYMOUS_AUTH in the authentication chain, the Shibboleth login will only be asked when accessing a restricted resource.

For that, the [ShibbolethSecurityExceptionHandler](http://community.nuxeo.com/api/nuxeo/9.10/javadoc/org/nuxeo/ecm/platform/shibboleth/auth/exceptionhandling/ShibbolethSecurityExceptionHandler.html) will redirect to the login URL when a NuxeoSecurityException is thrown while the current user is anonymous.

To activate it, add a new file named `login-anonymous-config.xml` in the `config/` directory of your server.

{{#> panel type='code' heading='login-anonymous-config.xml'}}
```xml
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.platform.your.anonymous.user.config">
  <extension target="org.nuxeo.ecm.platform.usermanager.UserService"
    point="userManager">
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
{{/panel}}

### Full Sample Configuration File

Here is a sample configuration file containing everything you need to set up the Shibboleth authentication module:

```xml
<component name="sample.shibboleth.config">

  <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
  <require>org.nuxeo.ecm.platform.usermanager.UserManagerImpl</require>

  <extension
      target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
      point="chain">
    <authenticationChain>
      <plugins>
        <plugin>BASIC_AUTH</plugin>
        <plugin>SHIB_AUTH</plugin>
        <plugin>ANONYMOUS_AUTH</plugin>
      </plugins>
    </authenticationChain>
  </extension>

  <extension
    target="org.nuxeo.ecm.platform.shibboleth.service.ShibbolethAuthenticationService"
    point="config">
    <config>
      <uidHeaders>
        <default>uid</default>
      </uidHeaders>

      <loginURL>https://host/Shibboleth.sso/WAYF</loginURL>
      <logoutURL>https://host/Shibboleth.sso/Logout</logoutURL>

      <fieldMapping header="uid">username</fieldMapping>
      <fieldMapping header="mail">email</fieldMapping>
    </config>
  </extension>

  <!-- Add an Anonymous user -->
  <extension target="org.nuxeo.ecm.platform.usermanager.UserService"
    point="userManager">
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

## Source Code

The source code of the Shibboleth authentication module can be found as part of the [`nuxeo-platform-login` add-on on GitHub](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/login/).
