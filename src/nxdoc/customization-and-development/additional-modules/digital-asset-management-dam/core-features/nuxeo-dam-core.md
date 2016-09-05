---
title: Nuxeo DAM Core
toc: true
confluence:
    ajs-parent-page-id: '17334334'
    ajs-parent-page-title: Core Features
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Nuxeo+DAM+Core
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Nuxeo+DAM+Core'
    page_id: '17334280'
    shortlink: CIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/CIAIAQ'
    source_link: /display/NXDOC58/Nuxeo+DAM+Core
history:
    - 
        author: Stéfane Fermigier
        date: '2010-08-03 07:23'
        message: igrated to Confluence 4.
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-08-03 07:23'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-08-02 15:18'
        message: ''
        version: '6'
    - 
        author: Thomas Roger
        date: '2010-07-28 19:57'
        message: ''
        version: '5'
    - 
        author: Thomas Roger
        date: '2010-07-28 19:57'
        message: ''
        version: '4'
    - 
        author: Thomas Roger
        date: '2010-07-28 18:31'
        message: ''
        version: '3'
    - 
        author: Thomas Roger
        date: '2010-07-28 18:26'
        message: ''
        version: '2'
    - 
        author: Thomas Roger
        date: '2010-07-26 17:44'
        message: ''
        version: '1'

---
## Schema

A specific DAM schema is added: `dam_common`. It is used to store DAM related&nbsp;information like author of the assets, authoring date of the assets.

## Document types

### Existing Nuxeo DM document types

We reuse the document types defined in a standard Nuxeo, but types are&nbsp;overridden to use our custom schema:

*   `Picture`: for image related files (jpeg, png, gif, bmp, ...)
*   `File`: for Office document files (Microsoft Office documents, OpenOffice&nbsp;documents, PDF, text files, ...)
*   `Video`: to be defined in a generic video module (like imaging one)
*   `Audio`: to be defined in a generic audio module

### Nuxeo DAM document types

2 new document types are defined for DAM:

*   `ImportSetRoot`: the root folder where the `ImportSets` are stored. Extends the `Folder` type.
*   `ImportSet`: extends the `Folder` type, contains the assets related to a given import.

One `ImportSet` is created for each import.

## Facets

Nuxeo DAM defines a new facet `Asset` to specify which document types are assets.

This facet is added on the `Picture`, `File`, `Video` and `Audio` document types.

## Physical document hierarchy layouting

As stated previously, an `ImportSet` document is created for each import, regardless of whether the file being imported is a composite file (eg. a zip file) or a single file (eg. a single jpg image).

They are all stored in the same `ImportSetRoot`: `/default-domain/import-sets` in the repository.

Each `ImportSet` document contains the assets imported.

Hierarchy example:

```

/default-domain/import-sets-root
                  |- folder1
                  |     |- import-set-1
                  |     |     |
                  |     |     |-file1
                  |     |     |-image1
                  |     |     |-subfolder1
                  |     |     |  |-image2
                  |     |     |  |-image3
                  |     |     `-audio_file1
                  |     `- import-set-2
                  |     |
                  |     |-file2
                  |     |-image4
                  |     `-audio_file2
                  `- folder2
                        |- import-set-3
                        |     |
                        |     |-file3
                        |     |-image5
                        |     |-subfolder2
                        |     |  |-image6
                        |     |  |-image7
                        |     `-audio_file3
                        `- import-set-4
                        |
                        |-file4
                        |-image8
                        `-audio_file4

```

The type of folder1 and folder2 is now "ImportFolder".