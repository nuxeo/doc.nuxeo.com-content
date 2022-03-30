---
title: Support and Maintenance
review:
    comment: ''
    date: '19-03-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 500
toc: true
---

## Support

Nuxeo Support and Cloud teams are available to support issues that arise as teams begin deploying changes and using the platform.

Typical Nuxeo Cloud support requests include:
- Data restoration from Production to Pre-Production.
- Deployment of Marketplace Packages, 3rd party services, or Configuration changes.

The Nuxeo support team provides first level support to evaluate all issues and route to the appropriate teams, including Nuxeo Cloud.

Nuxeo is available 24x7 to support site availability issues. If other issues are found, the team will address them following our standard customer support SLA’s depending on subscription level.

### Opening a support ticket on Cloud Environments

When [filling a JIRA Ticket]({{page version='' space='studio' page='how-to-fill-a-jira-ticket'}}), there are some important aspects:
- There are 3 JIRA Issue types for Nuxeo Cloud requests:
    - Nuxeo Cloud Deployments
    - Nuxeo Cloud Outages
    - Nuxeo Cloud Incidents  
- Nuxeo logs, configuration parameters and Marketplace Package versions are not required for the creation of Nuxeo Cloud support issues.
- If the issue identified, is related to a recent deployment or configuration change, please identify this in the support ticket.
- Screenshots, reproduction steps and any additional context is always useful.

## Maintenance

### Maintenance Windows

Our standard Production and Pre-Production Environment Maintenance window is 7 days a week:
- EU customers: 12AM - 2AM CET
- US customers: 12AM - 2AM EST
- Japan Customers: 12AM - 2AM JST

Maintenance windows are available to the Nuxeo Cloud team 7 days a week to support regular updates including Hotfixes, new Marketplace packages, Infrastructure update or Security patches. They are typically used 1-2 times per month.

{{#> callout type='info'}}
Specific Maintenance Windows can be adjusted to accommodate customer usage patterns.
{{/callout}}

## Nuxeo Hotfixes

Nuxeo Cloud applies Nuxeo LTS Hotfixes to all cloud environments the first and second week of each month during the maintenance window. Nuxeo Cloud customer contacts are emailed 1 week before the Hotfix deployment takes place.

Our standard deployment is:
- Pre-Prod: Available to users the first Friday of the Month
- Prod: Available to users the second Friday of the Month

## LTS Upgrades

Customers choosing to upgrade from one LTS version to another can do so using the following guidelines.

As a first step, customers may request an additional Development Sandbox be created with a pre-determined start and end date for the initial development upgrade effort. The second development sandbox will be available for testing of the upgrade without impacting the production development cycle.

After the upgrade process has been validated in the Development Sandbox, the process of upgrading the Pre-Production environment(s) can be started. This effort may require a data restoration from Production to Pre-production in order to better understand impacts and timings as the upgrade process moves towards production. This will also require coordination with the Nuxeo Cloud team as services (e.g. ElasticSearch) may also need to be upgraded with the application changes.

{{#> callout type='info'}}
The upgrade process to Pre-Production and Production does not typically require 2 environments to be available at the same time.
{{/callout}}

The Production update will be coordinated with the customer after the process has been validated in the Development Sandbox (if purchased) and Pre-Production environments.

Additional information on Nuxeo LTS upgrades can be [found here]({{page version='' space='nxdoc' page='upgrading-the-nuxeo-platform'}}).

## Additional Updates / Security Patches

The standard maintenance window may also be used to apply updates to 3rd party services, infrastructure or security patches. We notify customer contacts via email before these take place.
