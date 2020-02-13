---
title: 'HOWTO: Filter Data in Suggestions'
review:
    comment: ''
    date: '2019-12-20'
    status: ok
toc: true
details:
    howto:
        excerpt: Learn how to Filter the data in a nuxeo-directory-suggestion element.
        level: Intermediate
        tool: code
        topics: Web UI
labels:
    - lts2017-ok
    - lts2019-ok
tree_item_index: 1255
---

{{! excerpt}}
In this tutorial, learn how to filter data from the directory suggestion element, by using different element attributes.
{{! /excerpt}}

## Concept

The web element `nuxeo-directory-suggestion` displays a dropdown list with the values of a defined vocabulary. In some cases, it could be relevant **to restrict the list of values**, depending on some **criteria/filters**.

As a starting point, it is a good practice to get information on the element we need to configure and inspect all its attributes. You can get it from the [Web Components website](https://www.webcomponents.org/element/nuxeo/nuxeo-ui-elements/elements/nuxeo-directory-suggestion).

It is possible to filter data, thanks to different attributes:

- `directoryName`: Filter by the name of the vocabulary/directory.
- `operation`: Filter by the values returned by an automation chain/scripting using the `Directory.SuggestEntries` operation.
- `queryResultsFilter`: Add additional post-filters on the suggestion.

There are 2 ways to filter values:
- [Using the `queryResultsFilter` parameter](#using-the-queryresultsfilter-parameter)
- [Using the Operation Parameter and the `Directory.SuggestEntries` Operation](#using-the-operation-parameter-and-the-directorysuggestentries-operation)

## Using the queryResultsFilter Parameter

The `queryResultsFilter` allows to filter specific list of values of a vocabulary. Nuxeo Platform provides some vocabularies by default, including `continent` (list of continents) and `country` (list of countries). By default, the same Nuxeo document property is used to display a hierarchical vocabulary (Coverage, or `dc:coverage`).

Let's see how to separate the continent and the country in two distinct properties, and automatically refreshed the country values according to the previously selected continent.

First of all, we will store the value of the selected continent in a variable. For this, we must define a **function** that will be called when the `value-changed` event is fired from the `nuxeo-directory-suggestion` showing the continent:

- In the `<template>` part of your layout:

```html
<nuxeo-directory-suggestion value="{{document.properties.geo:continent}}"
                                label="[[i18n('label.schema.geo.continent')]]"
                                directory-name="continent"
                                role="widget"
                                min-chars="0"                               
                                on-value-changed="_continentUpdated">
</nuxeo-directory-suggestion>
```

-  In the Polymer part:

```
Polymer({
  [...]
  _continentUpdated: function(event){
    if(event && event.detail && event.detail.value){
      gContinent = event.detail.value;         
    }
  },
  [...]
```

Next, we will write the function that will be responsible for filtering the countries depending on the continent. The function can be named as wanted, but it must have three parameters:

- `element`: The entry of the vocabulary that is evaluated
- `index`: The index of the element within the vocabulary
- `array`: The list of vocabulary entries


```
_filterCountries: function(element, index, array){
  var isInContinent = false;

  if(element && element.parent && gContinent){
    isInContinent = (gContinent == element.parent);
  }

  return isInContinent;
},
```

Now we just have to assign the new function to the `queryResultsFilter` property of the web element:

```html
<nuxeo-directory-suggestion value="{{document.properties.geo:country}}"
                            label="[[i18n('label.schema.geo.country')]]"
                            directory-name="country"
                            role="widget"
                            min-chars="0"                               
                            query-results-filter="[[_filterCountries]]">
</nuxeo-directory-suggestion>
```

This is be the complete code of the element:

```html
<nuxeo-directory-suggestion value="{{document.properties.geo:continent}}"
                                label="[[i18n('label.schema.geo.continent')]]"
                                directory-name="continent"
                                role="widget"
                                min-chars="0"                               
                                on-value-changed="_continentUpdated">
    </nuxeo-directory-suggestion>

    <nuxeo-directory-suggestion value="{{document.properties.geo:country}}"
                                label="[[i18n('label.schema.geo.country')]]"
                                directory-name="country"
                                role="widget"
                                min-chars="0"                               
                                query-results-filter="[[_filterCountries]]">
    </nuxeo-directory-suggestion>  
```

And

```
<script>
  var gContinent = null;

  Polymer({
    is: 'nuxeo-myfile-create-layout',
    behaviors: [Nuxeo.LayoutBehavior],
    properties: {
      /**
         * @doctype MyFile       
         */
      document: {
        type: Object
      }
    },

    _continentUpdated: function(event){
      if(event && event.detail &&event.detail.value){
        gContinent = event.detail.value;         
      }
    },

    _filterCountries: function(element, index, array){
      var isInContinent = false;

      if(element && element.parent && gContinent){
        isInContinent = (gContinent == element.parent);
      }

      return isInContinent;
    },               
  });
</script>
```

See the result:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/HOWTO: Filter the data in a nuxeo-directory-suggestion element/directory-suggestion1.png
    name: Screenshot 2019-12-20 at 11.58.24.png
    1.1.3#screenshot#up_to_date
--}}
![directory-suggestion1.png](nx_asset://f213719f-1aad-400f-963c-5c10afe9536d ?w=650,border=true)

## Using the Operation Parameter and the Directory.SuggestEntries Operation

Sometimes the number of entries returned by the server can be very high, so it's convenient to apply the filter **server-side** before returning the information.

By default, the `nuxeo-directory-suggestion` element relies on the `Directory.SuggestEntries` operation. This operation provides a parameter called `filters` that allows you to filter the entries to be returned.

If we want to filter the European countries included in the country vocabulary, we must apply the filter `filters: parent=europe` in the `Directory.SuggestEntries` operation.

Therefore, to apply the filter we must only assign the `{“filters” : “parent=europe”}` value to the params attribute of `nuxeo-directory-suggestion`, as follows:

```html
<nuxeo-directory-suggestion role="widget"
                             value="{{document.properties.geo:country}}"
                             label="Country"
                             directory-name="country"
                             params="{"filters" : "parent=europe"}"
                             min-chars="0">
 </nuxeo-directory-suggestion>
```

See the result:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/HOWTO: Filter the data in a nuxeo-directory-suggestion element/directory-suggestion2.png
    name: directory-suggestion2.png
    1.1.3#screenshot#up_to_date
--}}
![directory-suggestion2.png](nx_asset://4a8dae89-b6a7-4b22-8f03-6ec728493ba2 ?w=650,border=true)

## Going Further

**Create a Document From a Template**

As an alternative to the [Nuxeo Template Rendering addon]({{page version='' space='nxdoc' page='template-rendering-addon'}}), let's say we want to create a document (File) from a list of document templates, displayed on the creation form. Once again, we will use the same filtering mechanism.

First, we create a document property (`file_schema:template` in our example), to store the document template ID. We assume the document templates are identified by a specific document type, or any document property we can query on.

On the creation form of our document, we use the `operation` filter, pointing to a custom automation chain (`AC_SearchTemplates` here):

```html
<nuxeo-document-suggestion id="docSuggWatermark"
                           label="Document Template"
                           name="TemplateId"
                           value="{{document.properties.file_schema:template}}"
                           min-chars="0"
                           result-formatter="[[ResultFormatter]]"
                           operation="AC_SearchTemplates">
</nuxeo-document-suggestion>
```

You may have noticed that we are also using a **Result Formatter** (see the Nuxeo Studio Cookbook link at the end of the page to get more information).

Then, we create the `AC_SearchTemplates` automation chain:

```
- Repository.Query:
    language: NXQL
    query: "SELECT * FROM Document WHERE ecm:mixinType != 'HiddenInNavigation'AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND ecm:primaryType = 'TemplateSource'"
    sortOrder: ASC
```

In this example, we are using **a NXQL query** to fetch the document templates.

At this point, we have stored the template document ID within our document. All we need to do now is to generate the blob from it, using an automation scripting, and call it on the `Document Created` Event Handler:

```
[...]
var templateBlob = templateDoc["file:content"];
Blob.AttachOnDocument(
  templateBlob, {
  'document': input,
  'save' : true
  }
);
[...]
```

See the result:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/HOWTO: Filter the data in a nuxeo-directory-suggestion element/directory-suggestion3.png
    name: directory-suggestion3.png
    1.1.3#screenshot#up_to_date
--}}
![directory-suggestion3.png](nx_asset://06487d1f-f83e-43b0-bb6d-84fdcd44f8e7 ?w=650,border=true)

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Nuxeo Studio Community Cookbook'}}

- [Custom Document Suggestion](https://github.com/nuxeo/nuxeo-studio-community-cookbook/tree/master/modules/nuxeo/document-suggestion-result-formatters)

{{/panel}}
</div>
<div class="column medium-6">
</div>
</div>
