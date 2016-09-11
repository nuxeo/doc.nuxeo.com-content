---
title: Resources Compatibility
review:
    comment: ''
    date: ''
    status: ok
labels:
    - resources-compatibility
confluence:
    ajs-parent-page-id: '17334336'
    ajs-parent-page-title: Additional Modules
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Resources+Compatibility
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Resources+Compatibility'
    page_id: '18451037'
    shortlink: XYoZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/XYoZAQ'
    source_link: /display/NXDOC58/Resources+Compatibility
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:46'
        message: ''
        version: '4'
    - 
        author: Manon Lumeau
        date: '2016-03-10 16:02'
        message: ''
        version: '3'
    - 
        author: Manon Lumeau
        date: '2016-03-10 16:01'
        message: 'Merge ADMINDOC with NXDOC   '
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-03-04 17:29'
        message: ''
        version: '1'

---
{{! excerpt}}

The&nbsp;[Resources Compatibility add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/resources-compat) provides backward compatibility with web resources (icons, JavaScript, ...) that have been removed from the previous LTS release of Nuxeo Platform.

{{! /excerpt}}

It requires no specific installation steps. It can be installed like any other package&nbsp; [from the Marketplace or from the Admin Center]({{page space='ADMINDOC58' page='Installing a+New+Package+on+Your+Instance'}}) .

It allows you to keep using elements that we have removed from a version of the Platform to another, like icons, XHTML templates, images, etc, in your customizations. To know which resources it holds, you need to explore the nuxeo-resources-compat JAR from `$NUXEO/nxserver/bundles`.

For each LTS version, we provide a new version of the add-on that holds the resources that have been removed since the previous LTS version

Once your platform is upgraded, we highly recommend that you take the resources you need and move them into a custom bundle. The resources-compat add-on is meant to help you keep compatibility as the platform and your project evolve, but is not meant to be a permanent solution.