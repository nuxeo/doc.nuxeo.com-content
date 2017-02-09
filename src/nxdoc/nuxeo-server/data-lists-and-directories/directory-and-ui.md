---
title: Directory and UI
review:
    comment: ''
    date: '2016-12-20'
    status: ok
labels:
    - lts2016-ok
    - vocabulary
    - directory
    - directory-component
toc: true
tree_item_index: 400
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
Inside Nuxeo Platform, Directories are used to provide a common abstraction on a set of record

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

Both Nuxeo JSF UI and Nuxeo Web UI include management screens for the directories.

For simplicity reasons, the entry inside the Admin Center is called "Vocabularies", but actually it can manage any kind of Directories (i.e. not only the directories using the vocabulary schema).

In the Nuxeo JSF UI, to make this easily usable, the platform includes a DirectoryUIManager that uses a [directories extension point](http://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.directory.ui.DirectoryUIManager--directories) to allow to contribute what directories should be available in the JSF management UI and what layouts should be used.

In Nuxeo Web UI, all the directories that are not of type `system` are included by default in the management UI.

## Suggest Widgets

Directories can be used as a source of data for Suggest Widgets.

See [Suggestion Widget Types]({{page page='suggestion-widget-types'}}) page for more details.
