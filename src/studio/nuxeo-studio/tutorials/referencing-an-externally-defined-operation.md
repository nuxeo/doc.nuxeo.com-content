---
title: 'HOWTO: Reference an External Operation'
review:
    comment: ''
    date: ''
    status: ok
labels:
    - howto-registries
confluence:
    ajs-parent-page-id: '12912677'
    ajs-parent-page-title: Tutorials
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Referencing+an+Externally+Defined+Operation
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/Referencing+an+Externally+Defined+Operation
    page_id: '3867526'
    shortlink: hgM7
    shortlink_source: 'https://doc.nuxeo.com/x/hgM7'
    source_link: /display/Studio/Referencing+an+Externally+Defined+Operation
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:30'
        message: ''
        version: '24'
    -
        author: Anahide Tchertchian
        date: '2014-06-16 13:41'
        message: fix automation operations registry name
        version: '23'
    -
        author: Alain Escaffre
        date: '2014-05-06 14:11'
        message: ''
        version: '22'
    -
        author: Alain Escaffre
        date: '2014-05-05 15:12'
        message: ''
        version: '21'
    -
        author: Alain Escaffre
        date: '2014-05-05 14:38'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2013-07-17 18:38'
        message: 'Added excerpt, formatting'
        version: '19'
    -
        author: Solen Guitter
        date: '2011-09-02 16:47'
        message: Migrated to Confluence 4.0
        version: '18'
    -
        author: Solen Guitter
        date: '2011-09-02 16:47'
        message: removed obsolete note and added related howtos
        version: '17'
    -
        author: Alain Escaffre
        date: '2010-10-18 16:20'
        message: ''
        version: '16'
    -
        author: Alain Escaffre
        date: '2010-10-18 15:28'
        message: ''
        version: '15'
    -
        author: Alain Escaffre
        date: '2010-10-18 15:27'
        message: ''
        version: '14'
    -
        author: whajeri
        date: '2010-10-13 11:01'
        message: ''
        version: '13'
    -
        author: whajeri
        date: '2010-10-13 11:00'
        message: ''
        version: '12'
    -
        author: whajeri
        date: '2010-10-13 10:59'
        message: ''
        version: '11'
    -
        author: whajeri
        date: '2010-10-13 10:58'
        message: ''
        version: '10'
    -
        author: whajeri
        date: '2010-10-13 10:53'
        message: ''
        version: '9'
    -
        author: whajeri
        date: '2010-10-13 10:49'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2010-09-15 12:08'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2010-09-15 12:00'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2010-09-15 12:00'
        message: ''
        version: '5'
    -
        author: Alain Escaffre
        date: '2010-09-06 16:16'
        message: ''
        version: '4'
    -
        author: Alain Escaffre
        date: '2010-09-06 16:02'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2010-09-06 15:58'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2010-09-06 15:33'
        message: ''
        version: '1'

---
Nuxeo framework enables to implement custom operations, meaning operations different from the ones you can find in the Studio Operation browser. When implementing your own operation, you can entirely decide what the operation does, what are its parameters, its input...

{{! excerpt}}

We provide explanations on how to implement a custom operation. Pre-requisites are basic knowledge of Java and Nuxeo API.

{{! /excerpt}}

Basically, to enable a custom operation in your Studio project, you need to:

1.  [Implement an operation]({{page space='nxdoc' page='contributing-an-operation'}}).
2.  Import its definition in Studio to be able to use it in the Content Automation Chain editor.
    An operation definition can be serialized in JSON and uploaded in this format in Studio. As a consequence, the new operation will appear aside built-in operations, in the operation browser in a location that depends on the Operation category you defined.

![]({{file name='STUDIO-customOperation.png'}} ?w=350,border=true)

**To import the operation definition:**

1.  Make sure you have an [custom operation implemented]({{page space='nxdoc' page='contributing-an-operation'}}) and deployed on the Nuxeo instance where you also deployed your Studio plugin.
2.  Go to **Advanced settings > Registries > Automation Operations**
3.  Pay attention to the given sample definition, copy-paste it and adapt to your custom operation (regarding operation ID, parameters type and value, accepted input and output, ...).

    {{#> callout type='tip' }}

    You can add multiple operation definitions.

    {{/callout}} {{#> callout type='tip' }}

    You can get the full JSON definition of your operation on the operation documentation, on your deployment. Go to the following URL: `http://NUXEO_SERVER/nuxeo/site/automation/doc`. The served page builds dynamically the operations documentation. You will find your operation(s) there. Once on the documentation of the operation, in the "LINKS" section, click on the `JSON definition` link. Note that this link is not available on Nuxeo DM 5.3.2 and previous versions.

    {{/callout}}
4.  Once the JSON is ok, save and you are done!
    You should see the operation in its category.

{{#> callout type='tip' }}

Putting your logic inside operations is always better than directly in SEAM components or custom listeners because:

*   It forces you to think a bit generic and re-usable,
*   You produce easily configurable and maintainable code.

{{/callout}}
