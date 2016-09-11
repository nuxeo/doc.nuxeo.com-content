---
title: Generic Layout Usage
review:
    comment: ''
    date: ''
    status: ok
labels:
    - layout
    - generic-layout
confluence:
    ajs-parent-page-id: '17334360'
    ajs-parent-page-title: 'Layouts and Widgets (Forms, Listings, Grids)'
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Generic+Layout+Usage
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Generic+Layout+Usage'
    page_id: '17334308'
    shortlink: JIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JIAIAQ'
    source_link: /display/NXDOC58/Generic+Layout+Usage
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:38'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-01-23 17:34'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:31'
        message: Added related topic
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:18'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-07-05 16:46'
        message: Migrated to Confluence 4.0
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-07-05 16:46'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2012-06-04 14:14'
        message: ''
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2012-06-04 14:12'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2012-06-04 14:12'
        message: ''
        version: '3'
    - 
        author: Anahide Tchertchian
        date: '2012-06-04 14:11'
        message: ''
        version: '2'
    - 
        author: Anahide Tchertchian
        date: '2010-10-12 15:12'
        message: ''
        version: '1'

---
{{! excerpt}}

Layouts can be used with other kind of objects than documents.

{{! /excerpt}}

The field definition has to match a document property for which setters and getters will be available, or the&nbsp;`value` property must be passed explicitly for the binding to happen. Depending on the widget, other kinds of bindings can be done.

Since Nuxeo Platform 5.6, the field definition can contain the complete binding itself and be independent from the value passed to the tag. It just needs to be formatted like an EL expression, for instance: `#{myBinding}`.

&nbsp;