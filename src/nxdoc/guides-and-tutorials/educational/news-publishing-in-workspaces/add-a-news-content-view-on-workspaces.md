---
title: Add a News content view on workspaces
review:
    comment: ''
    date: ''
    status: ok
labels:
    - tuto-override-doc-type
    - tuto-document-type
    - workspace
    - tuto-content-view
confluence:
    ajs-parent-page-id: '22380594'
    ajs-parent-page-title: News publishing in workspaces
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Add+a+News+content+view+on+workspaces
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/Add+a+News+content+view+on+workspaces
    page_id: '22380656'
    shortlink: cIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/cIBVAQ'
    source_link: /display/NXDOC60/Add+a+News+content+view+on+workspaces
tree_item_index: 200
history:
    -
        author: Alain Escaffre
        date: '2014-05-06 00:54'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2011-01-28 16:38'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2011-01-28 16:38'
        message: added tip on widget style
        version: '4'
    -
        author: Solen Guitter
        date: '2011-01-28 16:31'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2011-01-28 16:26'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2011-01-28 16:19'
        message: ''
        version: '1'
previous_link: nxdoc/implement-the-news-document
next_link: nxdoc/implement-the-news-publishing-process

---
In the section, we will:

*   prepare a new tab for workspaces,
*   override the default Workspace document type to customize it with the newly created tab.

{{#> callout type='info' }}

For this section, it is recommended to take a look at the how-tos for a step-by-step approach:

*   [Define a new content view]({{page page='how-to-define-a-new-content-view'}}),
*   [How to Define a Document Type]({{page page='how-to-define-a-document-type'}}).

{{/callout}}

## Create a new content view for workspaces

1.  Create a new content view called `NewsTab`.
2.  Give it the following query filter:
    `ecm:isVersion = 0 AND ecm:currentLifeCycleState = 'approved' AND ecm:primaryType = 'News' AND ecm:path STARTSWITH ?`
    and add the query parameter: `#{currentDocument.path`}
3.  In the **Results** tab, configure a table with 1 column and 2 two rows. First row is for the title (`dc:title`, with a text widget), second row is for the content (`news:body`, with an HTML widget).

    {{#> callout type='tip' heading='Style your widget'}}

    Don't hesitate to give CSS attributes to the text widget to customize its look.
    Here is an example of values you can type in the **Style** text box: `color:#4e9ae1;text-decoration:underline;font-weight:bolder;font-size:large;margin:15px 15px 15px 15px`

    {{/callout}}

The view is done. Now we need to apply it to the Workspace document type. To do this, we need to override the default Workspace document type.

## Override the "Workspace" document type

1.  Create a new document type:
    *   featureID : `Workspace`
    *   Extends: Folder
2.  In the **Definition** tab:
    *   Accepted Children Type = add Folder, Workspace, Note, File, OrderedFolder.
    *   Show Create Child Action: checked.
3.  In **Tabs** > **Content Views** tab: add a new tab configuration called `News` that uses the `NewsTab` content view and has order 1.
4.  Edit the layouts to remove the default Studio warning.
