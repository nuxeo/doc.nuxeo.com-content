---
title: How to allow to extend a vocabulary to non-administrator users
description: How to allow to extend a vocabulary to non-administrator users
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - runtime-administration
    - configuration
    - directory
    - permission
    - users

---
# How to allow to extend a vocabulary to non-administrator users?
## Problem
In Studio, define a widget **“Single Directory Suggestion”** and set the parameter **“can add new entry”** to Yes.
The possibility to extend the vocabulary is only displayed for administrators.  
How to do so that users with less rights can extend the vocabularies with more entries?
## Solution
Due to [NXP-15732](https://jira.nuxeo.com/browse/NXP-15732) which concerns the permissions configuration of directories, a special security configuration is mandatory for non-administrators to be allowed to add values to vocabularies.

Let’s create a user “user1” having rights “Everything” on a document and a user “user2” having rights “Edit” on the same document, which uses the vocabulary.

With the following contribution in Studio, you can have the button “Add new entry” for user1 and not for user2:

      <extension point="directories" target="org.nuxeo.ecm.directory.sql.SQLDirectoryFactory">

        <directory name="MyTestVocab">
          <permissions>
            <permission name="Write">
              <user>user1</user>   
              <user>user2</user>   
            </permission>
          </permissions>
        </directory>

      </extension>

      <extension target="org.nuxeo.ecm.platform.actions.ActionService" point="filters">
        <filter id="managePermissionFilter2">
          <rule grant="true">
            <condition>documentManager.hasPermission(currentDocument.ref, 'Everything')</condition>
            <!--permission>Everything</permission-->
          </rule>
          <rule grant="false">
            <condition>#{directoryUIActions.isReadOnly(directoryName)}</condition>
          </rule>
        </filter>
      </extension>

For the entry point “directory”, only <user> and <group> can be configured.  

In addition, in Studio, you must use **managePermissionFilter2** as “filter id” in the widget.


2019-06-01T17:37:23.372Z
## (c) Nuxeo Support Knowledge Base Outline 2019
