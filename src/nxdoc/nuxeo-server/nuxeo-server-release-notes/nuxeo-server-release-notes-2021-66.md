---
title: LTS 2021.66 / LTS 2021-HF66
description: Discover what's new in LTS 2021.66 / LTS 2021-HF66
review:
   comment: ''
   date: '2025-01-22'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 1670
hidden: true
---

{{! multiexcerpt name='nuxeo-server-updates-2021-66'}}
# What's New in LTS 2021.66 / LTS 2021-HF66

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
