---
title: REST API Principles
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
labels:
    - multiexcerpt-include
toc: true
tree_item_index: 200
previous_link: /nxdoc/learning-rest-api-prerequisites
next_link: /nxdoc/define-a-cors-configuration

---


## Create a Document using Nuxeo Platform UI

##### Practice - REST API Principles

1.  Log into your Nuxeo instance.

2.  Go to `default-domain/workspaces`.

3.  Create a Workspace named "Rest API Tutorial".

4.  Create a Picture document within the Workspace.

5.  Export the Document using the [**XML export** option in Nuxeo Platform]({{page version='' space='userdoc' page='exporting-documents#xml-export-of-a-single-document'}}) or by clicking the ![]({{file name='export_json.png'}}) link in the **Nuxeo Dev Tools** extension.

## Retrieve the Document using the REST API

1.  Log into the [API Playground](http://nuxeo.github.io/api-playground/) using your Nuxeo Server URL, `http://NUXEO_SERVER/nuxeo` and your credentials or simply click the API Playground button in the **Nuxeo Dev Tools** extension.

**FETCH THE DOCUMENT**

2.  In the **Resources Endpoints**, get the document using the document's `id` which can be found in the XML/JSON export obtained earlier.

    ```bash
    GET /api/v1/id/{docId}
    ```

3.  Click on the **Settings** icon ![]({{file page='howto-nuxeo-api-playground' name='playground_settings_icon.png'}}) to change the `properties` header so that you only retrieve the `picture` schema.

4.  Get the document using the document's `path` (also in the XML/JSON export).

    ```bash
    GET /api/v1/path/{docPath}
    ```

5.  In the **Command Endpoints**, get the document using the `Fetch > Document` operation and the `path` or `id` as a parameter.

    ```bash
    POST /api/automation/Repository.GetDocument
    ```

{{#> callout type='info' heading='What\'s the Best Way to Retrieve a Document?'}}

*   Using the **Resources Endpoints** is preferable. The **Command Endpoints** are better suited when you want to execute business logic.
*   Using the `id` endpoint is recommended over the `path` endpoint when possible as it improves performance.

{{/callout}}
