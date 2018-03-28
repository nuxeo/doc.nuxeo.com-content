---
title: Nuxeo Server 10.1 Fast Track Release Notes
review:
    comment: ''
    date: '2018-03-19'
    status: ok
labels:
    - lts2017-ok
    - release-notes
toc: true
tree_item_index: 10000

---
This page relates to the release notes of Nuxeo Server and related addons for the 10.10 cycle, a.k.a LTS 2018 cycle. It will list the improvements and features that are successively shipped with the 10.1, 10.2, 10.3 and LTS 2018 releases. Evolutions are grouped by components.

You can also find detailed JIRA release notes:

- [10.1 JIRA release notes](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=18634)

We also provide [instructions for upgrading]({{page version='' space='nxdoc' page='upgrade-from-lts-2017-to-10.1'}}) to the latest release.

## Nuxeo Server

<!--- ### Runtime  -->

### Core Repository


#### Trash, Untrash and EmptyTrash Operations {{since '10.1'}}

Two new operations `TrashDocument` and `UntrashDocument` have been added.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24282](https://jira.nuxeo.com/browse/NXP-24282) and [NXP-24281](https://jira.nuxeo.com/browse/NXP-24281).

#### New firstAccessibleAncestor REST API Enricher

It is now possible to get the closest document's ancestor of a document using the `firstAccessibleAncestor` JSON Enricher.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24282](https://jira.nuxeo.com/browse/NXP-24282)

#### Servlet API 3.1 {{since '10.1'}}

Servlet API 3.1 is now used in Nuxeo code.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24386](https://jira.nuxeo.com/browse/NXP-24386).

### Core Storage

#### KMS Keys Support on S3 Binary Store {{since '10.1'}}

The support for [KMS keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/kms-using-sdks.html#kms-using-sdks-java) for S3 Server-Side Encryption is added.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-22949](https://jira.nuxeo.com/browse/NXP-22949).

 <!--- ### Core Events  -->

<!--- ### Directory -->

### Workflow

#### More Properties on the Task Object {{since '10.1'}}
When using the rest api, the JSON structure of a Task object now also includes:
- the workflow initiator
- the workflow title
- the workflow life cycle state
- the graph route URL

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24476](https://jira.nuxeo.com/browse/NXP-24476).

<!--- ### Nuxeo Streams -->

### WorkManager

#### Error Event After Successive Failures on a Work {{since '10.1'}}

An event `workFailed` is now fired when a work fails several times.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24126](https://jira.nuxeo.com/browse/NXP-24126).

###  PubSub

#### PubSub Service on Nuxeo Stream {{since '10.1'}}

An implementation of the PubSub service has been provided using Nuxeo Stream. This allows to not rely on Redis for this service that is notably used for cache syncing on the repository in a cluster, as well as for acquiring locks on documents.
To use it you can apply the following configuration in nuxeo.conf:

```
nuxeo.pubsub.provider=stream
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23799](https://jira.nuxeo.com/browse/NXP-23799).

### Audit

#### STARTSWITH Operator Available for All Audit Backend (SQL, MongoDB and Elasticsearch){{since '10.1'}}

Following introduction of `AuditBackend#queryLogs(AuditQueryBuilder)`, we now have an easy way to query audit. We introduced in 10.1 the STARTSWITH operator, we could use it as below:

```
auditBackend.queryLogs(new AuditQueryBuilder().predicates( //
                Predicates.eq(LOG_EVENT_ID, "SOMETHING"),
                Predicates.startsWith(LOG_DOC_PATH, "/myFolder")));
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24386](https://jira.nuxeo.com/browse/NXP-24396).

<!--- ### CMIS -->

### Query

#### NXQL `ecm:isTrashed` Support

Following evolutions on the trash service, the NXQL property `ecm:isTrashed` has been added to be able to filter queries on trashed or not trashed documents.

#### Some Built-In Page Provides Moved to Elasticsearch {{since '10.1'}}

`REST_API_SEARCH_ADAPTER` and `all_collections` page providers have been added to the default list of page providers provided by Elasticsearch. If you have defined your own `elasticsearch.override.pageproviders` then it is recommended to add those two to your list.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24346](https://jira.nuxeo.com/browse/NXP-24346).

<!--- ### Conversion -->

<!--- ### Rendition -->

### Elasticsearch

#### Support of X-Pack {{since '10.1'}}

The use of Elasticsearch X-Pack is now allowed, [see documentation]({{page version='' space='nxdoc' page='elasticsearch-setup'}}#advanced-rest-client-configuration).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23048](https://jira.nuxeo.com/browse/NXP-23048).

<!--- ### Tag Service  -->

### Annotations Service

#### New Annotations Service

#### Annotation Java Service {{since '10.1'}}

A new annotation service has been added, it stores annotations in the repository.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24096](https://jira.nuxeo.com/browse/NXP-24396).

#### Annotation REST API Adapter {{since '10.1'}}

The web adapter "annotation" has been added on the document resource so as to retrieve and set annotations on documents using the REST API.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24364](https://jira.nuxeo.com/browse/NXP-24364).

<!--- ### User Manager -->

### User Registration

#### Stronger Enforcement on Groups Validation for Newly Created Users {{since '10.1'}}

 Non-administrator users can only invite members from their own group(s).

 <i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24653](https://jira.nuxeo.com/browse/NXP-24653).

<!--- ### FileManager -->

<!--- ### Redis -->

<!--- ### Key Value Store -->

<!--- ### OAuth -->

### Transient Store

#### Batch Handler {{since '10.1'}}

The platform now provides a way to plug custom logics to upload content to a transient store, by contributing a Batch Handler.

```
<extension target="org.nuxeo.ecm.automation.server.BatchManager"
point="handlers">
<batchHandler>
<name>foo</name>
<class>org.someorg.somepackage.SomeClassThatImplementsBatchHandler</class>
<property name="transientStore">${backingTransientStore}</property>
<property name="key1">value1</property>
<property name="key2">value2</property>
...
<property name="keyN">valueN</property>
</batchHandler>
</extension>
```

An S3 implementation of this batch handler has been added, so as to be able to upload to S3 directly and to benefit from S3 accelerated upload infrastructure (See the new addon here after).

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24208](https://jira.nuxeo.com/browse/NXP-24208).

<!--- ### REST API -_>

<!--- ### Migration Service -->

### Packaging / Distribution

#### HSTS Policy {{since '10.1'}}

The HSTS header is enabled by default when HTTPS is in use. It forces only HTTPS requests.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24254](https://jira.nuxeo.com/browse/NXP-24254).

<!--- ### User workspace -->

## Addons

<!--- ### Packaging -->

### Nuxeo Web UI {{> anchor 'nuxeo-web-ui'}}

#### Orderable Folders {{since '10.1'}}

Orderable Folders are now available in Nuxeo Platform with up and down actions. It works with multiple selected documents.
For this purpose a new operation is available to order child documents.
Navigation tree now takes into account order on Orderable Folders.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24254](https://jira.nuxeo.com/browse/NXP-24254).

#### Trash {{since '10.1'}}

Add trash functionality and management to document deletion. Document deletion moves it to trash.
In order to manage trash:
- Documents with Folderish facet added a trash pill to manage deleted documents.
- New trash search on the main menu. Has a faceted search on path, size, authors, and text.
Trashed documents can be restore or permanently deleted by users with Manage Everything permission.
A new `EmptyTrash` operation allows to permanently delete a Folderish trash content which is available on the Folderish trash pill UI.
Finally, a set of functional tests for new trash features.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23798](https://jira.nuxeo.com/browse/NXP-23798).

#### Direct Upload to 3rd-Party Service {{since '10.1'}}

Batch upload refactored to support third party providers.
It is possible to integrate providers for feature rich and performance upload.
To this end, the upload behaviour now supports external providers and allows features like progress and multipart.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24269](https://jira.nuxeo.com/browse/NXP-24269).

#### User Invitation Link {{since '10.1'}}

Fixed link on user invitation e-mail that led to "page not found".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24535](https://jira.nuxeo.com/browse/NXP-24535).

#### Remove from Collection {{since '10.1'}}

The "Remove from Collection" action is now displayed on all document types with the Collection facet.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24347](https://jira.nuxeo.com/browse/NXP-24347).

#### Close Drawer Action {{since '10.1'}}

A new close action button has been added to let you hide the drawer. It appears on the middle right side of the drawer.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24082](https://jira.nuxeo.com/browse/NXP-24082).

#### New Languages {{since '10.1'}}

Italian, Dutch and Swedish languages have been added to Web UI and Nuxeo Elements.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA tickets [NXP-24451](https://jira.nuxeo.com/browse/NXP-24451) and [NXP-24445](https://jira.nuxeo.com/browse/NXP-24445).

### Nuxeo JSF UI

### Amazon S3 Direct Upload for Web UI {{since '10.1'}}

New addon to upload using AWS S3 infrastructure with support for multipart. Allows future integration of other providers.
Integrated with Web UI upload with real time upload progress.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24490](https://jira.nuxeo.com/browse/NXP-24490).


<!---
### Arender Connector {{since '10.2'}}
A first implementation of the ARender SPI bridge has been implemented so as to be able to preview content stored in Nuxeo using the [Arender previewer](https://arender.io/). This implementation will be completed for 10.2

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24104](https://jira.nuxeo.com/browse/NXP-24104).

--->

### IMAP Connector {{since '10.1'}}

Nuxeo IMAP Connector addon is now available on Web UI. You can create and configure IMAP folder documents on WebUI, with a sync action to import all unread emails from account.
This addon adds a new custom list view for emails on email folder documents and a custom view layout to email message documents with relevant information about the content, senders, receivers and attachments.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23951](https://jira.nuxeo.com/browse/NXP-23951).

### Drive (Server part)

The release notes of the Drive client part can be found on [GitHub](https://github.com/nuxeo/nuxeo-drive/releases).

#### .lnk Files Ignored {{since '10.1'}}

Windows symlink files `.lnk` are now ignored by default

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24490](https://jira.nuxeo.com/browse/NXP-24490).

#### Full Scan Query Optimized {{since '10.1'}}

A great optimisation has been added lowering heavily the charge of the Elasticseach cluster when using Nuxeo Drive with Nuxeo.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24232](https://jira.nuxeo.com/browse/NXP-24232).

### Nuxo DAM

#### Improve Video Processing {{since '10.1'}}

The video info (duration, format, etc.) is now computed by an asynchronous work to avoid loading the blob and running `ffmpeg-info` synchronously. This work, in turn, schedules two asynchronous works to process the video storyboard and conversions.

As a consequence, the user might not have the video info in the UI immediately after creating / updating a Video document, needing to refresh the page once the asynchronous work is done. This change allows a better behaviour when bulk importing videos.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24316](https://jira.nuxeo.com/browse/NXP-24316).

### Nuxeo Quota

#### Operation to Recompute Partially Quotas {{since '10.1'}}

A new operation: `Quotas.RecomputeStatistics` is provided, with optional parameters:
- tenantId / username / path (only one allowed)
- updaterName (defaults to `documentsSizeUpdater`)

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-21017](https://jira.nuxeo.com/browse/NXP-21017).

## Farewell

### WebEngine GWT Integration {{since '10.1'}}

The WebEngine GWT Integration that used for the former annotations system has been removed.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24317](https://jira.nuxeo.com/browse/NXP-24317).
