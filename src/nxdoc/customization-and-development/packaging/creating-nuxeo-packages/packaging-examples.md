---
title: Packaging examples
confluence:
    ajs-parent-page-id: '17334494'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Packaging+examples
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Packaging+examples'
    page_id: '17334381'
    shortlink: bYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/bYAIAQ'
    source_link: /display/NXDOC58/Packaging+examples
history:
    - 
        author: Solen Guitter
        date: '2015-11-30 09:22'
        message: 'XDOC-658: Marketplace packages are now called Nuxeo Package'
        version: '8'
    - 
        author: Julien Carsique
        date: '2015-04-08 14:52'
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

There are multiple ways to build a Nuxeo Package. Focusing on those using Maven and [Ant Assembly Maven Plugin](https://github.com/nuxeo/ant-assembly-maven-plugin), here are three different methods depending on the constraints and objectives.

From the better to the quicker method:

*   Recommended method
    The recommended method is to build an NXR corresponding to the wanted result after the package install. Then we operate a comparison ("diff") between that product and a reference one (usually the Nuxeo CAP) and generate the Nuxeo Package which will perform the wanted install. That method is the better one since it will always be up-to-date in regards to the dependencies and requirements (other bundles and third-party libraries). The drawback is it takes some build time and has a dependency on a whole Nuxeo distribution.
*   No-NXR method.
    That method is using the same principle for building the Nuxeo Package as for building an NXR. It is as much reliable regarding at the dependencies as the above recommended method. The drawback is since the solution is empiric, it will likely embed useless files and generate a bigger archive.
*   Explicit method.
    That latest method is explicitly listing everything that must be packaged. Easy to write and very quick at build time, it requires more maintenance than the two above since you have to manually update the package assembly every time the dependencies change. You also risk not to see that an indirect dependency has changed and requires some changes on the third-party libraries. That method is not recommended except for specific cases or for a proof of concept.

See [https://github.com/nuxeo/nuxeo-marketplace-sample/](https://github.com/nuxeo/nuxeo-marketplace-sample/) for downloading a project with sample architectures, implementing the three above build methods plus the required modules for testing those Nuxeo packages with Selenium, WebDriver and Funkload.

Applied to the sample project, here are the results from those three methods.

*   Recommended method

4 directories, 6 files, 128KB.

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

*   No-NXR method.

5 directories, 150 files, 33MB.

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

*   Explicit method.

5 directories, 8 files, 1,6MB.

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