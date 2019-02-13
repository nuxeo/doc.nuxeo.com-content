---
title: How to Override a Template
review:
    comment: 'Tutorial followed by Ahmed: OK for LTS 2016'
    date: '2019-02-13'
    status: ok
details:
    howto:
        excerpt: Learn how to override a Nuxeo template.
        level: Advanced
        tool: Code
        topics: JSF UI
labels:
    - content-review-lts2016
    - howto
    - template
    - seam-jsf-component
    - atchertchian
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Override+a+Template
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Override+a+Template'
    page_id: '20518284'
    shortlink: jBU5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/jBU5AQ'
    source_link: /display/NXDOC/How+to+Override+a+Template
tree_item_index: 900
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:07'
        message: pdate how-to topic
        version: '5'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:10'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-11-07 14:47'
        message: 'format steps, add links'
        version: '3'
    -
        author: Gildas Lefevre
        date: '2014-11-07 10:29'
        message: ''
        version: '2'
    -
        author: Gildas Lefevre
        date: '2014-11-06 18:35'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedJSF' page='generic-multi-excerpts'}}}

The purpose of this how-to is to learn how to override a default Nuxeo template. It considers that you are able to create a new bundle and the required files. Otherwise please refer to the page [How to create an empty bundle]({{page page='how-to-create-an-empty-bundle'}}) or use [Nuxeo CLI]({{page page='how-to-contribute-to-an-extension'}}).

{{#> callout type='note' }}

Just remember that overriding a default template is risky for maintenance. The original template could be heavily changed or even renamed or removed in future versions of Nuxeo.

{{/callout}}

## Step 1: Getting the Name of the Template

Look for the name of the template you want to override and its path on the server. This information is important because the overridden template must have the exact same path and name. When the server has deployed the bundles, the XHTML templates are located under the folder `${nuxeo_server}/nxserver/nuxeo.war/`.

## Step 2: Creating the File in the Bundle

In your bundle, create a new XHTML file with the exact same name and in the same folder structure as the original one. In usual Nuxeo bundles, the XHTML files are located under `resources/web/nuxeo.war/`.

For this example, we will override the `nuxeo_footer_template.xhtml` template. It is located in the folder `${nuxeo_server}/nxserver/nuxeo.war/incl/`.

1.  Create a folder `incl/` under `resources/web/nuxeo.war/`.
2.  Create the overridden template `nuxeo_footer_template.xhtml`.
    ![]({{file name='newTemplate.png'}} ?w=500,border=true)

## Step 3: Deploying the Bundle

Once your file is created and modified to suit your needs, you have to deploy it.

In the Nuxeo Platform, the WAR file is generated each time you start the server by looking into each JAR in `nxserver/bundles` and `nxserver/plugins`. More precisely, this happens because you set an `install` XML tag in the `deployment-fragment.xml` file. Content syntax of the tag is simply Ant. Create a file `deployment-fragment.xml` under `resources/OSGI-INF`.

{{#> panel type='code' heading='deployment-fragment.xml'}}

```xml
<?xml version="1.0"?>
<fragment version="1">

  <require>org.nuxeo.ecm.webapp.ui</require>

  <install>
    <!–  unzip the content of the resources/web folder in nxserver –>
    <unzip from="${bundle.fileName}" to="/" prefix="web">
      <include>web/nuxeo.war/**</include>
    </unzip>
  </install>

</fragment>
```

{{/panel}}

*   `org.nuxeo.ecm.webapp.ui` is actually the symbolic name of the bundle we would like to override. You can find this information in the `MANIFEST.MF` file of the bundle.
*   The `<require>` tag makes sure that your bundle will be deployed after the default one. This tag is also used in the contributions to the extension services to be sure that they will be deployed after the bundles listed in the `require` tags.

*   The `<install>` section describes what should be installed.

For more information about the bundle deployment, do not hesitate to read the page [Understanding Bundles Deployment]({{page page='understanding-bundles-deployment'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}

- [Develop with Nuxeo Platform]({{page page='develop-with-nuxeo-platform'}})
- [How to create an empty bundle]({{page page='how-to-create-an-empty-bundle'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Related How-Tos'}}

- [Runtime and Component Model]({{page page='runtime-and-component-model'}})
- [Understanding Bundles Deployment]({{page page='understanding-bundles-deployment'}})
- [Writing a Bundle Manifest]({{page page='writing-a-bundle-manifest'}})

{{/panel}}
</div>
</div>
