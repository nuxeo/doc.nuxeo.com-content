---
title: JSF tag library registration
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334513'
    ajs-parent-page-title: JSF and Ajax Tips and How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: JSF+tag+library+registration
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/JSF+tag+library+registration'
    page_id: '17334462'
    shortlink: voAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/voAIAQ'
    source_link: /display/NXDOC58/JSF+tag+library+registration
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 12:07'
        message: ''
        version: '21'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: Migrated to Confluence 4.0
        version: '20'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:55'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:34'
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
        date: '2010-07-21 20:05'
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
&nbsp;

&nbsp;

When registering a new tag library, you would usually declare the facelets taglib file in the `web.xml` configuration file.

As this parameter can only be declared once, and is already declared in the nuxeo base ui module, you cannot declare it using the Nuxeo deployment feature.

A workaround is to put you custom taglib file `mylibary.taglib.xml` in the `META-INF` folder of your custom jar: it will be registered automatically (even if it triggers an error log at startup).

As a reminder, the tag library documentation file, `mylibrary.tld`, is usually placed in the same folder than the taglib file, but it is only used for documentation: it plays no role in the tags registration in the application.