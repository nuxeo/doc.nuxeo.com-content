---
title: 'HOWTO: Configure Web UI Global Settings'
description: Learn how to configure global Web UI settings.
review:
    comment: ''
    date: '2019-07-19'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to configure global Web UI settings.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - nuxeo-web-ui
    - extension
    - customization
    - tutorial
tree_item_index: 650
---

{{! excerpt}}
Nuxeo Web UI provides a simple way to configure global settings to have consistent behavior across the platform. These configurations are handled as a configuration extension.</br>
For more details, please take a look at the [HOWTO: Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}}) page.
{{! /excerpt}}

## Default Settings

The XML contribution for the configuration extension is located [here](https://github.com/nuxeo/nuxeo-web-ui/blob/master/plugin/web-ui/addon/src/main/resources/OSGI-INF/web-ui-properties.xml) and contains a set of predefined default settings using `org.nuxeo.web.ui` namespace.

For the moment, the default settings include:

### Enrichers

In Nuxeo Platform, a concept of Content Enrichers is used for several reasons, such as to optimize the number of requests sent to the server. More details about them could be found on the
[Content Enrichers]({{page page='content-enrichers'}}) documentation.

By default, the following enrichers are being used:

```xml
<component name="org.nuxeo.web.ui.properties.contrib">
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">

    <!-- Enrichers -->
    <property name="org.nuxeo.web.ui.enrichers.document" list="true">hasContent</property>
    <property name="org.nuxeo.web.ui.enrichers.document">firstAccessibleAncestor</property>
    <property name="org.nuxeo.web.ui.enrichers.document">permissions</property>
    <property name="org.nuxeo.web.ui.enrichers.document">breadcrumb</property>
    <property name="org.nuxeo.web.ui.enrichers.document">preview</property>
    <property name="org.nuxeo.web.ui.enrichers.document">favorites</property>
    <property name="org.nuxeo.web.ui.enrichers.document">subscribedNotifications</property>
    <property name="org.nuxeo.web.ui.enrichers.document">thumbnail</property>
    <property name="org.nuxeo.web.ui.enrichers.document">renditions</property>
    <property name="org.nuxeo.web.ui.enrichers.document">pendingTasks</property>
    <property name="org.nuxeo.web.ui.enrichers.document">runnableWorkflows</property>
    <property name="org.nuxeo.web.ui.enrichers.document">runningWorkflows</property>
    <property name="org.nuxeo.web.ui.enrichers.document">collections</property>
    <property name="org.nuxeo.web.ui.enrichers.document">audit</property>
    <property name="org.nuxeo.web.ui.enrichers.document">subtypes</property>
    <property name="org.nuxeo.web.ui.enrichers.document">tags</property>
    <property name="org.nuxeo.web.ui.enrichers.document">publications</property>
    <property name="org.nuxeo.web.ui.enrichers.blob" list="true">appLinks</property>

  </extension>
</component>
```

### Special HTTP Headers

Similarly, Nuxeo Platform also makes use of special HTTP headers with the same general purpose: to have more control on REST API calls.
Please consider the [Special HTTP Headers]({{page page='special-http-headers'}}) page to learn more about this concept and be aware of the available options.

By default, only the `fetch.document` HTTP header is defined to ensure that all the properties are being fetched for a given document.

```xml
<component name="org.nuxeo.web.ui.properties.contrib">
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">

     <!-- Properties to be fetched when loading current document, default 'properties' means all -->
    <property name="org.nuxeo.web.ui.fetch.document" list="true">properties</property>

  </extension>
</component>
```

{{#> callout type='warning' }}
The configurations made on both **Enrichers** and **Special HTTP Headers** may impact Web UI performance. Please look at [Web UI Performance]({{page page='web-ui-performance'}}) for more details.
{{/callout}}

### Date Formats

Since Nuxeo Web UI is an internationalized and localized application, there is a concern with language and culture. For this reason, it is possible to configure some date and time-related formats.

By default, the `dateFormat` and `dateTimeFormat` are defined according to **Moment.js** syntax (check the [Moment.js](https://momentjs.com/) website for more information), since it is the library used by Web UI to manage time.
Also, a `firstDayOfWeek` is considered to display a date picker, for example, according to cultural needs. If the variable is not customized, it will default to the most common case, which is Sunday.

An example of its usage can be found on the [Nuxeo Date Picker](https://github.com/nuxeo/nuxeo-elements/blob/master/ui/widgets/nuxeo-date-picker.js#L86-L100).

```xml
<component name="org.nuxeo.web.ui.properties.contrib">
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">

     <!-- Date (time) format -->
    <property name="org.nuxeo.web.ui.dateFormat">LL</property>
    <property name="org.nuxeo.web.ui.dateTimeFormat">LLL</property>

    <!-- First Day Of Week -->
    <property name="org.nuxeo.web.ui.firstDayOfWeek"></property>

  </extension>
</component>
```

### Others

By default, there are also two more settings defined related to [Amazon S3 Direct Upload for Web UI]({{page page='amazon-s3-direct-upload'}}) and [Page Providers]({{page page='page-providers'}}).
The first defines if the S3 Direct Upload is used, and the second defines the maximum number of results displayed by the Page Provider.

```xml
<component name="org.nuxeo.web.ui.properties.contrib">
  <extension target="org.nuxeo.runtime.ConfigurationService" point="configuration">

     <!-- S3 Direct upload -->
    <property name="org.nuxeo.web.ui.s3.useDirectUpload">${nuxeo.s3storage.useDirectUpload:=false}</property>

    <!-- Max Results for Tables, Grids and Lists plugged on a Nuxeo Page Provider. Falls back on elasticsearch max result window by default. -->
    <property name="org.nuxeo.web.ui.listingMaxItems">${org.nuxeo.elasticsearch.provider.maxResultWindow:=10000}</property>

  </extension>
</component>
```

## Customize Settings

As any other configuration, the best way to create new settings or change/override the default ones, is to contribute a new extension as explained [on this tutorial]({{page page='how-to-contribute-to-an-extension'}}).

{{#> callout type='warning' }}
Overriding default settings must be done in a conscious way, as it will change the default/expected behavior of the platform or, at least, of some components, depending on which settings are changed.
{{/callout}}

## Usage Examples

When Web UI is built, these settings will be available to be used (details [here](https://github.com/nuxeo/nuxeo-web-ui/blob/master/plugin/web-ui/addon/src/main/resources/web/nuxeo.war/ui/index.jsp#L113)).

The recommended way to access and use these settings is through `Nuxeo.UI.config`, and several examples can be found in Web UI.

### Nuxeo App

```javascript
 _computeHeaders() {
  const headers = {
    'translate-directoryEntry': 'label',
  };

  const fetch = (Nuxeo.UI && Nuxeo.UI.config && Nuxeo.UI.config.fetch) || {};

  // add required fetchers
  const required = { document: ['lock'], directoryEntry: ['parent'], task: ['actors'] };

  Object.keys(required).forEach((k) => {
    fetch[k] = fetch[k] || [];
    required[k].forEach((v) => {
      if (!fetch[k].includes(v)) {
        fetch[k].push(v);
      }
    });
  });

  // generate fetch headers
  Object.keys(fetch).forEach((f) => {
    headers[`fetch-${f}`] = fetch[f].join(',');
  });

  return headers;
},
```

### Nuxeo Format Behavior

```javascript
 /**
  * Formats a date time as a string. Default format is 'MMMM D, YYYY HH:mm'.
  * Use format "relative" to show date relative to current time
  *
  * @param {string} date the date
  * @param {string} format the format, falls back on Nuxeo.UI.config.dateFormat or 'MMMM D, YYYY HH:mm' if null.
  */
  formatDateTime(date, format) {
    return this._formatDate(date, format || (Nuxeo.UI && Nuxeo.UI.config && Nuxeo.UI.config.dateTimeFormat) || 'LLL');
  },
```
