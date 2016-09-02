---
title: Nuxeo Distributions
labels:
    - distribution
    - jetty
    - tomcat
    - packaging
    - nuxeo-distribution-tools
    - ant-assembly-maven-plugin
    - distributions-component
    - nxr
    - cap
    - nuxeo-distribution
    - excerpt
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
## The&nbsp;nuxeo-distribution&nbsp;Module Purpose

The `nuxeo-distribution` module is used for the packaging and the high-level testing of the Nuxeo Platform: Nuxeo CAP Tomcat, Shell, Core Server, Startup Wizard, Functional and Performance Tests...
The key concepts are: [CAP]({{page space='glos' page='cap'}}), [SDK]({{page space='idedoc' page='setting-up-a-nuxeo-sdk'}}), [assembly]({{page space='corg' page='creating-your-own-distribution'}}), [ant-assembly-maven-plugin](https://github.com/nuxeo/ant-assembly-maven-plugin), [NXR]({{page space='glos' page='nxr'}}), [WAR]({{page space='glos' page='war'}}), [Nuxeo Package]({{page page='creating-nuxeo-packages'}}), [tools-nuxeo-ftest]({{page space='corg' page='functional-testing'}}), [Selenium](http://www.seleniumhq.org/), [WebDriver](http://www.seleniumhq.org/projects/webdriver/), [FunkLoad](http://funkload.nuxeo.org/), [Gatling](http://gatling.io).

{{! excerpt}}

With `nuxeo-distribution`, you can [build from Nuxeo sources]({{page space='corg' page='compiling-nuxeo-from-sources'}}), run tests against existing distributions and much more:&nbsp;if you need to [assemble your own distribution]({{page space='corg' page='creating-your-own-distribution'}}), you will find in `nuxeo-distribution` some resources, templates and samples on which to base your packaging.

{{! /excerpt}}

You don't need to use the&nbsp;`nuxeo-distribution` module if:

*   You want a standard Nuxeo distribution:
    => Download it from&nbsp;[http://www.nuxeo.com/downloads/](http://www.nuxeo.com/downloads/)&nbsp;(manual download only);
    => Download it from&nbsp;[http://maven.nuxeo.org](http://maven.nuxeo.org/)&nbsp;(manually via the online interface or automatically while building with Maven);
*   You want to customize configuration files:
    => Use&nbsp;[the template configuration system]({{page page='configuration-templates'}});
*   You want to&nbsp;[build your own distribution]({{page space='corg' page='creating-your-own-distribution'}}):
    => Rely on the same tools and principles as&nbsp;`nuxeo-distribution` does but do it from your own project, with your own assembly.

You have to use&nbsp;`nuxeo-distribution`&nbsp;module if:

*   You want to reproduce the Nuxeo build process,
*   You work on Nuxeo source code and need a quick feedback on your changes,
*   You want to run the Nuxeo main functional or performance test suites against a given distribution.

Read the&nbsp;[Nuxeo Core Developer Guide]({{page space='corg' page='working-on-nuxeo-sources'}})&nbsp;for more information on how to package from sources using or miming `nuxeo-distribution`.

## The&nbsp;nuxeo-distribution&nbsp;Module Usage and Outputs

The module is used for building and testing. It is executed at the very end of the whole Platform source code build, including the addons, but before the Nuxeo Packages build and tests.

There are four kinds of products built by the&nbsp;`nuxeo-distribution` module:

*   Standalone products to embed in a final package like the Launcher (aka NuxeoCtl), the Startup Wizard.
*   Static resources like configuration templates.
*   The CAP NXR for use in package assemblies.
*   The Nuxeo CAP Tomcat distribution.

Sample usage:

*   Build all Nuxeo products without running Integration Tests:

    ```
    mvn clean package
    ```

    ```
    mvn clean verify -DskipTests -DskipITs
    ```

*   Build all Nuxeo products running Integration Tests:

    ```
    mvn clean verify
    ```

*   Build only the Tomcat distributions

    ```
    mvn clean package -pl :nuxeo-distribution-tomcat
    ```

See the [nuxeo-distribution/README.md](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/README.md) file for a detailed description of the&nbsp;`nuxeo-distribution` module usage and outputs.

&nbsp;