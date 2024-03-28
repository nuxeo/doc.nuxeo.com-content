---
title: 'Jan 2024'
description: Release notes for Nuxeo Studio released in January 2024.
tree_item_index: 940
review:
  comment: ''
  date: '2024-01-15'
  status: ok
toc: true
---

{{! multiexcerpt name='studio-updates-2024-01'}}

## Connect / Account Management

Roles in Connect have evolved. With this release there will be three internal and three external roles.

**External Roles**

**Basic User**
This is the default type for external users  (clients, partners etc.) and gives access to that organisation’s packages 
Basic users can be added to services by Admins, giving them access to Studio projects and other features

**OrgAdmin**
This is role that allows a user to administer an organisation’s user via the Account Management feature

**SuperOrgAdmin (ex ProjectAdmin)**
This is a superior admin role that gives access Account Management and Project Admin features, as well a the ability to create OrgAdmins
For further information please contact support.

Specific changes:

- Fixed assignment of a user to a service when an obsolete service reached the limit.
- Fixed Jira assignment when a user is added to Support service.
- Search box in "Account Management Services" now provides only the list of services matching the query.
- Power Users and OrgAdmin now have more access rights.
- Nuxeo Users are replaced by Internal User and cannot access all projects and JSF backoffice.
- Implemented new roles: SuperOrgAdmin and OrgOutOfQuota.
- Fixed Services tab accessibility issue.
- SuperOrgAdmin, Administrator, and Power Users can now create/edit/delete ConnectProject in the AccountManagement page.
- Fixed quota checking when updating Custom Group.

## Studio Modeler
- Allow usage of the new "List elements required" constraint on mutlivalued schema fields.
- Fixed sync studio project dependencies resources.
{{! /multiexcerpt}}
