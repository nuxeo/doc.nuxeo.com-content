---
title: Custom Doc ID Generation
labels:
    - tutorial
    - content-review-6-0
confluence:
    ajs-parent-page-id: '8683961'
    ajs-parent-page-title: Templates reference
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Custom+Doc+ID+Generation
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Custom+Doc+ID+Generation'
    page_id: '3867540'
    shortlink: lAM7
    shortlink_source: 'https://doc.nuxeo.com/x/lAM7'
    source_link: /display/Studio/Custom+Doc+ID+Generation
history:
    - 
        author: Alain Escaffre
        date: '2011-09-18 21:42'
        message: ''
        version: '17'
    - 
        author: Alain Escaffre
        date: '2011-09-18 21:42'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2010-09-24 15:32'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:46'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-09-23 17:15'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-09-15 14:34'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-09-15 14:33'
        message: ''
        version: '11'
    - 
        author: Alain Escaffre
        date: '2010-09-13 07:28'
        message: ''
        version: '10'
    - 
        author: Alain Escaffre
        date: '2010-09-13 07:20'
        message: ''
        version: '9'
    - 
        author: Alain Escaffre
        date: '2010-09-12 10:12'
        message: ''
        version: '8'
    - 
        author: Alain Escaffre
        date: '2010-09-12 10:10'
        message: ''
        version: '7'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:24'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:23'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:19'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:19'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:01'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-09-06 17:30'
        message: ''
        version: '1'

---
It is very frequent that you need to generate incremental IDs with a business prefix that can depend on the context or the document being created. This tutorial shows a simple use case, where the ID is generated depending on the document type: if the document is an invoice, it starts with `INV-`, if it is a proposal, it starts with `PROP-`, if it is a salary sheet, it starts with `WAG-`...

In our usecase, the type is a metadata value that can be managed via a _vocabulary_.
Another vocabulary enables to choose the prefix name depending on the type. Of course, the number associated to the ID evoluates incrementaly and independently for each value of the type metadata.

{{#> callout type='tip' }}

The key tool to generate IDs is the scripting function `Fn.getNextId(String key)` that gets a unique value for a given key. Each time this function is called using the same key a different string will be returned (actually an incremented number).

{{/callout}}

In this tutorial, we will:

*   [Override the File type definition to add a "type" property]({{page page='adding-a-type-property-to-file-document-type'}}).
*   [Declare the two required vocabularies in Studio]({{page page='declaring-vocabularies'}}) (one for the list of types, and one for the associated prefix used in the ID generation)
*   [Configure the event listener and associated automation chain]({{page page='configure-the-id-generation-using-functions'}}) that will concretely generate the ID and store it on the document.