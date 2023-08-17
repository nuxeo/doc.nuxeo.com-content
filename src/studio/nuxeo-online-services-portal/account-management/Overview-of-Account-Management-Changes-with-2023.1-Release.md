---
title: Overview of Account Management Changes with 2023.1 Release
description: Account Management Changes with 2023.1 Release
review:
    comment: ''
    date: ''
    status: ok
toc: true
tree_item_index: 100
---







## Overview of Account Management Change with 2023.1 Release
### What Happened?
The 2023.1 release of Nuxeo Online Services brings changes to the functionality of the Connect User Management feature area.
### What Has Changed in Account Management?
These changes enable administrators to create user groups and services. Services provide access to a group of projects. This feature empowers Connect administrators to establish sub-organizations comprising specific user groups with access to designated project sets. This holds particular significance for organizations granting access to external users like partners or managing multiple concurrent projects.
### Release Notes
Find the release notes at: [https://doc.nuxeo.com/studio/nuxeo-studio-release-notes/](https://doc.nuxeo.com/studio/nuxeo-studio-release-notes/)
### Considerations
**Does the Request to Create a New Service Require Approval?**
Yes, creating services still requires approval from our Support organization. When a service is requested, a Jira ticket is generated, containing essential information about the new service and its creator. Support manages this ticket, utilizing its details or supplementary information from the user if necessary.
**When I Create a New Project, Will It Create a New Service?**
When a trial project is initiated, both a base maintenance service and a studio service are automatically created. These services are time-limited trial versions, with expiry dates displayed on the services page. For non-trial projects within an organization, no additional services are generated. Administrators can subsequently add the project to newly established services. Note that a service requires at least one associated project to be functional. New projects adhere to their expiry dates as defined by the client contract.
**What Kinds of Services Exist and How Are They Different?**
There are four service types:
1. **Base Maintenance Services:** These services register instances for one or more applications.
2. **Studio Services:** Studio services facilitate the creation of Nuxeo Studio projects for one or more applications. Nuxeo Studio projects embody low-code applications designed within Nuxeo.
3. **Support Services:** Support services grant users access to Jira.
4. **Combination of Studio and Support Services:** As described above.
**Why Are There Studio Services and Base Maintenance Services Called “Unknown”?**
Nameless services are labeled as "Unknown," and currently, their names cannot be altered. Such services might be auto-generated, like those accompanying trial instances. It's important to note that the services page enumerates associated projects for each service.
**Can Two Services Have the Same Name?**
Yes, services can share identical names.
**What Happens After the End Date of a Service?**
Once a service's end date is reached, it becomes invalid. For instance, users accessing studio projects through a studio service lose Nuxeo Studio access for linked projects upon service expiration.
**Can a Project Have an End Date After the Base Maintenance Service Expires?**
In the absence of a valid base maintenance service for a Connect instance, users can still access the interface but cannot publish studio packages. Technically, a studio service can possess an end date subsequent to a base maintenance service's expiration. Note that the duration of the base maintenance service aligns with the client contract's terms. Contact our Support team for potential changes.
**If I Add the Email of an Existing User and Later Assign a Different Name, Does the Name Change Impact Billing?**
In this scenario, the user is added, but any alterations to the first and/or last name are disregarded.
**How Can I Change the Number of Available Seats?**
The number of available seats corresponds to the client contract. Contact our Support team to discuss potential adjustments to seat availability.
