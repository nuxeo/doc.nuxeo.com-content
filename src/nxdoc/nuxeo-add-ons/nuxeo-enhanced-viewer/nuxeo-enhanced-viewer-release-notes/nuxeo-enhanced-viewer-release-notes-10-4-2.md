---
title: NEV 10.4.2
description: Release notes for Nuxeo Enhanced Viewer 10.4.2.
tree_item_index: 10000
review:
  comment: ''
  date: '2021-01-29'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 10.4.2

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

{{! /multiexcerpt}}
