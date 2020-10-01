---
title: Ajax Forms and Actions
review:
    comment: ''
    date: '2020-09-30'
    status: ok
details:
    howto:
        excerpt: Learn the tips and tricks when working with Ajax forms or actions.
        level: Advanced
        tool: Code
        topics: 'JSF, Ajax'
labels:
    - content-review-lts2016
    - ajax
    - a4j
    - ajax4jsf
    - howto
    - jsf
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '9830458'
    ajs-parent-page-title: JSF and Ajax Tips and How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Ajax+Forms+and+Actions
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Ajax+Forms+and+Actions'
    page_id: '9830468'
    shortlink: RACW
    shortlink_source: 'https://doc.nuxeo.com/x/RACW'
    source_link: /display/NXDOC/Ajax+Forms+and+Actions
tree_item_index: 200
history:
    -
        author: Anahide Tchertchian
        date: '2014-12-09 15:32'
        message: ''
        version: '12'
    -
        author: Gildas Lefevre
        date: '2014-11-04 17:20'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-09-18 11:19'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-09-17 16:20'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-01-23 15:38'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-01-23 15:38'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-07 15:35'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-07-16 09:48'
        message: Fixed typos
        version: '5'
    -
        author: Anahide Tchertchian
        date: '2013-07-15 10:52'
        message: ''
        version: '4'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 18:50'
        message: Migrated to Confluence 4.0
        version: '3'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 18:50'
        message: ''
        version: '2'
    -
        author: Anahide Tchertchian
        date: '2012-02-06 17:57'
        message: ''
        version: '1'

---
{{! excerpt}}

Here is some helpful tips and tricks when working with Ajax forms or actions.

{{! /excerpt}} {{#> callout type='warning' }}

Some of this content is outdated and needs to be reviewed.

{{/callout}}

## Generic Advice

JSF2 integrates a standard Ajax support. One tag provides Ajax functionality, it is the `f:ajax` tag (similar to the `a4j:support` tag in previous version of JSF).

Complete documentation on the tag is available at [http://docs.oracle.com/javaee/6/javaserverfaces/2.1/docs/vdldocs/facelets/f/ajax.html](http://docs.oracle.com/javaee/6/javaserverfaces/2.1/docs/vdldocs/facelets/f/ajax.html)

Always try to use the Ajax library features to help avoiding many calls to the server (ignoreDupResponses, eventsQueue,...), and re-render only needed parts of the page. This will prevent you from problems like " [I Get an Error When I Click on Two Links Quickly]({{page space='nxdoc60' page='i-get-an-error-when-i-click-on-two-links-quickly'}}).

## Submitting the Form When Hitting The "Enter" Key

The browser&nbsp;`form`&nbsp;tag will natively select the first input submit button in the form: be aware that tag&nbsp;`a4j:commandLink`&nbsp;is not one of them, so you should replace it with a&nbsp;`h:commandButton`. You will have to use the&nbsp;`f:ajax` element for the submission to be done in Ajax.

## <span style="color: rgb(51,51,51);">Here is an example:</span>

```js
<h:form id="#{quickFilterFormId}"
  styleClass="action_bar">
  <nxl:layout name="#{contentView.searchLayout.name}" mode="edit"
    value="#{contentView.searchDocumentModel}"
    template="content_view_quick_filter_layout_template.xhtml" />
  <h:commandButton
    value="#{messages['label.contentview.filter.filterAction']}"
    id="submitFilter"
    styleClass="button"
    action="#{contentView.resetPageProvider()}">
    <f:ajax execute="@form" render="#{elementsToReRender}"
      listener="#{selectionActions.setStaticValue}" />
  </h:commandButton>
</h:form>

```

### Ajax Re-Rendering

If you need to perform some Ajax&nbsp;re-rendering when submitting this button, they'd better be placed directly on the&nbsp;`f:ajax` tag itself: adding a tag&nbsp;[`a4j:support`](http://a4jsupport)&nbsp;for this inside the&nbsp;`h:commandButton`&nbsp;tag will generates an additional call to the server when using some browsers (visible using Firefox 8.0) and may lead to errors when server is under load.

### Command Button Visibility

Note also that the command button must be visible: if you'd like it to be hidden, placing it inside a div using&nbsp;`display: none`&nbsp;will break the submission using some browsers (visible using Chrome 15).

### Disabling Buttons after Form Submission

Last but not least, if you'd like the buttons to be disabled when submitting the form (to make sure people do not keep on clicking on it), they should be disabled by the form itself when the&nbsp;`onsubmit`&nbsp;JavaScript event is launched: if it is disabled when the&nbsp;`onclick`&nbsp;event is received on the button, some browsers will not send the request at all ([visible with Chrome](http://www.google.com/support/forum/p/Chrome/thread?tid=152f74d4890dc84f&hl=en)).

### JavaScript Form Tricks

When the form is not generated by a reusable layout (like in the example above), you can also use more traditional JavaScript tricks to submit the form like:

```javascript
<h:inputText value="#{searchActions.simpleSearchKeywords}"
  onkeydown="if (event.keyCode == 13) {Element.next(this).click();} else return true;" />
<h:commandButton action="#{searchActions.performSearch}"
  value="#{messages['command.search']}" styleClass="button" />

```

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [JSF and Javascript ]({{page page='jsf-and-javascript'}})
- [Ajax4jsf Best Practices]({{page page='ajax4jsf-best-practices'}})
- [HOWTO: Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JavaScript Client]({{page page='javascript-client'}})
- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Nuxeo JSF UI]({{page page='nuxeo-jsf-ui'}})

{{/panel}}</div></div>
