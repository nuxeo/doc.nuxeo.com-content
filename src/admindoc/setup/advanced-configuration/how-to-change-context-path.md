---
title: How to Change Context Path
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            BLOCK

            Learn how to change the context path of your Nuxeo Platform, i.e.
            the /nuxeo in the URL of your application.
              
        level: Beginner
        tool: XML Editor
        topics: Context Path
labels:
    - url
    - howto
    - last-review-20141128
    - context-path
confluence:
    ajs-parent-page-id: '21921850'
    ajs-parent-page-title: Advanced Configuration
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: How+to+Change+Context+Path
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/How+to+Change+Context+Path'
    page_id: '21921920'
    shortlink: gIBOAQ
    shortlink_source: 'https://doc.nuxeo.com/x/gIBOAQ'
    source_link: /display/ADMINDOC60/How+to+Change+Context+Path
history:
    - 
        author: Solen Guitter
        date: '2014-12-01 22:26'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2014-11-28 11:52'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-11-28 11:27'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-11-28 11:26'
        message: 'Add related pages, make page available in how-to index'
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
The Nuxeo Platform offers the capability to change the context path, i.e. `/nuxeo` in the URL of your application.

This configuration is done with two steps:

1.  Edit the [configuration file `nuxeo.conf` ]({{page page='configuration-parameters-index-nuxeoconf'}}) to change the property `org.nuxeo.ecm.contextPath`.

    ```bash
    org.nuxeo.ecm.contextPath=/myapp

    # if you have configured nuxeo.url, update it as well
    nuxeo.url=http://localhost:8080/myapp 
    ```

2.  Rename the file `$NUXEO_HOME/templates/common-base/conf/Catalina/localhost/nuxeo.xml.nxftl` into `$NUXEO_HOME/templates/common-base/conf/Catalina/localhost/myapp.xml.nxftl`.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Administration How-Tos'}}

*   [How to Configure a Multidirectory for Users and Groups]({{page page='how-to-configure-a-multidirectory-for-users-and-groups'}})
*   [How-To Index]({{page space='nxdoc60' page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

*   [HTTP and HTTPS Reverse-Proxy Configuration]({{page page='http-and-https-reverse-proxy-configuration'}})
*   [Default URL Patterns]({{page space='nxdoc60' page='default-url-patterns'}})

{{/panel}}</div></div>