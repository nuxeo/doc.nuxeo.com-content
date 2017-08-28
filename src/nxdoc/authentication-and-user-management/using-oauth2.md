---
title: Using OAuth2
review:
    comment: ''
    date: ''
    status: ok
labels:
    - oauth
    - 5-9-2
toc: true
confluence:
    ajs-parent-page-id: '22380691'
    ajs-parent-page-title: Authentication and User Management
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Using+OAuth2
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Using+OAuth2'
    page_id: '22380744'
    shortlink: yIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/yIBVAQ'
    source_link: /display/NXDOC60/Using+OAuth2
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2014-11-27 17:10'
        message: ormattin
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
OAuth2 is a protocol that allows application request authorization to the Nuxeo Platform without getting user's password (since Nuxeo Platform 5.9.2).

Nuxeo tries to stay very close to the [OAuth2 RFC](http://tools.ietf.org/html/rfc6749) memorandum to ease client integration. Before going any further, because OAuth2 makes a lot of exchanges with clients using query parameters, you **must ensure** to have&nbsp;[configured a TLS]({{page space='admindoc60' page='http-and-https-reverse-proxy-configuration'}}).

RFC describes two endpoints:

*   an Authorization endpoint used by the client to obtain authorization from the resource owner via user-agent redirection,
*   a Token endpoint used by the client to exchange an authorization grant for an access token, typically with client authentication.

## Client Registration

Nuxeo allows you to register client, to specify an arbitrary name, a clientId and a clientSecret. To register your own, go to the **Admin** tab, **OAuth** and **Consumers** tab.

![]({{file name='OAuth2-clients-form.png'}} ?w=650,border=true)

## Authorization Endpoint

### Requesting an Authorization Code

```
GET https://NUXEO_SERVER/oauth2/authorization
```

**Query parameters:**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Name</th><th colspan="1">Type</th><th colspan="1">Description</th></tr><tr><td colspan="1">

response_type

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** The value must be `code` for requesting an authorization code.

</td></tr><tr><td colspan="1">

state

</td><td colspan="1">

string

</td><td colspan="1">

An opaque value used by the client to maintain state between the request and callback.

</td></tr><tr><td colspan="1">

scope

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

_Ignored in our implementation._

</td></tr><tr><td colspan="1">

redirect_uri

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** An absolute URI where the redirection is done after completing the interaction.

</td></tr><tr><td colspan="1">

client_id

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** An enabled client identification.

</td></tr></tbody></table></div>{{#> callout type='note' }}

User authentication is handled by accessing to `https://NUXEO_SERVER/nuxeo/oauth2Grant.jsp` which is behind the default [ `NuxeoAuthenticationFilter`]({{page page='authentication#nuxeoauthenticationfilter'}}). That lets you customize the way you want your users to identify themselves.

{{/callout}}

## Token Endpoint

### Requesting an Access Token

```
GET https://NUXEO_SERVER/oauth2/token
```

**Query parameters:**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Name</th><th colspan="1">Type</th><th colspan="1">Description</th></tr><tr><td colspan="1">

grant_type

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** The value must be `authorization_code` for requesting an access token.

</td></tr><tr><td colspan="1">

code

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** The authorization code received from the Authorization endpoint.

</td></tr><tr><td colspan="1">

redirect_uri

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** Must be the same as previously sent to the Authorization endpoint.

</td></tr><tr><td colspan="1">

client_id

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** Must be the same as previously sent to the Authorization endpoint.

</td></tr><tr><td colspan="1">

client_secret

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** Client's secret.

</td></tr></tbody></table></div>

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Cache-Control: no-store
Pragma: no-cache
{
  "access_token":"H8dXDdEW9U2jJnFDh6lJJ74AHRzCyG4D",
  "token_type":"bearer",
  "expires_in":3600,
  "refresh_token":"Amz8JlyglhGWDmYHMYS5EnTTFUFAwZLiHG4aqQDfkwUNunSMpTTSFUmvprX3WdSF",
}
```

### Refreshing an Access Token

```
 GET https://NUXEO_SERVER/oauth2/token
```

**Query parameters:**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Name</th><th colspan="1">Type</th><th colspan="1">Description</th></tr><tr><td colspan="1">

grant_type

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** The value must be `refresh_token` for requesting an access token.

</td></tr><tr><td colspan="1">

refresh_token

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** A Refresh Token bound to the same Client.

</td></tr><tr><td colspan="1">

client_id

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** Must be the same as previously sent to the Authorization endpoint.

</td></tr><tr><td colspan="1">

client_secret

</td><td colspan="1">

string

</td><td colspan="1">

**REQUIRED.** Client's secret.

</td></tr></tbody></table></div>

**Response:**

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Cache-Control: no-store
Pragma: no-cache
{
  "access_token":"H8dXDdEW9U2jJnFDh6lJJ74AHRzCyG4D",
  "token_type":"bearer",
  "expires_in":3600,
  "refresh_token":"Amz8JlyglhGWDmYHMYS5EnTTFUFAwZLiHG4aqQDfkwUNunSMpTTSFUmvprX3WdSF",
}
```

## Authentication Using an Access Token

Once you have a valid access token, you have to pass it in each requests as an Authorization header. Like below using curl:

```
curl -H "Authorization: Bearer gsQwO6X4zdOOegaR1EZEpRNJ2LK6J8d6" http://NUXEO_SERVER/nuxeo/nxdoc/default/d3db3184-c444-40a4-b838-dfde41ba06a4/view_documents
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Using OAuth]({{page space='admindoc60' page='using-oauth'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
