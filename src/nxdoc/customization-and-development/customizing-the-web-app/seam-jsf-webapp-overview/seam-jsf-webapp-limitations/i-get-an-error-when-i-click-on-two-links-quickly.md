---
title: I Get an Error When I Click on Two Links Quickly
review:
    comment: ''
    date: ''
    status: ok
labels:
    - double-click
confluence:
    ajs-parent-page-id: '18449572'
    ajs-parent-page-title: Seam JSF Webapp Limitations
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: I+Get+an+Error+When+I+Click+on+Two+Links+Quickly
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/I+Get+an+Error+When+I+Click+on+Two+Links+Quickly
    page_id: '17334419'
    shortlink: k4AIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/k4AIAQ'
    source_link: /display/NXDOC58/I+Get+an+Error+When+I+Click+on+Two+Links+Quickly
history:
    - 
        author: Solen Guitter
        date: '2016-08-31 15:50'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2014-01-23 16:18'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2014-01-23 16:18'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2014-01-22 14:26'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-10-18 10:43'
        message: ''
        version: '9'
    - 
        author: Anahide Tchertchian
        date: '2013-07-15 10:52'
        message: ''
        version: '8'
    - 
        author: Florent Guillaume
        date: '2013-05-30 19:47'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2013-05-30 19:47'
        message: ''
        version: '6'
    - 
        author: Anahide Tchertchian
        date: '2011-05-06 14:55'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2011-05-06 14:55'
        message: ''
        version: '4'
    - 
        author: Anahide Tchertchian
        date: '2011-04-18 17:43'
        message: ''
        version: '3'
    - 
        author: Thierry Martins
        date: '2010-09-30 15:10'
        message: ''
        version: '2'
    - 
        author: Thierry Martins
        date: '2010-09-30 10:40'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

This has been fixed in Nuxeo Platform 5.8 (see [NXP-12487](https://jira.nuxeo.com/browse/NXP-12487)).

{{/callout}}{{! excerpt}}

Sometimes if you click on a link and then, after a very short time, click on another link without waiting the response from the server, you can get a JSF error. This can happen very frequently when using Ajax requests as users does not always see that the server did not answer yet, so it can be easier from them to trigger an additional request.

{{! /excerpt}}

There is no ideal solution to this problem, so it is important to understand why it is happening before picking a solution.

Seam does not handle concurrent requests in the same conversation simultaneously: when a request arrives, if a preceding request is already being processed, it'll wait for the other request to finish before processing the new one. It does not wait indefinitely: it waits for a given, configurable, amount of time. When this timeout is reached, as the first request is still being processed, the corresponding conversation is locked. So the new request is processed in a "temporary" conversation. This temporary conversation does not hold the contextual information that the request may need, and this would lead to an error.

By default, this timeout (`concurrentRequestTimeout`)&nbsp;is configured to 1 s, so if your server is quite slow you can set up a higher timeout to avoid this issue. Note that it is important not to setup a value too high: concurrent requests may keep piling up on the server, and may slow it down even more.

To configure a concurrent request timeout, in the `OSGI-INF/deployment-fragment.xml` of your own project add the definition:

```html/xml
<extension target="components#SEAM_CORE_MANAGER" mode="replace">
  <!-- 30 min = 1800 s = 1800000 ms -->
  <property name="conversationTimeout">1800000</property>
  <!-- 5 s = 5000 ms (default value is 1 s) -->
  <property name="concurrentRequestTimeout">5000</property>
</extension>

```

At startup, you'll get in `nxserver/nuxeo.war/WEB-INF/components.xml` a block like:

```html/xml
<component name="org.jboss.seam.core.manager">
  <property name="conversationTimeout">1800000</property>
  <property name="concurrentRequestTimeout">5000</property>
</component>

```

If this is not enough, or if this problem is happening on some specific pages, the other options you have are:

*   try to optimize the request that takes time: if some request is very slow, users may be tempted to click elsewhere waiting for the server to answer.
*   use Ajax configurations to handle concurrent requests: ajax makes it possible to put requests in a queue so that similar requests are not sent to the server. It also allows to wait for a given amount of time before sending a request, etc...
*   use JavaScript tricks to make it impossible for the user to click somewhere else (or even to keep on clicking on the costly link) while the server has not answered.

&nbsp;

* * *