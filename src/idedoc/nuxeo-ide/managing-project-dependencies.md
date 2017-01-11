---
title: Managing Project Dependencies
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '22905665'
    ajs-parent-page-title: Nuxeo IDE
    ajs-space-key: IDEDOC
    ajs-space-name: Nuxeo IDE
    canonical: Managing+Project+Dependencies
    canonical_source: 'https://doc.nuxeo.com/display/IDEDOC/Managing+Project+Dependencies'
    page_id: '8684236'
    shortlink: zIKE
    shortlink_source: 'https://doc.nuxeo.com/x/zIKE'
    source_link: /display/IDEDOC/Managing+Project+Dependencies
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2014-09-01 11:53'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2014-08-28 17:39'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2013-06-25 12:24'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '27'
    -
        author: Solen Guitter
        date: '2013-06-25 12:23'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '26'
    -
        author: Solen Guitter
        date: '2013-06-25 12:23'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '25'
    -
        author: Solen Guitter
        date: '2013-06-25 12:23'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '24'
    -
        author: Solen Guitter
        date: '2013-06-25 12:23'
        message: ''
        version: '23'
    -
        author: Florent Guillaume
        date: '2012-07-06 15:30'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '22'
    -
        author: Florent Guillaume
        date: '2012-07-06 15:30'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '21'
    -
        author: Florent Guillaume
        date: '2012-07-06 15:30'
        message: Migration of unmigrated content due to installation of a new plugin
        version: '20'
    -
        author: Florent Guillaume
        date: '2012-07-06 15:30'
        message: Migrated to Confluence 4.0
        version: '19'
    -
        author: Florent Guillaume
        date: '2012-07-06 15:30'
        message: ''
        version: '18'
    -
        author: Wojciech Sulejman
        date: '2012-06-26 18:33'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2011-10-05 17:44'
        message: ''
        version: '16'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 15:13'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2011-10-05 14:26'
        message: ''
        version: '14'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 14:21'
        message: ''
        version: '13'
    -
        author: Bogdan Stefanescu
        date: '2011-10-05 14:20'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2011-10-03 18:36'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-10-03 14:21'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2011-09-30 17:55'
        message: added user libraries
        version: '9'
    -
        author: Solen Guitter
        date: '2011-09-30 16:33'
        message: Reverted from v. 6
        version: '8'
    -
        author: Solen Guitter
        date: '2011-09-30 15:39'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-09-30 15:38'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-09-30 15:33'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-09-30 15:25'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-09-30 12:12'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-09-28 17:16'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-09-28 17:15'
        message: ''
        version: '1'

---
{{multiexcerpt 'ide-replaced-by-generator-info' page='nuxeo-ide'}}

All the dependencies of your projects are managed using Nuxeo IDE.

## Nuxeo SDK Classpath

A Nuxeo SDK is necessary to create a Nuxeo project. A Nuxeo SDK is a Nuxeo-based Tomcat distribution (5.5 or more recent) of Nuxeo on which you will deploy your customizations. It provides the classpath for your projects.

You can install several Nuxeo SDKs for your different projects. For instance, you can use a Nuxeo CAP SDK for one project, a Nuxeo CMF SDK for another, etc. However you can use only one SDK at a time in an Eclipse workspace.

Nuxeo SDK are installed from the Eclipse preferences. This is also where you select the Nuxeo SDK to use in the workspace.

**To install a Nuxeo SDK:**

{{{multiexcerpt 'SDK-install-downloaded-distribution' page='Setting up a Nuxeo SDK'}}}

## User Libraries

As you develop your new features, you may want to use external libraries that are not provided by the Nuxeo SDK. In that case you can add new JARs to the project's classpath by declaring custom **User Libraries**. You can easily do so by using the Eclipse preferences:

{{! multiexcerpt name='add-user-libraries'}}

1.  Open Eclipse preferences and go to **Nuxeo**.
2.  Click on **User Libraries**.
3.  Click on the **Add** button and select the library's JAR on your computer.
    The JAR is added in the libraries list. The library's metadata should be automatically filled in. If not, fill them in, as they they are required to deploy your project correctly.
4.  Click on the **Apply** button.
    The library's classes are now available in Eclipse and you can use them.

{{! /multiexcerpt}}

As we will see in the next section, Nuxeo IDE provides a mean to automatically update the POM with the project dependencies. This also includes any user library you declared.

{{#> callout type='note' }}

You **must** fill the user library metadata (the Maven GAV information) otherwise synchronizing the POM will ignore your additional library.

{{/callout}}

## {{> anchor 'sync-poms'}}Synchronizing POMs

As you develop your customizations, you add new dependencies. All the dependencies are listed in the `pom.xml` file. Usually, you need to update your `pom.xml` manually and might forget a dependency, which will make your project build fail.

Nuxeo IDE provides a way to update your `pom.xml` file with the new dependencies. Before deploying your project, you can synchronize your project's `pom.xml` file. Then, Nuxeo IDE scans your project with all undeclared dependencies and adds them to the POM.

**To synchronize your project's POM:**

1. Right-click on the `pom.xml` file file then click on **Nuxeo**&nbsp;> **Synchronize POM**.
2. You will be prompted to select the artifacts you want to add to the `pom.xml` file.
    The missing artifacts are discovered by the Nuxeo IDE by scanning the sources of your project, and finding any class that you reference and that is not yet in the POM.
    ![]({{file name='NxIDE_pom_dependencies.png'}} ?w=450,border=true)
3. Click **Finish**.
    Then look again at the pom.xml file. Now you have your dependency there.

## Attaching Sources for Project Dependencies

You may surely want at some point to be able to browse the sources of the dependencies used by your project. This is useful when you need to understand the code or if you want to put breakpoints in the code outside your project. As we've seen the project dependencies are either the ones provided by the current Nuxeo SDK, or the ones you explicitly added as user libraries.

In order to do this, you must download the sources (if they are not yet already present in the Nuxeo SDK) and attach it to the corresponding JAR from the project classpath.
You can do that by using the **Nuxeo SDK** classpath properties dialog as follows:

{{! multiexcerpt name='add-dependency-sources'}}

1.  Right-click on the **Nuxeo SDK** entry in your project tree and then click on **Properties** to open the Nuxeo SDK classpath properties dialog.
2.  Select the JAR for which you want to attach sources. You can use the filter text box to quickly find the JAR by name.
3.  Click on **Download**.
    Sources are downloaded from Nuxeo Maven repositories. This means, the dependencies must have a correct Maven GAV information (in case the JAR is a user library).

    {{#> callout type='info' }}

    For now, only Nuxeo Maven repositories are scanned for sources.

    {{/callout}}

    In the case the dependency is not located in a Maven repository known by Nuxeo IDE, you can add sources by simply copying the corresponding source JAR from Maven to `NuxeoSDK/sdk/sources` directory (where "NuxeoSDK" is the install directory of the Nuxeo SDK). Then you need to reload the SDK by removing and adding it again in Nuxeo SDK preferences page.

{{! /multiexcerpt}}
