---
title: Template Rendering Addon
review:
    comment: ''
    date: ''
    status: ok
labels:
    - template-rendering
    - document-template
toc: true
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Template+Rendering+Addon
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Template+Rendering+Addon'
    page_id: '21299435'
    shortlink: 6wBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/6wBFAQ'
    source_link: /display/USERDOC60/Template+Rendering+Addon
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 14:35'
        message: ''
        version: '12'
    - 
        author: Bertrand Chauvin
        date: '2015-11-06 10:08'
        message: 'Add JXLS mentions, update xdocreport links'
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-08-28 09:13'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2015-08-28 09:12'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2014-10-20 09:59'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-09-22 18:18'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-06-11 14:12'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:37'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2012-09-17 09:37'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-09-04 23:41'
        message: Added related content
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-09-04 23:38'
        message: Added screenshots
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-09-04 23:20'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

The template rendering addon is an addon available from the Nuxeo Marketplace that enables users to create documents from a template, with content being automatically extracted from Nuxeo, and to have an automated rendering generated from a set of user-defined preferences. This addon includes:

*   four new document types:
    *   two template document types, called "Template" and "Web template",
    *   two file-based document types, called "Customer reference" and "Statement reference" and configured using [Studio]({{page space='studio'}}),
*   templates with template attachments, leveraging the Template and Web Template document types, in the "Templates" space,
    ![]({{file name='Templating-templates-content.png'}} ?w=650,border=true)
*   documents based on these templates, showing the result of the different template rendering options, in the "Template usage samples" workspace.
    ![]({{file name='Templating-workspace-content.png'}} ?w=650,border=true)

The principle of the template rendering feature is the following:

1.  A template file (Word file, OpenOffice.org file, ...) is created outside Nuxeo. This file holds some fields that will automatically be filled in with content defined in Nuxeo.
2.  A Nuxeo user creates a Nuxeo template, to which he attaches the template file (or fills in the Note content in case of a web template). He fills in the template properties, that will define under which conditions the template is available: for which document types, under which circumstances...
3.  When users in Nuxeo create a new document for which a template is available, they can use it. If some template elements are left to be edited or filled in by the document's contributors, they can set them.

There are two types of Nuxeo templates: the "Template" will have an attached file in which some values are defined to be Nuxeo values. The "Web template" doesn't have an attachment. Its content is defined in a Note field.

## Creating a template file

The template file is the file that will be used to generate the rendering of the Nuxeo document and will be completed automatically with the defined Nuxeo properties. This template file can be:

*   an office document (.doc, .docx, .odt, .xls, .xlsx, .ods formats are supported for now),
*   an HTML file,
*   a XML file.

To create a template file:

1.  Create a regular office, HTML or XML file with your favorite tool.
2.  In the document, put variables where you want to use information from Nuxeo (see below). You may want to use [XDocReport](https://github.com/opensagres/xdocreport) or [JXLS](http://jxls.sourceforge.net) for this part.
3.  When the template is ready, [create the template document in Nuxeo](#creating-the-template-document) and attach the template to it.

Here are a few examples of the most common variables:

*   `${doc.title`}: gets the title of the Nuxeo document
*   `${doc['dc:description']`}: gets the content of the Description field of the Nuxeo document
*   `${doc['dc:modified']`}: gets the last modification date of the Nuxeo document. You can define how the date should be formatted by adding `?date` to display only the date, or `?time` to display only the time. By default, the modification date displays both the date and the time.
*   `${doc.versionLabel`}: displays the version number

`${auditEntries.eventId`}: displays the events listed in the document's history. `${auditEntries.eventDate`} displays the date at which the events took place, `${auditEntries.principalName`} the name of the user who did the action, `${auditEntries.comment`} the comment typed by the user.

{{#> callout type='tip' heading='More resources to help users create the template file'}}

*   More information about the variables available (including functions) in the [Quick user guide](https://github.com/nuxeo/nuxeo-template-rendering/blob/master/QuickUserGuide.md) on the Nuxeo GitHub repository.
*   XDocReport [overview](https://github.com/opensagres/xdocreport/wiki/Overview) and [docx format user guide](https://github.com/opensagres/xdocreport/wiki/DocxDesignReport) / [odt format user guide](https://github.com/opensagres/xdocreport/wiki/ODTDesignReport): XDocReport is a tool that enables to insert fields in MS Office and OpenOffice / LibreOffice text files.
*   [JXLS website](http://jxls.sourceforge.net): JXLS is a tool that enables to insert fields in MS Office and OpenOffice / LibreOffice spreadsheets.
*   [Template rendering readme file](https://github.com/nuxeo/nuxeo-template-rendering/blob/master/ReadMe.md) on the Nuxeo GitHub repository
*   [Template rendering Quick User Guide](https://github.com/nuxeo/nuxeo-template-rendering/blob/master/QuickUserGuide.md) on the Nuxeo GitHub repository

{{/callout}}

### Creating the template document

When the template file is done, you need to create a template document and attach the template file to it.
Templates can be created in the Templates space, in workspaces and in folders.

**To create a template document:**

1.  In the **Content** tab of the workspace or template space, click on the **New Document** button.
2.  On the window **Available document types**, click on the desired document.
3.  Fill in the template document's creation form (see below for template's properties).
4.  Click on the **Create** button.
    The **Summary** tab of the template document is displayed.
    You can now [create documents based on this template](#creating-a-document-based-on-a-template).

**Template properties**

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Title

</td><td colspan="1">

Type the template title

</td></tr><tr><td colspan="1">

Description

</td><td colspan="1">

What the template is about

</td></tr><tr><td colspan="1">

Content

</td><td colspan="1">

*   For a Template : the attached template file (odt, doc, etc file).
*   For a web template: The Note that will hold the content of the template. Typically this would be HTML text.

</td></tr><tr><th colspan="1">

Simple mode

</th><th colspan="1">

&nbsp;

</th></tr><tr><td colspan="1">

Template usage

</td><td colspan="1">

Select what the template will be used for:

*   Office template:
*   Office template with PDF rendering:
*   Create a rendition:

</td></tr><tr><th colspan="1">

Advanced mode

</th><th colspan="1">

&nbsp;

</th></tr><tr><td colspan="1">

Nature

</td><td colspan="1">

Select which nature will the document based on the template automatically get.

</td></tr><tr><td colspan="1">

Document types for which the template is available

</td><td colspan="1">

Select the document types for which this template will be suggested.

</td></tr><tr><td colspan="1">

Allow parameters override

</td><td colspan="1">

Check if the user should be able to change the parameters defined here.

</td></tr><tr><td colspan="1">

Template processor

</td><td colspan="1">

Select how are the template file fields processed to use Nuxeo data. Automatic should work for most file formats.
XDocReport is specifically target at text file formats: doc, docx, odt.
JXLS is used for spreadsheet file formats: xls, xlsx, ods.

</td></tr><tr><td colspan="1">

Rendition

</td><td colspan="1">

Select the views that will be available for the template.

</td></tr><tr><td colspan="1">

Document types automatically associated to template

</td><td colspan="1">

Select the document types for which the template file will automatically be attached.

</td></tr><tr><td colspan="1">

Template is editable on the document (office template)

</td><td colspan="1">

If checked, the user will be able to ?

</td></tr><tr><td colspan="1">

Rendering output format

</td><td colspan="1">

Select what is the format of the selected rendition going to be.

</td></tr></tbody></table></div>

## Using template documents

A document can use one or several templates. If it is associated with several templates, the first template associated is considered as the main template and is used as content. The other associated templates are used to generate additional renditions of the document.
When a document is using a template, an additional tab is available on the document, called **Associated templates**.
There are several ways to associate a template to a document.

### Creating a document based on a template

To create a new document based on a template, users need to [use the **New document** button]({{page page='creating-content#creating-a-document-using-the-new-document-button'}}). If a template is available for the selected document type, an additional option is then available for the **Content** field, allowing users to select which template to use.
![]({{file name='Templating-content-field-with-template.png'}} ?w=350,border=true)
When the document is created, the template is used as content. An additional **Associated templates** tab is available.

Users can then:

*   [associate other templates to the document](#associating-a-template-to-a-document),
*   [render the document using the template(s)](#rendering-a-document-using-its-template),
*   [publish the document using the template's available renditions](#publishing-a-documents-rendition).

### Associating a template to a document

It is possible to associate a document with a template after the document's creation.

**To associate a document to a template:**

*   If the document has no template associated yet:
    1.  Click on the icon ![]({{file name='doctemplate.png'}}).
    2.  Select the template to use and click on **Bind template**.
        ![]({{file name='Templating-binding-popup.png'}} ?w=400,border=true)
*   If the document already has at least one associated template:
    1.  Click on the **Associated templates** tab.
    2.  Click on the link **Add a template**.
    3.  Select the new template to associate with the document and click on the button **Bind template**.
        The Summary tab is displayed. The added template is displayed in the **Associated templates** section of the **Summary** tab.
        ![]({{file name='Templating-summary-associated-templates.png'}} ?w=250,border=true)
        It is also displayed in the **Associated template** tab.
        ![]({{file name='Templating-associated-templates-tab-2templates.png'}} ?w=450,border=true)

## Rendering a document using its template

When a document has one or several templates associated, it is possible to view or download the document using the rendition(s) defined by the templates. The available renditions depend on the template you chose to use.

To view the document using a rendition, click on the corresponding rendition in the **Renditions** of the **Summary** tab.

## Publishing a document's rendition

The Template rendering addon enables to publish a rendition of the document instead of the document itself, as it is the case on a default Platform configuration. Typically, it enables to publish the PDF rendition of an office document.

**To publish a rendition of a document:**

1.  Click on the **Publish** tab of the document.
    An additional **Publish a rendition** drop down list is available beside the usual list of sections.
    ![]({{file name='Templating-Publish-tab.png'}} ?w=450,border=true)
2.  In the **Publish a rendition** drop down list, select the rendition you want to publish.
3.  Unfold the sections tree and click on the **Publish here** link corresponding to the section you want to publish the document in.
    The document's rendition is submitted to publishing and must approved using the [usual publishing process]({{page page='publishing-documents'}}).

{{#> callout type='info' }}

If you use the multi-tenant add-on at the same time, you should be aware that due to some technical limitations, models bound to a given document type are bound whatever the tenant the model is stored in.

{{/callout}}