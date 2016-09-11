---
title: Event Bus
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334300'
    ajs-parent-page-title: Architecture
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Event+Bus
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Event+Bus'
    page_id: '17334322'
    shortlink: MoAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MoAIAQ'
    source_link: /display/NXDOC58/Event+Bus
history:
    - 
        author: Solen Guitter
        date: '2013-09-24 11:00'
        message: ormattin
        version: '5'
    - 
        author: Alain Escaffre
        date: '2013-09-23 08:08'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2013-09-23 08:07'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2013-09-23 08:00'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2013-09-23 07:59'
        message: ''
        version: '1'

---
{{! excerpt}}

When you need to integrate some features of an external application into Nuxeo, or want Nuxeo to push data into an external application, using the Nuxeo event system is usually a good solution.

{{! /excerpt}}

![]({{file name='EventBus.png'}} ?w=500,border=true)

The system allows to contribute event listeners (Java classes) or event handlers ([defined in Studio]({{page space='studio' page='event-handlers'}})) that subscribe to Platform events such as user login/logout, document creation, document update, document move,&nbsp; workflow started, etc. Those Java classes or automation chains are then executed either synchronously in the transaction, or synchronously out of the transaction, or asynchronously.

The event bus system is a nice way to implement some triggers in the document repository, and to let the repository notify other elements of your IT system of the changes that happen in the repository.

You will find more information on the [Customization and development section]({{page page='customization-and-development'}}) dedicated to [event listeners]({{page page='events-and-listeners'}}).