---
title: Use Nuxeo API Playground to Discover the API
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: Learn how to use the API Playground and leverage the Nuxeo REST API.
        level: Advanced
        tool: Code
        topics: REST API
labels:
    - cors
    - lts2015-ok
    - nuxeo-playground
    - playground-component
    - rest-api
    - howto
toc: true
version_override:
    'FT': '/nxdoc/howto-nuxeo-api-playground'
    'LTS 2016': 810/nxdoc/howto-nuxeo-api-playground
confluence:
    ajs-parent-page-id: '28475677'
    ajs-parent-page-title: REST API
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Use+Nuxeo+API+Playground+to+Discover+the+API
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/Use+Nuxeo+API+Playground+to+Discover+the+API
    page_id: '28475651'
    shortlink: A4GyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/A4GyAQ'
    source_link: /display/NXDOC710/Use+Nuxeo+API+Playground+to+Discover+the+API
tree_item_index: 1600
history:
    -
        author: Solen Guitter
        date: '2016-02-16 10:49'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2016-02-16 10:13'
        message: >-
            Move install and config steps in a dedicated section, review
            functional overview
        version: '32'
    -
        author: Nelson Silva
        date: '2015-12-07 17:45'
        message: Add link to marketplace package
        version: '31'
    -
        author: Nelson Silva
        date: '2015-12-07 17:07'
        message: ''
        version: '30'
    -
        author: Nelson Silva
        date: '2015-12-07 16:46'
        message: ''
        version: '29'
    -
        author: Nelson Silva
        date: '2015-12-07 16:43'
        message: Added Batch Upload documentation
        version: '28'
    -
        author: Nelson Silva
        date: '2015-12-07 16:13'
        message: Update according to repository browser changes
        version: '27'
    -
        author: Thibaud Arguillere
        date: '2015-10-23 21:15'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-09-08 18:35'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2014-09-02 16:09'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-09-02 16:09'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-09-02 15:48'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2014-09-02 15:48'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2014-09-02 15:47'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-09-02 15:47'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-09-02 15:45'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-09-02 15:44'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2014-09-02 15:44'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2014-09-02 15:43'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-09-02 15:42'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-09-02 15:41'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-09-02 15:36'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-09-02 12:08'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-09-02 12:06'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:35'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:33'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:33'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:27'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:23'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:22'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-07-03 02:12'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-07-03 01:57'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-07-03 01:53'
        message: ''
        version: '1'

---
{{! excerpt}}

We made an API Playground available that offers an interactive way to discover the Nuxeo Platform API. This module runs fully client side in JavaScript, and makes use of the API of Nuxeo Platform it targets. You can use it on any server as long as you deploy a CORS configuration on it.

{{! /excerpt}}

## Functional Overview

Nuxeo API Playground can be used online at [http://nuxeo.github.io/api-playground/](http://nuxeo.github.io/api-playground/) or locally at `http://NUXEO_SERVER/nuxeo/playground` after you install the Nuxeo Package on your server (see the [Installation and Configuration](#install-config) section).

Note that the online version proposes to connect the API Playground to our demo.nuxeo.com instance by default, but you can use it with your own Nuxeo server.

![]({{file name='playground_server_login_box.png'}} ?w=500,border=true)

### Repository

As you play with the APIs, you will modify the content of the repository. The **Repository** section of the playground will let you check the impact of your API call attempts.

![]({{file name='playground_repository_section.png'}} ?w=300,h=120,border=true)

The content is represented as a tree which allows you to navigate the repository. Unfold the tree and click on a document.
Its content is retrieved through the REST API with the JSON response and headers displayed on the right panel.
![]({{file name='playground_repository_document.png'}} ?w=500,h=421,border=true)
The left side panel allows you to explore the REST endpoints available for the selected document (see also the . The tabs allow you to switch between HTTP methods (GET, PUT, POST and DELETE) thus enabling you to read, update, create and delete documents.

![]({{file name='playground_repository_PUT_tab.png'}} ?w=300,h=294,border=true)

The default **GET** tab allows you to invoke [adapters]({{page page='web-adapters-for-the-rest-api'}}) on the current document as well as toggle [content enrichers]({{page page='content-enricher'}}). By default the `thumbnail` and `breadcrumb` enrichers are selected since they are used to build the header where this information is shown. Selecting an adapter shows a form with its parameters, if any.
![]({{file name='playground_repository_GET_tab.png'}} ?w=400,border=true)

### Data Structure

One of the main cases of using the API is to create/read/update documents. For doing so, you need to know what properties are expected for your document. The **Data Structures** section helps you understand it, by listing all the document types, facets and schemas that have been configured on your Nuxeo Platform repository.

![]({{file name='playground_data_structures_section..png'}} ?w=300,h=116,border=true)

For instance, to get information about the `userWorkspaceRoot` document type:

1.  In Types, click on the `userWorkspaceRoot` document type.
    ![]({{file name='playground_document_type_properties.png'}} ?w=300,border=true,thumbnail=true)
    The schemas and facets of the document are displayed.
2.  Click on the icon ![]({{file name='playground_sitemap_icon.png'}}).
    The complete inheritance structure of `userWorkspaceRoot` is displayed.
    ![]({{file name='playground_inheritance_structure.png'}} ?w=500,border=true)
3.  Click on one of the schema names, like dublincore for instance, to see its structure.
    ![]({{file name='playground_schema_structure.png'}} ?w=500,border=true)

### {{> anchor 'resources-endpoints'}}Resources Endpoints

In this section you can perform calls to all the ["Resources" endpoints]({{page page='rest-api#resources-endpoints'}}).

![]({{file name='playground_resources_endpoints_section.png'}} ?w=300,h=111,border=true)

Depending on the endpoint, you can do GET, PUT, POST or DELETE calls to read, update, create and delete documents.

1.  Click on the resource endpoint you want to work on and then on the call you want to make.
2.  Fill in the Parameters form.
    **Tips:**
    *   For [Resources of type document]({{page page='document-resources-endpoints'}}), you can select the document in the repository tree by clicking on the icon ![]({{file name='playground_browse_icon.png'}}), without having to type its exact id.
    *   For all the resources, when you want to do a PUT (most of the time to update the resource), you can click on the **Fetch document** button to prefill the body parameter of your request with the document JSON definition. Then you just need to modify the property you want to update.
        ![]({{file name='playground_fetch_document_PUT.png'}} ?w=300,h=163,border=true)
    *   When you are doing a POST call and need an example of the expected JSON object, click on the value displayed in the Type column. The documentation of the corresponding JSON structure opens.
        ![]({{file name='playground_fetch_document_POST.png'}} ?w=500,border=true)
3.  Optionally click on the icon ![]({{file name='playground_settings_icon.png'}} ?w=16,thumbnail=true) to update the [request headers]({{page page='special-http-headers'}}) before running the call.
4.  Click on the **Run** button.
    You get three tabs:

    {{! multiexcerpt name='response-headers-curls-tabs'}}
    *   The **Response** content, most of the time a JSON string, but sometimes the returned error, or a bite stream if the answer was a binary.
        ![]({{file name='playground_response_tab.png'}} ?w=500,h=256,border=true)
    *   The **headers** both of the request and the response:
        ![]({{file name='playground_headers_tab.png'}} ?w=500,h=290,border=true)
    *   **The CURL syntax of the request**
        This tab is a key one as it allows you to reproduce the same call on your own environment/shell so as to make sure you didn't miss anything for building a successful request.
        ![]({{file name='playground_curl_requests_tab.png'}} ?w=500,border=true){{! /multiexcerpt}}

### {{> anchor 'command-endpoints'}}Command Endpoint

The command endpoint section lists all the available [operations and chain of operations]({{page page='automation'}}) available on the server. You can then run an operation by filling the expected input (nothing, documents or binaries) and then get the output.

1.  Click on operation category and then on the operation you want to run.
2.  Fill in the operation parameters form.
    See the [Operation parameters documentation]({{page page='content-automation-concepts#operation-parameters'}}) or [operations list on the Explorer](http://explorer.nuxeo.com/nuxeo/site/distribution/7.10/listOperations) for more information on the parameters.
    Tip: For document input, click on the icon ![]({{file name='playground_browse_icon.png'}}) to browse the repository tree and find your document, instead of typing the document path.
3.  Optionally click on the icon ![]({{file name='playground_settings_icon.png'}} ?w=16,thumbnail=true) to update the [request headers]({{page page='special-http-headers'}}) before running the call.
4.  Click on the **Run** button.
    You get three tabs:
    {{{multiexcerpt 'response-headers-curls-tabs' page='Use Nuxeo API Playground to Discover the API'}}}

### Batch Upload

The Batch Upload endpoint provides a way to upload one or more files and then reference that set of files from the API (PUT and POST calls, operation parameters, etc.). This approach is favored over regular HTTP MultiPart encoding upload in the following cases:

*   When you have several files to upload

*   When your client does not natively support multipart encoding
*   When you want to upload files as soon as possible and then run the operation when everything has been uploaded on the server

![]({{file name='playground_batch_upload.png'}} ?w=500,h=325,border=true)

#### Pre-Requisites

Because the Nuxeo API Playground currently uses the old API, you need to some configuration to enable. See the section [Enabling Batch Upload](#enable-batch-upload).

#### Creating a Batch Upload

1.  Select one or more files to upload.
2.  Click the **Upload** button.
    Once your files are uploaded the batch will be displayed in the list of batches.
    You can create any number of batches before referencing them in your requests.

![]({{file name='playground_batch_upload_batch_uploaded.png'}} ?w=500,h=84,border=true)

#### Using a Batch Upload

1.  Click on the **Reference a batch** button which is displayed for any JSON document parameter.
    ![]({{file name='playground_batch_upload_batch_selection.png'}} ?w=500,h=426,border=true)
    A dialog containing the required `file:content` value is displayed.
    ![]({{file name='playground_batch_upload_JSON_definition.png'}} ?w=500,h=339,border=true)
2.  Copy the relevant part of the JSON definition in the form.
    ![]({{file name='playground_batch_upload_JSON_pasted.png'}} ?w=500,h=496,border=true)
3.  Click on the **Run** button.

## {{> anchor 'install-config'}}Installation and Configuration

### Installing Nuxeo Playground

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

After you installed the Nuxeo Package, go to `http://NUXEO_SERVER/nuxeo/playground` to use the API Playground. Note that it suggest to log in to the public website demo.nuxeo.com by default. Make sure you change the URL to use your server's (`http://NUXEO_SERVER/nuxeo` by default).

### {{> anchor 'enable-batch-upload'}}Enabling Batch Upload

Batch Upload on the API Playground currently uses the old API which is currently deprecated but kept for backward compatibility. It also relies on client side generated batch ids which must to be enabled so the upload from the API Playground UI works.

To enable Batch upload set the runtime configuration property `allowClientGeneratedBatchId` to "true", [using an XML extension]({{page page='how-to-contribute-to-an-extension'}}).

{{#> panel type='code' heading='nxserver/config/batch-upload-config.xml'}}

```xml
<component name="org.nuxeo.ecm.automation.server.BatchManager.configuration.test">
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="allowClientGeneratedBatchId">true</property>
  </extension>
</component>
```

{{/panel}}

### Setting up a CORS Configuration

If your Nuxeo server and the API Playground are not in the same domain, you need to set up a CORS configuration. We provide a [sample configuration]({{file name='cors-config.xml'}}) file that works as long as you put it in the `NUXEO_HOME/nxserver/config` folder. Read the [CORS documentation]({{page page='cross-origin-resource-sharing-cors'}}) for more details.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Special HTTP Headers]({{page page='special-http-headers'}})
- [Automation]({{page page='automation'}})
- [Document Resources Endpoints]({{page page='document-resources-endpoints'}})
- [REST API]({{page page='rest-api'}})

{{/panel}}</div><div class="column medium-6"></div></div>
