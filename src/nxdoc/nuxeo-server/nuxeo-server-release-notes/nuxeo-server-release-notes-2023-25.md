---
title: LTS 2023.25 / LTS 2023-HF25
description: Discover what's new in LTS 2023.25 / LTS 2023-HF25
review:
   comment: ''
   date: '2025-01-22'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 280
---

{{! multiexcerpt name='nuxeo-server-updates-2023-25'}}
# What's New in LTS 2023.25 / LTS 2023-HF25

## Fix Rendition Web Adapter for Picture and Video Documents


@rendition rest adapter now returns rendition contributed by rendition providers


## Make Keycloak Logout Work With Client Not Using Credentials


Keycloak logout now works with disabled client authentication.


## SAML Requests Should Be Signed


SAML requests are always signed when KeyManager is configured

The SAML Requests sent to the IDP are always signed when the KeyManager component is configured.

The original cause was a startup order issue where putting the KeyManager contribution before the SAML authenticator could be a workaround.


## CSV Import Optional Trim


 Trimming of imported CSV values can be disabled

You can disable trimming of the imported CSV values with the following contribution:

```
  <require>org.nuxeo.ecm.csv.core.properties</require>

  <extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
    <property name="nuxeo.csv.import.trim">false</property>
  </extension>
```

When importing a CSV with the `CSV.Import` automation operation, you can also set the new `trim` parameter to `false`


## Fix Thumbnail Rendition for JPG With Orientation in EXIF Metadata


Fixed thumbnail rendition for JPG File with orientation in EXIF metadata.



{{! /multiexcerpt}}
