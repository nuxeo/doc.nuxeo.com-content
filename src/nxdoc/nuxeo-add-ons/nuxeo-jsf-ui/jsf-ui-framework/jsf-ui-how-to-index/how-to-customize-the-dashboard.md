---
title: 'HOWTO: Customize the Dashboard - JSF UI'
description: Learn how to customize the dashboard by adding new entries or completely override the default dashboard.
review:
    comment: ''
    date: '2019-10-21'
    status: ok
details:
    howto:
        excerpt: Learn how to customize the dashboard by adding new entries or completely override the default dashboard.
        level: Advanced
        tool: 'Studio, Code'
        topics: JSF UI
labels:
    - content-review-lts2016
    - howto
    - dashboard
    - action
    - atchertchian
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Customize+the+Dashboard
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Customize+the+Dashboard'
    page_id: '20518354'
    shortlink: 0hU5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/0hU5AQ'
    source_link: /display/NXDOC/How+to+Customize+the+Dashboard
tree_item_index: 500
history:
    -
        author: Solen Guitter
        date: '2016-09-05 09:50'
        message: pdate how-to topic
        version: '16'
    -
        author: Manon Lumeau
        date: '2016-03-21 10:04'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2016-03-21 10:03'
        message: ''
        version: '14'
    -
        author: Manon Lumeau
        date: '2015-10-15 13:51'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 12:57'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-10-12 12:48'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:07'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-11-14 14:57'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-11-10 23:52'
        message: formatting steps
        version: '8'
    -
        author: Gildas Lefevre
        date: '2014-11-10 14:47'
        message: ''
        version: '7'
    -
        author: Gildas Lefevre
        date: '2014-11-10 14:32'
        message: ''
        version: '6'
    -
        author: Gildas Lefevre
        date: '2014-11-10 11:46'
        message: How to override the default Dashboard
        version: '5'
    -
        author: Gildas Lefevre
        date: '2014-11-07 17:47'
        message: Work in progress
        version: '4'
    -
        author: Gildas Lefevre
        date: '2014-11-07 15:00'
        message: ''
        version: '3'
    -
        author: Gildas Lefevre
        date: '2014-11-07 14:59'
        message: ''
        version: '2'
    -
        author: Gildas Lefevre
        date: '2014-11-07 14:58'
        message: ''
        version: '1'
---

{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

## Adding a New Entry in the Default Dashboard

Goal: Displaying the list of documents of type `Contract` recently updated [(assuming you already defined documents of type `Contract`]({{page version='' space='nxdoc' page='web-ui-document-layouts'}})).

### Creating the Content View

Let's create a content view that will get all the documents of type Contract that have been recently updated.

1.  In Nuxeo Studio, create a new content view and name it `list_contracts_updated`.
2.  In the **Query & form** tab, define the request to get all the documents of type Contract and order them by modification date.![]({{file name='queryContentView.png'}} ?w=600,border=true)
3.  In the **Results** tab, configure the display of the results of the query, with the following columns:
    *   The icon of the document
    *   The title with a link
    *   The date of the last modification
    *   The name of the last contributor![]({{file name='resultContentView.png'}} ?w=600,border=true)
4.  In the **Advanced configuration** section, check that the following properties are not selected:

    *   Show CSV export
    *   Show PDF export
    *   Show syndication links
5.  Set the property `Title` to define the element title that is going to be displayed on the dashboard.

### Adding the Content View in the Dashboard

Now that the custom content view is created, the next step is to contribute to the service defining the list of elements in the dashboard.

Create a new XML extension named `dashboardContracts`. It has to contribute to the following extension points:

*   **widgets**: the widget used by the new entry is a widget of type `contentViewWithForms`. In the properties, it must reference the name of the content view that you created in the first step. You can also configure some properties to customize the behavior (hide the widget if the content is empty, or define it foldable, etc...)
*   **actions**: a new entry in the Dashboard is actually an action. The action references the widget of the new entry, it is the widget that was just defined above. There are two important attributes to define:
    *   category: this will make this action an element of the dashboard. The dashboard defines two categories `DASHBOARD_LEFT` and `DASHBOARD_RIGHT`. `DASHBOARD_LEFT` is to put the element on the left column of the dashboard and `DASHBOARD_RIGHT` to put it on the right one.
    *   order: order is used to set the order of the elements in the dashboard column.

```xml
<extension target="org.nuxeo.ecm.platform.forms.layout.WebLayoutManager" point="widgets">
  <widget name="dashboard_contracts" type="contentViewWithForms">
      <properties widgetMode="any">
        <property name="contentViewName">list_contracts_updated</property>
        <property name="foldable">true</property>
        <property name="hideEmpty">false</property>
        <property name="useAjaxPagination">true</property>
      </properties>
    </widget>
</extension>

<extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">
  <action id="dashboard_contracts" type="widget" order="10">
      <category>DASHBOARD_LEFT</category>
      <properties>
        <property name="widgetName">dashboard_contracts</property>
      </properties>
    </action>
</extension>
```

&nbsp;

### Deploying the Project

[Deploy your Studio project]({{page space='studio' page='deploying-your-project-in-dev-mode'}}) on your Nuxeo Platform and go to the home page.

![]({{file name='dashboard.png'}} ?w=600,border=true)

## Overriding the Default Dashboard

In this how-to, let's go deeper in the customization of the dashboard: let's replace the default dashboard by a custom one.

### Getting the Extension to Override

The extension defining the link **Dashboard** and the content of the tab is [<span class="componentTitle">org.nuxeo.ecm.user.center.dashboard.jsf.actions</span>](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.user.center.dashboard.jsf.actions--actions):

```xml
  <extension target="org.nuxeo.ecm.platform.actions.ActionService"
    point="actions">
    <action id="Dashboard" link="/user_center_fragment.xhtml" label="user.center.dashboard" icon="/icons/dashboard.png" order="10">
      <category>USER_CENTER</category>
    </action>
    <action id="DashboardMain" link="/incl/dashboard/user_jsf_dashboard.xhtml" label="" order="10"
      type="admin_rest_document_link">
      <category>Dashboard_sub_tab</category>
    </action>
  </extension>
```

You need to override this contribution in order to define your custom dashboard instead.

### Creating the New Tab in Studio

For this example, create a tab displaying a content view listing the document of type Contract, ordered by modification date.

1.  In Studio, create a new tab.
2.  To display the list of documents of type Contract, add a widget **Content view** and select the content view&nbsp; `list_contracts_updated`. ![]({{file name='newTab.png'}} ?w=600,border=true)
3.  In the **Activation** tab, select only the document type **Nothing** for the parameter **Current document has one of the types**.
    The purpose is to let Studio create the corresponding tab, but make sure that it's not displayed by default as you'll display it with custom XML code below. ![]({{file name='activationTab.png'}} ?w=600,border=true)

### Overriding the Default Dashboard

As viewed in the first step, the part you will need to override is:

```xml
  <extension target="org.nuxeo.ecm.platform.actions.ActionService"
    point="actions">
    <action id="DashboardMain" link="/incl/dashboard/user_jsf_dashboard.xhtml" label="" order="10"
      type="admin_rest_document_link">
      <category>Dashboard_sub_tab</category>
    </action>
  </extension>
```

1.  In Studio, create a new **XML Extensions**.
2.  Copy the contribution above but replace the value of the parameter`link` with the name of the generated XHTML by Studio.
    The name of the file will be `/studio_tabs/studio_tab_XXX.xhtml`, XXX is the name of the tab, so in our case`/studio_tabs/studio_tab_NewDashboard.xhtml`.

    ```xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService" point="actions">
      <action id="DashboardMain" link="/studio_tabs/studio_tab_NewDashboard.xhtml" label="" order="10"
          type="admin_rest_document_link">
          <category>Dashboard_sub_tab</category>
       </action>
    </extension>
    ```

### Deploying the Project

[Deploy your Studio project]({{page space='studio' page='deploying-your-project-in-dev-mode'}})

on your Nuxeo Platform and go to the home page.

![]({{file name='dashboardOverrided.png'}} ?w=948,h=272,border=true)
