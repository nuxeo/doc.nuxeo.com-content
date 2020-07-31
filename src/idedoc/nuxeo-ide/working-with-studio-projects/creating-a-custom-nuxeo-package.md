---
title: Creating a Custom Nuxeo Package
review:
    comment: ''
    date: ''
    status: ok
labels:
    - howto
    - nuxeo-ide
confluence:
    ajs-parent-page-id: '8684219'
    ajs-parent-page-title: Working with Studio Projects
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Creating+a+Custom+Nuxeo+Package
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Creating+a+Custom+Nuxeo+Package'
    page_id: '17794084'
    shortlink: JIQPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JIQPAQ'
    source_link: /display/IDEDOC/Creating+a+Custom+Nuxeo+Package
tree_item_index: 600
history:
    -
        author: Solen Guitter
        date: '2015-11-30 09:16'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2015-09-09 08:35'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-09-08 15:31'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2015-09-08 13:23'
        message: ''
        version: '10'
    -
        author: Bertrand Chauvin
        date: '2014-11-14 15:34'
        message: ''
        version: '9'
    -
        author: Bertrand Chauvin
        date: '2014-11-14 15:34'
        message: ''
        version: '8'
    -
        author: Bertrand Chauvin
        date: '2014-11-14 15:33'
        message: Added instructions on generating the actual marketplace package
        version: '7'
    -
        author: Bertrand Chauvin
        date: '2014-11-14 15:01'
        message: Fixed typo
        version: '6'
    -
        author: Solen Guitter
        date: '2014-09-01 12:05'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-11-27 15:21'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-11-27 15:20'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2013-11-26 18:35'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2013-11-26 18:34'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

{{! excerpt}}
Nuxeo IDE enables you to create Nuxeo Packages for your Nuxeo project. A Nuxeo Package is the easiest way to distribute a plugin, as it contains all the bundles, libraries and runtime properties that would be required to make your new plugin work, all in one single ZIP file.
{{! /excerpt}}

{{#> callout type='tip' }}
The whole Nuxeo Package structure and metadata are detailed on the page [Creating Nuxeo Packages]({{page space='nxdoc' page='creating-nuxeo-packages'}}).
{{/callout}}

{{#> callout type='warning' }}
Please note that this functionality may not be fully compliant on Nuxeo IDE versions 1.2.1 to 1.2.3 included when using a Nuxeo Platform 5.8 SDK. For users using this configuration, an upgrade to Nuxeo IDE 1.2.4 is recommended.
A workaround can also be found in the following JIRA ticket: [Allow marketplace package generation with Nuxeo Platform 5.8 / Maven 3](https://jira.nuxeo.com/browse/NXIDE-336)
{{/callout}}

**To create your Nuxeo Package in Nuxeo IDE:**

1.  If you haven't yet, create a new Nuxeo plugin in your Eclipse.
2.  From the Wizard options, choose **Marketplace Project**.
    ![]({{file name='2.png'}} ?w=400,h=392,border=true)
3.  On the Marketplace creation form, define:
    *   The id for your Nuxeo Package
    *   A namespace package for your Java test classes
    *   Project binding to attach your Nuxeo plugin to the Marketplace package![]({{file name='3.png'}} ?w=400,h=486,border=true)
4.  On the Marketplace information form, specify the Nuxeo Package metadata such as:
    *   The distribution type (`cap`, `dm`, `dam`...)
    *   The Nuxeo Package version, license, description
    *   The Nuxeo Package deployment options (need to restart the instance...)
    *   The functional tests deployment (WebDriver, Selenium and FunkLoad)![]({{file name='4.png'}} ?w=400,h=481,border=true)
5.  Click on the **Finish** button to create your Nuxeo Package project.
    Here is what you get:

    *   One project is created for whole Nuxeo Package (link) container
    *   One project for each test framework selected (included WebDriver tests in Java).
        ![]({{file name='5.png'}} ?w=400,h=493,border=true)
6.  To generate the actual Nuxeo Package:
    1.  Make sure the bound POM file contains all necessary dependencies. You can right click on your project and choose "Nuxeo / synchronize POM" to ease the process.
        ![]({{file name='nx-ide-pom-synchro.png'}} ?w=500,h=308,border=true)
    2.  From the bound project, use Maven to compile and install the project's JAR file into your local repository (`mvn clean install` command)
    3.  From the Eclipse Marketplace project, use Maven to generate the Nuxeo Package (`mvn clean package` command)
    {{#> callout type='warning' }}
    Since Nuxeo IDE 1.2.1, Maven 3 is being used to compile projects and generate Nuxeo Packages. Refer to the [Use Maven 3](https://jira.nuxeo.com/browse/NXP-13555) JIRA ticket for more information about switching from Maven 2 to Maven 3 impacts.
    {{/callout}}
