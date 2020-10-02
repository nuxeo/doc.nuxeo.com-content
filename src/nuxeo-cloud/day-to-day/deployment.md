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

## Deployment Overview

The Nuxeo Cloud team deploys all changes to Production and Pre-Production Environments via Marketplace Packages.

JIRA deployment requests should be submitted up to 2 days before the change is required. The request should also include when the deployment should take place.

Some important notes regarding deployments:
- Snapshot or Date-Based Releases are NOT allowed. The Nuxeo Cloud Team only deploys production-ready code.
- Marketplace Package versions should be used. The Nuxeo Cloud team will NOT deploy the same Marketplace Package to the same environment multiple times.

Nuxeo Cloud has Standard Maintenance Windows for all of our Production and Pre-Production Environments. The standard maintenance windows are used to make changes to minimize impact to users.

The standard 7 days a week US, EU and Japan maintenance windows are identified below.

- **US**: 12AM - 2AM EST
- **EU**: 12AM CET - 2AM CET
- **Japan**: 12AM JST - 2AM JST

## Deployment Requests

All Nuxeo Cloud Deployments require a JIRA Support Ticket (SUPNXP) to be created with a ticket type of “Nuxeo Cloud Deployment” that provides the following information:

- Name and Link to the correct version of the Marketplace Package.
- Required 3rd Party Services or SSO services (e.g. FFMPEG, ImageMagick, Okta, etc.).
- Nuxeo Conf Updates corresponding to packages or 3rd party services.
- The Date and Time of the deployment including time zone, which can be done outside of established maintenance windows.

{{#> callout type='info'}}
Nuxeo Cloud requires a Date and Time for all Deployment Requests, this includes identifying the standard maintenance window as the deployment time.
{{/callout}}

## Nuxeo Studio and Private Marketplace Packages

Nuxeo Cloud customers have access to [Nuxeo Studio]({{page version='' space='studio' page='nuxeo-studio'}}) to configure their business logic, data model and define the public or private packages that are required.

The Private Marketplace is [available]({{page space='studio' page='delivering-a-customization-package-through-the-nuxeo-marketplace'}}) to customers for custom Java development.

Cloud Customers have the option to purchase Nuxeo Professional Service engagements to provide support for the development of additional configuration or customization changes.
