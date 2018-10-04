---
title: How to Customize Nuxeo Drive Versioning Policy
review:
    comment: ''
    date: '2017-12-15'
    status: ok
details:
    howto:
        excerpt: "This how-to explains how to change Nuxeo Drive's default versioning policy."
        level: Intermediate
        tool: XML Extention
        topics: 'Nuxeo Drive, Versioning'
labels:
    - lts2016-ok
    - link-update
    - howto
    - nuxeo-drive
    - yachour
    - multiexcerpt-include
    - multiexcerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '14257229'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+Nuxeo+Drive+Versioning+Policy
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+Nuxeo+Drive+Versioning+Policy'
    page_id: '23365773'
    shortlink: jYhkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/jYhkAQ'
    source_link: /display/NXDOC/How+to+Customize+Nuxeo+Drive+Versioning+Policy
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2016-08-08 15:19'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-04-21 09:58'
        message: 'javadoc links updated  '
        version: '7'
    -
        author: Manon Lumeau
        date: '2016-03-21 15:30'
        message: ''
        version: '6'
    -
        author: Manon Lumeau
        date: '2015-06-09 08:53'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-04-14 09:57'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-02-09 08:43'
        message: fix link
        version: '3'
    -
        author: Solen Guitter
        date: '2015-02-09 08:42'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-02-06 16:32'
        message: ''
        version: '1'

---
{{! multiexcerpt name='drive_versioning_policy'}}

{{{multiexcerpt 'drive-versioning' page='NXDOC:Nuxeo Drive'}}}

## How to Configure the Versioning Delay or Version Increment

You can contribute a new versioning policy and filter thanks to the extension points [policies](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--policies) and [filters](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--filters) to configure the last edit delay until a new version is created and which version increment will occur (minor or major).

For example, to create a major version if the document is modified 30 minutes after the last change, use this contribution:

```xml
<require>org.nuxeo.ecm.core.versioning.default-policies</require>

<extension target="org.nuxeo.ecm.core.versioning.VersioningService" point="policies">
    <policy id="versioning-delay" increment="MAJOR" order="40">
        <filter-id>versioning-delay</filter-id>
        <filter-id>drive-filter</filter-id>
    </policy>
</extension>

<extension target="org.nuxeo.ecm.core.versioning.VersioningService" point="filters">
    <filter id="versioning-delay">
        <condition>#{currentDocument.dc.modified.time - previousDocument.dc.modified.time >= 1800000}</condition>
    </filter>
    <filter id="drive-filter">
        <condition>#{currentDocument.contextData.source == "drive"}</condition>
    </filter>
</extension>
```

## How to Change Nuxeo Drive Versioning Policy


If you need to make more changes on the versioning mechanism in Nuxeo Drive, you can write your own implementation of the [VersioningPolicyFilter](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/versioning/VersioningPolicyFilter.html) interface, and contribute it to the [filters](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.versioning.VersioningService--filters) extension point.


```xml
<extension target="org.nuxeo.ecm.core.versioning.VersioningService" point="policies">
    <policy id="custom-versioning-policy" increment="MAJOR" order="40">
        <filter-id>custom-versioning-filter</filter-id>
    </policy>
</extension>

<extension target="org.nuxeo.ecm.core.versioning.VersioningService" point="filters">
    <filter id="custom-versioning-filter" class="foo.bar.CustomVersioningFilter">
</extension>
```

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Nuxeo Drive developer documentation]({{page page='nuxeo-drive'}})
- [Nuxeo Drive FAQ]({{page version='' space='nxdoc' page='nuxeo-drive-faq'}})
- [How to Manually Initialize or Deploy a Nuxeo Drive Instance]({{page page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
