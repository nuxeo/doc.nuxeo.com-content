---
title: Page Providers
review:
    comment: ''
    date: '2017-03-03'
    status: ok
tree_item_index: 450
toc: true
---
{{#> callout type='info' heading='Availability'}}
This feature is available for target platforms Nuxeo Platform LTS 2016 and above.
{{/callout}}

{{#> callout type='info' heading='Watch the related courses on Nuxeo University'}}
[Course on Searches with Nuxeo Studio Modeler and Designer](https://university.nuxeo.com/learn/public/course/view/elearning/134/configuring-searches-in-nuxeo-studio-modeler-designer)</br>
[Video on a simple Nuxeo Project Creation](https://university.nuxeo.com/learn/public/course/view/elearning/144/nuxeo-platform-quickstart-creation-of-a-simple-nuxeo-studio-project)
![]({{file version='' space='nxdoc' page='university' name='university-search2018.png'}} ?w=450,border=true)
{{/callout}}

Page providers allow retrieving documents with pagination facilities, to build custom document listings and search forms.
They can be leveraged through the REST API:

- directly and using any Nuxeo client (JS, Java, C#, PHP...),
- in a custom application using the Nuxeo elements,
- in Nuxeo Web UI.

A page provider corresponds to the query part of a [content view]({{page page='content-views'}}), without the form and result columns configuration. For instance, Web UI makes use of a page provider in order to create the default search form. In the screenshot below, several configuration options are used:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Web UI Default Search
    name: webui-default-search.png
    studio_modeler#screenshot#up_to_date
--}}
![Web UI Default Search](nx_asset://32d1148d-9c54-4236-b744-3e88d2e68114 ?w=650,border=true)

1. [Query filter](#query-filter)
2. [Predicates](#predicates)
3. [Aggregates](#aggregates)
4. [Quick Filters](#quick-filters)

## Creating a Page Provider
Click on **New** to create a page provider.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Page Providers/Create Page Providers
    name: create-pp.png
    studio_modeler#popup#up_to_date
--}}
![Create Page Providers](nx_asset://4af56307-dda8-4b1c-b654-64631b92dcc4 ?w=350,border=true)

A page provider can be created from an existing content view. When selecting this option:
- The relevant configuration parameters are copied from the selected content view
- The "Use Elasticsearch Index" disappears from the search form, as this parameter is copied from the content view. It is still possible to change the value anytime after creation.

Note that creating a page provider using the **Copy from content view** option keeps your content view available. After creation there is no link between the two features, changing one does not affect the other.

## Main Configuration Options Overview

### Use Elasticsearch Index
Activate this option to use the Elasticsearch Index. When deactivated, the database index will be used instead.

#### When Should I Use The Elasticsearch Index?
Elasticsearch index is faster and allows to use more features like aggregates and hints. However, it can take up to a couple of seconds before your Elasticsearch cluster is synchronized when a modification is made. Therefore, you should:

##### Use the Elasticsearch index for:

- Any costly query,
- Listings that require many or advanced filtering options,
- Any listing in general that does not require immediate up to date information, like search forms.

##### Use the database index for:

- Queries that require the information to be immediately up to date, for instance when displaying the content of a folderish document right after having modified one of its children.

### Query Filter
The query filter is where you can fill in the [NXQL]({{page space='nxdoc' page='nxql'}}) query (without the "SELECT * FROM Document WHERE" part which is already generated). This will be used as a base, to which you can add optional filters.

As you can see from the screenshot above, this query is launched when no additional criteria has been added in the search form.

### Query Parameters
In the query filter field, variables can be defined using the `?` keyword. When adding variables, the corresponding parameters have to be added as query parameters in the same order. When launching a query through the REST API, it is possible to override the parameter's default value set here by sending it in the query.

### Predicates
Predicates are used in search forms to provide additional search criteria on top of the initial [query filter](#query-filter).

{{#> callout type='info' heading='System properties'}}
System properties can be found under the `system` schema. For more info, refer to the [Special NXQL Properties](https://doc.nuxeo.com/nxdoc/nxql/#special-nxql-properties)
{{/callout}}

### Default Sort
Lets you define in which order results should be returned by default.

### Quick Filters
As shown in the screenshot above, quick filters appear in the interface as buttons, where clicking on the button enables or disables the search criteria associated to the quick filter. This is particularly useful to let your users filter documents quickly using commonly used or context relevant search criteria: for instance you can put quick filters to only display documents in a specific state, located in a specific space...

### Elasticsearch Index Specific Options

#### Aggregates
Aggregates are an Elasticsearch specific feature that allow real-time filtering on search criteria.

Range aggregates allow you to display specific date or number ranges (e.g. modified in the last 6 months, renewal due in 3 weeks from now or less, amount over 10k).

Histograms will display automatically generated criteria depending on the current filter selection. e.g. allow to filter contracts between 1 and 2k, 2 and 3k... if you set up a 1k range. criteria are generated in real time and only for existing values (i.e. no option will be shown if no document corresponds to it).

Each aggregate also displays the corresponding number of results in real time depending of the other criteria already selected.

More information can be found in the [page provider aggregates]({{page space='nxdoc' page='page-provider-aggregates'}}) documentation.

#### Multi Repository
When having multiple repositories, this option can be activated to search all of them at once. Can only be activated if you use the Elasticsearch index for your page provider.

#### Generate Usage Statistics
This option enables to include the current page provider into account in the search statistics available from the **Admin**&nbsp;> **Activity**&nbsp;> **Search Analytics** tab. It is available starting from Nuxeo Platform LTS 2015.
