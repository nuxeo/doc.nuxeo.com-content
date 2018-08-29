---
title: Trust Store and Key Store Configuration
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - content-review-lts2016
    - todo
    - certificate
    - fguillaume
    - lts2017-ok
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

When Nuxeo communicates with other servers through network APIs, you may want these communications to be secured. To do so, you may need to add authentication certificates to your key store (all the certificates known to the JVM) and trust store (all the certificates that the JVM trusts) because:

- the remote server may present a certificate signed by a certification authority (or a self-signed certificate) not known by the standard Java trust store (`trustStore`),
- establishing a connection may require (depending on the remote server configuration) to present a local certificate to the remote server, so that it knows the Nuxeo server is legitimate (`keyStore`).


The Key Store will contain all the keys needed by the JVM to be authenticated to a remote server.

{{#> callout type='note' }}

If you set a custom trust store exclusively with your authorities, **Marketplace, Studio and hot fix distribution integration will not work anymore** since these servers expose certificates available in the default trust store. So we suggest that you [add your certificates to the default trust store](#addingcertificatestodefaulttruststore).

{{/callout}}

## {{> anchor 'statictruststore'}}Static Trust Store and Key Store

To set up the trust store and key store statically, you just have to add the following system properties to Java:

| What for             | Parameter name                     | Comment          |
| -------------------- | ---------------------------------- | ---------------- |
| Trust Store Path     | `javax.net.ssl.trustStore`         |                  |
| Trust Store Password | `javax.net.ssl.trustStorePassword` |                  |
| Trust Store Type     | `javax.net.ssl.trustStoreType`     | JKS for instance |
| Key Store Path       | `javax.net.ssl.keyStore`           |                  |
| Key Store Password   | `javax.net.ssl.keyStorePassword`   |                  |
| Key Store Type       | `javax.net.ssl.keyStoreType`       |     &nbsp;       |

For instance you can add the following parameters to your `JAVA_OPTS`:

{{#> panel type='code' heading='$NUXEO_HOME/bin/nuxeo.conf'}}
</br>
**`trustStore`**
```
JAVA_OPTS=$JAVA_OPTS -Djavax.net.ssl.trustStore=/the/path/to/your/trust-store.jks -Djavax.net.ssl.trustStoreType=jks -Djavax.net.ssl.trustStorePassword=secret
```
{{/panel}}

**`keyStore`**
```
JAVA_OPTS=$JAVA_OPTS -Djavax.net.ssl.keyStore=/the/path/to/your/key-store.jks -Djavax.net.ssl.keyStoreType=jks -Djavax.net.ssl.keyStorePassword=secret
```

## {{> anchor 'addingcertificatestodefaulttruststore'}}Adding Your Certificates into the Default Trust Store

You will find the default trust store shipped with your JVM in:
```
$JAVA_HOME/lib/security/cacerts
```
For instance on macOS, it could be:
```
/Library/Java/JavaVirtualMachines/jdk1.8.0_152.jdk/Contents/Home/jre/lib/security/cacerts
```

By default, the password for this Trust Store is "changeit".

To add your certificates to the default trust store:

1.  Copy the default trust store.
2.  Launch the following command line to add your certificate to the default trust store copy:
    ```
    keytool -import -file /path/to/your/certificate.pem -alias NameYouWantToGiveOfYourCertificate -keystore /path/to/the/copy/of/the/default/truststore.jks -storepass changeit
    ```

3.  Set the trust store copy as your [statically](#statictruststore).
4.  Restart your Nuxeo instance.

## Troubles

If your Nuxeo instance cannot access Connect anymore, or the Marketplace and Hot Fixes are no longer automatically available (through the Update Center for instance), this can mean that the trust store does not contain the certificates from the authority that signed the Nuxeo Servers certificates.

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
