---
title: Deploy
review:
    comment: ''
    date: '03-19-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 400
toc: true
---

## Concept

=> **Monitored & Controlled**: The Nuxeo Cloud Operations (NCO) team deploys ALL changes and updates to pre-prod and prod environments

=> **Fast**: Requests typically completed within 1-2 days

=> **Follow Nuxeo Best Practices**: Deployments done via Marketplace Packages so that our automation process is easily used across all projects
  - NO Snapshots of Date-Based Releases: only production ready code
  - DO NOT deploy the same Marketplace Package to the same environment multiple times

=> **Use Maintenance Windows / Minimize Impact**: Deployments done during standard maintenance windows unless otherwise specified to minimize potential impact to users

## Technologies

- **Terraform**: Primary Automation tool for developing and planning infrastructure
- **Packer**: Used to build Automated Machine Images (AMI’s)
- **Ansible**: IT Automation for configuring Nuxeo Cloud
- **GitHub**
  - NCO-Customers - Configuration repo
  - NCO-Platform - Platform definitions
- **Jenkins**: All tasks are defined as Jenkins jobs for deployment, configuration changes, creating new AMI’s, DR restore tasks etc

## Customer Deployments

Customer deployments are typically completed within 1 day of submission (SLA = 1-2 days). </br>
In order to support the deployment we need a JIRA SUPNXP ticket that contains the following:
- Ticket Type of “Nuxeo Cloud Deployment”
- Link to the correct version of the Marketplace Package (MP)
- Required 3rd Party Services (e.g. FFMPEG, ImageMagick, Okta, etc.)
- Nuxeo Conf updates corresponding to packages or 3rd party services
- Date / Time of Deployment - include the time zone and if the maintenance window is preferred deployment window
