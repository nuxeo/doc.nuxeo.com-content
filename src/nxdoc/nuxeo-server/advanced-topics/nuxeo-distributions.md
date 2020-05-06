---
title: Nuxeo Distributions
review:
    comment: ''
    date: '2017-12-18'
    status: ok
labels:
    - content-review-lts2016
    - distribution
    - jetty
    - tomcat
    - packaging-component
    - ataillefer
    - nuxeo-distribution-tools
    - ant-assembly-maven-plugin
    - distributions-component
    - nxr
    - cap
    - nuxeo-distribution
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '950333'
    ajs-parent-page-title: Advanced topics
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Distributions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Distributions'
    page_id: '950286'
    shortlink: DoAO
    shortlink_source: 'https://doc.nuxeo.com/x/DoAO'
    source_link: /display/NXDOC/Nuxeo+Distributions
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2015-11-30 09:24'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2015-10-15 12:04'
        message: ''
        version: '16'
    -
        author: Julien Carsique
        date: '2015-10-13 10:21'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-09-20 15:14'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:55'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:52'
        message: ''
        version: '12'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:51'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2013-09-16 23:51'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2012-01-10 12:33'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Julien Carsique
        date: '2012-01-10 12:33'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-10-15 11:59'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2010-09-13 18:46'
        message: formatting and typos
        version: '6'
    -
        author: Solen Guitter
        date: '2010-05-20 18:28'
        message: formatting and typos
        version: '5'
    -
        author: Julien Carsique
        date: '2010-04-28 14:04'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2010-04-28 12:19'
        message: ''
        version: '3'
    -
        author: Admin name placeholder
        date: '2010-03-29 19:25'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-03-01 13:29'
        message: ''
        version: '1'
---

## The nuxeo-distribution Module Purpose

The `nuxeo-distribution` module is used for the packaging and the high-level testing of the Nuxeo Platform: Nuxeo Server, Nuxeo Static WAR, Nuxeo Shell, Startup Wizard, Functional and Performance Tests...
The key concepts are: [assembly]({{page space='corg' page='creating-your-own-distribution'}}), [ant-assembly-maven-plugin](https://github.com/nuxeo/ant-assembly-maven-plugin), [NXR]({{page space='glos' page='nxr'}}), [WAR]({{page space='glos' page='war'}}), [Nuxeo Package]({{page page='creating-nuxeo-packages'}}), [tools-nuxeo-ftest]({{page space='corg' page='functional-testing'}}), [WebDriver](http://www.seleniumhq.org/projects/webdriver/), [Gatling](http://gatling.io).

{{! excerpt}}
With `nuxeo-distribution`, you can [build from Nuxeo sources]({{page space='corg' page='compiling-nuxeo-from-sources'}}), run tests against existing distributions and much more: if you need to [assemble your own distribution]({{page space='corg' page='creating-your-own-distribution'}}), you will find in `nuxeo-distribution` some resources, templates and samples on which to base your packaging.
{{! /excerpt}}

You don't need to use the `nuxeo-distribution` module if:
- You want a standard Nuxeo distribution: download it manually from [http://www.nuxeo.com/downloads/](http://www.nuxeo.com/downloads/) or with [Maven](http://maven.nuxeo.org/), manually via the online interface or automatically while building.
- You want to customize configuration files: use the [Configuration Templates]({{page page='configuration-templates'}}) system.
- You want to [build your own distribution]({{page space='corg' page='creating-your-own-distribution'}}): rely on the same tools and principles as `nuxeo-distribution` in your own project, with your own Maven Assembly.

You have to use the `nuxeo-distribution` module if:
- You want to reproduce the Nuxeo build process.
- You are working on the Nuxeo source code and need a quick feedback on your changes.
- You want to run the Nuxeo main functional or performance test suites against a given distribution.

Read the [Nuxeo Core Developer Guide]({{page space='corg' page='working-on-nuxeo-sources'}}) for more information on how to package from sources using or miming `nuxeo-distribution`.

## The nuxeo-distribution Module Usage and Outputs

The module is used for building and testing. It is executed at the very end of the whole Nuxeo Platform source code build, including the addons, but before the Nuxeo Packages build and tests.

There are several kinds of products built by the `nuxeo-distribution` module:

*   Static resources like configuration templates.
*   The Nuxeo NXR for use in package assemblies.
*   The Nuxeo Server Tomcat distribution.
*   Standalone products to embed in a final package like the Launcher (aka [NuxeoCtl]({{page page='understanding-bundles-deployment#nuxeoctl'}})) and the Startup Wizard.

Sample usage:

*   Build all Nuxeo products without running unit, functional, integration and performance tests:

    ```
    mvn clean package
    ```

    ```
    mvn clean verify -DskipTests -DskipITs
    ```

*   Build all Nuxeo products running integration tests:

    ```
    mvn clean verify
    ```

*   Build only the Nuxeo Server Tomcat distribution:

    ```
    mvn clean package -pl :nuxeo-distribution-tomcat
    ```

See the [nuxeo-distribution/README.md](https://github.com/nuxeo/nuxeo/blob/master/server/README.md) file for a detailed description of the `nuxeo-distribution` module usage and outputs.
