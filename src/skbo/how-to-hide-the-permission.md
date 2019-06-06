---
title: How to hide the Permissions tab to users
description: How to hide the Permissions tab to users
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - jsf
    - permissions
    - users

---
# How to hide the Permissions tab to users?
## Problem
Since Nuxeo 7.10, the “Permissions” tab is available in the users display, and you want to remove this view.
## Solution
The “*Permissions*” tab is displayed through a contribution you can retrieve at:
<http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform%20LTS%202017-9.10/viewExtensionPoint/org.nuxeo.ecm.platform.actions.ActionService--actions>

If having another way to set permissions, you can simply disable the tab in the following way:

    <require>org.nuxeo.ecm.platform.actions</require>
    <extension point="actions" target="org.nuxeo.ecm.platform.actions.ActionService">
        <action icon="/icons/file.gif" id="TAB_PERMISSIONS" label="action.view.permissions" link="/permissions/document_permissions.xhtml" enabled="false">
          <category>VIEW_ACTION_LIST</category>
        </action>
    </extension>

In case you want to reserve the tab to administrators:

    <require>org.nuxeo.ecm.platform.actions</require>
    <extension point="actions" target="org.nuxeo.ecm.platform.actions.ActionService">
        <action icon="/icons/file.gif" id="TAB_PERMISSIONS" label="action.view.permissions" link="/permissions/document_permissions.xhtml" order="50">
          <category>VIEW_ACTION_LIST</category>
          <filter-id>only_for_manager</filter-id>
          <properties>
            <!-- NXP-18320: disable ajax support on Polymer tabs -->
            <property name="ajaxSupport">false</property>
          </properties>
        </action>
    </extension>

You can add these contributions in Studio in **Advanced Settings > XML Extensions**


2019-06-01T17:38:03.631Z
## (c) Nuxeo Support Knowledge Base Outline 2019
