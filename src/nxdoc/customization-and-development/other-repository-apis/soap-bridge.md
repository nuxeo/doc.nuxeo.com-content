---
title: SOAP Bridge
review:
    comment: ''
    date: ''
    status: ok
labels:
    - soap
toc: true
confluence:
    ajs-parent-page-id: '17334379'
    ajs-parent-page-title: Other Repository APIs
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: SOAP+Bridge
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/SOAP+Bridge'
    page_id: '17334384'
    shortlink: cIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cIAIAQ'
    source_link: /display/NXDOC58/SOAP+Bridge
history:
    - 
        author: Alain Escaffre
        date: '2013-10-20 00:54'
        message: ''
        version: '26'
    - 
        author: Alain Escaffre
        date: '2013-10-20 00:41'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2013-09-20 18:25'
        message: ''
        version: '24'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:45'
        message: ''
        version: '23'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:44'
        message: ''
        version: '22'
    - 
        author: Alain Escaffre
        date: '2013-09-17 01:44'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2013-07-23 17:39'
        message: Fixed typos
        version: '20'
    - 
        author: Frédéric Vadon
        date: '2013-07-18 07:35'
        message: typo in a web link
        version: '19'
    - 
        author: Solen Guitter
        date: '2012-09-14 10:32'
        message: Migrated to Confluence 4.0
        version: '18'
    - 
        author: Solen Guitter
        date: '2012-09-14 10:32'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2011-11-15 15:34'
        message: ''
        version: '16'
    - 
        author: Antoine Taillefer
        date: '2011-11-15 00:23'
        message: ''
        version: '15'
    - 
        author: Antoine Taillefer
        date: '2011-11-14 17:52'
        message: ''
        version: '14'
    - 
        author: Antoine Taillefer
        date: '2011-11-14 16:11'
        message: ''
        version: '13'
    - 
        author: Antoine Taillefer
        date: '2011-11-14 15:07'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2011-03-04 10:03'
        message: fixed typoes
        version: '11'
    - 
        author: Thierry Delprat
        date: '2010-12-22 18:15'
        message: ''
        version: '10'
    - 
        author: Thierry Delprat
        date: '2010-12-22 17:41'
        message: ''
        version: '9'
    - 
        author: Thierry Delprat
        date: '2010-12-22 17:39'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2010-12-22 17:24'
        message: ''
        version: '7'
    - 
        author: Admin name placeholder
        date: '2010-03-29 19:26'
        message: ''
        version: '6'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:14'
        message: ''
        version: '5'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:14'
        message: ''
        version: '4'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:13'
        message: ''
        version: '3'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:13'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:12'
        message: ''
        version: '1'

---
If you want to access the SOAP web service:

*   To list all the deployed endpoints:

    *   `http://server:port/nuxeo/webservices/nuxeoremoting` to list all the deployed endpoints (when using SUN Metro),
    *   `http://server:port/jbossws/services` (when using JbossWS),
*   To access NuxeoRemoting WSDL: `http://server:port/nuxeo/webservices/nuxeoremoting?wsdl,`
*   To access NuxeoAudit WSDL: `http://server:port/nuxeo/webservices/nuxeoaudit?wsdl`.

The point of SOAP web services is not to have a 1 to 1 mapping with the Java services interfaces. The goal is to provide a "coarse grained" high level API. So it's easy to build new SOAP based web services on top of Nuxeo:

*   The JAX-WS infrastructure is already there,
*   The authentication system is already in place,
*   We provide the base class to manage Repository and security (AbstractNuxeoWebService),
*   We already provide JAXB objects for Documents, Security descriptors, properties ...

You can find a step-by-step example on the page [Building a SOAP-Based WebService in the Nuxeo Platform]({{page page='building-a-soap-based-webservice-in-the-nuxeo-platform'}}).

You might also want to build a **web service client** in Nuxeo to be able to query a remote web service. A simple example is available on the page [Building a SOAP-Based WebService Client in Nuxeo]({{page page='building-a-soap-based-webservice-client-in-nuxeo'}}).