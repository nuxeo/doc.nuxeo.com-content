---
title: Generating Packages and Installers
review:
    comment: '<span style="color:red">Warning</span> This page needs to be reviewed. Check back soon for updated content!'
    date: ''
    status: not-ok
confluence:
    ajs-parent-page-id: '9275231'
    ajs-parent-page-title: Working on Nuxeo sources
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Generating+Packages+and+Installers
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Generating+Packages+and+Installers'
    page_id: '7537143'
    shortlink: 9wFz
    shortlink_source: 'https://doc.nuxeo.com/x/9wFz'
    source_link: /display/CORG/Generating+Packages+and+Installers
tree_item_index: 700
history:
    -
        author: Solen Guitter
        date: '2015-11-30 10:12'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-04-28 10:27'
        message: ''
        version: '17'
    -
        author: Julien Carsique
        date: '2014-04-25 15:35'
        message: point to MP private channel doc
        version: '16'
    -
        author: Julien Carsique
        date: '2013-02-08 14:42'
        message: ''
        version: '15'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:07'
        message: Migrated to Confluence 4.0
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:07'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:07'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2011-06-23 18:05'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2011-06-16 19:52'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2011-06-16 19:47'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2011-06-16 16:59'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2011-06-16 15:33'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2011-06-16 15:32'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2011-06-16 15:32'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2011-06-16 15:31'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2011-06-16 14:50'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2011-06-16 12:57'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2011-06-16 12:56'
        message: ''
        version: '1'

---
Here are steps for generating packages and installers, making them available for download.

## Nuxeo Packages

See [Creating Nuxeo Packages]({{page space='nxdoc' page='creating-nuxeo-packages'}}).

## Nuxeo Platform (CS, CAP, DM)

### ZIP

The ZIP is produced by [IT-nuxeo-5.4-build](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-5.4-build/) (or [IT-release-on-demand-nuxeo-5.4-build](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-nuxeo-5.4-build/)) and pushed to the given UPLOAD_URL if [IT-nuxeo-5.4-tests-dm-tomcat](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-5.4-tests-dm-tomcat/) (or [IT-release-on-demand-nuxeo-5.4-tests-dm-tomcat](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-nuxeo-5.4-tests-dm-tomcat/)) succeeds.

This is part of [the release process]({{page page='releasing'}}).

### IzPack (.jar, .app, .jnlp, .exe)

Run [IT-nuxeo-5.4-build-izpack](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-5.4-build-izpack/) with parameters:

*   NXVERSION
*   ZIP_DIR: set a path to use local archives, else they will be retrieved from Maven repositories.
*   CODEBASE_URL: for use by JNLP
*   UPLOAD_URL

This is generating the jar, app, jnlp and exe installers.

### NSIS (.exe)

Run [IT-nuxeo-5.4-build-windows](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-5.4-build-windows/) with parameters:

*   LASTBUILD_URL: Jenkins job's URL for downloading artifact to package
*   UPLOAD_URL

### Debian

Run [IT-nuxeo-5.4-build-debian](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-5.4-build-debian/) with parameters:

*   VERSION
*   ARCHIVE_URL_JBOSS
*   ARCHIVE_URL_TOMCAT

Debian packages are uploaded to the [Nuxeo APT repository](http://apt.nuxeo.org/pool/releases/).

### RPM

Currently not available.

### VMs

## Addons

Think about [building Nuxeo Packages for released addons]({{page space='nxdoc' page='creating-nuxeo-packages'}}) and [publishing them on Nuxeo Connect]({{page space='studio' page='delivering-a-customization-package-through-the-nuxeo-marketplace'}}).

## Nuxeo CMF

### ZIP

Unzip, `chmod +x *.command bin/``**.sh bin/*ctl bin/**``.command`, re-zip.

Upload to `nuxeo@styx:/var/www/www.nuxeo.org/static/staging/cmf-${version}/` and generate md5 checksums.

Download from [http://community.nuxeo.com/static/staging/cmf-${version}/](http://community.nuxeo.com/static/staging/cmf-$%7Bversion%7D/), test and validate.

If ok, move from cmf-${version}.tmp to cmf-${version}.

### IzPack (.jar, .app, .jnlp, .exe)

Script is not enough generic for now. Here's a patch for using [https://github.com/nuxeo/nuxeo-distribution-izpack](https://github.com/nuxeo/nuxeo-distribution-izpack) with CMF:&nbsp;[]({{file name='nuxeo-distribution-izpack-cmf.diff'}})

Then, steps for generating the jar, app, jnlp and exe are similar as for Nuxeo EP.

### NSIS (.exe)

### Debian

Debian packages are uploaded to the [Nuxeo APT repository](http://apt.nuxeo.org/pool/releases/).

### RPM

Currently not available.

### VMs

## Nuxeo DAM

### ZIP

### IzPack

### NSIS (.exe)

### Debian

Debian packages are uploaded to the [Nuxeo APT repository](http://apt.nuxeo.org/pool/releases/).

### RPM

Currently not available.

### VMs
