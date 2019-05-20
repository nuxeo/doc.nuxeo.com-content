---
title: Nuxeo DuoWeb Two-Factor Authentication
review:
    comment: ''
    date: '2017-12-12'
    status: ok
labels:
    - lts2016-ok
    - duo-web-authentication-addon
    - vpasquier
    - lts2017-ok
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+DuoWeb+Two-Factor+Authentication
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+DuoWeb+Two-Factor+Authentication'
    page_id: '20517217'
    shortlink: YRE5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/YRE5AQ'
    source_link: /display/NXDOC/Nuxeo+DuoWeb+Two-Factor+Authentication
tree_item_index: 210
history:
    -
        author: Solen Guitter
        date: '2015-12-22 17:25'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-10-27 14:01'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-10-27 13:36'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2014-10-27 12:07'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2014-10-27 12:06'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2014-10-27 12:06'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2014-10-27 11:57'
        message: ''
        version: '1'

---
{{! excerpt}}
The [Nuxeo addon nuxeo-duoweb-authentication](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-duoweb-authentication) is an integration of [DuoWeb](http://www.duosecurity.com) access in Nuxeo login plugin and provides two-factor authentication through the Nuxeo login page.

This plugin is available for Nuxeo Platform 5.8 and above.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Expert Session - Two Factor Authentication](https://university.nuxeo.com/learn/public/course/view/elearning/187/ExpertSession-Two-FactorAuthentication)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo DuoWeb Two-Factor Authentication/two-factor.png
    name: two-factor.png
    addins#screenshot#up_to_date
--}}
![two-factor.png](nx_asset://60f64180-edf6-467d-93ee-70970ccabbac ?w=450,border=true)
{{/callout}}

{{! /excerpt}} {{#> callout type='info' heading='Configuration'}}

Please refer to this [README](https://github.com/nuxeo/nuxeo/blob/master/addons/nuxeo-duoweb-authentication/README.md) to configure and activate the addon on your Nuxeo instance.

{{/callout}}

The two factors authentication is executing the following steps:

1.  Login with your Nuxeo credentials.
    ![]({{file name='img0.png'}} ?w=500)
2.  Bind/Use your Duo application to check identity through your mobile phone.
    ![]({{file name='img.png'}} ?w=500)
3.  Confirm identity authorization with your mobile phone.
    ![]({{file name='img2.png'}} ?w=400,border=true)

## Login Plugin Configuration

You must [subscribe](https://signup.duosecurity.com/) to DuoWeb services and follow [DuoWeb documentation](https://www.duosecurity.com/docs/duoweb) to create all DuoWeb Keys.

After installing the plugin, make sure before starting to include your DuoWeb Keys (provided by DuoWeb) in the following configuration file `NUXEO_HOME/templates/duoweb-authentication/config/duo-authentication-config.xml`:

```xml
<component name="org.nuxeo.duo.factors.login.contrib">

<require>org.nuxeo.ecm.platform.ui.web.auth.WebEngineConfig</require>

<documentation>
  This authentication plugin processes DuoWeb Two Factors Authentication
</documentation>

<extension
        target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
        point="authenticators">
  <authenticationPlugin name="DUO_TWO_FACTORS_AUTH"
                        enabled="true"
                        class="org.nuxeo.duoweb.factors.DuoFactorsAuthenticator">
    <loginModulePlugin>Trusting_LM</loginModulePlugin>
    <parameters>
      <parameter name="IKEY">YOUR_INTEGRATION_KEY</parameter>
      <parameter name="SKEY">YOUR_SECRET_KEY</parameter>
      <parameter name="AKEY">YOUR_APPLICATION_KEY</parameter>
      <parameter name="HOST">YOUR_API_HOSTNAME</parameter>
    </parameters>
  </authenticationPlugin>
</extension>

<extension
        target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService"
        point="chain">
  <authenticationChain>
    <plugins>
      <plugin>DUO_TWO_FACTORS_AUTH</plugin>
    </plugins>
  </authenticationChain>
</extension>

<extension point="openUrl" target="org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService">
  <openUrl name="duoFactorsPattern">
    <grantPattern>/nuxeo/duofactors.jsp</grantPattern>
  </openUrl>
</extension>

</component>
```

The `YOUR_APPLICATION_KEY` can be generated as followed in [DuoWeb documentation](https://www.duosecurity.com/docs/duoweb#1.-generate-an-akey)

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">

{{#> panel heading='Related Documentation'}}

- [Authentication and User Management]({{page version='' space='nxdoc' page='authentication-and-user-management'}})
- [Authentication Chain Principles]({{page page='authentication-chain-principles'}})

{{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Related How-tos'}}
- [How to Customize the Login Page]({{page version='' space='nxdoc' page='how-to-customize-the-login-page'}})
- [How to Contribute to an Extension]({{page version='' space='nxdoc' page='how-to-contribute-to-an-extension'}})
{{/panel}}

</div>
</div>
