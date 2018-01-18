---
title: Conversion
review:
    comment: ''
    date: '2017-12-11'
    status: ok
labels:
    - lts2016-ok
    - conversion
    - troger
    - convert-component
    - lts2017-ok
toc: true
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
confluence:
    ajs-parent-page-id: '16089319'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Conversion
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Conversion'
    page_id: '19235645'
    shortlink: PYMlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/PYMlAQ'
    source_link: /display/NXDOC/Conversion
tree_item_index: 300
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 11:44'
        message: ''
        version: '14'
    -
        author: Thibaud Arguillere
        date: '2016-06-02 22:14'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2016-01-08 10:36'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-01-08 10:34'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2015-10-16 12:57'
        message: 'Add link to service, fix some formatting'
        version: '10'
    -
        author: Thomas Roger
        date: '2015-10-07 10:02'
        message: ''
        version: '9'
    -
        author: Thomas Roger
        date: '2015-10-02 12:50'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-04-09 08:51'
        message: Update related pages and format
        version: '7'
    -
        author: Alain Escaffre
        date: '2015-04-08 23:05'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-05-02 17:52'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-05-02 17:42'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-05-02 17:36'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-05-02 17:35'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-05-02 17:27'
        message: ''
        version: '1'

---
{{! excerpt}}

The Nuxeo Platform comes with a [conversion service](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewService/org.nuxeo.ecm.core.convert.api.ConversionService) that can be used to manage conversion of blobs from one format to an other.

{{! /excerpt}}

This is what is used for getting a PDF file from an office document, for instance. This is also the infrastructure you should use if you want to plug an Autocad convertor or any business specific format that is not available in the built-in set of converters.

The conversion service provides:

*   A simple API for transforming blobs or blobs stored on documents through the BlobHolder interface, checking the availability of a converter, etc.
*   A caching mechanism to avoid duplicated process time if the blob to convert was previously converted in the same target format
*   A transformation chain smart logic for automatically chaining the right converters to go from one format to another
*   A set of built-in converters for managing many standard formats

## Converting Blobs

### Java API

The Conversion Service can be accessed via the standard Nuxeo Service lookup:

```java
ConversionService conversionService = Framework.getService(ConversionService.class)
```

#### Synchronous Conversions

To convert a BlobHolder to a given destination mime type:

```java
BlobHolder result = conversionService.convertToMimeType("text/plain", blobHolder, params);
```

`params` is a simple `Map<String,Serializable>` to pass parameters to the converter (can be null).

To use a known converter:

```java
BlobHolder result = conversionService.convert("converterName", blobHolder, params);
```

#### {{> anchor 'java-api-async-conversions'}}Asynchronous Conversions

Since 7.10, four new methods are available on the&nbsp;`ConversionService` to schedule asynchronous conversions and retrieve the result.

To schedule a new asynchronous conversion given a converter name:

```java
String conversionId = conversionService.scheduleConversion("converterName", blobHolder, params);
```

To schedule a new asynchronous conversion given a destination mime type:

```
String conversionId = conversionService.scheduleConversion("text/plain", blobHolder, params);
```

Those methods return a conversion id to be used in the following methods to get the status and result of the conversion.

To retrieve the status of a scheduled conversion:

```java
ConversionStatus status = conversionService.getConversionStatus(conversionId);
```

The&nbsp;`ConversionStatus` object holds the status of an asynchronous conversion which can be `SCHEDULED`, `RUNNING`&nbsp;or&nbsp;`COMPLETED`.

When the status is&nbsp;`COMPLETED`, the result of the conversion can be retrieved with:

```java
BlobHolder result = conversionService.getConversionResult(conversionId, true);
```

The second boolean parameter defines if the conversion result will be deleted, if&nbsp;`true`, or not. If deleted, the next call to&nbsp;`#getConversionResult` will return&nbsp;`null`.

### Utility Methods

Find a converter name for a given conversion:

```java
String converterName = conversionService.getConverterName(sourceMimeType, destinationMimeType);
```

Test if a converter is available:

```java
String converterName = conversionService.getConverterName(sourceMimeType, destinationMimeType);
ConverterCheckResult checkResult = conversionService.isConverterAvailable("converterName");
```

This call can throw `ConverterNotRegistred` if the target converter does not exist at all. The `ConverterCheckResult` class provides:

*   A `isAvailable()` method
*   A `getErrorMessage()` method: Returns the error that occurred while doing the availability check
*   A `getInstallationMessage` method: Returns the installation message that was contributed by the converter contributor

### Automation

A few operations exist to do synchronous conversions:

*   [Conversion > Convert to given mime-type](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Blob.Convert)
*   [Conversion > Convert To PDF](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Blob.ToPDF)
*   [Conversion > Run converter](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Blob.RunConverter)

### REST API

The REST API provides synchronous and asynchronous conversions.

#### Synchronous Conversions

Synchronous conversions are retrieved through the&nbsp;`@convert` adapter.

```
GET http://localhost:8080/nuxeo/api/v1/path/{docPath}/@convert?converter=any2pdf
GET http://localhost:8080/nuxeo/api/v1/path/{docPath}/@blob/file:content/@convert?converter=any2pdf
```

To convert using a named converter:

```
GET http://localhost:8080/nuxeo/api/v1/path/{docPath}/@convert?converter=any2pdf
```

To convert using a destination mime type:

```
GET http://localhost:8080/nuxeo/api/v1/path/{docPath}/@convert?type=application%2Fpdf
```

To convert using a format (destination extension):

```
GET http://localhost:8080/nuxeo/api/v1/path/{docPath}/@convert?format=pdf
```

All those conversions can be also used with a POST request on the&nbsp;`@convert` adapter (with&nbsp;`async` param to&nbsp;`false`).

#### {{> anchor 'rest-api-async-conversions'}}Asynchronous Conversions

Scheduling an asynchronous conversion is done by using a POST request on the&nbsp;`@convert` adapter and setting the form param `async` to `true`, otherwise the conversion will be done synchronously.

```
POST http://localhost:8080/nuxeo/api/v1/path/{docPath}/@convert
POST http://localhost:8080/nuxeo/api/v1/path/{docPath}/@blob/file:content/@convert
```

Parameters

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Name</th><th colspan="1">Type</th><th colspan="1">Description</th></tr><tr><td colspan="1">

converter

</td><td colspan="1">

string

</td><td colspan="1">

The converter name, such as "any2pdf".

</td></tr><tr><td colspan="1">

type

</td><td colspan="1">

string

</td><td colspan="1">

The destination mime type, such as "application/pdf".

</td></tr><tr><td colspan="1">

format

</td><td colspan="1">

string

</td><td colspan="1">

The destination format, such as "pdf".

</td></tr><tr><td colspan="1">

async

</td><td colspan="1">

boolean

</td><td colspan="1">

`true` to schedule an asynchronous conversion, `false` otherwise. Default to `false`.

</td></tr></tbody></table></div>

Note that at least one of the parameters&nbsp;`converter`,&nbsp;`type` or&nbsp;`format` must be set.

**Note:** Parameters being passed as _FormData_, the body will look like:

```
converter=any2pdf&async=true
```

This POST returns a HTTP code 202 with the following data:

```js
{
  "entity-type": "conversionScheduled",
  "conversionId": "id",
  "pollingURL": "http://localhost:8080/nuxeo/api/v1/conversion/id/poll",
  "resultURL": "http://localhost:8080/nuxeo/api/v1/conversion/id/result"
}
```

The `pollingURL` is used to get the status of a scheduled conversion, it's part of the new `conversion` endpoint.
The `resultURL` is used to get the result of the conversion, it's part of the new `conversion` endpoint.

```
GET http://localhost:8080/nuxeo/api/v1/conversion/id/poll
```

It returns a HTTP code 200 with the following data:

```js
{
  "entity-type": "conversionStatus",
  "conversionId": "id",
  "status": "running", // scheduled, completed,
  "resultURL": "http://localhost:8080/nuxeo/api/v1/conversion/id/result"
}
```

To retrieve a conversion result, use the provided `resultURL`:

```
GET http://localhost:8080/nuxeo/api/v1/conversion/id/result
```

Returns the result of the conversion, or HTTP code 404 if there is no conversion matching the id or if there is no result yet (conversion not completed).

## Configuration and Contributions

### Configuration

The Conversion Service supports a global configuration via XML file in order to configure caching.

```xml
<component name="org.nuxeo.ecm.core.convert.config">
  <extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="configuration">
    <configuration>
      <!-- define directory location for caching : default to java default tmp dir (java.io.tmpdir) -->
      <cachingDirectory>/var/ConversionCache</cachingDirectory>
      <!-- GC interval in minutes (default = 10 minutes ) -->
      <gcInterval>10</gcInterval>
      <!-- maximum size for disk cache in KB (default to 10*1024) -->
      <diskCacheSize>1024</diskCacheSize>
      <!-- Enables or disables caching (default = true)-->
      <enableCache>true</enableCache>
    </configuration>
  </extension>
</component>
```

### Contributions

#### Simple Converter

To contribute a new converter, you have to contribute a class that implement the `org.nuxeo.ecm.core.convert.extension.Converter` interface. This class will be associated to:

*   A converter name
*   A list of source mime-types
*   One destination mime-type
*   Optional named parameters

```xml
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="converter">
  <converter name="html2text" class="org.nuxeo.ecm.core.convert.plugins.text.extractors.Html2TextConverter">
    <sourceMimeType>text/html</sourceMimeType>
    <sourceMimeType>text/xhtml</sourceMimeType>
    <destinationMimeType>text/plain</destinationMimeType>
    <parameters>
      <parameter name="myParam">myValue</parameter>
    </parameters>
  </converter>
</extension>
```

See list of [built-in contributions](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.convert.service.ConversionServiceImpl--converter).

#### Chained Converters

You can also contribute a converter that is a chain of existing converters. To to this, the contributed converter does not have to define an implementation class, just a chain of either converters or mime-types. If mime-types are used, the conversion service will automatically guess the converter chain from the mime-types steps.

```xml
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="converter">
  <!-- explicit chain of 2 converters : converter1 + converter2 -->
  <converter name="chainedConverter" >
    <sourceMimeType>some/mimetype</sourceMimeType>
    <destinationMimeType>some/other-mimetype</destinationMimeType>
    <conversionSteps>
      <subconverter>converter1</subconverter>
      <subconverter>converter2</subconverter>
    </conversionSteps>
  </converter>
  <!-- define chain via mime types : foo/bar1 => foo/bar2 => foo/bar3 -->
  <converter name="chainedMimeType" >
    <sourceMimeType>foo/bar1</sourceMimeType>
    <destinationMimeType>foo/bar3</destinationMimeType>
    <conversionSteps>
      <step>foo/bar2</step>
    </conversionSteps>
  </converter>
</extension>
```

When using chained converters, the additional optional parameters are passed to each underlying converter.

Converter based on external tools (such as command line or OpenOffice server based) can implement the `ExternalConverter` interface. This interfaces adds a `isConverterAvailable()` method that will be called in order to check converter availability.

#### Converters Based on External Command Tools

A lot of conversion tools come as command line executables. So in some case it is interesting to wraps these command lines into a converter.

For that purpose, we provide a base class for converters that are based on a command line wrapped by the Nuxeo command-line service.

The base class `org.nuxeo.ecm.platform.convert.plugins.CommandLineBasedConverter` handles all the dirty work, and you only have to override the methods to define the parameters of the command line and the parsing of the output.

```xml
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl" point="converter">
  <!-- converter based on the pdftohml command line -->
  <converter name="pdf2html" class="org.nuxeo.ecm.platform.convert.plugins.PDF2HtmlConverter">
    <sourceMimeType>application/pdf</sourceMimeType>
    <destinationMimeType>text/html</destinationMimeType>
    <parameters>
      <parameter name="CommandLineName">pdftohtml</parameter>
    </parameters>
  </converter>
</extension>
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Automation]({{page page='automation'}})
*   [How to Contribute Picture Conversions]({{page page='how-to-contribute-picture-conversions'}})
*   [How to Contribute a Command Line Converter]({{page page='how-to-contribute-a-command-line-converter'}})
*   [How to Automatically Convert a Document to PDF]({{page page='how-to-automatically-convert-a-document-to-pdf'}})
*   [How to Contribute a New Video Conversion]({{page page='how-to-contribute-a-new-video-conversion'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
