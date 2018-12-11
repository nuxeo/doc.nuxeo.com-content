---
title: Naming Conventions
review:
    comment: ''
    date: ''
    status: ok
toc: true
tree_item_index: 400
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

- Use pascal case naming convention (initial uppercase letter).
  - Example: `PascalCase`
- Avoid using hyphens (-) and use underscore. They will prevent your items to be usable by automation scripting.

## Nuxeo Studio Modeler

### Content Model

| Item  | Rules | Example   |
|---|---|---|
| Document types | Pascal case naming convention | ContractLibrary |
| Schemas | Lower case, separated by underscore only if readability is affected | contractlibrary  |
| Properties | Pascal case naming convention | ContractNumber  |
| Lifecycle | Pascal case naming convention | ContractLifecycle |
| Lifecycle state  | Camel case, not separated | ingestionInProgress |
| Lifecycle transition  | `to_` followed by the lifecycle state name | to_ingestionInProgress |
| Structure templates | Pascal case naming convention | ContractLibraryStructure  |


#### Workflow

| Item  | Rules | Example   |
|---|---|---|
| Workflow template | `WF_` followed by the workflow template name | WF_Contract |
| Workflow task | `TK_` followed by the workflow task name and the associated workflow template | TK_ContractReview_WF_Contract  |

### Page Providers

| Item  | Rules | Example   |
|---|---|---|
| Page Providers | `PP_` followed by the document type name (if searching for a specific document type), and the search name | PP_Obsolete_Contracts |

### Automation

| Item  | Rules | Example   |
|---|---|---|
| Automation chains | `AC_` followed by the associated document type (if specific to a particular document type) and the automation name. | AC_Contract_UpdateLifecycle |
| Automation scripting | `AS_` followed by the associated document type (if specific to a particular document type) and the automation name. | AS_Contract_CreationPrefill |
| Event handlers | `EH_` followed by the associated automation chain/scripting name | EH_AS_Contract_CreationPrefill  |

### Templates

| Item  | Rules | Example   |
|---|---|---|
| Document templates | `DT_` followed by the document template name | DT_ContractReport |
| Mail templates | `MT_` followed by the mail template name. If relevant, add the corresponding workflow task triggering the mail template, an event, a button etc. | MT_TK_ContractReview_WF_Contract |


### Roles and Permissions

| Item  | Rules | Example   |
|---|---|---|
| Permissions | Pascal case naming convention | ReadWithoutDownload |

### Vocabularies

| Item  | Rules | Example   |
|---|---|---|
| Vocabularies | `VOC_` followed by the property name (if relevant), and the vocabulary name | VOC_ContractProvider |

### Advanced Settings

| Item  | Rules | Example   |
|---|---|---|
| XML Extensions | `XML_` followed by the extension point type (`actions`, `notifications`, `providers`, `doctype`...) and the configuration name. If relevant, add the associated document type, automation chain, workflow task triggering the mail template, an event, a button etc. | XML_notification_Contract_OnCreation |

## Nuxeo Studio Designer

### Layouts

All elements from the Layout tabs are auto-generated by Nuxeo Studio Designer

### UI

| Item  | Rules | Example   |
|---|---|---|
| Document pages | `DP_` followed by the associated document type (if relevant), and the page name | DP_Contract_Attachments |
| Left menu items | `LM_` followed by the associated document type (if relevant), and the page name | LM_Contracts |
| Main menu pages | `MM_` followed by the associated document type (if relevant), and the page name | MM_Contracts |
| Actions | `Button_` followed by the associated automation chain or automation scripting | Button_AC_Contract_UpdateLifecycle |
| Themes | `Theme_` followed by the associated project | Theme_ContractManagement |

- Translations: All translations should respect [translation rules](https://doc.nuxeo.com/nxdoc/web-ui-managing-translations/)
