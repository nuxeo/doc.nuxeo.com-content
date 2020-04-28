---
title: Aggregate Widget Types
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - elasticsearch
    - aggregate
    - grenard
    - aggregates-widgets-component
    - excerpt
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '3868345'
    ajs-parent-page-title: Standard Widget Types
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Aggregate+Widget+Types
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Aggregate+Widget+Types'
    page_id: '20518128'
    shortlink: 8BQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/8BQ5AQ'
    source_link: /display/NXDOC/Aggregate+Widget+Types
tree_item_index: 800
history:
    -
        author: Solen Guitter
        date: '2016-09-01 09:09'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2016-09-01 09:05'
        message: ''
        version: '15'
    -
        author: Solen Guitter
        date: '2016-03-04 13:30'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2016-03-04 13:25'
        message: Update links labels
        version: '13'
    -
        author: Manon Lumeau
        date: '2015-09-16 12:20'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 17:03'
        message: 'NXDOC-427: add links to layout demo for some aggregate widget types'
        version: '11'
    -
        author: Alain Escaffre
        date: '2014-11-10 00:15'
        message: ''
        version: '10'
    -
        author: Guillaume Renard
        date: '2014-11-07 15:36'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-11-07 15:32'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-07 15:13'
        message: ''
        version: '7'
    -
        author: Guillaume Renard
        date: '2014-11-07 10:50'
        message: ''
        version: '6'
    -
        author: Guillaume Renard
        date: '2014-11-07 10:47'
        message: ''
        version: '5'
    -
        author: Guillaume Renard
        date: '2014-11-06 18:19'
        message: ''
        version: '4'
    -
        author: Guillaume Renard
        date: '2014-11-06 18:11'
        message: ''
        version: '3'
    -
        author: Guillaume Renard
        date: '2014-11-06 17:34'
        message: ''
        version: '2'
    -
        author: Guillaume Renard
        date: '2014-11-06 11:36'
        message: ''
        version: '1'

---
{{! excerpt}}

This page presents widget types to be used to display aggregate buckets.

{{! /excerpt}}

As described in [Page Provider Aggregates]({{page page='page-provider-aggregates'}}), you can define aggregates on content views based on Elasticsearch. In order to display and select the buckets returned by an aggregate, new widget types have been added to the platform.

The following picture shows the [default search](https://github.com/nuxeo/nuxeo-features/blob/6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L7) of Nuxeo Platform where you can see a couple of aggregate widget type in action on the left-hand side panel.

![]({{file name='aggregates.png' page='page-provider-aggregates'}} ?w=600)

Here is a table sumarizing the different type of widget to display aggregate buckets.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Widget</th><th colspan="1">Name</th><th colspan="1">Since</th><th colspan="1">Specificity</th><th colspan="1">Example (when available)</th><th colspan="1">Compatible Aggregate Type</th></tr><tr><td colspan="1">**[Checkbox](http://showcase.nuxeo.com/nuxeo/layoutDemo/selectManyCheckboxAggregateWidget)**</td><td colspan="1">`selectManyCheckboxAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td><td colspan="1"></td><td colspan="1" rowspan="8">

[Term Aggregate]({{page page='page-provider-aggregates#termsagg'}})

[Significant Term Aggregate]({{page page='page-provider-aggregates#signtermsagg'}})

</td></tr><tr><td colspan="1">**[Select](http://showcase.nuxeo.com/nuxeo/layoutDemo/selectManyListboxAggregateWidget)**</td><td colspan="1">`selectManyListboxAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td></tr><tr><td colspan="1">**[Directory Checkbox](http://showcase.nuxeo.com/nuxeo/layoutDemo/selectManyCheckboxDirectoryAggregateWidget)**</td><td colspan="1">`selectManyCheckboxDirectoryAggregate`</td><td colspan="1">6.0</td><td colspan="1">[See section Directory Terms Aggregate Widget Types](#dirspec)</td><td colspan="1">[dc_coverage_agg](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L622)</td></tr><tr><td colspan="1">**[Directory Select](http://showcase.nuxeo.com/nuxeo/layoutDemo/selectManyListboxDirectoryAggregateWidget)**</td><td colspan="1">`selectManyListboxDirectoryAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td></tr><tr><td colspan="1">**Document Checkbox**</td><td colspan="1">`selectManyCheckboxDocumentAggregate`</td><td colspan="1">6.0</td><td colspan="1">[See section Document Terms Aggregate Widget Types](#docspec)</td><td colspan="1"></td></tr><tr><td colspan="1">**Document Select**</td><td colspan="1">`selectManyListboxDocumentAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td></tr><tr><td colspan="1">**User Checkbox**</td><td colspan="1">`selectManyCheckboxUserAggregate`</td><td colspan="1">6.0</td><td colspan="1">[See section User Terms Aggregate Widget Types](#userspec)</td><td colspan="1"></td></tr><tr><td colspan="1">**User Select**</td><td colspan="1">`selectManyListboxUserAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td><td colspan="1">[dc_creator_agg](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L459)</td></tr><tr><td colspan="1">**Histogram Checkbox**</td><td colspan="1">`selectManyCheckboxHistogramAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td><td colspan="1"></td><td colspan="1" rowspan="2">[Histogram Aggregate]({{page page='page-provider-aggregates#histogramagg'}})</td></tr><tr><td colspan="1">**Histogram Select**</td><td colspan="1">`selectManyListboxHistogramAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td></tr><tr><td colspan="1">**Date Histogram Checkbox**</td><td colspan="1">`selectManyCheckboxDateHistogramAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td><td colspan="1">[dc_created_agg](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L362)</td><td colspan="1" rowspan="2">[Date Histogram Aggregate]({{page page='page-provider-aggregates#datehistogramaggregate'}})</td></tr><tr><td colspan="1">**Date Histogram Select**</td><td colspan="1">`selectManyListboxDateHistogramAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td></tr><tr><td colspan="1">**Range Checkbox**</td><td colspan="1">`selectManyCheckboxRangeAggregate`</td><td colspan="1">6.0</td><td colspan="1">[See section Range Aggregate Widget Types](#rangespec)</td><td colspan="1">[common_size_agg](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L657)</td><td colspan="1" rowspan="2">[Range Aggregate]({{page page='page-provider-aggregates#rangeagg'}})</td></tr><tr><td colspan="1">**Range Select**</td><td colspan="1">`selectManyListboxRangeAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td></tr><tr><td colspan="1">**Date Range Checkbox**</td><td colspan="1">`selectManyCheckboxDateRangeAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td><td colspan="1">[dc_modified_agg](https://github.com/nuxeo/nuxeo-features/blob/release-6.0/nuxeo-search-ui/src/main/resources/OSGI-INF/search-contentviews-contrib.xml#L404)</td><td colspan="1" rowspan="2">[Date Range Aggregate]({{page page='page-provider-aggregates#daterangeagg'}})</td></tr><tr><td colspan="1">**Date Range Select**</td><td colspan="1">`selectManyListboxDateRangeAggregate`</td><td colspan="1">6.0</td><td colspan="1"></td><td colspan="1"></td></tr></tbody></table></div>

All these widget types have an important property in common, `selectOptions`, which needs to be set with the list of bucket returned by the associated aggregate. This will always be:

```xml
<property name="selectOptions">#{contentView.pageProvider.aggregates['xxx'].extendedBuckets}</property>
```

where `xxx` is the id of aggregate (see [the page Page Provider Aggregates]({{page page='page-provider-aggregates#aggid'}})).

As you can see, each widget type is actually available with checkbox or select2.

All select2-based widgets have the following properties:

*   `placeholder`: The placeholder of the select2 widget. Default is  **Select a value**.
*   `width`: The width of the select2 widget default is 100%.

All checkbox-based widget have the following properties:

*   `moreLessLimit`: By default, only six buckets (i.e. checkboxes) are displayed. If there are more buckets, a 'More'/'Less' link will make show/hide the other buckets. Use this property to change this setting.
*   `emptyChoiceMessage`: The message to be displayed when there are no returned buckets. Default is  **No available result**.

## {{> anchor 'userspec'}}User Terms Aggregate Widget Types

Using one of these widget types will force to resolve the bucket key (i.e. the value stored in the document property) as a user id and will display its "Firstname Lastname" if any.

## {{> anchor 'dirspec'}}Directory Terms Aggregate Widget Types

Using one of these widget types will force to resolve the bucket key (i.e. the value stored in the document property) as a directory entry and will display its localized label.

These widget types have the specific widget properties:

*   `directoryName` : The name of the directory from which the entry must be resolved (**required**)
*   `localize` : Whether the entry should be localized
*   `dbl10n` : false (default) means the entry is to be localized from messages_xx.properties file. true means the directory directly support localization in dedicated columns.

## {{> anchor 'docspec'}}Document Terms Aggregate Widget Types

Using one of these widget types will force to resolve the bucket key (i.e. the value stored in the document property) as a document uuid and will display its title.

## {{> anchor 'rangespec'}}Range Aggregate Widget Types

Range aggregates define a set of ranges for which we can define the label to be displayed. This is possible with the use of `selectOptions` on the widget definition. Here is an example with the range aggregate on  [`common:size`](http://commonsize) :

```xml
<widget name="common_size_agg" type="selectManyCheckboxRangeAggregate">
  <fields>
    <field>defaults:common_size_agg</field>
  </fields>
  <widgetModes>
    <mode value="edit">#{contentView.pageProvider.hasAggregateSupport() ?
      'edit' : 'hidden'}</mode>
  </widgetModes>
  <properties widgetMode="any">
    <property name="selectOptions">#{contentView.pageProvider.aggregates['common_size_agg'].extendedBuckets}</property>
    <property name="localize">true</property>
  </properties>
  <selectOptions>
    <option itemLabel="label.aggregate.size.tiny" itemValue="tiny" />
    <option itemLabel="label.aggregate.size.small" itemValue="small" />
    <option itemLabel="label.aggregate.size.medium" itemValue="medium" />
    <option itemLabel="label.aggregate.size.big" itemValue="big" />
    <option itemLabel="label.aggregate.size.huge" itemValue="huge" />
  </selectOptions>
  <controls mode="any">
    <control name="supportInsideInputWidgetEffects">true</control>
  </controls>
</widget>
```

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">

{{! Please update the label in the Content by Label macro below. }}

{{#> panel heading='Related Documentation'}}

- [How to Configure a Search Filter With Facets and Other Aggregates]({{page page='how-to-configure-a-search-filter-with-facets-and-other-aggregates'}})
- [Page Provider Aggregates]({{page page='page-provider-aggregates'}})

{{/panel}}</div><div class="column medium-6">

</div></div>
