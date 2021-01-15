---
title: README Template
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: README+Template
    canonical_source: 'https://doc.nuxeo.com/display/CORG/README+Template'
    page_id: '23366069'
    shortlink: tYlkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/tYlkAQ'
    source_link: /display/CORG/README+Template
tree_item_index: 1200
history:
    -
        author: Pierre-Gildas Millon
        date: '2016-08-24 15:09'
        message: ''
        version: '12'
    -
        author: Julien Carsique
        date: '2016-02-11 18:17'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2016-02-11 18:15'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2016-02-11 13:01'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2016-02-11 12:51'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-11-30 10:12'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '7'
    -
        author: Julien Carsique
        date: '2015-09-07 14:35'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2015-09-07 14:30'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2015-09-07 14:16'
        message: Add QA Build Status
        version: '4'
    -
        author: Julien Carsique
        date: '2015-02-16 11:42'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-02-13 13:52'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-02-13 13:50'
        message: ''
        version: '1'
---

Here is a template to be inspired of for&nbsp;`README` files. The [Nuxeo README.md](https://github.com/nuxeo/nuxeo/blob/master/README.md) file is following this template.
Except the "Requirements" and "Limitations" which may not be relevant, all sections are mandatory.
Common content is pre-filled. Sampled advanced content is prefixed by `Sample:`

```text
# Title / Repository Name

## About / Synopsis

* What is it, what does it do / Abstract
* Project status: working/prototype
* Nuxeo Support

See real examples:

* <https://github.com/nuxeo/nuxeo/blob/master/README.md>
* <https://github.com/nuxeo/nuxeo-drive/blob/master/README.md>
* <https://github.com/nuxeo/nuxeo-sdk-ios/blob/master/README.md>

## Table of contents

Use for instance <https://github.com/ekalinin/github-markdown-toc>:

> * [Title / Repository Name](#title--repository-name)
>   * [About / Synopsis](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Usage](#usage)
>     * [Screenshots](#screenshots)
>     * [Features](#features)
>   * [Code](#code)
>     * [Content](#content)
>     * [Requirements](#requirements)
>     * [Limitations](#limitations)
>     * [Build](#build)
>     * [Deploy (how to install build product)](#deploy-how-to-install-build-product)
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)
>   * [Contributing / Reporting issues](#contributing--reporting-issues)
>   * [License](#license)
>   * [About Nuxeo](#about-nuxeo)

## Installation

Sample:

* From the Nuxeo Marketplace: install [the Sample Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-sample).
* From the command line: `nuxeoctl mp-install nuxeo-sample`

## Usage

### Screenshots

### Features

## Code

[![Build Status](https://qa.nuxeo.org/jenkins/buildStatus/icon?job=/nuxeo/addons_nuxeo-sample-project-master)](https://qa.nuxeo.org/jenkins/job/nuxeo/job/addons_nuxeo-sample-project-master/)

### Content

Description, sub-modules organization...

### Requirements

See [CORG/Compiling Nuxeo from sources](http://doc.nuxeo.com/x/xION)

Sample: <https://github.com/nuxeo/nuxeo/blob/master/nuxeo-distribution/README.md>

### Limitations

Sample: <https://github.com/nuxeo-archives/nuxeo-features/tree/master/nuxeo-elasticsearch>

### Build

    mvn clean install

Build options:

* ...

### Deploy (how to install build product)

Direct to MP package if any. Otherwise provide steps to deploy on Nuxeo Platform:

 > Copy the built artifacts into `$NUXEO_HOME/templates/custom/bundles/` and activate the `custom` template.

## Resources (Documentation and other links)

## Contributing / Reporting issues

Link to JIRA component (or project if there is no component for that project). Samples:

* [Link to component](https://jira.nuxeo.com/issues/?jql=project%20%3D%20NXP%20AND%20component%20%3D%20Elasticsearch%20AND%20Status%20!%3D%20%22Resolved%22%20ORDER%20BY%20updated%20DESC%2C%20priority%20DESC%2C%20created%20ASC)
* [Link to project](https://jira.nuxeo.com/secure/CreateIssue!default.jspa?project=NXP)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

## About Nuxeo

Nuxeo Platform is an open source Content Services platform, written in Java. Data can be stored in both SQL & NoSQL databases.

The development of the Nuxeo Platform is mostly done by Nuxeo employees with an open development model.

The source code, documentation, roadmap, issue tracker, testing, benchmarks are all public.

Typically, Nuxeo users build different types of information management solutions for [document management](https://www.nuxeo.com/solutions/document-management/), [case management](https://www.nuxeo.com/solutions/case-management/), and [digital asset management](https://www.nuxeo.com/solutions/dam-digital-asset-management/), use cases. It uses schema-flexible metadata & content models that allows content to be repurposed to fulfill future use cases.

More information is available at [www.nuxeo.com](https://www.nuxeo.com).
```
