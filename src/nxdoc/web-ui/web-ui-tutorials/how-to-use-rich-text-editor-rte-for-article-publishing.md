---
title: 'HOWTO: Use the Rich Text Editor (RTE) for Article Publishing'
description: Learn how to leverage the rich text editor to make Nuxeo an articles content repository.
review:
  comment: ''
  date: '2021-07-19'
  status: ok
toc: true
details:
  howto:
    excerpt: Learn how to leverage the rich text editor to make Nuxeo an articles content repository
    level: Intermediate
    tool: Designer
    topics: ???
labels:
  - nuxeo-web-ui
  - nuxeo-elements
tree_item_index: 3000
---

{{! excerpt}}
In this tutorial you will learn how the rich text editor in Nuxeo Web UI and the associated elements can be leveraged to use Nuxeo as a content repository for articles.
{{! /excerpt}}


## Use Case Introduction

As a company doing heavy content publishing, you can have various websites to handle: in different languages, each with its own distinct layout and way to handle the content.

In such situations, you can use Nuxeo to centralize all your content in a single place. Make use of the content services like renditions to retrieve your content in various formats and sizes, or workflows to manage your content publishing process. Nuxeo will not replace your existing CMS. Rather, it integrates with it to make your content CMS agnostic and will be used by your content authors to write articles in Web UI using the rich text editor it provides.

In this page we will give you an overview of how you can use the rich text editor and configure it to your liking. You will also find some ideas to configure or extend it further.

{{#> callout type='info'}}
This how-to requires Nuxeo LTS 2021 or newer.
{{/callout}}

## Using the Rich Text Editor

To test the default behavior of the rich text editor

1. In a Workspace or a Folder, create one or several `Picture` documents.
1. In a Workspace or a Folder, create a new `Note` document and keep the `HTML` format.
1. Type your content and save it directly while being in the document view. Use the rich text editor toolbar to leverage the various options.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/how-to-use-rte-article-publishing/rte-view.png
    name: rte-view.png
    1.1.3#screenshot#up_to_date
--}}
![rte-view.png](nx_asset://f2526b56-ac17-48d3-86fe-a4029a9520b6 ?border=true)

To reference one or several pictures stored in Nuxeo

1. Click on the `insert images from existing documents` [//TODO insert icon] toolbar icon.
1. Search for your content using the quick filter (fulltext search) option, select as many images as you want and press the `Select` button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/how-to-use-rte-article-publishing/rte-image-referencing-search.png
    name: rte-image-referencing-search.png
    1.1.3#screenshot#up_to_date
--}}
![rte-image-referencing-search.png](nx_asset://10e93a3b-87e2-400b-8a9b-7b3ac85697a7 ?border=true)

The search form, the query used to filter pictures and the results presentation are all configurable using Nuxeo Studio.

## Accessing the Content of the Rich Text Editor

As usual with Nuxeo, anything in the UI can be accessed through an external system by using the [REST API]({{page page='rest-api'}}).

When retrieving a Note document, the content will be referenced in the corresponding document property, e.g.:

```
[...]
"properties": {
  "note:note": "Some text and now an image <img src=\&quot;https://nuxeo-server-url.nuxeo.com/nuxeo/nxfile/default/793dc397-2ecc-46ee-8840-92d1d88faed6/file:content/Beach.jpg\&quot;>"
[...]
```

Any image you referenced is stored in a way that lets you parse the content and adapt it to your needs. Your own tool can easily adapt that URL to call further Nuxeo services, for example to request a particular rendition.

## Configuring the Query

By default, inserting images in the rich text editor will reference the current content stored in any document having the `Picture` facet.

Depending on your needs, you may want to change the query to retrieve specific document types, documents in a specific state (e.g. only return approved images). You may even want users to pick only the latest version available for greater control.

Here's a quick example to retrieve only the latest version of an image.

1. In Studio Modeler, go to **External Templates**; import the **Rich Text Editor Default Configuration** template.
1. Go to **Configuration** > **Page Providers**; select the `document_picker` page provider.
1. Replace the query filter with the following:

```
ecm:mixinType != 'HiddenInNavigation' AND ecm:mixinType = 'Picture' AND ecm:isTrashed = 0 AND file:content IS NOT NULL AND ecm:isVersion = 1 AND ecm:isLatestVersion = 1
```

Save and [deploy your configuration]({{page page='nuxeo-dev-tools-extension'}}#hot-reload) to see the result. Make sure you have created a version for your pictures to see them appear in the list.

## Configuring the Search Form or the Results Presentation

Two options are available to configure the image picker:

- Configuring the search form: to provide additional / different search criteria for the images to reference
- Configuring the results form: to replace or provide alternate views to the default grid results display

Let's add an additional search criteria to find images related to a particular area.

1. In Studio Modeler, go to **Configuration** > **Page Providers**; select the `document_picker` page provider.
1. Add a new `aggregate`. Choose the **terms** aggregate type, and map it to the **dublincore > coverage** field.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/how-to-use-rte-article-publishing/coverage-aggregate-modeler-configuration.png
    name: coverage-aggregate-modeler-configuration.png
    1.1.3#screenshot#up_to_date
--}}
![coverage-aggregate-modeler-configuration.png](nx_asset://e3acb068-96bd-48ca-a566-e11eee9845bb ?border=true)

3. Save your configuration.
4. Click on the **Configure Layouts in Designer** button in the top right corner of the screen. You will be taken to the layout configuration for the **document_picker** page provider in Studio Designer.

Now we will configure the layout to take advantage of it.

1. Click on the **Form** option to configure its search form.
1. Drag and drop the **dublincore coverage aggregate** to the form, leave it in edit mode and confirm using the **generate** button.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/how-to-use-rte-article-publishing/coverage-aggregate-designer-catalog.png
    name: coverage-aggregate-designer-catalog.png
    1.1.3#screenshot#up_to_date
--}}
![coverage-aggregate-designer-catalog.png](nx_asset://9fe81437-386b-4386-bf11-c9f04bd53e82 ?border=true)

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/how-to-use-rte-article-publishing/coverage-aggregate-designer-generation.png
    name: coverage-aggregate-designer-generation.png
    1.1.3#screenshot#up_to_date
--}}
![coverage-aggregate-designer-generation.png](nx_asset://afdecac0-95c2-4308-a712-6a6020373894 ?border=true)

Save and [deploy your configuration]({{page page='nuxeo-dev-tools-extension'}}#hot-reload) to see the result. This time you should edit your picture to add a coverage to it, then create a version to see it appear in the list when picking it from the rich text editor.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/how-to-use-rte-article-publishing/rte-results-with-search-filter-configured.png
    name: rte-results-with-search-filter-configured.png
    1.1.3#screenshot#up_to_date
--}}
![rte-results-with-search-filter-configured.png](nx_asset://777f47d0-2740-4e73-90a0-64ef3f57d24d ?border=true)

To configure the search results listing, [configure the **Results** option]({{page page="ui-designer" space="studio"}}) in Nuxeo Studio Designer for your `document_picker` page provider instead.

## Going Further

The following examples will be covered from a high level perspective only.

### Using Multiple Rich Text Editors

Let's assume you want to add a field to put a summary of your article. Or that you want to separate the introduction, the main content of the article and the conclusion to adapt your content more easily to a wider variety of website layouts.

In this kind of situation, it is possible to use multiple rich text editors and to map them to different properties of your documents. Here's a summary of how you could proceed.

1. Create a custom document type.
1. Add a custom schema to it, and add your new fields using the `String` type.
1. In Nuxeo Studio Designer, configure the edit layout for your document type.
1. Drag and drop a `nuxeo-html-editor` element and bind it to the corresponding field. Repeat that operation for every additional field you created.

### Tracking Relations Between Documents

When referencing pictures in the rich text editor, Nuxeo won't keep track of which images were used for which article. To make overall maintenance and tracking easier, you may want to implement a relation system.

Here's a summary of how you could proceed. Note that implementing this feature requires coding knowledge.

1. Add an event handler that will be triggered on the following events for your custom document type: [About to create]({{page page="common-events"}}#abouttocreate), [Before document modification]({{page page="common-events"}}#beforedocumentmodification).
1. Associate an [automation script]({{page page='automation-scripting' space='studio'}}) or a [custom operation]({{page page='develop-your-own-java-code'}}) to it.

It should roughly follow this logic (many variations are possible):

1. Parse the content of the properties where you reference images
1. Detect referenced images and extract the document id
1. Store these document ids in the current document (relations from the article to the images)
1. Store the id of the current document in each referenced image (relations from the images to the article)

{{#> callout type='warning'}}
Do not use the save parameter for automation operations / do not call the save method from the CoreSession when using Java code. You would trigger another modification event and run into an infinite loop. Your changes will be saved automatically since you are plugging your logic before writing the document into the database.
{{/callout}}

From there, all you need is to display the information in your document layout: using a document suggestion widget will map the document id to its title and provide a link to it.

Of course, additional logic may be necessary depending on how you implemented your logic for the image picker in the first place. You may also want to plug logic to some additional events so that references in the images are deleted if you delete the article for example.
