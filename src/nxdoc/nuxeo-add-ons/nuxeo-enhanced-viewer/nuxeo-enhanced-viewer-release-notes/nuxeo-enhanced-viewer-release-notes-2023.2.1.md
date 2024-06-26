---
title: NEV 2023.2.1
description: Release notes for Nuxeo Enhanced Viewer 2023.2.1
tree_item_index:
hidden: true
review:
  comment: ''
  date: '2024-06-25'
  status: ok
toc: true
---

{{! multiexcerpt name='nuxeo-enhanced-viewer-updates'}}
## New major release of NEV: 2023.2.1

### {{> anchor 'summary'}} Summary

Arender has released the new version of their enhanced viewer, NEV 2023.2.1.
Below are the details of the offered enhancements and important points to consider when migrating from NEV 2.3.x to 2023.2.1.
The NEV 2023.2.1 release introduces enhanced UI with consolidated annotation and redaction panels, along with support for audio annotations.
Migration requires reconfiguring top panel widgets and annotation settings, with special steps for HA mode deployments.

## UI Overview

The user interface of NEV 2023.2.1 features significant upgrades, particularly in the areas of annotations and redactions.
These controls are now organized into their own grouped views for enhanced usability.

The UI of NEV 2023.2.1 looks like:

![]({{file name='NewUI.png'}} ?w=600,border=true)

## Enhancements

Annotations and Redactions: These features are now consolidated into dedicated panels for better accessibility and organization.

### Annotation Toolbar:
Annotations are no longer available as individual actions in the top panel. Instead, they are accessed through a new Annotation Menu button ![]({{file name='annotationbutton.png'}} ?w=16)

Upon selection, the annotation bar displays as shown below, containing all configured annotations.
Desired annotations can be selected from this bar and applied to the documents.
![]({{file name='annotationbar.png'}} ?w=600,border=true)

The list of annotation beans in this toolbar can be configured using the property: toolbar.annotation.buttons.beanNames.
NEV already includes possible annotation beans in this property, so it is recommended to use the top panel and annotation configuration properties to enable or customize specific annotations.

Refer to the migration guide bellow for more information.


### Dedicated Redaction Panel

Redaction controls provided by Arender are now part of a dedicated side panel in the new UI.  Activate this panel by selecting the following button

![]({{file name='redactionpanel.png'}} ?w=350,border=true)

The following side panel button:![]({{file name='redactbutton.png'}} ?w=16)
must be selected to activate this and then the redact actions can be applied.  
Older top panel actions like Redact Zone and Redact Text are now available as "On Text" and "Rectangle" options in the new redaction panel. Additionally, new redaction options include:
•	All text on Page: Redacts all text on the current page.
•	Whole Page: Redacts the complete current page.
•	Manual Input: Allows for searching and redacting specific text in the current document.

![]({{file name='manualinput.png'}} ?w=350,border=true)

Configuration properties for the redaction feature:
•	redactexplorer.enabled: Enable/Disable the entire redaction panel.
•	redactexplorer.redact: Enable/Disable the redact text action.
•	redactexplorer.redactZone: Enable/Disable the redact zone action.
•	redactexplorer.manualInput: Enable/Disable the manual input redact action.
•	redactexplorer.redactPageContent: Enable/Disable redact page action.
•	redactexplorer.redactFullPage: Enable/Disable the full page redaction action.
Note: The features of "Redact with reasons" and "Redact with rules" are not supported in this initial version of NEV 2023.2.1.

### Audio Annotations:
NEV 2023.2.1 now supports audio annotations. To enable this feature, set the following property to true: toppanel.annotationmenu.sound. This configuration can also be enabled via its environment variable equivalent using the ARENDER convention: ARENDER_TOPPANEL_ANNOTATIONMENU_SOUND.
Once enabled, audio annotations can be added by selecting the record action displayed in the annotation toolbar :![]({{file name='audiobutton.png'}} ?w=16)

![]({{file name='audioannotation.png'}} ?w=600,border=true)

Limitation: The recording time for audio annotations is currently limited to 10 seconds.

## Migration Guide

### Configuring the Top Panel Widgets:

The configuration of widgets in the top panel has been updated. Instead of a single property, three different properties now control the placement of widgets:
o	topPanel.section.left.buttons.beanNames
o	topPanel.section.middle.buttons.beanNames
o	topPanel.section.right.buttons.beanNames

Default values for these properties in NEV are as follows:
```
•	topPanel.section.left.buttons.beanNames=fullscreenButton, showAllAnnotationsButton, refreshAnnotation, showAllAnnotationsAndRotationsButton, addStickyNoteAnnotationButton,annotationCreationOpenCreation, documentBuilderButton, redactCompletionButton
```
```•	topPanel.section.middle.buttons.beanNames=firstPageButton,previousPageButton,pageNavigation,nextPageButton,lastPageButton,zoomBox,zoomSelectableDropdown,rotateSelectableDropdown,cropBoxButton,selectAllTextDocument,multiViewTools
```
```•	topPanel.section.right.buttons.beanNames=searchBox,printMenu,downloadMenu,imageProcessingMenu,saveDirtyAnnotations
```

Make the desired changes to specific deployment instances accordingly.

### Configuring Annotation Bar:

The list of beans in the annotation bar can be configured using the property: toolbar.annotation.buttons.beanNames.
By default, NEV includes all possible beans in this property:
```
toolbar.annotation.buttons.beanNames=addStrikethroughTextAnnotationButton,addUnderlineTextAnnotationButton,addFreeTextAnnotationButton,addHighlightTextAnnotationButton,addHighlightRectangleAnnotationButton,addHighlightCircleAnnotationButton,addPolygonAnnotationButton,addPolylineAnnotationButton,addFreehandAnnotationButton,addArrowAnnotationButton,addArrowDistanceAnnotationButton,addStampAnnotationButton,addSoundAnnotationButton
```

It is recommended to use the documentation of the Annotation Menu and Annotations to enable and customize specific annotations.

Refer to the following migration guides for UI  and rendition  changes provided by Arender.
This provides changes in the list of properties for their versions of 4.x to 2023.x
Ensure the applicable property updates are performed in specific deployment instances respectively.

## Deployment Note

For existing instances configured in HA mode, follow these steps when upgrading to NEV 2023.x from 2.x:
1.	Disable HA mode.
2.	Update the version.
3.	Re-enable HA mode.

This step-by-step approach is necessary because the Hazelcast instance needs to be redeployed to avoid serialization errors during a direct upgrade to the newer version.

For further details and comprehensive guidelines, refer to the official migration guide and technical documentation provided by Arender.

{{! /multiexcerpt}}
