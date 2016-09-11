---
title: Dashboard
review:
    comment: ''
    date: ''
    status: ok
labels:
    - dashboard
toc: true
confluence:
    ajs-parent-page-id: '16092624'
    ajs-parent-page-title: Browsing Content in Document Management
    ajs-space-key: USERDOC58
    ajs-space-name: Nuxeo Platform User Documentation - 5.8
    canonical: Dashboard
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC58/Dashboard'
    page_id: '16092562'
    shortlink: ko31
    shortlink_source: 'https://doc.nuxeo.com/x/ko31'
    source_link: /display/USERDOC58/Dashboard
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 08:10'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-08-28 08:13'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-10-17 16:33'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-09-30 16:08'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-06-24 21:44'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-05-27 10:56'
        message: Added note about Google Chrome Frame
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:30'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-02-06 17:29'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2012-06-18 18:20'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Solen Guitter
        date: '2012-06-18 18:20'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2012-06-18 15:25'
        message: ''
        version: '1'

---
&nbsp;

## Dashboard Access

To access your dashboard, click on the **Home** main tab. Your dashboard is the default tab of your Home.
_Naked Nuxeo Platform (CAP) dashboard:_
![]({{file name='CAP-dashboard.png'}} ?w=650,border=true)
_Document Management module dashboard:_
![]({{file name='DM-dashboard.png'}} ?w=650,border=true)

## Customizing Your Dashboard {{> anchor 'dashboard-customization'}}

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

1.  Click on the icon ![]({{file name='DM-dashboard-widget-remove-icon.png'}}) of the widget you want to delete from your dashboard.
2.  On the window that pops up, click **OK** to delete the widget.
    The widget is removed from your dashboard.

### Editing Widgets

At any time, you can edit widgets. You can change their title or colors to change the look of your dashboard.

**To edit a widget:**

1.  Click on the icon ![]({{file name='DM-dashboard-widget-edit-icon.png'}}).
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

    &nbsp;

3.  Click on the **Save** button.
    The content of your gadget is refreshed according to your selection.

&nbsp;