---
title: Nuxeo Quota
review:
    comment: ''
    date: '2016-12-07'
    status: ok
labels:
    - lts2016-ok
    - quota
    - fdavid
    - marketplace-package
    - quotas-component
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '16089349'
    ajs-parent-page-title: Nuxeo Add-Ons
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Nuxeo+Quota
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Nuxeo+Quota'
    page_id: '11534351'
    shortlink: DwCw
    shortlink_source: 'https://doc.nuxeo.com/x/DwCw'
    source_link: /display/NXDOC/Nuxeo+Quota
tree_item_index: 2500
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 12:03'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2016-05-12 07:55'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2016-05-12 07:54'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2016-05-11 15:21'
        message: Fix images size
        version: '24'
    -
        author: Anne Jubert
        date: '2016-05-11 15:09'
        message: ''
        version: '23'
    -
        author: Manon Lumeau
        date: '2016-04-29 16:17'
        message: ''
        version: '22'
    -
        author: Bertrand Chauvin
        date: '2015-09-24 12:43'
        message: ''
        version: '21'
    -
        author: Bertrand Chauvin
        date: '2015-09-24 12:40'
        message: ''
        version: '20'
    -
        author: Solen Guitter
        date: '2014-11-30 23:17'
        message: ''
        version: '19'
    -
        author: Solen Guitter
        date: '2013-09-11 19:09'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-06-20 14:28'
        message: ''
        version: '17'
    -
        author: Solen Guitter
        date: '2013-06-20 14:28'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2013-02-28 18:51'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2013-02-28 18:37'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2013-02-28 18:37'
        message: ''
        version: '13'
    -
        author: Mariana Cedica
        date: '2013-02-28 18:16'
        message: ''
        version: '12'
    -
        author: Mariana Cedica
        date: '2013-02-28 18:11'
        message: ''
        version: '11'
    -
        author: Mariana Cedica
        date: '2013-02-28 18:03'
        message: ''
        version: '10'
    -
        author: Mariana Cedica
        date: '2013-02-28 18:00'
        message: ''
        version: '9'
    -
        author: Mariana Cedica
        date: '2013-02-28 17:54'
        message: ''
        version: '8'
    -
        author: Mariana Cedica
        date: '2013-02-28 17:42'
        message: ''
        version: '7'
    -
        author: Mariana Cedica
        date: '2013-02-28 17:09'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-02-28 17:08'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2013-02-28 17:07'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-02-27 20:43'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2012-09-11 18:12'
        message: Migrated to Confluence 4.0
        version: '2'
    -
        author: Julien Carsique
        date: '2012-09-11 18:12'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Nuxeo Quota add-on](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-quota) enables users to define a maximum size for the domains and workspaces they manage and provide some statistics about space use in your application.

{{! /excerpt}}

## Installation

{{{multiexcerpt 'MP-installation-easy' page='NXDOC:Digital Asset Management (DAM)'}}}

After you installed Nuxeo Quota, a new tab **Quota / Statistics** is available in the Admin tab.

![]({{file name='quotas_admin_tab.png'}} ?w=650,border=true)

## Quota Overview

The Quota package allows to define a maximum size on spaces and to display the number of items (workspaces, folders, documents) in a folderish document on the navigation tree.

Administrators are responsible for managing quotas on a global scale. Non-administrator users can manage the size limits of domains and workspaces on which they have Manage everything permission. All users are displayed the size of the document they are on (workspaces, folder, file, note, etc.) and the maximum size allowed (quota) if one has been defined. On a folderish document, such as a workspace, the used space includes the size of all the documents displayed in the Content tab and their versions and the size of the trashed documents (i.e. in the Trash tab of the workspace). On a document of type File for example, the used space is the sum of the size of the current document version (possibly a modified version) and the size of the archived versions of the document.

{{#> callout type='tip' heading='Used space when the document has only one version'}}

When you edit a document and save it as a new version (i.e. increment the document's version), the newly archived version is displayed until the document is modified. When the document is modified, you are displayed an unarchived modified version of the document, whose version number is based on the last archived version suffixed with a + sign. As a consequence, when the document only has one archived version, typically when its first version is created, the used space is the size of the newly archived version. As soon as the document is modified, the used space of the document is the sum of the archived version and the modified unarchived version.

You can find more information on [how versioning works]({{page space='userdoc' page='version'}}).

{{/callout}}

Users can also see [statistics](#consulting-statistics) on how space is used.

When a user tries to create or edit a document such that the maximum size of the workspace would be exceeded, a message is displayed indicating that they need to free some space.

### Statistics

Statistics are available to show users:

*   The list of documents and their size.
*   The total size of live documents (_i.e._, documents visible in the Content tab of workspaces, sections, folders, etc).
*   The total size of trashed documents.
*   The total size of the archived versions for a document.

Statistics help users to understand where space is used. They provide answers to the following questions: does the trash need to be emptied, are there a lot of big archived versions, what are biggest documents?

## Global Management of Quotas

Administrators can perform several actions regarding quotas from the Admin tab:

*   Compute initial statistics to calculate the amount of space used by each item in the application.
*   Run a job to count the existing documents in the application (prior to this addon being installed). This will display the number of children of each item of the navigation tree.
*   Enable or disable the maximum size limitation on personal workspaces.

### Computing Initial Statistics

When the Quota package is installed on a Nuxeo instance that already has some content, administrators need to manually initiate a document scan to know the number and size of all documents. Until they do, the system will ignore existing documents, taking only documents created or edited after the package was installed into account in the navigation tree and displaying inaccurate values.

**To compute initial statistics:**

1.  In the Admin tab, click on the **Quota / Statistics** tab.
2.  Click on the **Compute initial statistics** tab.
    ![]({{file name='quota-admin-center-initial-stats.png'}} ?w=600,border=true)
3.  Click on the **Run** button of the **Quota Updater** row.
    The size of all elements in the application is calculated and statistics are updated accordingly.
4.  Click on the **Run** button of the **Document Count** row.
    The values in the navigation tree are updated.

{{#> callout type='tip' }}

This initial computation won't prevent users from defining a maximum size allowed (quota) on workspaces, but values may be wrong until initial statistics are actually computed.

{{/callout}}

### Managing Personal Workspace Quotas

By default, there is no quota set on personal workspaces. Administrators can enable it and define globally the maximum size allowed on every personal workspace.

**To enable and define the maximum size of personal workspaces:**

1.  In the Admin tab, click on the **Quota / Statistics** tab.
2.  Click on the **User workspaces** tab.
    ![]({{file name='quota-admin-center-user-workspace.png'}} ?w=600,border=true)
3.  If the size limit hasn't been enabled on personal workspaces yet, click the button radio **Yes** (default value is **No**).
4.  Move the slider to define the maximum size. This value will apply to every personal workspace.
    The value is displayed on top of the slider.
5.  Click on the **Save** button.
    A maximum size is now defined on personal workspaces.

## Working With Quotas

### Consulting Statistics

Users can see the [statistics](#statistics) of a workspace or a domain as soon as they can access it.

**To see the statistics of a workspace:**

1.  On the workspace, click on the **Quota** tab.
    The statistics are displayed in the **Statistics** tab.
    ![]({{file name='quota-statistics.png'}} ?w=600,border=true)
    The tab displays:

    *   the repartition of the used space between live document, trashed documents and archived versions.
    *   the list of the content of the workspace, sorted by size.

        {{#> callout type='info' }}

        Only documents larger than 1 KByte are displayed.

        {{/callout}}
2.  If needed, filter the list of documents:

    1.  Click on the **Filter** link displayed on top of the table.
        The filter form is displayed. By default the whole size range is selected.
        ![]({{file name='quota-filter.png'}} ?w=600,border=true)
    2.  Type keywords in the Title field and / or move the slider to define the size range you want to filter on.
    3.  Click on the **Filter** button.
        The list of documents displayed below displays only the documents matching your criteria.

### Defining the Size Limit on a Workspace

Only users with Manage everything permission can define the maximum size of a space. By default, the size limit can be defined on domains and workspaces only. It is possible to [enable it on other document types using Nuxeo Studio]({{page page='how-to-enable-quotas-on-document-types'}}).

**To set the maximum allowed size:**

1.  Click on the **Quota** tab of the workspace (or domain).
    The **Statistics** sub-tab is displayed.
2.  Click on the **Activate** sub-tab.
    ![]({{file name='quota-max-size-definition.png'}} ?w=600,border=true)
3.  Move the slider to set the maximum size in the authorized range:

    *   the selected size is displayed on top of the slider;
    *   the maximum possible size is the limit size of the parent;

        {{#> callout type='tip' }}

        If the parent has no size limit, the maximum size displayed on the slider is the maximum size of the first parent having a quota defined.

        {{/callout}}
    *   the smallest possible maximum size is 99.61 KByte by default, on all spaces.
4.  Click on the **Save** button.

    {{#> callout type='info' heading='A message indicates that you need to set a smaller size?'}}

    This means other children of the parent imposing the maximum size to be set already have taken some of the available max size on their quotas. You need to choose a smaller value.

    {{/callout}}

    When the chosen quota is saved, the value is set and the maximum allowed size is displayed below the workspace title.

**Note:**

Here is how the maximum size is calculated. When you select a maximum size on a workspace and click on Save, a verification is done to check that the size you selected won't make the parent's quota be exceeded. Here is how it is calculated:

1.  The system checks the maximum size set on the parent of your workspace.

    *   If no maximum size has been set on the parent, the system goes up the tree until it finds a parent with a defined maximum size (a.k.a. "The parent").
2.  The system computes the sum of the maximum sizes set on the children of the parent.

    *   If a child doesn't have a maximum size set, the system checks its children and makes the sum of their maximum sizes to calculate the parent's.
        This is repeated for all workspaces without maximum size, until the system can calculate a maximum size for each child of "The parent".
3.  The system checks that the size you want to set on your workspace is not bigger than the difference between the parent's limit size and the sum of its children's.


## Configuration

### Configure the Nuxeo Quota Maximum Size

The Nuxeo Quota maximum size used to be hardcoded to 999GB. It is now configurable with an extension, for example:
```
<require>org.nuxeo.ecm.quota.maxsize.config</require>
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">
    <property name="nuxeo.quota.maxsize">2 TB</property>
  </extension>
```
{{#> callout type='info' }}
The size is expressed in bytes but you can use a suffix like KB, MB, GB or TB.
{{/callout}}


* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel }}

*   [How to Enable Quotas on Document Types]({{page page='how-to-enable-quotas-on-document-types'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
