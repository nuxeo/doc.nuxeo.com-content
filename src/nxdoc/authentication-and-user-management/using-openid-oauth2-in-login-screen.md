---
title: Using OpenID / OAuth2 in Login Screen
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - openid-component
    - openid
    - oauth
toc: true
confluence:
    ajs-parent-page-id: '28475727'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: viewpage.action?pageId=28475602
    canonical_source: viewpage.action?pageId=28475602
    page_id: '28475602'
    shortlink: 0oCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/0oCyAQ'
    source_link: /pages/viewpage.action?pageId=28475602
tree_item_index: 710
history:
    -
        author: Manon Lumeau
        date: '2016-08-16 10:04'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2014-11-28 11:03'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2014-11-28 11:01'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2014-11-28 11:00'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2014-11-28 10:59'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-11-28 10:27'
        message: Add screenshot
        version: '6'
    -
        author: Solen Guitter
        date: '2014-11-28 10:26'
        message: ''
        version: '5'
    -
        author: Arnaud Kervern
        date: '2014-11-04 17:10'
        message: ''
        version: '4'
    -
        author: Arnaud Kervern
        date: '2014-11-04 17:09'
        message: ''
        version: '3'
    -
        author: Arnaud Kervern
        date: '2014-11-04 17:03'
        message: ''
        version: '2'
    -
        author: Arnaud Kervern
        date: '2014-11-04 16:51'
        message: ''
        version: '1'

---
{{! excerpt}}

You can use any OpenID / OAuth2 identity provider in the authentication chain. The default behavior is to display a sign-in button per identity provider to start the authentication challenge, then building the expected `UserIdentificationInfo` with the&nbsp;provided `UserInfo`.

By default, the username resolved with the identity provider user information must be in the user directory to allow it to access the Nuxeo Platform.

{{! /excerpt}}

## Configuration

### Declaring a New IdentityProvider

Target: `org.nuxeo.ecm.platform.oauth2.openid.OpenIDConnectProviderRegistry`
Extension Point:&nbsp;`providers`

```xml
      <provider>
        <name>GoogleOpenIDConnect</name>
        <label>Google</label>
        <description>Login using your Google account</description>
        <authorizationServerURL>https://accounts.google.com/o/oauth2/auth</authorizationServerURL>
        <tokenServerURL>https://accounts.google.com/o/oauth2/token</tokenServerURL>
        <userInfoURL>https://www.googleapis.com/oauth2/v1/userinfo</userInfoURL>
        <userInfoClass>org.nuxeo.ecm.platform.oauth2.openid.auth.google.GoogleUserInfo</userInfoClass>
        <userResolverClass>org.nuxeo.ecm.platform.oauth2.openid.auth.EmailBasedUserResolver</userResolverClass>
        <scope>https://www.googleapis.com/auth/userinfo.email</scope>
        <icon>/icons/google.png</icon>
      </provider>
```

This first contribution only defines the provider, but not the _client name_&nbsp;or _client secret_&nbsp;to prevent them to be in the base contribution file.

### Appending Provider Secrets

There are two ways to handle it.

#### Using a Second Contribution

{{#> callout type='note' }}

This contribution is only read the first time you register a provider.

{{/callout}}

Require: `org.nuxeo.ecm.platform.oauth2.openid.google`
Target: `org.nuxeo.ecm.platform.oauth2.openid.OpenIDConnectProviderRegistry`
Extension Point:&nbsp;`providers`

```xml
      <provider>
        <name>GoogleOpenIDConnect</name>
        <clientId><!--enter your clientId here --></clientId>
        <clientSecret><!--enter your clientSecret key here --></clientSecret>
      </provider>
```

#### Using the Admin Tab

Once registered, you should be able to view/edit it though the Admin tab to set your client id, secret, scopes, etc.

![]({{file name='AdminCenter_OAuth2_service_providers.png'}} ?w=600,border=true)

### UserInfo Mapping

Each identity provider has its own way to handle user identity in his `UserInfo` endpoint. You may need to add your own mapping class.

You just have to extend the `org.nuxeo.ecm.platform.oauth2.openid.auth.OpenIDUserInfo`&nbsp;class with the expected fields. Do not forget to set it in your provider contribution.

You can take a look to our implementation like [`org.nuxeo.ecm.platform.oauth2.openid.auth.google.GoogleUserInfo`](https://github.com/nuxeo/nuxeo-platform-login/blob/release-7.10/nuxeo-platform-login-openid/src/main/java/org/nuxeo/ecm/platform/oauth2/openid/auth/google/GoogleUserInfo.java) or [`org.nuxeo.ecm.platform.oauth2.openid.auth.DefaultOpenIDUserInfo`](https://github.com/nuxeo/nuxeo-platform-login/blob/release-7.10/nuxeo-platform-login-openid/src/main/java/org/nuxeo/ecm/platform/oauth2/openid/auth/DefaultOpenIDUserInfo.java) .

### Username Resolution

By default we provide two username resolvers.

One is based on the email field (`org.nuxeo.ecm.platform.oauth2.openid.auth.EmailBasedUserResolver`). The second one that handles username by concatenating the provider id and the user's subject field (`org.nuxeo.ecm.platform.oauth2.openid.auth.StoredUserInfoResolver`).

You can easily add your own by extending the`org.nuxeo.ecm.platform.oauth2.openid.auth.UserResolver`&nbsp;class.

## Others Parameters

You have the possibility to change some behaviors by adding the following parameters in your [nuxeo.conf]({{page space='admindoc710' page='configuration-parameters-index-nuxeoconf'}}):

*   `nuxeo.skip.oauth.token.state.check`&nbsp;(default: `false`): Whether to skip checking if the provider response contains the correct OAuth2 state. Default value if recommended for security.
*   `nuxeo.oauth.auth.create.user`&nbsp;(default: `false`): Create user on request if not exists.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Other OAuth / OPenID Related Documentation'}}

*   [Using OAuth2]({{page page='using-oauth2'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

</div></div>
