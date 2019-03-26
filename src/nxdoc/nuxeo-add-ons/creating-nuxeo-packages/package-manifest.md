---
title: Package Manifest
review:
    comment: ''
    date: '2019-03-26'
    status: ok
labels:
    - packaging-component
    - lts2019-ok
confluence:
    ajs-parent-page-id: '3342859'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Package+Manifest
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Package+Manifest'
    page_id: '3342878'
    shortlink: HgIz
    shortlink_source: 'https://doc.nuxeo.com/x/HgIz'
    source_link: /display/NXDOC/Package+Manifest
history:
    -
        author: Manon Lumeau
        date: '2016-04-22 09:41'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2015-11-23 10:44'
        message: 'Remove link to page "Creating Marketplace Packages", formatting'
        version: '20'
    -
        author: Julien Carsique
        date: '2015-11-19 15:32'
        message: ''
        version: '19'
    -
        author: Julien Carsique
        date: '2015-11-19 15:28'
        message: ''
        version: '18'
    -
        author: Julien Carsique
        date: '2015-11-19 15:23'
        message: ''
        version: '17'
    -
        author: Julien Carsique
        date: '2015-11-19 15:18'
        message: ''
        version: '16'
    -
        author: Julien Carsique
        date: '2015-11-19 15:11'
        message: ''
        version: '15'
    -
        author: Julien Carsique
        date: '2015-11-19 14:38'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2015-09-25 15:22'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2012-05-21 12:00'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2012-05-21 12:00'
        message: Fixed link format
        version: '11'
    -
        author: Julien Carsique
        date: '2011-11-16 18:50'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2011-02-03 18:40'
        message: updated pointer to explanation of each package property
        version: '9'
    -
        author: whajeri
        date: '2010-11-12 13:03'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:27'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:27'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:59'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2010-07-07 21:58'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 16:22'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 16:20'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-07 11:25'
        message: ''
        version: '1'

---
Let's look at a minimal example of package.xml file:

```xml
<package type="addon" name="nuxeo-package" version="1.0.0">
  <title>Nuxeo Package</title>
  <description>
    <p>Put here an HTML description of your Nuxeo Package.</p>
  </description>
  <platforms>
    <platform>server-11.10</platform>
    <platform>server-11.10-HF*</platform>
  </platforms>
</package>

```

This is a minimal package manifest. It is defining a package nuxeo-package at version 1.0.0 and of type addon.
The package can be installed on platforms 11.10.

Also, the package title and description that should be used by the UI are specified by the `title` and `description` elements.

Let's look at the full version of the same package manifest:

```xml
<package type="addon" name="nuxeo-package" version="1.0.0">
  <title>Nuxeo Package</title>
  <description>
    <p>Put here an HTML description of your Nuxeo Package.</p>
  </description>
  <home-page>http://some.host.com/mypage</home-page>
  <vendor>Your Company</vendor>
  <hotreload-support>true</hotreload-support>
  <require-terms-and-conditions-acceptance>false</require-terms-and-conditions-acceptance>
  <!-- Nuxeo Validation: none | inprocess | primary_validation | nuxeo_certified -->
  <nuxeo-validation>none</nuxeo-validation>
  <!-- Production State: production_ready | testing | proto -->
  <production-state>testing</production-state>
  <supported>false</supported>
  <platforms>
    <platform>server-11.10</platform>
    <platform>server-11.10-HF*</platform>
  </platforms>
  <dependencies>
    <package>another-package:1.0.0:1.1.0</package>
  </dependencies>
  <optional-dependencies>
    <package>nuxeo-web-ui</package>
    <package>nuxeo-jsf-ui</package>
  </optional-dependencies>
  <conflicts>
    <package>a-conflicting-package:1.0.0:1.0.0</package>
  </conflicts>
  <provides>
    <package>an-embedded-package:1.0.0:1.0.0</package>
  </provides>
  <license>Apache License, Version 2.0</license>
  <license-url>http://www.apache.org/licenses/LICENSE-2.0</license-url>
  <!-- Visibility: PRIVATE | MARKETPLACE | DEV | PUBLIC -->
  <visibility>PUBLIC</visibility>
</package>

```

Here are the available fields (see the [<span class="nolink">PackageDefinition</span> Javadoc](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/model/PackageDefinition.html) for a full description):

*   `package type`:  `studio`, `hotfix` or `addon`. The installation behavior may vary depending on the package type. For instance, the `mp-hotfix` command looks for `hotfix` packages and the `studio` packages have a special treatment in the Administration page and some specific packages dependency resolution rules.
    See [org.nuxeo.connect.update.PackageType](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/PackageType.html).
*   `package name`: Open field. The name is used to reference the package in `nuxeoctl`, in the Administration page and on [http://marketplace.nuxeo.com/](http://marketplace.nuxeo.com/), so it is recommended to use a lowercase dash-separated name.
*   `package version`: Versions are in the form `major.minor.patch-classifier` with some "special" classifiers like "beta", "SNAPSHOT"...
    See [org.nuxeo.connect.update.Version](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/Version.html).
*   `title`: Open field.
*   `description`: HTML field.
*   `home-page`: The URL where more information can be found about this package.
*   `vendor`: The vendor represent the entity providing and maintaining the package.
*   `supported`: True or False. Is the package maintenance guaranteed by a support contract with the vendor.
*   `hotreload-support`: True or False. Can the package be "hot reloaded" (cf Nuxeo Studio, Dev mode...).
*   `require-terms-and-conditions-acceptance`: True or False. Determines if the package install requires terms and conditions acceptance by the administrator.
*   `nuxeo-validation`: A validation status: `none`, `inprocess`, `primary_validation` or `nuxeo_certified`.
    See [org.nuxeo.connect.update.NuxeoValidationState.](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/NuxeoValidationState.html)
*   `production-state`: A production status: `proto`, `testing`, `production_ready`.
    See [org.nuxeo.connect.update.ProductionState](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/ProductionState.html).
*   `license`: Open field: GPL, BSD, LGPL...
*   `license-url`: If no URL is provided, then a `license.txt` file should be included in the package.
*   `visibility`: `PRIVATE` (restricted to specific users and/or projects), `MARKETPLACE` (restricted to registered users), `DEV` (restricted to registered users) or `PUBLIC` (no restriction). The visibility determines the channel where the package will be distributed and how it can be installed.
    See [org.nuxeo.connect.update.PackageVisibility](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/PackageVisibility.html).
*   `platforms`: The list of platforms supported by this package.
*   `dependencies`: The list of package dependencies.
    See [org.nuxeo.connect.update.PackageDependency](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/PackageDependency.html).
*   `optional-dependencies`: The list of package optional dependencies. Used for packages which use the conditional bundle installation.
*   `conflicts`: The list of packages conflicting with the current package.
*   `provides`: The list of packages useless if the current package is installed.

## Package Versions

Versions are in the form `major.minor.patch-classifier` with some "special" classifiers like "beta", "SNAPSHOT"...
See [org.nuxeo.connect.update.Version](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/Version.html).

### Release vs SNAPSHOT

SNAPSHOT packages are overwritten without confirmation.

Release packages cannot be overwritten. They must be deleted before re-deploy (although not recommended).

### Versioning Policy

Versioning policy is free while it follows the pattern `major.minor.patch-classifier` described in [org.nuxeo.connect.update.Version](https://github.com/nuxeo/nuxeo-connect/blob/master/nuxeo-connect-client/src/main/java/org/nuxeo/connect/update/Version.java).

The Nuxeo policy is:

*   major: increased on major changes (features, API...)
*   minor: increased between Platform generations (7.x, 8.x...)
*   patch: increased per release

For instance, Nuxeo would use:

*   `1.0.0` for the first package release targeting Nuxeo `8.x`
*   `1.0.1`, `1.0.2`... for the next packages targeting `8.x`
*   `1.1.0` for the first package release targeting Nuxeo `9.x`
*   `1.1.1`, `1.1.2`... for the next packages targeting`9.x`
*   `1.2.0` for the first package release targeting Nuxeo `10.x`
*   And in case of important code changes, respectively `2.0.0`, `2.1.0` and `2.2.0` for the next packages targeting `8.x`, `9.x` and `10.x`.

Maintenance branches are usually named `major.minor` or `major.minor_LTS`: for instance, `1.0`, `1.1` and `1.2` or `1.0_8.10`, `1.1_9.10` and `1.2_10.10`.

## Package Dependencies

Package dependencies, optional-dependencies, conflicts and provides are in the form `packageName[:[minVersion][:maxVersion]]`.
See [org.nuxeo.connect.update.PackageDependency](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/PackageDependency.html).

### Meta-Package

A package can be empty with only package dependencies in its manifest. Such a package is called a meta-package.

Meta-packages are a good solution to manage relations between packages and to ease deployment.

If a meta-package purpose is to define a unique configuration with a reproducible install, then you should configure its dependencies with equal min and max versions.

### Minimum and Maximum Versions

The dependency resolution system automatically manages the target platform constraint and looks for the solution providing the more recent packages. Thus, it is usually not necessary to specify a min or max version for the dependencies.

If you really need to specify a min version, then it is usually wrong to also specify a max version unless you work on a meta-package.

### Hotfix Dependencies

It is not necessary to make a package depend on a hotfix to benefit from that hotfix.
The hotfix bundles are deployed indifferently from the order of install between a hotfix package and an addon package. In other words, bugs are being fixed by hotfix packages. It is normal that an installed package have some bugs if the relevant hotfix package is not installed. It's not the purpose of a package to embed its fixes.

A hotfix is not compliant with anything but a stock release distribution. It is not compliant with a SNAPSHOT distribution (built from the maintenance branch), nor with a hotfix distribution (built from a hotfix release).
{{jira server='Nuxeo Issue Tracker' key='NXP-14085'}} improvement will make the maintenance distribution (SNAPSHOT or release) "provide" the corresponding hotfix packages. It won't apply on public packages. It won't be backported.

If a package depends on an hotfix:

*   It must not be PUBLIC since hotfix are only available to registered users.
*   It won't be installable on SNAPSHOT and hotfix distributions.
*   It should be a release package since SNAPSHOT packages cannot be properly tested if they depend on a hotfix.

If you really want to make a package depending on a hotfix package:

*   Think about only stating that dependency in the package description, else
*   Check that the package is not PUBLIC
*   Do it only for the release and remove the dependency for the next SNAPSHOT.

### Optional Dependencies

Some packages may use the conditional bundle install in their install.xml, see [scripting command instructions]({{page page='scripting-commands#typical-installations'}}).
When a package is being installed together with one of the packages referenced in his install.xml, those must be installed in the right order to avoid incomplete installation. Similarly, if a package is installed before one of the packages referenced in his install.xml, it must be reinstalled when one of the referenced package is installed.

This is the purpose of the optional dependencies. An optional dependency will never be required, but will always be installed before its dependant package.

In the above example, if you try to install `nuxeo-package` along with `nuxeo-jsf-ui`, `nuxeo-jsf-ui` will be installed first. If you install `nuxeo-package` alone first, then you install `nuxeo-jsf-ui`, `nuxeo-package` will be reinstalled when you install `nuxeo-jsf-ui`.

In any case, you still can have `nuxeo-package` installed without having `nuxeo-jsf-ui` installed.
