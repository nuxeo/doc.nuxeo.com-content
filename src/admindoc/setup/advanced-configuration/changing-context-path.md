---
title: Changing Context Path
labels:
    - context-path
    - path
confluence:
    ajs-parent-page-id: '16809993'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Changing+Context+Path
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Changing+Context+Path'
    page_id: '16810009'
    shortlink: GYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GYAAAQ'
    source_link: /display/ADMINDOC58/Changing+Context+Path
history:
    - 
        author: Solen Guitter
        date: '2015-08-28 09:24'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-10-14 17:10'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2012-10-29 16:24'
        message: >-
            Added missing nuxeo.url parameter and fixed wrong nuxeo.xml.nxftl
            path
        version: '5'
    - 
        author: Thierry Martins
        date: '2012-07-07 13:52'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Thierry Martins
        date: '2012-07-07 13:52'
        message: Adapt documentation to 5.6 templates structure
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-07-06 11:20'
        message: ''
        version: '2'
    - 
        author: Thierry Martins
        date: '2012-03-14 11:45'
        message: ''
        version: '1'

---
&nbsp;

&nbsp;

Nuxeo offers the capability to change the context path, i.e. `/nuxeo` in the URL of your application.

{{#> callout type='info' heading='Restriction'}}

This documentation is about the Tomcat distribution.

{{/callout}}

This configuration is done with two steps:

1.  Edit the configuration file `nuxeo.conf` to change the property `org.nuxeo.ecm.contextPath`.

    <pre>org.nuxeo.ecm.contextPath=/myapp

    # if you have configured nuxeo.url, update it as well
    nuxeo.url=http://localhost:8080/myapp </pre>

2.  Rename the file `$NUXEO_HOME/templates/common-base/conf/Catalina/localhost/nuxeo.xml.nxftl` into `$NUXEO_HOME/templates/common-base/conf/Catalina/localhost/myapp.xml.nxftl`

If you have already started Nuxeo with the old context path, you have to remove `$NUXEO_HOME/conf/Catalina/localhost/nuxeo.xml`.

&nbsp;