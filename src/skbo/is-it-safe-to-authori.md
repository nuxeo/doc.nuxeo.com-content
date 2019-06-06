---
title: Is it safe to authorize the usage of BASIC_AUTH in WebUI
description: BASIC_AUTH is often the source of security issues. Is it safe to use BASIC_AUTH with WebUI?
review:
    date: '2019-06-02'
    status: ok
    comment: 'public version'
labels:
    - runtime-administration
    - webui-webuiruntime
    - basic-auth
    - configuration
    - security
    - webui

---
# Is BASIC_AUTH safe in conjunction with WebUI?

## The Problem
BASIC_AUTH is often the source of ill-conditions regarding security. Can one rely on BASIC_AUTH when using WebUI?

## A proposed configuration [NXP-26843](https://jira.nuxeo.com/browse/NXP-26843)
Following changes to expired session handling we recommend users to disable Basic Auth when using Web UI. This will ensure users see the expired session banner and are redirected to the login page thus not relying on basic auth.

    <?xml version="1.0"?>
    <component name="org.nuxeo.web.ui.authentication.contrib">
      <extension point="authenticators" target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService">
        <authenticationPlugin class="org.nuxeo.ecm.platform.ui.web.auth.plugins.BasicAuthenticator" enabled="true" name="AUTOMATION_BASIC_AUTH">
          <parameters>
            <parameter name="AutoPrompt">true</parameter>
            <parameter name="RealmName">Nuxeo Automation</parameter>
            <parameter name="ExcludeBAHeader_Token">X-Authentication-Token</parameter>
            <parameter name="ExcludeBAHeader_Token">X-No-Basic-Header</parameter>
            <parameter name="ExcludeBAHeader_COOKIE">Cookie</parameter>
          </parameters>
        </authenticationPlugin>
      </extension>
    </component>


2019-06-02T15:22:01.547Z
## (c) Nuxeo Support Knowledge Base Outline 2019
