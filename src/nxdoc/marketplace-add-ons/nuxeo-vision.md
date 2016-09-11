---
title: Nuxeo Vision
review:
    comment: ''
    date: ''
    status: ok
labels:
    - link-update
toc: true
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+Vision
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Nuxeo+Vision'
    page_id: '31032055'
    shortlink: 94LZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/94LZAQ'
    source_link: /display/NXDOC710/Nuxeo+Vision
history:
    - 
        author: Solen Guitter
        date: '2016-05-26 09:44'
        message: ''
        version: '4'
    - 
        author: Manon Lumeau
        date: '2016-05-25 14:12'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2016-03-22 10:42'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2016-03-22 10:41'
        message: ''
        version: '1'

---
The [Nuxeo Vision](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-vision) addon provides a gateway to computer vision services. Currently it supports the Google Vision API but other services can be easily integrated as they become available. This gateway provides a wide range of features including shape recognition, auto-classification of images, OCR, face detection and more.

See [https://cloud.google.com/vision/](https://cloud.google.com/vision/) for more information.

## Installation and Configuration

### Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

### Google Account Configuration

Follow the instructions at [https://cloud.google.com/vision/docs/getting-started](https://cloud.google.com/vision/docs/getting-started).

### Nuxeo Platform Configuration

Once you have a google service account credential file:

1.  Upload the JSON credential file on your Nuxeo Instance, at the same location as the instance's nuxeo.conf file.
2.  Edit [nuxeo.conf]({{page space='admindoc710' page='configuration-parameters-index-nuxeoconf'}}) and set the credential file path:

    ```
    org.nuxeo.vision.google.credential=PATH_TO_JSON_CREDENTIAL_FILE
    ```

## Functional Overview

By default, the Computer Vision Service is called every time the main binary file of a picture or video document is updated. Classification labels are stored in the Tags property and OCRed text in the `dc:source` property.

![]({{file name='Google-Cloud-Vision-Screenshot-Savannah.png'}} ?w=500,border=true)

For videos, the platform uses the images of the storyboard.

![]({{file name='Google-Cloud-Vision-Video.png'}} ?w=500,border=true)

## Customization

### Overriding the Default Behavior

The default behavior is defined in two automation chains which can be overridden with an XML contribution.

1.  Once the addon is installed on your Nuxeo instance, import the `VisionOp` operation definition in your Studio project. See the instructions on the page [Referencing an Externally Defined Operation]({{page space='studio' page='referencing-an-externally-defined-operation'}}).
2.  Create your automation chains and use the operation inside them. You can use the [regular automation chains]({{page page='how-to-create-an-automation-chain'}}) or [Automation Scripting]({{page page='automation-scripting'}}).
3.  [Create an XML extension]({{page page='how-to-contribute-to-an-extension'}}) that specifies that your automation chains should be used.

    ```xml
    <extension target="org.nuxeo.vision.core.service" point="configuration">
    	<configuration>
    		<pictureMapperChainName>MY_PICTURE_CHAIN</pictureMapperChainName>
    		<videoMapperChainName>MY_VIDEO_CHAIN</videoMapperChainName>
    	</configuration>
    </extension>
    ```

4.  [Deploy]({{page space='studio' page='updating-your-instance-with-studio-configuration'}}) your Studio customization.

### Disabling the Default Behavior

The default behavior can also be completely disabled with the following contribution:

```xml
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
	<listener name="visionPictureConversionChangedListener" class="org.nuxeo.vision.core.listener.PictureConversionChangedListener" enabled="false></listener>
	<listener name="visionVideoChangedListener" class="org.nuxeo.vision.core.listener.VideoStoryboardChangedListener" enabled="false"></listener>
</extension>
```

## Core Implementation

In order to enable you to build your own custom logic, the addon provides an automation operation, called `VisionOp`. This operation takes a blob or list of blobs as input and calls the Computer Vision service for each one. The list of all the available features can be found at [https://cloud.google.com/vision/reference/rest/v1/images/annotate#Type](https://cloud.google.com/vision/reference/rest/v1/images/annotate#Type).

The result of the operation is stored in a context variable and is an object of type [VisionResponse](https://github.com/nuxeo-sandbox/nuxeo-vision/blob/master/nuxeo-vision-core/src/main/java/org/nuxeo/vision/core/service/VisionResponse.java).

Here&rsquo;s how the operation is used in the default chain:

```js
function run(input, params) {
    var blob = Picture.GetView(input, {
        'viewName': 'Medium'
    });
    blob = VisionOp(blob, {
        features: ['LABEL_DETECTION'],
        maxResults: 5,
        outputVariable: 'annotations'
    });
    var annotations = ctx.annotations;
    if (annotations === undefined || annotations.length === 0) return;
    var textAndLabels = annotations[0];
    // build tag list
    var labels = textAndLabels.getClassificationLabels();
    if (labels !== undefined && labels !== null && labels.length > 0) {
        var tags = [];
        for (var i = 0; i < labels.length; i++) {
            tags.push(labels[i].getText().replace(/\s/g, '+'));
        }
        input = Services.TagDocument(input, {
            'tags': tags
        });
    }
    input = Document.Save(input, {});
    return input;
}
```

## Google Vision API Limitations&nbsp;

The API has some[&nbsp;known and documented limitations](https://cloud.google.com/vision/docs/image-best-practices)&nbsp;you should be aware of. For example (as of May 2016):

*   There is limitation to the size of the image you send to the API: "Image files sent to the Google Cloud Vision API should not exceed 4 MB".&nbsp;There also is a limitation when you send a list of images (max. 8MB). This is an important information to handle before requesting data. And this is why, if you look at the original chain, it actually takes the &ldquo;Medium&rdquo; conversion, which is a JPEG we can assume is always smaller than 4MB. You also should read the limitations in terms of maximum number of images/second, etc.
*   Not all image formats are handled. TIFF for example is not handled.

Also, as it is a cloud service, these limitations will surely evolve, change, maybe depending on a subscription, etc.