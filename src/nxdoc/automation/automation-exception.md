---
title: Automation Exception
review:
    comment: ''
    date: ''
    status: ok
labels:
    - mvel
    - automation
    - exception
    - trace
    - debug
toc: true
confluence:
    ajs-parent-page-id: '22380844'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Automation+Exception
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Automation+Exception'
    page_id: '22380671'
    shortlink: f4BVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/f4BVAQ'
    source_link: /display/NXDOC60/Automation+Exception
history:
    - 
        author: Vincent Dutat
        date: '2014-09-16 22:00'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-04-01 17:09'
        message: ''
        version: '16'
    - 
        author: Alain Escaffre
        date: '2013-11-26 00:10'
        message: ''
        version: '15'
    - 
        author: Vladimir Pasquier
        date: '2013-10-16 17:43'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-09-20 17:49'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-09-20 17:47'
        message: 'Use nuxeo.conf reference page content, formatting'
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-09-02 11:42'
        message: Formatting
        version: '11'
    - 
        author: Vladimir Pasquier
        date: '2013-08-30 11:02'
        message: ''
        version: '10'
    - 
        author: Vincent Dutat
        date: '2013-08-29 19:00'
        message: ''
        version: '9'
    - 
        author: Vincent Dutat
        date: '2013-08-29 18:52'
        message: ''
        version: '8'
    - 
        author: Florent Guillaume
        date: '2013-08-29 17:10'
        message: ''
        version: '7'
    - 
        author: Vladimir Pasquier
        date: '2013-08-29 16:37'
        message: ''
        version: '6'
    - 
        author: Vladimir Pasquier
        date: '2013-08-29 16:14'
        message: ''
        version: '5'
    - 
        author: Vladimir Pasquier
        date: '2013-08-29 16:12'
        message: ''
        version: '4'
    - 
        author: Vladimir Pasquier
        date: '2013-08-29 16:06'
        message: ''
        version: '3'
    - 
        author: Vladimir Pasquier
        date: '2013-08-29 16:06'
        message: ''
        version: '2'
    - 
        author: Vladimir Pasquier
        date: '2013-08-29 15:54'
        message: ''
        version: '1'

---
*   This contribution declares a set of execution chains to be executed after '`contributedchain`' failure.
*   Here '`chainExceptionA`' and '`chainExceptionB`' are different candidates.
*   Filters can be added (see next chapter).
*   Rollback is set to defined if we should rollback transaction after '`contributedchain`' failure.
*   Priority can be defined to know which chain is going to take the hand on a candidates range. Higher priority wins.

Here is the contribution to deploy filters that can be added to decide which chain is going to be executed:

```html/xml
<extension point="automationFilter"
             target="org.nuxeo.ecm.core.operation.OperationServiceComponent">

    <filter id="filterA">expr:@{Document['dc:title']=='Source'}</filter>

    <filter id="filterB">expr:@{Document['dc:title']=='Document'}</filter>

</extension>
```

These filters are strictly written in MVEL template or expression starting by '`expr:`'.

Exception is cached into the operation context and can be used into filters:

```html/xml
<extension point="automationFilter"
             target="org.nuxeo.ecm.core.operation.OperationServiceComponent">

    <filter id="filterA">expr:@{Context['Exception']=='NullPointerException'}</filter>

</extension>
```

{{#> callout type='warning' }}

If two candidate chains have the same priority and both have their filter evaluated to true, the last one contributed is executed.

{{/callout}}