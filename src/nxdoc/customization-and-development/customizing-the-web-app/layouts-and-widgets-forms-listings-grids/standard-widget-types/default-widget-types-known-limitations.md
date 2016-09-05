---
title: Default Widget Types Known Limitations
labels:
    - widget
confluence:
    ajs-parent-page-id: '17334434'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Default+Widget+Types+Known+Limitations
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/Default+Widget+Types+Known+Limitations
    page_id: '17334508'
    shortlink: 7IAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/7IAIAQ'
    source_link: /display/NXDOC58/Default+Widget+Types+Known+Limitations
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:49'
        message: ''
        version: '13'
    - 
        author: Anahide Tchertchian
        date: '2015-03-18 09:47'
        message: wording
        version: '12'
    - 
        author: Guillaume Renard
        date: '2014-11-14 17:27'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-03-10 10:13'
        message: ''
        version: '10'
    - 
        author: Anahide Tchertchian
        date: '2014-03-07 15:27'
        message: 'NXDOC-300: Explain how sub files can be managed in widget templates'
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:45'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:20'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:19'
        message: Added related topics
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:19'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-04-19 14:49'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-04-18 11:27'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-04-18 11:27'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-04-18 11:24'
        message: ''
        version: '1'

---
{{! excerpt}}

Some widgets have limitations in some specific conditions of use. We maintain a list of known problems here.

{{! /excerpt}}

*   **Widgets using HTML text editor cannot be used in a list (fixed from 5.8.0-HF26).**
*   **File widget cannot be used in an Ajax form.**
*   **File widget selection may be lost when adding element in a list**: this issue happens when using a file widget inside a list. When adding a new element in the list, the previously selected file can be lost. There is ad-hoc JavaScript code that help keeping this selection, a sample&nbsp;[widget template handling a list](https://github.com/nuxeo/nuxeo-dm/blob/release-5.8/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/widgets/files_list_widget_template.xhtml) of files can taken as an example.
*   You might have some troubles using **chain select** in Ajax forms or when using lists. This occurs in some very specific conditions, so you have to check if it is ok for your use case first. We plan to rewrite completely this widget for solving this issue.
*   **Widgets using Rich Faces suggestion components doesn't work correctly in a list.&nbsp;**Limitation is at lower Rich Faces level, so there is no short term fix planned.
*   Widgets displaying URLs to files/images may misbehave inside of lists. This is because the URL might need information about the complete property XPath, and this variable is not exposed in the context for now (see {{jira server='Nuxeo Issue Tracker' key='NXP-10423'}}). Some specific widget templates can be used to workaround this issue, and some of them are available by default:
    *   [`/widgets/extended_subfile_widget.xhtml`](https://github.com/nuxeo/nuxeo-dm/blob/release-5.8/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/widgets/extended_subfile_widget.xhtml) Displays a link to a file with additional information (icon, PDF export) for a file within a list.
    *   [`/widgets/image_subwidget_template.xhtml`](https://github.com/nuxeo/nuxeo-jsf/blob/release-5.8/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/widgets/image_subwidget_template.xhtml) Displays an image when within a list (available only from 5.9.3, 5.8.0-HF09, 5.6.0-HF32.These widget templates are specific to this use case, and will not work as expected inside lists of lists, for instance, but custom widget templates can be defined for this behavior, taking care of the following issues:
    *   The URL system may rely on a document to provide the RESTful link, hence the&nbsp;`layoutValue` variable is used for it: these widget templates will assume that the layout applies to a document
    *   The parent widgets field definitions, used to build the document property XPath, can be retrieved using variables `widget_0` for instance: this assumes that the widget at the first level of the layout holds the list property path.
    *   The widget template needs to know the file/image index, and is relying on variable `model.rowData` for it: this is only available within a widget of type `list`.
    *   Facelets tags evaluated at build time (like a c:if tag) cannot check elements within the list, because these items are only exposed at render time.