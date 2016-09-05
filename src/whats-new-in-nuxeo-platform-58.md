---
title: What's New in Nuxeo Platform 5.8
toc: true
confluence:
    ajs-parent-page-id: '3868746'
    ajs-parent-page-title: Nuxeo Documentation Center Home
    ajs-space-key: MAIN
    ajs-space-name: Main
    canonical: What%27s+New+in+Nuxeo+Platform+5.8
    canonical_source: 'https://doc.nuxeo.com/display/MAIN/What%27s+New+in+Nuxeo+Platform+5.8'
    page_id: '12911922'
    shortlink: MgXF
    shortlink_source: 'https://doc.nuxeo.com/x/MgXF'
    source_link: /display/MAIN/What%27s+New+in+Nuxeo+Platform+5.8
history:
    - 
        author: Solen Guitter
        date: '2014-01-20 10:56'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-01-20 10:56'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-01-20 10:55'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-09-23 09:30'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-09-23 09:29'
        message: ''
        version: '18'
    - 
        author: Anahide Tchertchian
        date: '2013-08-12 11:48'
        message: add link to 5.7.2 release notes
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-08-05 12:06'
        message: Added Tomcat 7 support
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-07-26 10:22'
        message: Added link to release notes
        version: '15'
    - 
        author: Florent Guillaume
        date: '2013-07-25 14:02'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-07-24 17:29'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-07-24 17:22'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-07-24 16:59'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-07-24 16:56'
        message: Added bulk edit and workflow configuration
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-07-10 09:19'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-07-10 09:18'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-06-18 18:46'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-06-18 15:08'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-06-18 15:08'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-06-18 14:33'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-01-04 12:05'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-12-03 13:00'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-12-03 13:00'
        message: ''
        version: '1'

---
Nuxeo Studio benefits from several new features and improvements: the DAM module can now be customized in Studio, with the definition of specific content views and new facets. New parameters have also been added to make the workflow always more configurable (Exclusive Node for instance). New tabs widget types enable you to display tabs within your tabs (aka sub tabs).

The Nuxeo Platform now supports Tomcat 7.

### For administrators

New parameters have been added to nuxeo.conf to make the drag and drop more configurable and to make sessions more configurable.

The Nuxeo Platform now uses Yammer Metrics, enabling lots of internal metrics, accessible from JMX or Graphite.

## On a functional side

The Digital Asset Management has been revamped. Major changes include that it now supports HTML5 drag and drop, just like the DM module.

On the same principle of unifying the different modules of the platform, the Document Management module now includes a bulk edit feature, just like the DAM module.