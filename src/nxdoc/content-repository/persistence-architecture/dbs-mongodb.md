---
title: DBS - MongoDB
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '22380769'
    ajs-parent-page-title: Persistence Architecture
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: DBS+-+MongoDB
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/DBS+-+MongoDB'
    page_id: '22380879'
    shortlink: T4FVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/T4FVAQ'
    source_link: /display/NXDOC60/DBS+-+MongoDB
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:03'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2015-08-11 14:05'
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

DBS (Document-Based Storage) allows storage of Nuxeo documents inside a document-oriented store, like MongoDB.

{{! /excerpt}}

&nbsp;

## Basic Storage

When configured for use with MongoDB, each Nuxeo document is stored as a single MongoDB document.

A sample document could look like:

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

### Schema Properties

For user-defined schemas (and regular Nuxeo schemas, like dublincore), properties are stored as you would expect in JSON:

*   regular properties directly (like `dc:title`)
*   list properties as lists (like `dc:contributors`)
*   complex properties as JSON sub-document (like `my:attachedFile`)
*   lists of complex properties as lists of JSON sub-documents (like&nbsp;`my:attachedFile.vignettes`)
*   binaries as a digest value (like `my:attachedFile.vignettes[0].content.data`)

### System Properties

A number of expected system properties are also present: `ecm:id`, `ecm:parentId`, `ecm:name`, `ecm:pos`,&nbsp;`ecm:primaryType`, `ecm:majorVersion`, etc. You'll find a full list as constants in the [`DBSDocument`](https://github.com/nuxeo/nuxeo-core/blob/release-6.0/nuxeo-core-storage-dbs/src/main/java/org/nuxeo/ecm/core/storage/dbs/DBSDocument.java#L102) class.

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

Due to the nature of the MongoDB storage, we use a transaction model equivalent to READ UNCOMMITTED, which means that a transaction may read data written but not yet committed by another transaction.

Full-text configuration is fixed to a default useful for evaluation (all textual fields and blobs are indexed), but a production instance should use Elasticsearch with a suitable full-text configuration.

### Not Yet Implemented

The following features are planned for a later Nuxeo version but are not implemented in Nuxeo Platform 6.0:

*   binary storage configuration is fixed to the default binary storage (filesystem) ([NXP-17051](https://jira.nuxeo.com/browse/NXP-17051)),
*   tags aren't supported ([NXP-17670](https://jira.nuxeo.com/browse/NXP-17670)),
*   document locking is not completely atomic ([NXP-17671](https://jira.nuxeo.com/browse/NXP-17671)),
*   transaction rollback is not supported ([NXP-17672](https://jira.nuxeo.com/browse/NXP-17672)).

&nbsp;

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

*   [DBS - MongoDB Configuration]({{page space='admindoc60' page='dbs-mongodb-configuration'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>