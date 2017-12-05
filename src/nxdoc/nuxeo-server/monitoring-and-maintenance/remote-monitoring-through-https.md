---
title: Remote Monitoring through HTTP/S
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - monitoring-component
    - bdelbosc
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: viewpage.action?pageId=26317797
    canonical_source: viewpage.action?pageId=26317797
    page_id: '26317797'
    shortlink: 5ZORAQ
    shortlink_source: 'https://doc.nuxeo.com/x/5ZORAQ'
    source_link: /pages/viewpage.action?pageId=26317797
tree_item_index: 500
version_override:
    LTS 2015: 710/admindoc/remote-monitoring-through-https
history:
    -
        author: Manon Lumeau
        date: '2016-08-02 16:29'
        message: 'emove <span>'
        version: '13'
    -
        author: Solen Guitter
        date: '2015-10-19 09:37'
        message: ''
        version: '12'
    -
        author: Stéphane Lacoin
        date: '2015-10-16 09:55'
        message: ''
        version: '11'
    -
        author: Stéphane Lacoin
        date: '2015-10-16 09:55'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-10-14 08:37'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2015-10-13 16:26'
        message: ''
        version: '8'
    -
        author: Stéphane Lacoin
        date: '2015-10-13 16:19'
        message: ''
        version: '7'
    -
        author: Stéphane Lacoin
        date: '2015-10-13 16:18'
        message: ''
        version: '6'
    -
        author: Stéphane Lacoin
        date: '2015-10-13 16:17'
        message: ''
        version: '5'
    -
        author: Stéphane Lacoin
        date: '2015-10-13 16:16'
        message: ''
        version: '4'
    -
        author: Stéphane Lacoin
        date: '2015-10-13 16:15'
        message: ''
        version: '3'
    -
        author: Stéphane Lacoin
        date: '2015-10-13 14:44'
        message: ''
        version: '2'
    -
        author: Stéphane Lacoin
        date: '2015-10-13 13:59'
        message: ''
        version: '1'

---
## Connecting to a Web Browser

{{! excerpt}}

It could sometimes be useful to browse the management beans remotely using your web browser. Nuxeo embeds a web console which is accessible on the port 8081 with the&nbsp;`operator` identity and your server key as password (`nuxeo.server.key`)

{{! /excerpt}}

This web console is not started by default.
You can start it by invoking locally in&nbsp;`JMX` the&nbsp;`start` operation on the managed bean `org.nuxeo:format=html,type=jmx-adaptor`.
An easy way to start the web console is to:

*   enable JMX on your server by uncommenting the&nbsp;`Enable JMX` line in your configuration (`nuxeo.conf`)
*   use a JMX command line such as&nbsp;`jmxterm` and run the following commands

```text
open localhost:1089
bean org.nuxeo:format=html,type=jmx-adaptor
run start
```

Then you should get a page with the list of all the available beans in your server by requesting the&nbsp;`http://localhost:8081` home page.

## Connecting to a JMX Client

If you need more advanced services such as those provided by the Java Mission Control application, you can connect them remotely using HTTP/S protocols through the DMK adapters. These adapters are not enabled by default and can be enabled as for the web console using the management beans `org.nuxeo:protocol=jdmk-http,type=jmx-connector` or `org.nuxeo:protocol=jdmk-https,type=jmx-connector`.

You must then add the DMK agent library `com.sun.jdmk:core`&nbsp; to the `JMX` client classpath. For example, with the&nbsp;Java Mission Control console, you have to add the following line to the&nbsp;`JVM` arguments section in your&nbsp;`jmc.ini`.

```text
-vmargs
-Xbootclasspath/a:/../nuxeo/nxserver/lib/core-1.0-b02.jar
```

In the Java Mission Control, create a connection using the URI `service:jmx:jdmk-http://hostname:6868`. You may retrieve that URI from the managed bean attribute `Address`.

{{! Don't put anything here. }}

* * *
