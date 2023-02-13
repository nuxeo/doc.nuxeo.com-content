---
title: NEV 2.2.0
description: Release notes for Nuxeo Enhanced Viewer 2.2.0
tree_item_index: 895
hidden: false
review:
  comment: ''
  date: '2023-02-13'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## What's new in NEV 2.2.0

{{#> callout type='warning' heading='Recommended version'}}
If you are upgrading your NEV version, we highly recommend switching to release version 2.2.1 at minimum instead of 2.2.0 due to the inclusion of security updates in the 2.2.1 release.
{{/callout}}

### {{> anchor 'summary'}} Summary

<div class="table-scroll">
<table class="hover">
<tbody>
<tr>
<th colspan="1">NEV Version</th>
<td colspan="1">2.2.0</td>
</tr>
<tr>
<th colspan="1">Upgraded components</th>
<td colspan="1">ARender Rendition, ARender Previewer (Nuxeo ARender connector), Nuxeo ARender addon</td>
</tr>
<tr>
<th colspan="1">ARender Rendition version</th>
<td colspan="1">nuxeo-arender-document-service-broker 2.2.0, nuxeo-arender-document-renderer 2.2.0, nuxeo-arender-document-converter 2.2.0, nuxeo-arender-document-text-handler 2.2.0</td>
</tr>
<tr>
<th colspan="1">ARender Previewer (Nuxeo ARender connector) version</th>
<td colspan="1">nuxeo-arender-ui 2.2.0</td>
</tr>
<tr>
<th colspan="1">Nuxeo ARender addon version</th>
<td colspan="1">nuxeo-arender-2021.3.0</td>
</tr>
</tbody>
</table>
</div>

## Content Redaction

{{{multiexcerpt 'redaction-introduction' page='how-to-use-content-redaction'}}}

This release introduces the capacity for Nuxeo Enhanced Viewer users to redact content. More information can be found in the dedicated [how to use content redaction page]({{page page='how-to-use-content-redaction'}}).

A couple of non-blocker known issues regarding this feature have been identified and will be tackled as soon as possible:
- Downloading / Printing the redacted version of a PNG file can fail:<br/>[[NEV-604](https://jira.nuxeo.com/browse/NEV-604)]
- When generating a permanently redacted file, the corresponding notification disappears too quickly:<br/>[[NEV-599](https://jira.nuxeo.com/browse/NEV-599)]

### Security Notice

The `Download with FDF annotations` is known to leave redacted content visible.

This button should be disabled in your configuration if you have users accessing a redacted document without the _Redact_ permission. This is not the case if your users access a permanently redacted document as the redacted annotations are merged into the blob.

To disable this button you need to remove its declaration from `topPanel.download.buttons.beanNames` parameter like below:

```
topPanel.download.buttons.beanNames=\
  downloadButton,\
  downloadRootButton,\
  downloadAllSourcesButton,\
  downloadPdfButton,\
  downloadAllButton,\
  downloadAnnotationsButton,\
  downloadRedactButton,\
  downloadAnnotationsCSVButton,\
  downloadXFDFAnnotationsButton,\
  downloadWithCompareButton
```

For more information see [NEV-609](https://jira.nuxeo.com/browse/NEV-609).

### Upgrade Notes

{{#> callout type='info'}}
The configuration change should not impact your customizations.
{{/callout}}

While the Content Redaction is working and enabled by default, if and only if the user has the _Redact_ permission, you may need to update your configuration in case you have customized some part of your UI.

The impacted configuration parameter are:
- `topPanel.widgets.beanNames`
- `topPanel.section.right.buttons.beanNames`
- `topPanel.section.file.buttons.beanNames`
- `topPanel.download.buttons.beanNames`

See below the new configuration for each of these parameters:

```
# downloadRedactButton has been added to this parameter
topPanel.download.buttons.beanNames=\
  downloadButton,\
  downloadRootButton,\
  downloadAllSourcesButton,\
  downloadPdfButton,\
  downloadAllButton,\
  downloadAnnotationsButton,\
  downloadRedactButton,\
  downloadAnnotationsCSVButton,\
  downloadXFDFAnnotationsButton,\
  downloadFDFAnnotationsButton,\
  downloadWithFDFAnnotationsButton,\
  downloadWithCompareButton

# a new dropdown menu for print buttons has been created
topPanel.printMenu.buttons.beanNames=\
  printWithOptionsButton,\
  printRedactButton,\
  printAllButton

# printMenu has been added to this parameter
topPanel.section.file.buttons.beanNames=printMenu,downloadMenu,saveDirtyAnnotations

# addObfuscateAnnotationRepeatButton, addObfuscateZoneAnnotationRepeatButton, and redactCompletionButton
# have been added to this parameter
topPanel.widgets.beanNames=\
  fullscreenButton,\
  showAllAnnotationsButton,\
  refreshAnnotation,\
  addArrowAnnotationRepeatButton,\
  addFreehandAnnotationRepeatButton,\
  addStickyNoteAnnotationButton,\
  addFreeTextAnnotationButton,\
  addHighlightRectangleAnnotationRepeatButton,\
  addHighlightCircleAnnotationRepeatButton,\
  addHighlightTextAnnotationButton,\
  addUnderlineTextAnnotationButton,\
  addStrikethroughTextAnnotationButton,\
  addStampAnnotationButton,\
  addObfuscateAnnotationRepeatButton,\
  addObfuscateZoneAnnotationRepeatButton,\
  redactCompletionButton,\
  navigationButtons,\
  zoomButtons,\
  rotationButtons,\
  multiViewTools,\
  annotationToolbar,\
  searchBox,\
  documentMenu,\
  documentBuilderButton,\
  addPolygonAnnotationButton,\
  addPolylineAnnotationButton,\
  imageProcessingVerticalSubMenu
```

For more information on various buttons:
- [NEV-568](https://jira.nuxeo.com/browse/NEV-568) - Redact a text selection
- [NEV-569](https://jira.nuxeo.com/browse/NEV-569) - Redact an area
- [NEV-577](https://jira.nuxeo.com/browse/NEV-577) - Generate a redacted version
- [NEV-573](https://jira.nuxeo.com/browse/NEV-573) - Print redacted version
- [NEV-584](https://jira.nuxeo.com/browse/NEV-584) - Download a redacted document

## Noteworthy Changes

The following options have been removed by default from the download menu:

- Open a local file
- Open an URL

## Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/issues/?jql=project IN %28'NEV'%29 AND fixVersion IN %28'arender-2.2.0'%29 ORDER BY type DESC, priority DESC) is available in our bug tracking tool.

{{! /multiexcerpt}}
