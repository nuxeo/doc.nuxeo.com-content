---
title: 'HOWTO: Override Existing Document Types'
review:
  comment: ''
  date: '2017-02-13'
  status: not-ok
details:
  howto:
    excerpt: Learn how to override an existing document type in Nuxeo Studio.
    level: Beginner
    tool: Studio
    topics: 'Document type, Override'
labels:
  - lts2016-ok
  - howto
  - document-type
  - gcarlin
  - excerpt
  - lts2017-ok
confluence:
  ajs-parent-page-id: '950287'
  ajs-parent-page-title: Content Repository
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: How+to+Override+Existing+Document+Types
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Override+Existing+Document+Types'
  page_id: '6030167'
  shortlink: VwNc
  shortlink_source: 'https://doc.nuxeo.com/x/VwNc'
  source_link: /display/NXDOC/How+to+Override+Existing+Document+Types
tree_item_index: 1100
history:
  - author: Manon Lumeau
    date: '2015-10-29 16:15'
    message: ''
    version: '17'
  - author: Solen Guitter
    date: '2014-12-01 21:47'
    message: ''
    version: '16'
  - author: Manon Lumeau
    date: '2014-09-09 11:13'
    message: ''
    version: '15'
  - author: Manon Lumeau
    date: '2014-09-08 17:55'
    message: ''
    version: '14'
  - author: Manon Lumeau
    date: '2014-09-08 16:40'
    message: ''
    version: '13'
  - author: Solen Guitter
    date: '2014-06-27 13:49'
    message: ''
    version: '12'
  - author: Solen Guitter
    date: '2014-06-27 13:48'
    message: format
    version: '11'
  - author: Solen Guitter
    date: '2014-01-24 17:24'
    message: ''
    version: '10'
  - author: Solen Guitter
    date: '2013-09-02 14:46'
    message: ''
    version: '9'
  - author: Solen Guitter
    date: '2011-09-06 16:33'
    message: Migrated to Confluence 4.0
    version: '8'
  - author: Solen Guitter
    date: '2011-09-06 16:33'
    message: Added related tutorials
    version: '7'
  - author: Solen Guitter
    date: '2011-07-19 16:56'
    message: format
    version: '6'
  - author: Anahide Tchertchian
    date: '2011-03-15 17:20'
    message: ''
    version: '5'
  - author: Alain Escaffre
    date: '2011-03-15 10:16'
    message: ''
    version: '4'
  - author: Alain Escaffre
    date: '2011-03-15 10:12'
    message: ''
    version: '3'
  - author: Alain Escaffre
    date: '2011-03-15 10:11'
    message: ''
    version: '2'
  - author: Alain Escaffre
    date: '2011-03-15 09:27'
    message: ''
    version: '1'
---

{{! excerpt}}

Any built-in document type can be overridden: you just have to use the good ID, inherit the good type and add some necessary schemas and facets. We provide a table that should give you all necessary information.

{{! /excerpt}}

When inheriting from a document type, you inherit its schemas and facets. For instance, when inheriting from Document, you get the `dublincore` schema (that holds the title, description, modification date, ... metadata), as well as `common` (that holds the size of the doc) and `uid` (that holds version information and ID).

{{#> callout type='note' heading='Deployment Mode'}}

Be careful to select the **Override** deployment mode from the **Advanced Configuration** section on the **Definition** tab of your document type. Should you leave **Merge**, you would get both your customizations and the default behavior of the document type instead of only your own customizations.

{{/callout}}

Below are the document types provided by the default Nuxeo Platform, the Document Management and Digital Asset Management modules. Don't hesitate to give feedback if you encounter troubles.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

Document type label

</th><th colspan="1">

Document type ID

</th><th colspan="1">

Inherits from

</th><th colspan="1">

Necessary schemas

</th><th colspan="1">

Necessary facets

</th><th colspan="1">

Additional comments

</th></tr><tr><td colspan="1">Audio</td><td colspan="1">Audio</td><td colspan="1">Document</td><td colspan="1">common, dublincore, uid</td><td colspan="1">Audio, Commentable, Publishable, Versionable</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Domain</td><td colspan="1">Domain</td><td colspan="1">Folder</td><td colspan="1">domain</td><td colspan="1">

SuperSpace

</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

File

</td><td colspan="1">

File

</td><td colspan="1">

Document

</td><td colspan="1">

file, files, common, dublincore

</td><td colspan="1">

Commentable, Downloadable,&nbsp;HasRelatedText,&nbsp; Publishable, Versionable

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Folder

</td><td colspan="1">

Folder

</td><td colspan="1">

Document

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Folderish

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">Forum</td><td colspan="1">Forum</td><td colspan="1">Folder</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Note</td><td colspan="1">Note</td><td colspan="1">Document</td><td colspan="1">common, dublincore, files, note, uid</td><td colspan="1">

Commentable, HasRelatedText, Publishable, Versionable

</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

OrderedFolder

</td><td colspan="1">

OrderedFolder

</td><td colspan="1">

Folder

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

Orderable

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">Picture</td><td colspan="1">Picture</td><td colspan="1">Document</td><td colspan="1">common, dublincore, uid</td><td colspan="1">Commentable, HasRelatedText, Picture, Publishable, Versionable</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Post</td><td colspan="1">Post</td><td colspan="1">Document</td><td colspan="1">common, dublincore, post</td><td colspan="1">Commentable, HiddenInNavigation</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

Section

</td><td colspan="1">

Section

</td><td colspan="1">

Folder

</td><td colspan="1">

file

</td><td colspan="1">

PublishSpace, SuperSpace

</td><td colspan="1">

The SuperSpace facet is required for children documents to get default notifications configured in the **Alerts** tab.

</td></tr><tr><td colspan="1">SectionRoot</td><td colspan="1">SectionRoot</td><td colspan="1">Folder</td><td colspan="1">&nbsp;</td><td colspan="1">MasterPublishSpace, SuperSpace</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">TemplateRoot</td><td colspan="1">TemplateRoot</td><td colspan="1">Folder</td><td colspan="1">&nbsp;</td><td colspan="1">SuperSpace</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Thread</td><td colspan="1">Thread</td><td colspan="1">Document</td><td colspan="1">common, dublincore, thread</td><td colspan="1">Commentable</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Video</td><td colspan="1">Video</td><td colspan="1">Document</td><td colspan="1">common, dublincore, uid, files</td><td colspan="1">Commentable, Publishable, Versionable, Video, HasStoryboard, HasVideoPreview</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

Workspace

</td><td colspan="1">

Workspace

</td><td colspan="1">

Folder

</td><td colspan="1">

webcontainer, publishing, file, files

</td><td colspan="1">

SuperSpace

</td><td colspan="1">

The SuperSpace facet is required for children documents to get default notifications configured in the 'Alerts' tab.

</td></tr><tr><td colspan="1">

WorkspaceRoot

</td><td colspan="1">

WorkspaceRoot

</td><td colspan="1">

Folder

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

SuperSpace

</td><td colspan="1">

&nbsp;

</td>

</tr></tbody></table></div>

{{#> callout type='info' }}

The Alert tab is currently only available on JSF UI. It is planned to be integrated in Nuxeo Web UI.

{{/callout}}

{{#> callout type='tip' }}

You can also browse the [contributions to the Type extension](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.core.schema.TypeService--doctype) for more document types.

{{/callout}}

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Popular How-Tos'}}
- [How to Add Complex Fields on Your Document Type]({{page page='how-to-add-complex-fields-on-your-document-type'}})
- [How to use Trash Feature]({{page page='how-to-use-trash-feature'}})
- [How-To Index]({{page page='how-to-index'}})
{{/panel}}
</div>
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}
- [Documents in Nuxeo Studio]({{page space='studio' page='documents'}})
- [Content Repository]({{page page='content-repository'}})
- [Available Facets]({{page page='available-facets'}})
- [Lifecycle]({{page space='studio' page='life-cycle'}})
- [Schemas]({{page space='studio' page='schemas'}})
{{/panel}}
</div>
</div>
