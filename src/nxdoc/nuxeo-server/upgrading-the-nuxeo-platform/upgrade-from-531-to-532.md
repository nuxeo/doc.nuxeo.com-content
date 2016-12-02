---
title: Upgrade from 5.3.1 to 5.3.2
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - multiexcerpt
confluence:
    ajs-parent-page-id: '3343538'
    ajs-parent-page-title: Upgrading the Nuxeo Platform
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Upgrade+from+5.3.1+to+5.3.2
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Upgrade+from+5.3.1+to+5.3.2'
    page_id: '3868595'
    shortlink: swc7
    shortlink_source: 'https://doc.nuxeo.com/x/swc7'
    source_link: /display/NXDOC/Upgrade+from+5.3.1+to+5.3.2
tree_item_index: 1000
version_override:
    'LTS 2015': 710/admindoc/upgrade-from-531-to-532
    '6.0': 60/admindoc/upgrade-from-531-to-532
    '5.8': 58/upgrade-from-531-to-532
history:
    -
        author: Solen Guitter
        date: '2013-07-02 11:14'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2012-05-22 17:38'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Solen Guitter
        date: '2012-05-22 17:38'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2011-06-15 13:59'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-04-12 09:59'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2010-10-14 10:51'
        message: ''
        version: '1'

---
{{! multiexcerpt name='5.3.1-to-5.3.2-upgrade-page'}}

## **Code migration**

5.3.2 is fully backward compatible with 5.3.1 (no compat package is needed).

So, you should have no issues with running your custom code against 5.3.2\. If you have any problems, you can contact Nuxeo Support.

## **Packaging**

The packaging system is basically the same as the one used in 5.3.1.

The only change that may have an impact involves resources that are now managed by the new template system.

This means that resources are no longer embedded inside the EAR but handled in a separated templates directory.

This makes changing configurations easier (like switching from H2 to PostgreSQL) and will also allow for upgrades without having to redo all custom system configurations.

The documentation has been updated accordingly:

*   [Installation Guide]({{page space='nxdoc53' page='installation-and-administration-guide'}})
*   [Description of the new configuration system]({{page space='nxdoc53' page='configuring-nuxeo-ep'}})

## **Data**

The only changes done between 5.3.1 and 5.3.2 are the way tags are stored.

Because the Tag Service is now directly part of VCS, some small changes have been done.

Nevertheless, migration should be automatic and transparent.

If you have any problems, you can contact Nuxeo Support.

## **Configuration**

We have changed the way Nuxeo starts OpenOffice.

This is an intermediate solution before we upgrade to JODConverter 3.

The new OOolauncher (that replaces OOodeamon) should:

*   be more stable,
*   be easier to set up (removed the dependencies on JNI UNO libs).

{{! /multiexcerpt}}

&nbsp;

&nbsp;
