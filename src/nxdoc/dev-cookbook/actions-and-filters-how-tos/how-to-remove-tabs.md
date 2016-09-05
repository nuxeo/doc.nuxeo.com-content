---
title: How to Remove Tabs
confluence:
    ajs-parent-page-id: '18449899'
    ajs-parent-page-title: Actions and Filters How-tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Remove+Tabs
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+Remove+Tabs'
    page_id: '18449910'
    shortlink: 9oUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/9oUZAQ'
    source_link: /display/NXDOC58/How+to+Remove+Tabs
history:
    - 
        author: Solen Guitter
        date: '2016-09-02 07:43'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:42'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

TODO: need to update given examples as of 5.8 (at least)

{{/callout}}{{! excerpt}}

In Nuxeo, tabs are actions. Actions are associated with categories. For instance the top links belong to the&nbsp;`USER_SERVICES`&nbsp;category. The document tabs are associated with the&nbsp;`VIEW_ACTION_LIST`&nbsp;category.

{{! /excerpt}}

*   To remove a tab you first need to find which action is used to show the tab, finding first the category, then the tab (For the `VIEW_ACTION_LIST` tabs, it is also shown in the URL as tabId).
*   then to remove it, you need to provide a contribution that lists the tab where you can disable it.

For example, if I want to remove the workflow tab:

*   click on the workflow tab (in the default Nuxeo DM distribution you can see it in document types like File or Note). If you look at the URL you will see the following parameter `tabId=TAB_CONTENT_JBPM`, and so the `TAB_CONTENT_JBPM` will be the action name that you want to remove
*   search the source which should result in you finding out that the `org.nuxeo.ecm.platform.jbpm.web.actions` component provides this action in the (nuxeo-platform-jbpm-web jar).

Now, to override it you can use the following contribution:

```
<component name="org.nuxeo.ecm.platform.actionsContrib">

  <require>org.nuxeo.ecm.platform.jbpm.web.actions</require>
  <extension target="org.nuxeo.ecm.platform.actions.ActionService"
    point="actions">

    <action id="TAB_CONTENT_JBPM" link="/incl/tabs/document_process.xhtml"
      enabled="false" label="action.view.review" icon="/icons/file.gif"
      order="60"/>
  </extension>

</component>

```

Note the `enable="false"` entry above.

Now it is enough to create a `actions-config.xml` file in `<NUXEO_SERVER>/nxserver/config` with this contribution and ... the workflow tab should not be showing anymore.

&nbsp;