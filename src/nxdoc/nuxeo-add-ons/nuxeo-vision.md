---
title: Nuxeo Vision
review:
    comment: ''
    date: '2017-07-10'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - multiexcerpt-include
    - content-review-lts2017
    - lmcintyre
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Vision
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Vision'
    page_id: '31031613'
    shortlink: PYHZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/PYHZAQ'
    source_link: /display/NXDOC/Nuxeo+Vision
tree_item_index: 2900
history:
    -
        author: Solen Guitter
        date: '2016-08-03 08:53'
        message: pdate link to VisionRespons
        version: '20'
    -
        author: Solen Guitter
        date: '2016-05-26 09:44'
        message: ''
        version: '19'
    -
        author: Thibaud Arguillere
        date: '2016-05-23 21:29'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-05-16 08:40'
        message: ''
        version: '17'
    -
        author: Thibaud Arguillere
        date: '2016-05-13 14:30'
        message: ''
        version: '16'
    -
        author: Thibaud Arguillere
        date: '2016-05-13 14:27'
        message: ''
        version: '15'
    -
        author: Thibaud Arguillere
        date: '2016-05-13 14:26'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-04-29 16:27'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-03-22 10:35'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2016-03-17 10:15'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2016-03-17 09:59'
        message: ''
        version: '10'
    -
        author: Michaël Vachette
        date: '2016-03-16 18:27'
        message: ''
        version: '9'
    -
        author: Julie Allouch
        date: '2016-03-15 22:44'
        message: ''
        version: '8'
    -
        author: Julie Allouch
        date: '2016-03-15 22:42'
        message: ''
        version: '7'
    -
        author: Julie Allouch
        date: '2016-03-15 22:36'
        message: ''
        version: '6'
    -
        author: Melinda Cormier
        date: '2016-03-15 21:10'
        message: ''
        version: '5'
    -
        author: Michaël Vachette
        date: '2016-03-15 18:54'
        message: ''
        version: '4'
    -
        author: Michaël Vachette
        date: '2016-03-15 17:44'
        message: ''
        version: '3'
    -
        author: Michaël Vachette
        date: '2016-03-15 17:43'
        message: ''
        version: '2'
    -
        author: Michaël Vachette
        date: '2016-03-15 17:40'
        message: ''
        version: '1'

---
The [Nuxeo Vision](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-vision) addon provides a gateway to computer vision services. Currently it supports the Google Vision API and Amazon Rekognition API. Other services can be easily integrated as they become available. These external services allow you to understand the content of an image by encapsulating powerful machine learning models. This gateway provides a wide range of features including shape recognition, auto-classification of images, OCR, face detection and more.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [DAM with Nuxeo Vision](https://university.nuxeo.com/learn/public/course/view/elearning/101/dam-with-nuxeo-vision)
- [Expert Session - Going further with Nuxeo Vision](https://university.nuxeo.com/learn/public/course/view/elearning/147/expert-session-going-further-with-nuxeo-vision)
![]({{file name='university-nuxeo-vision.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Installation and Configuration

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

To install the Nuxeo Vision Package, you have several options:
- From the Nuxeo Marketplace: install [the Nuxeo Vision package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-vision).
- From the Nuxeo server web UI "Admin / Update Center / Packages from Nuxeo Marketplace"
- From the command line: `nuxeoctl mp-install nuxeo-vision`

### Google Vision Configuration
- Configure a [Google service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount)
- As of march 2<sup>nd</sup>, 2016, billing must be activated in your google account in order to use the Vision API
- You can generate either an API Key or a Service Account Key (saved as a JSON file)
- If you created a Service Account Key, install it on your server and edit nuxeo.conf to add the full path to the file:
```
org.nuxeo.vision.google.credential=[path_to_credentials_goes_here]
```
- If you generated an API key, use the `org.nuxeo.vision.google.key` parameter:
```
org.nuxeo.vision.google.key=[your_api_key_goes_here]
```

See [https://cloud.google.com/vision/](https://cloud.google.com/vision/) for more information.

### AWS Rekognition Configuration
- Configure a key/secret pair in the [AWS console](http://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html)
- Check the [FAQ](https://aws.amazon.com/rekognition/faqs/) to see in which regions the API is available
- Edit nuxeo.conf with the suitable information
```
org.nuxeo.vision.default.provider=aws
org.nuxeo.vision.aws.region=
org.nuxeo.vision.aws.key=
org.nuxeo.vision.aws.secret=
```

## Functional Overview

By default, the Computer Vision Service is called every time the main binary file of a picture or video document is updated. Classification labels are stored in the Tags property.

![]({{file name='Google-Cloud-Vision-Screenshot-Church.png'}} ?w=500,border=true)

For videos, the platform uses the images of the storyboard.

![]({{file name='Google-Cloud-Vision-Video-WebUI.png'}} ?w=500,border=true)

## Customization

### Overriding the Default Behavior

The default behavior is defined in two automation chains which can be overridden with an XML contribution.

1.  Once the addon is installed on your Nuxeo instance, import the `VisionOp` operation definition in your Studio project. See the instructions on the page [Referencing an Externally Defined Operation]({{page space='studio' page='referencing-an-externally-defined-operation'}}).
2.  Create your automation chains and use the operation inside them. You can use the [regular automation chains]({{page page='how-to-create-an-automation-chain'}}) or [Automation Scripting]({{page page='automation-scripting'}}).
3.  [Create an XML extension]({{page page='how-to-contribute-to-an-extension'}}) that specifies that your automation chains should be used.

    ```xml
    <extension target="org.nuxeo.vision.core.service" point="configuration">
    	<configuration>
            <defaultProviderName>${org.nuxeo.vision.default.provider:=}</defaultProviderName>
    		<pictureMapperChainName>MY_PICTURE_CHAIN</pictureMapperChainName>
    		<videoMapperChainName>MY_VIDEO_CHAIN</videoMapperChainName>
    	</configuration>
    </extension>
    ```

4.  [Deploy]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) your Studio customization.

### Disabling the Default Behavior

The default behavior can also be completely disabled with the following contribution:

```xml
<extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
	<listener name="visionPictureConversionChangedListener" class="org.nuxeo.vision.core.listener.PictureConversionChangedListener" enabled="false"></listener>
	<listener name="visionVideoChangedListener" class="org.nuxeo.vision.core.listener.VideoStoryboardChangedListener" enabled="false"></listener>
</extension>
```

## Core Implementation

In order to enable you to build your own custom logic, the addon provides an automation operation, called `VisionOp`. This operation takes a blob or list of blobs as input and calls the Computer Vision service for each one. The list of all the available features can be found at [https://cloud.google.com/vision/reference/rest/v1/images/annotate#Type](https://cloud.google.com/vision/reference/rest/v1/images/annotate#Type).

The result of the operation is stored in a context variable and is an object of type [VisionResponse](https://github.com/nuxeo/nuxeo-vision/blob/master/nuxeo-vision-core/src/main/java/org/nuxeo/vision/core/service/VisionResponse.java).

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

&nbsp;

## Google Vision and AWS Rekognition API Limitations

* Google Vision API has some known and documented [limitations](https://cloud.google.com/vision/docs/supported-files) you should be aware of. And should also regularly check Google Vision API documentation for changes. For example, at the time the API was first released, the maximum size for an image was 4MB. As of December 2018 it is now 20MB. Also, the first version did no support TIFF, it supports it as of December 2018, etc.

* Amazon Rekognition doesn't provide text-recognition services (OCR)

Also, as these are cloud services, these limitations evolve, change, maybe depending on a subscription, etc.
