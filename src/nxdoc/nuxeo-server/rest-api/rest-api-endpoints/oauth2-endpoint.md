---
title: OAuth2 Endpoint
description: A REST endpoint to retrieve oauth2 provider data.
review:
    comment: ''
    date: '2017-01-04'
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

For a given provider and user, the OAuth2 endpoint providess access to:
- authentication data
- a valid access token

# Retrieving authentication data

Authentication data for a particular OAuth2 provider can be retrieved from `/nuxeo/api/v1/oauth2/provider/{providerId}`,
including the following details:

- **serviceName**: the id of the provider
- **isAvailable**: *true* if the provider is enabled and both the client id and client secret were defined; *false* otherwise
- **clientId**: the client id
- **authorizationURL**: the url used to display the consent Screen
- **userId**: the user id
- **isAuthorized**: *true* if the server has an access token stored for the current user; *false* otherwise

## Example:

{{#> panel type='code' heading='Request'}}

`GET http://localhost:8080/nuxeo/api/v1/oauth2/provider/googledrive`

{{/panel}}

{{#> panel type='code' heading='Response'}}
```json
{
  "isAvailable": true,
  "isAuthorized": true,
  "clientId": "123....apps.googleusercontent.com",
  "authorizationURL": "https://accounts.google.com/o/oauth2/auth?client_id=...",
  "serviceName": "googledrive",
  "userId": "jhondoe@something.com"
}
```
{{/panel}}

# Getting an access token

A valid access token for the current user can be retrieved via `/nuxeo/api/v1/oauth2/provider/{providerId}/token`. If the token currently stored by the nuxeo server is already expired, a new one will be requested
from the service provider.

## Example:

{{#> panel type='code' heading='Request'}}

`GET http://localhost:8080/nuxeo/api/v1/oauth2/provider/googledrive/token`

{{/panel}}

{{#> panel type='code' heading='Response'}}
```json
{
  "token": "abc57.Gsda..."
}
```
{{/panel}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [REST API]({{page page='rest-api'}})
- [Using OAuth2]({{page page='using-oauth2'}})

{{/panel}}</div></div>
