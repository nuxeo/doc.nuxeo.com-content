---
title: Platform as a Service
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - deployment
    - mcedica
    - architecture
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '19235679'
    ajs-parent-page-title: Educational
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Platform+as+a+Service
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Platform+as+a+Service'
    page_id: '20519075'
    shortlink: oxg5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/oxg5AQ'
    source_link: /display/NXDOC/Platform+as+a+Service
tree_item_index: 1350
history:
    -
        author: Solen Guitter
        date: '2016-09-07 09:56'
        message: ''
        version: '9'
    -
        author: Alain Escaffre
        date: '2015-10-13 13:46'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-11-28 17:37'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-11-28 17:37'
        message: typos and formatting
        version: '6'
    -
        author: Solen Guitter
        date: '2014-11-28 15:13'
        message: ''
        version: '5'
    -
        author: Thibaud Arguillere
        date: '2014-11-24 16:26'
        message: Typos
        version: '4'
    -
        author: Thierry Delprat
        date: '2014-11-19 23:35'
        message: ''
        version: '3'
    -
        author: Thierry Delprat
        date: '2014-11-19 23:34'
        message: ''
        version: '2'
    -
        author: Thierry Delprat
        date: '2014-11-19 23:31'
        message: ''
        version: '1'

---
{{! excerpt}}

This document explains how the Nuxeo Platform can be used to provide an application factory system that allows to instantiate on demand applications for a given configuration.

{{! /excerpt}}

## Target Use Cases

### SaaS Deployment

When building an application you want to deliver as a service, there are several problems you need to address:

*   Scalability: You need to be able to address quickly increasing load and your customers want good performance
*   Price efficiency: Your customers want good performance for a good price
*   Customization: Each customer wants to be able to slightly tweak the application to their own requirements
*   Customization maintenance This point can quickly become a major issue

![](https://www.lucidchart.com/publicSegments/view/544fa30f-4bc0-4db6-b2ca-51d20a005489/image.png)

### Subsidiaries / Regional Deployment

Inside a large company, especially when it is international, it is very common to require the same application deployed for several departments or several countries.

Actually, even if at the beginning all departments or countries want the same application at some point they usually identify some "small differences" that justify that they need some custom configuration and possibly their own deployment too.

Usually the most critical points to handle are:

*   Urbanization: You don't want each department to deploy its own software solution.
*   Maintenance and upgrade: You don't want to multiply maintenance price by the number of logical deployments.
*   Deployment speed: Deploying a new "instance" should be fast and painless.

![](https://www.lucidchart.com/publicSegments/view/544fa85d-e3b4-44d7-85cf-0f860a008ac6/image.png)

### Projects with Common Requirements

For similar reasons, inside a large company you can easily have several projects that would benefit to share the same common ground. Typically if you have several Case Management projects for different departments or several DAM projects for different countries.

Even if these are separated projects with potentially different lifecycles, it can make sense to define a kind of "group wide" common ground:

*   To avoid redoing the same customization several times
    *   Authentication and security requirements
    *   Company branding integration
    *   Baseline workflow
*   To mutualize maintenance
*   To speed up projects deployment

![](https://www.lucidchart.com/publicSegments/view/544fb181-2084-4c5a-a58e-48500a00c2c4/image.png)

## Why Nuxeo Platform Does Help

All the use cases above have in common that:

*   You first need to build a common application, ideally without starting from the ground.
*   You want then to be able to customize it for a project or client, without compromising upgrade possibilities.

![](https://www.lucidchart.com/publicSegments/view/544fbd0c-da60-4f7b-bf54-630f0a005489/image.png)

The Nuxeo Platform provides the tools for achieving that:

*   A component model and packaging model so that you can have three cleanly separated layers
    *   The components provided by the Nuxeo Platform that handle all the infrastructure issue
    *   The components you want to build for your custom application
    *   The components each project / client may want to build
*   Tools to make configuration and extension building easy
    *   Nuxeo Studio: to manage all your business configuration
    *  Nuxeo CLI: to build extensions
*   A packaging model and deployment system

![](https://s3.amazonaws.com/media-p.slid.es/uploads/thierrydelprat/images/703090/devpipe.png)

## Single Application with Multi-Tenants Approach

### Share Everything Approach

The classical approach, used by several solutions, is to build a multi-tenant application: There is only one big application, which provides isolation features so each tenant of the application feels "as if it was their application"_._

This approach exists for a very long time and has the big advantage to provide a complete sharing of all resources which may seem to be the most economic option.

### nuxeo-multi-tenants

![](https://www.lucidchart.com/publicSegments/view/544ff14a-9d34-4765-a115-21350a004d3d/image.png)

The `nuxeo-multi-tenants` add-on provides a multi-tenant isolation system that adds to the Nuxeo Platform:

*   A configurable notion of tenant: By default a tenant is a domain.
*   A user isolation at tenant level: Except for main administrators, users and groups and defined and managed at tenant level.
*   A data isolation at tenant level: Documents are isolated a on per tenant basis using a security policy and ACLs.

Depending on the way you define a tenant, you could also use completely separated repositories for each tenant (allowing to have physically separated Databases and BinaryStores).

![](https://www.lucidchart.com/publicSegments/view/544ff2b8-2e80-4037-a0d8-70490a004d3d/image.png)

### Limits of the Multi-Tenant Model

The multi-tenant model has some intrinsic limits.

#### All Resources Are Indeed Shared

The first drawback is that since all resources are shared inside the same application, one tenant can create issues by consuming too many resources or creating errors.

The application layer can manage some quotas (the platform provides that for the storage for example), but as long as the tenant isolation remains at application level, it is not possible to prohibit one tenant to use too much CPU, memory or bandwidth.

#### Configuration and Customization Have to Be Limited

As long as all tenants run inside the same application, the configuration and customization must be limited.

*   Contributing too much code may endanger the other tenants
    *   There is no classloading isolation enforced
    *   See previous remark about resource consumption
*   Only a very limited number of [extension points]({{page page='runtime-and-component-model'}}) are tenant aware.
*   Having each tenant declare 10 custom document types can result in a huge number of document types at the repository level
    *   Creating hundreds of tables is usually not a scalable path

#### Availability and Projects Constraints

Concentrating the different projects/customers/tenants on the same application automatically makes it highly critical.

Hosting three non-critical applications for three separated continents is easy. But if you run them as three tenants on the same application the maintenance window automatically become very small and the application needs to be HA 24/24 7/7.

In terms of project constraints, it also means that all projects need to agree on the upgrade schedule: Sadly, when the number of projects increases, getting that agreement can end up being much more complicated than the actual technical upgrade itself.

#### Scalability Issues

With multi-tenants the easiest solution is to use a single and big database server for all the tenants.

The drawback of the approach is that when you need to scale because you need more performances or simply because you are adding a lot of tenants then you can be stuck because Database servers don't easily scale out.

With Nuxeo, you have the option of using a per-tenant repository, but in this case you need to automate the Database provisioning. This is actually the first step to switch to the other approach described below (Platform as a Service)

#### BackUp / Restore

As long as the data isolation is handled at application level, you can not rely on system-level backup restore tool, at least, not if you want to restore a data from a particular tenant without restoring the data for all tenants.

## Containerized Isolation

### How Containers Can Help

As seen earlier, for the classical multi-tenants approach to be really efficient, we would need the tenant isolation to be enforced at system level so that:

*   Tenant resource are really reserved and not accessible to other tenants, including CPU, Memory, I/O.
*   Each tenant should use a different runtime so the configuration from a tenant can never impact another tenant.

Basically the idea is that for each client a set of dedicated containers running Nuxeo is used.

![](https://www.lucidchart.com/publicSegments/view/54504e19-f858-4bbe-b483-01650a0090b1/image.png)

With the container based approach all the problems of a single application with multi-tenants disappear:

*   Each project / client is really isolated
    *   At data level
    *   At runtime level
    *   At resource level
*   Each project can have its own lifecycle for upgrades
*   Project can be as custom as needed

That's because we are convinced that this approach has much more value that "standard multi-tenants" that we started investing on the container based approach.

### A Container Factory with Openshift

[Openshift](https://www.openshift.com/) is the container application platform made by RedHat. It relies on [Kubernetes](https://kubernetes.io/) and is able to run and schedule containers on a cluster of nodes.

Openshift also adds a specific build workflow that allows to build source code and convert it in Docker image.

With that infrastructure, one can provide a way:

* to define an application configuration by selecting a Studio project, a set of additional packages and a base Nuxeo image
* to provision the Nuxeo server containers and every backing service containers (MongoDB, PostgreSQL, Elasticsearch...)
* to bind the Nuxeo service to a URL.

### High-Density Containers

Openshift use the Docker lightweight container technology to multiplex several application containers by sharing the underlying infrastructure/VMs.

This approach allows to optimize the run infrastructure, even when running on virtualized environment like AWS:

*   Multiple containers can be run on the same VM
*   Containers can be stopped when not needed anymore
*   Containers can be restarted very quickly when needed

Because lightweight containers are cheaper to create or to shutdown, this 2-level container architecture allows to have a very reactive provision policy so that we can quickly scale the application up or down.

## Examples of Nuxeo + Openshift Usage

### Developments and Test Environment

We realized that in some context / company, building the required development environment can be challenging or at least be time consuming:

*   Having servers or VMs so that developers can test their work
*   Having servers or VMs to run the acceptance tests

With Openshift deployment you can deploy one or several Nuxeo environment on the same set of servers, and you can even share the backing service for each Nuxeo environment.


### Subsidiaries / Regional Deployment

Let's consider a use case where in a large international company each region must have its own "flavor" of the corporate DAM.

However, when looking in more details, each region should have access to two repositories:

*   A corporate repository, shared across all regions
*   A local repository, specific to one region

The Nuxeo Platform and Openshift provides the required infrastructure:

*   Platform as a Service
*   Multi-repositories support

![](https://www.lucidchart.com/publicSegments/view/54511437-a558-457c-a92e-551e0a0090b1/image.png)
