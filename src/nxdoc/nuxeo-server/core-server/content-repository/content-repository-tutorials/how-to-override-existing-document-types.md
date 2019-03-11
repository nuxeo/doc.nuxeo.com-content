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

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th>Document type label</th>
        <th>Document type ID</th>
        <th>Inherits from</th>
        <th>Necessary schemas</th>
        <th>Necessary facets</th>
        <th>Additional comments</th>
      </tr>
      <tr>
        <td>Audio</td>
        <td>Audio</td>
        <td>Document</td>
        <td>common, dublincore, uid</td>
        <td>Audio, Commentable, Publishable, Versionable, NXTag</td>
        <td>Available when using the [DAM addon]({{page page='digital-asset-management-dam'}}).</td>
      </tr>
      <tr>
        <td>Collection</td>
        <td>Collection</td>
        <td>Document</td>
        <td>uid, dublincore, common</td>
        <td>Versionable, Collection, NotCollectionMember</td>
        <td></td>
      </tr>
      <tr>
        <td>Collections</td>
        <td>Collections</td>
        <td>Folder</td>
        <td></td>
        <td>NotCollectionMember</td>
        <td></td>
      </tr>
      <tr>
        <td>Domain</td>
        <td>Domain</td>
        <td>Folder</td>
        <td>domain</td>
        <td>SuperSpace, NotCollectionMember</td>
        <td></td>
      </tr>
      <tr>
        <td>File</td>
        <td>File</td>
        <td>Document</td>
        <td>file, files, common, dublincore, uid</td>
        <td>Commentable, Downloadable,&nbsp;HasRelatedText,&nbsp; Publishable, Versionable</td>
        <td></td>
      </tr>
      <tr>
        <td>Folder</td>
        <td>Folder</td>
        <td>Document</td>
        <td>common, dublincore</td>
        <td>Folderish</td>
        <td></td>
      </tr>
      <tr>
        <td>HiddenFolder</td>
        <td>HiddenFolder</td>
        <td>Folder</td>
        <td></td>
        <td>HiddenInNavigation</td>
        <td></td>
      </tr>
      <tr>
        <td>Note</td>
        <td>Note</td>
        <td>Document</td>
        <td>common, dublincore, files, note, uid</td>
        <td>Commentable, HasRelatedText, Publishable, Versionable</td>
        <td></td>
      </tr>
      <tr>
        <td>OrderedFolder</td>
        <td>OrderedFolder</td>
        <td>Folder</td>
        <td></td>
        <td>Orderable</td>
        <td></td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>Picture</td>
        <td>Document</td>
        <td>common, dublincore, uid</td>
        <td>Commentable, HasRelatedText, Picture, Publishable, Versionable, NXTag</td>
        <td>Available when using the [DAM addon]({{page page='digital-asset-management-dam'}}).</td>
      </tr>
      <tr>
        <td>Relation</td>
        <td>Relation</td>
        <td></td>
        <td>relation, dublincore</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Root</td>
        <td>Root</td>
        <td>Folder</td>
        <td></td>
        <td>NotCollectionMember</td>
        <td></td>
      </tr>
      <tr>
        <td>Section</td>
        <td>Section</td>
        <td>Folder</td>
        <td>file</td>
        <td>PublishSpace, SuperSpace</td>
        <td>The SuperSpace facet is required for children documents to get default notifications configured in the **Alerts** tab.</td>
      </tr>
      <tr>
        <td>SectionRoot</td>
        <td>SectionRoot</td>
        <td>Folder</td>
        <td></td>
        <td>MasterPublishSpace, SuperSpace, HiddenInCreation, NotCollectionMember</td>
        <td></td>
      </tr>
      <tr>
        <td>TemplateRoot</td>
        <td>TemplateRoot</td>
        <td>Folder</td>
        <td></td>
        <td>SuperSpace, HiddenInCreation, NotCollectionMember</td>
        <td></td>
      </tr>
      <tr>
        <td>Video</td>
        <td>Video</td>
        <td>Document</td>
        <td>common, dublincore, uid, files</td>
        <td>Commentable, Publishable, Versionable, Video, HasStoryboard, HasVideoPreview, NXTag</td>
        <td>Available when using the [DAM addon]({{page page='digital-asset-management-dam'}}).</td>
      </tr>
      <tr>
        <td>Workspace</td>
        <td>Workspace</td>
        <td>Folder</td>
        <td>webcontainer, publishing, file, files</td>
        <td>SuperSpace</td>
        <td>The SuperSpace facet is required for children documents to get default notifications configured in the **Alerts** tab.</td>
      </tr>
      <tr>
        <td>WorkspaceRoot</td>
        <td>WorkspaceRoot</td>
        <td>Folder</td>
        <td></td>
        <td>SuperSpace, HiddenInCreation, NotCollectionMember</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

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
