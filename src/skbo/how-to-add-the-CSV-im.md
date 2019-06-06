---
title: How to add the CSV import button on a selection of document types
description: How to add the CSV import button on a selection of document types
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - jsf-jsfdevelopment
    - configuration
    - import
    - jsf

---
# How to add the CSV import button on a selection of document types?
## Problem
You want to let the import button active, but only on some document types and not others
## Solution
The following contribution will forbid the button on some default document types and allow it on some custom document types

    <require>org.nuxeo.ecm.platform.actions</require>
    <extension target="org.nuxeo.ecm.platform.actions.ActionService"
               point="filters">
      <filter id="importFile" append="true">
        <!—-forbids CSV import on Workspace and Folder -->
        <rule grant="false">
          <permission>AddChildren</permission>
          <type>Workspace</type>
          <type>Folder</type>
        </rule>
        <!-—enables CSV import on the following 2 custom types -->
        <rule grant="true">
          <permission>AddChildren</permission>
          <type>Dossier1</type>
          <type>Dossier2</type>
        </rule>
      </filter>
    </extension>


2019-06-01T17:37:43.577Z
## (c) Nuxeo Support Knowledge Base Outline 2019
