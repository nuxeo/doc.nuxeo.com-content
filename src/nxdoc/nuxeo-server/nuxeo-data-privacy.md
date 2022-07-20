---
title: Nuxeo Platform and Data Privacy
description: Discover how Nuxeo, as a Content Services Platform, can help companies comply with the data privacy regulations and laws, such as GDPR, CCPA and others.
review:
    comment: ''
    date: '2020-02-13'
    status: ok
toc: true
tree_item_index: 10100
labels:
    - gdpr
    - ccpa
---

{{! excerpt}}
The Nuxeo Platform offers all the necessary capabilities to build an application that ensures the maximum level of compliance with user privacy and security regulations.
{{! /excerpt}}

The European General Data Protection Regulation was the first one to go into action in 2019, redefining the entire landscape of how online user data is to be handled. New sets of regulations, like the California Consumer Privacy Act (CCPA), are going live: even if they apply to different regions, the main principles remains the same.

{{#> callout type='info' }}
To get information about how Nuxeo, as a company, is ensuring its compliance with data protection requirements, please refer to the [corporate website](https://www.nuxeo.com/about/data-privacy/).
{{/callout}}

## Concept

The Nuxeo Platform, by itself, cannot ensure GDPR or CCPA compliance as the they are not about certifying any technical solution; it is about ensuring that the management of personally identifiable information (PII) are satisfying individual rights requirements, such as the right to access, the right to erasure, portability, etc.

Indeed, the main concerns are focused on the way personal data is used and stored, the ability to quickly respond to Subject Access Requests, the security controls in place to protect personal data integrity and confidentiality, etc.

## Managing Data Privacy Requirements with Nuxeo

### Right to Data Portability

> Individuals are free to either store the data for personal use or to transmit it to another data controller.
</br>The data must be received “in a structured, commonly used and machine-readable format.”

The Nuxeo Platform offers several features that allow you to export documents natively. The export component should be chosen depending on your requirements.

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th width="500" colspan="1" style="background-color:#ebebeb">Export Components</th>
<th width="500" colspan="1" style="background-color:#ebebeb">Implementation</th>
<th width="500" colspan="1" style="background-color:#ebebeb">Needs Configuration</th>
<th width="500" colspan="1" style="background-color:#ebebeb">Adapted for Folder Structure Export</th>
<th width="500" colspan="1" style="background-color:#ebebeb">Document Type and Property Value Export</th>
</tr>
<tr>
<td colspan="1" style="background-color:white">[ZIP XML Export]({{page version='' space='nxdoc' page='exporting-documents'}})</td>
<td colspan="1" style="background-color:white">Native</td>
<td colspan="1" style="background-color:white">No</td>
<td colspan="1" style="background-color:white">Yes</td>
<td colspan="1" style="background-color:white">No</td>
</tr>
<tr>
<td colspan="1" style="background-color:#f2f2f2">[Template Rendering]({{page version='' space='nxdoc' page='template-rendering-addon'}})</td>
<td colspan="1" style="background-color:#f2f2f2">Addon</td>
<td colspan="1" style="background-color:#f2f2f2">Yes</td>
<td colspan="1" style="background-color:#f2f2f2">Yes</td>
<td colspan="1" style="background-color:#f2f2f2">Yes</td>
</tr>
<tr>
<td colspan="1" style="background-color:white">[PDF Concatenation]({{page version='' space='nxdoc' page='how-to-use-pdf-conversion-operations-with-studio'}})</td>
<td colspan="1" style="background-color:white">Studio feature</td>
<td colspan="1" style="background-color:white">Yes</td>
<td colspan="1" style="background-color:white">No</td>
<td colspan="1" style="background-color:white">No</td>
</tr>
<tr>
<td colspan="1" style="background-color:#f2f2f2">[Nuxeo Drive]({{page version='' space='client-apps' page='nuxeo-drive'}})</td>
<td colspan="1" style="background-color:#f2f2f2">Addon</td>
<td colspan="1" style="background-color:#f2f2f2">No</td>
<td colspan="1" style="background-color:#f2f2f2">Yes</td>
<td colspan="1" style="background-color:#f2f2f2">No</td>
</tr>
<tr>
<td colspan="1" style="background-color:white">[Nuxeo FS Exporter]({{page version='' space='nxdoc' page='nuxeo-file-system-exporter'}})</td>
<td colspan="1" style="background-color:white">Addon</td>
<td colspan="1" style="background-color:white">No</td>
<td colspan="1" style="background-color:white">Yes</td>
<td colspan="1" style="background-color:white">No</td>
</tr>
</tbody>
</table>
</div>

### Right of Access

> Individuals should obtain from the confirmation as to whether or not personal data concerning him or her are being processed, and, where that is the case, access to the personal data.

Thanks to the [Nuxeo Audit Service]({{page version='' space='nxdoc' page='audit'}}) and the [Nuxeo Query Language]({{page version='' space='nxdoc' page='nxql'}}) (or NXQL), it is possible to identify:

- All the actions (download, search, edit, etc.) that were executed on a document
- The exact date of an action
- The version of the document in which an action was executed

The audit entries can be read from a document-context or from the Nuxeo Web UI Administration menu. New events can be created from Nuxeo Studio and therefore be tracked in the platform.

{{#> callout type='info' }}
The Nuxeo Platform doesn’t identify or extract personal information located inside a document natively. To complete this use case, it is necessary to integrate external services like [Google Cloud Data Loss Prevention](https://cloud.google.com/dlp/) or [Amazon Macie](https://aws.amazon.com/macie/), for example.
{{/callout}}

### Right to Rectification

> The individuals should have the right to obtain without undue delay the rectification of inaccurate personal data concerning him or her.

Nuxeo allows you to bulk edit any document property by either building a custom form and operation with Nuxeo Studio or by creating your custom component based on [Nuxeo Stream]({{page version='' space='nxdoc' page='nuxeo-stream'}}) for huge volumes.

### Right to Erasure / Right to be Forgotten

> The individuals should have the right to obtain the erasure of personal data concerning him or her without undue delay and the controller should have the obligation to erase personal data without undue delay.

With the proper [permissions]({{page version='' space='userdoc' page='permissions'}}), it is possible to delete a document unitary or several documents (from a folder view or a query). The deletion can be triggered by any other Nuxeo interface such as the REST API, CMIS or any [Nuxeo SDK Client]({{page version='' space='nxdoc' page='client-sdks'}}).

As described in [Trash Service]({{page version='' space='nxdoc' page='trash-service'}}) page, documents are first moved to the trash before being permanently deleted. The Nuxeo Platform removes the personal information references from the binary storage as well as from within the database.

When personally identifying information needs to be removed without deleting the whole document, [content redaction using Nuxeo Enhanced Viewer]({{page space='nxdoc' page='how-to-use-content-redaction'}}) can also be considered as an option.

{{#> callout type='info' }}
Some personal information may be stored within the indexes. Purging audits is, in any case, a heavy operation. Cleaning the indexes requires specific Elasticsearch operations. Cleaning audit log entries could be performed, with downtime, using a [log purging procedure]({{page version='' space='nxdoc' page='purging-audit-logs-nxp_logs'}}). It is also possible to use a delete query directly on the audit backend or from Nuxeo.
{{/callout}}

### Right to Object

> The individuals should have the right to object at any time to processing of personal data concerning him or her, including profiling based on those provisions.

You can create specific document properties to identify whether a document being used for a particular processing activity is following the best practice for this type of workflow. In addition to triggering automatic processes with listeners and scheduling jobs, you can alternatively use custom security policies to instantly restrict a specific user or group from accessing a document to.

### Privacy by Design

The term "Privacy by Design" refers to the data protection through technology design, in other words: apply privacy by design principles to applications, services and products when designing, developing, and testing.

Privacy by design concepts, applied to a Nuxeo-based application, require an understanding of the capabilities offered by the Nuxeo Platform. The following sections are particularly interesting to read:

- Best practices and recommendation on [Nuxeo Security]({{page version='' space='nxdoc' page='security-recommendations'}}).
- Nuxeo data model: in particular, [document types]({{page version='' space='studio' page='documents'}}) and [schemas]({{page version='' space='studio' page='schemas'}}) concepts.
- How the [Nuxeo repository security]({{page version='' space='nxdoc' page='nuxeo-security-system'}}) is built

## Default Storage Entities for Personal Information in Nuxeo Platform

Nuxeo Platform is willing to contain personal information. This section details the possible **default** locations where personal information may be found.

Depending on your implementation, this list has to be reviewed and completed (if you add personal information to your document types inside custom properties, add new audit entries, store files containing personal information etc.)

This personal information is necessary to ensure the effective functioning of Nuxeo Platform.

### Nuxeo Entities

Personal information are firstly stored in the user profile:

- Username (mandatory)
- Firstname
- Lastname
- Email (mandatory)
- Company
- Groups

When manipulating documents, The `dc:creator`, `dc:contributors` and `dc:lastContributor` contain usernames.

The default audit events are triggered and contain:

- Performed action
- Date
- Username
- Category
- Comment
- State

The default email notifications (when a user subscribes to a document, or when a user is involved in a workflow instance) can contain:

- Username
- Firstname
- Lastname
- Audit entries

### Nuxeo Infrastructure Components

The following Nuxeo infrastructure elements, in charge of the data persistence, are willing to store personal information:

- The blob storage
- The database (as it contains all document properties, the user registry, etc.)
- Elasticsearch (which extracts information from the database and perform additional operations such as full text extraction)
- The Nuxeo logs

Then, depending on your implementation, personal information might be found:

- In Redis or Kafka for asynchronous jobs
- Any monitoring tools (which can possibility store IP address for example)
- If you are using specific Nuxeo addons (Nuxeo Drive which stores personal information on the local Drive, or Nuxeo Easyshare which stores IP downloading documents)

## Cookie Management

**Nuxeo JSF UI** uses a set of cookies which are used exclusively to manage authentication and redirections:

- `JSESSIONID`: Session ID for the web application to maintain the authentication alive
- `org.jboss.seam.core.TimeZone`
- `org.jboss.seam.core.Locale`     
- `nuxeo.start.url.fragment`

**Nuxeo Web UI** uses a subset of the JSF set of of cookies.
