---
title: Naming Conventions
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '12912674'
    ajs-parent-page-title: Administering your project
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Naming+Conventions
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Naming+Conventions'
    page_id: '9830645'
    shortlink: 9QCW
    shortlink_source: 'https://doc.nuxeo.com/x/9QCW'
    source_link: /display/Studio/Naming+Conventions
tree_item_index: 400
history:
    -
        author: Karin Touchie
        date: '2016-05-27 15:11'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2015-09-07 09:25'
        message: Fix format and TOC
        version: '24'
    -
        author: Vincent Dutat
        date: '2014-11-20 05:44'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2013-07-01 10:53'
        message: Updated operation link to use Explorer
        version: '22'
    -
        author: Solen Guitter
        date: '2012-03-06 10:10'
        message: Migrated to Confluence 4.0
        version: '21'
    -
        author: Solen Guitter
        date: '2012-03-06 10:10'
        message: Added TOC
        version: '20'
    -
        author: Frédéric Vadon
        date: '2012-03-05 18:41'
        message: ''
        version: '19'
    -
        author: Frédéric Vadon
        date: '2012-03-05 18:40'
        message: typo
        version: '18'
    -
        author: Frédéric Vadon
        date: '2012-03-05 17:55'
        message: ''
        version: '17'
    -
        author: Frédéric Vadon
        date: '2012-03-05 17:54'
        message: ''
        version: '16'
    -
        author: Frédéric Vadon
        date: '2012-03-05 17:52'
        message: ''
        version: '15'
    -
        author: Frédéric Vadon
        date: '2012-03-05 17:50'
        message: ''
        version: '14'
    -
        author: Frédéric Vadon
        date: '2012-03-05 17:48'
        message: ''
        version: '13'
    -
        author: Frédéric Vadon
        date: '2012-03-05 14:26'
        message: ''
        version: '12'
    -
        author: Frédéric Vadon
        date: '2012-03-05 11:58'
        message: ''
        version: '11'
    -
        author: Frédéric Vadon
        date: '2012-03-05 11:57'
        message: ''
        version: '10'
    -
        author: Frédéric Vadon
        date: '2012-03-05 11:37'
        message: ''
        version: '9'
    -
        author: Frédéric Vadon
        date: '2012-03-05 10:39'
        message: ''
        version: '8'
    -
        author: Alain Escaffre
        date: '2012-03-02 12:59'
        message: ''
        version: '7'
    -
        author: Frédéric Vadon
        date: '2012-03-02 01:16'
        message: ''
        version: '6'
    -
        author: Frédéric Vadon
        date: '2012-03-02 01:13'
        message: ''
        version: '5'
    -
        author: Frédéric Vadon
        date: '2012-03-02 01:12'
        message: ''
        version: '4'
    -
        author: Frédéric Vadon
        date: '2012-03-02 01:11'
        message: ''
        version: '3'
    -
        author: Frédéric Vadon
        date: '2012-03-02 01:11'
        message: ''
        version: '2'
    -
        author: Frédéric Vadon
        date: '2012-03-01 03:16'
        message: ''
        version: '1'

---
This page offers naming conventions for customizing Studio items to facilitate usage, maintenance and support.

We strongly encourage you to follow these, especially if you are a beginner.

## General rule

Avoid using hyphens (-). They will prevent your items to be usable by automation scripting.
 
<!--In general, there are items that will be easily seen by end users (document types for instance) and under the hood features (automation chains for instance). For very exposed items, words should be separated by an underscore and begin with a capital letter (*Contract*_*Library*) and for others we will prefer compacity: capital letter for every words but no underscore between them (*SendToValidation* for instance).

As Studio projects can be mixed together or involve many functionalities (ex: contract management, holiday requests...), it is important that items coming from one project or another can be identified easily. The solution is to prefix every item. For example every item that is about contract_management will start with *CM-* and *HR-* will apply for holiday request: *CM-SendToValidation*. Prefixing does not apply to document types, and lifecycles (Content Model section in Studio). This is particularly mandatory when you do a plugin that will become an [Application Template]({{page page='external-templates'}}) that can be imported into other projects.-->

## Content Model

| Item  | Rules | Example   |
|---|---|---|
| Document types | First letter of each word capitalized, not separated | ContractLibrary |
| Schemas | All lowercase, separated by underscore when readability is impacted | contractlibrary  |
| Properties | All lowercase, not separated | contract  |
| Lifecycle | First letter of each word capitalized, not separated | ContractLifecycle |
| Lifecycle state  | All lowercase, not separated   | validated  |

<!--*   **Document types**: Document types are probably the main items and should be created first. Naming should start with a capital letter, and if it needs several words, these one should be separated with an underscore: *Contract_Library*.
*   **Schemas**: Explicit name (the same as the document type if linked to one) with underscore separating words but all lower case: *contract_library*. You should use a prefix that is either the name or a shorter prefix like *dc* for dublin_core.
*   **Lifecycle**: Upper case for each first letter, underscore to separate them. Most of the time a lifecycle is only for one document type, in that case, the lifecycle should name after the doc type with Lifecycle at the end: *Contract_Lifecycle*.
*   **Lifecycle State**: all lower case, words separated by underscore. Transitional states and stable states should be distinguished, for instance a document that requires to be corrected and then validated will have the states: *correction* > *validation* > *validated*-->

## Listings and Views

<!--Named like under the hood items: explicit name, no word separation but capital first letter and the project prefix. For example, a content view that shows all contracts in validation state would be: *CM_ContractsInValidation*.-->

| Item  | Rules | Example   |
|---|---|---|
| Listings and views | Project prefix, first letter of each word capitalized, underscore between prefix and name only | CM_ContractsInValidation |

## Automation

### Automation Chain

Automation chain names should contain a verb to describe what they do.

Some automation chains have a UI context, which enables to use UI operations like [Add Info Message](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewOperation/Seam.AddInfoMessage).

These chains should be prefixed with UI. Example: *CM_UI_SendToValidation*.

Other chains do not have UI context and are mainly called by event handler or other chains. They should be prefixed with Sub. Example: *CM_Sub_UpdateAcl*.

<!--Items in automation are clearly under the hood items so it would be explicitly named: no word separation but capital first letter and the project prefix. We also added a few rules to standardized the description.-->

### Workflow

When automation chains are steps of a workflow, a good idea is to prefix them with a number so that they are displayed in the same order they will be triggered. Example with a workflow on the lifecycle [Draft <--> Validation --> Validated ]:

*   *CM_01_UI_SendToValidation*
*   *CM_02_UI_SendToValidated*
*   *CM_02_UI_SendBackToDraft*

Note that *CM_02_UI_SendToValidated* and *CM_02_UI_SendBackToDraft* have the same number as they can be triggered from the same state (Validation).

### User Actions

User actions should be named after the automation chain they trigger, adding UA- (User Action) after the project prefix (possibly adding the user action category at the end as there can be several user action launching the automation chains).

Example of a user action to send a contract to validation: *CM_UA_SendToValidation*

### Event Handlers

Same rule as user actions but with EH instead of UA: *CM_EH_UpdateAclOnContractCreation*

## Miscellaneous

Every other item should have the first letter of each word capitalized and preferably not be separated.

Vocabularies should have a name shorter than 13&nbsp;characters, otherwise, it&nbsp;may be too long for some databases

Most of the time, groups of users come from the AD or LDAP, but when created in Studio, it should reflect the role, in full lower case, with a "s" at the end: *members*, *redactors*, *purchasers*...
