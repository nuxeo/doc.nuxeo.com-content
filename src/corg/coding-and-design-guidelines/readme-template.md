---
title: README Template
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
history:
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
# About / Synopsis

* What is it, what does it do / Abstract
* Project status: working/prototype
* Nuxeo Support

# Table of contents

Use for instance https://github.com/ekalinin/github-markdown-toc

# Installation

Sample: 
- From the Nuxeo Marketplace: install [the Sample Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-sample).
- From the Nuxeo server web UI "Admin / Update Center / Packages from Nuxeo Marketplace"
- From the command line: `nuxeoctl mp-install nuxeo-sample`

# Usage
## Screenshots
## Features

# Code
## QA

[![Build Status](https://qa.nuxeo.org/jenkins/buildStatus/icon?job=addons_nuxeo-sample-project-master)](https://qa.nuxeo.org/jenkins/job/addons_nuxeo-sample-project-master/)

If QA resources are included, sample: https://github.com/nuxeo/nuxeo-sdk-ios/blob/master/README.md

## Content

Description, sub-modules organization...

## Requirements

See [CORG/Compiling Nuxeo from sources](http://doc.nuxeo.com/x/xION)

Sample: https://github.com/nuxeo/nuxeo-distribution

## Limitations

Sample: https://github.com/nuxeo/nuxeo-elasticsearch/blob/master/README.md

## Build

    mvn clean install

Build options:
- ...

## Deploy (how to install build product)

Direct to MP package if any. Otherwise provide steps to deploy on Nuxeo Platform: << Copy the built artifacts into `$NUXEO_HOME/templates/custom/bundles/` and activate the `custom` template. >>.

# Resources (Documentation and other links)

# Contributing / Reporting issues

Link to JIRA component (or project if there is no component for that project).
Sample: https://jira.nuxeo.com/browse/NXP/component/14503/
Sample: https://jira.nuxeo.com/secure/CreateIssue!default.jspa?project=NXP

# License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Sample: https://github.com/nuxeo/nuxeo-drive

# About Nuxeo

The [Nuxeo Platform](http://www.nuxeo.com/products/content-management-platform/) is an open source customizable and extensible content management platform for building business applications. It provides the foundation for developing [document management](http://www.nuxeo.com/solutions/document-management/), [digital asset management](http://www.nuxeo.com/solutions/digital-asset-management/), [case management application](http://www.nuxeo.com/solutions/case-management/) and [knowledge management](http://www.nuxeo.com/solutions/advanced-knowledge-base/). You can easily add features using ready-to-use addons or by extending the platform using its extension point system.

The Nuxeo Platform is developed and supported by Nuxeo, with contributions from the community.

Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with 
SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands including Verizon, Electronic Arts, Sharp, FICO, the U.S. Navy, and Boeing. Nuxeo is headquartered in New York and Paris. 
More information is available at [www.nuxeo.com](http://www.nuxeo.com). 

```

&nbsp;

&nbsp;