---
title: Transactions and Connections
labels:
    - transaction
    - logs
confluence:
    ajs-parent-page-id: '950318'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Transactions+and+Connections
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Transactions+and+Connections'
    page_id: '12288637'
    shortlink: fYK7
    shortlink_source: 'https://doc.nuxeo.com/x/fYK7'
    source_link: /display/NXDOC/Transactions+and+Connections
history:
    - 
        author: Florent Guillaume
        date: '2015-12-09 13:12'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-09-05 10:30'
        message: typos
        version: '19'
    - 
        author: Stéphane Lacoin
        date: '2014-09-03 11:32'
        message: ''
        version: '18'
    - 
        author: Stéphane Lacoin
        date: '2014-09-03 11:19'
        message: ''
        version: '17'
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
Troubleshooting issues with&nbsp;connections with transactional resources (databases) can be done with the help of the built-in&nbsp;`nuxeo-core-management-jtajca` &nbsp;component.

## Logging Transactional Events

Configure log4j in `$NUXEO_HOME/lib/log4j.xml` by adding the following keywords to your appender conversion pattern `%t` for the thread name and `%X`&nbsp;for the logging context map:

```

```

You should also add a new category if you want the traces to be enabled:

```

```

At this stage, once a transaction is started or a connection is opened, their identifiers are put in a context map for the logger. By adding the `%X`&nbsp;keyword, you've requested to print them each a message is logged. The transactions and connections will also be logged. You should add additional log statements at level `DEBUG` or `TRACE` around the code you want to monitor.

## Monitoring Transactional Resources

You should enable JMX to be able to poll the mbean attributes. To do this, in `$NUXEO_HOME/bin/nuxeo.conf`&nbsp;uncomment the JMX options as follows.

{{#> callout type='warning' }}

You should note that the these settings open a **security hole** on the server and should not be left as this in production, because they allow anyone to connect to the JMX server (unless additional firewall rules have been configured).

{{/callout}}

```
# Enable JMX
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=1089 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false
```

The Nuxeo Platform contains JMX beans that will enable you to monitor the transactions and connections used in your system. Just point your JMX browser (such as JVisualVM using the [VisualVM-MBeans Plugin](https://visualvm.java.net/mbeans_tab.html)&nbsp;which is part of the JDK)&nbsp;to the server and look for the following beans:

*   `org.nuxeo.ecm.core.management.jtajca:type=ConnectionPoolMonitor,name=jdbc/nuxeo`
*   `org.nuxeo.ecm.core.management.jtajca:type=ConnectionPoolMonitor,name=repository/default`
*   `org.nuxeo.ecm.core.management.jtajca:type=CoreSessionMonitor,name=default`
*   `org.nuxeo.ecm.core.management.jtajca:type=TransactionMonitor,name=default`

The `ConnectionPoolMonitor` provides you with a way to configure the pools connection size used by the Nuxeo storage (`jdbc/nuxeo` for the JDBC datasource pool, and `repository/default` for the VCS session pool). It also gives you access to global counters about the connection usage. It's enabled by default.

The `TransactionMonitor` provides useful information about the transactions in progress in your application. Also it gives you global counters and information about the last committed and rolled back transaction in the system. You should enable it by invoking the&nbsp;`toggle` operation.

&nbsp;