---
title: Trust Store and Key Store Configuration
toc: true
confluence:
    ajs-parent-page-id: '17334384'
    ajs-parent-page-title: SOAP Bridge
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Trust+Store+and+Key+Store+Configuration
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Trust+Store+and+Key+Store+Configuration
    page_id: '17334520'
    shortlink: _IAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_IAIAQ'
    source_link: /display/NXDOC58/Trust+Store+and+Key+Store+Configuration
history:
    - 
        author: Solen Guitter
        date: '2012-09-28 18:04'
        message: igrated to Confluence 4.
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-09-28 18:04'
        message: ''
        version: '1'

---
{{#> callout type='note' }}

If you set a custom trust store with your authorities exclusively, **Marketplace, Studio and hot fix distribution integration will not work anymore** since these servers expose certificates available in the default trust store. So I suggest that you [add your certificates to the default one](#adding-your-certificates-into-the-default-trust-store).

{{/callout}}

## Static Trust Store and Key Store

To set the trust store and key store statically, you just have to add the following parameter into the environment variable:

<table><tbody><tr><th colspan="1">

What for

</th><th colspan="1">

Parameter name

</th><th colspan="1">

Comment

</th></tr><tr><td colspan="1">

Trust Store Path

</td><td colspan="1">

javax.net.ssl.trustStore

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Trust Store Type

</td><td colspan="1">

javax.net.ssl.keyStoreType

</td><td colspan="1">

JKS for instance

</td></tr><tr><td colspan="1">

Key Store Path

</td><td colspan="1">

javax.net.ssl.keyStore

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Key Store Password

</td><td colspan="1">

javax.net.ssl.keyStorePassword

</td><td colspan="1">

&nbsp;

</td></tr></tbody></table>

So if you want to set them at start time, you can add the following parameter either:

*   into your `JAVA_OPTS`: {{#> panel type='code' heading='$NUXEO_HOME/bin/nuxeo.conf'}}

    ```

    -Djavax.net.ssl.trustStore=/the/path/to/your/trust/store.jks -Djavax.net.ssl.keyStoreType=jks ... etc ...

    ```

    {{/panel}}
*   or into your Java code: {{#> panel type='code' heading='MyClass.java'}}

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

## Dynamic Trust Store

...TODO...

## Adding your Certificates into the default Trust Store

You will find the default trust store delivered with your JVM in:

<pre>$JAVA_HOME/lib/security/cacerts</pre>

For instance in Mac OS, it is in:

<pre>/System/Library/Frameworks/JavaVM.framework/Home/lib/security/cacerts
</pre>

By default the password for this Trust Store is "changeit".

So to add your certificates to the default trust store:

1.  Copy the default trust store.
2.  Launch the following command line to add your certificate to the default trust store copy:

    <pre>keytool -import -file /path/to/your/certificate.pem -alias NameYouWantToGiveOfYourCertificate -keystore /path/to/the/copy/of/the/default/truststore.jks -storepass changeit
    </pre>

3.  Set the trust store copy as your either [statically](#static-trust-store-and-key-store) or [dynamically](#dynamic-trust-store).
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