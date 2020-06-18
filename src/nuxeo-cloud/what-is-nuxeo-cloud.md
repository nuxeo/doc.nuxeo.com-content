---
title: What's Nuxeo Cloud?
review:
    comment: ''
    date: '19-03-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 100
toc: true
---

Nuxeo Cloud is a fully hosted and managed offering providing our customers with setup, support and maintenance for a complete Nuxeo implementation.

This includes support and management of the infrastructure, third-party services, and application, including all deployments and/or changes to production and pre-production environments.

![]({{file name='cloud-architecture.png'}})

## Nuxeo Cloud Environments

The Nuxeo Cloud Operations (NCO) team provides different environments as part of a standard configuration with the latest LTS and Hotfixes applied.

### Production Environment

- Full stack deployment of Nuxeo and all required services
- Complete monitoring and support
- PCI/DSS and SOC2 Certified (as of 2019)

### Pre-Production Environment

- Reduced stack deployment of Nuxeo to mirror production
- Support for production level data
- PCI/DSS and SOC2 Certified (as of 2019)

### Development Sandbox Environment

- Pre-configured deployment of Nuxeo and required services
- Access to Nuxeo built CI/CD chain for deployments
- NO Data Backups or Security Hardening

## Monitoring and Support

All environments are proactively monitored 24x7 and supported by the Nuxeo Cloud team.

[More info&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='support'}})

## Continuous Improvement

The Nuxeo Cloud deployment technologies use Nuxeo best practices and are continuously improved upon in coordination with the Nuxeo Platform.

[More info&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='deployment'}})

## Security

All environments are enabled with out of the box application and infrastructure level security monitors. The security model is continuously reviewed and today Nuxeo Cloud is both SOC2 and PCI/DSS Compliant.

[More info&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i>]({{page page='security'}})

## Deployment Technologies

- **Terraform**: Primary Automation tool for developing and planning infrastructure
- **Packer**: Used to build Automated Machine Images (AMI’s)
- **Ansible**: IT Automation for configuring Nuxeo Cloud
- **GitHub**
  - NCO-Customers - Configuration repo
  - NCO-Platform - Platform definitions
- **Jenkins**: All tasks are defined as Jenkins jobs for deployment, configuration changes, creating new AMI’s, DR restore tasks etc


## Responsibilities

Nuxeo Cloud has a responsibility to:

- Ensure the Data is protected
- Secure the systems from un-approved changes
- Ensure the system is performant based on the SLA
- Ensure the system is available per the Agreed Hours of Service.
