---
title: Integrate Nuxeo in Your Application
toc: true
review:
    comment: ''
    date: '2020-08-31'
    status: ok
tree_item_index: 400
---

## Goal

Accelerate the implementation of Nuxeo Platform features surfacing into an external application by providing clear guidelines on which API to use and what to pay attention to.

Here are some examples:
- Nuxeo Salesforce Connector
- Nuxeo Outlook Connector

## General Recommendations

- Use the default **Nuxeo automation operations**. You can get the list of all default operation in [Nuxeo Explorer](https://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202019-10.10/listOperations). Indeed, the external application should make as few as possible assumptions about the Nuxeo side. Using automation operations is a good way to do that. On the other hand, the logic that has nothing to do with Nuxeo should be in the external app.
- Use **REST API operation**. The REST API documentation is versioned and available in the [Nuxeo Documentation](https://doc.nuxeo.com/rest-api/1/) website.
- Use the **supported Nuxeo clients**: Java, Javascript, Python, .NET and PHP. More information on the [Client SDKs section](https://doc.nuxeo.com/nxdoc/client-sdks/)

## Links

Here are the links of the most useful documentation pages:

- [Nuxeo REST API Web Adapter](https://doc.nuxeo.com/nxdoc/rest-api-web-adapters/)
- [Nuxeo REST API Enrichers](https://doc.nuxeo.com/nxdoc/content-enrichers/)
- [Nuxeo Extended Fields](https://doc.nuxeo.com/nxdoc/document-json-extended-fields/)

{{#> callout type='info' heading='Nuxeo University'}}
Don't forget to take the developer learning plan, available in Nuxeo University (**Home** > **Getting Started** > **Learning Plans**)
{{/callout}}

## Typical Features Set of an Integration

### Authentication

- Replace the default basic authentication with one of the Nuxeo supported authentication protocols
- Understand the authentication chain principles

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Connect to Nuxeo</td>
  <td>Use [OAuth 2 Authentication]({{page version='' space='nxdoc' page='oauth2-endpoint'}}) protocol.</td>
</tr>
</table>

### Browsing

- Understand hidden in navigation and folderish facets

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Navigate the folder structure</td>
  <td>Use the [`tree_children`](https://github.com/nuxeo/nuxeo/blob/master/modules/platform/nuxeo-platform-default-config/src/main/resources/OSGI-INF/pageprovider-contrib.xml) page provider to implement the browsing capability.</td>
</tr>
<tr>
  <td>Display thumbnails</td>
  <td>
    <ul>
      <li>If you need to display a listing with thumbnails, use the thumbnail enricher in the previous request to the `tree_children` page provider. That way you don't need to do as many queries as there are thumbnails to display. You get the thumbnail URL for each document within one call.
      </li>
      <li>Also, use the `@rendition` web adapter with the thumbnail attribute value.
      </li>
    </ul>
  </td>
</tr>
<tr>
  <td>Implement sort and filter</td>
  <td>Defined in the [page provider]({{page version='' space='nxdoc' page='page-providers'}}) definition</td>
</tr>
<tr>
  <td>Implement lazy scrolling</td>
  <td>If using the Nuxeo UI element [`nuxeo-data-table`](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-data-table#property-paginable), then `paginable` attribute must be set to `true` (default value).</td>
</tr>
</table>

### Implement a Breadcrumb

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Get all parents for a given document.</td>
  <td>Use the `breadcrumb` content enricher.</td>
</tr>
</table>

### Document Management

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Create a document with metadata</td>
  <td>
    <ul>
      <li>Use the [Document ID]({{page version='1' space='rest-api' page='document-id-endpoint'}}) endpoint</li>
      <li>Use the `Document.Create` automation operation</li>
    </ul>
  </td>
</tr>
<tr>
  <td>Display first name, last name, email</td>
  <td>
    <ul>
      <li>Use extended fields (`fetch.document=dc:creator` for example) so as to get all the information on the `tree_children` call.</li>
      <li>Use the `userprofile` web adapter to get DOB, phone number and avatar of current user.</li>
  </td>
</tr>
<tr>
  <td>Version management</td>
  <td>
    <ul>
      <li>Use the `Document.Version` automation operation.</li>
      <li>Use the `X-Versioning-Option` HTTP header with major or minor value to version a document with the PUT method on the Document ID./li>
    </ul>
    </td>
</tr>
</table>

### File Management

- Understand [batch upload endpoints]({{page version='' space='nxdoc' page='batch-upload-endpoint'}}) and the [file manager]({{page version='' space='nxdoc' page='file-manager'}}) service.

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Import files</td>
  <td>
    <ul>
      <li>Use the [batch upload endpoint]({{page version='' space='nxdoc' page='batch-upload-endpoint'}}).</li>
      <li>Use the `Blob.AttachOnDocument` automation operation.</li>
    </ul>
  </td>
</tr>
<tr>
  <td>Download the file</td>
  <td>Use the Nuxeo REST API Web Adapter `@blob` (`/api/v1/id/{docId}/@blob/{xpath}`)
</td>
</tr>
<tr>
  <td>Update the file of a document</td>
  <td>Use the batch upload endpoint and a PUT method on the Document ID endpoint</td>
</tr>
<tr>
  <td>Handle additional attachment</td>
  <td>
    <ul>
      <li>Make sure your document type has the files schema (to have attachments)</li>
      <li>Use the batch upload endpoint and a PUT method on the Document ID endpoint, on the file:files XPATH</li>
      <li>Use the `BlobHolder.AttachOnCurrentDocument` automation operation
    </ul>
  </td>
</tr>
</table>

### Search

- Leverage aggregates
- Leverage quick filters
- Saved searches

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Perform standard searches</td>
  <td>Use default Nuxeo advanced search page provider [`default_search`](https://explorer.nuxeo.com/nuxeo/site/distribution/server-10.10/viewExtensionPoint/org.nuxeo.ecm.platform.query.api.PageProviderService--providers)</td>
</tr>
<tr>
  <td>Highlight search results</td>
  <td>Use the `highlight` enricher</td>
</tr>
</table>

### Previewing Content

- Choose the correct rendition depending on the mime type

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Use the Nuxeo element to display the document preview.</td>
  <td>Use the `nuxeo-document-viewer` element as it adapts the suitable viewer according to the mime-type of the file (PDF viewer for Office documents, HTML5 viewer for videos, etc.).</td>
</tr>
</table>

### Display Metadata

- Content enrichers to add more information on a  single  document request

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Use special HTTP header to retrieve the metadata you need.</td>
  <td>Use the `properties` HTTP header.</td>
</tr>
<tr>
  <td>View properties with a UI element.</td>
  <td>Use the metadata layout element to display the document metadata of your document type, defined in Nuxeo Studio.</td>
</tr>
</table>

### Edit Metadata

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>Edit properties with the REST API</td>
  <td>
  <ul>
    <li>Use PUT method on the [Document ID]({{page version='1' space='rest-api' page='document-id-endpoint'}}) endpoint.</li>
    <li>Use the `Document.SetProperties` automation operation.</li>
    </ul>
  </td>
</tr>
<tr>
  <td>Edit properties with a UI element.</td>
  <td>Use the [edit layout element](https://university.nuxeo.com/learn/course/external/view/elearning/80/document-and-workflow-task-layouts-with-nuxeo-studio-designer) to edit visually the document metadata of your document type, defined in Nuxeo Studio.</td>
</tr>
</table>

### Display Document History

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<tr>
  <td>View the document history with the REST API</td>
  <td>Use the `@audit` web adapter or use the [`DOCUMENT_HISTORY_PROVIDER`](https://explorer.nuxeo.com/nuxeo/site/distribution/server-10.10/viewComponent/org.nuxeo.ecm.platform.audit.PageProviderservice.contrib) page provider</td>
</tr>
<tr>
  <td>View the document history with a UI element.</td>
  <td>Use the Nuxeo UI Element `nuxeo-document-history.html` to display the document history.</td>
</tr>
</table>

### Display Conversions

- Discover the [conversion service]({{page version='' space='nxdoc' page='conversion'}})

<table>
<tr>
  <th>Feature</th>
  <th>Guidelines</th>
</tr>
<!--<tr>
  <td>Get the list of the available renditions</td>
  <td>???</td>
</tr>-->
<tr>
  <td>Display the rendition you need.</td>
  <td>Use the `@rendition` web adapter.</td>
</tr>
</table>

## Going Further

In some cases, you may also need to add your custom Java code to your plugin, to add a new REST API endpoint , a  new  listener,  a new callback API etc. To do so, please refer to the [Nuxeo CLI]({{page version='' space='nxdoc' page='nuxeo-cli'}}) documentation.
