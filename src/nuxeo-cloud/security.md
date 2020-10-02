---
title: Security
review:
    comment: ''
    date: '19-03-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 600
toc: true
---

The Nuxeo Cloud environments are built using Cloud and application security best practices - including support for encryption of data at rest and in transit and threat detection monitoring using Threat Stack.

All Production and Pre-Production environment are deployed as single tenants so that no resources are shared between customers or environments.

Nuxeo Cloud has been PCI-DSS and SOC2 Certified (as of 2019).

## Access / Authentication

Customers will have access to all of the Nuxeo APIs.

Customers have the option to integrate Nuxeo with their Identity Management (IDM) solution. Nuxeo supports most SAML enabled IDM solutions such as Okta and Active Directory Federated Solution (ADFS).

The standard process will create users on the fly at first connection, but Nuxeo can also provide an option to provision users and groups via a SCIM API.

## Modifications / Updates

All customer environment changes are tracked via:
- JIRA issues
- Jenkins Jobs
- System Logs
- Security Policy Exceptions

All environment deployments are reviewed and approved by a different cloud team member before they are deployed. All updates are done via automation as much as possible.

All manual changes require security review and approval before being made to an environment
Critical Security updates may require a quick resolution and notification after the change has been made.

## Tools

### Threat Stack / Intrusion Detection

All stacks have Threat Stack enabled to track all logs and monitor for threats against customer environments and the Nuxeo network
Alerts are reviewed by the security and cloud teams appropriately

### Ivory Shield / Audit of Environments

All stacks are audited using Ivory Shield to validate that we are in compliance with security policies

### AWS Shield / DDoS Protection

We use AWS shield to protect our environments against DDoS attacks

## Data Encryption

**In Flight**: All data traversing a network uses a secure TLS connection
- HTTPS - All connectivity over the public network to the end user is HTTPS/TLS 1.2.
- MongoDB Atlas - via a VCP peer connection contained by a private network and using the default TLS connection
- ElasticSearch - HTTPS connection for read queries
- Redis - Standard TCP connection on the Redis port.
- S3 - Binary storage. We connect over a VPC Endpoint and use HTTPS.

**At Rest**: Data is resting while in storage (DB, File System, Object storage etc)
- S3 - Binary storage.
  - Server side encryption - we use the AWS Master Key set to AES-256 server side encryption. In the future we plan to migrate this to an AWS KMS solution.
  - Client side encryption - Nuxeo encrypts the content before it is stored in the S3 bucket
- MongoDB Backups
  - Storage is encrypted using AWS KMS

## Audit and Compliance

- PenTesting is done once per year
- Disaster Recovery testing is done every 6 months
- SOC2 & PCI Compliant as of Dec 2019
- HITRUST targeting completion by beginning of Q2 2020
