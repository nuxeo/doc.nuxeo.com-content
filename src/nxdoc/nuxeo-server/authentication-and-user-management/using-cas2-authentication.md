---
title: CAS2 Authentication
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - cas2
    - authentication
    - dmetzler
    - link-update
    - cas-authentication-component
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089115'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Using+CAS2+Authentication
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+CAS2+Authentication'
    page_id: '4688550'
    shortlink: popH
    shortlink_source: 'https://doc.nuxeo.com/x/popH'
    source_link: /display/NXDOC/Using+CAS2+Authentication
tree_item_index: 195
history:
    -
        author: Frantz Fischer
        date: '2016-07-01 09:24'
        message: ''
        version: '30'
    -
        author: Solen Guitter
        date: '2015-10-21 08:40'
        message: Fix page layout to use 2/3 layout
        version: '29'
    -
        author: Damien Metzler
        date: '2015-10-20 12:48'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2014-11-27 12:08'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2013-10-14 16:42'
        message: Added TOC
        version: '26'
    -
        author: Solen Guitter
        date: '2013-09-23 10:45'
        message: ''
        version: '25'
    -
        author: Thierry Delprat
        date: '2013-09-20 21:57'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: Migrated to Confluence 4.0
        version: '23'
    -
        author: Solen Guitter
        date: '2011-03-03 15:41'
        message: ''
        version: '22'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:37'
        message: ''
        version: '21'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:30'
        message: ''
        version: '20'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:29'
        message: ''
        version: '19'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:28'
        message: ''
        version: '18'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:26'
        message: ''
        version: '17'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:26'
        message: ''
        version: '16'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:17'
        message: ''
        version: '15'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 18:04'
        message: ''
        version: '14'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:46'
        message: ''
        version: '13'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:41'
        message: ''
        version: '12'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:40'
        message: ''
        version: '11'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:39'
        message: ''
        version: '10'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:28'
        message: ''
        version: '9'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:23'
        message: ''
        version: '8'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:18'
        message: ''
        version: '7'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:05'
        message: ''
        version: '6'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 17:05'
        message: ''
        version: '5'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 16:59'
        message: ''
        version: '4'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 16:55'
        message: ''
        version: '3'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 16:51'
        message: ''
        version: '2'
    -
        author: Stéphane Lacoin
        date: '2010-12-16 16:50'
        message: ''
        version: '1'

---
This plugin implements a client for CAS SSO system (Central Authentication System).

## Installation

It can be configured to use a CAS proxy. It has been tested and reported to work with CAS V2\. It's easy to test this plugin by installing the JA-SIG Central Authentication Service Open Source CAS server.

To install the CAS2 authentication plugin:

1.  Make sure there is a CAS server already setup and running.
2.  Install the [CAS2 Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/cas2-authentication).
3.  Put CAS2 plugin into the authentication chain.{{{multiexcerpt 'authentication_chain_contribution' page='Authentication and User Management'}}}
  Use `CAS2_AUTH`.
  {{#> callout type='warning' }}
  In order to allow External Users into your system, make sure `TOKEN_AUTH` plugin **is declared before** `CAS2_AUTH`
  {{/callout}}
4.  Create an [XML extension]({{page page='how-to-contribute-to-an-extension'}}) called `CAS2-config.xml` with the following content:

    ```xml
    <component name="org.nuxeo.ecm.platform.authenticator.cas2.sso.config">

      <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
      <require>org.nuxeo.ecm.platform.login.Cas2SSO</require>

      <!-- Configure you CAS server parameters -->
      <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
        <authenticationPlugin name="CAS2_AUTH">
          <loginModulePlugin>Trusting_LM</loginModulePlugin>
          <parameters>
            <parameter name="ticketKey">ticket</parameter>
            <parameter name="appURL">http://127.0.0.1:8080/nuxeo/nxstartup.faces</parameter>
            <parameter name="serviceLoginURL">http://127.0.0.1:8080/cas/login</parameter>
            <parameter name="serviceValidateURL">http://127.0.0.1:8080/cas/serviceValidate</parameter>
            <parameter name="serviceKey">service</parameter>
            <parameter name="logoutURL">http://127.0.0.1:8080/cas/logout</parameter>
          </parameters>
        </authenticationPlugin>
      </extension>
    </component>

    ```

5.  Adapt the content of the `loginModulePlugin` section.
6.  Save.


## Overview

A typical CAS use case would be the portal. In this n-tiers architecture, the identity is to be shared between the components.

The following diagram depicts the interactions between a client, a portal, a CAS server and Nuxeo for establishing the authentication context.

![]({{file name='cas.png'}} ?border=true)

## (a) Portal Service Ticket

The first phase is the portal authentication (a1).

<pre>GET /home
</pre>

The client is redirected to the CAS server for entering its credentials (a2).

<pre>GET /cas/login?service=http://127.0.0.1:9090/ticket/validate
</pre>

Once the credentials are entered, if they are valid, the CAS server generates a service ticket `ST`.
The client is redirected by the CAS server back onto the portal using the `service` URL (a3).

{{#> callout type='info' }}

In the same time, the CAS server generates a ticket granting and registers it client side using the cookie `CASTGC`. If the cookie is already present in the request headers, then the client is automatically redirected to the portal.

{{/callout}}

<pre>http://127.0.0.1:9090/ticket/validate?ticket=ST-81-rCbbm5oj9geCKjvhNCvJ-cas
</pre>

## (b) Proxy Granting Ticket

In the second phase, the portal validates the service ticket and requests for a proxy granting ticket `PGT` (b1).

<pre>GET /cas/serviceValidate?ticket=ST-81-rCbbm5oj9geCKjvhNCvJ-cas&
    service=http://127.0.0.1:9090/ticket/validate&pgtUrl=http://127.0.0.1:9090/ticket/accept
</pre>

If the ticket is valid, the CAS server invokes the `pgtUrl` callback with two parameters `pgtIou` and `pgtId` (b2).

<pre>GET /ticket/accept?pgtIou=PGTIOU-34-jJZH23r2wbKUqbc3dLFt-cas&
    pgtId=TGT-45-sSnfcQ7A0TXGsQR2gJONm74rObZ0qRQzhENJWTdZJG5rcGN2T5-cas
</pre>

In case of success, the server responds to the portal with the following content

```xml
<cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
.<cas:authenticationSuccess>
..<cas:user>slacoin</cas:user>
..<cas:proxyGrantingTicket>PGTIOU-34-jJZH23r2wbKUqbc3dLFt-cas</cas:proxyGrantingTicket>
.</cas:authenticationSuccess>
</cas:serviceResponse>

```

The `pgtIou` is used portal side for retrieving the accepted `PGT`.

## (c) Nuxeo Proxy Ticket

In the third phase, the portal asks the CAS server for a new service ticket that will give him access to the Nuxeo server using the client identity (c1).

<pre>GET /cas/proxy?pgt=TGT-45-sSnfcQ7A0TXGsQR2gJONm74rObZ0qRQzhENJWTdZJG5rcGN2T5-cas&
    targetService=http://127.0.0.1:8080/nuxeo/atom/cmis
</pre>

The CAS server generates a new ST and responds to the portal with the following content:

```xml
<cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
.<cas:proxySuccess>
..<cas:proxyTicket>ST-82-20eCHgCqvMCvnP6AmZmz-cas</cas:proxyTicket>
.</cas:proxySuccess>
</cas:serviceResponse>

```

Then the proxy ticket is used by the portal for login into Nuxeo (c2).

<pre>GET /nuxeo/atom/cmis?ticket=ST-82-20eCHgCqvMCvnP6AmZmz-cas
    &proxy=http://127.0.0.1:9090/ticket/accept
    &service=http:127.0.0.1:8080/nuxeo/atom/cmis
</pre>

The Nuxeo server validates the ticket by invoking the CAS server (c3).

<pre>GET /cas/proxyValidate?ticket=ST-82-20eCHgCqvMCvnP6AmZmz-cas&service=http:127.0.0.1:8080/nuxeo/atom/cmis
</pre>

If the ticket is valid, the CAS server sends the following response:

```xml
<cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
 <cas:authenticationSuccess>
  <cas:user>slacoin</cas>
  <cas:proxyGrantingTicket>PGTIOU-34-jJZH23r2wbKUqbc3dLFt-cas</cas:proxyGrantingTicket>
  <cas:proxies>
   <cas:proxy>http://127.0.0.1:9090/ticket/accept</cas:proxy>
  </cas:proxies>
 </cas:authenticationSuccess>
</cas>

```

The Nuxeo server creates an HTTP session and sends the AtomPub response message.

```xml
<?xml version='1.0' encoding='UTF-8'?>
<app:service xmlns:app="http://www.w3.org/2007/app"
             xmlns:atom="http://www.w3.org/2005/Atom"
             xmlns:cmis="http://docs.oasis-open.org/ns/cmis/core/200908/"
             xmlns:cmisra="http://docs.oasis-open.org/ns/cmis/restatom/200908/">
  <app:workspace>...</app:workspace>
</app:service>

```

The portal saves the client context for being able to invoke Nuxeo using the same HTTP session.

## (d) Invoking Nuxeo

The Nuxeo HTTP session id is retrieved from the portal session context and invoked.

<pre>GET /nuxeo/atom/cmis?repositoryId=default</pre>

## CAS2 and Anonymous Authentication

CAS2 and anonymous authenticators have flows that can interfere with each others, creating some side effects like bad redirections.

To avoid that, the CAS2 plugin provides a replacement for the default Anonymous authenticator : basically this is a _"CAS aware Anonymous authenticator"_. You can see a sample configuration available in: [https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/login/nuxeo-platform-login-cas2/Sample/CAS2-Anonymous-bundle.xml](https://github.com/nuxeo/nuxeo/blob/master/modules/platform/login/nuxeo-platform-login-cas2/Sample/CAS2-Anonymous-bundle.xml).

But, basically, wanting to put together both CAS2 and Anonymous authentication means you have two types of users that will access Nuxeo. So, an alternate approach is to define two separated authentication chains, one for each type of user:

*   One chain for authenticated users: using CAS2 and some other authentication method you may need;
*   One chain for anonymous access.

In most of the case, each type of user will have access via a separated virtual host at reverse proxy level. You can use this so that:

*   At reverse proxy level you add a header for tagging the type of request;
    ex: Anonymous requests will have the header `X-anonymous-access` set to "on";
*   At Nuxeo level you configure the chains depending on the header;
    *   Default / main chain is the one using CAS2;
    *   You define specific chain for requests having the `X-anonymous-access`.

{{#> panel type='code' heading='Sample XML contribution'}}

```xml
<specificAuthenticationChain name="anonymous-access">
    <headers>
        <header name="X-anonymous-access">on</header>
    </headers>
    <allowedPlugins>
        <plugin>ANONYMOUS_AUTH</plugin>
    </allowedPlugins>
</specificAuthenticationChain>
```

{{/panel}}

You can see [specificChains](http://explorer.nuxeo.org/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--specificChains) extension point for more info.
