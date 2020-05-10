---
title: Overview
review:
    comment: ''
    date: '19-03-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 100
toc: true
---

This overview will help you understand how Nuxeo Cloud works. You will get a detailed description of the cloud offering and what we provide to these customers.

## Cloud Overview

Nuxeo Cloud is a fully hosted and managed offering that uses AWS as our primary service provider, and provides our customers with setup, support and maintenance for a complete Nuxeo implementation.

- Managed Nuxeo offering that provides support and management of the infrastructure, third party services, and application - including all deployments and/or changes to all prod and pre-prod environments

- Monitoring and support for prod and pre-prod environments 24x7

- Continuous improvement of our deployment technologies that leverages Nuxeo best practices

- PCI/DSS and SOC2 Certified (as of 2019)

- Support resources in the US (NY / CA), EU (Paris) and India

- Support for MongoDB and RDS / PostgreSQL deployments

- Application and Security level monitoring enabled out of the box

## Deployment Technologies

- **Terraform**: Primary Automation tool for developing and planning infrastructure
- **Packer**: Used to build Automated Machine Images (AMI’s)
- **Ansible**: IT Automation for configuring Nuxeo Cloud
- **GitHub**
  - NCO-Customers - Configuration repo
  - NCO-Platform - Platform definitions
- **Jenkins**: All tasks are defined as Jenkins jobs for deployment, configuration changes, creating new AMI’s, DR restore tasks etc

## Nuxeo Cloud Environments

### Environments

- **Production** – Deployed with a full technology stack and all integrations required
- **PreProd + Dev Environments** – 1 additional PreProd and Dev Environment until initial go live -(Additional dev environments can be provided if needed)
- **PreProd Environment** – Used to test and validate custom code and deployments before moving to production
- **Dev** – Used to develop and unit test new configurations and custom code

### DRP Environment

Backups stored in a separate availability zone with extra replication to another region

## Responsabilities

Nuxeo Cloud has a responsibility to:

- Ensure the Data is protected
- Secure the systems from un-approved changes
- Ensure the system is performant based on the SLA
- Ensure the system is available per the Agreed Hours of Service.
