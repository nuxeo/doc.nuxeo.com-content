---
title: Customization and Development
review:
    comment: ''
    date: ''
    status: ok
labels:
    - dev-guide
confluence:
    ajs-parent-page-id: '17334400'
    ajs-parent-page-title: Developer Documentation Center
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Customization+and+Development
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Customization+and+Development'
    page_id: '17334392'
    shortlink: eIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/eIAIAQ'
    source_link: /display/NXDOC58/Customization+and+Development
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 15:20'
        message: 'emove children display macro  '
        version: '37'
    - 
        author: Anonymous
        date: '2013-10-28 10:53'
        message: ''
        version: '36'
    - 
        author: Alain Escaffre
        date: '2013-10-27 20:35'
        message: ''
        version: '35'
    - 
        author: Alain Escaffre
        date: '2013-10-27 19:33'
        message: ''
        version: '34'
    - 
        author: Alain Escaffre
        date: '2013-10-27 18:49'
        message: ''
        version: '33'
    - 
        author: Alain Escaffre
        date: '2013-10-27 18:48'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2013-09-20 14:36'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-09-04 15:05'
        message: ''
        version: '30'
    - 
        author: Solen Guitter
        date: '2012-09-06 16:37'
        message: ''
        version: '29'
    - 
        author: Solen Guitter
        date: '2012-09-06 16:37'
        message: Updated explorer links to 5.6
        version: '28'
    - 
        author: Solen Guitter
        date: '2012-05-16 13:39'
        message: Removed obsolete Tutorial and sample
        version: '27'
    - 
        author: Solen Guitter
        date: '2011-09-21 12:05'
        message: 'Updated explorer links to 5.4.2 '
        version: '26'
    - 
        author: Solen Guitter
        date: '2011-07-25 10:22'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2011-03-03 18:52'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2011-03-03 17:41'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2011-03-02 18:04'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2011-03-02 18:03'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2010-12-28 15:34'
        message: ''
        version: '20'
    - 
        author: Thierry Delprat
        date: '2010-10-11 22:48'
        message: ''
        version: '19'
    - 
        author: Thierry Delprat
        date: '2010-10-11 22:43'
        message: ''
        version: '18'
    - 
        author: Thierry Delprat
        date: '2010-10-11 22:41'
        message: ''
        version: '17'
    - 
        author: Thierry Delprat
        date: '2010-10-11 22:39'
        message: ''
        version: '16'
    - 
        author: Thierry Delprat
        date: '2010-10-11 22:35'
        message: ''
        version: '15'
    - 
        author: Thierry Delprat
        date: '2010-10-11 18:38'
        message: ''
        version: '14'
    - 
        author: Thierry Delprat
        date: '2010-10-11 18:23'
        message: ''
        version: '13'
    - 
        author: Julien Carsique
        date: '2010-09-20 17:48'
        message: ''
        version: '12'
    - 
        author: Julien Carsique
        date: '2010-09-20 17:48'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2010-08-12 09:12'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2010-08-03 14:18'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2010-07-26 11:54'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2010-07-26 11:54'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2010-07-26 11:44'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2010-07-26 11:44'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2010-07-26 11:40'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-07-26 10:36'
        message: ''
        version: '3'
    - 
        author: Admin name placeholder
        date: '2010-03-29 19:24'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:21'
        message: ''
        version: '1'

---
<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{! excerpt}}

After having gone through an [architecture tour]({{page page='architecture'}}) in the previous section, this section focuses on providing an extensive documentation on the various modules of the platform. You will learn all the required theoretical knowledge and find some useful snippets of code.

{{! /excerpt}}

In this section, authors consider you know how to practically apply what you read, by using [Nuxeo Studio]({{page space='studio' page='nuxeo-online-services'}}) (for producing the required XML) or writing Java plugins using [Nuxeo IDE]({{page page='quick-start-dev-guide'}}). The role of the [Dev Cook Book]({{page page='dev-cookbook'}}) section and [the tutorial section of Nuxeo Studio documentation]({{page space='studio' page='tutorials'}}) is to provide steps by steps guides.

</div><div class="column medium-6">

**Section's content:**

*   [Extension points configuration]({{page space='NXDOC58' page='Extension points+configuration'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Inside the Nuxeo Platform, pretty much everything is about extension points. Extension points are used to let you contribute XML files to the Nuxeo components. This section explains the basic steps to contribute a new XML file to an extension point.</span>
*   [Repository features]({{page space='NXDOC58' page='Repository features'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter encompasses features related to the repository: the concepts used for documents types, how to retrieve documents, how to version them, how to add security policies to access documents, how tags work.</span>
*   [Authentication and User Management]({{page space='NXDOC58' page='Authentication and+User+Management'}})
*   [REST API]({{page space='NXDOC58' page='REST API'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Nuxeo REST API is available on a Nuxeo server at the following URL:&nbsp;[http://localhost:8080/nuxeo/api/v1/*](http://localhost:8080/nuxeo/api/v1/*). This section describes all the mechanisms that are offered by our REST API as well as all the tools useful for using it (clients, format of queries, etc.).</span>
*   [Other Repository APIs]({{page space='NXDOC58' page='Other Repository+APIs'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This section is about the SOAP bridge, CMIS and WebDAV APIs, as well as URLs to use when downloading a binary content.</span>
*   [Directories and Vocabularies]({{page space='NXDOC58' page='Directories and+Vocabularies'}})
*   [Using the Java API Serverside]({{page space='NXDOC58' page='Using the+Java+API+Serverside'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page explains how to use the Nuxeo Java API.</span>
*   [Automation]({{page space='NXDOC58' page='Automation'}})&nbsp;&mdash;&nbsp;<span class="smalltext">In this section you'll find information on how to use the Automation service, how to contribute a new chain, a new operation, etc.</span>
*   [Customizing the web app]({{page space='NXDOC58' page='Customizing the+web+app'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter presents the different ways to customize what is displayed on the application.</span>
*   [Workflow]({{page space='NXDOC58' page='Workflow'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This page and its subpages explain all the concepts and provide a documentation on how the workflow engine works.</span>
*   [WebEngine (JAX-RS)](https://doc.nuxeo.com/pages/viewpage.action?pageId=17334372)
*   [Other services]({{page space='NXDOC58' page='Other services'}})
*   [Other UI Frameworks]({{page space='NXDOC58' page='Other UI+Frameworks'}})&nbsp;&mdash;&nbsp;<span class="smalltext">Nuxeo uses several UI frameworks beside the default JSF technology.</span>
*   [Additional Modules]({{page space='NXDOC58' page='Additional Modules'}})&nbsp;&mdash;&nbsp;<span class="smalltext">This chapter presents how to apprehend and customize the additional packages available on the Nuxeo Platform, typically from the Nuxeo Marketplace.</span>
*   [Packaging]({{page space='NXDOC58' page='Packaging'}})
*   [Advanced topics]({{page space='NXDOC58' page='Advanced topics'}})

</div></div>