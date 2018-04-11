---
title: How to Contribute a Command Line Converter
review:
    comment: ''
    date: '2018-01-15'
    status: ok
details:
    howto:
        excerpt: Learn how to contribute a new command line converter.
        level: Advanced
        tool: XML Extension
        topics: Conversion
labels:
    - lts2016-ok
    - howto
    - conversion
    - troger
    - convert-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '19235645'
    ajs-parent-page-title: Conversion
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Contribute+a+Command+Line+Converter
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Contribute+a+Command+Line+Converter'
    page_id: '22905742'
    shortlink: joNdAQ
    shortlink_source: 'https://doc.nuxeo.com/x/joNdAQ'
    source_link: /display/NXDOC/How+to+Contribute+a+Command+Line+Converter
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2014-12-16 17:51'
        message: dd related page
        version: '2'
    -
        author: Thomas Roger
        date: '2014-12-16 17:07'
        message: ''
        version: '1'

---
Since 7.1, there is a new converter class&nbsp;`CommandLineConverter`&nbsp;that can be used to contribute new converters executing a command line. A specific Java class calling the command line is not required anymore.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [DAM Configuration](https://university.nuxeo.com/learn/public/course/view/elearning/100/dam-configuration).
![]({{file name='university-dam-configuration.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

Let's see how we can contribute a new converter changing the format of an image using <span style="color: rgb(0,0,0);">ImageMagick</span>.

## Contributing the Command Line

Add a new command line called&nbsp;`changeFormat` that changes the image format.

```xml
<extension target="org.nuxeo.ecm.platform.commandline.executor.service.CommandLineExecutorComponent"
  point="command">
  <command name="changeFormat" enabled="true">
    <commandLine>convert</commandLine>
    <parameterString>#{sourceFilePath} #{targetFilePath}.#{format}
    </parameterString>
    <installationDirective>You need to install ImageMagick.
    </installationDirective>
  </command>
</extension>
```

**<span style="color: rgb(0,0,0);">Notes on the parameters</span>**

*   `sourceFilePath`: References the Blob passed as argument to the&nbsp;`ConversionService`. Here it will be the the image of which we want to change the format. This parameter will be computed by the&nbsp;`CommandLineConverter` from the input Blob.
*   `targetFilePath`: The output file path, computed by the&nbsp;`CommandLineConverter` (see below).
*   `format`: The format of the converted image. This parameter won't be computed by the&nbsp;`CommandLineConverter` and needs to be passed when calling the command line.

## Contributing the Converter

Add a new converter using the&nbsp;`CommandLineConverter` class to call the&nbsp;`changeFormat` command line.

```xml
<extension target="org.nuxeo.ecm.core.convert.service.ConversionServiceImpl"
  point="converter">
  <converter name="changeFormat"
    class="org.nuxeo.ecm.platform.convert.plugins.CommandLineConverter">
    <parameters>
      <parameter name="CommandLineName">changeFormat</parameter>
    </parameters>
  </converter>
</extension>
```

## Using the New Converter

**Notes on the&nbsp;`CommandLineConverter`**

*   It accepts one parameter,&nbsp;`targetFileName`, to specify the name of the output file.
*   All parameters passed to the converter will be passed to the command line: If a parameter&nbsp;`name` is passed to the converter, it can be also used in the command line referenced by the converter contribution.
*   It computes three parameters passed to the command line:
    *   `sourceFilePath`: The path of the input Blob
    *   `targetFilePath`: The path of the output file, computed from a temporary directory + the&nbsp;`targetFileName` parameter. If the&nbsp;`targetFileName` parameter is empty, a temporary one will be used.
    *   `outDirPath`: the temporary directory where to output the result. The&nbsp;`targetFilePath` references a file in this directory.

### With Java

Assuming you have a&nbsp;`BlobHolder` which is the input image and you want to change its format to&nbsp;`png`, you can use the following Java code:

```java
ConversionService cs = Framework.getService(ConversionService.class);
Map<String, Serializable> parameters = new HashMap<>();
parameters.put("targetFileName", "newImage");
parameters.put("format", "png");
BlobHolder result = cs.convert("changeFormat", parameters);

Blob newImage = result.getBlob();
// do whatever with the converted image
// assertEquals("newImage.png", mainBlob.getFilename());
```

### With Automation

Since 7.1, there is a new operation&nbsp;`RunConverter` that can run any named converter with a set of parameters. Assuming you have as input a&nbsp;`Blob` which is the input image and you want to change its format to&nbsp;`png`, you can use the following operation:

```
- Blob.RunConverter:
    converter: changeFormat
    parameters:
      format: "png"
```

The output of this operation will be the converted image.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to Automatically Convert a Document to PDF]({{page page='how-to-automatically-convert-a-document-to-pdf'}})
*   [How to Contribute Picture Conversions]({{page page='how-to-contribute-picture-conversions'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

*   [Conversion]({{page page='conversion'}})
*   [Automation]({{page page='automation'}})

{{/panel}}</div></div>
