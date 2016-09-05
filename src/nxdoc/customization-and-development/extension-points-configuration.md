---
title: Extension points configuration
labels:
    - reviewed
    - extension-point
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Extension+points+configuration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Extension+points+configuration'
    page_id: '17334357'
    shortlink: VYAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/VYAIAQ'
    source_link: /display/NXDOC58/Extension+points+configuration
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 15:44'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-28 12:36'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-09-20 14:50'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-09-09 10:35'
        message: ''
        version: '13'
    - 
        author: Alain Escaffre
        date: '2013-09-06 20:04'
        message: ''
        version: '12'
    - 
        author: Alain Escaffre
        date: '2013-09-06 20:01'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-09-06 14:00'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-05-21 10:50'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-05-21 10:50'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-03-02 15:50'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-01-07 18:38'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-01-07 11:59'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:22'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:09'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:04'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 00:48'
        message: ''
        version: '1'

---
{{! excerpt}}

Inside the Nuxeo Platform, pretty much everything is about extension points. Extension points are used to let you contribute XML files to the Nuxeo components. This section explains the basic steps to contribute a new XML file to an extension point.

{{! /excerpt}}

&nbsp;The extension point system to can be used to:

*   Define a new document type,
*   Hide a button from the default UI that you want to remove,
*   Change the condition that make a particular view available,
*   Add a new navigation axis,
*   Change the way the documents listings are displayed,
*   ...

So before going further, you may want to take a look at the&nbsp;[Component Model]({{page page='component-model'}})&nbsp;section.

Once you have understood the notion of extension point and contribution, you can go ahead and start configuring the platform.

For that, you first need to know what you want to configure: find the extension point you want to contribute to. The next sections will give you an overview of the main concepts of the most used extension points. If you need more, you can directly use the [Nuxeo Platform Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/listExtensionPoints) to browse all the available extension points.

Once you have found your target extension point, you simply have to create an XML file that holds the configuration and deploy it inside your Nuxeo server.

The exact XML content will depends on each extension point, but they all start the same:

```
<?xml version="1.0"?>
 <component name="unique.name.for.your.xml.contribution">

  <extension target="target.component.identifier"
    point="extensionPointName">

    <!-- XML Content Depending on the target Extension Point goes HERE -->

  </extension>

</component>

```

In order to have your contribution deployed you need to:

*   Have your filename end with `-config.xml`,
*   Have your file placed in the config directory (`nuxeo.ear/config` for JBoss distribution or `nxserver/config` for Tomcat distribution)

By default, XML configuration files are only read on startup, so you need to restart your server in order to apply the new configuration.

{{#> callout type='info' heading='Easy extension configuration with Nuxeo Studio'}}

Nuxeo Studio is a great way to configure extensions, have a look at the [documentation]({{page space='studio' page='nuxeo-online-services'}})!

{{/callout}}