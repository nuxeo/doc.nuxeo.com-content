---
title: Nuxeo Deployment on Kubernetes
review:
  date: '2021-04-16'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to deploy Nuxeo on Kubernetes
tree_item_index: 275
---

## Introduction 

Kubernetes is an open source orchestrator for deploying and managing containerized applications at scale. Kubernetes provides all the tools necessary to build and deploy a reliable, scalable distributed Nuxeo architecture, regardless of the environment and underlying infrastructure. 

### Portability and flexibility

Kubernetes works with virtually any type of container runtime. Kubernetes can work with any type of underlying infrastructure, whether it is a public cloud, a private cloud, or an on-premises server.

In these respects, Kubernetes is highly portable, because it can be used on a variety of different infrastructure and environment configurations. Most other orchestrators lack this portability; they are tied to particular runtimes or infrastructures.

### Multi-cloud capability

Due in part to its portability, Kubernetes can host workloads running on a single cloud as well as workloads that are spread across multiple clouds. In addition, Kubernetes can easily scale its environment from one cloud to another.

These features mean that Kubernetes lends itself well to the multi-cloud strategies that many businesses are pursuing today. Other orchestrators may also work with multi-cloud infrastructures, but Kubernetes arguably goes above and beyond when it comes to multi-cloud flexibility. There are however other requirements involved when considering a multi-cloud strategy.

### Increased developer productivity

Kubernetes with its declarative constructs and its ops friendly approach has fundamentally changed deployment methodologies and it allows teams to use GitOps. Teams can scale and deploy faster than they ever could in the past. Instead of one deployment a month, teams can now deploy multiple times a day.

## Key elements of a Kubernetes-based application

cloud provider

K8S Cluster / nodes

pods

deployment - service - secret config map

secrets

persistance - pv and PVC

tls

hpa

deployments : helm chart, helm file, bash script

 

