---
title: Studio Features Overview
description: add the merge behavior information on each feature editor in Studio documentation.
review:
  date: '2023-05-15'
  status: 
  comment: ''
  labels:
    - studio-resources
confluence:
    ajs-parent-page-id: '12911781'
    ajs-parent-page-title: Working in Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
tree_item_index: 1600
  
---





| Studio Feature   | Extension point/Contribution                  | Default merge behavior           |
|----------------------|------------------------------------------------------------------|--------------------------------------------|
| Branding      | PluggableAuthenticationService#loginScreen/loginScreenConfig  | Override                 |
| Schema       | TypeService#schema/schema                    | Override                 |
| Document Type    | TypeService#doctype/doctype                   | Merge (selectable in UI)         |
| Facet        | TypeService#doctype/facet                    | Override                 |
| Life Cycle     | LifeCycleService#lifecycle/lifecycle              | Override                 |
| Structure Template | ContentTemplateService#factoryBinding/factoryBinding      | Override (selectable in UI)   |
| Workflow      | service#routeModelImporter                    | Override                 |
| Page Provider    | PageProviderService#providers/genericPageProvider        | Override                 |
| Elasticsearch Mapping| ElasticSearchComponent#elasticSearchIndex/elasticSearchIndex   | Merge |
| Automation Chain  | OperationServiceComponent#chains/chain              | Not Allowed (will fail at deployment)   |
| Automation Scripting | AutomationScriptingComponent#operation/scriptedOperation     | Override                 |
| Event Handler    | OperationServiceComponent#event-handlers/handler        | Merge                   |
| Document Template  | ResourceService#resources/resource                | Override                 |
| Mail Template    | NotificationService#templates/template              | Override                 |
| Permission     | SecurityService#permissions/permission and SecurityService#permissionsVisibility/visibility | N/A and Merge |
| Users & Groups   | GenericDirectory#directories/directory              | Merge (but dataFile is overridden)    |
| Vocabulary     | GenericDirectory#directories/directory                        | Merge (but dataFile is overridden)    |
|Web Services Filtering  |AutomationServer#bindings/binding              | Override
