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
In this tutorial you will learn how the rich text editor in Nuxeo Web UI and the associated elements can be leveraged to use Nuxeo as an articles content repository.
{{! /excerpt}}


Using and customizing the rich text editor for article publishing

Use case introduction
What elements can I use?
How to retrieve the content in my external system?
How do I reference images in my article?
How do I keep track of which images are being used in my articles?

## Use Case Introduction

As a company doing heavy content publishing, you can have various websites to handle: in different languages, each with its own distinct layout and way to handle the content.

Using Nuxeo can come in handy for such situations: use it to centralize all your content in a single place, retrieve it on demand and make use of the content services like renditions to retrieve your content in various formats and sizes or workflows to manage your content publishing process. Nuxeo will not replace your existing CMS. Rather, it integrates with it to make your content CMS agnostic.

In this page we will provide a high level overview of how you can use the rich text editor, configure it to your liking and provide some ideas to explore further.

## Setting Up the Rich Text Editor

//TODO Mention LTS2021+ only

Configure layout
Use the nuxeo-html-editor element for ...
Use the other one for ...

## Configuring Image Insertion

Explain how it works and what we do with it

Configure document_picker pp in Studio
Change the pp query to your liking

1. In Studio Modeler, go to **Configuration** > **Page Providers**; click on **New** and name it `document_picker`.
1. In the Query filter add the following line `AND ecm:currentLifeCycleState='Approved'`. Only approved documents.</br>
   You should end up with something like this:

   ```
   ecm:mixinType != 'HiddenInNavigation' AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND ecm:currentLifeCycleState='Approved'
   ```

## Configuring the Layout for Image Picking

Import template //TODO create the template
(needed because of custom code it contains)

Configure layout in Studio

## Going Further: Relations

Keeping track of images being used
Add an event handler
Parse the content
Add the relation as a metadata entry
