---
title: Nuxeo OpenSocial
labels:
    - opensocial
toc: true
confluence:
    ajs-parent-page-id: '21299463'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Nuxeo+OpenSocial
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Nuxeo+OpenSocial'
    page_id: '21299424'
    shortlink: 4ABFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4ABFAQ'
    source_link: /display/USERDOC60/Nuxeo+OpenSocial
history:
    - 
        author: Solen Guitter
        date: '2016-01-18 13:47'
        message: ''
        version: '10'
    - 
        author: Anonymous
        date: '2014-12-02 14:42'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:43'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:26'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:26'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:26'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:25'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:25'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2014-10-28 17:32'
        message: ''
        version: '2'
    - 
        author: Alain Escaffre
        date: '2014-10-07 17:57'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='NXDOC60:Generic Multi-Excerpts'}}}

{{! excerpt}}

[Nuxeo OpenSocial](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-opensocial) is an add-on that brings [OpenSocial containers](http://opensocial.org/) to the Nuxeo Platform. It adds a customizable dashboard to end-users and activity charts to administrators.

{{! /excerpt}}

When you install Nuxeo OpenSocial, the dashboard is automatically replaced by the OpenSocial dashboard. By default you can keep the same gadgets, but you can now customize what is displayed on your dashboard.

![]({{file name='DM-dashboard.png'}} ?w=600,h=318,border=true)

## Customizing Your Dashboard

When you customize your dashboard, you can change the layout of the page, but you can also add, remove and edit the widgets displayed.

### Changing the Dashboard Layout

**To change your dashboard's layout:**

1.  From your dashboard, click on **Layout**.
    The layout window pops up.
    ![]({{file name='DM-dashboard_layout.png'}} ?w=200,border=true,thumbnail=true)
2.  Determine the layout of your dashboard by adding or removing rows and selecting the columns proportions inside each row.
3.  Click on **Close**.
    The chosen layout is immediately applied.
    Now you can reorganize your widgets in this layout.

### Organizing Your Widgets

You can organize widgets the way you want in the applied layout. You can thus move widgets from a place to another (in another column, at the bottom or the top of the page, etc).

To move widgets, drag and drop them from a place to another.
![]({{file name='DM-dashboard_moving_gadgets.png'}} ?w=650,border=true)

{{#> callout type='tip' heading='Drag and Drop extension'}}

You don't need to install [Nuxeo's Drag and Drop extension]({{page page='working-using-drag-and-drop'}}) to move widgets.

{{/callout}}

### Adding and Removing Widgets

You can choose the widgets that are displayed on your dashboard.

**To add a widget:**

1.  Click on the **Add gadget** button.
    The "Available gadgets" window pops up.
    ![]({{file name='DM-dashboard_add_gadget.png'}} ?w=650,border=true)
2.  Click on the gadget you want to display on your dashboard.
    The gadget is immediately added on the first available slot of your dashboard.
3.  Move the widget in the dashboard at the place you want it to be displayed.

**To remove a widget from your dashboard:**

1.  Click on the icon&nbsp;![]({{file name='delete.png' page='icons-index'}}) of the widget you want to delete from your dashboard.
2.  On the window that pops up, click **OK** to delete the widget.
    The widget is removed from your dashboard.

### Editing Widgets

At any time, you can edit widgets. You can change their title or colors to change the look of your dashboard.

**To edit a widget:**

1.  Click on the icon ![]({{file name='DM-dashboard-widget-edit-icon.png' page='icons-index'}}).
2.  In the window displayed, change the widget's parameters.
    ![]({{file name='DM-gadget_edit.png'}} ?w=300,border=true)
3.  Click on **Save**.

You can also edit the settings of some Nuxeo's gadgets to indicate if the gadget should display documents from a specific domain of the application. By default, the search is done on the default domain. This setting is available on the following gadgets:

*   My workspaces,
*   Last modified documents,
*   last published documents,
*   my deleted documents.

**To change the domain setting:**

1.  On the gadget, click on the **Settings** button displayed on the top right corner of the gadget.
    A "Content path" drop down list is displayed on the left of the "Setting" button.
2.  Select the domain to which you want to restrain the search.
    ![]({{file name='DM-dashboard_gadget_setting.png'}} ?w=350,border=true)
3.  Click on the **Save** button.
    The content of your gadget is refreshed according to your selection.

&nbsp;

* * *