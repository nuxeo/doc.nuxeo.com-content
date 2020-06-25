---
title: Deployment
review:
    comment: ''
    date: '06-19-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 300
toc: true
---

## Concept

=> **Monitored & Controlled**: The Nuxeo Cloud Operations (NCO) team deploys ALL changes and updates to pre-prod and prod environments

=> **Fast**: Requests typically completed within 1-2 days

=> **Follow Nuxeo Best Practices**: Deployments done via Marketplace Packages so that our automation process is easily used across all projects
  - NO Snapshots of Date-Based Releases: only production ready code
  - DO NOT deploy the same Marketplace Package to the same environment multiple times

=> **Use Maintenance Windows / Minimize Impact**: Deployments done during standard maintenance windows unless otherwise specified to minimize potential impact to users.

## Deploy My Configuration

The Nuxeo Cloud Operations (NCO) team will deploy all changes and updates to the pre-prod and prod environments. All deployments are done via Marketplace packages.

The cloud team typically complete deployment requests within 1 day of the ticket being submitted.

Each Cloud Deployment requires a **JIRA SUPNXP** to be created with a ticket type of **Nuxeo Cloud Deployment** that provides the following information:
- Name and Link to the Marketplace Package (MP) with the correct version
- 3rd Party Services or SSO services required (e.g. FFMPEG, ImageMagick, Okta, etc.)
- Nuxeo Conf Updates corresponding to packages or 3rd party services
- Identify the requested Date and Time (include time zone) of deployment.
  - The cloud team will NOT perform a deployment until a date/time has been provided.
  - These can be done outside of maintenance windows.

{{#> callout type='info'}}
The Cloud team WON'T perform a deployment until a date/time has been provided. Especially if the deployment request is to be performed outside of the standard maintenance window.
{{/callout}}

## Customization

Customers will have Studio access to configure their business logic and data model and to define the list of packages (including custom) that are required
The Private Marketplace will be available to customers for custom Java development
The NCO team will validate and deploy all packages to hosted production and pre-prod environments via marketplace packages
If necessary, additional Nuxeo teams (e.g. professional services) can provide support for the creation and deployment of any required configuration or customization

## Constraints

On Preproduction and production environments, it is not allowed to:

- Deploy Snapshot versions
- Perform Hot-Reload
