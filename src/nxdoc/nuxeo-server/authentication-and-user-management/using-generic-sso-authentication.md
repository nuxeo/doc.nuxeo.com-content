---
title: Generic SSO Authentication
review:
    comment: ''
    date: '2016-12-14'
    status: ok
toc: true
tree_item_index: 140
labels:
    - content-review-lts2017
    - authentication
    - dmetzler


---

This plugin assumes Nuxeo is behind an authenticating reverse proxy that transmits user identity using HTTP headers. For instance, you will configure this plugin if an Apache reverse proxy using client certificates does the authentication or for SSO system - example Central Authentication System V2.

To install and configure this plugin:

1.  Download the [nuxeo-platform-login-mod_sso addon](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick%7Enuxeo-platform-login-mod_sso).
2.  Put it in `$TOMCAT_HOME/nxserver/bundles/` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
3.  Add the plugin into the authentication chain.{{{multiexcerpt 'authentication_chain_contribution' page='Authentication and User Management'}}}
  Use `PROXY_AUTH`.
4.  Create an [XML extension]({{page page='how-to-contribute-to-an-extension'}}) with the following content:

    ```xml
     <component name="org.nuxeo.ecm.platform.authenticator.mod.sso.config">

      <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
      <require>org.nuxeo.ecm.platform.login.Proxy</require>

      <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
        <authenticationPlugin name="PROXY_AUTH">
          <loginModulePlugin>Trusting_LM</loginModulePlugin>
          <parameters>
            <\!-\- configure here the name of the http header that is used to retrieve user identity -->
            <parameter name="ssoHeaderName">remote_user</parameter>
            <parameter name="ssoNeverRedirect">false</parameter>
          </parameters>
        </authenticationPlugin>
      </extension>
    </component>
    ```

    **Notes:** Your XML extension's name must end with `-config.xml`.

5.  Adapt the content of the `loginModulePlugin` section.
    **Note:** The `ssoNeverRedirect` parameter should be set to true if the PROXY_AUTH is used with REST calls, where you don't want to redirect the response.
6.  Save.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">

{{#> panel heading='Related Documentation'}}

- [SSO with Portals]({{page version='' space='nxdoc' page='using-sso-portals'}})
- [Authentication Chain Principles]({{page page='authentication-chain-principles'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
