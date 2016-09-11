---
title: Smart search operators
review:
    comment: ''
    date: ''
    status: ok
labels:
    - search
    - search-operators
    - smart-search
confluence:
    ajs-parent-page-id: '16092601'
    ajs-parent-page-title: Smart Search
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Smart+search+operators
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Smart+search+operators'
    page_id: '16092602'
    shortlink: uo31
    shortlink_source: 'https://doc.nuxeo.com/x/uo31'
    source_link: /display/USERDOC58/Smart+search+operators
history:
    - 
        author: Manon Lumeau
        date: '2016-02-08 15:04'
        message: emove UNLIKE
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-11-20 18:34'
        message: ''
        version: '1'

---
Smart search enables to build queries using the fields and operators below.

<table><tbody><tr><th colspan="1">Metadata</th><th colspan="1">Search field</th><th colspan="1">Operator</th></tr><tr><td colspan="1">

Content

</td><td colspan="1">Text field</td><td colspan="1">

LIKE

</td></tr><tr><td colspan="1">Contributors</td><td colspan="1">User search</td><td colspan="1">

IN
NOT IN

</td></tr><tr><td colspan="1">Coverage</td><td colspan="1">Vocabulary</td><td colspan="1">

IN
EQUALS
LIKE
CONTAINS
NOT IN
IS DIFFERENT FROM
NOT LIKE
DOES NOT CONTAIN

</td></tr><tr><td colspan="1">

Created at

Expire on

Last modified at

</td><td colspan="1">Calendar</td><td colspan="1">

BETWEEN
NOT BETWEEN
GREATER
LESS

</td></tr><tr><td colspan="1">

Description

Format

Language

Rights

Source

Title

</td><td colspan="1">Text field</td><td colspan="1">

EQUALS
LIKE
CONTAINS
IS DIFFERENT FROM
NOT LIKE
DOES NOT CONTAIN

</td></tr><tr><td colspan="1">

Nature

Subjects

</td><td colspan="1">Vocabulary</td><td colspan="1">

IN
NOT IN

</td></tr><tr><td colspan="1">Path</td><td colspan="1">Text field + Browse option</td><td colspan="1">

STARTS WITH
DOES NOT START WITH

</td></tr></tbody></table>

**Date fields**

*   BETWEEN: Doesn't include the selected dates.
    Example: a search on documents last modified BETWEEN the 10/27/11 and 01/30/12 (Query: `dc:modified BETWEEN DATE '2011-10-27' AND DATE '2012-01-31'`) will return the documents modified between the 10/28/11 00:00 and 01/29/12 23:59.

*   NOT BETWEEN: Doesn't include the selected dates.
    Example: a search on documents last modified NOT BETWEEN the 10/27/11 and 01/30/12 (Query: `dc:modified NOT BETWEEN DATE '2011-10-27' AND DATE '2012-01-31'`) will return the documents modified until the 10/26/11 23:59 and from the 01/31/12 00:00.&nbsp;

*   GREATER:&nbsp;Searches for documents whose selected date type (creation, modification...) is more recent than the selected one. Selected date is not included.
    Example: A search on documents with a "Created at" date GREATER than 10/27/11 will return all the documents created from the 10/28/11 00:00.

*   LESS: Searches for documents whose selected date type (creation, modification...) is older than the selected one. Selected date is not included.

    Example: A search on documents with a "Created at" date LESS than 10/27/11 will return all the documents created until the 10/26/11 23:59.

**Vocabulary and text fields**

*   IN: Searches for documents that hold the selected value(s).
    Example: A search for documents whose "Nature" is IN "invoice" will return all the documents that "Invoice" selected as their nature.

*   NOT IN: Searches for documents that hold a value different from the one(s) selected.
    Example: A search for documents whose "Nature" is NOT IN "invoice" will return all the documents that have any other nature value than "invoice". Documents for which the nature hasn't been filled in are ignored.

*   LIKE: On the "Content" field, performs a fulltext search. Full text search uses stemming. The stemming search option will return the documents containing words that have the same stem as the word you typed. On other fields, it performs an EQUALS search, but can be associated with the % wild card. LIKE search is case-insensitive on Content field, and case-sensitive on other fields.
    Examples: A search on the content on the word "Reading" will return documents containing in their content "Read", "reads" etc. A search on a "title" LIKE "Function%" will return documents whose title starts with Function, Functional, Functions.

*   NOT LIKE: On the "Content" field, performs a fulltext search. Full text search uses stemming. In this case, the stemming search option will return the assets that don't contain words that have the same stem as the word you typed. On other fields, it performs an IS DIFFERENT FROM search, but can be associated with the % wild card. NOT LIKE search is case-insensitive on Content field, and case-sensitive on other fields.
    Examples: A search on the content on the word "Reading" will return documents that don't contain in their content "Read", "reads" etc. A search on a "title" NOT LIKE "Function%" will return documents whose title don't start with Function, Functional, Functions. In general, the NOT LIKE operator is used in association with another search (LIKE for instance), to restrain the search results.

*   CONTAINS: Searches for the typed or selected string of characters, preceded or followed by any character. In other words, it can be used to look for properties where stemming cannot be applied, such as IDs.
    Example: A search for a "source" that CONTAINS "http" or "www" can be used to look for documents that have a web resource as their source.

*   DOES NOT CONTAIN: Searches for any string of character but the one typed, preceded or followed by any character.&nbsp;In other words, it can be used to look for properties where stemming cannot be applied, such as IDs.
    Example: A search for a "source" that DOES NOT CONTAIN "http" or "www" ca be used to look for documents that don't have a web resource as their source.

*   EQUALS: Searches for the exact same string of characters as what is typed or selected. EQUALS search is case-sensitive and empty values are ignored.
    Example: A search for a title EQUALS to "My document" will return the documents whose title is "My document" but not documents whose title is "my document" or documents holding "document" in their title.

*   IS DIFFERENT FROM: Searches for strings of characters different from the one selected or typed. IS DIFFERENT FROM search is case-sensitive and empty values are ignored.
    Example: A search for documents whose coverage IS DIFFERENT FROM "Europe > France" will return all the documents that have a coverage filled in, except those who have the value "Europe > France".

*   STARTS WITH: Searches for all the children of the selected folder.
    Example: A search for the documents in the workspace "Invoices" will return all the documents that are in this workspaces, including possible sub-workspaces.

*   DOES NOT START WITH: Searches for all the documents in the application except those in the selected folder.
    Example: A search for documents that are not in the Invoice workspace will return the documents in all the other workspaces (including sub-workspaces and their content), in templates, in sections and in other domains if there are any.