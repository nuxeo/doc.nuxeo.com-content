---
title: Generating documentation
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '9275231'
    ajs-parent-page-title: Working on Nuxeo sources
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Generating+documentation
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Generating+documentation'
    page_id: '6030276'
    shortlink: xANc
    shortlink_source: 'https://doc.nuxeo.com/x/xANc'
    source_link: /display/CORG/Generating+documentation
tree_item_index: 800
history:
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:09'
        message: igrated to Confluence 4.
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:09'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2012-01-10 12:36'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2011-06-16 15:34'
        message: ''
        version: '3'
    -
        author: stan
        date: '2011-06-16 14:11'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2011-03-18 12:25'
        message: ''
        version: '1'

---
## Publish Javadoc and TLD documentation

Documentation of current code is continuously built by the Jenkins job [http://qa.nuxeo.org/jenkins/job/nuxeo-doc/](http://qa.nuxeo.org/jenkins/job/nuxeo-doc/).

For releases, run the job manually ("Build Now" link). Then change the job parameters (see parameters' description for details).

This is publishing Javadoc and TLDdoc into [http://community.nuxeo.com/api/](http://community.nuxeo.com/api/).

## Publish Nuxeo product into the Explorer

[Platform Explorer](http://explorer.nuxeo.org/) is upgraded and updated with an export from the released distribution, using [the platform-explorer addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/platform-explorer), see [documentation]({{page space='nxdoc' page='explorer'}}).

Since Nuxeo version 11.3, this export is automated and run by a [Jenkins job](https://jenkins.platform.dev.nuxeo.com/job/nuxeo/job/nuxeo-explorer-jobs/job/export-platform-explorer-reference/).