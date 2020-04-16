---
title: OAuth 2
description: OAuth 2 is a protocol that allows an application to obtain access to the Nuxeo Platform on behalf of a user.
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
    - jsf-ui
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

Nuxeo allows you to register an OAuth 2 client by specifying an arbitrary name, a client ID, possibly a client secret and a list of redirect URIs.</br>
There are different ways to register a client:

### Using Web UI

1. In the left menu of Web UI, go to **Administration** > **Cloud Services** > **Consumers** tab.
2. Click on the **Add** button and then provide a name, a client ID, possibly a client secret, at least one redirect URI and then click on the **Save** button.
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/OAuth 2/OAuth2 Consumer
    name: OAuth2-Consumer.png
    1.1.3#screenshot#up_to_date
--}}
![OAuth2 Consumer](nx_asset://383d8afb-7570-4a3d-b6fd-db0bd9479412 ?w=500,border=true)

### Using JSF UI
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

1. Go to the Nuxeo Platform web interface, then browse to the **Admin Center** > **Cloud Services** > **Consumers** tab.
2. Provide a name, a client ID, possibly a client secret, at least one redirect URI and save.
  ![]({{file name='OAuth2-Consumer.png'}} ?w=500,border=true)

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

{{#> callout type='info' }}
The `Auto-grant` parameter, if checked, allows the OAuth 2 client to bypass the authorization phase, skipping the web page asking the user to allow the application to access the Nuxeo Platform assets. This is the case for the [Mobile application]({{page space='client-apps' page='nuxeo-mobile'}}).
{{/callout}}

The OAuth 2 endpoints are now ready to be used.

## OAuth 2 Flows

### OAuth 2 Authorization Grant Flow

Here is how Nuxeo handles the OAuth 2 flow to authorize your **application** to access a **protected Nuxeo resource** on behalf of a **user**.

![]({{file name='Nuxeo-OAuth2-Flow.png'}} ?w=500,border=true)

### OAuth 2 JWT Flow

Here is how Nuxeo handles the OAuth 2 flow to authorize your **application** to access a **protected Nuxeo resource** thanks to a **JSON Web Token (JWT)** that contains identity and security information.

![]({{file name='Nuxeo-JWT-Flow.png'}} ?w=500,border=true)

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
                <td>An enabled client identification.</td>
            </tr>
            <tr>
                <td>`redirect_uri`</td>
                <td>string</td>
                <td>No</td>
                <td>The absolute URI to return the user to after authorization is complete.</td>
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
                <td>Ignored in our implementation.</td>
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

### Requesting an Access Token with an Authorization Code

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
<td>The client's secret.</td>
</tr>
<tr>
<td>`code`</td>
<td>string</td>
<td>**Yes**</td>
<td>The authorization code received from the Authorization endpoint.</td>
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

### Configuring Nuxeo for JWT access

JWT authentication can be enabled on Nuxeo server if you set `nuxeo.jwt.secret` within your `nuxeo.conf` configuration file.  The secret should be protected as a sensitive value.

### Prepare the JWT assertion

The JWT assertion makes use of the `oauth2Clients` directory entry.  The JWT bearer token must have several required fields in order to generate the OAuth2 token.

**Payload**

The `iss` (issuer) and `sub` (subject) fields are required for JWT generation.

Example payload for JWT assertion:

```json
{
  "iss": "nuxeo",
  "sub": "Nuxeo Subject Username"
}
```

**Encode JWT**

This example uses a node.js package caled `jsonwebtokencli` to generate the encoded form.  Equivalent functions can be found in the Java, Python, and JavaScript libraries.

The JWT secret value (`nuxeo.jwt.secret`), `timestamp`, and usage of the `HS512` algorithm are required to properly encode a JWT token.

```bash
# Install JSON web token command line interface (once)
$ npm install -g jsonwebtokencli
# Encode the token with the above example for 'Administrator' user
$ echo '{"iss":"nuxeo","sub":"Administrator"}' | jwt -s yourSecretValueGoesHere -e --algorithm HS512 -t
# The response will be an encoded JWT value, like:
eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJudXhlbyIsInN1YiI6IkFkbWluaXN0cmF0b3IiLCJpYXQiOjE1ODA0MDEyODB9.uejUtvHXzXzKxedO9Jvvx2GK-4XmMgKW3DR2wbxIvxvC5c1z0atEfFhJJ9qqsMNkXvmm_n2CrcvwBhz3G0RXWg
```

### Requesting an Access Token with a JWT

Use the JSON web token generated in the previous step as the assertion to generate the OAuth2 bearer token (abbreviated here).

```
POST /nuxeo/oauth2/token HTTP/1.1
Host: NUXEO_SERVER/nuxeo
Accept: application/json
Content-Type: application/x-www-form-urlencoded

grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&client_id=myApp&client_secret=secret&assertion=eyJhbGci...
```

**Input parameters:**

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
<td>The value must be `urn:ietf:params:oauth:grant-type:jwt-bearer` for requesting an access token.</td>
</tr>
<tr>
<td>`client_id`</td>
<td>string</td>
<td>**Yes**</td>
<td>The client id, registered in Nuxeo.</td>
</tr>
<tr>
<td>`client_secret`</td>
<td>string</td>
<td>**Yes**</td>
<td>The client's secret</td>
</tr>
<tr>
<td>`assertion`</td>
<td>string</td>
<td>**Yes**</td>
<td>The JSON web token</td>
</tr>
</tbody>
</table>
</div>

_The client ID and secret will be different than the JWT encoded secret._

**Response:**

```
HTTP/1.1 200 OK
Cache-Control: no-cache
Content-Length: 176
Content-Type: application/json;charset=ISO-8859-1

{
    "access_token": "A4zNYD1F7cp9l2UTL14pMT65qsyilgjZ",
    "expires_in": 3599,
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
