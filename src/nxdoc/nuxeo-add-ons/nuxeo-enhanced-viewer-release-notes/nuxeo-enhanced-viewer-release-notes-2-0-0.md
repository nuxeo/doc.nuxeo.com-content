---
title: NEV 2.0.0
description: Release notes for Nuxeo Enhanced Viewer 2.0.0
tree_item_index: 900
hidden: true
review:
  comment: ''
  date: '2021-12-22'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.0.0

### {{> anchor 'summary'}} Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2.0.0</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">December 23th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon</td>
</tr>
<tr>
<th colspan="1">ARender software version</th>
<td colspan="1">nuxeo-arender-document-service-broker 2.0.0, nuxeo-arender-document-renderer 2.0.0, nuxeo-arender-document-converter 2.0.0, nuxeo-arender-document-text-handler 2.0.0</td>
</tr>
<tr>
<th colspan="1">Previewer (ARender connector) version</th>
<td colspan="1">nuxeo-arender-ui 2.0.0</td>
</tr>
<tr>
<th colspan="1">Nuxeo addon version</th>
<td colspan="1">nuxeo-arender-2021.2.0, nuxeo-arender-10.7.0</td>
</tr>
</tbody>
</table>
</div>

This is a new major version with new features, UI improvements, architectural changes, bug fixes, and improvements.

{{#> callout type='warning'}}
This new version includes architectural changes involving a renaming of the components and a new versioning as well. You will find more details below.
{{/callout}}

### New Features

#### Dynamic Selection of Layers to Display

You can now select dynamically the layers to be displayed on the viewer. You can select and unselect each layer of a document, thanks to a new dedicated menu on the left section of the Annotation tab.

It replaces the previous mechanism which consisted on displaying each layer on a dedicated page.

See [NEV-207](https://jira.nuxeo.com/browse/NEV-207).

### UI/UX

#### New Look and Feel

This new version introduces a fresh new look for the Annotation tab header, all the icons inside, and also the left section (for annotations part). It improves the user experience in a general purpose and add consistency between Nuxeo UI and ARender viewer.

### Improvements

#### Split Nev Nuxeo Addon and ARender Services

In order to remove dependencies and guarantee the backward compatibility between the ARender services and the Nuxeo addon, we made architectural changes on the components.

This involves a new naming and versioning of all the components, as described in the [summary]({{page page='nuxeo-enhanced-viewer-release-notes-2-0-0'}}#summary).

See below the renaming of ARender artifacts:

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">Previous NEV version</th>
<th colspan="1">Current NEV version</th>
</tr>
<tr>
<td colspan="1">nuxeo/arender-previewer:10.6.11</td>
<td colspan="1">nuxeo/arender-ui:2.0.0</td>
</tr>
<tr>
<td colspan="1">arender-document-converter:4.4.2.NX1.8</td>
<td colspan="1">nuxeo/arender-document-converter:2.0.0</td>
</tr>
<tr>
<td colspan="1">arender-document-renderer:4.4.2.NX1.8</td>
<td colspan="1">nuxeo/arender-document-renderer:2.0.0</td>
</tr>
<tr>
<td colspan="1">arender-document-service-broker:4.4.2.NX1.8</td>
<td colspan="1">nuxeo/arender-document-service-broker:2.0.0</td>
</tr>
<tr>
<td colspan="1">arender-document-text-handler:4.4.2.NX1.8</td>
<td colspan="1">nuxeo/arender-document-text-handler:2.0.0</td>
</tr>
</tbody>
</table>
</div>

See [NEV-454](https://jira.nuxeo.com/browse/NEV-454).

#### Display Content of Containers Files (Archives, Emails) Even When There Is Unsupported File(s) Inside

Previously, archive files (ex: .zip) or emails with attachments (.eml, .msg) couldn't be displayed at all into the advanced viewer.

This new version allows to display all the supported files inside a container document and add an error message to inform the user of the unsupported file(s).

See [NEV-377](https://jira.nuxeo.com/browse/NEV-377).

#### Display XML Files as Plain Text

The XML files are now supported into the Nuxeo Enhanced Viewer. Those type of files are displayed in plain text.

See [NEV-497](https://jira.nuxeo.com/browse/NEV-497).

### Major Fixes

#### Log4j Vulnerabilities

Following the [Log4j vulnerabilities (CVE-2021-45046)](https://logging.apache.org/log4j/2.x/security.html), we have removed unsafe log4j dependencies on the rendition services.

See [NEV-514](https://jira.nuxeo.com/browse/NEV-514).

#### Improve Low Quality TIFF Files Display

Certain TIFF (mostly black and white with low resolution) documents were poorly displayed into NEV.

We have improved the conversion and display quality, including in case of zoom.

See [NEV-456](https://jira.nuxeo.com/browse/NEV-456).

#### Dedicated Message for Unsupported Files

We have added a specific error message in case of a file fails to be displayed because it is not a supported format.

See [NEV-507](https://jira.nuxeo.com/browse/NEV-507).

#### Fix Download With Annotations for Document With Several Layers

We have fixed the download with annotations feature which was failing in case of a document with layers.

See [NEV-378](https://jira.nuxeo.com/browse/NEV-378).

#### Reduce Time to Display for .msg Files With Embedded Images

We have fixed the slowness occurring when displaying an email (.msg) with embedded images.

See [NEV-350](https://jira.nuxeo.com/browse/NEV-350).

#### Improve Concurrent Access to a Document

The concurrent access in case of parallel requests to display the same document has been improved to not degrade the performances and to not request several conversions for the same document.

{{! /multiexcerpt}}
