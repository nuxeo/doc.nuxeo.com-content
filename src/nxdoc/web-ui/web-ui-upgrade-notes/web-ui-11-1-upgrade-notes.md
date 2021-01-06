---
title: Upgrading Nuxeo Web UI from LTS 2019 to 11.x
description: Upgrade notes from Nuxeo Web UI LTS 2019 (10.10) to 11.x
review:
    comment: ''
    date: '2020-12-28'
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

## Upgrading from Web UI LTS 2019 to Web UI 11.x

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

 Further examples of exposed options in global namespace include:
- Iron Behaviors (see [NXP-28375](https://jira.nuxeo.com/browse/NXP-28375))
- Moment library (see [NXP-28401](https://jira.nuxeo.com/browse/NXP-28401))
- Routing override (see [WEBUI-15](https://jira.nuxeo.com/browse/WEBUI-15))
- Polymer templatizer (see [WEBUI-69](https://jira.nuxeo.com/browse/WEBUI-69))

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
* Deprecated `--nuxeo-document-creation-form-icon-width` and `--nuxeo-document-creation-form-icon-height` in favor of the mixin `--nuxeo-document-create-selection-icon` (affects `nuxeo-document-create`).

### Nuxeo dropzone API change

As of [NXP-28263](https://jira.nuxeo.com/browse/NXP-28263), `nuxeo-dropzone` exposes a new API that allows the element to be bound to a document field through the *value property*, which is more consistent with the API exposed by the other widgets. The previous API is deprecated but still supported (see [NXP-29391](https://jira.nuxeo.com/browse/NXP-29391)).

### Use of atomic permissions

Several elements of Nuxeo Web UI and Nuxeo Elements were updated to make use of `atomic permissions` instead of composite permissions. This was once one of the major causes to fork actions elements, which should now be reverted (see [WEBUI-5](https://jira.nuxeo.com/browse/WEBUI-5)).

### Missing labels on actions menu

Starting from 10.3, Nuxeo introduced an `actions menu` to wrap document actions (see [NXP-25146](https://jira.nuxeo.com/browse/NXP-25146)). Projects that forked action elements or have custom actions based on code from 9.10 won’t display a label unless they are upgraded as described in the documentation. This is mostly a cosmetic change, as actions will still work as they previously did, without the label.

### Label deprecation

Since [WEBUI-116](https://jira.nuxeo.com/browse/WEBUI-116), the `document history` and `audit page` use the same component and the new prefix `audit`. The following are some examples of the deprecated labels and their replacement:

| Deprecated labels             | New Labels          |
|-------------------------------|---------------------|
| documentHistory.category      | audit.category      |
| documentHistory.comment       | audit.comment       |
| documentHistory.date          | audit.date          |
| documentHistory.filter.after  | audit.filter.after  |
| documentHistory.filter.before | audit.filter.before |

### Reference to invalid packages in the project

The reference to packages that no longer exist, such as `nuxeo-dam` or `nuxeo-spreadsheet`, or the presence of JSF specific contributions, might cause conflicts and prevent a project from working properly.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI 11.x upgrade notes/Package removal in Studio's Application Definition
    name: app-def-package-removal.png
    1.1.3#screenshot#up_to_date
--}}
![Package removal in Studio's Application Definition](nx_asset://b47d5c8b-c1ba-4d2a-ab0b-8b8378d73c8d ?w=650,border=true)

#### Nuxeo DAM addon removal

Nuxeo DAM no longer exists as an addon and its contributions are now default on Web UI. If you're using Nuxeo Studio, you will see the Nuxeo DAM in the removed addons list when upgrading your project through the application definition page.

#### Spreadsheet addon removal

Spreadsheet addon is now loaded by default but the button contribution is disabled. Users can rely on Studio Designer to re-enable the `spreadSheet` *button* in the `RESULTS_ACTIONS` slot (see [WEBUI-90](https://jira.nuxeo.com/browse/WEBUI-90)).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI 11.x upgrade notes/Spreadsheet package enable button in Designer
    name: spreadsheet-package-enable-button-designer.png
    1.1.3#screenshot#up_to_date
--}}
![Spreadsheet package enable button in Designer](nx_asset://b8fd28dd-0272-43b1-a083-dfde295c312b ?w=650,border=true)

### BROWSER_ACTIONS slot removal

The `BROWSER_ACTIONS` nuxeo slot was removed under [NXP-26184](https://jira.nuxeo.com/browse/NXP-26184). It was already deprecated since Web UI 0.9 and had no known usage. It was replaced by the `RESULTS_SELECTION_ACTIONS` slot.

### Forked nuxeo-document-content might lose selection actions

After [NXP-25345](https://jira.nuxeo.com/browse/NXP-25345), Nuxeo Web UI introduced the ability to override selection actions. Elements that were forked from an older version of `nuxeo-document-content` and that override the `selectionActions` native slot with new content will be missing the contributions to the `RESULTS_SELECTION_ACTIONS` nuxeo slot. This can be rectified by adding the desired actions to the new slot, and by deleting the following piece of code:

```
<div slot=“selectionActions”>
  <nuxeo-slot slot=“BROWSE_ACTIONS” model=“[[browseActionContext]]“></nuxeo-slot>
</div>
```

### Picture document page being displayed on doctypes using the Picture facet

Since [NXP-25740](https://jira.nuxeo.com/browse/NXP-25740), the `nuxeo-picture-document-page` is now displayed for documents with `Picture` **facet** instead of documents with `Picture` **type**. This means that on migrated projects, the `nuxeo-picture-document-page` might be displayed on documents where it was not expected. If this is not desirable, the contribution can simply be overridden to only display the page for documents with `Picture` **type**:

```
<nuxeo-slot-content name="pictureDocumentViewPage" slot="DOCUMENT_VIEWS_PAGES" order="5">
  <template>
    <nuxeo-filter document="[[document]]" type="Picture">
      <template>
        <nuxeo-picture-document-page name="view" document="[[document]]"></nuxeo-picture-document-page>
      </template>
    </nuxeo-filter>
  </template>
</nuxeo-slot-content>

```

### Deprecate usage of nuxeo-document-history

The use of `nuxeo-document-history` was deprecated in favor of `nuxeo-audit-search`.

### Drop support for Edge Legacy

Starting from 11.x, Nuxeo Web UI no longer supports *Microsoft Edge Legacy*. See [here](https://doc.nuxeo.com/nxdoc/web-ui-overview/) for the complete list of supported browsers.

{{! /multiexcerpt}}
