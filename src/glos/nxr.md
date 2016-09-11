---
title: NXR
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '3868922'
    ajs-parent-page-title: Nuxeo Glossary
    ajs-space-key: GLOS
    ajs-space-name: Glossary
    canonical: NXR
    canonical_source: 'https://doc.nuxeo.com/display/GLOS/NXR'
    page_id: '11534552'
    shortlink: 2ACw
    shortlink_source: 'https://doc.nuxeo.com/x/2ACw'
    source_link: /display/GLOS/NXR
history:
    - 
        author: Julien Carsique
        date: '2014-04-25 15:32'
        message: ''
        version: '5'
    - 
        author: Todd Hivnor
        date: '2013-10-24 04:57'
        message: grammer. 'is containing' changed to 'contains'
        version: '4'
    - 
        author: Julien Carsique
        date: '2012-09-14 16:32'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2012-09-14 16:32'
        message: NXR
        version: '2'
    - 
        author: Julien Carsique
        date: '2012-09-14 16:05'
        message: ''
        version: '1'

---
## NXR (NuXeo application aRchive)

### Definition

The Nuxeo application archive is a structure built by a Nuxeo packaging process. That archive (a ZIP or an exploded directory) contains all the required Nuxeo bundles and third-party libraries assembled as an application. It may contain some configuration files even if those are usually stored either in the Nuxeo bundles, either outside the NXR in the configuration templates directory.

The NXR is aimed at being reorganized when being deployed in a server: it will then become an [EAR]({{page page='ear'}}), a [WAR]({{page page='war'}}), a Nuxeo Runtime, ...

Historically, the NXR was called a "Nuxeo EAR" or "Nuxeo assembly".

Main Nuxeo NXR are:

*   [nuxeo-distribution-cap](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-distribution-cap)
*   [nuxeo-distribution-dm](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-distribution-dm)
*   [nuxeo-distribution-dam](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-distribution-dam)
*   [nuxeo-distribution-social-collaboration](https://maven.nuxeo.org/nexus/index.html#nexus-search;quick~nuxeo-distribution-social-collaboration)

### Assembly

The NXR is built by [Maven]({{page space='corg' page='maven-usage'}}) using [ant-assembly-maven-plugin](https://github.com/nuxeo/ant-assembly-maven-plugin). See for instance [nuxeo-distribution/nuxeo-distribution-cap](https://github.com/nuxeo/nuxeo-distribution/tree/master/nuxeo-distribution-cap).

### Usage

The NXR is used in the build process. It is repackaged in a [Marketplace Package]({{page space='nxdoc' page='creating-nuxeo-packages'}}) for being later deployed in a server. Both NXR and Marketplace Package are multi-server compliant.

{{#> panel type='code' heading='Standard NXR content'}}

```
 nuxeo.nxr/
|-- artifacts.properties
|-- test-artifacts.properties
|-- bundles (Nuxeo bundles)
`-- lib (third-party libraries)
```

{{/panel}}

The following resources are usually not included in NXR. Thus, they can be included in the Marketplace Package for being installed as part of a specific configuration template.

{{#> panel type='code' heading='Sample resources usually moved out from NXR to the configuration templates'}}

```
|-- META-INF
|   `-- templates
|-- config
`-- plugins
```

{{/panel}}