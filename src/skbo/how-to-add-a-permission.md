---
title: How to add a permission to a user or group that does not exist?
description: How to add a permission to a user or group that does not exist?
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - studio-automation
    - automation
    - users
    - validation

---
# How to add a permission to a user or group that does not exist?
## Problem
When executing an operation “Document.AddPermission” with a user or group that does not exist, an exception is raised "Caused by: org.nuxeo.ecm.core.api.NuxeoException: User or group name '…' does not exist. Please provide a valid name."

This stops the automation chain.
## Solution
It is possible to deactivate the validation of users using the following extension in Studio > Advanced Settings > XML Extensions:

    <extension point="configuration" target="org.nuxeo.runtime.ConfigurationService">
         <property name="nuxeo.automation.allowVirtualUser">true</property>
    </extension>

This solves the fact that the automation chain is now not stopped anymore.

Customers are then not warned anymore that the users do not exist, and they must support the configuration of the missing users and groups.


2019-06-01T17:37:24.563Z
## (c) Nuxeo Support Knowledge Base Outline 2019
