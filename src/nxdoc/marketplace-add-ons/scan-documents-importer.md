---
title: Scan Documents Importer
labels:
    - scan-documents-importer
    - update-needed
    - content-review-lts2015
    - multiexcerpt-include
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Scan+Documents+Importer
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Scan+Documents+Importer'
    page_id: '18451825'
    shortlink: cY0ZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cY0ZAQ'
    source_link: /display/NXDOC/Scan+Documents+Importer
history:
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

## Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## Configuration

A step by step example explaining the addon configuration can be found in the Nuxeo blogs : [[Monday Dev Heaven] Multi-threaded, transactional bulk import with Nuxeo](http://blogs.nuxeo.com/development/2012/03/monday-dev-heaven-multithreaded-transactional-documents-import-nuxeo/)

Please note that the XML can only be mapped to non-multivalued and non-complex fields. If you need this functionality, see the advanced XML parsing section.

A [Java mapper class example](https://github.com/nuxeo/nuxeo-platform-importer/blob/master/nuxeo-importer-scan/src/test/java/org/nuxeo/platform/scanimporter/tests/SampleMapper.java) can be found on GitHub. This allows to create a specific Nuxeo document type depending on the XML source.

## Advanced XML parsing

Advanced XML parsing for complex and / or multivalued fields can be achieved by adding the following bundles into your platform (copy the jar files into the `nxserver/bundles` directory):

1.  [nuxeo-importer-xml-parser](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav~org.nuxeo.ecm.platform~nuxeo-importer-xml-parser~~~~kw,versionexpand)
2.  [nuxeo-importer-scan-xml-parser](https://maven-eu.nuxeo.org/nexus/index.html#nexus-search;gav~org.nuxeo.ecm.platform~nuxeo-importer-scan-xml-parser~~~~kw,versionexpand)

These bundles provide you with a new service (`org.nuxeo.ecm.platform.importer.xml.parser.XMLImporterComponent`) and extension points that need to be used instead of the regular ones:

1.  `documentMapping` to determine which document type should be created depending on a set of conditions

2.  `attributeMapping` to do the XML parsing and map to the corresponding metadata

A detailed documentation on the advanced XML parsing usage can be found on the [nuxeo-importer-xml-parser GitHub page](https://github.com/nuxeo/nuxeo-platform-importer/tree/master/nuxeo-importer-xml-parser). To get you started, below is a working example with the original XML file and the corresponding XML configuration that can be pasted into Nuxeo Studio.

```

    373668
    Pens
    12.30
    2005.04.17

    737282
    Poster
    3.70
    2005.04.17

    029938
    Glue sticks
    7.75
    2005.04.20

```

```

      Invoice 

        @name 
        @name 

       ref/text() 
    desc/text() 
    amount/text() 

             #{ 
                String date = currentElement.selectNodes('delivery_date/text()')[0].getText().trim(); 
              return Fn.parseDate(date, 'yyyy.MM.dd') 
        }]]> 

```

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related pages in current documentation"}}

{{/panel}}

</div>

<div class="column medium-6">{{#> panel heading="Related pages in other documentation"}}

{{/panel}}

</div>

</div>