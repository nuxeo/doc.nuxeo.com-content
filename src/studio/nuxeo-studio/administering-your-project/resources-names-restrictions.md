---
title: Data Model: Reserved Words
review:
    comment: ''
    date: ''
    status: ok
toc: true
tree_item_index: 350
---
This page lists values that cannot be used when naming a schema or a field, because they are used internally (either by Nuxeo of by the database) and using the same values will lead to conflicts and incompatibility.

The following values are *case insensitive* (a field named `XMIN` of `xmin` will be rejected), unless mentioned otherwise.

## Fields

### Reserved Field Names

* cmin
* cmax
* content
* ctid
* id
* oid
* tableoid
* xmax
* xmin

### Reserved Field Suffixes

* ListType
* Type

These are case sensitive. For example, `my_Field_Type` is rejected, while `my_field_type` is accepted.

## Schemas

### Reserved Schema Prefixes

* aclr
* fsc_
* fsd_
* jbpm_
* jena_
* nxp_
* oauth
* search_
* uitypesconf_

### Reserved Schema Suffixes

* AdvancedSearch (advancedsearch)
* _as
* _cv
* _pp
* _vnav


### Reserved Schema Names

* aCP
* acls
* advanced_search
* allowedStateTransitions
* ancestors
* basicauditsearch
* bas_eventcategories
* bas_eventids
* cacheKey
* class
* comment
* component
* content
* content_roots
* contextData
* continent
* coreSession
* country
* currentLifeCycleState
* dataModels
* dataModelsCollection
* declaredFacets
* declaredSchemas
* digestauth
* directory_configuration
* documentsLists
* documentType
* ecm
* eventCategories
* eventTypes
* externalGadgets
* faceted_search
* facets
* flags
* folder
* fs
* fulltext
* gadget
* group2group
* groups
* hierarchy
* hierarchy_read_acl
* id
* image_metadata
* iptc
* l10ncoverage
* l10nsubjects
* language
* lifeCyclePolicy
* lock
* locks
* misc
* moderators
* name
* nt_actors
* parentRef
* parts
* path
* pathAsString
* pictemplate
* picturebook
* post
* prefetch
* property
* protocol
* proxies
* publish_sections
* querynav
* ref
* relatedtextresource
* relation
* relation_inverse_predicates
* relation_predicates
* relation_search
* rel_srch_ecm_path
* repositories
* repositoryName
* schemas
* searchlocalconfiguration
* sessionId
* simpleconfigurationparameter
* sourceId
* space
* status
* subject
* subtopic
* system
* tag
* task
* taskcomment
* taskusers
* task_variable
* theme_configuration
* title
* topic
* type
* typetocv
* type_task
* uid
* ui_types_configuration
* user2group
* userprofile
* users
* usersubscription
* versionLabel
* versions
* view
* wchtml
* wcopensocial
* webcontent
* webpage
* yuilayout
* yuiunit
