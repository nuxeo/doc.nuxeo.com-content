---
title: Elasticsearch Indexing Logic
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - elasticsearch
    - elasticsearch-component
    - bdelbosc
    - university
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '4687860'
    ajs-parent-page-title: Indexing and Query
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Elasticsearch+Indexing+Logic
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Elasticsearch+Indexing+Logic'
    page_id: '19235209'
    shortlink: iYElAQ
    shortlink_source: 'https://doc.nuxeo.com/x/iYElAQ'
    source_link: /display/NXDOC/Elasticsearch+Indexing+Logic
tree_item_index: 600
history:
    -
        author: Bertrand Chauvin
        date: '2015-12-17 14:18'
        message: ''
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
{{#> callout type='info' heading='Nuxeo University'}}
Watch the related courses on Nuxeo University
- [Configuring Searches in Nuxeo Studio Modeler & Designer](https://university.nuxeo.com/learn/public/course/view/elearning/134/configuring-searches-in-nuxeo-studio-modeler-designer).
![]({{file name='university-search.png' page='nxdoc/university'}} ?w=450,border=true)
{{/callout}}


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

When the query does not specify an ordering, the results are sorted by descending order of relevance as [described in Elasticsearch documentation](https://www.elastic.co/guide/en/elasticsearch/guide/current/relevance-intro.html).
There are multiple ways to tune relevance:
- By updating the mapping to [automatically boost some fields](https://www.elastic.co/guide/en/elasticsearch/reference/5.6/mapping-boost.html).
- By using NXQL Hint with operator that support field boost notation like `/*+ES: INDEX(dc:title.fulltext^3,dc:description.fulltext) */`
- By building your elasticsearch query directly and pass a [function to return a score](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html).

**Operators and Mapping**

Some operators need an explicit mapping to work properly. This is the case for FULLTEXT, LIKE and ILIKE operators (STARTSWITH for `ecm:path` has a special mapping setup by default). See the page [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}}) for more information.

**Security and ACLs**

The security clause is automatically added to match the principal and its groups. Each document contains the list of the users or groups that have permission to browse the document.

Only the simplified ACL is supported with Elasticsearch (this is the default security mode since 6.0). Simplified ACL means we only handle DENY on Everyone (block all rights) and not DENY on principals.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Elasticsearch Documentation'}}

- [Configuring the Elasticsearch Mapping]({{page page='configuring-the-elasticsearch-mapping'}})
- [Elasticsearch Setup]({{page page='elasticsearch-setup'}})
- [How to Make a Page Provider or Content View Query Elasticsearch Index]({{page page='how-to-make-a-page-provider-or-content-view-query-elasticsearch-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Indexing related pages'}}

- [Indexing and Query]({{page page='indexing-and-query'}})
- [Full-Text Queries]({{page page='full-text-queries'}})
- [Indexing and Querying How-To Index]({{page page='indexing-and-querying-how-to-index'}})

{{/panel}}</div></div>
