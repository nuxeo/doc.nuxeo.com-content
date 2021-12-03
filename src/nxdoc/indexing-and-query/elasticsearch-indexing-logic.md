---
title: Elasticsearch Indexing Logic
review:
    comment: ''
    date: ''
    status: ok
labels:
    - elasticsearch
    - lts2015-ok
    - elasticsearch-component
    - university
toc: true
confluence:
    ajs-parent-page-id: '28475656'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Elasticsearch+Indexing+Logic
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Elasticsearch+Indexing+Logic'
    page_id: '28475720'
    shortlink: SIGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/SIGyAQ'
    source_link: /display/NXDOC710/Elasticsearch+Indexing+Logic
tree_item_index: 600
history:
    -
        author: Bertrand Chauvin
        date: '2015-12-17 14:18'
        message: ix typ
        version: '32'
    -
        author: Bertrand Chauvin
        date: '2015-12-17 14:17'
        message: Added video
        version: '31'
    -
        author: Guillaume Renard
        date: '2015-08-06 09:44'
        message: ''
        version: '30'
    -
        author: Bertrand Chauvin
        date: '2015-07-02 13:27'
        message: Fixed typo
        version: '29'
    -
        author: Benoit Delbosc
        date: '2015-02-26 13:48'
        message: ''
        version: '28'
    -
        author: Benoit Delbosc
        date: '2015-02-26 13:47'
        message: ''
        version: '27'
    -
        author: Benoit Delbosc
        date: '2015-02-26 13:45'
        message: ''
        version: '26'
    -
        author: Benoit Delbosc
        date: '2015-02-20 09:03'
        message: ''
        version: '25'
    -
        author: Benoit Delbosc
        date: '2014-12-01 17:02'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-12-01 16:55'
        message: Add subtitiles
        version: '23'
    -
        author: Benoit Delbosc
        date: '2014-11-25 15:33'
        message: ''
        version: '22'
    -
        author: Benoit Delbosc
        date: '2014-11-10 16:13'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-11-02 22:29'
        message: ''
        version: '20'
    -
        author: Alain Escaffre
        date: '2014-11-02 22:27'
        message: ''
        version: '19'
    -
        author: Benoit Delbosc
        date: '2014-08-04 11:02'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2014-07-30 10:27'
        message: ''
        version: '17'
    -
        author: Alain Escaffre
        date: '2014-07-09 12:17'
        message: 'Removing the Indexing strategy part which is incomplete. '
        version: '16'
    -
        author: Guillaume Renard
        date: '2014-07-09 11:23'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2014-06-12 16:01'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-05-02 16:45'
        message: ''
        version: '13'
    -
        author: Alain Escaffre
        date: '2014-05-02 16:24'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-04-18 19:13'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2014-04-18 16:28'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-04-18 16:19'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-04-18 10:21'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:19'
        message: ''
        version: '7'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:17'
        message: ''
        version: '6'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:16'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2014-04-17 19:01'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:59'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:32'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-04-17 18:26'
        message: ''
        version: '1'

---
{{> wistia_video id='d9zcz20s7i'}}

Extract from the course [What's New in Nuxeo Platform LTS 2015?](https://university.nuxeo.io/nuxeo/university/#%21/course/whats-new-in-nuxeo-platform-lts-2015) in [Hyland University](https://university.hyland.com)

## Indexing

When manipulating a session to create, update or delete documents, a synchronous listener stacks the indexing commands to process. These commands are factorized and are processed either in an asynchronous job or at post commit time.

**Post Commit Mode**

If the commands are recorded on a UI thread (a thread used to render a JSF page for instance) the commands are treated in post commit. This means that after the transaction is committed the indexing command are sent to Elasticsearch and a refresh operation is also send to make the indexed documents available to the next query. This approach give a real time indexing appearance. A document that is created by an action is searchable on the next action.

**Asynchronous Mode**

The asynchronous mode will process the commands and not send any refresh operation so they are treated in near real time (~1s after the indexing command is send).

**Recursive Commands**

A command can be on a single document or applied to its children (recursive). So the number of command processed reported in the Admin tab doesn't have to match the number of document processed.

Recursive command that are triggered when moving a folder or changing an ACL are not treated in post commit listener. Only the first level is treated in post commit the recursive indexing is done asynchronously.

**JSON Document**

When indexing a document the Nuxeo Platform sends a JSON representation to be indexed. For now a creation or an update command submits the complete document. The JSON document can be viewed in the `_source` field of the Elasticsearch document. The `_source` contains all the fields.

## Searching and Limitations

**NXQL Queries**

A NXQL query can be translated to Elasticsearch query with some limitations. See the page [NXQL documentation.]({{page page='nxql'}})

**Operators and Mapping**

Some operators need an explicit mapping to work properly. This is the case for FULLTEXT and ILIKE operators (STARTSWITH for `ecm:path` has a special mapping setup by default). See the page [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}}) for more information.

**Security and ACLs**

The security clause is automatically added to match the principal and its groups. Each document contains the list of the users or groups that have permission to browse the document.

Only the simplified ACL is supported with Elasticsearch (this is the default security mode since 6.0).&nbsp;Simplified ACL&nbsp;means we only handle DENY on Everyone (block all rights) and not DENY on principals.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Elasticsearch Documentation'}}

*   [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})
*   [Elasticsearch Setup]({{page space='admindoc710' page='elasticsearch-setup'}})
*   [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Indexing related pages'}}

*   [Indexing and Query]({{page page='indexing-and-query'}})
*   [Full-Text Queries]({{page page='full-text-queries'}})
*   [Indexing and Querying How-To Index]({{page page='indexing-and-querying-how-to-index'}})

{{/panel}}</div></div>
