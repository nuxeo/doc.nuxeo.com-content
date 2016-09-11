---
title: Artifact
review:
    comment: ''
    date: ''
    status: ok
labels:
    - maven
    - artifact
confluence:
    ajs-parent-page-id: '3868922'
    ajs-parent-page-title: Nuxeo Glossary
    ajs-space-key: GLOS
    ajs-space-name: Glossary
    canonical: Artifact
    canonical_source: 'https://doc.nuxeo.com/display/GLOS/Artifact'
    page_id: '4688028'
    shortlink: nIhH
    shortlink_source: 'https://doc.nuxeo.com/x/nIhH'
    source_link: /display/GLOS/Artifact
history:
    - 
        author: Solen Guitter
        date: '2014-07-17 18:13'
        message: ''
        version: '7'
    - 
        author: Julien Carsique
        date: '2014-04-25 15:45'
        message: >-
            NXDOC-299: Update references to nuxeo-distribution-tools with
            ant-assembly-maven-plugin
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-09-16 14:55'
        message: Fixed typo
        version: '5'
    - 
        author: Julien Carsique
        date: '2012-09-27 14:48'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Julien Carsique
        date: '2012-09-27 14:48'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2010-12-03 15:49'
        message: ''
        version: '2'
    - 
        author: Julien Carsique
        date: '2010-12-03 15:43'
        message: ''
        version: '1'

---
## (Maven) Artifact

In general software terms, an [artifact](http://en.wikipedia.org/wiki/Artifact_%28software_development%29) is one of many kinds of tangible [by-product](http://en.wikipedia.org/wiki/By-product) produced during the development of software.

In Maven terminology, artifacts are specific results from build process. In Java, artifacts are mostly JAR files, but they can be anything else (ZIP, WAR, EAR, RAR, ...).

Maven artifacts are identified by a coordinate system of GroupId, ArtifactId, Version, Extension, (and optionally a Classifier) ensuring their unicity. Those coordinates are called the artifact's "GAV".
There's no standardized URN for those coordinates but the form `group:artifact:version:classifier:extension` is pretty common. Note&nbsp;[ant-assembly-maven-plugin](https://github.com/nuxeo/ant-assembly-maven-plugin) uses the pattern `<groupId>:<artifactId>[:<version>[:<type>[:<classifier>[:<scope>]]]]`.
Also, there are slight differences between "packaging", "type" and "extension" even if they are often equal: the "packaging" will determine the "extension", the "type" can be a "classifier" and/or an "extension", the "extension" is the artifact file extension.

Maven modules are identified by their directory name (usually equal to their artifact id) and/or their "primary" artifact (when there are multiple artifacts produced by a&nbsp; module, one of them is set as the "primary" one, usually the [POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) artifact).

Maven manages the build ordering as a graph of dependencies between artifacts.

Artifacts are store locally in `M2_REPO` (usually `~/.m2/repository`) when running `mvn install`.
Artifacts are also stored remotely in online [repositories](http://maven.apache.org/guides/introduction/introduction-to-repositories.html) when running `mvn deploy`. Remote artifacts can then be downloaded by Maven to avoid having to locally build or install them.
Nuxeo uses [Sonatype Nexus OSS](http://nexus.sonatype.org/) for storing its artifacts: [https://maven.nuxeo.org/](https://maven.nuxeo.org/).