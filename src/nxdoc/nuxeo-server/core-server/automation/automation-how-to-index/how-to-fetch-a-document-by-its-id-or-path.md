---
title: How to Fetch a Document by Its ID or Path
review:
    comment: ''
    date: '2017-12-14'
    status: ok
details:
    howto:
        excerpt: Learn how to use the operation Document.Fetch to get a document by its ID or its path.
        level: Intermediate
        tool: Studio
        topics: Automation
labels:
    - lts2016-ok
    - howto
    - automation
    - fdavid
    - studio
    - excerpt
    - multiexcerpt-include
    - lts2017-ok
confluence:
    ajs-parent-page-id: '19235642'
    ajs-parent-page-title: Automation How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Fetch+a+Document+by+Its+ID+or+Path
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Fetch+a+Document+by+Its+ID+or+Path'
    page_id: '3345634'
    shortlink: 4gwz
    shortlink_source: 'https://doc.nuxeo.com/x/4gwz'
    source_link: /display/NXDOC/How+to+Fetch+a+Document+by+Its+ID+or+Path
tree_item_index: 200
history:
    -
        author: Manon Lumeau
        date: '2015-12-15 17:25'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2015-01-26 16:51'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-12-05 15:32'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-12-01 21:48'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-09-09 14:43'
        message: Formatting and link update
        version: '11'
    -
        author: Manon Lumeau
        date: '2014-08-01 17:43'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-08-01 14:53'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-07-31 15:47'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2014-07-31 15:33'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2013-07-17 18:41'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:08'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-10-06 08:08'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-07-27 02:43'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-07-27 02:26'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-07-27 02:24'
        message: ''
        version: '1'

---
{{! excerpt}}

You can use the operation `Document.Fetch` when you want to fetch a given document by its ID, or by its path. Actually you won't probably have to use it frequently: most of the time you'll be working on the current document, or one of its children, or its parent, or on the result of a query.

{{! /excerpt}}

Anyway, if you want to access a document by its path or its ID, just drop this `Fetch > Document` operation in the [operation chain editor]({{page page='how-to-create-an-automation-chain'}}), and either put:

*   A path, like `/default-domain/workspaces/my-workspace`

    You will find the path of a document in its URL: It is the part of URL that starts with `/default-domain/...` (if you are in the default domain) and that finishes with the name of the document (most often its title without accents, space, ... and sometimes with some additional numbers).
*   A computed path using a scripted instruction like `expr:/default-domain/sections+@{Document.path.substring("/default-domain/workspaces".length -1)}`

    This expression will give the path of a published document in the sections considering it has been published in the same place as in the workspaces.
*   An ID like `76c69a54-0230-457a-b42c-e819d5ace862`

    You can get the ID of a document by clicking on the permanent link beside the title of a document in Nuxeo Platform.

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{{multiexcerpt 'popular-how-tos' page='How to Create an Automation Chain'}}}

</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Automation screen in Nuxeo Studio]({{page space='studio' page='automation'}})
- [Content Automation Concepts]({{page page='content-automation-concepts'}})
- [Use of MVEL in Automation Chains]({{page page='use-of-mvel-in-automation-chains'}})

{{/panel}}</div></div>
