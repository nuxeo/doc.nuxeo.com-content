---
title: 'Nuxeo Cloud Day-to-day'
review:
    comment: ''
    date: '03-19-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 300
toc: true
---
## Deploy My Configuration

The Nuxeo Cloud Operations (NCO) team deploys all changes and updates to the pre-prod and prod environments. All deployments are done via Marketplace packages.

The SLA for deployment requests is within 1 day of the ticket being submitted.

Each Cloud Deployment requires a JIRA SUPNXP to be created with a ticket type of **Nuxeo Cloud Deployment** that provides the following information:

Name and Link to the Marketplace Package (MP) with the correct version (sentences)
Any required 3rd Party Services or SSO configuration (e.g. FFMPEG, ImageMagick, Okta, etc.)
Nuxeo Conf Updates corresponding to packages or 3rd party services
The Date and Time (include time zone) of deployment.

Note: The cloud team will NOT perform a deployment until a date/time has been provided. Especially if the deployment request is to be performed outside of the standard maintenance window.

## Customization

Customers will have Studio access to configure their business logic and data model and to define the list of packages (including custom) that are required
The Private Marketplace will be available to customers for custom Java development
The NCO team will validate and deploy all packages to hosted production and pre-prod environments via marketplace packages
If necessary, additional Nuxeo teams (e.g. professional services) can provide support for the creation and deployment of any required configuration or customization

## Production and Pre-Production Guidelines

There are standard guidelines when deploying to the Production and Pre-Production environments.

NO Snapshot deployments - We expect all deployments to these environments to be “Prod Ready” and do not allow Snapshot marketplace packages to be deployed to these environments

NO Hot Reload - All deployments are managed by the Nuxeo Cloud team and customers do not have access to deploy and reload the environment with any new updates or configurations

Data Migration Approval - Any production data migrations to pre-production must have written approval before the migration can be completed. Production level data is NOT allowed in Dev Sandbox environments.

SSO Integration via SAML - Nuxeo Cloud supports SSO integration to customer providers via SAML only

## Support

The Nuxeo Cloud team is available 24x7 to support any Production Environment outages.

The Nuxeo support team provides first level support for Cloud Customers as we do for all of our Nuxeo Customers. The support team reviews and begins working each support issue. If required, they will include or delegate responsibility for the issue to the Nuxeo Cloud team.

The support SLA’s are tied to the standard Nuxeo support terms based on subscription level and can be found on the standard support page.
Note: add link to the standard support page here
