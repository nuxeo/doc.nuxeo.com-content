---
title: Implement the News "publishing" process
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-automation
    - tuto-user-action
    - tuto-permission
confluence:
    ajs-parent-page-id: '22380594'
    ajs-parent-page-title: News publishing in workspaces
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: viewpage.action?pageId=22380658
    canonical_source: viewpage.action?pageId=22380658
    page_id: '22380658'
    shortlink: coBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/coBVAQ'
    source_link: /pages/viewpage.action?pageId=22380658
tree_item_index: 300
history:
    -
        author: Alain Escaffre
        date: '2014-05-06 00:55'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2011-01-28 16:32'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-01-28 16:32'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-01-28 11:54'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2011-01-28 11:50'
        message: ''
        version: '3'
    -
        author: Alain Escaffre
        date: '2011-01-27 00:30'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2011-01-27 00:27'
        message: ''
        version: '1'
previous_link: nxdoc/add-a-news-content-view-on-workspaces

---
In this section, we will:

*   create the `NewsManagement` permission that will be given to user we want to be able to publish news,
*   create a "Publish news" button that will be available in the folder to enable bulk publishing.

{{#> callout type='info' }}

For this section, it is recommended to take a look at the[ Use Content Automation]({{page page='how-to-create-an-automation-chain'}}) how-to for a step-by-step approach.

{{/callout}}

## Create the NewsManagement permission

1.  In the **Roles and Permissions** menu item, right-click on **Permission** and click **New Permission**.
2.  Give the new permission the ID `NewsManagement`.
3.  In the drop down list, select "Workspace" and click the **Add** button.

The new permission will now be available in the list of permissions on Workspace.

## Create the "Publish News" button

1.  Create a new User Action called "PublishNewsButton". Its properties are:
    *   Current user has permission: `NewsManagement`,
    *   Current document has type: `Folder`,
    *   Selection is not empty: checked.
2.  Create the operation chain `PublishNewsChain`:

    <div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

    Step

    </th><th colspan="1">

    Operation

    </th><th colspan="1">

    Parameter 1

    </th><th colspan="1">

    Parameter 2

    </th></tr><tr><td colspan="1">

    1

    </td><td colspan="1">

    Fetch > UI Selected documents

    </td><td colspan="1">

    &nbsp;

    </td><td colspan="1">

    &nbsp;

    </td></tr><tr><td colspan="1">

    2

    </td><td colspan="1">

    Document > Filter List

    </td><td colspan="1">

    lifecycle: `project`

    </td><td colspan="1">

    &nbsp;

    </td></tr><tr><td colspan="1">

    3

    </td><td colspan="1">

    Document > Follow Life Cycle Transition

    </td><td colspan="1">

    value: `approve`

    </td><td colspan="1">

    &nbsp;

    </td></tr><tr><td colspan="1">

    4

    </td><td colspan="1">

    Document > Update Property

    </td><td colspan="1">

    value: `@{CurrentDate.date`}

    </td><td colspan="1">

    xpath: `dc:valid`

    </td></tr></tbody></table></div>
