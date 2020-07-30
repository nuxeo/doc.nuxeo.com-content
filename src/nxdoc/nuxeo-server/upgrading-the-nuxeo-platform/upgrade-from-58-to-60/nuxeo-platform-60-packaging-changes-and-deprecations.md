---
title: Nuxeo Platform 6.0 Packaging Changes and Deprecations
review:
    comment: ''
    date: '2017-02-14'
    status: ok
labels:
    - lts2016-ok
    - excerpt
    - multiexcerpt
    - content-review-lts2017
toc: true
hidden: true
confluence:
    ajs-parent-page-id: '17794754'
    ajs-parent-page-title: Upgrade from 5.8 to 6.0
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Platform+6.0+Packaging+Changes+and+Deprecations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Platform+6.0+Packaging+Changes+and+Deprecations'
    page_id: '20518793'
    shortlink: iRc5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/iRc5AQ'
    source_link: /display/NXDOC/Nuxeo+Platform+6.0+Packaging+Changes+and+Deprecations
version_override:
    LTS 2015: 710/admindoc/nuxeo-platform-60-packaging-changes-and-deprecations
history:
    -
        author: Solen Guitter
        date: '2015-11-27 15:05'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-09-30 15:53'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-06-29 13:45'
        message: Fix link to Social Collaboration migration script
        version: '14'
    -
        author: Solen Guitter
        date: '2015-04-14 14:24'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-01-22 14:30'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-01-22 14:25'
        message: Add link to Social Collaboration migration script and readme
        version: '11'
    -
        author: Solen Guitter
        date: '2014-11-28 18:32'
        message: link to virtual nav addon
        version: '10'
    -
        author: Solen Guitter
        date: '2014-11-14 17:47'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-11-14 17:46'
        message: typo
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-11-14 17:45'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-11-14 17:39'
        message: Add details about faceted search and dam
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-11-14 17:24'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-11-14 17:17'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-11-14 17:15'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-11-14 17:15'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-11-14 17:05'
        message: ''
        version: '1'

---
{{! multiexcerpt name='package-changes-deprecations'}}{{! excerpt}}

This page lists all the packaging changes and deprecations that you need to know when upgrading from Nuxeo Platform 5.8 to 6.0.

{{! /excerpt}}

For Nuxeo Studio projects upgrade to Nuxeo Platform 6.0, please refer to the page [Specific Upgrade Instructions]({{page space='studio' page='specific-upgrade-instructions'}}) in the Studio documentation.

## Nuxeo Document Management Features

The module Document Management doesn't exist anymore in Nuxeo Platform 6.0\. Some of its features have been included in the default platform package, some are now available as independent Nuxeo Packages, and some have been deprecated. The next sections detail the features that have deprecated or moved out of the default distribution of the platform. Features not listed are now included in the default Nuxeo Platform package.

### Faceted Search - Deprecated

{{! multiexcerpt name='faceted-search-deprecation-text'}}

Faceted search used to come with the DM package. For Nuxeo Platform 6.0 it is an independent addon and has been deprecated. From an end user point of view, the search experience provided by faceted search is now available by default in the Search tab.

{{! /multiexcerpt}}

Custom faceted search are available in the new Search tab by default.

Saved faceted searches based on the default search are not available in the Search tab after the upgrade to version 6.0\. They are still in the faceted search view if you have installed the Faceted search package. Saved searches based on custom faceted search made with Nuxeo Studio are available in the Search tab.

### Mail Folder

Nuxeo Document Management provided a document type called Mail folder. This feature is now available as an independent addon called IMAP Connector.

### Nuxeo Diff

[Nuxeo Diff]({{page space='userdoc60' page='nuxeo-diff'}}) used to be included in Nuxeo Document Management. It now only available as an addon.

### OpenSocial Features - Deprecated

All the Nuxeo Document Management OpenSocial features (customizable dashboard, activity charts in the Admin tab) are now available in the Nuxeo OpenSocial addon. This addon is deprecated.

### Picture Document Type

{{! multiexcerpt name='picture-packaging-changes-text'}}

Picture document type was previously coming with the Document Management module, but is now available as part of the DAM addon with other media types.

{{! /multiexcerpt}}

### Picture Book - Deprecated

The picture book document type used to be part of the Document Management module. It has been deprecated in Nuxeo Platform 6.0\. Here is the behavior of the picture book document type for Nuxeo Platform 6.0:

*   It is not possible to create new pictures books in Nuxeo Platform 6.0.
*   Existing picture books are still available and are showed as regular folders: they do not have the Slideshow and View tabs anymore. It is still possible to create pictures in migrated picture books.
*   Because pictures are now part of the Nuxeo DAM addon, so is the picture book.

### Text Annotations - Deprecated

In Nuxeo Platform 6.0, text annotations are not supported anymore. They can be reactivated by installing the addon Digital Asset Management and setting the parameter `nuxeo.text.annotations` to true in nuxeo.conf.

### Virtual Navigation

{{! multiexcerpt name='virtual-navigation-packaging-changes-text'}}

Virtual navigation used to come with the DM package. It is now an [independent addon]({{page space='nxdoc60' page='nuxeo-virtual-navigation'}}).

{{! /multiexcerpt}}

## Nuxeo DAM

{{! multiexcerpt name='nuxeo-dam-deprecation-text'}}

For Nuxeo Platform 6.0, the DAM package has been simplified: it now holds the documents types Picture, Audio and Video. All the specific UI has been moved into the DAM compat addon (see the page [Nuxeo DAM Compat]({{page version='60' space='userdoc' page='nuxeo-dam-compat'}}) for details).

{{! /multiexcerpt}}

This means that the Nuxeo DAM addon doesn't provide a DAM dedicated tab anymore. The browsing and document information preview features are now available in the default distribution of the platform, in the Search tab. All the features related to media documents types features (conversion, player, etc.) are provided by the Nuxeo DAM addon.

Customers who want to keep the former DAM user interface should use the Nuxeo DAM Compat addon. Nuxeo DAM Compat is a compatibility addon and is deprecated for Nuxeo Platform 6.0.

## Nuxeo RSS Reader - Deprecated

The addon Nuxeo RSS Reader is now deprecated.

## Nuxeo Social Collaboration - Deprecated

The module Social Collaboration is now deprecated.

A SQL script is available to migrate your Social Collaboration data to non-deprecated document types. The script and its readme are available [from GitHub](https://github.com/nuxeo/nuxeo-social-collaboration/tree/release-7.2/migration).

## Exports

The RSS and Atom exports and the PDF export of content views are not available any more. They can be re-enabled by configuration with Nuxeo Studio.

## Live Edit and WSS - Deprecated

Live Edit and the WSS integration are deprecated in Nuxeo Platform 6.0\. Nuxeo Drive now enables to edit documents in their native application from the web UI.

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [Upgrade from 5.8 to 6.0]({{page page='upgrade-from-58-to-60'}})
- [Upgrade to JSF2]({{page page='upgrade-to-jsf2'}})
- [Studio Specific Upgrade Instructions]({{page space='studio' page='specific-upgrade-instructions'}})
- [Nuxeo Platform Feature Table]({{page page='nuxeo-platform-feature-table'}})

{{/panel}}
</div>

<div class="column medium-6">

&nbsp;

</div>
</div>
