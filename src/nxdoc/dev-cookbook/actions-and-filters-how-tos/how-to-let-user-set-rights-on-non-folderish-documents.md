---
title: How to Let User Set Rights on Non Folderish Documents
confluence:
    ajs-parent-page-id: '18449899'
    ajs-parent-page-title: Actions and Filters How-tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Let+User+Set+Rights+on+Non+Folderish+Documents
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC58/How+to+Let+User+Set+Rights+on+Non+Folderish+Documents
    page_id: '18449905'
    shortlink: 8YUZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/8YUZAQ'
    source_link: /display/NXDOC58/How+to+Let+User+Set+Rights+on+Non+Folderish+Documents
history:
    - 
        author: Solen Guitter
        date: '2016-09-01 16:14'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2014-01-23 18:39'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

TODO: need to update given examples as of 5.8 (at least)

{{/callout}}

&nbsp;

User uses tabs to interact with document. One of this tab, is the "Access Rights" tab, uner the "Manage" tab. This tab appears, by default, only for folderish document.

It is defined in `actions-contrib.xml` in `nuxeo-platform-webapp-core`:

```
<action id="TAB_RIGHTS" link="/incl/tabs/document_rights.xhtml" order="50"
  label="action.view.rights" icon="/icons/file.gif">
    <category>TAB_MANAGE_sub_tab</category>
    <filter-id>rights</filter-id>
</action>

```

and the definition of the filter is:

```
<filter id="rights">
  <rule grant="true">
    <permission>WriteSecurity</permission>
    <facet>Folderish</facet>
  </rule>
</filter>

```

{{! excerpt}}

If you want the user to be able to set rights on non folderish document, you need to overwrite the&nbsp;`TAB_RIGTS`&nbsp;action contribution to use a filter that doesn't filter on&nbsp;`Folderish`&nbsp;facet.

{{! /excerpt}}

You need to create a contribution referenced in your plugin's `MANIFEST.MF` or you can add a file in `nuxeo.ear/config` folder.

An example contribution follow, you can copy it in a `actions-config.xml` file and put this file in `nuxeo.ear/config` to test:

```
<component name="com.myexample.actions.contrib">
  <!-- We want the original contribution to be read first so we can overwrite it-->
  <require>org.nuxeo.ecm.platform.actions</require>

  <extension target="org.nuxeo.ecm.platform.actions.ActionService"
    point="actions">
    <!-- remove the TAB_RIGHTS tab -->
    <action id="TAB_RIGHTS" enabled="false" />
    <!-- Our new contribution, we are not using the same filter -->
    <action id="FOLDERISH_TAB_RIGHTS" link="/incl/tabs/document_rights.xhtml" order="50"
      label="action.view.rights" icon="/icons/file.gif">
      <category>TAB_MANAGE_sub_tab</category>
      <filter-id>non-folderish-rights</filter-id>
    </action>

  </extension>

  <extension target="org.nuxeo.ecm.platform.actions.ActionService"
    point="filters">

    <!-- Our new filter, not filtering on Folderish facet-->
    <filter id="non-folderish-rights">
      <rule grant="true">
        <permission>WriteSecurity</permission>
      </rule>
    </filter>

  </extension>

</component>

```