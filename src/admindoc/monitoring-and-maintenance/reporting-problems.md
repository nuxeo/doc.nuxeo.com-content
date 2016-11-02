---
title: Reporting Problems
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '21921914'
    ajs-parent-page-title: Monitoring and Maintenance
    ajs-space-key: ADMINDOC60
    ajs-space-name: Nuxeo Installation and Administration — 6.0
    canonical: Reporting+Problems
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC60/Reporting+Problems'
    page_id: '23365695'
    shortlink: P4hkAQ
    shortlink_source: 'https://doc.nuxeo.com/x/P4hkAQ'
    source_link: /display/ADMINDOC60/Reporting+Problems
tree_item_index: 1200
version_override:
    'FT': '/nxdoc/reporting-problems'
history:
    -
        author: Benoit Delbosc
        date: '2015-03-23 13:23'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-03-19 10:43'
        message: Add security section
        version: '8'
    -
        author: Benoit Delbosc
        date: '2015-03-18 08:36'
        message: ''
        version: '7'
    -
        author: Benoit Delbosc
        date: '2015-03-13 08:49'
        message: ''
        version: '6'
    -
        author: Benoit Delbosc
        date: '2015-02-18 09:16'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-02-05 15:50'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-02-05 15:47'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-02-05 15:46'
        message: link update
        version: '2'
    -
        author: Solen Guitter
        date: '2015-02-05 15:41'
        message: ''
        version: '1'

---
{{! excerpt}}

Here are listed some procedures to extract information of a running Nuxeo instance. These information can be request by the support team. Please always compress files before uploading them to your JIRA ticket.

{{! /excerpt}}

&nbsp;

### Nuxeo Configuration and Status

To dump your server configuration and status run

```
./bin/nuxeoctl showconf
./bin/nuxeoctl status
```

### JMX Monitoring

When JMX is enabled (uncomment JMX related lines in [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}})), the Nuxeo Platform exposes [lots of metrics](http://lots%20of%20metrics) accessible in the `"metrics"` domains.

You can use GUI tools like Java Mission Control or VisualVM to introspect these metrics, but if you want to dump all of them to report a problem you can use [jmxterm](http://wiki.cyclopsgroup.org/jmxterm/) (using the same JVM and user as your Nuxeo):

```
# download jmxterm
wget http://sourceforge.net/projects/cyclops-group/files/jmxterm/1.0-alpha-4/jmxterm-1.0-alpha-4-uber.jar/download -O /tmp/jmxterm-1.0-alpha-4-uber.jar
# list metrics beans and create a script
echo -e "domain metrics\nbeans" | java -jar /tmp/jmxterm-1.0-alpha-4-uber.jar -l localhost:1089 -n | sed -e "s,^,get -b ,g" -e "s,$, \*,g" > /tmp/metrics-script.txt
# get metrics info
(date +'%Y-%m-%d %H:%M:%S:%3N'; java -jar /tmp/jmxterm-1.0-alpha-4-uber.jar -l localhost:1089 -n -i /tmp/metrics-script.txt)  > /tmp/metrics.txt 2>&1

```

And attach the `metrics.txt` file to your JIRA ticket.

### JVM Garbage Collector

The garbage collector attempts to reclaim memory used by objects that are no longer in use by the application.

The garbage collector is monitored by default since Nuxeo 6.0, the log file is located here: `${nuxeo.log.dir}/gc.log`.

In case of problem think to save this file before restarting because the file is overridden on start. If you see many full GC in the file try to run a JVM heap histo.

### JVM Heap Histo

To see what objects are present in the heap

```
jcmd Bootstrap GC.class_histogram > /tmp/heap-histo.txt
```

### JVM Thread Dump

A thread dump is useful to understand what code is running at time t. It is always better to create 2 or 3 thread dumps with few seconds of pause between them. It makes possible to pinpoint stuck code, you should also take capture of the thread activity.

The first step is to log in as same user than the Nuxeo JVM then use either `jcmd`:

```
jcmd Bootstrap Thread.print > /tmp/nuxeo.tdump
```

Or `jstack`:

1.  Get the PID of the Nuxeo JVM, running command and look at a Bootstrap process id.
2.  Then run

    ```
    jstack <PID> > /tmp/nuxeo.tdump
    ```

3.  If you have errors try again with the force option: `jstack -F <PID>`.

#### CPU Thread Activity

It is also interesting to correlate the code path given by a thread dump with the CPU activity:

```
top -bcH -n1 -w512 > /tmp/top-thread.txt
```

### Oracle JVM Filght Recording

If you use the Oracle JVM you can activate this option in the `nuxeo.conf`:

```
JAVA_OPTS=$JAVA_OPTS -Dcom.sun.management.jmxremote.autodiscovery=true -Dcom.sun.management.jdp.name=Nuxeo -XX:+UnlockCommercialFeatures -XX:+FlightRecorder
```

Then to record JVM activity for 1 minute use the following command:

```
jcmd Bootstrap JFR.start duration=60s filename=/tmp/record-01.jfr
```

### JVM Core Dump

When the JVM is stuck, in addition to thread dump and before restarting, a core dump can give more context information.

If you have `gdb` installed, you can generate a core dump without killing the application:

<div>

<div class="syntaxhighlighter nogutter  java">

&nbsp;

<div class="table-scroll"><table class="hover"><tbody><tr><td colspan="1">

<div class="container" title="Hint: double-click to select code">

<div class="line number1 index0 alt2">`sudo gdb --pid=<PID> --batch -ex generate-core-file -ex detach`</div>

</div>

</td></tr></tbody></table></div>

&nbsp;

</div>

</div>

### PostgreSQL

Follow the [Nuxeo recommendation ]({{page page='configuring-postgresql#monitoring'}})and perform the [reporting problem procedure]({{page page='configuring-postgresql#reporting-problems'}}). [Pgbadger](https://github.com/dalibo/pgbadger) and [explain](http://explain.depesz.com/) are your friends.

### Network

Measure the round trip between [Nuxeo and the database]({{page space='nxdoc60' page='tracking-the-performances-of-the-nuxeo-platform#network'}}):

```
ping -s 8192 <database IP>
```

Use [mtr](http://www.bitwizard.nl/mtr/) to discover what is between the Nuxeo server and the database, report any firewall or known hardware.

Look at the number of errors reported by `netstat -s` , as a large number of errors may indicate a network problem.

A network capture can be helpful at some point:

```
# Capture all eth0 traffic
sudo tcpdump -i eth0 -w /tmp/out.tcpdump
# Capture http traffic to port localhost:8080
sudo tcpdump  -i lo -A host localhost and tcp port 8080 -w /tmp/out.tcpdump
```

### OS

You can report a Linux configuration using the [aspersa summary](http://aspersa.googlecode.com/svn/html/summary.html) script:

```
wget http://aspersa.googlecode.com/svn/trunk/summary && bash summary
```

To monitor the system the [sysstat](http://pagesperso-orange.fr/sebastien.godard/) utilities are a collection of performance monitoring tools for Linux that is easy to setup.

You can monitor the system activity like this:

```
sar -d -o /tmp/sysstat-sar.log 5 720 >/dev/null 2>&1 &

```

This will monitor the activity every 5s during 1h.

Very useful also is to have a process monitoring, this can be done with [atop](http://atopatop) running as root:

```
atop -w /tmp/atop.log 5 720 >/dev/null 2>&1 &
```

### Security

If you think you've found a security issue, please report it privately to [security@nuxeo.com](mailto:security@nuxeo.com).

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

*   [Monitoring and Maintenance]({{page page='monitoring-and-maintenance'}})
*   [Metrics and Monitoring]({{page page='metrics-and-monitoring'}})
*   [Transactions and Connections]({{page page='transactions-and-connections'}})

{{/panel}}</div><div class="column medium-6">

{{! Please update the label and target spaces in the Content by Label macro below. }}

&nbsp;

</div></div>
