---
title: Using Shibboleth
review:
    comment: ''
    date: ''
    status: ok
labels:
    - shibboleth
    - authentication
toc: true
confluence:
    ajs-parent-page-id: '16810077'
    ajs-parent-page-title: 'Authentication, users and groups'
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Using+Shibboleth
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Using+Shibboleth'
    page_id: '16810067'
    shortlink: U4AAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/U4AAAQ'
    source_link: /display/ADMINDOC58/Using+Shibboleth
history:
    - 
        author: Solen Guitter
        date: '2013-11-13 11:26'
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
As the Shibboleth attributes values are passed by HTTP headers, the service `org.nuxeo.ecm.platform.shibboleth.service.ShibbolethAuthenticationService` has been added to configure the mapping between the user metadata and the headers names.

## Installation

### Module Installation

#### The Easy Way

The Shibboleth authentication module could be installed through the Marketplace with the [Shibboleth Authentication package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/shibboleth-authentication).
See&nbsp;the [Installing a New Package on Your Instance]({{page page='installing-a-new-package-on-your-instance'}}) page.

#### The Manual Way

You can also [download the built nuxeo-platform-login-shibboleth.jar](https://maven.nuxeo.org/nexus/service/local/artifact/maven/redirect?r=public-releases&g=org.nuxeo.ecm.platform&a=nuxeo-platform-login-shibboleth&v=5.6&e=jar), and deploy it into your Tomcat or JBoss instance, in the `bundles` directory.

If you did the installation by just deploying the `nuxeo-platform-login-shibboleth.jar` into your Nuxeo instance, you need to add a new configuration file to define the login and logout URLs, the mapping between the user metadata and the headers names.

Add a new file named `shibboleth-config.xml` in the `config/` directory of your server.

*   `$NUXEO/nxserver/config` for a Tomcat distribution
*   `$NUXEO/server/default/deploy/nuxeo.ear/config` for a JBoss distribution

{{#> panel type='code' heading='shibboleth-config.xml'}}

```html/xml
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

### Overriding the Default Authentication Chain

To enable the Shibboleth authentication, you need to add the Shibboleth plugin to the authentication chain.

To override the default authentication chain in Nuxeo DM, add a new file named `authentication-chain-config.xml` in the `config/` directory of your server.

{{#> panel type='code' heading='authentication-chain-config.xml'}}

```html/xml
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

If you already defined your own authentication chain in any of your config or contrib files, you just need to add the `SHIB_AUTH` plugin into your own chain.

### Anonymous Authentication Compatibility

As it is not possible to write access rules based on resource URLs with Nuxeo, Shibboleth [LazySession](https://spaces.internet2.edu/display/SHIB/LazySession) has to be enabled. By adding the ANONYMOUS_AUTH in the authentication chain, the Shibboleth login will only be asked when accessing a restricted resource.

For that, the `org.nuxeo.ecm.platform.shibboleth.auth.exceptionhandling.ShibbolethSecurityExceptionHandler` will redirect to the login URL when a NuxeoSecurityException is thrown while the current user is anonymous.

To activate it, add a new file named `login-anonymous-config.xml` in the `config/` directory of your server.

{{#> panel type='code' heading='login-anonymous-config.xml'}}

```html/xml
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

## Full Sample Configuration File

Here is a sample configuration file containing everything you need to set up the Shibboleth authentication module:

```html/xml
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

The source code of the Shibboleth authentication module can be found as part of the [`nuxeo-platform-login` addon on GitHub](https://github.com/nuxeo/nuxeo-platform-login)

## ShibbGroups Addon

ShibbGroups are virtual groups based on an EL expression with Shibboleth attributes. A new user management tab is added to create and edit them. The definitions are stored in the `shibbGroup` directory.

The class `org.nuxeo.ecm.platform.shibboleth.computedgroups.ShibbolethGroupComputer` computes at login time the ShibbGroups that the current user is member of.

The source code of this addon can be found [on GitHub](https://github.com/nuxeo/nuxeo-platform-shibboleth-groups-web).