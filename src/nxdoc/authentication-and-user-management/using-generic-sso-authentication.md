---
title: Generic SSO Authentication
review:
    comment: ''
    date: '2017-02-09'
    status: ok
toc: true
tree_item_index: 706
---
This plugin assumes Nuxeo is behind a authenticating reverse proxy that transmit user identity using HTTP headers. For instance, you will configure this plugin if an Apache reverse proxy using client certificates does the authentication or for SSO system - example Central Authentication System V2\. To install and configure this plugin this plugin:

1.  [Download](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick%7Enuxeo-platform-login-mod_sso) the `nuxeo-platform-login-mod_sso` addon.
2.  Put it in `$TOMCAT_HOME/nxserver/bundles/` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
3.  Add the plugin into the authentication chain.
    {{{multiexcerpt 'authentication_chain_contribution' page='NXDOC710:Authentication and User Management'}}}
    Use `PROXY_AUTH`.
4.  Configure the plugin via the following XML descriptor that should be contributed in your Studio project, or copied into `nxserver/config` (XML file must be suffixed by -config.xml).

    ```
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

    The `ssoNeverRedirect` parameter should be set to true if the `PROXY_AUTH` is used with REST calls, where you don't want to redirect the response.

5.  Save.
