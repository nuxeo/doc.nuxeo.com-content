---
title: OAuth 2
review:
    comment: ''
    date: '2017-12-11'
    status: ok
labels:
    - lts2016-ok
    - oauth
    - ataillefer
    - authentication
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089115'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Using+OAuth2
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Using+OAuth2'
    page_id: '18450388'
    shortlink: 1IcZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/1IcZAQ'
    source_link: /display/NXDOC/Using+OAuth2
tree_item_index: 160
history:
    -
        author: Manon Lumeau
        date: '2016-08-16 09:59'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-03-30 10:08'
        message: ''
        version: '7'
    -
        author: Damien Metzler
        date: '2015-10-20 13:12'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-10-08 15:27'
        message: Remove mentions of 5.9.2
        version: '5'
    -
        author: Solen Guitter
        date: '2014-11-27 17:10'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-02-11 11:50'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-02-11 11:44'
        message: Formatting
        version: '2'
    -
        author: Arnaud Kervern
        date: '2014-02-10 15:54'
        message: ''
        version: '1'

---
OAuth 2 is a protocol that allows an application to obtain access to the Nuxeo Platform on behalf of a user.

Nuxeo tries to stay very close to the ["OAuth 2.0 Authorization Framework"](http://tools.ietf.org/html/rfc6749) RFC to ease client integration and be secure. Before going any further, because OAuth 2 has to make a lot of secure exchanges with clients using query parameters, you **must ensure** to have [configured Nuxeo in HTTPS]({{page page='http-and-https-reverse-proxy-configuration'}}).

The RFC describes two endpoints:

* An [Authorization endpoint](#authorization-endpoint) used by the client to obtain authorization from the resource owner via user-agent redirection
* A [Token endpoint](#token-endpoint) used by the client to exchange an authorization code for a reusable access token


## Installation

OAuth 2 is natively supported by the Nuxeo Platform, which means there is no bundle to install and no XML extensions required to enable it. An HTTP filter handles authentication in priority compared to the other filters run by the authentication chain.

## Client Registration

Nuxeo allows you to register an OAuth 2 client by specifying an arbitrary name, a client ID, possibly a client secret and a list of redirect URIs.
There are two ways of registering a client.

### Using the REST API

Use the `directory` REST API endpoint to create a new entry in the `oauth2Clients` directory, for instance with `curl`:

```bash
curl -u Administrator:Administrator \
  -H 'Content-Type: application/json' \
  -X POST http://NUXEO_SERVER/nuxeo/api/v1/directory/oauth2Clients \
  -d @- << EOF
  {
    "entity-type": "directoryEntry",
    "directoryName": "oauth2Clients",
    "properties": {
      "name": "My App",
      "clientId": "myApp",
      "clientSecret": "secret",
      "redirectURIs": "https://myapp.mydomain.com/nuxeo-auth-done",
      "autoGrant": "true",
      "enabled": "true"
    }
  }
EOF
```

### Through the Admin Center

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

1. Go to the Nuxeo Platform web interface, then browse to the **Admin Center** > **Cloud Services** > **Consumers** tab.
2. Provide a name, a client ID, possibly a client secret, at least one redirect URI and save.
  ![]({{file name='OAuth2-Consumer.png'}} ?w=500,border=true)

{{#> callout type='info' }}
The `Auto-grant` parameter, if checked, allows the OAuth 2 client to bypass the authorization phase, skipping the web page asking the user to allow the application to access the Nuxeo Platform assets. This is the case for the [Mobile application]({{page page='nuxeo-mobile'}}).
{{/callout}}



The OAuth 2 endpoints are now ready to be used.

## OAuth 2 Flow

Here is how Nuxeo handles the OAuth 2 flow to authorize your **application** to access a **protected Nuxeo resource** on behalf of a **user**.

![]({{file name='Nuxeo-OAuth2-Flow.png'}} ?w=500,border=true)

## Authorization Endpoint

```
GET https://NUXEO_SERVER/nuxeo/oauth2/authorize?response_type=code&client_id=myApp
```

**Query parameters:**

<div class="table-scroll">
    <table class="hover">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>`response_type`</td>
                <td>string</td>
                <td>**Yes**</td>
                <td>The value must be `code` for requesting an authorization code.</td>
            </tr>
            <tr>
                <td>`client_id`</td>
                <td>string</td>
                <td>**Yes**</td>
                <td>An enabled client identification</td>
            </tr>
            <tr>
                <td>`redirect_uri`</td>
                <td>string</td>
                <td>No</td>
                <td>The absolute URI to return the user to after authorization is complete</td>
            </tr>
            <tr>
                <td>`state`</td>
                <td>string</td>
                <td>No</td>
                <td>An opaque value used by the client to maintain a state between the request and the redirect callback.</td>
            </tr>
            <tr>
                <td>`scope`</td>
                <td>string</td>
                <td>No</td>
                <td>Ignored in our implementation</td>
            </tr>
            <tr>
                <td>`code_challenge`</td>
                <td>string</td>
                <td>No</td>
                <td>A challenge derived from the [code verifier](#code-verifier), to be verified against later.</td>
            </tr>
            <tr>
                <td>`code_challenge_method`</td>
                <td>string</td>
                <td>No</td>
                <td>The code verifier transformation method: "S256" or "plain".</td>
            </tr>
        </tbody>
    </table>
</div>

{{#> callout type='info' }}
If `Auto-grant` is not checked for the OAuth 2 client registered on the server, the user authorization is handled by accessing `https://NUXEO_SERVER/nuxeo/oauth2Grant.jsp`. That lets you customize the way you want your users to let your application get authorized.
{{/callout}}

{{#> callout type='warning' }}
The `code_challenge` and `code_challenge_method` parameters must be used with a public client, according to the ["Proof Key for Code Exchange by OAuth Public Clients "](https://tools.ietf.org/html/rfc7636) RFC. For the `code_challenge_method`, if the client is capable of using "S256", it **must** use "S256", as "S256" is implemented on the server.
{{/callout}}


## Token Endpoint

### Requesting an Access Token

```
POST https://NUXEO_SERVER/nuxeo/oauth2/token?grant_type=authorization_code&client_id=myApp&code=authorizationCode
```

**Query parameters:**

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Description</th>
</tr>
<tr>
<td>`grant_type`</td>
<td>string</td>
<td>**Yes**</td>
<td>The value must be `authorization_code` for requesting an access token.</td>
</tr>
<tr>
<td>`client_id`</td>
<td>string</td>
<td>**Yes**</td>
<td>Must be the same as previously sent to the Authorization endpoint.</td>
</tr>
<tr>
<td>`client_secret`</td>
<td>string</td>
<td>No</td>
<td>The client's secret</td>
</tr>
<tr>
<td>`code`</td>
<td>string</td>
<td>**Yes**</td>
<td>The authorization code received from the Authorization endpoint</td>
</tr>
<tr>
<td>`redirect_uri`</td>
<td>string</td>
<td>No, only if sent to the Authorization endpoint.</td>
<td>Must be the same as previously sent to the Authorization endpoint.</td>
</tr>
<tr>
<td>{{> anchor 'code-verifier'}}`code_verifier`</td>
<td>string</td>
<td>No, only if `code_challenge` and `code_challenge_method` were sent to the Authorization endpoint.</td>
<td>A high-entropy cryptographic random string using the unreserved characters [A-Z] / [a-z] / [0-9] / "-" / "." / "\_" / "~" from [Section 2.3 of RFC3986](https://tools.ietf.org/html/rfc3986#section-2.3), with a minimum length of 43 characters and a maximum length of 128 characters.</td>
</tr>
</tbody>
</table>
</div>

**Response:**

```
HTTP/1.1 200 OK
Cache-Control: no-cache
Content-Length: 176
Content-Type: application/json;charset=ISO-8859-1

{
    "access_token": "A4zNYD1F7cp9l2UTL14pMT65qsyilgjZ",
    "expires_in": 3599.0,
    "refresh_token": "uFfVCD82NRlzeACoK6Fw09fvkYp6GmkuLs2UigconizFufNxIQZLd7btXLxzUzlB",
    "token_type": "bearer"
}

```
### Refreshing an Access Token

```
POST https://NUXEO_SERVER/nuxeo/oauth2/token?grant_type=refresh_token&client_id=myApp&refresh_token=refreshToken
```

**Query parameters:**

<div class="table-scroll">
    <table class="hover">
    <tbody>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>`grant_type`</td>
            <td>string</td>
            <td>**Yes**</td>
            <td>The value must be `refresh_token` for refreshing an access token.</td>
        </tr>
        <tr>
            <td>`client_id`</td>
            <td>string</td>
            <td>**Yes**</td>
            <td>Must be the same as previously sent to the Authorization endpoint.</td>
        </tr>
        <tr>
            <td>`client_secret`</td>
            <td>string</td>
            <td>No</td>
            <td>The client's secret</td>
        </tr>
        <tr>
            <td>`refresh_token`</td>
            <td>string</td>
            <td>**Yes**</td>
            <td>A refresh token bound to the same client</td>
        </tr>
    </tbody>
    </table>
</div>

**Response:**

```
HTTP/1.1 200 OK
Cache-Control: no-cache
Content-Length: 176
Content-Type: application/json;charset=ISO-8859-1

{
    "access_token": "jkCQ5cgDavJdXlIqWIWwivuhUA2heqBa",
    "expires_in": 3599.0,
    "refresh_token": "R9KzeZSnyo6ErTvYbPifehgsyIhDtdIhBp3XgJQKWcDo2ikZ8Vl2NlMV87d0KEIB",
    "token_type": "bearer"
}
```

### Authenticating Using an Access Token

Once you obtain an access token it can be used to access the protected Nuxeo resources with a request header or a query parameter. Like below using `curl`:

```
curl -H "Authorization: Bearer ACCESS_TOKEN" https://NUXEO_SERVER/nuxeo/api/v1/path/default-domain
```

```
curl https://NUXEO_SERVER/nuxeo/api/v1/path/default-domain?access_token=ACCESS_TOKEN
```

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Authentication and User Management]({{page version='' space='nxdoc' page='authentication-and-user-management'}})
- [Using OpenID / OAuth2 in Login Screen]({{page version='' space='nxdoc' page='using-openid-oauth2-in-login-screen'}})
- [OAuth2 Resource Endpoint]({{page version='' space='nxdoc' page='oauth2-endpoint'}})

{{/panel}}
</div>
</div>
