---
title: Built-in Commands
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - content-review-lts2016
    - shell
    - jcarsique
    - shell-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '4687648'
    ajs-parent-page-title: Nuxeo Shell Command Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Built-in+Commands
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Built-in+Commands'
    page_id: '4687650'
    shortlink: IodH
    shortlink_source: 'https://doc.nuxeo.com/x/IodH'
    source_link: /display/NXDOC/Built-in+Commands
tree_item_index: 100
version_override:
    LTS 2015: 710/admindoc/built-in-commands
    '6.0': 60/admindoc/built-in-commands
    '5.8': 58/admindoc/built-in-commands
history:
    -
        author: Solen Guitter
        date: '2015-09-07 14:57'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2012-05-15 16:20'
        message: Migrated to Confluence 4.0
        version: '16'
    -
        author: Solen Guitter
        date: '2012-05-15 16:20'
        message: Fixed typos
        version: '15'
    -
        author: Solen Guitter
        date: '2012-05-15 16:08'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2012-05-15 15:32'
        message: Added related pages
        version: '13'
    -
        author: Solen Guitter
        date: '2012-05-15 15:10'
        message: Fixed wrong links
        version: '12'
    -
        author: Solen Guitter
        date: '2011-03-03 12:32'
        message: ''
        version: '11'
    -
        author: Bogdan Stefanescu
        date: '2011-01-04 00:06'
        message: ''
        version: '10'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 10:13'
        message: ''
        version: '9'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 10:08'
        message: ''
        version: '8'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 08:31'
        message: ''
        version: '7'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 00:10'
        message: ''
        version: '6'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 00:08'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 00:07'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 00:01'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-23 22:30'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-23 22:18'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Namespace: *global*'}}

Basic commands provided by the shell

{{/callout}}

&nbsp;

## commands

**NAME**
commands &ndash; Print a list of available commands

**SYNTAX**

```
commands
```

**ALIASES**
cmds

## exit

**NAME**
exit &ndash; Exit the interactive shell

**SYNTAX**

```
exit [code]
```

**ALIASES**
quit

**ARGUMENTS**

*   code - [optional] -The exit code. Must be a positive number otherwise 0 is assumed. Defaults to 0.

## help

**NAME**
help &ndash; The help command

**SYNTAX**

```
help [options] [command]
```

**OPTIONS**

*   -export - If used export all the commands available in a wiki format to the given file. If a directory is given the export will be made in file help.wiki in that directory.
*   -ns - [optional] - to be used to filter commands by namespaces when generating the documentation. By default all namespaces are dumped.

**ARGUMENTS**

*   command - [optional] -the name of the command to get help for

## install

**NAME**
install &ndash; Install a SH script to launch the shell in the terminal. Available only for UNIX systems.

**SYNTAX**

```
install [file]
```

**ARGUMENTS**

*   file - [optional] -the file where to install the shell script. If not used the script will be printed on stdout.

## interactive

**NAME**
interactive &ndash; Interactive shell

**SYNTAX**

```
interactive
```

## settings

**NAME**
settings &ndash; Print or modify the shell settings.

**SYNTAX**

```
settings [options] [name] [value]
```

**OPTIONS**

*   -reset - [flag] - Reset settings to their defaults. Need to restart shell.

**ARGUMENTS**

*   name - [optional] -The variable to print or set.
*   value - [optional] -The variable value to set.

## trace

**NAME**
trace &ndash; Print the last error stack trace if any

**SYNTAX**

```
trace
```

## use

**NAME**
use &ndash; Switch the current command namespace. If no namespace is specified the current namepsace name is printed.

**SYNTAX**

```
use [name]
```

**ARGUMENTS**

*   name - [optional] -The command namespace to use

## version

**NAME**
version &ndash; Print Nuxeo Shell Version

**SYNTAX**

```
version
```
