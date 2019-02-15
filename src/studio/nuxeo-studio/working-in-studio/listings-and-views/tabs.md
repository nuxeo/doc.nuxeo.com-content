---
title: Tabs
review:
  comment: ''
  date: ''
  status: ok
notes: Documentation page used on Nuxeo Studio. Check with NOS team before deleting or moving.
labels:
  - tab
  - layout
  - howto-layout
  - howto-content-view
  - howto-tab
  - content-view
toc: true
confluence:
  ajs-parent-page-id: '12911803'
  ajs-parent-page-title: Listings & Views
  ajs-space-key: Studio
  ajs-space-name: Nuxeo Online Services
  canonical: Tabs
  canonical_source: 'https://doc.nuxeo.com/display/Studio/Tabs'
  page_id: '11042924'
  shortlink: bICo
  shortlink_source: 'https://doc.nuxeo.com/x/bICo'
  source_link: /display/Studio/Tabs
tree_item_index: 400
history:
  - author: Solen Guitter
    date: '2016-09-01 15:30'
    message: ''
    version: '33'
  - author: Solen Guitter
    date: '2015-01-26 16:03'
    message: link update and typos
    version: '32'
  - author: Solen Guitter
    date: '2015-01-26 15:26'
    message: ''
    version: '31'
  - author: Manon Lumeau
    date: '2014-12-09 10:47'
    message: ''
    version: '30'
  - author: Solen Guitter
    date: '2014-03-11 18:26'
    message: ''
    version: '29'
  - author: Solen Guitter
    date: '2013-09-23 09:28'
    message: 'Removed related topics from TOC, formatting'
    version: '28'
  - author: Anahide Tchertchian
    date: '2013-09-21 15:50'
    message: cosmit
    version: '27'
  - author: Anahide Tchertchian
    date: '2013-09-21 15:49'
    message: >-
      NXS-1758: introduce the "Tabs" widget type and explain how to
      configure sub tabs
    version: '26'
  - author: Solen Guitter
    date: '2013-09-04 15:27'
    message: ''
    version: '25'
  - author: Solen Guitter
    date: '2013-09-04 15:26'
    message: ''
    version: '24'
  - author: Solen Guitter
    date: '2013-08-29 17:23'
    message: ''
    version: '23'
  - author: Solen Guitter
    date: '2013-06-18 14:29'
    message: ''
    version: '22'
  - author: Solen Guitter
    date: '2013-06-18 14:28'
    message: Changed since 5.7 for 5.7.1
    version: '21'
  - author: Bertrand Chauvin
    date: '2013-06-06 10:29'
    message: Added some information about widget types
    version: '20'
  - author: Bertrand Chauvin
    date: '2013-06-04 17:50'
    message: Added Toggleable form widget type properties
    version: '19'
  - author: Bertrand Chauvin
    date: '2013-06-04 09:44'
    message: ''
    version: '18'
  - author: Bertrand Chauvin
    date: '2013-06-03 19:24'
    message: Added exhaustive permissions list
    version: '17'
  - author: Bertrand Chauvin
    date: '2013-06-03 19:15'
    message: ''
    version: '16'
  - author: Alain Escaffre
    date: '2013-05-14 08:53'
    message: ''
    version: '15'
  - author: Alain Escaffre
    date: '2013-05-14 08:52'
    message: ''
    version: '14'
  - author: Alain Escaffre
    date: '2013-05-14 08:52'
    message: ''
    version: '13'
  - author: Anahide Tchertchian
    date: '2012-12-27 12:41'
    message: adding new tabs widget types from 5.7
    version: '12'
  - author: Anahide Tchertchian
    date: '2012-12-27 12:35'
    message: ''
    version: '11'
  - author: Anahide Tchertchian
    date: '2012-12-27 12:35'
    message: remove beta marker
    version: '10'
  - author: Solen Guitter
    date: '2012-06-05 17:36'
    message: Migrated to Confluence 4.0
    version: '9'
  - author: Solen Guitter
    date: '2012-06-05 17:36'
    message: ''
    version: '8'
  - author: Solen Guitter
    date: '2012-06-05 17:36'
    message: ''
    version: '7'
  - author: Alain Escaffre
    date: '2012-05-31 06:47'
    message: ''
    version: '6'
  - author: Anahide Tchertchian
    date: '2012-05-28 12:16'
    message: ''
    version: '5'
  - author: Solen Guitter
    date: '2012-05-25 18:06'
    message: Added related howtos
    version: '4'
  - author: Solen Guitter
    date: '2012-05-25 18:03'
    message: Added content view and toggable layout widgets description
    version: '3'
  - author: Solen Guitter
    date: '2012-05-25 16:51'
    message: Added steps to define the tab
    version: '2'
  - author: Solen Guitter
    date: '2012-05-25 14:26'
    message: ''
    version: '1'
---

## Concept

When you create new document types, you often need to have specific tabs on these document types that display information relevant to your users. A **Tabs** menu item enables you to create customized tabs on which you can define the elements you want to be displayed: widgets, layouts, content views, actions bars. You can also define the conditions that should be met to display the tab (on which document types the tab will be available, for which users, etc).

{{#> callout type='info' }}

The **Tabs** feature is available from Nuxeo Platform 5.6.

{{/callout}}

## Pre-Requisites

{{{multiexcerpt 'jsf-ui-target-package-requirement' page='listings-and-views'}}}

{{#> callout type='warning' }}
The JSF UI addon is deprecated since Nuxeo Platform LTS 2019. You can define Tabs with Studio Designer. For more information, please refer to the [UI documentation]({{page version='' space='studio' page='ui-designer'}}#tabs).
{{/callout}}

## Creating a New Tab

**To create a new customized tab:**

1.  In the the **Listings & Views** item of the Studio Modeler tree, click on **Tabs** and click the **New** button.
2.  On the creation form, type the name of the tab.
    A default grid with two columns is available by default, that you can either fill in or edit.
    You can now define [what will be displayed on your tab](#definition-tab) and [when the tab should be displayed](#enablement-tab).

## {{> anchor 'definition-tab'}}Definition Tab

**The definition tab is used to set up what should be displayed on your tab.
**

- **Label**: Name that will be displayed to the users.
- **Category:** defaults to "document category". More categories can be added using XML extensions.
- **Order:** order in which the tabs will be displayed from left to right. The higher the number, the more you move the tab to the right side of the screen. Default tabs number start at 10, so you should add a 2 digits number at least in this field if you expect your custom tab to be placed after the default ones.
- **Add grid row:** This button helps in defining the grid structure you would like to obtain. Click on **Add Grid Row** and, in the pop up window, click on the row type that you want to add.
  ![]({{file name='studio-row-selection.png'}} ?w=150,border=true)

  You can reorganize the rows by clicking on the row icon ![]({{file name='studio-edit-icon.png'}}) and select the wished option in the window that pops up.
  ![]({{file name='studio-edit-popup.png'}} ?w=100,border=true)

  Drag and drop widgets from the left box into a cell ([see the main widgets below](#main-widgetss-properties)).
  The widget editor window pops up.
  Click on **Save** to save your modifications, both in the widget editor **and** in the main window.

{{> anchor 'enablement-tab'}}

## Enablement Tab

The enablement tab defines when the tab should be available.

1.  In the form, select the conditions that must be met for the tab to be displayed. For instance:

    - In the **Current user has one of the permissions** multi-select box, select the permissions the user must have to be displayed the tab;
    - In the **Current document has one of the types** multi-select box, choose the documents types on which the tab will be displayed;
    - In the **Current document has facet** drop-down list, select the [facet]({{page space='nxdoc' page='available-facets'}}) that the document must have for the tab to be displayed;
    - In the **Current document has life cycle** text box, type the lifecycle state the document must be in for the tab to be displayed;
    - In the **Document path starts with** text box, type the path the document must be in for the tab to be displayed;
    - In the **Current document is** drop-down list, select the kind of document must be for the tab to be displayed;
    - In the **Current user is member of** text box, select the user group the user must be part of for the tab to be displayed;
    - Check the **Current user** **is** **administrator** checkbox if you wish to restrict this tab to administrators group members only;
    - In the **Custom EL expression** text box, type an EL expression that should be evaluated for the tab to be displayed.Keep in mind that requirements are cumulative; the tab will be displayed only if all previous conditions defined are met. You may leave fields blank if you do not wish to apply some of the restrictions available.

2.  Click on **Save** to save your modifications.

## Tab Specific Widget Types

### Content View Widget Type

The Content view widget type is available from the menu on the right on the Definition tab. It enables you to display a [content view]({{page space='nxdoc' page='how-to-define-a-new-content-view'}}) defined in the **Listings & Views** > **Content Views** menu item inside the slot in which you drop the widget. You can use any content view previously defined.

**When should I use a content view widget ?**

This widget type is usually combined with a tab in order to create specific content tabs, showing for example a substring of documents depending on their lifecycle state. As you can add as many content view widgets as you like, you may achieve various display results that would not have been possible using a single NXQL query.

### Toggleable Form Widget Type

The Toggleable form widget type enables you to display two layouts alternatively, using a predefined user action to switch from one layout to the other.

**When should I use a toggleable form widget ?**

Typically, this widget can be displayed to enable users to edit a document without having to go on the **Edit** tab of the document, but using an **Edit** button. In that case, the used layouts would be the View and Edit layouts of a document.

- **Layout(s):** Use the "choose" button to select which [form layout]({{page page='form-layouts'}}) you would like to display as first layout.
- **Toggled layout(s):** Use the "choose" button to select which [form layout]({{page page='form-layouts'}}) you would like to display after clicking on the toggle action button.

### Form Action(s) Widget Types

Since version 5.7.1, the Form action(s) widget types enable you to display buttons that interact with a layout form (like save/cancel buttons). Actions can be selected using a category on the "Form actions" widget type and using the action name on the "Form action" widget type.

### Toolbar Action(s) Widget Types

Since version 5.7.1, the Toolbar action(s) widget types enable you to display buttons that do not interact with a layout form. The main difference with form actions is a finer control over forms and labels. Actions can be selected using a category on the "Form actions" widget type and using the action name on the "Form action" widget type.

### Tabs Widget Types

Since version 5.7.3, the tabs widget types enable you to display tabs within your tabs (aka sub tabs). Here is a sample configuration. The parent tab "MyTab" holds a "Tabs" widget type:

![The parent tab configuration]({{file name='parent_tab_conf.png'}} ?w=450,border=true 'The parent tab configuration')

The "Tabs" widget type is configured as is (it uses the "MyTab sub tab" category):

![]({{file name='tabs_widget_conf.png'}} ?w=450,border=true)

Sub tabs can be defined as standard tabs, but using the "MyTab sub tab" category:

![]({{file name='sub_tab_conf.png'}} ?w=450,border=true)
