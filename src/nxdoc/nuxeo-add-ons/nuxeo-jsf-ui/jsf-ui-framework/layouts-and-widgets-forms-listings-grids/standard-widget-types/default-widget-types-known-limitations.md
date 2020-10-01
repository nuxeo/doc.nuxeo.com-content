---
title: Default Widget Types Known Limitations
review:
    comment: ''
    date: '2020-09-30'
    status: ok
labels:
    - content-review-lts2016
    - widget
    - layout-widgets-component
    - atchertchian
    - limitations
    - excerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '3868345'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Default+Widget+Types+Known+Limitations
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Default+Widget+Types+Known+Limitations'
    page_id: '12915525'
    shortlink: RRPF
    shortlink_source: 'https://doc.nuxeo.com/x/RRPF'
    source_link: /display/NXDOC/Default+Widget+Types+Known+Limitations
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-08-31 09:50'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2015-03-18 09:29'
        message: 'NXP-3427: remove limitation on file upload inside lists'
        version: '16'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 16:52'
        message: 'NXDOC-286: remove limitations not valid on 7.1 + wording'
        version: '15'
    -
        author: Guillaume Renard
        date: '2014-11-14 17:28'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-09-17 10:42'
        message: Fixed broken link
        version: '13'
    -
        author: Solen Guitter
        date: '2014-03-10 10:10'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2014-03-07 12:09'
        message: 'NXDOC-300: Explain how sub files can be managed in widget templates'
        version: '11'
    -
        author: Solen Guitter
        date: '2014-01-08 17:31'
        message: Formatting
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2013-12-06 14:26'
        message: mention file widget limitation inside lists
        version: '9'
    -
        author: Anahide Tchertchian
        date: '2013-12-04 17:56'
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

*   **File widget cannot be used in an Ajax form.**
*   You might have some troubles using **chain select** widgets in Ajax forms or when using lists. This occurs in some very specific conditions, so you have to check if it is ok for your use case first. We plan to rewrite completely this widget to solve this issue.
*   **Widgets using Rich Faces suggestion components do not work correctly in a list.&nbsp;**Limitation is at lower Rich Faces level, so there is no short term fix planned.
*   Widgets displaying URLs to files/images may misbehave inside of lists. This is because the URL might need information about the complete property XPath, and this variable is not exposed in the context for now (see [NXP-10423](https://jira.nuxeo.com/browse/NXP-10423)). Some specific widget templates can be used to workaround this issue, and some of them are available by default:
    *   [`/widgets/extended_subfile_widget.xhtml`](https://github.com/nuxeo/nuxeo-dm/blob/master/nuxeo-platform-webapp/src/main/resources/web/nuxeo.war/widgets/extended_subfile_widget.xhtml) Displays a link to a file with additional information (icon, PDF export) for a file within a list.
    *   [`/widgets/image_subwidget_template.xhtml`](https://github.com/nuxeo/nuxeo-jsf/blob/master/nuxeo-platform-webapp-base/src/main/resources/web/nuxeo.war/widgets/image_subwidget_template.xhtml) Displays an image when within a list (available only from 5.9.3, 5.8.0-HF09, 5.6.0-HF32.These widget templates are specific to this use case, and will not work as expected inside lists of lists, for instance, but custom widget templates can be defined for this behaviour, taking care of the following issues:
    *   The URL system may rely on a document to provide the RESTful link, hence the&nbsp;`layoutValue` variable is used for it: these widget templates will assume that the layout applies to a document
    *   The parent widgets field definitions, used to build the document property XPath, can be retrieved using variables `widget_0` for instance: this assumes that the widget at the first level of the layout holds the list property path.
    *   The widget template needs to know the file/image index, and is relying on variable `model.rowData` for it: this is only available within a widget of type `list`.
    *   Facelet tags evaluated at build time (like a `c:if` tag) cannot check elements within the list, because these items are only exposed at render time.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Widget Related Documentation'}}

*   [Standard Widget Types]({{page page='standard-widget-types'}})
*   [Custom Widget Types]({{page page='custom-widget-types'}})
*   [Layout & Widget How-To Index]({{page page='layout-and-widget-how-to-index'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

&nbsp;

&nbsp;

</div></div>
