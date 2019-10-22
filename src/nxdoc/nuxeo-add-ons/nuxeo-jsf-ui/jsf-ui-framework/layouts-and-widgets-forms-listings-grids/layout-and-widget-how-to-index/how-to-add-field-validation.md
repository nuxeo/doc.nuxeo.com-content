---
title: 'HOWTO: Add Field Validation - JSF UI'
review:
    comment: ''
    date: '2019-10-21'
    status: ok
details:
    howto:
        excerpt: Learn how to create a validator on a field with Nuxeo Studio and Nuxeo IDE.
        level: Advanced
        tool: 'Studio, Nuxeo IDE'
        topics: 'Layout, JSF, Validation'
labels:
    - content-review-lts2016
    - validation
    - jsf-ui
    - howto
    - layout
    - seam-jsf-component
    - atchertchian
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235623'
    ajs-parent-page-title: 'Layout & Widget How-To Index'
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Add+Field+Validation
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Add+Field+Validation'
    page_id: '8684637'
    shortlink: XYSE
    shortlink_source: 'https://doc.nuxeo.com/x/XYSE'
    source_link: /display/NXDOC/How+to+Add+Field+Validation
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2016-02-24 16:46'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-10-12 13:25'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2014-12-01 21:53'
        message: ''
        version: '18'
    -
        author: Manon Lumeau
        date: '2014-09-12 15:51'
        message: ''
        version: '17'
    -
        author: Manon Lumeau
        date: '2014-09-11 15:17'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2014-09-11 14:49'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2014-09-11 14:44'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-09-11 14:44'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-09-10 18:02'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-09-10 17:29'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-09-10 17:26'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-09-10 17:01'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-02-17 09:27'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-02-17 09:27'
        message: Added TOC and related topics
        version: '7'
    -
        author: Harlan Brown
        date: '2014-02-14 22:45'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-09-02 13:44'
        message: Fixed typos and format
        version: '5'
    -
        author: Benjamin Jalon
        date: '2011-10-26 15:47'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Benjamin Jalon
        date: '2011-10-26 15:47'
        message: ''
        version: '3'
    -
        author: Benjamin Jalon
        date: '2011-10-26 15:43'
        message: ''
        version: '2'
    -
        author: Benjamin Jalon
        date: '2011-10-26 15:31'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

{{! excerpt}}
When you create your own document type, you may need to impose a structure for some fields (phone number, zip code, ...) to your user. The Nuxeo Layout system is based on JSF that implements the notion of validator. Here we will explain how to do that with Nuxeo Studio and Nuxeo IDE.
{{! /excerpt}}

For a pure JSF fragment, see [How to validate fields of document at creation or update]({{page page='how-to-add-a-jsf-form-validation'}}).

Let's take the example of the validation of a phone number field in creation and edit mode.

## Before You Start

{{{multiexcerpt 'check-jsf-ui-dependency' page='how-to-define-a-new-content-view'}}}

## Nuxeo Studio: Parametrization

1.  Go to the&nbsp;**Creation Layout**&nbsp;tab on your document type definition in Nuxeo Studio.
2.  Click on the icon&nbsp;![]({{file name='editor_area.gif' space='studio' page='studio-icons-index'}})&nbsp;of the field widget you want to add a validation to.
3.  Expand the&nbsp;**Custom Properties Configuration**&nbsp;section.
4.  Add a property named&nbsp;`validator`&nbsp;with value:&nbsp;`#{myValidatorBean.validatePhoneNumber}`.

    {{#> callout type='info' }}

    The bean is identified by the&nbsp;`@Name` annotation of your bean class, not the actual class name.

    {{/callout}}

Here we ask JSF to ask the&nbsp;`myValidatorBean`&nbsp;SEAM Component to execute the method&nbsp;`validatePhoneNumber`&nbsp;upon the&nbsp;creation form validation.

If you want to expose the same field with the same validator on the Edit layout, just repeat that or copy directly the layout.

## Nuxeo IDE: Seam Component Creation

Nuxeo IDE provides an easy way to create you own Seam Component:

1.  First you need to install Nuxeo IDE and a new plugin project. See the&nbsp;[Getting Started with Nuxeo IDE](/x/aoKE)&nbsp;page.
2.  In Nuxeo IDE, create your Seam Component.
3.  Call this component `myValidatorBean`.
4.  Add the method that will call JSF to validate your field:

    ```
    public void validatePhoneNumber(FacesContext context, UIComponent component, Object value)

    ```

    This method will manage the validation of the field.

    *   The context will be used to send message into the client (kind of error);
    *   The component parameter represents the field you are validating;
    *   The value is the value filled by the user into the given field.

## Nuxeo IDE: Validation Method Implementation

Here, we show a quick implementation of a JSF validation method. JSF is a huge framework, so if you want to learn more, check the JSF documentation.

According the type of your widget the type of the value object will be:

*   for text and textArea widgets, the type is&nbsp;`String`;
*   for date widget, the type is&nbsp;`java.util.Date`;
*   etc...

So, in the validation method, you just need to do what is required to validate the value, ex:

```
            String phoneNumber = (String) value;
            if (... valid the string here...) {
                 // do nothing as the given string is well-formed
                 return;
            } else {
				// display an error in the input form
            	FacesMessage message = new FacesMessage(
                	FacesMessage.SEVERITY_ERROR, "Bad boy, you fill a wrong number format!",
                	null);
            	throw new ValidatorException(message);
            }

```

Exception will be catched by JSF and JSF will present again the form to the user. The error message will be exposed next to the field.

You can internationalize your message by replacing the given String by:

```
ComponentUtils.translate(context, "label.error.bad.phone.format")

```

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

- [How to Set a Default Date on a Field at Document Creation]({{page page='how-to-set-a-default-date-on-a-field-at-document-creation'}})
- [Customize the Versioning and Comment Widget]({{page page='how-to-customize-the-versioning-and-comment-widget-on-document-edit-form'}})
- [How to Add a JSF Form Validation]({{page page='how-to-add-a-jsf-form-validation'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [JSF UI Framework]({{page page='jsf-ui-framework'}})
- [Form Layouts in Nuxeo Studio]({{page space='studio' page='form-layouts'}})
- [Layout and Widgets]({{page page='layouts-and-widgets-forms-listings-grids'}})
- [Widget Definitions]({{page page='widget-definitions'}})

{{/panel}}</div></div>
