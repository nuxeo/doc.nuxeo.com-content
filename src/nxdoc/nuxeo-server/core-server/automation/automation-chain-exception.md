---
title: Automation Chain Exception
review:
    comment: ''
    date: '2017-12-14'
    status: ok
labels:
    - lts2016-ok
    - automation
    - fdavid
    - exception
    - debug
    - trace
    - mvel
    - excerpt
    - lts2017-ok
confluence:
    ajs-parent-page-id: '18451738'
    ajs-parent-page-title: Automation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Automation+Chain+Exception
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Automation+Chain+Exception'
    page_id: '14942231'
    shortlink: FwDk
    shortlink_source: 'https://doc.nuxeo.com/x/FwDk'
    source_link: /display/NXDOC/Automation+Chain+Exception
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2015-10-12 10:03'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-12-10 11:20'
        message: Format
        version: '19'
    -
        author: Vladimir Pasquier
        date: '2014-12-09 17:16'
        message: ''
        version: '18'
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
{{! excerpt}}

Content Automation provides means to debug and handle exception during the Automation operations and chains calls.

{{! /excerpt}}

Automation exception chain can be added to be executed when an error occurs during an Automation execution.

After contributing your custom chains, you can declare your exception chains:

```xml
<extension point="chainException"
             target="org.nuxeo.ecm.core.operation.OperationServiceComponent">

    <catchChain id="catchChainA" onChainId="contributedchain">
      <run chainId="chainExceptionA" priority="0" rollBack="true" filterId="filterA"/>
      <run chainId="chainExceptionA" priority="0" rollBack="false" filterId="filterA"/>
      <run chainId="chainExceptionB" priority="10" rollBack="true" filterId="filterB"/>
    </catchChain>

    <catchChain id="catchChainB" onChainId="anothercontributedchain">
      <run chainId="chainExceptionA" rollBack="false"/>
    </catchChain>

</extension>
```

*   This contribution declares a set of execution chains to be executed after '`contributedchain`' failure.
*   Here '`chainExceptionA`' and '`chainExceptionB`' are different candidates.
*   Filters can be added (see next chapter).
*   Rollback is set to defined if we should rollback transaction after '`contributedchain`' failure.
*   Priority can be defined to know which chain is going to take the hand on a candidates range. Higher priority wins.

Here is the contribution to deploy filters that can be added to decide which chain is going to be executed:

```xml
<extension point="automationFilter"
             target="org.nuxeo.ecm.core.operation.OperationServiceComponent">

    <filter id="filterA">expr:@{Document['dc:title']=='Source'}</filter>

    <filter id="filterB">expr:@{Document['dc:title']=='Document'}</filter>

</extension>
```

These filters are strictly written in MVEL template or expression starting by `expr:`.

Exception is cached into the operation context and can be used into filters:

```xml
<extension point="automationFilter"
             target="org.nuxeo.ecm.core.operation.OperationServiceComponent">

    <filter id="filterA">expr:@{Context['Exception']=='NullPointerException'}</filter>

</extension>
```

{{#> callout type='warning' }}

If two candidate chains have the same priority and both have their filter evaluated to true, the last one contributed is executed.

{{/callout}}
