---
title: 'HOWTO: Hide a Tab, a Link or a Button for a Group or a User - JSF UI'
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to hide an action for a group or a user.
        level: Advanced
        tool: Code editor
        topics: 'Filter, User action, JSF UI'
labels:
    - content-review-lts2016
    - howto
    - action
    - atchertchian
    - filter
    - actions-filters-component
    - excerpt
    - content-review-lts2017
    - jsf-ui
toc: true
confluence:
    ajs-parent-page-id: '19235610'
    ajs-parent-page-title: Action How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: 'How+to+Hide+a+Tab%2C+a+Link+or+a+Button+for+a+Group+or+a+User'
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Hide+a+Tab%2C+a+Link+or+a+Button+for+a+Group+or+a+User'
    page_id: '20518040'
    shortlink: mBQ5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/mBQ5AQ'
    source_link: '/display/NXDOC/How+to+Hide+a+Tab%2C+a+Link+or+a+Button+for+a+Group+or+a+User'
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-09-05 10:02'
        message: pdate how-to topic
        version: '18'
    -
        author: Manon Lumeau
        date: '2015-10-15 13:59'
        message: ''
        version: '17'
    -
        author: Anahide Tchertchian
        date: '2015-10-13 13:03'
        message: ''
        version: '16'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:30'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:15'
        message: ''
        version: '14'
    -
        author: Anahide Tchertchian
        date: '2014-12-08 18:46'
        message: add link to action filters configuration
        version: '13'
    -
        author: Solen Guitter
        date: '2014-12-01 21:44'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2014-12-01 12:12'
        message: ''
        version: '11'
    -
        author: Anne Jubert
        date: '2014-11-24 16:22'
        message: ''
        version: '10'
    -
        author: Thierry Martins
        date: '2014-11-07 17:01'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-11-07 16:34'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-07 16:33'
        message: ''
        version: '7'
    -
        author: Gildas Lefevre
        date: '2014-11-06 17:22'
        message: "NXDOC-441: Add a link to the 'how to' for activate the dev mode"
        version: '6'
    -
        author: Gildas Lefevre
        date: '2014-11-06 16:51'
        message: 'NXDOC-441: Update layout of the page'
        version: '5'
    -
        author: Gildas Lefevre
        date: '2014-11-06 16:02'
        message: ''
        version: '4'
    -
        author: Gildas Lefevre
        date: '2014-11-06 12:50'
        message: 'NXDOC-441: Add the Studio contribution'
        version: '3'
    -
        author: Solen Guitter
        date: '2014-11-06 09:34'
        message: 'Format, add links'
        version: '2'
    -
        author: Gildas Lefevre
        date: '2014-11-05 18:22'
        message: ''
        version: '1'

---
{{{multiexcerpt 'JSF-UI-required' page='generic-multi-excerpts'}}}

# Hiding an Action

<u>Goal</u>: hide the "`New`" button to all member of a group named `Group1`.

If you are looking for another button or link, you can find all the contributions extending the service `org.nuxeo.ecm.platform.actions.ActionService` for the point `actions` in the [Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--actions).

In this example, you will define a filter for the action "`New`", which should be hidden for members of a group `Group1`. The id of this action is `newDocument`.

1.  The first thing you must do is to get the id of the action you would like to hide.The easiest way to do this is to activate the development mode in the UI. To get the information of an element in the UI, keep the 'shift' key pressed and mouse over the element you are looking for. A panel will display the information at the bottom of the page. The process to activate this mode is described here: [How to Activate UI Development Mode]({{page page='how-to-activate-ui-development-mode'}})
    Get the id of the action "New"
    ![]({{file name='uidevmode.png'}} ?w=600,border=true)
2.  Add a contribution in your Studio project to create a filter for the action we would like to hide. This contribution extends the service `org.nuxeo.ecm.platform.actions.ActionService` for the point `actions`. Create also the filter `denyForGroup1`: In the same contribution, you have to extend the service `org.nuxeo.ecm.platform.actions.ActionService` for the point `filters`. Please refer to the section about [Filters and Access Controls]({{page page='filters-and-access-controls'}}).

    If you are not familiar with the contribution of an extension in Studio, please read this documentation: [How to Contribute to an Extension]({{page space='NXDOC' page='How to+Contribute+to+an+Extension#HowtoContributetoanExtension-ContributingUsingNuxeoStudio'}}).

    {{#> panel type='code' heading='src/main/resources/OSGI-INF/actions-contribution.xml'}}

    ```xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
      point="actions">
      <action id="newDocument">
        <filter-id>denyForGroup1</filter-id>
      </action>
    </extension>

    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
      point="filters">
      <filter id="denyForGroup1">
        <rule grant="false">
          <group>Group1</group>
        </rule>
      </filter>
    </extension>
    ```

    {{/panel}}
3.  If you want to completely remove the action, the contribution is slightly different. You must add the parameter `enabled="false"` when defining the action.

    {{#> panel type='code' heading='src/main/resources/OSGI-INF/actions-contribution.xml'}}

    ```xml
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
      point="actions">
      <action id="newDocument" enabled="false" />
    </extension>
    ```

    {{/panel}}

In this example, the name of the group to be excluded was hardcoded. It is also possible to create a method which returns a list of group names to exclude.

Find more information related to Actions and filters in the [documentation]({{page page='actions-links-buttons-icons-tabs-and-more'}}) and details for the extension point in the [Explorer](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--filters).

# Disabling Tabs on Your Document Type Using Nuxeo Studio

When you [define new document types]({{page page='how-to-define-a-document-type'}}), you can customize the tabs that are presented. On documents like notes or files, you can disable the tabs inherited from the extended Nuxeo document type using Studio.

This can be done on any document type, folderish or not.

**To disable tabs on your document type, in Studio:**

1.  On your document type definition, click on the **Tabs** tab.
2.  Check the tabs that you don't want to be displayed for your document (ex: Comment, History, Preview,...).
3.  Click on **Save** so your changes are kept.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}})
*   [How to Add a Button in the JSF UI]({{page page='how-to-add-a-button-in-the-jsf-ui'}})
*   [How to Make the New Button Appear on a Custom Folderish Document]({{page page='how-to-make-the-new-button-appear-on-a-custom-folderish-document'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Actions Overview]({{page page='actions-overview'}})
*   [Filters and Access Controls]({{page page='filters-and-access-controls'}})
*   [Standard Action Types]({{page page='standard-action-types'}})
*   [User actions categories]({{page space='studio' page='user-actions-categories'}})

{{/panel}}</div></div>
