---
title: Basic Widget Types
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - widget-types
    - layout-widgets-component
    - atchertchian
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '3868345'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Basic+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Basic+Widget+Types'
    page_id: '17794534'
    shortlink: 5oUPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/5oUPAQ'
    source_link: /display/NXDOC/Basic+Widget+Types
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 09:07'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-08-31 14:13'
        message: Update table of contents look
        version: '7'
    -
        author: Solen Guitter
        date: '2014-08-25 11:28'
        message: Remove 5.4.2 reference
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-08 15:43'
        message: 'Formatting, related topics'
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-07 19:05'
        message: Added anchor
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:53'
        message: add link for template widget type
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:45'
        message: remove container widget type
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2013-12-05 17:27'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}
{{! excerpt}}
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

## textarea

The `textarea` widget displays a textarea in create or edit mode, with an additional message tag for errors, and a regular text output in any other mode. Widgets using this type can provide properties accepted on a `<h:inputTextarea />` tag in create or edit mode, and properties accepted on a `<h:outputText />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textareaWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/textareaWidget).

## datetime

The `datetime` widget displays a JavaScript calendar in create or edit mode, with an additional message tag for errors, and a regular text output in any other mode. It uses a date time converter. Widgets using this type can provide properties accepted on a `<[nxu:inputDatetime](http://nxuinputDatetime) />` tag in create or edit mode, and properties accepted on a `<h:outputText />` tag in other modes. The converter will also be given these properties.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/datetimeWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/datetimeWidget).

## file

The `file` widget displays a file uploader/editor in create or edit mode, with an additional message tag for errors, and a link to the file in other modes. Widgets using this type can provide properties accepted on a `<[nxu:inputFile](http://nxuinputFile) />` tag in create or edit mode, and properties accepted on a `<[nxu:outputFile](http://nxuoutputFile) />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/fileWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/fileWidget).

## htmltext

The `htmltext` widget displays an HTML text editor in create or edit mode, with an additional message tag for errors, and a regular text output in other modes (without escaping the text). Widgets using this type can provide properties accepted on a `<[nxu:editor](http://nxueditor) />` tag in create or edit mode, and properties accepted on a `<[nxu:outputText](http://nxuoutputText) />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/htmltextWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/htmltextWidget).

## selectOneDirectory

The `selectOneDirectory` widget displays a selection of directory entries in create or edit mode, with an additional message tag for errors, and the directory entry label in other modes. Widgets using this type can provide properties accepted on a `<[nxd:selectOneListbox](http://nxdselectOneListbox) />` tag in create or edit mode, and properties accepted on a `<[nxd:directoryEntryOutput](http://nxddirectoryEntryOutput) />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectOneDirectoryWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectOneDirectoryWidget).

## selectManyDirectory

The `selectManyDirectory` widget displays a multiselection of directory entries in create or edit mode, with an additional message tag for errors, and the directory entries labels in other modes. Widgets using this type can provide properties accepted on a `<[nxd:selectManyListbox](http://nxdselectManyListbox) />` tag in create or edit mode, and properties accepted on a `<[nxd:directoryEntryOutput](http://nxddirectoryEntryOutput) />` tag in other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectManyDirectoryWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/selectManyDirectoryWidget).

## checkbox

The `checkbox` widget displays a checkbox in create, edit and any other mode, with an additional message tag for errors. Widgets using this type can provide properties accepted on a&nbsp;`<h:selectBooleanCheckbox />` tag in create, edit mode, and other modes.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/checkboxWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/checkboxWidget).

## list

The `list` widget displays an editable list of items in create or edit mode, with an additional message tag for errors, and the same list of items in other modes. Items are defined using subwidgets configuration. This actually a template widget type whose template uses a `<[nxu:inputList](http://nxuinputList) />` tag in edit or create mode, and a table iterating over items in other modes. It also offers alternative renderings.

View online demo: [http://layout.demo.nuxeo.org/nuxeo/layoutDemo/listWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/listWidget)

## complex

The `complex` widget displays its subwidgets, binding them to a map-like structure suitable for complex field types definitions. It offers different kinds of renderings.

View online demo:[http://layout.demo.nuxeo.org/nuxeo/layoutDemo/complexWidget](http://layout.demo.nuxeo.org/nuxeo/layoutDemo/complexWidget)

## template

The `template` widget displays a template content whatever the mode. Widgets using this type must provide the path to this template; this template can check the mode to adapt the rendering.

Information about how to write a template is given in the [custom widget template section]({{page page='custom-layout-and-widget-templates'}}).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation '}}

- [Standard Widget Types]({{page page='standard-widget-types'}})
- [Custom Widget Types]({{page page='custom-widget-types'}})
- [Layout and Widget Modes]({{page page='layout-and-widget-modes'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related How-tos '}}

- [How to Control the Display Mode of a Widget]({{page page='how-to-control-the-display-mode-of-a-widget'}})
- [How to Use a Generic Widget in Layouts]({{page page='how-to-use-a-generic-widget-in-layouts'}})
- [How to Refresh the Task Widget on the Summary Tab]({{page page='how-to-refresh-the-task-widget-on-the-summary-tab'}})
- [How to Add a New Widget to the Default Summary Layout]({{page page='how-to-add-a-new-widget-to-the-default-summary-layout'}})
- [Layout & Widget How-To Index]({{page page='layout-and-widget-how-to-index'}})

{{/panel}}</div></div>
