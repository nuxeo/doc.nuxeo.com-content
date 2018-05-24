---
title: OAuth2
description: A REST endpoint to retrieve oauth2 provider data.
review:
    comment: ''
    date: '2018-04-12'
    status: ok
labels:
    - lts2016-ok
    - rest-api
    - troger
    - endpoint
    - oauth2
    - lts2017-ok
toc: true
tree_item_index: 500

---
The OAuth2 endpoint allows REST clients to retrieve information about OAuth2 providers and tokens. It is available since 8.10.

Several resources are exposed by this endpoint, which allows to:

* Create, read, update and delete OAuth2 providers
* Read OAuth2 clients
* Get a valid access token for a given provider or client for the current user
* Read, update and delete OAuth2 tokens

## CRUD on OAuth2 Providers

OAuth2 service providers can be created, read, updated and deleted using the following resources:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Path</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/provider`</td>
        <td>Gets the list of registered OAuth2 service providers.</td>
      </tr>
      <tr>
        <td>POST `/api/v1/oauth2/provider`</td>
        <td>Creates a new OAuth2 service provider. Only available to Administrators.</td>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/provider/{providerName}`</td>
        <td>Gets the details for a given provider.</td>
      </tr>
      <tr>
        <td>PUT `/api/v1/oauth2/provider/{providerName}`</td>
        <td>Updates an OAuth2 service provider. Only available to Administrators.</td>
      </tr>
      <tr>
        <td>DELETE `/api/v1/oauth2/provider/{providerName}`</td>
        <td>Deletes an OAuth2 service provider. Only available to Administrators.</td>
      </tr>
    </tbody>
  </table>
</div>

OAuth2 providers exchanged via REST API are represented by the following properties:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Property</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">`entity-type`</td>
        <td colspan="1">The entity-type of this object, in this case `nuxeoOAuth2ServiceProvider`.</td>
      </tr>
      <tr>
        <td colspan="1">`serviceName`</td>
        <td colspan="1">The provider ID.</td>
      </tr>
      <tr>
        <td colspan="1">`description`</td>
        <td colspan="1">The description of the provider.</td>
      </tr>
      <tr>
        <td colspan="1">`clientId`</td>
        <td colspan="1">The OAuth2 client ID.</td>
      </tr>
      <tr>
        <td colspan="1">`clientSecret`</td>
        <td colspan="1">The OAuth2 client secret.</td>
      </tr>
      <tr>
        <td colspan="1">`authorizationServerURL`</td>
        <td colspan="1">The URL of the authorization server.</td>
      </tr>
      <tr>
        <td colspan="1">`tokenServerURL`</td>
        <td colspan="1">The URL of the token server.</td>
      </tr>
      <tr>
        <td colspan="1">`scopes`</td>
        <td colspan="1">The list of user account scopes to which access will be requested.</td>
      </tr>
      <tr>
        <td colspan="1">`isEnabled`</td>
        <td colspan="1">`true` if provider is enabled; `false` otherwise. Will be set to `false` automatically if `clientId` and `clientSecret` are undefined.</td>
      </tr>
      <tr>
        <td colspan="1">`isAvailable`</td>
        <td colspan="1">`true` if provider is enabled and both `clientId` and `clientSecret` are defined; `false` otherwise.</td>
      </tr>
      <tr>
        <td colspan="1">`authorizationURL`</td>
        <td colspan="1">The URL used to display the consent screen.</td>
      </tr>
      <tr>
        <td colspan="1">`isAuthorized`</td>
        <td colspan="1">`true` if server has access token stored for current user; `false` otherwise.</td>
      </tr>
      <tr>
        <td colspan="1">`userId`</td>
        <td colspan="1">The user ID.</td>
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
  "entity-type": "nuxeoOAuth2ServiceProvider",
  "serviceName": "googledrive",
  "description": "Google Drive",
  "clientId": "123-....apps.googleusercontent.com",
  "clientSecret": "...",
  "authorizationServerURL": "https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force",
  "tokenServerURL": "https://accounts.google.com/o/oauth2/token",
  "userAuthorizationURL": null,
  "scopes": [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.apps.readonly",
    "email"
  ],
  "isEnabled": true,
  "isAvailable": true,
  "authorizationURL": "https://accounts.google.com/o/oauth2/auth?client_id=...",
  "isAuthorized": false,
  "userId": null
}
```
{{/panel}}

### Getting an Access Token

A valid access token for the current user can be retrieved via `/nuxeo/api/v1/oauth2/provider/{providerId}/token`. If the token currently stored by the Nuxeo server is already expired, a new one will be requested from the service provider.

#### Example

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

## Getting OAuth2 Clients

Information about a particular or all OAuth2 clients can be retrieved through these resources:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Path</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/client`</td>
        <td>Gets the list of registered OAuth2 clients.</td>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/client/{clientId}`</td>
        <td>Gets the details for a given client.</td>
      </tr>
    </tbody>
  </table>
</div>

OAuth2 clients have the following properties:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Property</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">`entity-type`</td>
        <td colspan="1">The entity-type of this object, in this case `oauth2Client`.</td>
      </tr>
      <tr>
        <td colspan="1">`id`</td>
        <td colspan="1">The client ID.</td>
      </tr>
      <tr>
        <td colspan="1">`name`</td>
        <td colspan="1">The client name.</td>
      </tr>
      <tr>
        <td colspan="1">`isEnabled`</td>
        <td colspan="1">`true` if client is enabled; `false` otherwise.</td>
      </tr>
    </tbody>
  </table>
</div>

### Example

{{#> panel type='code' heading='Request'}}

```
GET https://NUXEO_SERVER/nuxeo/api/v1/oauth2/client/nuxeo-mobile
```

{{/panel}}

{{#> panel type='code' heading='Response'}}
```json
{
  "entity-type": "oauth2Client",
  "id": "nuxeo-mobile",
  "name": "Nuxeo Mobile",
  "isEnabled": true
}
```
{{/panel}}

## Reading, Updating and Deleting OAuth2 Tokens

The following resources are available for managing tokens:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Path</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/token`</td>
        <td>Retrieves a list of all stored tokens for all users. Only available to Administrators.</td>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/token/provider`</td>
        <td>Retrieves all stored tokens for a given service provider and for the current user.</td>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/token/{providerName}/{nxLogin}`<br/>
        (deprecated since 10.2; use the endpoint below instead)</td>
        <td>Retrieves a stored token for a given service provider and user.</td>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/token/provider/{providerName}/user/{nxLogin}`</td>
        <td>Retrieves a stored token for a given service provider and user.</td>
      </tr>
      <tr>
        <td>PUT `/api/v1/oauth2/token/{providerName}/{nxLogin}`<br/>
        (deprecated since 10.2; use the endpoint below instead)</td></td>
        <td>Updates a stored token for a given service provider and user.</td>
      </tr>
      <tr>
        <td>PUT `/api/v1/oauth2/token/provider/{providerName}/user/{nxLogin}`</td>
        <td>Updates a stored token for a given service provider and user.</td>
      </tr>
      <tr>
        <td>DELETE `/api/v1/oauth2/token/{providerName}/{nxLogin}`<br/>
        (deprecated since 10.2; use the endpoint below instead)</td></td>
        <td>Deletes a stored token for a given service provider and user.</td>
      </tr>
      <tr>
        <td>DELETE `/api/v1/oauth2/token/provider/{providerName}/user/{nxLogin}`</td>
        <td>Deletes a stored token for a given service provider and user.</td>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/token/client`</td>
        <td>Retrieves all stored tokens for a given client and for the current user.</td>
      </tr>
      <tr>
        <td>GET `/api/v1/oauth2/token/client/{clientId}/user/{nxLogin}`</td>
        <td>Retrieves a stored token for a given client and user.</td>
      </tr>
      <tr>
        <td>PUT `/api/v1/oauth2/token/client/{clientId}/user/{nxLogin}`</td>
        <td>Updates a stored token for a given client and user.</td>
      </tr>
      <tr>
        <td>DELETE `/api/v1/oauth2/token/client/{clientId}/user/{nxLogin}`</td>
        <td>Deletes a stored token for a given client and user.</td>
      </tr>
    </tbody>
  </table>
</div>

OAuth2 tokens are represented by the following properties:

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Property</th>
        <th colspan="1">Description</th>
      </tr>
      <tr>
        <td colspan="1">`entity-type`</td>
        <td colspan="1">The entity-type of this object, in this case `nuxeoOAuth2Token`.</td>
      </tr>
      <tr>
        <td colspan="1">`clientId`</td>
        <td colspan="1">The client ID.</td>
      </tr>
      <tr>
        <td colspan="1">`serviceName`</td>
        <td colspan="1">The provider ID.</td>
      </tr>
      <tr>
        <td colspan="1">`creationDate`</td>
        <td colspan="1">The creation date of the token.</td>
      </tr>
      <tr>
        <td colspan="1">`nuxeoLogin`</td>
        <td colspan="1">The Nuxeo user id to whom the token corresponds to.</td>
      </tr>
      <tr>
        <td colspan="1">`serviceLogin`</td>
        <td colspan="1">The id used by the service to identify the user.</td>
      </tr>
      <tr>
        <td colspan="1">`isShared`</td>
        <td colspan="1">`true` if the token is shared with other users; `false` otherwise.</td>
      </tr>
      <tr>
        <td colspan="1">`sharedWith`</td>
        <td colspan="1">A list of users and groups the token has been shared with.</td>
      </tr>
    </tbody>
  </table>
</div>

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [REST API]({{page page='rest-api'}})
- [Using OAuth2]({{page page='using-oauth2'}})

{{/panel}}
</div>
</div>
