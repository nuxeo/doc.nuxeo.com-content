---
title: Configuration Commands
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - shell
    - shell-component
toc: true
confluence:
    ajs-parent-page-id: '4687648'
    ajs-parent-page-title: Nuxeo Shell Command Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Configuration+Commands
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Configuration+Commands'
    page_id: '4689085'
    shortlink: vYxH
    shortlink_source: 'https://doc.nuxeo.com/x/vYxH'
    source_link: /display/NXDOC/Configuration+Commands
tree_item_index: 500
version_override:
    'LTS 2015': 710/admindoc/configuration-commands
    '6.0': 60/admindoc/configuration-commands
    '5.8': 58/admindoc/configuration-commands
history:
    -
        author: Solen Guitter
        date: '2015-08-31 15:07'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2012-05-15 16:13'
        message: Migrated to Confluence 4.0
        version: '4'
    -
        author: Solen Guitter
        date: '2012-05-15 16:13'
        message: Fixed wrong links and added related pages
        version: '3'
    -
        author: Solen Guitter
        date: '2011-03-03 12:31'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2011-01-04 00:13'
        message: ''
        version: '1'

---
{{#> callout type='info' heading='Namespace: *config*'}}

Commands for configuring the shell.

{{/callout}}

## background

**NAME**
background &ndash; Modify the background color used by the shell. This command is available only in UI mode.

**SYNTAX**

```
background
```

## color

**NAME**
color &ndash; Modify the foreground color used by the shell. This command is available only in UI mode.

**SYNTAX**

```
color
```

## font

**NAME**
font &ndash; Modify the font used by the shell. This command is available only in UI mode.

**SYNTAX**

```
font
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

## theme

**NAME**
theme &ndash; Modify the theme used by the shell. This command is available only in UI mode.

**SYNTAX**

```
theme [name]
```

**ARGUMENTS**

*   name - [optional] -The theme name to set. If not specified the current theme is printed.

&nbsp;
