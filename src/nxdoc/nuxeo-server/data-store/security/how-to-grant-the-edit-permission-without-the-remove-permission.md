---
title: 'HOWTO: Grant the Edit Permission without the Remove Permission'
description: Learn how to override the default Edit permission so it does not include Remove by default, and set a new ReadWriteAndRemove permission.
review:
    comment: ''
    date: '2019-11-28'
    status: ok
details:
    howto:
        excerpt: 'Learn how to override the default Edit permission so it does not include Remove by default, and set a new ReadWriteAndRemove permission.'
        level: Intermediate
        tool: XML Extension
        topics: Permissions
labels:
    - lts2016-ok
    - howto
    - link-update
    - permission
    - fguillaume
    - lts2017-ok
confluence:
    ajs-parent-page-id: '20515363'
    ajs-parent-page-title: Security
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Grant+the+Edit+Permission+without+the+Remove+Permission
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Grant+the+Edit+Permission+without+the+Remove+Permission'
    page_id: '24052147'
    shortlink: swFvAQ
    shortlink_source: 'https://doc.nuxeo.com/x/swFvAQ'
    source_link: /display/NXDOC/How+to+Grant+the+Edit+Permission+without+the+Remove+Permission
toc: true
tree_item_index: 400
---

As described on the page [Managing Permissions]({{page space='userdoc' page='permissions'}}), the **Edit** permission, visible in the UI, contains the permission to remove content (`Remove`).</br>
It means that you cannot grant the **Edit** permission (`Write`) without the `Remove` permission at the same time.

So if you want to be able to grand the **Edit** permission without the `Remove` one, you need to override the [default `ReadWrite` permission](https://explorer.nuxeo.com/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.core.security.defaultPermissions--permissions).

We will do that in two steps:
- First, override the default **Edit** permission to remove the `Remove` permission.
- Then, create a new permission `ReadWriteAndRemove` (equivalent to the default **Edit** permission overridden above).

## Override the Edit Permission

1.  [Add a new contribution]({{page page='how-to-contribute-to-an-extension'}}) to remove the `Remove` permission from `Write` permission.</br>
Check the [Nuxeo Explorer](https://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202019-10.10/viewExtensionPoint/org.nuxeo.ecm.core.security.SecurityService--permissions) page to update the suitable extension point.

  ```xml
  <extension target="org.nuxeo.ecm.core.security.SecurityService"
    point="permissions">
    <permission name="Write">
      <remove>Remove</remove>
    </permission>
  </extension>
  ```

This change will make the permission `ReadWrite`, displayed under the permission label "Edit" in the UI, act as wanted: it no longer includes the right to remove content.

## Create a New Permission

If you want users to be able to add and remove content, you must now grant them the `Write` permission and `Remove` permission. Or you can add a new permission that will behave like the default `ReadWrite` permission used to.

1.  Define a new global permission to read, edit and remove content.

    ```
      <extension target="org.nuxeo.ecm.core.security.SecurityService"
        point="permissions">
       <permission name="ReadWriteAndRemove">
            <include>Read</include>
            <include>Write</include>
            <include>Remove</include>
        </permission>
      </extension>
    ```

1.  Make the new `ReadWriteAndRemove` permission visible in the drop down list in the UI. </br>
Check the [Nuxeo Explorer](https://explorer.nuxeo.com/nuxeo/site/distribution/10.10/viewExtensionPoint/org.nuxeo.ecm.core.security.SecurityService--permissionsVisibility) page to see how to register permission visibility in user interface.

    ```
    <extension point="permissionsVisibility" target="org.nuxeo.ecm.core.security.SecurityService">
        <visibility>
          <item order="10" show="true">Read</item>
          <item denyPermission="Write" order="50" show="true">ReadWrite</item>
          <item denyPermission="Write" order="55" show="true">ReadWriteAndRemove</item>
          <item denyPermission="Remove" order="60" show="true">ReadRemove</item>
          <item order="100" show="true">Everything</item>
        </visibility>
      </extension>
    ```

1.  [Deploy your customizations]({{page version='' space='nxdoc' page='nuxeo-dev-tools-extension'}}#hot-reload).

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/HOWTO: Grant the Edit Permission without the Remove Permission/ReadWriteAndRemove_permission_UI.png
    name: readwriteandremove-permission-ui.png
    1.1.3#screenshot#up_to_date
--}}
![readwriteandremove-permission-ui.png](nx_asset://5648e7f2-0ccf-4680-af6b-f4ba352ec9e3 ?w=350,border=true)

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Managing Permissions]({{page space='userdoc' page='permissions'}})
- [HOWTO: Upload Labels Translations in Nuxeo Studio (i18n)]({{page page='how-to-upload-labels-translations-in-nuxeo-studio-i18n'}})
- [HOWTO: Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}})
- [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">
&nbsp;
</div></div>
