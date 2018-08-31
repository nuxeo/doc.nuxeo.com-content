---
title: Content View - Query and Form Tab
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-view
toc: true
confluence:
    ajs-parent-page-id: '12912765'
    ajs-parent-page-title: Content Views
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Content+View+-+Query+and+Form+Tab
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Content+View+-+Query+and+Form+Tab'
    page_id: '12913133'
    shortlink: 7QnF
    shortlink_source: 'https://doc.nuxeo.com/x/7QnF'
    source_link: /display/Studio/Content+View+-+Query+and+Form+Tab
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-09-07 09:19'
        message: ''
        version: '38'
    -
        author: Manon Lumeau
        date: '2015-08-28 14:40'
        message: ''
        version: '37'
    -
        author: Solen Guitter
        date: '2014-11-03 18:55'
        message: ''
        version: '36'
    -
        author: Solen Guitter
        date: '2014-11-03 16:11'
        message: ''
        version: '35'
    -
        author: Solen Guitter
        date: '2014-11-03 16:09'
        message: ''
        version: '34'
    -
        author: Solen Guitter
        date: '2014-10-21 16:55'
        message: ''
        version: '33'
    -
        author: Solen Guitter
        date: '2014-10-21 16:00'
        message: ''
        version: '32'
    -
        author: Solen Guitter
        date: '2014-10-21 15:56'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-10-21 15:56'
        message: 'Add 6.0 flags, update screenshots, format'
        version: '30'
    -
        author: Solen Guitter
        date: '2014-09-30 11:26'
        message: ''
        version: '29'
    -
        author: Solen Guitter
        date: '2014-08-22 10:17'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2014-08-22 10:16'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-08-22 10:16'
        message: ''
        version: '26'
    -
        author: Manon Lumeau
        date: '2014-08-21 12:10'
        message: ''
        version: '25'
    -
        author: Manon Lumeau
        date: '2014-08-14 15:09'
        message: ''
        version: '24'
    -
        author: Manon Lumeau
        date: '2014-08-14 15:09'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-06-26 12:21'
        message: ''
        version: '22'
    -
        author: Solen Guitter
        date: '2013-08-29 17:23'
        message: ''
        version: '21'
    -
        author: Benjamin Jalon
        date: '2013-02-11 17:04'
        message: ''
        version: '20'
    -
        author: Benjamin Jalon
        date: '2013-02-11 16:28'
        message: ''
        version: '19'
    -
        author: Benjamin Jalon
        date: '2013-02-11 16:14'
        message: ''
        version: '18'
    -
        author: Benjamin Jalon
        date: '2013-02-11 14:56'
        message: ''
        version: '17'
    -
        author: Benjamin Jalon
        date: '2013-02-11 14:41'
        message: ''
        version: '16'
    -
        author: Benjamin Jalon
        date: '2013-02-11 14:41'
        message: ''
        version: '15'
    -
        author: Benjamin Jalon
        date: '2013-02-11 13:14'
        message: ''
        version: '14'
    -
        author: Benjamin Jalon
        date: '2013-02-11 13:14'
        message: ''
        version: '13'
    -
        author: Benjamin Jalon
        date: '2013-01-15 20:02'
        message: ''
        version: '12'
    -
        author: Benjamin Jalon
        date: '2013-01-15 20:01'
        message: ''
        version: '11'
    -
        author: Benjamin Jalon
        date: '2013-01-15 20:01'
        message: ''
        version: '10'
    -
        author: Benjamin Jalon
        date: '2013-01-15 19:03'
        message: ''
        version: '9'
    -
        author: Benjamin Jalon
        date: '2013-01-15 18:50'
        message: ''
        version: '8'
    -
        author: Benjamin Jalon
        date: '2013-01-15 18:32'
        message: ''
        version: '7'
    -
        author: Benjamin Jalon
        date: '2013-01-15 18:32'
        message: ''
        version: '6'
    -
        author: Benjamin Jalon
        date: '2013-01-15 18:26'
        message: ''
        version: '5'
    -
        author: Benjamin Jalon
        date: '2013-01-15 18:26'
        message: ''
        version: '4'
    -
        author: Benjamin Jalon
        date: '2013-01-15 18:24'
        message: ''
        version: '3'
    -
        author: Benjamin Jalon
        date: '2013-01-15 18:24'
        message: ''
        version: '2'
    -
        author: Benjamin Jalon
        date: '2013-01-15 17:53'
        message: ''
        version: '1'

---
{{! excerpt}}

This page explains the Query & Form tab in the content view definition.

{{! /excerpt}}

This tab lets you define:

- [The usability of the content view in local configuration](#usability-in-local-configuration)
- [the filtering UI proposed to the end user](#ui-filtering-definition)
- Some advanced configuration about filtering

## Pre-Requisites

{{! multiexcerpt name='jsf-ui-target-package-requirement-in-content-view'}}

Select the Nuxeo JSF UI target package in your [Application Definition]({{page page='application-definition'}}) for the Content View feature to be available.

{{! /multiexcerpt}}

## Default Filtering Definition

This section explains the following elements of the Query & Form tab:

![]({{file name='Studio-content-view-query-definition.png' page='content-views'}} ?w=600,border=true)

Here are the fields you can play with:

*   **Use Elasticsearch index**: Lets you use the Elasticsearch aggregates
*   **Query filter**: Lets you [manage where clauses](#query-filter-field) (filtering expression) applied by default
*   **Query parameters:** Lets you [set dynamic expressions](#query-parameters-field) in your default where clauses
*   **Default sort:** Lets you set the default sort applied to the result list

### Use Elasticsearch index

Starting from Nuxeo Platform 6.0, Elasticsearch is embedded in the platform. Check this box to be able to use the Elasticsearch aggregates widgets in the form definition.

A new advanced option is available: Generate Usage Statistics. It enables to include the current content view into account in the search statistics available from the **Admin**&nbsp;> **Activity**&nbsp;> **Search Analytics** tab. This option is available starting from Nuxeo Platform LTS 2015.

### Query Filter Field

Defining the query lets you define the list of documents you want to show in your content view if no information is set by the Nuxeo user.

The Nuxeo query system is based on our NXQL technology, which is very similar to SQL query expression. For those who know SQL, using NXQL will be very easy. For those who are not familiar with SQL, you can read [the NXQL dedicated documentation]({{page space='nxdoc' page='nxql'}}) and look at [ some NXQL examples ]({{page space='nxdoc' page='nxql#nxql-examples'}}).

You don't have to specify the `SELECT * FROM Document` part of the request that is automatically managed by the content view. If the **Query filter** field is empty, then there is no restriction. So it displays **all** documents, including:

*   Deleted documents,
*   Versioned documents,
*   Technical Documents normally hidden from end users,
*   etc.

{{! multiexcerpt name='studio-default-query-filter'}}

By default, Nuxeo Studio fills this field to filter out:

*   documents marked as hidden in navigation (`ecm:mixinType != 'HiddenInNavigation'`)
*   documents that are not archived versions (`ecm:isCheckedInVersion = 0`)
*   and documents that are deleted (`ecm:currentLifeCycleState != 'deleted'`)

{{! /multiexcerpt}}

You can change or remove these filter clauses if you wish.

By default, this field is limited to static filtering (specific document type, specific date, specific lifecycle state, etc.). If you want the content view filter to be based on the context of execution, you can set some "where" clauses to apply by default to the result list. See the next section.

### Query Parameters Field

The **Query Filter** field enables you to express the "where" clauses of your content view filter. The **query parameters** field lets you define a "where" clause based on the execution context. For instance:

*   The current date (for instance documents issued before today)
*   The user that displays the content view (documents created by the current user or to which the current user has contributed)
*   The currently displayed document (its document children, descendants or documents linked to the current document)

To express a dynamic expression:

1.  Write your where clause in the **Query Filter** field but with a question mark as the right value (for instance `ecm:parentId = ?`),
2.  Define the dynamic value in the **query parameters** field.

Here are some examples.

<div class="table-scroll">
<table class="hover"><tbody>
<tr>
<th colspan="1"> </th>
<th colspan="1">Query filter</th>
<th colspan="1">Query parameter</th>
</tr>
<tr>
<td colspan="1">Keeping the documents created by the current user</td>
<td colspan="1">`dc:creator = ?`</td>
<td colspan="1">`#{currentUser.name}`</td>
</tr>
<tr>
<td colspan="1">Keeping the children documents of the currently displayed document</td>
<td colspan="1">`ecm:parentId = ?`</td>
<td colspan="1">`#{currentDocument.id}`</td>
</tr>
<tr>
<td colspan="1">

Keeping the descendant of the currently displayed document

Note that this request is less efficient than the previous one.

</td>
<td colspan="1">`ecm:path STARTSWITH ?`</td>
<td colspan="1">`#{currentDocument.path}`</td>
</tr>
<tr>
<td colspan="1">Keeping documents issued before today</td>
<td colspan="1">`dc:issued < ?`</td>
<td colspan="1">`#{currentDate.toString()}`</td>
</tr>
</tbody>
</table>
</div>

When your query filter has several `?` parameters, you must add the query parameters in the same order as the criteria in the query filter.

![]({{file name='STUDIO-query-filter.png' space='nxdoc' page='how-to-define-a-new-content-view'}} ?w=600,border=true)

More information on NXQL and examples are available on the [dedicated page in the developer documentation]({{page space='nxdoc' page='nxql#nxql-examples'}}).

{{! multiexcerpt name='query-parameter-EL-syntax-note'}}

Note to people familiar with Nuxeo products customization: The syntax that is to be used in those parameters is the same EL syntax as the one used in XHTML files. You have access to the SEAM context. Other sample expressions:

*   `#{currentDate.toString()}`: that can be used with date properties, like `dc:created > DATE ?`
*   `#{currentDocument.dc.rights}`
*   `#{empty currentDocument.getProperty("dublincore","subjects") ? '%' : currentDocument.getProperty( ("dublincore","subjects" )}` for multivalued property

{{! /multiexcerpt}}

### Default Sort Field

The **Default Sort** field lets you express the default sorting applied to the results list. The end user can choose the sorting in the UI based on column actions. If you want more information about that look [the Result tab documentation]({{page page='content-view-results'}}).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content View - Query and Form Tab/Default Sorting Configuration
    name: Default Sorting configuration.png
    studio_modeler#screenshot#up_to_date
--}}
![Default Sorting Configuration](nx_asset://b1bd3693-691e-45d7-a228-3853df41e2ff ?w=500,border=true)

You can sort through:

*   A field of the listed documents,
*   A property of the listed documents (lifecycle state, lock date, lock owner, etc.).

**To sort through a field:**

1.  Click on the **Add** button.
2.  In the first drop down list, select the [schema]({{page page='schemas'}}) in which the field is defined.
3.  In the second drop down list, select the field.
4.  Check the box **Sort ascending** box if you want ascending sorting (alphabetical, chronological, etc.).

**To sort through a property:**

1.  Click on the **Add** button.
2.  In the first drop down list, select system.
3.  In the second drop down list, select the property.
4.  Check the box **Sort ascending** box if you want ascending sorting (alphabetical, chronological, etc.).

If you want to sort through multiple criteria, just repeat the steps above for each criterion.

## Flags

This section explains the flags section and what the different flags enable.

*   **Search content view**: Since Nuxeo Platform 6.0\. Enables to have your content view available in Search tab drop down list. Selecting this flag makes the Search layout required so as to have a search form displayed in the Search tab. It also adds a tab Enablement on the content view in Studio to define when the content view should be available in the Search tab.
*   **Document content**: Enables to use your content view on a custom tab, or to have it available in the [local configuration of a workspace]({{page space='userdoc' page='local-configuration'}}).
*   **DAM**: Enables to display the content view in the DAM tab.
    Since Nuxeo Platform 6.0, the flag is available when you select the target package Nuxeo DAM Compat.
*   **Faceted search**: Since Nuxeo Platform 5.7\. Enables to display the content view in the Faceted search tab and have it available in the [local search configuration of a workspace]({{page space='userdoc' page='local-configuration'}}).
    Since Nuxeo Platform 6.0, this flag is available when you select the target package Faceted search.
*   **Advanced search**: Enables to have the content view available in the [local search configuration of a workspace]({{page space='userdoc' page='local-configuration'}}).
    Since Nuxeo Platform 6.0, this flag is not available anymore. You should use the Search content view flag instead.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content View - Query and Form Tab/Flag Zone
    name: Flag zone.png
    studio_modeler#screenshot#up_to_date
--}}
![Flag Zone](nx_asset://b7b6982c-3c98-4e6f-a6b7-7916b98f1386 ?w=350,border=true)

{{#> callout type='info' }}
Check out the page [Specific Upgrade Instructions]({{page page='specific-upgrade-instructions'}}) migrate your content views to Nuxeo Platform 6.0.
{{/callout}}

## Search Layout

This section is focused on the search layout definition:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Content View - Query and Form Tab/Search Layout Fragment
    name: Search Layout Fragment.png
    studio_modeler#screenshot#up_to_date
--}}
![Search Layout Fragment](nx_asset://1d078664-1126-4d0f-b1b9-f5f70132b6cf ?w=600,border=true)

This is where you define the form, by drag and dropping widgets from the right panel into the form.
