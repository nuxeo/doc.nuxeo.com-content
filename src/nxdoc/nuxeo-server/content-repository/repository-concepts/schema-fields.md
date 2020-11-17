---
title: Schema Fields
review:
    comment: ''
    date: '2020-11-17'
    status: ok
labels:
    - lts2016-ok
    - schema-component
    - fguillaume
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950302'
    ajs-parent-page-title: Repository Concepts
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Schema+Fields
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Schema+Fields'
    page_id: '20517807'
    shortlink: rxM5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/rxM5AQ'
    source_link: /display/NXDOC/Schema+Fields
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

## Simple Types

The Nuxeo Platform internal data model is based on the following data types:

- `String`: a Unicode string value.
- `Long`: a 64-bit signed integer.
- `Double`: a double-precision 64-bit IEEE 754 floating point number.
- `Boolean`: a [boolean data type](https://en.wikipedia.org/wiki/Boolean_data_type "Wikipedia Boolean data type article").
- `Calendar`: a date, more specifically an instant in time with milliseconds resolution.

### Calendar Timezone

Because most storage layers are unable to store an instant in time with an associated timezone to interpret it, dates in the Nuxeo Platform are usually translated to the server timezone, and are read back with the server timezone.

For instance one could write a date as _"1st January 2017 at 2pm London Time"_ but if the server is working in the _Paris Time_ timezone, it would be read back as _"1st January 2017 at 3pm Paris Time"_, because there is a one hour difference between _London Time_ and _Paris Time_ (this is a simplification of how timezones work but is sufficient here). The important point is that both _"1st January 2017 at 2pm London Time"_ (the value written) and _"1st January 2017 at 3pm Paris Time"_ (the value read) represent the **same instant in time**.

## Arrays

A Nuxeo Platform field can also store an array of the simple types described above.

In JSON an array value would be represented for instance as:
```json
["a", "b", "c", "d"]
```

## Complex Types

A Nuxeo Platform field can also store a sub-document defined by a map of sub-field to value.

In JSON a complex value would be represented for instance as:
```json
{
    "foo": 1,
    "bar": "something",
    "baz": [42,1729]
}
```

Complex types can contain other complex types:
```json
{
    "foo": 1,
    "bar": "something",
    "baz": {
        "name": "bob",
        "address": "here",
        "age": 12
    }
}
```


## Complex Lists

A Nuxeo Platform field can also store a list of complex types.

In JSON a complex list value would be represented for instance as:
```json
[{
    "foo": 1,
    "bar": "something",
    "baz": [42,1729]
},{
    "foo": 2,
    "bar": "something else",
    "baz": [1,2,3,5,7,11]
}]
```

## XSD Mapping

A standard set of XSD types are allowed in Nuxeo Platform schemas, and are mapped to the internal data model as follows:

|XSD Type|Java Type|
|---|---|
|xsd:string|String|
|xsd:normalizedString|String|
|xsd:long|Long|
|xsd:unsignedLong|Long|
|xsd:integer|Long|
|xsd:int|Long|
|xsd:unsignedInt|Long|
|xsd:positiveInteger|Long|
|xsd:nonPositiveInteger|Long|
|xsd:nonNegativeInteger|Long|
|xsd:short|Long|
|xsd:unsignedShort|Long|
|xsd:double|Double|
|xsd:float|Double|
|xsd:decimal|Double|
|xsd:boolean|Boolean|
|xsd:datetime|Calendar|
|xsd:date|Calendar|
|xsd:time|Calendar|

## Unset Values

All fields allow an additional **unset** value, which is expressed differently depending on the language (`null` in Java or JavaScript for example) or storage used (`NULL` in SQL databases, unset in MongoDB).

Some storage mechanisms, like MongoDB, distinguish between a `null` value and an unset value, but Nuxeo Platform takes care that at the storage level there are only unset values, to minimize document size and for consistency.

For arrays and complex lists, no distinction is made between an **unset** value and an **empty** array/list; they are semantically equivalent for the Nuxeo Platform data model.

## Default values

A schema can express that a field has a _default value_. When this is the case, it **replace the unset value** with this default. In particular this means that one can never read a `null` from a field that has a default value.

## Delta Updates

Since Nuxeo Platform 6.0 ([NXP-15103](https://jira.nuxeo.com/browse/NXP-15103)) a new update model for `Long` properties is available using `DeltaLong`.

A `DeltaLong` is stored as a `Long`, but when used in the Java API to update a field (`DocumentModel.setPropertyValue()`) it specifies that the update should be done as an increment at the storage level rather than as a replacement of the old value. This allows for concurrent updates that don't lose value.

The standard usage to add a value "count" to a property "myprop" is:&nbsp;

```java
long count = 1;
Number oldValue = (Number) doc.getPropertyValue("myprop");
Number newValue = DeltaLong.valueOf(oldValue, count);
doc.setPropertyValue("myprop", newValue);
```

`DeltaLong.valueOf(oldValue, count)`&nbsp;should be used in preference over `new DeltaLong(oldValue, count)` because it can deal with the case where the old value is `null` or already a `DeltaLong`&nbsp;(the latter can happen if you're re-updating a property which hasn't been saved yet).

When using a SQL backend, this will emit code like (supposing the old value was 41):

```sql
UPDATE myschema SET myprop = myprop + 1 WHERE id = 'the-doc-id';
```

instead of:

```sql
UPDATE myschema SET myprop = 42 WHERE id = 'the-doc-id';
```

which gives different results if two threads are executing it at the same time.

For a MongoDB backend, the update will be done using:

```js
db.default.update(
   { "ecm:id": "the-doc-id" },
   { $inc: { "myprop": 1 } }
)
```

instead of :

```js
db.default.update(
   { "ecm:id": "the-doc-id" },
   { $set: { "myprop": 42 } }
)
```


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [Schemas in Nuxeo Studio]({{page space='studio' page='schemas'}})
- [Repository Concepts]({{page page='repository-concepts'}})
- [Document Type How-To Index]({{page page='document-type-how-to-index'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>
