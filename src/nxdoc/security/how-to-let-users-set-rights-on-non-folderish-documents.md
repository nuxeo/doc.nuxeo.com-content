---
title: How to Let Users Set Rights on Non Folderish Documents
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to enable users to set rights on non folderish document by
            overwriting the&nbsp;TAB_RIGTS&nbsp;action contribution to use a
            filter that doesn't filter on&nbsp;Folderish&nbsp;facet.
        level: Intermediate
        tool: XML extension
        topics: Access rights
labels:
    - howto
    - action
    - todo
    - user-action
confluence:
    ajs-parent-page-id: '22380780'
    ajs-parent-page-title: Security
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: How+to+Let+Users+Set+Rights+on+Non+Folderish+Documents
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC60/How+to+Let+Users+Set+Rights+on+Non+Folderish+Documents
    page_id: '22380676'
    shortlink: hIBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/hIBVAQ'
    source_link: /display/NXDOC60/How+to+Let+Users+Set+Rights+on+Non+Folderish+Documents
tree_item_index: 400
history:
    -
        author: Solen Guitter
        date: '2016-09-01 09:30'
        message: ''
        version: '27'
    -
        author: Solen Guitter
        date: '2014-12-01 22:06'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2014-09-19 12:33'
        message: ''
        version: '25'
    -
        author: Anahide Tchertchian
        date: '2014-05-14 11:05'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2014-01-23 18:38'
        message: ''
        version: '23'
    -
        author: Solen Guitter
        date: '2014-01-23 18:38'
        message: ''
        version: '22'
    -
        author: Anahide Tchertchian
        date: '2013-12-17 17:26'
        message: add WIP warn
        version: '21'
    -
        author: Stéfane Fermigier
        date: '2010-12-04 11:35'
        message: ''
        version: '20'
    -
        author: Stéfane Fermigier
        date: '2010-12-04 11:35'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 17:02'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:28'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:16'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:15'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:02'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:24'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:01'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

TODO: need to update given examples as of 5.8 (at least)

{{/callout}}

&nbsp;

User uses tabs to interact with document. One of this tab, is the "Access Rights" tab, uner the "Manage" tab. This tab appears, by default, only for folderish document.

The Access rights tab is defined in `actions-contrib.xml` in `nuxeo-platform-webapp-core`:

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
