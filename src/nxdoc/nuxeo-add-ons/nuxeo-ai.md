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

See the [GitHub Readme](https://github.com/nuxeo/nuxeo-ai#nuxeo-ai-core) for the Dev project description.

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

The system is composed of a core package, called `nuxeo-ai-core` and extension
packages that implement extensions for external services usage. The initial
release has the `nuxeo-ai-aws` package that allows us to connect to the Machine Learning
services supplied by Amazon.

## Core-AI

Core AI allows you to customize a series of streams and processors. By default it
provides 4 default document streams that can be activated by [configuration parameters](https://github.com/nuxeo/nuxeo-ai#configuration-parameters):
* **images** - When a image is added to a document.
* **videos** - When a video is added to a document.
* **audio** - When an audio file is added to a document.
* **text** - When binary text is extracted from a document.

These allow you to start your processing chain quickly.

## Addons
Core-AI is created with multiple extension points to the several processors. One
of the main ones is to the runtime, allowing us to add new external Machine Learning
services.

### AWS
As part of the initial release, we have a set of extensions for Amazon's AWS services.
These include Rekognition, Comprehend and Translate.
See the [GitHub Readme](https://github.com/nuxeo/nuxeo-ai/tree/master/addons/nuxeo-ai-aws-core#nuxeo-ai-aws-integration) for more technical details,
and all the services that are currently available with this extension.

### Enrichment Quick Start: AWS Rekognition
One of the possibilities for enrichment is to add tags to an image that allows
us to search for it in a more efficient way. To accomplish this we will
be using an external service from Amazon AWS: Rekognition. This service
takes as input an image, and returns a set of labels with confidence value.

 Take a look at the [AWS Quickstart](https://github.com/nuxeo/nuxeo-ai/tree/master/addons/nuxeo-ai-aws-core#quick-start) to see started.
