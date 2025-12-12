---
title: LTS 2023.40 / LTS 2023-HF40
description: Discover what's new in LTS 2023.40 / LTS 2023-HF40
review:
   comment: ''
   date: '2025-12-12'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 0
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2023-40'}}
# What's New in LTS 2023.40 / LTS 2023-HF40

## Take Into Account Bundle-Revision Header From MANIFEST.MF File

Support Bundle-Revision from MANIFEST.MF file

The Bundle MANIFEST.MF entry `Bundle-Revision` is now supported by Nuxeo.

The revision can then be accessed within Nuxeo Runtime APIs when added to the `META-INF/MANIFEST.MF` file within a Nuxeo Bundle jar.

You can access it with the Nuxeo Runtime Java APIs:

```
import org.nuxeo.osgi.BundleManifestReader;
import org.nuxeo.runtime.api.Framework;

public String getBundleRevision(String bundleSymbolicName) {
  return Framework.getRuntime().getBundle(bundleSymbolicName).getHeaders().get(BundleManifestReader.BUNDLE_REVISION);
}
```

The revision could also be retrieved with the Management Distribution REST endpoint:

```
curl -u Administrator:Administrator http://localhost:8080/nuxeo/api/v1/management/distribution

{
  ...
  "bundles": [
    ...
    {
      "name": "org.nuxeo.example.bundle.revision",
      "version": "2025.0-SNAPSHOT",
      "revision": "d61419750b2d282469720a280d1d772b7dea3454"
    },
    ...
  ],
  ...
}
```
## Restrict to Test Scope the Use of org.awaitility.awaitility Library

The awaitility dependency is now declared as test


{{! /multiexcerpt}}
