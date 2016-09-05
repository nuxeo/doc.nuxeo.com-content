---
title: NXQL
labels:
    - search
    - nxql
    - query
toc: true
confluence:
    ajs-parent-page-id: '17334424'
    ajs-parent-page-title: Querying and Searching
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: NXQL
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/NXQL'
    page_id: '17334485'
    shortlink: 1YAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/1YAIAQ'
    source_link: /display/NXDOC58/NXQL
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:41'
        message: ''
        version: '38'
    - 
        author: Solen Guitter
        date: '2014-04-14 12:05'
        message: ''
        version: '37'
    - 
        author: Solen Guitter
        date: '2014-02-14 10:21'
        message: ''
        version: '36'
    - 
        author: Florent Guillaume
        date: '2013-09-06 17:34'
        message: examples
        version: '35'
    - 
        author: Florent Guillaume
        date: '2013-09-06 17:20'
        message: New NXP-12104 props
        version: '34'
    - 
        author: Solen Guitter
        date: '2013-09-04 17:49'
        message: ''
        version: '33'
    - 
        author: Thierry Martins
        date: '2013-08-23 14:19'
        message: use prefix to query the filename
        version: '32'
    - 
        author: Florent Guillaume
        date: '2013-05-13 15:19'
        message: 'note about != '
        version: '31'
    - 
        author: Florent Guillaume
        date: '2013-05-13 15:09'
        message: adding ORDER BY syntax
        version: '30'
    - 
        author: Florent Guillaume
        date: '2013-05-13 15:04'
        message: ''
        version: '29'
    - 
        author: Florent Guillaume
        date: '2013-05-02 11:55'
        message: ''
        version: '28'
    - 
        author: Florent Guillaume
        date: '2013-05-02 11:52'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2013-02-11 13:26'
        message: ''
        version: '26'
    - 
        author: Solen Guitter
        date: '2013-02-11 13:25'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-02-11 13:24'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2013-02-11 13:20'
        message: ''
        version: '23'
    - 
        author: Benjamin Jalon
        date: '2013-02-11 13:13'
        message: ''
        version: '22'
    - 
        author: Florent Guillaume
        date: '2013-02-07 17:29'
        message: ''
        version: '21'
    - 
        author: Benjamin Jalon
        date: '2013-01-15 18:48'
        message: ''
        version: '20'
    - 
        author: Benjamin Jalon
        date: '2013-01-15 18:47'
        message: ''
        version: '19'
    - 
        author: Florent Guillaume
        date: '2012-12-07 04:55'
        message: ''
        version: '18'
    - 
        author: Florent Guillaume
        date: '2012-12-07 04:51'
        message: ''
        version: '17'
    - 
        author: Laurent Doguin
        date: '2012-11-14 13:57'
        message: fix files complex list queries
        version: '16'
    - 
        author: Florent Guillaume
        date: '2012-09-24 14:30'
        message: Migrated to Confluence 4.0
        version: '15'
    - 
        author: Florent Guillaume
        date: '2012-09-24 14:30'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-05-16 16:43'
        message: >-
            replaced interpreted backslash with \ so they are correctly
            displayed
        version: '13'
    - 
        author: Florent Guillaume
        date: '2012-02-07 12:26'
        message: 'ecm:lockOwner + ecm:lockCreated'
        version: '12'
    - 
        author: Thierry Martins
        date: '2011-12-07 10:28'
        message: ''
        version: '11'
    - 
        author: Thierry Martins
        date: '2011-11-25 16:25'
        message: ''
        version: '10'
    - 
        author: Julien Carsique
        date: '2011-11-14 13:55'
        message: Update references to 5.4.3 with 5.5
        version: '9'
    - 
        author: Florent Guillaume
        date: '2011-09-07 11:19'
        message: ''
        version: '8'
    - 
        author: Florent Guillaume
        date: '2011-09-06 19:05'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2011-09-06 19:03'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2011-09-06 19:02'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2011-09-06 18:42'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2011-09-06 18:30'
        message: add IS NULL notes
        version: '3'
    - 
        author: Florent Guillaume
        date: '2010-12-24 17:21'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2010-12-24 17:19'
        message: ''
        version: '1'

---
An _<operator>_ can be:

*   `AND`
*   `OR`
*   `=`
*   `<>` (or `!=` for Java compatibility and to make it convenient to write XML files)
*   `<`
*   `<=`
*   `>`
*   `>=`
*   [`NOT`] (`LIKE`|`ILIKE`) (only between an _<identifier>_ and a _<string>_)
*   `STARTSWITH` (only between an _<identifier>_ and a _<string>_)

{{#> callout type='note' }}

Be careful with Oracle when comparing a value with an empty string, as in Oracle an empty string is `NULL`. For instance `dc:description <> ''` will never match any document, and `dc:description IS NULL` will also match for an empty description.

{{/callout}}

An _<expression>_ can be:

*   _<expression>_ _<op>_ _<expression>_
*   `(` _<expression>_ `)`
*   _<literal>_
*   _<identifier>_

An _<op>_ can be:

*   `+`
*   `-`
*   `*`
*   `/`

A _<literal>_ can be:

*   _<string>_: a string delimited by single quotes (`'`) or for Java compatibility double quotes (`"`). To use the string delimiter itself inside the string, it must be escaped by a backslash&nbsp;(`\'` or `\"`) (this is contrary to the standard SQL syntax which would double the delimiter). The backslash itself is also escaped by a backslash (`\\`). The special `\n`, `\r`&nbsp;and&nbsp;`\t` can also be used.
*   _<integer>_: an integer with optional minus sign.
*   _<float>_: a float.
*   `TIMESTAMP` _<timestamp>_: a timestamp in ISO format _yyyy_`-`_MM_`-`_dd_ _hh_`:`_mm_`:`_ss_[`.`sss] (the space separator can be replaced by a `T`).
*   `DATE` _<date>_: a date in ISO format&nbsp;_yyyy_`-`_MM_`-`_dd_, converted internally to a timestamp by adding `00:00:00` to it.

A _<literal-list>_ is a non empty comma-separated list of _<literal>_.

An _<identifier>_ is a property identifier. Before Nuxeo 5.5, this can be only a simple property or a simple list property. Since Nuxeo 5.5, this can also be a complex property element, maybe including wildcards for list indexes (see below).

## List Properties

A Nuxeo property representing a list of simple values (like `dc:subjects`) can be queried as if it represented a simple value, and Nuxeo will automatically expand the query to match any of the value in the list. The following example will find the documents where **any** subject is _foo_:

```sql
SELECT * FROM Document WHERE dc:subjects = 'foo'
```

Note that the above does&nbsp;**not** mean to find the documents where the list of subjects is exactly the list&nbsp;_[foo]_; NXQL (and indeed SQL) does not have enough expressivity for that (and it would be quite slow).

The above example shows the `=` operator, and the same semantics apply for the operators `IN`, `LIKE` and `ILIKE`.

When using **negative queries**, though, the semantics get a bit more complex. The following example will find the documents where&nbsp;**no** subject is _foo_:

```sql
SELECT * FROM Document WHERE dc:subjects <> 'foo'
```

Note that the above **does&nbsp;not** mean to find the documents where there is at least one subject that is not _foo_.

The above&nbsp;example shows the `<>`&nbsp;operator, and the same semantics apply for the other negative operators `NOT IN`, `NOT LIKE`&nbsp;and `NOT ILIKE`.

Since Nuxeo 5.5, the complex property syntax (described in detail further down) can be used to match single list elements. The following two queries will do the same thing:

```sql
SELECT * FROM Document WHERE dc:subjects = 'foo'
SELECT * FROM Document WHERE dc:subjects/* = 'foo'
```

There is however an important difference in the mechanism with which these two requests are executed internally.&nbsp;The first syntax (which also worked before Nuxeo 5.5)&nbsp;internally uses a SQL&nbsp;`EXISTS`&nbsp;and a subquery. The second one uses a SQL&nbsp;`JOIN`&nbsp;(with a SQL&nbsp;`DISTINCT`&nbsp;if&nbsp;`SELECT *`&nbsp;is used). The end result is usually the same unless you want to use&nbsp;`AbstractSession.queryAndFetch`&nbsp;with no&nbsp;`DISTINCT`&nbsp;to get to the actual matching subjects, then only the second form is usable

In the case where negative queries are used, however, the different execution mechanisms imply that the two syntaxes mean different things:

```sql
SELECT * FROM Document WHERE dc:subjects <> 'foo'
SELECT * FROM Document WHERE dc:subjects/* <> 'foo'     -- not the same thing as above
```

The first syntax, as already explained, will find the documents where&nbsp;**no**&nbsp;subject is&nbsp;_foo_.

The second syntax will find the documents where there is **at least one** subject which **is not** _foo_.

## Complex Properties{{> anchor 'reference'}}

Since Nuxeo 5.5 you can refer to complex properties in NXQL, after the `SELECT`, in the `WHERE` clause, and in the `ORDER BY` clause (cf [NXP-4464](https://jira.nuxeo.com/browse/NXP-4464)).

A complex property is a property of a schema containing `<xs:simpleType>` lists, or `<xs:complexType>` subelements or sequences of them.

For complex subproperties, like the `length` field of the `content` field of the `file` schema, you can refer to:

*   `content/length` for the value of the subproperty.

For simple lists, like `dc:subjects`, you can refer to:

*   `dc:subjects/3` for the 4th element of the list (indexes start at 0),
*   `dc:subjects/*` for any element of the list,
*   `dc:subjects/*1` for any element of the list, correlated with other uses of the same number after `*`.

For complex lists, like the elements of the `files` schema, you can refer to:

*   `files/3/file/length` for the length of the 4th file (again, indexes start at 0),
*   `files/*/`file/`length` for any length
*   `files/*1/`file/`length` for any length, correlated with other uses of the same number after `*`.

It's important to note that if you use a `*` then the resulting SQL `JOIN` generated may return several resulting rows, which means that if you use the `AbstractSession.queryAndFetch` API you may get several results for the same document.

The difference between `*` and `*1` gets important when you refer to the same expression twice, for instance if you want the documents with an optional attached of given characteristics, you must correlate the queries.

This returns the documents with an attached text file of length 0:

```sql
SELECT * FROM Document WHERE files/*1/file/name LIKE '%.txt' AND files/*1/file/length = 0

```

This returns the documents with an attached text file and an attached file of length 0:

```sql
SELECT * FROM Document WHERE files/*/file/name LIKE '%.txt' AND files/*/file/length = 0
```

## Special NXQL Properties

The following properties are not legal as document property names, but are allowed in NXQL.

**ecm:uuid**: the document id (`DocumentModel.getId()`).

**ecm:parentId**: the document parent id.

**ecm:path**: the document path (`DocumentModel.getPathAsString()`), it cannot be used in the _<select-clause>_, and using it in the&nbsp;_<order-by-clause>_ carries a large performance penalty.

**ecm:name**: the document name (`DocumentModel.getName()`).

**ecm:pos**: the document position in its parent, this is `NULL` in non-ordered folders. This is mainly used in the&nbsp;_<order-by-clause>_.

**ecm:primaryType**: the document type (`DocumentModel.getType()`).

**ecm:mixinType**: a list of the document facets (`DocumentModel.getFacets()`) with some restrictions. 1\. the facet _Immutable_ is never seen. 2\. the facets _Folderish_ and _HiddenInNavigation_ are never seen on document instances (only if they're on the type). 3\. like for other list properties, it can be used only with operators `=`, `<>`, `IN` and `NOT IN`.

**ecm:currentLifeCycleState**: the document lifecycle state (`DocumentModel.getCurrentLifeCycleState()`).

**ecm:isCheckedIn**:&nbsp;`1`&nbsp;if the document is checked in and&nbsp;`0`&nbsp;if not (the opposite of&nbsp;`DocumentModel.isCheckedOut()`). This can only be compared to&nbsp;`1`&nbsp;or&nbsp;`0`. (Since Nuxeo 5.7.3)

**ecm:isProxy**: `1` for proxies and `0` for non-proxies (`DocumentModel.isProxy()`). This can only be compared to `1` or `0`.

**ecm:isVersion** or **ecm:isCheckedInVersion**: `1` for versions and `0` for non-version (`DocumentModel.isVersion()`). This can only be compared to `1` or `0`. (The name **ecm:isVersion** is available since Nuxeo 5.7.3)

**ecm:versionLabel**: the version label for versions (`DocumentModel.getVersionLabel()` only for a version), `NULL` if it's not a version.

**ecm:versionDescription**: the version description for versions, `NULL` if it's not a version. (Since Nuxeo 5.7.3)

**ecm:versionCreated**: the version creation time for versions, `NULL` if it's not a version. (Since Nuxeo 5.7.3)

**ecm:versionVersionableId**:&nbsp;the id of the versionable document of a version (the versionable document is the one from which the version was created). (Since Nuxeo 5.7.3)

**ecm:isLatestVersion**: `1` if this is the latest version of a document, `0` if not. This can only be compared to `1` or `0`. (Since Nuxeo 5.7.3)

**ecm:isLatestMajorVersion**: `1` if this is the latest major version of a document,&nbsp;`0`&nbsp;if not. This can only be compared to&nbsp;`1`&nbsp;or&nbsp;`0`. (Since Nuxeo 5.7.3)

**ecm:proxyTargetId**: the id of the target of a proxy (usually a version). Implies a search for proxies (`ecm:isProxy = 1`). (Since Nuxeo 5.7.1)

**ecm:proxyVersionableId**: the id of the versionable document of a proxy (the versionable document is the one from which the version to which the proxy is pointing was created). Implies a search for proxies (`ecm:isProxy = 1`). (Since Nuxeo 5.7.1)

**ecm:lockOwner**: the lock owner (`DocumentModel.getLockInfo().getOwner()`). (Since Nuxeo 5.4.2)

**ecm:lockCreated**: the lock creation date (`DocumentModel.getLockInfo().getCreated()`). (Since Nuxeo 5.4.2)

**ecm:lock**: the old lock. (**Deprecated** since Nuxeo 5.4.2 and [NXP-6054](https://jira.nuxeo.com/browse/NXP-6054), now returns **ecm:lockOwner**, used to return a concatenation of the lock owner and a short-format creation date)

**ecm:fulltext**: a special field to make fulltext queries, see [Full-Text Queries]({{page page='full-text-queries'}}) for more.

**ecm:tag**: a tag of the document. This property, when used multiple times in the same query, always refers to the same tag. If you want to refer to multiple tags in the same query, you can use a wildcard syntax similar to complex properties: every instance of **ecm:tag/*** will always refer to a different tag. If you want to refer several times to the same tag but still have flexibility, use correlated wildcards like for complex properties: **ecm:tag/*1**, **ecm:tag/*2**, etc. See the examples below for more. (Since Nuxeo 5.7.1)

## Examples

```sql
SELECT * FROM Document
SELECT * FROM Folder
SELECT * FROM File
SELECT * FROM Note
SELECT * FROM Note, File WHERE dc:title = 'My Doc'
SELECT * FROM Document WHERE NOT dc:title = 'My Doc'
SELECT * FROM Document WHERE dc:title = 'My Doc' OR dc:title = 'My Other Doc'
SELECT * FROM Document WHERE (dc:title = 'blah' OR ecm:isProxy = 1) AND dc:contributors = 'bob'
SELECT * FROM Document WHERE file:filename = 'testfile.txt'
SELECT * FROM Document WHERE uid = 'isbn1234'
SELECT * FROM Document WHERE file:filename = 'testfile.txt' OR dc:title = 'testfile3_Title'
SELECT * FROM Document WHERE file:filename = 'testfile.txt' OR dc:contributors = 'bob'
SELECT * FROM Document WHERE dc:created BETWEEN DATE '2007-03-15' AND DATE '2008-01-01'
SELECT * FROM Document WHERE dc:created NOT BETWEEN DATE '2007-01-01' AND DATE '2008-01-01' -- (VCS only)
SELECT * FROM Document WHERE dc:contributors = 'bob'
SELECT * FROM Document WHERE dc:contributors IN ('bob', 'john')
SELECT * FROM Document WHERE dc:contributors NOT IN ('bob', 'john')
SELECT * FROM Document WHERE dc:contributors <> 'pete'
SELECT * FROM Document WHERE dc:contributors <> 'blah'
SELECT * FROM Document WHERE dc:contributors <> 'blah' AND ecm:isProxy = 0
SELECT * FROM Document WHERE dc:title LIKE 'testfile%' ORDER BY dc:description
SELECT * FROM Document WHERE dc:title LIKE 'testfile%' ORDER BY dc:description DESC
SELECT * FROM Document ORDER BY ecm:path
SELECT * FROM Document ORDER BY ecm:path DESC
SELECT * FROM Document ORDER BY ecm:name
SELECT * FROM Document WHERE ecm:path STARTSWITH '/'
SELECT * FROM Document WHERE ecm:path STARTSWITH '/nothere/'
SELECT * FROM Document WHERE ecm:path STARTSWITH '/testfolder1/'
SELECT * FROM Document WHERE dc:title = 'testfile1_Title' AND ecm:path STARTSWITH '/'
SELECT * FROM Document WHERE dc:title LIKE 'testfile%' AND ecm:path STARTSWITH '/'
SELECT * FROM Document WHERE dc:coverage STARTSWITH 'foo'
SELECT * FROM Document WHERE dc:coverage STARTSWITH 'foo/bar'
SELECT * FROM Document WHERE dc:subjects STARTSWITH 'gee'
SELECT * FROM Document WHERE dc:subjects STARTSWITH 'gee/moo'
SELECT * FROM Document WHERE dc:created >= DATE '2007-01-01'
SELECT * FROM Document WHERE dc:created >= TIMESTAMP '2007-03-15 00:00:00'
SELECT * FROM Document WHERE dc:created >= DATE '2007-02-15' AND dc:created <= DATE '2007-03-15'
SELECT * FROM Document WHERE my:boolean = 1
SELECT * FROM Document WHERE ecm:isProxy = 1
SELECT * FROM Document WHERE ecm:isCheckedInVersion = 1
SELECT * FROM Document WHERE ecm:isProxy = 0 AND ecm:isCheckedInVersion = 0
SELECT * FROM Document WHERE ecm:uuid = 'c5904f77-299a-411e-8477-81d3102a81f9'
SELECT * FROM Document WHERE ecm:name = 'foo'
SELECT * FROM Document WHERE ecm:parentId = '5442fff5-06f1-47c9-ac59-1e10ef8e985b'
SELECT * FROM Document WHERE ecm:primaryType = 'Folder'
SELECT * FROM Document WHERE ecm:primaryType <> 'Folder'
SELECT * FROM Document WHERE ecm:primaryType = 'Note'
SELECT * FROM Document WHERE ecm:primaryType IN ('Folder', 'Note')
SELECT * FROM Document WHERE ecm:primaryType NOT IN ('Folder', 'Note')
SELECT * FROM Document WHERE ecm:mixinType = 'Versionable' AND ecm:mixinType <> 'Downloadable'
SELECT * FROM Document WHERE ecm:mixinType <> 'Rendition'
SELECT * FROM Document WHERE ecm:mixinType = 'Rendition' AND dc:title NOT ILIKE '%pdf'
SELECT * FROM Document WHERE ecm:mixinType = 'Folderish'
SELECT * FROM Document WHERE ecm:mixinType = 'Downloadable'
SELECT * FROM Document WHERE ecm:mixinType = 'Versionable'
SELECT * FROM Document WHERE ecm:mixinType IN ('Folderish', 'Downloadable')
SELECT * FROM Document WHERE ecm:mixinType NOT IN ('Folderish', 'Downloadable')
SELECT * FROM Document WHERE ecm:currentLifeCycleState = 'project'
SELECT * FROM Document WHERE ecm:versionLabel = '1.0'
SELECT * FROM Document WHERE ecm:currentLifeCycleState <> 'deleted'
SELECT * FROM Document WHERE ecm:fulltext = 'world'
SELECT * FROM Document WHERE dc:title = 'hello world 1' ORDER BY ecm:currentLifeCycleState
SELECT * FROM Document WHERE dc:title = 'hello world 1' ORDER BY ecm:versionLabel
SELECT * FROM Document WHERE ecm:parentId = '62cc5f29-f33e-479e-b122-e3922396e601' ORDER BY ecm:pos

```

Since Nuxeo 5.4.1 you can use `IS NULL`:

```sql
SELECT * FROM Document WHERE dc:expired IS NOT NULL
SELECT * FROM Document WHERE dc:language = '' OR dc:language IS NULL

```

Since Nuxeo 5.5 you can use complex properties:

```sql
SELECT * FROM File WHERE content/length > 0
SELECT * FROM File WHERE content/name = 'testfile.txt'
SELECT * FROM File ORDER BY content/length DESC
SELECT * FROM Document WHERE tst:couple/first/firstname = 'Steve'
SELECT * FROM Document WHERE tst:friends/0/firstname = 'John'
SELECT * FROM Document WHERE tst:friends/*/firstname = 'John'
SELECT * FROM Document WHERE tst:friends/*1/firstname = 'John' AND tst:friends/*1/lastname = 'Smith'
SELECT tst:friends/*1/lastname FROM Document WHERE tst:friends/*1/firstname = 'John'
SELECT * FROM Document WHERE dc:subjects/0 = 'something'
SELECT * FROM Document WHERE dc:subjects/* = 'something'
SELECT dc:subjects/*1 FROM Document WHERE dc:subjects/*1 LIKE 'abc%'

```

Since Nuxeo 5.7.1 you can use&nbsp;`ecm:tag`:

```sql
SELECT * FROM Document WHERE ecm:tag = 'tag1'
SELECT * FROM Document WHERE ecm:tag IN ('tag1', 'tag2')               -- documents with either tag
SELECT * FROM Document WHERE ecm:tag/* = 'tag1' AND ecm:tag/* = 'tag2' -- documents with both tags
SELECT ecm:tag FROM Document WHERE dc:title = 'something'              -- with queryAndFetch
SELECT ecm:tag FROM Document WHERE ecm:tag LIKE 'abc%'                 -- with queryAndFetch
SELECT ecm:tag/*1 FROM Document WHERE ecm:tag/*1 LIKE 'abc%' AND ecm:tag/*2 = 'tag1'
SELECT ecm:tag FROM Document WHERE ecm:tag LIKE 'abc%' AND ecm:tag/* = 'tag1'  -- simpler version of above
```

Since Nuxeo 5.7.1 you can also use&nbsp;`ecm:proxyTargetId`&nbsp;and&nbsp;`ecm:proxyVersionableId`:

```sql
SELECT * FROM Document WHERE ecm:proxyTargetId = '62cc5f29-f33e-479e-b122-e3922396e601'
SELECT * FROM Document WHERE ecm:proxyVersionableId = '5442fff5-06f1-47c9-ac59-1e10ef8e985b'
```

Since Nuxeo 5.7.3 you can match the "checked in" state of a document:

```sql
 SELECT * FROM Document WHERE ecm:isCheckedIn = 1
```

Since Nuxeo 5.7.3 you can use additional version-related properties:

```sql
SELECT * FROM Document WHERE ecm:isVersion = 1                        -- new name for ecm:isCheckedInVersion
SELECT * FROM Document WHERE ecm:isLatestVersion = 1
SELECT * FROM Document WHERE ecm:isLatestMajorVersion = 1
SELECT * FROM Document WHERE ecm:versionCreated >= TIMESTAMP '2007-03-15 00:00:00'
SELECT * FROM Document WHERE ecm:versionLabel = '1.0'                 -- this was available even before Nuxeo 5.7.3
SELECT * FROM Document WHERE ecm:versionDescription LIKE '%TODO%'
SELECT * FROM Document WHERE ecm:versionVersionableId = '5442fff5-06f1-47c9-ac59-1e10ef8e985b'
```

### Fulltext Examples

This uses standard SQL LIKE:

```
SELECT * FROM Document WHERE dc:title LIKE 'Test%'
SELECT * FROM Document WHERE dc:title ILIKE 'test%'
SELECT * FROM Document WHERE dc:contributors LIKE 'pe%'
SELECT * FROM Document WHERE dc:subjects LIKE '%oo%'
SELECT * FROM Document WHERE dc:subjects NOT LIKE '%oo%'

```

The following uses a fulltext index that has to be additionally configured by administrators:

```
SELECT * FROM Document WHERE ecm:fulltext_title = 'world'

```

The following uses a fulltext index if one is configured for the dc:title field, otherwise it uses ILIKE-based queries:

```
SELECT * FROM Document WHERE ecm:fulltext.dc:title = 'brave'

```