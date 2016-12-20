---
title: NTLM and IE Challenge/Response
review:
    comment: ''
    date: '2016-12-14'
    status: ok
toc: true
tree_item_index: 200
---
This plugin uses JCIFS to handle NTLM authentication. If you have troubles with latest version of IE on POST requests, please see [JCIFS instructions](http://jcifs.samba.org/src/docs/ntlmhttpauth.html#post).

To install this authentication plugin:

1.  Download the [nuxeo-platform-login-ntlm plugin](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick%7Enuxeo-platform-login-ntlm).
2.  Put it in `$TOMCAT_HOME/nxserver/bundles` or `$JBOSS_HOME/server/default/deploy/nuxeo.ear/bundles` and restart the server.
3.  Put the plugin into the authentication chain. {{{multiexcerpt 'authentication_chain_contribution' page='Authentication and User Management'}}}
    Use `NTLM_AUTH`.
4.  Create an [XML extension]({{page page='how-to-contribute-to-an-extension'}}) called&nbsp;`ntlm-auth-config.xml` with the following content:

    ```xml
    <component name="org.nuxeo.ecm.platform.authenticator.ntlm.config">

      <require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>
      <require>org.nuxeo.ecm.platform.login.NTLM</require>

      <extension target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService" point="authenticators">
        <authenticationPlugin name="NTLM_AUTH">
          <loginModulePlugin>Trusting_LM</loginModulePlugin>
          <parameters>
            <\!-\- Add here parameters for you domain, please ee [http://jcifs.samba.org/src/docs/ntlmhttpauth.html&nbsp];
            <parameter name="jcifs.http.domainController">MyControler</parameter>
            \-->
          </parameters>
        </authenticationPlugin>
      </extension>
    </component>

    ```

5.  Adapt the content of the `loginModulePlugin` section.
6.  Save.
