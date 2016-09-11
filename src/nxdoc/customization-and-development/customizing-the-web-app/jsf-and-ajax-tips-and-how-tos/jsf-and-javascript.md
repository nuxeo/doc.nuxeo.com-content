---
title: JSF and Javascript
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334513'
    ajs-parent-page-title: JSF and Ajax Tips and How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: JSF+and+Javascript
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/JSF+and+Javascript'
    page_id: '17334463'
    shortlink: v4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/v4AIAQ'
    source_link: /display/NXDOC58/JSF+and+Javascript
history:
    - 
        author: Solen Guitter
        date: '2014-01-23 16:00'
        message: ''
        version: '22'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: Migrated to Confluence 4.0
        version: '21'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: ''
        version: '20'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:53'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:24'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
{{! excerpt}}

Getting a tag client id with JavaScript might be an issue. Here's how you can get your tag using DOM.

{{! /excerpt}}

```
document.getElementById('div-id').childNodes[0]

```