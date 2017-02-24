---
title: How to Contribute Picture Conversions
review:
    comment: ''
    date: '2016-12-06'
    status: ok
details:
    howto:
        excerpt: Learn how to contribute new picture conversions.
        level: Advanced
        tool: XML Extension
        topics: 'Conversion, DAM'
labels:
    - lts2016-ok
    - howto
    - conversion
    - picture
    - convert-component
toc: true
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
Picture conversions are used to fill the picture views (stored in the `picture:views` field of a document having the `Picture` facet). The default ones are: Thumbnail, Small, Medium, FullHD, OriginalJpeg.

Picture conversions are simple XML contributions done on the [`pictureConversions`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.picture.ImagingComponent--pictureConversions) extension point of the [`org.nuxeo.ecm.platform.picture.ImagingComponent`](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.platform.picture.ImagingComponent) component.

Picture conversions are working only on documents having the `Picture` facet.

{{#> callout type='info' }}

Available since 7.1.

{{/callout}}

## Contributing a New Picture Conversion

### Resizing a Picture

Let's add a new picture conversions called `Large` that will resize the picture to `800px` max.

```xml
 <extension target="org.nuxeo.ecm.platform.picture.ImagingComponent"
  point="pictureConversions">

  <pictureConversion id="Large" description="Large image" tag="large"
    maxSize="800" order="0" default="false" chainId="Image.Blob.Resize" />

</extension>
```

**Noteworthy Attributes**

*   `maxSize`: The maximum size of the width or height of the image (depending of the bigger one on the original image). Not setting the `maxSize` will put the original width and height as expected values.
*   `order`: The order of this picture conversion in the final list of picture views, smaller first.
*   `default`: The picture conversions marked as `default` are always generated, they are not filtered. If `false`, the associated filters will be evaluated before the generation (no filter means always generate).
*   `chainId`: the Automation chain associated to this picture conversion. Here we use the default available chain `Image.Blob.Resize` that will just resize the image according to the `maxSize` attribute. If the `chainId` attribute is not filled, the original `Blob` will be returned and use for the generated picture view.

**Notes on the `chainId` attribute**

You can put your own chain here to do whatever you want. Just note the following:

*   The chain **must** take a `Blob` as input and return a `Blob` as output (this one will be saved as the generated picture view).
*   The chain takes a `parameters` parameter which is a map containing the expected values computed by the `ImagingService` (`width`, `height`, `depth` and `conversionFormat`).
*   The picture document, if any, on which the conversion is done is stored in the `Context` as the `pictureDocument` variable.
*   The chain is run outside any `Transaction` / `CoreSession` because a conversion could be long and should be done outside any `Transaction` to avoid timeouts. If you need to open a `CoreSession` yourself, you can use the `Context.RunFileOperation` operation with the parameter `newTx` set to `true` to start a new Transaction, and then the `Auth.LoginAs` operation to open a `CoreSession`.

### Watermarking a Picture

As a sample, let's see how we can retrieve a text to use as a watermark from the picture document.

1.  Contribute an XML extension to register a command line that will watermark the image:

    ```xml
    <extension
        target="org.nuxeo.ecm.platform.commandline.executor.service.CommandLineExecutorComponent"
        point="command">
      <command name="watermarkWithText" enabled="true">
        <commandLine>convert</commandLine>
        <parameterString>#{sourceFilePath}  -gravity #{gravity} -fill #{textColor} -stroke #{strokeColor} -strokewidth #{strokeWidth} -pointsize #{textSize} -annotate #{textRotation}x#{textRotation}+#{xOffset}+#{yOffset} #{textValue} #{targetFilePath}
        </parameterString>
        <installationDirective>You need to install ImageMagick.
        </installationDirective>
      </command>
    </extension>
    ```

2.  Contribute an XML extension to register a converter that uses our new `watermarkWithText` command line:

    ```xml
    <extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"
      point="converter">
      <converter name="watermarkWithText"
        class="org.nuxeo.ecm.platform.convert.plugins.CommandLineConverter">
        <parameters>
          <parameter name="CommandLineName">watermarkWithText</parameter>
        </parameters>
      </converter>
    </extension>
    ```

3.  <span style="line-height: 21.58px;">Create a chain that will be used for the picture conversion, getting the text from the `pictureDocument` and call the registered `watermarkWithText` converter to watermark the image. Here, for the example, we watermark the title of the document on the image:</span>

    {{#> panel type='code' heading='WatermarkChain'}}

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
          textSize: "36"
          textRotation: "0"
          xOffset: "0"
          yOffset: "0"
    ```

    {{/panel}}
4.  Add a new picture conversion that will watermark the image:

    ```xml
    <extension target="org.nuxeo.ecm.platform.picture.ImagingComponent"
      point="pictureConversions">

      <pictureConversion id="Watermark" description="Watermarked image" tag="watermark"
        order="0" chainId="WatermarkChain" />

    </extension>
    ```

    You should end up with something like this on your instance:
    ![]({{file name='conversion.png'}} ?w=450,border=true)

    You can now click on ![]({{file name='download.png' space='userdoc' page='icons-index'}}) on the Watermark line to download the watermarked picture:
    ![]({{file name='Watermark_nuxeo_landscape.jpeg'}} ?w=450,h=301,border=true)

5.  If you need to open a `CoreSession` to retrieve a document, for instance the parent document which will hold the watermark text, you will need two chains, one opening a Transaction / CoreSession, and another one doing the watermarking.
    1.  First, create a chain that will retrieve the text, and put it in the `Context`:

        {{#> panel type='code' heading='GetWatermarkTextChain'}}

        ```
        - Blob.Push
        - Auth.LoginAs: {}
        - Document.Fetch:
            value: "@{Context[\"pictureDocument\"].parentRef}"
        - Context.SetVar:
            name: watermarkText
            value: "@{Document[\"myparentschema:watermarkText\"]}"
        - Blob.Pop
        ```

        {{/panel}}
    2.  Now, we need the chain that will be used for the picture conversion, getting the text from the `Context` and call a custom operation that will watermark the image:

        {{#> panel type='code' heading='WatermarkChain'}}

        ```
        - Context.RunFileOperation:
            id: GetWatermarkText
            isolate: "false"
            newTx: "true"
            rollbackGlobalOnError: "true"
        - WatermarkOperation:
            watermarkText: "@{Context[\"watermarkText\"]}"
        ```

        {{/panel}}

## Filtering Picture Conversions

{{#> callout type='note' }}
Picture conversions marked as `default` cannot be filtered, they are always executed. For instance, all the picture conversions required by the Nuxeo Platform are marked as `default`.
{{/callout}}

Picture conversions (not marked as `default`) can be filtered so that you can choose which picture conversions should be executed on a given document. The filtering is done through standard filters we already use in the Nuxeo Platform.

{{#> callout type='note' }}
In the execution context of the filters you can use on a picture conversion, you only have access to the detached **document**. There is no `principal`, `currentUser` or `coreSession`. You cannot access the Seam beans as the conversion is done in a worker.
{{/callout}}

Let's say we want to execute the previous `Watermark` picture conversion only on documents that have their `dc:source` value to `MyCompany` and their `dc:language` value not equals to `english`.

1.  First, contribute the filters:

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

2.  Then associate the filters to the picture conversion by updating the \{{Watermark}} picture conversion contribution:

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

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Contribute a New Video Conversion]({{page page='how-to-contribute-a-new-video-conversion'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

- [Digital Asset Management (DAM)]({{page page='digital-asset-management-dam'}})
- [Conversion]({{page page='conversion'}})

{{/panel}}</div></div>
