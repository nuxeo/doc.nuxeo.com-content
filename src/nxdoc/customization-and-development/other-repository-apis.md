---
title: Other Repository APIs
review:
    comment: ''
    date: ''
    status: ok
labels:
    - api
confluence:
    ajs-parent-page-id: '17334392'
    ajs-parent-page-title: Customization and Development
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Other+Repository+APIs
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Other+Repository+APIs'
    page_id: '17334379'
    shortlink: a4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/a4AIAQ'
    source_link: /display/NXDOC58/Other+Repository+APIs
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 14:56'
        message: 'emove children display macro '
        version: '37'
    - 
        author: Anonymous
        date: '2013-10-28 12:49'
        message: ''
        version: '36'
    - 
        author: Solen Guitter
        date: '2013-10-28 12:49'
        message: ''
        version: '35'
    - 
        author: Alain Escaffre
        date: '2013-10-27 20:44'
        message: ''
        version: '34'
    - 
        author: Alain Escaffre
        date: '2013-10-27 20:44'
        message: ''
        version: '33'
    - 
        author: Solen Guitter
        date: '2013-10-21 14:51'
        message: ''
        version: '32'
    - 
        author: Alain Escaffre
        date: '2013-10-20 00:37'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-09-20 17:53'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-09-20 17:52'
        message: ''
        version: '29'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:58'
        message: ''
        version: '28'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:57'
        message: ''
        version: '27'
    - 
        author: Alain Escaffre
        date: '2013-09-17 03:56'
        message: ''
        version: '26'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:47'
        message: ''
        version: '25'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:42'
        message: ''
        version: '24'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:41'
        message: ''
        version: '23'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:33'
        message: ''
        version: '22'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:26'
        message: ''
        version: '21'
    - 
        author: Benjamin Jalon
        date: '2012-09-21 18:34'
        message: Migrated to Confluence 4.0
        version: '20'
    - 
        author: Benjamin Jalon
        date: '2012-09-21 18:34'
        message: Remove RMI/EJB stuff as no more applicable
        version: '19'
    - 
        author: Anahide Tchertchian
        date: '2011-04-18 18:57'
        message: ''
        version: '18'
    - 
        author: Florent Guillaume
        date: '2011-02-07 17:01'
        message: ''
        version: '17'
    - 
        author: Thierry Delprat
        date: '2011-02-07 16:56'
        message: ''
        version: '16'
    - 
        author: Thierry Delprat
        date: '2010-12-22 18:18'
        message: ''
        version: '15'
    - 
        author: Thierry Delprat
        date: '2010-12-22 18:18'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-12-10 11:06'
        message: ''
        version: '13'
    - 
        author: bgreenway
        date: '2010-12-09 18:17'
        message: ''
        version: '12'
    - 
        author: Thierry Delprat
        date: '2010-10-15 00:22'
        message: ''
        version: '11'
    - 
        author: Thierry Delprat
        date: '2010-10-15 00:19'
        message: ''
        version: '10'
    - 
        author: Thierry Delprat
        date: '2010-10-15 00:19'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2010-10-14 23:42'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2010-10-14 23:41'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2010-10-14 23:40'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2010-10-14 23:06'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 22:49'
        message: ''
        version: '4'
    - 
        author: Admin name placeholder
        date: '2010-03-29 19:24'
        message: ''
        version: '3'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:09'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:07'
        message: ''
        version: '1'

---
{{! excerpt}}

This section is about the SOAP bridge, CMIS and WebDAV APIs, as well as URLs to use when downloading a binary content.

{{! /excerpt}}

Nuxeo has generalized the REST approach regarding remote accesses for sake of easiness (from a developer perspective) and wide adoption in Content Management / web applications field. See the [complete documentation of this REST API]({{page page='rest-api'}}).

We also provide[ a toolkit and guidelines]({{page page='soap-bridge'}}) for wrapping services of the platform SOAP style. Note you'll find only a limited set of SOAP web-services&nbsp;out-of-the box (beside the CMIS implementation), since we didn't make it our main design pattern for accessing the repository remotely.

Finally, the Nuxeo Platform also implements standard&nbsp;[CMIS]({{page page='cmis-for-nuxeo'}})&nbsp;and [WebDAV]({{page page='webdav'}}) interfaces. Those latter APIs are more strictly "content" oriented, mainly providing CRUD operations on documents.

**In this section:**

*   [Downloading Files]({{page space='NXDOC58' page='Downloading Files'}})
*   [SOAP Bridge]({{page space='NXDOC58' page='SOAP Bridge'}})
*   [CMIS for Nuxeo]({{page space='NXDOC58' page='CMIS for+Nuxeo'}})
*   [WebDAV]({{page space='NXDOC58' page='WebDAV'}})
*   [OpenSocial, OAuth and the Nuxeo Platform]({{page space='NXDOC58' page='OpenSocial%2C OAuth+and+the+Nuxeo+Platform'}})
*   [Cross-Origin Resource Sharing (CORS)](/pages/viewpage.action?pageId=17334317)
*   [Legacy Restlets]({{page space='NXDOC58' page='Legacy Restlets'}})