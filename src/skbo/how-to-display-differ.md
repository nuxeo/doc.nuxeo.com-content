---
title: How to display different customizations in a mass modification popup message depending on the type of selected documents
description: How to display different customizations in a mass modification popup message depending on the type of selected documents
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsfdevelopment
    - jsfruntime
    - studio-customization
    - configuration
    - import

---
# How to display different customizations in a mass modification popup message depending on the type of selected documents?
## Problem
In the mass modification popup message, depending on the types of documents selected, one would like to display categories for DocumentType1 if selected documents are only of type DocumentType1, respectively DocumentType2, and no category display if both types f documents are selected.  
How to perform this?
## Solution
In the mass modification popup, you added 2 fields: one for custom Vocabulary1 for DocumentType1 and one for custom Vocabulary2 related to DocumentType2.   But how to display selectively the fields?

You simply have to edit the fields in Studio and put in the “Advanced Mode Configuration” section of the fields for DocumentType2:

    #{documentsListsManager.getWorkingListTypes("CURRENT_SELECTION").contains("DocumentType1") && documentsListsManager.getWorkingListTypes("CURRENT_SELECTION").contains("DocumentType2") ? 'hidden' : (documentsListsManager.getWorkingListTypes("CURRENT_SELECTION").contains("DocumentType2") ? 'edit' : 'hidden')}

and the same type of configuration for DocumentType1

This configuration hides the field if both types are selected and reveals the VocabularyX only if DocumentTypeX is selected.


2019-06-01T17:37:26.906Z
## (c) Nuxeo Support Knowledge Base Outline 2019
