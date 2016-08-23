---
title: Launcher Says It Couldn't Retrieve Process ID
labels:
    - content-review-lts2015
toc: true
confluence:
    ajs-parent-page-id: '27604698'
    ajs-parent-page-title: Troubleshooting
    ajs-space-key: ADMINDOC710
    ajs-space-name: Nuxeo Installation and Administration — LTS 2015
    canonical: Launcher+Says+It+Couldn%27t+Retrieve+Process+ID
    canonical_source: >-
        https://doc.nuxeo.com/display/ADMINDOC710/Launcher+Says+It+Couldn%27t+Retrieve+Process+ID
    page_id: '27604659'
    shortlink: szalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/szalAQ'
    source_link: /display/ADMINDOC710/Launcher+Says+It+Couldn%27t+Retrieve+Process+ID
history:
    - 
        author: Solen Guitter
        date: '2015-09-07 15:00'
        message: dd TO
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-10-29 17:47'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-10-29 17:44'
        message: ''
        version: '9'
    - 
        author: Julien Carsique
        date: '2013-02-21 15:58'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2013-02-21 15:58'
        message: ''
        version: '7'
    - 
        author: Julien Carsique
        date: '2013-02-21 15:57'
        message: ''
        version: '6'
    - 
        author: Martin Pernollet
        date: '2013-02-21 14:40'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2012-01-11 16:11'
        message: Migrated to Confluence 4.0
        version: '4'
    - 
        author: Julien Carsique
        date: '2012-01-11 16:11'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2011-04-20 12:43'
        message: ''
        version: '2'
    - 
        author: Julien Carsique
        date: '2011-04-20 12:32'
        message: ''
        version: '1'

---
## Error Message

{{! excerpt}}

```
[org.nuxeo.launcher.NuxeoLauncher] Sent server start command but could not get process ID.
```

{{! /excerpt}}

&nbsp;

If you got such a message in the console or in the console.log file, that means the Launcher was not able to confirm the server status, retrieving the process id.

{{#> callout type='tip' }}

Until Nuxeo 5.6, that warning message can also be due to a JVM start failed (for instance, not enough memory). You can check this by running `nuxeoctl console` instead of&nbsp;`nuxeoctl start`.

Since Nuxeo 5.7 ([NXP-11039](https://jira.nuxeo.com/browse/NXP-11039)), the errors detection and associated messages were improved so that warning message only appears when the Java process is effectively started.

{{/callout}}

That can be a normal behavior on some old Windows versions and on Unix Solaris.

Windows users, if you can issue the two following commands without error in a Shell windows, then the Launcher must be able to manage the server process on your OS:

```
wmic quit
taskkill /?
```

## Workarounds

### Console Mode

First, you can start in console mode (in which case, the Launcher won't try to manage the process) in order to manually check if the server can start: `nuxeoctl console`. You will have to stop the server issuing `"CTRL+C"`.

If you can start the server that way, it should also be able to start with `nuxeoctl startbg`. The drawback is `nuxeoctl stop` won't be able to stop the server.

### Java Commands

In case the issue lies in the batch file, you can try to run the Launcher with its Java command. If you issued `nuxeoctl start` from a Shell window, then you can copy/paste the command titled "Launcher command". It will be of the form:

{{#> panel type='code' heading='Launcher Java command'}}

```
java -Dlauncher.java.opts="some JVM options" -Dnuxeo.home=/path/to/nuxeo/ -Dnuxeo.conf=/path/to/nuxeo.conf -jar /path/to/nuxeo-launcher.jar start
```

{{/panel}}

You can also try to directly run the server, fully bypassing the Launcher. Look into the `console.log` file for a command titled "Server command". You will have to run the Launcher configuration, then the server command. It will look like:

{{#> panel type='code' heading='Run the server, bypassing the Launcher'}}

```
nuxeoctl configure
java -cp "the classpath" -Dnuxeo.home=/path/to/nuxeo -Dnuxeo.conf=/path/to/nuxeo.conf -Dnuxeo.log.dir=log -Dnuxeo.data.dir=data -Dnuxeo.tmp.dir=tmp -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Dcatalina.base=/path/to/nuxeo -Dcatalina.home=/path/to/nuxeo org.apache.catalina.startup.Bootstrap start
```

{{/panel}}

## Debugging

Then, if you want to understand the failure cause, you can try to manually get that process ID from a Shell window, reproducing the steps used by the Launcher.

Look into `console.log` for the "regexp" keyword, this is the regular expression used to find the process ID. Something like:

```
[org.nuxeo.launcher.NuxeoLauncher] regexp: \Q/path/to/nuxeo.conf\E.*\Qorg.apache.catalina.startup.Bootstrap\E pid:null
```

The command for retrieving the process ID will depend on your OS.

### Linux/Unix

```
/bin/ps -e -o "pid,args" | grep -E "^\s*([0-9]+)\s+(.*)$" | grep "/path/to/nuxeo.conf.*org.apache.catalina.startup.Bootstrap"
```

### Mac OS X

```
/bin/ps -e -o "pid,command" | grep -E "^ *([0-9]+) +(.*)$" | grep "/path/to/nuxeo.conf.*org.apache.catalina.startup.Bootstrap"
```

### Windows

```
wmic process get CommmandLine,ProcessId
```

Look for lines matching the regular expression: `^(.*?)\\s+(\\d+)\\s*\$`

Check if one of those is matching the regular expression found in `console.log`.