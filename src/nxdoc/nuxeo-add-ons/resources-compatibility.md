---
title: Resources Compatibility
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - resources-compatibility
    - atchertchian
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Resources+Compatibility
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Resources+Compatibility'
    page_id: '17793214'
    shortlink: voAPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/voAPAQ'
    source_link: /display/NXDOC/Resources+Compatibility
tree_item_index: 3000
history:
    -
        author: Solen Guitter
        date: '2016-08-31 09:47'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-06-09 15:41'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-04-29 16:28'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2016-03-10 16:02'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-03-10 15:59'
        message: 'Merge ADMINDOC with NXDOC  '
        version: '11'
    -
        author: Solen Guitter
        date: '2014-03-04 17:31'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-03-04 17:30'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-03-04 17:28'
        message: ''
        version: '8'
    -
        author: Lise Kemen
        date: '2014-03-04 17:23'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-03-04 17:13'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-03-04 17:12'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-03-04 14:06'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-03-04 14:06'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2013-11-12 19:16'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2013-11-12 19:09'
        message: ''
        version: '1'

---
{{! excerpt}}

The&nbsp;[Resources Compatibility addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/resources-compat) provides backward compatibility with web resources (icons, JavaScript, ...) that have been removed from the previous LTS release of Nuxeo Platform.

{{! /excerpt}}

It requires no specific installation steps. It can be installed like any other package&nbsp;[from the Marketplace or from the Admin Center]({{page page='installing-a-new-package-on-your-instance'}}).

It allows you to keep using elements that we have removed from a version of the Platform to another, like icons, XHTML templates, images, etc, in your customizations. To know which resources it holds, you need to explore the nuxeo-resources-compat JAR from `$NUXEO/nxserver/bundles`.

For each LTS version, we provide a new version of the addon that holds the resources that have been removed since the previous LTS version.

Once your platform is upgraded, we highly recommend that you take the resources you need and move them into a custom bundle. The resources-compat addon is meant to help you keep compatibility as the platform and your project evolve, but is not meant to be a permanent solution.
