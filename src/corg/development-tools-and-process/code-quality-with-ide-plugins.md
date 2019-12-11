---
title: Code Quality with IDE Plugins
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868947'
    ajs-parent-page-title: Development Tools and Process
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Code+Quality+with+IDE+Plugins
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Code+Quality+with+IDE+Plugins'
    page_id: '3868986'
    shortlink: Ogk7
    shortlink_source: 'https://doc.nuxeo.com/x/Ogk7'
    source_link: /display/CORG/Code+Quality+with+IDE+Plugins
tree_item_index: 600
hidden: true
history:
    -
        author: Julien Carsique
        date: '2010-10-25 16:31'
        message: igrated to Confluence 4.
        version: '3'
    -
        author: Julien Carsique
        date: '2010-10-25 16:31'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2010-10-25 16:27'
        message: ''
        version: '1'

---
## Using Eclipse

Eclipse can benefit for several plugins for improving code quality, in both adherence to the project's coding standard and in removing bugs.

### Using Checkstyle

#### The Short Story

If you are already familiar with the Checkstyle Eclipse plugin, just configure it to use the checkstyle.xml at the root of the nuxeo sources: [http://hg.nuxeo.org/nuxeo/file/5.2/checkstyle.xml](http://hg.nuxeo.org/nuxeo/file/5.2/checkstyle.xml).

#### Longer Story: installation and Configuration

#### Notes on Reported Issues

### Using TPTP

### Using FindBugs

## Profiling with NetBeans Profiler

IDEA doesn't provide an integrated profiler and Eclipse's profiler, provided by the TPTP project, doesn't currently work on Mac OS, one can use NetBeans to profile the Nuxeo platform.
