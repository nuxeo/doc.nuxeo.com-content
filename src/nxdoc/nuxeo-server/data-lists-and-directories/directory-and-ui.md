---
title: Directory and UI
labels:
    - vocabulary
    - directory
    - directory-component
toc: true
confluence:
    ajs-parent-page-id: '4688939'
    ajs-parent-page-title: Data Lists and Directories
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Directory+and+UI
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Directory+and+UI'
    page_id: '23367626'
    shortlink: yo9kAQ
    shortlink_source: 'https://doc.nuxeo.com/x/yo9kAQ'
    source_link: /display/NXDOC/Directory+and+UI
history:
    - 
        author: Anahide Tchertchian
        date: '2015-04-20 14:18'
        message: ''
        version: '3'
    - 
        author: Thierry Delprat
        date: '2015-03-19 14:35'
        message: ''
        version: '2'
    - 
        author: Thierry Delprat
        date: '2015-03-19 14:31'
        message: ''
        version: '1'

---
&nbsp;

Inside Nuxeo Platform, Directories are used to provide a common abstraction on a set of record&nbsp;

*   that can be stored in different manner
    *   SQL, LDAP, Repository, External Service
*   that can be of different nature
    *   user, group, simple key/value, complex records

## Layouts and Directory

Entries returned by a Directory are technically Documents: documents that have only one schema, but still Document.

This means that you can use Widgets and Layouts system to manage directories entries.

```
<nxl:layout name="#{currentVoc.layout}" mode="edit" value="#{directoryUIActions.selectedDirectoryEntry}" />
```

## Directory Management UI

The default Nuxeo UI includes management screens for the directories.

For simplicity reasons, the entry inside the Admin Center is called "Vocabularies", but actually it can manage any kind of Directories (i.e. not only the directories using the vocabulary schema).

To make this easily usable, the platform includes a DirectoryUIManager that uses an &nbsp;[directories extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.directory.ui.DirectoryUIManager--directories) to allow to contribute what directories should be available in the management UI and what layouts should be used.

## Suggest Widgets

Directories can be used as a source of data for Suggest Widgets.

See&nbsp;[Suggestion Widget Types]({{page space='nxdoc58' page='suggestion-widget-types'}}) page for more details.

&nbsp;

&nbsp;

* * *