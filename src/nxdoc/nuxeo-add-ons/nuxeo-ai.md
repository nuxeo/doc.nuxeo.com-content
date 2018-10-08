---
title: Nuxeo AI
description: 'Nuxeo AI allow you to integrate Machine Learning services into your Nuxeo server, and have services such as Data Enrichment.'
review:
    date: '2018-09-126'
    status: ok
    comment: 'initial commit'
labels:
    - AI
    - Enrichment
toc: true
tree_item_index: 1060
history:
    -
        author: Pedro Cardoso
        date: '2016-09-26 12:00'
        message: Initial page
        version: '0'
---
{{! excerpt}}
The Nuxeo AI package allows us to integrate Machine Learning Services into the
Nuxeo platform. These can in turn be used on several tasks like Data Enrichment.
{{! /excerpt}}

See the [GitHub Readme](https://github.com/nuxeo/ai-core) for the Dev project description.

## Introduction

Nuxeo AI package is a core system of streams that allows the Nuxeo Platform
to interact with AI services, be them external from external suppliers, or internal
from Nuxeo. These services can be used in a multitude of ways within the platform.

The core of the system is a sequence of processors connected with streams. At the
head of the process there is a filtering system that selects documents to be processed.
The next step is to call the AI service to apply a classification to the data. The final
step handles the returned data from the AI service, transforms it to the purpose needed
in the Nuxeo Platform.

The first use of the Core-AI streams system is for enrichment of data in existing/new
 documents. We filter data on a new documents event from a specific documentType, call a
classification system and use the results to enrich the document via tags or a
specific facet. This makes it easy to search for data.

The system is composed of a core packaged, called Nuxeo-AI-Core and extension
packages that implement extensions for external services usage. The initial
release have the AI-AWS package that allows us to connect to the Machine Learning
services supplied by Amazon.

## Core-AI

Core AI allows you to customize a series of streams and processors. As default it
provides 4 default document streams that can be activated by configuration:
* **images** - When a image is added to a document.
* **videos** - When a video is added to a document.
* **audio** - When an audio file is added to a document.
* **text** - When binary text is extracted from a document.

These allow you to start your processing chain quickly.

## Extensions
Core-AI is create with multiple extension points to the several processors. One
of the main one is to the runtime, allowing us to add new external Machine Learning
services.

### AWS
As part of the initial release, we have a set of extensions for Amazon's AWS services.
These include :
See the [GitHub Readme](https://github.com/nuxeo/ai-aws) for more technical details,
and all the services that are currently available with this extension.

## Installation
Download the package from [https://maven.nuxeo.org](https://maven.nuxeo.org/nexus/#nexus-search;gav~~org.nuxeo.ai).
Install using the command line, e.g.
```
./bin/nuxeoctl mp-install PATH_TO_DOWNLOAD/nuxeo-ai-core-1.0.zip
```

You should also install the AWS extensions with :
```
./bin/nuxeoctl mp-install PATH_TO_DOWNLOAD/ai-aws-1.0.zip
```

### Enrichment quick start: AWS Rekognition
One of the possibilities for enrichment is to add tags to an image that allows
us to search for it in a more efficient way. To accomplish this we will
be using an external service from Amazon AWS: Rekognition. This service
takes as input an image, and returns a set of labels with confidence value. Let's
look into how to configure Nuxeo's AI to enrich our image Documents.

By now you should already have the `nuxeo-ai-core` and `ai-aws` packages installed.
Add the fields to `nuxeo.conf`
```
nuxeo.pipes.images.enabled=true
nuxeo.enrichment.aws.images=true
```

The first line indicates to AI-core to filter documents with images to be sent
into the images pipe to be processed by an external API. The second line
activated the enrichment of images by AWS.

This exact configuration will store the enrichment data as a document facet. If
we want to have it stored as a tag we should also add the configurations:
```
nuxeo.enrichment.save.tags=true
```
And in case we only want tags and not enrichment facet info, we should disable it
by configuring
```
nuxeo.enrichment.save.facets=false
```
