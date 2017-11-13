---
title: Several Document Types vs One Document Type with a Nature Metadata
review:
    comment: ''
    date: '2017-01-16'
    status: ok
labels:
    - lts2016-ok
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '12914194'
    ajs-parent-page-title: Design Tips
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Several+Document+Types+vs+One+Document+Type+with+a+Nature+Metadata
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Several+Document+Types+vs+One+Document+Type+with+a+Nature+Metadata'
    page_id: '12914205'
    shortlink: HQ7F
    shortlink_source: 'https://doc.nuxeo.com/x/HQ7F'
    source_link: /display/NXDOC/Several+Document+Types+vs+One+Document+Type+with+a+Nature+Metadata
tree_item_index: 200
history:
    - 
        author: Manon Lumeau
        date: '2014-12-10 16:46'
        message: O
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-06-12 11:57'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-09-02 17:20'
        message: ''
        version: '5'
    - 
        author: Frédéric Vadon
        date: '2013-02-22 16:56'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-02-22 10:13'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-02-22 10:13'
        message: Added toc
        version: '2'
    - 
        author: Frédéric Vadon
        date: '2013-02-21 18:44'
        message: ''
        version: '1'

---
{{! excerpt}}

In some cases, there is a need to manage different documents (procedure, instruction, notice, invoices...) but with very similar properties and lifecycles.

One solution is to create a new document type in Studio for each "nature" of document to manage, another solution is to create one document type and then distinguish them with a metadata nature (bound to a vocabulary) for instance. There is no magical solution to choose between them, but a few criteria might help to solve the dilemma.

{{! /excerpt}}

## How to Choose?

As a base rule, one should try to keep the application as simple as possible and one document with a nature is very often simpler than 5 or more document types. So when possible, one document with a nature metadata is preferable than several document types. But the following questions will show when to go with several documents.

*   Do the documents have the same lifecycle and business rule?

If the answer is no, then you will need to have different documents types.

*   Do they have different metadata?

If the metadata are different then several different document types is the solution (do you need that many different metadata though?).

*   Do they have the same lifecycle but a different validation workflow?

If the documents have different workflows but same lifecycles, then this not a good enough reason to create several document types, as it is possible to filter available workflows on document metadata.

*   Is it required to have a strong separation between where the different natures of document can be created?

If yes, it will be simpler to create different documents type, than managing possible values for the nature depending on the space where the document is created.

## Example

### Description

Let's say that the following nature of documents will be managed by Nuxeo:

*   Invoices
*   Procedures
*   Contracts
*   Installation Instructions
*   Consulting report
*   Object design

### Analyze

Invoices and contracts probably have similar informations (customer, amount...) and are both used by accountants. Archiving policies are probably similar too. This could be one document type. They are not validated in the exact same order? This is not a problem, they can have different workflows.

Procedure and Installation instructions are both quality documentation. They are probably both created by a small group of people and then published. They share a metadata called `processus` and are validated the exact same way (creation > review > validation > publication). There is no difference except the nature, so this definitely should be one document type.

And finally, consulting reports and object design are both project deliverable.

One might say that object design can have more metadata like the object material and dimensions and that could be useful. One first approach, this can be true, it actually depends on the goal of the application, is it a full object design management application? In that case, there is a need to find and filter all object design by their properties. If this is just a general ECM application, adding very specific metadata create another level of complexity that could and should be avoided to keep it simple (it really depends on what you want to achieve actually).

### Result

This very quick analyze gives in the end, only three documents types:

*   Accounting documents with a nature metadata (invoice or contract), an amount metadata, a customer metadata, same lifecycle, two different workflows (depending on the nature).
*   Quality documentation with a nature metadata (procedure or installation instruction), a `processus` metadata and everything else identical.
*   Project deliverable with a nature metadata (Consulting report or Object Design).

## Conclusion

The content model design is a very important in building a content management application and simplicity should be chosen whenever possible.

The chosen example had obvious answers, if your case is more complicated, why not use Studio Hot-Reload capabilities to quickly prototype and test the two solutions?
