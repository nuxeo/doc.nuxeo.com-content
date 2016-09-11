---
title: 'Field, Variable and Parameter Value Enforcement'
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Field%2C+Variable+and+Parameter+Value+Enforcement
    canonical_source: >-
        https://doc.nuxeo.com/display/CORG/Field%2C+Variable+and+Parameter+Value+Enforcement
    page_id: '27099345'
    shortlink: 0YCdAQ
    shortlink_source: 'https://doc.nuxeo.com/x/0YCdAQ'
    source_link: /display/CORG/Field%2C+Variable+and+Parameter+Value+Enforcement
history:
    - 
        author: Julien Carsique
        date: '2015-11-04 17:33'
        message: ''
        version: '1'

---
{{! excerpt}}

Assertions on variables and parameters

{{! /excerpt}}

**This page is a work in progress**: it will address the recommended solution to check for field, variable and parameter values.
How to express and check that some can or cannot be null; how to mark security sensitive parameters; ...

### Programming With Assertions (aka assert statements)

See [http://docs.oracle.com/javase/7/docs/technotes/guides/language/assert.html](http://docs.oracle.com/javase/7/docs/technotes/guides/language/assert.html)

There are many situations where it is good to use assertions, including:

*   [Internal Invariants](http://docs.oracle.com/javase/7/docs/technotes/guides/language/assert.html#usage-invariants)
*   [Control-Flow Invariants](http://docs.oracle.com/javase/7/docs/technotes/guides/language/assert.html#usage-control)
*   [Preconditions, Postconditions, and Class Invariants](http://docs.oracle.com/javase/7/docs/technotes/guides/language/assert.html#usage-conditions)

There are also situations where you should _not_ use them:

*   Do _not_ use assertions for argument checking in public methods.
*   Do _not_ use assertions to do any work that your application requires for correct operation.

&nbsp;

&nbsp;

{{! Don't put anything here. }}

* * *