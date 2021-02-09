---
title: Installation
review:
  comment: ''
  date: '2021-01-29'
  status: ok
labels:
  - lts2016-ok
  - multiexcerpt
  - multiexcerpt-include
  - lts2017-ok
  - pabgrall
toc: true
notes: Documentation page used by the Marketing team. Check with Marketing before deleting or moving.
confluence:
  ajs-parent-page-id: '31033314'
  ajs-parent-page-title: Nuxeo Server
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: Installation
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Installation'
  page_id: '3866685'
  shortlink: PQA7
  shortlink_source: 'https://doc.nuxeo.com/x/PQA7'
  source_link: /display/NXDOC/Installation
tree_item_index: 100
version_override:
  LTS 2015: 710/admindoc/installation
  '6.0': 60/admindoc/installation
  '5.8': 58/admindoc/installation
---
{{! excerpt}}
Nuxeo Platform LTS 2021 can be deployed with the **Nuxeo Docker image** (recommended) or using the **ZIP distribution**. It can be installed on all major operating system such as Windows (client or server), Linux distributions, macOS, etc.
{{! /excerpt}}

- [Install Nuxeo with the Docker Image]({{page version='' space='nxdoc' page='docker-image'}})
- [Install Nuxeo with the ZIP distribution]({{page version='' space='nxdoc' page='tomcat-server-zip'}})

{{{multiexcerpt 'lts2021-general-prerequisites' space='nxdoc' page='generic-multi-excerpts'}}}

## Why using the Nuxeo Docker Image?

{{{multiexcerpt 'lts2021-docker-prerequisites' space='nxdoc' page='generic-multi-excerpts'}}}

The [Nuxeo Platform](https://www.nuxeo.com/content-services-platform/) can be installed on many operating systems by running the Nuxeo [Docker image]({{page page='docker-image'}}).

Using a Docker image has several advantages:

- It is OS-independent, can be run in any container runtime.
- It provides an abstraction layer that eases installation and administration. For instance, the Docker image embeds most of the external software needed by the Nuxeo Platform.
- It's what we're using internally at Nuxeo, especially in [Nuxeo Cloud]({{page space='nuxeo-cloud'}}).
- Docker and the container ecosystem are widely maintained by the open source community.

## Hardware and Software Requirements

The following table lists the _current_ requirements for running the Nuxeo Platform.

If you have requirements and/or constraints are not reflected below, **do not hesitate to contact the Nuxeo team** to evaluate the feasibility of running Nuxeo on any other environment.

<div class="table-scroll">
  <table class="hover">
    <tbody>
      <tr>
        <th colspan="1">Hardware Requirements</th>
          <td colspan="1">Minimum requirement to start a Nuxeo server:
          <ul>
            <li>2 CPU</li>
            <li>2&nbsp;GB RAM</li>
             <li>1&nbsp;GB of disk space</li>
          </ul>
        </td>
        <td colspan="1">Note: a production-ready setup for the Nuxeo Platform may require several servers and different hardware sizing, depending on your SLA and planned usage. Contact Nuxeo for more information and for assistance with sizing your production architecture.</td>
      </tr>
      <tr>
        <th colspan="1">Database</th>
        <td colspan="1">{{{multiexcerpt 'all-supported-databases' page='Compatibility Matrix'}}}</td>
        <td colspan="1">{{{multiexcerpt 'supported-databases-notes' page='Compatibility Matrix'}}}</td>
      </tr>
      <tr>
        <th colspan="1">Authentication and User Management</th>
        <td colspan="1">The Nuxeo Platform provides its own user and group directories and authentication solutions. It is also compatible with multiple cloud and enterprise solutions:
          <ul>
            <li>LDAP protocol (Open LDAP)</li>
            <li>Active Directory</li>
            <li>SAML Providers</li>
            <li>OpenId</li>
            <li>Kerberos</li>
            <li>CAS</li>
          </ul>
        </td>
        <td colspan="1">See [Authentication and User Management section]({{page page='authentication-and-user-management'}}).</td>
      </tr>
      <tr>
        <th colspan="1">Client-Side Requirements</th>
        <td colspan="1">The Nuxeo Platform comes with several applications for business users, which have their own requirements:
          <ul>
            <li>[Web UI]({{page page='web-ui'}})</li>
            <li>[Nuxeo Drive]({{page space='client-apps' page='nuxeo-drive'}})</li>
            <li>[JSF UI]({{page page='nuxeo-jsf-ui'}})</li>
          </ul>
        </td>
        <td colspan="1"></td>
      </tr>
    </tbody>
  </table>
</div>
