---
title: OAuth2 Resource Endpoint
description: A REST endpoint to retrieve oauth2 provider data.
review:
    comment: ''
    date: '2017-01-09'
    status: ok
labels:
    - lts2016-ok
    - rest-api
    - endpoint
    - oauth2
toc: true
tree_item_index: 500

---
The OAuth2 endpoint allows REST clients to retrieve information about OAuth2 providers. It is available since 8.4.

For a given provider and user, the OAuth2 endpoint provides access to:

* Authentication data
* A valid access token

## Retrieving Authentication Data

Authentication data for a particular OAuth2 provider can be retrieved from `/nuxeo/api/v1/oauth2/provider/{providerId}`, including the following details:

**Query parameters:**

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Key</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">`serviceName`</td>
        <td colspan="1">The provider ID</td>
      </tr>
      <tr>
        <td colspan="1">`isAvailable`</td>
        <td colspan="1">`true` if provider is enabled and both client ID and client secret are defined; `false` otherwise</td>
      </tr>
      <tr>
        <td colspan="1">`clientId`</td>
        <td colspan="1">The client ID</td>
      </tr>
      <tr>
        <td colspan="1">`authorizationURL`</td>
        <td colspan="1">The URL used to display the consent screen</td>
      </tr>
      <tr>
        <td colspan="1">`userId`</td>
        <td colspan="1">The user ID</td>
      </tr>
      <tr>
        <td colspan="1">`isAuthorized`</td>
        <td colspan="1">`true` if server has access token stored for current user; `false` otherwise</td>
      </tr>
    </tbody>
  </table>
</div>

### Example

{{#> panel type='code' heading='Request'}}

```
GET https://NUXEO_SERVER/nuxeo/api/v1/oauth2/provider/googledrive
```

{{/panel}}

{{#> panel type='code' heading='Response'}}
```json
{
  "isAvailable": true,
  "isAuthorized": true,
  "clientId": "123....apps.googleusercontent.com",
  "authorizationURL": "https://accounts.google.com/o/oauth2/auth?client_id=...",
  "serviceName": "googledrive",
  "userId": "johndoe@something.com"
}
```
{{/panel}}

## Getting an Access Token

A valid access token for the current user can be retrieved via `/nuxeo/api/v1/oauth2/provider/{providerId}/token`. If the token currently stored by the Nuxeo server is already expired, a new one will be requested from the service provider.

### Example

{{#> panel type='code' heading='Request'}}

```
GET https://NUXEO_SERVER/nuxeo/api/v1/oauth2/provider/googledrive/token
```

{{/panel}}

{{#> panel type='code' heading='Response'}}
```json
{
  "token": "abc57.Gsda..."
}
```
{{/panel}}


* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [REST API]({{page page='rest-api'}})
- [Using OAuth2]({{page page='using-oauth2'}})

{{/panel}}
</div>
</div>
