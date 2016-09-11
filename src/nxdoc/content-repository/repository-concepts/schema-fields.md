---
title: Schema Fields
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - schema-component
toc: true
confluence:
    ajs-parent-page-id: '28475527'
    ajs-parent-page-title: Repository Concepts
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Schema+Fields
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Schema+Fields'
    page_id: '28475608'
    shortlink: 2ICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/2ICyAQ'
    source_link: /display/NXDOC710/Schema+Fields
history:
    - 
        author: Solen Guitter
        date: '2015-10-12 08:34'
        message: pdate related page
        version: '3'
    - 
        author: Florent Guillaume
        date: '2014-11-04 14:55'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2014-11-04 14:53'
        message: ''
        version: '1'

---
{{! excerpt}}

The fields of a schema define the allowed content for the properties of the documents having this schema.

{{! /excerpt}}

## Field Types

A standard set of XSD types are allowed in Nuxeo schemas, and are mapped to Java and storage types as follows:

<table><tbody><tr><th colspan="1">XSD Type</th><th colspan="1">Java Type</th></tr><tr><td colspan="1">xsd:string</td><td colspan="1">String</td></tr><tr><td colspan="1">xsd:normalizedString</td><td colspan="1">String</td></tr><tr><td colspan="1">xsd:long</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:unsignedLong</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:integer</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:int</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:unsignedInt</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:positiveInteger</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:nonPositiveInteger</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:nonNegativeInteger</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:short</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:unsignedShort</td><td colspan="1">Long</td></tr><tr><td colspan="1">xsd:double</td><td colspan="1">Double</td></tr><tr><td colspan="1">xsd:float</td><td colspan="1">Double</td></tr><tr><td colspan="1">xsd:decimal</td><td colspan="1">Double</td></tr><tr><td colspan="1">xsd:datetime</td><td colspan="1">Calendar</td></tr><tr><td colspan="1">xsd:date</td><td colspan="1">Calendar</td></tr><tr><td colspan="1">xsd:time</td><td colspan="1">Calendar</td></tr><tr><td colspan="1">xsd:boolean</td><td colspan="1">Boolean</td></tr></tbody></table>

## Delta Updates

Since Nuxeo Platform 6.0 ([NXP-15103](https://jira.nuxeo.com/browse/NXP-15103)) a new update model for `Long` properties is available using `DeltaLong`.

A `DeltaLong` is stored as a `Long`, but when used in the Java API to update a field (`DocumentModel.setPropertyValue()`) it specifies that the update should be done as an increment at the storage level rather than as a replacement of the old value. This allows for concurrent updates that don't lose value.

The standard usage to add a value "count" to a property "myprop" is:&nbsp;

```java
long count = 123;
Number oldValue = (Number) doc.getPropertyValue("myprop");
Number newValue = DeltaLong.deltaOrLong(oldValue, count);
doc.setPropertyValue("myprop", newValue);
```

`DeltaLong.deltaOrLong(oldValue, count)`&nbsp;should be used in preference over `new DeltaLong(oldValue, count)` because it can deal with the case where the old value is `null` or already a `DeltaLong`&nbsp;(the latter can happen if you're re-updating a property which hasn't been saved yet).

When using a SQL backend, this will emit code like:

```sql
UPDATE myschema SET myprop = myprop + 123 WHERE id = 'the-doc-id';
```

instead of:

```sql
UPDATE myschema SET myprop = 123 WHERE id = 'the-doc-id';
```

which you'll agree gives different results if two threads are executing it at the same time.

For a MongoDB backend, the update will be done using:

```js
db.default.update(
   { "ecm:id": "the-doc-id" },
   { $inc: { "myprop": 123 } }
)
```

instead of :

```js
db.default.update(
   { "ecm:id": "the-doc-id" },
   { "myprop": 123 }
)
```

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

*   [Schemas in Nuxeo Studio]({{page space='studio' page='schemas'}})
*   [Repository Concepts]({{page page='repository-concepts'}})
*   [Document Type How-To Index]({{page page='document-type-how-to-index'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>