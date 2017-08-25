---
title: SAML 2.0 Authentication
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - saml-component
toc: true
tree_item_index: 708
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: SAML+2.0+Authentication
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/SAML+2.0+Authentication'
    page_id: '28475794'
    shortlink: koGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/koGyAQ'
    source_link: /display/NXDOC710/SAML+2.0+Authentication
history:
    -
        author: Solen Guitter
        date: '2016-03-30 14:59'
        message: 'ove how-to steps first, fix steps order, fix typos and forma'
        version: '13'
    -
        author: Damien Metzler
        date: '2016-03-01 08:42'
        message: ''
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
## Integrating Nuxeo Platform with a SAML 2.0 IdP

{{! excerpt}}

The [Nuxeo SAML 2.0 addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/saml2-authentication) allows setting up Nuxeo as a Service Provider and supports WebSSO thus relying on an external SAML Identity Provider (IdP) for authentication.&nbsp;If you are no familiar with SAML IdP, read the section [SAML2.0_presentation]({{page page='saml20_presentation'}}) below.

1.  [Install the SAML2.0 Authentication addon]({{page space='admindoc710' page='installing-a-new-package-on-your-instance'}}) from the Nuxeo Marketplace.
2.  Retrieve your IdP SAML metadata configuration file. This file stores SAML configuration like supported bindings, endpoints, certificates, etc., that are used by our SAML plugin to configure you IdP. Some IdP make this metadata available in a URL which you can also reference directly in the next step.
3.  Contribute ([in a Studio project]({{page page='how-to-contribute-to-an-extension'}}), or in the nxserver/config folder) a new authentication plugin that makes use of the `org.nuxeo.ecm.platform.auth.saml.SAMLAuthenticationProvider`, with a reference to the XML Metadata for specific configuration. Ex:

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
                </parameters>
            </authenticationPlugin>
        </extension>
    </component>
    ```

    You can find more example here: [https://github.com/nuxeo/nuxeo-platform-login/tree/release-7.10/nuxeo-platform-login-saml2/sample](https://github.com/nuxeo/nuxeo-platform-login/tree/release-7.10/nuxeo-platform-login-saml2/sample).

4.  Use this new authentication plugin in the authentication chain, by contributing its definition from your studio project (or in the previous XML component).

    ```xml
      <extension
                target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
                point="chain">
            <authenticationChain>
                <plugins>
                    <plugin>BASIC_AUTH</plugin>
                    <plugin>SAML_AUTH</plugin>
                </plugins>
            </authenticationChain>
        </extension>
    ```

5.  Configure your Identity Provider:

    1.  Map user email to NameID metadata (check documentation of your IdP for doing so).
    2.  Declare your Nuxeo Platform server as a Service Provider:
        *   Either by uploading the XML metadata file provided at `http://NUXEO_SERVER/nuxeo/saml/metadata`.
        *   Or by configuring it manually on the IdP (in that case, you should use `http://<nuxeo_url>/nuxeo/nxstartup.faces` as the SAML consumer endpoints).
6.  Optionally generate a keystore for enabling encryption. If you want to enable signing and/or encryption (not mandatory with some IdP) you have to generate a keystore and add the proper configuration to `nxserver/config` (ex: `saml-keystore-config.xml`):

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

    You can find other use cases and more extensive documentation about keytool&nbsp;[here](http://docs.oracle.com/javase/7/docs/technotes/tools/windows/keytool.html).

    After having set up the Java KeyStore and updating the SAML keystore configuration with the proper aliases(key) and passwords the metadata generated at `http://NUXEO_SERVER/nuxeo/saml/metadata` should include the correct X509 certificate data.

{{! /excerpt}}

&nbsp;

## Sources

Sources of the addon can can be found at &nbsp;[https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/nuxeo-platform-login-saml2](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/nuxeo-platform-login-saml2).

You need to build the JAR and follow the sample at &nbsp;[https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/nuxeo-platform-login-saml2/sample](https://github.com/nuxeo/nuxeo/tree/master/nuxeo-services/nuxeo-platform-login-saml2/sample).

## {{> anchor 'saml20_presentation'}}Background on SAML 2.0

Security Assertion Markup Language (SAML) 2.0&nbsp;is an XML-based protocol that uses security tokens containing assertions to pass information about a user between a SAML authority, known as the identity provider (IdP), and a SAML consumer, the service provider (SP).

SAML 2.0 has a very broad scope with a large&nbsp;number of supported profiles but its primary use case is single sign-on which is specified in the Web Browser SSO Profile.

When a web user tries to access a resource at a service provider they are redirected for authentication with the identity provider. The identity provider produces an authentication assertion, and the service provider consumes the assertion to establish a security context for the web user

The specification of these assertions and of the request-response protocol messages themselves is independent of the&nbsp;underlying communications and messaging protocols. The mapping between these two is known in SAML as a 'binding'.

SAML 2.0 has defined several binding options: HTTP redirect, HTTP POST, HTTP artifact, and SOAP.&nbsp;For Web Browser SSO, the HTTP Redirect Binding and the HTTP POST Binding are commonly used.

![SAML Web SSO Sequence]({{file name='saml.png'}} ?border=true 'SAML Web SSO Sequence')

For a detailed presentation of SAML V2.0, you should read the&nbsp;[SAML V2.0 Specification](https://wiki.oasis-open.org/security/FrontPage#SAML_V2.0_Standard).
