---
title: Releasing
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '9275231'
    ajs-parent-page-title: Working on Nuxeo sources
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Releasing
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Releasing'
    page_id: '7537192'
    shortlink: KAJz
    shortlink_source: 'https://doc.nuxeo.com/x/KAJz'
    source_link: /display/CORG/Releasing
tree_item_index: 900
history:
    -
        author: Ronan Daniellou
        date: '2016-06-21 13:47'
        message: pdates "IT-release-on-demand-addon" target UR
        version: '13'
    -
        author: Solen Guitter
        date: '2015-11-30 10:11'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '12'
    -
        author: Julien Carsique
        date: '2015-06-23 13:09'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2013-06-18 03:07'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2013-04-15 11:47'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2012-07-18 14:30'
        message: Migrated to Confluence 4.0
        version: '8'
    -
        author: Julien Carsique
        date: '2012-07-18 14:30'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2012-07-18 14:20'
        message: NXDOC-125 - update release doc
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2012-06-27 19:07'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2011-11-22 17:18'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2011-11-22 14:29'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2011-11-22 12:03'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2011-06-16 16:46'
        message: ''
        version: '1'

---
## Release Process

Here is an overview of the release tooling and process at Nuxeo.

Manual testing, code review, issue management and team collaboration are not mentioned in this document.

### Release the Nuxeo Platform, including Main Addons and Nuxeo Packages

First check the source code is releasable:

*   [IT-nuxeo-master-build](https://qa.nuxeo.org/jenkins/view/Depl/job/IT-nuxeo-master-build/) performs date-based releases.
*   [IT-nuxeo-master-build-*](https://qa.nuxeo.org/jenkins/view/Depl/) jobs are building various packages (Debian, Windows, Multi-OS, ...).
*   [IT-nuxeo-master-tests-*](http://qa.nuxeo.org/jenkins/view/Depl/) jobs and a few others (bench, mass-import, ...) are testing the date-based release under various conditions and environments.

Date-based releases are automatically performed every night, though they are not automatically published.
Other kind of releases (FT, LTS) are preferably managed with [IT-release-on-demand-build](https://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-build/).

Release:

*   Run [IT-release-on-demand-build](https://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-build/)
*   Check results of [IT-release-on-demand-tests-cap-tomcat](https://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-tests-cap-tomcat/) and [IT-nuxeo-master-tests-cap-tomcat-postgresql](http://qa.nuxeo.org/jenkins/job/IT-nuxeo-master-tests-cap-tomcat-postgresql/)
*   Run [batch tasks](https://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-build/batchTasks/) for publishing the release:
    1.  [IT-release-on-demand-build/batchTasks/task/Check prepared changesets](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-build/batchTasks/task/Check%20prepared%20changesets/)
    2.  [IT-release-on-demand-build/batchTasks/task/Perform (push sources and deploy artifacts)](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-build/batchTasks/task/Perform%20%28push%20sources%20and%20deploy%20artifacts%29/)
    3.  [IT-release-on-demand-build/batchTasks/task/Perform Marketplace Packages](http://qa.nuxeo.org/jenkins/view/Depl/job/IT-release-on-demand-build/batchTasks/task/Perform%20Marketplace%20Packages/)
*   Run jobs in [nuxeo-packaging](https://qa.nuxeo.org/jenkins/job/Deploy/job/nuxeo-packaging/) folder to generate the OS-specific installers and the Virtual Machine packages.

Everything is uploaded at [http://community.nuxeo.com/static/staging/](http://community.nuxeo.com/static/staging/). Test the archives. If they are fine, move them out of the stagging repository.

All addons listed in [org.nuxeo:nuxeo-addons-parent:pom](https://github.com/nuxeo/addons/blob/master/pom.xml) are released at the same time.

All Nuxeo Packages listed in [marketplace.ini](https://github.com/nuxeo/integration-scripts/blob/master/marketplace.ini) are also released along with the platform.

### Release Other Addons and Libraries

All other addons than those listed in [https://github.com/nuxeo/addons/blob/master/pom.xml](https://github.com/nuxeo/addons/blob/master/pom.xml) are individually released using [IT-release-on-demand-addon](https://qa.nuxeo.org/jenkins/job/Deploy/job/IT-release-on-demand-addon/).

### Update the Documentation

[Javadoc and Taglibs](http://community.nuxeo.com/api/) are updated by [https://qa.nuxeo.org/jenkins/job/Misc/job/nuxeo-community-doc/](https://qa.nuxeo.org/jenkins/job/Misc/job/nuxeo-community-doc/).

[Platform Explorer](http://explorer.nuxeo.org/) is upgraded and updated with an export from the released distribution, using [the platform-explorer addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/platform-explorer).

### Scripts

Here are the main scripts used for the release processes:

*   [https://github.com/nuxeo/nuxeo/blob/master/scripts/release.py](https://github.com/nuxeo/nuxeo/blob/master/scripts/release.py)
*   [https://github.com/nuxeo/nuxeo/blob/master/scripts/release_mp.py](https://github.com/nuxeo/nuxeo/blob/master/scripts/release_mp.py)
*   [https://github.com/nuxeo/integration-scripts/](https://github.com/nuxeo/integration-scripts/)

## Version Policy (Git Branching Model)

Here is the version policy applied at Nuxeo during development, maintenance and release.

There are a few variants in the release process (such as the onestep mode which prepares and performs the release in one unique step, without staging).

The Nuxeo Packages and the individual addons are released following the same model.

### Main Branches

The main active branches are:

*   unstable development branch: `master`
*   validated development branches: `x.y.z-SNAPSHOT`
*   stable maintenance branches: `x.y.z`
*   specific development branches: `fix-NXP-9999-someIssue`, `feature-NXP-9999-someFeature`

### Technical Steps to Release LTS `6.0` from Branch `master` (version `6.0-SNAPSHOT`)

1.  Prepare the release
    1.  checkout `master`
    2.  from `master`: create and checkout maintenance branch `6.0`
    3.  on `6.0`: replace versions in code: `6.0-SNAPSHOT` => `6.0`
    4.  on `6.0`: commit changes
    5.  on `6.0`: tag `release-6.0`
    6.  on `6.0`: replace versions in code: `6.0` => `6.0-HF01-SNAPSHOT`
    7.  on `6.0`: commit changes
    8.  checkout `master`
    9.  on `master`: replace versions in code: `6.0-SNAPSHOT` => `7.1-SNAPSHOT`
    10.  on `master`: commit changes
    11.  checkout `release-6.0`
    12.  on `release-6.0`: build and deploy to staging repositories
2.  Perform the release
    1.  publish branches `master` and `6.0`
    2.  publish tag `release-6.0`
    3.  checkout `release-6.0`
    4.  on `release-6.0`: deploy to public repositories

### Technical Steps to Release FT `7.1` from Branch `master` (version `7.1-SNAPSHOT`)

1.  Prepare the release
    1.  checkout `master`
    2.  from `master`: create and checkout release branch `7.1`
    3.  on `7.1`: replace versions in code: `7.1-SNAPSHOT` => `7.1`
    4.  on `7.1`: commit changes
    5.  on `7.1`: tag `release-7.1`
    6.  checkout `master`
    7.  on `master`: replace versions in code: `7.1-SNAPSHOT` => `7.2-SNAPSHOT`
    8.  on `master`: commit changes
    9.  delete branch `7.1`
    10.  checkout `release-7.1`
    11.  on `release-7.1`: build and deploy to staging repositories
2.  Perform the release
    1.  publish branch `master`
    2.  publish tag `release-7.1`
    3.  checkout `release-7.1`
    4.  on `release-7.1`: deploy to public repositories

### Maintenance and Development

Technical steps to fix NXP-9999 on current `master` development branch (version `7.3-SNAPSHOT`) with a backport to `6.0` maintenance branch (version `6.0-HF15-SNAPSHOT`):

1.  Prepare the fix

    1.  checkout `master`
    2.  from `master`: create and checkout maintenance branch `fix-NXP-9999-someFix`
    3.  on `fix-NXP-9999-someFix`: fix the issue
    4.  on `fix-NXP-9999-someFix`: commit changes
    5.  publish branch `fix-NXP-9999-someFix`
2.  Backport the fix
    1.  checkout `6.0`
    2.  from `6.0`: create and checkout maintenance branch `fix-NXP-9999-6.0-someFix`
    3.  on `fix-NXP-9999-6.0-someFix`: cherry pick the changes from `fix-NXP-9999-someFix`
    4.  on `fix-NXP-9999-6.0-someFix`: commit changes
    5.  publish branch `fix-NXP-9999-6.0-someFix`
3.  Test and Publish the fix
    That is done by the Continuous Integration, see [Isolated Testing]({{page page='isolated-testing'}}) ("Test&Push" jobs). Depending on the options, the process looks like:

    1.  checkout `fix-NXP-9999-someFix`
    2.  on `fix-NXP-9999-someFix`: rebase on `master` (parent branch)
    3.  on `fix-NXP-9999-someFix`: build and test
    4.  checkout `master`
    5.  on `master`: merge `fix-NXP-9999-someFix`
    6.  publish branch `master`
4.  Test and Publish the backport
    1.  Repeat step 3 with branch `fix-NXP-9999-6.0-someFix` and parent branch `6.0`

Feature development follows the same process (without backport of course): step 1, step 3.

Maintenance and development branches are preferably updated against their parent branch with a rebase rather than a merge.
