---
title: Trust Store and Key Store Configuration
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - todo
    - certificate
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950296'
    ajs-parent-page-title: SOAP Bridge
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Trust+Store+and+Key+Store+Configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Trust+Store+and+Key+Store+Configuration'
    page_id: '11534854'
    shortlink: BgKw
    shortlink_source: 'https://doc.nuxeo.com/x/BgKw'
    source_link: /display/NXDOC/Trust+Store+and+Key+Store+Configuration
tree_item_index: 300
history:
    - 
        author: Manon Lumeau
        date: '2016-04-15 12:47'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-12-04 15:39'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-09-28 18:04'
        message: Migrated to Confluence 4.0
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-09-28 18:04'
        message: ''
        version: '1'

---
## Introduction

When you make Nuxeo discuss with other servers through different APIs, you need to add the authentication certificate and your trust store because:

*   Establishing connection requires to expose the certificate to the remote server,
*   the remote server exposes a self-signed certificate or a certificate signed by a certification authority not known by the standard Key Store.

When your Nuxeo server establishes a remote connection, the remote server exposes a certificate that is his ID card on the network so the Nuxeo server is assured to communicate with a trusted server. Instead passing through detector to trust it, this certificate has been signed by an authority of certification. The trust store contains all certificates of the authorities that will be trusted by the JVM, especially for SSL connections and more particularly HTTPS connections.

The Key Store will contains all the keys needed by the JVM to be authenticated to a remote server.

There are 2 ways to configure these:

*   setting the Trust Store and the Key Store statically
*   setting it dynamically

{{#> callout type='note' }}

If you set a custom trust store with your authorities exclusively, **Marketplace, Studio and hot fix distribution integration will not work anymore** since these servers expose certificates available in the default trust store. So I suggest that you [add your certificates to the default one](#addingcertificatestodefaulttruststore).

{{/callout}}

## {{> anchor 'statictruststore'}}Static Trust Store and Key Store

To set the trust store and key store statically, you just have to add the following parameter into the environment variable:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

What for

</th><th colspan="1">

Parameter name

</th><th colspan="1">

Comment

</th></tr><tr><td colspan="1">

Trust Store Path

</td><td colspan="1">

`javax.net.ssl.trustStore`

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Trust Store Password

</td><td colspan="1">

`javax.net.ssl.trustStorePassword`

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Trust Store Type

</td><td colspan="1">

`javax.net.ssl.keyStoreType`

</td><td colspan="1">

JKS for instance

</td></tr><tr><td colspan="1">

Key Store Path

</td><td colspan="1">

`javax.net.ssl.keyStore`

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Key Store Password

</td><td colspan="1">

`javax.net.ssl.keyStorePassword`

</td><td colspan="1">

&nbsp;

</td></tr></tbody></table></div>

So if you want to set them at start time, you can add the following parameter either:

*   into your `JAVA_OPTS`:

    {{#> panel type='code' heading='$NUXEO_HOME/bin/nuxeo.conf'}}

    ```
    -Djavax.net.ssl.trustStore=/the/path/to/your/trust/store.jks -Djavax.net.ssl.keyStoreType=jks ... etc ...

    ```

    {{/panel}}
*   or into your Java code:

    {{#> panel type='code' heading='MyClass.java'}}

    ```
    System.setProperty(
            "javax.net.ssl.trustStore",
            "/the/path/to/your/trust/store.jks");
    System.setProperty(
            "javax.net.ssl.keyStore",
            "/the/path/to/your/key/store.jks");
    System.setProperty("javax.net.ssl.keyStorePassword", "myPassword");
    ...etc...

    ```

    {{/panel}}

## {{> anchor 'dynamictruststore'}}Dynamic Trust Store

...TODO...

## {{> anchor 'addingcertificatestodefaulttruststore'}}Adding Your Certificates into the Default Trust Store

You will find the default trust store delivered with your JVM in:
```
$JAVA_HOME/lib/security/cacerts
```
For instance in Mac OS, it is in:
```
/System/Library/Frameworks/JavaVM.framework/Home/lib/security/cacerts
```

By default the password for this Trust Store is "changeit".

So to add your certificates to the default trust store:

1.  Copy the default trust store.
2.  Launch the following command line to add your certificate to the default trust store copy:
    ```
    keytool -import -file /path/to/your/certificate.pem -alias NameYouWantToGiveOfYourCertificate -keystore /path/to/the/copy/of/the/default/truststore.jks -storepass changeit
    ```

3.  Set the trust store copy as your either [statically](#statictruststore) or [dynamically](#dynamictruststore).
4.  Restart your Nuxeo instance.

## Troubles

If your Nuxeo instance cannot access to Connect anymore, the Marketplace and Hot Fixes are no longer automatically available (through the Update Center for instance), this can mean that the trust store does not contain the certificates from the authority that signed Nuxeo Servers certificates.

If you have the following error in your logs during the connection establishment:

```
sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target

```

It means that the remote certificate is not trusted.

The following messages mean there is no trust store or key store set for your JVM:

```
java.lang.RuntimeException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty

```

or

```
java.security.NoSuchAlgorithmException: Error constructing implementation (algorithm: Default, provider: SunJSSE, class: com.sun.net.ssl.internal.ssl.DefaultSSLContextImpl)

```

This means you must have broken at least the default configuration.

If you have one of the following error, the remote server has been trusted but it asks for authentication and there is no key for that:

```
Received fatal alert: handshake_failure

```

or

```
Remote host closed connection during handshake

```

The following error can mean that the set key store is not available:

```
java.security.NoSuchAlgorithmException: Error constructing implementation (algorithm: Default, provider: SunJSSE, class: com.sun.net.ssl.internal.ssl.DefaultSSLContextImpl)

```
