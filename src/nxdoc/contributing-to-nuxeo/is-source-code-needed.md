---
title: Is source code needed?
labels:
    - content-review-lts2015
confluence:
    ajs-parent-page-id: '28475648'
    ajs-parent-page-title: Contributing to Nuxeo
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: viewpage.action?pageId=28475532
    canonical_source: viewpage.action?pageId=28475532
    page_id: '28475532'
    shortlink: jICyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/jICyAQ'
    source_link: /pages/viewpage.action?pageId=28475532
history:
    - 
        author: Solen Guitter
        date: '2011-03-02 15:15'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-03-02 15:15'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 16:20'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 16:09'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 16:08'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 16:07'
        message: ''
        version: '10'
    - 
        author: Julien Carsique
        date: '2010-10-19 12:05'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-10-13 18:42'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:54'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:53'
        message: ''
        version: '6'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:52'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:45'
        message: ''
        version: '4'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:30'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2010-10-11 23:25'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:23'
        message: ''
        version: '1'

---
Getting the Nuxeo source code is not needed to create applications on top of it. You should be able to create your own customizations of the Nuxeo Platform or default applications (DM, DAM, etc.) by creating extensions (also known as plugins), without changing the Nuxeo code.

The advantages of this approach are substantial:

*   by running stock Nuxeo EP code + your own customization, it's much easier to pinpoint issues when then happen, and facilitates greatly the support process,
*   upgrading to a newer version of Nuxeo EP is much easier,
*   you don't need to understand the detailed internal and low level architecture of the Nuxeo Platform, only the big picture + the API you will need for your project,
*   if forces the Nuxeo developers to think about extensibility, leading to a cleaner architecture.

Of course, if you are an advanced developer, you may want to join the Nuxeo community as a contributor, in which case you will want to look at the&nbsp;[Nuxeo Core Developer Guide]({{page space='corg'}}), in particular its&nbsp;[Getting the Nuxeo Source Code]({{page space='corg' page='getting-the-nuxeo-source-code'}})&nbsp;chapter.

You may also want to have a look at this guide if, as a technology evaluator, you want to get a clearer picture of how Nuxeo EP is developed and what processes are in place to ensure the highest quality level.