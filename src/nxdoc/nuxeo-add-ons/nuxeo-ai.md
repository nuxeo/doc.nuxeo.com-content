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
The [Nuxeo AI](https://www.nuxeo.com/content-services-platform/ai/) package integrates Machine Learning Services into the
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

## Insight Deduplication

_This feature requires an Insight subscription_

The Deduplication feature presents images that are similar to other existing repository images. In a Nuxeo repository, such detection can be run each time a picture will be added to a document. On existing assets, a complete re-index can be operated through Nuxeo Insight.

![]({{file name='deduplication.png'}} ?w=600,border=true)

### Configuration

In order to activate the deduplication feature, we need to activate it in the `nuxeo.conf` file:

```
nuxeo.insight.dedup.enabled=true
```

By default, each document of 'Picture' type will be analyzed to detect potential similar documents. Here is the exact query:

```
SELECT * FROM Document WHERE ecm:mixinType = 'Picture' AND ecm:tag NOT IN ('not_duplicate')
```

This query and the metadata to introspect can be customized through a Nuxeo extension point as follows:

```
<requires>org.nuxeo.ai.similar.content.default.config</require>
<extension target="org.nuxeo.ai.similar.content.services.SimilarServiceComponent" point="configuration">
    <deduplication name="specific-contribution"
                   query="SELECT * FROM Document WHERE ecm:mixinType = 'Picture' AND ecm:tag NOT IN ('not_duplicate')">
      <!-- Here is the blob metadata to introspect-->
      <xpath>file:content</xpath>
      <filter id="dedup-default-filter">
        <rule grant="true">
          <type>Picture</type>
        </rule>
      </filter>
    </deduplication>
  </extension>
```

Note the 'specific-contribution' name of the contribution that needs to be set in `nuxeo.conf` through the variable: 

```
nuxeo.ai.similar.content.configuration.id=specific-contribution
```

There are two ways to detect the similar documents:

- Via a complete re-index of the repository through Nuxeo Insight
- Via an automatic listener that will display the similar documents in the Nuxeo UI each time an image has been added/updated/removed.

This listener is disabled by default and can be activated through `nuxeo.conf` via:

```
# Deduplication Listener activation flag
nuxeo.ai.similar.content.listener.enable=true
```

### Nuxeo Web UI Customization Forms

In order to be able to display all the similar documents each time an image is added/updated/removed, you have to add in the target document type form (create/edit/metadata) as follows:

1) Example of widget usage in Create/Edit forms:

```
<nuxeo-dropzone role="widget"
                    label="[[i18n('file.content')]]"
                    name="content"
                    document="{{document}}"></nuxeo-dropzone>

<nuxeo-ai-dedup-grid property="file:content" doc=[[document]]/>
```

2) Example of widget usage in Metadata forms:

```
<nuxeo-ai-dedup-grid property="file:content" doc=[[document]]/>
```

NB:
- Don't forget the double binding on `{{document}}` on the nuxeo dropzone element, that the systems can get changes event for the Create/Edit forms.
- The `property` parameter needs to be set to define which blob metadata you want to introspect.

3) Example of widget with custom content:

```
<nuxeo-ai-dedup-grid property="file:content" doc=[[document]]>
  <slot name="dedup-content">
    <!-- custom template for each similar document accessible via [[item]] -->
    <p>[[item.title]]</p>
  </slot>
</nuxeo-ai-dedup-grid>
```

Default Content is here:

```
<nuxeo-card heading="[[_getSimilarsLength(similars)]] [[i18n('ai.insight.dedup.label')]]" collapsible opened>
  <template is="dom-repeat" items="[[similars]]">
    <slot name="dedup-grid-content">
      <div class="thumbnailContainer" on-tap="_navigate">
        <img src="[[_thumbnail(item)]]" alt$="[[item.title]]"/>
      </div>
      <a class="title" href$="[[item.contextParameters.documentURL]]" on-tap="_navigate">
        <div class="dataContainer">
          <div class="title" id="title">[[item.title]]</div>
          <nuxeo-tag>[[formatDocType(item.type)]]</nuxeo-tag>
          <nuxeo-tooltip for="title">[[item.title]]</nuxeo-tooltip>
        </div>
      </a>
      <div class="actions">
        <div on-click="_delete" style="float:left">
          <paper-icon-button icon="delete" noink=""></paper-icon-button>
          <span class="label" hidden$="[[!showLabel]]">[[_label]]</span>
        </div>
        <nuxeo-favorites-toggle-button document="[[item]]"></nuxeo-favorites-toggle-button>
        <nuxeo-download-button document="[[item]]"></nuxeo-download-button>
      </div>
    </slot>
  </template>
</nuxeo-card>
```

### Misc

#### Hooks

1) An event `similarDocumentsFound` is fired each time a similar document has been sent to the Insight deduplication index. By creating a listener triggered by this event, you can introspect all the similar documents (by their ids) and the source document as follow:

```
Example

package .....

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.event.Event;
import org.nuxeo.ecm.core.event.EventListener;
import org.nuxeo.ecm.core.event.impl.DocumentEventContext;

public class ResolveDuplicatesListener implements EventListener {

    public static final AtomicReference<DocumentModel> docRef = new AtomicReference<>();

    public static final List<String> similarIds = Collections.synchronizedList(new ArrayList<>());

    @Override
    public void handleEvent(Event event) {
        DocumentEventContext ctx = (DocumentEventContext) event.getContext();
        docRef.set(ctx.getSourceDocument());

        @SuppressWarnings("unchecked")
        List<String> ids = (List<String>) ctx.getProperty("similarIds");
        similarIds.clear();
        similarIds.addAll(ids);
    }
}
```

2) An Automation operation can be contributed as "deduplication operation" as follows:

```
<require>org.nuxeo.ai.similar.content.default.config</require>
<extension target="org.nuxeo.ai.similar.content.services.SimilarServiceComponent" point="operation">
   <deduplication-operation class="org.something.YourOperation"/>
</extension>
```

This operation is triggered when a batch duplicate process is launched (`AI.ProcessDuplicates` operation execution) and can be used to introspect each document with its similars:

```
Example (default operation):

@Operation(id = DefaultDeduplicationResolverOperation.ID, category = "AI", label = "Default Deduplication resolver")
public class DefaultDeduplicationResolverOperation {

    private static final Logger log = LogManager.getLogger(DefaultDeduplicationResolverOperation.class);

    public static final String ID = "AI.DeduplicationResolverOperation";

    @Param(name = "similar")
    protected Set<Pair<String, String>> similar;

    @Param(name = "xpath")
    protected String xpath;

    @OperationMethod
    public void resolve(DocumentModel doc) {
        log.warn("Received document {} with duplicates of size {}", doc.getId(), similar.size());
    }
}

```

#### Additional Configuration

Other parameters of the deduplication stream can be updated:

```
# default value = 2
nuxeo.insight.dedup.concurrency

# default value = 2
nuxeo.insight.dedup.partitions

# default value = 1
nuxeo.ai.dedup.scroller.concurrency

# default value = 2
nuxeo.ai.dedup.resolver.concurrency
```

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

#### Big Picture

![]({{file name='nuxeo-ai-aws.png' page='nuxeo-ai'}} ?w=450,border=true)

##### Specifying Your Amazon Credentials and Region

Credentials are discovered using `nuxeo-runtime-aws`.  
The chain searches for credentials in order: Nuxeo's AWSConfigurationService, environment variables, system properties, profile credentials, EC2Container credentials.

In `nuxeo.conf`, add the following lines:

```
nuxeo.aws.accessKeyId=your_AWS_ACCESS_KEY_ID
nuxeo.aws.secretKey=your_AWS_SECRET_ACCESS_KEY
nuxeo.aws.sessionToken=your_AWS_SESSION_TOKEN
nuxeo.aws.region=your_AWS_REGION

```

{{#> callout type='info' }}
If your Nuxeo instance runs on Amazon EC2 or Amazon ECS, you can also transparently use IAM instance roles, in which case you do not need to specify the AWS ID and secret (the credentials will be fetched automatically from the instance metadata). The same applies to the region.
{{/callout}}

The region code can be found in the [S3 Region Documentation](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region). The default is `us-east-1`. At the time this documentation was written, the list is:

* us-east-1: US East (N. Virginia) (default)
* us-east-2: US East (Ohio)
* us-west-1: US West (N. California)
* us-west-2: US West (Oregon)
* eu-west-1: EU (Ireland)
* eu-west-2: EU (London)
* eu-west-3: EU (Paris)
* eu-central-1: EU (Frankfurt)
* ap-south-1: Asia Pacific (Mumbai)
* ap-southeast-1: Asia Pacific (Singapore)
* ap-southeast-2: Asia Pacific (Sydney)
* ap-northeast-1: Asia Pacific (Tokyo)
* ap-northeast-2: Asia Pacific (Seoul)
* ap-northeast-3: Asia Pacific (Osaka-Local)
* sa-east-1: South America (São Paulo)
* ca-central-1: Canada (Central)
* cn-north-1: China (Beijing)
* cn-northwest-1: China (Ningxia)

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

#### Big Picture

![]({{file name='nuxeo-ai-image-quality.png' page='nuxeo-ai'}} ?w=450,border=true)

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

### GCP

Nuxeo AI introduces support of fundamental Google Vision and OCR services implemented in  [`nuxeo-ai-gcp`](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-ai-gcp) package. Nuxeo AI GCP effort intends to replace the deprecated [Nuxeo Vision](https://doc.nuxeo.com/nxdoc/nuxeo-vision/) addon.

With this addon you can use the following features:
- [Face Detection](https://cloud.google.com/vision/docs/detecting-faces)
- [Label Detection](https://cloud.google.com/vision/docs/labels)
- [Landmark Detection](https://cloud.google.com/vision/docs/detecting-landmarks)
- [Logo Detection](https://cloud.google.com/vision/docs/detecting-logos)
- [Multiple Object Detection and Localization](https://cloud.google.com/vision/docs/object-localizer)
- [Crop Hints](https://cloud.google.com/vision/docs/detecting-crop-hints)
- [OCR](https://cloud.google.com/vision/docs/ocr)

<a name="gcp_credentials"></a>

Before using this addon you must obtain credentials from GCP console. Follow Google official [documentation](https://cloud.google.com/vision/product-search/docs/auth) to do so.

The result should be a JSON file.

Credentials discovery uses two possible approaches:
1. Through an environment variable `GOOGLE_CREDENTIALS_PATH`
1. `nuxeo.conf` variable `nuxeo.gcp.credentials` with the path to the credential location.

{{#> callout type='info' }}
Nuxeo AI GCP addon relies on synchronous REST calls that brings limitations to the file size.</br>
Maximum file size that can be used for prediction is 10MB.
{{/callout}}

#### Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

##### Quick Start

1. Install the [`nuxeo-ai-gcp`](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-ai-gcp) package.

   ```
   ./bin/nuxeoctl mp-install nuxeo-ai-gcp
   ```

1. Add the following parameters to `nuxeo.conf`.

   ```
   nuxeo.ai.images.enabled=true
   nuxeo.ai.text.enabled=true
   nuxeo.enrichment.gcp.images=true
   nuxeo.enrichment.gcp.text=true
   nuxeo.enrichment.save.tags=true
   nuxeo.enrichment.save.facets=true
   nuxeo.enrichment.raiseEvent=true
   ```

1. Set your GCP [credentials](#gcp_credentials)
1. Start Nuxeo and upload an image.
1. Wait 10 seconds then look at the document tags and document JSON `enrichment:items` facet.

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
<td colspan="1">`nuxeo.enrichment.gcp.images`</td>
<td colspan="1">Run GCP enrichiment services on images.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 2.4</td>
</tr>
<tr>
<td colspan="1">`nuxeo.enrichment.gcp.text`</td>
<td colspan="1">Run GCP enrichiment services on text.</td>
<td colspan="1">`false`</td>
<td colspan="1">Since 2.4</td>
</tr>
</tbody>
</table>
</div>

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Display Sensitive Data Details Contained in a Document](https://github.com/nuxeo/nuxeo-studio-community-cookbook/blob/master/modules/nuxeo/sensitive-data)

{{/panel}}</div><div class="column medium-6">
</div></div>
