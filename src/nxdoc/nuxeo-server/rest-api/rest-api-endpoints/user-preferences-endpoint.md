---
title: User Preferences Endpoint
description: A REST endpoint to manage user preferences.
review:
    comment: ''
    date: '2026-03-02'
    status: ok
labels:
    - endpoint
    - rest-api
toc: true
tree_item_index: 550

---
The User Preferences Endpoint allows to manage the current user's preferences. It is available since `2025.16`.

## Global User Preferences

### Create / Update a User Preference

{{#> panel type='code' heading='Request'}}
```
PUT http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo -d "bar"
```
{{/panel}}

{{#> panel type='code' heading='Response'}}
```javascript
{
  "entity-type": "userPreference",
  "key": "foo",
  "value": "bar"
}
```
{{/panel}}

### Get all User Preferences

{{#> panel type='code' heading='Request'}}
```
GET http://NUXEO_SERVER/nuxeo/api/v1/me/preferences
```
{{/panel}}

{{#> panel type='code' heading='Response'}}
```javascript
{
  "entity-type": "userPreferences",
  "preferences": {
    "foo": "bar",
    "anotherKey": "anotherValue"
  }
}
```
{{/panel}}

### Get a single User Preference

{{#> panel type='code' heading='Request'}}
```
GET http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo
```
{{/panel}}

{{#> panel type='code' heading='Response'}}
```javascript
{
  "entity-type": "userPreference",
  "key": "foo",
  "value": "bar"
}
```
{{/panel}}

### Delete a single User Preference

{{#> panel type='code' heading='Request'}}
```
DELETE http://NUXEO_SERVER/nuxeo/api/v1/me/preferences/foo
```
{{/panel}}

## Document User Preferences

The **@preferences** [Document Adapter]({{page page='rest-api-web-adapters'}}) allows to manage per-document user preferences.

### Create / Update document preferences

{{#> panel type='code' heading='Request'}}
```
PUT http://NUXEO_SERVER/nuxeo/api/v1/path/{pathOfTheDoc}/@preferences
```
```javascript
{
  "entity-type": "userPreferences",
  "preferences": {
    "key1": "value1",
    "key2": "value2"
  }
}
```
{{/panel}}

### Get all document preferences

{{#> panel type='code' heading='Request'}}
```
GET http://NUXEO_SERVER/nuxeo/api/v1/path/{pathOfTheDoc}/@preferences
```
{{/panel}}

### Get a single document preference

{{#> panel type='code' heading='Request'}}
```
GET http://NUXEO_SERVER/nuxeo/api/v1/path/{pathOfTheDoc}/@preferences/{preferenceKey}
```
{{/panel}}

### Remove a single document preference

{{#> panel type='code' heading='Request'}}
```
DELETE http://NUXEO_SERVER/nuxeo/api/v1/path/{pathOfTheDoc}/@preferences/{preferenceKey}
```
{{/panel}}

### Delete all document preferences

{{#> panel type='code' heading='Request'}}
```
DELETE http://NUXEO_SERVER/nuxeo/api/v1/path/{pathOfTheDoc}/@preferences
```
{{/panel}}

## Configuration

The following nuxeo configuration properties are available:
 - **nuxeo.user.preferences.max** defines the maximum number of preferences per user; the default is `2000`
 - **nuxeo.user.preferences.sanitizeValues.enabled** defines whether HTML sanitization is performed on preference values before persisting them; the default is `true`