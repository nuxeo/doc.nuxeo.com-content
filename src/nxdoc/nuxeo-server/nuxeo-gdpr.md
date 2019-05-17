---
title: Nuxeo Platform and GDPR
description: Discover how Nuxeo, as a Content Services Platform, can help companies comply with the GDPR.
review:
    comment: ''
    date: '2019-05-16'
    status: ok
toc: true
tree_item_index: 10100
labels:
    - gdpr
---

{{! excerpt}}
The Nuxeo Platform offers all the necessary capabilities to build an application that ensures the maximum level of compliance with user privacy and security regulations.
{{! /excerpt}}

## Concept

The Nuxeo Platform, by itself, cannot ensure GDPR compliance as the GDPR is not about certifying any technical solution; it is about ensuring that the management of personally identifiable information (PII) are satisfying individual rights requirements per GDPR mandates, such as the right to access, the right to erasure, portability, etc.

Indeed, the main concerns are focused on the way personal data is used and stored, the ability to quickly respond to Subject Access Requests, the security controls in place to protect personal data integrity and confidentiality, etc.

## Managing GDPR Requirements with Nuxeo

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

As described in [Deleting Documents]({{page version='' space='nxdoc' page='deleting-documents'}}) page, documents are first moved to the trash before being permanently deleted. The Nuxeo Platform removes the personal information references from the binary storage as well as from within the database.

{{#> callout type='info' }}
Some personal information may be stored within the indexes. Cleaning the indexes requires specific ElasticSearch operations.
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
