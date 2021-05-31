---
title: 'HOWTO: Contribute Picture Conversion'
review:
    comment: ''
    date: '2021-05-11'
    status: ok
details:
    howto:
        excerpt: Learn how to contribute new picture conversions.
        level: Advanced
        tool: XML Extension
        topics: 'Automation, XMLExtensions, Layouts, Conversion'
labels:
    - lts2016-ok
    - howto
    - conversion
    - troger
    - picture
    - convert-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3866704'
    ajs-parent-page-title: Digital Asset Management (DAM)
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Contribute+Picture+Conversions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Contribute+Picture+Conversions'
    page_id: '20519904'
    shortlink: 4Bs5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/4Bs5AQ'
    source_link: /display/NXDOC/How+to+Contribute+Picture+Conversions
history:
    -
        author: Manon Lumeau
        date: '2016-04-22 13:08'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2015-04-15 13:14'
        message: Add links to the explorer
        version: '23'
    -
        author: Manon Lumeau
        date: '2015-01-09 14:50'
        message: ''
        version: '22'
    -
        author: Manon Lumeau
        date: '2015-01-08 17:01'
        message: ''
        version: '21'
    -
        author: Manon Lumeau
        date: '2015-01-08 17:00'
        message: ''
        version: '20'
    -
        author: Manon Lumeau
        date: '2015-01-08 16:56'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2015-01-08 16:56'
        message: ''
        version: '18'
    -
        author: Thomas Roger
        date: '2015-01-08 13:41'
        message: ''
        version: '17'
    -
        author: Thomas Roger
        date: '2015-01-08 13:39'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-12-16 18:15'
        message: 'Format steps, add related pages'
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-03 15:59'
        message: ''
        version: '14'
    -
        author: Thomas Roger
        date: '2014-12-02 19:49'
        message: ''
        version: '13'
    -
        author: Thomas Roger
        date: '2014-12-02 19:03'
        message: ''
        version: '12'
    -
        author: Thomas Roger
        date: '2014-12-02 16:18'
        message: ''
        version: '11'
    -
        author: Thomas Roger
        date: '2014-12-02 16:14'
        message: ''
        version: '10'
    -
        author: Thomas Roger
        date: '2014-12-02 15:30'
        message: ''
        version: '9'
    -
        author: Thomas Roger
        date: '2014-12-02 15:24'
        message: ''
        version: '8'
    -
        author: Thomas Roger
        date: '2014-12-02 12:09'
        message: ''
        version: '7'
    -
        author: Thomas Roger
        date: '2014-12-02 11:17'
        message: ''
        version: '6'
    -
        author: Thomas Roger
        date: '2014-12-01 10:47'
        message: ''
        version: '5'
    -
        author: Thomas Roger
        date: '2014-11-28 19:03'
        message: ''
        version: '4'
    -
        author: Thomas Roger
        date: '2014-11-28 19:02'
        message: ''
        version: '3'
    -
        author: Thomas Roger
        date: '2014-11-28 18:25'
        message: ''
        version: '2'
    -
        author: Thomas Roger
        date: '2014-11-28 18:24'
        message: ''
        version: '1'
---

{{! excerpt}}
This page explains how picture conversions are structured, and provide instructions to perform the standard picture conversion operations.
{{! /excerpt}}

## Concepts

Picture conversions are used to fill the picture views (stored in the `picture:views` field of a document having the `Picture` facet). The default ones are: Thumbnail, Small, Medium, FullHD, OriginalJpeg.

Picture conversions are simple XML contributions done on the [`pictureConversions`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.picture.ImagingComponent--pictureConversions) extension point of the [`org.nuxeo.ecm.platform.picture.ImagingComponent`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.platform.picture.ImagingComponent) component.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University: [DAM Concepts](https://university.nuxeo.com/learn/course/internal/view/elearning/97/NuxeoDigitalAssetManagementDAMConcepts)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/UNIVERSITY/university_dam.png
    name: university_dam.png
    addins#screenshot#up_to_date
--}}
![university_dam.png](nx_asset://ed2467b9-4529-4cca-9843-0b46f8cd3d62 ?w=650,border=true)
{{/callout}}

Picture conversions are working only on documents having the `Picture` facet.

## Common Conversion Contributions

### Register a New Converter

As a sample, let's see how we can retrieve a text to use as a watermark from the picture document.

- Contribute an XML extension to register a command line that will watermark the image:

```xml
<extension target="org.nuxeo.ecm.platform.commandline.executor.service.CommandLineExecutorComponent"
        point="command">
  <command name="watermarkWithText" enabled="true">
  <commandLine>convert</commandLine>
  <parameterString>#{sourceFilePath}  -gravity #{gravity} -fill #{textColor}
    -stroke #{strokeColor} -strokewidth #{strokeWidth} -pointsize #{textSize}
    -annotate #{textRotation}x#{textRotation}+#{xOffset}+#{yOffset}
    #{textValue} #{targetFilePath}</parameterString>
  <installationDirective>You need to install ImageMagick.</installationDirective>
  </command>
</extension>
```

- Contribute an XML extension to register a converter that uses our new `watermarkWithText` command line.

```xml
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="converter">
  <converter name="watermarkWithText" class="org.nuxeo.ecm.platform.convert.plugins.CommandLineConverter">
    <sourceMimeType>image/*</sourceMimeType>
    <destinationMimeType>image/*</destinationMimeType>
    <parameters>
      <parameter name="CommandLineName">watermarkWithText</parameter>
    </parameters>
  </converter>
</extension>
```

Since Nuxeo 10.10 (LTS 2019), it is required to specify the source mime-type(s) the converter can handle (all the `<sourceMimeType>image/*</sourceMimeType>` in the example, but you can specify more than one). This can be disabled (not recommended) by setting the `nuxeo.convert.enforceSourceMimeTypeCheck` configuration parameter to `false`. (See [this JIRA ticket](https://jira.nuxeo.com/browse/NXP-25840) for more details)

- Create the `WatermarkChain` automation chain that will be used for the picture conversion, getting the text from the `pictureDocument` and call the registered `watermarkWithText` converter to watermark the image. Here, for the example, we watermark the title of the document on the image:

```
- Blob.RunConverter:
  converter: watermarkWithText
    parameters:
    textValue: "@{Context[\"pictureDocument\"].getPropertyValue(\"dc:title\")}"
    targetFileName: Watermarked
    gravity: SouthWest
    textColor: Red
    strokeColor: Red
    strokeWidth: "1"
    textSize: "100"
    textRotation: "0"
    xOffset: "0"
    yOffset: "0"
```
**Notes on the `chainId` attribute**

You can put your own chain here to do whatever you want. Just note the following:

- The chain **must** take a `Blob` as input and return a `Blob` as output (this one will be saved as the generated picture view).
- The chain takes a `parameters` parameter which is a map containing the expected values computed by the `ImagingService` (`width`, `height`, `depth` and `conversionFormat`).
- The picture document, if any, on which the conversion is done is stored in the `Context` as the `pictureDocument` variable.
- The chain is run outside any `Transaction` / `CoreSession` because a conversion could be long and should be done outside any `Transaction` to avoid timeouts. If you need to open a `CoreSession` yourself, you can use the `Context.RunFileOperation` operation with the parameter `newTx` set to `true` to start a new Transaction, and then the `Auth.LoginAs` operation to open a `CoreSession`.  

### Add a New Picture Conversion

Let's declare a new picture conversion, which uses the new picture converter, by contributing on the [`pictureConversions`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.picture.ImagingComponent--pictureConversions) extension point:

```xml
<extension target="org.nuxeo.ecm.platform.picture.ImagingComponent" point="pictureConversions">
  <pictureConversion id="Watermark" description="Watermarked image"
    tag="watermark" order="0" chainId="WatermarkChain" />
</extension>
```

**Noteworthy Attributes**

- `order`: The order of this picture conversion in the final list of picture views, smaller first.
- `chainId`: the Automation chain associated to this picture conversion. Here we use the `WatermarkChain` automation chain. Another possible option would be to use the default `Image.Blob.Resize`  automation operation (If you need for exemple to just resize the image). If the `chainId` attribute is not filled, the original `Blob` will be returned and use for the generated picture view.
- `maxSize`: The maximum size of the width or height of the image (depending of the bigger one on the original image). Not setting the `maxSize` will put the original width and height as expected values.

You should end up with something like this on your instance:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Contribute Picture Conversions/new_converter.png
    name: new_converter.png
    1.1.3#screenshot#up_to_date
--}}
![new_converter.png](nx_asset://206da018-ef53-410f-bc0b-0ee928668602 ?w=450,border=true)

You can now click on the Watermark line to download the watermarked picture:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Contribute Picture Conversions/watermarked_pic.png
    name: watermarked_pic.png
    6.3.2#screenshot#up_to_date
--}}
![watermarked_pic.png](nx_asset://5c01789c-2b9e-491e-af58-6e7c472b1cb4 ?w=650,border=true)

### Run a Converter in a New CoreSession

If you need to open a `CoreSession` to retrieve a document, for instance the parent document which will hold the watermark text, you will need two chains, one opening a Transaction / CoreSession, and another one doing the watermarking.

- First, create the `GetWatermarkTextChain` automation chain that will retrieve the text, and put it in the `Context`:

```
- Blob.Push
- Auth.LoginAs: {}
- Document.Fetch: value: "@{Context[\"pictureDocument\"].parentRef}"
- Context.SetVar:
    name: watermarkText
    value: "@{Document[\"myparentschema:watermarkText\"]}"
- Blob.Pop
```

- Now, we need the `WatermarkChain` chain that will be used for the picture conversion, getting the text from the `Context` and call a custom operation that will watermark the image:

```
- Context.RunFileOperation:
    id: GetWatermarkText
    isolate: "false"
    newTx: "true"
    rollbackGlobalOnError: "true"
- WatermarkOperation:
    watermarkText: "@{Context[\"watermarkText\"]}"
```
### Filter Picture Conversions

Picture conversions can be filtered so that you can choose which picture conversions should be executed on a given document. The filtering is done through standard filters we already use in the Nuxeo Platform.

{{#> callout type='note' }}
In the execution context of the filters you can use on a picture conversion, you only have access to the detached **document**. There is no `principal`, `currentUser` or `coreSession`. You cannot access the Seam beans as the conversion is done in a worker.
{{/callout}}

Let's say we want to execute the previous `Watermark` picture conversion only on documents that have their `dc:source` value to `MyCompany` and their `dc:language` value not equals to `english`.

- First, contribute the filters:

```xml
<extension target="org.nuxeo.ecm.platform.actions.ActionService"
point="filters">
  <filter id="grantMyCompany">
    <rule grant="true">
      <condition>#{currentDocument.dc.source == "MyCompany"}</condition>
    </rule>
  </filter>
    <filter id="denyEnglish">
      <rule grant="false">
        <condition>#{currentDocument.dc.language == "english"}</condition>
      </rule>
  </filter>
</extension>
```

- Then associate the filters to the picture conversion by updating the `{{Watermark}}` picture conversion contribution:

```xml
<extension target="org.nuxeo.ecm.platform.picture.ImagingComponent"
point="pictureConversions">
  <pictureConversion id="Watermark" description="Watermarked image" tag="watermark"
  order="0" chainId="WatermarkChain">
    <filters>
      <filter-id>grantMyCompany</filter-id>
      <filter-id>denyEnglish</filter-id>
    </filters>
  </pictureConversion>
</extension>
```

### Disable or Update a Default Conversion

If you need to disable a default conversion, just override the [`pictureConversions`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.picture.ImagingComponent--pictureConversions) extension point, and add the `enabled=false` attribute:

```xml
<extension point="pictureConversions"
  target="org.nuxeo.ecm.platform.picture.ImagingComponent">
  <pictureConversion enabled="false" chainId="Image.Blob.Resize"
    default="true" description="Medium size"
    id="Medium" maxSize="1000" order="200" rendition="true"/>
</extension>
```

In this scenario, the Medium conversion won't be automated anymore and won't be displayed as available conversion in Nuxeo Web UI.

### Display a Custom Conversion in the Preview Section

The default document view layout of Nuxeo Web UI displays the main file preview (i.e. the binary stored in `file:content`). To display a specific conversion, you need to edit the view layout by

- Commenting the default previewer

```html
<!-- comment this section -->
<nuxeo-document-viewer role="widget" document="[[document]]"></nuxeo-document-viewer>
```

- Add the `nuxeo-document-preview` element to fetch a specific rendition.

```html
<nuxeo-card>
  <nuxeo-document-preview document="[[document]]"
  xpath="picture:views/1/content">
  </nuxeo-document-preview>
</nuxeo-card>
```

The `1` value in the `xpath` attribute corresponds to the order of the picture conversion in the list of picture views.

This is what should be expected:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Contribute Picture Conversions/preview_conversion.png
    name: preview_conversion.png
    addins#screenshot#up_to_date
--}}
![preview_conversion.png](nx_asset://9f01b7a1-e6b3-4372-ab1e-2a5fd00e7b63 ?w=650,border=true)

### Set Security on a Specific Conversion

If you need to grant or deny access to a specific rendition, the simplest way is to use the [File Download Security Policies]({{page version='' space='nxdoc' page='file-download-security-policies'}}). This could be helpful is you want to restrict access to a high resolution to a specific user group.

In this exemple, only members of the `human_ressources_department` group can access the Watermark picture.

```xml
<extension target="org.nuxeo.ecm.core.io.download.DownloadService" point="permissions">
    <permission name="myperm">
      <script>
        function run() {
        if (!CurrentUser.getGroups().contains("human_ressources_department")
              && XPath == "picture:views/1/content") {
          return false;
          }
        return true;
        }
      </script>
    </permission>
  </extension>
```

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [Contribute a Command Line Converter]({{page space='NXDOC' page='How to+Contribute+a+Command+Line+Converter'}})
- [Contribute a New Video Conversion]({{page space='NXDOC' page='How to+Contribute+a+New+Video+Conversion'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

- [Digital Asset Management (DAM) Section]({{page page='digital-asset-management-dam'}})
- [Conversion]({{page page='conversion'}})
- [Supported File Formats]({{page space='NXDOC' page='Supported File+Formats'}})

{{/panel}}</div></div>
