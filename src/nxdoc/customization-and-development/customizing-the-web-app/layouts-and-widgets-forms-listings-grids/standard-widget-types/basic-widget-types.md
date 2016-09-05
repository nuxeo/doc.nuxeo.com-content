---
title: Basic Widget Types
labels:
    - widget-types
toc: true
confluence:
    ajs-parent-page-id: '17334434'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Basic+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Basic+Widget+Types'
    page_id: '18449583'
    shortlink: r4QZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/r4QZAQ'
    source_link: /display/NXDOC58/Basic+Widget+Types
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 09:08'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:40'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:33'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">{{! excerpt}}

A series of widget types is available for the most basic uses cases.

{{! /excerpt}}

## {{> anchor 'widget-text'}}text

The `text` widget displays an input text in create or edit mode, with an additional message tag for errors, and a regular text output in any other mode. Widgets using this type can provide properties accepted on a `<h:inputText />` tag in create or edit mode, and properties accepted on a `<h:outputText />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textWidget).

## int

The `int` widget displays an input text in create or edit mode, with an additional message tag for errors, and a regular text output in any other mode. It uses a number converter. Widgets using this type can provide properties accepted on a `<h:inputText />` tag in create or edit mode, and properties accepted on a `<h:outputText />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/intWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/intWidget).

## secret

The `secret` widget displays an input secret text in create or edit mode, with an additional message tag for errors, and nothing in any other mode. Widgets using this type can provide properties accepted on a `<h:inputSecret />` tag in create or edit mode.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/secretWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/secretWidget).

</div><div class="column medium-4">{{#> panel heading='In this section'}} {{/panel}}</div></div>

## textarea

The `textarea` widget displays a textarea in create or edit mode, with an additional message tag for errors, and a regular text output in any other mode. Widgets using this type can provide properties accepted on a `<h:inputTextarea />` tag in create or edit mode, and properties accepted on a `<h:outputText />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textareaWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textareaWidget).

## datetime

The `datetime` widget displays a JavaScript calendar in create or edit mode, with an additional message tag for errors, and a regular text output in any other mode. It uses a date time converter. Widgets using this type can provide properties accepted on a `<nxu:inputDatetime />` tag in create or edit mode, and properties accepted on a `<h:outputText />` tag in other modes. The converter will also be given these properties.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/datetimeWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/datetimeWidget).

## file

The `file` widget displays a file uploader/editor in create or edit mode, with an additional message tag for errors, and a link to the file in other modes. Widgets using this type can provide properties accepted on a `<nxu:inputFile />` tag in create or edit mode, and properties accepted on a `<nxu:outputFile />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/fileWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/fileWidget).

## htmltext

The `htmltext` widget displays an HTML text editor in create or edit mode, with an additional message tag for errors, and a regular text output in other modes (without escaping the text). Widgets using this type can provide properties accepted on a `<nxu:editor />` tag in create or edit mode, and properties accepted on a `<nxu:outputText />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/htmltextWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/htmltextWidget).

## selectOneDirectory

The `selectOneDirectory` widget displays a selection of directory entries in create or edit mode, with an additional message tag for errors, and the directory entry label in other modes. Widgets using this type can provide properties accepted on a `<nxd:selectOneListbox />` tag in create or edit mode, and properties accepted on a `<nxd:directoryEntryOutput />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectOneDirectoryWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectOneDirectoryWidget).

## selectManyDirectory

The `selectManyDirectory` widget displays a multiselection of directory entries in create or edit mode, with an additional message tag for errors, and the directory entries labels in other modes. Widgets using this type can provide properties accepted on a `<nxd:selectManyListbox />` tag in create or edit mode, and properties accepted on a `<nxd:directoryEntryOutput />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectManyDirectoryWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectManyDirectoryWidget).

## checkbox

The `checkbox` widget displays a checkbox in create, edit and any other mode, with an additional message tag for errors. Widgets using this type can provide properties accepted on a&nbsp;`<h:selectBooleanCheckbox />` tag in create, edit mode, and other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/checkboxWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/checkboxWidget).

## list

The `list` widget displays an editable list of items in create or edit mode, with an additional message tag for errors, and the same list of items in other modes. Items are defined using subwidgets configuration. This actually a template widget type whose template uses a `<nxu:inputList />` tag in edit or create mode, and a table iterating over items in other modes. It also offers alternative renderings.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/listWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/listWidget)

## complex

The `complex` widget displays its subwidgets, binding them to a map-like structure suitable for complex field types definitions. It offers different kinds of renderings and is available since Nuxeo 5.4.2.

View online demo:[http://layout.demo.nuxeo.org/nuxeo/layoutDemo/complexWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/complexWidget)

## template

The `template` widget displays a template content whatever the mode. Widgets using this type must provide the path to this template; this template can check the mode to adapt the rendering.

Information about how to write a template is given in the [custom widget template section]({{page page='custom-layout-and-widget-templates'}}).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation '}}

*   [Standard Widget Types]({{page page='standard-widget-types'}})
*   [Custom Widget Types]({{page page='custom-widget-types'}})
*   [Layout and Widget Modes]({{page page='layout-and-widget-modes'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-tos '}}

*   [How to Refresh the Task Widget on the Summary Tab]({{page page='how-to-refresh-the-task-widget-on-the-summary-tab'}})
*   [How to Add a New Widget to the Default Summary Layout]({{page page='how-to-add-a-new-widget-to-the-default-summary-layout'}})

{{/panel}}</div></div>