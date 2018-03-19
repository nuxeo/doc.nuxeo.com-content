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



We also provide [instructions for upgrading]({{page version='' space='nxdoc' page='upgrade-from-lts-2016-to-lts-2017'}}) to the latest release. (TODO: update with good link)

## Nuxeo Server

### Runtime


### Core Repository


### Core Storage

### Core Events

### Directory

### Nuxeo Streams

### WorkManager

### Audit

### CMIS

### Query

### Conversion

### Rendition

### Elasticsearch

### Tag Service

### User Manager

### FileManager

### Redis

### Key Value Store

### OAuth

### Transient Store

### REST API

### Migration Service

### Packaging

### User workspace

## Addons

### Packaging

### Nuxeo Web UI {{> anchor 'nuxeo-web-ui'}}

#### Orderable folders  {{since '10.1'}}

Adds support for Orderable Folders.
Up and down actions available on Orderable Folders. Works with multiple selected documents.
For this purpose a new operation is available to order child documents.
Navigation tree now takes into account order on Orderable Folders.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24254](https://jira.nuxeo.com/browse/NXP-24254).

#### Trash flow {{since '10.1'}}

Add trash functionality and management to document deletion. Document deletion moves it to trash.
In order to manage trash:
- Documents with Folderish facet added a trash pill to manage deleted documents.
- New trash search on the main menu. Has a faceted search on path, size, authors, and text.
Trashed documents can be restore or permanently deleted by users with Manage Everything permission.
A new EmptyTrash operation allows to permanently delete a Folderish's trash content which is available on the Folderish trash pill UI.
Finally, a set of functional tests for new trash features.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23798](https://jira.nuxeo.com/browse/NXP-23798).

#### Direct multipart upload with AWS S3 {{since '10.1'}}

New add-on to upload using AWS S3 infrastructure with support for multipart. Allows future integration of other providers.
Integrated with Web UI upload with real time upload progress.
To this end, the Upload behavior now supports providers.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-24269](https://jira.nuxeo.com/browse/NXP-24269).

#### IMAP Connector {{since '10.1'}}

Nuxeo IMAP Connector add-on is now available on Web UI.
It is possible to create and configure IMAP folder documents on WebUI.
IMAP folder, on Web UI, have a sync action to import all unread emails from account.
This add-on adds a new custom list view for emails on email folder documents.
Also adds a custom view layout to email message documents with relevant information about the content, senders, receivers, and attachments.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-23951](https://jira.nuxeo.com/browse/NXP-23951).

#### User invitation link {{since '10.1'}}

Fixed link on user invitation e-mail that led to "page not found".

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More onJIRA ticket [NXP-24535](https://jira.nuxeo.com/browse/NXP-24535).

#### Remove from Collection {{since '10.1'}}

Remove from Collection on every document type with Collection faceted.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More onJIRA ticket [NXP-24347](https://jira.nuxeo.com/browse/NXP-24347).

#### Close drawer action {{since '10.1'}}

A new close action button was added to hide the drawer. It appears on the middle right side.

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More onJIRA ticket [NXP-24082](https://jira.nuxeo.com/browse/NXP-24082).

### Nuxeo JSF UI

### Packaging

## Farewell
