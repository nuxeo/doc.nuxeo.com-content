---
title: 'HOWTO: Disable by Coverage and by Subjects Virtual Navigations'
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to disable the existing By Coverage and By Subjects virtual navigations with Nuxeo Studio.
        level: Advanced
        tool: 'Studio, XML extensions'
        topics: 'Content View, Virtual Navigation'
labels:
    - content-review-lts2016
    - virtual-navigation
    - howto
    - content-view
    - atchertchian
    - extension-point
    - vocabulary
    - studio
    - virtual-navigation-component
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '20517205'
    ajs-parent-page-title: Nuxeo Virtual Navigation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Disable+by+Coverage+and+by+Subjects+Virtual+Navigations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Disable+by+Coverage+and+by+Subjects+Virtual+Navigations'
    page_id: '6030379'
    shortlink: KwRc
    shortlink_source: 'https://doc.nuxeo.com/x/KwRc'
    source_link: /display/NXDOC/How+to+Disable+by+Coverage+and+by+Subjects+Virtual+Navigations
history:
    -
        author: Arnaud Kervern
        date: '2015-10-13 16:25'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2014-12-01 22:21'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-11-03 16:35'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-09-15 16:31'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-09-15 15:44'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-08-21 11:29'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-08-21 11:28'
        message: Formatting
        version: '22'
    -
        author: Solen Guitter
        date: '2014-03-10 18:05'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-02-03 18:07'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-01-31 16:38'
        message: '5.4.3 => 5.5'
        version: '19'
    -
        author: Solen Guitter
        date: '2014-01-31 16:38'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-11-29 11:43'
        message: Removed related topics from TOC
        version: '17'
    -
        author: Solen Guitter
        date: '2013-09-02 15:06'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-09-02 11:54'
        message: Added TOC
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2013-08-12 15:53'
        message: add info on how to hide virtual navs without disabling them
        version: '14'
    -
        author: Alain Escaffre
        date: '2012-12-31 03:19'
        message: ''
        version: '13'
    -
        author: Benjamin Jalon
        date: '2012-11-29 10:29'
        message: ''
        version: '12'
    -
        author: Benjamin Jalon
        date: '2012-11-29 10:28'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2012-11-27 16:23'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2012-11-27 16:23'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2011-09-12 12:32'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Solen Guitter
        date: '2011-09-12 12:32'
        message: updated menu label and added related howtos and tutorials.
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2011-09-07 14:28'
        message: ''
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2011-08-25 15:41'
        message: ''
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2011-08-25 15:40'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2011-08-25 13:29'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-03-30 11:42'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-03-30 11:39'
        message: ''
        version: '1'

---
{{! excerpt}}

You can contribute [new virtual navigations in Nuxeo with Studio]({{page space='studio' page='virtual-navigations'}}). It is possible to disable or hide the existing By Coverage and By Subjects one.

{{! /excerpt}}

## Disabling Default Virtual Navigations

If you'd like to disable the By coverage and By Subject virtual navigations, you can do so with the following contribution:

```
<extension target="org.nuxeo.ecm.webapp.directory.DirectoryTreeService"
  point="trees">
  <directoryTree name="bySubjectsNavigation" enabled="false" />
  <directoryTree name="byCoverageNavigation" enabled="false" />
</extension>

```

When disabling them outside of a Studio contribution, the following requirement is also needed to ensure that this contribution is loaded after the default ones:

```xml
<require>
  org.nuxeo.ecm.virtualnavigation.directory.DirectoryTreeService.contrib
</require>

```

{{#> callout type='note' }}

If you're using the faceted search, disabling these configurations will produce misbehaviours in widgets presenting these trees, and will produce the following error logs:

```
ERROR [org.nuxeo.ecm.webapp.directory.DirectoryTreeManagerBean] no DirectoryTreeDescriptor registered as byCoverageNavigation
ERROR [org.nuxeo.ecm.webapp.directory.DirectoryTreeManagerBean] no DirectoryTreeDescriptor registered as bySubjectsNavigation
```

In this case, you just need to hide these virtual navigations instead of disabling them.

{{/callout}}

## Hiding Default Virtual Navigations

To hide the By Coverage and By Subjects virtual navigations, you just need to declare an XML extension from the **Advanced Settings** menu entry.

```xml
<extension target="org.nuxeo.ecm.webapp.directory.DirectoryTreeService"
  point="trees">
  <directoryTree name="bySubjectsNavigation" isNavigationTree="false" />
  <directoryTree name="byCoverageNavigation" isNavigationTree="false" />
</extension>

```

When hiding them outside of a Studio contribution, the following requirement is also needed to ensure that this contribution is loaded after the default ones:

```xml
<require>
  org.nuxeo.ecm.virtualnavigation.directory.DirectoryTreeService.contrib
</require>

```

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-tos'}}

- [HOWTO: Add a New Virtual Navigation Entry]({{page page='how-to-add-a-new-virtual-navigation-entry'}})
- [HOWTO: Define a New Content View]({{page page='how-to-define-a-new-content-view'}})
- [HOWTO: Customize the Default Content and Trash Listings]({{page page='how-to-customize-the-default-content-and-trash-listings'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
