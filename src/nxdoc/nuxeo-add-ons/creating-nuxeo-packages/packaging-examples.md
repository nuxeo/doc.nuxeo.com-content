---
title: Packaging examples
review:
    comment: 'This page is outdated and needs to be reviewed, see [NXDOC-1452](https://jira.nuxeo.com/browse/NXDOC-1452).'
    date: '2017-12-18'
    status: requiresUpdates
labels:
    - content-review-lts2016
    - packaging-component
    - ataillefer
    - marketplace
    - package
    - sample
    - assembly
    - nxr
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '3342859'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Packaging+examples
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Packaging+examples'
    page_id: '11044631'
    shortlink: F4eo
    shortlink_source: 'https://doc.nuxeo.com/x/F4eo'
    source_link: /display/NXDOC/Packaging+examples
history:
    -
        author: Solen Guitter
        date: '2015-11-30 09:20'
        message: 'XDOC-658: Marketplace packages are now called Nuxeo Package'
        version: '11'
    -
        author: Solen Guitter
        date: '2015-10-15 12:09'
        message: Add TOC
        version: '10'
    -
        author: Julien Carsique
        date: '2015-10-13 14:15'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2015-10-13 13:59'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2015-04-08 14:50'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2013-02-08 14:40'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2012-09-10 19:50'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Julien Carsique
        date: '2012-09-10 19:50'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2012-09-10 19:01'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2012-09-10 19:00'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2012-09-10 18:14'
        message: ''
        version: '1'

---
Automating the packaging process allows to setup continuous integration on the Nuxeo Package build, its install and the features it provides.

There are multiple ways to build a Nuxeo Package. Focusing on those using the [Ant Assembly Maven Plugin](https://github.com/nuxeo/ant-assembly-maven-plugin), here are three different methods depending on the constraints and objectives, from the better to the quicker method:

*   NXR method<br/>
    The **recommended** method is to build an NXR corresponding to the wanted result after the package install. Then we operate a comparison between that product and a reference one (usually the Nuxeo CAP), and we finally generate the Nuxeo Package which will perform the wanted install.

    *   PROS<br/>
        Always up-to-date in regards to the dependencies and requirements (other bundles and third-party libraries).<br/>
        Maven is aware of the project dependencies and can **properly order the build** in a multi-module project.<br/>
        **No maintenance**: changes on transitive dependencies won't break the assembly, code is generic.<br/>
        Perfect size: the package contains the exact **necessary and sufficient** content.
        **Factorization**: the NXR can be attached to the reactor for being reused in another assembly.
    *   CONS<br/>
        The drawback is it takes some build time and has a dependency on a whole Nuxeo distribution.<br/>
        **Maximum build time**: the build performs more actions than the other methods and will consume more bandwidth.
        Writing requires Maven knowledge on concepts such as the GAV, the dependency graph, the dependency management, the artifact resolution.
*   No-NXR method.<br/>
    That method is using the same principle for building the Nuxeo Package as for building an NXR, with no final optimization. It is an **acceptable compromise** between speed and quality.

    *   PROS<br/>
        It is as much reliable regarding at the dependencies as the above recommended method.
        Maven is aware of the project dependencies and can **properly order the build** in a multi-module project.<br/>
        **No maintenance**: changes on transitive dependencies won't break the assembly, code is generic.<br/>
        **Moderate build time**: faster than the recommended method.
    *   CONS<br/>
        The drawback is since the solution is empiric, it will likely embed useless files and generate a bigger archive.<br/>
        Biggest size: the package contains the **necessary but also useless** content.
        Writing requires Maven knowledge on concepts such as the GAV, the dependency graph, the dependency management, the artifact resolution.
*   Explicit method.<br/>
    That latest method is explicitly listing everything that must be packaged. It is **not recommended** except for specific cases, quick solution or proof of concept.

    *   PROS<br/>
        Easy method: very few code is required, you simply list what you want. It requires absolutely no Maven concept knowledge.<br/>
        **Minimum build time**: the build is really fast.
    *   CONS<br/>
        **Maintenance required**: you have to manually update the package assembly every time the dependencies change.
        You also risk not to see that an indirect dependency has changed and requires some changes on the third-party libraries.<br/>
        Managed size: the package contains exactly what you expect, with **no guarantee of results**.

See [https://github.com/nuxeo/nuxeo-marketplace-sample/](https://github.com/nuxeo/nuxeo-marketplace-sample/) for downloading a project with sample architectures, implementing the three above build methods plus the required modules for testing those Nuxeo Packages with Selenium, WebDriver and Funkload.

Applied to the sample project, here are the results from those three methods. Look at the differences in the content, size and build time. The network bandwidth is not evaluated but it also varies respectively from the most to the less, proportionally to the build time.

## NXR Method - Recommended

4 directories, 6 files, 128KB. Build time: 11s.

```
    recommended/
    |-- install
    |   |-- artifacts-sample.properties
    |   |-- bundles
    |   |   `-- The sample project bundle.
    |   |-- templates
    |   |   `-- sample
    |   `-- test-artifacts-sample.properties
    |-- install.xml
    `-- package.xml
```

The `lib`&nbsp;directory is empty because all required third-parties are already included in the basic Nuxeo distribution. The `bundles` directory only contains the sample project bundle because all its dependencies are also already included in the basic distribution.

## No-NXR Method

5 directories, 150 files, 33MB. Build time: 6s.

```
    nonxr/
    |-- install
    |   |-- artifacts-sample.properties
    |   |-- bundles
    |   |   `-- 46 bundles.
    |   |-- lib
    |   |   `-- 99 third-party libraries.
    |   |-- templates
    |   |   `-- sample
    |   `-- test-artifacts-sample.properties
    |-- install.xml
    `-- package.xml
```

Here, we are embedding a lot of bundles and libraries which are useless because already included in the basic Nuxeo distribution but that cannot be detected by the build process.

## Explicit Method

5 directories, 8 files, 1.6MB. Build time: 3s.

```
    explicit/
    |-- install
    |   |-- bundles
    |   |   `-- The sample project bundle, explicitly listed.
    |   |-- lib
    |   |   `-- 4 third-party libraries, explicitly listed.
    |   `-- templates
    |       `-- sample
    |-- install.xml
    `-- package.xml
```

That solution builds a lighter package than the No-NXR method but we don't know if it will be missing some dependencies or not. The embedded bundles and libraries list must be manually maintained.
