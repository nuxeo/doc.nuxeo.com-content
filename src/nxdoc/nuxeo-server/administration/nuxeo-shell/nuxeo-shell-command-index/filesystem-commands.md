---
title: Filesystem Commands
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - shell
    - jcarsique
    - shell-component
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '4687648'
    ajs-parent-page-title: Nuxeo Shell Command Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Filesystem+Commands
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Filesystem+Commands'
    page_id: '4687654'
    shortlink: JodH
    shortlink_source: 'https://doc.nuxeo.com/x/JodH'
    source_link: /display/NXDOC/Filesystem+Commands
tree_item_index: 200
version_override:
    LTS 2015: 710/admindoc/filesystem-commands
    '6.0': 60/admindoc/filesystem-commands
    '5.8': 58/admindoc/filesystem-commands
history:
    -
        author: Solen Guitter
        date: '2016-09-01 10:02'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2015-08-31 15:03'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-04-11 10:23'
        message: ''
        version: '11'
    -
        author: Florent Guillaume
        date: '2014-04-10 13:55'
        message: typo
        version: '10'
    -
        author: Florent Guillaume
        date: '2012-08-13 12:44'
        message: Migrated to Confluence 4.0
        version: '9'
    -
        author: Florent Guillaume
        date: '2012-08-13 12:44'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2012-05-15 16:09'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2012-05-15 15:33'
        message: Added related pages
        version: '6'
    -
        author: Solen Guitter
        date: '2012-05-15 15:11'
        message: Fixed wrong links
        version: '5'
    -
        author: Solen Guitter
        date: '2011-03-03 12:31'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 10:09'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-11-24 08:32'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-11-23 22:19'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Namespace: *local*'}}
Commands available on the local file system
{{/callout}}

## cat

**NAME**
cat &ndash; Print the content of a file

**SYNTAX**

```
cat [file]
```

**ARGUMENTS**

*   file - [optional] -The file to print

## cd

**NAME**
cd &ndash; Change the local working directory

**SYNTAX**

```
cd file
```

**ARGUMENTS**

*   file - [required] - A local directory to change to

## cp

**NAME**
cp &ndash; Copy a file or directory

**SYNTAX**

```
cp [options] source destination
```

**OPTIONS**

*   -r - [flag] - Recursive copy directories

**ARGUMENTS**

*   source - [required] - The file to copy
*   destination - [required] - The target file

## ls

**NAME**
ls &ndash; List file names in a local directory

**SYNTAX**

```
ls [file]
```

**ARGUMENTS**

*   file - [optional] -A local directory to list its content. Defaults to the working directory

## mkdir

**NAME**
mkdir &ndash; Create a directory in local file system

**SYNTAX**

```
mkdir file
```

**ARGUMENTS**

*   file - [required] - The directory path to create

## mv

**NAME**
mv &ndash; Rename a file or directory

**SYNTAX**

```
mv source destination
```

**ARGUMENTS**

*   source - [required] - The file to rename
*   destination - [required] - The target file

## popd

**NAME**
popd &ndash; Pop working directory

**SYNTAX**

```
popd
```

## pushd

**NAME**
pushd &ndash; Push a new local working directory

**SYNTAX**

```
pushd file
```

**ARGUMENTS**

*   file - [required] - A local directory to push

## pwd

**NAME**
pwd &ndash; Print the local working directory

**SYNTAX**

```
pwd [options]
```

**OPTIONS**

*   -s - [flag] - Use this flag to show the working directory stack

## rm

**NAME**
rm &ndash; Remove a file or directory

**SYNTAX**

```
rm [options] file
```

**OPTIONS**

*   -r - [flag] - Recursive remove directories

**ARGUMENTS**

*   file - [required] - The directory or file to delete

## touch

**NAME**
touch &ndash; Touch a file

**SYNTAX**

```
touch file
```

**ARGUMENTS**

*   file - [required] - The file to touch
