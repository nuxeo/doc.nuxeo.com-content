---
title: Transactions and Connections
review:
    comment: ''
    date: ''
    status: ok
labels:
    - logs
    - transaction
confluence:
    ajs-parent-page-id: '16810080'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Transactions+and+Connections
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Transactions+and+Connections'
    page_id: '16809985'
    shortlink: AYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/AYAAAQ'
    source_link: /display/ADMINDOC58/Transactions+and+Connections
history:
    - 
        author: Solen Guitter
        date: '2013-10-15 12:02'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-10-15 12:00'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2012-10-15 11:02'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2012-10-15 11:01'
        message: ''
        version: '13'
    - 
        author: Julien Carsique
        date: '2012-10-14 23:00'
        message: ''
        version: '12'
    - 
        author: Olivier Grisel
        date: '2012-10-14 16:26'
        message: ''
        version: '11'
    - 
        author: Olivier Grisel
        date: '2012-10-14 16:19'
        message: use JVisualVM as suggested JMX browser
        version: '10'
    - 
        author: Olivier Grisel
        date: '2012-10-12 18:31'
        message: ''
        version: '9'
    - 
        author: Olivier Grisel
        date: '2012-10-12 18:30'
        message: ''
        version: '8'
    - 
        author: Thierry Delprat
        date: '2012-10-12 18:27'
        message: ''
        version: '7'
    - 
        author: Thierry Delprat
        date: '2012-10-12 18:27'
        message: ''
        version: '6'
    - 
        author: Stéphane Lacoin
        date: '2012-10-12 18:26'
        message: ''
        version: '5'
    - 
        author: Stéphane Lacoin
        date: '2012-10-12 18:24'
        message: ''
        version: '4'
    - 
        author: Stéphane Lacoin
        date: '2012-10-12 18:23'
        message: ''
        version: '3'
    - 
        author: Stéphane Lacoin
        date: '2012-10-12 18:22'
        message: ''
        version: '2'
    - 
        author: Stéphane Lacoin
        date: '2012-10-12 15:36'
        message: ''
        version: '1'

---
Troubleshooting issues with&nbsp;connections with transactional resources (databases) can be done with the optional bundle `nuxeo-core-management-jtajca`. Just [download it from our Nexus](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav%7E%7Enuxeo-core-management-jtajca%7E%7E%7E) and put it in `NUXEO_HOME/nxserver/plugins.` <span style="font-size: 10.0pt;line-height: 13.0pt;">Then restart the Nuxeo server.</span>

## Logging Transactional Events

Configure log4j in `NUXEO_HOME/lib/log4j.xml` by adding the following keywords to your appender conversion pattern `%t` for the thread name and `%X`&nbsp;for the logging context map:

```html/xml
<param name="ConversionPattern" value="%d{ISO8601} %t %-5p [%c] %m %X%n" />
```

You should also add a new category if you want the traces being enabled:

```html/xml
<category name="org.nuxeo.ecm.core.management.jtajca">
  <priority value="TRACE" />
</category>
```

At this stage, once a transaction is started or a connection is opened, their identifiers are put in a context map for the logger. By adding the `%X`&nbsp;keyword, you've requested to print them each a message is logged. The transactions and connections will also be logged. You should add additional log statements at level debug or trace around the code you want to monitor.

## Monitoring Transactional Resources

You should enable JMX for being able to poll the mbean attributes. In `NUXEO_HOME/bin/nuxeo.conf`&nbsp;uncomment the JMX options.

{{#> callout type='warning' }}

You should note that the these settings open a **security hole** on the server and should not be left as this in production.

{{/callout}}

```
# Enable JMX
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=1089 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false
```

You've got two new beans in JMX that will provide you the way of monitoring the transactions and connections being used in your system. Just point your JMX browser (such as JVisualVM which is part of the JDK)&nbsp;to the server and looks to the following beans :

*   `org.nuxeo:name=ConnectionMonitoring,type=service,repositoryName=default`
*   `org.nuxeo:name=TransactionMonitoring,type=service`

The transaction monitoring provides useful information about the transactions in progress in your application. Also it gives you global counters and information about the last committed and rollbacked&nbsp; transaction in the system. The connection monitoring provide you a way of configuring the pool connection size used by the Nuxeo storage. It gives you also access to global counters about the connection usage.

&nbsp;