---
title: Upgrading Nuxeo Web UI from LTS 2019 to 11.1
description: Upgrade notes from Nuxeo Web UI LTS 2019 (10.10) to 11.1
review:
    comment: ''
    date: '2020-06-24'
    status: ok
toc: true
labels:
tree_item_index: 999
hidden: true
---

{{! multiexcerpt name='upgrade-notes'}}

{{! multiexcerpt name='matching-notes'}}
{{#> callout type='info' heading='Release Notes'}}
This page mentions how to do a technical upgrade. Have a look at the [release notes]({{page page='web-ui-11-1-release-notes'}}) to see what's new.
{{/callout}}
{{! /multiexcerpt}}

## Upgrading from Web UI LTS 2019 to Web UI 11.1

### Polymer 3 Migration

#### High Level Overview

Migrating to Polymer 3 is fairly transparent. Quoting the [Polymer dev team](https://polymer-library.polymer-project.org/3.0/docs/about_30#api-changes):

> The Polymer 3.0 API is almost 100% backward compatible with Polymer 2.x—the only changes are removing APIs related to HTML Imports (such as importHref), and converting Polymer's API to be module-based rather than globals-based.

#### Studio Projects

Studio configuration is made to be compatible and does not need to be migrated. If you did add customization in your project, see below for further details. Otherwise you can consider your project safe to use.

#### HTML Imports

Nuxeo added a compatibility layer to keep HTML imports working. There is no need to update HTML imports done in your code.

#### ES Modules

Because Polymer 3 relies on ES Modules, it no longer loads HTML files through HTML imports, which would set Polymer objects into the global `Polymer` namespace. Therefore, methods and objects that were available under the `Polymer` namespace will not work by default anymore: e.g. there is no `Polymer.dom.*`, you are supposed to do this instead:

```
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
```

In order to keep compatibility, Nuxeo [exports some of the previous options](https://jira.nuxeo.com/browse/NXP-28411):
* `Polymer.dom()`  => `@polymer/polymer/lib/legacy/polymer.dom.js`
* `Polymer.Async.*` => `@polymer/polymer/lib/utils/async.js`
* `Polymer.Debouncer` => `@polymer/polymer/lib/utils/debounce.js`
* `Polymer.importHref` => `@nuxeo/nuxeo-ui-elements/import-href.js`

You can keep using them, although we recommend limiting the imports to the subset that is required in order to get a better overall performance and to keep your code cleaner.

### Workflow Task Endpoint is Paginable

The _ActionContext_ variable *does not* contain anymore an array called _tasks_ with all the tasks available for the current user/group.

This means that all contributions relying on the existence of _tasks_ array on _ActionContext_ won't work properly and need to be adapted to use the new approach.

The new options available for the task endpoint to manage that pagination are the following:

* `currentPageIndex`: Index of the current page query (long)
* `offset`: Offset of the page to retrieve. If set, the 'currentPageIndex' parameter is ignored (long)
* `pageSize`: Size of the page to retrieve. Ignored if offset set query (long)
* `maxResults`: Maximum results to retrieve (long)
* `sortBy`: Property to sort by, for example 'dc:title' (string)
* `sortOrder`: Sort order, accepts 'asc' or 'desc', default is 'desc' (string)

The `workflowModelName` parameter is deprecated as it requires to retrieve all tasks in order to check their properties, hindering performance.

From now on, retrieving tasks needs to be made using a paginable approach. Some methods in the `DocumentRoutingService` have been deprecated to reflect that change and should be updated.

### Style Update

Removed variables can be safely deleted from your themes or elements. Deprecated variables should be replaced by the new ones on themes and custom elements making use of them:

* Removed `--nuxeo-results-view-min-height` (added in [NXP-27652](https://jira.nuxeo.com/browse/NXP-27652)).
* Deprecated `--nuxeo-document-content-min-height` in favor of `--nuxeo-document-content-height` (affects `nuxeo-document-content`).
* Deprecated `--nuxeo-document-trash-content-min-height` in favor of `--nuxeo-document-trash-content-height` (affects `nuxeo-document-trash-content`).

{{! /multiexcerpt}}
