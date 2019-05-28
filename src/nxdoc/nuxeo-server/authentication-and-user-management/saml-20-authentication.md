---
title: SAML 2.0 Authentication
description: The Nuxeo SAML 2.0 addon allows setting up Nuxeo as a Service Provider and supports WebSSO thus relying on an external SAML Identity Provider (IdP) for authentication.
review:
    comment: ''
    date: '2016-12-09'
    status: ok
labels:
    - lts2016-ok
    - saml-component
    - migration-sample
    - authentication
    - dmetzler
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: SAML+2.0+Authentication
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/SAML+2.0+Authentication'
    page_id: '23364928'
    shortlink: QIVkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/QIVkAQ'
    source_link: /display/NXDOC/SAML+2.0+Authentication
tree_item_index: 150
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 14:40'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2016-04-25 14:26'
        message: ''
        version: '19'
    -
        author: Alain Escaffre
        date: '2016-04-14 13:51'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-03-30 14:29'
        message: Move how-to steps first
        version: '17'
    -
        author: Solen Guitter
        date: '2016-03-30 14:14'
        message: Fix steps format and typos.
        version: '16'
    -
        author: Frédéric Vadon
        date: '2016-03-29 16:14'
        message: Change order of bullet as the plugin has to be configured first
        version: '15'
    -
        author: Frédéric Vadon
        date: '2016-03-29 15:38'
        message: typo
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-03-29 15:01'
        message: ''
        version: '13'
    -
        author: Damien Metzler
        date: '2016-03-01 08:41'
        message: Fix broken links
        version: '12'
    -
        author: Alain Escaffre
        date: '2015-09-15 12:54'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2015-09-15 12:47'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2015-09-15 12:43'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2015-09-15 11:59'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2015-06-19 13:07'
        message: ''
        version: '7'
    -
        author: Antoine Taillefer
        date: '2015-06-19 10:08'
        message: ''
        version: '6'
    -
        author: Nelson Silva
        date: '2015-05-18 11:44'
        message: ''
        version: '5'
    -
        author: Nelson Silva
        date: '2015-05-18 08:33'
        message: ''
        version: '4'
    -
        author: Nelson Silva
        date: '2015-05-15 15:08'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-01-22 09:13'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2015-01-21 14:08'
        message: ''
        version: '1'

---
## Integrating the Nuxeo Platform with a SAML 2.0 IdP

The [Nuxeo SAML 2.0 addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/saml2-authentication) allows setting up Nuxeo as a Service Provider and supports WebSSO thus relying on an external SAML Identity Provider (IdP) for authentication. It has been successfully tested so far with Okta, OneLogin, Ping One, SSOCircle, Google, OIF and ADFS. If you are not familiar with SAML you can read our [Background on SAML 2.0](#saml20_presentation) section below.

1.  [Install the SAML2.0 Authentication addon]({{page page='installing-a-new-package-on-your-instance'}}) available from the Nuxeo Marketplace.
1.  Retrieve your IdP SAML metadata configuration file. This file stores SAML configuration like supported bindings, endpoints, certificates, etc., that are used by our SAML plugin to configure your IdP. Some IdP make this metadata available in a URL which you can also reference directly in the next step.
1.  Contribute ([in a Studio project]({{page page='how-to-contribute-to-an-extension'}}), or in the `nxserver/config` folder) a new authentication plugin that makes use of the `org.nuxeo.ecm.platform.auth.saml.SAMLAuthenticationProvider`, with a reference to the XML Metadata for IdP specific configuration. Ex:

    ```xml
    <component name="org.nuxeo.ecm.platform.login.saml.auth">
      <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
      <require>org.nuxeo.ecm.platform.ui.web.auth.defaultConfig</require>
      <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
               point="authenticators">
        <authenticationPlugin name="SAML_AUTH" enabled="true"
                              class="org.nuxeo.ecm.platform.auth.saml.SAMLAuthenticationProvider">
          <loginModulePlugin>Trusting_LM</loginModulePlugin>
          <!-- Setting needStartingURLSaving
            - to true: user will be redirected to the URL initially asked for after authentication.
            - to false: user will always be redirected to the home page after authentication. -->
          <needStartingURLSaving>true</needStartingURLSaving>
          <parameters>
            <!-- Make sure to use a unique name, especially if you have several identity providers -->
            <parameter name="name">MyIdP</parameter>
            <!-- The IdP's icon will only be shown if SAML auth is displayed
            as an alternative login option in the login form. -->
            <!-- <parameter name="icon">nxserver/nuxeo.war/img/idpIcon.png</parameter> -->
            <!-- The metadata parameter can either be a URL or a path to a static file -->
            <parameter name="metadata">nxserver/config/metadata-idp.xml</parameter>
          </parameters>
        </authenticationPlugin>
      </extension>
    </component>
    ```

    You can find more examples here: [https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/login/nuxeo-platform-login-saml2/sample](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/login/nuxeo-platform-login-saml2/sample).  
    {{#> callout type='warning' }}</br>
    Read-only repositories (for instance LDAP) require `userResolverCreateIfNeeded` and `userResolverUpdate` to be set to **false**:
    ```xml
    <component name="org.nuxeo.ecm.platform.login.saml.auth">
        <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
        <require>org.nuxeo.ecm.platform.ui.web.auth.defaultConfig</require>
        <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
                point="authenticators">
            <authenticationPlugin name="SAML_AUTH" enabled="true"
                                class="org.nuxeo.ecm.platform.auth.saml.SAMLAuthenticationProvider">
            <loginModulePlugin>Trusting_LM</loginModulePlugin>
            <needStartingURLSaving>true</needStartingURLSaving>
            <parameters>
                <parameter name="name">MyIdP</parameter>
                <parameter name="metadata">nxserver/config/metadata-idp.xml</parameter>
                <parameter name="userResolverCreateIfNeeded">false</parameter>
                <parameter name="userResolverUpdate">false</parameter>
            </parameters>
            </authenticationPlugin>
        </extension>
    </component>
    ```
    {{/callout}}

1.  Configure the user attributes mapping for your identity provider's response. Either add a [XML contribution]({{page page='how-to-contribute-to-an-extension'}}) into your Studio project or in the previous XML component. This mapping configuration can be achieved by providing a JavaScript or Groovy script. A sample is provided below using JavaScript code.

    ```xml
    <extension
      target="org.nuxeo.usermapper.service.UserMapperComponent"
      point="mapper">
      <mapper name="saml" type="js">
        <mapperScript>
          searchAttributes.put("username", userObject.getNameID().getValue());
          userAttributes.put("email", userObject.getNameID().getValue());
        </mapperScript>
      </mapper>
    </extension>
    ```

1.  Use this new authentication plugin in the authentication chain, by [contributing its definition]({{page page='how-to-contribute-to-an-extension'}}) from your Studio project (or in the previous XML component).

    ```xml
    <extension
      target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
      point="chain">
      <authenticationChain>
        <plugins>
          <plugin>BASIC_AUTH</plugin>
            <!-- Optionally, add the FORM_AUTH
            if you want to see the SAML authentication appear
            as an alternative option on the login form.
            In this case, make sure to fill in the icon's path
            in the authentication plugin parameters.
            -->
            <!-- <plugin>FORM_AUTH</plugin> -->
          <plugin>SAML_AUTH</plugin>
        </plugins>
      </authenticationChain>
    </extension>
    ```

1.  Configure your Identity Provider:
    1.  Map user email to NameID metadata (check documentation of your IdP for doing so).
    2.  Declare your Nuxeo Platform server as a Service Provider:
        *   Either by uploading the generated XML metadata file available at `http://NUXEO_SERVER/nuxeo/saml/metadata`.
        *   Or by configuring it manually on the IdP. In that case, you should use as the SAML consumer endpoints:
            - `http://<nuxeo_url>/nuxeo/nxstartup.faces` if you have the JSF UI (or both UIs)
            - `http://<nuxeo_url>/nuxeo/ui` if you are using the web UI alone
1.  Optionally generate a keystore for enabling encryption. If you want to enable signing and/or encryption (not mandatory with some IdP) you have to generate a keystore and add the proper configuration to `nxserver/config` (ex: `saml-keystore-config.xml`):

    ```xml
    <component name="org.nuxeo.ecm.platform.auth.saml.key.contrib">

      <extension target="org.nuxeo.ecm.platform.auth.saml.key.KeyManager"
                 point="configuration">
        <configuration>
          <keystoreFilePath>nxserver/data/samlKeystore.jks</keystoreFilePath>
          <keystorePassword>password</keystorePassword>
          <passwords>
            <password key="saml">changeit</password>
          </passwords>
          <signingKey>saml</signingKey>
          <encryptionKey>saml</encryptionKey>
        </configuration>
      </extension>

    </component>
    ```

    To generate the keystore you can use keytool:

    ```bash
    keytool -genkeypair -keystore samlKeystore.jks -alias saml -keypass changeit -dname 'CN=Nuxeo O=Nuxeo' -storepass password
    ```

    If you have an existing certificate that you wish to use you should be able to import it using the keytool as well:

    ```bash
    keytool -import -alias foo -file certfile.cer -keystore publicKey.store
    ```

    You can find other use cases and more extensive documentation about keytool [here](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/keytool.html).

    After having set up the Java KeyStore and updating the SAML keystore configuration with the proper aliases(key) and passwords the metadata generated at `http://NUXEO_SERVER/nuxeo/saml/metadata` should include the correct X509 certificate data.

## Sources

Sources of the addon can can be found at [https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/login/nuxeo-platform-login-saml2/](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/login/nuxeo-platform-login-saml2/).

You need to build the JAR and follow the sample at [https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/login/nuxeo-platform-login-saml2/sample](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/login/nuxeo-platform-login-saml2//sample).

## {{> anchor 'saml20_presentation'}}Background on SAML 2.0

Security Assertion Markup Language (SAML) 2.0 is an XML-based protocol that uses security tokens containing assertions to pass information about a user between a SAML authority, known as the identity provider (IdP), and a SAML consumer, the service provider (SP).

SAML 2.0 has a very broad scope with a large number of supported profiles but its primary use case is single sign-on which is specified in the Web Browser SSO Profile.

When a web user tries to access a resource at a service provider they are redirected for authentication with the identity provider. This identity provider produces an authentication assertion, and the service provider consumes the assertion to establish a security context for the web user.

The specification of these assertions and of the request-response protocol messages themselves is independent of the underlying communications and messaging protocols. The mapping between these two is known in SAML as a 'binding'.

SAML 2.0 has defined several binding options: HTTP redirect, HTTP POST, HTTP artifact, and SOAP. For Web Browser SSO, the HTTP Redirect Binding and the HTTP POST Binding are commonly used.

![SAML Web SSO Sequence]({{file name='saml.png'}} ?border=true 'SAML Web SSO Sequence')

For a detailed presentation of SAML V2.0, you should read the [SAML V2.0 Specification](https://wiki.oasis-open.org/security/FrontPage#SAML_V2.0_Standard).
