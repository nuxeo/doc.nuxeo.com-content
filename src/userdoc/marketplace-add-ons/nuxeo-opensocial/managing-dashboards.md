---
title: Managing Dashboards
review:
    comment: ''
    date: ''
    status: ok
labels:
    - opensocial
    - dashboard
toc: true
confluence:
    ajs-parent-page-id: '21299424'
    ajs-parent-page-title: Nuxeo OpenSocial
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Managing+Dashboards
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Managing+Dashboards'
    page_id: '21299453'
    shortlink: '-QBFAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-QBFAQ'
    source_link: /display/USERDOC60/Managing+Dashboards
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 13:10'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2016-01-18 13:48'
        message: ''
        version: '22'
    - 
        author: Manon Lumeau
        date: '2014-12-05 18:05'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-11-04 00:58'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:42'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-10-28 18:24'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-10-28 17:25'
        message: ''
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-11-26 22:08'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-11-04 23:41'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-11-04 23:25'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-10-22 18:53'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2012-12-03 18:11'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2012-10-16 15:37'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2012-01-26 16:01'
        message: Migrated to Confluence 4.0
        version: '10'
    - 
        author: Solen Guitter
        date: '2012-01-26 16:01'
        message: Updated screenshots
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-11-24 11:22'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-11-23 10:00'
        message: Added toc
        version: '7'
    - 
        author: Solen Guitter
        date: '2011-11-22 15:43'
        message: Added toc
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-06-06 15:40'
        message: added screenshots
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-05-27 22:59'
        message: added missing property descriptions
        version: '4'
    - 
        author: Solen Guitter
        date: '2011-05-27 18:11'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2011-05-27 17:51'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2011-05-24 17:23'
        message: ''
        version: '1'

---
{{{multiexcerpt 'DeprecatedAddOn_6.0' page='NXDOC60:Generic Multi-Excerpts'}}}

The administrators of a Nuxeo application can set up the dashboards that will be displayed to users. On a default Nuxeo instance, administrators can:

*   define the default user dashboard, which is the dashboard displayed to authenticated users by default and which they can [ customize;]({{page page='nuxeo-opensocial#dashboard-customization'}})
*   add external gadgets that users will be able to display on their dashboard by [customizing it]({{page page='nuxeo-opensocial#customizing-your-dashboard'}}) .

{{#> callout type='tip' }}

When [anonymous access to the Nuxeo Platform is enabled]({{page space='nxdoc60' page='how-to-define-public-pages-viewable-by-anonymous-users'}}), administrators can define the anonymous dashboard, which is the dashboard displayed to users that are not logged in. The configuration of the anonymous dashboard works exactly [like the default user dashboard](#define-the-default-user-dashboard).

{{/callout}}

## Defining the Default User Dashboard

The user default dashboard is used to generate the user's dashboard the first time the user logs in, and when the user clicks on the "Restore default" button on his dashboard. Both administrators and power users can define this default dashboard.

The Nuxeo Platform includes a dashboard that is proposed as the default user dashboard. You can edit this default user dashboard to make it adapted to your organization and users. Editing the default user dashboard works the same way users can edit their dashboard. You can:

*   [Change the dashboard layout]({{page page='nuxeo-opensocial#changing-the-dashboard-layout'}})
*   [Add or remove gadgets]({{page page='nuxeo-opensocial#adding-and-removing-widgets'}})&nbsp;
*   [Edit widgets]({{page page='nuxeo-opensocial#editing-widgets'}})&nbsp;

![]({{file name='Admin-Center-dashboards.png' space='nxdoc60' page='nuxeo-opensocial'}} ?w=600,border=true)

## <span style="color: rgb(0,0,0);">Managing External Gadgets</span>

As an administrator, you can add and manage gadgets from other applications or websites so that they are available for users when they click on the "Add gadget" button.

### Adding External Gadgets

**To add an external gadget:**

1.  On the website which provides the external gadget, copy the gadget's URL.
2.  Log in to Nuxeo.
3.  In the Admin Center, click on the **Dashboards** tab.
4.  Click on the **External gadgets** tab.
    The **Add** link is displayed.
    If you already added some external gadgets, the list of configured gadgets is displayed.
5.  Click on the **Add** link
    The form to add a gadget is displayed.
6.  Fill in the form (see below for gadget parameters).
7.  Click on the **Create** button.
    The new gadget and its properties is displayed in a table.
    ![]({{file name='DM-external_gadgets.png'}} ?w=650,border=true)
    When users click on the **Add gadget** button, the new gadget is available in the gadget list.
    ![]({{file name='webex-selection-gadget.png'}} ?w=450,border=true)

**External gadget properties**

<table><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Name

</td><td colspan="1">

The technical name of the gadget, that can used by the administrator.

</td></tr><tr><td colspan="1">

Label

</td><td colspan="1">

Title of the gadget displayed in its title bar when it's used on the dashboard.

</td></tr><tr><td colspan="1">

Enabled

</td><td colspan="1">

Select if your gadget should be displayed in the list of gadgets.

</td></tr><tr><td colspan="1">

Category

</td><td colspan="1">

Category in which the gadget will be available. You can either type the name of an existing category or type the name of a new category. Default categories are: Nuxeo, Media, Monitoring, Utilities, Collaborative.

</td></tr><tr><td colspan="1">

Gadget URL

</td><td colspan="1">

Type the URL of the widget

</td></tr><tr><td colspan="1">

Icon URL

</td><td colspan="1">

URL of the icon to be displayed on the gadget selection pop up if the external gadget has no icon provided by default.

</td></tr></tbody></table>

### Modifying an External Gadget

You can edit the external gadgets you have added at any time. Editing an gadget means changing its properties (for instance updating it).

**To edit an external gadget:**

1.  In the Admin Center, click on the **Dashboards** tab.
2.  Click on the **External gadgets** tab.
    The list of available gadgets is displayed.
    ![]({{file name='DM-external_gadgets.png'}} ?w=650,border=true)
3.  Click on the **Modify** button of the widget to edit.
    The gadget edit form is displayed.
4.  Modify the properties you want to change.
5.  Click on the **Save** button.

### Deleting an External Gadget

When you delete an external gadget, it is **not** removed from the dashboard of the users who already added it.

**To delete an external gadget:**

1.  In the Admin Center, click on the **Dashboards** tab.
2.  Click on the **External gadgets** tab.
    The list of available gadgets is displayed.
    ![]({{file name='DM-external_gadgets.png'}} ?w=650,border=true)
3.  Click on the **Delete** button of the gadget to remove.
    A confirmation window pops up.
4.  Click on **OK** to confirm gadget deletion.
    The gadget is deleted and is not in the gadget list anymore. However it is still displayed on the dashboard of users who added it to their dashboard.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Other Dashboard Related Pages'}}

*   [Nuxeo OpenSocial]({{page page='nuxeo-opensocial'}})
*   [Social Workspaces Overview]({{page page='social-workspaces-overview'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other OpenSocial Pages'}}

*   [Nuxeo OpenSocial developer documentation]({{page space='nxdoc60' page='nuxeo-opensocial'}})
*   [OpenSocial and the Nuxeo Platform]({{page space='nxdoc60' page='opensocial-and-the-nuxeo-platform'}})

{{/panel}}</div></div>