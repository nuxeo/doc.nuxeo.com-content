---
title: DBS
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - mongodb
    - kleturc
    - mongodb-component
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '20515468'
    ajs-parent-page-title: Persistence Architecture
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: DBS
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/DBS'
    page_id: '20517821'
    shortlink: vRM5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/vRM5AQ'
    source_link: /display/NXDOC/DBS
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-08-05 08:48'
        message: pdate lin
        version: '12'
    -
        author: Kevin Leturc
        date: '2016-08-04 15:14'
        message: ''
        version: '11'
    -
        author: Kevin Leturc
        date: '2016-08-04 13:17'
        message: ''
        version: '10'
    -
        author: Kevin Leturc
        date: '2016-08-04 12:28'
        message: ''
        version: '9'
    -
        author: Florent Guillaume
        date: '2015-12-09 15:09'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-10-14 15:17'
        message: ''
        version: '7'
    -
        author: Florent Guillaume
        date: '2015-10-13 15:41'
        message: ''
        version: '6'
    -
        author: Florent Guillaume
        date: '2015-08-11 13:59'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2015-08-11 13:40'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2014-11-04 16:09'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2014-11-04 16:09'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2014-11-04 15:56'
        message: ''
        version: '1'

---
{{! excerpt}}

DBS (Document-Based Storage) allows storage of Nuxeo documents inside a document-oriented store, like MongoDB or MarkLogic.

{{! /excerpt}}

## Basic Storage

When configured for use with MongoDB, each Nuxeo document is stored as a single MongoDB document. A sample document could look like:

```js
{
	"_id" : ObjectId("542e9bd23004722355960895"),
	"ecm:id" : "612d0632-e12a-4374-88de-d6bd005bdcdc",
	"ecm:parentId" : "399afabc-1eb5-4650-9049-b59d6da8d989",
	"ecm:primaryType" : "Workspace",
	"ecm:name" : "Records",
	"ecm:lifeCyclePolicy" : "default",
	"ecm:lifeCycleState" : "project",
	"ecm:majorVersion" : NumberLong(0),
	"ecm:minorVersion" : NumberLong(0),
	"ecm:acp" : [
		{
			"name" : "local",
			"acl" : [
				{
					"grant" : true,
					"perm" : "Everything",
					"user" : "Administrator"
				},
				{
					"grant" : true,
					"perm" : "Read",
					"user" : "members"
				}
			]
		}
	],
	"ecm:ancestorIds" : [
		"00000000-0000-0000-0000-000000000000",
		"1506bf11-4cb0-4ad4-94e3-ab0c1672c6c0",
		"399afabc-1eb5-4650-9049-b59d6da8d989"
	],
	"ecm:racl" : [
		"Administrator",
		"members"
	],
	"ecm:fulltextSimple" : "img folder green png administrator administrator records administrator records",
	"ecm:fulltextBinary" : "toto",
	"icon" : "/img/folder_green.png",
	"dc:title" : "Records",
	"dc:description" : "",
	"dc:created" : ISODate("2014-10-03T12:51:30.542Z"),
	"dc:creator" : "Administrator",
	"dc:modified" : ISODate("2014-10-03T12:51:30.542Z"),
	"dc:lastContributor" : "Administrator",
	"dc:contributors" : [
		"Administrator"
	],
	"my:attachedFile" : {
		"vignettes" : [
			{
				"content" : {
					"length" : NumberLong(4),
					"data" : "c30e7a7827dd9a8c9dd62af48e67c846",
					"mime-type" : "plain/text",
					"name" : "file.txt"
				},
				"height" : NumberLong(0),
				"width" : NumberLong(0),
				"label" : "vignettelabel"
			}
		],
		"name" : "somename"
	}
}
```

When configured for use with MarkLogic, each Nuxeo document is stored as a single MarkLogic document. A sample document could look like:

```xml
<document xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ecm__id xsi:type="xs:string">612d0632-e12a-4374-88de-d6bd005bdcdc</ecm__id>
  <ecm__parentId xsi:type="xs:string">399afabc-1eb5-4650-9049-b59d6da8d989</ecm__parentId>
  <ecm__primaryType xsi:type="xs:string">Workspace</ecm__primaryType>
  <ecm__name xsi:type="xs:string">Workspace</ecm__name>
  <ecm__lifeCyclePolicy xsi:type="xs:string">default</ecm__lifeCyclePolicy>
  <ecm__lifeCycleState xsi:type="xs:string">project</ecm__lifeCycleState>
  <ecm__majorVersion xsi:type="xs:long">0</ecm__majorVersion>
  <ecm__minorVersion xsi:type="xs:long">0</ecm__minorVersion>
  <ecm__acp>
    <ecm__acp__item>
      <name xsi:type="xs:string">local</name>
      <acl>
        <acl__item>
          <grant xsi:type="xs:boolean">true</grant>
          <perm xsi:type="xs:string">Everything</perm>
          <user xsi:type="xs:string">Administrator</user>
        </acl__item>
        <acl__item>
          <grant xsi:type="xs:boolean">true</grant>
          <perm xsi:type="xs:string">Read</perm>
          <user xsi:type="xs:string">members</user>
        </acl__item>
      </acl>
    </ecm__acp__item>
  </ecm__acp>
  <ecm__ancestorIds>
    <ecm__ancestorIds__item xsi:type="xs:string">00000000-0000-0000-0000-000000000000</ecm__ancestorIds__item>
    <ecm__ancestorIds__item xsi:type="xs:string">1506bf11-4cb0-4ad4-94e3-ab0c1672c6c0</ecm__ancestorIds__item>
    <ecm__ancestorIds__item xsi:type="xs:string">399afabc-1eb5-4650-9049-b59d6da8d989</ecm__ancestorIds__item>
  </ecm__ancestorIds>
  <ecm__racl>
    <ecm__racl__item xsi:type="xs:string">Administrator</ecm__racl__item>
    <ecm__racl__item xsi:type="xs:string">members</ecm__racl__item>
  </ecm__racl>
  <ecm__fulltextSimple xsi:type="xs:string">img folder green png administrator administrator records administrator records</ecm__fulltextSimple>
  <ecm__fulltextBinary xsi:type="xs:string">toto</ecm__fulltextBinary>
  <icon xsi:type="xs:string">/img/folder_green.png</icon>
  <dc__title xsi:type="xs:string">Records</dc__title>
  <dc__description xsi:type="xs:string"></dc__description>
  <dc__created xsi:type="xs:dateTime">2014-10-03T12:51:30.542</dc__created>
  <dc__creator xsi:type="xs:string">Administrator</dc__creator>
  <dc__modified xsi:type="xs:dateTime">2014-10-03T12:51:30.542</dc__modified>
  <dc__lastContributor xsi:type="xs:string">Administrator</dc__lastContributor>
  <dc:contributors>
    <dc__contributors__item xsi:type="xs:string">Administrator</dc__contributors__item>
  </dc:contributors>
  <my__attachedFile>
    <vignettes>
      <vignettes__item>
        <content>
          <length xsi:type="xs:long">4</length>
          <data xsi:type="xs:string">c30e7a7827dd9a8c9dd62af48e67c846</data>
          <mime-type xsi:type="xs:string">plain/text</mime-type>
          <name xsi:type="xs:string">file.txt</name>
        </content>
        <height xsi:type="xs:long">0</height>
        <width xsi:type="xs:long">0</width>
        <label xsi:type="xs:string">vignettelabel</label>
      </vignettes__item>
    </vignettes>
    <name xsi:type="xs:string">somename</name>
  </my__attachedFile>
</document>
```

### Schema Properties

For user-defined schemas (and regular Nuxeo schemas, like `dublincore`), properties are stored as you would expect in JSON (or XML for MarkLogic):

*   Regular properties directly (like `dc:title` or `dc__title`).
*   List properties as lists (like `dc:contributors` or `dc__contributors`).
*   Complex properties as JSON/XML sub-document (like `my:attachedFile` or`dc__contributors`).
*   Lists of complex properties as lists of JSON/XML sub-documents (like `my:attachedFile.vignettes` or `my__attachedFile/my__attachedFile__item/vignettes`).
*   Binaries as a JSON sub-document containing a digest value or a Blob Provider key (like `content.data` or `content/data`) and other metadata (`content.mime-type`, etc.).

### System Properties

A number of expected system properties are also present: `ecm:id`, `ecm:parentId`, `ecm:name`, `ecm:pos`, `ecm:primaryType`, `ecm:majorVersion`, etc. You'll find a full list as constants in the [`DBSDocument`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-core/nuxeo-core-storage-dbs/src/main/java/org/nuxeo/ecm/core/storage/dbs/DBSDocument.java#L82) class.

The `ecm:acp` complex property represents the ACP defined on the document.

There are also some fulltext-related properties: `ecm:fulltextSimple` and `ecm:fulltextBinary`, which are tied to a MongoDB text index.

### Search-Related Properties

A few system properties are computed from others in order to get efficient subtree searches and efficient security checks. They are:

*   `ecm:ancestorIds`: the list of ancestors for the document
*   `ecm:racl`: the list of identities having read access to the document

### Proxies

Proxies cannot be queried and retrieved with a JOIN (contrary to VCS), so they are stored as copies of the documents they point to, and are updated every time their target changes. In order to do this, some properties are maintained on proxies and proxy targets:

*   `ecm:proxyTargetId`: the target of the proxy

*   `ecm:proxyIds`: the proxies that target this document

## Storage Restrictions

Due to the nature of the MongoDB storage, we use a transaction model equivalent to Read Uncommitted, which means that a transaction may read data written but not yet committed by another transaction. This is unavoidable in most Document-Based stores, and should be taken into account by applications.

As MarkLogic relies on DBS, we are currently using the same transactional behavior.

Full-text configuration is fixed to a default useful for evaluation (all textual fields and blobs are indexed), but a production instance should use Elasticsearch with a suitable full-text configuration.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [MongoDB]({{page page='mongodb'}})
- [MarkLogic]({{page page='marklogic'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

</div></div>
