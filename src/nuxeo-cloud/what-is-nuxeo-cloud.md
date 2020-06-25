---
title: What's Nuxeo Cloud
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

### Production

Primary environment used by customers:

- Full stack deployment of Nuxeo and all required services
- Complete monitoring and support
- PCI/DSS and SOC2 Certified (as of 2019)

### Pre-Production

Environment used to validate deployments before going to production. These deployments may include cloud platform changes, hotfixes and security patches:
- Reduced stack deployment of Nuxeo to mirror production
- Support for production level data
- PCI/DSS and SOC2 Certified (as of 2019)

### Development Sandbox

The Nuxeo Dev Sandbox is a Docker based environment that enables our customers to easily build and deploy applications during their development process, like testing new configurations, addons or custom code.

Nuxeo Cloud customers have the option to use the Dev Sandbox, as part of the development process, to deploy and validate work before pushing to production cloud environments.

- Pre-configured deployment of Nuxeo and required services
- Access to Nuxeo built CI/CD chain for deployments
- NO Data Backups or Security Hardening

<div class="pm-table-wrapper">
<table data-number-column="false">
<tbody>
<tr>
<th rowspan="1" colspan="1" class="ak-renderer-tableHeader-sortable-column">
<p data-renderer-start-pos="3651">&nbsp;</p>
</th>
<th rowspan="1" colspan="1" class="ak-renderer-tableHeader-sortable-column">
<p data-renderer-start-pos="3655"><strong>Production</strong></p>
</div>
</th><th rowspan="1" colspan="1" class="ak-renderer-tableHeader-sortable-column">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="3669"><strong>Pre-Production</strong></p>
</div>
</th>
<th rowspan="1" colspan="1" class="ak-renderer-tableHeader-sortable-column"><div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="3687"><strong>Development Sandbox</strong></p>
</div>
<figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order">
</th>
</tr>
<tr>
<td rowspan="1" colspan="1">
<p data-renderer-start-pos="4543">Data Backups</p>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4559">Yes</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4566">Yes</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4573">No</p>
</div>
</td>
</tr>
<tr>
<td rowspan="1" colspan="1">
<p data-renderer-start-pos="4378">Logs via Datadog</p>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4398">No</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4404">No</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4410">No</p>
</div>
</td>
</tr>
<tr>
<td rowspan="1" colspan="1">
<p data-renderer-start-pos="4425">Logs via Security Dashboard</p>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4456">Yes</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4463">Yes</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4470">No</p>
</div>
</td>
</tr>
<tr>
<td rowspan="1" colspan="1">
<p data-renderer-start-pos="4597">PCI / SOC2 Compliant</p>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4621">Yes</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4628">Yes</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4635">No</p>
</div>
</td>
</tr>
<tr>
<td rowspan="1" colspan="1">
<p data-renderer-start-pos="4485">SSH / Infrastructure Access</p>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4516">No</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4522">No</p>
</div>
</td>
<td rowspan="1" colspan="1">
<div class="fabric-editor-block-mark sc-bwCtUz iXkdcO" data-align="center">
<p data-renderer-start-pos="4528">No</p>
</div>
</td>
</tr>
</tbody>
</table>
</div>

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
  - NCO-Customers: Configuration repo
  - NCO-Platform: Platform definitions
- **Jenkins**: All tasks are defined as Jenkins jobs for deployment, configuration changes, creating new AMI’s, DR restore tasks etc

## Responsibilities

Nuxeo Cloud has a responsibility to:

- Ensure the Data is protected
- Secure the systems from un-approved changes
- Ensure the system is performant based on the SLA
- Ensure the system is available per the Agreed Hours of Service.
