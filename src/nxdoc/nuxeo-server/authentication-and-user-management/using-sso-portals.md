---
title: SSO with Portals
review:
    comment: ''
    date: '2016-12-14'
    status: ok
toc: true
tree_item_index: 145
labels:
    - content-review-lts2017
    - authentication
    - dmetzler

---
This plugin provides a way to handle identity propagation between an external application and Nuxeo. It was coded to propagate user identify between a JSR168 portal and a Nuxeo server. The goal is to let the external application (ex: the portal) call the Nuxeo API _"on behalf"_ of the interactive users. This ensures that:

*   The app/portal will never display data that should not be visible to the user
*   All actions done via the app/portal will still be logged in the Nuxeo Audit log with the correct information


## Server-Side Configuration

To install this authentication plugin:

1.  Download the [nuxeo-platform-login-portal-sso plugin](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-platform-login-portal-sso).
2.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
3.  Put the plugin into the authentication chain.{{{multiexcerpt 'authentication_chain_contribution' page='Authentication and User Management'}}}
    Use `PORTAL_AUTH`.
4.  Create an [XML extension]({{page page='how-to-contribute-to-an-extension'}}) with the following content:

    ```xml
    <component name="org.nuxeo.ecm.platform.authenticator.portal.sso.config">

      <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
      <require>org.nuxeo.ecm.platform.login.Portal</require>

      <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
        <authenticationPlugin name="PORTAL_AUTH">
          <loginModulePlugin>Trusting_LM</loginModulePlugin>
          <parameters>
            <\!-\- define here shared secret between the portal and Nuxeo server -->
            <parameter name="secret">nuxeo5secretkey</parameter>
            <parameter name="maxAge">3600</parameter>
            <parameter name="digestAlgorithm">MD5<parameter>
          </parameters>
        </authenticationPlugin>
      </extension>
    </component>

    ```

    **Note:** Your XML extension's name must end with&nbsp;`-config.xml`.

5.  Adapt the content of the `loginModulePlugin` section.
6.  Save.

## Client-Side Configuration

Portal_SSO is integrated in [Nuxeo Java client](http://nuxeo.github.io/nuxeo-java-client/) and in the [Nuxeo-HTTP-Client](https://github.com/nuxeo/nuxeo-http-client/) sample lib.

**Using Nuxeo HTTP Client**

`nuxeo-http-client` is a sample Java client to do REST calls to Nuxeo. You can configure it connect to a server that uses `nuxeo-platform-login-portal-sso` by doing:

```
NuxeoServer nxServer = new NuxeoServer("http://127.0.0.1:8080/nuxeo");
nxServer.setAuthType(NuxeoServer.AUTH_TYPE_SECRET);
nxServer.setSharedSecretAuthentication("Administrator", "nuxeo5secretkey");
```

**Using Nuxeo Java Client**

Configure it to connect to a server that uses `platform-login-portal-sso` by using an interceptor:

```java
client.setAuthenticationMethod( new PortalSSOAuthInterceptor("nuxeo5secretkey", "Administrator") );
```

**Manual HTTP Calls**

To do all the calls to Nuxeo yourself, you have to decide which HTTP requests to make, and in addition you'll have to send some specific headers to authenticate. The HTTP headers are:

*   `NX_TS`: the timestamp, in milliseconds since epoch, when you're generating the request.
*   `NX_RD`: a few some random characters.
*   `NX_USER`: the user as whom you want to authenticate.
*   `NX_TOKEN`: a token proving authentication generated using the algorithm `BASE64_MD5(timestamp + ":" + random + ":" + secret + ":" + user)`

The token contains the secret but in a hashed form which cannot be reversed by an eavesdropper to generate new requests. The timestamp is used to avoid replay attacks (the delta with the real time on the server cannot be more than the `maxAge` specified on the server). The random characters are used to avoid pre-computed dictionary attacks.

The following Java code can be used:

```java
import java.security.MessageDigest;
import javax.xml.bind.DatatypeConverter;

public String makeToken(String timestamp, String random, String secret,
        String user) throws Exception {
    String clearToken = timestamp + ":" + random + ":" + secret + ":"
            + user;
    String digestAlgorithm = "MD5"; // or whatever digestAlgorithm was configured on the server
    byte[] digest = MessageDigest.getInstance(digestAlgorithm).digest(clearToken.getBytes());
    return DatatypeConverter.printBase64Binary(digest);
}
```

As a validation of your code, check that `makeToken("1324572561000", "qwertyuiop", "secret", "bob")` returns `8y4yXfms/iKge/OtG6d2zg==` for the `MD5` algorithm.


* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">

{{#> panel heading='Related Documentation'}}

- [Authentication and User Management]({{page version='' space='nxdoc' page='authentication-and-user-management'}})
- [Generic SSO Authentication]({{page version='' space='nxdoc' page='using-generic-sso-authentication'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
