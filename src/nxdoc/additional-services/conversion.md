---
title: Conversion
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '22380662'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Conversion
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Conversion'
    page_id: '22380620'
    shortlink: TIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TIBVAQ'
    source_link: /display/NXDOC60/Conversion
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 13:34'
        message: ''
        version: '8'
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:57'
        message: ''
        version: '7'
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:54'
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
Nuxeo Platform comes with conversion service that can be used to <span style="color: rgb(0,0,0);">manage conversion of Blobs from one format to an other.&nbsp;</span>

This is what is used for getting a pdf file from an office document, for instance. This is also the infrastructure you should use if you want to plug an Autocad convertor or any business specific format that is not available in the built-in set of converters.

The conversion service provides:

*   a simple api for transforming blobs or blobs stored on documents through the BlobHolder interface , check availability of a converter, ...
*   a caching mechanism for avoid dupplicated process time if the blob to convert has already been converted previously in the same target format
*   a transformation chain smart logic for chaining automatically the right converters for going from one format to another one
*   a set of built-in converters for managing many standard formats.

## Conversion Service API

The Conversion Service can be accessed via the standard Nuxeo Service lookup:

```
ConversionService conversionService = Framework.getService(ConversionService.class)
```

To convert a BlobHolder to a given destination mime type:

```
BlobHolder result = conversionService.convertToMimeType("text/plain", blobHolder, params);
```

params is a simple Map<String,Serializable> to pass parameters to the converter (can be null);

To use a known converter:

```
BlobHolder result = conversionService.convert("converterName", blobHolder, params);
```

To find a converter to a given conversion:

```
String converterName = conversionService.getConverterName(sourceMimeType, destinationMimeType);
```

To test if a converter is available:

```
String converterName = conversionService.getConverterName(sourceMimeType, destinationMimeType);
ConverterCheckResult checkResult = conversionService.isConverterAvailable("converterName");
```

This call can throw ConverterNotRegistred if the target converter does not exist at all. The ConverterCheckResult class provides:

*   a&nbsp;_isAvailable(_) method
*   a&nbsp;_getErrorMessage()_&nbsp;method: Returns the error that occured while doing the availability check
*   a&nbsp;_getInstallationMessage_&nbsp;method: Returns the installation message that was contributed by the converter contributor

## Using it from Automation

A few operations exists and leverage the conversion module behind the scene:

*   [Conversion > Convert To PDF](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Blob.Convert)
*   [Conversion > Convert to given mime-type](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewOperation/Blob.Convert)
*   [Convert using specific converter name](https://github.com/nuxeo/nuxeo-presales-prototyping-toolkit/blob/release-6.0/nuxeo-presales-prototyping-toolkit-images/src/main/java/org/nuxeo/presales/prototyping/toolkit/images/GenericConverter.java)&nbsp;(in a sandbox repository, not part of the default distribution)

## Configuring the Conversion Service

The Conversion Service supports a global configuration via XML file in order to configure caching.

```
<?xml version="1.0"?>
<component name="org.nuxeo.ecm.core.convert.config">
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"
point="configuration">
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

## Contributing Converters

To contribute a new converter, you have to contribute a class that implement the org.nuxeo.ecm.core.convert.extension.Converter interface. This class will be associated to:

*   a converter name
*   a list of source mime-types
*   one destination mime-type
*   optional named parameters

```
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"
point="converter">
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

See list of&nbsp;[built-in contributions](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.convert.service.ConversionServiceImpl--converter).

You can also contribute a converter that is a chain of existing converters. To to this, the contributed converter does not have to define an implementation class, just a chain of either converters or mime-types. If mime-types are used, the conversion service will automatically guess the converter chain from the mime-types steps.

```
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"
point="converter">
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

Converter based on external tools (such as command line or OpenOffice server based) can implement the ExternalConverter interface. This interfaces adds a `isConverterAvailable()` method that will be called in order to check converter availability.

## Converters Based on External Command Tools

A lot of conversion tools comes as command line executable. So in some case it's interesting to wraps these command lines into a converter.

For that purpose, we provide a base class for converters that are based on a command line wrapped by the nuxeo command-line service.

The base class org.nuxeo.ecm.platform.convert.plugins.CommandLineBasedConverter handles all the dirty work, and you only have to override the methods to define the parameters of the command line and the parsing of the output.

```xml
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"
point="converter">
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

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related pages in current documentation'}}

&nbsp;

*   [How to Automatically Convert a Document to PDF]({{page page='how-to-automatically-convert-a-document-to-pdf'}})
*   [Conversion How-To Index]({{page page='conversion-how-to-index'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

{{#> panel heading='Related pages in other documentation'}}

*   [Automation in Nuxeo Studio]({{page space='studio' page='automation'}})

{{/panel}}</div></div>