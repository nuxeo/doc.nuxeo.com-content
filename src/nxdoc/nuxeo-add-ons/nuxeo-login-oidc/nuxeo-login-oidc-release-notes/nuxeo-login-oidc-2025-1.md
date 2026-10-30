---
title: Nuxeo OIDC Login 2025.1
description: Release notes for Nuxeo OIDC Login 2025.1
tree_item_index: 200
review:
  comment: ''
  date: '2026-10-29'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-login-oidc-2025-1'}}

## What's New in Nuxeo OIDC Login for LTS 2025 (Version 2025.1)

This release adds group propagation from the identity provider and single sign-out with the provider. It also includes technical enhancements.

## Requirements

Nuxeo OIDC Login 2025.1 requires **Nuxeo LTS 2025.27.34 or later**. Upgrade the platform before installing or upgrading the package.

## Released Changes

### Functional Enhancements

#### Nuxeo Groups from the Provider's Group Claim

Users can now get Nuxeo groups from their identity provider. At each sign-in, the values of the ID token's group claim (for Microsoft Entra ID, the group object ids) are mapped onto Nuxeo groups through a mapping table you contribute.

The feature is off by default. To turn it on, add the following to `nuxeo.conf`:

```properties
nuxeo.oidc.entra.groupLookupEnabled=true
# Name of the ID-token claim carrying the group values (default: groups)
nuxeo.oidc.entra.groupsClaim=groups
```

Then define the mapping table in an XML contribution, for example in `nxserver/config/oidc-groups-config.xml`:

```xml
<component name="my.oidc.group-mappings">
  <require>org.nuxeo.ecm.platform.login.oidc.entra</require>
  <extension target="org.nuxeo.ecm.platform.login.oidc" point="providers">
    <provider name="entra">
      <groupMappings>
        <groupMapping oidcValue="<entra-group-object-id>" nuxeoGroup="engineering" />
        <groupMapping oidcValue="<entra-group-object-id>" nuxeoGroup="readers" />
      </groupMappings>
    </provider>
  </extension>
</component>
```

A later contribution can re-target a value, or drop it with `remove="true"`. Values are compared exactly (case-sensitive).

How the mapped groups behave:

- **Virtual by default.** The groups are added to the user every time Nuxeo loads them, on every path (sign-in, REST API, background work). Nothing is written to the user, the user directory or any group.
- **Kept up to date.** Each sign-in replaces the stored group values with the ones in the new ID token. If a user is removed from a group at the provider, they lose the mapped Nuxeo group at their next sign-in. A change to the mapping table applies right away, without a new sign-in.
- **Groups are never created.** Mapping onto an existing group grants it without changing its members, label or hierarchy. A mapped name that doesn't exist as a group appears as a computed group in group searches, such as ACL pickers. Create stored target groups before mapping them: while a name is mapped, Nuxeo refuses to create a group with that name.
- **Unknown values are ignored.** Claim values are never logged.
- **No claim, no mapped groups.** Users without a group claim keep their directory groups only. This includes Entra users who belong to too many groups (the Entra "groups overage"), as resolving them would need Microsoft Graph, which the add-on doesn't call.

The raw claim values are stored in a new `oidcGroupClaims` directory, which uses the same backend (SQL or MongoDB) as your other directories and is readable by administrators only. These values are personal data. Deleting a user deletes their stored values.

{{#> callout type='info'}}
If the principal cache is enabled (for example with an LDAP user directory), group changes reach other cluster nodes immediately only when `nuxeo.cluster.enabled=true` and a pub/sub broker are configured. Otherwise, another node can serve the previous groups until its cache entry expires (1 minute by default).
{{/callout}}

##### Optional: Persist Memberships in the Group Directory

Set `nuxeo.oidc.entra.persistGroupMemberships=true` to also write the mapped memberships into existing groups of the group directory, and remove the ones a later sign-in no longer maps. The group directory must be writable: a read-only one (such as LDAP) makes the server fail at startup when this flag is set.

{{#> callout type='warning'}}
The recommended configuration keeps `persistGroupMemberships` off and relies on virtual groups only. Persisted memberships are ordinary memberships: turning the flag (or `groupLookupEnabled`) off later does **not** remove them. Changing a mapping can also leave users in the previous group. Clean such memberships manually.
{{/callout}}

#### Signing Out Also Signs Out of the Provider

Signing out of a session opened through OIDC now also ends the user's session at the identity provider (OpenID Connect RP-Initiated Logout). The next sign-in requires the user to authenticate at the provider again.

After the provider signs the user out, it sends the browser back to the Nuxeo startup page. To use another page of your Nuxeo server, set:

```properties
# Optional. A same-origin, context-relative absolute path (must start with a single "/").
nuxeo.oidc.postLogoutRedirectUrl=/nuxeo/home.html
```

Register the matching absolute URL (for example `https://<your-host>/nuxeo/home.html`) as a redirect URI on the provider application, otherwise the provider won't send the browser back to it. A value pointing to another site is ignored and the default page is used.

The Nuxeo session is always closed. The sign-out stays local to Nuxeo, without an error for the user, when:

- the provider doesn't publish a sign-out endpoint, or that endpoint isn't HTTPS;
- the provider's issuer has changed since the user signed in;
- the sign-out request to the provider can't be built or sent.

Sessions opened with other authentication methods (basic, token, form) sign out as before. Back-channel logout and signing the user out of other applications are not supported.

### Technical Enhancements

#### External Identifier Stored by the Platform

When a user is created at first sign-in (`nuxeo.oidc.entra.jitEnabled=true`), their external identifier (`sys:id`) is now stored by the Nuxeo Platform instead of by the add-on. This change requires Nuxeo LTS 2025.27.34 or later. Matching and creating users work as before, and no configuration change is needed.

#### Tests Run on the Nuxeo Runtime

The add-on's automated tests now run on the Nuxeo test runtime instead of hand-written stubs, so they check the real platform services and configuration.

## Upgrade Notes

- In 2025.0, `nuxeo.oidc.entra.groupLookupEnabled` was reserved and had no effect. If it is already set to `true` in your `nuxeo.conf`, group propagation starts working after the upgrade: contribute your mapping table, or set the flag to `false`.
- Signing out now also signs users out of the identity provider. Register the post-logout page on the provider application if you set `nuxeo.oidc.postLogoutRedirectUrl`.

{{! /multiexcerpt}}
