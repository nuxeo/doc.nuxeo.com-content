---
title: Declaring Vocabularies
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-vocabulary
    - content-review-6-0
confluence:
    ajs-parent-page-id: '3867540'
    ajs-parent-page-title: Custom Doc ID Generation
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Declaring+Vocabularies
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Declaring+Vocabularies'
    page_id: '3867554'
    shortlink: ogM7
    shortlink_source: 'https://doc.nuxeo.com/x/ogM7'
    source_link: /display/Studio/Declaring+Vocabularies
history:
    - 
        author: Solen Guitter
        date: '2014-03-07 17:12'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2011-09-06 14:58'
        message: Migrated to Confluence 4.0
        version: '14'
    - 
        author: Solen Guitter
        date: '2011-09-06 14:58'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:03'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:01'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:01'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2010-09-24 10:00'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2010-09-15 17:29'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2010-09-15 17:14'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-09-15 17:13'
        message: ''
        version: '6'
    - 
        author: Alain Escaffre
        date: '2010-09-12 23:16'
        message: ''
        version: '5'
    - 
        author: Alain Escaffre
        date: '2010-09-12 10:26'
        message: ''
        version: '4'
    - 
        author: Alain Escaffre
        date: '2010-09-12 10:25'
        message: ''
        version: '3'
    - 
        author: Alain Escaffre
        date: '2010-09-12 10:15'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2010-09-06 18:23'
        message: ''
        version: '1'

---
{{! excerpt}}

Now that the&nbsp;["File" document type has been overridden with our new file]({{page page='adding-a-type-property-to-file-document-type'}})&nbsp;that has&nbsp;`AdditionalInfo`&nbsp;schema, we need to create the vocabularies used to select the document type and generate the first part of the document's ID.

{{! /excerpt}}

See [how to add a new vocabulary]({{page space='nxdoc' page='how-to-add-a-new-vocabulary'}}).

1.  Create a simple vocabulary "TypeLabel" with the values below, that will fill the drop-down list to edit the "type" metadata.

    <table><tbody><tr><th colspan="1">

    ID

    </th><th colspan="1">

    Label

    </th></tr><tr><td colspan="1">

    proposal

    </td><td colspan="1">

    Proposal

    </td></tr><tr><td colspan="1">

    invoice

    </td><td colspan="1">

    Invoice

    </td></tr><tr><td colspan="1">

    law_act

    </td><td colspan="1">

    Law act

    </td></tr><tr><td colspan="1">

    advertisement

    </td><td colspan="1">

    Advertisement

    </td></tr></tbody></table>
2.  Create a simple vocabulary "TypePrefix", that will give the corresponding prefix for UID generation, depending on the selected "type".

    <table><tbody><tr><th colspan="1">

    ID

    </th><th colspan="1">

    Label

    </th></tr><tr><td colspan="1">

    proposal

    </td><td colspan="1">

    Prop

    </td></tr><tr><td colspan="1">

    invoice

    </td><td colspan="1">

    Inv

    </td></tr><tr><td colspan="1">

    law_act

    </td><td colspan="1">

    LA

    </td></tr><tr><td colspan="1">

    advertisement

    </td><td colspan="1">

    Ad

    </td></tr></tbody></table>{{#> callout type='tip' }}

    The values ID must be the same in both vocabularies.

    {{/callout}}
3.  Go and edit the widgets used for the Type and UID metadata to indicate the values should be taken in these vocabularies.

Next, we need to [create and configure the automation chain that will generate the UID]({{page page='configure-the-id-generation-using-functions'}}).