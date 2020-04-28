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
tree_item_index: 1350
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

Communications between a client and a server can be secured using TLS/SSL (TLS is the new version of the standard that was previously called SSL, but the term SSL is still wildly used). This security includes encryption, authentication of the server by the client, and optionally authentication of the client by the server.

In Nuxeo, the kinds of communications that can be secured in this manner depend on the services used. Among them one can find:
- remote HTTPS servers with which Nuxeo needs to communicate (for example Nuxeo Online Services)
- connection to Elasticsearch
- connection to MongoDB
- connection to Redis
- etc.

Each time a connection is made to a remote server using SSL, the remote server's certificate is checked against the **Trust Store** of the client. The Trust Store contains a list of known certificates for various certification authorities. During authentication, the remote server presents a certificate signed by a certification authority (or a self-signed certificate) known by the Trust Store.

Optionally, the server can request that the client authenticate itself to the server by providing a client certificate. The **Key Store** contains the private keys for the certificates that the client can provide to the server upon request.

The JVM contains a default Trust Store that contains standard well-known certificates. This can be replaced globally by a custom Trust Store using Java system properties. And for Nuxeo services that have the capability, a specific Trust Store and Key Store can be used for this specific service.

## {{> anchor 'defaulttruststore'}}Default Trust Store

The JVM contains a default Trust Store in:
```
$JAVA_HOME/lib/security/cacerts
```
This Trust Store contains all the certificates of well-known certification authorities. By default, the password for this Trust Store is "changeit".

It is not recommended that you modify this default Trust Store, given that it is shipped with your JVM and will be updated with it. Instead you could make a copy and add certificates to the copy, and use the section below to use this copy as your custom global Trust Store.

## {{> anchor 'customtruststore'}}Custom Global Trust Store and Key Store

To set up a custom global Trust Store and Key Store, you just have to add the following system properties to Java:

| What for             | Parameter name                     |
| -------------------- | ---------------------------------- |
| Trust Store Path     | `javax.net.ssl.trustStore`         |
| Trust Store Password | `javax.net.ssl.trustStorePassword` |
| Trust Store Type     | `javax.net.ssl.trustStoreType`     |
| Key Store Path       | `javax.net.ssl.keyStore`           |
| Key Store Password   | `javax.net.ssl.keyStorePassword`   |
| Key Store Type       | `javax.net.ssl.keyStoreType`       |

For instance you could add the following parameters to your `JAVA_OPTS`:

{{#> panel type='code' heading='$NUXEO_HOME/bin/nuxeo.conf'}}
**`trustStore`**
```
JAVA_OPTS=$JAVA_OPTS -Djavax.net.ssl.trustStore=/path/to/truststore.jks -Djavax.net.ssl.trustStoreType=jks -Djavax.net.ssl.trustStorePassword=changeit
```

**`keyStore`**
```
JAVA_OPTS=$JAVA_OPTS -Djavax.net.ssl.keyStore=/path/to/keystore.jks -Djavax.net.ssl.keyStoreType=jks -Djavax.net.ssl.keyStorePassword=changeit
```
{{/panel}}

### Adding Your Certificates to the default Trust Store

To add your certificates to the default Trust Store:

1.  Copy the default Trust Store.
2.  Launch the following command line to add your certificate to the copy:
    ```
    keytool -import -file /path/to/certificate.pem -alias NameYouWantToGiveOfYourCertificate -keystore /path/to/copy/of/default/truststore.jks -storepass changeit
    ```

3.  Set the trust store copy as your [custom trust store](#customtruststore).
4.  Restart your Nuxeo instance.

## Service-specific Trust Store and Key store

For some Nuxeo services, it's possible to configure individually a Trust Store and Key Store without touching the global JVM Trust Store and Key Store.

### Elasticsearch

Use the following `nuxeo.conf` properties:

- `elasticsearch.restClient.truststore.path`
- `elasticsearch.restClient.truststore.password`
- `elasticsearch.restClient.truststore.type`
- `elasticsearch.restClient.keystore.path`
- `elasticsearch.restClient.keystore.password`
- `elasticsearch.restClient.keystore.type`

See the [Elasticsearch Configuration]({{page page='elasticsearch-setup'}}) page for more.

### MongoDB

Use the following `nuxeo.conf` properties:

- `nuxeo.mongodb.ssl=true`
- `nuxeo.mongodb.truststore.path`
- `nuxeo.mongodb.truststore.password`
- `nuxeo.mongodb.truststore.type`
- `nuxeo.mongodb.keystore.path`
- `nuxeo.mongodb.keystore.password`
- `nuxeo.mongodb.keystore.type`

See the [MongoDB Configuration]({{page page='mongodb'}}) page for more.

### Redis

Use the following `nuxeo.conf` properties:

- `nuxeo.redis.ssl=true`
- `nuxeo.redis.truststore.path`
- `nuxeo.redis.truststore.password`
- `nuxeo.redis.truststore.type`
- `nuxeo.redis.keystore.path`
- `nuxeo.redis.keystore.password`
- `nuxeo.redis.keystore.type`

See the [Redis Configuration]({{page page='redis-configuration'}}) page for more.

## Troubleshooting

If your Nuxeo instance cannot access Nuxeo Online Services anymore, or the Marketplace and Hot Fixes are no longer automatically available (through the Update Center for instance), this can mean that the Trust Store does not contain the certificates from the authority that signed the Nuxeo Online Services certificates, which are normally part of the default JVM Trust Store.

If you have the following error in your logs during the connection establishment:

```
sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target

```

It means that the remote certificate is not trusted.

The following messages mean there is no Trust Store set for your JVM:

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

The following error can mean that a configured Key Store is not available:

```
java.security.NoSuchAlgorithmException: Error constructing implementation (algorithm: Default, provider: SunJSSE, class: com.sun.net.ssl.internal.ssl.DefaultSSLContextImpl)

```
