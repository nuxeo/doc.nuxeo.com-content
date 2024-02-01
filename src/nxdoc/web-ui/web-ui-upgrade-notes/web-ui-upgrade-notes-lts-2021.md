---
title: Upgrading Nuxeo Web UI from LTS 2019 to LTS 2021
description: Upgrade notes from Nuxeo Web UI LTS 2019 (10.10) to LTS 2021
review:
    comment: ''
    date: '2021-12-23'
    status: ok
toc: true
labels:
tree_item_index: 999
hidden: true
---

{{! multiexcerpt name='upgrade-notes'}}

{{! multiexcerpt name='matching-notes'}}
{{#> callout type='info' heading='Release Notes'}}
This page mentions how to do a technical upgrade. Have a look at the [release notes]({{page page='web-ui-release-notes'}}) to see what's new.
{{/callout}}
{{! /multiexcerpt}}

## Upgrading Web UI from LTS 2019 to LTS 2021

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
- `Polymer.dom()`  => `@polymer/polymer/lib/legacy/polymer.dom.js`
- `Polymer.Async.*` => `@polymer/polymer/lib/utils/async.js`
- `Polymer.Debouncer` => `@polymer/polymer/lib/utils/debounce.js`
- `Polymer.importHref` => `@nuxeo/nuxeo-ui-elements/import-href.js`

You can keep using them, although we recommend limiting the imports to the subset that is required in order to get a better overall performance and to keep your code cleaner.

Further examples of exposed options in global namespace include:
- Iron Behaviors (see [NXP-28375](https://jira.nuxeo.com/browse/NXP-28375))
- Moment library (see [NXP-28401](https://jira.nuxeo.com/browse/NXP-28401))
- Routing override (see [WEBUI-15](https://jira.nuxeo.com/browse/WEBUI-15))
- Polymer Templatizer (see [WEBUI-69](https://jira.nuxeo.com/browse/WEBUI-69))

### Workflow Task Endpoint is Paginable

The _ActionContext_ variable *does not* contain anymore an array called _tasks_ with all the tasks available for the current user/group.

This means that all contributions relying on the existence of _tasks_ array on _ActionContext_ won't work properly and need to be adapted to use the new approach.

The new options available for the task endpoint to manage that pagination are the following:

- `currentPageIndex`: Index of the current page query (long)
- `offset`: Offset of the page to retrieve. If set, the 'currentPageIndex' parameter is ignored (long)
- `pageSize`: Size of the page to retrieve. Ignored if offset set query (long)
- `maxResults`: Maximum results to retrieve (long)
- `sortBy`: Property to sort by, for example 'dc:title' (string)
- `sortOrder`: Sort order, accepts 'asc' or 'desc', default is 'desc' (string)

The `workflowModelName` parameter is deprecated as it requires to retrieve all tasks in order to check their properties, hindering performance.

From now on, retrieving tasks needs to be made using a paginable approach. Some methods in the `DocumentRoutingService` have been deprecated to reflect that change and should be updated.

### Nuxeo Dropzone API Change

As of [NXP-28263](https://jira.nuxeo.com/browse/NXP-28263), `nuxeo-dropzone` exposes a new API that allows the element to be bound to a document field through the *value property*, which is more consistent with the API exposed by the other widgets. The previous API is deprecated but still supported (see [NXP-29391](https://jira.nuxeo.com/browse/NXP-29391)).

### Routing Behavior API Change

In order to support navigation by document UID ([WEBUI-14](https://jira.nuxeo.com/browse/WEBUI-14)) and cross repository navigation ([ELEMENTS-1211](https://jira.nuxeo.com/browse/ELEMENTS-1211)), the API of the Web UI Routing Behavior was extended. Previously, methods like `urlFor()` and `navigateTo()` would make use of two arguments:
```
// generates the URL to browse to the doc document
urlFor('browse', doc.path)

// navigates the UI to the browse view of the doc document
navigateTo('browse', doc.path)
```
Currently, the recommended way to use these methods is by passing the document object as the only argument:
```
// generates the URL to browse to the doc document
urlFor(doc)

// navigates the UI to the browse view of the doc document
navigateTo(doc)
```
In this format, a router resolver defined at the application level is used to compute the URLs. Although still supported, the previous format should only be used if there's the explicit need to specify the route.

For more information, please check the [Web UI Routing]({{page page='web-ui-routing'}}) page. 

### Use of Atomic Permissions

Several elements of Nuxeo Web UI and Nuxeo Elements were updated to make use of `atomic permissions` instead of composite permissions. This was once one of the major causes to fork actions elements, which should now be reverted (see [WEBUI-5](https://jira.nuxeo.com/browse/WEBUI-5)).

### Missing Labels on Actions Menu

Starting from 10.3, Nuxeo introduced an `actions menu` to wrap document actions (see [NXP-25146](https://jira.nuxeo.com/browse/NXP-25146)). Projects that forked action elements or have custom actions based on code from 9.10 won’t display a label unless they are upgraded as described in the documentation. This is mostly a cosmetic change, as actions will still work as they previously did, without the label.

### Reference to Invalid Packages in the Project

The reference to packages that no longer exist, such as `nuxeo-dam` or `nuxeo-spreadsheet`, or the presence of JSF specific contributions, might cause conflicts and prevent a project from working properly.

#### Nuxeo Dam Addon Integrated in Nuxeo Server

{{! multiexcerpt name='studio-lts2021-addons-upgrade-dam'}}
Nuxeo DAM no longer exists as an addon and its contributions are now default on Web UI. If you are using it in Nuxeo Studio, you will see the Nuxeo DAM in the removed addons list when upgrading your project through the application definition page.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI 11.x upgrade notes/Package removal in Studio's Application Definition
    name: app-def-package-removal.png
    1.1.3#screenshot#up_to_date
--}}
![Package removal in Studio's Application Definition](/nx_assets/b47d5c8b-c1ba-4d2a-ab0b-8b8378d73c8d.png ?w=650,border=true)
{{! /multiexcerpt}}

#### Spreadsheet Addon Integrated in Nuxeo Server

{{! multiexcerpt name='studio-lts2021-addons-upgrade-spreadsheet'}}
Spreadsheet addon is now loaded by default but the button contribution is disabled. Users can rely on Studio Designer to re-enable the `spreadSheet` *button* in the `RESULTS_ACTIONS` slot (see [WEBUI-90](https://jira.nuxeo.com/browse/WEBUI-90)).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Web UI 11.x upgrade notes/Spreadsheet package enable button in Designer
    name: spreadsheet-package-enable-button-designer.png
    1.1.3#screenshot#up_to_date
--}}
![Spreadsheet package enable button in Designer](/nx_assets/b8fd28dd-0272-43b1-a083-dfde295c312b.png ?w=650,border=true)
{{! /multiexcerpt}}

### Rich Text Editor Uses QuillJS by Default

Since [ELEMENTS-1124](https://jira.nuxeo.com/browse/ELEMENTS-1124) and [NXP-28691](https://jira.nuxeo.com/browse/NXP-28691), [Quill](https://quilljs.com) is used as the solution for the rich text editor in Web UI instead of Alloy. Quill is more powerful and provides an overall better experience.

In LTS 2019, this change is already [available as an option](https://jira.nuxeo.com/browse/WEBUI-291). Feel free to activate it to test the editor and to allow your users to get accustomed to it before migrating.

### Upgrade Webdriver IO

The new version of Web UI introduces an upgrade on Webdriver IO, to its latest version, v7. With this upgrade there are a few things to consider when migrating:

#### Delete `babel-preset-env`

Projects relying on `babel-preset-env`, usually via a local `.babelrc` file, can now be deleted.

#### Cucumber v7 Update

With the latest Cucumber version, we need to make sure our imports are also updated from:
```
import { Given, When, Then } from 'cucumber';
```
to:
```
import { Given, When, Then } from '@cucumber/cucumber';
```

#### The New `findElements`

Webdriver IO 7 is using `findElements` as the new `elements` selector. To search for multiple elements on the page, starting from the root we now need to change:

```
const res = elements(...).value;
```

to:
```
const res = elements(...);
```

#### Node.js Supported Version Range

Our Functional Test Framework is now compatible with Node.js versions higher than `10.23` and lower than `15.0`.

### Breaking Changes

#### Cropper.js No Longer Shipped by Default on Web UI

Cropper is no longer part of our dependencies, as it was the case on previous versions of Web UI.

In case your project has a dependency on it, please consider the following steps:
1. Download the package from [cropper.js website](https://fengyuanchen.github.io/cropperjs/) and find two files called `cropper.min.js` and `cropper.min.css`;
2. In your Studio project, switch to Designer and click on the "Resources" tab;
3. Create a folder called `cropper` and upload `cropper.min.js` and `cropper.min.css` to it;
4. In your main bundle, add the following code:
    ```
    <link rel="stylesheet" href="cropper/cropper.min.css">
    <script src="cropper/cropper.min.js"></script>
    ```
5. Deploy the project to your server;
6. Check on your browser dev tools for the presence of Cropper.js in the global namespace:
    ```
    window.Cropper;
    ```

The console should return Cropper.js main function, thus confirming the presence of the package in the project.

#### BROWSER_ACTIONS Slot Removal

The `BROWSER_ACTIONS` nuxeo slot was removed under [NXP-26184](https://jira.nuxeo.com/browse/NXP-26184). It was already deprecated since Web UI 0.9 and had no known usage. It was replaced by the `RESULTS_SELECTION_ACTIONS` slot.

#### Forked nuxeo-document-content Might Lose Selection Actions

Since [NXP-25345](https://jira.nuxeo.com/browse/NXP-25345), Nuxeo Web UI introduced the ability to override selection actions. Elements that were forked from an older version of `nuxeo-document-content` and that override the `selectionActions` native slot with new content will be missing the contributions to the `RESULTS_SELECTION_ACTIONS` nuxeo slot. This can be rectified by adding the desired actions to the new slot, and by deleting the following piece of code:

```
<div slot=“selectionActions”>
  <nuxeo-slot slot=“BROWSE_ACTIONS” model=“[[browseActionContext]]“></nuxeo-slot>
</div>
```

#### `nuxeo-picture-document-page` Being Displayed on Doctypes Using the `Picture` Facet

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

### Deprecations

#### `nuxeo-document-history` Element

The use of `nuxeo-document-history` was deprecated in favor of `nuxeo-audit-search`.

#### Labels

Since [WEBUI-116](https://jira.nuxeo.com/browse/WEBUI-116), the `document history` and `audit page` use the same component and the new prefix `audit`. The following are some examples of the deprecated labels and their replacement:

| Deprecated labels               | New Labels            |
| ------------------------------- | --------------------- |
| `documentHistory.category`      | `audit.category`      |
| `documentHistory.comment`       | `audit.comment`       |
| `documentHistory.date`          | `audit.date`          |
| `documentHistory.filter.after`  | `audit.filter.after`  |
| `documentHistory.filter.before` | `audit.filter.before` |

#### CSS Variables

Deprecated variables should be replaced by the new ones on themes and custom elements making use of them:

- `--nuxeo-document-content-min-height`
  - in favor of `--nuxeo-document-content-height` (affects `nuxeo-document-content`).
- `--nuxeo-document-trash-content-min-height`
  - in favor of `--nuxeo-document-trash-content-height` (affects `nuxeo-document-trash-content`).
- `--nuxeo-document-creation-form-icon-width` and `--nuxeo-document-creation-form-icon-height`
  - in favor of the mixin `--nuxeo-document-create-selection-icon` (affects `nuxeo-document-create`).
- `--nuxeo-document-creation-form-icon-width` and `--nuxeo-document-creation-form-icon-height`
  - in favor of the `--nuxeo-document-create-selection-icon` (see [NXP-27037](https://jira.nuxeo.com/browse/NXP-27037)).

Additionally, the variable `--nuxeo-results-view-min-height` (added in 11.1 [NXP-27652](https://jira.nuxeo.com/browse/NXP-27652)) was removed and can now be safely deleted from your themes or elements.

#### Testing Helpers

With the extraction of the test helpers to a shared package (see [ELEMENTS-1153](https://jira.nuxeo.com/browse/ELEMENTS-1153)), the `login test helper` was deprecated in favor of the `MockClient`.

#### Slot Property in `nuxeo-slots`

Since [ELEMENTS-1012](https://jira.nuxeo.com/browse/ELEMENTS-1012), `nuxeo-slot` name is now defined by the `name` property, instead of `slot`.

### Drop Support for Edge Legacy

Starting from LTS 2021, Nuxeo Web UI no longer supports *Microsoft Edge Legacy*. See [here](https://doc.nuxeo.com/nxdoc/web-ui-overview/) for the complete list of supported browsers.

{{! /multiexcerpt}}
