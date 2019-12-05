---
title: URLs for Files
review:
    comment: ''
    date: '2019-12-05'
    status: ok
labels:
    - content-review-lts2016
    - url
    - url-codec-component
    - atchertchian
    - blob-manager-component
    - multiexcerpt
    - content-review-lts2017
    - jsf-ui
confluence:
    ajs-parent-page-id: '7209351'
    ajs-parent-page-title: Navigation URLs
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: URLs+for+Files
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/URLs+for+Files'
    page_id: '3343546'
    shortlink: ugQz
    shortlink_source: 'https://doc.nuxeo.com/x/ugQz'
    source_link: /display/NXDOC/URLs+for+Files
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-08-31 15:52'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2015-12-22 11:12'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2015-10-12 14:34'
        message: ''
        version: '25'
    -
        author: Anahide Tchertchian
        date: '2014-12-03 14:19'
        message: 'NXDOC-228: move content about file URLs withn JF context'
        version: '24'
    -
        author: Solen Guitter
        date: '2014-01-23 18:27'
        message: Formatting
        version: '23'
    -
        author: Solen Guitter
        date: '2013-09-04 18:57'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2013-07-31 12:23'
        message: Added related topics
        version: '21'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 17:36'
        message: Migrated to Confluence 4.0
        version: '20'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 17:36'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 17:35'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'
---

## Generic File URLs

You can read the [File Storage]({{page space='nxdoc' page='file-storage''}}) page to use all non-UI specific file URLs.

## Producing File URLs from JSF Templates

For a single file, in schema "file", where blob field is named "file" and file name field is named "filename":

```xml
<nxh:outputLink
  value="#{nxd:fileUrl('downloadFile', currentDocument, field.fullName, currentDocument.file.filename)}">
  <nxh:graphicImage
    value="#{nxd:fileIconPath(currentDocument[field.schemaName][field.fieldName])}"
    rendered="#{! empty nxd:fileIconPath(currentDocument[field.schemaName][field.fieldName])}" />
  <nxh:outputText value="#{currentDocument.file.filename}" />
</nxh:outputLink>

```

For a list of files, in schema "files", where list name is "files" and in each item, blob field is named "file" and file name field is named "filename":

```xml
<nxu:inputList value="#{currentDocument.files.files}" model="model"
rendered="#{not empty currentDocument.files.files}">
  <nxh:outputLink
    value="#{nxd:complexFileUrl('downloadFile', currentDocument, 'files:files', model.rowIndex, 'file', currentDocument.files.files[model.rowIndex].filename)}">
    <nxh:graphicImage
      value="#{nxd:fileIconPath(currentDocument.files.files[model.rowIndex].file)}"
      rendered="#{! empty nxd:fileIconPath(currentDocument.files.files[model.rowIndex].file)}" />
    <nxh:outputText value="#{currentDocument.files.files[model.rowIndex].filename}" />
  </nxh:outputLink>
  <t:htmlTag value="br" />
</nxu:inputList>

```

This gives you get URLs of the form:

```
http://localhost:8080/nuxeo/nxfile/default/8f5aca13-e9d9-4b7b-a1d9-a1dcd74cc709/blobholder:0/mainfile.jpg
http://localhost:8080/nuxeo/nxfile/default/47ad14f2-c7a6-4a3f-8e4b-6c2cf1458f5a/files:files/0/file/firstfile.jpg

```

Namespaces:

```
xmlns:t="http://myfaces.apache.org/tomahawk"
xmlns:nxh="http://nuxeo.org/nxweb/html"
xmlns:nxl="http://nuxeo.org/nxforms/layout"
xmlns:nxu="http://nuxeo.org/nxweb/util"

```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related topics in this documentation'}}

- [Default URL Patterns]({{page page='default-url-patterns'}})
- [Navigation URLs]({{page page='navigation-urls'}})

  {{/panel}}
</div>

<div class="column medium-6">
{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [EML Previewer](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/eml-previewer)
- [QR Code Integration](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/qr-code)

{{/panel}}
</div>
</div>
