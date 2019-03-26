---
title: How to Make a Selection Based on the Value of Another Value in a Layout
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: "Use the extensibility features of the Select2 widget to make a selector which can suggest values based on a different widget's value"
        level: Intermediate
        tool: Studio
        topics: Layout
labels:
    - content-review-lts2016
    - howto
    - layout-widgets-component
    - atchertchian
    - layout
    - widget
    - select2
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: 'Layout & Widget How-To Index'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Make+a+Selection+Based+on+the+Value+of+Another+Value+in+a+Layout
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Make+a+Selection+Based+on+the+Value+of+Another+Value+in+a+Layout'
    page_id: '24053897'
    shortlink: iQhvAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iQhvAQ'
    source_link: /display/NXDOC/How+to+Make+a+Selection+Based+on+the+Value+of+Another+Value+in+a+Layout
tree_item_index: 800
history:
    -
        author: Frantz Fischer
        date: '2016-05-13 14:29'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2016-04-15 08:29'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-10-12 13:36'
        message: ''
        version: '7'
    -
        author: Harlan Brown
        date: '2015-05-22 13:25'
        message: ''
        version: '6'
    -
        author: Harlan Brown
        date: '2015-05-21 20:44'
        message: ''
        version: '5'
    -
        author: Harlan Brown
        date: '2015-05-21 20:32'
        message: ''
        version: '4'
    -
        author: Harlan Brown
        date: '2015-05-20 20:28'
        message: ''
        version: '3'
    -
        author: Harlan Brown
        date: '2015-05-20 20:13'
        message: ''
        version: '2'
    -
        author: Harlan Brown
        date: '2015-05-20 19:57'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

The Nuxeo UI uses a variety of web frameworks, each having its own strengths and weaknesses. User interfaces designed in Nuxeo Studio are primarily driven by JSF and Seam, which have a long history and are quite solid but are sometimes tricky to use in elaborate use cases. The Nuxeo Platform includes a widget which integrates the Javascript-based Select2 component with core Nuxeo APIs to enable some very interesting and useful Javascript-based features.


## The select2 Widget

The select2 widget uses automation operations to generate suggestions based on user input. By default, the widget can suggest values for directory entries (Vocabularies), Users and Groups, and Documents. In each case an operation is called to which relevant parameters are passed.

In the case of a Document selection widget, a page provider is used to retrieve suggestion values.

The Layout Widget Editor in Nuxeo Studio exposes many parameters commonly used by the suggestion widget. Using the Inline Javascript parameter, it is possible to pass any kind of data or executable code to the widget, including additional parameters that are passed to operations.

## Example:&nbsp;Select a File in a Selected Folder

An application has access to a hierarchy of files and folders. In a layout, a user wants to select a folder, and then select a file within that folder. In Nuxeo Studio, it is easy to select a folder or file based on a simple criterion. In order to make a selection based on the value of another object in a layout, the value of the object must be available to use as a parameter.

The value of any object in a layout can be found in the DOM. jQuery can be used to obtain values from the DOM. In this example, the file suggestion is made based on two criteria: the title string entered in the suggestion widget by the user, and the value of the folder selection. The two parameters are passed to the `Repository.PageProvider` operation, which in turn passes the two parameters to a custom page provider.

## Setting up the Suggestion Widgets

Add two Single Document Suggestion widgets to a layout. Configure the first one to suggest Folder documents by setting its NXQL Query parameter to `select * from Folder where [dc:title](http://dctitle) ilike '?'`

For the second widget define a custom page provider (see code block) and set the **Document page provider name** parameter to the name of the page provider. In the **Custom Properties Configuration** enter a new parameter `operationId` with value `Repository.PageProvider`.

{{#> panel type='code' heading='Custom page provider'}}

```xml
<extension point="providers" target="org.nuxeo.ecm.platform.query.api.PageProviderService">
  <coreQueryPageProvider name="myCustomDocs">
  <pattern escapeParameters="true" quoteParameters="true">
    SELECT * FROM File WHERE dc:title ILIKE ? and ecm:parentId = ?
  </pattern>
  <sort column="dc:title" ascending="true" />
  <pageSize>20</pageSize>
  </coreQueryPageProvider>
</extension>
```

{{/panel}}

## Passing Additional Operation Parameters to select2

In most cases a single value is passed to the page provider as a search term. In this case, two values are passed in a string array. This is done in a javascript function entered in the **Inline Javascript** parameter. See code block. The first search term is the `query.term` which is the string entered into the widget by the user. The second search term is the value of the Folder selection, which can be retrieved by jQuery. The two values are appended to a string list and passed to the operation in the `temp.searchTerm` variable. With the function code in place, enter a new parameter in the **Custom Properties Configuration** named `additionalOperationParameters` with the value set to the name of the defined inline function.&nbsp;

{{#> panel type='code' heading='Inline Javascript'}}

```js
function additionalParams(temp,params,query){
  var firstSelectionId = "input[id$='string1_select2']";
  var firstSelectionValue = jQuery(firstSelectionId).attr("value");
  temp.searchTerm = [query.term + "%",firstSelectionValue];
  return temp;
}
```

{{/panel}}

## Identifying the First Selection by Its Id in the DOM

Deploy the layout to a Nuxeo instance. Go to the layout and make a Folder selection. Inspect the source code of the widget and identify the input element by the selected value. Look at its id. Set the expression in the firstSelectionId variable of the additionalParams function to the last part of the id. See illustrations.

![Making the first selection]({{file name='Screen Shot 2015-05-20 at 4.22.00 PM.png'}} ?w=835,h=519 'Making the first selection')

![Identifying the element id]({{file name='Screen Shot 2015-05-20 at 4.22.34 PM.png'}} ?w=835,h=596 'Identifying the element id')

![The finished product]({{file name='Screen Shot 2015-05-20 at 4.23.38 PM.png'}} ?w=835,h=519 'The finished product')
