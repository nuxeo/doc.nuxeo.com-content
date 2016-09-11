---
title: Scan Documents Importer
review:
    comment: ''
    date: ''
    status: ok
labels:
    - scan-documents-importer
    - content-review-lts2015
    - update-needed
toc: true
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Scan+Documents+Importer
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Scan+Documents+Importer'
    page_id: '27604714'
    shortlink: 6jalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6jalAQ'
    source_link: /display/NXDOC710/Scan+Documents+Importer
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 12:35'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2016-08-31 12:35'
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

## Installation

The Scan Documents Importer addon is available as a Nuxeo Package. Look at [how to install a Nuxeo Package]({{page space='admindoc710' page='installing-a-new-package-on-your-instance'}}) for further instructions.

## Configuration

A step by step example explaining the addon configuration can be found in the Nuxeo blogs : [[Monday Dev Heaven] Multi-threaded, transactional bulk import with Nuxeo](http://blogs.nuxeo.com/development/2012/03/monday-dev-heaven-multithreaded-transactional-documents-import-nuxeo/)

Please note that the XML can only be mapped to non-multivalued and non-complex fields. If you need this functionality, see the advanced XML parsing section.

A [Java mapper class example](https://github.com/nuxeo/nuxeo-platform-importer/blob/release-7.10/nuxeo-importer-scan/src/test/java/org/nuxeo/platform/scanimporter/tests/SampleMapper.java) can be found on GitHub. This allows to create a specific Nuxeo document type depending on the XML source.

## Advanced XML Parsing

Advanced XML parsing for complex and / or multivalued fields can be achieved by adding the following bundles into your platform (copy the jar files into the `nxserver/bundles` directory):

1.  [nuxeo-importer-xml-parser](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav~org.nuxeo.ecm.platform~nuxeo-importer-xml-parser~~~~kw,versionexpand)
2.  [nuxeo-importer-scan-xml-parser](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav~org.nuxeo.ecm.platform~nuxeo-importer-scan-xml-parser~~~~kw,versionexpand)

These bundles provide you with a new service (`org.nuxeo.ecm.platform.importer.xml.parser.XMLImporterComponent`) and extension points that need to be used instead of the regular ones:

1.  `documentMapping` to determine which document type should be created depending on a set of conditions

2.  `attributeMapping` to do the XML parsing and map to the corresponding metadata

A detailed documentation on the advanced XML parsing usage can be found on the [nuxeo-importer-xml-parser GitHub page](https://github.com/nuxeo/nuxeo-platform-importer/tree/release-7.10/nuxeo-importer-xml-parser). To get you started, below is a working example with the original XML file and the corresponding XML configuration that can be pasted into Nuxeo Studio.

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

{{/panel}}{{#> panel type='code' heading='Corresponding XML extension into Nuxeo Studio'}}

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