---
title: LTS 2023.16 / LTS 2023-HF16
description: Discover what's new in LTS 2023.16 / LTS 2023-HF16
review:
   comment: ''
   date: '2024-08-07'
   status: ok
labels:
    - release-notes
toc: true
tree_item_index: 370
---

{{! multiexcerpt name='nuxeo-server-updates-2023-16'}}
# What's New in LTS 2023.16 / LTS 2023-HF16

## Make Bulk Scroller Use a Specific Kafka Configuration


The Bulk Scroller is now using a slow consumer Kafka configuration

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32702](https://jira.nuxeo.com/browse/NXP-32702)

## Boolean Property Set to a Random String Value Using the Document REST API Should Throw an Exception


The "nuxeo.primitive.type.strict.validation" nuxeo.conf property allows to throw an error when decoding a string input as a boolean.

Boolean primitive type validation now relies on the `nuxeo.primitive.type.strict.validation` Framework property.


By default, it is set to `false`, keeping the previous behavior: at a low level, when trying to decode a string input as a boolean, fall back on 0 if the string cannot be decoded as a boolean, e.g. "foo".

If set to `true`, in such case, an `IllegalArgumentException` is thrown.

Consequently, when executing a REST API:
-  search request on a PageProvider and passing "foo" as a query parameter for a predicate on a boolean field
  or
- create a document request and  "foo" as a value for a boolean property

the server will respond with a 400 Bad Request status code

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32663](https://jira.nuxeo.com/browse/NXP-32663)

## Allow to Configure the Content Security Policy With nuxeo.conf Parameter


A new nuxeo.conf property allows to override the default Content Security Policy.

Added new `nuxeo.conf` property to override the default Content Security Policy:
```Java
nuxeo.content.security.policy=img-src data: blob: *; default-src blob: *; script-src 'nonce-dummy' 'unsafe-eval' 'strict-dynamic'; style-src 'unsafe-inline' *; font-src data: *
```

<i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;More on JIRA ticket [NXP-32652](https://jira.nuxeo.com/browse/NXP-32652)


# Learn More

[More information about released changes and fixed bugs](https://jira.nuxeo.com/secure/ReleaseNote.jspa?projectId=10011&version=22964) is available in our bug tracking tool.

{{! /multiexcerpt}}
