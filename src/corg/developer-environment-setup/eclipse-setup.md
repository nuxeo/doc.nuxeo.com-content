---
title: Eclipse Setup
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '9275205'
    ajs-parent-page-title: Developer Environment Setup
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Eclipse+setup
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Eclipse+setup'
    page_id: '9275212'
    shortlink: TIeN
    shortlink_source: 'https://doc.nuxeo.com/x/TIeN'
    source_link: /display/CORG/Eclipse+setup
tree_item_index: 600
toc: true
history:
    -
        author: Julien Carsique
        date: '2015-02-16 10:13'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2014-12-01 11:54'
        message: ''
        version: '8'
    -
        author: Anahide Tchertchian
        date: '2014-08-19 11:28'
        message: add reference to detailed code style pages
        version: '7'
    -
        author: Julien Carsique
        date: '2013-04-22 14:57'
        message: ''
        version: '6'
    -
        author: Olivier Grisel
        date: '2012-04-04 15:48'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Olivier Grisel
        date: '2012-04-04 15:48'
        message: ''
        version: '4'
    -
        author: Olivier Grisel
        date: '2012-04-04 15:48'
        message: ''
        version: '3'
    -
        author: Mathieu Guillaume
        date: '2012-02-09 13:40'
        message: svn -> hg
        version: '2'
    -
        author: Julien Carsique
        date: '2012-01-09 15:23'
        message: ''
        version: '1'
---

## Install Eclipse

Download and install Eclipse from [Eclipse website](https://www.eclipse.org/downloads/).

### Import Nuxeo Source Code in Eclipse

Before importing Nuxeo source code in Eclipse, you need to generate Eclipse
project files in terminal. Compared to doing it in Eclipse, using the
command-line makes the process much faster. Please launch the following command
at the root of the Git repository.

{{#> panel type='code' heading='Generate Eclipse\'s project files with maven-eclipse-plugin'}}

```
mvn eclipse:clean eclipse:eclipse \
    -Paddons,distrib -fae -nsu -T 1C \
  [ -DdownloadSources=true ] \
  [ -DdownloadJavadocs=true ] \
  [ -Declipse.useProjectReferences=true ] \
  [ -Declipse.workspace=/path/to/eclipse/workspace ]
```

{{/panel}}

{{#> callout type='note' }}
For details, see [Maven Eclipse Plugin documentation](https://maven.apache.org/plugins/maven-eclipse-plugin/eclipse-mojo.html).
{{/callout}}

You should then run the following script to make Eclipse use different build
directories than Maven:

{{#> panel type='code' heading='Linux and OS X'}}

```
./fixeclipse
```

{{/panel}}

{{#> panel type='code' heading='Windows'}}

```
python scripts/fixeclipse.py
```

{{/panel}}

Now, you can import Nuxeo modules into Eclipse:

```
File -> Import -> General -> Existing Projects into Workspace
```

#### Configure Eclipse

See [Java Code Style]({{page page='java-code-style'}}) to configure Eclipse with the Nuxeo conventions on the formatting, code style and other coding preferences.
