---
title: Nuxeo AI
description: 'Nuxeo AI allow you to integrate Machine Learning services into your Nuxeo server, and have services such as Data Enrichment.'
review:
    date: '2018-12-14'
    status: ok
    comment: ''
labels:
    - AI
    - Enrichment
toc: true
tree_item_index: 1030
---
{{! excerpt}}
The [Nuxeo AI](https://www.nuxeo.com/products/ai/) package integrates Machine Learning Services into the
Nuxeo platform. This can be used on several tasks like Data Enrichment.
{{! /excerpt}}

See the [GitHub Readme](https://github.com/nuxeo/nuxeo-ai#nuxeo-ai-core) for the Developer project description.

## Concept

Nuxeo AI package is a core system of streams that allows the Nuxeo Platform
to interact with AI services, be them external from external suppliers, or internal
from Nuxeo. These services can be used in a multitude of ways within the platform.

The core of the system is a sequence of processors connected with streams. At the
head of the process there is a filtering system that selects documents to be processed.
The next step is to call the AI service to apply a classification to the data. The final
step handles the returned data from the AI service, transforms it to the purpose needed
in the Nuxeo Platform.

The first use of the Core-AI streams system is to enrich data in existing/new document. We filter data on a new documents event from a specific documentType, call a
classification system and use the results to enrich the document via tags or a
specific facet. This makes it easy to search for data.

The system is composed of a core package, called [`nuxeo-ai-core`](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-ai-core) and extension
packages that implement extensions for external services usage.

## Core AI

### Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

### Nuxeo Configuration
You can set these in your `nuxeo.conf`:
<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">Parameter</th>
<th colspan="1">Description</th>
<th width="250" colspan="1">Default value</th>
<th width="150" colspan="1">Since</th>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.images.enabled`</td>
<td colspan="1">Create a stream for creation/modification of images.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.video.enabled`</td>
<td colspan="1">Create a stream for creation/modification of video files.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.audio.enabled`</td>
<td colspan="1">Create a stream for creation/modification of audio files.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.text.enabled`</td>
<td colspan="1">Create a stream for text extracted from blobs.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.stream.config.name`</td>
<td colspan="1">The name of the stream log config</td>
<td colspan="1">`pipes`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.enrichment.source.stream`</td>
<td colspan="1">The name of the stream that receives Enrichment data</td>
<td colspan="1">`enrichment.in`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.enrichment.save.tags`</td>
<td colspan="1">Should enrichment labels be saved as a standard Nuxeo tags?</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.enrichment.save.facets`</td>
<td colspan="1">Should enrichment data be saved as a document facet?</td>
<td colspan="1">`true`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.enrichment.raiseEvent`</td>
<td colspan="1">Should an `enrichmentMetadataCreated` event be raised when new enrichment data is added to the stream?</td>
<td colspan="1">`true`</td>
<td colspan="1">Since 1.0</td>
</tr>
</tbody>
</table>
</div>

### Core AI Streams

Core AI allows you to customize a series of streams and processors. By default it
provides 4 default document streams that can be activated by the [configuration parameters](#nuxeo-configuration) shown above.
- **images** - When a image is added to a document.
- **videos** - When a video is added to a document.
- **audio** - When an audio file is added to a document.
- **text** - When binary text is extracted from a document.

These allow you to start your processing chain quickly.

## Extensions

Core AI is created with multiple extension points to the several processors.  
The initial release has:
- [`nuxeo-ai-aws`](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-ai-aws) package that allows us to connect to the Machine Learning services supplied by Amazon.
- [`nuxeo-ai-image-quality`](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-ai-image-quality) package that uses [Sightengine](https://sightengine.com/).

### AWS

As part of the initial release, we have a set of extensions for Amazon Web Services.  
These include Rekognition, Comprehend and Translate.  
See the [GitHub Readme](https://github.com/nuxeo/nuxeo-ai/tree/master/addons/nuxeo-ai-aws-core#nuxeo-ai-aws-integration) for more technical details and all the services that are currently available with this extension.

#### Before You Start

You should be familiar with Amazon Web Services and be in possession of your credentials.

##### Credentials
Credentials are discovered using `nuxeo-runtime-aws`.  
The chain searches for credentials in order: Nuxeo's AWSConfigurationService, environment variables, system properties, profile credentials, EC2Container credentials.

If you choose to use `nuxeo.conf`, then the properties are:
```
nuxeo.aws.accessKeyId=your_AWS_ACCESS_KEY_ID
nuxeo.aws.secretKey=your_AWS_SECRET_ACCESS_KEY
nuxeo.aws.sessionToken=your_AWS_SESSION_TOKEN
nuxeo.aws.region=your_AWS_REGION
```

If you are only using images and an S3 BinaryManager is already being used then it re-uses the image data to pass a reference instead of uploading the binary again.

#### Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

##### Quick Start

1. Install the [`nuxeo-ai-aws`](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-ai-aws) package.
   ```
   ./bin/nuxeoctl mp-install nuxeo-ai-aws
   ```

2. Add the following parameters to `nuxeo.conf`.
   ```
   nuxeo.ai.images.enabled=true
   nuxeo.ai.text.enabled=true
   nuxeo.enrichment.aws.images=true
   nuxeo.enrichment.aws.text=true
   nuxeo.enrichment.save.tags=true
   nuxeo.enrichment.save.facets=true
   nuxeo.enrichment.raiseEvent=true
   ```
3. Set your AWS credentials [AWS credentials](#credentials).
3. Start Nuxeo and upload an image.
4. Wait 10 seconds then look at the document tags and document JSON `enrichment:items` facet.

#### Nuxeo Configuration

You can set these in your `nuxeo.conf`. They are used in combination with the other configuration parameters for `nuxeo-ai-core` shown above.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">Parameter</th>
<th colspan="1">Description</th>
<th width="250" colspan="1">Default value</th>
<th width="150" colspan="1">Since</th>
</tr>
<tr>
<tr>
<td colspan="1">`nuxeo.enrichment.aws.images`</td>
<td colspan="1">Run AWS enrichiment services on images.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.enrichment.aws.text`</td>
<td colspan="1">Run AWS enrichiment services on text.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 1.0</td>
</tr>
</tbody>
</table>
</div>

### Image Quality

An implementation of an enrichment service that uses [Sightengine](https://sightengine.com/).   
See the [GitHub Readme](https://github.com/nuxeo/nuxeo-ai/blob/master/addons/nuxeo-ai-image-quality-core/README.md#nuxeo-ai-image-quality) for additional technical details.

#### Before You Start

Register with [Sightengine](https://sightengine.com/) to obtain your `apiKey` and `apiSecret`.

#### Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

##### Quick Start

1. Install the [nuxeo-ai-image-quality](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-ai-image-quality) package.
  ```
  ./bin/nuxeoctl mp-install nuxeo-ai-image-quality`
  ```

2. Add the following parameters to `nuxeo.conf`:
   ```
   nuxeo.ai.images.enabled=true
   nuxeo.enrichment.save.tags=true
   nuxeo.enrichment.save.facets=true
   nuxeo.enrichment.raiseEvent=true
   nuxeo.ai.sightengine.apiKey=YOUR_API_KEY
   nuxeo.ai.sightengine.apiSecret=YOUR_API_SECRET
   ```
3. Start Nuxeo and upload an image.
4. Wait 10 seconds then look at the document tags and document JSON `enrichment:items` facet.

#### Nuxeo Configuration

You can set these in your `nuxeo.conf`. They are used in combination with the other configuration parameters for `nuxeo-ai-core` shown above.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="250" colspan="1">Parameter</th>
<th colspan="1">Description</th>
<th width="250" colspan="1">Default value</th>
<th width="150" colspan="1">Since</th>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.sightengine.apiKey`</td>
<td colspan="1">The API key for sightengine</td>
<td colspan="1"></td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.sightengine.apiSecret`</td>
<td colspan="1">The API secret for sightengine</td>
<td colspan="1"></td>
<td colspan="1">Since 1.0</td>
</tr>
<tr>
<td colspan="1">`nuxeo.ai.sightengine.all`</td>
<td colspan="1">Configure an enrichment service to process the `images` stream and call all sightengine models</td>
<td colspan="1">`true`</td>
<td colspan="1">Since 1.0</td>
</tr>
</tbody>
</table>
</div>
