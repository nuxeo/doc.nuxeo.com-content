---
title: REST API Principles
description: First step of the Learn the REST API tutorial, this HOWTO makes you practice some basic content management operations through the REST API.
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
toc: true
tree_item_index: 200
previous_link: nxdoc/learning-rest-api-prerequisites
next_link: nxdoc/define-a-cors-configuration

---

## Creating a Document using Nuxeo Platform UI

1.  Log into your Nuxeo instance.
2.  Go to `default-domain/workspaces`.
3.  Create a Workspace named "Rest API Tutorial".
4.  Create a Picture document within the Workspace.
5.  Export the Document using the [**XML export** option in Nuxeo Platform]({{page version='' space='userdoc' page='exporting-documents#xml-export-of-a-single-document'}}) or by clicking the ![]({{file name='export_json.png'}}) link in the **Nuxeo Dev Tools** extension.
    These exports show you the properties of the document. The `<document id>` and `<path>` properties will be used in next section.

## Retrieving the Document using the REST API

1.  Log into the [API Playground](http://nuxeo.github.io/api-playground/) using your Nuxeo Server URL, `http://NUXEO_SERVER/nuxeo` and your credentials, or simply click the API Playground button in the **Nuxeo Dev Tools** extension.
2.  In the **Resources Endpoints**, get the document using the document's `id` which can be found in the XML/JSON export obtained earlier.
    ```bash
    GET /api/v1/id/{docId}
    ```
    The full JSON definition of the documentation is displayed in the **Response** tab.
3.  Click on the **Settings** icon ![]({{file page='howto-nuxeo-api-playground' name='playground_settings_icon.png'}}) to change the `properties` header so that you only retrieve the `picture` schema.
4.  Get the document using the document's `path` (also in the XML/JSON export).
    ```bash
    GET /api/v1/path/{docPath}
    ```
    Only the `picture` properties are displayed in the `properties:{}` section of the JSON response. The `dublincore`, `file`, `common` and other properties are not in the response.
5.  In the **Command Endpoint**, get the document using the **Fetch** > **Document** operation and the `path` or `id` as a parameter.
    ```bash
    POST /api/automation/Repository.GetDocument
    ```

{{#> callout type='info' heading='What\'s the Best Way to Retrieve a Document?'}}

*   Using the **Resources Endpoints** is preferable. The **Command Endpoints** are better suited when you want to execute business logic.
*   Using the `id` endpoint is recommended over the `path` endpoint when possible as it improves performance.

{{/callout}}
