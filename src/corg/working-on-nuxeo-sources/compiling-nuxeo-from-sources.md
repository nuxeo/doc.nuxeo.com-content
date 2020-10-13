---
title: Compiling Nuxeo from sources
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
    canonical: Compiling+Nuxeo+from+sources
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Compiling+Nuxeo+from+sources'
    page_id: '9274308'
    shortlink: xION
    shortlink_source: 'https://doc.nuxeo.com/x/xION'
    source_link: /display/CORG/Compiling+Nuxeo+from+sources
tree_item_index: 100
history:
    -
        author: Frantz Fischer
        date: '2016-04-06 14:09'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2015-11-30 10:18'
        message: ''
        version: '17'
    -
        author: Julien Carsique
        date: '2015-02-11 15:23'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-02-10 15:22'
        message: 'Update minumum version of Maven, add Java 8 since 7.2'
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-15 14:33'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2014-11-12 15:11'
        message: NodeJS
        version: '13'
    -
        author: Julien Carsique
        date: '2014-11-12 14:59'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2014-04-25 13:23'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2013-10-01 17:02'
        message: ''
        version: '10'
    -
        author: Thibaud Arguillere
        date: '2013-05-06 20:06'
        message: ''
        version: '9'
    -
        author: Laurent Doguin
        date: '2013-04-12 17:28'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2012-01-10 12:29'
        message: Migrated to Confluence 4.0
        version: '7'
    -
        author: Julien Carsique
        date: '2012-01-10 12:29'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2012-01-09 18:40'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2011-12-13 15:38'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2011-12-13 15:37'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2011-12-01 21:48'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2011-12-01 21:47'
        message: ''
        version: '1'

---
## Requirements

*   [Oracle's JDK or OpenJDK 11]({{page space='nxdoc' page='installation'}}#hardware-and-software-requirements) (since Nuxeo Platform 11.1) or 8 (since Nuxeo Platform 7.2)
*   [Apache Maven](http://maven.apache.org/) [2.2.1 up to Nuxeo 5.8](http://archive.apache.org/dist/maven/maven-2/2.2.1/binaries/) or [3.1.1+ since Nuxeo 5.9.2 (3.2+ recommended)](http://maven.apache.org/download.cgi)
*   [Apache Ant 1.7.1+](http://ant.apache.org/)
*   [Git](http://git-scm.com/)
*   [NodeJS 4.4.2 (LTS), npm, yo, grunt-cli, gulp, bower]({{page page='installing-nodejs-and-related-tools'}})

The following may also be used to build some installers or retrieve code not yet migrated to Git:

*   [Mercurial](http://mercurial.selenic.com/)
*   DEPRECATED: [Apache Subversion (aka svn)](http://subversion.apache.org/)
*   DEPRECATED: [IS Tools](http://www.innosetup.com) for building Windows installers
*   DEPRECATED: [Wine](http://www.winehq.org/) for using IS Tools on Linux OS or [Darwine](http://darwine.sourceforge.net/) on Mac OS X
*   DEPRECATED: Mono for building Windows controller (NuxeoCtl.exe).
*   PROTOTYPE: [IzPack](http://izpack.org/) for building IzPack installer.
*   [Mono xbuild](http://www.mono-project.com/Microsoft.Build) for Linux OS, [Mono:OSX](http://www.mono-project.com/Mono_on_MacOS_X) for Mac OS X, any C# compiler for Windows
*   other required Open Source tools may be automatically downloaded by Maven when needed

## Getting the Nuxeo sources

See [Getting the Nuxeo Source Code]({{page page='getting-the-nuxeo-source-code'}})

## Compiling Nuxeo

{{#> panel type='code' heading='Compiling Nuxeo'}}

```
mvn -DskipTests=true install -Paddons,distrib

```

{{/panel}}

The main Nuxeo distribution is then available in `nuxeo-distribution/nuxeo-distribution-tomcat/target/nuxeo-distribution-tomcat-$VERSION-nuxeo-cap.zip`.

### Available Maven profiles

Profiles usable anywhere in Nuxeo:

*   release: dedicated to the release process, it activates most of Maven plugins abilities such as strictly checking versions, building all alternatives, ...
*   nightly: dedicated to the nightly builds made by our continuous integration system, it activates the build of source artifacts.
*   javadoc: build Javadoc artifacts
*   qa: for internal use.
*   qapriv: for internal use.
*   apiviz: some reporting from org.jboss.apiviz
*   skiptests: more or less equivalent to using "-Dmaven.test.skip=true"

Profiles available at Nuxeo root:

*   addons: also build addons
*   distrib: also build distributions (nuxeo-distribution sub-module)

## Building distributions

A few default distributions are available from [download](http://www.nuxeo.com/downloads). You can either customize them, or build your own distribution from sources.

The module [nuxeo-distribution](https://github.com/nuxeo/nuxeo-distribution/) uses Maven and Nuxeo tools for packaging distributions. It calculates the needed artifacts based on Maven dependency trees and downloads them from our [Maven repositories](https://maven.nuxeo.org).

You don't need to use the [nuxeo-distribution](https://github.com/nuxeo/nuxeo-distribution/) module if:

*   you want a standard Nuxeo distribution
    => download it from [http://www.nuxeo.com/downloads/](http://www.nuxeo.com/downloads/) (manual download only)
    => download it from [http://maven.nuxeo.org](http://maven.nuxeo.org) (manually via online interface or automatically using Maven)
*   you want to customize configuration files
    => use [the template configuration system]({{page space='nxdoc' page='configuration-templates'}})
*   you want to [build your own distribution]({{page page='creating-your-own-distribution'}})
    => rely on the same tools and principles as nuxeo-distribution does but do it from your own project, with your own assembly.

You have to use [nuxeo-distribution](https://github.com/nuxeo/nuxeo-distribution/) module if:

*   you want to reproduce the Nuxeo build process,
*   you want to build Nuxeo offline,
    => Being unable to download artifacts from Internet, you will need a lot of other Nuxeo sources and some third-party artifacts.
*   you work on Nuxeo source code and need quick feedback on your changes, you don't want to wait for [our continuous integration system](https://qa.nuxeo.org/jenkins/) building nuxeo-distribution

### Available Maven profiles

Profiles for use in nuxeo-distribution:

*   nuxeo-coreserver, nuxeo-cap, nuxeo-dm, nuxeo-dam, nuxeo-cmf, ...: build the corresponding application/module
*   tomcat, jboss: build the corresponding server
*   all-distributions: full build
*   itest: run integration tests
*   ftest-dm, ftest-dam, ftest-cmf, ftest-sc, ...: run functional tests against the corresponding application/module

See [README](https://github.com/nuxeo/nuxeo-distribution/blob/master/README.md) file at root of `nuxeo-distribution` for a short description and common usage examples.

### Produced packages

*   standalone NXR packages
    *   Content Application Platform (CAP)
    *   Advanced Document Management (DM)
    *   Digital Assets Management (DAM)
    *   ...
*   Nuxeo Packages
*   Tomcat packages

### Usage

There are two build ways:

*   with Maven (recommended):
    Maven is at the lowest level, all configuration about building a module is given in the Maven POM file. So, everything can be built using Maven but it requires some knowledge about Nuxeo and its packagings.

    {{#> panel type='code' heading='Maven usage'}}

    ```
    mvn clean install -P${PROFILE}

    ```

    {{/panel}}
*   with Ant:
    Ant is available at the top level: Ant targets have been defined to provide user-friendly commands for building most used products but we don't cover all possibilities and Ant targets may be out of date.

    {{#> panel type='code' heading='Ant usage'}}

    ```
    ant distrib [-Ddistrib=${PROFILE}]

    ```

    {{/panel}}

Here are some examples:

*   (default) All distributions:
    *   `mvn clean package`
    *   `mvn clean package -Pall`
*   SDK packages:
    *   `mvn clean package -Psdk`

## Starting Nuxeo

You can unzip the distribution above. If you just built it, you can use the already-expanded version at `nuxeo-distribution/nuxeo-distribution-tomcat/target/nuxeo-cap-$VERSION-tomcat/`:

```
cd nuxeo-distribution/nuxeo-distribution-tomcat/target/nuxeo-cap-*-tomcat
./bin/nuxeoctl start

```

See [Server Start and Stop]({{page space='nxdoc' page='server-start-and-stop'}}) for more details.
