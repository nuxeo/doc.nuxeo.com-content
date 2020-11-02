---
title: Package Manifest
review:
    comment: 'This page is outdated and needs to be reviewed, see [NXDOC-1452](https://jira.nuxeo.com/browse/NXDOC-1452).'
    date: '2017-12-18'
    status: requiresUpdates
labels:
    - content-review-lts2016
    - packaging-component
    - ataillefer
    - todo
    - content-review-lts2017
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
  <target-platform>
    <name>server</name>
    <version>[11.10,12)</version>
  </target-platform>
</package>

```

This is a minimal package manifest. It is defining a package nuxeo-package at version 1.0.0 and of type addon.
The package can be installed on platforms from server-11.10 (included) to server-12.0 (excluded).

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
  <require-terms-and-conditions-acceptance>false</require-terms-and-conditions-acceptance>
  <license>Apache License, Version 2.0</license>
  <license-url>http://www.apache.org/licenses/LICENSE-2.0</license-url>
  <target-platform>
    <name>server</name>
    <version>[11.10,12)</version>
  </target-platform>
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
</package>

```

Here are the available fields (see the [<span class="nolink">PackageDefinition</span> Javadoc](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/model/PackageDefinition.html) for a full description):

- `package type`:  `studio`, `hotfix` or `addon`. The installation behavior may vary depending on the package type. For instance, the `mp-hotfix` command looks for `hotfix` packages and the `studio` packages have a special treatment in the Administration page and some specific packages dependency resolution rules.</br>
  See [org.nuxeo.connect.update.PackageType](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/PackageType.html).
- `package name`: Open field. The name is used to reference the package in `nuxeoctl`, in the Administration page and on [http://marketplace.nuxeo.com/](http://marketplace.nuxeo.com/), so it is recommended to use a lowercase dash-separated name.
- `package version`: Versions are in the form `major.minor.patch-classifier` with some "special" classifiers like "beta", "SNAPSHOT", etc.</br>
  See [org.nuxeo.connect.update.Version](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/Version.html).
- `title`: Open field.
- `description`: HTML field.
- `home-page`: The URL where more information can be found about this package.
- `vendor`: The vendor represent the entity providing and maintaining the package.
- `require-terms-and-conditions-acceptance`: True or False. Determines if the package install requires terms and conditions acceptance by the administrator.
- `license`: Open field: GPL, BSD, LGPL...
- `license-url`: If no URL is provided, then a `license.txt` file should be included in the package.
- `target-platform`: The name and version range of platforms on which this package can be installed.</br>
  See [Target Platform section](#target-platform)
- `platforms` (not recommended): The platform *name-version* patterns on which this package can be installed.</br>
  See [Patterns (former way) section](#patterns-(former-way))
- `dependencies`: The list of package dependencies.</br>
  See [org.nuxeo.connect.update.PackageDependency](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/PackageDependency.html).
- `optional-dependencies`: The list of package optional dependencies. Used for packages which use the conditional bundle installation.
- `conflicts`: The list of packages conflicting with the current package.
- `provides`: The list of packages useless if the current package is installed.                                                                                                           

## Package Versions

Versions are in the form `major.minor.patch-classifier` with some "special" classifiers like "beta", "SNAPSHOT"...
See [org.nuxeo.connect.update.Version](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/Version.html).

### Release vs SNAPSHOT

SNAPSHOT packages are overwritten without confirmation.

Release packages cannot be overwritten. They must be deleted before re-deploy (although not recommended).

### Versioning Policy

Versioning policy is free while it follows the pattern `major.minor.patch-classifier` described in [org.nuxeo.connect.update.Version](https://github.com/nuxeo/nuxeo-connect/blob/master/nuxeo-connect-client/src/main/java/org/nuxeo/connect/update/Version.java).

The Nuxeo policy is:
- major: increased on major changes (features, API...)
- minor: increased between Platform generations (7.x, 8.x...)
- patch: increased per release

For instance, Nuxeo would use:

- `1.0.0` for the first package release targeting Nuxeo `8.x`
- `1.0.1`, `1.0.2`... for the next packages targeting `8.x`
- `1.1.0` for the first package release targeting Nuxeo `9.x`
- `1.1.1`, `1.1.2`... for the next packages targeting `9.x`
- `1.2.0` for the first package release targeting Nuxeo `10.x`
- And in case of important code changes, respectively `2.0.0`, `2.1.0` and `2.2.0` for the next packages targeting `8.x`, `9.x` and `10.x`.

Maintenance branches are usually named `major.minor` or `major.minor_LTS`: for instance, `1.0`, `1.1` and `1.2` or `1.0_8.10`, `1.1_9.10` and `1.2_10.10`.

## Target platform

The prefered way to define on which Nuxeo platform a package can be installed is the following:

```xml
  <target-platform>
    <name>[compatible distribution name]</name>
    <version>[range of compatible distribution versions]</version>
  </target-platform>

```
The compatible distribution name must refer to the `org.nuxeo.distribution.name` property of the Nuxeo platform. 

The range of compatible distribution versions is defined using a *maven-like* version range syntax and refers to the `org.nuxeo.distribution.version` property of the Nuxeo platform.

### Constraints

Here are the constraints to be followed when defining the `<target-platform>` in your package.xml:

- Both `<name>` and `<version>` tags are **required** inside `<target-platform>`
- The `<name>` is case sensitive and must be an **exact match** of the `org.nuxeo.distribution.name` property of the Nuxeo platform
- The `<version>` syntax follows these rules

    | Version Range	    | Meaning         |
    | --------- | --------------- |
    | 1.0	    | x == 1.0        |
    | (,1.0]    | x <= 1.0        |
    | (,1.0)    | x < 1.0         |
    | [1.0]	    | x == 1.0        |
    | [1.0,)    | x >= 1.0        |
    | (1.0,)    | x > 1.0         |
    | (1.0,2.0)	| 1.0 < x < 2.0   |
    | [1.0,2.0]	| 1.0 <= x <= 2.0 |

- The `<version>` must refer to the `org.nuxeo.distribution.version` property of the Nuxeo platform
- Only one range can be defined and **exclusion is not possible**. To achieve the same purpose, use the `<conflicts>` tag and/or do separate specific releases of your package

### Patterns (former way)

Although it is not the recommanded way, it is still possible to use the former `<platforms>` tag to declare pattern(s) matching the *[name]-[version]* couple of the targeted Nuxeo platforms:

```xml
  <platforms>
    <platform>server-11.10</platform>
    <platform>server-11.10-HF*</platform>
  </platforms>

```
{{#> callout type='note' }}

The new `<target-platform>` tag takes precedence on the former `<platforms>` tag if both are defined in the package.xml

{{/callout}}

## Package Dependencies

Package dependencies, optional-dependencies, conflicts and provides are in the form `packageName[:[minVersion][:maxVersion]]`.</br>
See [org.nuxeo.connect.update.PackageDependency](https://qa.nuxeo.org/jenkins/job/master/job/nuxeo-connect-master/site/nuxeo-connect-client/apidocs/org/nuxeo/connect/update/PackageDependency.html).

### Meta-Package

A package can be empty with only package dependencies in its manifest. Such a package is called a meta-package.

Meta-packages are a good solution to manage relations between packages and to ease deployment.

If a meta-package purpose is to define a unique configuration with a reproducible install, then you should configure its dependencies with equal min and max versions.

### Minimum and Maximum Versions

The dependency resolution system automatically manages the target platform constraint and looks for the solution providing the more recent packages. Thus, it is usually not necessary to specify a min or max version for the dependencies.

If you really need to specify a min version, then it is usually wrong to also define a max version unless you work on a meta-package.

### Hotfix Dependencies

It is not necessary to make a package depend on a hotfix to benefit from that hotfix.

The hotfix bundles are deployed indifferently from the order of install between a hotfix package and an addon package. In other words, bugs are being fixed by hotfix packages. It is normal that an installed package have some bugs if the relevant hotfix package is not installed. It's not the purpose of a package to embed its fixes.

A hotfix is not compliant with anything but a stock release distribution. It is not compliant with a SNAPSHOT distribution (built from the maintenance branch), nor with a hotfix distribution (built from a hotfix release).

Improvements will make the maintenance distribution (SNAPSHOT or release) "provide" the corresponding hotfix packages. It won't apply on public packages. It won't be backported.

If a package depends on a hotfix:

- It must not be PUBLIC since hotfixes are only available to registered users.
- It won't be installable on SNAPSHOT and hotfix distributions.
- It should be a release package since SNAPSHOT packages cannot be properly tested if they depend on a hotfix.

If you really want to make a package depending on a hotfix package:

- Think about only stating that dependency in the package description, else
- Check that the package is not PUBLIC
- Do it only for the release and remove the dependency for the next SNAPSHOT.

### Optional Dependencies

Some packages may use the conditional bundle install in their install.xml, see [scripting command instructions]({{page page='scripting-commands'}}#typical-installations).
When a package is being installed together with one of the packages referenced in his install.xml, those must be installed in the right order to avoid incomplete installation. Similarly, if a package is installed before one of the packages referenced in his install.xml, it must be reinstalled when one of the referenced packages is installed.

This is the purpose of the optional dependencies. An optional dependency will never be required, but will always be installed before its dependent package.

In the above example, if you try to install `nuxeo-package` along with `nuxeo-jsf-ui`, `nuxeo-jsf-ui` will be installed first. If you install `nuxeo-package` alone first, then you install `nuxeo-jsf-ui`, `nuxeo-package` will be reinstalled when you install `nuxeo-jsf-ui`.

In any case, you still can have `nuxeo-package` installed without having `nuxeo-jsf-ui` installed.
