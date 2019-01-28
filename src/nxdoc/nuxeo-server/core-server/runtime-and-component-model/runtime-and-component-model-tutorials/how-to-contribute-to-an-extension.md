---
title: How to Contribute to an Extension
review:
  comment: ''
  date: '2017-12-14'
  status: ok
details:
  howto:
    excerpt: 'Learn how to create an XML extension in Nuxeo Studio, with the Nuxeo CLI and how to override a Nuxeo contribution.'
    level: Intermediate
    tool: 'Nuxeo CLI, Studio'
    topics: Extension point
labels:
  - lts2016-ok
  - xml-extension
  - extension-point
  - studio
  - howto
  - runtimecomponent
  - kleturc
  - lts2017-ok
  - university
toc: true
confluence:
  ajs-parent-page-id: '950284'
  ajs-parent-page-title: Runtime and Component Model
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: How+to+Contribute+to+an+Extension
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Contribute+to+an+Extension'
  page_id: '12914315'
  shortlink: iw7F
  shortlink_source: 'https://doc.nuxeo.com/x/iw7F'
  source_link: /display/NXDOC/How+to+Contribute+to+an+Extension
tree_item_index: 200
history:
  - author: Manon Lumeau
    date: '2016-08-25 16:26'
    message: ''
    version: '25'
  - author: Manon Lumeau
    date: '2016-06-09 13:44'
    message: ''
    version: '24'
  - author: Manon Lumeau
    date: '2016-03-29 12:10'
    message: ''
    version: '23'
  - author: Ronan Daniellou
    date: '2015-11-06 14:09'
    message: 'misspelling: extention -> extension'
    version: '22'
  - author: Solen Guitter
    date: '2015-10-08 09:15'
    message: Migration of unmigrated content due to installation of a new plugin
    version: '21'
  - author: Solen Guitter
    date: '2015-10-08 09:15'
    message: ''
    version: '20'
  - author: Ronan Daniellou
    date: '2015-09-28 15:38'
    message: "Deleted superfluous 'you'"
    version: '19'
  - author: Solen Guitter
    date: '2015-01-30 10:08'
    message: Migration of unmigrated content due to installation of a new plugin
    version: '18'
  - author: Solen Guitter
    date: '2015-01-30 10:08'
    message: Migration of unmigrated content due to installation of a new plugin
    version: '17'
  - author: Solen Guitter
    date: '2015-01-30 10:08'
    message: link update
    version: '16'
  - author: Solen Guitter
    date: '2014-09-08 17:42'
    message: Migration of unmigrated content due to installation of a new plugin
    version: '15'
  - author: Solen Guitter
    date: '2014-09-08 17:42'
    message: Migration of unmigrated content due to installation of a new plugin
    version: '14'
  - author: Solen Guitter
    date: '2014-09-08 17:42'
    message: ''
    version: '13'
  - author: Solen Guitter
    date: '2014-09-08 17:39'
    message: ''
    version: '12'
  - author: Solen Guitter
    date: '2014-05-23 12:02'
    message: ''
    version: '11'
  - author: Solen Guitter
    date: '2014-05-05 09:11'
    message: Formatting
    version: '10'
  - author: Alain Escaffre
    date: '2014-05-02 14:48'
    message: ''
    version: '9'
  - author: Solen Guitter
    date: '2014-02-18 17:44'
    message: ''
    version: '8'
  - author: Alain Escaffre
    date: '2014-02-15 13:44'
    message: ''
    version: '7'
  - author: Alain Escaffre
    date: '2014-02-15 13:44'
    message: Updating the content due to some evolutions of the feature
    version: '6'
  - author: Alain Escaffre
    date: '2013-02-25 14:56'
    message: ''
    version: '5'
  - author: Alain Escaffre
    date: '2013-02-25 14:56'
    message: ''
    version: '4'
  - author: Alain Escaffre
    date: '2013-02-25 14:51'
    message: ''
    version: '3'
  - author: Alain Escaffre
    date: '2013-02-25 14:41'
    message: ''
    version: '2'
  - author: Alain Escaffre
    date: '2013-02-25 14:29'
    message: ''
    version: '1'
---
{{#> callout type='info'}}
Watch the related courses on Nuxeo University:</br>
[Course on Handling Service Extension Points](https://university.nuxeo.com/learn/public/course/view/elearning/70/HandlingServiceExtensionPoints)
![]({{file name='university-extension-points.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}

## {{> anchor 'finding-extension-point'}}Finding the Extension Point Where to Contribute

Whatever the tools you're using ([Nuxeo Studio](https://www.nuxeo.com/products/studio/) or [Nuxeo CLI]({{page page='nuxeo-cli'}})), your first step is to find the open door configuration where you want to contribute. We call these open doors **Extension points**.
Nuxeo lists all extension points for a given version [in the Nuxeo Explorer](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/).

1.  Click on `Extension points`.
2.  Filter what you want using the combobox.
3.  Click on the extension point you're interested in.
    The documentation of this extension point is displayed.
    ![]({{file name='Nuxeo-explorer.png'}} ?w=600,border=true)
4.  Then, if you click on any link in the **Contributions** section, you will see all the default contributions implemented into your Nuxeo instance.
    There are [hundreds of configuration possibilities](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listExtensionPoints).

## {{> anchor 'xml-extension-studio'}}Contributing Using Nuxeo Studio

1.  In the **Advanced Settings** > **XML extensions**, click on the **New** button.
2.  Give the extension a name and click on the **Next** button.
    ![]({{file name='XMLExtensionEmpty.png'}} ?w=600,border=true)
3.  Type the content of your extension directly in the area.
    The editor helps you: start typing `<` and it will suggest possible values. While you are typing, some suggestion happens sometimes when typing on space, and you can always call the suggester using the key CTRL+space.
    ![]({{file name='XMLCompletion.png'}} ?w=150,border=true,thumbnail=true) ![]({{file name='XMLCompletionBis.png'}} ?w=150,border=true,thumbnail=true)
4.  Click on **Save**.
    ![]({{file name='NuxeoStudio-CodeMirrorIntegration.png'}} ?w=560,h=355,border=true)

**Notes**

- Pay attention to always start with an `<extension>` element, or a `<require>` element followed by an `<extension>` element. There is a minimal check done so as to avoid you contribute non correct XML. The `<require>` mechanism can be used to make sure you deploy after another contribution that is deployed by some built-in plugins for instance. You need to reference the component name in the `require` content.
- You can contribute several extension points in the same XML Extensions feature. This is useful to group extensions that are contributed for the same high level functional goal.
  Thus, you can have:
  ```xml
  <extension point ="" target =""> ...</extension>
  ```

  or

  ```xml
  <require> component name</require>
  <extension point ="" target =""> ...</extension>
  ```

  or

  ```xml
  <extension point ="" target =""> ...</extension>
  <extension  point ="..." target="...">...</extension>
  ```

  or

  ```xml
  <require> component name</require>
  <require> component name bis</require>
  <extension  point ="..." target="...">...</extension>
  ```
  etc.

## Contributing Using Nuxeo CLI

Contributing to an extension using Nuxeo CLI requires more steps than using Nuxeo Studio.

Here we assume that you have installed [Nuxeo CLI]({{page page='nuxeo-cli'}}) and follow the page [Develop with Nuxeo Platform]({{page page='develop-with-nuxeo-platform'}}) to understand the basics.

### Creating Your XML Extension in Nuxeo CLI

Once you have found the `extension point` you want to contribute to:

1.  Create a file `myproject-servicewhereIcontribute-contribution.xml` into the directory `src/main/resources/OSGI-INF/` of your project.
2.  Declare an empty component into this file, like that:

    ```xml
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.extension.point.where.we.contribute.contribution" version="1.0">
    </component>
    ```
    {{#> callout type='note' heading='Naming your component'}}
    *   In Nuxeo, we follow this naming convention `org.mycompany.myproject.extension.point.where.we.contribute.contribution`.
        You can follow your way but be careful to avoid conflicts.
    *   You must give a **unique name** for your component. If the name of your package is not unique it will **not be deployed**.{{/callout}}
    
3.  Add your contribution that express the configuration you want in the component XML fragment. You get something like:
    ```xml
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.extension.point.where.we.contribute.contribution" version="1.0">
      <!-- target and point value is given by the extension point definition -->
      <extension target="name.of.the.component.where.the.service.isdeclared" point="pointNameIntoThisComponent">
        <!-- here you put your configuration XML fragment
          ...
        <-->
        </extension>
    </component>
    ```

### Declaring Your Contribution into Your Bundle

In the previous section you have created your configuration. You must now declare your component in your bundle so it's deployed in your Nuxeo Server. This declaration is made through the `src/main/resources/META-INF/MANIFEST.MF` file.

1.  Create a new parameter, if it does not exist.
    ```
    Manifest-Version: 1.0
    Bundle-Vendor: Nuxeo
    Bundle-ActivationPolicy: lazy
    Bundle-ClassPath: .
    Bundle-Version: 5.5
    Bundle-Name: jalon-dm-bundle
    Nuxeo-Component: OSGI-INF/extensions/me.jalon.dm.bundle.importer.FileSystemFetcher.xml,
     OSGI-INF/extensions/com.mycomapny.test.FillIDDocument.xml,
     OSGI-INF/extensions/com.mycomapny.test.asda.xml
    Bundle-ManifestVersion: 2
    Bundle-SymbolicName: jalon-dm-bundle
    Bundle-RequiredExecutionEnvironment: JavaSE-1.6
    ```

    ```
    Manifest-Version: 1.0
    ... all the existing element already set ...
    Nuxeo-Component: OSGI-INF/myproject-servicewhereIcontribute-contribution.xml
    ```

2.  If the `Nuxeo-Component` entry already exists with another component declaration, separate them by commas.

{{{multiexcerpt 'manifest-format-warning' page='How to create an empty bundle'}}}

## Overriding the Nuxeo Default Configuration

Most of the time you will want to override an existing Nuxeo Component. Each extension point has its own logic (even if most of the time you will just have to contribute the same item with the same name). So look into the extension point definition to see how to override an existing configuration.

Components deployment is linear, so if you want to override an existing configuration, it must be deployed AFTER the existing component.

**Follow the steps for your preferred tool (see above) combined the specific steps below.**

1.  Identify this component: using Nuxeo Explorer, go to the extension point definition (see [the first section](#finding-extension-point) ).
2.  Click on the contribution you want to override.
3.  Copy the name of the component (value after **In component**).
4.  Paste it in your component into a `<require>` item.
    You will have something like that:
    ```xml
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.extension.point.where.we.contribute.contribution" version="1.0">
      <require>name.of.the.component.you.want.to.override</require>
      <!-- target and point value is given by the extension point definition -->
      <extension target="name.of.the.component.where.the.service.isdeclared" point="pointNameIntoThisComponent">
        <!-- here you put your configuration XML fragment
          ...
        <-->
      </extension>
    </component>
    ```
