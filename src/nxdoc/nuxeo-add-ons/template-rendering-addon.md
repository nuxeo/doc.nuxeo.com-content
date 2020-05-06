---
title: Template Rendering Addon
description: 'The template rendering addon is a set of two addons available from the Nuxeo Marketplace: Nuxeo Template Rendering and Nuxeo Template Rendering Samples.'
review:
    comment: ''
    date: '2019-10-26'
    status: ok
labels:
    - lts2016-ok
    - template-rendering
    - gbarata
    - document-template
    - template-rendering-addon-component
    - multiexcerpt-include
    - lts2017-ok
    - lts2019-ok
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Template+Rendering+Addon
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Template+Rendering+Addon'
    page_id: '11044085'
    shortlink: 9YSo
    shortlink_source: 'https://doc.nuxeo.com/x/9YSo'
    source_link: /display/NXDOC/Template+Rendering+Addon
tree_item_index: 3500
history:
    -
        author: Solen Guitter
        date: '2016-09-01 10:01'
        message: ''
        version: '29'
    -
        author: Vincent Dutat
        date: '2016-07-26 17:31'
        message: ''
        version: '28'
    -
        author: Karin Touchie
        date: '2016-05-27 09:51'
        message: ''
        version: '27'
    -
        author: Karin Touchie
        date: '2016-05-27 09:50'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2015-12-10 13:23'
        message: Adding borders on pictures
        version: '25'
    -
        author: Bertrand Chauvin
        date: '2015-12-09 10:32'
        message: mention old doctypes are read only
        version: '24'
    -
        author: Bertrand Chauvin
        date: '2015-12-09 09:42'
        message: Mention template rendering samples and its content
        version: '23'
    -
        author: Guillaume Renard
        date: '2015-12-08 18:24'
        message: ''
        version: '22'
    -
        author: Guillaume Renard
        date: '2015-12-08 18:08'
        message: ''
        version: '21'
    -
        author: Guillaume Renard
        date: '2015-12-08 16:49'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2015-11-10 08:42'
        message: ''
        version: '19'
    -
        author: Bertrand Chauvin
        date: '2015-11-06 10:03'
        message: Added details about JXLS
        version: '18'
    -
        author: Bertrand Chauvin
        date: '2015-11-06 09:44'
        message: Upate xdocreport links
        version: '17'
    -
        author: Thierry Martins
        date: '2015-11-05 15:40'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-08-27 13:20'
        message: ''
        version: '15'
    -
        author: Bertrand Chauvin
        date: '2015-07-15 12:33'
        message: Added explanations on options
        version: '14'
    -
        author: Manon Lumeau
        date: '2014-12-15 17:44'
        message: ''
        version: '13'
    -
        author: Manon Lumeau
        date: '2014-12-15 17:42'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2014-12-15 17:39'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-12-15 17:34'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-12-15 17:31'
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

{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University:</br>
[Expert Session on Template Rendering Addon](https://university.nuxeo.com/learn/course/external/view/elearning/188/ExpertSession-TemplateRendering)
{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Template Rendering/university-template-rendering.png
    name: university-template-rendering.png
    addins#screenshot#up_to_date
--}}
![university-template-rendering.png](nx_asset://7cb24a5f-56aa-441c-ab4c-079d984485dc ?w=450,border=true)
{{/callout}}

{{#> callout type='info' heading='Template Rendering with Nuxeo JSF UI and Nuxeo Web UI'}}
**Nuxeo JSF UI** is needed to configure the document template. As an end user you don't need to configure it as the rendering button is exposed in **Nuxeo Web UI** in the Document Action Toolbar.
{{/callout}}

## Installation

{{{multiexcerpt 'mp-installation-easy' page='Generic Multi-Excerpts'}}}

## Functional Overview

The template rendering addon is a set of two addons available from the Nuxeo Marketplace: the [Template Rendering](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-template-rendering "Template Rendering") itself and the [Template Rendering Samples](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-template-rendering-samples "Template Rendering Samples").

### Nuxeo Template Rendering

The template rendering addon brings core functionalities that enable users to create documents from a template, with the content being automatically extracted from Nuxeo, and to have an automated rendering generated from a set of user-defined preferences.

This addon includes two new template document types, called "Template" and "Web template".

### Nuxeo Template Rendering Samples

The template rendering samples addon lets you discover through an inspiring demo how the template rendering addon can improve your everyday business processes. This demo showcases the BigCorp company, generating financial reports for internal use, and case studies demonstrating their expertise for potential new customers. All being achieved by extracting their relevant content into office templates on the fly.

This addon depends on Nuxeo Template Rendering. It includes:

- New document types:
    - Business oriented document types used for the demo and configured using [Studio]({{page space='studio'}}):
        - **nxtrPortfolio**: a collection-based document type, used to reference</span> projects and generate case studies from the content it references.
        - **nxtrProject**: a file-based document type, used to generate financial reports about the project's health and case studies when referenced into a portfolio.</span>
        - **nxtrSamplesContainer**: a workspace-based document type, that contains projects and portfolios.
    - Two file-based document types, provided as read only (you cannot create more using the Web UI by default) and used to demonstrate advanced raw examples:
        - "Customer reference"
        - "Statement reference"
- Templates with template attachments, leveraging the Template document type, in the "Templates" space:
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Template Rendering/template-rendering-webui.png
    name: template-rendering-webui.png
    addins#screenshot#up_to_date
  --}}
  ![template-rendering-webui.png](nx_asset://02223567-64f5-4944-9d34-557799915a3c ?w=650,border=true)
- Documents based on these templates, showing the result of the different template rendering options, in the "Discover Customization Examples" container:
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Template Rendering/template-rendering-webui2.png
    name: template-rendering-webui2.png
    addins#screenshot#up_to_date
  --}}
  ![template-rendering-webui2.png](nx_asset://fc91d5dd-6bff-43bf-9a1f-71809946cb13 ?w=650,border=true)

### How Template Rendering Works

The principle of the template rendering feature is the following:

1. A template file (Word file, OpenOffice.org file,...) is created outside Nuxeo. This file holds some fields that will automatically be filled in with content defined in Nuxeo.
2. A Nuxeo user creates a Nuxeo template, to which he attaches the template file (or fills in the Note content in case of a web template). He fills in the template properties, that will define under which conditions the template is available: for which document types, under which circumstances...
3. When users in Nuxeo create a new document for which a template is available, they can use it. If some template elements are left to be edited or filled in by the document's contributors, they can set them.

There are two types of Nuxeo templates:
- the "Template" will have an attached file in which some [values](#variables) are defined to be Nuxeo values.
- the "Web template" doesn't have an attachment. Its content is defined in a Note field.

#### Creating a Template File

The template file is the file that will be used to generate the rendering of the Nuxeo document and will be completed automatically with the defined Nuxeo properties. This template file can be:

- an office document (.docx, .odt, .xls, .ods formats are supported for now),
- an HTML file,
- a XML file.

##### Standard Steps to Create a Template File

1. Create a regular Office, HTML or XML file with your favorite tool.
2. In the document, put variables in `Input Fields` where you want to use information from Nuxeo (see below).</br>
    You may want to use [XDocReport](https://github.com/opensagres/xdocreport) for .docx or .odt formats, [JXLS](http://jxls.sourceforge.net/) for .xls and .ods formats (see links below).
3. When the template is ready, [create the template document in Nuxeo](#creating-the-template-document) and attach the template to it.

##### Create a Template File with MS Office

**To render a document property**:

1. In MS Office, click on **Insert** > **Field**
2. Select **Mail Merge** in the Category list, and **MergeField** in the Field names list.
3. Keep the `MERGEFIELD` value at the beginning of the text input, and add the property you need to render `${doc['dc:title']}` for example.
  {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Template Rendering/template-rendering-template-file.png
    name: template-rendering-template-file.png
    addins#screenshot#up_to_date
  --}}
  ![template-rendering-template-file.png](nx_asset://0df401bd-a061-42e7-95c6-28577d65803d ?w=650,border=true)

**To render a picture**:

1. In MS Office, insert a picture as a placeholder.
2. Click on **Insert** > **Link** > **Bookmark**.
3. Set a variable, then **Go To** and **Close**.
4. Then, when your template document is created in Nuxeo, in the Templates folder, navigate to the **Template Configuration** and open the **Parameter** section.
5. Create a parameter with the same name as in Step 3, with **Type = Picture Binding** and the **Property XPath** corresponding to the Nuxeo property holding the binary (picture) that should be inserted in your document (as `file:content` for example)

{{> anchor 'variables'}}
Here are a few examples of the most common variables:
- `${doc.title}`: gets the title of the Nuxeo document.
- `${doc['dc:description']}`: gets the content of the Description field of the Nuxeo document.
- `${doc['dc:modified']}`: gets the last modification date of the Nuxeo document. You can define how the date should be formatted by adding `?date` to display only the date, or `?time` to display only the time. By default, the modification date displays both the date and the time.
- `${doc.versionLabel}`: displays the version number.
- `${auditEntries.eventId}`: displays the events listed in the document's history. `${auditEntries.eventDate}` displays the date at which the events took place, `${auditEntries.principalName}` the name of the user who did the action, `${auditEntries.comment}` the comment typed by the user.

{{#> callout type='tip' heading='More resources to help users create the template file'}}
-More information about the variables available (including functions) in the [Quick User Guide](https://github.com/nuxeo/nuxeo/blob/master/modules/platform/nuxeo-template-rendering/QuickUserGuide.md) on the Nuxeo GitHub repository.</br>
-XDocReport [overview](https://github.com/opensagres/xdocreport/wiki/Overview) and [.docx format user guide](https://github.com/opensagres/xdocreport/wiki/DocxDesignReport) / [.odt format user guide](https://github.com/opensagres/xdocreport/wiki/ODTDesignReport): XDocReport is a tool that enables to insert fields in MS Office and OpenOffice/LibreOffice text files.</br>
-[JXLS website](http://jxls.sourceforge.net): JXLS is a tool that enables to insert fields in MS Office and OpenOffice/LibreOffice spreadsheets.</br>
-[Template Rendering README file](https://github.com/nuxeo/nuxeo/blob/master/modules/platform/nuxeo-template-rendering/ReadMe.md) on the Nuxeo GitHub repository.
{{/callout}}

#### Creating the Template Document

{{#> callout type='warning' heading='Nuxeo JSF UI'}}
The template document is configured in Nuxeo JSF UI. Consequently, you need to install `nuxeo-jsf-ui` addon.
{{/callout}}

When the template file is done, you need to create a template document and attach the template file to it.
Templates can be created in the Templates space, in workspaces and in folders.

**To create a template document:**

1. In the **Content** tab of the workspace or template space, click on the **New Document** button.
2. On the window **Available document types**, click on the desired document.
3. Fill in the template document's creation form (see below for template's properties).
4. Click on the **Create** button.</br>
  The **Summary** tab of the template document is displayed.</br>
  You can now [create documents based on this template](#creating-a-document-based-on-a-template).

**Template properties**

<div class="table-scroll">
  <table class="hover">
  <tbody>
  <tr>
    <th colspan="1">Field</th>
    <th colspan="1">Description</th>
  </tr>
  <tr>
    <td colspan="1">Title</td>
    <td colspan="1">Type the template title</td>
  </tr>
  <tr>
    <td colspan="1">Description</td>
    <td colspan="1">What the template is about</td>
  </tr>
  <tr>
    <td colspan="1">Content</td>
    <td colspan="1">
    - For a Template: the attached template file (.odt, .docx, etc file).</br>
    - For a web template: The Note that will hold the content of the template. Typically this would be HTML text.
    </td>
  </tr>
  <tr>
    <th colspan="1">Simple mode</th>
    <th colspan="1"></th>
    </tr>
  <tr>
    <td colspan="1">Template usage</td>
    <td colspan="1">Select what the template will be used for:
    - Office template:
    - Office template with PDF rendering:
    - Create a rendition:
    </td>
  </tr>
  <tr>
    <th colspan="1">Advanced mode</th>
    <th colspan="1"></th>
  </tr>
  <tr>
    <td colspan="1">Nature</td>
    <td colspan="1">Select which nature will the document based on the template automatically get.</td>
  </tr>
  <tr>
    <td colspan="1">Document types for which the template is available</td>
    <td colspan="1">Select the document types for which this template will be suggested.</td>
  </tr>
  <tr>
    <td colspan="1">Allow parameters override</td>
    <td colspan="1">Check if the user should be able to change the parameters defined here.</td>
  </tr>
  <tr>
    <td colspan="1">Template processor</td>
    <td colspan="1">Select how are the template file fields processed to use Nuxeo data. Automatic should work for most file formats.</br>
    XDocReport is specifically targeted at .docx and .odt formats.</br>
    JXLS is specifically targeted at spreadsheet file formats: .xls and .ods.</td>
  </tr>
  <tr>
    <td colspan="1">Rendition</td>
    <td colspan="1">Select the views that will be available for the template.</td>
  </tr>
  <tr>
    <td colspan="1">Document types automatically associated to template</td>
    <td colspan="1">Select the document types for which the template file will automatically be attached.</td>
  </tr>
  <tr>
    <td colspan="1">Template is editable on the document (office template)</td>
    <td colspan="1">If checked, the file will be copied into the file:content metadata. This copy is editable and will be used to render the document instead of the one in the templates folder.</td>
  </tr>
  <tr>
    <td colspan="1">Rendering output format</td>
    <td colspan="1">Select the rendition's format. If the chosen format is different from the template's file format, the rendition will be converted once generated.</td>
  </tr>
  </tbody>
  </table>
</div>

#### Using Template Documents

A document can use one or several templates. If it is associated with several templates, the first template associated is considered as the main template and is used as content. The other associated templates are used to generate additional renditions of the document.

When a document is using a template, an additional tab is available on the document, called **Associated templates**.
There are several ways to associate a template to a document.

##### Creating a Document Based on a Template

To create a new document based on a template, users need to [use the **New document** button]({{page space='userdoc' page='creating-content'}}#creating-a-document-using-the-new-document-button). If a template is available for the selected document type, an additional option is then available for the **Content** field, allowing users to select which template to use.

![]({{file name='select_template.png'}} ?w=500,h=122,border=true)

When the document is created, the template is used as content. An additional **Associated templates** tab is available.

Users can then:
- [associate other templates to the document](#associating-a-template-to-a-document),
- [render the document using the template(s)](#rendering-a-document-using-its-template),
- [publish the document using the template's available renditions](#publishing-a-documents-rendition).

##### Associating a Template to a Document

It is possible to associate a document with a template after the document's creation.

**To associate a document to a template:**

- If the document has no template associated yet:
  1. Click on the icon ![]({{file name='doctemplate.png'}}).
  2. Select the template to use and click on **Bind template**.
    ![]({{file name='attach_template.png'}} ?w=397,h=381,border=true)
- If the document already has at least one associated template:
  1. Click on the **Associated templates** tab.
  2. Click on the link **Add a template**.
  3. Select the new template to associate with the document and click on the button **Bind template**.
    The Summary tab is displayed. The added template is displayed in the **Associated templates** section of the **Summary** tab.
    ![]({{file name='associated_template.png'}} ?w=250,h=138,border=true)
    It is also displayed in the **Associated template** tab.
    ![]({{file name='associated_template_tab.png'}} ?w=450,h=221,border=true)

#### Rendering a Document Using Its Template

When a document has one or several templates associated, it is possible to view or download the document using the rendition(s) defined by the templates. The available renditions depend on the template you chose to use.

To view the document using a rendition, click on the corresponding rendition in the **Renditions** of the **Summary** tab.

#### Publishing a Document's Rendition

The Template rendering addon enables to publish a rendition of the document instead of the document itself, as it is the case on a default Platform configuration. Typically, it enables to publish the PDF rendition of an office document.

**To publish a rendition of a document:**

1. Click on the **Publish** tab of the document.
  An additional **Publish a rendition** drop down list is available beside the usual list of sections.
  ![]({{file name='publish_tab.png'}} ?w=450,h=160,border=true)
2. In the **Publish a rendition** drop down list, select the rendition you want to publish.
3. Unfold the sections tree and click on the **Publish here** link corresponding to the section you want to publish the document in.
    The document's rendition is submitted to publishing and must approved using the [usual publishing process]({{page space='userdoc' page='publishing-content'}}).

{{#> callout type='info' }}
If you use the multi-tenant addon at the same time, you should be aware that due to some technical limitations, models bound to a given document type are bound whatever the tenant the model is stored in.
{{/callout}}

## Technical Overview

This set of plugins provides a way to associate a Nuxeo Document with a Template.

The Template can be of several kind (MS Word XML, OpenOffice text, OpenOffice Calc, MS Excel, Freemarker, XSLT...) This Template is stored as a Nuxeo Document and then associated to an other Document.

A given Document can be associated to 0, 1 or several Templates.

The Templates are used to render the associated document. Depending on the Template type, a different Template Processor will be used and the resulting rendering can be :

- an HTML document
- an XML document
- an OpenOffice document
- an MS Office document (Office Open XML)

Each template processor has his own logic for rendering a Document from a Template :

- raw processing (FreeMarker or XSLT)
- merge fields replacement (MS Office / OpenOffice)

### Sample Use Cases

#### Office Templating

This is the most direct use case.

**The Template**

The template is an MS Word/Excel or OpenOffice Write/Calc file.

This file can be your company model (with your logo, colors...), but can also contains merge-fields that will be replaced by the target document data :

- title
- version
- author
- history
- picture
- ...

**The associated document**

The associated document can be any Document that can contain a file. On first association or at creation time, the main file of the document will be replaced by the template one : it is initialized from the template file.

This means you can continue edit it's content, but this file is dynamic and you can render it to get the final file with all meta-data and presentation stuffs up to date (title, description, author, history...).

### Web Rendering

**The Template**

The Template can be for example a FreeMarker template. It can reference any attribute of the target Document, but also history in order to provide an HTML view of it.

**The associated document**

The associated document can be any Document type and the Freemarker template will be used to provide an HTML view on it

**Example of URLs**

The URL to access the document with the template applied is the following:

`http://NUXEO_SERVER/nuxeo/nxtemplate/**path_to_the_document**@**template_name**`

ex:

`http://localhost:8080/nuxeo/nxtemplate/default/default-domain/UserWorkspaces/Administrator/MyDocument@MyTemplate`

or for a published document:

`http://localhost:8080/nuxeo/nxtemplate/default/default-domain/sections/MySection/MyDocument@MyTemplate`

### Composition

**The Template**

The template can be a corporate template with logo, table of contents, picture and content in MS Word or OpenOffice format. The template contains simple merge fields (like in Office templating), but also a _content_ field.

**The associated Document**

The associated document can be anything that can be HTML rendered (Note, WebPage, Office document...).

The rendering will replace the merge fields but also merge the HTML content of the document inside the content field of the template.

This can be used to:

- render an HTML/Markdown note inside an Office Template (i.e. adding a cover page, a TOC, page numbering...)
- fill a mail or form template with formatted text

### Templates and Renditions

Template can be used to provide a Rendition. This means that for example, when you publish a document, you can in fact publish the rendering of the document using a template.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Nuxeo Studio Community Cookbook'}}

[Update the Default Behaviour of the Template Rendering Output](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/modeler-tips-tricks#update-the-default-behaviour-of-the-template-rendering-output-format)

{{/panel}}
</div>
<div class="column medium-6">
</div>
</div>
