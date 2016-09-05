---
title: How to Contribute a Simple Configuration in Nuxeo
toc: true
confluence:
    ajs-parent-page-id: '17334435'
    ajs-parent-page-title: Dev Cookbook
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Contribute+a+Simple+Configuration+in+Nuxeo
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+Contribute+a+Simple+Configuration+in+Nuxeo
    page_id: '17334526'
    shortlink: '-oAIAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-oAIAQ'
    source_link: /display/NXDOC58/How+to+Contribute+a+Simple+Configuration+in+Nuxeo
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 14:05'
        message: igration of unmigrated content due to installation of a new plugi
        version: '25'
    - 
        author: Solen Guitter
        date: '2015-08-28 14:05'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:09'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '23'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:08'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '22'
    - 
        author: Solen Guitter
        date: '2015-01-30 10:08'
        message: link update
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:16'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:16'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-12-13 18:16'
        message: Updated link to 5.8 release
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-02-13 18:02'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-04-18 16:42'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-04-18 16:42'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-04-18 16:42'
        message: Migrated to Confluence 4.0
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-04-18 16:42'
        message: Added TOC and formatted steps
        version: '5'
    - 
        author: Benjamin Jalon
        date: '2012-01-30 12:35'
        message: ''
        version: '4'
    - 
        author: Benjamin Jalon
        date: '2012-01-30 12:03'
        message: Reverted from v. 1
        version: '3'
    - 
        author: Benjamin Jalon
        date: '2012-01-30 12:02'
        message: ''
        version: '2'
    - 
        author: Benjamin Jalon
        date: '2012-01-30 11:59'
        message: ''
        version: '1'

---
&nbsp;

## Find the Extension Point Where to Contribute

Your first step is to find the open door configuration where you want to contribute. We call these open doors **Extension points**.
Nuxeo lists all extension points for a given version [in the Nuxeo Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/).

1.  Click on the **Explore** button of the given version you work with.
2.  In the **Browse by category** panel, click on **Bundle groups > Components > Extension points**.
3.  In the **Extension Point** column, click on the extension point you're interested in.
    The documentation of this extension point is displayed.
    ![]({{file name='Nuxeo-explorer.png'}} ?w=650,border=true)
4.  Then, if you click on any link in the **Contributions** section, you will see all the default contributions implemented into your Nuxeo instance.
    There are [hundreds of configuration possibilities](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-5.8/listExtensionPoints)!

## Create Your Contribution

Once you have found the extension point you want to contribute to, you can just contribute really easily with Nuxeo Studio (think of pioneers that did that without Nuxeo IDE and Nuxeo Explorer :).
Here we assume you that you have installed Nuxeo IDE and follow the [Getting Started guide]({{page space='nxdoc' page='getting-started-with-nuxeo-ide'}}) or the [How-to create an empty bundle]({{page page='how-to-create-an-empty-bundle'}}).

1.  Create a file `myproject-servicewhereIcontribute-contribution.xml` into the directory `src/main/resources/OSGI-INF/` of your project.
2.  Declare an empty component into this file, like that:

    ```
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.extention.point.where.we.contribute.contribution" version="1.0">

    </component>

    ```

3.  You must give a **unique name** for your component. If the name of your package is not unique it will **not be deployed**.

    {{#> callout type='tip' }}

    In Nuxeo, we follow this naming way **org.mycompany.myproject.extention.point.where.we.contribute.contribution**.
    You can follow your way but be careful to avoid conflicts.

    {{/callout}}
4.  Add your contribution that express the configuration you want in the component XML fragment. You get something like:

    ```
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.extention.point.where.we.contribute.contribution" version="1.0">

           <!-- target and point value is given by the extension point definition -->
            <extension target="name.of.the.component.where.the.service.isdeclared" point="pointNameIntoThisComponent">
              <!-- here you put your configuration XML fragment
              ...
            </extension>
    </component>

    ```

## Declare Your Contribution into Your Bundle

In the previous section you have created your configuration. But if you build the JAR of your project and put it into the Nuxeo server, your component will not be deployed as it is not declared into your bundle. You must notify the existence of your component in your JAR for the Runtime to ask him to deploy it.

This declaration is made through the `src/main/resources/META-INF/MANIFEST.MF` file:
Create a new parameter, if it does not exist.

```
Manifest-Version: 1.0
Bundle-Vendor: Nuxeo
Bundle-ActivationPolicy: lazy
Bundle-ClassPath: .
Bundle-Version: 5.5
Bundle-Name: jalon-dm-bundle
Nuxeo-Component: OSGI-INF/extensions/me.jalon.dm.bundle.importer.FileS
&nbsp;ystemFetcher.xml,OSGI-INF/extensions/com.mycomapny.test.FillIDDocumen
&nbsp;t.xml,OSGI-INF/extensions/com.mycomapny.test.asda.xml
Bundle-ManifestVersion: 2
Bundle-SymbolicName: jalon-dm-bundle
Bundle-RequiredExecutionEnvironment: JavaSE-1.6

```

```
Manifest-Version: 1.0
... all the existing element already set ...
Nuxeo-Component: OSGI-INF/myproject-servicewhereIcontribute-contribution.xml

```

If the Nuxeo-Component already exists with another component declaration, separate them by commas.

{{!-- unmigrated-wiki-markup: {multi-excerpt-include:How-to create an empty bundle|name=manifest-format-warning|nopanel=true} --}}

## Override the Nuxeo Default Configuration

Most of the time you will want to override an existing Nuxeo Component. Each extension point has its own logic (even if most of the time you will just have to contribute the same item with the same name). So look into the extension point definition for how to override an existing configuration.
But you have to take care of another thing. In fact components deployment is linear, so if you want to override an existing configuration, it must be deployed AFTER the existing component.

1.  First you must identify this component: using Nuxeo Explorer, go to the extension point definition (see [the first section]({{page page='find-the-extension-point-where-to-contribute'}})).
2.  Click on the contribution you want to override.
3.  Copy the name of the component (value after **In component**).
4.  And paste it in your component into a `<require>` item.
    You will have something like that:

    ```
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.extention.point.where.we.contribute.contribution" version="1.0">
       <require>name.of.the.component.you.want.to.override</require>

       <!-- target and point value is given by the extension point definition -->
       <extension target="name.of.the.component.where.the.service.isdeclared" point="pointNameIntoThisComponent">
         <!-- here you put your configuration XML fragment
            ...
       </extension>
    </component>

    ```