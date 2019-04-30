---
title: Scan Documents Importer
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - scan-documents-importer
    - ajusto
    - update-needed
    - multiexcerpt-include
    - lts2017-ok
    - university
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Scan+Documents+Importer
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Scan+Documents+Importer'
    page_id: '18451825'
    shortlink: cY0ZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cY0ZAQ'
    source_link: /display/NXDOC/Scan+Documents+Importer
tree_item_index: 3200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 12:36'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2016-05-04 15:42'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-11-26 16:24'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-11-26 16:22'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2015-09-24 08:05'
        message: Removed 5.9.x references
        version: '12'
    -
        author: Bertrand Chauvin
        date: '2014-10-09 15:40'
        message: Added sample configuration
        version: '11'
    -
        author: Bertrand Chauvin
        date: '2014-10-09 15:14'
        message: Reverted from v. 8
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2014-10-09 15:13'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-10-08 09:57'
        message: typo
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2014-10-08 08:47'
        message: Started xml mapping
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2014-10-07 16:47'
        message: ''
        version: '6'
    -
        author: Bertrand Chauvin
        date: '2014-10-07 16:47'
        message: Added link to java mapper class example
        version: '5'
    -
        author: Bertrand Chauvin
        date: '2014-10-07 16:29'
        message: Added link to add-on configuration example
        version: '4'
    -
        author: Bertrand Chauvin
        date: '2014-10-07 16:27'
        message: Added installation instructions
        version: '3'
    -
        author: Thomas Roger
        date: '2014-04-02 12:05'
        message: ''
        version: '2'
    -
        author: Thomas Roger
        date: '2014-04-02 12:02'
        message: ''
        version: '1'

---

The [Scan Documents Importer addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-scan-importer) allows to create documents from XML files located on the file system every time a dedicated event is launched. It can therefore be easily configured to import data on a regular basis.

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Course on Document Import](https://university.nuxeo.com/learn/public/course/view/elearning/86/DataCapture).
![]({{file name='university-import.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}


## Import process

The scan import process is composed of several elements:
1. The files to import, classified in a folder structure.
2. XML files linked to the files to attach its document type and property values
3. An output folder where XML files are moved once processed by the scan importer.

![]({{file name='scan_importer.png'}} ?w=500,border=true)

4. Scan importer configurations, declared in an XML extension into Nuxeo Studio
  1. The import frequency (every 30 seconds or every night for example)
  2. Specific import sizing information (batch size, number of threads...)
  3. The document type which should be applied for the folders (Workspace by default) and the files (File by default)

  {{#> callout type='tip'}}
  If you need to import with specific properties, then you would have to change the default document type applied to the file (`targetLeafType` property in the XML contribution)
  {{/callout}}

  4. The property mapping between the XML file tags and the Nuxeo document model (XPATH values)


## Configuration

A step by step example explaining the addon configuration can be found in the Nuxeo blogs : [[Monday Dev Heaven] Multi-threaded, transactional bulk import with Nuxeo](http://blogs.nuxeo.com/development/2012/03/monday-dev-heaven-multithreaded-transactional-documents-import-nuxeo/)

Please note that the XML can only be mapped to non-multivalued and non-complex fields. If you need this functionality, see the advanced XML parsing section.

A [Java mapper class example](https://github.com/nuxeo/nuxeo/blob/master/addons/nuxeo-platform-importer/nuxeo-importer-scan/src/test/java/org/nuxeo/platform/scanimporter/tests/SampleMapper.java) can be found on GitHub. This allows to create a specific Nuxeo document type depending on the XML source.

## Advanced XML Parsing

Advanced XML parsing for complex and / or multivalued fields can be achieved by adding the following bundles into your platform (copy the jar files into the `nxserver/bundles` directory):

1.  [nuxeo-importer-xml-parser](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav~org.nuxeo.ecm.platform~nuxeo-importer-xml-parser~~~~kw,versionexpand)
2.  [nuxeo-importer-scan-xml-parser](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav~org.nuxeo.ecm.platform~nuxeo-importer-scan-xml-parser~~~~kw,versionexpand)

These bundles provide you with a new service (`org.nuxeo.ecm.platform.importer.xml.parser.XMLImporterComponent`) and extension points that need to be used instead of the regular ones:

1.  `documentMapping` to determine which document type should be created depending on a set of conditions

2.  `attributeMapping` to do the XML parsing and map to the corresponding metadata

A detailed documentation on the advanced XML parsing usage can be found on the [nuxeo-importer-xml-parser GitHub page](https://github.com/nuxeo/nuxeo/tree/master/addons/nuxeo-platform-importer/nuxeo-importer-xml-parser). To get you started, below is a working example with the original XML file and the corresponding XML configuration that can be pasted into Nuxeo Studio.

{{#> panel type='code' heading='Original XML file'}}
```xml
<invoice>
  <order_number value="Invoice NX38937987-421-690" />
  <software_source value="My accounting software" />
  <supplier value="Papeterie Stylo Dépôt" />
  <order_date value="2005-03-12T11:00:00.000Z" />
  <planned_delivery_date value="2005-04-17" />
  <total_incl_taxes value="65.90" />
  <file name="order made on march 12 2005.pdf" />
  <item>
    <ref>373668</ref>
    <desc>Pens</desc>
    <amount>12.30</amount>
    <delivery_date>2005.04.17</delivery_date>
  </item>
  <item>
    <ref>737282</ref>
    <desc>Poster</desc>
    <amount>3.70</amount>
    <delivery_date>2005.04.17</delivery_date>
  </item>
  <item>
    <ref>029938</ref>
    <desc>Glue sticks</desc>
    <amount>7.75</amount>
    <delivery_date>2005.04.20</delivery_date>
  </item>
</invoice>
```
{{/panel}}

{{#> panel type='code' heading='Corresponding XML extension into Nuxeo Studio'}}
```xml
<!-- Doctype to create depending on XML formatting
     In this case, having an invoice tag means I should create an Invoice document in Nuxeo -->
<extension target="org.nuxeo.ecm.platform.importer.xml.parser.XMLImporterComponent" point="documentMapping">
    <docConfig tagName="invoice">
      <docType>Invoice</docType>
    </docConfig>
</extension>

<!-- XML to metadata mapping
     In this case, my invoice schema is as follows:
     	order_number 						string
		software_source						string
		supplier							string
		total_inc_taxes						float
		order_date							date
		planned_delivery_date				date
		items								complex, multivalued
			ref								string
			description						string
			amount							float
			deliverydate					date
-->
<extension target="org.nuxeo.ecm.platform.importer.xml.parser.XMLImporterComponent" point="attributeMapping">
    <attributeConfig tagName="order_number" docProperty="dc:title" xmlPath="@value"/>
  <attributeConfig tagName="software_source" docProperty="dc:source" xmlPath="@value"/>
    <attributeConfig tagName="supplier" docProperty="invoice:supplier" xmlPath="@value"/>
  <attributeConfig tagName="total_incl_taxes" docProperty="invoice:amount" xmlPath="@value"/>
  <attributeConfig tagName="order_date" docProperty="invoice:orderdate" xmlPath="@value"/>
  <attributeConfig tagName="planned_delivery_date" docProperty="invoice:planneddeliverydate" xmlPath="@value"/>

  <attributeConfig tagName="file" docProperty="file:content">
        <mapping documentProperty="filename">@name</mapping>
        <mapping documentProperty="content">@name</mapping>
    </attributeConfig>

    <attributeConfig tagName="item" docProperty="invoice:items">
       <mapping documentProperty="ref">ref/text()</mapping>
    <mapping documentProperty="description">desc/text()</mapping>
    <mapping documentProperty="amount">amount/text()</mapping>
    <mapping documentProperty="deliverydate">
             #{
                String date = currentElement.selectNodes('delivery_date/text()')[0].getText().trim();
              return Fn.parseDate(date, 'yyyy.MM.dd')
        }]]>
        </mapping>
  </attributeConfig>
</extension>
```
{{/panel}}

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related documentation'}}

- [Choosing How to Import Data in the Nuxeo Platform]({{page page='choosing-how-to-import-data-in-the-nuxeo-platform'}})
- [Nuxeo Bulk Document Importer]({{page page='nuxeo-bulk-document-importer'}})
- [Nuxeo Core Import / Export API]({{page page='nuxeo-core-import-export-api'}})

{{/panel}}</div><div class="column medium-6"></div></div>
