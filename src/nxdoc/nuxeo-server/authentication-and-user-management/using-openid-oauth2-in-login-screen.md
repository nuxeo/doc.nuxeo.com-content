---
title: Using OpenID / OAuth2 in Login Screen
description: You can use any OpenID / OAuth 2 identity provider in the authentication chain. A Nuxeo addon, OpenID Authentication, is available to make this possible.
review:
    comment: ''
    date: '2017-12-11'
    status: ok
labels:
    - lts2016-ok
    - openid
    - oauth
    - ataillefer
    - openid-component
    - excerpt
    - link-update
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089115'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=20517844
    canonical_source: viewpage.action?pageId=20517844
    page_id: '20517844'
    shortlink: 1BM5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/1BM5AQ'
    source_link: /pages/viewpage.action?pageId=20517844
tree_item_index: 170
history:
    -
        author: Manon Lumeau
        date: '2016-08-16 10:03'
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

You can use any OpenID / OAuth 2 identity provider in the authentication chain. A Nuxeo addon, [OpenID Authentication](https://connect.nuxeo.com/nuxeo/site/marketplace/package/openid-authentication), is available to make this possible.

The default behavior is to display a sign-in button per identity provider to start the authentication challenge, then building the expected `UserIdentificationInfo` with the provided `UserInfo`.

By default, the username resolved with the identity provider user information must be in the user directory to allow it to access the Nuxeo Platform.

{{! /excerpt}}

## Installation

The Nuxeo addon [OpenID Authentication](https://connect.nuxeo.com/nuxeo/site/marketplace/package/openid-authentication) enables you to use OpenID Connect, the identity layer on top of the OAuth 2.0 protocol, and so to use OAuth 2 providers as identity providers.

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration

### Declaring a New Identity Provider in Nuxeo

```xml
<extension point="providers" target="org.nuxeo.ecm.platform.oauth2.openid.OpenIDConnectProviderRegistry">
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
        <authenticationMethod>url / bearer</authenticationMethod>
    </provider>
</extension>
```

This first contribution only defines the provider, but not the _client name_ or _client secret_ to prevent them to be in the base contribution file.

### Setting up the Authorized Redirect URI

In your identity provider configuration, set up the Authorized Redirect URI to the Nuxeo server. For a local Nuxeo instance using GoogleOpenIDConnect for instance this would be:
- With JSF UI:
    ```
    http://NUXEO_SERVER/nuxeo/nxstartup.faces?provider=GoogleOpenIDConnect&forceAnonymousLogin=true
    ```
- With Web UI:
    ```
    http://NUXEO_SERVER/nuxeo/ui/?provider=GoogleOpenIDConnect&forceAnonymousLogin=true
    ```

### Appending Provider Secrets

Set up the following values in your [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) file depending on your target provider. You only need to set the ones related to your new provider.

```
# Github
nuxeo.openid.github.client.id=
nuxeo.openid.github.client.secret=

# Google
nuxeo.openid.google.client.id=
nuxeo.openid.google.client.secret=

# Google+
nuxeo.openid.googleplus.client.id=
nuxeo.openid.googleplus.client.secret=

# LinkedIn
nuxeo.openid.linkedin.client.id=
nuxeo.openid.linkedin.client.secret=

# Amazon Connect
nuxeo.openid.amazon.client.id=
nuxeo.openid.amazon.client.secret=

# Facebook Connect
nuxeo.openid.facebook.client.id=
nuxeo.openid.facebook.client.secret=
```

### UserInfo Mapping

Each identity provider has its own way to handle user identity in its `UserInfo` endpoint. You may need to add your own mapping class.

You just have to extend the `org.nuxeo.ecm.platform.oauth2.openid.auth.OpenIDUserInfo` class with the expected fields. Do not forget to set it in your provider contribution.

You can take a look to our implementation like [`org.nuxeo.ecm.platform.oauth2.openid.auth.google.GoogleUserInfo`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/login/nuxeo-platform-login-openid/src/main/java/org/nuxeo/ecm/platform/oauth2/openid/auth/google/GoogleUserInfo.java) or [`org.nuxeo.ecm.platform.oauth2.openid.auth.DefaultOpenIDUserInfo`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-services/login/nuxeo-platform-login-openid/src/main/java/org/nuxeo/ecm/platform/oauth2/openid/auth/DefaultOpenIDUserInfo.java) .

### Username Resolution

By default we provide two username resolvers.

One is based on the email field: `org.nuxeo.ecm.platform.oauth2.openid.auth.EmailBasedUserResolver`. The second one handles username by concatenating the provider id and the user's subject field: `org.nuxeo.ecm.platform.oauth2.openid.auth.StoredUserInfoResolver`.

You can easily add your own by extending the`org.nuxeo.ecm.platform.oauth2.openid.auth.UserResolver` class.

## Others Parameters

You can change some behaviors by adding the following parameters in your [nuxeo.conf]({{page version='' space='nxdoc' page='configuration-parameters-index-nuxeoconf'}}) file:

- `nuxeo.skip.oauth.token.state.check` (default: `false`): Whether to skip checking if the provider response contains the correct OAuth 2 state. Default value if recommended for security.
- `nuxeo.oauth.auth.create.user` (default: `false`): Create user on request if not exists.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">

{{#> panel heading='Other OAuth 2 / OPenID Related Documentation'}}

- [Using OAuth 2]({{page page='using-oauth2'}})

{{/panel}}
</div>
<div class="column medium-6">

&nbsp;

</div>
</div>
