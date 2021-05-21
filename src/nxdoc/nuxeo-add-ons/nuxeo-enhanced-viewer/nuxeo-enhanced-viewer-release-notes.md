---
title: Nuxeo Enhanced Viewer Release Notes
description: Release notes for Nuxeo Enhanced Viewer.
tree_item_index: 100
review:
  comment: ''
  date: '2021-05-21'
  status: ok
toc: true
---

## NEV 10.5.3

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.5.3</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX2.2</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">May 21th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender renditions services</td>
</tr>
</tbody>
</table>
</div>

### Major Fixes

This version is dedicated to bug fixes on the ARender Renderer and Broker services to prevent freeze and crash down in case of high usage of the application (mainly due to temporary files management).

## NEV 10.5.1

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.5.1</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX2.1</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">May 4th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender renditions services</td>
</tr>
</tbody>
</table>
</div>

### Major Fixes

#### Add Chinese and Korean font to ARender Rendition

In order to support Chinese and Korean text, we added new fonts to the available ones in the ARender Rendition.
See [NEV-426](https://jira.nuxeo.com/browse/NEV-426).

* * *

## NEV 10.5

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV version</th>
<td colspan="1">10.5</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX2.0</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">April 20th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

### Improvements

#### Make the Rendition Service "Document File Storage" HA

The rendition service "Document File Storage" is now HA (High Availability) to support a high level of charge and prevent service degradation in case of an instance crash.

See [NEV-425](https://jira.nuxeo.com/browse/NEV-425).

### Major Fixes

#### Infinite Loop When Opening TIFF Files

An infinite loop occurred when opening some TIFF files on the rendition service, producing slowness in the preview of the files.

See [NEV-429](https://jira.nuxeo.com/browse/NEV-429).

* * *

## NEV 10.4.6

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.4.6</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.7</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">April 2nd 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

This new version is dedicated to bug fixing.

### Major Fixes

#### Thread deadlock on the Document File Storage service

Additional Deadlocks have been fixed following the initial fix [NEV-399](https://jira.nuxeo.com/browse/NEV-399)

See [NEV-418](https://jira.nuxeo.com/browse/NEV-418).

#### Fix the DFS oldStyleJPG error

Clean logs by removing irrelevant exception error in the logs of the Document File Storage service.

See [NEV-404](https://jira.nuxeo.com/browse/NEV-404).

#### Fix group permission on files copied to previewer image

Since the NEV 10.3.x release, the files copied inside the docker image don't have the group write permissions which is an issue when mounting additional configuration inside /docker-entrypoint-init.d because the entrypoint can't append to destination file.

See [NEV-345](https://jira.nuxeo.com/browse/NEV-345).

* * *

## NEV 10.4.5

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.4.5</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.6</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">March 19th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

This new version is dedicated to bug fixing.

### Major Fixes

#### Slowness and preview failures with high volume of users

Deadlocks on the Document File Storage micro-service involved slowness and rendering failures.

See [NEV-399](https://jira.nuxeo.com/browse/NEV-399).

#### Share the OkHttp ConnectionPool to avoid thread leak

We improved the OkHttp ConnectionPool management to avoid threak leak and so slowness for the users.

See [NEV-401](https://jira.nuxeo.com/browse/NEV-401).

#### Upgrade Java from 12-ea+29 to at least 12+33

We upgraded the java version on ARender containers as the previous version has a bug for some Intel CPUs, see https://bugs.openjdk.java.net/browse/JDK-8219151.

See [NEV-395](https://jira.nuxeo.com/browse/NEV-395).

* * *

## NEV 10.4.3

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.4.3</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.3</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">February 11th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

This new version is dedicated to bug fixing.

### Major Fixes

#### ARender Broker and Renderer stability improvement

ARender Broker and Renderer services were crashing and restart at the same time due to healcheck probes unstability.

See [NEV-381](https://jira.nuxeo.com/browse/NEV-381).

* * *

## NEV 10.4.2

### Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">10.4.2</td>
</tr>
<tr>
<th colspan="1">ARender version</th>
<td colspan="1">4.2.0.NX1.2</td>
</tr>
<tr>
<th colspan="1">Release date</th>
<td colspan="1">January 29th 2021</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender software, Previewer (ARender connector), Nuxeo addon (nuxeo-arender package)</td>
</tr>
</tbody>
</table>
</div>

In a nutshell, this new version includes the following changes:
 - Several optimizations on how files are streamed, renditions performances, scalability
 - UX improvements on the sticky notes, arrows, and annotation left section
 - “Download with FDF annotations” feature is enabled by default (annotations are seen as Adobe annotations when viewing the document in Adobe Reader)
 - Sound can now be turned off when annotating a video
 - Bug fixes (MP3 rendition, preview on HTML, email and ZIP, repeat mode,…)

### Improvements

#### Download with FDF Annotations

The "Download with FDF annotations" action allows downloading a document as a PDF with annotations in the Forms Data Format (FDF). Then, you can for instance open the document in Adobe Reader and see the annotations as if you have created them into Adobe Reader.

See [NEV-323](https://jira.nuxeo.com/browse/NEV-323).

#### Turn on/off sound when annotating a video

It is now possible to turn off the sound when annotating a video.

See [NEV-45](https://jira.nuxeo.com/browse/NEV-45).

### UI/UX

#### Replace Sticky Notes Pointers by Pointers With Numbers

The sticky notes annotations have a new look & feel. They now include a number into the pointer to easily link the annotation in the document to the text into the left section of the Annotations tab.

See [NEV-349](https://jira.nuxeo.com/browse/NEV-349).

#### Better Icons Into the Arrow Annotation Bar

The arrow annotation bar includes a button to customize each side of the arrow. This new version improves those buttons icons for a better visibility.

See [NEV-238](https://jira.nuxeo.com/browse/NEV-238).

#### Empty Annotation Look & Feel

The left annotation section has been improved for empty annotations, in order to reflect that the annotation is editable.

See [NEV-250](https://jira.nuxeo.com/browse/NEV-250).

### Performance and Stability

The new version of ARender includes stability improvements, mostly on the renditions and conversions sides (cf. major fixes section).

### Major Fixes

#### Rendition of MP3 Files

MP3 files are now correctly rendered in the Annotations tab.

See [NEV-332](https://jira.nuxeo.com/browse/NEV-332).

#### Rendition of HTML Files

Some HTML files were not correctly rendered in the Annotations tab.

See [NEV-354](https://jira.nuxeo.com/browse/NEV-354).

### Renditions of Emails

The rendition of emails has been improved with better support of EML and msg files.

We also fixed language issue.

See [NEV-370](https://jira.nuxeo.com/browse/NEV-370) and [NEV-330](https://jira.nuxeo.com/browse/NEV-330).

### Renditions of ZIP Files

ZIP files are now correctly rendered in the Annotations tab.

See [NEV-370](https://jira.nuxeo.com/browse/NEV-370).

### Stop Repeat Mode Button Is Not Working Well

Clicking on the button with repeat mode didn't correctly stop the repeat mode, involving to create a last annotation before it stopped.

See [NEV-335](https://jira.nuxeo.com/browse/NEV-335).

### Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+%22Nuxeo+Enhanced+Viewer%22+and+resolution+not+in%28%22Cannot+Reproduce%22%2C%22Won%27t+Fix%22%2C%22Won%27t+Do%22%2CDuplicate%2CUnresolved%29+and+fixVersion+in+%2810.4.0%2C+10.4.1%2C10.4.2%29++++&src=confmacro) is available in our ticket tracking tool.
