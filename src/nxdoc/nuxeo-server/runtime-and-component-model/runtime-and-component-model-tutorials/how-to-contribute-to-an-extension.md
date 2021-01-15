---
title: 'HOWTO: Contribute to an Extension'
description: Learn how to create an XML extension in Nuxeo Studio, with the Nuxeo CLI and how to override a Nuxeo contribution.
review:
  comment: ''
  date: '2020-10-22'
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
![]({{file name='university-extension-points.png' page='university'}} ?w=450,border=true)
{{/callout}}

## {{> anchor 'finding-extension-point'}}Finding the Extension Point Where to Contribute

Regardless of the tool you're using ([Nuxeo Studio](https://www.nuxeo.com/content-services-platform/studio/) or
[Nuxeo CLI]({{page page='nuxeo-cli'}})), the first step is to find the open door configuration
where you want to contribute. We call these open doors **Extension points**.

Nuxeo lists all extension points for a given version [in the Nuxeo Explorer](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/):

1. Click on **Extension points**.

1. Maybe use the search filter.

1. Click on the extension point you're interested in.</br>
  The documentation of this extension point is displayed.
  ![]({{file name='Nuxeo-explorer.png'}} ?w=600,border=true)

1. Then, if you click on any link in the **Contributions** section, you will see all the default contributions implemented into the documented Nuxeo instance.</br>
    There are [hundreds of configuration possibilities](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/listContributions).

## {{> anchor 'xml-extension-studio'}}Contributing Using Nuxeo Studio

1. In the **Advanced Settings** > **XML extensions**, click on the **Ok** button.

2. Give the extension an ID and click on the **Next** button.
    ![]({{file name='XMLExtensionEmpty.png'}} ?w=600,border=true)

3. Type the content of your extension directly in the area.</br>
  The editor helps you: start typing `<` and it will suggest possible values. While you are typing, some suggestion happens sometimes when typing on space, and you can always call the suggester using the key CTRL+space.
  ![]({{file name='XMLCompletion.png'}} ?w=150,border=true,thumbnail=true)
  ![]({{file name='XMLCompletionBis.png'}} ?w=150,border=true,thumbnail=true)

4. Click on **Save**.
  ![]({{file name='NuxeoStudio-CodeMirrorIntegration.png'}} ?w=560,h=355,border=true)

{{#> callout type='note' heading='XML Format'}}
XML declaration should always start with an `<extension>` element.</br>
There is a minimal check done so as to avoid defining incorrect XML.</br>
In some particular situations, the `<require>` element can also be used, see
[overriding contributions](#overriding-contributions).</br>
The `documentation` element can also be used, alongside the `<extension>` element (that will document the whole feature), or inside it (that will document the contributions to the target extension point). This documentation is extracted for display by the [Explorer addon]({{page page='explorer'}}).
{{/callout}}

Several extension points can be contributed to the same XML Extensions feature. This is useful to group extensions that are contributed for the same high-level functional goal.

Contributions to the same extension point can also be stacked inside the same `<extension>` tag, although they can also be duplicated for specific documentation.

Thus, you can have:

```xml
<extension target="component_A" point="point_A">
  <!-- here goes the configuration XML fragment -->
</extension>
```

or
```xml
<extension target="component_A" point="point_A">
  <!-- here goes the first configuration XML fragment -->
  <!-- here goes the second configuration XML fragment -->
</extension>
```

or
```xml
<documentation>
  Documentation for all contributions below
</documentation>
<extension target="component_A" point="point_A">
  <documentation>
    Documentation for this contribution
  </documentation>
  <!-- here goes the configuration XML fragment -->
</extension>
<extension target="component_A" point="point_A">
  <documentation>
    Documentation for this contribution
  </documentation>
  <!-- here goes the configuration XML fragment -->
</extension>
<extension target="component_B" point="point_B">
  <documentation>
    Documentation for this contribution
  </documentation>
  <!-- here goes the configuration XML fragment -->
</extension>
```

or
```xml
<extension target="component_A" point="point_A">
  <documentation>
    Documentation for contributions below
  </documentation>
  <!-- here goes the first configuration XML fragment -->
  <!-- here goes the second configuration XML fragment -->
</extension>
<extension target="component_B" point="point_B">
  <!-- here goes the configuration XML fragment -->
</extension>
```
etc.

## Contributing Using Nuxeo CLI

Contributing to an extension using Nuxeo CLI requires more steps than using Nuxeo Studio.

Here we assume that you have installed [Nuxeo CLI]({{page page='nuxeo-cli'}}) and follow the page
[Develop with Nuxeo Platform]({{page page='develop-with-nuxeo-platform'}}) to understand the basics.

### Creating an XML Extension in Nuxeo CLI

Once you have found the *extension point* that you want to contribute to:

1. Create a file named like `service-to-contribute-to-contrib.xml` into the `src/main/resources/OSGI-INF/` directory of your project.

1. Declare an empty component into this file, with a **unique name** within the target application, you can follow the suggested naming conventions to avoid conflicts:
  ```xml
  <?xml version="1.0"?>
  <component name="org.mycompany.myproject.target-extension-point-to-contribute-to.contrib">
  </component>
  ```

  {{#> callout type='note' heading='Naming your component'}}
  In Nuxeo bundles, we tend to follow this naming convention:</br>
  `org.mycompany.myproject.target-extension-point-to-contribute-to.distinctive-words`.</br>
  You can follow your way but should be careful to avoid conflicts.</br>
  If the component name is not unique, it will not be deployed, and the server startup will be aborted.
  {{/callout}}

1. Add the XML fragment for the contribution expressing the target configuration. The format is the following:
    ```xml
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.target-extension-point-to-contribute-to.contrib">
      <!-- target and point attributes below are given by the extension point definition -->
      <extension target="name.of.the.component.declaring.the.extension.point" point="point.name">
        <!-- here goes the configuration XML fragment -->
      </extension>
    </component>
    ```

    Here is a sample:
    ```xml
    <?xml version="1.0"?>
    <component name="org.mycompany.myproject.DocumentAdapterService.contrib">
      <extension point="adapters" target="org.nuxeo.ecm.core.api.DocumentAdapterService">
        <documentation>
          Adapter mapping for persisted documents using type NXBundleGroup.
        </documentation>
        <adapter class="org.nuxeo.apidoc.api.BundleGroup" factory="org.nuxeo.apidoc.adapters.AdapterFactory"
          type="NXBundleGroup"/>
      </extension>
    </component>
    ```

### {{> anchor 'declare-bundle-contribution'}}Declaring a Contribution in a Bundle

In the previous section, the configuration has been created. Now it needs to be declared by the containing bundle,
so that it's deployed by the Nuxeo server. This declaration is made through the
`src/main/resources/META-INF/MANIFEST.MF` file.

1. Create a new entry `Nuxeo-Component`, if it does not exist:
    ```
    Manifest-Version: 1.0
    Bundle-ManifestVersion: 2
    Bundle-SymbolicName: org.mycompany.myproject.mybundle
    Nuxeo-Component: OSGI-INF/extensions/doctypes-contrib.xml

    ```

1. If the `Nuxeo-Component` entry already existed with another component declaration, separate them by commas:
    ```
    Manifest-Version: 1.0
    Bundle-ManifestVersion: 2
    Bundle-SymbolicName: org.mycompany.myproject.mybundle
    Nuxeo-Component: OSGI-INF/extensions/doctypes-contrib.xml,
     OSGI-INF/extensions/adapters-contrib.xml,

    ```

{{{multiexcerpt 'manifest-format-warning' page='how-to-create-an-empty-bundle'}}}

## {{> anchor 'overriding-contributions'}}Overriding the Nuxeo Default Configurations

The Nuxeo application comes with runtime contributions, relying on the extension point system for default settings.

Changing one of these configurations can be done by overriding the XML fragment from an existing Nuxeo component, by following the steps for your preferred tool (see above) combined with the specific steps below:
1. Identify this component: using Nuxeo Explorer, go to the extension point definition (see
   [the first section](#finding-extension-point)), for instance.

1. Click on the contribution to be overridden: the explorer provides a dedicated link to help with overrides, that you can take as an example.

1. Notice the contributing component name: you will need to *require* it to make sure this new configuration is applied *after* the original one.

1. Write a custom component with a specific name, and declare it in your bundle.</br>
   You should have something like:
   ```xml
   <?xml version="1.0"?>
   <component name="org.mycompany.myproject.extension.point.where.we.contribute">
   <require>name.of.the.original.component.to.be.overridden</require>
     <!-- target and point attributes below are given by the extension point definition -->
     <extension target="name.of.the.component.declaring.the.extension.point" point="point.name">
       <!-- here goes the new configuration XML fragment -->
     </extension>
   </component>
   ```

{{#> callout type='note'}}
If you are adding this contribution from Nuxeo Studio, you do not need the require tag, as Studio contributions are added after all other contributions have been deployed. You might need it if you are overriding a contribution from another Studio project, though.
{{/callout}}
